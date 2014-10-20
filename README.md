###Paint By Numbers

A web experiment to convert an image into a paint by numbers image.  Much of the work has been accomplished by existing libraries:

[RgbQuant.js](https://github.com/leeoniya/RgbQuant.js) - an image quantization lib

[dither.js](https://github.com/dpiccone/ditherjs) - A javascript library which transforms an  element into a dithered image using a fixed palette.

The color pallete is first reduced to 10 colors using RgbQuant. This reduced pallate is then passed to dither in order to produce the dithered image according to the new color scheme.