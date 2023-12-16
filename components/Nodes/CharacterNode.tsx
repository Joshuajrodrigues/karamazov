import { Store, StoreData, useStore } from "@/store/store";
import React, { ChangeEvent, useState } from "react";
import { Handle, Position } from "reactflow";
import { Input } from "../ui/input";
import { shallow } from "zustand/shallow";

const selector = (id: string) => (store: Store) => ({
  setCharacterLabel: (e: ChangeEvent<HTMLInputElement>) =>
    store.updateNode(id, { label: e.target.value }),
});

const CharacterNode = ({ id, data }: { id: string; data: StoreData }) => {
  const { setCharacterLabel } = useStore(selector(id), shallow);

  const [editMode, setEditMode] = useState(false);

  return (
    <div
      onBlur={() => setEditMode(false)}
      className=" bg-foreground w-32 text-center text-primary shadow-md rounded-sm"
    >
      <Handle position={"top" as Position} type="target" />

      {editMode ? (
        <Input value={data.label} onChange={setCharacterLabel} />
      ) : (
        <p onClick={() => setEditMode(true)}>{data.label}</p>
      )}
      <Handle position={"bottom" as Position} type="source" />
    </div>
  );
};

export default CharacterNode;
