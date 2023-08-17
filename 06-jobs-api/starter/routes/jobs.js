const express = require('express');
const router = express.Router();

const {getAllJobs, getJob, creatJob, updateJob, deleteJob} = require('../controllers/jobs')

router.route('/').post(creatJob).get(getAllJobs);
router.route('/:id').get(getJob).delete(deleteJob).patch(updateJob);

module.exports = router;
