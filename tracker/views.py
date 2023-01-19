from django.shortcuts import render
from rest_framework import generics

from .serializers import HabitSerializer
from .models import Habit


class HabitListAPIView(generics.ListAPIView):
    queryset = Habit.objects.all()
    serializer_class = HabitSerializer


class HabitRetrieveAPIView(generics.RetrieveAPIView):
    lookup_field = "id"
    queryset = Habit.objects.all()
    serializer_class = HabitSerializer
    

class HabitCreateAPIView(generics.CreateAPIView):
    queryset = Habit.objects.all()
    serializer_class = HabitSerializer


class HabitRetrieveUpdateAPIView(generics.RetrieveUpdateAPIView):
    lookup_field = "id"
    queryset = Habit.objects.all()
    serializer_class = HabitSerializer

class HabitDeleteAPIView(generics.DestroyAPIView):
    lookup_field = "id"
    queryset = Habit.objects.all()
