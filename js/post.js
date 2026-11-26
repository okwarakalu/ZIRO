// js/post.js - Post Job / Errand
let postType = 'Job';
function setType(t){
  postType = t;
  document.getElementById('btnJob').className = t === 'Job' ? 'btn-primary' : 'btn-secondary';
  document.getElementById('btnErrand').className = t === 'Errand' ? 'btn-primary' : 'btn-secondary';
}
function publishPost(){
  const title = document.getElementById('pTitle').value.trim();
  const loc = document.getElementById('pLocation').value.trim();
  const price = document.getElementById('pPrice').value.trim();
  const details = document.getElementById('pDetails').value.trim();
  if(!title || !loc || !price){ alert('Please fill Title, Location and Price.'); return; }
  const box = document.getElementById('myPosts');
  const div = document.createElement('div');
  div.style.cssText = 'background:white; border-radius:16px; padding:16px; margin-bottom:12px; border-left:4px solid var(--gold);';
  div.innerHTML = '<b>' + postType + ': ' + title + '</b><p style="font-size:13px; color:var(--muted); margin:6px 0;">' + loc + ' • ₦' + Number(price).toLocaleString() + '</p><p style="font-size:13px;">' + (details || 'No details') + '</p><span style="font-size:12px; color:var(--success); font-weight:700;">● Published • Workers can see it</span>';
  box.prepend(div);
  alert(postType + ' Published ✅\n\n' + title + ' in ' + loc + ' for ₦' + Number(price).toLocaleString());
  document.getElementById('pTitle').value = '';
  document.getElementById('pPrice').value = '';
  document.getElementById('pDetails').value = '';
}
