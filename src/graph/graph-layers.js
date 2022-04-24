class Graph {
  constructor() {
    this.vertexes = [];
    this.edges = {};
  }

  addVertex(vertex) {
    this.vertexes.push(vertex);
    this.edges[vertex] = {};
  }

  addEdge(vertexA, vertexB, weight) {
    this.edges[vertexA][vertexB] = weight;
  }

  toString() {
    const rows = this.vertexes.map((rowVertex) => {
      const cols = this.vertexes.slice().map((colVertex) => {
        return (
          (this.edges[rowVertex] && this.edges[rowVertex][colVertex]) || "-"
        );
      });
      return [rowVertex.toString()].concat(cols);
    });

    return [[" ", ...this.vertexes.map(String)]].concat(rows);
  }
}

// const graph = new Graph();

// graph.addVertex("A");
// graph.addVertex("B");
// graph.addVertex("C");

// graph.addEdge("A", "B", 2);
// graph.addEdge("A", "C", 3);
// graph.addEdge("B", "C", 4);

// console.log(graph.toString());

class TreeNode {
  constructor(value) {
    this.value = value;
    this.leftChild = null;
    this.rightChild = null;
  }
}

const node4 = new TreeNode(4);
const node2 = new TreeNode(2);
const node3 = new TreeNode(3);
const node1 = new TreeNode(1);
const node5 = new TreeNode(5);
const node6 = new TreeNode(6);
const node7 = new TreeNode(7);

node3.rightChild = node4;
node1.leftChild = node2;
node1.rightChild = node6;
node5.leftChild = node3;
node5.rightChild = node1;
node4.rightChild = node7;

function DFS(node, depth, layers) {
  if (!node) return;

  if (!layers[depth]) layers[depth] = [];
  layers[depth].push(node.value);

  DFS(node.leftChild, depth + 1, layers);
  DFS(node.rightChild, depth + 1, layers);
}

function getTreeLayers(root) {
  const layers = [];
  DFS(root, 0, layers);
  return layers;
}

console.log(getTreeLayers(node5));
