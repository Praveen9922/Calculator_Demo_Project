// This is a simple calculator implementation in JavaScript.
// It supports basic arithmetic operations: addition, subtraction, multiplication, and division.
// The calculator uses the eval function to evaluate the expression entered by the user.


        function appendToDisplay(value) {
            document.getElementById("display").value += value;
        }

        function clearDisplay() {
            document.getElementById("display").value = '';
        }

        function calculate() {
            try {
                const result = eval(document.getElementById("display").value);
                document.getElementById("display").value = result;
            } catch (error) {
                document.getElementById("display").value = 'Error';
            }
        }
  