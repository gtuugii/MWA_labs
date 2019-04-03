let dns = require("dns");
let hostname = 'www.mum.edu';
//console.log(dns);

let res = dns.resolve4(hostname, (error, addresses) => {
    if (error) throw error;

    console.log('addresses: ' + JSON.stringify(addresses));

    addresses.forEach(function (ip) {
        console.log('ip: ' + ip);
    });
});
