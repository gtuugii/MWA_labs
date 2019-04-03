let dns = require('dns');
let { promisify} = require('util');
let hostname = 'wwww.mum.edu';

const dnsResolve4 = promisify(dns.resolve4);
dnsResolve4(hostname)
    .then(addresses => console.log(addresses))
    .catch(err => console.log(err));


