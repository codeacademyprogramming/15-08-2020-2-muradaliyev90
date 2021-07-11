var submit = document.querySelector('input[type="submit"]');

var nameInput = document.getElementById('name');
var nameInputLabel = document.querySelector('label[for="name"]');
var emailInput = document.getElementById('email');
var emailInputLabel = document.querySelector('label[for="email"]');
var numberInput = document.getElementById('phone-number');
var numberInputLabel = document.querySelector('label[for="phone-number"]');


function registrationForm() {
    submit.addEventListener('click', () => {
        event.preventDefault()
        function checkName() {
            if (nameInput.value === "") {
                nameInputLabel.innerText = 'Name: enter username';
                nameInputLabel.style.color = 'red';
            } else if (nameInput.value.length < 4) {
                nameInputLabel.innerHTML = 'Name: count of characters<br>should be more than 3';
                nameInputLabel.style.color = 'red';
            } else{
                nameInputLabel.innerText = 'Name:';
                nameInputLabel.style.color = '#76aa8c';
            }

        }

        function checkEmail(){
            if(emailInput.value === ""){
                emailInputLabel.innerHTML = 'Your email: enter email';
                emailInputLabel.style.color = 'red';
            }
            else if(emailInput.value.includes('@') === false){
                emailInputLabel.innerHTML = 'Your email: enter correct email';
                emailInputLabel.style.color = 'red';
            }
            else{
                emailInputLabel.innerHTML = 'Your email:';
                emailInputLabel.style.color = '#76aa8c';
            } 
        }

        function checkNumber(){
            if(numberInput.value === ""){
                numberInputLabel.innerHTML = 'Phone number: enter number';
                numberInputLabel.style.color = 'red';
            }
            else if(isNaN(numberInput.value * 1) === true){
                numberInputLabel.innerHTML = 'Phone number: enter only number';
                numberInputLabel.style.color = 'red';
            }
            else if(numberInput.value.length != 13){
                numberInputLabel.innerHTML = 'Phone number: character length should be 13';
                numberInputLabel.style.color = 'red';
            }
            else if(numberInput.value.slice(0,4) != '+994'){
                numberInputLabel.innerHTML = 'Phone number: enter format correctly';
                numberInputLabel.style.color = 'red';
            }
            else{
                numberInputLabel.innerHTML = 'Phone number:';
                numberInputLabel.style.color = '#76aa8c';
            } 
        }

        checkName()
        checkEmail()
        checkNumber()
    })

}

registrationForm()