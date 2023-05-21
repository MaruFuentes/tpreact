import { doc, getDoc, getFirestore, collection, getDocs,addDoc } from 'firebase/firestore'




export const getProductById = (id) => {
    return new Promise((res, rej) => {
        const db = getFirestore();
        const itemref = doc(db, "items", id);
        getDoc(itemref).then((respuest) => {

           res(respuest.data())
        })
    })
}

export const getAllProducts =()=>{
    return new Promise((res,rej)=>{
        const db = getFirestore();
        const itemsCollection = collection(db,"items");
        getDocs(itemsCollection).then((respuesta)=>{

           res(respuesta.docs.map((doc)=>({id:doc.id, ...doc.data()})))
        })
    })
        
}

export const saveVenta=( venta)=>{
    return new Promise((res,rej)=>{
        const db = getFirestore();
        const salesCollection = collection(db,"ventas");
        addDoc(salesCollection,venta).then(({id})=>res(id));
    })
}
