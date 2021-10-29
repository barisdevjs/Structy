/* const hasPath = (graph, src, dst) => {
    if ( src === dst) return true;
    src
    for (let iterator of graph[src]) {
        iterator
        if ( hasPath(graph, iterator, dst) === true) {
            return true;
        }
    }
    return false;
}; */

const hasPath = (graph, src, dst) => {
const queue = [src]
while (queue.length > 0) {
    const current = queue.shift();
    if ( current === dst) return true;
    for (let iterator of graph[current]) {
        queue.push(iterator);        
    }
}
return false;
}
const graph = {
    v: ['x', 'w'],
    w: [],
    x: [],
    y: ['z'],
    z: [],  
};


console.log(hasPath(graph, 'v', 'z'));