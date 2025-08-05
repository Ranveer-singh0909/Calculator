let screen = document.getElementById('screen');
let buttons = document.querySelectorAll('button');
let screenvalue = '';

for(let item of buttons){
  item.addEventListener('click', (e) => {
    let buttonText = e.target.innerText;

    if(buttonText == 'x'){
      buttonText = '*';
      screenvalue += buttonText;
      screen.value = screenvalue;
    }
    else if(buttonText == 'C'){
      screenvalue = '';
      screen.value = screenvalue;
    }
    else if(buttonText == '='){
      try {
        screen.value = eval(screenvalue);
        screenvalue = screen.value;
      } catch (error) {
        screen.value = "Error";
        screenvalue = '';
      }
    }
    else {
      screenvalue += buttonText;
      screen.value = screenvalue;
    }
  });
}
