

export const required = (value) => {
    if(value) return undefined;
    return "Field is empty!";
};
//Не понимаю, что не так...
export const maxLength = (max) => (value) => {

    if(value && value.length > max) return `Field is more than ${max} symbols`;
    return undefined;
};