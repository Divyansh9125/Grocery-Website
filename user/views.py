from django.shortcuts import render
from django.http import HttpResponse
from django.views.decorators.csrf import csrf_exempt
from django.contrib.auth.models import User
from .models import Profile
from django.utils.crypto import get_random_string
import json

# Create your views here.
@csrf_exempt
def createProfile(request):
    #Checks for the POST request that we have sent from index.js using AJAX
    #Once it recieves the request, checks for its validity and parses the JSON that we have sent
    if request.method == 'POST':
        json_data = json.loads(request.body)
        fname = json_data['fname']
        lname = json_data['lname']
        email = json_data['email']
        phn = json_data['phn']
        password = json_data['password']
        address = json_data['address']
        g_id = get_random_string(length=9)
        if(User.objects.filter(email=email).exists()):
            return HttpResponse("Email already exists!", status=403)
        else:
            user = User(username=g_id, password=password, email=email, first_name=fname, last_name=lname)
            user.save()
            profile = Profile(user=user, phn_no=phn, address=address, g_id=g_id)
            profile.save()
            return HttpResponse(g_id, status=200)
    else:
        return HttpResponse('Failed!', status=400)


@csrf_exempt
def loginUser(request):
    if request.method == 'POST':
        json_data = json.loads(request.body)
        g_id = json_data['g_id']
        password = json_data['password']
        if(Profile.objects.filter(g_id=g_id).exists()):
            if(Profile.objects.get(g_id=g_id).user.password == password):
                return HttpResponse('Login done!', status=200)
            else:
                return HttpResponse('Sorry! Wrong G-ID or Password', status=403)
        else:
            return HttpResponse('Sorry! Wrong G-ID or Password', status=404)
    else:
        return HttpResponse('Sorry! Something went wrong.', status=400)
