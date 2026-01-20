from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework_simplejwt.tokens import RefreshToken
from rest_framework_simplejwt.exceptions import TokenError
from django.contrib.auth import authenticate
from django.utils import timezone
from rest_framework import status
from ConnectApp import utils


class LoginView(APIView):

    def gen_tokens(self, user):
        jwt_tokens = RefreshToken.for_user(user)

        return {
            'refresh_token': str(jwt_tokens),
            'access_token': str(jwt_tokens.access_token)
        }

    def post(self, request):
        username = request.data.get('username')
        password = request.data.get('password')

        user = authenticate(username=username, password=password)
        if user is not None:
            tokens = self.gen_tokens(user)
            utils.lazy_general_subscribe(user)
            user.last_login = timezone.now()
            user.save(update_fields=["last_login"])
            response = Response({"message": "login successful",
                                 "access_token": tokens.get('access_token')},
                                status=status.HTTP_200_OK)

            response.set_cookie(
                key='refresh_token',
                value=tokens.get('refresh_token'),
                httponly=True,
                secure=True,
                samesite='Lax',
            )
            return response

        return Response({"error": "invalid login"},
                        status=status.HTTP_400_BAD_REQUEST)


class RefreshTokenView(APIView):
    def post(self, request):
        refresh_token = request.COOKIES.get('refresh_token')

        try:
            refresh_token = RefreshToken(refresh_token)
            response = Response(
                {"message": "successful refresh",
                 "access_token": str(refresh_token.access_token)},
                status=status.HTTP_200_OK)

            response.set_cookie(
                key='refresh_token',
                value=str(refresh_token),
                httponly=True,
                secure=True,
                samesite='Lax',
            )
            return response

        except TokenError as e:
            return Response({"error": str(e)},
                            status=status.HTTP_401_UNAUTHORIZED)


class LogoutView(APIView):

    def post(self, request):
        response = Response({"message": "user logged out"},
                            status=status.HTTP_200_OK)

        response.set_cookie(
            key='refresh_token',
            value='',
            httponly=True,
            secure=True,
            samesite='Lax',
            max_age=0
        )
        return response
