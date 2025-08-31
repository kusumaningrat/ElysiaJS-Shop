import { Prisma } from "@prisma/client";
import { UserService } from "./user.service";

export const UserController = {
    create: async({ body }: { body: Prisma.UserCreateInput & {photo_profile?: File} }) => {
        return await UserService.create({ body });    
    },

    getAll: async() => {
        return await UserService.getAll()
    }

}