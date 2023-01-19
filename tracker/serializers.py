from rest_framework import serializers
from .models import Habit
from rest_framework.reverse import reverse


class HabitSerializer(serializers.ModelSerializer):
    update = serializers.SerializerMethodField()
    delete = serializers.SerializerMethodField()
    absolute_url = serializers.SerializerMethodField()

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
            'streaks',
            'update',
            'delete',
            'absolute_url',
        ]

    def get_update(self, obj):
        return reverse('habit_update', args=(obj.pk,))

    def get_delete(self, obj):
        return reverse('habit_delete', args=(obj.pk,))

    def get_absolute_url(self, obj):
        return reverse('habit_detail', args=(obj.pk,))
    