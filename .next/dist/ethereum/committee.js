'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _web = require('./web3');

var _web2 = _interopRequireDefault(_web);

var _Committee = require('./build/Committee.json');

var _Committee2 = _interopRequireDefault(_Committee);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var instance = new _web2.default.eth.Contract(JSON.parse(_Committee2.default.interface), '0x63bBBc538076A9004dc7B4D34D8708fe6F093f34');

exports.default = instance;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV0aGVyZXVtXFxjb21taXR0ZWUuanMiXSwibmFtZXMiOlsid2ViMyIsIkNvbW1pdHRlZSIsImluc3RhbmNlIiwiZXRoIiwiQ29udHJhY3QiLCJKU09OIiwicGFyc2UiLCJpbnRlcmZhY2UiXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLEFBQU8sQUFBUCxBQUFpQixBQUFqQjs7OztBQUNBLEFBQU8sQUFBUCxBQUFzQixBQUF0Qjs7Ozs7O0FBRUEsSUFBTSxXQUFXLElBQUksY0FBSyxBQUFMLElBQVMsQUFBYixTQUNiLEtBQUssQUFBTCxNQUFXLG9CQUFVLEFBQXJCLEFBRGEsWUFFYixBQUZhLEFBQWpCLEFBS0E7O2tCQUFlLEFBQWYiLCJmaWxlIjoiY29tbWl0dGVlLmpzIiwic291cmNlUm9vdCI6IkU6L01lZGlDb2luIn0=