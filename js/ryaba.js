const dataURL = "https://api.myjson.com/bins/jcmhn";
let final = "";

function handleButton() {
  $.getJSON(dataURL, handle);
  $(".form-group").hide(function() {
    alert("обновите страницу для того чтобы изменить сказку")
  });
}


function handle(data) {
  let final = "";
  
  let obj = {
    var1: $("input[name=var1]")[0].value,    
    var2: $("input[name=var2]")[0].value,
    var3: $("input[name=var3]")[0].value,
    var4: $("input[name=var4]")[0].value,
    var5: $("input[name=var5]")[0].value,
    var6: $("input[name=var6]")[0].value,
    speach: $("input[name=speach]")[0].value
  }

  data["text"].forEach(function(item, index) {
    for (key in obj) {
      item = item.replace("{" + key + "}", obj[key]); 
    }
  
    final = final + item + "<br>";
  });
  
  $("div#result").html(final);
}

function init() {
	$("#button-fetch").click(handleButton);
}

$(document).ready(init);

