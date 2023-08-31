const z = require  ("zod");

const resgisterSchema = z.object({
    username: z.string({
        required_error: "username must not be empty",
    }),
    password: z.string({
        required_error: "password must not be empty",
    }).min(6, {
        message: "password must be at least 6 characters long",
    })
    ,
    email: z.string({
        required_error: "email must not be empty",
    }),

})


const loginSchema = z.object({
    password: z.string({
        required_error: "password must not be empty",
    }).min(6, {
        message: "password must be at least 6 characters long",
    })
    ,
    email: z.string({
        required_error: "email must not be empty",
    }),
});


module.exports = {
    resgisterSchema,
    loginSchema
}