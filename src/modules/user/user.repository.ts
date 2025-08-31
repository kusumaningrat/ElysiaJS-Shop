import { Prisma } from "@prisma/client"
import { prisma } from "../../lib/prisma"

export const UserRepo = {
    create: async ({ body }: { body: Prisma.UserCreateInput }) => {
        return prisma.user.create({
            data: body
        })
    },

    getAll: async () => {
        return await prisma.user.findMany()
    }
}