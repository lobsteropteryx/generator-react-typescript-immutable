'use strict';
var yeoman = require('yeoman-generator');
var chalk = require('chalk');
var yosay = require('yosay');

module.exports = yeoman.Base.extend({

    prompting: function () {
        var done = this.async();

        // Have Yeoman greet the user.
        this.log(yosay(
            'Welcome to the glorious ' + chalk.red('generator-react-typescript-immutable') + ' generator!'
        ));

        var prompts = [
            {
                type: 'input',
                name: 'name',
                message: 'Component name',
                default: this.appname
            },
            {
                type: 'input',
                name: 'description',
                message: 'Description',
                default: ""
            }
        ];

        this.prompt(prompts, function (props) {
            this.props = props;
            // To access props later use this.props.someAnswer;

            done();
        }.bind(this));
    },

    writing: {
        config: function () {
            this.fs.copyTpl(
                this.templatePath('_package.json'),
                this.destinationPath('package.json'), {
                    name: this.props.name,
                    description: this.props.description
                }
            );
            this.fs.copyTpl(
                this.templatePath('_readme.md'),
                this.destinationPath('readme.md'), {
                    name: this.props.name,
                    description: this.props.description
                }
            );
            this.fs.copy(
                this.templatePath('tsd.json'),
                this.destinationPath('tsd.json')
            );
            this.fs.copy(
                this.templatePath('webpack.config.js'),
                this.destinationPath('webpack.config.js')
            );
            this.fs.copy(
                this.templatePath('karma.conf.js'),
                this.destinationPath('karma.conf.js')
            );
        }
    },

    install: function () {
        this.installDependencies();
    }
});
