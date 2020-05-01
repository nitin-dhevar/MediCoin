import web3 from './web3';
import Manufacture from './build/Manufacture.json';


const instance = new web3.eth.Contract(
    JSON.parse(Manufacture.interface),
    '0x10Fa4AE050A901deC953761CE33A97993BBB34A4'
);

// export default (address) => {
//     return new web3.eth.Contract(
//         JSON.parse(Manufacture.interface),
//         address
//     );
// };

export default instance;