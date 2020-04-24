// const imgOneArr = ["images/dice1.png", "images/dice2.png", "images/dice3.png", "images/dice4.png", "images/dice5.png", "images/dice6.png"]
// const imgTwoArr = ["images/dice1.png", "images/dice2.png", "images/dice3.png", "images/dice4.png", "images/dice5.png", "images/dice6.png"]

// function randomDicee() {
//     let randomNumOne = Math.floor(Math.random() * imgOneArr.length);
//     let randomNumTwo = Math.floor(Math.random() * imgTwoArr.length);


//     const imgOne = document.querySelector(".img1").src = imgOneArr[randomNumOne];
//     const imgTwo = document.querySelector(".img2").src = imgTwoArr[randomNumTwo];
// }

// randomDicee()

function run() {

    var randomNum = Math.floor(Math.random() * 6) + 1;
    var randomimage = "dice" + randomNum + ".png";
    var randomimageSrc = "images/" + randomimage

    var randomNum2 = Math.floor(Math.random() * 6) + 1;

    var randomimage = "images/dice" + randomNum2 + ".png";


    var imgOne = document.querySelector(".img1").setAttribute("src", randomimageSrc);
    var imgTwo = document.querySelector(".img2").setAttribute("src", randomimage);

    if (randomNum > randomNum2) {

        document.querySelector(".winner").innerHTML = "Hey You Won player 1";
    } else {
        document.querySelector(".winner").innerHTML = "Hey You Won Player 2";
    }
}
run()
    // document.querySelector(".img2").src = imgTwoArr[randomNumTwo];