const express = require('express')
const router = express.Router();

const userRoutes = require('./user.routes')
const authRoutes = require('./auth.routes')

const routesArr = [{
    path : '/auth',
    route : authRoutes
},{
    path : '/user',
    route : userRoutes
}];

routesArr.map((route)=>{
    router.use(route.path, route.route);
})

module.exports = router;