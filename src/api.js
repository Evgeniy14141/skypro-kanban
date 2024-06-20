const host = "https://wedev-api.sky.pro/api/kanban";
const loginHost = "https://wedev-api.sky.pro/api/user/login";
const registerHost = "https://wedev-api.sky.pro/api/user";

// получить список задач
export async function getTodos({ token }) {
  const response = await fetch(host, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  if (!response.ok) {
    throw new Error("Ошибка сервера");
  }
  const data = await response.json();
  return data;
}
  
  
//  регистрация

  export async function registration({ login, name, password }) {
    const response = await fetch(registerHost, {
      method: "POST",
      body: JSON.stringify({
        login,
        name,
        password,
      }),
    });
    if (!response.ok) {
      throw new Error("Пользователь уже зарегистрирован");
    }
    const data = await response.json();
  
    return data;
  }

  // залогониться
  export async function loginUser({login, password}) {
    const response = await fetch(loginHost, {
      method: "POST",
      body: JSON.stringify({
        login,
        password,
      }),
    });
  
    if (response.status === 400) {
      throw new Error("Не верный логин или пароль!");
    }
  
    if (response.status === 500) {
      throw new Error("Ошибка сервера");
    }
  
    const data = await response.json();
    return data;
  }
  
  // export async function editTodo({
  //   title,
  //   status,
  //   topic,
  //   description,
  //   date,
  //   id,
  //   token,
  // }) {
  //   const response = await fetch(`https://wedev-api.sky.pro/api/kanban/${id}`, {
  //     method: "PUT",
  //     headers: {
  //       Authorization: `Bearer ${token}`,
  //     },
  //     body: JSON.stringify({
  //       title,
  //       topic,
  //       description,
  //       date,
  //       status,
  //     }),
  //   });
  //   if (!response.ok) {
  //     const error = await response.json();
  //     throw new Error(error.error);
  //   }
  //   const data = await response.json();
  //   return data;
  // }
  
  // export async function deleteTodo({ id, token }) {
  //   const response = await fetch(`https://wedev-api.sky.pro/api/kanban/${id}`, {
  //     method: "DELETE",
  //     headers: {
  //       Authorization: `Bearer ${token}`,
  //     },
  //   });
  //   if (!response.ok) {
  //     const error = await response.json();
  //     throw new Error(error.error);
  //   }
  //   const data = await response.json();
  //   return data;
  // }
  
  //добавить
  export async function addTask({
    token,
    title,
    topic,
    description,
    date,
    status,
  }) {
    const response = await fetch(host, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        title,
        topic,
        description,
        date,
        status,
      }),
    });
  
    if (response.status === 400) {
      throw new Error("Не верные введенные данные");
    }
  
    const data = await response.json();
    return data;
  }