function submitForm(event) {
    event.preventDefault();

    let name = document.getElementById("name").value;
    let response = document.getElementById("response");

    response.style.color = "green";
    response.innerText = "Thank you " + name + "! Your message has been sent.";

    document.querySelector("form").reset();
}