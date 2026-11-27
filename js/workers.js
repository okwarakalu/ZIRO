// ZIRO Workers - Demo + Real signups
function ziroGetWorkers(){
  const demo=[
    {name:'Segun O.', skill:'Barber', city:'Enugu', rating:'4.8', price:3000, jobs:24, about:'Professional barber with 5 years experience. Clean cuts, home service available.'},
    {name:'Grace M.', skill:'Cook / Chef', city:'Wuse, Abuja', rating:'4.9', price:8500, jobs:41, about:'Experienced chef for parties, home cooking and events. Tasty and hygienic.'},
    {name:'Yusuf A.', skill:'Welder', city:'Kaduna', rating:'4.6', price:11000, jobs:18, about:'Skilled welder for gates, burglary proof, tanks and repairs.'},
    {name:'Blessing I.', skill:'Gardener', city:'Lekki, Lagos', rating:'4.7', price:4500, jobs:29, about:'Garden cleaning, grass cutting and flower maintenance.'},
    {name:'Musa A.', skill:'Plumber', city:'Wuse 2, Abuja', rating:'4.8', price:8000, jobs:35, about:'Expert plumber for leaks, taps, tanks and bathroom fittings. Fast response.'},
    {name:'Udoka', skill:'Brick Layer', city:'Apo, Abuja', rating:'4.7', price:12000, jobs:31, about:'Brick layer for fences, houses and repairs. Strong and neat work.'},
    {name:'Ada O.', skill:'Cleaner', city:'Garki, Abuja', rating:'4.8', price:6000, jobs:27, about:'Deep cleaning for homes and offices. Reliable and thorough.'},
    {name:'Tunde B.', skill:'Electrician', city:'Garki, Abuja', rating:'4.7', price:10000, jobs:22, about:'Electrician for wiring, sockets, fans and power issues.'},
  ];
  const custom = JSON.parse(localStorage.getItem('ziro_custom_workers') || '[]');
  return [...custom, ...demo];
}
function ziroAddWorker(w){
  const custom = JSON.parse(localStorage.getItem('ziro_custom_workers') || '[]');
  custom.unshift(w);
  localStorage.setItem('ziro_custom_workers', JSON.stringify(custom));
}
