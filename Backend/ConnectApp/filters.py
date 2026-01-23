import django_filters as filters
from . import models

class EventFilter (filters.FilterSet):
    class Meta:
        model = models.Event
        fields = {
                "title": ["contains"],
                "description": ["contains"],
                "channel": ["exact"],
                "date_registered": ["gte", "lte"]
            }

class AdFilter (filters.FilterSet):
    class Meta:
        model = models.Advert
        fields = {
                "title": ["contains"],
                "details": ["contains"],
                "category": ["exact", "contains"],
                "date_registered": ["gte", "lte"]
            }

class ServiceFilter (filters.FilterSet):
    class Meta:
        model = models.Service
        fields = {
                "title": ["contains"],
                "details": ["contains"],
                "price": ["gte", "lte"],
                "date_registered": ["gte", "lte"]
            }
