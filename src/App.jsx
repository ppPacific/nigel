import { useState } from 'react'
import {createBrowserRouter, Outlet, RouterProvider} from "react-router-dom";

import './App.css'
import Board from "./pages/board/Board.jsx";

function App() {
  //const [count, setCount] = useState(0)
    const Layout=()=>{

        return(
            <div className={"main"}>
                {/*nav*/}
                {/*<Navbar/>*/}
                <div className={"container"}>
                    <div className={"menuContainer"}>
                        {/*menu*/}
                        {/*<Menu/>*/}
                    </div>
                    <div className={"contentContainer"}>
                        <Outlet/>
                    </div>
                </div>

                {/*<Footer/>*/}
            </div>
        )
    }
    const router = createBrowserRouter([
        {
            path: "/",
            element:<Layout/>,
        //     children:[
        //         {
        //             path: "/",
        //             element: (
        //                 <Home/>
        //                 // <div>
        //                 //   <h1>Hello World</h1>
        //                 //   <Link to="about">About Us</Link>
        //                 // </div>
        //             ),
        //         },
        //         {
        //             path: "users",
        //             element: <Users/>,
        //         },
        //         {
        //             path: "products",
        //             element: <Products/>,
        //         },
        //         {
        //             path: "test",
        //             element: <Test/>,
        //         },
        //         {
        //             path: "scroll",
        //             element: <Scroll />,
        //         },
        //     ]
        },
        {
            path: "nigel",
            element: <Board/>
        }

    ]);
    return <RouterProvider router={router}/>

}

export default App
