import { Routes, Route } from 'react-router-dom';
import Home from '../pages/home/home';
import MainLayout from '../layouts/main/main_layout';
const AppRoutes = () => {
    return (
        <Routes>
            <Route 
                 path="/"
                 element={
                <MainLayout>
                    <Home />
                </MainLayout>
                }
            />
        </Routes>
    )
}
export default AppRoutes;