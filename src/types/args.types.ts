

export interface IRegisterArgs {
    name: string
    email: string
    password: string
}


export interface ILoginArgs {
    email: string
    password: string
}


export interface IUpdateUserArgs {
    name?: string
    description?: string
    country?: string
    avatar?: string
    banner?: string
}

