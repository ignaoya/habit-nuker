from django.db import models
from django.contrib.auth.models import AbstractUser


class NukeUser(AbstractUser):
    pass


class Category(models.Model):
    name = models.CharField(max_length=50)

    def __str__(self):
        return f"{self.name}"


class Habit(models.Model):
    name = models.CharField(max_length=50)
    user = models.ForeignKey(NukeUser, on_delete=models.CASCADE)
    category = models.ForeignKey(Category, on_delete=models.SET_NULL,
       null=True, blank=True)
    goal_description = models.TextField()
    quantitative_goal = models.IntegerField(default=100)
    quantitative_goal_units = models.CharField(max_length=50, default="%")
    measure_of_completion = models.IntegerField(default=1)
    
    def __str__(self):
        return f"{self.name} - {self.user}"


class Challenge(models.Model):
    name = models.CharField(max_length=200)
    user_habits = models.ManyToManyField(Habit)

    def __str__(self):
        return f"{self.name}"


    



