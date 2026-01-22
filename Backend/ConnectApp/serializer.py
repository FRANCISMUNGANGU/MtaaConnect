from rest_framework import serializers
from .models import User


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['id', 'username', 'email', 'first_name', 'middle_name',
                  'last_name', 'role', 'date_joined']
        read_only_fields = ['id', 'role', 'date_joined']


class UserCreationSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['username', 'email', 'password',
                  'first_name', 'middle_name', 'last_name', 'role']
        extra_kwargs = {
            'password': {'write_only': True}
        }

        def create(self, validated_data):
            user = User.objects.create_user(**validated_data)
            return user