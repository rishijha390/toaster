function createToaster(config){
  return function () {
  let div =  document.createElement("div");
  div.textContent = str;

  
  };
}

createToaster({
    positionX: "right",
    positionY:"top",
    theme: "dark",
    duration: 3,
});
createToaster("Download Done");