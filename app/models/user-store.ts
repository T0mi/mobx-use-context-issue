import { Instance, types } from "mobx-state-tree"
import { ADMIN, USER } from "../utils/constants"

const DEFAULT_STATE = {
  token: null,
  type: null,
  name: null,
  surname: null
}

/**
 * MobX store model handling all of user's data
 */
export const UserStoreModel = types
  .model("UserStore")
  .props({
    token: types.maybeNull(types.string),
    type: types.maybeNull(types.enumeration([USER, ADMIN])),
    name: types.maybeNull(types.string),
    surname: types.maybeNull(types.string)
  })
  .actions(self => ({
    setUser(data) {
      self = data;
    },

    setToken(token) {
      self.token = token;
    },

    setType(type) {
      self.type = type;
    },

    reset() {
      self = DEFAULT_STATE
    },
  }))
  .views(self => ({
    getFullName() {
      return self.name + ' ' + self.surname;
    },

    getToken() {
      return self.token;
    },

    isUser(): boolean {
      return self.type === USER;
    },

    getUser() {
      return self;
    }
  }));

export type UserStore = Instance<typeof UserStoreModel>
