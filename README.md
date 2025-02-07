# hanko.js
When a legacy item is required.
Create a seal in SVG format.

## How to use
### standard
日本の苗字の最大数である5文字まで対応 5文字以降は切捨
```js
const hanko = new Hanko({color: "red", size: 50});
console.log(hanko.generate("鈴木"));
console.log(hanko.generate("島"));
```

## Sample
[sample.html](./sample.html)

## License
The source code is licensed MIT.