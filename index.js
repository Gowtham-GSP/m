// implicit

console.log("4" + 2);
console.log("4" + 2, typeof ("4" + 2));

// explicit
console.log(parseInt("5") + 5); 
console.log(Number("5") + 5); 

//  == its checking value ->fast
//  === its checking value and deta type

// copy by value and copy by referance

var j1 = [5, 6, 7];
var j2 = [5, 6, 7];

var j3 = j1;

var t1 = 5;
var t2 = 5;

console.log(j1 === j3);
console.log( j1 === j2);
console.log( t1 === t2);


j1.push(2);
j2.push(30);
j3.push(100);


console.log(j1, j2, j3);

// spred oprator ....

var u1 = [90, 30, 40];  
var u2 = [...u1]; //copy by value,spread
console.log(u1, u2);
console.log(u1 === u2);

// concat 

v1 = [30, 40, 60];
v2 = v1.concat([]);
v3 = v1;
console.log(v2);
console.log(v3);



let pleyar = {
    name : "gowtham",
    game : "cricket",
    age : 22,
    reting : 2033,
    title : " man of the match",
};
console.log(pleyar);

// dot syntox
console.log(pleyar.title);

//box syntox
console.log(pleyar["title"]); 

pleyar.reting = 2750; //push value
console.log(pleyar);


pleyar.reting = pleyar.reting + 2750; //push value
console.log(pleyar);

pleyar.netionality = "indian"; //push key and value
console.log(pleyar);



// json - javascript object notation

// json is string

console.log(JSON.stringify(pleyar));














