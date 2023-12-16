"use client";
import { useState, useCallback } from "react";
import ReactFlow, {
  addEdge,
  FitViewOptions,
  applyNodeChanges,
  applyEdgeChanges,
  Node,
  Edge,
  NodeChange,
  EdgeChange,
  Connection,
  DefaultEdgeOptions,
  OnNodesChange,
  OnEdgesChange,
  OnConnect,
  Background,
  Controls,
  Panel,
} from "reactflow";

const fitViewOptions: FitViewOptions = {
  padding: 0.2,
};

const defaultEdgeOptions: DefaultEdgeOptions = {
  animated: true,
};
import "reactflow/dist/style.css";

import Header from "../Header/Header";
import { Button } from "../ui/button";
import CharacterNode from "../Nodes/CharacterNode";
import { Store, useStore } from "@/store/store";
import { shallow } from "zustand/shallow";


const nodeTypes ={
  char:CharacterNode
}

const selector=(store:Store)=>({
  nodes:store.nodes,
  edges:store.edges,
  createNode:store.createNode,
  onNodesChange:store.onNodesChange,
  onEdgeChange:store.onEdgeChange,
  addEdge:store.addEdge
})


const RelationsChart = () => {
  
  const store = useStore(selector,shallow)

  const [edges, setEdges] = useState<Edge[]>(store.edges);





  return (

      <ReactFlow
        nodeTypes={nodeTypes}
        nodes={store.nodes}
        edges={store.edges}
        onNodesChange={store.onNodesChange}
        onEdgesChange={store.onEdgeChange}
        onConnect={store.addEdge}
        fitView
        fitViewOptions={fitViewOptions}
        defaultEdgeOptions={defaultEdgeOptions}
      >
        <Background />
       
        <Panel style={{ width: "100%", margin: "0" }} position="top-center">
          <Header />
        </Panel>
        <Panel position="top-right">
          <Button onClick={()=>store.createNode()}>Add</Button>
        </Panel>
      </ReactFlow>
   
  );
};

export default RelationsChart;
