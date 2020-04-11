from django.db import models

# Create your models here.
class Vegetable(models.Model):
    """
    This is model for storing the vegatables that we have in our store.
    """
    name = models.CharField(max_length=250, unique=True)
    img = models.ImageField(upload_to='vegetable')
    price = models.IntegerField()
    avail = models.BooleanField(blank=False)

class Fruits(models.Model):
    """
    This is model for storing the fruits that we have in our store.
    """
    name = models.CharField(max_length=250, unique=True)
    img = models.ImageField(upload_to='fruit')
    price = models.IntegerField()

class Juices(models.Model):
    """
    This is model for storing the juices that we have in our store.
    """
    name = models.CharField(max_length=250)
    img = models.ImageField(upload_to='juices')
    ingd = models.CharField(max_length=1000)
    price = models.IntegerField()