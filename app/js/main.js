$(function () {
  
  'use strict'

  var d          = document,
      skilsLines = d.getElementsByClassName('percent-lines'),

      /* Methods */
      addDiv =  function () { 
        var div = d.createElement('div');
        return  div;
      };

  for (var i = 0; i < skilsLines.length; i++ ) {

    for (var j = 0; j < 24; j++ ) {
      skilsLines[i].appendChild(addDiv());
    }
  }

});

