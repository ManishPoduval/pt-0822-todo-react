import * as PATHS from "../utils/paths";
import HomePage from "../pages/HomePage";
import AddForm from '../components/AddForm'
import TodoList from '../components/TodoList'

const routes = (props) => {
  return [
    {
      path: PATHS.ADDFORM,
      element: <AddForm onHandleAdd={props.onHandleAdd} />,
    },
    {
      path: PATHS.HOMEPAGE,
      element: <TodoList {...props} />,
    },
  ];
};

export default routes;
