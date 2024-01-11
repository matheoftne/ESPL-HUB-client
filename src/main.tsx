import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster } from 'sonner';

import { ThemeProvider } from "@/config/theme-provider";

import Dashboard from "@/pages/Dashboard";
import Auth from "@/pages/Auth";
import AuthAdmin from "@/pages/AuthAdmin";
import Profile from "@/pages/Profile";
import Notifications from "@/pages/Notifications";

import "@/style/index.css";
import "@/style/layouts.css";


const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Dashboard />}></Route>
                <Route path="/auth" element={<Auth />}></Route>
                <Route path="/auth/admin" element={<AuthAdmin />}></Route>
                <Route path="/notifcations" element={<Notifications />}></Route>
                <Route path="/profile" element={<Profile />}></Route>
            </Routes>
            <Toaster richColors />
        </BrowserRouter>
    </ThemeProvider>
)
