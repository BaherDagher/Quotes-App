var mainQuote = document.getElementById("main-quote-line");
var secondQuote = document.getElementById("second-quote-line");
var randomNum = 5.5; //any random number but not decimal

function showQuote() {
    var res = Math.random();
    var dec = Math.round(res * 10);

    // To Handle that random num might be the same
    if (randomNum == dec) {
        randomNum++;
    }
    else {
        randomNum = dec;
    }

    switch (randomNum) {
        case 0: {
            mainQuote.innerHTML = " “Be yourself; everyone else is already taken.” "
            secondQuote.innerHTML = " -- Oscar Wilde "
            break;
        }
        case 1: {
            mainQuote.innerHTML = " “So many books, so little time.” "
            secondQuote.innerHTML = "  -- Frank Zappa  "
            break;
        }
        case 2: {
            mainQuote.innerHTML = " “Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.”  "
            secondQuote.innerHTML = "  -- Albert Einstein  "
            break;
        }
        case 3: {
            mainQuote.innerHTML = " “A room without books is like a body without a soul.”  "
            secondQuote.innerHTML = " -- Marcus Tullius Cicero  "
            break;
        }
        case 4: {
            mainQuote.innerHTML = " “You know you're in love when you can't fall asleep because reality is finally better than your dreams.”  "
            secondQuote.innerHTML = "  -- Dr. Seuss  "
            break;
        }
        case 5: {
            mainQuote.innerHTML = " “You only live once, but if you do it right, once is enough.”  "
            secondQuote.innerHTML = "  -- Mae West  "
            break;
        }
        case 6: {
            mainQuote.innerHTML = "  “Be the change that you wish to see in the world.”  "
            secondQuote.innerHTML = "  -- Mahatma Gandhi  "
            break;
        }
        case 7: {
            mainQuote.innerHTML = " “In three words I can sum up everything I've learned about life: it goes on.” "
            secondQuote.innerHTML = "  -- Robert Frost  "
            break;
        }
        case 8: {
            mainQuote.innerHTML = "  “If you tell the truth, you don't have to remember anything.”  "
            secondQuote.innerHTML = " -- Mark Twain  "
            break;
        }
        case 9: {
            mainQuote.innerHTML = "  “A friend is someone who knows all about you and still loves you.”  "
            secondQuote.innerHTML = "  -- Elbert Hubbard  "
            break;
        }
        case 10: {
            mainQuote.innerHTML = "   “To live is the rarest thing in the world. Most people exist, that is all.”   "
            secondQuote.innerHTML = "   -- Oscar Wilde   "
            break;
        }

    }


}