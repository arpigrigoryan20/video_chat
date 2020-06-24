
async function getMedia(constraints, call) {
	let stream = null;
	try {
		stream = await navigator.mediaDevices.getUserMedia(constraints);
		call.answer(stream)
		call.on('stream', (remoteStream) => {
			let videoElement = document.getElementById('videoremote');
			videoElement.srcObject = remoteStream;
			var playPromise = videoElement.play();

			if (playPromise !== undefined) {
				playPromise.then(_ => {
					videoElement.play();
				})
				.catch(error => {
					videoElement.play();

				});
			}
		});
	} catch (err) {
		throw (err)
	}
}

const constraints = {
	video: true,
	audio: true
}


var peer = new Peer()
console.log(peer)

peer.on('open', (id) => {
	let main = document.getElementById('desc');
	document.getElementById('current_id').innerHTML += id;
	var info = document.createElement('p')
	info.setAttribute('id','ready_connect')
	info.innerHTML = "Ready for connect"
	console.log('my id is', id)
	main.append(info)
})

peer.on('connection', (conn) => {
	console.log(conn.peer)
	document.getElementById('ready_connect').innerHTML= 'Connected with:  '+conn.peer;

	conn.on('data', (data) => {
		document.getElementById('info').innerText=data
	});
	conn.on('open', () => {
		conn.send('Yes,connected!');
	});
});

peer.on('call', (call) => {
	getMedia(constraints, call)
})