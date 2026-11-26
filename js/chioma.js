// js/chioma.js - CHIOMA ONLY - DO NOT TOUCH SOS HERE
// CHIOMA is the ONLY floating button in ZIRO

function toggleChioma(){
  const box = document.getElementById('chioma-box');
  if(!box) return;
  box.style.display = box.style.display === 'block' ? 'none' : 'block';
}

function chiomaReply(text){
  const chat = document.getElementById('chioma-chat');
  if(!chat) return;
  const p = document.createElement('p');
  p.textContent = 'CHIOMA: ' + text;
  p.style.fontSize = '13px';
  p.style.margin = '6px 0';
  chat.appendChild(p);
}

function chiomaHelp(topic){
  if(topic === 'boost'){
    chiomaReply('To Boost: Go to My Office > Boost My Skill. 1 Boost = 1 Skill. Choose 24h, 48h or 1 Week.');
  } else if(topic === 'icoin'){
    chiomaReply('To buy iCoin: Tap Buy iCoin. Pay with Paystack. iCoin shows instantly. ZIRO does NOT hold job money.');
  } else {
    chiomaReply('Hello! I can show you how to Boost, Buy iCoin, Post a Job, or Accept an Errand. What do you want to do?');
  }
}
