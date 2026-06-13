from rest_framework import serializers
from .models import Customer

class CustomerSerializer(serializers.ModelSerializer):
    class Meta:
        model = Customer
        fields = "__all__"

    def validate_name(self, value):

        if not value.strip():
            raise serializers.ValidationError(
                "Customer name cannot be empty."
            )

        return value