import TransactionsRepository from '../repositories/TransactionsRepository';
import Transaction from '../models/Transaction';
import transactionRouter from '../routes/transaction.routes';

interface BalanceDTO {
  income: number;
  outcome: number;
  total: number;
}

export default class ListTransactionsServices {
  private transactionsRepository: TransactionsRepository;

  constructor(transactionsRepository: TransactionsRepository) {
    this.transactionsRepository = transactionsRepository;
  }

  public execut(): BalanceDTO {
    const transactions = this.transactionsRepository.all();

    const incomes = transactions.map(income => {
      if (income.type === 'income') {
        return income.value;
      }
      return 0;
    });

    const incomesTotal = incomes.reduce((total, soma) => {
      return total + soma;
    });

    const outcomes = transactions.map(outcome => {
      if (outcome.type === 'outcome') {
        return outcome.value;
      }
      return 0;
    });

    const outcomeTotal = outcomes.reduce((total, soma) => {
      return total + soma;
    });

    const totalSpent = incomesTotal - outcomeTotal;

    const balance = {
      income: incomesTotal,
      outcome: outcomeTotal,
      total: totalSpent,
    };

    return balance;
  }
}
