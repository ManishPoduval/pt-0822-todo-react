import * as PATHS from "../utils/paths";
import HomePage from "../pages/HomePage";
import AddForm from '../components/AddForm'
import TodoList from '../components/TodoList'
import TodoDetail from "../components/TodoDetail";
import EditForm from "../components/EditForm";

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
    {
      path: PATHS.TODO_DETAIL,
      element: <TodoDetail {...props} />,
    },
    {
      path: PATHS.TODO_DETAIL_EDIT,
      element: <EditForm {...props} />,
    },
  ];
};

export default routes;
