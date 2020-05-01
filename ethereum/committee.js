import web3 from './web3';
import Committee from './build/Committee.json';

const instance = new web3.eth.Contract(
    JSON.parse(Committee.interface),
    '0x63bBBc538076A9004dc7B4D34D8708fe6F093f34'
);

export default instance;