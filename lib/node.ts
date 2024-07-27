

export type DataType = "text" | "list of text" | "number" | "bool"

export type NodeInput = {
    name: string,
    type: DataType
}

export type NodeOutput = {
    name: string,
    type: DataType
}

export type NodeData = {
    inputs: NodeInput[],
    outputs: NodeInput[],
    params: object
}