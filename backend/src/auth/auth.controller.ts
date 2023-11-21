import { Body, Controller, Headers, Post, Request, UseGuards } from '@nestjs/common';
import { CreateUserDto } from 'src/user/dto/dto/user.dto';
import { UserService } from 'src/user/user.service';
import { LoginDto } from './dto/auth.dto';
import { AuthService } from './auth.service';
import { RefreshJwtGuard } from './guards/refresh.guard';

@Controller('auth')
export class AuthController {
    constructor(private userService: UserService,
                private authService: AuthService, 
    ){}

    @Post('register')
    async registerUser(@Body() dto: CreateUserDto, @Headers('companyId') companyId: string){
        return await this.userService.create(dto, companyId) 
    }

    @Post('login')
    async login(@Body() dto:LoginDto, @Headers('companyId') companyId: string ){
        return await this.authService.login(dto, companyId);
    }

    @UseGuards(RefreshJwtGuard)
    @Post('refresh')
    async refreshToken(@Request() req) {
        return await this.authService.refreshToken(req.user)
    }
    
}
