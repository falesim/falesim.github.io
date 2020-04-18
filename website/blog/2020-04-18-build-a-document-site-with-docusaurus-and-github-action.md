---
title: Week 7: Build a document site with docusaurus and github action
author: sspantz
authorURL: https://github.com/sspantz
---

## 0. Prerequisition:

- npm and node
- json
- javascript

## 1. Docusaurus

### i. What is Docusaurus?

[Docusaurus](https://docusaurus.io/)

Please visit https://docusaurus.io/docs/en/installation and follow the instructions to get started.

<!--truncate-->

> Follow along the instruction of Getting Started and continue reading this post.

### ii. You already in development?

Try to add a blog or edit something to play.

> look up the `blog`, `pages` directories and the `siteConfig.js`

### iii. Roll up with `package.json`

Basic intro to `npm script`

- format
- dev
- clean
- build
- publish
- deploy: `gh-pages` package

### iv. Manually Deployment with npm script

two steps:

```bash
# build the project
npm run build
# deploy to gh-pages
npm run publish
```

one step:

```bash
npm run deploy
```

---

## 2. Github and Github Actions

### i. Put it on github

- git init the project
- visit https://github.com/new to create a new repository
- put on github

### ii. Glimpse github action

GitHub Actions makes it easy to automate all your software workflows, now with world-class CI/CD. Build, test, and deploy your code right from GitHub. Make code reviews, branch management, and issue triaging work the way you want.

> visit [here](https://github.com/features/actions) to get more

### iii. CI/CD with github action

What is CI/CD?
visit [here](https://rancher.com/blog/2018/2018-11-14-what-is-cicd/) to get more

go to your repo, and select `Actions` to try githu actions

### iv. Secrets on github

Settings -> Secrets to set environment variables to help ci/cd

### v. All settle done: Your fist CI/CD script

the final script may like this:

```script

name: Docusaurus deploy to gh-pages CI

on:
  push:
    branches: [master]
  pull_request:
    branches: [master]

jobs:
  build:
    runs-on: ubuntu-latest

    env:
      working-directory: website

    strategy:
      matrix:
        node-version: [12.x]

    steps:
      - uses: actions/checkout@v2
      - name: Use Node.js ${{ matrix.node-version }}
        uses: actions/setup-node@v1
        with:
          node-version: ${{ matrix.node-version }}
      - name: Install Packages
        run: npm install
        working-directory: ${{env.working-directory}}
      - name: Build
        run: |
          git config --global user.email ${{ secrets.EMAIL }}
          git config --global user.name ${{ secrets.USERNAME }}
          git remote set-url origin https://${{ secrets.ACCESS_TOKEN }}@github.com/${{ secrets.ORGNAME }}/${{ secrets.REPO }}.git
          npm run predeploy
        working-directory: ${{env.working-directory}}
      - name: Deploy to gh-pages
        run: npm run deploy --if-present
        working-directory: ${{env.working-directory}}
        env:
          CI: true
```

- To make a change on the project
- commit it
- push the change to github, and the new website will be available in seconds to minutes.
