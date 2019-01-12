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

var _RestProcess = require('./RestProcess');

var _RestProcess2 = _interopRequireDefault(_RestProcess);

/**
* The RestListProcessesResponse model module.
* @module model/RestListProcessesResponse
* @version 1.0
*/

var RestListProcessesResponse = (function () {
    /**
    * Constructs a new <code>RestListProcessesResponse</code>.
    * @alias module:model/RestListProcessesResponse
    * @class
    */

    function RestListProcessesResponse() {
        _classCallCheck(this, RestListProcessesResponse);

        this.Processes = undefined;
    }

    /**
    * Constructs a <code>RestListProcessesResponse</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/RestListProcessesResponse} obj Optional instance to populate.
    * @return {module:model/RestListProcessesResponse} The populated <code>RestListProcessesResponse</code> instance.
    */

    RestListProcessesResponse.constructFromObject = function constructFromObject(data, obj) {
        if (data) {
            obj = obj || new RestListProcessesResponse();

            if (data.hasOwnProperty('Processes')) {
                obj['Processes'] = _ApiClient2['default'].convertToType(data['Processes'], [_RestProcess2['default']]);
            }
        }
        return obj;
    };

    /**
    * @member {Array.<module:model/RestProcess>} Processes
    */
    return RestListProcessesResponse;
})();

exports['default'] = RestListProcessesResponse;
module.exports = exports['default'];
