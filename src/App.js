import React, { useEffect, useState } from "react";
import { Octokit } from "@octokit/core";
import "./App.css";
import IssueList from "./components/IssueList";
import Pagination from "@mui/material/Pagination";
import { TOKEN } from "./components/Token.jsx";

const App = () => {
  const [openIssuesCount, setOpenIssuesCount] = useState(0);
  const [closedIssuesCount, setClosedIssuesCount] = useState(0);
  const [issues, setIssues] = useState([]);
  const [page, setPage] = useState(1);
  const issuesPerPage = 30;

  // Octokit.js
  // https://github.com/octokit/core.js#readme
  const octokit = new Octokit({
    auth: TOKEN,
  });

  // runs on first mount
  useEffect(() => {
    getIssues(page);
    getIssueCount("open");
    getIssueCount("closed");
  }, [page]);

  // get count for issues depending on specified state using a search query
  const getIssueCount = async (state) => {
    try {
      const response = await octokit.request(
        "GET /search/issues?q=repo:{owner}/{repo}+type:{type}+state:{state}",
        {
          owner: "facebook",
          repo: "create-react-app",
          type: "issue",
          state: state,
          page: 0,
          per_page: 1,
        }
      );
      console.log(response);
      if (state === "open")
        setOpenIssuesCount(parseInt(response.data.total_count));
      else if (state === "closed")
        setClosedIssuesCount(parseInt(response.data.total_count));
    } catch (ex) {
      console.log(ex);
    }
  };

  // fetch issues from GitHub
  const getIssues = async (page) => {
    try {
      const response = await octokit.request(
        "GET /repos/{owner}/{repo}/issues",
        {
          owner: "facebook",
          repo: "create-react-app",
          per_page: issuesPerPage,
          page: page,
        }
      );
      //console.log(response);
      setIssues(response.data);
    } catch (ex) {
      console.log(ex);
    }
  };

  return (
    <div className="App">
      <h2>GitHub Issues</h2>
      <IssueList
        openCount={openIssuesCount}
        closedCount={closedIssuesCount}
        issues={issues}
      />
      <Pagination
        className="pages"
        count={Math.floor(openIssuesCount / issuesPerPage)}
        page={page}
        onChange={(e, val) => setPage(val)}
        showFirstButton
        showLastButton
      />
      <footer>&nbsp;</footer>
    </div>
  );
};

export default App;
