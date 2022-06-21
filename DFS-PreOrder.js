//create a  variable to store visited node vals
//store root node as current

//write a helper function that accepts a node
//  -push the value of the node to the variable that stores the values
//  -if the node has a left property, recursively call the helper
//  function with the left property on the node
//  -if node has a right property, recursivelycall the helper
//  function with the right property on the node

function DFSPreOrder(tree) {
  let visited = [];
  let current = tree.root;
  function traverse(node) {
    visited.push(node);
    if (node.left) {
      traverse(node.left);
    }
    if (node.right) {
      traverse(node.right);
    }
  }
  traverse(current);
  return visited;
}
