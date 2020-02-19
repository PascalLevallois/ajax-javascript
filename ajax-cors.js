let xhr = new XMLHttpRequest();
xhr.open('POST', 'http://mydomain.com');
xhr.withCredentials = true;
xhr.setRequestHeader('Content-Type', 'text/plain');
xhr.send('text');