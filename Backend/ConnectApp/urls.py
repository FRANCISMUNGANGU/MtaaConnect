from django.conf import settings
from django.conf.urls.static import static
from django.urls import path
from . import views

urlpatterns = [
    path("users/new/", views.UserCreateView.as_view(), name="new_user"),
    path("users/me/", views.UserProfileView.as_view(), name="my_profile"),
    path("users/<int:id>/", views.UserProfileAccessView.as_view(), name="user_profile"),
    path("users/me/edit/", views.UserProfileView.as_view(), name="edit_my_User"),
    path("users/me/delete/", views.UserProfileView.as_view(), name="delete_my_user"),

    path("channels/new/", views.ChannelDetailView.as_view(), name="new_channel"),
    path("channels/<int:id>/", views.ChannelDetailView.as_view(), name="get_channel"),
    path("channels/", views.ChannelBulkView.as_view(), name="get_channels"),
    path("channels/edit/<int:id>/", views.ChannelDetailView.as_view(), name="edit_channel"),
    path("channels/delete/<int:id>/", views.ChannelDetailView.as_view(), name="delete_channel"),

    path("publishers/new/", views.ChannelPublisherView.as_view(), name="new_channel_publisher"),
    path("publishers/", views.ChannelPublisherView.as_view(), name="get_channel_publisher(s)"),
    path("publishers/delete/", views.ChannelPublisherView.as_view(), name="delete_channel_publisher"),

    path("events/new/", views.EventDetailView.as_view(), name="new_event"),
    path("events/", views.EventBulkView.as_view(), name="get_events"),
    path("events/<int:id>/", views.EventDetailView.as_view(), name="get_event"),
    path("events/edit/<int:id>/", views.EventDetailView.as_view(), name="edit_event"),
    path("events/delete/<int:id>/", views.EventDetailView.as_view(), name="delete_event"),

    path("ads/new/", views.AdDetailView.as_view(), name="new_ad"),
    path("ads/", views.AdBulkView.as_view(), name="get_ads"),
    path("ads/<int:id>/", views.AdDetailView.as_view(), name="get_ad"),
    path("ads/edit/<int:id>/", views.AdDetailView.as_view(), name="edit_ad"),
    path("ads/delete/<int:id>/", views.AdDetailView.as_view(), name="delete_ad"),

    path("ad/services/new/", views.ServiceDetailView.as_view(), name="new_service"),
    path("ad/services/", views.ServiceBulkView.as_view(), name="get_services"),
    path("ad/services/<int:id>/", views.ServiceDetailView.as_view(), name="get_service"),
    path("ad/services/edit/<int:id>/", views.ServiceDetailView.as_view(), name="edit_service"),
    path("ad/services/delete/<int:id>/", views.ServiceDetailView.as_view(), name="delete_service"),
]

if settings.DEBUG:
    urlpatterns += static(
        settings.MEDIA_URL,
        document_root=settings.MEDIA_ROOT
    )
