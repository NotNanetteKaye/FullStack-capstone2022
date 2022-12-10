from rest_framework import serializers
from .models import SpArtists

class SpArtistsSerializer(serializers.ModelSerializer):
    user_id = serializers.IntegerField(write_only=True)
    class Meta:
        model = SpArtists
        fields = ['id', 'spotify_id', 'image', 'artist_name', 'genre', 'URI', 'user', 'user_id']
        depth = 1