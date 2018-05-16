const save = require('./function1.js');

save.saveWebPage(
    'https://en.wikipedia.org', 
    'write.html',
    () => {
        console.log('ran callback!');
    }
)