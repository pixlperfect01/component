searchFunction();
function searchFunction() {
var input,filter,temp,tfilter,temp2,tfilter2,ii,i,li,ul;
    ul = document.getElementById("myUL");
    li = ul.getElementsByTagName('li');
input = document.getElementById('searching');
filter = input.value.toUpperCase();
for (i = 0; i < li.length; i++) {
      li[i].style.display = "";
}
  filter=" "+filter;
  filter+=" ";
console.log(filter);
console.log('');
  tfilter = filter;
  temp = tfilter.indexOf(' ');
  temp2 = tfilter.indexOf(' ',temp+1);
  for(ii = 0;ii<20&&temp!=-1;ii++){
    
      if(temp!=-1){
        tfilter2=filter.substring(temp,temp2);
        tfilter=filter.substring(temp);
      }
if(temp2==-1)
break;
for (i = 0; i < li.length; i++) {
        if (!(li[i].getAttribute('data-search-tags').toUpperCase().indexOf(tfilter2) > -1)) {
          li[i].style.display = "none";
        }
      }
temp = filter.indexOf(' ',temp+1);
temp2 = filter.indexOf(' ',temp+1);
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
