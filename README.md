# ui5con17-custom-theme
> [OpenUI5](https://github.com/SAP/openui5) custom theme example for UI5con 2017 built using Grunt & Bower

Please note that this is just a very basic example project to show how custom themes can be created and built. The theme is not intended to be used with real applications and does not cover all parameters, controls and libraries.

![](screenshot.png)

## Getting started
* Install Node.js (from [nodejs.org](http://nodejs.org/)).
* Install the Grunt CLI
    ```sh
    npm install --global grunt-cli
    ```
* Clone the repository and navigate into it
    ```sh
    git clone https://github.com/matz3/ui5con17-custom-theme.git
    cd ui5con17-custom-theme
    ```
* Install all npm dependencies (also installs all bower dependencies)
    ```sh
    npm install
    ```

## Usage
### Server
Run `grunt serve` to start a local server which automatically re-compiles the theme when files are changed.

Demo apps (links to [http://localhost:8080](http://localhost:8080))
- [Order Browser](http://localhost:8080/test-resources/sap/m/demokit/orderbrowser/webapp/test/mockServer.html?sap-ui-theme=ui5con17#/Orders/7991/?tab=shipping)
- [Manage Products](http://localhost:8080/test-resources/sap/m/demokit/tutorial/worklist/07/webapp/test/mockServer.html?sap-ui-theme=ui5con17)

### Build
Run `grunt build` to build the theme to `/dist`.
