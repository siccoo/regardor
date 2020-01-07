const Twilio = require("twilio");

const client = new Twilio("AC592eed9a95a27823a5dd0a0612a6323f", "7e6e5927a61655aced4e88a906fb771e");

client.messages
    .list()
    .then(messages => 
        console.log(`The most recent message is ${messages[0].body}`)
).catch(err => console.error(err));

console.log('Gathering you message log');

