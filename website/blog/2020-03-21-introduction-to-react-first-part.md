---
title: Week3: introduction to react: first part of ReactJS series
author: cty
authorURL: https://github.com/Mr-taiyan
---

## 0. prerequisites

- javascript

## 1. what's the react ?
> React makes it painless to create ***interactive UIs***. Design simple views for each state in your application, and React will efficiently update and render just the right components when your data changes.

> Build ***encapsulated components*** that manage their own state, then compose them to make complex UIs.

<!--truncate-->

```text
in general, React is a declarative, efficient, and flexible JavaScript library for building user interfaces. It lets you compose complex UIs from small and isolated pieces of code called “components”.
```

## 2. why react ?
- better performance compared to those that use other frameworks. Because ReactJS helps to prevent updating of DOM, ReactJS was designed to help improve the total rendered pages from the website server.

- Working with the DOM API is hard. React basically gives developers the ability to work with a virtual browser that is more friendly than the real browser. React’s virtual browser acts like an agent between the developer and the real browser.

- React is just JavaScript, there is a very small API to learn, just a few functions and how to use them. After that, your JavaScript skills are what make you a better React developer. 

## 3. principle of react ?
1. what I know
   1. Virtual DOM model
   2. Life cycle management
   3. setState machanism
   4. diff algorithm
   5. one-way data flow

#### Virtual DOM model
>Virtual DOM is actually an abstraction of real DOM, a JS object. React all surface operations are actually virtual DOM operations.

![virtual Dom](https://imgs.developpaper.com/imgs/1613141974-5da55fd1d0911_articlex.png)


#### Life cycle management
- Mounting 
- Updating
- Unmounting

![picture](https://imgs.developpaper.com/imgs/3858602572-5da6e613d3cf2_articlex.png)


#### Setstate mechanism
```jsx
setState(updater[, callback])
```

>We know that react’s state management usesimmutableConceptual design, so when you want to change the state value, you can’t use the traditional assignment methodthis.state.counter = 1To modify, you need to callsetState(updater[, callback])Method of modification.


#### Diff algorithm
>DiffThe algorithm is used to calculate the difference between two virtual DOMS, which is the most expensive part of react.
