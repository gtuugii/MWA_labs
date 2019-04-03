let dns = require('dns');
let { promisify } = require('util');
let hostname = "mum.edu";

let dnsResolve4 = promisify(dns.resolve4);

dnsResolve4(hostname)
    .then(addresses => addresses.forEach(function (ip) {
        console.log('ip: ' + ip);
    }))
    .catch(err => console.log(err));

async function dnsResolveAsync(domain){
    try {
        let results = await dnsResolve4(domain);
        console.log(results);
    }
    catch (error) {
        console.log(error);
    }
}

dnsResolveAsync(hostname);
