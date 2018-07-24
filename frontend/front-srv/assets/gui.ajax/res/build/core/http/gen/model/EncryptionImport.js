/**
 * Pydio Cells Rest API
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: 1.0
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 *
 */

'use strict';

exports.__esModule = true;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var _ApiClient = require('../ApiClient');

var _ApiClient2 = _interopRequireDefault(_ApiClient);

/**
* The EncryptionImport model module.
* @module model/EncryptionImport
* @version 1.0
*/

var EncryptionImport = (function () {
    /**
    * Constructs a new <code>EncryptionImport</code>.
    * @alias module:model/EncryptionImport
    * @class
    */

    function EncryptionImport() {
        _classCallCheck(this, EncryptionImport);

        this.By = undefined;
        this.Date = undefined;
    }

    /**
    * Constructs a <code>EncryptionImport</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/EncryptionImport} obj Optional instance to populate.
    * @return {module:model/EncryptionImport} The populated <code>EncryptionImport</code> instance.
    */

    EncryptionImport.constructFromObject = function constructFromObject(data, obj) {
        if (data) {
            obj = obj || new EncryptionImport();

            if (data.hasOwnProperty('By')) {
                obj['By'] = _ApiClient2['default'].convertToType(data['By'], 'String');
            }
            if (data.hasOwnProperty('Date')) {
                obj['Date'] = _ApiClient2['default'].convertToType(data['Date'], 'Number');
            }
        }
        return obj;
    };

    /**
    * @member {String} By
    */
    return EncryptionImport;
})();

exports['default'] = EncryptionImport;
module.exports = exports['default'];

/**
* @member {Number} Date
*/