export const signup = user => (
  fetch(`/user/register`, {
    method: "POST",
    body: JSON.stringify(user),
    credentials: 'include',
    headers: {
      "Content-Type": "application/json"
    }
  })
);

export const login = user => (
  fetch(`/user/login`, {
    method: "POST",
    body: JSON.stringify(user),
    credentials: 'include',
    headers: {
      "Content-Type": "application/json"
    }
  })
);

export const logout = () => (
  fetch(`/user/logout`, {
    method: "DELETE",
    credentials: 'include'
  })
);

export const checkLoggedIn = async () => {
  const response = await fetch(`/user/auth`, {
    credentials: 'include'
  });

  const { user } = await response.json();
  let preloadedState = {};

  if (user) {
    preloadedState = {
      session: user
    };
  }
  
  return preloadedState;
};