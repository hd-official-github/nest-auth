import { Inject, Injectable } from "@nestjs/common";
import { PassportSerializer } from "@nestjs/passport";
import { User } from "src/user/entities/user.entity";
import { AuthenticaionProvider } from "../services/auth.interface";
@Injectable()
export class SessionSerializer extends PassportSerializer {
    constructor(
        @Inject('AUTH_SERVICE') private readonly authService: AuthenticaionProvider) {
        super();
        // console.log("CAME");
    }

    serializeUser(user: User, done: (err: Error, user: User) => void) {
        console.log("SERIALZED");

        done(null, user)
    }
    async deserializeUser(user: User, done: (err: Error, user: User) => void) {
        const userDb = await this.authService.findUser(user.discordId);
        console.log("DESERIALZED");

        return userDb ? done(null, userDb) : done(null, null);

    }

}