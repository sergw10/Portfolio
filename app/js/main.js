$(function () {
  
  'use strict'

  var d = document,
      queryAll = function (element) {
          return d.querySelectorAll(element);
        };

  // Animate counter numbers

  setTimeout( function () {
    var arrNum = [0, 80, 82, 65, 87, 84, 63],
        speed = 4900;

    for ( var i = 1; i <= 6 ; i++ ) {

      $('#num_' + i).animate({ num: arrNum[i] - 1/* - begin */ }, {
        duration: speed,
        step: function (num){
          this.innerHTML = (num + 1).toFixed(0) + '%';
        }
      });
    }
  }, 1000);

  //-------------------------------------

   
  for (let j = 0; j < 24; j++) {
    $('.percent-lines').append('<div></div>');
  }

  var arrOfGreyLines = [4,4,6,3,4,8],
      linesWrapText = '.percent-lines',
      linesWrap = queryAll(linesWrapText);

  for (let i = 0; i < 6; i++) {
    
    var arrAllLines = linesWrap[i].childNodes,
        numGreyLines = arrOfGreyLines[i],
        arrAllLinesCopy = Array.prototype.slice.call(arrAllLines),
        arrOfGreyLinesChange = arrAllLinesCopy.slice(-numGreyLines);

        for (let l = 0; l < numGreyLines; l++) {
          arrOfGreyLinesChange[l].style.backgroundColor = '#e7e7e7';
        }
  }

});