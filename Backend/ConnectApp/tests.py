from django.test import TestCase
from django.contrib.contenttypes.models import ContentType
from django.utils import timezone
from .models import User, Event, Clubs, Advertiser


class ModelTests(TestCase):
    def setUp(self):
        # Create users
        self.user1 = User.objects.create_user(
            username='testuser1',
            email='test1@example.com',
            password='password123',
            first_name='John',
            last_name='Doe',
            middle_name='M',
            gender='M',
            phone_number='1234567890'
        )
        self.user2 = User.objects.create_user(
            username='testuser2',
            email='test2@example.com',
            password='password123',
            first_name='Jane',
            last_name='Smith',
            middle_name='N',
            gender='F',
            phone_number='0987654321'
        )

        # Create a club
        self.club = Clubs.objects.create(
            name='Tech Club',
            description='A club for tech enthusiasts',
            club_leader=self.user1,
            meeting_date=timezone.now().date(),
            meeting_location='Room 101'
        )

    def test_user_creation(self):
        self.assertEqual(self.user1.username, 'testuser1')
        self.assertEqual(self.user1.phone_number, '1234567890')
        self.assertEqual(str(self.user1), 'testuser1')  # Assuming __str__ is username

    def test_club_creation(self):
        self.assertEqual(self.club.name, 'Tech Club')
        self.assertEqual(self.club.club_leader, self.user1)
        self.assertEqual(str(self.club), 'Tech Club')

    def test_event_with_user_organizer(self):
        # Create an event organized by a user
        user_ct = ContentType.objects.get_for_model(User)
        event = Event.objects.create(
            title='User Organized Event',
            description='An event organized by a user',
            date=timezone.now(),
            content_type=user_ct,
            object_id=self.user1.id
        )
        self.assertEqual(event.organizer, self.user1)
        self.assertEqual(event.get_organizer_name(), str(self.user1))

    def test_event_with_club_organizer(self):
        # Create an event organized by a club
        club_ct = ContentType.objects.get_for_model(Clubs)
        event = Event.objects.create(
            title='Club Organized Event',
            description='An event organized by a club',
            date=timezone.now(),
            content_type=club_ct,
            object_id=self.club.id
        )
        self.assertEqual(event.organizer, self.club)
        self.assertEqual(event.get_organizer_name(), str(self.club))

    def test_advertiser_creation(self):
        advertiser = Advertiser.objects.create(
            advertizer=self.user1,
            ad_name='Test Ad',
            ad_details='http://example.com'
        )
        self.assertEqual(advertiser.advertizer, self.user1)
        self.assertEqual(advertiser.ad_name, 'Test Ad')
