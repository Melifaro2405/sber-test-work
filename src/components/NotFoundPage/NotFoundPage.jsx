import {Link} from "react-router-dom";

const NotFoundPage = () => {
  return (
    <>
      <h3>Страница не найдена</h3>
      <Link to='/'>Перейти на главную страницу</Link>
    </>
  );
};

export default NotFoundPage;