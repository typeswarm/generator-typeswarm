"use strict";
const Generator = require("yeoman-generator");
const chalk = require("chalk");
const yosay = require("yosay");

module.exports = class extends Generator {
    prompting() {
        // Have Yeoman greet the user.
        this.log(
            yosay(
                `Welcome to the awesome ${chalk.red(
                    "generator-typeswarm"
                )} generator!`
            )
        );

        const prompts = [
            {
                type: "input",
                name: "name",
                message: "Your package name",
                default: this.appname,
            },
        ];

        return this.prompt(prompts).then((props) => {
            // To access props later use this.props.someAnswer;
            this.props = props;
        });
    }

    writing() {
        this.fs.copyTpl(
            this.templatePath("package.json"),
            this.destinationPath("package.json"),
            this.props
        );
        this.fs.copyTpl(
            this.templatePath("gitignore"),
            this.destinationPath(".gitignore"),
            this.props
        );
        this.fs.copyTpl(
            this.templatePath("src"),
            this.destinationPath("src"),
            this.props
        );
        this.fs.copyTpl(
            this.templatePath("tsconfig.json"),
            this.destinationPath("tsconfig.json"),
            this.props
        );
        this.fs.copyTpl(
            this.templatePath(".github"),
            this.destinationPath(".github"),
            this.props
        );
        this.fs.copyTpl(
            this.templatePath(".npmrc"),
            this.destinationPath(".npmrc"),
            this.props
        );
    }

    install() {
        this.installDependencies({ bower: false });
    }
};
