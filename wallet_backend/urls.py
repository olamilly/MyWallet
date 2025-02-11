# from django.contrib import admin
# from django.urls import path, include

# urlpatterns = [
#     path('admin/', admin.site.urls),
#     path('api/', include('api.urls')),
# ]
from django.urls import path
from .views import get_linked_cards, get_account_balance,

urlpatterns = [
    path('cards/', get_linked_cards, name="get_linked_cards"),
    path('balance/', get_account_balance, name="get_account_balance"),
]