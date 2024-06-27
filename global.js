////////////////////////////////////////////////////
// DESIGNPLUS CONFIG                            //
////////////////////////////////////////////////////
// Legacy
var DT_variables = {
    iframeID: '',
        // Path to the hosted USU Design Tools
        path: 'https://designtools.ciditools.com/',
        templateCourse: '145',
        // OPTIONAL: Button will be hidden from view until launched using shortcut keys
        hideButton: false,
    	 // OPTIONAL: Limit by course format
	     limitByFormat: false, // Change to true to limit by format
	     // adjust the formats as needed. Format must be set for the course and in this array for tools to load
	     formatArray: [
            'online',
            'on-campus',
            'blended'
        ],
        // OPTIONAL: Limit tools loading by users role
        limitByRole: false, // set to true to limit to roles in the roleArray
        // adjust roles as needed
        roleArray: [
            'student',
            'teacher',
            'admin'
        ],
        // OPTIONAL: Limit tools to an array of Canvas user IDs
        limitByUser: true, // Change to true to limit by user
        // add users to array (Canvas user ID not SIS user ID)
        userArray: [
            '109',
            '106'
        ],
		 // OPTIONAL: Relocate Ally alternative formats dropdown and hide heading
		 overrideAllyHeadings: false,
		 // OPTIONAL: Make assignment rubrics sortable
		 sortableRubrics: true,
		 // OPTIONAL: Transform people page ina course to show student cards
		 showStudentCards: true
};

// New
DpPrimary = {
    dbRequestUri: 'https://apac.multitool.ciditools.com/dp/action.php',
    lms: 'canvas',
    templateCourse: '322',
    hideButton: false,
    hideLti: false,
    extendedCourse: '', // added in sub-account theme
    sharedCourse: '', // added from localStorage
    courseFormats: [],
    canvasRoles: [],
    canvasUsers: ['109',
            '106'],
    canvasCourseIds: [],
    plugins: [],
    excludedModules: [],
    includedModules: [],
    lang: 'en',
    defaultToLegacy: false,
    enableVersionSwitching: true,
    hideSwitching: false,
    sortableRubrics: true,
    studentCards: true,
}

// merge with extended/shared customizations config
DpConfig = { ...DpPrimary, ...(window.DpConfig ?? {}) }

$(function () {
    const uriPrefix = (location.href.includes('.beta.')) ? 'beta.' : '';
    const toolsUri = (DpConfig.toolsUri) ? DpConfig.toolsUri : `https://${uriPrefix}designplus.ciditools.com/`;
    $.getScript(`${toolsUri}js/controller.js`);
    // Additional script loading for h5p-resizer.js
    $.getScript('https://knowledgegroup.h5p.com/js/h5p-resizer.js', function () {
        console.log('h5p-resizer.js loaded');
    });
});
////////////////////////////////////////////////////
// END DESIGNPLUS CONFIG                        //
////////////////////////////////////////////////////
