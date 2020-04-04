from django.db import models
from django.contrib.auth.models import User

# Create your models here.

class Profile(models.Model):
    """
    This model contains details about the customer and extends Django's default User model.
    """
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    address = models.CharField(max_length=1000, blank=False, default="None")
    phn_no = models.IntegerField(blank=False, default=1111111111)
    g_id = models.CharField(max_length=9, unique=True)

    def __str__(self):
        return self.g_id
