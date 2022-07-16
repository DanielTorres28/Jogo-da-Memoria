//função do input
const input = document.querySelector('.login__input');

//função do botão
const button = document.querySelector('.login__button');

//função de validação do input
const form = document.querySelector('.login-form');

//evento de quantidade de caracteres no input
const validateInput = ({ target }) => {
  if (target.value.length > 4) {
    //Se o valor for acima de 4 caracteres ele habitará o botão
    button.removeAttribute('disabled');
    return;
  }
  //Se houver menos que 4 caracteres o botão vai ser desabilitado novamente
  button.setAttribute('disabled', '');
}


//função de validação do input
const handleSubmit = (event) => {
  event.preventDefault();

  //salvando os dados do jogador
  localStorage.setItem('player', input.value);
  window.location = 'pages/Menu.html';
}


//Sempre que uma pessoa digitar no ('input')  vai chamar uma função ('validateInput')
input.addEventListener('input', validateInput);

//validação do botão do login
form.addEventListener('submit', handleSubmit);