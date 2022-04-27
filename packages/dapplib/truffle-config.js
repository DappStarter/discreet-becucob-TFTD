require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'good entire sugar tooth film ring remain erosion gloom prison swift share'; 
let testAccounts = [
"0x4f802a354481164370db9a767bed31225cdc82e5cdcae36ec09a53cf6bba18f0",
"0x101e8021ad10a77cb72a08af9ca1ca3aad78604d863ba078d3d3aad0f9644c98",
"0x7cf8ad5d822dbc25605480d3012055a6066fb8a5f6e35c45a9fd2053230c8d50",
"0x6e4bc897687da7ee9bb1315d8add1712a5fe5a0450684ce1233ff95f616da305",
"0xeeda05dc4181a118d459f9797a2ea036ac7d877bc04a3cf35e09971d3e48c781",
"0x4f89a702d6735217fc85e28a176d62311e866fd2b48a3793013e942b92b78bcf",
"0xe18374155f0593aebe45ee127824b2de9ab9dd580683c22b72d4ee9e9c641cc1",
"0xa25ef5548f13dce90e0572e21f25c60494b72bca8e3e2f32c7dc60108ccb10cb",
"0x284ebd2fe5f1d04f7bcca7d220871771c3b15fc4de7550a392555ed39da68998",
"0x71abeca53058f3f3c693e611e3fba6fa6011e854912b3d35bc39052fcdea8ad8"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

