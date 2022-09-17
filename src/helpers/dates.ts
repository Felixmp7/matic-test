/* eslint-disable import/prefer-default-export */
// Turn your strings into dates, and then subtract them
// to get a value that is either negative, positive, or zero.

type GenericArrayWithUpdatedDate = {
    updatedAt: string,
}
export const sortByDate = <T extends GenericArrayWithUpdatedDate>(array: T[]) => array.sort(
    (firstElement, secondElement) => {
        const date1 = new Date(secondElement.updatedAt);
        const date2 = new Date(firstElement.updatedAt);

        return date1.getTime() - date2.getTime();
    },
);
