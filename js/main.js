
SC.initialize({
  client_id: 'a3e059563d7fd3372b49b37f00a00bcf'

});

$(document).ready(function() {
/* shape of you*/
  SC.stream('/tracks/301653699', function(sound) {
    $('#start1').click(function(e) {
      e.preventDefault();
      sound.start();
    });
    $('#stop1').click(function(e) {
      e.preventDefault();
      sound.stop();
    });
  });
/* Vadi pulla vadi*/

  SC.stream('/tracks/163228934', function(sound) {
    $('#start2').click(function(e) {
      e.preventDefault();
      sound.start();
    });
    $('#stop2').click(function(e) {
      e.preventDefault();
      sound.stop();
    });
  });

/* girl like you*/

  SC.stream('/tracks/457604721', function(sound) {
    $('#start3').click(function(e) {
      e.preventDefault();
      sound.start();
    });
    $('#stop3').click(function(e) {
      e.preventDefault();
      sound.stop();
    });
  });


/*Nashe Si Chadh Gayi */
  SC.stream('/tracks/386204333', function(sound) {
    $('#start4').click(function(e) {
      e.preventDefault();
      sound.start();
    });
    $('#stop4').click(function(e) {
      e.preventDefault();
      sound.stop();
    });
  });

/* naan un -*/

  SC.stream('/tracks/346104528', function(sound) {
    $('#start5').click(function(e) {
      e.preventDefault();
      sound.start();
    });
    $('#stop5').click(function(e) {
      e.preventDefault();
      sound.stop();
    });
  });

/* Endira logathu*/

  SC.stream('/tracks/354663899', function(sound) {
    $('#start6').click(function(e) {
      e.preventDefault();
      sound.start();
    });
    $('#stop6').click(function(e) {
      e.preventDefault();
      sound.stop();
    });
  });

/*////////////////// 2nd row /////////////////////*/

  SC.stream('/tracks/168165031', function(sound) {
    $('#start11').click(function(e) {
      e.preventDefault();
      sound.start();
    });
    $('#stop11').click(function(e) {
      e.preventDefault();
      sound.stop();
    });
  });

  SC.stream('/tracks/27743882', function(sound) {
    $('#start12').click(function(e) {
      e.preventDefault();
      sound.start();
    });
    $('#stop12').click(function(e) {
      e.preventDefault();
      sound.stop();
    });
  });


    SC.stream('/tracks/557856666', function(sound) {
      $('#start13').click(function(e) {
        e.preventDefault();
        sound.start();
      });
      $('#stop13').click(function(e) {
        e.preventDefault();
        sound.stop();
      });
    });



  SC.stream('/tracks/208609134', function(sound) {
    $('#start14').click(function(e) {
      e.preventDefault();
      sound.start();
    });
    $('#stop14').click(function(e) {
      e.preventDefault();
      sound.stop();
    });
  });
  //
  // SC.stream('/tracks/168165031', function(sound) {
  //   $('#start15').click(function(e) {
  //     e.preventDefault();
  //     sound.start();
  //   });
  //   $('#stop15').click(function(e) {
  //     e.preventDefault();
  //     sound.stop();
  //   });
  // });
  //
  //
  //   SC.stream('/tracks/168165031', function(sound) {
  //     $('#start1').click(function(e) {
  //       e.preventDefault();
  //       sound.start();
  //     });
  //     $('#stop1').click(function(e) {
  //       e.preventDefault();
  //       sound.stop();
  //     });
  //   });
  //


});
