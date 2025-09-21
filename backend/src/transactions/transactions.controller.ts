import { Controller, Post, Body, Get, Param } from "@nestjs/common";
import { TransactionsService } from "./transactions.service";

@Controller('transactions')
export class TransactionsController {
  constructor(private readonly txService: TransactionsService) {}

  @Post()
  async create(@Body() body: any) {
    return this.txService.createTransaction(body);
  }

  @Get()
  async findAll() {
    return this.txService.getAllTransactions();
  }

  
  @Get('school/:schoolId')
  async getBySchool(@Param('schoolId') schoolId: string) {
    return this.txService.getTransactionsBySchool(schoolId);
  }

  @Get('status/:id')
  async getStatus(@Param('id') id: string) {
    return this.txService.getTransactionStatus(id);
  }
}