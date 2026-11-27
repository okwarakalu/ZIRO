// ZIRO JOBS - Post Job, Apply, Search, Unlock - iCoin only, No Escrow, No Free
(function(){
  function renderHome(){
    const Z = window.ZIRO.get();
    const el = document.getElementById('homeJobs');
    if(!el) return;
    el.innerHTML = Z.jobs.map((x,i)=>`
      <div class="card job">
        <div style="flex:1"><b>${x.n} — ${x.s}</b><br><small>${x.m}% match • ⭐ ${x.r} • Verified • Available Now</small></div>
        <button class="btn-green" onclick="ZIRO.applyJob(${i})">Apply</button>
      </div>`).join('');
  }

  function renderWorkers(filter){
    const Z = window.ZIRO.get();
    const el = document.getElementById('searchWorkers');
    if(!el) return;
    const q = (filter||'').toLowerCase();
    const list = Z.workers.filter(x => (x.n+' '+x.s).toLowerCase().includes(q));
    el.innerHTML = '<p><b>'+list.length+' Workers in Abuja</b></p>' + list.map((x,i)=>`
      <div class="card job">
        <div style="flex:1"><b>${x.n}</b><br><small>${x.s} • ⭐ ${x.r} • ✓ Trust Badge<br>${x.p}</small></div>
        <button class="btn-white" onclick="ZIRO.viewWorker('${x.n}')">View</button>
      </div>`).join('');
  }

  function filterWorkers(cat){ window.ZIRO.go('search'); setTimeout(()=>renderWorkers(cat),100); }
  function applyJob(i){
    const Z = window.ZIRO.get();
    if(window.ZIRO.pay(window.ZIRO_CONFIG.fees.apply, 'Apply - '+Z.jobs[i].n)){
      alert('Applied to '+Z.jobs[i].n+'. Private Room opened.');
      window.ZIRO.go('chat'); renderHome();
    }
  }
  function viewWorker(name){
    alert(name+'\nProfessional in Abuja. 5 years experience. Home service available.\n\nTap OK to unlock contact with iCoin.');
    if(window.ZIRO.pay(window.ZIRO_CONFIG.fees.unlock, 'Unlock Contact - '+name)){
      alert('Phone revealed for '+name+'. Employer pays Worker Directly. ZIRO does not hold money.');
    }
  }
  function postJob(){
    const t = document.getElementById('jobTitle')?.value;
    const p = document.getElementById('jobPrice')?.value;
    const c = document.getElementById('jobCat')?.value || 'Job';
    if(!t || !p) return alert('Enter Job Title + Budget');
    if(window.ZIRO.pay(window.ZIRO_CONFIG.fees.postJob, 'Post Job - '+t)){
      const Z = window.ZIRO.get();
      Z.jobs.unshift({ n:'You', s: t+' • Abuja', m:99, r:'New' });
      window.ZIRO.save(); renderHome();
      alert('Job Posted! Workers near you will see it.');
      window.ZIRO.go('home');
    }
  }
  Object.assign(window.ZIRO, { renderHome, renderWorkers, filterWorkers, applyJob, viewWorker, postJob });
})();
