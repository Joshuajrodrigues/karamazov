"use client";

import { useCallback, useState } from "react";
import ReactFlow, {
  applyEdgeChanges,
  addEdge,
  applyNodeChanges,
  Controls,
  Background,
  Panel
} from "reactflow";
import "reactflow/dist/style.css";

import initialNodes from "../../flowdata/nodes";
import initialEdges from "../../flowdata/edges";
import Header from '@/components/Header/Header'
function Flow() {
  const [nodes, setNodes] = useState(initialNodes);
  const [edges, setEdges] = useState(initialEdges);
  const onNodesChange = useCallback(
    (changes) => setNodes((nds) => applyNodeChanges(changes, nds)),
    [setNodes]
  );
  const onEdgesChange = useCallback(
    (changes) => setEdges((eds) => applyEdgeChanges(changes, eds)),
    [setEdges]
  );
  const onConnect = useCallback(
    (connection) => setEdges((eds) => addEdge(connection, eds)),
    [setEdges]
  );
  const addNode=()=>{
    setNodes((els) => {
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
  const defaultEdgeOptions = { animated: true };
  return (
    <>
      <ReactFlow
        defaultEdgeOptions={defaultEdgeOptions}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        nodes={nodes}
        edges={edges}
        fitView
      >
        <Background />
        <Controls />
        <Panel style={{width:"100%" , margin:"0"}} position="top-center">
        <Header />
        </Panel>
        <Panel position="bottom-center">
          <button onClick={addNode}>add</button>
        </Panel>
      </ReactFlow>

    </>
  );
}

export default Flow;
