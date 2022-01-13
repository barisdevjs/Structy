const shortestPath = (edges, nodeA, nodeB) => {
    const graph = buildGraph(edges);
    const visited = new Set([nodeA]);
    const queue = [[nodeA, 0]];
    while (queue.length > 0) {
        let [node, dst] = queue.shift();
        if ( node === nodeB ) {
            return dst
        }
        for (let neighbor of graph[node]) {
            if (! visited.has(neighbor)) {
                visited.add(neighbor);
                queue.push([neighbor, ++dst]);
            }
        }
    }
    return -1
};

const buildGraph = (edges) => {
    const graph = {};
    for (let edge of edges) {
      const [ a, b ] = edge;
      if (!(a in graph)) graph[a] = [];
      if (!(b in graph)) graph[b] = [];
      graph[a].push(b);
      graph[b].push(a);
    }
    return graph;
  };

  const edges = [
    ['w', 'x'],
    ['x', 'y'],
    ['z', 'y'],
    ['z', 'v'],
    ['w', 'v']
  ];


  const edges1 = [
    ['a', 'c'],
    ['a', 'b'],
    ['c', 'b'],
    ['c', 'd'],
    ['b', 'd'],
    ['e', 'd'],
    ['g', 'f']
  ];
  console.log(shortestPath(edges,'v', 'z'))
  console.log(shortestPath(edges1,'a', 'f'))
