from django.shortcuts import render
from .models import Customer
from .serializers import CustomerSerializer
from rest_framework import generics

# Create your views here.

class CustomerCreateView(generics.CreateAPIView):
    queryset=Customer.objects.all()
    serializer_class=CustomerSerializer