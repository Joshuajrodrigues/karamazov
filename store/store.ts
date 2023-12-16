import { Edge, EdgeChange, Node, NodeChange, OnConnect, applyEdgeChanges, applyNodeChanges } from "reactflow";
import { createWithEqualityFn } from "zustand/traditional";
import { nanoid } from "nanoid";

export type StoreData = {
  label: string;
};

export type Store = {
  nodes: Node[];
  edges: Edge[];
  updateNode: (id: string, data: StoreData) => void;
  createNode: () => void;
  onNodesChange: (changes: NodeChange[]) => void;
  onEdgeChange:(changes:EdgeChange[])=>void;
  addEdge:(data:any)=>void
};

export const useStore = createWithEqualityFn<Store>((set, get) => ({
  nodes: [
    {
      id: "1",
      type: "char",
      data: { label: "Never" },
      position: { x: 100, y: 15 },
    },

    {
      id: "2",
      type: "char",
      data: { label: "Forget" },
      position: { x: 100, y: 25 },
    },
    {
      id: "3",
      type: "char",
      data: { label: "a" },
      position: { x: 100, y: 35 },
    },
    {
      id: "4",
      type: "char",
      data: { label: "Character" },
      position: { x: 100, y: 45 },
    },
  ],
  edges: [
    { id: "e1-2", source: "1", target: "2" },
    { id: "e2-3", source: "2", target: "3" },
    { id: "e3-4", source: "3", target: "4" },
  ],
  updateNode(id, data) {
    set({
      nodes: get().nodes.map((node) =>
        node.id === id
          ? { ...node, data: Object.assign(node.data, data) }
          : node
      ),
    });
  },
  createNode() {
    const id = nanoid();
    const data = { label: "Character" };
    const position = { x: 100, y: 45 };
    const type = "char";

    set({
      nodes: [...get().nodes, { id, type, position, data }],
    });
  },
  onNodesChange(changes) {
    set({
      nodes: applyNodeChanges(changes, get().nodes),
    });
  },
  onEdgeChange(changes) {
    set({
      edges: applyEdgeChanges(changes, get().edges),
    });
  },
  addEdge(data){
    const id = nanoid(6)
    const edge = {id,...data}
    set({edges:[edge,...get().edges]})
  }
}));
