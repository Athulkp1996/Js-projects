function celtofa(celsius) 
{
  var celtemp = celsius;
  var celtofar = celtemp * 9 / 5 + 32;
  var message = celtemp+'celesius is ' + celtofar + 'fahrenheit ';
    console.log(message);
}

function fatocel(fahrenheit) 
{
  var fartemp = fahrenheit;
  var farcel = (fartemp - 32) * 5 / 9;
  var message = fartemp+'fahrenheit is ' + farcel + 'celesius';
    console.log(message);
} 

celtofa(45)
fatocel(60)