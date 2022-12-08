from django.urls import path
from . import views

urlpatterns = [
    path('', views.business_list),
    path('<pk>/', views.business_detail),
]