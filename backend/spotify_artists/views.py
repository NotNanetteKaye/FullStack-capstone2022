from django.shortcuts import render
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated, AllowAny
from rest_framework.response import Response
from rest_framework import status
from .models import Business
from .serializers import BusinessSerializer
from django.shortcuts import get_object_or_404

@api_view(['GET', 'POST'])
@permission_classes([AllowAny])
def business_list(request):
    if request.method == 'GET':
        events = Business.objects.all()
        serializer = BusinessSerializer(events, many=True)
        return Response(serializer.data)

    elif request.method == 'POST':
        serializer = BusinessSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return Response(serializer.errors, status=status.HTTP_201_CREATED)

@api_view(['GET', 'PUT', 'DELETE'])
@permission_classes([AllowAny])
def business_detail(request, pk):
    event = get_object_or_404(Business, pk=pk)
    if request.method == 'GET':
        serializer = BusinessSerializer(event)
        return Response(serializer.data)
    elif request.method == 'PUT':
        serializer = BusinessSerializer(event, data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return Response(serializer.data)
    elif request.method == 'DELETE':
        event.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)