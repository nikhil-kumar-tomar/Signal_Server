from django.shortcuts import render,HttpResponseRedirect, HttpResponse
from .forms import *
from django.conf import settings
    
def index(request):
    return render(request, "chat_platform/index.html")

def sender(request, room_name):
    context = {
        "room_name": room_name,
    }
        
    return render(request, "chat_platform/sender.html", context = context)

def receiver(request, room_name):
    context = {
        "room_name": room_name,
    }
        
    return render(request, "chat_platform/receiver.html", context = context)

def testing(request):
    context = {}
    return render(request, "chat_platform/index.html", context = context)
