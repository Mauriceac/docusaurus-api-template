# Website
> **Note:** This is a mock `README.md` file. To view the API reference guide tutorial, go to [../README.md](../README.md).

This website is built using [Docusaurus](https://docusaurus.io/), a modern static website generator.

### Installation

```
$ npx create-docusaurus@latest my-website classic
```

For details see [Installation](https://docusaurus.io/docs/installation)

### Local Development

```
$ npm run start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

### Build

```
$ npm run build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

### Deployment

Using SSH:

```
$ USE_SSH=true yarn deploy
```

Not using SSH:

```
$ GIT_USER=<Your GitHub username> yarn deploy
```

If you are using GitHub pages for hosting, this command is a convenient way to build the website and push to the `gh-pages` branch.

If you do not have yarn installed, you might see a 'yarn: command not found' error. 
Go to https://yarnpkg.com/getting-started/install for installation steps. 
If the recommended steps do not work for you, use 

```
npm install -g yarn 
```

or even the force option

```
npm install -g yarn --force
```