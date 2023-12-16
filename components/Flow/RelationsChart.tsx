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


const nodeTypes ={
  char:CharacterNode
}



const RelationsChart = ({
  initialNodes,
  initialEdges,
}:{
  initialNodes:Node[],
  initialEdges:Edge[]
}) => {
  const [nodes, setNodes] = useState<Node[]>(initialNodes);
  const [edges, setEdges] = useState<Edge[]>(initialEdges);

  const onNodesChange: OnNodesChange = useCallback(
    (changes) => setNodes((nds) => applyNodeChanges(changes, nds)),
    [setNodes]
  );
  const onEdgesChange: OnEdgesChange = useCallback(
    (changes) => setEdges((eds) => applyEdgeChanges(changes, eds)),
    [setEdges]
  );
  const onConnect: OnConnect = useCallback(
    (connection) => setEdges((eds) => addEdge(connection, eds)),
    [setEdges]
  );
  const addNode=()=>{
    setNodes((els:any) => {
      console.log(els);
      return [
        ...els,
        {
          id: Math.random(),
          data: { label: 'Character' },
          height: 40,
          width:150,
          position: { x: 100, y: 55 },
        }
      ];
    })
  }
  return (

      <ReactFlow
        nodeTypes={nodeTypes}
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        fitView
        fitViewOptions={fitViewOptions}
        defaultEdgeOptions={defaultEdgeOptions}
      >
        <Background />
        <Controls />
        <Panel style={{ width: "100%", margin: "0" }} position="top-center">
          <Header />
        </Panel>
        <Panel position="bottom-center">
          <Button onClick={addNode}>Add</Button>
        </Panel>
      </ReactFlow>
   
  );
};

export default RelationsChart;
