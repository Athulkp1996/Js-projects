function first(firstCall)
{
    firstCall();  
}

function second() {
    console.log('Hello');
}

first(second);
