import Web3 from 'web3';

//  Use this for client with metamask!!!!
//         const loading=async()=>{
//         window.web3 = new Web3(window.ethereum);
//         await window.ethereum.enable();}
//         loading();
// export default window.web3;

let web3;

if(typeof window !==  'undefined'){
    //We are in browser
        const loading=async()=>{
        window.web3 = new Web3(window.ethereum);
        await window.ethereum.enable();}
        loading();
        web3 = window.web3;

} else{
    const provider = new Web3.providers.HttpProvider(
        'https://rinkeby.infura.io/v3/87a7a2297746408f89959cda52fff36a'
    );
     web3 = new Web3(provider);
}

export default web3;