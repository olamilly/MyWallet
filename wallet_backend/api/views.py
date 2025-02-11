from django.shortcuts import render
from django.http import JsonResponse

db = settings.db

# 1️⃣ View Linked Cards
def get_linked_cards(request):
    cards_ref = db.collection("cards")
    cards = [doc.to_dict() for doc in cards_ref.stream()]
    return JsonResponse(cards, safe=False)

# 2️⃣ View Account Balance
def get_account_balance(request):
    balance_ref = db.collection("wallet").document("accounts").get()
    balance = balance_ref.to_dict().get("user_balance", 0) if balance_ref.exists else 0
    return JsonResponse({"balance": balance})



