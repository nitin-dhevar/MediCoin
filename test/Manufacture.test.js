const assert = require('assert');
const ganache = require('ganache-cli');
const Web3 = require('web3');

const web3 = new Web3(ganache.provider());

const compiledCommittee = require('../ethereum/build/Committee.json');
const compiledManufacture = require('../ethereum/build/Manufacture.json');

let accounts;
let committee;
let manufactureAddress;
let manufacture;

beforeEach(async ()=>{
    accounts = await web3.eth.getAccounts();
    committee = await new web3.eth.Contract(JSON.parse(compiledCommittee.interface))
                    .deploy({ data:compiledCommittee.bytecode})
                    .send({from:accounts[0],gas:'1000000'});

    await committee.methods.createManufacture(123).send({
        from:accounts[0],
        gas:'1000000'
    });

    const addresses = await committee.methods.getDeployedManufacturers().call();
    manufactureAddress = addresses[0]; 
    
    manufacture = await new web3.eth.Contract(
            JSON.parse(compiledManufacture.interface),
            manufactureAddress
    );

});

describe('Manufactures',()=>{
 it('Deploys the contract',() =>{
     assert.ok(committee.options.address);
     assert.ok(manufacture.options.address);
 });
 it('Contract Methods testing',() =>{
    assert.ok(committee.options.address);
    assert.ok(manufacture.options.address);
});
it('Deploys the manufacture',() =>{
    assert.ok(committee.options.address);
    assert.ok(manufacture.options.address);
});
it('Manufacture methods testing',() =>{
    assert.ok(committee.options.address);
    assert(false);
});
});