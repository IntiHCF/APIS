// Inti Catacora 78368
async function fetchUsersData() {
   try {
       // The 'await' keyword pauses execution until the fetch Promise resolves
       const response = await fetch("data/Users.json");
       if (!response.ok) {
          // If response has an error status code, log a message
          // This handles cases like 404 (not found), 500 (server error), etc.
          console.log(`Network response was not ok - Status: ${response.status} ${response.statusText}`);
          return; // Stop executing the function if there was an error
        }
        else {
          // For successful responses, convert the response object to a parsed JavaScript object
          const data = await response.json();
          // Output the parsed user data object to the console
          console.log(data);
          displayUsers(data);
        }
    } // End try block
    catch (error) {
        // Catch network errors, JSON parsing errors, or any other exceptions
        console.error(`Error fetching user data: ${error}`);
    }
}

fetchUsersData();

// Function to handle the DOM output
function displayUsers(UsersArray) {
    const container = document.getElementById("Users-container");
    let htmlOutput = "";

    // Loop through each product in the array
    UsersArray.forEach(users => {
        // Build the HTML string using compound assignment operator and template literals
        htmlOutput += `
            <p><b>${users.firstName}</b>  Price: $${users.lastName} age: $${users.age}  Is Active?: ${users.active}</p>
        `;
    });

    // Output the final HTML to the page
    container.innerHTML = htmlOutput;
}