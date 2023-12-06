export const IMAGES = {
  LOGO: "LOGO",
  PROFILE_ICON: "PROFILE_ICON",
  NOTIFICATION_ICON: "NOTIFICATION_ICON",
  SEARCH_ICON: "SEARCH_ICON",
  DISCOUNT_ICON: "DISCOUNT_ICON",
  NEXT_ICON: "NEXT_ICON",
  CLOTH_DUMMY: "CLOTH_DUMMY",
  SHOO: "SHOO",
  LIKE: "LIKE",
  UNLIKE: "UNLIKE",
  CARTBAG: "CARTBAG",
  RATESTAR: "RATESTAR",
};
const getImage = (name) => {
  let iconName;
  switch (name) {
    case IMAGES.LOGO:
      iconName = require("../assets/logo.png");
      break;

    case IMAGES.PROFILE_ICON:
      iconName = require("../assets/user.png");
      break;

    case IMAGES.PROFILE_ICON:
      iconName = require("../assets/user.png");
      break;

    case IMAGES.NOTIFICATION_ICON:
      iconName = require("../assets/notification.png");
      break;

    case IMAGES.SEARCH_ICON:
      iconName = require("../assets/search.png");
      break;

    case IMAGES.DISCOUNT_ICON:
      iconName = require("../assets/discount.png");
      break;

    case IMAGES.NEXT_ICON:
      iconName = require("../assets/next.png");
      break;

    case IMAGES.CLOTH_DUMMY:
      iconName = require("../assets/3986644613.jpg");
      break;

    case IMAGES.SHOO:
      iconName = require("../assets/3986860504.jpg");
      break;

    case IMAGES.LIKE:
      iconName = require("../assets/heartcheck.png");
      break;

    case IMAGES.UNLIKE:
      iconName = require("../assets/heartuncheck.png");
      break;

    case IMAGES.CARTBAG:
      iconName = require("../assets/bag.png");
      break;
    case IMAGES.RATESTAR:
      iconName = require("../assets/star.png");
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
