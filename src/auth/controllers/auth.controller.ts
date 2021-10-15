import { Controller, Get, Req, Res, Session, UseGuards } from "@nestjs/common";
import { Request, Response } from "express";
import { DiscordAuthGuard, IsRouteAuthenticated } from "src/guards/discord.guards";

@Controller('auth')

export class AuthController {
    @Get('login')
    @UseGuards(DiscordAuthGuard)
    login() {
        return "hello"
    }

    @Get('redirect')
    @UseGuards(DiscordAuthGuard)
    redirect(@Res() res: Response, @Session() session: any) {

        res.send({ session })
        // res.sendStatus(200)
    }

    @Get('status')
    @UseGuards(IsRouteAuthenticated)
    status(@Req() req: Request) {
        return req.user
    }

    @Get('logout')
    logout() { }
}