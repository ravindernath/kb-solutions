import { createContext, useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const DetailContext = createContext();

const DetailProvider = ({children}) => {
    const [user, setUser] = useState();

    const navigate = useNavigate();

    useEffect(() => {
        try {
            const userInfo = JSON.parse(localStorage.getItem("userInfo"));
            setUser(userInfo);
        
            if (!userInfo) {
              // console.log("please login")
            }
          } catch (error) {
            console.error("Error parsing user info:", error);
            // Handle the error as per your application's requirements
          }      
    }, [navigate]);
    

    return (
        <DetailContext.Provider value={{ user, setUser }}>
            {children}
        </DetailContext.Provider>
    )    
};

export const DetailState = () =>{
    return useContext(DetailContext);
}


  
export default DetailProvider;