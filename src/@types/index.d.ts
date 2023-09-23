declare global {
  interface IProdcut {

  }

  interface IPostUser {
    username: string,
    password: string
  }

  interface IRes {
    data: any,
    message: string,
    success: boolean
  }

  interface IUser {
    
  }
}

export {}