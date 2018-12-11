function searchFunction() {
    var input, filter, ul, li, a, i, ii, tfilter, tfilter2, temp, temp2;
    temp2=0;
    input = document.getElementById('searching');
    filter = input.value.toUpperCase();
    ul = document.getElementById("myUL");
    li = ul.getElementsByTagName('li');
    for (i = 0; i < li.length; i++) {
      li[i].style.display = "none";
    }
    // Loop through all list items, and hide those who don't match the search query
    tfilter = filter;
    tfilter2 = filter;
    temp2 = tfilter2.indexOf(' ',1);
    temp = tfilter2.indexOf(' ',1);
    for(ii = 0;ii<20;ii++){
      temp = temp2
      temp2 = tfilter2.indexOf(' ',temp+1);
    
      if(temp!=-1){
        tfilter=tfilter.substring(temp);
        tfilter2=tfilter.substring(temp+1,temp2);
      }else{
        break;
      }
      
      for (i = 0; i < li.length; i++) {
        if (li[i].getAttribute('data-search-tags').toUpperCase().indexOf(tfilter) > -1) {
          li[i].style.display = "";
        }
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
/*if(var number=getUrlVars()["dark"]){
  document.getElementById('navbarcol').style.backgoundColor = rgb(7,7,7);
  document.getElementById('navbarcol').style.color = rgb(102,102,102);
  ducument.body.style.backgroundColor=rgb(0,0,0);
  document.body.style.color=rgb(255,255,255);
  document.getElementsByName('com')[0].style.backgroundColor=rgb(255,255,255);
  document.getElementsByName('com')[0].style.color=rgb(255,255,255);
  document.getElementsByName('com')[1].style.backgroundColor=rgb(255,255,255);
  document.getElementsByName('com')[1].style.color=rgb(255,255,255);
  document.getElementsByName('com')[2].style.backgroundColor=rgb(255,255,255);
  document.getElementsByName('com')[2].style.color=rgb(255,255,255);
  document.getElementsByName('com1')[0].style.backgroundColor=rgb(30,135,240);
  document.getElementsByName('com1')[0].style.color=rgb(255,255,255);
}*/
function googleTranslateElementInit() {
  new google.translate.TranslateElement({pageLanguage: 'en'}, 'google_translate_element');
}
function getUrlVars() {
  var vars = {};
  var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m,key,value) {
        vars[key] = value;
    });
  return vars;
}
