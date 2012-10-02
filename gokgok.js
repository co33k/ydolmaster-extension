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
var listview = document.getElementsByClassName('listview');
if (listview.length > 0) {
  var li = listview[0].getElementsByTagName('li');
  if (li.length >= 6) {
	var a = li[5].getElementsByTagName('a')[0];
	var msg = 'ｽﾎﾟﾄﾞﾘgokgok';
    var href = a.getAttribute('href');
    console.log(msg);
	// alert(msg);
    setTimeout("document.location = href;", wait);
  }
} else {
}
