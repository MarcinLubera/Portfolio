(function () {
    const $form = document.querySelector('form');

    function displayMessage(message){
        alert(message);
    }

    $form.addEventListener('submit', (evt) =>  {
        evt.preventDefault();

        const data = new FormData($form);
        const map = new Map(data);
        const email = map.get('email');

        displayMessage ('Newsletter was sent!'); 

        });
    

})();

$(function(){
 
	$(window).scroll(function() {
		if ($(window).scrollTop() > 100) {
			$('.scrollTopButton').addClass('show');
		} else {
			$('.scrollTopButton').removeClass('show');
		}
	});
 
	$('.scrollTopButton').click(function() {
		$('body').animate({scrollTop: 0}, 400, 'linear');
	});
});

//shop

$(document).ready(function() 
{
    $(".hak").hover(function(){
        $(".description", this).fadeIn();
    },
    function()
    {
        $(".description", this).fadeOut();
    });
});