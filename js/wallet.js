(function(){
  function buyCoin(n){
    const Z = window.ZIRO.get();
    Z.bal += n;
    Z.hist.unshift('Bought '+n+' iCoin via Paystack / Flutterwave');
    window.ZIRO.save();
    alert('Success! +'+n+' iCoin. Balance: '+Z.bal+' iCoin');
  }
  Object.assign(window.ZIRO, { buyCoin });
})();
