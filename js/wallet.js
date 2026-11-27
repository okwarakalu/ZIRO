// ZIRO BRAIN - No Escrow, iCoin only, CEO overrules GM
let Z = JSON.parse(localStorage.getItem('ZIRO')||'{}');
if(!Z.bal) Z={bal:120,priceCEO:50,priceGM:50,jobs:[{name:'Ada Okafor',skill:'Driver • Abuja',match:92,price:50000,img:'https://i.pravatar.cc/100?img=47'},{name:'Fatima Bello',skill:'Designer • Enugu',match:95,price:45000,img:'https://i.pravatar.cc/100?img=32'}],workers:[{name:'Ada Okafor',skill:'Driver',loc:'Abuja',price:'₦15,000/day',rate:'4.9★',img:'https://i.pravatar.cc/100?img=47'},{name:'Chidi Eze',skill:'Electrician',loc:'Enugu',price:'₦12,000/day',rate:'4.8★',img:'https://i.pravatar.cc/100?img=12'}],sos:[],verified:false};
function save(){localStorage.setItem('ZIRO',JSON.stringify(Z));render();}
function getPrice(){return Z.priceCEO||Z.priceGM;} // CEO FINAL
function pay(amount,what){if(Z.bal<amount){alert('Not enough iCoin. Buy iCoin first. Balance: '+Z.bal+' iCoin');location.href='wallet.html';return false;}Z.bal-=amount;save();alert(what+' done. -'+amount+' iCoin. Balance: '+Z.bal+' iCoin');return true;}
function render(){let b=document.getElementById('bal');if(b)b.textContent=Z.bal;
 let j=document.getElementById('jobs');if(j)j.innerHTML=Z.jobs.map((x,i)=>`<div class="card job"><img src="${x.img}"><div style="flex:1"><b>${x.name}</b><br><small>${x.skill} • ${x.match}% match</small></div><button class="btn-green" onclick="applyJob(${i})">Apply</button></div>`).join('');
 let w=document.getElementById('workers');if(w)w.innerHTML=Z.workers.map((x,i)=>`<div class="card job"><img src="${x.img}"><div style="flex:1"><b>${x.name} ✓ Verified</b><br><small>${x.skill} • ${x.loc} • ${x.price} • ${x.rate}</small></div><button class="btn-white" onclick="unlock(${i})">Unlock Contact</button></div>`).join('');}
function applyJob(i){if(pay(5,'Apply')){alert('Applied to '+Z.jobs[i].name+'. Private Room opened. Employer pays you DIRECTLY.');location.href='chat.html';}}
function unlock(i){if(pay(10,'Unlock Contact')){alert('Phone for '+Z.workers[i].name+': 0803-XXX-XXXX (Demo - real phone after verification). Employer pays Worker Directly.');}}
function sendSOS(){if(!confirm('SOS is for REAL emergency only. False SOS = 7-day suspension. Continue?'))return;if(pay(10,'SOS')){Z.sos.push({user:'Ada Okafor',time:new Date().toLocaleString(),loc:'Abuja • Central District'});save();alert('SOS SENT. Admin 8 notified. Call Police 999 / 112 if unsafe.');location.href='office.html';}}
function buyCoin(n){Z.bal+=n;save();alert('Success! +'+n+' iCoin. New balance: '+Z.bal+' iCoin');}
function postJob(){let t=document.getElementById('jobTitle').value, p=document.getElementById('jobPrice').value;if(!t||!p)return alert('Enter title + price');if(pay(10,'Post Job')){Z.jobs.unshift({name:'You',skill:t+' • Abuja',match:99,price:p,img:'https://i.pravatar.cc/100?img=5'});closePost();}}
function openPost(){document.getElementById('postModal').style.display='flex'}function closePost(){document.getElementById('postModal').style.display='none'}
function doSearch(){let q=document.getElementById('q').value;location.href='search.html?q='+encodeURIComponent(q);}
function go(x){if(x==='post')openPost();else location.href='search.html';}
function chiomaTalk(){alert('CHIOMA Voice: Hello Ada, I found 5 driver jobs for you. Tap Chat to see steps.');}
function chiomaChat(){let q=prompt('Ask CHIOMA (user help only): e.g. How to buy iCoin?');if(!q)return;if(/admin|ceo|GM|iCoin creat|price|escrow/i.test(q)){document.getElementById('chiomaBox').textContent='That is internal to ZIRO, let me show you how YOU can use ZIRO. Tap Buy iCoin, Post Job, or Verify.';return;}document.getElementById('chiomaBox').textContent='CHIOMA: To buy iCoin: Go to Wallet > Buy iCoin > Pay with Paystack > iCoin reflects instantly. To post job: Tap Post Job > Title + Price > Pay 10 iCoin.';}
render();
