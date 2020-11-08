const addressButton = document.querySelector(".address-button");
const feedBackPopup = document.querySelector(".modal-feedback");
const feedBackClose = feedBackPopup.querySelector(".modal-close");
const feedBackForm = feedBackPopup.querySelector(".feedback-form");
const feedBackName = feedBackPopup.querySelector(".modal-input-name");
const feedBackEmail = feedBackPopup.querySelector(".modal-input-email");

let isStorageSupport = true;
let storage = "";

try {
  storage = localStorage.getItem("name");
} catch (err) {
  isStorageSupport = false;
}

addressButton.addEventListener("click", function(evt) {
  evt.preventDefault();
  feedBackPopup.classList.add("modal-show");

  if (storage) {
    feedBackName.value = storage;
    feedBackEmail.focus();
  } else {
    feedBackName.focus();
  }
});

feedBackClose.addEventListener("click", function(evt) {
  evt.preventDefault();
  feedBackPopup.classList.remove("modal-show");
  feedBackPopup.classList.remove("modal-error");
});

feedBackForm.addEventListener("submit", function(evt) {
  if (!feedBackName.value || !feedBackEmail.value) {
    evt.preventDefault();
    feedBackPopup.classList.remove("modal-error");
    feedBackPopup.offsetWidth = feedBackPopup.offsetWidth;
    feedBackPopup.classList.add("modal-error");
  } else {
    if (isStorageSupport) {
      localStorage.setItem("name", feedBackName.value);
    }
  }
});

window.addEventListener("keydown", function(evt) {
  if (evt.keyCode === 27) {
    if (feedBackPopup.classList.contains("modal-show")) {
      evt.preventDefault();
      feedBackPopup.classList.remove("modal-show");
      feedBackPopup.classList.remove("modal-error");
    }
  }
});
