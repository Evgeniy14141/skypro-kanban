const baseHost = "https://wedev-api.sky.pro/api/kanban";
const userHost = "https://wedev-api.sky.pro/api/user";

//Получить список задач
export async function getTodos({token}){
  const response = await fetch(baseHost, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  if (!response.status === 200) {
    throw new Error("Ошибка");
  }

  const data = await response.json();
  return data;
}

{/*
//Добавить задачу в список
export async function postTodo({ taskData, token }) {
}

//Изменить задачу
export async function editTodo ({taskData, id}) {
}

//Удалить задачу
export async function deleteTodo ({id, token}) {
}

//Получить список пользователей
export async function getUserList ({token}) {
}
*/}

//Регистрация
export function register({ login, name, password }) {
  return fretch(userHost, {
    method: "POST",
    body: JSON.stringify({
      login,
      name,
      password,
    }),
  }).then((response) => {
    if (response.status === 400) {
      throw new Error("Такой пользователь уже существует");
    }
    return response.json();
  });
}

//Авторизация
export function login({ login, password }) {
  return fetch(userHost + "/login", {
    method: "POST",
    body: JSON.stringify({
      login,
      password,
    }),
  }).then((response) => {
    if (response.ok) {
      return response.json();
    }
    if (response.status === 400) {
      throw new Error("Неверный логин или пароль");
    }
    if (response.status === 500) {
      throw new Error("Ошибка на нашей стороне, попробуйте позже");
    }
  });
};
