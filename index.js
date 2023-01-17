document.addEventListener("DOMContentLoaded",function(){
const child = document.querySelector('.child');

    const cardArray = [
        {
          name: 'fries',
          img: 'images/fries.png'
        },
    
        {
          name: 'cheeseburger',
          img: 'images/cheeseburger.png'
        },
    
        {
          name: 'ice-cream',
          img: 'images/ice-cream.png'
        },
    
        {
          name: 'pizza',
          img: 'images/pizza.png'
        },
    
        {
          name: 'milkshake',
          img: 'images/milkshake.png'
        },
    
        {
          name: 'hotdog',
          img: 'images/hotdog.png'
        },
    
        {
          name: 'fries',
          img: 'images/fries.png'
        },
    
        {
          name: 'cheeseburger',
          img: 'images/cheeseburger.png'
        },
    
        {
          name: 'ice-cream',
          img: 'images/ice-cream.png'
        },
    
        {
          name: 'pizza',
          img: 'images/pizza.png'
        },
    
        {
          name: 'milkshake',
          img: 'images/milkshake.png'
        },
    
        {
          name: 'hotdog',
          img: 'images/hotdog.png'
        }
      ]

      let cardsChosen = [];     //Store name of image
      let cardsChosenId = [];       //Store id of image
      let score=0;

      cardArray.sort(()=> 0.5-Math.random());       //Sort array in a random order
      function createBoard(){
            for(let i=0;i<cardArray.length;i++){
                const card = document.createElement("img"); //create an image
                card.setAttribute('src', "images/blank.png");   //Set the imagePath
                card.setAttribute('data-id',i);     //Set the unique image id
                card.addEventListener("click",flipCard);    //Apply addEventListener
                child.appendChild(card);    //Imp line where we actually append in the browser
            }
      }

      function flipCard(){
        let cardId = this.getAttribute("data-id");
        cardsChosen.push(cardArray[cardId].name);   //Way to add data into the array
        cardsChosenId.push(cardId);
        this.setAttribute('src',cardArray[cardId].img);
        if(cardsChosen.length==2){
            setTimeout(checkForMatch,500);      //For hard level or easy level
        }
      }

      function checkForMatch(){
            const cards = document.querySelectorAll("img");
            const firstId = cardsChosenId[0];
            const secondId = cardsChosenId[1];

            if(firstId == secondId){    //Where the user select one image two time
                alert("Please choose two diff image");
                cards[firstId].setAttribute('src','images/blank.png');      //where to store , what to store
            }

            else if(cardsChosen[0] === cardsChosen[1]){     //Where the user select the correct two image
                cards[firstId].setAttribute('src',"images/white.png");
                cards[secondId].setAttribute('src',"images/white.png");
                cards[firstId].removeEventListener('click',flipCard);
                cards[secondId].removeEventListener('click',flipCard);
                score+=2;
            }

            else{       //Where the user select worng image
                cards[firstId].setAttribute('src','images/blank.png');
                cards[secondId].setAttribute('src','images/blank.png');
            }

            cardsChosen = [];       //For each iteration we need a fresh array
            cardsChosenId = [];     //For each iteration we need a fresh array


            document.getElementById('score').innerHTML = score;  //Change the content of html
            if(score == cardArray.length){
                document.getElementById('score').innerHTML = "Congo you win";
            }
      }

      createBoard();        //First we need to call this

});
