// Array of 10 student objects
const arrStudents = [
    { firstName: "John", lastName: "Smith", email: "john@email.com", grade: "A" },
    { firstName: "Emma", lastName: "Brown", email: "emma@email.com", grade: "B" },
    { firstName: "Liam", lastName: "Jones", email: "liam@email.com", grade: "A" },
    { firstName: "Olivia", lastName: "Taylor", email: "olivia@email.com", grade: "C" },
    { firstName: "Noah", lastName: "Wilson", email: "noah@email.com", grade: "B" },
    { firstName: "Ava", lastName: "Moore", email: "ava@email.com", grade: "A" },
    { firstName: "James", lastName: "Martin", email: "james@email.com", grade: "B" },
    { firstName: "Sophia", lastName: "Lee", email: "sophia@email.com", grade: "A" },
    { firstName: "William", lastName: "Clark", email: "william@email.com", grade: "C" },
    { firstName: "Isabella", lastName: "Hall", email: "isabella@email.com", grade: "B" }
];

// Select container
const container = document.getElementById("studentsContainer");

// Loop through students and create cards
arrStudents.forEach(student => {
    container.innerHTML += `
        <div class="bg-gray-800 rounded-2xl shadow-lg p-5 border border-gray-700 hover:border-accent transition">
            <h2 class="text-xl font-semibold text-accent mb-2">
                ${student.firstName} ${student.lastName}
            </h2>
            <p class="text-sm text-gray-400 mb-1">Email:</p>
            <p class="mb-3">${student.email}</p>
            <span class="inline-block bg-accent/20 text-accent px-3 py-1 rounded-full text-sm">
                Grade: ${student.grade}
            </span>
        </div>
    `;
});
