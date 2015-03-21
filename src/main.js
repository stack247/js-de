/*
 JavaScript Development Environment

 Code editor
 Syntax highlighting
 Syntax validation
 Auto complete
 Auto run/refresh

 Project folder
 Reference management
 Test runner
 Build
 Compile
 Minification
 Run
 Deployment
 Code coverage
 Package manager

 Source control

 Flow:
 1. Create project root folder: 'js-de'.

 2. Initialize git repository: run 'git init'.
 3. Add origin to source control: run 'git remote add origin https://github.com/stack247/js-de.git'.
 4. Add source control related files: ".gitignore", "README.md".
 5. Add files to source control: run 'git add .'.
 6. Commit to source control: run 'git commit -m "Initial commit"'.
 7. Push to source control: run 'git push origin master'.

 8. Add folders (build, src, src/modules, src/test).
 9. Add application related files: "index.html", "main.js", "greeting.js".

 10. Initialize npm package manager to create 'package.json': run 'npm init'.
 11. Install 'Browserify' package globally: run 'npm install -g browserify'.
 5. Install 'Browserify' in the project: run 'npm install -save browserify'.
 6. Install 'Gulp' package globally: Run 'npm install -g gulp'.
 7. Install 'Gulp' in the project: run 'npm install -save-dev gulp'.

 8. Add gulp task file: 'gulpfile.js'
*/

var greeting = require("./modules/greeting.js");

console.log(greeting.sayHello("World"));
console.log(greeting.sayGoodbye("Master"));