document.addEventListener("DOMContentLoaded", () => {
        const charactersContainer = document.querySelector('.characters');

        charactersContainer.innerHTML = "Chargement en cours ..."
        /*async function fetchStarWarsData() {
            try {
                    const response = await fetch('https://swapi.dev/api/people/');
                    if(!response.ok) {
                        throw new Error("Echec de la récupération des personnages")
                    }

                    const data = await response.json();
                    
                    data.results.forEach(character => {
                        const characterElement = document.createElement('div');
                        characterElement.classList.add('character');
                        characterElement.innerHTML = `
                            <h2>${character.name}</h2>
                            <p>Genre : ${character.gender}</p>
                            <p>Année de naissance : ${character.birth_year}</p>
                            <p>Taille : ${character.height}</p>
                        `
                        charactersContainer.appendChild(characterElement)
                    });
                } catch(error) {
                console.error(error)
                charactersContainer.innerHTML = '<p>Une erreur s\'est produite'
            }
        }*/

        function fetchStarWarsData(){
            fetch("https://swapi.dev/api/people/")
            .then(response => {
                if(!response.ok) {
                    throw new Error("Echec de la récupération des personnages")
                }

                return response.json()
            })
            .then(data => { 

                charactersContainer.innerHTML = "";
                data.results.forEach(character => {
                    const characterElement = document.createElement('div');
                    characterElement.classList.add('character');
                    characterElement.innerHTML = `
                        <h2>${character.name}</h2>
                        <p>Genre : ${character.gender}</p>
                        <p>Année de naissance : ${character.birth_year}</p>
                        <p>Taille : ${character.height}</p>
                    `
                    charactersContainer.appendChild(characterElement)
                })
            })
            .catch(error => {
                console.error(error);
                charactersContainer.innerHTML = '<p>Une erreur s\'est produite'
            
            })
        }
        fetchStarWarsData()
})