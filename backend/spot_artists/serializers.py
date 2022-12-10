from rest_framework import serializers
from .models import SpotifyArtist


class SpotArtistSerializer(serializers.ModelSerializer):
    user_id = serializers.IntegerField(write_only=True)
    class Meta:
        model = SpotifyArtist
        fields = ['id', 'spotify_id', 'image', 'artist_name', 'genre', 'URI', 'user', 'user_id']
        depth = 1