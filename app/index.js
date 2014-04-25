'use strict';
var util = require('util');
var path = require('path');
var yeoman = require('yeoman-generator');
var chalk = require('chalk');


var BrowserifyGulpGenerator = yeoman.generators.Base.extend({
    init: function () {
        this.pkg = require('../package.json');

        this.on('end', function () {
            if (!this.options['skip-install']) {
                this.installDependencies();
            }
        });
    },

    askFor: function () {
        var done = this.async();

        // have Yeoman greet the user
        this.log(this.yeoman);

        // replace it with a short and sweet description of your generator
        this.log(chalk.magenta('You\'re using the fantastic BrowserifyGulp generator.'));

        var prompts = [
            {
                name: 'appName',
                message: "What is the name of the application?"
            }
        ];

        this.prompt(prompts, function (props) {
            this.appName = props.appName;

            done();
        }.bind(this));
    },

    app: function () {
        this.mkdir("js");
        this.mkdir("css");
        this.mkdir("templates");

        this.copy('_package.json', 'package.json');
    },

    projectfiles: function () {
        this.copy('jshintrc', '.jshintrc');
        this.copy("_index.html", "index.html");
    }
});

module.exports = BrowserifyGulpGenerator;