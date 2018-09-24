export const ADD_Employee = 'ADD_Employee';
export const REMOVE_EMPLOYEE = 'REMOVE_EMPLOYEE';

export function addEmployee (employee) {
    return {
        type: 'ADD_EMPLOYEE',
        payload: employee
    };
}

export function removeEmployee (index) {
    return { type: 'REMOVE_EMPLOYEE', index }
}