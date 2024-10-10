import { model, Schema } from "mongoose";

export interface wineInterface{
    name: string,
    price: number,
    color: string,
    brand: string,
    grapetype: string
}

export const wineSchema = new Schema<wineInterface>({
    name: String,
    price: Number,
    color: String,
    brand: String,
    grapetype: String
})

export const wineofDB = model<wineInterface>('wine',wineSchema)