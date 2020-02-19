let xhr = new XMLHttpRequest();
xhr.open('PUT', 'page/user/10');
xhr.setRequestHeader('Content-Type', 'application/json');
xhr.onload = function() {
    if (xhr.status === 200) {
        let user = JSON.parse(xhr.responseText);
    }
};
xhr.send(JSON.stringify({
    name: 'John Doe',
    age: 27
}));