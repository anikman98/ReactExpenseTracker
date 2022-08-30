import Expense from '../../../interface/Expense';
import Layout from '../../../components/common/layout';
import ExpenseForm from '../../..//components/common/forms/expenseForm'
import React from 'react';
import route from 'ziggy-js';



interface Props{
    expense: Expense;
    expenses: Array<any>;
    paymentMethods: Array<any>;
}

const ExpenseAddPage: React.FC<Props> = ({expense, expenses, paymentMethods}) => {
    return (
        <Layout pageTitle='Add Expense'>
            <ExpenseForm  expense={expense} expensecategories={expenses} paymentMethods={paymentMethods} submitUrl={route('expense.store')}/>
        </Layout>
    )
}

export default ExpenseAddPage;