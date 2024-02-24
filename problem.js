let arr = [];
let map = new Map();

let enqueue = function(priority, message){
    map.set(priority, message);
    arr.push(priority);
    console.log("Before Sort:",arr);
    arr.sort();
    console.log("After Sort:", arr);


}


let output_message ="";
let dequeue = function(){
    if(arr.length===0){
        console.log("No message");
        clearInterval(intervalId);
        return ;
    }
    let priority_val = arr.shift();
    console.log("Message deleted: "+map.get(priority_val)+"   "+"Priority:"+priority_val);
    map.delete(priority_val);
    console.log("Before Sort Dequeue:", arr);
    arr.sort();
    console.log("After Sort Dequeue:", arr);
}

enqueue(2, "message1");
enqueue(1, "message2");
enqueue(0, "message3");
enqueue(3, "message4");

const intervalId = setInterval(dequeue, 2000);


setTimeout(() => enqueue(67, "message67"), 3000);
setTimeout(() => enqueue(5, "message5"), 5000);
 

