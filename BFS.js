//create a queue - []
// create a variable to store the value  of nodes visited
//take root add to queue
//loop as long as ther is anything in the queue
//  -dequeue a node from the queue and
//   push the value of the node into the variable that stores the nodes
//  --if there is a left property on the node dequeued - add it to the queue
//  --if there is a right property on the node dequeued - add it to the queue
//return variable that returns all of our values

function BFS(tree) {
  if (tree.root === null || tree.root === undefined) return undefined;
  let queue = [];
  let visited = [];
  queue.push(tree.root);
  while (queue.length) {
    let curr = queue.shift();
    visited.push(curr);
    if (curr.left) {
      queue.push(curr.left);
    }
    if (curr.right) {
      queue.push(curr.right);
    }
  }
  return visited;
}
