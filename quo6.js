function first(firstcall)
{
    firstcall();  
}

function second() {
    console.log('Hello');
}

first(second);