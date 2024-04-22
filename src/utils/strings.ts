export const normalizeString = (str:string) => {
    return str = str.replace(/\s/g, '').toLocaleLowerCase();
}