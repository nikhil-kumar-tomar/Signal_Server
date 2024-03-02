
// const peerConnection = new RTCPeerConnection();
// const offer = peerConnection.createOffer()
// peerConnection.setLocalDescription(offer);

// peerConnection.onicecandidate = async (event) => {
//     if(event.candidate){
//         // peerConnection.addIceCandidate(event.candidate)
//         console.log(event.candidate)
//     }
// };

// let sendData = async(message, type) => {
//     chatSocket.send(JSON.stringify({
//         'message': message,
//         'receiver_channel_name': type
//     }));

// }

// let createOffer = async () => {
//     // const chatSocket = new WebSocket(
//     //     'ws://'
//     //     + window.location.host
//     //     + '/ws/chat/'
//     //     + 'hellos'
//     //     + '/'
//     //     + "sender"
//     //     + '/'
//     // );
    
//     // chatSocket.onmessage = function(e) {
//     //     const data = JSON.parse(e.data);    
//     //     console.log(data);
//     // };


//     peerConnection.onicecandidate = async (event) => {
//         if(event.candidate){
//             // peerConnection.addIceCandidate(event.candidate)
//             console.log(event.candidate)
//         }
//     };
//     console.log(peerConnection.connectionState)

//     const offer = await peerConnection.createOffer();
//     await peerConnection.setLocalDescription(offer);
//     document.getElementById("offer").value = JSON.stringify(offer)
//     // sendData(JSON.stringify(offer), "receiver")
// }

// let createAnswer = async () => {
//     // const chatSocket = new WebSocket(
//     //     'ws://'
//     //     + window.location.host
//     //     + '/ws/chat/'
//     //     + 'hellos'
//     //     + '/'
//     //     + "receiver"
//     //     + '/'
//     // );

//     let offers = JSON.parse(document.getElementById('offer').value)
//     console.log(offers)
    

//     // peerConnection.onicecandidate = async (event) => {
//     //     if(event.candidate){
//     //         peerConnection.addIceCandidate(event.candidate)
//     //         console.log(event.candidate)
//     //     }
//     // };

//     await peerConnection.setRemoteDescription(offers);

//     let answer = await peerConnection.createAnswer();
//     await peerConnection.setLocalDescription(answer); 
//     document.getElementById('answer').value = JSON.stringify(answer);

// }

// let addAnswer = async () => {
//     console.log('Add answer triggerd')
//     let answer = JSON.parse(document.getElementById('answer').value)
//     console.log('answer:', answer)
//     if (!peerConnection.currentRemoteDescription){
//         peerConnection.setRemoteDescription(answer);
//     }
//     console.log(peerConnection.iceConnectionState)
// }

// document.addEventListener('DOMContentLoaded', function () {
//     document.getElementById('create-offer').addEventListener('click', createOffer);
//     document.getElementById('create-answer').addEventListener('click', createAnswer);
//     document.getElementById('set-answer').addEventListener('click', addAnswer);
// });
