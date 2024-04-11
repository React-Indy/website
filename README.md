# React.Indy website

The website for React.Indy - an Indianapolis-based group for anyone interested in React, React Native, React frameworks (like Next.js), JavaScript, TypeScript, or front-end engineering.

## 1. Contributing

The contributing process documentation is still in-progress. The numbered list below has the basics for the meantime. If you're unsure or stuck about a particular step, first see the ["Related resources"](#1b-related-resources) section directly after the list. If you still need help or reassurance, just ask! :)

### 1a. The general flow

After you've created a fork of this repository under your GitHub account, and cloned your fork to your machine, the contribution flow looks like:

1. Pick a [repo issue](https://github.com/React-Indy/website/issues) to work on.
1. Create a new branch from `main`
1. Make changes and commit them to your branch
1. Create a PR with your branch against this repo's `main`
   1. [Link the PR to the issue using a keyword.](https://docs.github.com/en/issues/tracking-your-work-with-issues/linking-a-pull-request-to-an-issue)
   1. Ex: `Made header image responsive. Fixes React-Indy/website#5`
1. Request review(s) of your PR
1. Allow at least 24-48 hours for review
1. Address any review comments
1. Repeat steps 4-6 as needed
1. Allow your PR to be approved & merged
1. Celebrate! 🎉

### 1b. Related resources

- [Pro Git by Scott Chacon and Ben Straub](https://git-scm.com/book/en/v2) (free online book)
- [Forking a repository](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/working-with-forks/fork-a-repo#forking-a-repository)
- [Cloning a forked repository](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/working-with-forks/fork-a-repo#cloning-your-forked-repository)
- [Creating a branch](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/creating-and-deleting-branches-within-your-repository#creating-a-branch)
- [Creating a pull request from a fork](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/creating-a-pull-request-from-a-fork)
- [Requesting a PR review](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/requesting-a-pull-request-review)

## 2. Development

### 2a. Requirements

1. A command line application such as Terminal, [iTerm2](https://iterm2.com/), or [Hyper](https://hyper.is/).
1. `git`: see [Chapter 1.5 Getting Started - Installing Git](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git) of [Pro Git](https://git-scm.com/book/en/v2) if you do not already have it installed.
1. Node & `npm`: see [the npm docs](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm) for installation instructions and our [.nvmrc](.nvmrc) file for the Node version you need. You might consider using [`nvm`](https://github.com/nvm-sh/nvm) for managing your Node version.

### 2b. Running locally

The following commands should be run with your chosen command line application from your cloned fork's root directory (folder). If you haven't forked and cloned this repository yet, see the instructions and resources in the [Contributing](#1-contributing) section above.

1. Run `npm install` to install project dependencies
1. Run `npm start` to start the app in development mode
1. Go to [http://localhost:3000/](http://localhost:3000) in your web browser
