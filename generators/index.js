var path = require('path');
var chalk = require('chalk');
var util = require('util');

var yeoman = require('yeoman-generator');
var yosay = require('yosay');

var ReactAntd = yoman.Base.extend({
	info: function(){
		this.log(chalk.green(
			'I am going to build your app'
		));
	},

	generateBasic: function(){
		this.directory("src", 'src');
		this.directory('data', 'data');
		this.directory('action', 'actions');
		this.directory('common', 'common');
		this.copy('package.json', 'package.json');
		this.copy('index.html', 'index.html');
		this.copy('README.md', 'README.md');
		this.copy('webpack.config.js', 'webpack.config.js');
	},

	generateClient: function(){
		this.sourceRoot(path.join(__dirname,'templates'));
		this.destinationPath('./');
	},

	end: function(){
		this.log(yosay('Your app has been created successfully!'))
	}
});

module.exports = ReactAntd;