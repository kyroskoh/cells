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

var _ServiceResourcePolicy = require('./ServiceResourcePolicy');

var _ServiceResourcePolicy2 = _interopRequireDefault(_ServiceResourcePolicy);

/**
* The IdmUserMetaNamespace model module.
* @module model/IdmUserMetaNamespace
* @version 1.0
*/

var IdmUserMetaNamespace = (function () {
    /**
    * Constructs a new <code>IdmUserMetaNamespace</code>.
    * @alias module:model/IdmUserMetaNamespace
    * @class
    */

    function IdmUserMetaNamespace() {
        _classCallCheck(this, IdmUserMetaNamespace);

        this.Namespace = undefined;
        this.Label = undefined;
        this.Order = undefined;
        this.Indexable = undefined;
        this.JsonDefinition = undefined;
        this.Policies = undefined;
    }

    /**
    * Constructs a <code>IdmUserMetaNamespace</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/IdmUserMetaNamespace} obj Optional instance to populate.
    * @return {module:model/IdmUserMetaNamespace} The populated <code>IdmUserMetaNamespace</code> instance.
    */

    IdmUserMetaNamespace.constructFromObject = function constructFromObject(data, obj) {
        if (data) {
            obj = obj || new IdmUserMetaNamespace();

            if (data.hasOwnProperty('Namespace')) {
                obj['Namespace'] = _ApiClient2['default'].convertToType(data['Namespace'], 'String');
            }
            if (data.hasOwnProperty('Label')) {
                obj['Label'] = _ApiClient2['default'].convertToType(data['Label'], 'String');
            }
            if (data.hasOwnProperty('Order')) {
                obj['Order'] = _ApiClient2['default'].convertToType(data['Order'], 'Number');
            }
            if (data.hasOwnProperty('Indexable')) {
                obj['Indexable'] = _ApiClient2['default'].convertToType(data['Indexable'], 'Boolean');
            }
            if (data.hasOwnProperty('JsonDefinition')) {
                obj['JsonDefinition'] = _ApiClient2['default'].convertToType(data['JsonDefinition'], 'String');
            }
            if (data.hasOwnProperty('Policies')) {
                obj['Policies'] = _ApiClient2['default'].convertToType(data['Policies'], [_ServiceResourcePolicy2['default']]);
            }
        }
        return obj;
    };

    /**
    * @member {String} Namespace
    */
    return IdmUserMetaNamespace;
})();

exports['default'] = IdmUserMetaNamespace;
module.exports = exports['default'];

/**
* @member {String} Label
*/

/**
* @member {Number} Order
*/

/**
* @member {Boolean} Indexable
*/

/**
* @member {String} JsonDefinition
*/

/**
* @member {Array.<module:model/ServiceResourcePolicy>} Policies
*/