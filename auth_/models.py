from django.db import models
from django.contrib.auth.models import AbstractUser
from django.contrib.postgres.fields import ArrayField


class User(AbstractUser):
    phone_number = models.CharField(max_length=10, null=True)
    middle_name = models.CharField(max_length=25, null=True)
    gender = models.CharField(max_length=1, null=False)
    subscriptions = ArrayField(
                models.SlugField(),
                default=list,
                blank=True
            )
    last_event_sync = models.DateTimeField(null=True, blank=True)
    profile_pic = models.ImageField(upload_to="profiles/", null=True, blank=True)

    def __str__ (self):
        return self.username
