// For Show Modal
var modal = document.getElementById("modal-createPost");
var modalContent = modal.querySelector('.modal-content');
var modalCreatePost = document.querySelectorAll(".modalCreatePost");

var closeModal = modal.querySelector(".close");
var backModal = modal.querySelectorAll(".back");

var contentCreatePost = document.querySelector(".content-create-post");
var choosePublic = document.querySelector(".choose-public");
var patternCategory = document.querySelector(".pattern-category");

var btnSelectPrivacy = document.getElementById("btn-select-privacy");
var btnShowPattern = document.getElementById("btn-show-patterns");
var btnHidePattern = document.getElementById("btn-hide-patterns");
var btnPtnCategory = document.getElementById("btn-pattern-category");

closeModal.addEventListener('click', function () {
  modal.style.display = "none";
});
backModal.forEach(function (item) {
  item.addEventListener('click', function () {
    contentCreatePost.classList.add('active');
    choosePublic.classList.remove('active');
    patternCategory.classList.remove('active');
    modalContent.style.height = "440px";
  });
});

btnSelectPrivacy.addEventListener('click', function () {
  contentCreatePost.classList.remove('active');
  choosePublic.classList.add('active');
  modalContent.style.height = "450px";
});
btnShowPattern.addEventListener('click', function () {
  document.querySelector('.bg-patterns').classList.add('active');
  btnHidePattern.classList.add('active');
  this.classList.remove('active');
});
btnHidePattern.addEventListener('click', function () {
  document.querySelector('.bg-patterns').classList.remove('active');
  btnShowPattern.classList.add('active');
  this.classList.remove('active');
});
btnPtnCategory.addEventListener('click', function () {
  patternCategory.classList.add('active');
  contentCreatePost.classList.remove('active');
  modalContent.style.height = "530px";
});

modalCreatePost.forEach(function (item) {
  item.addEventListener('click', function () {
    modal.style.display = "flex";
    createMenu.classList.remove('active');
  });
});

// For Custom Radio ==> Add active Class
var radioGroup = document.querySelector(".radio-group");
var customRadio = radioGroup.getElementsByClassName("custom-radio");
for (var i = 0; i < customRadio.length; i++) {
  customRadio[i].addEventListener("click", function () {
    var current = radioGroup.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}

var patternGroup = document.querySelector(".pattern-group");
var pattern = patternGroup.getElementsByClassName("pattern");
for (var i = 0; i < pattern.length; i++) {
  pattern[i].addEventListener("click", function () {
    var current = patternGroup.getElementsByClassName("active");
    if (current.length > 0) {
      current[0].className = current[0].className.replace(" active", "");
    }
    this.className += " active";
  });
}

window.onclick = function (event) {
    if (event.target == modal) {
      modal.style.display = "none";
      contentCreatePost.classList.add('active');
      choosePublic.classList.remove('active');
      patternCategory.classList.remove('active');
      modalContent.style.height = "440px";
    }
  }