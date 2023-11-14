import { categories } from "./category"

type productType = {
    id: number,
    productName: string,
    category: {
        id: number,
        categoryName: string
    },
    qty: number
}

let products: productType[] = []

const AddProduct = (product: productType)=>{
    const idCheck = products.find((prod)=>{
        return prod.id === product.id
    })
    
    const productExists = products.find((prod)=>{
        return prod.productName.toLowerCase() === product.productName.toLowerCase()
    })

    const categoryData = categories.find((cat)=>{
        return cat.id === product.category.id
    })

    if (idCheck || productExists) {
        console.log('Product already exists');
    } else if (!categoryData) {
        console.log(`Category isn't available`)
    } else {
        product.category.categoryName = categoryData.categoryName
        products.push(product)
    }
}

const UpdateProduct = (product: productType)=>{
    const data = products.findIndex((prod) => prod.id === product.id)
    const categoryData = categories.find((cat)=>{
        return cat.id === product.category.id
    })

    const productExists = products.find((prod)=>{
        return prod.productName.toLowerCase() === product.productName.toLowerCase()
    })

    if (data !== -1) {
        if (productExists) {
            console.log('Product already exists');
        } else if (!categoryData) {
            console.log(`Category isn't available`)
        } else {
            product.category.categoryName = categoryData.categoryName
            products[data] = product
            console.log('Data Updated')
        }
    } else {
        console.log('Product not found')
    }
}

const GetAllProducts = ()=>{
    console.log(products)
}

const GetProductByCategoryID = (categoryID: number)=>{
    const filteredProduct = products.filter((data)=>data.category.id === categoryID)

    if (!filteredProduct[0]) {
        console.log('Product not found')
    } else {
        console.log(filteredProduct)
    }
}

const GetProductByName = (name: string)=>{
    const filteredProduct = products.filter((data)=>{
        return data.productName.toLowerCase().includes(name.toLowerCase())
    })

    if (!filteredProduct[0]) {
        console.log('Product not found')
    } else {
        console.log(filteredProduct)
    }
}

const GetProductByID = (id: number)=>{
    const filteredProduct = products.filter((data) => data.id == id)

    if (!filteredProduct[0]) {
        console.log('Product not found')
    } else {
        console.log(filteredProduct)
    }
}

export {productType, AddProduct, GetAllProducts, GetProductByCategoryID, GetProductByName, GetProductByID, UpdateProduct}