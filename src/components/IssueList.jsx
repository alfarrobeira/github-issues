import React from "react";
import GithubIssue from "./GithubIssue.jsx";

export default ({ openCount, closedCount, issues }) => {
    return (
        <div className="itemContainer">
            <div className="itemHeader"><span className="openCount">{openCount} open</span><span className="closedCount">{closedCount} closed</span></div>
            {issues.map((issue) => <GithubIssue key={issue.id} issue={issue} />)}
        </div>
    );
}