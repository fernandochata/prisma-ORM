# prisma-ORM

Prisma es una toolkit de base de datos de código abierto. Reemplaza los ORM tradicionales y facilita el acceso a la base de datos con un generador de consultas o query builder automáticamente generado y type-safe que se adapta a nuestro esquema de base de datos. Es decir que con un mismo schema se puede migrar entre distintas BBDD.

Documentación https://www.prisma.io/docs/

- Se necesita una variable de entorno DATABASE_URL, para poder conectarse correctamente a la BBDD

```
npm install
```

Comandos de uso general

https://www.prisma.io/docs/reference/api-reference/command-reference

```javascript
npx prisma init --datasource-provider postgresql

// crea el archivo ~/prisma/schema.prisma donde se encuentra la lógia de nuestro modelo
// crea el archivo con las variables de entorno a usar ~/.env
// la opcion datasource-provider le indica con qué tipo de datos trabajará
// sqlite, postgresql, mysql, sqlserver, mongodb o cockroachdb

npx prisma format

// valida y da formato al archivo esquema (~/prisma/schema.prisma)

npx prisma migrate dev --name init

// migra la información del esquema a la BBDD
// crea migrations/**********/migration.sql que es el script de creacion de la bbdd

npx prisma db pull

// si la base de datos ya existe, copia ese modelo a nuestro esquema local

npx prisma generate

// usando prisma/client genera nuestro cliente para realizar las consultas a la BBDD

npm run dev
```
Ejemplo de script y diferentes opciones que podemos ocupar

https://www.prisma.io/docs/reference/api-reference/prisma-client-reference#model-queries
```js
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

// tablas relacionadas
prisma.post.findMany({
	where: {
		author: {
			is: { age: 27 }
		}
	}
})
```