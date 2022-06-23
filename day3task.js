//campare JSON

var obj1 = {name:'person1',
            age:5};
var obj2 = {age:5,
            name:'person1',
            }
  var obj3 = JSON.stringify(obj2) === JSON.stringify(obj1)
     console.log(obj3); 

// //
// var request = new XMLHttpRequest();

// request.open("GET", 'https://restcountries.com/v2/all');

// request.send()

// request.onload = function()
// {

//     var countryData = JSON.parse(request.responseText)
            
//     for(let e of countryData )
//     console.log(e.flags.png);
    

//     for(let e of countryData)
//     console.log(e.name);
//     for(let e of countryData)
//     console.log(e.region);
//     for(let e of countryData)
//     console.log(e.population);
//     for(let e of countryData)
//     console.log(e.subregion);
// }