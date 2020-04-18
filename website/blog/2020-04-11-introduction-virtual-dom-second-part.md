---
title: Week6: Introduction to Virtual DOM: second part of ReactJS serius
author: cty
authorURL: htts://github.com/Mr-taiyan
---

## 0. Review in brief: what is react and why is react ?

#### keywords:
- encapsulated components
- state management
- render after update
- better performance on updating DOM
- friendly api
- in javascript

<!--truncate-->

## 1. what is virtual DOM

>First of all - the Virtual DOM was not invented by React, but React uses it and provides it for free.

>Virtual DOM is actually an abstraction of real DOM, a JS object. React all surface operations are actually virtual DOM operations.

>The Virtual DOM is an abstraction of the HTML DOM. It is lightweight and detached from the browser-specific implementation details. Since the DOM itself was already an abstraction, the virtual DOM is, in fact, an abstraction of an abstraction.


## 2. why virtual DOM comes up
#### what will it look like without using VD?
```js
var item = document.getElementById("myLI");
item.parentNode.removeChild(item);
```

> DOM manipulation is the heart of the modern, interactive web. Unfortunately, it is also a lot slower than most JavaScript operations. and this slowness is made worse by the fact that most JavaScript frameworks update the DOM much more than they have to.

- you have a list that contains ten items. You check off the first item

conclusion: *Inefficient updating has become a serious problem. and exsistence of virtual DOM is to address this problem*

## 3. how virtual DOM helps

>In React, for every DOM object, there is a corresponding “virtual DOM object.” A virtual DOM object is a representation of a DOM object, like a lightweight copy. A virtual DOM object has the same properties as a real DOM object, but it lacks the real thing’s power to directly change what’s on the screen. Manipulating the DOM is slow. Manipulating the virtual DOM is much faster, because nothing gets drawn onscreen. Think of manipulating the virtual DOM as editing a blueprint, as opposed to moving rooms in an actual house.

>When you render a JSX element, every single virtual DOM object gets updated. This sounds incredibly inefficient, but the cost is insignificant because the virtual DOM can update so quickly. Once the virtual DOM has updated, then React compares the virtual DOM with a virtual DOM ***snapshot*** that was taken right before the update. By comparing the new virtual DOM with a pre-update version, React figures out exactly which virtual DOM objects have changed. This process is called “diffing.”

## 4. what does it do
1. The entire virtual DOM gets updated.
2. The virtual DOM gets compared to what it looked like before you updated it. React figures out which objects have changed.
3. The changed objects, and the changed objects only, get updated on the real DOM.
4. Changes on the real DOM cause the screen to change.

![virtual Dom](https://imgs.developpaper.com/imgs/1613141974-5da55fd1d0911_articlex.png)

