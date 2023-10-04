// Función para realizar la solicitud a la API de SWAPI
function fetchCharacters() {
    const apiUrl = 'https://swapi.dev/api/people/';

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            const characterList = document.getElementById('character-list');

            // Iterar a través de los resultados y mostrarlos en la lista
            data.results.forEach(character => {
                const listItem = document.createElement('li');
                listItem.innerHTML = `<strong>Nombre:</strong> ${character.name} </br><strong>Altura: </strong> ${character.height}`;
                characterList.appendChild(listItem);
            });
        })
        .catch(error => {
            console.error('Hubo un error al obtener los datos:', error);
        });
}

// Llamar a la función para obtener los personajes
fetchCharacters();