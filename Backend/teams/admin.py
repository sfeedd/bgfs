from django.contrib import admin
from .models import Team, Player, GalleryItem, Notice, Application, Contact
from .forms import PlayerForm

class TeamAdmin(admin.ModelAdmin):
    list_display = ('name', 'logo', 'introduction', 'history')
    search_fields = ('name', 'introduction')

class PlayerAdmin(admin.ModelAdmin):
    form = PlayerForm
    list_display = ('name', 'number', 'gender', 'birth_date')
    
class GalleryItemAdmin(admin.ModelAdmin):
    list_display = ('team', 'media_url', 'description', 'created_at')
    search_fields = ('team__name', 'media_url', 'description')
    
class NoticeAdmin(admin.ModelAdmin):
    list_display = ('team', 'title', 'content', 'created_at')
    search_fields = ('team__name', 'title')
    
class ApplicationAdmin(admin.ModelAdmin):
    list_display = ('name', 'contact_info', 'message', 'created_at')
    search_fields = ('name', 'contact_info')
    
class ContactAdmin(admin.ModelAdmin):
    list_display = ('team', 'email', 'kakao_id', 'phone')
    search_fields = ('team__name', 'email', 'kakao_id')

admin.site.register(Team, TeamAdmin)
admin.site.register(Player, PlayerAdmin)
admin.site.register(GalleryItem, GalleryItemAdmin)
admin.site.register(Notice, NoticeAdmin)
admin.site.register(Application, ApplicationAdmin)
admin.site.register(Contact, ContactAdmin)
