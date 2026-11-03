// https://www.codewars.com/kata/57b06f90e298a7b53d000a86/train

function queueTime(customers, n) {
  //number of tills available
  let queues = new Array(n).fill(0);
  
  //Distribute the shoppers
  for (let time of customers) {
    //Find the queue with the smallest wait time currently
    let i = queues.indexOf(Math.min(...queues));
    //Add that to the relevant queue
    queues[i] += time;
  }
  
  return Math.max(...queues);
}
