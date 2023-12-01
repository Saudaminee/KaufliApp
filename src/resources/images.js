export const IMAGES = {
  LOGO: "LOGO",

};
const getImage = (name) => {
  let iconName;
  switch (name) {
    case IMAGES.LOGO:
      iconName = require("../assets/logo.png");
      break;

    

  }
  return iconName;
};

export const getImageFromURL = (url) => {

  if (url) {
    const name = url.substr(url.lastIndexOf("/") + 1);
    return getImage(name);
  }
  return -1;
};