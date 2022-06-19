import Cookies from "js-cookie"

export const setTokenCookie = (token: string) => {
    Cookies.set('ytbToken', token, { expires: 20 })
}

export const removeTokenCookie = () => {
    Cookies.remove('ytbToken')
}


export const getTokenCookie = () => {
    return Cookies.get("ytbToken")
}