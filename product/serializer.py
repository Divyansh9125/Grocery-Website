from rest_framework import serializers
from .models import *

class availabilitySerializer(serializers.ModelSerializer):
    class Meta:
        model = Vegetable
        fields = ['avail']