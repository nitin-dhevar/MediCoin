'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _committee = require('../ethereum/committee');

var _committee2 = _interopRequireDefault(_committee);

var _semanticUiReact = require('semantic-ui-react');

var _layout = require('../components/layout');

var _layout2 = _interopRequireDefault(_layout);

var _routes = require('../routes');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = 'E:\\MediCoin\\pages\\index.js?entry';


var ManufactureIndex = function (_Component) {
    (0, _inherits3.default)(ManufactureIndex, _Component);

    function ManufactureIndex() {
        (0, _classCallCheck3.default)(this, ManufactureIndex);

        return (0, _possibleConstructorReturn3.default)(this, (ManufactureIndex.__proto__ || (0, _getPrototypeOf2.default)(ManufactureIndex)).apply(this, arguments));
    }

    (0, _createClass3.default)(ManufactureIndex, [{
        key: 'renderManufacturers',
        value: function renderManufacturers() {
            var items = this.props.manufacturers.map(function (address) {
                return {
                    header: address,
                    description: _react2.default.createElement(_routes.Link, { route: '/manufacturers/' + address, __source: {
                            fileName: _jsxFileName,
                            lineNumber: 18
                        }
                    }, _react2.default.createElement('a', {
                        __source: {
                            fileName: _jsxFileName,
                            lineNumber: 19
                        }
                    }, 'Manufacture')),
                    fluid: true
                };
            });

            return _react2.default.createElement(_semanticUiReact.Card.Group, { items: items, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 29
                }
            });
        }
    }, {
        key: 'render',
        value: function render() {
            return _react2.default.createElement(_layout2.default, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 35
                }
            }, _react2.default.createElement('div', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 36
                }
            }, _react2.default.createElement('h2', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 37
                }
            }, 'All Manufacturers'), _react2.default.createElement(_routes.Link, { route: '/manufacturers/new', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 39
                }
            }, _react2.default.createElement('a', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 40
                }
            }, _react2.default.createElement(_semanticUiReact.Button, { floated: 'right', content: 'New Manufacture',
                icon: 'plus square',
                primary: true, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 41
                }
            }))), this.renderManufacturers()));
        }
    }], [{
        key: 'getInitialProps',
        value: function () {
            var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
                var manufacturers;
                return _regenerator2.default.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                _context.next = 2;
                                return _committee2.default.methods.getDeployedManufacturers().call();

                            case 2:
                                manufacturers = _context.sent;
                                return _context.abrupt('return', { manufacturers: manufacturers });

                            case 4:
                            case 'end':
                                return _context.stop();
                        }
                    }
                }, _callee, this);
            }));

            function getInitialProps() {
                return _ref.apply(this, arguments);
            }

            return getInitialProps;
        }()
    }]);

    return ManufactureIndex;
}(_react.Component);

exports.default = ManufactureIndex;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzXFxpbmRleC5qcyJdLCJuYW1lcyI6WyJyZWFjdCIsIkNvbXBvbmVudCIsImNvbW1pdHRlZSIsIkNhcmQiLCJCdXR0b24iLCJMYXlvdXQiLCJMaW5rIiwiTWFudWZhY3R1cmVJbmRleCIsIml0ZW1zIiwicHJvcHMiLCJtYW51ZmFjdHVyZXJzIiwibWFwIiwiaGVhZGVyIiwiYWRkcmVzcyIsImRlc2NyaXB0aW9uIiwiZmx1aWQiLCJyZW5kZXJNYW51ZmFjdHVyZXJzIiwibWV0aG9kcyIsImdldERlcGxveWVkTWFudWZhY3R1cmVycyIsImNhbGwiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxBQUFPLEFBQVM7Ozs7QUFDaEIsQUFBTyxBQUFlOzs7O0FBQ3RCLEFBQVMsQUFBSzs7QUFDZCxBQUFPLEFBQVk7Ozs7QUFDbkIsQUFBUSxBQUFXOzs7Ozs7O0ksQUFFYjs7Ozs7Ozs7Ozs7OENBTW1CLEFBQ2pCO2dCQUFNLGFBQU0sQUFBSyxNQUFMLEFBQVcsY0FBWCxBQUF5QixJQUFJLG1CQUFVLEFBQy9DOzs0QkFBTSxBQUNNLEFBQ1I7aURBQ0ksQUFBQyw4QkFBSywyQkFBTixBQUErQjtzQ0FBL0I7d0NBQUEsQUFDQTtBQURBO3FCQUFBLGtCQUNBLGNBQUE7O3NDQUFBO3dDQUFBO0FBQUE7QUFBQSx1QkFKRixBQUdFLEFBQ0EsQUFNSjsyQkFWSixBQUFNLEFBVUksQUFFYjtBQVpTLEFBQ0Y7QUFGUixBQUFZLEFBZVosYUFmWTs7aURBZUwsQUFBQyxzQkFBRCxBQUFNLFNBQU0sT0FBWixBQUFtQjs4QkFBbkI7Z0NBQVAsQUFBTyxBQUNWO0FBRFU7YUFBQTs7OztpQ0FJSCxBQUNKO21DQUNBLEFBQUM7OzhCQUFEO2dDQUFBLEFBQ0E7QUFEQTtBQUFBLGFBQUEsa0JBQ0EsY0FBQTs7OEJBQUE7Z0NBQUEsQUFDQTtBQURBO0FBQUEsK0JBQ0EsY0FBQTs7OEJBQUE7Z0NBQUE7QUFBQTtBQUFBLGVBREEsQUFDQSxBQUVBLHNDQUFBLEFBQUMsOEJBQUssT0FBTixBQUFZOzhCQUFaO2dDQUFBLEFBQ0k7QUFESjsrQkFDSSxjQUFBOzs4QkFBQTtnQ0FBQSxBQUNIO0FBREc7QUFBQSwrQkFDSCxBQUFDLHlDQUFPLFNBQVIsQUFBZ0IsU0FBUSxTQUF4QixBQUFnQyxBQUNqQztzQkFEQyxBQUNJLEFBQ0w7eUJBRkM7OEJBQUE7Z0NBTEQsQUFHQSxBQUNJLEFBQ0gsQUFNQTtBQU5BO3VCQVBELEFBQ0EsQUFDQSxBQVdDLEFBQUssQUFLVDs7Ozs7Ozs7Ozs7O3VDQTFDK0Isb0JBQUEsQUFBVSxRQUFWLEFBQWtCLDJCLEFBQWxCLEFBQTZDOztpQ0FBbkU7QTtpRUFDQyxFQUFDLGUsQUFBRDs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQTJDZixBLEFBL0MrQjs7a0JBK0MvQixBQUFlIiwiZmlsZSI6ImluZGV4LmpzP2VudHJ5Iiwic291cmNlUm9vdCI6IkU6L01lZGlDb2luIn0=