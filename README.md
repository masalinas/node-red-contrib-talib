![talibred](https://user-images.githubusercontent.com/1216181/51946264-52039d00-2421-11e9-9b4e-819499aae193.png)

# TA-Lib RED - TA-Lib nodes for Node-RED

 [![npm](https://img.shields.io/npm/dt/node-red-contrib-huemagic.svg?style=flat-square)](https://www.npmjs.com/package/node-red-contrib-talib) [![Donate via PayPal](https://img.shields.io/badge/Donate-PayPal-blue.svg?style=flat-square)](https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=ZS8DFCHWMYCB8&source=url) [![npm](https://img.shields.io/npm/v/node-red-contrib-huemagic.svg?style=flat-square)](https://github.com/masalinas/node-red-contrib-talib/) [![GitHub license](https://img.shields.io/badge/license-Apache%202-blue.svg?style=flat-square)](https://raw.githubusercontent.com/masalinas/node-red-contrib-talib/master/LICENSE)

TA-Lib is a Technical Analysis Library for trading:

- Includes 200 indicators such as ADX, MACD, RSI, Stochastic, Bollinger Bands etc.. ([more info])(https://www.ta-lib.org/function.html)
- Candlestick pattern recognition

### Installation
TA-Lib RED was written for **Node.js 8.9+** and **Node-RED v0.17.5+**. It supports talib javascript API version v1.0.4+ from [TA-Lib](https://www.ta-lib.org/) library.
For more information check ofitial TA-Lib homepage: [TA-Lib](https://www.ta-lib.org/)

`npm install node-red-contrib-talib`

### Available Nodes
##### Volume Indicator
- [AD - Chaikin A/D Line: AD](https://www.ta-lib.org/function.html)
- [ADOSC - Chaikin A/D Oscillator: ADOSC](https://www.ta-lib.org/function.html)
- [OBV - Normalized Average True Range](https://www.ta-lib.org/function.html)
##### Momentum Indicator
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
##### Volatility Indicator
- [ATR - Average True Range](https://www.ta-lib.org/function.html)
- [NATR - Normalized Average True Range](https://www.ta-lib.org/function.html)
- [TRANGE - True Range](https://www.ta-lib.org/function.html)
##### Price Transform
- [AVGPRICE - Average Price](https://www.ta-lib.org/function.html)
- [MEDPRICE - Median Price](https://www.ta-lib.org/function.html)
- [TYPRICE - Typical Price](https://www.ta-lib.org/function.html)
- [WLCPRICE - Weighted Close Price](https://www.ta-lib.org/function.html)
##### Overlap Studies
- [BBANDS - Bollinger Bands](https://www.ta-lib.org/function.html)
- [DEMA - Double Exponential Moving Average](https://www.ta-lib.org/function.html)
- [EMA - Exponential Moving Average](https://www.ta-lib.org/function.html)
- [KAMA - Kaufman Adaptive Moving Average](https://www.ta-lib.org/function.html)
- [MA - All Moving Average](https://www.ta-lib.org/function.html)
- [MAMA - MESA Adaptive Moving Average](https://www.ta-lib.org/function.html)
- [MIDPOINT - MidPoint over period](https://www.ta-lib.org/function.html)
- [MIDPRICE - Midpoint Price over period](https://www.ta-lib.org/function.html)
- [SAR - Parabolic SAR](https://www.ta-lib.org/function.html)
- [SMA - Simple Moving Average](https://www.ta-lib.org/function.html)
- [T3 - Triple Exponential Moving Average (T3)](https://www.ta-lib.org/function.html)
- [TEMA - Triple Exponential Moving Average](https://www.ta-lib.org/function.html)
- [WMA - Weighted Moving Average](https://www.ta-lib.org/function.html)
##### Statistics Functions
- [BETA - Beta](https://www.ta-lib.org/function.html)
- [CORREL - Pearson's Correlation Coefficient (r)](https://www.ta-lib.org/function.html)
- [LINEARREG - Linear Regression](https://www.ta-lib.org/function.html)
- [LINEARREG_ANGLE - Linear Regression Angle](https://www.ta-lib.org/function.html)
- [LINEARREG_INTERCEPT - Linear Regression Intercept](https://www.ta-lib.org/function.html)
- [LINEARREG_SLOPE - Linear Regression Slope](https://www.ta-lib.org/function.html)
- [STDDEV - Standard Deviation](https://www.ta-lib.org/function.html)
- [TSF - Time Series Forecast](https://www.ta-lib.org/function.html)
- [VAR - Variance](https://www.ta-lib.org/function.html)
##### Pattern Recognition
- [CDL2CROWS - Two Crows](https://www.ta-lib.org/function.html)
- [CDL3BLACKCROWS - Three Black Crows](https://www.ta-lib.org/function.html)
- [CDL3INSIDE - Three Inside Up/Down](https://www.ta-lib.org/function.html)
- [CDL3LINESTRIKE - Three-Line Strike](https://www.ta-lib.org/function.html)
- [CDL3OUTSIDE - Three Outside Up/Down](https://www.ta-lib.org/function.html)
- [CDL3STARSINSOUTH - Three Stars In The South](https://www.ta-lib.org/function.html)
- [CDLABANDODEDBABY - Abandoned Baby](https://www.ta-lib.org/function.html)
- [CDLADVANCEBLOCK - Advance Block](https://www.ta-lib.org/function.html)
- [CDLBELHOLD - Belt-hold](https://www.ta-lib.org/function.html)
- [CDLBREAKAWAY - Breakaway](https://www.ta-lib.org/function.html)
- [CDLCLOSINGMARUBOZU - Closing Marubozu](https://www.ta-lib.org/function.html)
- [CDLCONCEALBABYSWALL - Concealing Baby Swallow](https://www.ta-lib.org/function.html)
- [CDLCOUNTERATTACK - Counterattack](https://www.ta-lib.org/function.html)
- [CDLDARKCLOUDCOVER - Dark Cloud Cover](https://www.ta-lib.org/function.html)
- [CDLDOJI - Doji](https://www.ta-lib.org/function.html)
- [CDLDOJISTAR - Doji Star](https://www.ta-lib.org/function.html)
- [CDLDRAGONFLYDOJI - Dragonfly Doji](https://www.ta-lib.org/function.html)
- [CDLENGULFING - Engulfing Pattern](https://www.ta-lib.org/function.html)
- [CDLEVENINGDOJISTAR - Evening Doji Star](https://www.ta-lib.org/function.html)
- [CDLEVENINGSTAR - Evening Star](https://www.ta-lib.org/function.html)
- [CDLGAPSIDESIDEWHITE - Up/Down-gap side-by-side white lines](https://www.ta-lib.org/function.html)
- [CDLGRAVESTONEDOJI - Gravestone Doji](https://www.ta-lib.org/function.html)
- [CDLHAMMER - Hammer](https://www.ta-lib.org/function.html)
- [CDLHANGINGMAN - Hanging Man](https://www.ta-lib.org/function.html)
- [CDLHARAMI - Harami Pattern](https://www.ta-lib.org/function.html)
- [CDLHARAMICROSS - Harami Cross Pattern](https://www.ta-lib.org/function.html)
- [CDLHIGHWAVE - High-Wave Candle](https://www.ta-lib.org/function.html)
- [CDLHIKKAKE - Hikkake Pattern](https://www.ta-lib.org/function.html)
- [CDLHIKKAKEMOD - Modified Hikkake Pattern](https://www.ta-lib.org/function.html)
- [CDLHOMINGPIGEON - Homing Pigeon](https://www.ta-lib.org/function.html)
- [CDLIDENTICAL3CROWS - Identical Three Crows](https://www.ta-lib.org/function.html)
- [CDLINNECK - In-Neck Pattern](https://www.ta-lib.org/function.html)
- [CDLINVERTEDHAMMER - Inverted Hammer](https://www.ta-lib.org/function.html)
- [CDLKICKING - Kicking](https://www.ta-lib.org/function.html)
- [CDLKICKINGBYLENGTH - Kicking - bull/bear determined by the longer marubozu](https://www.ta-lib.org/function.html)
- [CDLLADDERBOTTOM - Ladder Bottom](https://www.ta-lib.org/function.html)
- [CDLLONGLEGGEDDOJI - Long Legged Doji](https://www.ta-lib.org/function.html)
- [CDLLONGLINE - Long Line Candle](https://www.ta-lib.org/function.html)
- [CDLMARUBOZU - Marubozu](https://www.ta-lib.org/function.html)
- [CDLMATCHINGLOW - Matching Low](https://www.ta-lib.org/function.html)
- [CDLMATHOLD - Mat Hold](https://www.ta-lib.org/function.html)
- [CDLMORNINGDOJISTAR - Morning Doji Star](https://www.ta-lib.org/function.html)
- [CDLMORNINGSTAR - Morning Star](https://www.ta-lib.org/function.html)
- [CDLONNECK - On-Neck Pattern](https://www.ta-lib.org/function.html)
- [CDLPIERCING - Piercing Pattern](https://www.ta-lib.org/function.html)
- [CDLRICKSHAWMAN - Rickshaw Man](https://www.ta-lib.org/function.html)
- [CDLRISEFALL3METHODS - Rising/Falling Three Methods](https://www.ta-lib.org/function.html)
- [CDLSEPARATINGLINES - Separating Lines](https://www.ta-lib.org/function.html)
- [CDLSHOOTINGSTAR - Shooting Star](https://www.ta-lib.org/function.html)
- [CDLSHORTLINE - Short Line Candle](https://www.ta-lib.org/function.html)
- [CDLSPINNINGTOP - Spinning Top](https://www.ta-lib.org/function.html)
- [CDLSTALLEDPATTERN - Stalled Pattern](https://www.ta-lib.org/function.html)
- [CDLSTICKSANDWICH - Stick Sandwich](https://www.ta-lib.org/function.html)
- [CDLTAKURI - Takuri (Dragonfly Doji with very long lower shadow)](https://www.ta-lib.org/function.html)
- [CDLTASUKIGAP - Tasuki Gap](https://www.ta-lib.org/function.html)
- [CDLTHRUSTING - Thrusting Pattern](https://www.ta-lib.org/function.html)
- [CDLTRISTAR - Tristar Pattern](https://www.ta-lib.org/function.html)
- [CDLUNIQUE3RIVER - Unique 3 River](https://www.ta-lib.org/function.html)
- [CDLUPSIDEGAP2CROWS - Upside Gap Two Crows](https://www.ta-lib.org/function.html)
- [CDLXSIDEGAP3METHODS - Upside/Downside Gap Three Methods](https://www.ta-lib.org/function.html)
##### Cycle Indicators
- [HT_DCPERIOD - Hilbert Transform - Dominant Cycle Period](https://www.ta-lib.org/function.html)
- [HT_DCPHASE - Hilbert Transform - Dominant Cycle Phase](https://www.ta-lib.org/function.html)
- [HT_PHASOR - Hilbert Transform - Phasor Components](https://www.ta-lib.org/function.html)
- [HT_SINE - Hilbert Transform - SineWave](https://www.ta-lib.org/function.html)
- [HT_TRENDLINE - Hilbert Transform - Instantaneous Trendline](https://www.ta-lib.org/function.html)
- [HT_TRENDMODE - Hilbert Transform - Trend vs Cycle Mode](https://www.ta-lib.org/function.html)
##### Math Operators
- [MAX - Highest value over a specified period](https://www.ta-lib.org/function.html)
- [MAXINDEX - Index of highest value over a specified period](https://www.ta-lib.org/function.html)
- [MIN - Lowest value over a specified period](https://www.ta-lib.org/function.html)
- [MININDEX - Index of lowest value over a specified period](https://www.ta-lib.org/function.html)
- [MINMAX - Lowest and highest values over a specified](https://www.ta-lib.org/function.html)
- [MINMAXINDEX - Indexes of lowest and highest values over a specified period](https://www.ta-lib.org/function.html)
- [SUM - Summation](https://www.ta-lib.org/function.html)