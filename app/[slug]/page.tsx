"use client"
import RelationsChart from "@/components/Flow/RelationsChart";
import { Store, useStore } from "@/store/store";
import { shallow } from "zustand/shallow";


const selector=(store:Store)=>({
  nodes:store.nodes,
  edges:store.edges
})



const page = () => {

  const store = useStore(selector,shallow)

  return (
    <div className=" w-screen h-[calc(100vh-4rem)]">
      <RelationsChart initialNodes={store.nodes} initialEdges={store.edges} />
      {/* <Flow/> */}
    </div>
  );
};

export default page;
