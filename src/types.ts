export type DateString = string;

export type CustomResponse<T> = {
    data: T,
    status: string,
    statusCode: number
}
