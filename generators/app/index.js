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
            this.props.capName = this.props.name.charAt(0).toUpperCase() + this.props.name.slice(1);
            this.props.model = this.props.name + "Model";
            this.props.capModel = this.props.capName + "Model";
            done();
        }.bind(this));
    },

    writing: {
        config: function () {
            this.fs.copyTpl(
                this.templatePath('_package.json'),
                this.destinationPath('package.json'),
                this.props
            );
            this.fs.copyTpl(
                this.templatePath('_readme.md'),
                this.destinationPath('readme.md'),
                this.props
            );
            this.fs.copy(
                this.templatePath('_tsd.json'),
                this.destinationPath('tsd.json')
            );
            this.fs.copy(
                this.templatePath('_webpack.config.js'),
                this.destinationPath('webpack.config.js')
            );
            this.fs.copy(
                this.templatePath('_karma.conf.js'),
                this.destinationPath('karma.conf.js')
            );
            this.fs.copy(
                this.templatePath('_tsconfig.json'),
                this.destinationPath('tsconfig.json')
            );
        },
        src: function () {

        },
        test: function () {
            this.fs.copyTpl(
                this.templatePath('_test/_index.html'),
                this.destinationPath('test/index.html'),
                this.props
            );
            this.fs.copyTpl(
                this.templatePath('_test/_main.ts'),
                this.destinationPath('test/main.ts'),
                this.props
            );
        }
    },

    install: function () {
        this.installDependencies();
    }
});
