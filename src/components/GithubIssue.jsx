import React from "react";

export default ({ issue }) => {
    return (
        <div className="issue">
            <div className="title">{issue.title}</div>
            <p>#{issue.number} opened on {issue.created_at} by {issue.user.login}</p>
        </div>
    );
}

// temp only:
const githubIssue =
{
    "url": "https://api.github.com/repos/facebook/create-react-app/issues/13046",
    "repository_url": "https://api.github.com/repos/facebook/create-react-app",
    "labels_url": "https://api.github.com/repos/facebook/create-react-app/issues/13046/labels{/name}",
    "comments_url": "https://api.github.com/repos/facebook/create-react-app/issues/13046/comments",
    "events_url": "https://api.github.com/repos/facebook/create-react-app/issues/13046/events",
    "html_url": "https://github.com/facebook/create-react-app/issues/13046",
    "id": 1609788546,
    "node_id": "I_kwDOA8mAYc5f82yC",
    "number": 13046,
    "title": "react-scripts use wrong directory",
    "user": {
        "login": "jcubic",
        "id": 280241,
        "node_id": "MDQ6VXNlcjI4MDI0MQ==",
        "avatar_url": "https://avatars.githubusercontent.com/u/280241?v=4",
        "gravatar_id": "",
        "url": "https://api.github.com/users/jcubic",
        "html_url": "https://github.com/jcubic",
        "followers_url": "https://api.github.com/users/jcubic/followers",
        "following_url": "https://api.github.com/users/jcubic/following{/other_user}",
        "gists_url": "https://api.github.com/users/jcubic/gists{/gist_id}",
        "starred_url": "https://api.github.com/users/jcubic/starred{/owner}{/repo}",
        "subscriptions_url": "https://api.github.com/users/jcubic/subscriptions",
        "organizations_url": "https://api.github.com/users/jcubic/orgs",
        "repos_url": "https://api.github.com/users/jcubic/repos",
        "events_url": "https://api.github.com/users/jcubic/events{/privacy}",
        "received_events_url": "https://api.github.com/users/jcubic/received_events",
        "type": "User",
        "site_admin": false
    },
    "labels": [
        {
            "id": 1467678098,
            "node_id": "MDU6TGFiZWwxNDY3Njc4MDk4",
            "url": "https://api.github.com/repos/facebook/create-react-app/labels/needs%20triage",
            "name": "needs triage",
            "color": "b5274d",
            "default": false,
            "description": ""
        },
        {
            "id": 1494610677,
            "node_id": "MDU6TGFiZWwxNDk0NjEwNjc3",
            "url": "https://api.github.com/repos/facebook/create-react-app/labels/issue:%20bug%20report",
            "name": "issue: bug report",
            "color": "f49118",
            "default": false,
            "description": ""
        }
    ],
    "state": "open",
    "locked": false,
    "assignee": null,
    "assignees": [],
    "milestone": null,
    "comments": 0,
    "created_at": "2023-03-04T13:57:57Z",
    "updated_at": "2023-03-04T13:57:57Z",
    "closed_at": null,
    "author_association": "NONE",
    "active_lock_reason": null,
    "body": "\r\n\r\n### Describe the bug\r\n\r\nI'm trying to install this application created with create-react-app inside another Node project:\r\n\r\nhttps://github.com/themesberg/volt-react-dashboard\r\n\r\nwhen installing the dependencies with yarn. I got this error when running `yarn start`:\r\n\r\n```\r\nkuba@jcubic:[~/projects/jcubic/quizerach/admin] (master)$ yarn start\r\nyarn run v1.22.19\r\n$ react-scripts start\r\n\r\nThere might be a problem with the project dependency tree.\r\nIt is likely not a bug in Create React App, but something you need to fix locally.\r\n\r\nThe react-scripts package provided by Create React App requires a dependency:\r\n\r\n  \"eslint\": \"^6.6.0\"\r\n\r\nDon't try to install it manually: your package manager does it automatically.\r\nHowever, a different version of eslint was detected higher up in the tree:\r\n\r\n  /home/kuba/projects/jcubic/koduj/akademia/quiz/node_modules/eslint (version: 8.35.0)\r\n```\r\n\r\n`projects/jcubic/quizerach` is symlink to `/home/kuba/projects/jcubic/koduj/akademia/quiz`\r\n\r\n### Did you try recovering your dependencies?\r\n\r\n<!--\r\n  Your module tree might be corrupted, and that might be causing the issues.\r\n  Let's try to recover it. First, delete these files and folders in your project:\r\n\r\n    * node_modules\r\n    * package-lock.json\r\n    * yarn.lock\r\n\r\n  Then you need to decide which package manager you prefer to use.\r\n  We support both npm (https://npmjs.com) and yarn (https://yarnpkg.com/).\r\n  However, **they can't be used together in one project** so you need to pick one.\r\n\r\n  If you decided to use npm, run this in your project directory:\r\n\r\n    npm install -g npm@latest\r\n    npm install\r\n\r\n  This should fix your project.\r\n\r\n  If you decided to use yarn, update it first (https://yarnpkg.com/en/docs/install).\r\n  Then run in your project directory:\r\n\r\n    yarn\r\n\r\n  This should fix your project.\r\n\r\n  Importantly, **if you decided to use yarn, you should never run `npm install` in the project**.\r\n  For example, yarn users should run `yarn add <library>` instead of `npm install <library>`.\r\n  Otherwise your project will break again.\r\n\r\n  Have you done all these steps and still see the issue?\r\n  Please paste the output of `npm --version` and/or `yarn --version` to confirm.\r\n-->\r\n\r\n(Write your answer here.)\r\n\r\n### Which terms did you search for in User Guide?\r\n\r\n<!--\r\n  There are a few common documented problems, such as watcher not detecting changes, or build failing.\r\n  They are described in the Troubleshooting section of the User Guide:\r\n\r\n  https://facebook.github.io/create-react-app/docs/troubleshooting\r\n\r\n  Please scan these few sections for common problems.\r\n  Additionally, you can search the User Guide itself for something you're having issues with:\r\n\r\n  https://facebook.github.io/create-react-app/\r\n\r\n  If you didn't find the solution, please share which words you searched for.\r\n  This helps us improve documentation for future readers who might encounter the same problem.\r\n-->\r\n\r\n(Write your answer here if relevant.)\r\n\r\n### Environment\r\n\r\n<!--\r\n  To help identify if a problem is specific to a platform, browser, or module version, information about your environment is required.\r\n  This enables the maintainers quickly reproduce the issue and give feedback.\r\n\r\n  Run the following command in your React app's folder in terminal.\r\n  Note: The result is copied to your clipboard directly.\r\n\r\n  `npx create-react-app --info`\r\n\r\n  Paste the output of the command in the section below.\r\n-->\r\n\r\n(paste the output of the command here.)\r\n\r\n### Steps to reproduce\r\n\r\n<!--\r\n  How would you describe your issue to someone who doesn’t know you or your project?\r\n  Try to write a sequence of steps that anybody can repeat to see the issue.\r\n-->\r\n\r\n(Write your steps here:)\r\n\r\n1. Create NPM project (you can sue yarn) install ESLint\r\n2. Clone CRA application (like this one https://github.com/themesberg/volt-react-dashboard) into directory inside you app\r\n3. Run `yarn && yarn start` from that new directory\r\n\r\n### Expected behavior\r\n\r\nThe start of the application\r\n\r\n### Actual behavior\r\n\r\nError from React-scripts\r\n\r\n![react-app](https://user-images.githubusercontent.com/280241/222906239-b144eadf-e2e9-4347-980e-e4caed1e8406.png)\r\n\r\n### Reproducible demo\r\n\r\n```bash\r\ngit clone https://github.com/jcubic/cra-bug.git\r\ncd cra-bug\r\nyarn\r\ncd volt-react-dashboard\r\nyarn\r\nyarn start\r\n```",
    "reactions": {
        "url": "https://api.github.com/repos/facebook/create-react-app/issues/13046/reactions",
        "total_count": 0,
        "+1": 0,
        "-1": 0,
        "laugh": 0,
        "hooray": 0,
        "confused": 0,
        "heart": 0,
        "rocket": 0,
        "eyes": 0
    },
    "timeline_url": "https://api.github.com/repos/facebook/create-react-app/issues/13046/timeline",
    "performed_via_github_app": null,
    "state_reason": null
};