const apiUrl = 'https://randomuser.me/api';

document.getElementById('download').onclick = () => {
    const people = document.getElementsByClassName('person');
    const messageArea = document.getElementById('message');
    messageArea.innerHTML = '';
    for (let human of people) {
        fetch(apiUrl)
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                const personData = data.results[0];

                const picture = personData.picture.large;
                const name = personData.name.first + ' ' + personData.name.last;
                const city = personData.location.city;
                const country = personData.location.country;
                const postCode = personData.location.postcode;

                human.innerHTML = `
        <img src=${picture}></img>
        <p>Name: ${name}</p>
        <p>City: ${city}</p>
        <p>Country: ${country}</p>
        <p>Post Code: ${postCode}</p>
      `;
            })
            .then(() => {
                const message = document.createElement('p');
                message.innerHTML = `Request passed!`;
                message.style.color = 'green';
                messageArea.appendChild(message);
            })
            .catch((error) => {
                const message = document.createElement('p');
                message.innerHTML = `Request error!: ${error}`;
                message.style.color = 'red';
                messageArea.appendChild(message);
            });
    }
};
