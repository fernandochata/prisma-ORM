# prisma-ORM

https://www.prisma.io/


https://github.com/prisma/prisma-examples/blob/latest/typescript/rest-express/tsconfig.json



npx prisma init --datasource-provider postgresql

npx prisma format

npx prisma migrate dev --name init

npx prisma generate

npm run dev



prisma.user.findMany({
	where: {
		name: {equals: "Fernando"}
		name: {in: ["Fernando", "Patricia"]},
		age: {lte: 20} //lowerThanEquals,
		age: {gte: 20} //greaterThanEquals,
		email: { contains: "@gmail.com"},
		email: { endsWith: "@gmail.com"},
		email: { startsWith: "fer"},
		AND: [{name: {equals: "Fernando"}}, {age: {lt: 30}}]
	},
	orderBy: {
		age: "desc"
	},
	skip: 3,
	take: 2,
	distinct: ["age"]
})


prisma.post.findMany({
	where: {
		author: {
			is: { age: 27 }
		}
	}
})