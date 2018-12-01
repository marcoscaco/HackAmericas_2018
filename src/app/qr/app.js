// INTERFACE (api) PARA CRIAR/EXIBIR O QR CODE na aplicaçao

(function() {
  'use strict';

  $('#buttonGenerate').click(() => {
     console.log('click');
     let message = "this is a BASE QR COOE on a real ticket application the DATA protocol needs to be defined";
     $('#qrcode').html('');
     $('#qrcode').qrcode(message);
     console.log(message);
   });
})();