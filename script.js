import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

async function main() {

    //* https://www.prisma.io/docs/reference/api-reference/prisma-client-reference#filter-conditions-and-operators

    // * Create a new user
    // const info = await prisma.user.create({
    //     data: {
    //         name: 'Alice',
    //         email: 'test@test.com',
    //         posts: {             
    //             create: [
    //                 {
    //                     title: 'My first post',
    //                     content: 'This is my first post'
    //                 }
    //             ]}
    //     },
    // })
    //console.log('Result: ', info)

    // * Create a new user
    // const info = await prisma.user.createMany({
    //     data: [
    //         { name: 'Fernando', email: 'fernando@test.com'},
    //         { name: 'Elias', email: 'elias@test.com'},
    //         { name: 'Patricia', email: 'patricia@test.com'}
    //     ]
    // })
    // console.log('Result: ', info)

    // * Read users
    // const info = await prisma.user.findMany()
    // console.log('Result: ', info)

    // * Update a user
    // const info = await prisma.user.update({
    //     where: {
    //         id: 1
    //         },
    //         data: {
    //             name: 'Bob'
    //         }
    //     })
    //console.log('Result: ', info)
                            
    // * Delete a user
    // await prisma.user.deleteMany()
    // await prisma.user.delete({
    //     where: {
    //         id: 1
    //         }
    //     })
    //console.log('Result: ', info)
    
}

main()
.catch(e => {
    console.error(e)
    })
.finally(async () => {
    await prisma.$disconnect()
})