from django.urls import path
from . import views

urlpatterns = [
    path('', views.homeView, name='home'),
    path('home/', views.homeLoggedInView, name='home_after_login')
]