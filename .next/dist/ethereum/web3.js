'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _web = require('web3');

var _web2 = _interopRequireDefault(_web);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _this = undefined;

//  Use this for client with metamask!!!!
//         const loading=async()=>{
//         window.web3 = new Web3(window.ethereum);
//         await window.ethereum.enable();}
//         loading();
// export default window.web3;

var web3 = void 0;

if (typeof window !== 'undefined') {
    //We are in browser
    var loading = function () {
        var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
            return _regenerator2.default.wrap(function _callee$(_context) {
                while (1) {
                    switch (_context.prev = _context.next) {
                        case 0:
                            window.web3 = new _web2.default(window.ethereum);
                            _context.next = 3;
                            return window.ethereum.enable();

                        case 3:
                        case 'end':
                            return _context.stop();
                    }
                }
            }, _callee, _this);
        }));

        return function loading() {
            return _ref.apply(this, arguments);
        };
    }();
    loading();
    web3 = window.web3;
} else {
    var provider = new _web2.default.providers.HttpProvider('https://rinkeby.infura.io/v3/87a7a2297746408f89959cda52fff36a');
    web3 = new _web2.default(provider);
}

exports.default = web3;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV0aGVyZXVtXFx3ZWIzLmpzIl0sIm5hbWVzIjpbIldlYjMiLCJ3ZWIzIiwid2luZG93IiwibG9hZGluZyIsImV0aGVyZXVtIiwiZW5hYmxlIiwicHJvdmlkZXIiLCJwcm92aWRlcnMiLCJIdHRwUHJvdmlkZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUEsQUFBTyxBQUFQOzs7Ozs7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFJLFlBQUo7O0FBRUEsSUFBRyxPQUFPLEFBQVAsV0FBbUIsQUFBdEIsYUFBa0MsQUFDOUI7QUFDSTtRQUFNLHNCQUFBOzRGQUFRLG1CQUFBOzBFQUFBOzBCQUFBO3FEQUFBOzZCQUNkO21DQUFPLEFBQVAsT0FBYyxBQUFJLEFBQUosa0JBQVMsT0FBTyxBQUFoQixBQUFkLEFBRGM7NENBQUE7bUNBRVIsT0FBTyxBQUFQLFNBQWdCLEFBQWhCLEFBRlE7OzZCQUFBOzZCQUFBOzRDQUFBOztBQUFBO3dCQUFBO0FBQVI7O2tDQUFBO29DQUFBO0FBQUE7QUFBTixBQUdBO0FBQ0E7V0FBTyxPQUFPLEFBQWQsQUFFUDtBQVJELE9BUU0sQUFDRjtRQUFNLFdBQVcsSUFBSSxjQUFLLEFBQUwsVUFBZSxBQUFuQixhQUNiLEFBRGEsQUFBakIsQUFHQztXQUFPLEFBQUksQUFBSixrQkFBUyxBQUFULEFBQVAsQUFDSjtBQUVEOztrQkFBZSxBQUFmIiwiZmlsZSI6IndlYjMuanMiLCJzb3VyY2VSb290IjoiRTovTWVkaUNvaW4ifQ==