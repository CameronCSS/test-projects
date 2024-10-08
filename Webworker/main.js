// This is a really basic Webworker setup for demo purposes

// Create a new Worker
const worker = new Worker('worker.js');

// Send a message to the Worker
worker.postMessage('Hello from main script');

// Receive messages from the Worker
worker.onmessage = function(event) {
	console.log('Received from worker:', event.data);
};