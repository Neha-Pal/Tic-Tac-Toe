let music = new Audio("play.mp3")
let audioTurn = new Audio("ting.mp3")
let gameWin = new Audio("game_win.mp3")
let turn = "X"
let isgameOver=false
music.play()
music.volume=0.2;
//function to cchange turn
const changeTurn = () =>{
    return turn === "X"? "0": "X"
}

//function to check Win
const checkWin = ()=>{
    let textBox=document.getElementsByClassName('textBox')
    let wins = [
        [0,1,2,5,5,0],
        [0,3,6,-5,15,90],
        [0,4,8,5,15,45],
        [3,4,5,5,15,0],
        [6,7,8,5,25,0],
        [1,4,7,5,15,90],
        [2,5,8,15,15,90],
        [2,4,6,5,15,135]
    ]
    wins.forEach(e =>{
        if((textBox[e[0]].innerText === textBox[e[1]].innerText) && (textBox[e[2]].innerText === textBox[e[1]].innerText) && (textBox[e[0]].innerText !== '')){
            document.querySelector('.info').innerText = textBox[e[0]].innerText + " won"
            isgameOver=true
            gameWin.play();
            gameWin.volume=0.9;
            document.querySelector(".imgBox").getElementsByTagName('img')[0].style.width='200px'
            document.querySelector(".line").style.transform = `translate(${e[3]}vw, ${e[4]}vw) rotate(${e[5]}deg)`
            document.querySelector(".line").style.width="20vw";
        }
    })
}

//gameLogic
let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach(element=>{
    let textBox = element.querySelector(".textBox");
    element.addEventListener('click',(e)=>{
        if(textBox.innerText === ''){
            textBox.innerText = turn;
            turn = changeTurn();
            audioTurn.play();
            checkWin();
            if(!isgameOver){
                document.getElementsByClassName('info')[0].innerText = "Turn for " + turn;
            }
        }
    })
})

//Add olclick listner to reset button
reset.addEventListener('click' , ()=>{
    let textBoxs = document.querySelectorAll('.textBox')
    Array.from(textBoxs).forEach(element =>{
        element.innerText = " "
    });
    turn = "X";
    isgameOver = false
    document.querySelector(".line").style.width="0vw"
    document.getElementsByClassName("info")[0].innerText = "Turn for " + turn;
    document.querySelector(".imgBox").getElementsByTagName('img')[0].style.width='0px'
})