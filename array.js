


console.log(document.querySelector("h1").textContent);
console.log(window);


// console.log(window.alert("cool and chill"));
// window.confirm("are u want to close window");


// array iteration (loop)
// find highest mark

// let marks = [60, 70, 80, 90, 30];
// console.log(marks[3]);


// // 1 for loop
// // 2 for ... in loop
// // 3 for ...of loop
// // 4 foreach

// for (let i = 0; i <= marks.length; i++){
//     console.log(i,marks[i]);
// }
   
// for (var i in marks);{  //for in
//     console.log("index =", i, marks[i]);
// }



// for (var i of marks);   //for of
//     console.log("index =", i, marks[i])

var  max = 0;
var marks = [60, 70, 80, 90, 30];
    for (var mark of marks) {
        if ( mark > max){
         max = mark;
        }
    }
    console.log("the highest mark",max);


    
let pleyar = {
    name : "gowtham",
    game : "cricket",
    age : 22,
    reting : 2033,
    title : " man of the match",
};

for ( var key in pleyar){
    console.log(key, pleyar[key]);
}