const HDWalletProvider = require('truffle-hdwallet-provider');
const Web3 = require('web3');
//const {interface,bytecode} = require('./complie');
const compiledCommittee = require('./build/Committee.json');

const provider = new HDWalletProvider(
 'together blind prison raven guard hurdle siege method you genius hover deliver',
 'https://rinkeby.infura.io/v3/87a7a2297746408f89959cda52fff36a'
);


const web3 = new Web3(provider);
const deploy = async ()=> {
  const accounts = await web3.eth.getAccounts();
  
  console.log('Attempting to deploy from account',accounts[0]);
  const result = await new web3.eth.Contract(JSON.parse(compiledCommittee.interface))
    .deploy({data:compiledCommittee.bytecode})
    .send({from:accounts[0],gas:'1000000'});
  
//console.log(interface);
  console.log('Deployed on address: ',result.options.address);
};
deploy();