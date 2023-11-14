type CategoryType = {
    id: number,
    categoryName: string
}

let categories: CategoryType[] = []

const AddCategory = (category: CategoryType)=>{
    const idCheck = categories.find((cat)=>{
        return cat.id === category.id
    })
    
    const categoryExists = categories.find((cat)=>{
        return cat.categoryName.toLowerCase() === category.categoryName.toLowerCase()
    })

    if (idCheck || categoryExists) {
        console.log('Category already exists')
    } else {
        categories.push(category)
    }
}

const UpdateCategory = (category: CategoryType)=>{
    const data = categories.findIndex((cat) => cat.id === category.id)
    const categoryExists = categories.find((cat)=>{
        return cat.categoryName.toLowerCase() === category.categoryName.toLowerCase()
    })

    if (data !== -1) {
        if (categoryExists) {
            console.log('Category already exists')
        } else {
            categories[data] = category
            console.log('Data updated')
        }
    } else {
        console.log('Category not found')
    }
}

const GetAllCategories = ()=>{
    console.log(categories)
}

const GetCategoryByID = (id: number)=>{
    const filteredCategory = categories.filter((data)=> data.id === id)
    
    if (!filteredCategory[0]) {
        console.log('Category not found')
    } else {
        console.log(filteredCategory[0])
    }

}

const GetCategoryByName = (name: string)=>{
    const filteredCategory = categories.filter((data)=> {
        return data.categoryName.toLowerCase().includes(name.toLowerCase())
    })

    if (!filteredCategory[0]) {
        console.log('Category not found')
    } else {
        console.log(filteredCategory)
    }
}

export {CategoryType, categories, AddCategory, GetAllCategories, GetCategoryByName, GetCategoryByID, UpdateCategory}