export default function (state = {},action){
  switch(action.type){

    case "Video_selected":
        return action.data,action.index;
    break;
    default :
    return '';
  }
  return state;
}
