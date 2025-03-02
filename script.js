document.addEventListener('DOMContentLoaded', function() {
    const backgroundSound = document.getElementById('background-sound');
    const consoleOutput = document.getElementById('console-output');
    const commandInput = document.getElementById('command-input');

    backgroundSound.play();

    consoleOutput.innerHTML += 'Chrono Terminal [Version 0.20.3.2.02.5]<br>';
    consoleOutput.innerHTML += '(c) 2025 All rights reserved.<br><br>';

    commandInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            const command = commandInput.value.trim();
            commandInput.value = '';
            consoleOutput.innerHTML += `M:\\User\\storage> ${command}<br>`;
            handleCommand(command);
        }
    });

    function handleCommand(command) {
        switch (command) {
            case 'help':
                consoleOutput.innerHTML += '- Available commands: server, storage, memory, source, info<br>';
                break;
            case 'server':
                consoleOutput.innerHTML += '- IP: ???. Version: ?.??.?<br>';
                break;
            case 'storage':
                consoleOutput.innerHTML += '- The storage location is safe, since the memory is already predefined and cannot be changed, it is already a pre-prescribed future, stored in memory, and the memory is buried in the storage location.<br>';
                break;
            case 'memory':
                consoleOutput.innerHTML += '- Memory is a vision of the future. It is archived and stored in a storage location. All the chronological events that are taking place or have already passed were predetermined, they knew about them.<br>';
                break;
            case 'source':
                consoleOutput.innerHTML += '- The source is a conduit between Memory, the future, and storage, and communication cannot occur without it.<br>';
                break;
            case 'info':
                consoleOutput.innerHTML += '- The server is the embodiment of these three connections. It allows everyone to observe this and output a chronological sequence that is already predefined.<br>';
                break;
            default:
                consoleOutput.innerHTML += '- Unknown command. Type "help" for available commands.<br>';
                break;
        }
    }
});
