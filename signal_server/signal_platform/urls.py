from django.urls import path

from . import views

urlpatterns = [
    path("sender/<str:room_name>/", views.sender, name="sender"),
    path("receiver/<str:room_name>/", views.receiver, name="receiver"),
    path("testing/", views.testing)
]