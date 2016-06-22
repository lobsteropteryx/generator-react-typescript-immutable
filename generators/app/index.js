'use strict';
var yeoman = require('yeoman-generator');
var chalk = require('chalk');
var yosay = require('yosay');

var toCamelCase = function (str) {
    return str
        .replace(/\s(.)/g, function($1) { return $1.toUpperCase(); })
        .replace(/\s/g, '')
        .replace(/^(.)/, function($1) { return $1.toLowerCase(); });
};

module.exports = yeoman.Base.extend({


    prompting: function () {
        var done = this.async();

        // Have Yeoman greet the user.
        this.log(yosay(
            'Welcome to the glorious ' + chalk.red('generator-react-typescript-immutable ') + 'generator!'
        ));

        var prompts = [
            {
                type: 'input',
                name: 'name',
                message: 'Component name',
                default: toCamelCase(this.appname)
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
            this.props.model = this.props.name + "Props";
            this.props.capModel = this.props.capName + "Props";
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
                this.templatePath('_typings.json'),
                this.destinationPath('typings.json')
            );
            this.fs.copy(
                this.templatePath('_karma.conf.js'),
                this.destinationPath('karma.conf.js')
            );
            this.fs.copy(
                this.templatePath('_tsconfig.json'),
                this.destinationPath('tsconfig.json')
            );
            this.fs.copy(
                this.templatePath('_tslint.json'),
                this.destinationPath('tslint.json')
            );
            this.fs.copy(
                this.templatePath('_.gitignore'),
                this.destinationPath('.gitignore')
            );
        },
        src: function () {
            this.fs.copyTpl(
                this.templatePath('_src/_app/_index.ts'),
                this.destinationPath('src/app/index.ts'),
                this.props
            );
            this.fs.copyTpl(
                this.templatePath('_src/_app/_components/_component.tsx'),
                this.destinationPath('src/app/components/' + this.props.name + '.tsx'),
                this.props
            );
            this.fs.copyTpl(
                this.templatePath('_src/_app/_models/_model.ts'),
                this.destinationPath('src/app/models/' + this.props.model + '.ts'),
                this.props
            );
        },
        test: function () {
            this.fs.copyTpl(
                this.templatePath('_src/_test/_index.html'),
                this.destinationPath('src/test/index.html'),
                this.props
            );
            this.fs.copyTpl(
                this.templatePath('_src/_test/_main.ts'),
                this.destinationPath('src/test/main.ts'),
                this.props
            );
            this.fs.copy(
                this.templatePath('_src/_test/_tsconfig.json'),
                this.destinationPath('src/test/tsconfig.json')
            );
            this.fs.copy(
                this.templatePath('_src/_test/_webpack.config.js'),
                this.destinationPath('src/test/webpack.config.js')
            );
            //spec
            this.fs.copyTpl(
                this.templatePath('_src/_test/_spec/_modelSpec.ts'),
                this.destinationPath('src/test/spec/' + this.props.model + 'Spec.ts'),
                this.props
            );
            this.fs.copy(
                this.templatePath('_src/_test/_spec/_tests.webpack.js'),
                this.destinationPath('src/test/spec/tests.webpack.js')
            );
            this.fs.copy(
                this.templatePath('_src/_test/_spec/_test-main.js'),
                this.destinationPath('src/test/spec/test-main.js')
            );
        }
    },

    install: function () {
        this.installDependencies();
    }
});
