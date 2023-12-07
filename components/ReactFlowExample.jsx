"use client";

import { useCallback, useState } from "react";
import ReactFlow, {
  applyEdgeChanges,
  addEdge,
  applyNodeChanges,
  Controls,
  Background,
} from "reactflow";
import "reactflow/dist/style.css";

import initialNodes from "../flowdata/nodes";
import initialEdges from "../flowdata/edges";

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
      </ReactFlow>

    </>
  );
}

export default Flow;
