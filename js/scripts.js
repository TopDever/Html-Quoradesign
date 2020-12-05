function toggleClass(btn, content) {
  btn.addEventListener('click', function () {
    content.classList.toggle('active');
  });
}

if (document.querySelector('.following-tags') !== null) {
  var followingTags = document.querySelector('.following-tags');
  var followingList = followingTags.querySelector('.following-list');
  var btnLink = followingTags.querySelector('.btn-link');
  btnLink.addEventListener('click', function () {
    followingList.classList.toggle('active');
    if (followingList.classList.contains('active')) {
      this.innerText = "See Less";
    } else {
      this.innerText = "See More";
    }
  });
}

// Show Header Create Post
if (document.getElementById('btn-showCreatePost') !== null) {
  var btnShowCreatePost = document.getElementById("btn-showCreatePost");
  var createMenu = document.querySelector('.create-menu');
  toggleClass(btnShowCreatePost, createMenu);
}

// For Communication
if (document.querySelector('.communications') !== null) {
  var communications = document.querySelector('.communications');
  var cmList = communications.querySelector('.communications-list');
  var cmBody = communications.querySelector('.communications-body');
  var btnTab = cmList.querySelectorAll('.btn-tab');
  var cmItem = cmBody.querySelectorAll('.cm-item');
  function openTab(event, tabName) {
    var i;
    for (i = 0; i < cmItem.length; i++) {
      cmItem[i].classList.remove('active');
    }
    for (i = 0; i < btnTab.length; i++) {
      btnTab[i].className = btnTab[i].className.replace(" active", "");
    }
    document.getElementById(tabName).classList.add('active');
    event.currentTarget.className += " active";
  }
}

// For Link Preview On Story
if (document.querySelector('.link-content') !== null) {
  var linkContent = document.querySelector('.link-content');
  var btnLink = linkContent.querySelector('.btn-link');
  btnLink.addEventListener('click', function () {
    linkContent.classList.toggle('active');
    this.classList.toggle('rotate')
  });
}

// For story Seekbar
if (document.querySelector('.seekbar-content') !== null) {
  var seekbarContent = document.querySelector('.seekbar-content');
  var line = seekbarContent.querySelectorAll('.line');
  var dataSrc = [];
  line.forEach(function (item, i) {
    dataSrc[i] = item.dataset.progress;
    item.childNodes[0].style.width = dataSrc[i] + "%";
  });
}

// Show Report Menu
if (document.querySelector('.btn-showReport') !== null) {
  var btnShowReport = document.querySelector('.btn-showReport');
  var reportStory = document.querySelector('.report-story');
  btnShowReport.addEventListener('click', function () {
    reportStory.classList.toggle("active");
  });
}

// For Communication
if (document.getElementById('message-content') !== null) {
  var messageContent = document.getElementById('message-content');
  var btnShowMoreMenu = messageContent.querySelectorAll('.btn-showMoreMenu');
  var moreMenu = messageContent.querySelectorAll('.more-menu');
  var btnShowReactMenu = messageContent.querySelectorAll('.btn-showReactMenu')
  var reactMenu = messageContent.querySelectorAll('.react-menu');
  var btnShowReply = messageContent.querySelectorAll('.btn-showReply');
  var chatMessageList = messageContent.querySelector('.chat-messageList');
  var chatReply = messageContent.querySelector('.chat-reply');
  var btnCloseReply = messageContent.querySelector('.btn-closeReply');
  var chatContactInfo = messageContent.querySelector('.chat-contact-info');
  var chatContactMenu = messageContent.querySelector('.chat-contact-menu');
  btnShowReply.forEach(function (item, i) {
    item.addEventListener('click', function () {
      chatMessageList.classList.add('reply');
      chatReply.classList.add('active');
    });
  });
  btnCloseReply.addEventListener('click', function () {
    chatMessageList.classList.remove('reply');
    chatReply.classList.remove('active');
  });
  chatContactInfo.addEventListener('click', function () {
    chatContactMenu.classList.toggle('active')
  });
  btnShowMoreMenu.forEach(function (item, i) {
    item.addEventListener('click', function () {
      moreMenu[i].classList.toggle('active');
    });
  });
  btnShowReactMenu.forEach(function (item, i) {
    item.addEventListener('click', function () {
      reactMenu[i].classList.toggle('active');
    });
  });
}

// Profile Tabs
if (document.querySelector('.profile-tabs') !== null) {
  var profileTabs = document.querySelector('.profile-tabs');
  var tabItem = profileTabs.querySelectorAll('.tab-item');
  var profileBody = document.querySelector('.profile-body');
  var profilePage = profileBody.querySelectorAll('.profile-page');

  function openProfileTab(event, tabName) {
    var i;
    for (i = 0; i < tabItem.length; i++) {
      tabItem[i].className = tabItem[i].className.replace(" active", "");
    }
    for (i = 0; i < profilePage.length; i++) {
      profilePage[i].classList.remove('active');
    }
    
    document.querySelector(tabName).classList.add('active');
    event.currentTarget.className += " active";
  }
}