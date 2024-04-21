

const myContainer = document.querySelector('div');


for (let n = 1 ; n <= 100 ; n++) {

if (n % 3 === 0 && n % 5 ===0) {
    console.log("FizzBuzz")

    // myContainer.innerHTML = myContainer.innerHTML + `
    
    // <div>
    // ${"Fizzbuzz"} 
    // </div> 
    // `;
    const myDiv = document.createElement("div");
    myDiv.append("FizzBuzz")
    myContainer.append(myDiv)
    myDiv.classList.add("fizz-buzz");

} else if (n % 3 === 0) {
    console.log("fizz")

    // myContainer.innerHTML = myContainer.innerHTML + `
    
    // <div>
    // ${"Fizz"} 
    // </div> 
    // `;
    const myDiv = document.createElement("div");
    myDiv.append("fizz")
    myContainer.append(myDiv)
    myDiv.classList.add("fizz")

} else if (n % 5 === 0) {
    console.log("Buzz")

    // myContainer.innerHTML = myContainer.innerHTML + `
    
    // <div>
    // ${"Buzz"} 
    // </div> 
    // `;
    const myDiv = document.createElement("div");
    myDiv.append("Buzz")
    myContainer.append(myDiv)
    myDiv.classList.add("buzz")


} else {
    console.log(n);
    myContainer.innerHTML = myContainer.innerHTML + `
    
    <div>
    ${n} 
    </div> 
    `;
}

  
}


        