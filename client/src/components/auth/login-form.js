const LoginForm = ({ cb }) => {
    const [formData, setFormData] = React.useState({
        email: '',
        password: ''
    });

    const changeValue = (event) =>
        setFormData({
            ...formData,
            [event.target.name]: event.target.value
        });

    const login = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    Accept: 'application/json'
                },
                body: JSON.stringify(formData)
            });
            const { user } = await response.json();
            localStorage.setItem('user', user._id);
            cb();
        } catch (e) {}
    };

    return (
        <form className="clearfix" onSubmit={login}>
            <div className="form-group">
                <label htmlFor="email">Email address</label>
                <input type="email" className="form-control" name="email" onChange={changeValue} />
            </div>
            <div className="form-group">
                <label htmlFor="password">Password</label>
                {/* <input type="password" className="form-control" name="password" onChange={changeValue} /> */}
                <input type="text" className="form-control" name="password" onChange={changeValue} />
            </div>
            <button type="submit" className="btn btn-submit mt-2 float-right">
                Войти
            </button>
        </form>
    );
};

export default LoginForm;
