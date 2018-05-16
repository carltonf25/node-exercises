const readline = require('readline');
const dns = require('dns');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('What is the domain?: ', (domain) => {   
    rl.close();
    
    dns.resolve(domain, (err, data) => {
        if (err) {
            console.log(err);
        } else {
            console.log(`
Domain Name: ${domain}
IP Address: ${data[0]}
            `);
        }
    });
    
});