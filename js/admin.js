// ZIRO Admin System - FINAL HARMONISED
// CEO sees ALL incl GM. GM sees ALL except CEO. 5 Depts see own work only.
// CEO price OVERRIDES GM price.
function ziroGetAdminRole(){ return localStorage.getItem('ziro_admin_role') || null; }
function ziroSetAdminRole(role){ localStorage.setItem('ziro_admin_role', role); ziroAdminLog(role.toUpperCase() + ' logged in'); }
function ziroAdminLog(text){
  const logs = JSON.parse(localStorage.getItem('ziro_admin_logs') || '[]');
  const d = new Date();
  logs.unshift({ text:text, by:ziroGetAdminRole()||'system', time:d.getHours()+':'+String(d.getMinutes()).padStart(2,'0')+' '+d.toLocaleDateString() });
  localStorage.setItem('ziro_admin_logs', JSON.stringify(logs.slice(0,100)));
}
function ziroGetAdminLogs(){ return JSON.parse(localStorage.getItem('ziro_admin_logs') || '[]'); }
function ziroGetLogsForGM(){ return ziroGetAdminLogs().filter(l=>l.by!=='ceo'); }
function ziroGetLogsForCEO(){ return ziroGetAdminLogs(); }
function ziroGetGMPrice(){ return Number(localStorage.getItem('ziro_coin_price_gm') || '50'); }
function ziroGetCEOPrice(){ const v=localStorage.getItem('ziro_coin_price_ceo'); return v===null?null:Number(v); }
function ziroSetGMPrice(p){ localStorage.setItem('ziro_coin_price_gm', String(p)); ziroAdminLog('GM set iCoin price to ₦'+p); }
function ziroSetCEOPrice(p){ localStorage.setItem('ziro_coin_price_ceo', String(p)); ziroAdminLog('CEO OVERRIDES price to ₦'+p+' - Overrides GM'); }
function ziroClearCEOPrice(){ localStorage.removeItem('ziro_coin_price_ceo'); ziroAdminLog('CEO cleared override - GM price restored'); }
function ziroGetCoinPrice(){ const ceo=ziroGetCEOPrice(); if(ceo!==null && !isNaN(ceo) && ceo>0) return ceo; const gm=ziroGetGMPrice(); return isNaN(gm)||gm<=0?50:gm; }
function ziroSetCoinPrice(p){ if(ziroGetAdminRole()==='ceo') ziroSetCEOPrice(p); else ziroSetGMPrice(p); }
function ziroGetDepartments(){
  const saved=JSON.parse(localStorage.getItem('ziro_departments')||'null');
  if(saved) return saved;
  const def=[
    {id:'gm', name:'General Manager', head:'GM', status:'Active', desc:'Day-to-day • iCoin price • Workers & Jobs • Monitors 5 depts'},
    {id:'support', name:'Customer Support', head:'Support Lead', status:'Active', desc:'Chats, complaints, refunds, help'},
    {id:'finance', name:'Finance / Payments', head:'Finance Lead', status:'Active', desc:'iCoin sales, payouts, revenue'},
    {id:'verification', name:'Verification / Trust', head:'Verification Lead', status:'Active', desc:'Verify workers, ID, ratings'},
    {id:'moderation', name:'Moderation / Safety', head:'Safety Lead', status:'Active', desc:'Block fraud, fake jobs, abuse'},
    {id:'marketing', name:'Marketing / Growth', head:'Marketing Lead', status:'Active', desc:'Promo, referrals, new cities'},
  ];
  localStorage.setItem('ziro_departments', JSON.stringify(def)); return def;
}
function ziroGetDeptsForGM(){ return ziroGetDepartments().filter(d=>d.id!=='gm'); }
function ziroGetDeptsForCEO(){ return ziroGetDepartments(); }
function ziroSetDeptStatus(id,status){ const ds=ziroGetDepartments(); const d=ds.find(x=>x.id===id); if(d) d.status=status; localStorage.setItem('ziro_departments', JSON.stringify(ds)); ziroAdminLog('CEO set '+(d?d.name:id)+' to '+status); }
// Dept task helpers - each dept has own task list
function ziroGetDeptTasks(dept){ return JSON.parse(localStorage.getItem('ziro_tasks_'+dept)||'[]'); }
function ziroAddDeptTask(dept, text){ const t=ziroGetDeptTasks(dept); t.unshift({text:text, done:false, time:new Date().toLocaleString()}); localStorage.setItem('ziro_tasks_'+dept, JSON.stringify(t)); ziroAdminLog((ziroGetAdminRole()||'admin').toUpperCase()+' added task to '+dept+': '+text); }
function ziroToggleDeptTask(dept, idx){ const t=ziroGetDeptTasks(dept); if(t[idx]) t[idx].done=!t[idx].done; localStorage.setItem('ziro_tasks_'+dept, JSON.stringify(t)); }
