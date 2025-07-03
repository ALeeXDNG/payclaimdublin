$(function () {
    $('.nav-btn').on('click', function () {
        $(this).toggleClass('open');
    });
});

$(window).ready(function () {
    $(window).scroll(function () {
        var scroll = $(window).scrollTop();
        if (scroll > 100) {
            $("#header").addClass('glass-effect');
        } else {
            $("#header").removeClass("glass-effect");
        }
    })
})

// script.js
function openTab(event, tabId) {
    // Hide all tab contents and remove "show" class
    var tabContents = document.getElementsByClassName("tab-content");
    for (let content of tabContents) {
      content.classList.remove("show");
      content.style.display = "none"; // Set display to none after transition
    }
  
    // Remove "active" class from all tab links
    var tabLinks = document.getElementsByClassName("tab-link");
    for (let link of tabLinks) {
      link.classList.remove("active");
    }
  
    // Show the current tab with smooth transition
    const activeTab = document.getElementById(tabId);
    activeTab.style.display = "block"; // Make it visible first
    setTimeout(() => activeTab.classList.add("show"), 10); // Add "show" class to fade in
  
    // Add "active" class to clicked tab
    event.currentTarget.classList.add("active");
  }
  
  