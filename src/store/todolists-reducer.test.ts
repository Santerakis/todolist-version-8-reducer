import {v1} from "uuid";
import {TodoListType} from "../App";
import {ADD_TODOLIST, REMOVE_TODOLIST, todolistsReducer} from "./todolist-reducer";

test('correct todolist should be removed', () => {
    // 1. test data
    const todolistId1 = v1();
    const todolistId2 = v1();
    const startState: Array<TodoListType> = [
        {id: todolistId1, title: 'What to learn', filter: 'all'},
        {id: todolistId2, title: 'What to buy', filter: 'all'}
    ]

    // 2. выполнение тестируемого кода
    const endState = todolistsReducer(startState, {type: REMOVE_TODOLIST, id: todolistId1})

    // 3. сверяем ожидаемый результат с реальным
    expect(endState.length).toBe(1)
    expect(endState[0].id).toBe(todolistId2)
});
test('correct todolist should be added', () => {

    const todolistId1 = v1();
    const todolistId2 = v1();
    let newTodolistTitle = 'New Todolist';
    const startState: Array<TodoListType> = [
        {id: todolistId1, title: 'What to learn', filter: 'all'},
        {id: todolistId2, title: 'What to buy', filter: 'all'}
    ]

    const endState = todolistsReducer(startState, {type: ADD_TODOLIST, title: newTodolistTitle})

    expect(endState.length).toBe(3)
    expect(endState[2].title).toBe(newTodolistTitle)
});
