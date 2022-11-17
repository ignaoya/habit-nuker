from django.db import models
from django.contrib.auth.models import AbstractUser


class NukeUser(AbstractUser):
    name = models.CharField(max_length=100)


class Category(models.Model):
    name = models.CharField(max_length=50)


class Habit(models.Model):
    name = models.CharField(max_length=50)
    user = models.ForeignKey(NukeUser, on_delete=models.CASCADE)
    category = models.ForeignKey(Category, on_delete=models.SET_NULL,
        null=True, blank=True)
    measure_of_completion = models.IntegerField(default=1)

class HabitGoal(models.Model):
    name = models.CharField(max_length=50)
    description = models.TextField()
    habit = models.OneToOneField(Habit, on_delete=models.CASCADE)
    quantitative_goal = models.IntegerField(default=100)
    quantitative_goal_units = models.CharField(max_length=50, default="%")



