function askQuestions (){

	var firstName= prompt('Let us know your first name');
	var lastName= prompt('How about your surname?');
	var fullName= firstName + ' ' + lastName; 
	console.log('User is called' + fullName)

	if (firstName.toLowerCase() == 'general'&& lastName.toLowerCase() != 'assembly') {
		console.log ('Hello General!');
	} 

	else {
		console.log ('No Greeting');
	}
		
	var faveColour = prompt('What is your favourite colour');

	faveColour = faveColour.toLowerCase().trim();

	if (faveColour == 'red' || 
		faveColour == 'blue'||
		faveColour == 'green'||
		faveColour == 'pink') {
		$('h1').css('color', faveColour);
		}	
		
	var age= prompt('How old are you? (Number)');
	age= parseInt (age);

	if (age >=18 ) {
		console.log ('User is an adult')
	} else {console.log ('User is a child');}
}


//When the page has loaded
$(function(){
		$('h3').on('click', askQuestions);
	
		//When the user clicks an h3
		$('h3').on('click',function() {

			//Toggle the next element
			$(this).next () .slideToggle (1000);

		});

});