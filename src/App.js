import React, { useEffect, useState } from "react";
import { Octokit } from "@octokit/core";
import "./App.css";
import IssueList from "./components/IssueList";

const App = () => {
  const [issues, setIssues] = useState([]);

  // Octokit.js
  // https://github.com/octokit/core.js#readme
  const octokit = new Octokit({
    auth: "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",
  });

  // runs on first mount
  useEffect(() => {
    getIssues();
  }, []);

  // fetch issues from GitHub
  const getIssues = async () => {
    try {
      const response = await octokit.request(
        "GET /repos/{owner}/{repo}/issues",
        {
          owner: "facebook",
          repo: "create-react-app",
          since: "2023-02-01T08:00:00Z",
          page: 1,
        }
      );
      console.log(response.data);
      setIssues(response.data);
    } catch (ex) {
      console.log(ex);
    }
  };

  return (
    <div className="App">
      <h2>GitHub Issues</h2>
      <IssueList issues={issues} />
    </div>
  );
};

export default App;
