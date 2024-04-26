function hello() {
    setTimeout(() => {
        console.log("Hello World");
        setTimeout(() => {
            console.log("first")
        }, 2000);
    }, 1000);
    setTimeout(() => {
        console.log("second")
    }, 0);
    console.log("Second Hello World")
}
console.log("before settimeout")
hello()
console.log("after settimeout")


// setTimeout("Hello Safdar", 3000)

