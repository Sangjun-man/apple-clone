const SET_SECTION_HEIGHT = "size/SET_SECTION_HEIGHT";

const SET_SCENE_HEIGHT = "size/SET_SCENE_HEIGHT";

const SET_CURRENT_SCENE = "size/SET_CURRENT_SCENE";

const initSizeState = {
  sectionHeight: 0,
  currentScene: 0,
  sceneInfo: [
    {
      sceneNum: 0,
      type: "sticky",
      scrollHeight: 0,
      onAir: "block",
    },
    {
      sceneNum: 1,
      type: "normal",
      scrollHeight: 0,
      onAir: "hidden",
    },
    {
      sceneNum: 2,
      type: "sticky",
      scrollHeight: 0,
      onAir: "hidden",
    },
    {
      sceneNum: 3,
      type: "sticky",
      scrollHeight: 0,
      onAir: "hidden",
    },
  ],
};

export const setSectionHeight = (height) => {
  return { type: SET_SECTION_HEIGHT, payload: height };
};

export const setCurrentScene = (sceneNum) => {
  return { type: SET_CURRENT_SCENE, payload: sceneNum };
};
export const setSceneHeight = ({ sceneNum, type, scrollHeight }) => {
  return { type: SET_SCENE_HEIGHT, payload: { sceneNum, type, scrollHeight } };
};

const size = (state = initSizeState, action) => {
  switch (action.type) {
    case SET_SECTION_HEIGHT: {
      return { ...state, sectionHeight: action.payload };
    }

    case SET_SCENE_HEIGHT: {
      return {
        ...state,
        sceneInfo: state.sceneInfo.map((scene) =>
          scene.sceneNum === action.payload.sceneNum &&
          scene.type === action.payload.type
            ? { ...scene, scrollHeight: action.payload.scrollHeight }
            : scene
        ),
      };
    }

    case SET_CURRENT_SCENE: {
      return {
        ...state,
        currentScene: action.payload,
        sceneInfo: state.sceneInfo.map((scene) =>
          scene.sceneNum === action.payload
            ? { ...scene, onAir: "block" }
            : { ...scene, onAir: "hidden" }
        ),
      };
    }
    default:
      return state;
  }
};
export default size;
