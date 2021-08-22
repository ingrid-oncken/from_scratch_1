import express from "express"

const server = express()

//const port = process.env.PORT

const port = 3001

server.listen(port, () => {
  console.log("Server is been listened on port " + port)
})


//********** ROUTES *******************/
server.use("/blogPosts", blogPostsRouter)