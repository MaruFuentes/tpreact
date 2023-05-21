import productData from '../mock/productos.json'






export const getAll = ()=>{
    return new Promise((res, rej)=>{
        setTimeout(()=>{
            res(productData)
        },2000)
    })
}

export const getById =(id)=>{
    return new Promise((res, rej)=>{
        setTimeout(()=>{
            const item =productData.filter(x=>x.id == id)
            res(item[0])
        },2500)
    })
}