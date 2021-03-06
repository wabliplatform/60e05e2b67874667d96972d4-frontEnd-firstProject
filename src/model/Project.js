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
import ProjectProjectImage from './ProjectProjectImage';
import Workpackage from './Workpackage';

/**
 * The Project model module.
 * @module model/Project
 * @version 1.0.0
 */
class Project {
    /**
     * Constructs a new <code>Project</code>.
     * @alias module:model/Project
     * @param projectTitle {String} 
     * @param projectImage {module:model/ProjectProjectImage} 
     * @param projectStart {Date} 
     * @param projectEnd {Date} 
     * @param projectDescription {String} 
     * @param projectWorkpackages {Array.<module:model/Workpackage>} 
     */
    constructor(projectTitle, projectImage, projectStart, projectEnd, projectDescription, projectWorkpackages) { 
        
        Project.initialize(this, projectTitle, projectImage, projectStart, projectEnd, projectDescription, projectWorkpackages);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, projectTitle, projectImage, projectStart, projectEnd, projectDescription, projectWorkpackages) { 
        obj['projectTitle'] = projectTitle;
        obj['projectImage'] = projectImage;
        obj['projectStart'] = projectStart;
        obj['projectEnd'] = projectEnd;
        obj['projectDescription'] = projectDescription;
        obj['projectWorkpackages'] = projectWorkpackages;
    }

    /**
     * Constructs a <code>Project</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Project} obj Optional instance to populate.
     * @return {module:model/Project} The populated <code>Project</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Project();

            if (data.hasOwnProperty('_id')) {
                obj['_id'] = ApiClient.convertToType(data['_id'], 'String');
            }
            if (data.hasOwnProperty('projectTitle')) {
                obj['projectTitle'] = ApiClient.convertToType(data['projectTitle'], 'String');
            }
            if (data.hasOwnProperty('projectImage')) {
                obj['projectImage'] = ProjectProjectImage.constructFromObject(data['projectImage']);
            }
            if (data.hasOwnProperty('projectStart')) {
                obj['projectStart'] = ApiClient.convertToType(data['projectStart'], 'Date');
            }
            if (data.hasOwnProperty('projectEnd')) {
                obj['projectEnd'] = ApiClient.convertToType(data['projectEnd'], 'Date');
            }
            if (data.hasOwnProperty('projectDescription')) {
                obj['projectDescription'] = ApiClient.convertToType(data['projectDescription'], 'String');
            }
            if (data.hasOwnProperty('projectWorkpackages')) {
                obj['projectWorkpackages'] = ApiClient.convertToType(data['projectWorkpackages'], [Workpackage]);
            }
        }
        return obj;
    }


}

/**
 * @member {String} _id
 */
Project.prototype['_id'] = undefined;

/**
 * @member {String} projectTitle
 */
Project.prototype['projectTitle'] = undefined;

/**
 * @member {module:model/ProjectProjectImage} projectImage
 */
Project.prototype['projectImage'] = undefined;

/**
 * @member {Date} projectStart
 */
Project.prototype['projectStart'] = undefined;

/**
 * @member {Date} projectEnd
 */
Project.prototype['projectEnd'] = undefined;

/**
 * @member {String} projectDescription
 */
Project.prototype['projectDescription'] = undefined;

/**
 * @member {Array.<module:model/Workpackage>} projectWorkpackages
 */
Project.prototype['projectWorkpackages'] = undefined;






export default Project;

