
function openNav() {
    document.getElementById("myNav").style.width = "40%";
}

function closeNav() {
    document.getElementById("myNav").style.width = "0%";
}

window.addEventListener('load', function() {

const $text = document.querySelector(".text");

const letters = [
"안녕하세요! \n 프론트엔드 개발자 정윤정입니다."
];

const speed = 100;
let i = 0;

const changeLineBreak = (letter) => {
return letter.map(text => text === "\n" ? "<br>" : text);
}

const typing = async () => {
const letter = changeLineBreak(letters[i].split(""));

while (letter.length) {
await wait(speed);
$text.innerHTML += letter.shift(); 
}

await wait(800);

remove();
}

const remove = async () => {
const letter = changeLineBreak(letters[i].split(""));

while (letter.length) {
await wait(speed);

letter.pop();
$text.innerHTML = letter.join(""); 
}

i = !letters[i+1] ? 0 : i + 1;
typing();
}

function wait(ms) {
return new Promise(res => setTimeout(res, ms))
}

setTimeout(typing, 1500);
});

window.addEventListener('load',() =>{
    let progressBars = document.querySelectorAll('.progress-bar');
    let values = [
        '90%',
        '90%',
        '85%',
        '85%',
        '80%',
        '70%',
        '65%',
        '65%'
    ];
    progressBars.forEach((progress,index)=>{
        progress.style.width = values[index];
    })
})


window.addEventListener('load',() =>{

    gsap.registerPlugin(ScrollTrigger);
    const scroll_panels = gsap.utils.toArray('.horizontal-scroll .horizontal-panel');
    const pin_panels = gsap.utils.toArray('.horizontal-pin .horizontal-panel');
    
    gsap.to(scroll_panels, {
      xPercent: -100 * (scroll_panels.length - 1),
      ease: 'none',
      scrollTrigger: {
        trigger: '.horizontal-scroll',
        pin: true,
        scrub: 0.6,
        end: () => "+=" + document.querySelector('.horizontal-scroll').offsetWidth * scroll_panels.length
      }
    });
    
    pin_panels.forEach((panel, i) => {
      ScrollTrigger.create({
        trigger: panel,
        pin: true,
        pinSpacing: false,
        start: 'top top'
      });
    });
  });
  
