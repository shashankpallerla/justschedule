import uuid from 'uuid';
import database from '../firebase/firebase';

// ADD_ROOM
export const addRoom = (roomData) => ({
  type: 'ADD_ROOM',
  roomData
});

export const startAddRoom = (roomData = {}) => {
  return (dispatch, getState) => {
    
    const uid = getState().auth.uid;
    const {
      room_name = ''
    } = roomData;
    
    const room = { room_name };
    return database.ref(`users/${uid}/rooms`).push(roomData).then((ref) => {
      dispatch(addRoom({
        id: ref.key,
        ...roomData
      }));
    })
  
  };
};

// SET_ROOMS
export const setRoom = (roomData) => ({
  type: 'SET_ROOM',
  roomData
});

export const startSetRoom = () => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid;
    return database.ref(`users/${uid}/rooms`).once('value').then((snapshot) => {
      const roomData = [];

      snapshot.forEach((childSnapshot) => {
        roomData.push({
          id: childSnapshot.key,
          ...childSnapshot.val()
        });
      });
      dispatch(setRoom(roomData));
    });
  };
};


// RESET_ROOM
export const resetRoom = () => ({
  type: 'RESET_ROOM',
});

export const startResetRoom = () => {
  return (dispatch, getState) => {
    dispatch(resetRoom());    
  };
};

