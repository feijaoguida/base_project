import { ConflictException, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { CreateUserDto } from './dto/dto/user.dto';
import { hash } from 'bcrypt'

@Injectable()
export class UserService {
    constructor(private prisma: PrismaService){}

    async create(dto:CreateUserDto){
        
        const user = this.findByEmail(dto.email)
        if (user) throw new ConflictException('email duplicated')

        const newUser = await this.prisma.user.create({
            data: {
                ...dto,
                password: await hash(dto.password, 10)
            }
        })

        const { password, ...result } = newUser;
        return result
    }

    async findByEmail(email: string){
        const user = await this.prisma.user.findUnique({
            where: {
                email: email,
            }
        })
        return user
    }

    async findById(id: number){
        const user = await this.prisma.user.findUnique({
            where: {
                id: id,
            }
        })
        return user
    }
}
