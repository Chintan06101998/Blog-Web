//console.log(global);

setTimeout(()=>{ // run after 3 min
    console.log("Hello Global")
    clearInterval(int);  // stop the internal working code setInterval method
},3000)

console.log("Hello")

const int = setInterval(()=>{ // run every 1000ms sec
console.log("every second")
},1000)

console.log(__dirname);  // provide directory
console.log(__filename); // provide filename 

console.log(document.querySelector); // does not work because document is window object not a global obj