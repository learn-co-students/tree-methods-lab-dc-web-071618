function inOrder(node) {
  if (node.left) {
    inOrder(node.left);
  }
  console.log(node.data);
  if (node.right) {
    inOrder(node.right);
  }
}

function findOrAdd(currentNode, newNode) {
  if (currentNode === newNode) {
    return true;
  }
  if (newNode.data < currentNode.data) {
    if (currentNode.left) {
      return findOrAdd(currentNode.left, newNode);
    } else {
      return (currentNode.left = newNode);
    }
  }
  if (newNode.data > currentNode.data) {
    if (currentNode.right) {
      return findOrAdd(currentNode.right, newNode);
    } else {
      return (currentNode.right = newNode);
    }
  }
}

function max(node) {
  if (node.right) {
    return max(node.right);
  } else {
    return node;
  }
}

function min(node) {
  if (node.left) {
    return min(node.left);
  } else {
    return node;
  }
}
