import {ContentPane, SiteContent} from "./index.styles";
import {Header} from "../Components/Header";

export const App = () => {
    return (
        <SiteContent>
            <Header/>
            <ContentPane/>
        </SiteContent>
    );
}
