const HDWalletProvider = require('truffle-hdwallet-provider');
const Web3 = require('web3');
const { interface, bytecode } = require('./compile');

const provider = new HDWalletProvider (
  'figure layer thing equal soon tell twice used saddle silver sound peanut',
  'https://rinkeby.infura.io/v3/11defe8f6cbc4617b365925aa7fe2737'
);

const web3 = new Web3(provider);

const deploy = async () => {
  const accounts = await web3.eth.getAccounts();

  console.log('Attempting to deploy from account ', accounts[0]);

  const result = await new web3.eth.Contract(JSON.parse(interface))
    .deploy({ data: bytecode, arguments: ['Hi there!'] })
    .send({ gas: '1000000', from: accounts[0] });

    console.log('Contract deployed to ', result.options.address);
};
deploy();
