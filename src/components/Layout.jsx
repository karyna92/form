import { Outlet } from 'react-router-dom';
import FormsSwitcher from './formsswitcher/FormsSwitcher';
import styles from'../comons/styles/base.module.scss';

function Layout() {
  return (
      < div className={styles.formsContainer}>
      <FormsSwitcher />
        <Outlet /> 
    </div>
  );
}

export default Layout;
