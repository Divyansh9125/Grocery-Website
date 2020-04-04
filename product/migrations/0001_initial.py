# Generated by Django 3.0.5 on 2020-04-03 21:01

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Fruits',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=250, unique=True)),
                ('img', models.ImageField(upload_to='fruit')),
                ('price', models.IntegerField()),
            ],
        ),
        migrations.CreateModel(
            name='Juices',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=250)),
                ('img', models.ImageField(upload_to='juices')),
                ('ingd', models.CharField(max_length=1000)),
                ('price', models.IntegerField()),
            ],
        ),
        migrations.CreateModel(
            name='Vegetable',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=250, unique=True)),
                ('img', models.ImageField(upload_to='vegetable')),
                ('price', models.IntegerField()),
            ],
        ),
    ]