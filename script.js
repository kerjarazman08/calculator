function appendValue(value) {
  document.getElementById('display').value += value;
}

function clearDisplay() {
  document.getElementById('display').value = '';
}

function backspace() {
  let display = document.getElementById("display");
  display.value = display.value.slice(0, -1);
}

function calculate() {
  try {
    const result = eval(document.getElementById('display').value);
    document.getElementById('display').value = result;
  } catch (error) {
    document.getElementById('display').value = 'Error';
  }
}

// Listen for keyboard input anywhere on the page
document.addEventListener('keydown', function(event) {
  const allowedKeys = '0123456789+-*/.=cC';

  const key = event.key;

  // Check if the pressed key is allowed
  if (allowedKeys.includes(key)) {
    event.preventDefault(); // prevent default browser actions (like scrolling on space)
    
    if (key === '=' || key === 'Enter') {
      calculate();
    } else if (key === 'c' || key === 'C' || key === 'Escape') {
      clearDisplay();
    } else if (key === '.') {
      appendValue('.');
    } else if ('0123456789+-*/'.includes(key)) {
      appendValue(key);
    }
  }
});

