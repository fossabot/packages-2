const arg = require("arg");
const rootArgs = require("../../util/args");

const getArgs = () => ({
    ...arg(
        {
            ...rootArgs,
            "--scope": String,
            "-s": "--scope",

            "--changed": Boolean,
            "-c": "--changed",

            "--tagged": Boolean,
            "-t": "--tagged",

            "--dev": Boolean,
            "-d": "--dev",

            "--peer": Boolean,
            "-p": "--peer",

            "--optional": Boolean,
            "-o": "--optional",

            "--no-save": Boolean,
            "-S": "--no-save",
        },
        {
            permissive: false,
        }
    ),
});

module.exports = getArgs;
