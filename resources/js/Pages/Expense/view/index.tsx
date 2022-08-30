import Expense from '../../../interface/Expense';
import Layout from '../../../components/common/layout';
import ExpenseForm from '../../..//components/common/forms/expenseForm'
import React from 'react';



interface Props{
    expense: Expense;
    expenses: Array<any>;
    paymentMethods: Array<any>;
}

const ExpenseViewPage: React.FC<Props> = ({expense, expenses, paymentMethods}) => {
    return (
        <Layout pageTitle='Expense details'>
            <ExpenseForm  expense={expense} expensecategories={expenses} paymentMethods={paymentMethods} />
        </Layout>
    )
}

export default ExpenseViewPage;