# Bhn Ui Angular Proof of Concept

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.0.0.

## Steps to run

1. Install Node.js on your machine
2. Install Angular CLI `npm install -g @angular/cli`
3. Clone this repository `git clone https://github.com/duk/bhn-ui-angular-poc.git`
4. `cd bhn-ui-angular-poc`
5. `npm install`
6. `npm serve --open`
7. If you want to add new angular component, run `ng g component component-name`

You can see the demo [here](http://bhn-ui-angular-poc.s3-website-us-west-1.amazonaws.com/)

If you open up [/src/app/app.component.html](https://github.com/duk/bhn-ui-angular-poc/blob/master/src/app/app.component.html), the entire page is composed of our angular "bhn" components. With angular and by following its guidelines, we can truly decouple UI development from API development.

```html
<div class="container">
  <app-bhn-nav></app-bhn-nav>
  <app-bhn-tabs></app-bhn-tabs>

  <div class="columns">
    <div class="column is-one-quarter">
      <!--<app-bhn-menu></app-bhn-menu>-->
      <app-bhn-panel></app-bhn-panel>
      <app-bhn-card></app-bhn-card>
    </div>
    <div class="column">
      <app-bhn-message></app-bhn-message>
      <!--<app-bhn-box></app-bhn-box>-->
      <app-bhn-table></app-bhn-table>
      <app-bhn-pagination></app-bhn-pagination>
    </div>
  </div>
</div>
```

## Angular vs React

If we are planning to start a fresh new project, I would recommend angular. And here are my reasons.

1. It's opinionated. It comes with strict [guidelines](https://angular.io/docs/ts/latest/guide/style-guide.html) as how and where things should go. We don't have waste days debating about how we should do things. 
2. TypeScript. Bringing types to frontend helps us to catch things at compile time.
3. Made by Google. Yup. I heard they hire brightest engineers. :)
4. Let's not build from scatch. We need to focus on business and our API performance, not UI. This UI is using an awesome CSS framework called [Bulma](http://bulma.io/). Let's leverage open source as much as we can. There is no reason to reinvent that is resulting in subpar outcome. 

## This is not a final product. I just whipped this one out over last weekend for a few hours. More to come.