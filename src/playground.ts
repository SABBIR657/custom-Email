import { db } from "./server/db";

await db.user.create({
    data:{
        emailAddress:"test@gmail.com",
        firstName: "sabbir",
        lastName:"rahman",
    }
})

console.log("done...")