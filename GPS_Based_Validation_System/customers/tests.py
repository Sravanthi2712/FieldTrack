from rest_framework.test import APITestCase
from rest_framework import status


class CustomerAPITest(APITestCase):

    def test_create_customer(self):

        data = {
            "name": "ABC Store",
            "latitude": 16.502,
            "longitude": 80.648
        }

        response = self.client.post(
            "/customers/",
            data,
            format="json"
        )

        self.assertEqual(
            response.status_code,
            status.HTTP_201_CREATED
        )