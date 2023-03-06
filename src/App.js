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
    const response = await octokit.request("GET /repos/{owner}/{repo}/issues", {
      owner: "facebook",
      repo: "create-react-app",
      since: "2023-02-01T08:00:00Z",
      page: 1,
    });
    console.log(response.data);
    setIssues(response.data);
  };

  return (
    <div className="App">
      <h2>GitHub Issues</h2>
      <IssueList issues={issues} />
    </div>
  );
};

export default App;
