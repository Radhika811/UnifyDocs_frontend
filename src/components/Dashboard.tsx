import SearchAppBar from "./navbar";
import MediaCard from "./documentcard";
import DocumentList from "./documents";
import NewDocButton from "./newDoc";
import CurrentUser from "./currUser";

export default function Dashboard() {
    return(
        <div>
            <CurrentUser />
            <SearchAppBar />
            <NewDocButton />
            <DocumentList />
        </div>
    )
}