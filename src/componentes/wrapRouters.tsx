import react, { StrictMode, useEffect } from "react";
import { ErrorComponent } from "./error/error-component";
import { BrowserRouter, Route, Routes } from "react-router";
import App from "../pages/Home";
import Read from "../pages/Read";
import SearchResult from "../pages/Search";
import { Create, Dashboard } from "@mui/icons-material";
import { CssBaseline } from "@mui/material";
import { useSelector } from 'react-redux'

export const WrapRouters = () => {
    const hasError = useSelector((state:any) => state.error.hasError);
    useEffect(() => {
        console.log("hasError", hasError);
    }, [])
    return (
        <>
        { hasError ? <ErrorComponent/> : null }
            { !hasError ? <StrictMode>
                <BrowserRouter>
                <CssBaseline enableColorScheme />
                <Routes>
                    <Route path="/" element={<App />} />
                    <Route path="/read/:id" element={<Read />} />
                    <Route path="/search" element={<SearchResult />} />
                    <Route path="/dashboard/posts" element={<Dashboard />} />
                    <Route path="/dashboard/posts/new" element={<Create />} />
                    <Route path="/dashboard/posts/:id" element={<Create />} />
                </Routes>
                </BrowserRouter>
            </StrictMode> : null }
        </>
    )
}