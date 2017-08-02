export  const selectVideo = (i) =>{
  console.log("index",i)
  return {
    type:"Video_selected",
    index:i

  }
};

export  const nextVideo = (i) =>{

  return {
    type:"next",
    index:i+1

  }
};

export  const preVideo = (i) =>{

  var index = i;
  if(index <= 0){
  index = 0
}else{
    index = i-1
  }
  return {
    type:"pre",
    index: index

  }
};
