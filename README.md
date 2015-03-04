#Coffin CSS

## Getting started

There are a couple ways to get Coffin:
- Clone the repo: `git clone https://github.com/dan-ding/coffin.git`
- Download the raw or minified CSS in `build/css`


### What's going on?

Coffin is based on Skeleton with **explicit** resets, normalization, positioning, and border-box box-sizing. Rather than assuming what the browser is going to do, the idea is to state it. Normalizing has a bit of a grey area when it comes to resetting and the normalize.css folks have been rather clear that they want to stay away from being a css reset. Skeleton is cool however it relies on the content-box and is limited on it's widths and columns. 

Coffin is explicit. It's an unassuming, resetting, normalizing, boxed, and positioned css boilerplate (framework?).


### Why it's neat

Coffin is, as skeleton, lightweight and simple. It *currently* attempts to stick with styling HTML elements and provides a responsive grid.
- Around ~~400~~ 1200 lines of CSS unminified
- **Lots of** comments
- It's an awesome starting point
- Your choice: vanilla CSS or Sass


## What's different

Coffin sets the box-model to border-box on just about everything (hence the name). The execption to this are embedded html elements as generally when we say an image has a width of 100px we are referring to the content. Swapping skeleton out for coffin *may* affect the sizing (heights, widths, padding, margins, borders) you already have in place.

Coffin is positioned, relatively. While browsers are great at laying things out, there's always going to be the one time you explicity position one item and find that it's parent needs to be positioned too. By expressing the position it means that you'll probably need to set the z-index as well for the browser is no longer guessing for you.

## Browser support

- Chrome latest
- Firefox latest
- Opera latest
- Safari latest
- IE latest (IE8+)

The above list is, as inherited, non-exhaustive. While the goal is to support only latest browsers there are, depending on how you count, some folks using IE8 and the world shouldn't **completely** fall apart for them. Yet.


## To-do
- [ ] more detailed readme
- [ ] example pages
- [ ] documentation for css
- [ ] documentation for sass mixins, functions
- [ ] more inline comments
- [ ] break out UI pieces
- [ ] keep up with Normalize.css and Skeleton


## License

All parts of Coffin are free to use under the [open-source MIT license](https://github.com/dan-ding/coffin/blob/master/LICENSE).


## Acknowledgements

Skeleton https://github.com/dhg/Skeleton
Normalize.css https://github.com/necolas/normalize.css
