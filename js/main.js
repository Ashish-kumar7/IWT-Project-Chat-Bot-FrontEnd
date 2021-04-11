console.log("Alarm App");

let setalarm=document.getElementById("setalarm");
let resetalarm=document.getElementById("reset");
let input=document.getElementById("input");

setalarm.addEventListener('click',alarmcall);
resetalarm.addEventListener('click',reset);

function alarmcall(){
    let value=input.value;
    let datenow=new Date();
    let alarmdate=new Date(value);
    console.log(alarmdate);
    console.log(datenow);

    let diff=alarmdate-datenow;
    if(diff>=0){
        setTimeout(function(){
            audioplay();
        },diff);
    }
    else {
        alert("Enter valid time in valid format")
    }
    
}

function reset(){
    input.value="";
}

function audioplay(){
    console.log("Playing alarm");
    let audio=new Audio("/riseandshine/Daybreak.mp3");
    audio.play();
}