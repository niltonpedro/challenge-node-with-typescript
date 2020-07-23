import Transaction from '../models/Transaction';

interface Balance {
  income: number;
  outcome: number;
  total: number;
}
interface CreateTransitionDTO {
  title: string;
  value: number;
  type: 'income' | 'outcome';
}

class TransactionsRepository {
  private transactions: Transaction[];

  constructor() {
    this.transactions = [];
  }

  public all(): Transaction[] {
    return this.transactions;
  }

  // public getBalance(): Balance {
  //   // TODO
  // }

  // public testingValidType(type: string): Transaction {
  //   if (type !== 'income' || 'outcome') {
  //   }
  // }

  public create({ title, value, type }: CreateTransitionDTO): Transaction {
    const transiction = new Transaction({ title, value, type });

    this.transactions.push(transiction);

    return transiction;
  }
}

export default TransactionsRepository;
