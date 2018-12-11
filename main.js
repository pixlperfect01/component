function searchFunction() {
    var input, filter, ul, li, a, i;
    input = document.getElementById('searching');
    filter = input.value.toUpperCase();
    ul = document.getElementById("myUL");
    li = ul.getElementsByTagName('li');

    // Loop through all list items, and hide those who don't match the search query
    for (i = 0; i < li.length; i++) {
      if (li[i].getAttribute('data-search-tags').toUpperCase().indexOf(filter) > -1) {
        li[i].style.display = "";
      } else {
        li[i].style.display = "none";
      }
    }
}
function clearSearch() {
    var input, filter, ul, li, a, i;
    input = document.getElementById('searching');
    input.value = "";
    filter = input.value.toUpperCase();
    ul = document.getElementById("myUL");
    li = ul.getElementsByTagName('li');

    
    for (i = 0; i < li.length; i++) {
      li[i].style.display = "";
    }
}
function googleTranslateElementInit() {
  new google.translate.TranslateElement({pageLanguage: 'en'}, 'google_translate_element');
}
    document.body.style.backgroundColor = sessionStorage.getItem("bg");
document.body.style.color = sessionStorage.getItem("cc");
function theme() {
    "rgb(255, 255, 255)" === sessionStorage.getItem("bg") ? (sessionStorage.setItem("bg", "rgb(6, 23, 37)"),
    sessionStorage.setItem("cc", "#777")) : null == sessionStorage.getItem("bg") ? (sessionStorage.setItem("bg", "rgb(6, 23, 37)"),
    sessionStorage.setItem("cc", "#777")) : "rgb(6, 23, 37)" === sessionStorage.getItem("bg") && (sessionStorage.setItem("bg", "rgb(255, 255, 255)"),
    sessionStorage.setItem("cc", "#333"));
    document.body.style.backgroundColor = sessionStorage.getItem("bg");
    document.body.style.color = sessionStorage.getItem("cc")
}
