var environment = {};

environment.staging = {
    port: 3000,
    envName: 'staging'

}
environment.production = {
    port: 8080,
    envName: 'production'

}
environment.development = {
    port: 7070,
    envName: 'development'

}

var currentEnv = typeof(process.env.NODE_ENV)