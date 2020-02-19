let xhr = new XMLHttpRequest();
xhr.open('GET', 'site-page/name?id=a-unique-id');
xhr.onload = function() {
    if (xhr.status === 200) {
        alert('Your name is ' + xhr.responseText);
    }
    else {
        alert('Request failed.  Returned status of ' + xhr.status);
    }
};
xhr.send();