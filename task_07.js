/*
 * Типов транзацкий всего два.
 * Можно положить либо снять деньги со счета.
 */
const Transaction = {
  DEPOSIT: 'deposit',
  WITHDRAW: 'withdraw',
};

/*
 * Каждая транзакция это объект со свойствами: id, type и amount
 */

const account = {
  // Текущий баланс счета
  balance: 0,

  // История транзакций
  transactions: [],

  /*
   * Метод создает и возвращает объект транзакции.
   * Принимает сумму и тип транзакции.
   */

  createTransaction(amount, type) {
    const transaction = {
      amount: amount, 
      type: type,
      id: this.transactions.length,
    }

    return transaction;
  },

  
  /*
   * Метод отвечающий за добавление суммы к балансу.
   * Принимает сумму танзакции.
   * Вызывает createTransaction для создания объекта транзакции
   * после чего добавляет его в историю транзакций
   */
  deposit(amount) {
    this.balance += amount;
    const transaction = this.createTransaction(amount, Transaction.DEPOSIT);
    this.transactions.push(transaction);

    return transaction;
  },

  /*
   * Метод отвечающий за снятие суммы с баланса.
   * Принимает сумму танзакции.
   * Вызывает createTransaction для создания объекта транзакции
   * после чего добавляет его в историю транзакций.
   *
   * Если amount больше чем текущий баланс, выводи сообщение
   * о том, что снятие такой суммы не возможно, недостаточно средств.
   */
  withdraw(amount) {

    const transaction = this.createTransaction(amount, Transaction.WITHDRAW);

    if(this.balance < amount) {
       console.log(transaction);
       return 'недостаточно средств';
    }

    this.balance -= amount;
    this.transactions.push(transaction);

    return transaction;
  },

  /*
   * Метод возвращает текущий баланс
   */
  getBalance() {
    return this.balance;
  },

  /*
   * Метод ищет и возвращает объект транзации по id
   */
  getTransactionDetails(id) {

    for (let transaction of this.transactions) {
      if(transaction.id === id) {
        return transaction;
      }
    }
    
  },

  /*
   * Метод возвращает количество средств
   * определенного типа транзакции из всей истории транзакций
   */ 
   
  //doesnt work
  // getTransactionTotal(type) {
  
  //   for(let transaction of this.transactions) {
  //     if(transaction.type === type) {
  //       return transaction;
  //     }
  //   }

  // },

};

console.log(account.deposit(100));
console.log(account.withdraw(150));
console.log(account.deposit(200));
console.log(account.withdraw(50));
console.log(account.deposit(300));
console.log(account.withdraw(150));
console.log(account.getTransactionDetails(0));
console.log(account.getTransactionTotal());