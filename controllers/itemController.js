const db = require('../models');

module.exports = {
    create:function(req, res) {
        console.log('post req', req.body)
        db.Items.create(
           req.body
        ).then(
            function(item){
                console.log(item);
                res.redirect('/');
            }
        );
    }
};