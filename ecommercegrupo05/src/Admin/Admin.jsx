import React from "react";
import { Routes, Route } from "react-router-dom";


import ProductsAdmin from "./components/organisms/ProductsAdmin";



function Admin() {
    return (
                <div>
                    
                    <div >
                        <Routes>

                            
                            <Route path={"/products"} element={<ProductsAdmin/>}/>
                            

                        </Routes>
                    </div>
                </div>
            
        
        
    );   
};



export default Admin;