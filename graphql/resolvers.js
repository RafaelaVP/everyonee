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
    },
}
const Mutation = {
    createEmployee: async(root, {
        firstName,
        lastName,
        email
    })=> {
        try {
            await employee && employee.create({
                firstName,
                lastName,
                email
            }) 
            return "create employeee"
        } catch (error) {
            console.log(error)
        }
    },
    createProduct: async(root, {
        nameProduct,
        typeProduct,
        
    })=> {
        try {
            await product && product.create({
                nameProduct,
                typeProduct
                
            }) 
            return "create product"
        } catch (error) {
            console.log(error)
        }
    }

}


module.exports = { Query, Mutation }