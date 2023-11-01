import {PrismaClient} from "@prisma/client"
//this initializes and exports Prisma client instance
// prisma allows querying db in type-safe manner
declare global {
    var prisma: PrismaClient | undefined
}

const prismadb = globalThis.prisma || new PrismaClient();
// next13 rerenders, so not setting gloablThis.prisma means
// next will keep rendering new Prisma clients
if (process.env.Node_ENV !=="production") globalThis.prisma = prismadb

export default prismadb
