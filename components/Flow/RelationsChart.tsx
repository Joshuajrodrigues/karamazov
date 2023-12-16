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
  MiniMap,
  BackgroundVariant,
} from "reactflow";

import "reactflow/dist/style.css";

import Header from "../Header/Header";
import { Button } from "../ui/button";
import CharacterNode from "../Nodes/CharacterNode";
import { Store, useStore } from "@/store/store";
import { shallow } from "zustand/shallow";
import ChapterSelection from "../ChapterSelection";

const fitViewOptions: FitViewOptions = {
  padding: 0.2,
};

const defaultEdgeOptions: DefaultEdgeOptions = {
  animated: true,
};
const proOptions = { hideAttribution: true };
const nodeTypes = {
  char: CharacterNode,
};

const selector = (store: Store) => ({
  nodes: store.nodes,
  edges: store.edges,
  createNode: store.createNode,
  onNodesChange: store.onNodesChange,
  onEdgeChange: store.onEdgeChange,
  addEdge: store.addEdge,
});


const nodeColor = (node:Node) => {
  switch (node.type) {
    case 'input':
      return 'rgb(187, 47, 37)';
    case 'output':
      return 'rgb(187, 47, 37)';
    default:
      return 'rgb(187, 47, 37)';
  }
};


const RelationsChart = () => {
  const store = useStore(selector, shallow);

  return (
    <ReactFlow
      nodeTypes={nodeTypes}
      nodes={store.nodes}
      edges={store.edges}
      onNodesChange={store.onNodesChange}
      onEdgesChange={store.onEdgeChange}
      onConnect={store.addEdge}
      fitView
      proOptions={proOptions}
      fitViewOptions={fitViewOptions}
      defaultEdgeOptions={defaultEdgeOptions}
    >
      <Background variant={"lines" as BackgroundVariant} />
      <MiniMap nodeColor={nodeColor} zoomable pannable />
      <Panel style={{ width: "100%", margin: "0" }} position="top-center">
        <Header />
      </Panel>
      <Panel className="flex justify-center items-center" position="top-right">
        <ChapterSelection/>
        <Button onClick={() => store.createNode()}>Add</Button>
      </Panel>
    </ReactFlow>
  );
};

export default RelationsChart;
