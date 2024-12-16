import update from 'immutability-helper';

export function getAll() {
    return [
        {
            id: 1,
            text: 'Learn Javascript',
            completed: false,
            priority: 'Medium',
            dueDate: '2024-12-20'
        },
        {
            id: 2,
            text: 'Learn React',
            completed: false,
            priority: 'High',
            dueDate: '2024-12-18'
        },
        {
            id: 3,
            text: 'Build a React App',
            completed: false,
            priority: 'Low',
            dueDate: '2024-12-25'
        }
    ];
}

export function updateStatus(items, itemId, completed) {
    let index = items.findIndex(item => item.id === itemId);
    return update(items, {
        [index]: { completed: { $set: completed } }
    });
}

export function updatePriority(items, itemId, newPriority) {
    let index = items.findIndex(item => item.id === itemId);
    return update(items, {
        [index]: { priority: { $set: newPriority } }
    });
}

export function updateDueDate(items, itemId, newDueDate) {
    let index = items.findIndex(item => item.id === itemId);
    return update(items, {
        [index]: { dueDate: { $set: newDueDate } }
    });
}

let todoCounter = 1;

function getNextId() {
    return getAll().length + todoCounter++;
}

export function addToList(list, data) {
    let item = Object.assign(
        {
            id: getNextId(),
            priority: data.priority || 'Medium', // Default priority
            dueDate: data.dueDate || '' // Default due date
        },
        data
    );

    return list.concat([item]);
}