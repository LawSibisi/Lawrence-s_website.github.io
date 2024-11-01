const responses = [
    "Hello! How can I assist you today?",
];

function toggleChat() {
    const body = document.getElementById('chatbot-body');
    const messagesDiv = document.getElementById('messages');

    if (body.style.display === 'none') {
        // Clear the chat messages when opening the chat
        messagesDiv.innerHTML = '';

        // Show the chat body
        body.style.display = 'block';
    } else {
        // Close the chat
        body.style.display = 'none';
    }
}

function sendMessage(event) {
    if (event) event.preventDefault(); // Prevent form submission if necessary
    const input = document.getElementById('user-input');
    const message = input.value.trim();
    const messagesDiv = document.getElementById('messages');

    if (message) {
        messagesDiv.innerHTML += `<div class="message-user">You: ${message}</div>`;

        let response = "";

        // Respond based on keywords in the user's message
        if (message.toLowerCase().includes("about")) {
            response = `You can learn more about Lawrence <a href="about.html">here</a>.`;
        } else if (message.toLowerCase().includes("skills")) {
            response = `To see the skills Lawrence has, visit his <a href="Skills.html">skills</a> page.`;
        } else if (message.toLowerCase().includes("contact")) {
            response = `Here is how you can get in touch with Lawrence, <a href="contact.html">Click here</a>.`;
        } else {
            response = responses[Math.floor(Math.random() * responses.length)];
        }

        // Add the response
        messagesDiv.innerHTML += `<div class="message-chatbot">Chatbot: ${response}</div>`;

        // Show follow-up question if a specific response was given
        if (response.includes("learn more about") || response.includes("see the skills") || response.includes("get in touch")) {
            messagesDiv.innerHTML += `<div class="message-chatbot">Chatbot: Is there anything else I can assist you with?</div>`;
        }

        input.value = '';
    }
}
