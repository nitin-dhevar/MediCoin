const routes = require('next-routes')();

routes
    .add('/manufacturers/details','/manufacturers/details')
    .add('/manufacturers/qrcode','/manufacturers/qrcode')
    .add('/manufacturers/buy','/manufacturers/buy')
    .add('/manufacturers/verify','/manufacturers/verify')
    .add('/manufacturers/new','/manufacturers/new')
    
   // .add('/manufacturers/:address','/manufacturers/show');
module.exports = routes;