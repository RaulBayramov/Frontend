console.log('Hello Backend');

const xhr = new XMLHttpRequest();
xhr.open('Get', 'https://fakestoreapi.com');
xhr.onload = function () {
    if (xhr.status === 200) {
        console.log('Response', xhr.response);
    }
    else {
        console.log('Error', xhr.status);
    }
}
xhr.onerror = function () {
    console.log('Request failed');
}
xhr.send();