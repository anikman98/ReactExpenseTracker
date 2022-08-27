import React from 'react'
import Menu from '../menu'

interface Props{
    children: React.ReactNode
    pageTitle: string;
}

const Layout: React.FC<Props> = props => {

  const {pageTitle, children} = props; 

  return (
    <div className="layout">
        <Menu />
        <div className="container">
            <div className="row">
                <div className="col-sm-12 mt-5">
                    <div className="card">
                        <div className="card-header">
                            {pageTitle} 
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
