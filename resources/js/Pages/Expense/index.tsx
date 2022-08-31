import React from 'react'
import Layout from '../../components/common/layout';
import Expense from '../../interface/Expense';
import route from 'Ziggy-js';
import PaginatedData from '../../interface/PaginateData';
import { InertiaLink } from '@inertiajs/inertia-react'
import Pagination from '../../components/common/pagination';
import { Inertia } from '@inertiajs/inertia';



interface Props{
    expenses: PaginatedData
}

const ExpenseListPage: React.FC<Props> = ({expenses}) => {

    
    const handleDelete = (expense: Expense) =>{
        const res = confirm("Want to delete?");
        // console.log(res);
        if(res){
            Inertia.get(route('expense.delete', { expense: expense }));
        }
    }

  return (
    <Layout pageTitle="My Expense List">
        {   expenses.data.length > 0 ?
        (
            <>
            <table className="table">
                <thead>
                    <tr>
                        <th>#</th>
                        <td>Date</td>
                        <td>Category</td>
                        <td>Description</td>
                        <td>Payment method</td>
                        <td>Amount</td>
                        <td>Actions</td>
                    </tr>
                </thead>
                <tbody>
                    {expenses.data.map((expense: Expense, index: any) => {
                        return (
                            <tr key={index}>
                                <td>{index+1}</td>
                                <td>{expense.date}</td>
                                <td>{expense.category}</td>
                                <td>{expense.description}</td>
                                <td>{expense.payment_method}</td>
                                <td>{expense.amount}</td>
                                <td>
                                    <InertiaLink href={route('expense.show', {id: expense.id})}> <button className="btn btn-primary btn-sm">Show</button></InertiaLink>
                                    {/* <InertiaLink href={route('expense.delete', {id: expense.id})}> <button className="btn btn-danger btn-sm">Delete</button></InertiaLink> */}
                                    <button className='btn btn-danger btn-sm ml-3' onClick={() => handleDelete(expense)}>Delete</button>
                                </td>
                            </tr>
                        )
                    })}
                        
                </tbody>
            </table>
            <Pagination links={expenses.links}/>
            </>
            ) : "Nothing's added!" }
    </Layout>
  )
}

export default ExpenseListPage;