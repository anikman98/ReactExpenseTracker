import React from 'react'
import Menu from '../menu'
import {InertiaLink, usePage} from '@inertiajs/inertia-react';
import route from 'ziggy-js';

interface Props{
    children: React.ReactNode
    pageTitle: string;
}

const Layout: React.FC<Props> = props => {

  const {pageTitle, children} = props; 

  const page: any = usePage();

  return (
    <div className="layout">
        <Menu />
        <div className="container">
            { page.props.success ? <div className="alert alert-success mt-4" role="alert">
                {page.props.success}
            </div> : <div className='mt-3'></div>}
            <div className="row">
                <div className="col-sm-12 mt-2">
                    <div className="card">
                        <div className="card-header">
                            {
                                pageTitle == "My Expense List" ? (
                                    <div className="row">
                                        <div className="col-md">{pageTitle}</div>
                                        <div className="col-md"><InertiaLink href={route('expense.add')}> <button className='btn btn-primary btn-sm float-end'>Add New</button> </InertiaLink></div>
                                    </div>
                                ): pageTitle
                            }
                        </div>
                        <div className="card-body">
                            {children}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Layout
