import * as PATHS from "../utils/paths";
import HomePage from "../pages/HomePage";
import AddForm from '../components/AddForm'
import TodoList from '../components/TodoList'
import TodoDetail from "../components/TodoDetail";
import EditForm from "../components/EditForm";
import SignUp from "../components/SignUp";
import SignIn from "../components/SignIn";

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
    {
      path: PATHS.SIGNUP,
      element: <SignUp {...props} />,
    },
    {
      path: PATHS.SIGNIN,
      element: <SignIn {...props} />,
    },
  ];
};

export default routes;
