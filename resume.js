
// Check if the localStorage object exists
if(localStorage) {
    // Store data
    localStorage.setItem("Name", "Ramsha");
    
    // Retrieve data
    alert("Hi, " + localStorage.getItem("Name"));
} 
else {
    alert("Sorry, your browser do not support local storage.");
}
