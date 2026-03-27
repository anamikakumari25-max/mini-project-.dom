// let count = 0;

// const { createElement } = require("react");

// let button = document.createElement("button")

// button.textContent = "click here increase numbers";

// let p = document.createElement("p");
// p.textContent = "0";

// button.addEventListener("click", function(){
//     count++
//     p.textContent = count;
// })

// document.body.appendChild(button);
// document.body.appendChild(p);


// let count = 0;

// let increaseBtn = document.createElement("button")
// increaseBtn.textContent = "increase";

// let decreaseBtn = document.createElement("button")
// decreaseBtn.textContent = "decrease"

// let p = document.createElement("p")
// p.textContent = "0"

// increaseBtn.addEventListener("click",function(){
//     count++;
//    p.textContent = count;

// })

// decreaseBtn.addEventListener("click",function(){
//     count--;
//    p.textContent = count;

// })

// document.body.appendChild(p);
// document.body.appendChild(increaseBtn);
// document.body.appendChild(decreaseBtn);


// let lightBtn = document.createElement("button");
// lightBtn.textContent = "LIGHT MODE"
// lightBtn.style.marginLeft = "20px"
// lightBtn.style.backgroundColor = "white"
// lightBtn.style.fontSize  = "30px"
// let darkBtn  = document.createElement("button");
// darkBtn.textContent = "DARK MODE"
// darkBtn.style.marginLeft = "20px"
// darkBtn.style.backgroundColor = "black"
// darkBtn.style.color = "white"
// darkBtn.style.fontSize = "30px"
// let p = document.querySelector("p");
// p.style.color = "pink"




// lightBtn.addEventListener("click",function(){
//     document.body.style.backgroundColor = "white"
// })

// darkBtn.addEventListener("click",function(){
//     document.body.style.backgroundColor = "black"
// })

// document.body.appendChild(lightBtn);
// document.body.appendChild(darkBtn);

// let isdark = false;

// let Btn = document.createElement("button")
// Btn.textContent = "dark mode"

// Btn.addEventListener("click",function(){

//     if(isdark === false){
//         document.body.style.backgroundColor = "black"
//         document.body.style.color = "white"
//         Btn.textContent = "dark mode"
//         isdark = true

//         }else{
//         document.body.style.backgroundColor = "white"
//         document.body.style.color = "black"
//         Btn.textContent = "light mode"
//         isdark = false
//         }

// })

// document.body.appendChild(Btn)

// let Btn = document.createElement("button");
// Btn.textContent = "click here";

// let isold = false;

// let p = document.createElement("p");
// document.body.appendChild(p);

// Btn.addEventListener("click", function(){
//     if(!isold === false){
//    document.body.textContent = "hello"
//    document.body.style.backgroundColor = "red"
//    isold = true

//     }else{
//         document.body.textContent = "hyy"
//         document.body.style.backgroundColor = "blue"
//         isold = false 
//     }

// })
//  document.body.appendChild(Btn)

// let Btn = document.createElement("button");
// Btn.textContent = "click here";

// let isold = false;

// let heading = document.createElement("h1");
// // heading.textContent = "Hello";

// document.body.appendChild(heading);
// document.body.appendChild(Btn);

// Btn.addEventListener("mouseenter", function(){
//     if(!isold){
//         // heading.textContent = "Hello ";
//         // heading.style.color = "white";           // text color
//         document.body.style.backgroundColor = "red";
//         isold = true;
//     } else {
//         // heading.textContent = "Hyy ";
//         // heading.style.color = "yellow";          // text color
//         document.body.style.backgroundColor = "blue";
//         isold = false;
//     }
// });

// let input = document.createElement("input");
// input.placeholder = "Name"
// let p = document.createElement("p");

// document.body.appendChild(input);
// document.body.appendChild(p);

// input.addEventListener("input", function(){
//     p.textContent = input.value;

// });

// let input = document.createElement("input");
// let btn = document.createElement("button");

// btn.textContent = "supmit";

// document.body.appendChild(input);
// document.body.appendChild(btn);

// btn.addEventListener("click", function(){
//     input.value = "Auto Text ";

// });


// Create heading
// let heading = document.createElement("h2");
// heading.textContent = "My Todo List ";

// // Create input
// let input = document.createElement("input");
// input.placeholder = "Enter task";

// // Create button
// let btn = document.createElement("button");
// btn.textContent = "Add";

// // Create list
// let list = document.createElement("ul");

// // Append to body
// document.body.appendChild(heading);
// document.body.appendChild(input);
// document.body.appendChild(btn);
// document.body.appendChild(list);

// // Add event
// btn.addEventListener("click", function(){

//     if(input.value === "") return; // empty check

//     // create list item
//     let li = document.createElement("li");
//     li.textContent = input.value;

//     // delete button
//     let delBtn = document.createElement("button");
//     delBtn.textContent = " ";

//     delBtn.addEventListener("click", function(){
//         li.remove();
//     });

//     li.appendChild(delBtn);
//     list.appendChild(li);

//     input.value = ""; // clear input
// });


// // Name input
// let nameInput = document.createElement("input");
// nameInput.placeholder = "Enter Name";


// // Age input
// let ageInput = document.createElement("input");
// ageInput.placeholder = "Enter Age";

// // Address input
// let addressInput = document.createElement("input");
// addressInput.placeholder = "Enter Address";

// // DOB input
// let dobInput = document.createElement("input");
// dobInput.placeholder = "Enter DOB";

// // Paragraph to show output
// let p = document.createElement("p");

// nameInput.style.display = "block";
// ageInput.style.display = "block";
// addressInput.style.display = "block";
// dobInput.style.display = "block";


// // Append all
// document.body.appendChild(nameInput);
// document.body.appendChild(ageInput);
// document.body.appendChild(addressInput);
// document.body.appendChild(dobInput);
// document.body.appendChild(p);

// // Function to update text
// function updateText(){
//     p.textContent =
//         "Name: " + nameInput.value +
//         ", Age: " + ageInput.value +
//         ", Address: " + addressInput.value +
//         ", DOB: " + dobInput.value;
// }

// // Add event to all inputs
// nameInput.addEventListener("input", updateText);
// ageInput.addEventListener("input", updateText);
// addressInput.addEventListener("input", updateText);
// dobInput.addEventListener("input", updateText);

// let input = [nameInput, ageInput,addressInput, dobInput];
// input.forEach(function(inp){
//     inp.style.marginBottom = "10px"
//     inp.style.textAlign = "center"
//     inp.style.display = "block";
//     inp.style.margin = "10px auto";


//     document.body.appendChild(inp);
// })

// let textarea = document.createElement("textarea");
// textarea.placeholder = "Type something...";
// textarea.style.display = "block"
// textarea.style.margin = "10px auto"
// textarea.style.textAlign = "center"

// let counter = document.createElement("p")
// counter.textContent = "character: 0"

// document.body.appendChild(textarea)
// document.body.appendChild(counter)

// textarea.addEventListener("input", function() {
//     let length = textarea.value.length;
//     counter.textContent = "characters :" + length;
// })

// Create input

// let input = document.createElement("input");
// input.placeholder = "Type and press Enter";

// document.body.appendChild(input);

// input.addEventListener("keydown", function(e){
//     if(e.key === "Enter"){
//         alert("You typed: " + input.value);
//     }
// });

// // Create input
// let input = document.createElement("input");
// input.placeholder = "Type here...";

// // Style
// input.style.display = "block";
// input.style.margin = "10px auto";

// // Append
// document.body.appendChild(input);

// // Convert to uppercase while typing
// input.addEventListener("input", function(){
//     input.value = input.value.toLowerCase();
// });

//password length vaildator//

// let input = document.createElement("input")
// input.placeholder = "Enter Password"
// input.type = "password"

// let msg = document.createElement("msg")
// msg.textContent = "show output"

// document.body.appendChild(input)
// document.body.appendChild(msg)

// input.addEventListener("input", function(){
//     let length = input.value.length
//     if(length < 8){
//     msg.textContent = "weak"    
//     //   console.log("weak");

//     }else{
//         msg.textContent = "strong password"
//         // console.log("stront password");

//     }
// })

// let bulb = document.createElement("div")
// let btn = document.createElement("button")

// btn.textContent = "on/off";

// bulb.style.height = "500px";
// bulb.style.width = "500px";
// bulb.style.borderRadius = "50%";
// bulb.style.backgroundColor = "lightgray"; // OFF
// bulb.style.margin = "20px auto";
// bulb.style.border = "1px solid black";
// bulb.style.boxShadow = "none";

// btn.style.display = "block";
// btn.style.margin = "10px auto";

// document.body.appendChild(bulb);
// document.body.appendChild(btn);

// let isOn = false;// you can add "0"

// btn.addEventListener("click", function(){

//     if(isOn){
//         bulb.style.backgroundColor = "lightgray";
//     } else {
//         bulb.style.backgroundColor = "yellow";
//     }

//     isOn = !isOn; // toggle
// });


// let input = document.createElement("input");
// input.placeholder = "name"
// let input1 = document.createElement("input");
// input1.placeholder = "age"
// let input2 = document.createElement("input")
// input2.placeholder = "rollno"
// let btn = document.createElement("button")
// btn.innerText = "click"


// let p = document.createElement("p")


// btn.addEventListener("click", function(){
//     let name = input.value
//     let age = input1.value
//     let rollno = input2.value

//     p.innerText =  name + "" + age  + "" + rollno

// })
// document.body.appendChild(input)
// document.body.appendChild(input1)
// document.body.appendChild(input2)
// document.body.appendChild(btn)
// document.body.appendChild(p)

// let div = document.createElement("div");
// document.body.appendChild(div);
// div.style.background="blue";
// div.style.height="400px";
// div.style.width="400px";


// let p = document.createElement("p")
// p.innerHTML = "this is my frist paragraph"

// let btn = document.createElement("button")
// btn.innerHTML = "click here"

// let increase = false

// btn.addEventListener("click", function(){
//     increase = !increase
//     if(increase){
//      p.style.fontSize = "60px"    
//     }else{
//      p.style.fontSize = "20px"  
//     }

    

// })

// document.body.appendChild(p)
// document.body.appendChild(btn)



let p = document.createElement("p")
p.innerHTML = "<b>JavaScript Light Switch Project<b/>"
p.style.textAlign = "center"
p.style.fontSize = "50px"


let bulb = document.createElement("div")
let btn = document.createElement("button")

btn.textContent = "ON/OFF";
bulb.style.height = "500px";
bulb.style.width = "500px";
bulb.style.borderRadius = "50%";
bulb.style.backgroundColor = "lightgray";
bulb.style.margin = "20px auto";
bulb.style.border = "1px solid black";
bulb.style.boxShadow = "none";
bulb.style.marginBottom = "100px"

btn.style.display = "block";
btn.style.margin = "10px auto";
btn.style.fontSize = "50px";
btn.style.width = "300px";
btn.style.borderRadius = "15px";
btn.style.background ="black";
btn.style.color ="white"

// order change //
document.body.appendChild(p);
document.body.appendChild(bulb);
document.body.appendChild(btn);

let isOn = false;

btn.addEventListener("click", function(){
    if(isOn){
        bulb.style.backgroundColor = "lightgray";
    } else {
        bulb.style.backgroundColor = "yellow";
    }

    isOn = !isOn;
});