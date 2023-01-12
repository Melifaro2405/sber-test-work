import styles from './Header.module.css';
import {Link} from "react-router-dom";

const Header = () => {
    return (
        <header className={styles.header}>
            <Link to='/' >Главная страница</Link>
            <Link to='/todolist' >Список задач</Link>
        </header>
    )
};

export default Header;