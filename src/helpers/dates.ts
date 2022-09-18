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

export const parseDate = (date: Date) => date.toLocaleDateString();
