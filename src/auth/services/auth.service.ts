import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { IUser, User } from "src/user/entities/user.entity";
import { Repository } from "typeorm";
import { AuthenticaionProvider } from "./auth.interface";

@Injectable()
export class AuthService implements AuthenticaionProvider {
    constructor(@InjectRepository(User) private userRepo: Repository<User>) {

    }
    async validateUser(details: IUser) {
        const { discordId } = details
        const user = await this.userRepo.findOne({ discordId });
        if (user) return user;
        return this.createUser(details);


    }
    createUser(details: IUser) {
        const user = this.userRepo.save(details)
        return user;
    }
    findUser(discordID: string): Promise<User> | undefined {
        return this.userRepo.findOne({ discordId: discordID });
    }

}