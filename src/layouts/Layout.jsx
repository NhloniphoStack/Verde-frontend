import { Outlet, useLoaderData } from "react-router";
import Header from "../components/Header";
import Footer from "../components/Footer";
export default function Layout(){
    const user = useLoaderData()
  
    return (
        <>
        <Header user={user}/>
        <Outlet context={user}/>
        <Footer />
        </>
    )
}