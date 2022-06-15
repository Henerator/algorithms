const { Node, cloneGraph } = require('./n-graph-clone');

it('3 joined nodes', () => {
  const node1 = new Node(1);
  const node2 = new Node(2);
  const node3 = new Node(3);

  node1.neighbours.push(node2, node3);
  node2.neighbours.push(node1, node3);
  node3.neighbours.push(node1, node2);

  const cloneNode1 = cloneGraph(node1);

  expect(cloneNode1.val).toEqual(1);
  expect(cloneNode1.neighbours.length).toEqual(2);
  expect(cloneNode1.neighbours[0].val).toEqual(2);
  expect(cloneNode1.neighbours[1].val).toEqual(3);

  const cloneNode2 = cloneNode1.neighbours[0];
  expect(cloneNode2.val).toEqual(2);
  expect(cloneNode2.neighbours[0].val).toEqual(1);
  expect(cloneNode2.neighbours[1].val).toEqual(3);
});
