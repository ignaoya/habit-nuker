from django.urls import path
from . import views

urlpatterns = [
    path('', views.HabitListAPIView.as_view(), name='habit_list'),
    path('create/', views.HabitCreateAPIView.as_view(), name='habit_create'),
    ]
