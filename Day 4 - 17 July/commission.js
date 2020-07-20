let i = prompt("Enter the number of units sold:");
let a = Number(i);
console.log(`The number of units sold is ${a}`);
let comm;
if (a>=0 && a<=5000) {
    comm = 2*a/100;
    console.log(`The total commission earned is ${comm}`);
}
else{
    if (a>=5001 && a<=10000) {
        comm = (5000*2/100)+(a*5/100);
        console.log(`The total commission earned is ${comm}`);
    }
    else{
        if (a>=10001 && a<=20000) {
            comm = (5000*2/100)+(5000*5/100)+(a*7/100); 
            console.log(`The total commission earned is ${comm}`);
        }
        else{
            if (a>=20001) {
                comm = (5000*2/100)+(5000*5/100)+(10000*7/100)+(0*10/100);
                console.log(`The total commission earned is ${comm}`);
            }
        }
    }
}
