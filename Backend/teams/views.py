from rest_framework import viewsets
from .models import Team, Player, GalleryItem, Notice, Application, Contact
from .serializers import *

class TeamViewSet(viewsets.ModelViewSet):
    queryset = Team.objects.all()
    serializer_class = TeamSerializer

class PlayerViewSet(viewsets.ModelViewSet):
    queryset = Player.objects.all().order_by('number')  # 등번호 오름차순
    serializer_class = PlayerSerializer

class GalleryViewSet(viewsets.ModelViewSet):
    queryset = GalleryItem.objects.all()
    serializer_class = GalleryItemSerializer

class NoticeViewSet(viewsets.ModelViewSet):
    queryset = Notice.objects.all()
    serializer_class = NoticeSerializer

class ApplicationViewSet(viewsets.ModelViewSet):
    queryset = Application.objects.all()
    serializer_class = ApplicationSerializer

class ContactViewSet(viewsets.ModelViewSet):
    queryset = Contact.objects.all()
    serializer_class = ContactSerializer
