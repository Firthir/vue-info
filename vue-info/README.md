# A simple Vue js tooltip plugin

Need a simple tooltip on hover for any action buttons, links, text and more, provide a better UX to your project.

## [Demo site](https://vue-info.netlify.app/)

[![Demo](https://vue-info.netlify.app/demoImage.png)](https://vue-info.netlify.app/)

### Install

-   `npm install vue-info`
-   `yarn add vue-info`

### How to configure / customize this plugin

-   Wrap the button or link add as child of vue-info component - Accepts single html element or a component  
    _Required_

    ```
    import VueInfo from 'vue-info';
    export default {
        ...
        components: {
            ...
            VueInfo,
        },
         ...
    };
    ```

    Then add it to your template

    ```
    <VueInfo>
        <a href="https://vue-info.netlify.app/">vue-info documentation</a>
    </VueInfo>
    ```

-   info="Tooltip info message or dresription"  
    _Required_
-   color="choose one -> 'black', 'white', 'red'"  
    default white text black background.
-   position="choose one -> 'left', 'right', 'top', 'bottom'"  
    default top
-   square="true/false"  
    default false, rounded by 6px
