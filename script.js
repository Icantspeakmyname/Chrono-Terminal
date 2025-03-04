document.addEventListener('DOMContentLoaded', function() {
    const backgroundSound = document.getElementById('background-sound');
    const consoleOutput = document.getElementById('console-output');
    const commandInput = document.getElementById('command-input');
    
    backgroundSound.play();
    
    consoleOutput.innerHTML += '<span class="title">Chrono Terminal [Version 0.20.3.2.02.5]</span><br>';
    consoleOutput.innerHTML += '<span class="info">(c) 2025 All rights reserved.</span><br><br>';
    
    let commandHistory = JSON.parse(localStorage.getItem('commandHistory')) || [];
    let historyIndex = commandHistory.length;

    commandInput.addEventListener('keydown', function(e) {
        if (e.key === 'Enter') {
            const command = commandInput.value.trim();
            commandInput.value = '';

            if (command === "exit") {
                fadeOut.style.visibility = "visible";
                fadeOut.style.opacity = "1";
                setTimeout(() => {
                    window.location.href = "https://google.com";
                }, 1500)
            }

            if (command) {
                commandHistory.push(command);
                localStorage.setItem('commandHistory', JSON.stringify(commandHistory));
                historyIndex = commandHistory.length;
            }

            consoleOutput.innerHTML += `<span class="input">M:\\User\\storage> ${command}</span><br>`;
            handleCommand(command);
        } else if (e.key === 'ArrowUp') {
            if (historyIndex > 0) {
                historyIndex--;
                commandInput.value = commandHistory[historyIndex];
            }
        } else if (e.key === 'ArrowDown') {
            if (historyIndex < commandHistory.length - 1) {
                historyIndex++;
                commandInput.value = commandHistory[historyIndex];
            } else {
                historyIndex = commandHistory.length;
                commandInput.value = '';
            }
        }
    });

    function handleCommand(command) {
        setTimeout(() => {
            let output = '';
            switch (command.toLowerCase()) {
                case 'help':
                    output = '- Available commands: <span class="command">server</span>, <span class="command">storage</span>, <span class="command">memory</span>, <span class="command">source</span>, <span class="command">info</span>, <span class="command">exit</span><br>';
                    break;
                case 'server':
                    output = '- <span class="server">IP: 89.35.130.15:25037. Version: 1.21.x</span><br>';
                    break;
                case 'storage':
                    output = '- The storage location is safe...<br>';
                    break;
                case 'memory':
                    output = '- Memory is a vision of the future...<br>';
                    break;
                case 'source':
                    output = '- The source is a conduit between Memory...<br>';
                    break;
                case 'info':
                    output = '- The server is the embodiment of these three connections...<br>';
                    break;
                case 'security':
                    output = '-<span class="hidden">MTUtMjEgMjAtMTYtNC01LTEg...</span><br>';
                    break;
                case '???':
                    output = '- cw==<br>';
                    break;
                default:
                    output = '- <span class="error">Unknown command.</span> Type "<span class="command">help</span>" for available commands.<br>';
                    break;
            }
            consoleOutput.innerHTML += output;
            consoleOutput.scrollTop = consoleOutput.scrollHeight;
        }, 500);
    }
});
