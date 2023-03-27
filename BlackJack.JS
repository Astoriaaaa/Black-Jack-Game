let firstcard = Math.floor(((Math.random() * 11)) + 1)
let secondcard= Math.floor(((Math.random() * 11)) + 1)
let morecards = [firstcard, secondcard]
let sum = firstcard + secondcard 
let hasblackjack = false
let isAlive = true
let message = document.getElementById("message")
let cards = document.getElementById("cardnumber")
let summ = document.getElementById("sum")
let SG = false
let newcard = 0
let imgNum = 2


function startGame()
{
    if(SG == false)
    {
        firstcard = Math.floor(((Math.random() * 11)) + 1)
        secondcard= Math.floor(((Math.random() * 11)) + 1)
        document.getElementById("img1").src = "card" + String(firstcard) + ".png"
        document.getElementById("img2").src = "card" + String(secondcard) + ".png"
        document.getElementById("img3")
        image4 = document.getElementById("img3").src = " "
        image4 = document.getElementById("img4").src = " "
        image5 = document.getElementById("img5").src = " "
        image6 = document.getElementById("img6").src = " "
        SG = true
        morecards = [firstcard, secondcard]
        sum = firstcard + secondcard 
        hasblackjack = false
        isAlive = true
        imgNum = 2
        images = []
        renderGame()
        StartShowCards()
    }
    
   
}

function renderGame()
{
    
    cards.textContent = "Cards: "
    summ.textContent = "Sum:" + sum
    for(i = 0; i < morecards.length; i++)
    {
        cards.textContent += morecards[i] + " "
    }
    if (sum <= 20)
    {
        message.textContent = "Click 'New Card' to pick up a new card"
    }
    else if (sum > 21)
    {
        message.textContent = "You Lose. Click 'Start Game' to play again"
        isAlive = false
        SG = false
    }
    else
    {
        message.textContent = "You Win. Click 'Start Game' to play again"
        hasblackjack = true
        SG = false
    }
}

function newCard()
{
    if(isAlive == true && hasblackjack == false && SG == true)
    {
        imgNum+=1
        newcard = Math.floor(((Math.random() * 11)) + 1)
        morecards.push(newcard)
        displayImage()
        sum += newcard
        renderGame()
        ShowCards()
    }
}

function displayImage()
{
    if(imgNum == 3)
    {
        document.getElementById("img3").src = "card" + String(newcard) + ".png"
    }
    if(imgNum == 4)
    {
        document.getElementById("img4").src = "card" + String(newcard) + ".png"
    }
    if(imgNum == 5)
    {
        document.getElementById("img5").src = "card" + String(newcard) + ".png"
    }
    if(imgNum == 6)
    {
        document.getElementById("img6").src = "card" + String(newcard) + ".png"
    }

}





