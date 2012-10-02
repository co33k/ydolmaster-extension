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
var content = document.getElementsByClassName('content');
if (content.length > 0) {
  var p = content[0].getElementsByTagName('p');
  if (p.length >= 5) {
    //var a = p[3].getElementsByTagName('a')[0];
	//var href = a.getAttribute('href');
	var href = 'http://www.ydolmaster.com/users/items_use/?item_id=1&rand=777';
	var msg  = '使用画面へGO!!';
    console.log(msg);
    setTimeout("document.location = href;", wait);
  }
} else {
}
