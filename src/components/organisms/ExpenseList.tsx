import { List, ListItem } from '@chakra-ui/react';

const ExpenseList = () => {
  return (
    <List spacing={3}>
      <ListItem>Expense 1</ListItem>
      <ListItem>Expense 2</ListItem>
      <ListItem>Expense 3</ListItem>
      <ListItem>Expense 4</ListItem>
    </List>
  );
};

export default ExpenseList;
