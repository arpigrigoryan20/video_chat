<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="video.css">

    <title>Document</title>

</head>
<body>
    <div class="chat">
        <div class="chat-content">
                <p>Connecting with id...</p>
                <input type="text" id="connect_id">
                <button id="connect">Connect</button>
                <span id="info"><span>
        </div>

        <div class="ownvideo">
            <video id="videolocal" autoplay></video>
        </div>
        <!-- <div class="ownvideo">
            <video id="video1" autoplay></video>
        </div> -->
    </div>

    <script src="https://unpkg.com/peerjs@1.2.0/dist/peerjs.min.js"></script>

<script src="local.js"></script>
</body>
</html>