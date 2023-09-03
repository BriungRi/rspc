// DO NOT MODIFY. This file was generated by Specta and is used to keep rspc internally type safe.
// Checkout the unit test 'export_internal_types' to see where this files comes from!

/**
 * @internal
 */
export type ProceduresDef = { queries: ProcedureDef; mutations: ProcedureDef; subscriptions: ProcedureDef }

/**
 * A value that can be a successful result or an error.
 * 
 * @internal
 */
export type ResponseInner = { type: "value"; value: any } | { type: "error"; value: ResponseError } | { type: "complete" }

/**
 * The type of a request to rspc.
 * 
 * @internal
 */
export type Request = { method: "query"; id: number; path: string; input: any | null } | { method: "mutation"; id: number; path: string; input: any | null } | { method: "subscription"; id: number; path: string; input: any | null } | { method: "subscriptionStop"; id: number }

/**
 * The type of a response from rspc.
 * 
 * @internal
 */
export type Response = ({ type: "value"; value: any } | { type: "error"; value: ResponseError } | { type: "complete" }) & { id: number }

/**
 * Represents a Typescript procedure file which is generated by the Rust code.
 * This is codegenerated Typescript file is how we can validate the types on the frontend match Rust.
 * 
 * @internal
 */
export type ProcedureDef = { key: string; input: any; result: any }

/**
 * An error that can be returned by rspc.
 * 
 * @internal
 */
export type ResponseError = { code: number; message: string; data: any | null }