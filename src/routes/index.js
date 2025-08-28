import { Routes, Route } from 'react-router-dom';
import Home from '../pages/home/home';
import MainLayout from '../layouts/main/main_layout';
import Blog from '../pages/blog/blog';
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
            <Route 
                 path="/add-blog"
                 element={
                <MainLayout>
                    <Blog />
                </MainLayout>
                }
            />
        </Routes>
    )
}
export default AppRoutes;