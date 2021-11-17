import Auth from "./pages/Auth"
import Todos from "./pages/Todos"
import Todo from "./pages/Todo"
import { CHANGE_PASSWORD, TODO_ROUTE_PARAMS, HOME_ROUTE, LOGIN_ROUTE, REGISTRATION_ROUTE, TODOS_ROUTE, TODO_ROUTE, RECOVER_PASSWORD, RECOVER_PASSWORD_VALIDATION, PUBLIC_TODO_ROUTE } from "./utils/consts"
import Home from "./pages/Home"
import CreateTodo from "./pages/CreateTodo"
import RecoverPassword from "./pages/RecoverPassword"
import ChangePassword from "./pages/ChangePassword"
import RecoverPasswordValidation from "./pages/RecoverPasswordValidation"
import PublicTodo from "./pages/PublicTodo"

export const authRoutes = [
    {
        path: TODOS_ROUTE,
        Component: Todos
    },

    {
        path: TODO_ROUTE_PARAMS,
        Component: Todo
    },

    {
        path: CHANGE_PASSWORD,
        Component: ChangePassword
    },
    {
        path: TODO_ROUTE,
        Component: CreateTodo
    },
]

export const publicRoutes = [
    {
        path: PUBLIC_TODO_ROUTE,
        Component: PublicTodo
    },
    {
        path:RECOVER_PASSWORD_VALIDATION,
        Component: RecoverPasswordValidation
    },
    {
        path: RECOVER_PASSWORD,
        Component: RecoverPassword
    },
    {
        path: HOME_ROUTE,
        Component: Home
    },

    {
        path: REGISTRATION_ROUTE,
        Component: Auth
    },

    {
        path: LOGIN_ROUTE,
        Component: Auth
    },
]