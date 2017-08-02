export default function (state = {},action){
  switch(action.type){


    case "Video_selected":
        return action.index;
    break;
    case "next":
        return action.index;
    break;
    case "pre":
        return action.index;
    break;
    default :
    return '';
  }
  return state;
}
