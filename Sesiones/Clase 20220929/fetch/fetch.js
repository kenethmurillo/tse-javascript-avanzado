import fetch from 'node-fetch';
import XMLHttpRequest from 'xhr2';

const url = 'https://api.nasa.gov/planetary/apod?api_key=HIiZx47hoDT698EHbs1Qmt4zBAvv9sJaoNe36oc6';

// Promise with .then
fetch(url)
    .then(response => response.json())
    .then(data => console.log(data));

// Promise with Async/Await
async function fetchRequest() {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
}
fetchRequest();

// options
const response = await fetch(url, {
    method: 'GET',
    mode: 'cors',
    credentials: 'omit',
    referrerPolicy: 'no-referrer',
    headers: {
        ContentType: "application/json"
    }
});

// Simple Handle error
async function fetchRequestWithError() {
    const response = await fetch(url);

    if (response.status >= 200 && response.status < 400) {
        const data = await response.json();
        console.log(data);
    } else {
        // Handle error
        console.error(`${response.statusText}: ${response.status} error.`)
    }
}

// Robust Handle Error
async function fetchRequestWithTryCatchError() {
    try {

        const response = await fetch(url);

        if (response.status >= 200 && response.status < 400) {
            const data = await response.json();
            console.log(data);
        } else {
            // Handle error
            console.error(`${response.statusText}: ${response.status} error.`)
        }
    } catch (error) {
        console.error(`${response.statusText}: ${response.status} error.`)
    }
}

// XMLHttpRequest
const request = new XMLHttpRequest();
request.open('GET', url);
request.send();

request.onload = () => {
    if (response.status >= 200 && response.status < 400) {
        const data = JSON.parse(request.response);
        console.log(data);
    } else {
        // Handle error
        console.error(`${response.statusText}: ${response.status} error.`);
    }
}




