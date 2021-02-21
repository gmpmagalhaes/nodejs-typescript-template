export interface Config {
  application: {
    port: number
  },
  database: {
    host: string,
    user: string,
    password: string,
    name: string
  },
  debug: {
    level: string
  },
  winston: any,
}
