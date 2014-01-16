top-loader
==========

Dependency free load progress bars

## Installation

Download and extract the last release from [here](https://github.com/jacoborus/top-loader/archive/master.zip) or install with Bower
```
$ bower install top-loader
```

## Usage

Link `top-loader.js` from your html file
```
<script src="path/to/top-loader.js"></script>
```

### Generate progressbar

```js
var toploader = new TopLoader( options );
```

**options**

- `bg` `<String>`: background css property, '#acf' by default
- `glow` `<String>`: glow color (hexadecimal)

## API


### TopLoader#init()

Initialize style and progress


### TopLoader#finish([ok])

Close the progress bar and launch ok symbol if passed as argument

**arguments**

- `ok` `<Boolean>` : optional, if true show 'ok' symbol, if false shows 'error' symbol

### TopLoader#go(percentage)

Size the bar 

**arguments**

- `percentage` `<Number>` : percentage progress for bar


## Example

Create bar

```js
var options = {
	background: '#acf',
	glow: '#acf'
};

var topLoader = new TopLoader( options );
```

move bar

```js
topLoader.init();

topLoader.go( 30 ); // size bar 30%
```

Finish progress bar and launch ok symbol

```
topLoader.finish( true );
```

<br><br>

---

© 2014 [jacoborus](https://github.com/jacoborus)

Released under [MIT License](https://raw.github.com/jacoborus/top-loader/master/LICENSE)