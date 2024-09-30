//your JS code here. If required.
document.getElementById("userForm").addEventListener("submit", function(event) {
  event.preventDefault();  // Prevent form from submitting the usual way

  const age = document.getElementById("age").value;
  const name = document.getElementById("name").value;

  // Validate inputs are not empty
  if (!age || !name) {
    alert("Please fill out both fields.");
    return;
  }

  // Create a promise to validate the age after 4 seconds
  new Promise((resolve, reject) => {
    setTimeout(() => {
      if (age >= 18) {
        resolve();
      } else {
        reject();
      }
    }, 4000);
  })
  .then(() => {
    alert(`Welcome, ${name}. You can vote.`);
  })
  .catch(() => {
    alert(`Oh sorry, ${name}. You aren't old enough.`);
  });
});
