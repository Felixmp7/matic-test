import { DateString } from '@types';

//  _ReqT = Request Type
//  _ResT = Response Type
// _BM = Backend Model

export type Article_BM = {
    id: string,
    author: string,
    title: string,
    content: string,
    imageUrl: string,
    createdAt: DateString,
    updatedAt: DateString
}

export type FormArticle_ReqT = {
    author: string,
    title: string,
    content: string,
}
