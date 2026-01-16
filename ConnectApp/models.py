from django.db import models
from django.contrib.auth.models import AbstractUser
from django.contrib.contenttypes.fields import GenericForeignKey
from django.contrib.contenttypes.models import ContentType



class User(AbstractUser):
   
    phone_number = models.CharField(max_length=15, null=True)
    middle_name = models.CharField(max_length=25, null=True)
    gender = models.CharField(max_length=1, null=False)

class Event(models.Model):
    title = models.CharField(max_length=100, null=False, blank=False)
    description = models.TextField(null=True, blank=True)
    date = models.DateTimeField(null=False)
    # Generic foreign key for organizer (can be User or Club)
    content_type = models.ForeignKey(ContentType, on_delete=models.CASCADE)
    object_id = models.PositiveIntegerField()
    organizer = GenericForeignKey('content_type', 'object_id')

    def get_organizer_name(self):
        return str(self.organizer)



class Advertiser(models.Model):
    advertizer = models.OneToOneField(
        User, on_delete=models.CASCADE,
        related_name='advertiser_profile',
    )
    ad_poster = models.ImageField(upload_to='ads/', null=True, blank=True)
    ad_name = models.CharField(max_length=100, null=False, blank=False)
    ad_details = models.URLField(max_length=255, null=True, blank=True)


class Clubs(models.Model):
    name = models.CharField(max_length=100, null=False, blank=False)
    description = models.TextField(null=True, blank=True)
    club_leader = models.ForeignKey(
        User, on_delete=models.CASCADE,
        related_name='led_clubs',
    )
    meeting_date = models.DateField()
    meeting_location = models.CharField(max_length=255, null=True, blank=True)

    def __str__(self):
        return self.name

