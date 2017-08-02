export  const selectVideo = (video,i) =>{
  return {
    type:"Video_selected",
    data : video,
    index:i

  }
};
