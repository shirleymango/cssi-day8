const messagesRef = firebase.database().ref();

const submitMessage = (userMessage, userPasscode) => {
    messagesRef.push({
    message: userMessage,
    passcode: userPasscode
    });
}

document.querySelector("#sendMsg").addEventListener("click", (e) => {
    let passcode = document.querySelector("#passcode").value;
    let hasLowerCase = false, hasUpperCase = false, hasNumber = false, hasCharacter = false;
    for (let i = 0; i < passcode.length; i++) {
        let ascii = passcode.charCodeAt(i);
        if (ascii >= 65 && ascii <= 90) {
            hasUpperCase = true;
            hasCharacter = true;
        }
        else if (ascii > 96 && ascii<123) {
            hasLowerCase = true;
            hasCharacter = true;
        }
        else if (ascii>47 && ascii<58) {
            hasNumber = true;
        }
    }
    console.log(passcode);
    if (!(hasLowerCase && hasLowerCase && hasNumber && hasCharacter)) {
        alert("Your passcode must contain an uppercase letter, a lowercase letter, and a number.");
        return;
    }
    console.log("A".charCodeAt(0) == 65);
    let message = document.querySelector("#message").value;
    if (message.length > 100) {
        alert("Messages can only be 100 characters long. Your message is too long");
        return;
    }
    submitMessage(message, passcode);
    document.querySelector("form").reset();
});