const getExpenseTotal = (expenses) => (
    expenses.reduce((acc, {amount}) => (acc + amount), 0)
);

export default getExpenseTotal;