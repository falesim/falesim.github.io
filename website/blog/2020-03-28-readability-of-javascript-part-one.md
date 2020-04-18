---
title: Week4: Readability of Javascript --- Part One: Naming
author: sspantz
authorURL: https://github.com/sspantz
---

#### Chapter 1: 代码应当易于理解

---

可读性基本定理:
*代码的写法应当使别人理解它所需的时间最小化*

Q & A:
  - 代码越小越好吗?
  - 影响理解代码的时间的因素有哪些?
  - 换位思考

<!--truncate-->

#### Chapter 2: 把信息装到名字里

---

把信息装入名字中

Q & A:
  - 选择专业的词

    | word  | options                                        |
    | ----- | ---------------------------------------------- |
    | send  | deliver dispatch announce distribute route     |
    | find  | search extract locate recover                  |
    | start | launch create begin open                       |
    | make  | create "set up" build generate compose add new |

  - 避免泛泛的词
    - a, b
    - temp, tmp
    - i, index
  - 用具体的代替抽象
  ```
  DISALLOW_EVIL_CONSTRUCTORS
  =>
  DISALLOW_COPY_AND_ASSIGN
  ```
  - 附带更多信息
  - 名字的长度
  - 名字的格式

#### Chapter 3: 不会误解的名字

---

这个名字会被别人误会吗?

Q & A:
  - first and last
  - begin and end
  - boolean
  - expectation



