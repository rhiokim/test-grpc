const path = require('path')
const Mali = require('mali')

const sayHello = ctx => ctx.res = { message: 'Hello ' + ctx.req.name }
const sayHi = ctx => ctx.res = { message: 'Hi' + ctx.req.name }

const PROTO_PATH = path.resolve(__dirname, './protos/helloworld.proto')
const app = new Mali(PROTO_PATH, 'Greeter')
app.use({ sayHello, sayHi })
app.start('0.0.0.0:50051')