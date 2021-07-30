import {createComponent} from './component'
const createNameSpace = (name: string) => {
    const declareName = `im-${name.charAt(0).toLocaleLowerCase()+name.slice(1)}`
    return [createComponent(declareName)]
}

export {
    createNameSpace
}