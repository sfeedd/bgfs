from django.contrib import admin
from .models import Player
from .forms import PlayerForm

class PlayerAdmin(admin.ModelAdmin):
    form = PlayerForm
    list_display = ('name', 'number', 'gender', 'birth_date')

admin.site.register(Player, PlayerAdmin)
