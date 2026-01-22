from django.db import models
from auth_.models import User

class Channel (models.Model):
    slug = models.SlugField(unique=True)
    name = models.CharField(max_length=100, null=False, blank=False)
    kind = models.CharField(
            max_length=20,
            choices=[
                ("general", "General"),
                ("club", "Club"),
                ("event", "Event")
            ]
        )

    def __str__(self):
        return self.name

class ChannelPublisher (models.Model):
    publisher = models.ForeignKey(User, on_delete=models.PROTECT)
    channel = models.ForeignKey(Channel, on_delete=models.CASCADE)

    def __str__(self):
        return self.user.name

class Event(models.Model):
    registrar = models.ForeignKey(User, on_delete=models.PROTECT)
    title = models.CharField(max_length=100, null=False, blank=False)
    description = models.TextField(null=True, blank=True)
    pamphlet = models.ImageField(upload_to='events/', null=True, blank=True)
    channel = models.ForeignKey(Channel, on_delete=models.CASCADE)
    date_registered = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.title

class Advert(models.Model):
    advertizer = models.ForeignKey(User, on_delete=models.PROTECT)
    poster = models.ImageField(upload_to='ads/', null=True, blank=True)
    title = models.CharField(max_length=100, null=False, blank=False)
    details = models.TextField(null=True, blank=True)
    category = models.CharField(max_length=100, null=False, blank=False)
    date_registered = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.title

