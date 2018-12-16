searchFunction();
function searchFunction() {
var input,filter,temp,tfilter,tmp2,tfilter2,ii,i,li,ul;
    ul = document.getElementById("myUL");
    li = ul.getElementsByTagName('component');
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
  tmp2 = tfilter.indexOf(' ',temp+1);
  for(ii = 0;ii<20&&temp!=-1;ii++){
    
      if(temp!=-1){
        tfilter2=filter.substring(temp,tmp2);
        tfilter=filter.substring(temp);
      }
if(tmp2==-1)
break;
for (i = 0; i < li.length; i++) {
        if (!(li[i].getAttribute('data-tags').toUpperCase().indexOf(tfilter2) > -1)) {
          li[i].style.display = "none";
        }
      }
temp = filter.indexOf(' ',temp+1);
tmp2 = filter.indexOf(' ',temp+1);
    }}
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
function setup(){
var ul = document.getElemenetById('myUL');
var comps = ul.getElementsByTagName('component');
var tags,lang,title,desc,img,final;
for(var i = 0;i<comps.length;i++){
tags = "";
if(!(comps[i].hasAttribute('data-lang'))){
comps[i].setAttribute('data-lang','html');
}
if(!(comps[i].hasAttribute('data-title'))){
comps[i].setAttribute('data-title','FIX THIS');
}
if(!(comps[i].hasAttribute('data-desc'))){
comps[i].setAttribute('data-desc','FIX  ME');
}
if(!(comps[i].hasAttribute('data-img'))){
comps[i].setAttribute('data-img','pictures/image.jpg');
}
if(!(comps[i].hasAttribute('data-link'))){
comps[i].setAttribute('data-link','endless.horse');
}
if (!(comps[i].hasAttribute('data-tags'))){
comps[i].setAttribute('data-tags',' '+comps[i].getAttribute('data-lang')+' component');
}
if(comps[i].getAttribute('data-lang')=='html'){
comps[i].innerHTML="<div name=\"com\"><div class=\"uk-card uk-card-default uk-card-hover\"><div class=\"uk-card-body\"><div class=\"uk-card-badge uk-label\">HTML</div><a href=\""+comps[i].getAttribute('data-link')+"\" class=\"n\"><div class=\"uk-card-media-top\"><img src=\""+comps[i].getAttribute('data-img')+"\" alt=\"video\"></div><h3 class=\"uk-card-title\">"+comps[i].getAttribute('data-title')+"</h3><p>"+comps[i].getAttribute('data-desc')+"</p></a></div>";
}
