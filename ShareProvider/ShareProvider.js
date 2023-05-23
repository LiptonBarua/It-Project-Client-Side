import { AuthContext } from '@/AuthProvider/AuthProvider';
import { useQuery } from '@tanstack/react-query';
import React, { createContext, useContext } from 'react';

export const ShareContext = createContext();

const ShareProvider = ({children}) => {
const{user}=useContext(AuthContext)

const {data:userProfile=[]}=useQuery({
queryKey: ['userData', user?.email],
queryFn: async()=>{
    const res= await fetch(` https://it-project-server-side.vercel.app/profile?email=${user?.email}`)
    const data= await res.json()
    return data;
}
})

    const shareInfo = {userProfile}
    return (
        <ShareContext.Provider value={shareInfo}>
            {children}
        </ShareContext.Provider>
    );
};

export default ShareProvider;