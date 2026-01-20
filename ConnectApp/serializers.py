from rest_framework import serializers
from django.utils.text import slugify
from . import models

class ChannelSerializer (serializers.ModelSerializer):
    class Meta:
        model = models.Channel
        fields = "__all__"
        read_only_fields = ["id", "slug"]

    def create (self, validated_data):
        validated_data["slug"] = slugify(validated_data["name"])
        return super().create(validated_data)

class ChannelPublisherSerializer (serializers.ModelSerializer):
    class Meta:
        model = models.ChannelPublisher
        fields = "__all__"
        read_only_fields = ["id"]

class EventSerializer (serializers.ModelSerializer):
    class Meta:
        model = models.Event
        fields = "__all__"
        read_only_fields = ["id", "registrar", "date_registered"]

class AdvertSerializer (serializers.ModelSerializer):
    class Meta:
        model = models.Advert
        fields = "__all__"
        read_only_fields = ["id", "advertizer", "date_registered"]
