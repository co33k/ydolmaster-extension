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
  var msg = undefined, href = undefined;
  for (var i=10; i<p.length; ++i) {
	var a = p[i].getElementsByTagName('a');
	if (a && a.length == 1) {
	  msg = 'LIVE開始!!';
      href = a[0].getAttribute('href');
	}
  }
  if (href != undefined) {
    console.log(msg);
    // alert(msg);
    setTimeout("document.location = href;", wait);
  }
} else {
}
