from django.contrib import admin
from .models import User, Event, Service, Channel
admin.site.register(User)
admin.site.register(Event)
admin.site.register(Service)
admin.site.register(Channel)