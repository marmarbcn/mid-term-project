const SERVER_URL = 'http://localhost:3000/contacts'
window.onload = () => {


    function handleSubmit(event) {
        event.preventDefault();
        const name = document.querySelector('[name="name"]').value;
        const email = document.querySelector('[name="email"]').value;
        const phone = document.querySelector('[name="phone"]').value;
        const message = document.querySelector('[name="message"]').value;

        const newContact = {
            name,
            email,
            phone,
            message
        }
        addContactData(newContact);
    }
    function addContactData(contact) {
        fetch(SERVER_URL, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(contact)
        })
            .then(response => response.json())
            .then(response => console.log(JSON.stringify(response)))
    }

    function submitForm() {

        document.querySelector('form').addEventListener('submit', handleSubmit)
    }

    submitForm();

}