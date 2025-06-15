---
title: "Project: P2P Communication App"
description: Real-time audio/video streaming with optimized packet synchronization
slug: p2p-communication-app
# authors: [ash3327]
tags: [Project, Python, Networking, Real-time Communication, P2P]
image: /img//img/docs/p2p/p2p/image.png
---

[![View Project](https://img.shields.io/badge/View_Project-P2P%20Communication%20App-4285F4?style=for-the-badge&logo=github&logoColor=white)](https://github.com/ash3327/Peer-to-Peer-Communication-App)

# Peer-to-Peer Communication App

![Last Commit](https://img.shields.io/badge/last%20commit-Apr%202024-%23FFA500.svg?style=flat&logo=git&logoColor=white)

A fork of the project in the semester 2023-24 Term 2, creating a peer-to-peer communication app supporting audio recording, waveform display and editing, and also screen share function. 

## Key Features
- Peer-to-peer communication within local area network
- Functions:
  - Create, join and leave chat rooms
  - Audio recording
  - Screen sharing
- Synchronization and handling of audio and video streams from multiple users so that they do not hear their own voices

<!-- truncate -->

<table>
  <tr>
    <td>Chatroom Creation &amp; User Alias</td>
    <td>Audio Recording</td>
  </tr>
  <tr>
    <td><img src="/personalblog/img/docs/p2p/image-1.png" alt="Chatroom Creation &amp; User Alias"/></td>
    <td><img src="/personalblog/img/docs/p2p/image-2.png" alt="Audio Recording"/></td>
  </tr>
  <tr>
    <td colspan="2">Screen Sharing</td>
  </tr>
  <tr>
    <td colspan="2"><img src="/personalblog/img/docs/p2p/image-3.png" alt="Screen Sharing"/></td>
  </tr>
</table>

## Architecture
- Consists of ONE server and multiple clients
- The server and clients can be runned on the same machine, or on different machines within the same local area network

The calls between server and clients, visualized:
![](/img/docs/p2p/gui.jpeg)

## Notes

- Functions that allows usage over the internet are not implemented yet due to problems in port forwarding that requires extra care

<!-- ## Installation

To install this package, perform the following:

1) Execute ```pip3 install -r requirements.txt``` in command prompt.

> [!CAUTION]
>
> 2) To allow the usage of the audio-to-text function, you need to manually install the ffmpeg package. (Note that we only allow English transcription for now)
>
>    If you're using conda, then do ```conda install ffmpeg``` (advised).
>
>       

<details>
<summary>More:</summary>

If your OS is linux, then do ```sudo apt install ffmpeg```.

If your OS is windows, you can download FFMPEG from the official download page: https://ffmpeg.org/download.html#build-windows. (Personally, we used the version ffmpeg-master-latest-win64-gpl.zip provided in https://github.com/BtbN/FFmpeg-Builds/releases)

If your OS is MacOS, you can also download it from the official download page: https://ffmpeg.org/download.html#build-mac.

Note that if you downloaded the executable from the website, you'll have to manually move it (```ffmpeg.exe``` in the unzipped ```bin``` subfolder) to your script's root directory (in the SAME layer as other .py files) (or add it to PATH).
</details>

Note:

1) The application currently only work with computers _in the same local area network_ due to port forwarding. 

> [!CAUTION]
>
> 2) Please TURN OFF Windows Defender Firewall AND Windows Firewall (or any firewalls) in the private network before using.

## Server-Side
To start the server, perform the following:

1) Run ```chat_server.py``` by calling ```python chat_server.py --port <port>```. 

    - Use the token ```-h``` to get hints on the arguments.
    - Use the token ```-l``` to show logs of all communication between server and client.
    - Use the token ```-r``` to change the sampling frequency of all audio messages sent to and received from this server.
    - Press ```Ctrl+C``` for the following:
        - check the ip and port of the server, or
        - terminate the server

Notes:

1) You should be able to read the server IP and the port as follows: 
`Initializing Chat Server at IP [10.13.252.5] and port [12345]`

2) You can terminate the server end program and all its associated connections by pressing ```Ctrl+C``` in the command prompt.

3) Sampling Frequency can be set with `-r <frequency>` (Default = 5000). It is advised to lower your sampling frequency if your computer cannot handle the default sampling frequency.

## Client-Side
To start the client-side software, perform the following: 

1) Run ```chat_client.py``` by calling ```python chat_client.py --ip <ip> --port <port>```, where the IP and port can be read from the server side.

    - Use the token ```-h``` to get hints on the arguments.
    - Use the token ```-l``` to show logs of all communication between server and client.

<details>
<summary>Functionalities:</summary>

1) Users can click on 'new room' button to enter the name of the room now.
![](/img/docs/p2p/readme_res/image-1.png)
2) users can click on the room names to join the room directly now.
![](/img/docs/p2p/readme_res/image.png)
3) Users can mute/unmute his/her voices, and also quit room now.
![](/img/docs/p2p/readme_res/image-2.png)

</details>

## Logs


<details>
<summary>Example of server side log:</summary>
```
Initializing Chat Server at IP [10.13.252.5] and port [12345]
Starting server...
Accepted request from: 10.13.252.5 port 1749
I/list                  : 10.13.252.5 1749      : {'action': 'list'}
O/list_rooms            : 10.13.252.5 1749      : {'rooms': []}
I/create                : 10.13.252.5 1749      : {'action': 'create', 'room': 'hello'}
O/created_room          : 10.13.252.5 1749      : {'status': 'ok', 'room': 'hello'}
I/list                  : 10.13.252.5 1749      : {'action': 'list'}
O/list_rooms            : 10.13.252.5 1749      : {'rooms': ['hello']}
I/create                : 10.13.252.5 1749      : {'action': 'create', 'room': 'world'}
O/created_room          : 10.13.252.5 1749      : {'status': 'ok', 'room': 'world'}
I/list                  : 10.13.252.5 1749      : {'action': 'list'}
O/list_rooms            : 10.13.252.5 1749      : {'rooms': ['hello', 'world']}
I/join                  : 10.13.252.5 1749      : {'action': 'join', 'room': 'world'}
O/join_room             : 10.13.252.5 1749      : {'status': 'room already joined', 'room': 'world'}
I/exit                  : 10.13.252.5 1749      : {'action': 'exit'}
Ended request from: 10.13.252.5 port 1749
Accepted request from: 10.13.252.5 port 1819
I/list                  : 10.13.252.5 1819      : {'action': 'list'}
O/list_rooms            : 10.13.252.5 1819      : {'rooms': ['hello', 'world']}
Accepted request from: 10.13.252.5 port 1829
I/list                  : 10.13.252.5 1829      : {'action': 'list'}
O/list_rooms            : 10.13.252.5 1829      : {'rooms': ['hello', 'world']}
I/exit                  : 10.13.252.5 1829      : {'action': 'exit'}
Ended request from: 10.13.252.5 port 1829
I/exit                  : 10.13.252.5 1819      : {'action': 'exit'}
Ended request from: 10.13.252.5 port 1819
```
</details>

<details>
<summary>Example of client side log:</summary>
```
O/list                  : {'action': 'list'}
I/list_rooms            : {'rooms': ['hello', 'world']}
O/create                : {'action': 'create', 'room': 'room 4'}
O/list                  : {'action': 'list'}
I/created_room          : {'status': 'ok', 'room': 'room 4'}
Room 'room 4' created successfully.
I/list_rooms            : {'rooms': ['hello', 'world', 'room 4']}
O/join                  : {'action': 'join', 'room': 'world'}
I/join_room             : {'status': 'ok', 'room': 'world'}
Joined room 'world' successfully.
O/join                  : {'action': 'join', 'room': 'world'}
I/join_room             : {'status': 'room already joined', 'room': 'world'}
Room already joined.
O/create                : {'action': 'create', 'room': 'room 4'}
O/list                  : {'action': 'list'}
I/created_room          : {'status': 'room already exists', 'room': 'room 4'}
Failed to create room.
I/list_rooms            : {'rooms': ['hello', 'world', 'room 4']}
```
</details> -->