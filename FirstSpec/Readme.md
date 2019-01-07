##Installation
>npm install --save-dev jasmine

### To initialize a project for Jasmine

>node node_modules/jasmine/bin/jasmine init

### Set jasmine as your test script in your package.json

>"scripts": { "test": "jasmine" }


### First Test
*  add index.html
*  add jasmine js 
*  add css (test without the css to see)


>    
    <link rel="stylesheet" href="../node_modules/jasmine-core/lib/jasmine-core/jasmine.css"><script type="text/javascript" src="../node_modules/jasmine-core/lib/jasmine-core/jasmine.js"></script>
    <script type="text/javascript" src="../node_modules/jasmine-core/lib/jasmine-core/jasmine-html.js"></script>
    <script type="text/javascript" src="../node_modules/jasmine-core/lib/jasmine-core/boot.js"></script>


## Console
- Right Click > inspect

For the Testing calculator, in the console: 

> var calc = new Calculator();

> calc.add(300);