// ZIRO CONFIG - v4.1 - EDIT ONLY HERE
// Never hard-code price in any other file. All files read from here.
window.ZIRO_CONFIG = {
  appName: "ZIRO",
  version: "v4.1",
  country: "Nigeria",
  currency: "₦",
  iCoinPriceCEO: 50, // CEO FINAL - overrules GM
  iCoinPriceGM: 50,
  minBuy: 7,
  fees: { postJob: 10, apply: 5, unlock: 10, sos: 10, boost24h: 20 },
  rules: {
    escrow: false,        // LOCKED - ZIRO never holds money
    sendCoins: false,     // LOCKED - No user-to-user transfer
    sosFloating: false,   // LOCKED - SOS INLINE ONLY
    chiomaFloating: true  // LOCKED - ONLY CHIOMA floats
  },
  legal: { company: "ZIRO TECHNOLOGIES LTD", city: "Abuja, FCT" }
};
function getIcoinPrice(){ return window.ZIRO_CONFIG.iCoinPriceCEO; }
