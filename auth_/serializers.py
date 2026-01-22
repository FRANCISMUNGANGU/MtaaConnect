from rest_framework import serializers
from .models import User


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['id', 'username', 'email', 'first_name', 'middle_name',
                  'last_name', 'phone_number', 'gender', 'date_joined',
                  'subscriptions'
                  ]
        read_only_fields = ['id', 'date_joined']


class UserCreationSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['username', 'email', 'password',
                  'first_name', 'middle_name', 'last_name',
                  'phone_number', 'gender', 'subscriptions'
                  ]
        extra_kwargs = {
            'password': {'write_only': True}
        }

    def create(self, validated_data):
        return User.objects.create_user(**validated_data)
