import { BrowserRouter, Routes, Route } from "react-router";
import Landing from "@pages/Landing";
import Contact from "@pages/Contact";
import Login from "@pages/Login";
import Register from "@pages/Register";
import Dashboard from "@pages/Dashboard";
import Home from "@pages/Home";
import Settings from "@pages/Settings";
import AuthLayout from "@layouts/AuthLayout";

export default function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Landing />} />

                <Route path="contact" element={<Contact />} />

                <Route element={<AuthLayout />}>
                    <Route path="login" element={<Login />} />
                    <Route path="register" element={<Register />} />
                </Route>

                <Route path="dashboard" element={<Dashboard />}>
                    <Route index element={<Home />} />
                    <Route path="settings" element={<Settings />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}