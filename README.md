# SharePoint Framework Property Types

The SharePoint Framework right pane is the topic of this article, definitely this is a good helpful functionality that allow to configure the client web part in reactive or not reactive way.
We have seen really simple scenarios with the properties, like text field, however the business cases are not ever simple, therefore we need to handle complex properties as well dropdown, checkbox, multiple line, toggle, link, slider and so on.

This is the list of properties available out of the box in the module '@microsoft/sp-webpart-base' of SharePoint Framework:

* Label
* Textbox
* Multi-line Textbox
* Checkbox
* Dropdown
* Link
* Slider
* Toggle
* Custom

[READ MY ARTICLE ON MY BLOG: http://www.delucagiuliano.com/sharepoint-framework-all-property-types/](http://www.delucagiuliano.com/sharepoint-framework-all-property-types/)

![alt text](https://github.com/giuleon/spfx-all-property-types/blob/master/spfx-all-property-types.gif "Demo")

As you can see in the image above, I used a reactive property pane, this means that every changes, will trigger a reaction from the part web client, naturally it's also possible configure the behaviour to non-reactive mode, in this last case will be necessary confirm every changes with a button.

Insert the following function in the web part file if you decide to use a non reactive property pane because by default is reactive:

```typescript
  protected get disableReactivePropertyChanges(): boolean {
    return true;
  }
```
[Here the article on my blog](http://www.delucagiuliano.com/sharepoint-framework-all-property-types/)

## Building the code

```bash
git clone the repo
npm i
npm i -g gulp
gulp serve
```
