'use strict'

// rusurobertchampionsx@gmail.com
// HHd1135g

const addClassError = (arrayOfElements) => {
    arrayOfElements.forEach(input => {
        input?.parentElement?.classList?.add('error');
    })
}

const removeClassError = (arrayOfElements) => {
    arrayOfElements.forEach(input => {
        input?.parentElement?.classList?.remove('error');
    })
}

const orderCall = () => {
    const name = document.getElementById("bookingName");
    const tel = document.getElementById("bookingTel");
    const email = document.getElementById("bookingEmail");

    removeClassError([name, tel])

    const elementWhitoutValue = [name, tel].filter(element => {
        if (!element.value) {
            return element;
        }
    });

    console.log(elementWhitoutValue);

    if (elementWhitoutValue.length) {
        addClassError(elementWhitoutValue)
        return;
    }

    var params = {
        name: name.value,
        tel: tel.value,
        email: email.value,
    };

    removeClassError(elementWhitoutValue)

    const serviceID = "service_gxfi1qr";
    const templateID = "template_03sv0nm";

    emailjs.send(serviceID, templateID, params)
        .then(res => {
            name.value = "";
            tel.value = "";
            email.value = "";
            console.log(res);
            alert("Your message sent successfully!!")
        })
        .catch(err => console.log(err));
}

const orderCallBtn = document.getElementById('bookingSendButton');
orderCallBtn.addEventListener('click', orderCall)




const reservRoom = () => {
    const form = document.querySelector('.booking__second-form');
    const name = form.querySelector("#bookingName");
    const email = form.querySelector("#bookingEmail");
    const tel = form.querySelector("#bookingTel");
    const room = form.querySelector(".booking-room-select");
    const person = form.querySelector("#persons");
    const message = form.querySelector("#message");

    const inputElementsArray = [name, tel, room, person];

    removeClassError(inputElementsArray);

    const elementWhitoutValue = inputElementsArray.filter(element => {
        if (!element?.value) {
            return element;
        }
    });

    // console.log(elementWhitoutValue);

    if (elementWhitoutValue.length) {
        addClassError(elementWhitoutValue)
        return;
    }

    // var params = {
    //     name: name.value,
    //     tel: tel.value,
    //     email: email.value,
    // };

    // removeClassError(elementWhitoutValue)

    // const serviceID = "service_gxfi1qr";
    // const templateID = "template_03sv0nm";

    // emailjs.send(serviceID, templateID, params)
    //     .then(res => {
    //         name.value = "";
    //         tel.value = "";
    //         email.value = "";
    //         console.log(res);
    //         alert("Your message sent successfully!!")
    //     })
    //     .catch(err => console.log(err));

    Email.send({
        Host: "smtp.elasticemail.com",
        Username: "username",
        Password: "password",
        To: "rusurobertchampionsx@gmail.com",
        From: "rusurobertchampionsx@gmail.com",
        Subject: "This is the subject",
        Body: "And this is the body"
    }).then(
        message => alert(message)
    );
}

const reservRoomBtn = document.getElementById('bookingReservButton');
reservRoomBtn.addEventListener('click', reservRoom)


// Salut,

// Ai un mesaj de la {{name}}  {{email}}

// Nr. de telefon: {{tel}}

// {{name}} vrea sa rezerveze camera {{room}}, pentru {{persons}} persoane

// {{message}}

// Hanul Nordic