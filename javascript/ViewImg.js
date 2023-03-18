function Load(){
		var url = location.href;
		if(url.indexOf('?')!=-1){
				var ID = url.split('?')[1];
				var i = 0;
				while(ID != Data[i].Code){
						i++;
				}
				document.getElementById("Img").src = Data[i].Img;
				document.getElementById("Day").textContent = Data[i].day;
				document.getElementById("Content").textContent = Data[i].content;
		}
}
