import { Request, Response } from "express"

const getItem = (req:Request, res:Response) => {
    try{
    } catch (e) {
        res.status(500);
        res.send("ERROR_GET_ITEM");
    }
};

const getItems = (req:Request, res:Response) => {

};

const updateItem = (req:Request, res:Response) => {

};

const postItem = (req:Request, res:Response) => {

};

const deleteItem = (req:Request, res:Response) => {

};

export {getItem, getItems, postItem, updateItem, deleteItem };