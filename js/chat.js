// js/chat.js - Chat + Voice Record + Translator
let mediaRecorder = null;
let audioChunks = [];
let isRecording = false;

function sendChat(){
  const input = document.getElementById('chatInput');
  const text = input.value.trim();
  if(!text) return;
  addBubble(text, true);
  input.value = '';
  setTimeout(()=>{
    let reply = 'Okay, I understand. I can do it. What time?';
    const low = text.toLowerCase();
    if(low.includes('price') || low.includes('cost') || low.includes('how much')) reply = 'My price is ₦8,000 for this job. You pay me directly after work.';
    if(low.includes('available') || low.includes('now') || low.includes('how far') || low.includes('waddup') || low.includes('abeg')) reply = 'Yes, I am available now in Wuse 2. I can come in 30 mins.';
    addBubble(reply, false);
  }, 800);
}
function quickChat(t){ document.getElementById('chatInput').value = t; sendChat(); }
function addBubble(text, mine){
  const list = document.getElementById('chatList');
  const d = document.createElement('div');
  d.textContent = text;
  d.style.cssText = mine ? 'background:var(--green); color:white; padding:10px 12px; border-radius:12px; max-width:80%; align-self:flex-end; font-size:14px;' : 'background:white; padding:10px 12px; border-radius:12px; max-width:80%; font-size:14px;';
  list.appendChild(d);
}
async function toggleVoice(){
  const btn = document.getElementById('voiceBtn');
  if(!isRecording){
    try{
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      mediaRecorder = new MediaRecorder(stream);
      audioChunks = [];
      mediaRecorder.ondataavailable = e => audioChunks.push(e.data);
      mediaRecorder.onstop = ()=>{
        const blob = new Blob(audioChunks, { type: 'audio/webm' });
        const url = URL.createObjectURL(blob);
        const list = document.getElementById('chatList');
        const d = document.createElement('div');
        d.style.cssText = 'background:var(--green); color:white; padding:10px; border-radius:12px; max-width:80%; align-self:flex-end;';
        d.innerHTML = '🎤 Voice Note <br><audio controls src="' + url + '" style="width:200px;"></audio>';
        list.appendChild(d);
        setTimeout(()=> addBubble('I heard your voice note. I will reply now. What time do you want me to come?', false), 800);
      };
      mediaRecorder.start();
      isRecording = true;
      btn.textContent = '⏹ Stop';
      btn.style.background = 'red';
    }catch(e){ alert('Mic blocked. Allow microphone in browser to record voice.'); }
  } else {
    mediaRecorder.stop();
    isRecording = false;
    btn.textContent = '🎤 Voice';
    btn.style.background = '';
  }
}
function translateChat(){
  const input = document.getElementById('chatInput');
  const text = input.value.trim();
  if(!text){ alert('Type a message first, then tap Translate.'); return; }
  const lang = prompt('Translate to?\nType: Hausa, Yoruba, Igbo, Pidgin, English');
  if(!lang) return;
  const old = chiomaLang;
  chiomaLang = lang.charAt(0).toUpperCase() + lang.slice(1).toLowerCase();
  const translated = translateChioma(text);
  chiomaLang = old;
  addBubble('🌍 Translated to ' + lang + ': ' + translated, true);
}
