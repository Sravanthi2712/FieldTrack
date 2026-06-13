from rest_framework import serializers
from .models import SalesRepresentative


class SalesRepresentativeSerializer(serializers.ModelSerializer):
    class Meta:
        model = SalesRepresentative
        fields = "__all__"

    def validate_name(self, value):

        if not value.strip():
            raise serializers.ValidationError(
                "Sales Representative name cannot be empty."
            )

        return value