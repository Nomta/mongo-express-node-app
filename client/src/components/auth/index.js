import ReactDOM from 'react-dom';
import Modal from '@/components/modal';
import Tabs from '@/components/tabs';
import LoginForm from './login-form';
import RegisterForm from './register-form';

const Auth = () => {
    const user = localStorage.getItem('user');
    const [isAuth, setAuth] = React.useState(!!user);
    const [modalVisible, setModalVisible] = React.useState(false);

    const showModal = () => {
        setModalVisible(true);
    };

    const hideModal = () => {
        setModalVisible(false);
    };

    const login = () => {
        setAuth(true);
        hideModal();
    };

    const logout = async () => {
        try {
            const response = await fetch('/logout', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    Accept: 'application/json'
                    // 'Authorization': `Bearer ${token}`
                }
            });
            localStorage.removeItem('user');
            setAuth(false);
            window.location.href = '/';
        } catch (e) {}
    };

    const tabs = [
        {
            id: 1,
            title: 'Вход',
            content: <LoginForm cb={login} />
        },
        {
            id: 2,
            title: 'Регистрация',
            content: <RegisterForm cb={login} />
        }
    ];

    if (isAuth) {
        return (
            <button onClick={logout} className="btn text-white w-100">
                Выйти
            </button>
        );
    }
    return (
        <React.Fragment>
            <button onClick={showModal} className="btn text-white w-100">
                Войти
            </button>
            {modalVisible && (
                <Modal hide={hideModal} title="Login">
                    <Tabs tabs={tabs} />
                </Modal>
            )}
        </React.Fragment>
    );
};

ReactDOM.render(<Auth />, document.getElementById('auth'));
