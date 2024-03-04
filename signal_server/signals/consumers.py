import json
from channels.generic.websocket import AsyncWebsocketConsumer
from django.conf import settings

class ChatConsumer(AsyncWebsocketConsumer):
    async def connect(self):
        self.room_name = self.scope["url_route"]["kwargs"]["room_name"]
        self.room_group_name = f"{self.room_name}"
        self.current_channel_name = self.scope["url_route"]["kwargs"]["channel_name"]
        await self.channel_layer.group_add(self.room_group_name, self.channel_name)
        await self.accept()

        if self.current_channel_name == "receiver":
            # print(self.current_channel_name, self.room_name)
            
            await self.channel_layer.group_send(
                self.room_group_name, {
                    "type":"chat.message",
                    "to":"sender",
                    "message":self.room_name
                }
            )
        

    async def disconnect(self, close_code):
        await self.channel_layer.group_discard(self.room_group_name, self.channel_name)

    async def receive(self, text_data):
        data = json.loads(text_data)
        message = data['message']
        receiver_channel_name = data['receiver_channel_name']
        print(message, receiver_channel_name)
        await self.channel_layer.group_send(self.room_group_name, {
            "type": "chat.message",
            "to":receiver_channel_name,
            "message":message
        })

    async def chat_message(self, event):
        message = event['message']
        if event["to"] == self.current_channel_name:
            await self.send(text_data=json.dumps({
                'message': message
            }))


