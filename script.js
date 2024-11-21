function fetchUserData() {
    fetch('https://randomuser.me/api')
        .then(response => response.json())
        .then(data => {
            const user = data.results[0];

            const userDiv = document.createElement('div');
            userDiv.classList.add('user');

            userDiv.innerHTML = `
                <img src="${user.picture.large}" alt="Фото користувача">
                <h3>${user.name.title} ${user.name.first} ${user.name.last}</h3>
                <p>Місто: ${user.location.city}, ${user.location.state}</p>
                <p>Поштовий індекс: ${user.location.postcode}</p>
                <p>Телефон: ${user.phone}</p>
            `;

            const userInfoContainer = document.getElementById('userInfoContainer');

            if (userInfoContainer.children.length >= 5) {
                userInfoContainer.innerHTML = '';
            }

            userInfoContainer.appendChild(userDiv);
        })
        .catch(error => console.error('Помилка при отриманні даних:', error));
}

document.getElementById('loadUsersButton').addEventListener('click', fetchUserData);
