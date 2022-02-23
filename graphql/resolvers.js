const  { employee, product, maker, category } = require ('../models');

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
    getManyMaker: async (root) => {
        try {
          const makers = await maker.findAll();
          return makers;
        } catch (err) {
          console.log(err);
        }
      },
      getOneMaker: async (root, { id }) => {
        try {
          const mke = await maker.findByPk(id)
          return mke;
        } catch (err) {
          console.log(err);
        }
      },
      getManyCategory: async (root) => {
        try {
          const categories = await category.findAll()
          return categories;
        } catch (err) {
          console.log(err);
        }
      },
      getOneCategory: async (root, { id }) => {
        try {
          const ctg = await category.findByPk(id)
          return ctg;
        } catch (err) {
          console.log(err);
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
    },
    createMaker: async(root, {nameMaker}) => {
        try {
            await maker.create({nameMaker})
            return "create maker"
        } catch (error) {
            console.log(error)
        }
    },
    createCategory: async(root, {nameCategory}) => {
        try {
            await category.create({nameCategory})
            return "create category"
        } catch (error) {
            console.log(error)
        }
    },
    
    updateEmployee: async(root, {id, firstName, lastName, email}) => {
        try {
        const employees = await employee.update({firstName, lastName, email}, {where:{id}});
        let message;
        if(employees) message = "update employee"
        return message
        } catch (error) {
            console.log(error)
        }
    },
    updateProduct: async(root, {id, nameProduct, typeProduct}) => {
        try {
        const products = await product.update({nameProduct, typeProduct}, {where:{id}});
        let message;
        if(products) message = "update product"
        return message
        } catch (error) {
            console.log(error)
        }
    },
    deleteEmployee: async(root, {id}) => {
        try {
            const employees = await employee.destroy({where: {id}})
            let message;
            if(employees) message = "deleted employeee"
            return message;
        } catch (error) {
            console.log(error)      
        }
    },
    deleteProduct: async(root, {id}) => {
        try {
            const products = await product.destroy({where: {id}})
            let message;
            if(products) message = "deleted product"
            return message;
        } catch (error) {
            console.log(error)      
        }
    },

}


module.exports = { Query, Mutation }