import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()


async function main() {
    const user = await prisma.user.create({    data: {      name: 'Alice'    }})
    console.log('Created new user: ', user)
    

    // await prisma.post.deleteMany()
    // await prisma.user.deleteMany({})
    // const users = await prisma.user.create({
    //     data: {
    //         name: 'Alice',
    //         email: 'test@test.com',
    //         posts: {             
    //             create: [
    //                 {
    //                     title: 'My first post',
    //                     content: 'This is my first post'
    //                 }
    //             ]

    //             }
    //     },
    // })

    // const users = await prisma.user.findMany()
    // console.log( users)
    
    
}

main()
.catch(e => {
    console.error(e)
    })
.finally(async () => {
    await prisma.$disconnect()
})