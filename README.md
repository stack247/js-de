# JavaScript Development Environment

JavaScript doesn't have a specific and dedicated IDE that you would find in strong-typed language such as Java or C#. The absence of a dedicated IDE may not be comfortable for some people as you would need to perform manual tasks, such as bundling and minifying ('compile') or running tests. In full-featured IDE, such as Eclipse and Visual Studio, these tasks are integrated within the IDE, allowing programmers to quickly and easily run the tasks. Most of these features feel 'natural' to Java / C# developers and sometime, we take it for granted.

This project shows how we can with achieve similar full-featured IDE with help of tooling such as Gulp, Browserify and many more.

## Features

Some of the development features this project trying to achieve are:

+ Code editor
+ Syntax highlighting
+ Syntax validation
+ Auto complete
+ Auto run/refresh
+ Project folder
+ Reference management
+ Test runner
+ Build
+ Compile
+ Bundle and minification (uglify)
+ Run
+ Deployment
+ Code coverage
+ Package manager
+ Source control

## Steps

Project Setup

1. Create project root folder: 'js-de'.

Source Control Setup

2. Initialize git repository: run 'git init'.
3. Add origin to source control: run 'git remote add origin https://github.com/stack247/js-de.git'.
4. Add source control related files: ".gitignore", "README.md".
5. Add files to source control: run 'git add .'.
6. Commit to source control: run 'git commit -m "Initial commit"'.
7. Push to source control: run 'git push origin master'.

App Setup

8. Add folders (build, src, src/modules, src/test).
9. Add application related files: "index.html", "app.js", "greeting.js".

Node / NPM

10. Initialize npm package manager to create 'package.json': run 'npm init'.
11. Install 'Browserify' package globally: run 'npm install -g browserify'.
12. Install 'Browserify' in the project: run 'npm install -save browserify'.
13. Install 'Gulp' package globally: Run 'npm install -g gulp'.
14. Install 'Gulp' in the project: run 'npm install -save-dev gulp'.

Gulp

15. Add gulp task file: 'gulpfile.js'
16. Uncomment 'uglify' require and pipe.
17. Uncomment 'sourcemaps' require and pipe.

## Operating System
Windows 8.1
