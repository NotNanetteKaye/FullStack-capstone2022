from django.shortcuts import render
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated, AllowAny
from rest_framework.response import Response
from rest_framework import status
from .models import UpcomingEvent
from .serializers import UpcomingEventSerializer

@api_view(['GET', 'POST'])
@permission_classes([AllowAny])
def upcoming_events_list(request):
    events = UpcomingEvent.objects.all()
    serializer = UpcomingEventSerializer(events, many=True)
    return Response(serializer.data)
