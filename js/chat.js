// js/chat.js
function sendChat(){
  const input = document.getElementById('chatInput');
  const text = input.value.trim();
  if(!text) return;
  addBubble(text, true);
  input.value = '';
  setTimeout(()=>{
    let reply = 'Okay, I understand. I can do it. What time?';
    if(text.toLowerCase().includes('price') || text.toLowerCase().includes('cost')) reply = 'My price is ₦8,000 for this job. You pay me directly after work.';
    if(text.toLowerCase().includes('available') || text.toLowerCase().includes('now')) reply = 'Yes, I am available now in Wuse 2. I can come in 30 mins.';
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
