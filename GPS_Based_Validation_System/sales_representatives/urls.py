from django.urls import path
from .views import SalesRepresentativeCreateView

urlpatterns = [
    path('', SalesRepresentativeCreateView.as_view(), name='create-sales-rep'),
]