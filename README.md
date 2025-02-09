# hanko.js
When a legacy item is required.
Create a seal in SVG format.

## How to use
### standard
Supports up to 6 characters.
```js
const hanko = new Hanko({color: "red", size: 50});
console.log(hanko.generate("島"));
console.log(hanko.generate("鈴木", "鈴木 太郎")); // tooltip
```

## Sample
[sample.html](./sample.html)

## License
The source code is licensed MIT.