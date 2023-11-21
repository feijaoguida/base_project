import { ConflictException, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { CreateUserDto } from './dto/dto/user.dto';
import { hash } from 'bcrypt'

@Injectable()
export class UserService {
    constructor(private prisma: PrismaService){}

    async create(dto:CreateUserDto, companyId: string){
        const user = await this.findByEmail(dto.email, companyId)
        if (user) throw new ConflictException('email duplicated')

        const newUser = await this.prisma.user.create({
            data: {
                ...dto,
                companyId: companyId,
                password: await hash(dto.password, 10)
            }
        })

        const { password, ...result } = newUser;
        return result
    }

    async findByEmail(email: string, companyId: string){
        const user = await this.prisma.user.findUnique({
            where: {
                companyId: companyId,
                email: email
            }
        })
        return user
    }

    async findById(id: string, companyId: string){
        const user = await this.prisma.user.findUnique({
            where: {
                companyId: companyId,
                id: id
            },
        })
        return user
    }
}
