const kleur = require("kleur");

const help = () => {
    const message = `
${kleur.bold(`DESCRIPTION`)}

    Run a shell command in each package.

${kleur.bold(`USAGE`)}

    ${kleur.dim(`$`)} ${kleur.bold(
        `titan run`
    )} <name> [options] -- [script-options]

${kleur.bold(`OPTIONS`)}

    --help, -h                Show this help message
    --scope, -s               Set the scope regex to match against
    --changed, -c             Only run for packages that have changed
    --tagged, -t              Only run for packages that are tagged on HEAD
    --ordered, -o             Run scripts for packages in order of dependencies

${kleur.bold(`EXAMPLE`)}

    ${kleur.dim(`$ # Build all packages.`)}
    ${kleur.dim(`$`)} ${kleur.bold(`titan run`)} build

    ${kleur.dim(`$ # Build only packages in the "@jakehamilton" namespace.`)}
    ${kleur.dim(`$`)} ${kleur.bold(`titan run`)} build --scope="^@jakehamilton"

    ${kleur.dim(`$ # Build all packages that have changed since release.`)}
    ${kleur.dim(`$`)} ${kleur.bold(`titan run`)} build --changed

    ${kleur.dim(`$ # Build all packages that are tagged for release.`)}
    ${kleur.dim(`$`)} ${kleur.bold(`titan run`)} build --tagged

    ${kleur.dim(`$ # Build all packages in order of dependencies.`)}
    ${kleur.dim(`$`)} ${kleur.bold(`titan run`)} build --ordered
`;

    console.log(message);
};

module.exports = help;
