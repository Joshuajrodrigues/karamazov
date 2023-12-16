import React from "react";
import { Handle } from "reactflow";

const CharacterNode = () => {
  return (
    <div className=" bg-primary-foreground w-32 text-center text-primary shadow-md rounded-sm">
      <Handle position="top" type="target" />
      <p>test</p>
      <Handle position={"bottom"}type="source" />
    </div>
  );
};

export default CharacterNode;
