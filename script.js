const url = "https://api.jsonbin.io/b/5e905926172eb643896166e7";
const vars=["var1", "var2", "var3", "var4", "var5", "var6", "speach"];

function hButton(e) {
   $("#make-button").prop('disabled', true);
   $("#status").html("Подождите, идут выполнение запроса и обработка данных...");
   $("#result").html("");
   $.getJSON(url, makeText);
   e.preventDefault();
}

function makeText(data) {
   let d = {};
   vars.forEach(function(v) {
      d[v] = $("#" + v)[0].value
   });
   let res = "";
   data["text"].forEach(function(l) {
      for(k in d) {
         l = l.replace("{" + k  + "}", d[k]);
      }
      res += l + "<br>";
   });
   $("#status").html("Готово:");
   $("#result").html(res);
   $("#make-button").prop('disabled', false);
}

$(document).ready(function() {
   $("#make-button").click(hButton);
});
