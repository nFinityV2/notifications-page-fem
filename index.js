const notifCounter = document.getElementById("notif-counter");
const markRead = document.getElementById("mark-read");
const feedElements = document.querySelectorAll(".feed-block");
const unreadElements = document.querySelectorAll(".marker");

notifCounter.innerText = `${unreadElements.length}`

const removeNotifs = () => {
    
   feedElements.forEach(element => {
    element.classList.remove("read");
   })

   unreadElements.forEach(element => {
    element.classList.remove("marker");
   })

   notifCounter.innerText = `0`
   
}