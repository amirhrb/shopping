//detail fuctions are placed here

//for login and signup error
const error = {};
export const validate = (data) => {
  if (!data.email) {
    error.email = "Email can Not be empty!";
  } else if (!/\S+@\S+\.\S+/.test(data.email)) {
    error.email = "enter an email";
  } else {
    delete error.email;
  }
  if (!data.password) {
    error.password = "Password can Not be empty!";
  } else if (data.password.length < 6) {
    error.password = "Password is short!";
  } else {
    delete error.password;
  }
  if (Object.keys(data).length > 3) {
    if (!data.name.trim()) {
      error.name = "Name can Not be empty!";
    } else {
      delete error.name;
    }
    if (!data.confirm) {
      error.confirm = "Confirm your password!";
    } else if (data.confirm !== data.password) {
      error.confirm = "Password does not match!";
    } else {
      delete error.confirm;
    }
    if (!data.check) {
      error.check = "Please accept our rules!";
    } else {
      delete error.check;
    }
  }
  return error;
};

//shorts the texts to to words
export const shortner = (text) => {
  let textArr = text.split(" ");
  if (textArr[1].length > 1) {
    return `${textArr[0]} ${textArr[1]}`;
  }
  return `${textArr[0]} ${textArr[2]}`;
};

//checks if an item is already in cart
export const isInCart = (state, id) => {
  const result = !!state.inCartItems.find((item) => item.id === id);
  return result;
};

//count
export const checkCount = (state, id) => {
  const index = state.inCartItems.findIndex((item) => item.id === id);
  return state.inCartItems[index].quantity;
};
