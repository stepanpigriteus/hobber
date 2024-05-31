import CabinetMenu from "../components/cabinet_menu";
import CreateCollection from "../components/create_collection";
import Header from "../components/header";


export default function Cabinet() {
    return(
        <>
            <Header/>
            {/* <CreateCollection/> */}
            <CabinetMenu/>
        </>
    );
}