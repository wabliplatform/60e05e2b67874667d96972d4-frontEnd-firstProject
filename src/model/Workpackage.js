/**
 * TempApi
 * This is a sample openApi document
 *
 * The version of the OpenAPI document: 1.0.0
 * Contact: lampralexandros@gmail.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';

/**
 * The Workpackage model module.
 * @module model/Workpackage
 * @version 1.0.0
 */
class Workpackage {
    /**
     * Constructs a new <code>Workpackage</code>.
     * @alias module:model/Workpackage
     * @param wpTitle {String} 
     * @param wpEnd {Date} 
     * @param wpDescription {String} 
     */
    constructor(wpTitle, wpEnd, wpDescription) { 
        
        Workpackage.initialize(this, wpTitle, wpEnd, wpDescription);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, wpTitle, wpEnd, wpDescription) { 
        obj['wpTitle'] = wpTitle;
        obj['wpEnd'] = wpEnd;
        obj['wpDescription'] = wpDescription;
    }

    /**
     * Constructs a <code>Workpackage</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Workpackage} obj Optional instance to populate.
     * @return {module:model/Workpackage} The populated <code>Workpackage</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Workpackage();

            if (data.hasOwnProperty('_id')) {
                obj['_id'] = ApiClient.convertToType(data['_id'], 'String');
            }
            if (data.hasOwnProperty('wpTitle')) {
                obj['wpTitle'] = ApiClient.convertToType(data['wpTitle'], 'String');
            }
            if (data.hasOwnProperty('wpEnd')) {
                obj['wpEnd'] = ApiClient.convertToType(data['wpEnd'], 'Date');
            }
            if (data.hasOwnProperty('wpDescription')) {
                obj['wpDescription'] = ApiClient.convertToType(data['wpDescription'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {String} _id
 */
Workpackage.prototype['_id'] = undefined;

/**
 * @member {String} wpTitle
 */
Workpackage.prototype['wpTitle'] = undefined;

/**
 * @member {Date} wpEnd
 */
Workpackage.prototype['wpEnd'] = undefined;

/**
 * @member {String} wpDescription
 */
Workpackage.prototype['wpDescription'] = undefined;






export default Workpackage;
