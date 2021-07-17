class Constant {
  static COPYRIGHT = "Copyright © Andika Assistant 2021";
  static RESTLINK = "";
  static NAME_APPS = "ROCHE";
  //api rest method
  static P = "post";
  static G = "get";
  static PU = "put";
}
export default Constant;
//validate email
export function validateEmail(text) {
  const reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  //   if(reg.test(text) === )
  return reg.test(text);
}
