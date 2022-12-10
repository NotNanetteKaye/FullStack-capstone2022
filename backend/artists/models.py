from django.db import models
from authentication.models import User

# Create your models here.
class Artist(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    spotify_id = models.CharField(max_length=280)
    image = models.CharField(max_length=300)
    artist_name = models.CharField(max_length=280)
    genre = models.CharField(max_length=280)
    URI = models.CharField(max_length=280)
