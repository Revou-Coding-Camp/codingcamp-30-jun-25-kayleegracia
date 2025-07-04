window.onload = function() {
  const name = localStorage.getItem('userName');
  document.getElementById('greetingMessage').innerText = `Hi ${name}!`;
  document.getElementById('welcomeMessage').innerText = `Welcome to Kaylee Website`;
};

function validationForm(){
    const nameInput = document.getElementById('name-Input');
    if(nameInput.valuee ===''){
        alert('Please enter yout name!');
    }else{
        document.getElementById('result-form').innerHTML = nameInput.value;
    }
}

  const form = document.getElementById('contactForm');
  form.addEventListener('submit', function(e) {
    e.preventDefault();
    // Lakukan aksi kirim data di sini...
    document.getElementById('thankYouMessage').classList.remove('hidden');
  });
