var wait = 400;

// tac bolds = "ｽﾀﾐﾅ: 100 / 107 EXP: 1072 / 1570"
var elements = document.getElementsByClassName('taC bold');
if (elements != undefined && elements.length > 0) {
  var current_status = elements[0].innerHTML.split(" ");
  var stamina_value = parseInt(current_status[1]);
  var stamina_max = parseInt(current_status[3]);
  var exp_value = parseInt(current_status[5]);
  var exp_max = parseInt(current_status[7]);
  console.log('スタミナ=' + stamina_value + '/' + stamina_max);
  console.log('経験値=' + exp_value + '/' + exp_max);
// if (stamina_value > 0) {
  if (stamina_value >= 5) {
	var listview = document.getElementsByClassName('listview');
	if (listview.length > 0) {
	  var li = listview[0].getElementsByTagName('li');
	  if (li.length >= 4) {
		var ix = 0, training_type = '';
		if (stamina_value >= 5) {
		  ix = 3;
		  training_type = 'ｺｰﾙでも練習し';
		} else if (stamina_value >= 3) {
		  ix = 2;
		  training_type = 'ｦﾀ芸でも練習し';
		} else if (stamina_value >= 2) {
		  ix = 1;
		  training_type = 'ｼﾞｬﾝﾌﾟでも練習し';
		} else {
		  ix = 0;
		  training_type = '曲でも聴い';
		}
		var msg = 'ｽﾀﾐﾅが'+ stamina_value +'余ってるので'+ training_type +'ておきますか...';
	    var a = li[ix].getElementsByTagName('a')[0];
		var href = a.getAttribute('href');
		console.log(msg);
		// alert(msg);
		setTimeout("document.location = href;", wait);
	  }
	}
  } else {
    var href = 'http://www.ydolmaster.com/training/?rand=777';
    var msg = 'reload this';
	  /*
	var href = 'http://www.ydolmaster.com/shop/buy?item_id=1';
	var msg = 'ｽﾀﾐﾅ切れ!!ｽﾎﾟﾄﾞﾘ買いに行こうず!!';
	   */
	console.log(msg);
    setTimeout("document.location = href;", wait);
  }
} else {
  var content = document.getElementsByClassName('content');
  if (content.length > 0) {
	var p = content[0].getElementsByTagName('p');
	if (p.length >= 4) {
	  var a = p[p.length - 1].getElementsByTagName('a')[0];
	  var href = a.getAttribute('href');
	  setTimeout("document.location = href;", wait);
	}
  }
}
