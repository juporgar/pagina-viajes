const Controller = require('./controller');
const Users = require('../models/users');
// const TravelModel = require('../models/travelModel');

class adminController extends Controller {
    constructor(req, res, next) {
        super(req, res, next)
    }

    index() {
        let users = new Users();
        users.showTravells()
            .then((data) => {
                this.res.render('admin', {
                    title: 'admin',
                    layout: 'layout-simp',
                    data:data
                })
            })
    }
}

module.exports = adminController;