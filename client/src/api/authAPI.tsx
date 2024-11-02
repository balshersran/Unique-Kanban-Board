import { UserLogin } from "../interfaces/UserLogin";

const login = async (userInfo: UserLogin) => {
  // TODO: make a POST request to the login route
  try {
    const response = await fetch('/auth/login', {
      method: 'Post',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userInfo),
    });

    const data = await response.json();

    if(!response.ok) {
      throw new Error('User info not found');
    }

    return data;
  } catch (error) {
    console.log('Error from user login: ', error);
    return Promise.reject('Could not get user info');
  }
};



export { login };
