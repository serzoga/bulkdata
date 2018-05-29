'use strict';
var dataProvider = require('../../../data/account/labAnalysis/data_dev.js');
/**
 * Operations on /account/labAnalysis/data
 */
module.exports = {
    /**
     * summary: post an array of waybill to subscription
     * description: Post an array of Laboratory analysis to subscription

     * parameters: sourceID, waybill
     * produces: application/json
     * responses: 200, 400, 500
     */
    post: function waybilss_labAnalysis(req, res, next) {
        /**
         * Get the data for response 200
         * For response `default` status 200 is used.
         */
        var status = 200;
        var provider = dataProvider['post']['200'];
        provider(req, res, function (err, data) {
            if (err) {
                next(err);
                return;
            }
            res.status(status).send(data && data.responses);
        });
    }
};
