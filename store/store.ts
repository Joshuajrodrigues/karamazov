import { Edge, Node } from "reactflow";
import { createWithEqualityFn } from "zustand/traditional";

export type StoreData ={
    label:string
}

export type Store = {
  nodes: Node[];
  edges: Edge[];
  updateNode: (id: string, data: StoreData) => void;
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
}));
