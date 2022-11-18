import * as common from '/pages/src/common.mjs';

async function main() {
    console.log("Sauce Version:", await common.rpc.getVersion());
}

main();
