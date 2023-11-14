import {AddCategory, GetAllCategories, GetCategoryByID, GetCategoryByName, UpdateCategory} from './category'
import { AddProduct, GetAllProducts, GetProductByCategoryID, GetProductByID, GetProductByName, UpdateProduct } from './product'

// CATEGORY
AddCategory({id: 1, categoryName: 'Smartphone'})
AddCategory({id: 2, categoryName: 'Laptop'})
AddCategory({id: 3, categoryName: 'Truck'})
// AddCategory({id: 4, categoryName: 'truck'})

UpdateCategory({id: 1, categoryName: 'Cell Phone'})

GetAllCategories()
// GetCategoryByName('top')
// GetCategoryByID(1)

// =========================================================================================

// PRODUCT
AddProduct({id: 1, productName: 'Samsung Z-Flip', category: {id: 1, categoryName: ''}, qty: 10})
// AddProduct({id: 2, productName: 'ROG Zephyrus', category: {id: 2, categoryName: ''}, qty: 10})
// AddProduct({id: 3, productName: 'Hino', category: {id: 3, categoryName: ''}, qty: 10})
// AddProduct({id: 4, productName: 'Hino 200', category: {id: 3, categoryName: ''}, qty: 8})
// AddProduct({id: 4, productName: 'Hino 200', category: {id: 3, categoryName: ''}, qty: 8})

// UpdateProduct({id: 4, productName: 'Hino 1000', category: {id: 3, categoryName: ''}, qty: 8})

GetAllProducts()
// GetProductByCategoryID(1)
// GetProductByID(1)
// GetProductByName('z')