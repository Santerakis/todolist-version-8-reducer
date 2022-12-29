// 1. Должна заменить прежний зоопарк
// 2. Задача - только преобразование стэйта
// 3. Вернуть новый стэйт
import {TodoListType} from "../App";

export const REMOVE_TODOLIST = 'REMOVE_TODOLIST' as const


type RemoveTodolistAT = {
    type: typeof REMOVE_TODOLIST
    id: string
}

export const todolistsReducer = (todolists: Array<TodoListType>, action: RemoveTodolistAT): Array<TodoListType> => {
    switch (action.type) {
        case 'REMOVE_TODOLIST':
            return todolists.filter(tl => tl.id !== action.id)
        default:
            return todolists
    }
}
