
var n=parseInt(prompt("Enter 1 - for Addition \nEnter 2 - for Subtraction \nEnter 3 - for Multiplication\n Enter 4 - for Division \nEnter 5 - for Square root\nEnter 6 - for Percentage\n Enter your choice"));
var a,b,c,sr;
console.log("You Entered "+n);
switch (n) {
    case 1:
        a=prompt("Enter First Number");
        b=prompt("Enter Second Number");
        c= a + b;
        console.log(`Addition of ${a} and ${b} is ${c}`);
        break;
    case 2:
        a=prompt("Enter First Number");
        b=prompt("Enter Second Number");
        c= a - b;
        console.log(`Subtraction of ${a} and ${b} is ${c}`);
        break;
    case 3:
        a=prompt("Enter First Number");
        b=prompt("Enter Second Number");
        c= a*b;
        console.log(`Multiplication of ${a} and ${b} is ${c}`);
        break;
    case 4:        
        a=prompt("Enter First Number");
        b=prompt("Enter Second Number");
        c=a/b;
        console.log(`Division of ${a} and ${b} is ${c}`);
        break;
    case 5:
        sr= prompt("Enter A Number to gate Square root");
        console.log(`Square root of ${sr} is ${Math.sqrt(sr)}`);
        break;
    case 6:
        a=prompt("Enter obtained marks");
        b=prompt("Enter Total marks")

        var p=(a/b)*100;
        console.log(`Percentage of ${a}/${b} is ${p}.`);
        break;

    default:
        console.log("Invalid Choice Entered");
        break;
} 