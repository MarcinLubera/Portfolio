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