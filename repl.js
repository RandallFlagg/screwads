function SA_querySt(ji) {
	hu = window.location.search.substring(1);
	gy = hu.split("&");
	for (i=0;i<gy.length;i++) {
		ft = gy[i].split("=");
		if (ft[0] == ji) {
			return ft[1];
		}
	}
}
function querySt(ji) {
	hu = window.location.search.substring(1);
	gy = hu.split("&");
	for (i=0;i<gy.length;i++) {
		ft = gy[i].split("=");
		if (ft[0] == ji) {
			return ft[1];
		}
	}
}
function aska(){
		$("a").each(function(){
			var onc = ''+$(this).attr('onclick')+'';
			if(onc.search('yt.www.watch.player.seekTo')!==-1){
				var newt = onc;
					newt = newt.replace("yt.www.watch.player.seekTo","screw");
				$(this).attr('onclick','');
				$(this).attr('data-skip-to',newt);
				$(this).addClass("skip-to-href");
			}
		});	
		$(".skip-to-href").live('click',function(){
			var t = ''+$(this).attr('data-skip-to')+'';
				t = t.replace("screw(","");
				t = t.replace(");return false;","");
				t = eval(t);
			var ems = '<object width="640" height="363">';
				ems += '<param name="movie" value="https://www.youtube.com/v/'+v+'?version=3&amp;start='+t+'&amp;showinfo=0&amp;modestbranding=1"></param>';
				ems += '<param name="allowFullScreen" value="true"></param>';
				ems += '<param name="allowscriptaccess" value="always"></param>';
				ems += '<param name="autoPlay" value="1">';
				ems += '<embed src="https://www.youtube.com/v/'+v+'?version=3&amp;autoplay=1&start='+t+'&amp;showinfo=0&amp;modestbranding=1" type="application/x-shockwave-flash" width="640" height="363" autoplay="1" allowscriptaccess="always" allowfullscreen="true"></embed>';
				ems += '</object>';
				$("#watch-video").html(ems);
				$("body").scrollTop(0);
				return false;
		});
		setTimeout("aska()",2000);
}
function sa_get_cookie(c_name){
	var i,x,y,ARRcookies=document.cookie.split(";");
	for (i=0;i<ARRcookies.length;i++)
	  {
	  x=ARRcookies[i].substr(0,ARRcookies[i].indexOf("="));
	  y=ARRcookies[i].substr(ARRcookies[i].indexOf("=")+1);
	  x=x.replace(/^\s+|\s+$/g,"");
	  if (x==c_name)
		{
		return unescape(y);
		}
	  }
}
function sa_set_cookie(c_name,value,exdays){
	var exdate=new Date();
	exdate.setDate(exdate.getDate() + exdays);
	var c_value=escape(value) + ((exdays==null) ? "" : "; expires="+exdate.toUTCString());
	document.cookie=c_name + "=" + c_value;
}
var sa_opt = sa_get_cookie('_ScrewAds_Option');
function SA_elementId(id){
	return document.getElementById(id);
}
function SA_skip_ads() {
	var SA_s = SA_elementId("watch-player").getElementsByTagName("embed")[0].src;
	var SA_v = location.href.replace("watch?v=", "v/") + "&version=3&autoplay=1&fs=1";
	var SA_x = SA_elementId("watch-player").innerHTML;
	var SA_p = SA_x.indexOf(SA_s);
	if (SA_p > -1){
	   SA_x = SA_x.substring(0,SA_p)+SA_v+SA_x.substring(SA_p+SA_s.length);
	}
	SA_elementId("watch-player").innerHTML = SA_x;
}
function SA_skip_ads_to(str) {
	var SA_s = SA_elementId("watch-player").getElementsByTagName("embed")[0].src;
	var SA_x = SA_elementId("watch-player").innerHTML;
	var SA_ns = SA_s+'&start='+str;
	var New_src = SA_x.replace("fs=1","fs=1&start="+str);
	SA_elementId("watch-player").innerHTML = New_src;
}
function SA_reg() {
	var SA_s = SA_elementId("watch-player").getElementsByTagName("embed")[0].src;
	var SA_v = location.href.replace("v/", "watch?v=") + '';
		SA_v = SA_v.replace("&version=3&autoplay=1&fs=1", '') + '';
	var SA_x = SA_elementId("watch-player").innerHTML;
	var SA_p = SA_x.indexOf(SA_s);
	if (SA_p > -1){
	   SA_x = SA_x.substring(0,SA_p)+SA_v+SA_x.substring(SA_p+SA_s.length);
	}
	SA_elementId("watch-player").innerHTML = SA_x;
}
function SA_aska(){
		$("a").each(function(){
			var onc = ''+$(this).attr('onclick')+'';
			if(onc.search('yt.www.watch.player.seekTo')!==-1){
				var newt = onc;
					newt = newt.replace("yt.www.watch.player.seekTo","screw");
				$(this).attr('onclick','');
				$(this).attr('data-skip-to',newt);
				$(this).addClass("skip-to-href");
				var t = ''+newt+'';
					t = t.replace("screw(","");
					t = t.replace(");return false;","");
					t = eval(t);
				$(this).attr('skip-ref',t);				
			}
		});	
		setTimeout("SA_aska()",2000);
}
var Page_v = SA_querySt("v");
var v = SA_querySt("v");
function mailton(x){
	sa_set_cookie('_ScrewAds_Option',x,365);
	window.location.reload();
}
$("document").ready(function(){
alert('hey');
chrome.extension.onRequest.addListener(function(request, sender, sendResponse) {
	var sa_option = request.method;
	mailton(sa_option);
});
var ap_bind = '<div class="screw-ads-block" style="display:inline-block;"><img src="" /> \
<div class="main"> \
	<ul> \
		<li><img src="chrome-extension://mmbnjoljpgkhiaicaejkdcjbfjknipnc/16.png" class="screw-home" /></li> \
		<li><label for="in1"><input type="radio" name="method" value="1" id="in1" />SkipAds</label></li> \
		<li><label for="in2"><input type="radio" name="method" value="2" id="in2" />ReplaceAds</label></li> \
		<li><label for="in3"><input type="radio" name="method" value="3" id="in3" />None</label></li> \
	</ul> \
	<div class="screw-clear"></div> \
</div> \
</div>';

$("#watch-headline-user-info").append(ap_bind);

var sa_option = sa_get_cookie('_ScrewAds_Option');
if(sa_option=='2'){
	if(Page_v!=='1e5a1ad652sdf51a' || document.URL.indexOf("/user/") >= 0){
	var emb = '<object width="640" height="363">';
		emb += '<param name="movie" value="https://www.youtube.com/v/'+v+'?version=3&amp;showinfo=0&amp;modestbranding=1"></param>';
		emb += '<param name="allowFullScreen" value="true"></param>';
		emb += '<param name="allowscriptaccess" value="always"></param>';
		emb += '<param name="autoPlay" value="1">';
		emb += '<embed src="https://www.youtube.com/v/'+v+'?version=3&amp;autoplay=1&amp;showinfo=0&amp;modestbranding=1" type="application/x-shockwave-flash" width="640" height="363" autoplay="1" allowscriptaccess="always" allowfullscreen="true"></embed>';
		emb += '</object>';
		var d = $("#watch-video").html();
		$("#watch-video").html(emb);
		$("#watch-pannel").addClass("pdtp");
		$("a").each(function(){
			var onc = ''+$(this).attr('onclick')+'';
			if(onc.search('yt.www.watch.player.seekTo')!==-1){
				var newt = onc;
					newt = newt.replace("yt.www.watch.player.seekTo","screw");
				$(this).attr('onclick','');
				$(this).attr('data-skip-to',newt);
				$(this).addClass("skip-to-href");
			}
		});	
		$(".skip-to-href").live('click',function(){
			var t = ''+$(this).attr('data-skip-to')+'';
				t = t.replace("screw(","");
				t = t.replace(");return false;","");
				t = eval(t);
			var ems = '<object width="640" height="363">';
				ems += '<param name="movie" value="https://www.youtube.com/v/'+v+'?version=3&amp;start='+t+'&amp;showinfo=0&amp;modestbranding=1"></param>';
				ems += '<param name="allowFullScreen" value="true"></param>';
				ems += '<param name="allowscriptaccess" value="always"></param>';
				ems += '<param name="autoPlay" value="1">';
				ems += '<embed src="https://www.youtube.com/v/'+v+'?version=3&amp;autoplay=1&start='+t+'&amp;showinfo=0&amp;modestbranding=1" type="application/x-shockwave-flash" width="640" height="363" autoplay="1" allowscriptaccess="always" allowfullscreen="true"></embed>';
				ems += '</object>';
				$("#watch-video").html(ems);
				$("body").scrollTop(0);
				return false;
		});
		setTimeout("aska()",2000);
		
	}
} else if(sa_option=='1') {

	$(".skip-to-href").live('click',function(){
		var t = $(this).attr('skip-ref');
			SA_skip_ads_to(t);
			$("body").scrollTop(0);
			return false;
	});
	
	if(Page_v!=='' || document.URL.indexOf("/user/") >= 0){
		SA_skip_ads();
		$("a").each(function(){
			var onc = ''+$(this).attr('onclick')+'';
			if(onc.search('yt.www.watch.player.seekTo')!==-1){
				var newt = onc;
					newt = newt.replace("yt.www.watch.player.seekTo","screw");
				$(this).attr('onclick','');
				$(this).attr('data-skip-to',newt);
				$(this).addClass("skip-to-href");
				var t = ''+newt+'';
					t = t.replace("screw(","");
					t = t.replace(");return false;","");
					t = eval(t);
				$(this).attr('skip-ref',t);
			}
		});	
		setTimeout("SA_aska()",2000);	
	}	

}	


	$("input[name='method']").click(function(){
		if($(this).attr('checked')=='checked'){
			$("label").removeClass("mactive");
			$(this).parents("label").addClass("mactive");
			sa_set_cookie('_ScrewAds_Option',$(this).val(),365);
			var keys = $(this).val();
			mailton(keys);
		}
	});
	var sa_opt = sa_get_cookie('_ScrewAds_Option');
	$("#in"+sa_opt).parents("label").addClass("mactive");
	$(".screw-home").click(function(){
		window.open('https://chrome.google.com/webstore/detail/mmbnjoljpgkhiaicaejkdcjbfjknipnc');
	});
	
	$("#content").css('background-image','none');

});
