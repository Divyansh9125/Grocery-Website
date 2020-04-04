from django.shortcuts import render

# Create your views here.


def homeView(request):
    return render(request, 'login/index.html')


def homeLoggedInView(request):
    return render(request, 'home/index.html')
