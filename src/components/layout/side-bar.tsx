import { contractBlocks } from "../../lib/constants";
import { type ContractBlock } from "../../lib/definitions";

const BlockItem = (block: ContractBlock) => (
  <div className="border-b">
    <h3>{block.name}</h3>
    <p>{block.description}</p>
  </div>
);

export default function SideBar() {
  return (
    <>
      <h2>Actions</h2>
      {contractBlocks.map((block) => (
        <BlockItem key={block.id} {...block} />
      ))}
    </>
  );
}
