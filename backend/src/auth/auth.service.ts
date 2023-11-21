import { Injectable, UnauthorizedException } from '@nestjs/common';
import { LoginDto } from './dto/auth.dto';
import { UserService } from 'src/user/user.service';
import { compare } from 'bcrypt';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
    constructor(private userService: UserService,
                private jwtService: JwtService ) {}

    async login(dto: LoginDto, companyId: string){
        const user = await this.validateUser(dto, companyId);

        const payload = {
            username: user.email,
            sub: {
                name: user.name
            }
        }

        return {
            user,
            backendTokens: {
                accessToken: await this.jwtService.signAsync(payload, {
                    expiresIn: process.env.expires,
                    secret: process.env.jwtSecretKey,
                }),
                refreshToken: await this.jwtService.signAsync(payload, {
                    expiresIn: process.env.expiresRefreshToken,
                    secret: process.env.jwtRefreshTokenKey,
                })
            }
        }
    }

    async refreshToken(user: any){
        const payload = {
            username: user.username,
            sub: user.sub
        }

        return {
            accessToken: await this.jwtService.signAsync(payload, {
                expiresIn: process.env.expires,
                secret: process.env.jwtSecretKey,
            }),
            refreshToken: await this.jwtService.signAsync(payload, {
                expiresIn: process.env.expiresRefreshToken,
                secret: process.env.jwtRefreshTokenKey,
            })
        }
    }

    async validateUser(dto:LoginDto, companyId: string){
        const user = await this.userService.findByEmail(dto.username, companyId)

        if(user && (await compare(dto.password, user.password))) {
            const { password, ...result } = user;
            return result
        }
        throw new UnauthorizedException()
    }
}
