var FTvalue = 0;

function firstTime(){
	var firstTimeValue = 0;
	
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
			
			function increment(){
				firstTimeValue++;
				localStorage.setItem('firstTime', firstTimeValue);
				
			}
			
			/* check if you've been to the site before */
			if(localStorage.getItem('firstTime')){
				/* previously set */
				firstTimeValue = localStorage.getItem('firstTime');
				FTvalue = firstTimeValue;
				increment();
			}else{
				/* not yet set */
				FTvalue = firstTimeValue;
				increment();
			}
		}
	}
	FTinit();
}
function firstTimeDelete(){
	delete localStorage['firstTime'];
}

