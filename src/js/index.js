const form = document.querySelector("#contact-form")
const onClick = document.querySelector("#click");
const nameInput = document.querySelector("#aboutUserInput");
const emailInput = document.querySelector("#aboutUserEmailInput");
const messageInput = document.querySelector("#aboutUserMessageInput");

const message = document.querySelector("#aboutEnteredText");


onClick.addEventListener("click", function(event){

    event.preventDefault();

    if(nameInput.value === ""){

        message.textContent = "Please enter your name.";

    } else if(emailInput.value === ""){

        message.textContent = "Please enter your email.";

    }else if(messageInput.value === ""){

        message.textContent = "Please enter your message.";

    }else{

        message.textContent = "Message sent.";

    }
    
});
