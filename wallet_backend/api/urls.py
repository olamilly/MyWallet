from django.urls import path
from .views import get_linked_cards, get_account_balance,

urlpatterns = [
    path('cards/', get_linked_cards, name="get_linked_cards"),
    path('balance/', get_account_balance, name="get_account_balance"),
]