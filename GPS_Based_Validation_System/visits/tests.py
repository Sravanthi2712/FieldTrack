from django.test import TestCase

# Create your tests here.
from django.test import TestCase

from customers.models import Customer
from sales_representatives.models import SalesRepresentative
from visits.models import Visit


class VisitModelTest(TestCase):

    def setUp(self):
        self.customer = Customer.objects.create(
            name="ABC Store",
            latitude=16.502,
            longitude=80.648
        )

        self.sales_rep = SalesRepresentative.objects.create(
            name="Sai"
        )

    def test_valid_visit_creation(self):

        visit = Visit.objects.create(
            sales_rep=self.sales_rep,
            customer=self.customer,
            checkin_latitude=16.502,
            checkin_longitude=80.648,
            distance_in_meters=0
        )

        self.assertEqual(
            visit.customer.name,
            "ABC Store"
        )

        self.assertEqual(
            visit.sales_rep.name,
            "Sai"
        )

    def test_invalid_distance(self):

        distance = 500

        self.assertTrue(distance > 200)