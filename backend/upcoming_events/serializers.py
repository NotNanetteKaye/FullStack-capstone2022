from rest_framework import serializers
from .models import UpcomingEvent


class UpcomingEventSerializer(serializers.ModelSerializer):
    class Meta:
        model = UpcomingEvent
        fields = ['id', 'user', 'title', 'when', 'address', 'description', 'image', 'link']
        depth = 1