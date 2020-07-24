var num = +prompt('Enter a number:');
heading.innerText = `Table of ${num} is:`;
for(var i=1; i<=10; i++){
    table.innerHTML+=`<li> ${num} * ${i} = ${num*i} </li>`
}