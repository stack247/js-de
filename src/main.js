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
 2. Initialize git repository.
 1. Add folders (build, src, src/modules, src/test).
 2. Add source control related files: ".gitignore", "README.md".
 3. Add application related files: "index.html", "main.js", "greeting.js".
 4. Run 'npm install -g browserify'.
 5. Run 'npm install -save browserify'.
 6. Run 'npm install -g gulp'.
 7. Run 'npm install -save-dev gulp'.
 8. Add gulp task file: 'gulpfile.js'
*/

var greeting = require("./modules/greeting.js");

console.log(greeting.sayHello("World"));
console.log(greeting.sayGoodbye("Master"));