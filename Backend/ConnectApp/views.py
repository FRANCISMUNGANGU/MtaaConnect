from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated
from django_filters.rest_framework import DjangoFilterBackend
from rest_framework import status
from django.utils.text import slugify
from django.utils import timezone
from django.shortcuts import get_object_or_404
from . import serializers, models, filters, utils
from auth_ import serializers as szr

class UserCreateView (APIView):

    def post(self, request):
        serializer = szr.UserCreationSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        utils.lazy_general_subscribe(serializer.instance)
        serializer.save()
        return Response(status=status.HTTP_201_CREATED)

class UserProfileAccessView (APIView):
    permission_classes = [IsAuthenticated]

    def get(self, request, id):
        user = get_object_or_404(models.User, pk=id)
        serializer = szr.UserSerializer(user)
        return Response(serializer.data)

class UserProfileView (APIView):
    permission_classes = [IsAuthenticated]

    def get(self, request):
        user = request.user
        serializer = szr.UserSerializer(user)
        return Response(serializer.data)

    def patch (self, request):
        user = request.user

        general_channels = models.Channel.objects.filter(kind="general")
        user_subs = set(user.subscriptions)
        user_subs |= {t.slug for t in general_channels}
        user.subscriptions = list(user_subs)
        user.save(update_fields=["subscriptions"])

        serializer = szr.UserSerializer(user, data=request.data, partial=True)
        serializer.is_valid(raise_exception=True)
        serializer.save()

        return Response(serializer.data)

    def delete (self, request):
        user = request.user
        user.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)


class ChannelBulkView (APIView):
    permission_classes = [IsAuthenticated]

    def get(self, request):
        channels = models.Channel.objects.all()
        serializer = serializers.ChannelSerializer(channels, many=True)
        return Response(serializer.data)

class ChannelDetailView (APIView):
    permission_classes = [IsAuthenticated]

    def get (self, request, id):
        channel = get_object_or_404(models.Channel, pk=id)
        serializer = serializers.ChannelSerializer(channel)
        return Response(serializer.data)

    def post (self, request):
        channel = serializers.ChannelSerializer(data=request.data)
        channel.is_valid(raise_exception=True)
        channel_instance = channel.save()
        publisher = serializers.ChannelPublisherSerializer(
                data={
                    "publisher": request.user.id,
                    "channel": channel_instance.id
                }
            )
        publisher.is_valid(raise_exception=True)
        publisher.save()
        return Response(channel.data)

    def patch (self, request, id):
        channel = get_object_or_404(models.Channel, pk=id)
        serializer = serializers.ChannelSerializer(channel, request.data, partial=True)
        serializer.is_valid(raise_exception=True)
        patched_channel = serializer.save()
        patched_channel.slug = slugify(patched_channel.name)
        return Response(serializer.data)

    def delete (self, request, id):
        channel = get_object_or_404(models.Channel, pk=id)
        channel.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)

class ChannelPublisherView (APIView):
    permission_classes = [IsAuthenticated]

    def get (self, request):
        channel_id = request.data.get("channel_id", 0)
        publishers = models.ChannelPublisher.objects.filter(channel=channel_id)
        serializer = serializers.ChannelPublisherSerializer(publishers, many=True)
        return Response(serializer.data)

    def post (self, request):
        channel_id = request.data.get("channel_id", 0)
        channel = get_object_or_404(models.Channel, pk=channel_id)
        publisher = serializers.ChannelPublisherSerializer(
                    data={
                        "publisher": request.user.id,
                        "channel": channel.id
                    }
                )
        publisher.is_valid(raise_exception=True)
        publisher.save()
        return Response(status=status.HTTP_201_CREATED)

    def delete (self, request):
        channel_id = request.data.get("channel_id", 0)
        publisher = models.ChannelPublisher.objects.filter(publisher=request.user.id, channel=channel_id)
        publisher.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)

class EventBulkView (APIView):
    permission_classes = [IsAuthenticated]

    def get (self, request):
        last_event_sync = request.user.last_event_sync
        subs = request.user.subscriptions
        events = models.Event.objects.all()
        if last_event_sync is not None:
            events = events.filter(date_registered__gte=last_event_sync)
        if len(subs) > 0:
            events = events.filter(channel__slug__in=subs)
        filterset = filters.EventFilter(request.GET, queryset=events)
        if not filterset.is_valid():
            return Response(filterset.errors, status=status.HTTP_400_BAD_REQUEST)
        events = filterset.qs
        serializer = serializers.EventSerializer(events, many=True)
        request.user.last_event_sync = timezone.now()
        request.user.save(update_fields=["last_event_sync"])
        return Response(serializer.data)


class EventDetailView (APIView):
    permission_classes = [IsAuthenticated]

    def get (self, request, id):
        event = get_object_or_404(models.Event, pk=id)
        serializer = serializers.EventSerializer(event)
        return Response(serializer.data)

    def post (self, request):
        event = serializers.EventSerializer(data=request.data)
        event.is_valid(raise_exception=True)
        event.save(registrar=request.user)
        return Response(event.data, status=status.HTTP_201_CREATED)

    def patch (self, request, id):
        event = get_object_or_404(models.Event, pk=id)
        if event.registrar != request.user:
            return Response(status=status.HTTP_403_FORBIDDEN)
        serializer = serializers.EventSerializer(event, data=request.data, partial=True)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return Response(serializer.data)

    def delete (self, request, id):
        event = get_object_or_404(models.Event, pk=id)
        if event.registrar != request.user:
            return Response(status=status.HTTP_403_FORBIDDEN)
        event.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)

class AdBulkView (APIView):
    permission_classes = [IsAuthenticated]

    def get (self, request):
        ads = models.Advert.objects.all()
        filterset = filters.AdFilter(request.GET, queryset=ads)
        if not filterset.is_valid():
            return Response(filterset.errors, status=status.HTTP_400_BAD_REQUEST)
        ads = filterset.qs
        serializer = serializers.AdvertSerializer(ads, many=True)
        return Response(serializer.data)


class AdDetailView (APIView):
    permission_classes = [IsAuthenticated]

    def get (self, request, id):
        ad = get_object_or_404(models.Advert, pk=id)
        serializer = serializers.AdvertSerializer(ad)
        return Response(serializer.data)

    def post (self, request):
        ad = serializers.AdvertSerializer(data=request.data)
        ad.is_valid(raise_exception=True)
        ad.save(advertizer=request.user)
        return Response(ad.data, status=status.HTTP_201_CREATED)

    def patch (self, request, id):
        ad = get_object_or_404(models.Advert, pk=id)
        if ad.advertizer != request.user:
            return Response(status=status.HTTP_403_FORBIDDEN)
        serializer = serializers.AdvertSerializer(ad, data=request.data, partial=True)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return Response(serializer.data)

    def delete (self, request, id):
        ad = get_object_or_404(models.Advert, pk=id)
        if ad.advertiser != request.user:
            return Response(status=status.HTTP_403_FORBIDDEN)
        ad.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)

class ServiceBulkView (APIView):
    permission_classes = [IsAuthenticated]

    def get (self, request):
        services = models.Service.objects.all()
        filterset = filters.ServiceFilter(request.GET, queryset=services)
        if not filterset.is_valid():
            return Response(filterset.errors, status=status.HTTP_400_BAD_REQUEST)
        services = filterset.qs
        serializer = serializers.ServiceGetSerializer(services, many=True)
        return Response(serializer.data)

class ServiceDetailView (APIView):
    permission_classes = [IsAuthenticated]

    def get (self, request, id):
        service = get_object_or_404(models.Service, pk=id)
        serializer = serializers.ServiceGetSerializer(service)
        return Response(serializer.data)

    def post (self, request):
        service = serializers.ServiceCreateSerializer(data=request.data)
        service.is_valid(raise_exception=True)
        service.save()
        return Response(service.data, status=status.HTTP_201_CREATED)

    def patch (self, request, id):
        service = get_object_or_404(models.Service, pk=id)
        if service.ad.advertizer != request.user:
            return Response(status=status.HTTP_403_FORBIDDEN)
        serializer = serializers.ServicePatchSerializer(service, data=request.data, partial=True)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return Response(serializer.data)

    def delete (self, request, id):
        service = get_object_or_404(models.Advert, pk=id)
        if service.ad.advertiser != request.user:
            return Response(status=status.HTTP_403_FORBIDDEN)
        service.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)
