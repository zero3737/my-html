window.onload=function() {

}
function a_dianji (bjd) {
	var a = document.getElementsByClassName("header")[0];
	var arr = [], j = 0;
	for(var i = 0; i < a.childNodes.length; i++) {
		if(a.childNodes[i].nodeType == 1)
			arr[j++] = a.childNodes[i];
	}
	for(i = 0; i < arr.length; i++) {
		arr[i].className = "un_xuanzhong";
	}
	bjd.className = "";
	j = document.getElementsByTagName("section")[0];
	if(bjd.textContent == "我要登录") {
		j.className = "section_1";
		document.getElementsByClassName("zhuce")[0].style.display = "none";
		document.getElementsByClassName("denglu")[0].style.display = "block";
	}else if(bjd.textContent == "我要注册") {
		j.className = "section_2";
		document.getElementsByClassName("denglu")[0].style.display = "none";
		document.getElementsByClassName("zhuce")[0].style.display = "block";
	}
}