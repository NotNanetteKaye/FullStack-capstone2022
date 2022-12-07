from django.db import models
from authentication.models import User
from django.contrib.postgres.fields import ArrayField

# Create your models here.

class UpcomingEvent(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    title = models.CharField(max_length=300)
    when = models.CharField(max_length=300)
    address = models.CharField(max_length=300)
    description = models.CharField(max_length=280)
    image = models.CharField(max_length=280)
    link = models.CharField(max_length=300)