import { useParams } from 'react-router-dom';

function UserPage() {
  let { userId } = useParams();

  return <div>Страница пользователя с ID: {userId}</div>;
}

export default UserPage;