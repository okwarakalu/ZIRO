// js/chioma.js - CHIOMA + Translator - V2
let chiomaLang = 'English';

function toggleChioma(){
  const box = document.getElementById('chioma-box');
  box.style.display = (box.style.display === 'none' || !box.style.display) ? 'block' : 'none';
}

function setChiomaLang(lang){
  chiomaLang = lang;
  const chat = document.getElementById('chioma-chat');
  chat.innerHTML = '<p style="font-size:13px;">Language set to <b>' + lang + '</b>. Ask me anything. I understand slang, but I reply clean.</p>';
}

function translateChioma(text){
  const dict = {
    'Hausa': {
      'Hello! I can show you how to Boost, Buy iCoin, Post a Job, or Accept an Errand.': 'Sannu! Zan iya nuna maka yadda ake Boost, sayen iCoin, saka Aiki, ko karban Errand.',
      'To Boost: Go to My Office > Boost My Skill. 1 Boost = 1 Skill. Choose 24h, 48h or 1 Week.': 'Don Boost: Je zuwa My Office > Boost My Skill. Boost 1 = Skill 1. Zabi 24h, 48h ko 1 Week.',
      'To Buy iCoin: Tap Buy iCoin. Pay with Paystack. iCoin shows instantly. ZIRO does NOT hold job money.': 'Don sayen iCoin: Danna Buy iCoin. Biya da Paystack. iCoin zai bayyana nan da nan. ZIRO ba ya rike kudin aiki.'
    },
    'Yoruba': {
      'Hello! I can show you how to Boost, Buy iCoin, Post a Job, or Accept an Errand.': 'Ẹ n lẹ! Mo le fi ọ han bi o ṣe le Boost, ra iCoin, fi Job silẹ, tabi gba Errand.',
      'To Boost: Go to My Office > Boost My Skill. 1 Boost = 1 Skill. Choose 24h, 48h or 1 Week.': 'Lati Boost: Lọ si My Office > Boost My Skill. Boost 1 = Skill 1. Yan 24h, 48h tabi 1 Week.',
      'To Buy iCoin: Tap Buy iCoin. Pay with Paystack. iCoin shows instantly. ZIRO does NOT hold job money.': 'Lati ra iCoin: Tẹ Buy iCoin. Sanwo pẹlu Paystack. iCoin yoo han lẹsẹkẹsẹ. ZIRO KO ni mu owo iṣẹ.'
    },
    'Igbo': {
      'Hello! I can show you how to Boost, Buy iCoin, Post a Job, or Accept an Errand.': 'Ndewo! Enwere m ike igosi gi otu esi Boost, zụta iCoin, bipute Job, ma ọ bụ nara Errand.',
      'To Boost: Go to My Office > Boost My Skill. 1 Boost = 1 Skill. Choose 24h, 48h or 1 Week.': 'Iji Boost: Gaa My Office > Boost My Skill. Boost 1 = Skill 1. Họrọ 24h, 48h ma ọ bụ 1 Week.',
      'To Buy iCoin: Tap Buy iCoin. Pay with Paystack. iCoin shows instantly. ZIRO does NOT hold job money.': 'Iji zụta iCoin: Pịa Buy iCoin. Kwụọ ụgwọ na Paystack. iCoin ga-apụta ozugbo. ZIRO anaghị ejide ego ọrụ.'
    },
    'Pidgin': {
      'Hello! I can show you how to Boost, Buy iCoin, Post a Job, or Accept an Errand.': 'Hello! I fit show you how to Boost, Buy iCoin, Post Job, or Collect Errand.',
      'To Boost: Go to My Office > Boost My Skill. 1 Boost = 1 Skill. Choose 24h, 48h or 1 Week.': 'To Boost: Go My Office > Boost My Skill. 1 Boost = 1 Skill. Choose 24h, 48h or 1 Week.',
      'To Buy iCoin: Tap Buy iCoin. Pay with Paystack. iCoin shows instantly. ZIRO does NOT hold job money.': 'To Buy iCoin: Tap Buy iCoin. Pay with Paystack. iCoin go show sharp sharp. ZIRO NO dey hold job money.'
    }
  };
  if(chiomaLang === 'English') return text;
  if(dict[chiomaLang] && dict[chiomaLang][text]) return dict[chiomaLang][text];
  return '[' + chiomaLang + '] ' + text;
}

function chiomaHelp(topic){
  const chat = document.getElementById('chioma-chat');
  let reply = '';
  if(topic === 'boost') reply = 'To Boost: Go to My Office > Boost My Skill. 1 Boost = 1 Skill. Choose 24h, 48h or 1 Week.';
  if(topic === 'icoin') reply = 'To Buy iCoin: Tap Buy iCoin. Pay with Paystack. iCoin shows instantly. ZIRO does NOT hold job money.';
  if(topic === 'post') reply = 'To Post: Tap + button. Choose Job or Errand. Fill Title, Location, Price. Tap Publish.';
  const clean = translateChioma(reply);
  chat.innerHTML += '<p style="font-size:13px;"><b>CHIOMA:</b> ' + clean + '</p>';
  if('speechSynthesis' in window){
    const u = new SpeechSynthesisUtterance(reply);
    window.speechSynthesis.speak(u);
  }
}

function chiomaAsk(text){
  const t = text.toLowerCase();
  let reply = 'I can help you with Boost, iCoin, Post a Job, or Errand. What do you need?';
  if(t.includes('waddup') || t.includes('wetin') || t.includes('how far') || t.includes('abeg') || t.includes('na wa') || t.includes('japa') || t.includes('wahala')) reply = 'I understand you. No problem. Tell me what you need - Boost, iCoin, or Post a Job? I will guide you step by step.';
  if(t.includes('boost')) reply = 'To Boost: Go to My Office > Boost My Skill. 1 Boost = 1 Skill. Choose 24h, 48h or 1 Week.';
  if(t.includes('icoin') || t.includes('coin')) reply = 'To Buy iCoin: Tap Buy iCoin. Pay with Paystack. iCoin shows instantly. ZIRO does NOT hold job money.';
  if(t.includes('job') || t.includes('errand') || t.includes('post')) reply = 'To Post: Tap + button. Choose Job or Errand. Fill Title, Location, Price. Tap Publish.';
  const chat = document.getElementById('chioma-chat');
  chat.innerHTML += '<p style="font-size:13px;"><b>You:</b> ' + text + '</p><p style="font-size:13px;"><b>CHIOMA:</b> ' + translateChioma(reply) + '</p>';
}
