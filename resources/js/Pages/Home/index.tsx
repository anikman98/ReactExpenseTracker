import React from "react";
import Expense from '../../interface/Expense';
import Layout from '../../components/common/layout';

interface Props{
    expenses: Array<Expense>;
}

const Home = (props: Props) => {
    const {expenses} = props;

    return (
        <Layout pageTitle="My Expense">
            <div className="">
                <p>Welcomes bros!</p>
                <ul>
                    {
                        expenses.map((values: Expense, index) => {
                            return <li key={index}>{values.description}</li>
                        })
                    }
                </ul>
            </div>
        </Layout>
    );
};

export default Home;