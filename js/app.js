// --ALERT BANNER--
const alertBanner = document.getElementById('alert')

alertBanner.innerHTML = `<div class="alert"><p><strong>Alert:</strong> You have unread messages</p>
<p class="alert-banner-close">x</p></div>`

alertBanner.addEventListener('click', e => {
  if (e.target.classList.contains("alert-banner-close")) {
    alertBanner.style.display = 'none'
  }
})

// --MESSAGE USERS--

const user = document.getElementById("user-field");
const message = document.getElementById("message-field");
const send = document.getElementById("send");

send.addEventListener('click', () => {
  if (user.value === "" && message.value === "") {
  alert("Please fill out user and message fields before sending");
  } else if (user.value === "" ) {
  alert("Please fill out user field before sending");
  } else if (message.value === "" ) {
  alert("Please fill out message field before sending");
  } else {
  alert(`Message successfully sent to ${user.value}`);
  }
});
