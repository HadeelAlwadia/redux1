import {
    ADD_ITEM,DELETE_ITEM,
     GET_ITEM_FAIL,
    GET_ITEM_START,
    GET_ITEM_SUCCESS,
    GET_LIST_ITEMS_FAIL,
    GET_LIST_ITEMS_START,
    GET_LIST_ITEMS_SUCCESS,
    DELETE_ITEM_START,
    DELETE_ITEM_SUCCESS,
    DELETE_ITEM_FAIL,
   
} from "./constants";
import APIInstance from "../../Api";


export const getItems=()=>async (dispatch)=>{
    try{

        dispatch({
            type:GET_LIST_ITEMS_START
        })

        const response=await APIInstance.get('/todos')

         dispatch({
            type:GET_LIST_ITEMS_SUCCESS,
            payload:response.data
        })
    }catch (e) {
        dispatch(
            {
                type:GET_LIST_ITEMS_FAIL,
                payload:e.message
            }
        )
    }
}

export const addItemAction=(payload)=>{
    return ({
        type:ADD_ITEM,
        payload
    })
}


export const getItem=(id)=>async (dispatch)=>{
    try{
        dispatch({
            type:GET_ITEM_START
        })

        const response=await APIInstance.get('/todos/'+id)

        dispatch({
            type:GET_ITEM_SUCCESS,
            payload:response.data
        })
    }catch (e) {
        dispatch(
            {
                type:GET_ITEM_FAIL,
                payload:e.message
            }
        )
    }
}






                


export const delItem=(id)=>async (dispatch)=>{
    try{
        dispatch({
            type:DELETE_ITEM_START
        })

        const response=await APIInstance.delete('/todos/'+id)

        dispatch({
            type:DELETE_ITEM_SUCCESS,
            payload:response.data
        })
    }catch (e) {
        dispatch(
            {
                type:DELETE_ITEM_FAIL,
                payload:e.message
            }
        )
    }
}