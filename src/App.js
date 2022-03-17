import { BrowserRouter, Routes, Route } from "react-router-dom";

import DashboardPage from "./pages/DashboardPage";
import PostsPage from "./pages/PostsPage";

// import Posts


const App = () => {
    return(
        <BrowserRouter>
            <Routes>
                <Route path ="/" element={<DashboardPage />} />
                <Route path ="/posts" element={<PostsPage />} />
                <Route 
                    path="*"
                    // element={<Navigate to="/" />}
                />      
            </Routes>
        </BrowserRouter>
    )
}

export default App