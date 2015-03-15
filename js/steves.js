$(document).ready(function(){


  $.getJSON("https://ads.mnectar.com/s/v1/ad?udid=e1ae481351ad296c&id=7dEm441fnFeD945ME3exLdfZf9b3dbdc8&o=P&rip=100.118.113.248", function(json) {
    //console.log(json.ads.script)
  }).done(function(json) {
    $("#adspace").append(json.ads.script)

    //$.each(json.ad, function(i, ad) {
      
    //});
  });
});
      // $(document).ready(function(){
      //      $("#adspace").interstitial('open', {
      //         "https://ads.mnectar.com/s/v1/ad?o=P&udid=E1AE481351AD296C&rip=2600:1010:B027:5B3E:0:45:3083:8B01&id=4756ed7122dbbdd80f3ff2ec533845083de9a53cd104b529a0c374ea7771d4e311b1d3f99" : "https://ads.mnectar.com/s/v1/ad?o=P&udid=E1AE481351AD296C&rip=2600:1010:B027:5B3E:0:45:3083:8B01&id=4756ed7122dbbdd80f3ff2ec533845083de9a53cd104b529a0c374ea7771d4e311b1d3f99"
      //    });
      //     });







