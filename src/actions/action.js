export class ACTION_TYPE {
  static UPDATE_AUTH = "UPDATE_AUTH";
  static UPDATE_FCM_TOKEN = "UPDATE_FCM";
}

export const reducerModel = {
  authType: true,
  tokenFcm: null,
};
