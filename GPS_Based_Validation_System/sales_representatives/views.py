from django.shortcuts import render
from rest_framework import generics
from .models import SalesRepresentative
from .serializers import SalesRepresentativeSerializer

# Create your views here.

class SalesRepresentativeCreateView(generics.CreateAPIView):
    queryset = SalesRepresentative.objects.all()
    serializer_class = SalesRepresentativeSerializer