from django.test import TestCase
from .models import SalesRepresentative

# Create your tests here.

class SalesRepresentativeTest(TestCase):

    def test_sales_rep_creation(self):

        rep = SalesRepresentative.objects.create(
            name="Sai"
        )

        self.assertEqual(rep.name, "Sai")