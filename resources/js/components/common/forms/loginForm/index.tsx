import { usePage } from '@inertiajs/inertia-react';
import { Inertia } from '@inertiajs/inertia'
import React, { useState } from 'react'
import route from 'ziggy-js';

const LoginForm = () => {

    const page: any = usePage();

    const [state, setState] = useState({
        email: '',
        password: '',
    });

    const handleSubmit = () => {
        // console.log(state);
        Inertia.post(route('login'), state);
    }

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setState({
            ...state, [event.currentTarget.name]: event.currentTarget.value
        })
    }

  return (
    <form onSubmit={handleSubmit}>
        <div className="mb-3">
            <label htmlFor="email" className="form-label">Email</label>
            <input type="text" className="form-control" id="email" name="email" placeholder="Email" value={state.email} onChange={handleChange}/>
            {
                page.props.errors ?.email && ( <div className='error-feedback'>{page.props.errors.email}</div>) 
            }
        </div>
        <div className="mb-3">
            <label htmlFor="password" className="form-label">Password</label>
            <input type="password" className="form-control" id="password" name="password" placeholder="Password" value={state.password} onChange={handleChange}/>
            {
                page.props.errors ?.password && ( <div className='error-feedback'>{page.props.errors.password}</div>) 
            }
        </div>
        <button type="submit" className="btn btn-success">Login</button>
    </form>
  )
}

export default LoginForm;

function post(arg0: string, state: { email: string; password: string; }) {
    throw new Error('Function not implemented.');
}
