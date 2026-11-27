// ZIRO Workers - Shared by Home, Search, Chat, GM, CEO
function ziroGetWorkers(){
  const saved = JSON.parse(localStorage.getItem('ziro_workers') || 'null');
  if(saved && saved.length) return saved;
  const def = [
    {name:'Segun O.', skill:'Barber', city:'Abuja', rating:'4.8', price:5000, jobs:12, about:'Professional barber. Home service available. Sharp cuts, clean finish.'},
    {name:'Chinedu O.', skill:'Plumber', city:'Abuja', rating:'4.9', price:8000, jobs:24, about:'Expert plumber. Leaks, installations, tanks. 5 years experience.'},
    {name:'Adaeze N.', skill:'Cleaner', city:'Lagos', rating:'4.7', price:6000, jobs:18, about:'Deep cleaning, house + office. Neat, fast, trustworthy.'},
    {name:'Udoka', skill:'Brick Layer', city:'Abuja', rating:'4.7', price:12000, jobs:30, about:'Brick laying, plastering, POP. Strong and neat work.'},
    {name:'Musa A.', skill:'Electrician', city:'Enugu', rating:'4.8', price:7000, jobs:20, about:'House wiring, solar, inverter installation.'},
  ];
  localStorage.setItem('ziro_workers', JSON.stringify(def));
  return def;
}
function ziroAddWorker(w){
  const list = ziroGetWorkers();
  list.unshift(w);
  localStorage.setItem('ziro_workers', JSON.stringify(list));
  ziroAdminLogSafe('New worker joined: ' + w.name + ' - ' + w.skill);
}
function ziroAdminLogSafe(text){
  try{ if(typeof ziroAdminLog === 'function') ziroAdminLog(text); }catch(e){}
}
