const asyncHandler = (requestHandler) => {
   return  (req, res, next) => {
        Promise.resolve(requestHandler(req, res, next)).catch((err) => next(err))
    }
}

export {asyncHandler}

//const asyncHandler = () => {}


// const asyncHandler = (fn) => (req, res, next) => {
//     try {
//         await fn(req, res, next)
//     } catch (error) {
//         res.status(error.code || ).json({
//             success: false,
//             message: error.message
//         })
//     }
// }