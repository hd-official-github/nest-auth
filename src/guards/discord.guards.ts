import { Injectable, ExecutionContext, CanActivate } from '@nestjs/common';

import { AuthGuard } from '@nestjs/passport';

@Injectable()
export class DiscordAuthGuard extends AuthGuard('discord') {
    async canActivate(context: ExecutionContext): Promise<any> {
        const activate = (await super.canActivate(context)) as boolean;
        // console.log("ACT ", activate);

        const request = context.switchToHttp().getRequest();
        await super.logIn(request);
        // console.log("REQ ", request);
        return activate;
    }
}
@Injectable()
export class IsRouteAuthenticated implements CanActivate {
    async canActivate(context: ExecutionContext): Promise<boolean> {
        const req = context.switchToHttp().getRequest();
        console.log("REQ IS AUTHENTICATED ", req.isAuthenticated());
        return req.isAuthenticated();
    }
}