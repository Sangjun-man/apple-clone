export const hello = () => {
  alert("ds");
};

export const opacity = (ref) => {
  let y = window.pageYOffset;
  //   console.log(ref);
  ref.style.opacity = y / 200;
};
