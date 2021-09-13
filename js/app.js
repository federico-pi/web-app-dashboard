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

// --DROPDOWN MENU NOTIFICATIONS--
const bellIcon = document.querySelector('.bell-icon');
const dropdownMenu = document.querySelector('.dropdown-menu')
const closeButton = document.getElementsByClassName('close-button')
const notificationContainer = document.getElementsByClassName('notification-container')

bellIcon.addEventListener('click', () => {
  dropdownMenu.classList.remove('hide')
})

dropdownMenu.addEventListener('click', (e) => {
  if (e.target.classList.contains('close-button')) {
    e.target.parentNode.classList.add('hide');
  }
});

// --LOCAL STORAGE--
const saveCancel = document.getElementById('save-cancel');
const notificationSettings = document.getElementById('settings-notifications');
const visibilitySettings = document.getElementById('settings-visibility');
const timezone = document.getElementById('timezones');

function loadStorage() {
    if (localStorage.getItem('notifications') !== null && localStorage.getItem('notifications') === "true") {
    notificationSettings.checked = Boolean.valueOf(localStorage.getItem('notifications'));
    }
    if (localStorage.getItem('visibility') !== null && localStorage.getItem('visibility') === "true") {
    visibilitySettings.checked = Boolean.valueOf(localStorage.getItem('visibility'));
    }
    if(localStorage.getItem('timezone') !== null) {
    timezone.value = localStorage.getItem('timezone');
    }
}

loadStorage();

saveCancel.addEventListener('click', (e) => {
  if (e.target.className === 'settings-save form-button') {
    let notificationString = notificationSettings.checked.toString();
    localStorage.setItem('notifications', notificationString);
    let visibilityString = visibilitySettings.checked.toString();
    localStorage.setItem('visibility', visibilityString);
    let timezoneString = timezone.value;
    localStorage.setItem('timezone', timezoneString);
    if (notificationSettings.checked === false && visibilitySettings.checked === false && timezone.value === 'default') {
      return null
    } else {
      alert("Awesome, your settings will be remembered!")
    }
  } else if (e.target.className === 'settings-cancel form-button') {
    localStorage.clear();
    timezone.value = 'default';
    notificationSettings.checked = false;
    visibilitySettings.checked = false;
    if (notificationSettings.checked === false && visibilitySettings.checked === false && timezone.value === 'default') {
      return null
    } else {
      alert('Your settings have been reset.')
    }
  }
});
