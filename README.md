# How to set up an API reference guide with Docusaurus <!-- omit from toc -->

- [Introduction](#introduction)
- [Prerequisites](#prerequisites)
- [Step 1: Install Docusaurus plugin](#step-1-install-docusaurus-plugin)
- [Step 2: Prepare your OAS file](#step-2-prepare-your-oas-file)
- [Step 3: Set up the plugin \& theme](#step-3-set-up-the-plugin--theme)
- [Step 4: Set up the navbar \& sidebar](#step-4-set-up-the-navbar--sidebar)
- [Step 5: Add CSS to stylize sidebar (Optional)](#step-5-add-css-to-stylize-sidebar-optional)
- [Step 6: Generate the API reference documentation](#step-6-generate-the-api-reference-documentation)
- [Step 7: Run Docusaurus](#step-7-run-docusaurus)

## Introduction

Many companies have their API reference guide separated from their product documentation or even the rest of their API documentation. But you can store and publish all your documentation along with API references guides using Docusaurus and a community-provided plugin.

- Live demo: [https://mauriceac.github.io/docusaurus-api-template/docs/category/petstore-api](https://mauriceac.github.io/docusaurus-api-template/docs/category/petstore-api)
- Template: [https://github.com/Mauriceac/docusaurus-api-template/tree/main/my-website](https://github.com/Mauriceac/docusaurus-api-template/tree/main/my-website)

The plugins allow you to use [OpenAPI Specification](https://www.openapis.org/) (OAS) files to generate API reference guides in your Docusaurus-generated documentation site.

![Demo video of Docusaurus-built documentation site with API reference guide](demo.gif)

For this tutorial, we used the following plugin provided by Palo Alto Networks:

- [docusaurus-openapi-docs](https://github.com/PaloAltoNetworks/docusaurus-openapi-docs) - A Docusaurus plugin and theme for generating interactive OpenAPI docs

There's an alternative plugin that uses Redoc:

- [redocusaurus](https://github.com/rohit-gohri/redocusaurus) - A Docusaurus preset for integrating OpenAPI documentation into your docs with Redoc

## Prerequisites

1. [Docusaurus](https://docusaurus.io/) (TypeScript variant) installed on your computer. (For this tutorial we use this [docusaurus template](https://github.com/VasylynaBurger/docusaurus-template).)
2. A package manager, either [npm](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm) or [Yarn](https://yarnpkg.com/getting-started/install).
3. A code editor, such as [VS Code](https://code.visualstudio.com/).
4. An OAS file. We used a version of the famous [Swagger Petstore API](https://raw.githubusercontent.com/PaloAltoNetworks/docusaurus-openapi-docs/main/demo/examples/petstore.yaml).

> **Tip**  
> If you're feeling a bit lost during the tutorial, go into the `my-website` folder within this [repository](https://github.com/Mauriceac/docusaurus-api-template/tree/main) and take look at `my-website/docusaurus.config.ts` and `my-website/sidebar.ts`.

## Step 1: Install Docusaurus plugin

1. From the terminal, go to the root folder of your Docusaurus project.
  For example, in the template we're using for this tutorial, it's the `my-website` folder.

   ```shell
   cd my-website
   ```

2. Install the plugin by running your package manager with the following commands and options:

   ```shell
   yarn add docusaurus-plugin-openapi-docs
   ```

   OR

   ```shell
   npm install docusaurus-plugin-openapi-docs
   ```

3. Install the theme by running your package manager with the following commands and options:

   ```shell
   yarn add docusaurus-theme-openapi-docs
   ```

   OR

   ```shell
   npm install docusaurus-theme-openapi-docs
   ```

## Step 2: Prepare your OAS file

1. Open your code editor.
2. Go to the root of your Docusaurus project (For example, `my-website` in our tutorial template).
3. Create the `openapi` folder.
4. Copy your OAS file to the `openapi` folder.

> **Notes:**
>
> - The OAS file can be either in YAML or JSON format.  
> - You can also set up the plugin to read an online OAS file.  

## Step 3: Set up the plugin & theme

1. With your code editor, in the project folder, open the [`docusaurus.config.ts`](my-website/docusaurus.config.ts) file to add the lines indicated in the following steps.

2. At the beginning of the file, add the following import statement:

   ```ts
   import type * as OpenApiPlugin from "docusaurus-plugin-openapi-docs";
   ```

3. In the `Config` section, add:

   ```ts
    plugins: [
      [
        'docusaurus-plugin-openapi-docs',
        {
          id: "api", // plugin id
          docsPluginId: "classic", // configured for preset-classic
          config: {
            petstore: {
              specPath: "openapi/petstore.yaml", // change to match your OAS path
              outputDir: "docs/petstore",
              sidebarOptions: {
                groupPathsBy: "tag",
              },
            } satisfies OpenApiPlugin.Options,
          }
        },
      ]
    ],
    themes: ["docusaurus-theme-openapi-docs"], // export theme components
    ```

    > **Note:** Change the `specPath` value so that it corresponds to the name and path of your OAS file.

4. In the `docs` section within the `presets` configuration, add:

   ```ts
   docItemComponent: "@theme/ApiItem", // Derived from docusaurus-theme-openapi
   ```

## Step 4: Set up the navbar & sidebar

1. Within the [`docusaurus.config.ts`](my-website/docusaurus.config.ts) file, in the `themeConfig` > `navbar` > `items` section, add the following object:

    ```ts
        {
          label: "Petstore API",
          position: "left",
          to: "/docs/category/petstore-api",
        },
    ```

2. Open the [`sidebars.ts`](my-website/sidebars.ts) file, and in the `SidebarsConfig` section, add the following code:

    ```ts
    petstore: [
      {
        type: "category",
        label: "Petstore",
        link: {
          type: "generated-index",
          title: "Petstore API",
          description:
            "This is a sample server Petstore server. You can find out more about Swagger at http://swagger.io or on irc.freenode.net, #swagger. For this sample, you can use the api key special-key to test the authorization filters.",
          slug: "/category/petstore-api",
        },
        items: petstoreSidebar,
      },
    ],
    ```

## Step 5: Add CSS to stylize sidebar (Optional)

_To make the API methods in the Docusaurus sidebar appear with special style formatting that helps distinguish them, follow these indications._

1. With your code editor, open the custom CSS file of your Docusaurus project.  
   For example, in this tutorial, go to the [`my-website/src/css/custom.css`](my-website/src/css/custom.css) file.

2. Add the following CSS code:

   ```css
   .api-method > .menu__link,
   .schema > .menu__link {
     align-items: center;
     justify-content: start;
   }
   
   .api-method > .menu__link::before,
   .schema > .menu__link::before {
     width: 55px;
     height: 20px;
     font-size: 12px;
     line-height: 20px;
     text-transform: uppercase;
     font-weight: 600;
     border-radius: 0.25rem;
     border: 1px solid;
     border-inline-start-width: 5px;
     margin-right: var(--ifm-spacing-horizontal);
     text-align: center;
     flex-shrink: 0;
   }
   
   .get > .menu__link::before {
     content: "get";
     background-color: var(--ifm-color-info-contrast-background);
     color: var(--ifm-color-info-contrast-foreground);
     border-color: var(--ifm-color-info-dark);
   }
   
   .post > .menu__link::before {
     content: "post";
     background-color: var(--ifm-color-success-contrast-background);
     color: var(--ifm-color-success-contrast-foreground);
     border-color: var(--ifm-color-success-dark);
   }
   
   .delete > .menu__link::before {
     content: "del";
     background-color: var(--ifm-color-danger-contrast-background);
     color: var(--ifm-color-danger-contrast-foreground);
     border-color: var(--ifm-color-danger-dark);
   }
   
   .put > .menu__link::before {
     content: "put";
     background-color: var(--ifm-color-warning-contrast-background);
     color: var(--ifm-color-warning-contrast-foreground);
     border-color: var(--ifm-color-warning-dark);
   }
   
   .patch > .menu__link::before {
     content: "patch";
     background-color: var(--ifm-color-success-contrast-background);
     color: var(--ifm-color-success-contrast-foreground);
     border-color: var(--ifm-color-success-dark);
   }
   
   .head > .menu__link::before {
     content: "head";
     background-color: var(--ifm-color-secondary-contrast-background);
     color: var(--ifm-color-secondary-contrast-foreground);
     border-color: var(--ifm-color-secondary-dark);
   }
   
   .event > .menu__link::before {
     content: "event";
     background-color: var(--ifm-color-secondary-contrast-background);
     color: var(--ifm-color-secondary-contrast-foreground);
     border-color: var(--ifm-color-secondary-dark);
   }
   
   .schema > .menu__link::before {
     content: "schema";
     background-color: var(--ifm-color-secondary-contrast-background);
     color: var(--ifm-color-secondary-contrast-foreground);
     border-color: var(--ifm-color-secondary-dark);
   }
   ```

## Step 6: Generate the API reference documentation

1. From the terminal, go to your Docusaurus project folder.
    For example:

    ```shell
    cd my-website
    ```

2. Run the following command:

    ```shell
    yarn docusaurus gen-api-docs all
    ```

    OR

    ```shell
    npm run docusaurus gen-api-docs all   
    ```

3. Ensure that there are no errors. If you encounter errors, check the error message and ensure all paths in the code are correct.

## Step 7: Run Docusaurus

1. From the terminal, run the following command:

    ```shell
    yarn run start
    ```

    OR

    ```shell
    npm run start
    ```

2. If your web browser doesn't automatically open and show you the Docusaurus-generated site, open your web browser and go to `http://localhost:3000`.
3. Navigate through your Docusaurus site with the web browser to check if the API reference guide was properly built.

> _Congratulations! You've set up an API reference guide within your Docusaurus site!_
