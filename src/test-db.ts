import "dotenv/config"
import prisma from "./lib/prisma.js"

async function main() {
    const user = await prisma.user.create({
        data: {
            name: "Krisna",
            balance: 10000
        }
    })

    console.log(user)
}

main()