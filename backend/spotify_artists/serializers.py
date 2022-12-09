from rest_framework import serializers
from .models import SpotifyArtist


class SpotifyArtistSerializer(serializers.ModelSerializer):
    class Meta:
        model = SpotifyArtist
        fields = ['id', 'spotify_id', 'image', 'artist_name', 'genre', 'URI', 'user_id']
        depth = 1

    user_id = serializers.IntegerField(write_only=True)