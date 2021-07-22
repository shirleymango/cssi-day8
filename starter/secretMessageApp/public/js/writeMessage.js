const messagesRef = firebase.database().ref();

messagesRef.push({
    message: "This was made with Javascript",
    passcode: "JavaScript",
    third: "test"
});

console.log("is running");