from django.urls import path
from . import views

urlpatterns = [
    path('', views.upcoming_events_list),
    path('<pk>/', views.upcoming_events_detail),
]