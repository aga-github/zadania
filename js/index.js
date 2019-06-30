'use strict';

var fs = require('fs'),
    colors = require('colors');

fs.readdir('./', 'utf8', function(err, data) {
    var display;
    
    console.log('Content of your directory: '.red);
    data.forEach(function(item) {
        display += item + '\r\n';
    });

    console.log(display);

    fs.writeFile('./content.txt', display, 'utf-8', function(err) {
        if(err) throw err;
        console.log('Content download to file "content.txt"'.red);
    });
});

