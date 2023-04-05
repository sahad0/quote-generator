import { Tag } from "antd"

export interface QuoteType {
    author: string,
    authorSlug:string,
    content:string,
    dateAdded:string,
    dateModified:string,
    length:number,
    tags:string[],
    _id:string,
}

export type Tag = {
    dateAdded:string,
    dateModified:string,
    name:string,
    quoteCount:number
    slug:string
    _id:string
}

export type TagType = Tag[];