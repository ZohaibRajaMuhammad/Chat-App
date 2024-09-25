var list = [];
var div = document.getElementById("messages");

var autoReplies = [
    "Hey",
    "I am Good",
    "Where are you from"
];

function handelSend() {
    var msgText = document.getElementById("msg");
    if (msgText.value != "") {
        list.push({ text: msgText.value, admin:false });
        handelDisplay();

        msgText.value = "";
        setTimeout(() => {
            let getMsgIndex  = Math.floor(Math.random() * autoReplies.length);
            list.push({ text: autoReplies[getMsgIndex], admin:true });
            handelDisplay();
        }, 1000);
    }
}

function handelDisplay() {
    div.innerHTML = "";
    for (count = 0; count < list.length; count++) {
        div.innerHTML += `<div class=" flex ${list[count].admin ? "self-start" : "self-end"} bg-white inline-block p-2 px-6 rounded-lg border border-black mx-2">${list[count].text}</div>`;
    }
}
