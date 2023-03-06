import React, { useEffect, useState } from "react";
import { Octokit } from "@octokit/core";
import "./App.css";
import IssueList from "./components/IssueList";
import Pagination from "@mui/material/Pagination";

const App = () => {
  const [issues, setIssues] = useState([]);
  const [page, setPage] = useState(1);

  // Octokit.js
  // https://github.com/octokit/core.js#readme
  const octokit = new Octokit({
    auth: "",
  });

  // runs on first mount
  useEffect(() => {
    getIssues(page);
  }, [page]);

  // fetch issues from GitHub
  const getIssues = async (page) => {
    try {
      const response = await octokit.request(
        "GET /repos/{owner}/{repo}/issues",
        {
          owner: "facebook",
          repo: "create-react-app",
          per_page: 30, //default
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
      <IssueList issues={issues} />
      <Pagination
        className="pages"
        count={10}
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
