$(function () {
  
  'use strict'

  // Animate counter numbers

  setTimeout( function () {
    var arrNum = [0, 80, 82, 65, 87, 84, 63],
        speed = 4600;

    for ( var i = 1; i <= 6 ; i++ ) {

      $('#num_' + i).animate({ num: arrNum[i] - 1/* - begin */ }, {
        duration: speed,
        step: function (num){
          this.innerHTML = (num + 1).toFixed(0) + '%';
        }
      });
    }
  }, 1000);

//---------------
});

