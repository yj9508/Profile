// 텍스트 효과
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

window.addEventListener('load', function() {

  const modal = document.querySelector("#modal");
  const photoCon = document.querySelector(".photo");
  const closeButton = document.querySelector(".close");
  /* const image = document.querySelector("#image"); */

  let _text = document.querySelectorAll(".thumbnail > p");
  let _img = document.querySelectorAll(".thumbnail > img");
  

  for(let i = 0; i < _img.length; i++) {
      _text[i].addEventListener('click', e => {
          imgSrc = _img[i].getAttribute('src');
          pTxt = e.currentTarget;
          preTxt = e.currentTarget.nextSibling.nextSibling;
          output = `<img src = "${imgSrc}"><pre>${preTxt.innerText}</pre>`;
          photoCon.innerHTML = output;
          modal.classList.add("show");
          document.body.classList.add("stop-scroll"); // body 스크롤 금지 적용
          /* image.classList.add("show"); */
      }, false);
  }
  
  closeButton.addEventListener('click', () => {
      modal.classList.remove("show");
      document.body.classList.remove("stop-scroll");
  });
});

// 프로그래스바
window.addEventListener('load',() =>{
    let progressBars = document.querySelectorAll('.progress-bar');
    let values = [
        '90%',
        '90%',
        '85%',
        '85%',
        '80%',
        '75%',
        '85%',
        '70%'
    ];
    progressBars.forEach((progress,index)=>{
        progress.style.width = values[index];
    })
})

// 스크롤
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
  
// 메일
function SendMail() {
  var parmas = {
    from_name : document.getElementById("name").value,
    email : document.getElementById("email").value,
    title : document.getElementById("title").value,
    message : document.getElementById("message").value
  }

  var name = document.getElementById("name");
  var email = document.getElementById("email");
  var title = document.getElementById("title");
  var message = document.getElementById("message");
  var emailCheck = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z]{3,9})*\.[a-zA-Z]{3,3}$/;

  if (name.value == "") {
    alert("이름을 입력하세요.");
    name.focus();
    return false;
  } else if (email.value == "") {
    alert("이메일을 입력하세요.");
    email.focus();
    return false;
  } else if (!emailCheck.test(email.value)) {
    alert("올바른 이메일 주소를 입력하세요");
    email.focus();
    return false;
  } else if (title.value == "") {
    alert("제목을 입력하세요.");
    title.focus();
    return false;
  } else if (message.value == "") {
    alert("내용을 입력하세요.");
    message.focus();
    return false;
  } else {
    emailjs.send("service_rb7rkgn", "template_tgxtg4m", parmas).then(function(res) {
      alert('성공적으로 보냈습니다.');
    })
  }
}

window.onload = function() {
  document.getElementById('contact').addEventListener('submit', function(event) { 
      event.preventDefault();
      this.contact_number.value = Math.random() * 100000 | 0;

      emailjs.sendForm('contact_service', 'contact_template', this);  
  });
}

