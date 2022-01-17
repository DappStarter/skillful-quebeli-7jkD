require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'inflict forget force sugar guard render remind concert grace basket force split'; 
let testAccounts = [
"0xeba291d3f12a3e64544e613b0775e1fad3cc9b347cd576f15ac9a72b9c942b23",
"0x344fbc5518a736e074db9adb08b54fc59b2e9eeac312b556cd05eed69ecaaad7",
"0x779f0cfecca91c8d18dddc071c282ff823893bfcff491e668e4738c8d467f839",
"0x520cea626c8d2056d8530fdaa541c01b4b225c4a2250fd059169c3e1b00369e9",
"0xaceab3bdd67c750a9fdfdd9e5aad2bc8ee52faf381c771e5afda7e0d998ba818",
"0x8ce5211200d50de97a808141d9fd3f2021577279d3d9d0a32b3829de3ba8d773",
"0x0c76edfe03f0086b619af4082728142f3316ec5e19bdd02af763bdfd587ffe92",
"0xcea021d172a1698772c5846c63c7289e378e0f0692e5170d38847f534fab916a",
"0x314a808368dbfc6825d83f09949e4d6a957f56be97c6f7dcedffb586bd79ef7c",
"0xe78677fe5d601126933b6eecf82fd84f37813eff939ba43af1e936715dceb90e"
]; 
let devUri = 'http://127.0.0.1:7545/';

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
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

