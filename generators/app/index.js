"use strict";
const Generator = require("yeoman-generator");
const chalk = require("chalk");
const yosay = require("yosay");

module.exports = class extends Generator {
  prompting() {
    this.log(
      yosay(
        "Welcome to the " + chalk.red("generator-typeswarm") + " generator!"
      )
    );

    const prompts = [
      {
        type: "input",
        name: "name",
        message: "Your project name",
        default: this.appname,
      },
      {
        type: "input",
        name: "dockerContextDev",
        message: "Docker context for development environment",
        default: "dev",
      },
      {
        type: "input",
        name: "dockerStackDev",
        message: "Docker stack name for development environment",
        default: ({ name }) => `${name}-dev`,
      },
      {
        type: "input",
        name: "dockerContextProd",
        message: "Docker context for production environment",
        default: "prod",
      },
      {
        type: "input",
        name: "dockerStackProd",
        message: "Docker stack name for production environment",
        default: ({ name }) => `${name}-prod`,
      },
    ];

    return this.prompt(prompts).then((props) => {
      this.props = props;
    });
  }

  writing() {
    this.fs.copyTpl(
      this.templatePath("tsconfig.json"),
      this.destinationPath("tsconfig.json"),
      this.props
    );
    this.fs.copyTpl(
      this.templatePath("package.json"),
      this.destinationPath("package.json"),
      this.props
    );
    this.fs.copyTpl(
      this.templatePath(".prod.env"),
      this.destinationPath(".prod.env"),
      this.props
    );
    this.fs.copyTpl(
      this.templatePath(".dev.env"),
      this.destinationPath(".dev.env"),
      this.props
    );
    this.fs.copyTpl(
      this.templatePath("gitignore"),
      this.destinationPath(".gitignore"),
      this.props
    );
    this.fs.copyTpl(
      this.templatePath("deploy.ts"),
      this.destinationPath("deploy.ts"),
      this.props
    );
  }

  install() {
    this.installDependencies({ bower: false });
  }
};
