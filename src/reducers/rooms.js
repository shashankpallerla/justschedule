//Rooms Reducer

const roomsReducerDefaultState = {};

export default (state = roomsReducerDefaultState, action) => {
    switch(action.type){
        case 'ADD_ROOM':    
        return [
            ...state,
            action.roomData
        ];
        case 'SET_ROOM':
        return action.roomData;
        case 'RESET_ROOM':
        return {};
        default:
        return state;
    }
};