// hambuger menu animation
let nav = document.querySelector("#navArea");
let btn = document.querySelector(".toggle-btn");
let mask = document.querySelector("#mask");

btn.onclick = () => {
  nav.classList.toggle("open");
}

mask.onclick = () => {
  nav.classList.toggle("open");
}

// change mode
let changeButton = document.getElementById("mode_change");
let characterName = document.querySelectorAll('.character-name');
let blowing = document.querySelectorAll('.blowing');
let options = document.querySelectorAll('.options');
let main = document.querySelector('main');
let body = document.querySelector('body');

function changeMode() {
  changeButton.classList.toggle("white");
  main.classList.toggle("main_dark");
  body.classList.toggle("body_dark");
  characterName.forEach(element => {
    element.classList.toggle("character-name_dark");
  });
  blowing.forEach(element => {
    element.classList.toggle("blowing_dark");
  });
  options.forEach(element => {
    element.classList.toggle("options_dark");
  });
}


// アーミヤおまけ会話
{
  const talk = document.getElementById('operater');
  const voice = document.getElementById('talk');
  const conversation = [
    "ロドスは全艦通常航行モードです。ドクター、航行スケジュールをチェックしませんか？　▼",
    "ケルシー先生が言ってました、仕事をする時は集中しなければいけない、と……。うん、集中しなきゃ。　▼",
    "ドクター、またあなたと一緒に戦えて、本当に嬉しいです！　▼",
    "みなさんの期待に応えて見せます！　▼",
    "何か飲みませんか、ドクター？　▼",
    "えへへ……　▼",
    "ドクター、お仕事お疲れ様です。　▼",
    "なるほど……本当に役に立つ知識ばかりです。ドクター、ご指導いただきありがとうございます！　▼",
    "ドクター、私たちの歩む道は、終わりなき旅路なのかもしれません……でも、それをドクターと共に歩むことができて、私はとても幸せです。　▼",
  ];

  const face = [
    'img/character/Amiya/Amiya_default.PNG',
    "img/character/Amiya/Amiya_default.PNG",
    "img/character/Amiya/Amiya_smile.png",
    "img/character/Amiya/Amiya_serious.png",
    "img/character/Amiya/Amiya_drink.png",
    "img/character/Amiya/Amiya_smile.png",
    "img/character/Amiya/Amiya_default.PNG",
    "img/character/Amiya/Amiya_serious.png",
    "img/character/Amiya/Amiya_serious.png",
  ];

  talk.addEventListener('click', () => {
    const randomText = Math.floor(Math.random() * 9);
    voice.textContent = conversation[randomText];
    talk.src = face[randomText];
  });
}