import React from 'react';
import  { connect } from 'react-redux';
import selectExpenses from '../selectors/expenses';
import getExpenseTotal from '../selectors/expenses-total';
import numeral from 'numeral';

const ExpenseSummary = (props) => (
    <div>
        Viewing {props.items} item{props.items > 1 ? "s" : ""}{" "}
        in total {numeral(props.total / 100).format('$0,0.00') }
    </div>
)

const mapStateToProps = (state) => {
 
    const expenses = selectExpenses(state.expenses, state.filters);
    const total = getExpenseTotal(expenses);
    const items = expenses.length;
    return {
        total,
        items,
    }
}

export default connect(mapStateToProps)(ExpenseSummary);