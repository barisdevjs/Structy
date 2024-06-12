const connectedComponentsCount = (graph) => {
  const visited = new Set();
  let count = 0;
  for (let node in graph) {
    if (explore(graph, node, visited) === true) {
      count++;
    }
  }
  return count;
};

const explore = (graph, currentNode, visited) => {
  if (visited.has(String(currentNode))) return false;
  visited.add(String(currentNode));
  for (const neighbor of graph[currentNode]) {
    explore(graph, neighbor, visited);
  }
  return true;
};

const graphExample = {
  3: [],
  4: [6],
  6: [4, 5, 7, 8],
  8: [6],
  7: [6],
  5: [6],
  1: [2],
  2: [1],
};
console.log(connectedComponentsCount(graphExample));
