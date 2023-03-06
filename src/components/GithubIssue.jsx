import React from "react";

export default ({ issue }) => {
    return (
        <div className="issue">
            <svg height="16" className="octicon octicon-issue-opened open" viewBox="0 0 16 16" version="1.1" width="16" aria-hidden="true"><path d="M8 9.5a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"></path><path fillRule="evenodd" d="M8 0a8 8 0 100 16A8 8 0 008 0zM1.5 8a6.5 6.5 0 1113 0 6.5 6.5 0 01-13 0z"></path></svg>
            <div>
                <span className="title"><a href={issue.html_url}>{issue.title}</a></span>
                <span>
                    {issue.labels.length > 0 &&
                        issue.labels.map(label => <button key={label.id} style={{ background: `#${label.color}`, color: (label.color === "b5274d" || label.color === "009900") ? "white" : "black", fontSize: "0.8em" }}>{label.name}</button>)
                    }
                </span>
                <p>#{issue.number} opened on {new Date(issue.created_at).toDateString()} by {issue.user.login}</p>
            </div>
            {issue.comments > 0 &&
                <div>
                    <a href={issue.html_url}>
                        <svg height="16" className="octicon octicon-comment-discussion" viewBox="0 0 16 16" width="16" aria-hidden="true"><path d="M1.5 2.75a.25.25 0 01.25-.25h8.5a.25.25 0 01.25.25v5.5a.25.25 0 01-.25.25h-3.5a.75.75 0 00-.53.22L3.5 11.44V9.25a.75.75 0 00-.75-.75h-1a.25.25 0 01-.25-.25v-5.5zM1.75 1A1.75 1.75 0 000 2.75v5.5C0 9.216.784 10 1.75 10H2v1.543a1.457 1.457 0 002.487 1.03L7.061 10h3.189A1.75 1.75 0 0012 8.25v-5.5A1.75 1.75 0 0010.25 1h-8.5zM14.5 4.75a.25.25 0 00-.25-.25h-.5a.75.75 0 110-1.5h.5c.966 0 1.75.784 1.75 1.75v5.5A1.75 1.75 0 0114.25 12H14v1.543a1.457 1.457 0 01-2.487 1.03L9.22 12.28a.75.75 0 111.06-1.06l2.22 2.22v-2.19a.75.75 0 01.75-.75h1a.25.25 0 00.25-.25v-5.5z"></path></svg>
                        <span className="text-small">{issue.comments}</span>
                    </a>
                </div>
            }
        </div>
    );
}