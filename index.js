document.addEventListener("DOMContentLoaded", () => {
    const searchButton = document.getElementById("search-button");
    const digimonInput = document.getElementById("digimon-input");
    const resultContainer = document.getElementById("result-container");

    searchButton.addEventListener("click", () => {
        const searchTerm = digimonInput.value.trim();
        if (searchTerm !== "") {
            // Hacer una solicitud a la API de Digimon
            fetch(`https://digimon-api.vercel.app/api/digimon/name/${searchTerm}`)
                .then((response) => response.json())
                .then((data) => {
                    if (data.length > 0) {
                        const digimon = data[0];
                        resultContainer.innerHTML = `
                            <h2>${digimon.name}</h2>
                            <img src="${digimon.img}" alt="${digimon.name}" />
                            <p>Tipo: ${digimon.type}</p>
                            <p>Nivel: ${digimon.level}</p>
                        `;
                    } else {
                        resultContainer.innerHTML = "<p>No eres digno, intenta de nuevo</p>";
                    }
                })
                .catch((error) => console.error("Error:", error));
        }
    });
});
