const url = "https://api.myjson.com/bins/jcmhn";
const vars=["var1", "var2", "var3", "var4", "var5", "var6", "speach"];

function hButton(e) {
  $.getJSON(url, makeText);
  e.preventDefault();
}

function makeText(data) {
   let d = {};
   vars.forEach(function(v) {
      d[v] = $("input[name=" + v + "]")[0].value
   });
   let res = "";
   data["text"].forEach(function(l) {
      for(k in d) {
         l = l.replace("{" + k  + "}", d[k]);
      }
      res += l + "<br>";
   });
   $("#result").html(res);
}

$(document).ready(function() {
   $("#butget").click(hButton);
});
