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

@api_view(['GET', 'PUT', 'POST', 'DELETE'])
@permission_classes([IsAuthenticated])
def business_detail(request, pk):
    print(
        'User ', f"{request.user.id} {request.user.email} {request.user.username}"
    )
    if request.method == 'GET':
        business = Business.objects.filter(user_id=request.user.id)
        serializer = BusinessSerializer(business, many=True)
        return Response(serializer.data)
    elif request.method == 'PUT':
        business = get_object_or_404(Business, pk=pk)
        serializer = BusinessSerializer(business, data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return Response(serializer.data)
    elif request.method == 'DELETE':
        business = get_object_or_404(Business, pk=pk)
        business.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)

