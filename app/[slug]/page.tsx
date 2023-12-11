import RelationsChart from "@/components/Flow/RelationsChart";
import Flow from "@/components/Flow/ReactFlowExample";
import { Button } from "@/components/ui/button";
import React, { useCallback, useRef, useState } from "react";
import initialNodes from "../../flowdata/nodes";
import initialEdges from "../../flowdata/edges";

const page = () => {
  return (
    <div className=" w-screen h-[calc(100vh-4rem)]">
      <RelationsChart initialNodes={initialNodes} initialEdges={initialEdges} />
      {/* <Flow/> */}
    </div>
  );
};

export default page;
