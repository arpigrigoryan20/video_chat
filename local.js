
async function getMedia(constraints,id) {
	let stream = null;
	try {
		stream = await navigator.mediaDevices.getUserMedia(constraints);
		const call = peer.call(id, stream);
		call.on('stream',  (remoteStream) => {
			let videoElement = document.getElementById('videolocal');
			videoElement.srcObject = remoteStream;
			var playPromise= videoElement.play();
			
			if (playPromise !== undefined) {
				playPromise.then(_ => {
					videoElement.play();
				})
				.catch(_err=> {
				  videoElement.play();
				  
				});
			  }
		});
	} catch (err) {
		throw (err)
	}
}
var peer = new Peer()
const constraints = {
	video: true,
	audio: true
}


peer.on('open', (id) => {
	console.log('my id is', id)
})


document.getElementById('connect').addEventListener('click', connect)



function connect() {
	let remote_id = document.getElementById('connect_id').value
	console.log(remote_id);
	const conn = peer.connect(remote_id);
	conn.on('open', () => {
		conn.send('Connected?');
	});

	conn.on('data', (data) => {
		document.getElementById('info').innerText=data
	})

	getMedia(constraints,remote_id)
}
