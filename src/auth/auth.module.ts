import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from 'src/user/entities/user.entity';
import { AuthController } from './controllers/auth.controller';
import { SessionSerializer } from './serializers/session.serializer';
import { AuthService } from './services/auth.service';
import { DiscordStrategy } from './strategies/discord.strategy';


@Module({
    controllers: [AuthController],
    providers: [
        SessionSerializer,
        DiscordStrategy,
        {
            provide: 'AUTH_SERVICE',
            useClass: AuthService
        }
    ],
    imports: [TypeOrmModule.forFeature([User])]
})

export class AuthModule {

}
