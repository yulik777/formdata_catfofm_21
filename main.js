postButton.onclick = function (event) {
    event
        .preventDefault();


    fetch("https://httpbin.org/post", {
            method: 'POST',
            body: new FormData(form),
        })
        .then(response => response.json())
        .then(user => {
            console.log(user);
        })
        .catch(error => console.log(error));
}