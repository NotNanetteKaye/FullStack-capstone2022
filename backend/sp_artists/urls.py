from django.urls import path
from . import views

urlpatterns = [
    path('', views.artist_list),
    path('<pk>/', views.artist_detail)
]