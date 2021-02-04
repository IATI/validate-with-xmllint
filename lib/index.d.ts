/// <reference types="node" />
/**
 * Validate XML without any DTD or schema.
 *
 * @param input XML
 */
export declare const validateXML: (input: string | Buffer) => Promise<string | void | Object>;
/**
 * Validate XML without any DTD or schema. Return Recovered XML.
 *
 * @param input XML
 */
export declare const validateXMLrecover: (input: string | Buffer) => Promise<string | void | Object>;
/**
 * Validate XML without any DTD or schema. Output Recovered XML to file.
 *
 * @param input XML
 * @param output File path to store output
 */
export declare const validateXMLrecoverOutput: (input: string | Buffer, output: string | Buffer) => Promise<string | void | Object>;
/**
 * Validate XML with DTD.
 *
 * @param input XML
 */
export declare const validateXMLWithDTD: (input: string | Buffer) => Promise<string | void | Object>;
/**
 * Validate XML with the provided XML schema file.
 * @param input XML
 * @param xsdfile Path to XSD
 */
export declare const validateXMLWithXSD: (input: string | Buffer, xsdfile: string | Buffer) => Promise<string | void | Object>;
