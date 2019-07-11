


alert("Press Enter Button")



document.onkeyup = anyKey;
function anyKey()
{
  alert("Let's Play A Game.")
}

var words = ["mario", "luigi", "bowser", "peach", "toad", "mushroom", "goomba", "wario", "waluigi"]
var ranWord = words[Math.floor(Math.random() * words.length)];

// LENGTH OF RANDOM WORD
var lenWord = [];
    for (var i =0; i<ranWord.length; i++)
    {
        lenWord[i] = "_";
    }
 var Word = ranWord.length;


 


// GAME STARTS
while ( Word > 0)
    {
      alert(lenWord.join(" "))
      var input = prompt("Guess A Letter. Choose Wisely")
      

      // INPUT IS INVALID OR VALID
          // IF CANCELLED
        if( input == null)
          {
            break;
          }
            // IF INPUT IS MORE THAN ONE LETTER
          else if ( input.length !== 1)
            {
              alert("Enter 1 Letter")
            }
            else 
              {
                for ( var j=0; j<ranWord.length; j++)
                    {
                      if (ranWord[j] === input)
                        {
                          lenWord[j] = input;
                          Word--;
                        }
                    }
              }
            
    }
    document.write(" The word is : " + ranWord);
  

