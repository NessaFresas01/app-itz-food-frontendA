import {Navigate,Route,Routes} from "react-router-dom";
import Layout from "./layouts/Layout";
import HomePage from "./pages/HomePage";
import AuthCallbackPage from "./pages/AuthCallbackPage";
import { Home } from "lucide-react";
import { QueryClientProvider } from "@tanstack/react-query";
import queryClient from "./api/queryClient";
import UserProfilePage from "./pages/UserProfilePage";
import ProtectedRoute from "./auth/ProtectedRoute";

const AppRoutes=()=>{
    return(
        <QueryClientProvider client={queryClient}>
            <Routes>
            <Route path="/" element={
                <Layout showHero={true}>
                    <HomePage/>
                </Layout>
            }/>
            <Route path='/auth-callback' element={<AuthCallbackPage/>}/>
            {/*Protección de rutas*/}
            <Route element ={<ProtectedRoute/>}>
            <Route path="/user-profile" element={
                <Layout>
                    <UserProfilePage/>
                    </Layout>}/>
            </Route>
            <Route path="*" element={<Navigate to="/"/>}/>
        </Routes>    
        </QueryClientProvider>
    
    )
}//Fin

export default AppRoutes;