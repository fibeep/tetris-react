/* eslint-disable default-case */
import {
  MOVE_RIGHT,
  MOVE_LEFT,
  MOVE_DOWN,
  ROTATE,
  PAUSE,
  RESUME,
  RESTART,
  GAME_OVER,
} from "../actions";

import { defaultState, nextRotation, canMoveTo } from "../utils";


const gameReducer = (state = defaultState(), action) => {
  
  const { shape, grid, x, y, rotation, nextShape, score, isRunning } = state;

  switch(action.type) {
    case ROTATE:
      const newRotation = nextRotation(shape, rotation)
      if (canMoveTo(shape, grid, x, y, newRotation)) {
          return { ...state, rotation: newRotation }
      }
      return state
};
}

export default gameReducer;
