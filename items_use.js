var wait = 400;
/*
var option = null;
var wait   = 1000;
chrome.extension.sendRequest(
  {
    action: "getValues",
    args: [{ "wait_msec":"" }]
  },
  function(response){
    option = response.values;
    wait = parseInt(option["wait_msec"] || "1000");
  }
);
*/
var navigation = document.getElementsByClassName('navigation');
if (navigation.length > 0) {
  var as = navigation[0].getElementsByTagName('a');
  if (as.length >= 5) {
	//var a = as[1];
	//var msg = '訓練に戻るお';
    //var href = a.getAttribute('href');
    var href = 'http://www.ydolmaster.com/shop/buy?item_id=1';
	var msg = 'again';
    console.log(msg);
    setTimeout("document.location = href;", wait*(7.2-1)); // 6*1.2 - 1
  }
} else {
}
