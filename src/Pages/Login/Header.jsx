import { Logo } from '../../component/Logo/Logo'
import styles from './styles.module.css'


export const Header = () => {
    return (
        <div className={styles.header}>
            <Logo/>

        </div>
    )
}