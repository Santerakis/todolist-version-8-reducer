// 1. Должна заменить прежний зоопарк
// 2. Задача - только преобразование стэйта
// 3. Вернуть новый стэйт
import {TodoListType} from "../App";
import {v1} from "uuid";

export const REMOVE_TODOLIST = 'REMOVE-TODOLIST' as const
export const ADD_TODOLIST = 'ADD-TODOLIST' as const // как константа как конкретное значение
export const CHANGE_TITLE = 'CHANGE-TODOLIST-TITLE'

type RemoveTodolistAT = {
    type: typeof REMOVE_TODOLIST
    id: string
}
type AddTodoListAT = {
    type: typeof ADD_TODOLIST
    title: string
}
type ChangeTodolistTitleAT = {
    type: typeof CHANGE_TITLE
    id: string
    title: string
}
type ActionType = RemoveTodolistAT | AddTodoListAT | ChangeTodolistTitleAT

export const todolistsReducer = (todolists: Array<TodoListType>, action: ActionType): Array<TodoListType> => {
    switch (action.type) {
        case 'REMOVE-TODOLIST':
            return todolists.filter(tl => tl.id !== action.id)
        case 'ADD-TODOLIST':
            const newTodolist: TodoListType = {
                id: v1(),
                title: action.title,
                filter: "all"
            }
            return [...todolists, newTodolist]
        case 'CHANGE-TODOLIST-TITLE':
            return todolists.map(tl => tl.id === action.id ? {...tl, title: action.title} : tl)
        default:
            return todolists
    }
}
