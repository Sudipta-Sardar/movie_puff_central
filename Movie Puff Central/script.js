const quotes=[
"    If you want a happy ending, that depends, of course, on where you stop your story.",
   "Cinema is a matter of what's in the frame and what's out.",
   "Pick up a camera. Shoot something. No matter how small, no matter how cheesy, no matter whether your friends and your sister star in it. Put your name on it as director. Now you're a director. Everything after that you're just negotiating your budget and your fee.",
   "Movies are like an expensive form of therapy for me.",
   "When people ask me if I went to film school I tell them, 'no, I went to films.",
   "Filmmaking is a chance to live many lifetimes.",
   "Cinema should make you forget you are sitting in a theater."
]
//Generate random quote
function generateQuote() {
    const randomIndex=Math.floor(Math.random()*quotes.length);
    document.getElementById("randomQuote").textContent=quotes[randomIndex];
}

function submitQuiz() {
    const q1= document.querySelector('input[name="q1"]:checked');
    let resultText;

    if(q1){
        if(q1.value ==="a1"){
            resultText="Your answer is correct!";
        }
        else{
            resultText="Your answer is incorrect.";
        }
    }
    else{
            resultText="Incorrect answer";
        }
        document.getElementById("quizResult").textContent=resultText;
    }

