function firstTime(){

	function FTstorageCheck(){
	/* check for html5 storage */
	  try {
	    return 'localStorage' in window && window['localStorage'] !== null;
	  } catch (e) {
	    return false;
	  }
	}
		
	function FTdeleteStore(){
		delete localStorage['firstTime'];
	}
		
	function FTinit() {
		if(FTstorageCheck()){
			/* check if you've been to the site before */
			if(localStorage.getItem('firstTime')){
				/* previously set */
				alert('set');
			}else {
				/* not yet set */
				localStorage.setItem('firstTime', '1')
				alert('not set');
			}
		}
	}
	FTinit();
}