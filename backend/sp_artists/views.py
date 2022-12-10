from django.shortcuts import render
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated, AllowAny
from rest_framework.response import Response
from rest_framework import status
from .models import SpArtists
from .serializers import SpArtistsSerializer
from django.shortcuts import get_object_or_404

# Create your views here.

@api_view(['GET', 'POST'])
@permission_classes([AllowAny])
def artist_list(request):
    if request.method == 'GET':
        artists = SpArtists.objects.all()
        serializer = SpArtistsSerializer(artists, many=True)
        return Response(serializer.data)
    elif request.method == 'POST':
        serializer = SpArtistsSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return Response(serializer.errors, status=status.HTTP_201_CREATED)

@api_view(['GET', 'PUT', 'DELETE'])
@permission_classes([AllowAny])
def artist_detail(request, pk):
    artist = get_object_or_404(SpArtists, pk=pk)
    if request.method == 'GET':
        serializer = SpArtistsSerializer(artist)
        return Response(serializer.data)
    elif request.method == 'PUT':
        serializer = SpArtistsSerializer(artist, data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return Response(serializer.data)
    elif request.method == 'DELETE':
        artist.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)
