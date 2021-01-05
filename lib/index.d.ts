/// <reference types="node" />
/**
 * Validate XML without any DTD or schema.
 *
 * @param input XML
 */
export declare const validateXML: (input: string | Buffer) => Promise<string | void>;
/**
 * Validate XML without any DTD or schema. Recover XML file.
 *
 * @param input XML
 * @param output File path to store output
 */
export declare const validateXMLrecoverOutput: (input: string | Buffer, output: string | Buffer) => Promise<string | void>;
/**
 * Validate XML with DTD.
 *
 * @param input XML
 */
export declare const validateXMLWithDTD: (input: string | Buffer) => Promise<string | void>;
/**
 * Validate XML with the provided XML schema file.
 * @param input XML
 * @param xsdfile Path to XSD
 */
export declare const validateXMLWithXSD: (input: string | Buffer, xsdfile: string | Buffer) => Promise<string | void>;
