//EventListener -> tag-d event baigaa uguig songoh/shalgah
// ES6 -> variable/tag/document.addEventListener('click/keyboard//scroll',()=>{});
const time = document.getElementsByTagName('h1')[0];
const start = document.querySelector('.start');
const stop = document.querySelector('.stop');
const reset = document.querySelector('.reset');
let second=0, minute= 0, hour=0, doli =0;
const ol = document.getElementsByTagName('ol')[0];
const lap = document.querySelector('.lap')
// setTimeout clearTimeOut --> 1 udaa ajilna
// setInterval clearInterval --> hyzgaargui udaa ajilna
function watch(){
    doli++
    if(doli==100){
        second++;
        doli=0;
        if(second==60){
            minute++;
            second=0;
            if(minute==60){
                minute=0;
                hour++;
            }
        }
    }
    let d = doli<10 ? "0" + doli : doli;
    let s = second<10 ? "0"+ second : second;
    let m = minute<10 ? "0"+ minute : minute;
    let h = hour<10 ? "0"+ hour : hour;
    time.innerText = h+":" + m + ":" + s + ":" + d;
    const start = document.querySelector('.start').disabled = true;
    const stop = document.querySelector('.stop').disabled = false;
}
let a;
start.addEventListener('click',()=>{
    a =  setInterval(watch,10);
});
stop.addEventListener('click',()=>{
    const stop = document.querySelector('.stop').disabled = true;
    const start = document.querySelector('.start').disabled = false;
    clearInterval(a);
});

reset.addEventListener('click',()=>{
    second = 0;
    minute = 0;
    hour = 0;
    doli = 0;
    time.innerText= "00:00:00:00";
    clearInterval(a);
});
lap.addEventListener('click',()=>{
    // doucment.CreateElement("tagName") -> shineer tag uusgeh
    let liEl = document.createElement('li');
    // .append() -> tag dotor uur tag oruulah
    let d = doli<10 ? "0" + doli : doli;
    let s = second<10 ? "0"+ second : second;
    let m = minute<10 ? "0"+ minute : minute;
    let h = hour<10 ? "0"+ hour : hour;
    time.innerText = h+":" + m + ":" + s + ":" + d;
    liEl.innerText = time.innerText = h+":" + m + ":" + s + ":" +d;
    ol.append(liEl);
});