window.onload = function () {
  const name = localStorage.getItem("userName");
  document.getElementById("greetingMessage").innerText = `Hi ${name || "there"}!`;
  document.getElementById("welcomeMessage").innerText = `Welcome to Kaylee Website`;
};

function validateForm(event) {
  event.preventDefault(); // Mencegah reload form

  const first = document.getElementById("firstName").value.trim();
  const last = document.getElementById("lastName").value.trim();
  const email = document.getElementById("email").value.trim();

  const nameRegex = /^[A-Za-z\s]+$/;
  const emailRegex = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;

  if (!nameRegex.test(first) || !nameRegex.test(last)) {
    alert("First and Last name must contain letters only.");
    return false;
  }

  if (!emailRegex.test(email)) {
    alert("Email must be a valid Gmail address (example@gmail.com).");
    return false;
  }

    document.querySelector("form").classList.add("hidden");
    document.getElementById("thankYouPage").classList.remove("hidden");

  // Kalau valid, pindah ke halaman "Thank You"
  window.location.href = "thankyou.html";
  return true;
}
