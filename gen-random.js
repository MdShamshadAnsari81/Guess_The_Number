/*Write  Javascript program to genrate a random number and store it in a variable.
The program then takes an input form the users to tell them wheather the guess number was currrect,
greater or lesser then original number, 
The program is expected to teriminate once the number is Gussed
Number should be between 1 - 100;
*/

let a=Math.random()*100;
a=Number.parseInt(a)
let inp;
let score=100;
while(inp!=a){
    score=score-1;
    inp=prompt("Enter The Number : ");
    if(inp==a){
        console.log("Congratulation! You Guess The Correct Number .👌👌");
        console.log(`You Guess The Actual Number in ${100 -score} chances.`);
           }
           else if(inp>a && inp<100){
            console.log("Your Number Is Greater than Actual Number.🤦‍♂️🤦‍♂️ ")
           }
           else if(inp<a && inp>0){

     console.log("Your Number Is Smaller than Actual Number.😒😒")
}
}
