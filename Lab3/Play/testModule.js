const util = require('util');
const dns = require('dns');

const dnsResolveAsync = util.promisify(dns.resolve);
dnsResolveAsync('www.google.com')
    .then(addresses => console.log(addresses))
    .catch(err => console.log(err));

    