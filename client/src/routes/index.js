import { Switch, Route, Redirect } from 'react-router-dom';
import AuthPage from '@/views/login';

export const useRoutes = (isAuth) => {
    if (isAuth) {
        return (
            <Switch>
                <Route path="/login" exact>
                    <AuthPage />
                </Route>
            </Switch>
        );
    }
    return (
        <Switch>
            <Route path="/" exact>
                <AuthPage />
            </Route>
            <Redirect to="/" />
        </Switch>
    );
};
