export default function (state = {},action){
  switch(action.type){
    case "Video_selected":
        return action.data;
    break;
  }
  return state;
}
