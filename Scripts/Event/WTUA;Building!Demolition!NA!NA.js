function sleep(milliseconds) {
  var start = new Date().getTime();
  for (var i = 0; i < 1e7; i++) {
    if ((new Date().getTime() - start) > milliseconds){
      break;
    }
  }
}


function ordinal_suffix_of(i) {
    var j = i % 10,
        k = i % 100;
    if (j == 1 && k != 11) {
        return i + "st";
    }
    if (j == 2 && k != 12) {
        return i + "nd";
    }
    if (j == 3 && k != 13) {
        return i + "rd";
    }
    return i + "th";
}

//comment("<B><Font Color=RED>***START OF WTUA:Building-Demolition-NA-NA *** </B></Font>.");
var tDay = new Date();
aa.print(tDay+" ***START OF WTUA:Building-Demolition-NA-NA *** ");

sleep(400000);

var numStr = ordinal_suffix_of(5);
aa.print("oridinal of 5 is:"+numStr);
numStr = ordinal_suffix_of(108);
aa.print("oridinal of 108 is:"+numStr);
numStr = ordinal_suffix_of(1001);
aa.print("oridinal of 1001 is:"+numStr);
numStr = ordinal_suffix_of(100102);
aa.print("oridinal of 100102 is:"+numStr);


tDay = new Date();
aa.print(tDay+" ***END OF WTUA:Building-Demolition-NA-NA *** ");


