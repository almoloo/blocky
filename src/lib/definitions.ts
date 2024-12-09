export interface ContractBlock {
  id: string; // Unique identifier for the block
  category:
    | "setup"
    | "state"
    | "logic"
    | "function"
    | "event"
    | "payment"
    | "misc"; // Type of block
  name: string; // User-friendly name for the block
  type:
    | "input"
    | "dropdown"
    | "multi-select"
    | "variable"
    | "logic"
    | "loop"
    | "function"
    | "call"
    | "event"
    | "emit"
    | "transfer"
    | "withdraw"
    | "comment"; // The type of UI block
  description: string; // Description of what the block does
  inputs: InputField[]; // Array of inputs required for the block
  outputs: OutputField[]; // Array of outputs that the block returns
}

export interface InputField {
  name: string; // The name of the input field
  type: "string" | "number" | "boolean" | "array" | "address" | "uint" | "any"; // Data type of the input
  options?: string[]; // Possible options (for dropdowns and multi-selects)
}

export interface OutputField {
  name: string; // The name of the output field
  type:
    | "string"
    | "number"
    | "boolean"
    | "array"
    | "address"
    | "uint"
    | "flow"
    | "event"
    | "any"; // Data type of the output
}
