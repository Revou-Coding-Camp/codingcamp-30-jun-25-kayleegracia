window.onload = function() {
  const name = localStorage.getItem('userName');
  document.getElementById('greetingMessage').innerText = `Hi ${name}!`;
  document.getElementById('welcomeMessage').innerText = `Welcome to Kaylee Website`;
};

