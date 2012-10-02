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
  var msg = undefined;
  if (p.length >= 3) {
    var gained_pen2 = parseInt(p[0].innerHTML); // 1000ﾍﾟﾝﾂｰゲット!
	msg = p[2].innerHTML; // ﾌﾟﾚﾐｱｶﾞﾁｬ券を2個ゲット!
  } else {
	msg = '失敗...';
  }
  //if (href != undefined) {
  var href = 'http://www.ydolmaster.com/live/?rnd=' + Math.floor( Math.random() * 1000 );
  console.log(msg + ' ' + href);
    // alert(msg);
  setTimeout("document.location = href;", wait);
} else {
}
