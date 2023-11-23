/*Q5. What are the modules in Node.js? Explain

ans:
    Modules are reusable code blocks that can be used in Node.js applications. They can be a single file or a collection of multiple files/folders. Modules are organized in a hierarchy, with core modules at the top and user-defined modules below.

    Core modules are provided by Node.js and are essential for the functioning of the application. They include modules for handling file I/O, networking, and other common tasks. User-defined modules are created by developers and can be used to add functionality to the application.

    Modules can be imported into other modules using the require() function or the ES6 import module statement. The require() function takes the name of the module as an argument and returns the module object. The module object can then be used to access the functions and variables exported by the module.

    The ES6 import module statement is a more modern and concise way to import modules than the CommonJS require() function. The syntax for the ES6 import module statement is:

    import { name } from 'module-name';

    This statement imports the name variable from the module-name module.
    For example, the following code imports the myFunction() function from the myModule module using the require() function:

    const myModule = require('./myModule');*/
