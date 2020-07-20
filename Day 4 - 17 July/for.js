for(i=1; i<=100; i++)
{
    if(i%3 == 0 && i%5 == 0)
    {
        console.log(`for ${i} the output is fizzbuzz`);
    }
    if(i%3 == 0)
    {
        console.log(`for ${i} the output is fizz`);
    }
    if(i%5 == 0)
    {
        console.log(`for ${i} the output is buzz`);
    }
}