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

// .................Personal Information................


const{data:userPersonalInformation=[], refetch:personalInformationRefetch}=useQuery({
 queryKey: ['personalInformationData'],
 queryFn: async()=>{
    const res= await fetch('https://it-project-server-side.vercel.app/personalInformation')
    const data=res.json();
    return data;
 }
})


// .....................License Members Information...............


const {data:licenseMemberInformation=[], refetch:licenseMemberRefetch}=useQuery({
    queryKey: ['licenseMemberData'],
    queryFn: async()=>{
        const res=await fetch('https://it-project-server-side.vercel.app/licensemember')
        const data=await res.json();
        return data;
    }
})


// ............Informtion.............................

const{data:userInformation=[], refetch:informationRefetch}=useQuery({
    queryKey: ['informationData'],
    queryFn: async ()=>{
        const res=await fetch('https://it-project-server-side.vercel.app/information')
        const data=await res.json();
        return data
    }

})


const{data:userAddress=[], refetch:addressRefetch}=useQuery({
    queryKey: ['addressData'],
    queryFn: async()=>{
        const res= await fetch('https://it-project-server-side.vercel.app/address')
        const data=await res.json();
        return data;
    }
})
    const shareInfo = {userProfile, userInformation, informationRefetch, userPersonalInformation, personalInformationRefetch, licenseMemberInformation, licenseMemberRefetch, userAddress, addressRefetch}
    return (
        <ShareContext.Provider value={shareInfo}>
            {children}
        </ShareContext.Provider>
    );
};

export default ShareProvider;