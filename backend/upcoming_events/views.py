from django.shortcuts import render
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated, AllowAny
from rest_framework.response import Response
from rest_framework import status
from .models import UpcomingEvent
from .serializers import UpcomingEventSerializer
from django.shortcuts import get_object_or_404

@api_view(['GET', 'POST'])
@permission_classes([AllowAny])
def upcoming_events_list(request):
    if request.method == 'GET':
        events = UpcomingEvent.objects.all()
        serializer = UpcomingEventSerializer(events, many=True)
        return Response(serializer.data)

    elif request.method == 'POST':
        serializer = UpcomingEventSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return Response(serializer.errors, status=status.HTTP_201_CREATED)

@api_view(['GET'])
def upcoming_events_detail(request, pk):
    event = get_object_or_404(UpcomingEvent, pk=pk)
    serializer = UpcomingEventSerializer(event)
    return Response(serializer.data)