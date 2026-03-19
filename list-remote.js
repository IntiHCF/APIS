// Fetch function
async function fetchCountriesData() {
    try {
        const response = await fetch("https://restcountries.com/v3.1/region/europe");
        if (!response.ok) {
            console.log(`Network response was not ok - Status: ${response.status}`);
            return;
        }
        const data = await response.json();
        console.log(data);
        // Verify the code is working by logging the data to the console
        console.log(data);
        // Call the display function
        displayCountriesData(data);
    } catch (error) {
        const container = document.getElementById("remote-data-container");
        container.innerHTML = '<p class="error">⚠️ Failed to load data. Please try again later.</p>';   
        console.error(`Error fetching data: ${error}`);
    }
}

// Display function
function displayCountriesData(countriesArray) {
    const container = document.getElementById("remote-data-container");
    let htmlOutput = "";

    countriesArray.forEach(country => {
        htmlOutput += `
    <div style="border: 1px solid #ccc; padding: 12px; border-radius: 6px;"><img src="${country.flags.png}" alt="Flag of ${country.name.common}" width="100">
         <p>
            <b>${country.name.common}</b><br>
            Capital: ${country.capital[0]}<br>
            Population: ${country.population.toLocaleString()}<br>            
            Region: ${country.region}
         </p>
    </div>
    `;
    });

    container.innerHTML = htmlOutput;
}


// Event listener on the parent container
document.getElementById("button-container").addEventListener("click", function(e) {
    if (e.target.id === "btn-countries") {
        fetchCountriesData();
    } else if (e.target.id === "btn-users") {
        fetchUsersData();   
    }
    else if (e.target.id === "btn-RickMorty")
        fetchRickMortyData();   
}); 


// Fetch function
async function fetchUsersData() {
    try {
        const response = await fetch("https://randomuser.me/api/?results=10");
        if (!response.ok) {
            console.log(`Network response was not ok - Status: ${response.status}`);
            return;
        }
        const data = await response.json();
        console.log(data);
        // Verify the code is working by logging the data to the console
        console.log(data);
        // Call the display function
        displayUsersData(data);
    } catch (error) {
        const container = document.getElementById("remote-data-container");
        container.innerHTML = '<p class="error">⚠️ Failed to load data. Please try again later.</p>';   
        console.error(`Error fetching data: ${error}`);
    }
}

function displayUsersData(usersArray) {
    const container = document.getElementById("remote-data-container");
    let htmlOutput = "";

    usersArray.forEach(user => {
        htmlOutput += `
        <p><img src="${user.picture.thumbnail}" alt="Picture of ${user.name.first} ${user.name.last}" width="50"></p>
            <p>
            <b>${user.name.first} ${user.name.last}</b><br>
            Email: ${user.email}<br>              
            Location: ${user.location.city}, ${user.location.country}
            </p>
        `;
    });
    container.innerHTML = htmlOutput;
}

// Fetch function
async function fetchRickMortyData() {
    try {
        const response = await fetch("https://rickandmortyapi.com/api/character");
        if (!response.ok) {
            console.log(`Network response was not ok - Status: ${response.status}`);
            return;
        }
        const data = await response.json();
        console.log(data);
        // Verify the code is working by logging the data to the console
        console.log(data);
        // Call the display function
        displayRickMortyData(data.results);
    } catch (error) {
        const container = document.getElementById("remote-data-container");
        container.innerHTML = '<p class="error">⚠️ Failed to load data. Please try again later.</p>';   
        console.error(`Error fetching data: ${error}`);
    }
}

function displayRickMortyData(RickMortyArray) {
    const container = document.getElementById("remote-data-container");
    let htmlOutput = "";

    RickMortyArray.forEach(character => {
        htmlOutput += `
        <div style="border: 1px solid #ccc; padding: 12px; border-radius: 6px;">
        <img src="${character.image}" alt="Picture of ${character.name}" width="100"></p>
            <p>
            <b>${character.name}</b><br>
            Status:${character.status}<br>
            </p>
            </div>
        `;
    });
    container.innerHTML = htmlOutput;
}