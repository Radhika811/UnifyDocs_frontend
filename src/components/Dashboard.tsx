import SearchAppBar from "./navbar";
import MediaCard from "./documentcard";
import DocumentList from "./documents";

export default function Dashboard() {
    return(
        <div>
            <SearchAppBar />
            <DocumentList />
        </div>
    )
}