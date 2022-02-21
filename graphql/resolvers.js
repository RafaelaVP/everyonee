const  { employee, product } = require ('../models')



const Query = {
    getEmployeeDetails: async () => {
        try {
            const employees = await employee.findAll();
            return employees;
        } catch (error) {
            console.log(error)
        }
    },
    getProductDetails: async () => {
        try {
            const products = await product.findAll();
            return products;
        } catch (error) {
            console.log(error)
        }
    }
}


module.exports = { Query }