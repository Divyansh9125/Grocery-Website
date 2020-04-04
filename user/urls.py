from django.urls import path
from . import views

urlpatterns = [
    path('createprofile/', views.createProfile, name='create_profile'),
    path('login/', views.loginUser, name='login'),
]