
import { PassportStrategy } from '@nestjs/passport';
import { Inject, Injectable, UnauthorizedException } from '@nestjs/common';
import { AuthService } from '../services/auth.service';
import { Strategy, Profile } from 'passport-discord';
import { AuthenticaionProvider } from '../services/auth.interface';



@Injectable()
export class DiscordStrategy extends PassportStrategy(Strategy) {
    constructor(
        @Inject('AUTH_SERVICE') private readonly authService: AuthenticaionProvider) {
        super({
            clientID: process.env.DISCORD_CLIENT_ID,
            clientSecret: process.env.DISCORD_CLIENT_SECRET,
            callbacURL: process.env.DISCORD_CALLBACK_URL,
            scope: ['identify', 'guilds']
        });
    }


    async validate(accessToken: string, refreshToken: string, profile: Profile): Promise<any> {
        const { username, id: discordId, discriminator, avatar } = profile
        const details = { username, discordId, discriminator, avatar }
        // console.log(username, id, discriminator, avatar);
        return await this.authService.validateUser(details);

    }
}