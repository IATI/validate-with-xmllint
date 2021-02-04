"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const child_process_1 = require("child_process");
/**
 * xmllint should not write anything to stdout nor stderr when validating.
 *
 * Thus any output is considered an error and will reject the promise.
 *
 * The exit code of xmllint informs us whether the xml was valid or not
 */
const exec_xmllint = (input, command) => new Promise((resolve, reject) => {
    const xmllint = child_process_1.spawn(command, { shell: true });
    // stdout and stderr are both captured to be made available if the promise rejects
    let output = "";
    let error = "";
    xmllint.stdout.on("data", (chunk) => (output += chunk.toString()));
    xmllint.stderr.on("data", (chunk) => (error += chunk.toString()));
    // Any errors cause a rejection
    xmllint.on("error", reject);
    xmllint.on("close", (code) => {
        if (code === 0) {
            return resolve({ output, error });
        }
        return reject(new Error(`xmllint exited with code ${code} when executed with ${command}:\n${error}`));
    });
    // pipe input to process
    xmllint.stdin.end(input);
});
/**
 * Validate XML without any DTD or schema.
 *
 * @param input XML
 */
exports.validateXML = (input) => exec_xmllint(input, "xmllint --noout --nonet -");
/**
 * Validate XML without any DTD or schema. Return Recovered XML.
 *
 * @param input XML
 */
exports.validateXMLrecover = (input) => exec_xmllint(input, `xmllint --nonet --recover -`);
/**
 * Validate XML without any DTD or schema. Output Recovered XML to file.
 *
 * @param input XML
 * @param output File path to store output
 */
exports.validateXMLrecoverOutput = (input, output) => exec_xmllint(input, `xmllint --nonet --recover --output ${output} -`);
/**
 * Validate XML with DTD.
 *
 * @param input XML
 */
exports.validateXMLWithDTD = (input) => exec_xmllint(input, "xmllint --valid --noout --nonet -");
/**
 * Validate XML with the provided XML schema file.
 * @param input XML
 * @param xsdfile Path to XSD
 */
exports.validateXMLWithXSD = (input, xsdfile) => exec_xmllint(input, `xmllint --schema ${xsdfile} --noout --nonet -`);
