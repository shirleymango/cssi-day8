const getMessage = () => {
    const messagesRef = firebase.database().ref();
    messagesRef.on('value', (snapshot) => {
        const data = snapshot.val();
        console.log(data);
    });
}

const findMessage = (myPass) => {
    const messagesRef = firebase.database().ref();
    messagesRef.on('value', (snapshot) => {
        const data = snapshot.val();
        for(let key in data) {
            const message = data[key];
            console.log(message);
            if(myPass == message.passcode) {
                renderMessage(message); 
            }
        }
    });
}

const renderMessage = (messageObject) => {
    // Render messageas HTML
    document.querySelector('#message').innerHTML = messageObject.message;
}

document.querySelector('#viewMsg').addEventListener("click", (e)=> {
    const passcode = document.querySelector('#passcode').value;
    findMessage(passcode);
});