import { AuthContext } from '@/AuthProvider/AuthProvider';
import { useQuery } from '@tanstack/react-query';
import React, { createContext, useContext } from 'react';

export const ShareContext = createContext();

const ShareProvider = ({children}) => {
const{user}=useContext(AuthContext)

// .................User Information................
const {data:userProfile=[]}=useQuery({
queryKey: ['userData', user?.email],
queryFn: async()=>{
    const res= await fetch(` https://it-project-server-side.vercel.app/profile?email=${user?.email}`)
    const data= await res.json()
    return data;
}
})

// .................My Information................


const{data:userInformation=[]}=useQuery({
 queryKey: ['informationData'],
 queryFn: async()=>{
    const res= await fetch('https://it-project-server-side.vercel.app/information')
    const data=res.json();
    return data;
 }
})


// .....................License Members Information...............


const {data:licenseMemberInformation=[]}=useQuery({
    queryKey: ['licenseMemberData'],
    queryFn: async()=>{
        const res=await fetch('https://it-project-server-side.vercel.app/licensemember')
        const data=res.json();
        return data;
    }
})

    const shareInfo = {userProfile, userInformation, licenseMemberInformation}
    return (
        <ShareContext.Provider value={shareInfo}>
            {children}
        </ShareContext.Provider>
    );
};

export default ShareProvider;