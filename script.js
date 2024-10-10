document.getElementById("bookingForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const name = document.getElementById("name").value;
    const date = document.getElementById("date").value;
    const time = document.getElementById("time").value;
    const people = document.getElementById("people").value;

    const confirmationMessage = `Thank you, ${name}! Your table for ${people} has been booked on ${date} at ${time}.`;
    document.getElementById("confirmationMessage").innerText = confirmationMessage;
    document.getElementById("confirmationMessage").classList.remove("hidden");

    this.reset(); // Reset the form fields
});
