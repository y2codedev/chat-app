document.addEventListener('DOMContentLoaded', function () {
    const sidebar = document.querySelector('.sidebar');
    const chatArea = document.querySelector('.chat-area');
    const sidebarToggle = document.querySelector('.sidebar-toggle');
    const backButton = document.querySelector('.back-button');
    const userItems = document.querySelectorAll('.user-item');
    const messageInput = document.querySelector('.message-input input');
    const sendButton = document.querySelector('.send-btn');
    const messagesContainer = document.querySelector('.messages-container');
    const messages = document.querySelector('.messages');

    if (sidebarToggle) {
        sidebarToggle.addEventListener('click', function () {
            sidebar.classList.add('show');
            chatArea.classList.remove('show');
        });
    }

    if (backButton) {
        backButton.addEventListener('click', function () {
            sidebar.classList.add('show');
            chatArea.classList.remove('show');
        });
    }

    userItems.forEach(item => {
        item.addEventListener('click', function () {
            if (window.innerWidth < 992) {
                sidebar.classList.remove('show');
                chatArea.classList.add('show');
            }
            const userName = this.querySelector('.user-name').textContent;
            const userAvatar = this.querySelector('img').src;
            const userStatus = this.querySelector('.online-status').classList.contains('offline') ? 'Offline' : 'Online';

            document.querySelector('.chat-user img').src = userAvatar;
            document.querySelector('.chat-user .user-name').textContent = userName;
            document.querySelector('.chat-user .user-status').textContent = userStatus;
        });
    });

    function sendMessage() {
        const messageText = messageInput.value.trim();
        if (messageText) {
            const messageDiv = document.createElement('div');
            messageDiv.className = 'message outgoing';
            messageDiv.innerHTML = `
                <div class="message-content">
                    <div class="message-text">${messageText}</div>
                    <div class="message-time">${getCurrentTime()}</div>
                </div>
            `;
            messages.appendChild(messageDiv);
            messageInput.value = '';
            scrollToBottom();

            setTimeout(simulateReply, 1000 + Math.random() * 1000);
        }
    }

    messageInput.addEventListener('keypress', function (e) {
        if (e.key === 'Enter') {
            sendMessage();
        }
    });

    sendButton.addEventListener('click', sendMessage);

    function simulateReply() {
        const replies = [
            "Sounds good!",
            "I'll get back to you soon",
            "Can we talk later?",
            "Thanks for the update!",
            "I'm busy right now",
            "👍",
            "Got it!",
            "Let me check and confirm"
        ];

        const randomReply = replies[Math.floor(Math.random() * replies.length)];

        const messageDiv = document.createElement('div');
        messageDiv.className = 'message incoming';
        messageDiv.innerHTML = `
            <div class="message-content">
                <div class="message-text">${randomReply}</div>
                <div class="message-time">${getCurrentTime()}</div>
            </div>
        `;

        messages.appendChild(messageDiv);
        scrollToBottom();
    }

    function getCurrentTime() {
        const now = new Date();
        return now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    }

    function scrollToBottom() {
        messagesContainer.scrollTop = messagesContainer.scrollHeight;
    }


    scrollToBottom();

    if (window.innerWidth >= 992) {
        chatArea.classList.add('show');
    } else {
        sidebar.classList.add('show');
    }
});


document.addEventListener('DOMContentLoaded', function () {
    const attachmentBtn = document.querySelector('.attachment-btn');
    const attachmentOptions = document.querySelector('.attachment-options');

    attachmentBtn.addEventListener('click', function () {
        this.classList.toggle('active');
        attachmentOptions.classList.toggle('show');
    });

    document.addEventListener('click', function (e) {
        if (!e.target.closest('.attachment-container')) {
            attachmentBtn.classList.remove('active');
            attachmentOptions.classList.remove('show');
        }
    });
});



document.addEventListener('DOMContentLoaded', function () {
    const moreOptionsBtn = document.querySelector('.more-options-btn');
    const optionsMenu = document.querySelector('.options-menu');

    moreOptionsBtn.addEventListener('click', function (e) {
        e.stopPropagation();
        optionsMenu.classList.toggle('show');
        document.body.classList.toggle('options-menu-open');
    });

    document.addEventListener('click', function () {
        optionsMenu.classList.remove('show');
        document.body.classList.remove('options-menu-open');
    });

    optionsMenu.addEventListener('click', function (e) {
        e.stopPropagation();
    });
});