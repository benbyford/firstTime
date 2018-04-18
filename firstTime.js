function FTstorageCheck(){
  /* check for html5 storage */
  try {
    return 'localStorage' in window && window['localStorage'] !== null;
  } catch (e) {
    return false;
  }
}
	
// set string to check and return num or false if no local storage
// first time visit == 1
// @var item - string 
function firstTime(item) {

	var firstTimeValue = 0;

	if(FTstorageCheck()){

		function increment(firstTimeValue){
			firstTimeValue++;
			localStorage.setItem(item, firstTimeValue);
		}

		/* check if you've been to the site before */
		if(localStorage.getItem(item)){
			/* previously set */
			firstTimeValue = localStorage.getItem(item);
			FTvalue = firstTimeValue;
			increment(firstTimeValue);
		}else{
			/* not yet set */
			FTvalue = firstTimeValue;
			increment(firstTimeValue);
		}
		return firstTimeValue;
	}else{
		return false;
	}
}

// @var item - string 
function firstTimeDelete(item){
	delete localStorage[item];
}

