![talibred](https://user-images.githubusercontent.com/1216181/51946264-52039d00-2421-11e9-9b4e-819499aae193.png)

# TA-Lib RED - TA-Lib nodes for Node-RED

 [![npm](https://img.shields.io/npm/dt/node-red-contrib-huemagic.svg?style=flat-square)](https://www.npmjs.com/package/node-red-contrib-talib) [![Donate via PayPal](https://img.shields.io/badge/Donate-PayPal-blue.svg?style=flat-square)](https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=ZS8DFCHWMYCB8&source=url) [![npm](https://img.shields.io/npm/v/node-red-contrib-huemagic.svg?style=flat-square)](https://github.com/masalinas/node-red-contrib-talib/) [![GitHub license](https://img.shields.io/badge/license-Apache%202-blue.svg?style=flat-square)](https://raw.githubusercontent.com/masalinas/node-red-contrib-talib/master/LICENSE)

TA-Lib is a Technical Analysis Library for traiding

  - Type some Markdown on the left
  - See HTML in the right
  - Magic

# New Features!

  - Import a HTML file and watch it magically convert to Markdown
  - Drag and drop images (requires your Dropbox account be linked)

### Installation
TA-Lib RED was written for **Node.js 8.9+** and Node-RED v0.17.5+. It supports talib javascript API version v1.0.4+ from [TA-Lib](https://www.ta-lib.org/) library.
_For more information check ofitial TA-Lib homepage: [TA-Lib](https://www.ta-lib.org/)

`npm install node-red-contrib-talib`

### Available Nodes
##### Volume Indicator
- [AD - Chaikin A/D Line: AD](https://www.ta-lib.org/function.html)
- [ADOSC - Chaikin A/D Oscillator: ADOSC](https://www.ta-lib.org/function.html)
- [OBV - Normalized Average True Range](https://www.ta-lib.org/function.html)
##### Momentum indicator
- [ADX - Average Directional Movement Index](https://www.ta-lib.org/function.html)
- [ADXR - Average Directional Movement Index Rating](https://www.ta-lib.org/function.html)
- [APO - Absolute Price Oscillator](https://www.ta-lib.org/function.html)
- [AROON - Aroon](https://www.ta-lib.org/function.html)
- [AROONOSC - Aroon Oscillator](https://www.ta-lib.org/function.html)
- [BOP - Balance Of Power](https://www.ta-lib.org/function.html)
- [CCI - Commodity Channel Index](https://www.ta-lib.org/function.html)
- [CMO - Chande Momentum Oscillator](https://www.ta-lib.org/function.html)
- [DX - Directional Movement Index](https://www.ta-lib.org/function.html)
- [MACD - Moving Average Convergence/Divergence](https://www.ta-lib.org/function.html)
- [MACDEXT - MACD with controllable MA type](https://www.ta-lib.org/function.html)
- [MACDFIX - Moving Average Convergence/Divergence Fix 12/26](https://www.ta-lib.org/function.html)
- [MFI - Money Flow Index](https://www.ta-lib.org/function.html)
- [MINUS_DI - Minus Directional Indicator](https://www.ta-lib.org/function.html)
- [MINUS_DM - Minus Directional Movement](https://www.ta-lib.org/function.html)
- [MOM - Momentum](https://www.ta-lib.org/function.html)
- [PLUS_DI - Plus Directional Indicator](https://www.ta-lib.org/function.html)
- [PLUS_DM - Plus Directional Movement](https://www.ta-lib.org/function.html)
- [PPO - Percentage Price Oscillator](https://www.ta-lib.org/function.html)
- [ROC - Rate of change : ((price/prevPrice)-1)*100](https://www.ta-lib.org/function.html)
- [ROCP - Rate of change Percentage: (price-prevPrice)/prevPrice ((price/prevPrice)-1)*100](https://www.ta-lib.org/function.html)
- [ROCR - Rate of change ratio: (price/prevPrice) : ((price/prevPrice)-1)*100](https://www.ta-lib.org/function.html)
- [ROCR100 - Money Flow Index : ((price/prevPrice)-1)*100](https://www.ta-lib.org/function.html)
- [RSI - Money Flow Index : ((price/prevPrice)-1)*100](https://www.ta-lib.org/function.html)
- [STOCH - Money Flow Index : ((price/prevPrice)-1)*100](https://www.ta-lib.org/function.html)
- [STOCHF - Money Flow Index : ((price/prevPrice)-1)*100](https://www.ta-lib.org/function.html)
- [STOCHRSI - Money Flow Index : ((price/prevPrice)-1)*100](https://www.ta-lib.org/function.html)
- [TRIX - 1-day Rate-Of-Change (ROC) of a Triple Smooth EMA : ((price/prevPrice)-1)*100](https://www.ta-lib.org/function.html)
- [ULTOSC - Ultimate Oscillator : ((price/prevPrice)-1)*100](https://www.ta-lib.org/function.html)
- [WILLR - Williams' %R : ((price/prevPrice)-1)*100](https://www.ta-lib.org/function.html)  