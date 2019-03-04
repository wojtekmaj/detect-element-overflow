![downloads](https://img.shields.io/npm/dt/detect-element-overflow.svg) ![build](https://img.shields.io/travis/wojtekmaj/detect-element-overflow/master.svg) ![dependencies](https://img.shields.io/david/wojtekmaj/detect-element-overflow.svg) ![dev dependencies](https://img.shields.io/david/dev/wojtekmaj/detect-element-overflow.svg) [![tested with jest](https://img.shields.io/badge/tested_with-jest-99424f.svg)](https://github.com/facebook/jest)

# Detect-Element-Overflow
A function that tells you whether a given element is overflowing its container or not. Useful for creating dropdowns and tooltips.

## tl;dr
* Install by executing `npm install detect-element-overflow` or `yarn add detect-element-overflow`.
* Import by adding `import detectElementOverflow from 'detect-element-overflow'`.
* Do stuff with it!
    ```js
    const collisions = detectElementOverflow(child, parent);
    ```

## User guide

Detect-Element-Overflow returns an object with getter functions described below.

|Attribute name|Description|Example values
|----|----|----|
|collidedTop|Whether or not child element collided with the top parent's border.|`true`|
|collidedBottom|Whether or not child element collided with the bottom parent's border.|`true`|
|collidedLeft|Whether or not child element collided with the left parent's border.|`true`|
|collidedRight|Whether or not child element collided with the left parent's border.|`true`|
|overflowTop|How many pixels of child have crossed top parent's border. Negative values specify how many pixels are between the child and the top parent's border.|`20`, `-15`|
|overflowBottom|How many pixels of child have crossed bottom parent's border. Negative values specify how many pixels are between the child and the bottom parent's border.|`20`, `-15`|
|overflowLeft|How many pixels of child have crossed left parent's border. Negative values specify how many pixels are between the child and the left parent's border.|`20`, `-15`|
|overflowRight|How many pixels of child have crossed right parent's border. Negative values specify how many pixels are between the child and the right parent's border.|`20`, `-15`|

## License

The MIT License.

## Author

<table>
  <tr>
    <td>
      <img src="https://github.com/wojtekmaj.png?s=100" width="100">
    </td>
    <td>
      Wojciech Maj<br />
      <a href="mailto:kontakt@wojtekmaj.pl">kontakt@wojtekmaj.pl</a><br />
      <a href="http://wojtekmaj.pl">http://wojtekmaj.pl</a>
    </td>
  </tr>
</table>
