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
  if (p.length >= 3) {
    var ep = parseInt(p[2].innerHTML.split(" ")[1]); // // "所持EP: xxxxx"
    var msg = undefined, href = undefined;
	if (ep < 7000) {
	  msg = 'EPが不足しています('+ ep +')';
	  console.log(msg);
    } else if (ep < 12000) {
	  msg = 'Lv2: ほぁー天使おった ほっちゃん (cost=7000)';
      href = '/live/8/';
    } else if (ep < 20000) {
	  msg = 'Lv3: 残念なんていわせない みのりん (cost=12000)';
      href = '/live/11/';
    } else {
	  msg = 'Lv3: 女王のはじまり ななさま (cost=20000)';
      href = '/live/15/';
	}

	if (href != undefined) {
      console.log(msg);
      setTimeout("document.location = href;", wait);
	}
  }
} else {
}
