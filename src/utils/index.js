export const trimTitle = (text) => {
    text = text.substring(0,20)
    return `${text}...`
}

export const trimcontent = (text) => {
    text = text.substring(0,100)
    return `${text}...`
}