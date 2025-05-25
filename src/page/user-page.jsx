import {HeaderComponent} from "../components/header.jsx";
import {HomePage} from "../components/first-page-hero.jsx";
import {HomeProjects} from "../components/home-projects.jsx";
import {AboutMeHome} from "../components/aboutMe.jsx";
import {FooterComponent} from "../components/footer.jsx";

export const UsersPage = () => {
    return (
        <>
            <HeaderComponent/>
            <HomePage/>
            <HomeProjects/>
            <AboutMeHome/>
            <FooterComponent/>
        </>
    )
}