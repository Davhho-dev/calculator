# Calculator


## David Ho
---
A calculator that does simple arithmetics. Calculator design is based off of iPhone's calculator. 

Calculator - you know... does the math for you. 😄

---

<br>

## Functionality
---
The calculator is required to do the following:
 
 <input type="checkbox" checked> Operators should not be functional unless an operand is first selected.

 <input type="checkbox" checked> Clearing the calculator, truly clears everything (operands should reset and nothing should be displayed on the calculator).

 <input type="checkbox" checked> Delete will delete an operand and the display should be updated.

 <input type="checkbox" checked> Plus or Minus function will change the value of the operand to either positive or negative depending on the current state.

<input type="checkbox" checked> Decimal function makes the operand a true float number.

<input type="checkbox" checked> Equal function will calculate and display the result.

<input type="checkbox" checked> Operators function(addition, subtraction, multiplication, and division) performs the correct operation depending on what operator was selected.

<input type="checkbox" checked> Multi operator arithimetics is functionable. The result from the first calculation is stored and used on the remaining calculation until the equal function is selected.

<br>

Ex: 10 + 25 - 25 * 2 = 20 

        First: 10 + 25 is calculated: result = 35

        Second: 35 - 25 is calculated: result = 10

        Third: 10 * 2 is calculated: result = 20



---
<br>

## Notes
---
Some of the challenges faced during this project was figuring out how to go about calculating a multi arithmetic calculation as shown in the above example. 

<br>

The calculator had to display the arithmetic however had to calculate each calculation (First, Second, Third, and so on....) The problem would be getting the previous result and using the result for the ongoing calculations.

<br>

**Solution**

The first calculation had to be calculated and the result stored and updated to the first operand variable ```num1```. 

Thus, when the second portion of the calculation occurred, **ONLY after a second operator was selected and second portion of operands was selected**, updated, and stored to the second operand variable ```num2```, 

    - 25

Once the second calculation was completed, the result 

    10

was stored back to the first operand variable ```num1``` and the third portion of the calculation occured.

The third calculation required more thought. As there was a possibility that a calculation consisting of more than 4 operands and 3 operators could occur. Thus, a helper function was created that would count how many operators had been entered. Therefore, regardless if there were three, four, five, etc... calculations that needed to be performed, this portion of the code would correctly evaluate those portion of the calculation and store the result to the first operand variable ```num1``` and update the new operands to the second operand variable ```num2```. 

<br>
<br>

Secondly, the challenge of deleting a number that was selected.

<br>

Deleting the number from the first and second operand was simple enough, however, the same problem occurred as above, when it came to multi arithmetic calculations.   

<br>

**Solution**

Following the same scenario as the previous faced challenge. Utilizing the helper function that counted how many operators had been entered, provided a solution to be able to delete any number that existed after the second operand. 