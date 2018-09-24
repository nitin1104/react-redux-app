
export default function addEmplyee(state=[],action){

    switch(action.type){
        case 'ADD_EMPLOYEE':
           return [...state,action.payload]
    }
    return state;
}

export default function removeEmployee (index, action){
    switch (action.type) {
        case 'REMOVE_EMPLOYEE':
            return []
    }
}