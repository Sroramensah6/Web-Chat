export const retrieveData = (name) => JSON.parse(sessionStorage.getItem(name))
export const storeData = (name, values) =>sessionStorage.setItem(name, JSON.stringify(values))