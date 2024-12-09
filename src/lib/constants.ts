import { ContractBlock } from "./definitions";

export const contractBlocks: ContractBlock[] = [
  // Contract Setup Blocks
  {
    id: "contract-name",
    category: "setup",
    name: "Contract Name",
    type: "input",
    description: "Set the name of the contract.",
    inputs: [{ name: "name", type: "string" }],
    outputs: [],
  },
  {
    id: "contract-type",
    category: "setup",
    name: "Contract Type",
    type: "dropdown",
    description: "Select the type of contract (ERC20, ERC721, etc.).",
    inputs: [
      {
        name: "type",
        type: "string",
        options: ["ERC20", "ERC721", "ERC1155", "Custom"],
      },
    ],
    outputs: [],
  },
  {
    id: "inherits-from",
    category: "setup",
    name: "Inherits From",
    type: "multi-select",
    description: "Select the inherited contracts/libraries.",
    inputs: [
      {
        name: "libraries",
        type: "array",
        options: ["Ownable", "ReentrancyGuard", "Pausable", "ERC165"],
      },
    ],
    outputs: [],
  },

  // State Variable Blocks
  {
    id: "uint-variable",
    category: "state",
    name: "Unsigned Integer (uint)",
    type: "variable",
    description: "Create a uint variable.",
    inputs: [
      { name: "variableName", type: "string" },
      { name: "initialValue", type: "number" },
    ],
    outputs: [{ name: "variableReference", type: "uint" }],
  },
  {
    id: "bool-variable",
    category: "state",
    name: "Boolean (bool)",
    type: "variable",
    description: "Create a boolean variable.",
    inputs: [
      { name: "variableName", type: "string" },
      { name: "initialValue", type: "boolean" },
    ],
    outputs: [{ name: "variableReference", type: "bool" }],
  },

  // Logic Control Flow Blocks
  {
    id: "if-block",
    category: "logic",
    name: "If Condition",
    type: "logic",
    description: "Execute logic if a condition is met.",
    inputs: [{ name: "condition", type: "boolean" }],
    outputs: [
      { name: "truePath", type: "flow" },
      { name: "falsePath", type: "flow" },
    ],
  },
  {
    id: "for-loop",
    category: "logic",
    name: "For Loop",
    type: "loop",
    description: "Loop logic a set number of times.",
    inputs: [{ name: "iterations", type: "number" }],
    outputs: [{ name: "loopBody", type: "flow" }],
  },
  {
    id: "comment-block",
    category: "misc",
    name: "Comment",
    type: "comment",
    description: "Add a comment to explain logic or provide notes.",
    inputs: [{ name: "commentText", type: "string" }],
    outputs: [],
  },

  // Function Blocks
  {
    id: "function-block",
    category: "function",
    name: "Function",
    type: "function",
    description: "Define a custom function.",
    inputs: [
      { name: "functionName", type: "string" },
      { name: "parameters", type: "array" },
    ],
    outputs: [{ name: "returnValue", type: "any" }],
  },
  {
    id: "call-function",
    category: "function",
    name: "Call Function",
    type: "call",
    description: "Call an existing function.",
    inputs: [
      { name: "functionName", type: "string" },
      { name: "arguments", type: "array" },
    ],
    outputs: [{ name: "returnValue", type: "any" }],
  },

  // Event Blocks
  {
    id: "event-create",
    category: "event",
    name: "Create Event",
    type: "event",
    description: "Create a custom event for logging.",
    inputs: [
      { name: "eventName", type: "string" },
      { name: "parameters", type: "array" },
    ],
    outputs: [{ name: "eventReference", type: "event" }],
  },
  {
    id: "emit-event",
    category: "event",
    name: "Emit Event",
    type: "emit",
    description: "Emit an event to be stored on-chain.",
    inputs: [
      { name: "eventReference", type: "event" },
      { name: "parameters", type: "array" },
    ],
    outputs: [],
  },

  // Payment & Transfer Blocks
  {
    id: "send-payment",
    category: "payment",
    name: "Send Payment",
    type: "transfer",
    description: "Send ETH or tokens to an address.",
    inputs: [
      { name: "to", type: "address" },
      { name: "amount", type: "uint" },
    ],
    outputs: [],
  },
  {
    id: "withdraw",
    category: "payment",
    name: "Withdraw Funds",
    type: "withdraw",
    description: "Withdraw ETH or tokens from the contract.",
    inputs: [
      { name: "to", type: "address" },
      { name: "amount", type: "uint" },
    ],
    outputs: [],
  },
];
