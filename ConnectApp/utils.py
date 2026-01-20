from .models import Channel
from auth_.models import User

def lazy_general_subscribe(user: User):
    general_channels = Channel.objects.filter(kind="general")
    for channel in general_channels:
        if channel.slug not in user.subscriptions:
            user.subscriptions.append(channel.slug)
