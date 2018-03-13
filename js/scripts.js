$(function () {
	// Reset tabs
	function resetTabs(){
		$("#content > div").hide();
		$("#tabs a").attr("id","");
	}

	var myUrl        = window.location.href;
	var myUrlTab     = myUrl.substring(myUrl.indexOf("#"));
	var myUrlTabName = myUrlTab.substring(0,4);
	
	(function() {
		$("#content > div").hide();
		$("#tabs li:first a").attr("id", "current");
		$("#content > div:first").fadeIn();
		$("#tabs a").on("click", function(e) {
			e.preventDefault();
			if ($(this).attr("id") == "current"){
				return
			} else{
				resetTabs();
				$(this).attr("id", "current");
				$($(this).attr('name')).fadeIn();
			}
		});

		for (i = 1; i <= $("#tabs li").length; i++) {
			if (myUrlTab == myUrlTabName + i) {
				resetTabs();
				$("a[name='"+myUrlTab+"']").attr("id", "current");
				$(myUrlTab).fadeIn();
			}
		}
	})()
	
	// Scale fix
	var metas = document.getElementsByTagName('meta');
	var i;
	if (navigator.userAgent.match(/iPhone/i)) {
		for (i = 0; i < metas.length; i++) {
			if (metas[i].name == "viewport") {
				metas[i].content = "width=device-width, minimum-scale=1.0, maximum-scale=1.0";
			}
		}
		document.addEventListener("gesturestart", gestureStart, false);
	}

	function gestureStart() {
		for (i = 0; i < metas.length; i++) {
			if (metas[i].name == "viewport") {
				metas[i].content = "width=device-width, minimum-scale=0.25, maximum-scale=1.6";
			}
		}
	}
});

// Image modal
var btn     = document.getElementById("open-modal");
var modal   = document.getElementById("modal");
var resume  = document.getElementById("resume");
var caption = document.getElementById("caption");
var captionText = document.getElementById("captionText").innerHTML;
btn.onclick = function(){
    modal.style.display = "block";
    resume.src = this.src;
    caption.innerHTML = captionText;
}

var span = document.getElementsByClassName("close")[0];
span.onclick = function() {
  modal.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

// Tooltip
$(document).ready(function(){
    $('[data-toggle="tooltip"]').tooltip();
});
