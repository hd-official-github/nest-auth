import { IUser, User } from "src/user/entities/user.entity";

export interface AuthenticaionProvider {
    validateUser(details: IUser),
    createUser(details: IUser): Promise<User> | undefined,
    findUser(discordID: string): Promise<User> | undefined
}