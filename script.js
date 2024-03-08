// Get the 'Calculate Age' button and initialize date, month, and year arrays
let btn = document.getElementById("btn");
let date = [];
let month = [];
let year = [];

// Populate the 'Date' dropdown with options from 1 to 31
for (let i = 1; i <= 31; i++) {
  date[i] = i;
  let option = document.createElement("option");
  document.getElementById("date-options").appendChild(option);

  // Ensure that single-digit days are formatted with a leading zero for consistency
  date[i] = date[i] < 10 ? "0" + date[i] : date[i];
  option.innerHTML = date[i];
}

// Populate the 'Month' dropdown with options from 1 to 12
for (let i = 1; i <= 12; i++) {
  month[i] = i;
  let option = document.createElement("option");
  document.getElementById("month-options").appendChild(option);

  // Ensure that single-digit months are formatted with a leading zero for consistency
  month[i] = month[i] < 10 ? "0" + month[i] : month[i];
  option.innerHTML = month[i];
}

// Populate the 'Year' dropdown with options from 1901 to 2024
for (let i = 2024; i >= 1901; i--) {
  year[i] = i;
  let option = document.createElement("option");
  document.getElementById("year-options").appendChild(option);
  option.innerHTML = year[i];
}

// Event listener for the 'Calculate Age' button click
btn.addEventListener("click", () => {
  // Retrieve the selected date, month, and year values
  let dayOfBirth = document.querySelector("#date-options").value;
  let monthOfBirth = document.querySelector("#month-options").value;
  let yearOfBirth = document.querySelector("#year-options").value;

  // Format the selected date as a string in the 'yyyy-mm-dd' format
  let ageInDate = yearOfBirth + "-" + monthOfBirth + "-" + dayOfBirth;
  let ageInMilliseconds = Date.parse(ageInDate);
  let currentDate = new Date();

  // Calculate the difference between the current date and the selected date
  let realAge = currentDate - ageInMilliseconds;

  // Create a new Date object from the calculated age difference
  realAge = new Date(realAge);

  // Extract years, months, and days from the calculated age
  let ageDay = realAge.getDate();
  let ageMonth = realAge.getMonth();
  let ageYear = realAge.getFullYear() - 1970;

  // Display the calculated age in the output paragraph
  document.getElementById(
    "output"
  ).innerText = `Your age is ${ageYear} years ${ageMonth} months ${ageDay} days.`;
});
