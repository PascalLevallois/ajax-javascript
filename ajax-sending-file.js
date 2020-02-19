// PART ONE
let file = $('#my-input')[0].files[0];

$.ajax('mysite/uploads', {
    method: 'POST',
    contentType: file.type,
    processData: false,
    data: file
});

// PART TWO - Multi-part encoded
let formData = new FormData(),
    file = document.getElementById('my-input').files[0],
    xhr = new XMLHttpRequest();

formData.append('file', file);
xhr.open('POST', 'mysite/uploads');
xhr.send(formData);

// PART THREE - Sending file
let file = document.getElementById('my-input').files[0],
    xhr = new XMLHttpRequest();

xhr.open('POST', 'site/uploads');
xhr.setRequestHeader('Content-Type', file.type);
xhr.send(file);

