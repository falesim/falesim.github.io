---
title: Week 8: CSS Miscellaneous Part One
author: dennyxi
authorURL: https://github.com/dennyxi
---


## 1. 如何愉快地使用rem和em

### i. 你知道什么是em和rem




<!--truncate-->

>em,rem是最常见的相对长度单位，这是排版中使用的一种度量方式，基准值是当前元素的字号大小。 在CSS中，1em表示当前元素的字号大小，实际值取决于在哪个元素上应用。
```css
.font{
  font-size:16px;
  padding:1em;
}
```
以上意思是字号为16px,也就是元素本身1em代表的值,再使用em来声明元素的padding.
公式: padding(渲染值) = 16px(字号) * 1

### ii. 你知道em和rem的区别吗
>em是继承父级元素的字号大小,rem是和根元素关联的，不依赖当前元素,rem是根em(root em)的缩写.
em因为是继承父级元素，如果碰到无序列表和有序列表时，字体会不断的放大或者缩小
```html
<body>
  <ul>
    <li>a
      <ul>
        <li> c
          <ul>
            <li>d</li>
          </ul>
        </li>
      </ul>
    </li>
  </ul>
</body>
<style>
body{
  font-size:16px;
}
ul{
  font-size:2em;
}
</style>
```
它会显示什么效果呢，它的字体会不断的变大，它继承了上一级的属性值。
为了避免字体不断的变大，可以选用rem,字体就不会不断的变大.

### iii. 你喜欢吗?em\rem\px
>我个人选择是,对font-size使用rem,对border使用px，对margin,padding,border-radius使用em.最终还是看个人喜好啦。

## 2.自定义属性（也叫CSS变量）
>我们需要声明一个自定义属性，跟声明其他属性类似。
```css
  html{
    --main-font-color:blue;
  }
```
代码片段中，定义一个名叫`--main-font-color`的变量,把它们的值设变为blue为了和其他属性区分，命名的前缀必须是两道横杠，然后写上你想要的名字.
声明一定要声明在一个声明区块内，变量的声明，就它本身而言，不会做任何事情，直到我们在代码里引用它。

### i.怎么引用它呢
```css
html{
  --main-font-color:blue;
}
p{
  color: var(--main-font-color);
}
```
意思在把p标签内的字体定义为蓝色

自定义属性可以让你在一个地方声明它的值，作为一个“单一数据源”，然后在样式表的任意一个地方引用。
### ii.它还有回退默认值
```css
html{
  --main-font-color:blue;
}
p{
  font-family: var(--main-font-family, Arial);
  color: var(--main-font-color, red)
}
```
* `font-family` 变量`main-font-family`没有被声明，于是默认值为`Arial`会被使用
* `color`中已经有一个声明了`main-font-color`，所以默认值为`blue`

如果你使用var()声明，低版本浏览器不能识别就会忽略它。如果可以的话，给浏览器提供一个回退方案，可以关注浏览器支持情况，可以从这个网站查找到[https://caniuse.com/](https://caniuse.com/)