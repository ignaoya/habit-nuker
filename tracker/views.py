from django.shortcuts import render
from rest_framework import generics

from .serializers import HabitSerializer, HabitDetailSerializer
from .models import Habit


class HabitListAPIView(generics.ListAPIView):
    queryset = Habit.objects.all()
    serializer_class = HabitSerializer


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
