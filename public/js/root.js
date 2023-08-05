const homeBanner = document.querySelector('.banner');

const url = window.location.toString().split("/");

if (url[3] != ''){
    homeBanner.style.display = 'none';
}
else{
    homeBanner.style.display = 'block';
}