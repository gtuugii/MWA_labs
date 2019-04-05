(function () {
    let dns = require('dns');
    let { promisify } = require('util');
    let hostname = "www.mum.edu";

    let dnsResolve4 = promisify(dns.resolve4);
    dnsResolve4(hostname)
        .then(addresses => addresses.forEach(function (ip) {
            console.log('ip: ' + ip);
        }))
        .catch(err => console.log(err));

}) ();
