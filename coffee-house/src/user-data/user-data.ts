import {
  UpdatedUserDataI,
  UserDataI,
  UserSignInI,
} from '../interfaces/interfaces';

export let userAddress: UserDataI = {
  login: '',
  password: '',
  confirmPassword: '',
  paymentMethod: '',
  address: {
    city: '',
    street: '',
    houseNumber: '',
  },
};

export let userDataFromServer: UpdatedUserDataI = {
  login: '',
  paymentMethod: '',
  address: {
    city: '',
    street: '',
    houseNumber: '',
  },
};

export let updatedUserData: UpdatedUserDataI = {
  login: '',
  paymentMethod: '',
  address: {
    city: '',
    street: '',
    houseNumber: '',
  },
};

export let userSignIn: UserSignInI = {
  login: '',
  password: '',
};

export let isSignIn: boolean = false;
