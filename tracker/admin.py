from django.contrib import admin

from .models import NukeUser, Category, Habit, Challenge


admin.site.register(NukeUser)
admin.site.register(Category)
admin.site.register(Habit)
admin.site.register(Challenge)

