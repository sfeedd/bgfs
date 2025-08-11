from django.contrib import admin
from django.urls import include, path
from rest_framework import routers
from teams import views

router = routers.DefaultRouter()
router.register(r'teams', views.TeamViewSet)
router.register(r'members', views.MemberViewSet)
router.register(r'gallery', views.GalleryViewSet)
router.register(r'notices', views.NoticeViewSet)
router.register(r'applications', views.ApplicationViewSet)
router.register(r'contacts', views.ContactViewSet)

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include(router.urls)),  # API 경로
]
