// Receive messages from the main script
self.onmessage = function(event) {
	console.log('Received in worker:', event.data);

	// Send a message back to the main script
	self.postMessage('Hello from worker');
};