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

class ServiceCreateSerializer (serializers.ModelSerializer):
    class Meta:
        model = models.Service
        fields = ["ad", "title", "details", "poster", "price"]

class ServiceGetSerializer (serializers.ModelSerializer):
    rating = serializers.SerializerMethodField()

    class Meta:
        model = models.Service
        fields = ["ad", "title", "details", "poster", "price", "rating"]

    def get_rating (self, obj):
        if obj.rating_count == 0:
            return None
        return obj.rating_sum/obj.rating_count

class ServicePatchSerializer (serializers.ModelSerializer):
    rating_delta = serializers.IntegerField(min_value=1, max_value=5, write_only=True)
    rating_op = serializers.CharField(max_length=1, write_only=True)
    rating_edit = serializers.BooleanField(default=True, write_only=True)
    rating = serializers.SerializerMethodField()

    class Meta:
        model = models.Service
        fields = ["ad", "title", "details", "poster",
                  "price", "rating_delta", "rating_op",
                  "rating_edit", "rating"
                  ]

    def update (self, instance, validated_data):
        delta = validated_data.get("rating_delta")
        op = validated_data.get("rating_op")
        edit = validated_data.get("rating_edit", False)

        validated_data.pop("rating_delta", None)
        validated_data.pop("rating_op", None)
        validated_data.pop("rating_edit", None)

        if op not in ["+", "-"]:
            raise serializers.ValidationError(
                    {"rating_op": "Must be '+' or '-'."}
                )

        if op == "+":
            instance.rating_sum += delta
        else:
            instance.rating_sum -= delta

        if not edit:
            instance.rating_count += 1

        for attr, value in validated_data.items():
            setattr(instance, attr, value)

        instance.save()
        return instance

    def get_rating (self, obj):
        if obj.rating_count == 0:
            return None
        return obj.rating_sum/obj.rating_count

