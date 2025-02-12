const quotes = [
    {Text: "The best way to predict the future is to invent it.", author: "Alan Kay"}, 
    {Text: "Life is 10% what happens to us and 90% how we react  to it.", author: "Charles R. Swindoll"}, 
    {Text: "Your time is limited, so don't waste it living someone else's life.", author: "Steve Jobs"}, 
    {Text: "Strive not to be a success, but rather to be of value.", author: "albert Eintein"}
]; 

function generateQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length ); 
    document.getElementById("quote").textContent = `" ${quotes[randomIndex].Text} "`; 
    document.getElementById("author").textContent = `— ${quotes[randomIndex].author}`; 

}

function shareOnWhatsApp() {
    const quote = document.getElementById("quote").textContent;
    const author = document.getElementById("author").textContent;
    const whatsappUrl = `https://api.whatsapp.com/send?text=${encodeURIComponent(quote + " " + author)}`;
    window.open(whatsappUrl, "_blank");
}

document.getElementById("dark-mode-toggle").addEventListener("click", function(){
    document.body.classList.toggle("dark-mode");
}); 

generateQuote(); 
