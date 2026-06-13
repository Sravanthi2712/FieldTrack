from django.test import TestCase
from .models import Customer

# Create your tests here.
class CustomerModelTest(TestCase):

    def test_customer_creation(self):

        customer = Customer.objects.create(
            name="ABC Store",
            latitude=16.502,
            longitude=80.648
        )

        self.assertEqual(customer.name, "ABC Store")