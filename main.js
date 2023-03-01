const quotes = [
    {
    quote: "Don't cry because it's over, smile because it happened.",
    author: "Dr. Seuss"
},
{
    quote: "You have brains in your head. Your have feet in your shoes. You can steer yourself in any direction you choose.",
    author: "Dr. Seuss"
},
{
    quote: "You're off to great places! Today is your day! Your mountain is waiting, so get on your way!",
    author: "Dr. Seuss"
},
{
    quote: "I have heard there are troubles of more than one kind. Some come from ahead and some come from behind. But I've brought a big bat. I'm all ready you see. Now my troubles are going to have troubles with me!",
    author: "Dr. Seuss"
},
{
    quote: "You're on your own. And you know what you know. And you are the one who'll decide where to go.",
    author: "Dr. Seuss"
},
{
    quote: "It is better to know how to learn than to know.",
    author: "Dr. Seuss"
},
{
    quote: "I'm afraid that sometimes you'll play lonely games too. Games you can't win 'cause you'll play against you.",
    author: "Dr. Seuss"
},
{
    quote: "Be who you are and say what you feel becuase those who mind don't matter and those who matter don't mind.",
    author: "Dr. Seuss"
},
{
    quote: "Today you are you, that is truer than true. There is no one alive that is youer than you.",
    author: "Dr. Seuss"
},
{
    quote: "I don't care how you go. Just get.",
    author: "Dr. Seuss"
},
{
    quote: "Sometimes you will never know the value of a moment until it becomes a memory.",
    author: "Dr. Seuss"
},
{
    quote: "Your time is limited, so don't waste it living someone else's life. Don't be trapped by dogma - which is living with the results of other people's thinking.",
    author: "Steve Jobs"
},
{
    quote: "If you look at what you have in life, you'll always have more. If you look at what you don't have in life, you'll never have enough.",
    author: "Oprah Winfrey"
},
{
    quote: "Life is what happens when you're busy making other plans.",
    author: "John Lenon"
},
{
    quote: "Never let the fear of striking our keep you from playing the game.",
    author: "Babe Ruth"
},
{
    quote: "In the end, it's not the years in your life that count. It's the life in your years.",
    author: "Abraham Lincoln"
},
{
    quote: "Love the life you live. Live the life you love.",
    author: "Bob Marley"
},
{
    quote: "Do not wish it were easier; wish you were better.",
    author: "Jim Rohn"
},
{
    quote: "Try not to become a man of success. Rather become a man of value.",
    author: "Albert Einstein"
},
{
    quote: "I failed my way to success.",
    author: "Thomas Edison"
},
{
    quote: "I have learned over the years that when one's mind is made up, this diminishes fear.",
    author: "Rosa Parks"
},
{
    quote: "When everything seems to be going against you, remember that the airplane takes off against the wind, not with it.",
    author: "Henry Ford"
},
{
    quote: "Dreaming, after all, is a form of planning.",
    author: "Gloria Steinem"
},
{
    quote: "I do not fear death. I had been dead for billions and billions of years before I was born, and had not suffered the slightest inconvenience from it.",
    author: "Mark Twain"
},
{
    quote: "Death is not the opposite of life, but a part of it.",
    author: "Haruki Murakami"
},
{
    quote: "The meaning of life is that it stops.",
    author: "Franz Kafka"
},
{
    quote: "The life you have left is a gift. Cherish it. Enjoy it now, to the fullest. Do what matters, now.",
    author: "Leo Babauta"
},
{
    quote: "Just start doing. If it's not going the way you want then change direction and go another way.",
    author: "Amy Chang"
},
{
    quote: "Never half-ass two things, always whole-ass one thing.",
    author: "Ron Swanson"
}
]

const getColour = () => {
    var hue = Math.floor(Math.random()*360);
    var saturation = Math.floor(Math.random()*31)+25;
    var lightness = Math.floor(Math.random()*24)+55;
    return "hsl(" + hue + "," + saturation + "%, " + lightness + "%)";

}

const getQuote = () => {
    let index = Math.floor(Math.random()*quotes.length);
    document.getElementById("text").innerHTML = "\""+quotes[index].quote + "\"";
    document.getElementById("author").innerHTML = "- "+quotes[index].author;
    document.getElementById("tweet-quote").href = "https://twitter.com/intent/tweet?text=" + quotes[index].quote + " - " + quotes[index].author;
}

const getGradient = () => {
    let color1 = getColour();
    let color2 = getColour();
    let grad = "linear-gradient(to right, " +  color1 + ", " +  color2 + ")";
    document.getElementById("background").style.background = grad;
    document.getElementById("new-quote").style.background = grad;
    document.getElementById("new-color").style.background = grad;
    document.getElementById("textOnly").style = `background: -webkit-linear-gradient(left,` + color1 + `,` + color2 + `);
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;`
    document.getElementById("tweet-quote").style.background = grad;
}

document.getElementById("new-quote").addEventListener("click", getQuote);
document.getElementById("new-quote").addEventListener("click", getGradient);
document.getElementById("new-color").addEventListener("click", getGradient);
getQuote();
getGradient();


