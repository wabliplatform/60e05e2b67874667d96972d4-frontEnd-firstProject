const path = require('path');

module.exports = {
  entry: {
	'createProject' : './javascript/createProject.js',
	'viewAll' : './javascript/viewAll.js',
	'viewProject' : './javascript/viewProject.js',
	'updateProject' : './javascript/updateProject.js',
	'viewAllProjects' : './javascript/viewAllProjects.js',
	'createWorkpackage' : './javascript/createWorkpackage.js',
},
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js',
    
  },
};