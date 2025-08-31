import { Prisma } from "@prisma/client";
import { UserRepo } from "./user.repository";
import fs from "fs";
import path from "path";

export const UserService = {
    async create({ body }: { body: Prisma.UserCreateInput & { photo_profile?: File } }) {
        let photoUrl: string | undefined = undefined;

        const password = await Bun.password.hash(body.password, {
            algorithm: "bcrypt",
            cost: 10
        });

        if (body.photo_profile) {
            const buffer = await body.photo_profile.arrayBuffer();

            const uploadDir = path.resolve(__dirname, '../../uploads');
            if (!fs.existsSync(uploadDir)) {
                fs.mkdirSync(uploadDir);
            } 
            
            const filePath = path.join((uploadDir), `${Date.now()}-${body.photo_profile.name}`);
            fs.writeFileSync(filePath, Buffer.from(buffer));
            photoUrl = `/uploads/${path.basename(filePath)}`;
        }

        return await UserRepo.create({
            body: {
                ...body,
                password,
                photo_profile: photoUrl ?? ""
            }
        });
    },


    async getAll() {
        return await UserRepo.getAll()
    }
};
