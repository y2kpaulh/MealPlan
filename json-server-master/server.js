// server.js
const jsonServer = require('json-server')
const server = jsonServer.create()

const path = require('path')

const router = jsonServer.router(path.join(__dirname, 'db.json'))
const middlewares = jsonServer.defaults()
const customMiddlewares = require(path.join(__dirname, 'auth-middleware.js'))
const port = process.env.PORT || 3000

//setting middleware
server.use(middlewares)
server.use(customMiddlewares)

const customRouter = jsonServer.rewriter({
    "/api/v1/*": "/$1",
    "/mealPlan/:day": "/mealPlan?day=:day"
})

//setting router
server.use(router)
server.use(customRouter)
server.listen(port, () => {
  console.log('JSON Server is running')
}) 