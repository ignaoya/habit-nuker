import json
from authlib.integrations.django_client import OAuth
from django.conf import settings
from django.shortcuts import render, redirect
from django.urls import reverse
from rest_framework import generics
from urllib.parse import quote_plus, urlencode

from .serializers import HabitSerializer, HabitDetailSerializer
from .models import Habit


oauth = OAuth()

oauth.register(
    "auth0",
    client_id=settings.AUTH0_CLIENT_ID,
    client_secret=settings.AUTH0_CLIENT_SECRET,
    client_kwargs={
        "scope": "openid profile email",
    },
    server_metadata_url=f"https://{settings.AUTH0_DOMAIN}/.well-known/openid-configuration",
)

def login(request):
    return oauth.auth0.authorize_redirect(
            request, request.build_absolute_uri(reverse("callback"))
            )

def callback(request):
    token = oauth.auth0.authorize_access_token(request)
    request.session["user"] = token
    return redirect(request.build_absolute_uri(reverse("habit_list")))

def logout(request):
    request.session.clear()

    return redirect(
        f"https://{settings.AUTH0_DOMAIN}/v2/logout?"
        + urlencode(
            {
                "returnTo": request.build_absolute_uri(reverse("habit_list")),
                "client_id": settings.AUTH0_CLIENT_ID,
            },
            quote_via=quote_plus,
        ),
    )


class HabitListAPIView(generics.ListAPIView):
    queryset = Habit.objects.all()
    serializer_class = HabitSerializer

    def get_serializer_context(self):
        context = super().get_serializer_context()
        context["session"] = self.request.session.get("user")
        context["pretty"] = json.dumps(self.request.session.get("user"), indent=4)
        return context


class HabitRetrieveAPIView(generics.RetrieveAPIView):
    lookup_field = "id"
    queryset = Habit.objects.all()
    serializer_class = HabitDetailSerializer
    

class HabitCreateAPIView(generics.CreateAPIView):
    queryset = Habit.objects.all()
    serializer_class = HabitDetailSerializer


class HabitRetrieveUpdateAPIView(generics.RetrieveUpdateAPIView):
    lookup_field = "id"
    queryset = Habit.objects.all()
    serializer_class = HabitDetailSerializer

class HabitDeleteAPIView(generics.DestroyAPIView):
    lookup_field = "id"
    queryset = Habit.objects.all()
