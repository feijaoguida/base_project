import { ConflictException, Injectable } from '@nestjs/common';
import { CreateCompanyDto } from './dto/create-company.dto';
import { UpdateCompanyDto } from './dto/update-company.dto';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class CompanyService {
  constructor(private prisma: PrismaService){}

  async create(createCompanyDto: CreateCompanyDto) {
    const company = await this.findByCnpjCpf(createCompanyDto.cnpj_cpf)

    if (company) throw new ConflictException('CNPJ/CPF duplicated')
    
    const newCompany = await this.prisma.company.create({
      data: {
        ...createCompanyDto
      }
    })

    return newCompany
  }

  async findAll() {
    const company = await this.prisma.company.findMany()
    return company
  }

  async findById(id: string) {
    const company = await this.prisma.company.findUnique({
      where: {
        id: id,
      }
    })
    return company
  }

  async findByCnpjCpf(CnpjCpf: string) {
    const company = await this.prisma.company.findUnique({
      where: {
        cnpj_cpf: CnpjCpf,
      }
    })
    return company
  }

  update(id: number, updateCompanyDto: UpdateCompanyDto) {
    return `This action updates a #${id} company`;
  }

  remove(id: number) {
    return `This action removes a #${id} company`;
  }
}
