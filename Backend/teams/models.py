from django.db import models

class Team(models.Model):
    name = models.CharField(max_length=100)
    logo = models.BinaryField(null=True, blank=True)  # 이미지 바이너리 데이터 저장
    introduction = models.TextField()
    history = models.TextField(blank=True)

class Player(models.Model):
    team = models.ForeignKey(Team, on_delete=models.CASCADE, related_name='players', null=True)
    name = models.CharField(max_length=50)
    birth_date = models.DateField()
    gender_choices = [
        ('M', '남성'),
        ('F', '여성'),
    ]
    gender = models.CharField(max_length=1, choices=gender_choices)
    number = models.PositiveIntegerField()
    photo = models.BinaryField(null=True, blank=True)  # 이미지 바이너리 데이터 저장

class GalleryItem(models.Model):
    team = models.ForeignKey(Team, on_delete=models.CASCADE, related_name='gallery')
    media_url = models.URLField()
    description = models.TextField(blank=True)
    created_at = models.DateTimeField(auto_now_add=True)

class Notice(models.Model):
    team = models.ForeignKey(Team, on_delete=models.CASCADE, related_name='notices')
    title = models.CharField(max_length=200)
    content = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)

class Application(models.Model):
    name = models.CharField(max_length=100)
    contact_info = models.CharField(max_length=200)
    message = models.TextField(blank=True)
    created_at = models.DateTimeField(auto_now_add=True)

class Contact(models.Model):
    team = models.OneToOneField(Team, on_delete=models.CASCADE)
    email = models.EmailField()
    kakao_id = models.CharField(max_length=100, blank=True)
    phone = models.CharField(max_length=20, blank=True)

    def __str__(self):
        return f"{self.name} ({self.number}번)"
