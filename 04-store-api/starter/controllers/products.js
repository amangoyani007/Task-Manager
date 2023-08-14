const product = require('../models/product');
const Product = require('../models/product');

const getAllProductsStatic = async (req, res) => {
    const product = await Product.find({}).sort('-name price');
    res.status(200).json({ product });
};

const getAllProducts = async (req, res) => {
    const { featured, company, name, sort, fields } = req.query;
    const queryObject = {}

    if (featured) {
        queryObject.featured = featured === 'true' ? true : false;
    }

    if (company) {
        queryObject.company = company;
    }

    if (name) {
        queryObject.name = { $regex: name, $options: 'i' };
    }
    // console.log(queryObject);
    let result = Product.find(queryObject);
    //sort
    if (sort) {
        const sortlist = sort.split(',').join(' ')
        result = result.sort(sortlist);
    }
    else {
        result = result.sort('creatAt');
    }

    if (fields) {
        const fieldsList = fields.split(',').join(' ')
        result = result.select(fieldsList);
    }

    const product = await result;
    res.status(200).json({ product });
    
};

module.exports = {
    getAllProducts,
    getAllProductsStatic
};
