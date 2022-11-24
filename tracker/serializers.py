from rest_framework import serializers
from .models import Habit


class HabitSerializer(serializers.ModelSerializer):
    class Meta:
        model = Habit
        fields = [
            "id",
            "name",
            "category",
            "measure_of_completion",
            "streaks",
        ]

class HabitDetailSerializer(serializers.ModelSerializer):
    class Meta:
        model = Habit
        fields = [
            'id',
            'name',
            'user',
            'category',
            'goal_description',
            'quantitative_goal',
            'quantitative_goal_units',
            'measure_of_completion',
        ]
