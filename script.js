function dismissReminder() {
    var reminderText = document.getElementById('reminder-text');
    reminderText.innerHTML = 'Stay warm!';
    reminderText.style.color = '#4caf50';
    document.querySelector('button').style.display = 'none';
}
