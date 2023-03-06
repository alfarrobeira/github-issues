import React from "react";
import GithubIssue from "./GithubIssue.jsx";

export default ({ issues }) => {
    return (
        <div className="container">
            {issues.map((issue) => (<GithubIssue key={issue.id} issue={issue} />))}
        </div>
    );
}