from django import forms
from .models import Team, Player

# class TeamForm(forms.ModelForm):
#     photo_file = forms.ImageField(required=False)  # 업로드용 필드

#     class Meta:
#         model = Team
#         fields = ['name', 'logo', 'introduction', 'history']

#     def save(self, commit=True):
#         instance = super().save(commit=False)
#         if self.cleaned_data.get('logo'):
#             instance.photo = self.cleaned_data['logo'].read()  # 파일을 BinaryField에 저장
#         if commit:
#             instance.save()
#         return instance

class PlayerForm(forms.ModelForm):
    photo_file = forms.ImageField(required=False)  # 업로드용 필드

    class Meta:
        model = Player
        fields = ['name', 'birth_date', 'gender', 'number', 'photo_file']

    def save(self, commit=True):
        instance = super().save(commit=False)
        if self.cleaned_data.get('photo_file'):
            instance.photo = self.cleaned_data['photo_file'].read()  # 파일을 BinaryField에 저장
        if commit:
            instance.save()
        return instance