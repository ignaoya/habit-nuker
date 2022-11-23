from django.shortcuts import render
from rest_framework import generics

from .serializers import HabitSerializer
from .models import Habit


class HabitListAPIView(generics.ListAPIView):
    queryset = Habit.objects.all()
    serializer_class = HabitSerializer