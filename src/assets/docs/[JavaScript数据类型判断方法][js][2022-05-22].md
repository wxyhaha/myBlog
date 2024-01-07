## 一、instanceof

`instanceof `操作符用于检查一个对象是否属于某个特定的 `class`。同时，它还考虑了继承。

```
obj instanceof Class
```

如果 `obj `隶属于 `Class` 类（或 `Class` 类的衍生类），则返回 `true`。如：

```
let arr = [1, 2, 3];
alert( arr instanceof Array ); // true
alert( arr instanceof Object ); // true，因为从原型上来讲，Array 是继承自 Object 的。
```

## 二、typeof

`typeof` 操作符返回一个字符串，表示未经计算的操作数的类型。

```
typeof undefined // "undefined"

typeof 0 // "number"

typeof 10n // "bigint"

typeof true // "boolean"

typeof "foo" // "string"

typeof Symbol("id") // "symbol"
```

特殊情况：

`typeof null `的结果为 `"object"`。这是官方承认的` typeof `的错误，这个问题来自于 `JavaScript` 语言的早期阶段，并为了兼容性而保留了下来。`null` 绝对不是一个 `object`。`null` 有自己的类型，它是一个特殊值。`typeof` 的行为在这里是错误的。

## 三、Object.prototype.toString

一个普通对象被转化为字符串时为 `[object Object]`：

```
let obj = {};

alert(obj); // [object Object]
alert(obj.toString()); // 同上
```

内建的 `toString` 方法可以被从对象中提取出来，并在任何其他值的上下文中执行。其结果取决于该值。

```
// 方便起见，将 toString 方法复制到一个变量中
let objectToString = Object.prototype.toString;

// 它是什么类型的？
let arr = [];

alert( objectToString.call(arr) ); // [object Array]
```

为了每个对象都能通过` Object.prototype.toString() `来检测，需要以`Function.prototype.call() `或者` Function.prototype.apply() `的形式来调用。上例就使用`call `方法来在上下文` this=arr` 中执行函数` objectToString`。

如果我们想要获取内建对象的类型，并希望把该信息以字符串的形式返回，而不只是检查类型的话，我们可以用` {}.toString.call `替代 `instanceof`。