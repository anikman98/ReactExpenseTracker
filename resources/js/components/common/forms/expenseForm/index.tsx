import Expense from '../../../../interface/Expense';
import React from 'react';
import { InertiaLink, usePage } from '@inertiajs/inertia-react';
import { Inertia } from '@inertiajs/inertia'
import route, { Router } from 'ziggy-js';

interface Props{
    expense: Expense;
    expensecategories: Array<string>;
    paymentMethods: Array<string>;
    submitUrl: string;
}


const ExpenseForm: React.FC<Props> = ({expense, expensecategories, paymentMethods, submitUrl}) => {

    const page: any = usePage();

    const [state, setState] = React.useState({
        id: expense.id,
        date: expense.date,
        description: expense.description || "",
        amount: expense.amount || 0.00,
        category: expense.category || expensecategories[0],
        payment_method: expense.payment_method || paymentMethods[0]
    });

    const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        setState({
            ...state, [event.currentTarget.name]: event.currentTarget.value
        });
    }

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) =>{
        event.preventDefault();
        // console.log(state);
        Inertia.post(submitUrl, state);
    }

    return (
        <form onSubmit={handleSubmit}>
            <div className="mb-3">
                <label htmlFor="date" className="form-label">Date</label>
                <input type="date" className="form-control" id="date" name="date" value={state.date} onChange={handleChange}/>
                {
                    page.props.errors ?.date && ( <div className='error-feedback'>{page.props.errors.date}</div>) 
                }
            </div>
            <div className="mb-3">
                <label htmlFor="description" className="form-label">Description</label>
                <input type="text" className="form-control" id="description" name="description" placeholder="Descritption" value={state.description} onChange={handleChange}/>
                {
                    page.props.errors ?.description && ( <div className='error-feedback'>{page.props.errors.description}</div>) 
                }
            </div>
            <div className="mb-3">
                <label htmlFor="amount" className="form-label">Amount</label>
                <input type="number" step=".10" className="form-control" id="amount" name="amount" placeholder="00.00" value={state.amount} onChange={handleChange}/>
                {
                    page.props.errors ?.amount && ( <div className='error-feedback'>{page.props.errors.amount}</div>) 
                }
            </div>
            <div className="mb-3">
                <label htmlFor="category" className="form-label">Category</label>
                <select name="category" id="category" className="form-control"  value={state.category} onChange={handleChange}>
                    {
                        expensecategories.map((category: string, index: number) => {
                            return (
                                <option value={category} key={index}>{category}</option>
                            )
                        })
                    }
                </select>
                {
                    page.props.errors ?.category && ( <div className='error-feedback'>{page.props.errors.category}</div>) 
                }
            </div>
            <div className="mb-3">
                <label htmlFor="payment_method" className="form-label">Payment Method</label>
                <select name="payment_method" id="payment_method" className="form-control"  value={state.payment_method} onChange={handleChange}>
                    {
                        paymentMethods.map((paymentMethod: string, index: number) => {
                            return (
                                <option value={paymentMethod} key={index}>{paymentMethod}</option>
                            )
                        })
                    }
                </select>
                {
                    page.props.errors ?.payment_method && ( <div className='error-feedback'>{page.props.errors.payment_method}</div>) 
                }
            </div>
            <button type="submit" className="btn btn-success">Submit</button>
            <span>&nbsp;&nbsp;</span><InertiaLink href={route('expense.list')}>Back</InertiaLink>
        </form>
    )
}

export default ExpenseForm;
