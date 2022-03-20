## Use of dependencies and package with npm

First of all, we need to install npm, for that we can use the Node JS installation. 

- Go to node.js website and download the wizard to install on windows. 

Before that, we can see installed version. 

```
node -v
npm -v
```

If we want to see that we have the latest version

```
npm install -g npm@latest
```

To create a project npm we use

```
npm init
```

Now, we going to have the next options:

- name
- version
- description
- main
- test scripts
- keywords
- author
- license

We can generate a quick default configuration using 	

```
npm init -yes	
```

Also we can set universal variables, like

```
npm set init.author.email "pablocaceros@gmail.com"
npm set init.author.name "StrikerEureka27"
npm set init.license "MIT"
```

## Dependency installation

Production installation

```
npm install [package] --save
npm i [package] -S
```

Dev installation

```
mpm install [package] --save-dev
npm i [package] -D
```

### node_modules

Here we can find all the external modules that we are installing on the project, is important to add this file to .gitignore because the size that could have this file. 

```
## Adding

node_modules/
```

## Installing global package

Maybe the system we ask for some set of permissions

```
npm install -g [package]
```

If we want to see global package

```
npm list -g --depth 0
```

## Installing dependency with force

If we want to see, the output of a installation we can use

```
npm install [package] --dry-run	
```

To force a installation

```
npm install [package] -f
```

> If we change some data in our package.json, we can use npm install to update our project configuration.

## How to install a specific version of a package

```
npm install [package]@[version]
```

## How to update or delete package

If we can have a list of all package

```
npm list 
```

To see what package are outdate, we can use

```
npm outdate

## if we want to see full ouput
npm [command] --dd
```

To make update

```
npm update	
npm install [package]@[version]
```

To delete a package

```
npm uninstall json-server
## To delete all from NODE and NPM but not from package.json
npm uninstall json-server --no-save
```

## Package lock and symbols  ^ and ~

Version: [Major] [Minor] [Patch]

We can eliminate ^ character from package.json to stay on a version of a package. 

## Task execution

```
npm run sayhi
> Hola mundo

## package.json

  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "sayhi": "Hola mundo"

  },

```

## Errors search and solution

If we work with more people in a team, we can have maybe some problems with version, to this cases we use

```
npm cache clear --force
npm cache verify
```

If we have a error in script commands etc, we can use --d to see all output

```
npm [command] --dd
```

Maybe we have a corrupted or bad installation package on our node_modules directory, to that cases we can use, to delete node_modules directory and reinstall it. 

```
rm -rf nodemodules/
npm install 

or

npm ci
```

## Security

We can audit our project

```
npm audit
npm audit --json
```

If we have a vulnerability is recommendation to update the package

```
npm update [package] --depth 2
```

or we can execute, to solve all of them

```
npm audit fix
```

## Creating npm package

We can generate a function that return some value and export that function like 

```js
module.export = { [function-name] }
```

Then we create a directory named *bin* , we create the file global.js 

```js
#!/usr/bin/env node
let random = require("../src/index.js");
random.randomMsg();
```

> Shebang #! it is use to, indicate what type of command we going to run 

Then we add it, to package.json 

```json
{
  "name": "random-message",
  "version": "1.0.0",
  "description": "Random message",
  "main": "src/index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [
    "javasrcript",
    "npm",
    "node"
  ],
  "author": "StrikerEureka27",
  "license": "MIT",
  "bin": {
    "random-msg": "./bin/global.js"
  },
  "preferGlobal": true
}
```



## How to publish our package

First we have to install or link our package locally to do dat we run

```
npm link
```

Now we can use our command

```
random-msg
```

To update our package we have to run 

```
npm link

or

npm install /c/Users/striker/Documents/npm/random-message
```

### We have to create our account in npmjs.com

Then we login by terminal

```
npm adduser
```

Now to publish 

```
npm publish
```

