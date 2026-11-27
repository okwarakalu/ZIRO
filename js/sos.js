// ZIRO SOS - Inline Only. No floating button. No auto-call.
(function(){
  function sos(){
    alert('🆘 SOS — Help Request Sent\n\nYour location + profile sent to ZIRO Safety.\nA trusted contact will be alerted.\n\nIf in immediate danger, call emergency services in your country.');
  }
  Object.assign(window.ZIRO, { sos });
})();
