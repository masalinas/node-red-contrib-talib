module.exports = function(RED) {
    "use strict";

    // load talib package
    var talib = require('talib/build/Release/talib');

    // load RED settings
    var settings = RED.settings;

    // Chaikin A/D Line: AD
    function AD(config) {
        RED.nodes.createNode(this, config);

        var node = this;

        node.on('input', function(msg) {
            talib.execute({
                name: "AD",
                startIdx: 0,
                endIdx: msg.payload.close.length - 1,
                high: msg.payload.high,
                low: msg.payload.low,
                close: msg.payload.close,
                volume: msg.payload.volume
            }, function (err, result) {
                if (err)
                    node.error("AD Error: " + err.error);

                msg.payload = result;

                node.send(msg);
            });
        });
    }

    RED.nodes.registerType('AD', AD);

    // Chaikin A/D Oscillator: ADOSC
    function ADOSC(config) {
        RED.nodes.createNode(this, config);

        var node = this;

        node.on('input', function(msg) {
            talib.execute({
                name: "ADOSC",
                startIdx: 0,
                endIdx: msg.payload.close.length - 1,
                high: msg.payload.high,
                low: msg.payload.low,
                close: msg.payload.close,
                volume: msg.payload.volume,
                optInFastPeriod: config.optInFastPeriod,
                optInSlowPeriod: config.optInSlowPeriod
            }, function (err, result) {
                if (err)
                    node.error("ADOSC Error: " + err.error);

                msg.payload = result;

                node.send(msg);
            });
        });
    }

    RED.nodes.registerType('ADOSC', ADOSC);

    // Average Directional Movement Index: ADX
    function ADX(config) {
        RED.nodes.createNode(this, config);

        var node = this;

        node.on('input', function(msg) {
            talib.execute({
                name: "ADX",
                startIdx: 0,
                endIdx: msg.payload.close.length - 1,
                high: msg.payload.high,
                low: msg.payload.low,
                close: msg.payload.close,
                optInTimePeriod: config.optInTimePeriod
            }, function (err, result) {
                if (err)
                    node.error("ADX Error: " + err.error);

                msg.payload = result;

                node.send(msg);
            });
        });
    }

    RED.nodes.registerType('ADX', ADX);

    // Average Directional Movement Index Rating: ADXR
    function ADXR(config) {
        RED.nodes.createNode(this, config);

        var node = this;

        node.on('input', function(msg) {
            talib.execute({
                name: "ADXR",
                startIdx: 0,
                endIdx: msg.payload.close.length - 1,
                high: msg.payload.high,
                low: msg.payload.low,
                close: msg.payload.close,
                optInTimePeriod: config.optInTimePeriod
            }, function (err, result) {
                if (err)
                    node.error("ADXR Error: " + err.error);

                msg.payload = result;

                node.send(msg);
            });
        });
    }

    RED.nodes.registerType('ADXR', ADXR);

    // Absolute Price Oscillator: APO
    function APO(config) {
        RED.nodes.createNode(this, config);

        var node = this;

        node.on('input', function(msg) {
            talib.execute({
                name: "APO",
                startIdx: 0,
                endIdx: msg.payload.close.length - 1,
                inReal: msg.payload.close,
                optInFastPeriod: config.optInFastPeriod,
                optInSlowPeriod: config.optInSlowPeriod,
                optInMAType: config.optInMAType
            }, function (err, result) {
                if (err)
                    node.error("APO Error: " + err.error);

                msg.payload = result;

                node.send(msg);
            });
        });
    }

    RED.nodes.registerType('APO', APO);

    // Aroon: AROON
    function AROON(config) {
        RED.nodes.createNode(this, config);

        var node = this;

        node.on('input', function(msg) {
            talib.execute({
                name: "AROON",
                startIdx: 0,
                endIdx: msg.payload.close.length - 1,
                high: msg.payload.high,
                low: msg.payload.low,
                optInTimePeriod: config.optInTimePeriod
            }, function (err, result) {
                if (err)
                    node.error("AROON Error: " + err.error);

                msg.payload = result;

                node.send(msg);
            });
        });
    }

    RED.nodes.registerType('AROON', AROON);

    // Aroon Oscillator: AROONOSC
    function AROONOSC(config) {
        RED.nodes.createNode(this, config);

        var node = this;

        node.on('input', function(msg) {
            talib.execute({
                name: "AROONOSC",
                startIdx: 0,
                endIdx: msg.payload.close.length - 1,
                high: msg.payload.high,
                low: msg.payload.low,
                optInTimePeriod: config.optInTimePeriod
            }, function (err, result) {
                if (err)
                    node.error("AROONOSC Error: " + err.error);

                msg.payload = result;

                node.send(msg);
            });
        });
    }

    RED.nodes.registerType('AROONOSC', AROONOSC);

    // Average True Range: ATR
    function ATR(config) {
        RED.nodes.createNode(this, config);

        var node = this;

        node.on('input', function(msg) {
            talib.execute({
                name: "ATR",
                startIdx: 0,
                endIdx: msg.payload.close.length - 1,
                high: msg.payload.high,
                low: msg.payload.low,
                close: msg.payload.close,
                optInTimePeriod: config.optInTimePeriod
            }, function (err, result) {
                if (err)
                    node.error("ATR Error: " + err.error);

                msg.payload = result;

                node.send(msg);
            });
        });
    }

    RED.nodes.registerType('ATR', ATR);

    // Average Price: AVGPRICE
    function AVGPRICE(config) {
        RED.nodes.createNode(this, config);

        var node = this;

        node.on('input', function(msg) {
            talib.execute({
                name: "AVGPRICE",
                startIdx: 0,
                endIdx: msg.payload.close.length - 1,
                open: msg.payload.open,
                high: msg.payload.high,
                low: msg.payload.low,
                close: msg.payload.close
            }, function (err, result) {
                if (err)
                    node.error("AVGPRICE Error: " + err.error);

                msg.payload = result;

                node.send(msg);
            });
        });
    }

    RED.nodes.registerType('AVGPRICE', AVGPRICE);

    // Bollinger Bands: BBANDS
    function BBANDS(config) {
        RED.nodes.createNode(this, config);

        var node = this;

        node.on('input', function(msg) {
            talib.execute({
                name: "BBANDS",
                startIdx: 0,
                endIdx: msg.payload.close.length - 1,
                inReal: msg.payload.close,
                optInTimePeriod: config.optInTimePeriod,
                optInNbDevUp: config.optInNbDevUp,
                optInNbDevDn: config.optInNbDevDn,
                optInMAType: config.optInMAType
            }, function (err, result) {
                if (err)
                    node.error("BBANDS Error: " + err.error);

                msg.payload = result;

                node.send(msg);
            });
        });
    }

    RED.nodes.registerType('BBANDS', BBANDS);

    // Beta: BETA
    function BETA(config) {
        RED.nodes.createNode(this, config);

        var node = this;

        node.on('input', function(msg) {
            talib.execute({
                name: "BETA",
                startIdx: 0,
                endIdx: msg.payload.close.length - 1,
                inReal0: msg.payload.open,
                inReal1: msg.payload.close,
                optInTimePeriod: config.optInTimePeriod
            }, function (err, result) {
                if (err)
                    node.error("BETA Error: " + err.error);

                msg.payload = result;

                node.send(msg);
            });
        });
    }

    RED.nodes.registerType('BETA', BETA);

    // Balance Of Power: BOP
    function BOP(config) {
        RED.nodes.createNode(this, config);

        var node = this;

        node.on('input', function(msg) {
            talib.execute({
                name: "BOP",
                startIdx: 0,
                endIdx: msg.payload.close.length - 1,
                open: msg.payload.open,
                high: msg.payload.high,
                low: msg.payload.low,
                close: msg.payload.close
            }, function (err, result) {
                if (err)
                    node.error("BOP Error: " + err.error);

                msg.payload = result;

                node.send(msg);
            });
        });
    }

    RED.nodes.registerType('BOP', BOP);

    // Commodity Channel Index: CCI
    function CCI(config) {
        RED.nodes.createNode(this, config);

        var node = this;

        node.on('input', function(msg) {
            talib.execute({
                name: "CCI",
                startIdx: 0,
                endIdx: msg.payload.close.length - 1,
                high: msg.payload.high,
                low: msg.payload.low,
                close: msg.payload.close,
                optInTimePeriod: config.optInTimePeriod
            }, function (err, result) {
                if (err)
                    node.error("CCI Error: " + err.error);

                msg.payload = result;

                node.send(msg);
            });
        });
    }

    RED.nodes.registerType('CCI', CCI);

    // Two Crows: CDL2CROWS
    function CDL2CROWS(config) {
        RED.nodes.createNode(this, config);

        var node = this;

        node.on('input', function(msg) {
            talib.execute({
                name: "CDL2CROWS",
                startIdx: 0,
                endIdx: msg.payload.close.length - 1,
                open: msg.payload.open,
                high: msg.payload.high,
                low: msg.payload.low,
                close: msg.payload.close
            }, function (err, result) {
                if (err)
                    node.error("CDL2CROWS Error: " + err.error);

                msg.payload = result;

                node.send(msg);
            });
        });
    }

    RED.nodes.registerType('CDL2CROWS', CDL2CROWS);

    // Three Black Crows: CDL3BLACKCROWS
    function CDL3BLACKCROWS(config) {
        RED.nodes.createNode(this, config);

        var node = this;

        node.on('input', function(msg) {
            talib.execute({
                name: "CDL3BLACKCROWS",
                startIdx: 0,
                endIdx: msg.payload.close.length - 1,
                open: msg.payload.open,
                high: msg.payload.high,
                low: msg.payload.low,
                close: msg.payload.close
            }, function (err, result) {
                if (err)
                    node.error("CDL3BLACKCROWS Error: " + err.error);

                msg.payload = result;

                node.send(msg);
            });
        });
    }

    RED.nodes.registerType('CDL3BLACKCROWS', CDL3BLACKCROWS);

    // Three Inside Up/Down: CDL3INSIDE
    function CDL3INSIDE(config) {
        RED.nodes.createNode(this, config);

        var node = this;

        node.on('input', function(msg) {
            talib.execute({
                name: "CDL3INSIDE",
                startIdx: 0,
                endIdx: msg.payload.close.length - 1,
                open: msg.payload.open,
                high: msg.payload.high,
                low: msg.payload.low,
                close: msg.payload.close
            }, function (err, result) {
                if (err)
                    node.error("CDL3INSIDE Error: " + err.error);

                msg.payload = result;

                node.send(msg);
            });
        });
    }

    RED.nodes.registerType('CDL3INSIDE', CDL3INSIDE);

    // Three-Line Strike: CDL3LINESTRIKE
    function CDL3LINESTRIKE(config) {
        RED.nodes.createNode(this, config);

        var node = this;

        node.on('input', function(msg) {
            talib.execute({
                name: "CDL3LINESTRIKE",
                startIdx: 0,
                endIdx: msg.payload.close.length - 1,
                open: msg.payload.open,
                high: msg.payload.high,
                low: msg.payload.low,
                close: msg.payload.close
            }, function (err, result) {
                if (err)
                    node.error("CDL3LINESTRIKE Error: " + err.error);

                msg.payload = result;

                node.send(msg);
            });
        });
    }

    RED.nodes.registerType('CDL3LINESTRIKE', CDL3LINESTRIKE);

    // Three Outside Up/Down: CDL3OUTSIDE
    function CDL3OUTSIDE(config) {
        RED.nodes.createNode(this, config);

        var node = this;

        node.on('input', function(msg) {
            talib.execute({
                name: "CDL3OUTSIDE",
                startIdx: 0,
                endIdx: msg.payload.close.length - 1,
                open: msg.payload.open,
                high: msg.payload.high,
                low: msg.payload.low,
                close: msg.payload.close
            }, function (err, result) {
                if (err)
                    node.error("CDL3OUTSIDE Error: " + err.error);

                msg.payload = result;

                node.send(msg);
            });
        });
    }

    RED.nodes.registerType('CDL3OUTSIDE', CDL3OUTSIDE);

    // Three Stars In The South: CDL3STARSINSOUTH
    function CDL3STARSINSOUTH(config) {
        RED.nodes.createNode(this, config);

        var node = this;

        node.on('input', function(msg) {
            talib.execute({
                name: "CDL3STARSINSOUTH",
                startIdx: 0,
                endIdx: msg.payload.close.length - 1,
                open: msg.payload.open,
                high: msg.payload.high,
                low: msg.payload.low,
                close: msg.payload.close
            }, function (err, result) {
                if (err)
                    node.error("CDL3STARSINSOUTH Error: " + err.error);

                msg.payload = result;

                node.send(msg);
            });
        });
    }

    RED.nodes.registerType('CDL3STARSINSOUTH', CDL3STARSINSOUTH);

    // Three Advancing White Soldiers: CDL3WHITESOLDIERS
    function CDL3WHITESOLDIERS(config) {
        RED.nodes.createNode(this, config);

        var node = this;

        node.on('input', function(msg) {
            talib.execute({
                name: "CDL3WHITESOLDIERS",
                startIdx: 0,
                endIdx: msg.payload.close.length - 1,
                open: msg.payload.open,
                high: msg.payload.high,
                low: msg.payload.low,
                close: msg.payload.close
            }, function (err, result) {
                if (err)
                    node.error("CDL3WHITESOLDIERS Error: " + err.error);

                msg.payload = result;

                node.send(msg);
            });
        });
    }

    RED.nodes.registerType('CDL3WHITESOLDIERS', CDL3WHITESOLDIERS);

    // Abandoned Baby: CDLABANDONEDBABY
    function CDLABANDONEDBABY(config) {
        RED.nodes.createNode(this, config);

        var node = this;

        node.on('input', function(msg) {
            talib.execute({
                name: "CDLABANDONEDBABY",
                startIdx: 0,
                endIdx: msg.payload.close.length - 1,
                open: msg.payload.open,
                high: msg.payload.high,
                low: msg.payload.low,
                close: msg.payload.close,
                optInPenetration: config.optInPenetration
            }, function (err, result) {
                if (err)
                    node.error("CDLABANDONEDBABY Error: " + err.error);

                msg.payload = result;

                node.send(msg);
            });
        });
    }

    RED.nodes.registerType('CDLABANDONEDBABY', CDLABANDONEDBABY);

    // Advance Block: CDLADVANCEBLOCK
    function CDLADVANCEBLOCK(config) {
        RED.nodes.createNode(this, config);

        var node = this;

        node.on('input', function(msg) {
            talib.execute({
                name: "CDLADVANCEBLOCK",
                startIdx: 0,
                endIdx: msg.payload.close.length - 1,
                open: msg.payload.open,
                high: msg.payload.high,
                low: msg.payload.low,
                close: msg.payload.close
            }, function (err, result) {
                if (err)
                    node.error("CDLADVANCEBLOCK Error: " + err.error);

                msg.payload = result;

                node.send(msg);
            });
        });
    }

    RED.nodes.registerType('CDLADVANCEBLOCK', CDLADVANCEBLOCK);

    // Advance Block: CDLBELTHOLD
    function CDLBELTHOLD(config) {
        RED.nodes.createNode(this, config);

        var node = this;

        node.on('input', function(msg) {
            talib.execute({
                name: "CDLBELTHOLD",
                startIdx: 0,
                endIdx: msg.payload.close.length - 1,
                open: msg.payload.open,
                high: msg.payload.high,
                low: msg.payload.low,
                close: msg.payload.close
            }, function (err, result) {
                if (err)
                    node.error("CDLBELTHOLD Error: " + err.error);

                msg.payload = result;

                node.send(msg);
            });
        });
    }

    RED.nodes.registerType('CDLBELTHOLD', CDLBELTHOLD);

    // Breakaway: CDLBREAKAWAY
    function CDLBREAKAWAY(config) {
        RED.nodes.createNode(this, config);

        var node = this;

        node.on('input', function(msg) {
            talib.execute({
                name: "CDLBREAKAWAY",
                startIdx: 0,
                endIdx: msg.payload.close.length - 1,
                open: msg.payload.open,
                high: msg.payload.high,
                low: msg.payload.low,
                close: msg.payload.close
            }, function (err, result) {
                if (err)
                    node.error("CDLBREAKAWAY Error: " + err.error);

                msg.payload = result;

                node.send(msg);
            });
        });
    }

    RED.nodes.registerType('CDLBREAKAWAY', CDLBREAKAWAY);

    // Closing Marubozu: CDLCLOSINGMARUBOZU
    function CDLCLOSINGMARUBOZU(config) {
        RED.nodes.createNode(this, config);

        var node = this;

        node.on('input', function(msg) {
            talib.execute({
                name: "CDLCLOSINGMARUBOZU",
                startIdx: 0,
                endIdx: msg.payload.close.length - 1,
                open: msg.payload.open,
                high: msg.payload.high,
                low: msg.payload.low,
                close: msg.payload.close
            }, function (err, result) {
                if (err)
                    node.error("CDLCLOSINGMARUBOZU Error: " + err.error);

                msg.payload = result;

                node.send(msg);
            });
        });
    }

    RED.nodes.registerType('CDLCLOSINGMARUBOZU', CDLCLOSINGMARUBOZU);

    // Concealing Baby Swallow: CDLCONCEALBABYSWALL
    function CDLCONCEALBABYSWALL(config) {
        RED.nodes.createNode(this, config);

        var node = this;

        node.on('input', function(msg) {
            talib.execute({
                name: "CDLCONCEALBABYSWALL",
                startIdx: 0,
                endIdx: msg.payload.close.length - 1,
                open: msg.payload.open,
                high: msg.payload.high,
                low: msg.payload.low,
                close: msg.payload.close
            }, function (err, result) {
                if (err)
                    node.error("CDLCONCEALBABYSWALL Error: " + err.error);

                msg.payload = result;

                node.send(msg);
            });
        });
    }

    RED.nodes.registerType('CDLCONCEALBABYSWALL', CDLCONCEALBABYSWALL);

    // Counterattack: CDLCOUNTERATTACK
    function CDLCOUNTERATTACK(config) {
        RED.nodes.createNode(this, config);

        var node = this;

        node.on('input', function(msg) {
            talib.execute({
                name: "CDLCOUNTERATTACK",
                startIdx: 0,
                endIdx: msg.payload.close.length - 1,
                open: msg.payload.open,
                high: msg.payload.high,
                low: msg.payload.low,
                close: msg.payload.close
            }, function (err, result) {
                if (err)
                    node.error("CDLCOUNTERATTACK Error: " + err.error);

                msg.payload = result;

                node.send(msg);
            });
        });
    }

    RED.nodes.registerType('CDLCOUNTERATTACK', CDLCOUNTERATTACK);

    // Dark Cloud Cover: CDLDARKCLOUDCOVER
    function CDLDARKCLOUDCOVER(config) {
        RED.nodes.createNode(this, config);

        var node = this;

        node.on('input', function(msg) {
            talib.execute({
                name: "CDLDARKCLOUDCOVER",
                startIdx: 0,
                endIdx: msg.payload.close.length - 1,
                open: msg.payload.open,
                high: msg.payload.high,
                low: msg.payload.low,
                close: msg.payload.close,
                optInPenetration: config.optInPenetration
            }, function (err, result) {
                if (err)
                    node.error("CDLDARKCLOUDCOVER Error: " + err.error);

                msg.payload = result;

                node.send(msg);
            });
        });
    }

    RED.nodes.registerType('CDLDARKCLOUDCOVER', CDLDARKCLOUDCOVER);

    // Doji: CDLDOJI
    function CDLDOJI(config) {
        RED.nodes.createNode(this, config);

        var node = this;

        node.on('input', function(msg) {
            talib.execute({
                name: "CDLDOJI",
                startIdx: 0,
                endIdx: msg.payload.close.length - 1,
                open: msg.payload.open,
                high: msg.payload.high,
                low: msg.payload.low,
                close: msg.payload.close
            }, function (err, result) {
                if (err)
                    node.error("CDLDOJI Error: " + err.error);

                msg.payload = result;

                node.send(msg);
            });
        });
    }

    RED.nodes.registerType('CDLDOJI', CDLDOJI);

    // Doji Star: CDLDOJISTAR
    function CDLDOJISTAR(config) {
        RED.nodes.createNode(this, config);

        var node = this;

        node.on('input', function(msg) {
            talib.execute({
                name: "CDLDOJISTAR",
                startIdx: 0,
                endIdx: msg.payload.close.length - 1,
                open: msg.payload.open,
                high: msg.payload.high,
                low: msg.payload.low,
                close: msg.payload.close
            }, function (err, result) {
                if (err)
                    node.error("CDLDOJISTAR Error: " + err.error);

                msg.payload = result;

                node.send(msg);
            });
        });
    }

    RED.nodes.registerType('CDLDOJISTAR', CDLDOJISTAR);

    // Dragonfly Doji: CDLDRAGONFLYDOJI
    function CDLDRAGONFLYDOJI(config) {
        RED.nodes.createNode(this, config);

        var node = this;

        node.on('input', function(msg) {
            talib.execute({
                name: "CDLDRAGONFLYDOJI",
                startIdx: 0,
                endIdx: msg.payload.close.length - 1,
                open: msg.payload.open,
                high: msg.payload.high,
                low: msg.payload.low,
                close: msg.payload.close
            }, function (err, result) {
                if (err)
                    node.error("CDLDRAGONFLYDOJI Error: " + err.error);

                msg.payload = result;

                node.send(msg);
            });
        });
    }

    RED.nodes.registerType('CDLDRAGONFLYDOJI', CDLDRAGONFLYDOJI);

    // Engulfing Pattern: CDLENGULFING
    function CDLENGULFING(config) {
        RED.nodes.createNode(this, config);

        var node = this;

        node.on('input', function(msg) {
            talib.execute({
                name: "CDLENGULFING",
                startIdx: 0,
                endIdx: msg.payload.close.length - 1,
                open: msg.payload.open,
                high: msg.payload.high,
                low: msg.payload.low,
                close: msg.payload.close
            }, function (err, result) {
                if (err)
                    node.error("CDLENGULFING Error: " + err.error);

                msg.payload = result;

                node.send(msg);
            });
        });
    }

    RED.nodes.registerType('CDLENGULFING', CDLENGULFING);

    // Evening Doji Star: CDLEVENINGDOJISTAR
    function CDLEVENINGDOJISTAR(config) {
        RED.nodes.createNode(this, config);

        var node = this;

        node.on('input', function(msg) {
            talib.execute({
                name: "CDLEVENINGDOJISTAR",
                startIdx: 0,
                endIdx: msg.payload.close.length - 1,
                open: msg.payload.open,
                high: msg.payload.high,
                low: msg.payload.low,
                close: msg.payload.close,
                optInPenetration: config.optInPenetration
            }, function (err, result) {
                if (err)
                    node.error("CDLEVENINGDOJISTAR Error: " + err.error);

                msg.payload = result;

                node.send(msg);
            });
        });
    }

    RED.nodes.registerType('CDLEVENINGDOJISTAR', CDLEVENINGDOJISTAR);

    // Evening Doji Star: CDLEVENINGSTAR
    function CDLEVENINGSTAR(config) {
        RED.nodes.createNode(this, config);

        var node = this;

        node.on('input', function(msg) {
            talib.execute({
                name: "CDLEVENINGSTAR",
                startIdx: 0,
                endIdx: msg.payload.close.length - 1,
                open: msg.payload.open,
                high: msg.payload.high,
                low: msg.payload.low,
                close: msg.payload.close,
                optInPenetration: config.optInPenetration
            }, function (err, result) {
                if (err)
                    node.error("CDLEVENINGSTAR Error: " + err.error);

                msg.payload = result;

                node.send(msg);
            });
        });
    }

    RED.nodes.registerType('CDLEVENINGSTAR', CDLEVENINGSTAR);

    // Up/Down-gap side-by-side white lines: CDLGAPSIDESIDEWHITE
    function CDLGAPSIDESIDEWHITE(config) {
        RED.nodes.createNode(this, config);

        var node = this;

        node.on('input', function(msg) {
            talib.execute({
                name: "CDLGAPSIDESIDEWHITE",
                startIdx: 0,
                endIdx: msg.payload.close.length - 1,
                open: msg.payload.open,
                high: msg.payload.high,
                low: msg.payload.low,
                close: msg.payload.close
            }, function (err, result) {
                if (err)
                    node.error("CDLGAPSIDESIDEWHITE Error: " + err.error);

                msg.payload = result;

                node.send(msg);
            });
        });
    }

    RED.nodes.registerType('CDLGAPSIDESIDEWHITE', CDLGAPSIDESIDEWHITE);

    // Gravestone Doji: CDLGRAVESTONEDOJI
    function CDLGRAVESTONEDOJI(config) {
        RED.nodes.createNode(this, config);

        var node = this;

        node.on('input', function(msg) {
            talib.execute({
                name: "CDLGRAVESTONEDOJI",
                startIdx: 0,
                endIdx: msg.payload.close.length - 1,
                open: msg.payload.open,
                high: msg.payload.high,
                low: msg.payload.low,
                close: msg.payload.close
            }, function (err, result) {
                if (err)
                    node.error("CDLGRAVESTONEDOJI Error: " + err.error);

                msg.payload = result;

                node.send(msg);
            });
        });
    }

    RED.nodes.registerType('CDLGRAVESTONEDOJI', CDLGRAVESTONEDOJI);

    // Hammer: CDLHAMMER
    function CDLHAMMER(config) {
        RED.nodes.createNode(this, config);

        var node = this;

        node.on('input', function(msg) {
            talib.execute({
                name: "CDLHAMMER",
                startIdx: 0,
                endIdx: msg.payload.close.length - 1,
                open: msg.payload.open,
                high: msg.payload.high,
                low: msg.payload.low,
                close: msg.payload.close
            }, function (err, result) {
                if (err)
                    node.error("CDLHAMMER Error: " + err.error);

                msg.payload = result;

                node.send(msg);
            });
        });
    }

    RED.nodes.registerType('CDLHAMMER', CDLHAMMER);

    // Hanging Man: CDLHANGINGMAN
    function CDLHANGINGMAN(config) {
        RED.nodes.createNode(this, config);

        var node = this;

        node.on('input', function(msg) {
            talib.execute({
                name: "CDLHANGINGMAN",
                startIdx: 0,
                endIdx: msg.payload.close.length - 1,
                open: msg.payload.open,
                high: msg.payload.high,
                low: msg.payload.low,
                close: msg.payload.close
            }, function (err, result) {
                if (err)
                    node.error("CDLHANGINGMAN Error: " + err.error);

                msg.payload = result;

                node.send(msg);
            });
        });
    }

    RED.nodes.registerType('CDLHANGINGMAN', CDLHANGINGMAN);

    // Harami Pattern: CDLHARAMI
    function CDLHARAMI(config) {
        RED.nodes.createNode(this, config);

        var node = this;

        node.on('input', function(msg) {
            talib.execute({
                name: "CDLHARAMI",
                startIdx: 0,
                endIdx: msg.payload.close.length - 1,
                open: msg.payload.open,
                high: msg.payload.high,
                low: msg.payload.low,
                close: msg.payload.close
            }, function (err, result) {
                if (err)
                    node.error("CDLHARAMI Error: " + err.error);

                msg.payload = result;

                node.send(msg);
            });
        });
    }

    RED.nodes.registerType('CDLHARAMI', CDLHARAMI);

    // Harami Cross Pattern: CDLHARAMICROSS
    function CDLHARAMICROSS(config) {
        RED.nodes.createNode(this, config);

        var node = this;

        node.on('input', function(msg) {
            talib.execute({
                name: "CDLHARAMICROSS",
                startIdx: 0,
                endIdx: msg.payload.close.length - 1,
                open: msg.payload.open,
                high: msg.payload.high,
                low: msg.payload.low,
                close: msg.payload.close
            }, function (err, result) {
                if (err)
                    node.error("CDLHARAMICROSS Error: " + err.error);

                msg.payload = result;

                node.send(msg);
            });
        });
    }

    RED.nodes.registerType('CDLHARAMICROSS', CDLHARAMICROSS);

    // High-Wave Candle: CDLHIGHWAVE
    function CDLHIGHWAVE(config) {
        RED.nodes.createNode(this, config);

        var node = this;

        node.on('input', function(msg) {
            talib.execute({
                name: "CDLHIGHWAVE",
                startIdx: 0,
                endIdx: msg.payload.close.length - 1,
                open: msg.payload.open,
                high: msg.payload.high,
                low: msg.payload.low,
                close: msg.payload.close
            }, function (err, result) {
                if (err)
                    node.error("CDLHIGHWAVE Error: " + err.error);

                msg.payload = result;

                node.send(msg);
            });
        });
    }

    RED.nodes.registerType('CDLHIGHWAVE', CDLHIGHWAVE);

    // Hikkake Pattern: CDLHIKKAKE
    function CDLHIKKAKE(config) {
        RED.nodes.createNode(this, config);

        var node = this;

        node.on('input', function(msg) {
            talib.execute({
                name: "CDLHIKKAKE",
                startIdx: 0,
                endIdx: msg.payload.close.length - 1,
                open: msg.payload.open,
                high: msg.payload.high,
                low: msg.payload.low,
                close: msg.payload.close
            }, function (err, result) {
                if (err)
                    node.error("CDLHIKKAKE Error: " + err.error);

                msg.payload = result;

                node.send(msg);
            });
        });
    }

    RED.nodes.registerType('CDLHIKKAKE', CDLHIKKAKE);

    // Modified Hikkake Pattern: CDLHIKKAKEMOD
    function CDLHIKKAKEMOD(config) {
        RED.nodes.createNode(this, config);

        var node = this;

        node.on('input', function(msg) {
            talib.execute({
                name: "CDLHIKKAKEMOD",
                startIdx: 0,
                endIdx: msg.payload.close.length - 1,
                open: msg.payload.open,
                high: msg.payload.high,
                low: msg.payload.low,
                close: msg.payload.close
            }, function (err, result) {
                if (err)
                    node.error("CDLHIKKAKEMOD Error: " + err.error);

                msg.payload = result;

                node.send(msg);
            });
        });
    }

    RED.nodes.registerType('CDLHIKKAKEMOD', CDLHIKKAKEMOD);

    // Homing Pigeon: CDLHOMINGPIGEON
    function CDLHOMINGPIGEON(config) {
        RED.nodes.createNode(this, config);

        var node = this;

        node.on('input', function(msg) {
            talib.execute({
                name: "CDLHOMINGPIGEON",
                startIdx: 0,
                endIdx: msg.payload.close.length - 1,
                open: msg.payload.open,
                high: msg.payload.high,
                low: msg.payload.low,
                close: msg.payload.close
            }, function (err, result) {
                if (err)
                    node.error("CDLHOMINGPIGEON Error: " + err.error);

                msg.payload = result;

                node.send(msg);
            });
        });
    }

    RED.nodes.registerType('CDLHOMINGPIGEON', CDLHOMINGPIGEON);

    // Identical Three Crows: CDLIDENTICAL3CROWS
    function CDLIDENTICAL3CROWS(config) {
        RED.nodes.createNode(this, config);

        var node = this;

        node.on('input', function(msg) {
            talib.execute({
                name: "CDLIDENTICAL3CROWS",
                startIdx: 0,
                endIdx: msg.payload.close.length - 1,
                open: msg.payload.open,
                high: msg.payload.high,
                low: msg.payload.low,
                close: msg.payload.close
            }, function (err, result) {
                if (err)
                    node.error("CDLIDENTICAL3CROWS Error: " + err.error);

                msg.payload = result;

                node.send(msg);
            });
        });
    }

    RED.nodes.registerType('CDLIDENTICAL3CROWS', CDLIDENTICAL3CROWS);

    // In-Neck Pattern: CDLINNECK
    function CDLINNECK(config) {
        RED.nodes.createNode(this, config);

        var node = this;

        node.on('input', function(msg) {
            talib.execute({
                name: "CDLINNECK",
                startIdx: 0,
                endIdx: msg.payload.close.length - 1,
                open: msg.payload.open,
                high: msg.payload.high,
                low: msg.payload.low,
                close: msg.payload.close
            }, function (err, result) {
                if (err)
                    node.error("CDLINNECK Error: " + err.error);

                msg.payload = result;

                node.send(msg);
            });
        });
    }

    RED.nodes.registerType('CDLINNECK', CDLINNECK);

    // Inverted Hammer: CDLINVERTEDHAMMER
    function CDLINVERTEDHAMMER(config) {
        RED.nodes.createNode(this, config);

        var node = this;

        node.on('input', function(msg) {
            talib.execute({
                name: "CDLINVERTEDHAMMER",
                startIdx: 0,
                endIdx: msg.payload.close.length - 1,
                open: msg.payload.open,
                high: msg.payload.high,
                low: msg.payload.low,
                close: msg.payload.close
            }, function (err, result) {
                if (err)
                    node.error("CDLINVERTEDHAMMER Error: " + err.error);

                msg.payload = result;

                node.send(msg);
            });
        });
    }

    RED.nodes.registerType('CDLINVERTEDHAMMER', CDLINVERTEDHAMMER);

    // Kicking: CDLKICKING
    function CDLKICKING(config) {
        RED.nodes.createNode(this, config);

        var node = this;

        node.on('input', function(msg) {
            talib.execute({
                name: "CDLKICKING",
                startIdx: 0,
                endIdx: msg.payload.close.length - 1,
                open: msg.payload.open,
                high: msg.payload.high,
                low: msg.payload.low,
                close: msg.payload.close
            }, function (err, result) {
                if (err)
                    node.error("CDLKICKING Error: " + err.error);

                msg.payload = result;

                node.send(msg);
            });
        });
    }

    RED.nodes.registerType('CDLKICKING', CDLKICKING);

    // Kicking - bull/bear determined by the longer marubozu: CDLKICKINGBYLENGTH
    function CDLKICKINGBYLENGTH(config) {
        RED.nodes.createNode(this, config);

        var node = this;

        node.on('input', function(msg) {
            talib.execute({
                name: "CDLKICKINGBYLENGTH",
                startIdx: 0,
                endIdx: msg.payload.close.length - 1,
                open: msg.payload.open,
                high: msg.payload.high,
                low: msg.payload.low,
                close: msg.payload.close
            }, function (err, result) {
                if (err)
                    node.error("CDLKICKINGBYLENGTH Error: " + err.error);

                msg.payload = result;

                node.send(msg);
            });
        });
    }

    RED.nodes.registerType('CDLKICKINGBYLENGTH', CDLKICKINGBYLENGTH);

    // Ladder Bottom: CDLLADDERBOTTOM
    function CDLLADDERBOTTOM(config) {
        RED.nodes.createNode(this, config);

        var node = this;

        node.on('input', function(msg) {
            talib.execute({
                name: "CDLLADDERBOTTOM",
                startIdx: 0,
                endIdx: msg.payload.close.length - 1,
                open: msg.payload.open,
                high: msg.payload.high,
                low: msg.payload.low,
                close: msg.payload.close
            }, function (err, result) {
                if (err)
                    node.error("CDLLADDERBOTTOM Error: " + err.error);

                msg.payload = result;

                node.send(msg);
            });
        });
    }

    RED.nodes.registerType('CDLLADDERBOTTOM', CDLLADDERBOTTOM);

    // Long Legged Doji: CDLLONGLEGGEDDOJI
    function CDLLONGLEGGEDDOJI(config) {
        RED.nodes.createNode(this, config);

        var node = this;

        node.on('input', function(msg) {
            talib.execute({
                name: "CDLLONGLEGGEDDOJI",
                startIdx: 0,
                endIdx: msg.payload.close.length - 1,
                open: msg.payload.open,
                high: msg.payload.high,
                low: msg.payload.low,
                close: msg.payload.close
            }, function (err, result) {
                if (err)
                    node.error("CDLLONGLEGGEDDOJI Error: " + err.error);

                msg.payload = result;

                node.send(msg);
            });
        });
    }

    RED.nodes.registerType('CDLLONGLEGGEDDOJI', CDLLONGLEGGEDDOJI);

    // Long Line Candle: CDLLONGLINE
    function CDLLONGLINE(config) {
        RED.nodes.createNode(this, config);

        var node = this;

        node.on('input', function(msg) {
            talib.execute({
                name: "CDLLONGLINE",
                startIdx: 0,
                endIdx: msg.payload.close.length - 1,
                open: msg.payload.open,
                high: msg.payload.high,
                low: msg.payload.low,
                close: msg.payload.close
            }, function (err, result) {
                if (err)
                    node.error("CDLLONGLINE Error: " + err.error);

                msg.payload = result;

                node.send(msg);
            });
        });
    }

    RED.nodes.registerType('CDLLONGLINE', CDLLONGLINE);

    // Marubozu: CDLMARUBOZU
    function CDLMARUBOZU(config) {
        RED.nodes.createNode(this, config);

        var node = this;

        node.on('input', function(msg) {
            talib.execute({
                name: "CDLMARUBOZU",
                startIdx: 0,
                endIdx: msg.payload.close.length - 1,
                open: msg.payload.open,
                high: msg.payload.high,
                low: msg.payload.low,
                close: msg.payload.close
            }, function (err, result) {
                if (err)
                    node.error("CDLMARUBOZU Error: " + err.error);

                msg.payload = result;

                node.send(msg);
            });
        });
    }

    RED.nodes.registerType('CDLMARUBOZU', CDLMARUBOZU);

    // Matching Low: CDLMATCHINGLOW
    function CDLMATCHINGLOW(config) {
        RED.nodes.createNode(this, config);

        var node = this;

        node.on('input', function(msg) {
            talib.execute({
                name: "CDLMATCHINGLOW",
                startIdx: 0,
                endIdx: msg.payload.close.length - 1,
                open: msg.payload.open,
                high: msg.payload.high,
                low: msg.payload.low,
                close: msg.payload.close
            }, function (err, result) {
                if (err)
                    node.error("CDLMATCHINGLOW Error: " + err.error);

                msg.payload = result;

                node.send(msg);
            });
        });
    }

    RED.nodes.registerType('CDLMATCHINGLOW', CDLMATCHINGLOW);

    // Mat Hold: CDLMATHOLD
    function CDLMATHOLD(config) {
        RED.nodes.createNode(this, config);

        var node = this;

        node.on('input', function(msg) {
            talib.execute({
                name: "CDLMATHOLD",
                startIdx: 0,
                endIdx: msg.payload.close.length - 1,
                open: msg.payload.open,
                high: msg.payload.high,
                low: msg.payload.low,
                close: msg.payload.close,
                optInPenetration: config.optInPenetration
            }, function (err, result) {
                if (err)
                    node.error("CDLMATHOLD Error: " + err.error);

                msg.payload = result;

                node.send(msg);
            });
        });
    }

    RED.nodes.registerType('CDLMATHOLD', CDLMATHOLD);

    // Morning Doji Star: CDLMORNINGDOJISTAR
    function CDLMORNINGDOJISTAR(config) {
        RED.nodes.createNode(this, config);

        var node = this;

        node.on('input', function(msg) {
            talib.execute({
                name: "CDLMORNINGDOJISTAR",
                startIdx: 0,
                endIdx: msg.payload.close.length - 1,
                open: msg.payload.open,
                high: msg.payload.high,
                low: msg.payload.low,
                close: msg.payload.close,
                optInPenetration: config.optInPenetration
            }, function (err, result) {
                if (err)
                    node.error("CDLMORNINGDOJISTAR Error: " + err.error);

                msg.payload = result;

                node.send(msg);
            });
        });
    }

    RED.nodes.registerType('CDLMORNINGDOJISTAR', CDLMORNINGDOJISTAR);

    // Morning Star: CDLMORNINGSTAR
    function CDLMORNINGSTAR(config) {
        RED.nodes.createNode(this, config);

        var node = this;

        node.on('input', function(msg) {
            talib.execute({
                name: "CDLMORNINGSTAR",
                startIdx: 0,
                endIdx: msg.payload.close.length - 1,
                open: msg.payload.open,
                high: msg.payload.high,
                low: msg.payload.low,
                close: msg.payload.close,
                optInPenetration: config.optInPenetration
            }, function (err, result) {
                if (err)
                    node.error("CDLMORNINGSTAR Error: " + err.error);

                msg.payload = result;

                node.send(msg);
            });
        });
    }

    RED.nodes.registerType('CDLMORNINGSTAR', CDLMORNINGSTAR);

    // On-Neck Pattern: CDLONNECK
    function CDLONNECK(config) {
        RED.nodes.createNode(this, config);

        var node = this;

        node.on('input', function(msg) {
            talib.execute({
                name: "CDLONNECK",
                startIdx: 0,
                endIdx: msg.payload.close.length - 1,
                open: msg.payload.open,
                high: msg.payload.high,
                low: msg.payload.low,
                close: msg.payload.close
            }, function (err, result) {
                if (err)
                    node.error("CDLONNECK Error: " + err.error);

                msg.payload = result;

                node.send(msg);
            });
        });
    }

    RED.nodes.registerType('CDLONNECK', CDLKICKING);

    // Piercing Pattern: CDLPIERCING
    function CDLPIERCING(config) {
        RED.nodes.createNode(this, config);

        var node = this;

        node.on('input', function(msg) {
            talib.execute({
                name: "CDLPIERCING",
                startIdx: 0,
                endIdx: msg.payload.close.length - 1,
                open: msg.payload.open,
                high: msg.payload.high,
                low: msg.payload.low,
                close: msg.payload.close
            }, function (err, result) {
                if (err)
                    node.error("CDLPIERCING Error: " + err.error);

                msg.payload = result;

                node.send(msg);
            });
        });
    }

    RED.nodes.registerType('CDLPIERCING', CDLPIERCING);

    // Rickshaw Man: CDLRICKSHAWMAN
    function CDLRICKSHAWMAN(config) {
        RED.nodes.createNode(this, config);

        var node = this;

        node.on('input', function(msg) {
            talib.execute({
                name: "CDLRICKSHAWMAN",
                startIdx: 0,
                endIdx: msg.payload.close.length - 1,
                open: msg.payload.open,
                high: msg.payload.high,
                low: msg.payload.low,
                close: msg.payload.close
            }, function (err, result) {
                if (err)
                    node.error("CDLRICKSHAWMAN Error: " + err.error);

                msg.payload = result;

                node.send(msg);
            });
        });
    }

    RED.nodes.registerType('CDLRICKSHAWMAN', CDLRICKSHAWMAN);

    // Rising/Falling Three Methods: CDLRISEFALL3METHODS
    function CDLRISEFALL3METHODS(config) {
        RED.nodes.createNode(this, config);

        var node = this;

        node.on('input', function(msg) {
            talib.execute({
                name: "CDLRISEFALL3METHODS",
                startIdx: 0,
                endIdx: msg.payload.close.length - 1,
                open: msg.payload.open,
                high: msg.payload.high,
                low: msg.payload.low,
                close: msg.payload.close
            }, function (err, result) {
                if (err)
                    node.error("CDLRISEFALL3METHODS Error: " + err.error);

                msg.payload = result;

                node.send(msg);
            });
        });
    }

    RED.nodes.registerType('CDLRISEFALL3METHODS', CDLRISEFALL3METHODS);

    // Separating Lines: CDLSEPARATINGLINES
    function CDLSEPARATINGLINES(config) {
        RED.nodes.createNode(this, config);

        var node = this;

        node.on('input', function(msg) {
            talib.execute({
                name: "CDLSEPARATINGLINES",
                startIdx: 0,
                endIdx: msg.payload.close.length - 1,
                open: msg.payload.open,
                high: msg.payload.high,
                low: msg.payload.low,
                close: msg.payload.close
            }, function (err, result) {
                if (err)
                    node.error("CDLSEPARATINGLINES Error: " + err.error);

                msg.payload = result;

                node.send(msg);
            });
        });
    }

    RED.nodes.registerType('CDLSEPARATINGLINES', CDLSEPARATINGLINES);

    // Shooting Star: CDLSHOOTINGSTAR
    function CDLSHOOTINGSTAR(config) {
        RED.nodes.createNode(this, config);

        var node = this;

        node.on('input', function(msg) {
            talib.execute({
                name: "CDLSHOOTINGSTAR",
                startIdx: 0,
                endIdx: msg.payload.close.length - 1,
                open: msg.payload.open,
                high: msg.payload.high,
                low: msg.payload.low,
                close: msg.payload.close
            }, function (err, result) {
                if (err)
                    node.error("CDLSHOOTINGSTAR Error: " + err.error);

                msg.payload = result;

                node.send(msg);
            });
        });
    }

    RED.nodes.registerType('CDLSHOOTINGSTAR', CDLSHOOTINGSTAR);

    // Short Line Candle: CDLSHORTLINE
    function CDLSHORTLINE(config) {
        RED.nodes.createNode(this, config);

        var node = this;

        node.on('input', function(msg) {
            talib.execute({
                name: "CDLSHORTLINE",
                startIdx: 0,
                endIdx: msg.payload.close.length - 1,
                open: msg.payload.open,
                high: msg.payload.high,
                low: msg.payload.low,
                close: msg.payload.close
            }, function (err, result) {
                if (err)
                    node.error("CDLSHORTLINE Error: " + err.error);

                msg.payload = result;

                node.send(msg);
            });
        });
    }

    RED.nodes.registerType('CDLSHORTLINE', CDLSHORTLINE);

    // Spinning Top: CDLSPINNINGTOP
    function CDLSPINNINGTOP(config) {
        RED.nodes.createNode(this, config);

        var node = this;

        node.on('input', function(msg) {
            talib.execute({
                name: "CDLSPINNINGTOP",
                startIdx: 0,
                endIdx: msg.payload.close.length - 1,
                open: msg.payload.open,
                high: msg.payload.high,
                low: msg.payload.low,
                close: msg.payload.close
            }, function (err, result) {
                if (err)
                    node.error("CDLSPINNINGTOP Error: " + err.error);

                msg.payload = result;

                node.send(msg);
            });
        });
    }

    RED.nodes.registerType('CDLSPINNINGTOP', CDLSPINNINGTOP);

    // Stalled Pattern: CDLSTALLEDPATTERN
    function CDLSTALLEDPATTERN(config) {
        RED.nodes.createNode(this, config);

        var node = this;

        node.on('input', function(msg) {
            talib.execute({
                name: "CDLSTALLEDPATTERN",
                startIdx: 0,
                endIdx: msg.payload.close.length - 1,
                open: msg.payload.open,
                high: msg.payload.high,
                low: msg.payload.low,
                close: msg.payload.close
            }, function (err, result) {
                if (err)
                    node.error("CDLSTALLEDPATTERN Error: " + err.error);

                msg.payload = result;

                node.send(msg);
            });
        });
    }

    RED.nodes.registerType('CDLSTALLEDPATTERN', CDLSTALLEDPATTERN);

    // Stick Sandwich: CDLSTICKSANDWICH
    function CDLSTICKSANDWICH(config) {
        RED.nodes.createNode(this, config);

        var node = this;

        node.on('input', function(msg) {
            talib.execute({
                name: "CDLSTICKSANDWICH",
                startIdx: 0,
                endIdx: msg.payload.close.length - 1,
                open: msg.payload.open,
                high: msg.payload.high,
                low: msg.payload.low,
                close: msg.payload.close
            }, function (err, result) {
                if (err)
                    node.error("CDLSTICKSANDWICH Error: " + err.error);

                msg.payload = result;

                node.send(msg);
            });
        });
    }

    RED.nodes.registerType('CDLSTICKSANDWICH', CDLSTICKSANDWICH);

    // Takuri (Dragonfly Doji with very long lower shadow): CDLTAKURI
    function CDLTAKURI(config) {
        RED.nodes.createNode(this, config);

        var node = this;

        node.on('input', function(msg) {
            talib.execute({
                name: "CDLTAKURI",
                startIdx: 0,
                endIdx: msg.payload.close.length - 1,
                open: msg.payload.open,
                high: msg.payload.high,
                low: msg.payload.low,
                close: msg.payload.close
            }, function (err, result) {
                if (err)
                    node.error("CDLTAKURI Error: " + err.error);

                msg.payload = result;

                node.send(msg);
            });
        });
    }

    RED.nodes.registerType('CDLTAKURI', CDLTAKURI);

    // Tasuki Gap: CDLTASUKIGAP
    function CDLTASUKIGAP(config) {
        RED.nodes.createNode(this, config);

        var node = this;

        node.on('input', function(msg) {
            talib.execute({
                name: "CDLTASUKIGAP",
                startIdx: 0,
                endIdx: msg.payload.close.length - 1,
                open: msg.payload.open,
                high: msg.payload.high,
                low: msg.payload.low,
                close: msg.payload.close
            }, function (err, result) {
                if (err)
                    node.error("CDLTASUKIGAP Error: " + err.error);

                msg.payload = result;

                node.send(msg);
            });
        });
    }

    RED.nodes.registerType('CDLTASUKIGAP', CDLTASUKIGAP);

    // Thrusting Pattern: CDLTHRUSTING
    function CDLTHRUSTING(config) {
        RED.nodes.createNode(this, config);

        var node = this;

        node.on('input', function(msg) {
            talib.execute({
                name: "CDLTHRUSTING",
                startIdx: 0,
                endIdx: msg.payload.close.length - 1,
                open: msg.payload.open,
                high: msg.payload.high,
                low: msg.payload.low,
                close: msg.payload.close
            }, function (err, result) {
                if (err)
                    node.error("CDLTHRUSTING Error: " + err.error);

                msg.payload = result;

                node.send(msg);
            });
        });
    }

    RED.nodes.registerType('CDLTHRUSTING', CDLTHRUSTING);

    // Tristar Pattern: CDLTRISTAR
    function CDLTRISTAR(config) {
        RED.nodes.createNode(this, config);

        var node = this;

        node.on('input', function(msg) {
            talib.execute({
                name: "CDLTRISTAR",
                startIdx: 0,
                endIdx: msg.payload.close.length - 1,
                open: msg.payload.open,
                high: msg.payload.high,
                low: msg.payload.low,
                close: msg.payload.close
            }, function (err, result) {
                if (err)
                    node.error("CDLTRISTAR Error: " + err.error);

                msg.payload = result;

                node.send(msg);
            });
        });
    }

    RED.nodes.registerType('CDLTRISTAR', CDLTRISTAR);

    // Unique 3 River: CDLUNIQUE3RIVER
    function CDLUNIQUE3RIVER(config) {
        RED.nodes.createNode(this, config);

        var node = this;

        node.on('input', function(msg) {
            talib.execute({
                name: "CDLUNIQUE3RIVER",
                startIdx: 0,
                endIdx: msg.payload.close.length - 1,
                open: msg.payload.open,
                high: msg.payload.high,
                low: msg.payload.low,
                close: msg.payload.close
            }, function (err, result) {
                if (err)
                    node.error("CDLUNIQUE3RIVER Error: " + err.error);

                msg.payload = result;

                node.send(msg);
            });
        });
    }

    RED.nodes.registerType('CDLUNIQUE3RIVER', CDLUNIQUE3RIVER);

    // Upside Gap Two Crows: CDLUPSIDEGAP2CROWS
    function CDLUPSIDEGAP2CROWS(config) {
        RED.nodes.createNode(this, config);

        var node = this;

        node.on('input', function(msg) {
            talib.execute({
                name: "CDLUPSIDEGAP2CROWS",
                startIdx: 0,
                endIdx: msg.payload.close.length - 1,
                open: msg.payload.open,
                high: msg.payload.high,
                low: msg.payload.low,
                close: msg.payload.close
            }, function (err, result) {
                if (err)
                    node.error("CDLUPSIDEGAP2CROWS Error: " + err.error);

                msg.payload = result;

                node.send(msg);
            });
        });
    }

    RED.nodes.registerType('CDLUPSIDEGAP2CROWS', CDLUPSIDEGAP2CROWS);

    // Upside/Downside Gap Three Methods: CDLXSIDEGAP3METHODS
    function CDLXSIDEGAP3METHODS(config) {
        RED.nodes.createNode(this, config);

        var node = this;

        node.on('input', function(msg) {
            talib.execute({
                name: "CDLXSIDEGAP3METHODS",
                startIdx: 0,
                endIdx: msg.payload.close.length - 1,
                open: msg.payload.open,
                high: msg.payload.high,
                low: msg.payload.low,
                close: msg.payload.close
            }, function (err, result) {
                if (err)
                    node.error("CDLXSIDEGAP3METHODS Error: " + err.error);

                msg.payload = result;

                node.send(msg);
            });
        });
    }

    RED.nodes.registerType('CDLXSIDEGAP3METHODS', CDLXSIDEGAP3METHODS);

    // Chande Momentum Oscillator: CMO
    function CMO(config) {
        RED.nodes.createNode(this, config);

        var node = this;

        node.on('input', function(msg) {
            talib.execute({
                name: "CMO",
                startIdx: 0,
                endIdx: msg.payload.close.length - 1,
                inReal: msg.payload.close,
                optInTimePeriod: config.optInTimePeriod
            }, function (err, result) {
                if (err)
                    node.error("CMO Error: " + err.error);

                msg.payload = result;

                node.send(msg);
            });
        });
    }

    RED.nodes.registerType('CMO', CMO);

    // Pearson's Correlation Coefficient (r): CORREL
    function CORREL(config) {
        RED.nodes.createNode(this, config);

        var node = this;

        node.on('input', function(msg) {
            talib.execute({
                name: "CORREL",
                startIdx: 0,
                endIdx: msg.payload.close.length - 1,
                inReal0: msg.payload.open,
                inReal1: msg.payload.close,
                optInTimePeriod: config.optInTimePeriod
            }, function (err, result) {
                if (err)
                    node.error("CORREL Error: " + err.error);

                msg.payload = result;

                node.send(msg);
            });
        });
    }

    RED.nodes.registerType('CORREL', CORREL);

    // Double Exponential Moving Average: DEMA
    function DEMA(config) {
        RED.nodes.createNode(this, config);

        var node = this;

        node.on('input', function(msg) {
            talib.execute({
                name: "DEMA",
                startIdx: 0,
                endIdx: msg.payload.close.length - 1,
                inReal: msg.payload.close,
                optInTimePeriod: config.optInTimePeriod
            }, function (err, result) {
                if (err)
                    node.error("DEMA Error: " + err.error);

                msg.payload = result;

                node.send(msg);
            });
        });
    }

    RED.nodes.registerType('DEMA', DEMA);

    // Directional Movement Index: DX
    function DX(config) {
        RED.nodes.createNode(this, config);

        var node = this;

        node.on('input', function(msg) {
            talib.execute({
                name: "DX",
                startIdx: 0,
                endIdx: msg.payload.close.length - 1,
                high: msg.payload.high,
                low: msg.payload.low,
                close: msg.payload.close,
                optInTimePeriod: config.optInTimePeriod
            }, function (err, result) {
                if (err)
                    node.error("DX Error: " + err.error);

                msg.payload = result;

                node.send(msg);
            });
        });
    }

    RED.nodes.registerType('DX', DX);

    // Exponential Moving Average: EMA
    function EMA(config) {
        RED.nodes.createNode(this, config);

        var node = this;

        node.on('input', function(msg) {
            talib.execute({
                name: "EMA",
                startIdx: 0,
                endIdx: msg.payload.close.length - 1,
                inReal: msg.payload.close,
                optInTimePeriod: config.optInTimePeriod
            }, function (err, result) {
                if (err)
                    node.error("EMA Error: " + err.error);

                msg.payload = result;

                node.send(msg);
            });
        });
    }

    RED.nodes.registerType('EMA', EMA);

    // Hilbert Transform - Dominant Cycle Period: HT_DCPERIOD
    function HT_DCPERIOD(config) {
        RED.nodes.createNode(this, config);

        var node = this;

        node.on('input', function(msg) {
            talib.execute({
                name: "HT_DCPERIOD",
                startIdx: 0,
                endIdx: msg.payload.close.length - 1,
                inReal: msg.payload.close
            }, function (err, result) {
                if (err)
                    node.error("HT_DCPERIOD Error: " + err.error);

                msg.payload = result;

                node.send(msg);
            });
        });
    }

    RED.nodes.registerType('HT_DCPERIOD', HT_DCPERIOD);

    // Hilbert Transform - Dominant Cycle Phase: HT_DCPHASE
    function HT_DCPHASE(config) {
        RED.nodes.createNode(this, config);

        var node = this;

        node.on('input', function(msg) {
            talib.execute({
                name: "HT_DCPHASE",
                startIdx: 0,
                endIdx: msg.payload.close.length - 1,
                inReal: msg.payload.close
            }, function (err, result) {
                if (err)
                    node.error("HT_DCPHASE Error: " + err.error);

                msg.payload = result;

                node.send(msg);
            });
        });
    }

    RED.nodes.registerType('HT_DCPHASE', HT_DCPHASE);

    // Hilbert Transform - Phasor Components: HT_PHASOR
    function HT_PHASOR(config) {
        RED.nodes.createNode(this, config);

        var node = this;

        node.on('input', function(msg) {
            talib.execute({
                name: "HT_PHASOR",
                startIdx: 0,
                endIdx: msg.payload.close.length - 1,
                inReal: msg.payload.close
            }, function (err, result) {
                if (err)
                    node.error("HT_PHASOR Error: " + err.error);

                msg.payload = result;

                node.send(msg);
            });
        });
    }

    RED.nodes.registerType('HT_PHASOR', HT_PHASOR);

    // Hilbert Transform - SineWave: HT_SINE
    function HT_SINE(config) {
        RED.nodes.createNode(this, config);

        var node = this;

        node.on('input', function(msg) {
            talib.execute({
                name: "HT_SINE",
                startIdx: 0,
                endIdx: msg.payload.close.length - 1,
                inReal: msg.payload.close
            }, function (err, result) {
                if (err)
                    node.error("HT_SINE Error: " + err.error);

                msg.payload = result;

                node.send(msg);
            });
        });
    }

    RED.nodes.registerType('HT_SINE', HT_SINE);

    // Hilbert Transform - Instantaneous Trendline: HT_TRENDLINE
    function HT_TRENDLINE(config) {
        RED.nodes.createNode(this, config);

        var node = this;

        node.on('input', function(msg) {
            talib.execute({
                name: "HT_TRENDLINE",
                startIdx: 0,
                endIdx: msg.payload.close.length - 1,
                inReal: msg.payload.close
            }, function (err, result) {
                if (err)
                    node.error("HT_TRENDLINE Error: " + err.error);

                msg.payload = result;

                node.send(msg);
            });
        });
    }

    RED.nodes.registerType('HT_TRENDLINE', HT_TRENDLINE);

    // Hilbert Transform - Trend vs Cycle Mode: HT_TRENDMODE
    function HT_TRENDMODE(config) {
        RED.nodes.createNode(this, config);

        var node = this;

        node.on('input', function(msg) {
            talib.execute({
                name: "HT_TRENDMODE",
                startIdx: 0,
                endIdx: msg.payload.close.length - 1,
                inReal: msg.payload.close
            }, function (err, result) {
                if (err)
                    node.error("HT_TRENDMODE Error: " + err.error);

                msg.payload = result;

                node.send(msg);
            });
        });
    }

    RED.nodes.registerType('HT_TRENDMODE', HT_TRENDMODE);

    // Kaufman Adaptive Moving Average: KAMA
    function KAMA(config) {
        RED.nodes.createNode(this, config);

        var node = this;

        node.on('input', function(msg) {
            talib.execute({
                name: "KAMA",
                startIdx: 0,
                endIdx: msg.payload.close.length - 1,
                inReal: msg.payload.close,
                optInTimePeriod: config.optInTimePeriod
            }, function (err, result) {
                if (err)
                    node.error("KAMA Error: " + err.error);

                msg.payload = result;

                node.send(msg);
            });
        });
    }

    RED.nodes.registerType('KAMA', KAMA);

    // Linear Regression: LINEARREG
    function LINEARREG(config) {
        RED.nodes.createNode(this, config);

        var node = this;

        node.on('input', function(msg) {
            talib.execute({
                name: "LINEARREG",
                startIdx: 0,
                endIdx: msg.payload.close.length - 1,
                inReal: msg.payload.close,
                optInTimePeriod: config.optInTimePeriod
            }, function (err, result) {
                if (err)
                    node.error("LINEARREG Error: " + err.error);

                msg.payload = result;

                node.send(msg);
            });
        });
    }

    RED.nodes.registerType('LINEARREG', LINEARREG);

    // Linear Regression: LINEARREG_ANGLE
    function LINEARREG_ANGLE(config) {
        RED.nodes.createNode(this, config);

        var node = this;

        node.on('input', function(msg) {
            talib.execute({
                name: "LINEARREG_ANGLE",
                startIdx: 0,
                endIdx: msg.payload.close.length - 1,
                inReal: msg.payload.close,
                optInTimePeriod: config.optInTimePeriod
            }, function (err, result) {
                if (err)
                    node.error("LINEARREG_ANGLE Error: " + err.error);

                msg.payload = result;

                node.send(msg);
            });
        });
    }

    RED.nodes.registerType('LINEARREG_ANGLE', LINEARREG_ANGLE);

    // Linear Regression: LINEARREG_INTERCEPT
    function LINEARREG_INTERCEPT(config) {
        RED.nodes.createNode(this, config);

        var node = this;

        node.on('input', function(msg) {
            talib.execute({
                name: "LINEARREG_INTERCEPT",
                startIdx: 0,
                endIdx: msg.payload.close.length - 1,
                inReal: msg.payload.close,
                optInTimePeriod: config.optInTimePeriod
            }, function (err, result) {
                if (err)
                    node.error("LINEARREG_INTERCEPT Error: " + err.error);

                msg.payload = result;

                node.send(msg);
            });
        });
    }

    RED.nodes.registerType('LINEARREG_INTERCEPT', LINEARREG_INTERCEPT);

    // Linear Regression: LINEARREG_SLOPE
    function LINEARREG_SLOPE(config) {
        RED.nodes.createNode(this, config);

        var node = this;

        node.on('input', function(msg) {
            talib.execute({
                name: "LINEARREG_SLOPE",
                startIdx: 0,
                endIdx: msg.payload.close.length - 1,
                inReal: msg.payload.close,
                optInTimePeriod: config.optInTimePeriod
            }, function (err, result) {
                if (err)
                    node.error("LINEARREG_SLOPE Error: " + err.error);

                msg.payload = result;

                node.send(msg);
            });
        });
    }

    RED.nodes.registerType('LINEARREG_SLOPE', LINEARREG_SLOPE);

    // Moving averager: MA
    function MA(config) {
        RED.nodes.createNode(this, config);

        var node = this;

        node.on('input', function(msg) {
            talib.execute({
                name: "MA",
                startIdx: 0,
                endIdx: msg.payload.close.length - 1,
                inReal: msg.payload.close,
                optInTimePeriod: config.optInTimePeriod,
                optInMAType: config.optInMAType
            }, function (err, result) {
                if (err)
                    node.error("MA Error: " + err.error);

                msg.payload = result;

                node.send(msg);
            });
        });
    }

    RED.nodes.registerType('MA', MA);

    // Moving Average Convergence/Divergence: MACD
    function MACD(config) {
        RED.nodes.createNode(this, config);

        var node = this;

        node.on('input', function(msg) {
            talib.execute({
                name: "MACD",
                startIdx: 0,
                endIdx: msg.payload.close.length - 1,
                inReal: msg.payload.close,
                optInFastPeriod: config.optInFastPeriod,
                optInSlowPeriod: config.optInSlowPeriod,
                optInSignalPeriod: config.optInSignalPeriod
            }, function (err, result) {
                if (err)
                    node.error("MACD Error: " + err.error);

                msg.payload = result;

                node.send(msg);
            });
        });
    }

    RED.nodes.registerType('MACD', MACD);

    // MACD with controllable MA type: MACDEXT
    function MACDEXT(config) {
        RED.nodes.createNode(this, config);

        var node = this;

        node.on('input', function(msg) {
            talib.execute({
                name: "MACDEXT",
                startIdx: 0,
                endIdx: msg.payload.close.length - 1,
                inReal: msg.payload.close,
                optInFastPeriod: config.optInFastPeriod,
                optInFastMAType: config.optInFastMAType,
                optInSlowPeriod: config.optInSlowPeriod,
                optInSlowMAType: config.optInSlowMAType,
                optInSignalPeriod: config.optInSignalPeriod,
                optInSignalMAType: config.optInSignalMAType
            }, function (err, result) {
                if (err)
                    node.error("MACDEXT Error: " + err.error);

                msg.payload = result;

                node.send(result);
            });
        });
    }

    RED.nodes.registerType('MACDEXT', MACDEXT);

    // Moving Average Convergence/Divergence Fix 12/26: MACDFIX
    function MACDFIX(config) {
        RED.nodes.createNode(this, config);

        var node = this;

        node.on('input', function(msg) {
            talib.execute({
                name: "MACDFIX",
                startIdx: 0,
                endIdx: msg.payload.close.length - 1,
                inReal: msg.payload.close,
                optInSignalPeriod: config.optInSignalPeriod
            }, function (err, result) {
                if (err)
                    node.error("MACDFIX Error: " + err.error);

                msg.payload = result;

                node.send(msg);
            });
        });
    }

    RED.nodes.registerType('MACDFIX', MACDFIX);

    // MESA Adaptive Moving Average: MAMA
    function MAMA(config) {
        RED.nodes.createNode(this, config);

        var node = this;

        node.on('input', function(msg) {
            talib.execute({
                name: "MAMA",
                startIdx: 0,
                endIdx: msg.payload.close.length - 1,
                inReal: msg.payload.close,
                optInFastLimit: config.optInFastLimit,
                optInSlowLimit: config.optInSlowLimit
            }, function (err, result) {
                if (err)
                    node.error("MAMA Error: " + err.error);

                msg.payload = result;

                node.send(msg);
            });
        });
    }

    RED.nodes.registerType('MAMA', MAMA);

    // Highest value over a specified period: MAX
    function MAX(config) {
        RED.nodes.createNode(this, config);

        var node = this;

        node.on('input', function(msg) {
            talib.execute({
                name: "MAX",
                startIdx: 0,
                endIdx: msg.payload.close.length - 1,
                inReal: msg.payload.close,
                optInTimePeriod: config.optInTimePeriod
            }, function (err, result) {
                if (err)
                    node.error("MAX Error: " + err.error);

                msg.payload = result;

                node.send(msg);
            });
        });
    }

    RED.nodes.registerType('MAX', MAX);

    // Index of highest value over a specified period: MAXINDEX
    function MAXINDEX(config) {
        RED.nodes.createNode(this, config);

        var node = this;

        node.on('input', function(msg) {
            talib.execute({
                name: "MAXINDEX",
                startIdx: 0,
                endIdx: msg.payload.close.length - 1,
                inReal: msg.payload.close,
                optInTimePeriod: config.optInTimePeriod
            }, function (err, result) {
                if (err)
                    node.error("MAXINDEX Error: " + err.error);

                msg.payload = result;

                node.send(msg);
            });
        });
    }

    RED.nodes.registerType('MAXINDEX', MAXINDEX);

    // Median Price: MEDPRICE
    function MEDPRICE(config) {
        RED.nodes.createNode(this, config);

        var node = this;

        node.on('input', function(msg) {
            talib.execute({
                name: "MEDPRICE",
                startIdx: 0,
                endIdx: msg.payload.close.length - 1,
                high: msg.payload.high,
                low: msg.payload.low
            }, function (err, result) {
                if (err)
                    node.error("MEDPRICE Error: " + err.error);

                msg.payload = result;

                node.send(msg);
            });
        });
    }

    RED.nodes.registerType('MEDPRICE', MEDPRICE);

    // Money Flow Index: MFI
    function MFI(config) {
        RED.nodes.createNode(this, config);

        var node = this;

        node.on('input', function(msg) {
            talib.execute({
                name: "MFI",
                startIdx: 0,
                endIdx: msg.payload.close.length - 1,
                inReal: msg.payload.close,
                high: msg.payload.high,
                low: msg.payload.low,
                close: msg.payload.close,
                volume: msg.payload.volume,
                optInTimePeriod: config.optInTimePeriod
            }, function (err, result) {
                if (err)
                    node.error("MFI Error: " + err.error);

                msg.payload = result;

                node.send(msg);
            });
        });
    }

    RED.nodes.registerType('MFI', MFI);

    // MidPoint over period: MIDPOINT
    function MIDPOINT(config) {
        RED.nodes.createNode(this, config);

        var node = this;

        node.on('input', function(msg) {
            talib.execute({
                name: "MIDPOINT",
                startIdx: 0,
                endIdx: msg.payload.close.length - 1,
                inReal: msg.payload.close,
                optInTimePeriod: config.optInTimePeriod
            }, function (err, result) {
                if (err)
                    node.error("MIDPOINT Error: " + err.error);

                msg.payload = result;

                node.send(msg);
            });
        });
    }

    RED.nodes.registerType('MIDPOINT', MIDPOINT);

    // Midpoint Price over period: MIDPRICE
    function MIDPRICE(config) {
        RED.nodes.createNode(this, config);

        var node = this;

        node.on('input', function(msg) {
            talib.execute({
                name: "MIDPRICE",
                startIdx: 0,
                endIdx: msg.payload.close.length - 1,
                inReal: msg.payload.close,
                high: msg.payload.high,
                low: msg.payload.low,
                optInTimePeriod: config.optInTimePeriod
            }, function (err, result) {
                if (err)
                    node.error("MIDPRICE Error: " + err.error);

                msg.payload = result;

                node.send(msg);
            });
        });
    }

    RED.nodes.registerType('MIDPRICE', MIDPRICE);

    // Money Flow Index: MIN
    function MIN(config) {
        RED.nodes.createNode(this, config);

        var node = this;

        node.on('input', function(msg) {
            talib.execute({
                name: "MIN",
                startIdx: 0,
                endIdx: msg.payload.close.length - 1,
                inReal: msg.payload.close,
                optInTimePeriod: config.optInTimePeriod
            }, function (err, result) {
                if (err)
                    node.error("MIN Error: " + err.error);

                msg.payload = result;

                node.send(msg);
            });
        });
    }

    RED.nodes.registerType('MIN', MIN);

    // Index of lowest value over a specified period: MININDEX
    function MININDEX(config) {
        RED.nodes.createNode(this, config);

        var node = this;

        node.on('input', function(msg) {
            talib.execute({
                name: "MININDEX",
                startIdx: 0,
                endIdx: msg.payload.close.length - 1,
                inReal: msg.payload.close,
                optInTimePeriod: config.optInTimePeriod
            }, function (err, result) {
                if (err)
                    node.error("MININDEX Error: " + err.error);

                msg.payload = result;

                node.send(msg);
            });
        });
    }

    RED.nodes.registerType('MININDEX', MININDEX);

    // Lowest and highest values over a specified period: MINMAX
    function MINMAX(config) {
        RED.nodes.createNode(this, config);

        var node = this;

        node.on('input', function(msg) {
            talib.execute({
                name: "MINMAX",
                startIdx: 0,
                endIdx: msg.payload.close.length - 1,
                inReal: msg.payload.close,
                optInTimePeriod: config.optInTimePeriod
            }, function (err, result) {
                if (err)
                    node.error("MINMAX Error: " + err.error);

                msg.payload = result;

                node.send(msg);
            });
        });
    }

    RED.nodes.registerType('MINMAX', MINMAX);

    // Indexes of lowest and highest values over a specified period: MINMAXINDEX
    function MINMAXINDEX(config) {
        RED.nodes.createNode(this, config);

        var node = this;

        node.on('input', function(msg) {
            talib.execute({
                name: "MINMAXINDEX",
                startIdx: 0,
                endIdx: msg.payload.close.length - 1,
                inReal: msg.payload.close,
                optInTimePeriod: config.optInTimePeriod
            }, function (err, result) {
                if (err)
                    node.error("MINMAXINDEX Error: " + err.error);

                msg.payload = result;

                node.send(msg);
            });
        });
    }

    RED.nodes.registerType('MINMAXINDEX', MINMAXINDEX);

    // Minus Directional Indicator: MINUS_DI
    function MINUS_DI(config) {
        RED.nodes.createNode(this, config);

        var node = this;

        node.on('input', function(msg) {
            talib.execute({
                name: "MINUS_DI",
                startIdx: 0,
                endIdx: msg.payload.close.length - 1,
                inReal: msg.payload.close,
                high: msg.payload.high,
                low: msg.payload.low,
                close: msg.payload.close,
                optInTimePeriod: config.optInTimePeriod
            }, function (err, result) {
                if (err)
                    node.error("MINUS_DI Error: " + err.error);

                msg.payload = result;

                node.send(msg);
            });
        });
    }

    RED.nodes.registerType('MINUS_DI', MINUS_DI);

    // Minus Directional Movement: MINUS_DM
    function MINUS_DM(config) {
        RED.nodes.createNode(this, config);

        var node = this;

        node.on('input', function(msg) {
            talib.execute({
                name: "MINUS_DM",
                startIdx: 0,
                endIdx: msg.payload.close.length - 1,
                inReal: msg.payload.close,
                high: msg.payload.high,
                low: msg.payload.low,
                optInTimePeriod: config.optInTimePeriod
            }, function (err, result) {
                if (err)
                    node.error("MINUS_DI Error: " + err.error);

                msg.payload = result;

                node.send(msg);
            });
        });
    }

    RED.nodes.registerType('MINUS_DM', MINUS_DM);

    // Momentum: MOM
    function MOM(config) {
        RED.nodes.createNode(this, config);

        var node = this;

        node.on('input', function(msg) {
            talib.execute({
                name: "MOM",
                startIdx: 0,
                endIdx: msg.payload.close.length - 1,
                inReal: msg.payload.close,
                optInTimePeriod: config.optInTimePeriod
            }, function (err, result) {
                if (err)
                    node.error("MOM Error: " + err.error);

                msg.payload = result;

                node.send(msg);
            });
        });
    }

    RED.nodes.registerType('MOM', MOM);

    // Normalized Average True Range: NATR
    function NATR(config) {
        RED.nodes.createNode(this, config);

        var node = this;

        node.on('input', function(msg) {
            talib.execute({
                name: "NATR",
                startIdx: 0,
                endIdx: msg.payload.close.length - 1,
                inReal: msg.payload.close,
                high: msg.payload.high,
                low: msg.payload.low,
                close: msg.payload.close,
                optInTimePeriod: config.optInTimePeriod
            }, function (err, result) {
                if (err)
                    node.error("NATR Error: " + err.error);

                msg.payload = result;

                node.send(msg);
            });
        });
    }

    RED.nodes.registerType('NATR', NATR);

    // On Balance Volume: OBV
    function OBV(config) {
        RED.nodes.createNode(this, config);

        var node = this;

        node.on('input', function(msg) {
            talib.execute({
                name: "OBV",
                startIdx: 0,
                endIdx: msg.payload.close.length - 1,
                inReal: msg.payload.close,
                volume: msg.payload.volume
            }, function (err, result) {
                if (err)
                    node.error("OBV Error: " + err.error);

                msg.payload = result;

                node.send(msg);
            });
        });
    }

    RED.nodes.registerType('OBV', OBV);

    // Plus Directional Indicator: PLUS_DI
    function PLUS_DI(config) {
        RED.nodes.createNode(this, config);

        var node = this;

        node.on('input', function(msg) {
            talib.execute({
                name: "PLUS_DI",
                startIdx: 0,
                endIdx: msg.payload.close.length - 1,
                inReal: msg.payload.close,
                high: msg.payload.high,
                low: msg.payload.low,
                close: msg.payload.close,
                optInTimePeriod: config.optInTimePeriod
            }, function (err, result) {
                if (err)
                    node.error("PLUS_DI Error: " + err.error);

                msg.payload = result;

                node.send(msg);
            });
        });
    }

    RED.nodes.registerType('PLUS_DI', PLUS_DI);

    // Plus Directional Movement: PLUS_DM
    function PLUS_DM(config) {
        RED.nodes.createNode(this, config);

        var node = this;

        node.on('input', function(msg) {
            talib.execute({
                name: "PLUS_DM",
                startIdx: 0,
                endIdx: msg.payload.close.length - 1,
                inReal: msg.payload.close,
                high: msg.payload.high,
                low: msg.payload.low,
                optInTimePeriod: config.optInTimePeriod
            }, function (err, result) {
                if (err)
                    node.error("PLUS_DM Error: " + err.error);

                msg.payload = result;

                node.send(msg);
            });
        });
    }

    RED.nodes.registerType('PLUS_DM', PLUS_DM);

    // Percentage Price Oscillator: PPO
    function PPO(config) {
        RED.nodes.createNode(this, config);

        var node = this;

        node.on('input', function(msg) {
            talib.execute({
                name: "PPO",
                startIdx: 0,
                endIdx: msg.payload.close.length - 1,
                inReal: msg.payload.close,
                optInFastPeriod: config.optInFastPeriod,
                optInSlowPeriod: config.optInSlowPeriod,
                optInMAType: config.optInMAType
            }, function (err, result) {
                if (err)
                    node.error("ADOSC Error: " + err.error);

                msg.payload = result;

                node.send(msg);
            });
        });
    }

    RED.nodes.registerType('PPO', PPO);

    // Rate of change : ((price/prevPrice)-1)*100: ROC
    function ROC(config) {
        RED.nodes.createNode(this, config);

        var node = this;

        node.on('input', function(msg) {
            talib.execute({
                name: "ROC",
                startIdx: 0,
                endIdx: msg.payload.close.length - 1,
                inReal: msg.payload.close,
                optInTimePeriod: config.optInTimePeriod
            }, function (err, result) {
                if (err)
                    node.error("ROC Error: " + err.error);

                msg.payload = result;

                node.send(msg);
            });
        });
    }

    RED.nodes.registerType('ROC', ROC);

    // Rate of change Percentage: (price-prevPrice)/prevPrice: ROCP
    function ROCP(config) {
        RED.nodes.createNode(this, config);

        var node = this;

        node.on('input', function(msg) {
            talib.execute({
                name: "ROCP",
                startIdx: 0,
                endIdx: msg.payload.close.length - 1,
                inReal: msg.payload.close,
                optInTimePeriod: config.optInTimePeriod
            }, function (err, result) {
                if (err)
                    node.error("ROCP Error: " + err.error);

                msg.payload = result;

                node.send(msg);
            });
        });
    }

    RED.nodes.registerType('ROCP', ROCP);

    // Rate of change ratio: (price/prevPrice): ROCR
    function ROCR(config) {
        RED.nodes.createNode(this, config);

        var node = this;

        node.on('input', function(msg) {
            talib.execute({
                name: "ROCR",
                startIdx: 0,
                endIdx: msg.payload.close.length - 1,
                inReal: msg.payload.close,
                optInTimePeriod: config.optInTimePeriod
            }, function (err, result) {
                if (err)
                    node.error("ROCR Error: " + err.error);

                msg.payload = result;

                node.send(msg);
            })
        });
    }

    RED.nodes.registerType('ROCR', ROCR);

    // Rate of change ratio 100 scale: (price/prevPrice)*100: ROCR100
    function ROCR100(config) {
        RED.nodes.createNode(this, config);

        var node = this;

        node.on('input', function(msg) {
            talib.execute({
                name: "ROCR100",
                startIdx: 0,
                endIdx: msg.payload.close.length - 1,
                inReal: msg.payload.close,
                optInTimePeriod: config.optInTimePeriod
            }, function (err, result) {
                if (err)
                    node.error("ROCR100 Error: " + err.error);

                msg.payload = result;

                node.send(msg);
            });
        });
    }

    RED.nodes.registerType('ROCR100', ROCR100);

    // Relative Strength Index: RSI
    function RSI(config) {
        RED.nodes.createNode(this, config);

        var node = this;

        node.on('input', function(msg) {
            talib.execute({
                name: "RSI",
                startIdx: 0,
                endIdx: msg.payload.close.length - 1,
                inReal: msg.payload.close,
                optInTimePeriod: config.optInTimePeriod
            }, function (err, result) {
                if (err)
                    node.error("RSI Error: " + err.error);

                msg.payload = result;

                node.send(msg);
            });
        });
    }

    RED.nodes.registerType('RSI', RSI);

    // Parabolic SAR: SAR
    function SAR(config) {
        RED.nodes.createNode(this, config);

        var node = this;

        node.on('input', function(msg) {
            talib.execute({
                name: "SAR",
                startIdx: 0,
                endIdx: msg.payload.close.length - 1,
                inReal: msg.payload.close,
                high: msg.payload.high,
                low: msg.payload.low,
                optInAcceleration: config.optInAcceleration,
                optInMaximum: config.optInMaximum
            }, function (err, result) {
                if (err)
                    node.error("SAR Error: " + err.error);

                msg.payload = result;

                node.send(msg);
            });
        });
    }

    RED.nodes.registerType('SAR', SAR);

    // Parabolic SAR - Extended: SAREXT
    function SAREXT(config) {
        RED.nodes.createNode(this, config);

        var node = this;

        node.on('input', function(msg) {
            talib.execute({
                name: "SAREXT",
                startIdx: 0,
                endIdx: msg.payload.close.length - 1,
                inReal: msg.payload.close,
                high: msg.payload.high,
                low: msg.payload.low,
                optInStartValue: config.optInStartValue,
                optInOffsetOnReverse: config.optInOffsetOnReverse,
                optInAccelerationInitLong: config.optInAccelerationInitLong,
                optInAccelerationLong: config.optInAccelerationLong,
                optInAccelerationMaxLong: config.optInAccelerationMaxLong,
                optInAccelerationInitShort: config.optInAccelerationInitShort,
                optInAccelerationShort: config.optInAccelerationShort,
                optInAccelerationMaxShort: config.optInAccelerationMaxShort,
            }, function (err, result) {
                if (err)
                    node.error("SAREXT Error: " + err.error);

                msg.payload = result;

                node.send(msg);
            });
        });
    }

    RED.nodes.registerType('SAREXT', SAREXT);

    // Simple Moving Average: SMA
    function SMA(config) {
        RED.nodes.createNode(this, config);

        var node = this;

        node.on('input', function(msg) {
            talib.execute({
                name: "SMA",
                startIdx: 0,
                endIdx: msg.payload.close.length - 1,
                inReal: msg.payload.close,
                optInTimePeriod: config.optInTimePeriod
            }, function (err, result) {
                if (err)
                    node.error("SMA Error: " + err.error);

                msg.payload = result;

                node.send(msg);
            });
        });
    }

    RED.nodes.registerType('SMA', SMA);

    // Standard Deviation: STDDEV
    function STDDEV(config) {
        RED.nodes.createNode(this, config);

        var node = this;

        node.on('input', function(msg) {
            talib.execute({
                name: "STDDEV",
                startIdx: 0,
                endIdx: msg.payload.close.length - 1,
                inReal: msg.payload.close,
                optInTimePeriod: config.optInTimePeriod,
                optInNbDev: config.optInNbDev,
            }, function (err, result) {
                if (err)
                    node.error("STDDEV Error: " + err.error);

                msg.payload = result;

                node.send(msg);
            });
        });
    }

    RED.nodes.registerType('STDDEV', STDDEV);

    // Stochastic: STOCH
    function STOCH(config) {
        RED.nodes.createNode(this, config);

        var node = this;

        node.on('input', function(msg) {
            talib.execute({
                name: "STOCH",
                startIdx: 0,
                endIdx: msg.payload.close.length - 1,
                high: msg.payload.high,
                low: msg.payload.low,
                close: msg.payload.close,
                optInFastK_Period: config.optInFastK_Period,
                optInSlowK_Period: config.optInSlowK_Period,
                optInSlowK_MAType: config.optInSlowK_MAType,
                optInSlowD_Period: config.optInSlowD_Period,
                optInSlowD_MAType: config.optInSlowD_MAType,
            }, function (err, result) {
                if (err)
                    node.error("STOCH Error: " + err.error);

                msg.payload = result;

                node.send(msg);
            });
        });
    }

    RED.nodes.registerType('STOCH', STOCH);

    // Stochastic Fast: STOCHF
    function STOCHF(config) {
        RED.nodes.createNode(this, config);

        var node = this;

        node.on('input', function(msg) {
            talib.execute({
                name: "STOCHF",
                startIdx: 0,
                endIdx: msg.payload.close.length - 1,
                high: msg.payload.high,
                low: msg.payload.low,
                close: msg.payload.close,
                optInFastK_Period: config.optInFastK_Period,
                optInFastD_Period: config.optInFastD_Period,
                optInFastD_MAType: config.optInFastD_MAType,
            }, function (err, result) {
                if (err)
                    node.error("STOCHF Error: " + err.error);

                msg.payload = result;

                node.send(msg);
            });
        });
    }

    RED.nodes.registerType('STOCHF', STOCHF);

    // Stochastic Relative Strength Index: STOCHRSI
    function STOCHRSI(config) {
        RED.nodes.createNode(this, config);

        var node = this;

        node.on('input', function(msg) {
            talib.execute({
                name: "STOCHRSI",
                startIdx: 0,
                endIdx: msg.payload.close.length - 1,
                inReal: msg.payload.close,
                optInTimePeriod: config.optInTimePeriod,
                optInFastK_Period: config.optInFastK_Period,
                optInFastD_Period: config.optInFastD_Period,
                optInFastD_MAType: config.optInFastD_MAType,
            }, function (err, result) {
                if (err)
                    node.error("STOCHRSI Error: " + err.error);

                msg.payload = result;

                node.send(msg);
            });
        });
    }

    RED.nodes.registerType('STOCHRSI', STOCHRSI);

    // Summation: SUM
    function SUM(config) {
        RED.nodes.createNode(this, config);

        var node = this;

        node.on('input', function(msg) {
            talib.execute({
                name: "SUM",
                startIdx: 0,
                endIdx: msg.payload.close.length - 1,
                inReal: msg.payload.close,
                optInTimePeriod: config.optInTimePeriod,
            }, function (err, result) {
                if (err)
                    node.error("SUM Error: " + err.error);

                msg.payload = result;

                node.send(msg);
            });
        });
    }

    RED.nodes.registerType('SUM', SUM);

    // Triple Exponential Moving Average (T3): T3
    function T3(config) {
        RED.nodes.createNode(this, config);

        var node = this;

        node.on('input', function(msg) {
            talib.execute({
                name: "T3",
                startIdx: 0,
                endIdx: msg.payload.close.length - 1,
                inReal: msg.payload.close,
                optInTimePeriod: config.optInTimePeriod,
                optInVFactor: config.optInVFactor,
            }, function (err, result) {
                if (err)
                    node.error("T3 Error: " + err.error);

                msg.payload = result;

                node.send(msg);
            });
        });
    }

    RED.nodes.registerType('T3', T3);

    // Triple Exponential Moving Average: TEMA
    function TEMA(config) {
        RED.nodes.createNode(this, config);

        var node = this;

        node.on('input', function(msg) {
            talib.execute({
                name: "TEMA",
                startIdx: 0,
                endIdx: msg.payload.close.length - 1,
                inReal: msg.payload.close,
                optInTimePeriod: config.optInTimePeriod
            }, function (err, result) {
                if (err)
                    node.error("TEMA Error: " + err.error);

                msg.payload = result;

                node.send(msg);
            });
        });
    }

    RED.nodes.registerType('TEMA', TEMA);

    // True Range: TRANGE
    function TRANGE(config) {
        RED.nodes.createNode(this, config);

        var node = this;

        node.on('input', function(msg) {
            talib.execute({
                name: "TRANGE",
                startIdx: 0,
                endIdx: msg.payload.close.length - 1,
                high: msg.payload.high,
                low: msg.payload.low,
                close: msg.payload.close
            }, function (err, result) {
                if (err)
                    node.error("TRANGE Error: " + err.error);

                msg.payload = result;

                node.send(msg);
            });
        });
    }

    RED.nodes.registerType('TRANGE', TRANGE);

    // 1-day Rate-Of-Change (ROC) of a Triple Smooth EMA: TRIX
    function TRIX(config) {
        RED.nodes.createNode(this, config);

        var node = this;

        node.on('input', function(msg) {
            talib.execute({
                name: "TRIX",
                startIdx: 0,
                endIdx: msg.payload.close.length - 1,
                inReal: msg.payload.close,
                optInTimePeriod: config.optInTimePeriod
            }, function (err, result) {
                if (err)
                    node.error("TRIX Error: " + err.error);

                msg.payload = result;

                node.send(msg);
            });
        });
    }

    RED.nodes.registerType('TRIX', TRIX);

    // Time Series Forecast: TSF
    function TSF(config) {
        RED.nodes.createNode(this, config);

        var node = this;

        node.on('input', function(msg) {
            talib.execute({
                name: "TSF",
                startIdx: 0,
                endIdx: msg.payload.close.length - 1,
                inReal: msg.payload.close,
                optInTimePeriod: config.optInTimePeriod
            }, function (err, result) {
                if (err)
                    node.error("TSF Error: " + err.error);

                msg.payload = result;

                node.send(msg);
            });
        });
    }

    RED.nodes.registerType('TSF', TSF);

    // Typical Price: TYPPRICE
    function TYPPRICE(config) {
        RED.nodes.createNode(this, config);

        var node = this;

        node.on('input', function(msg) {
            talib.execute({
                name: "TYPPRICE",
                startIdx: 0,
                endIdx: msg.payload.close.length - 1,
                inReal: msg.payload.close,
                high: msg.payload.high,
                low: msg.payload.low,
                close: msg.payload.close,
            }, function (err, result) {
                if (err)
                    node.error("TYPPRICE Error: " + err.error);

                msg.payload = result;

                node.send(msg);
            });
        });
    }

    RED.nodes.registerType('TYPPRICE', TYPPRICE);

    // Ultimate Oscillator: ULTOSC
    function ULTOSC(config) {
        RED.nodes.createNode(this, config);

        var node = this;

        node.on('input', function(msg) {
            talib.execute({
                name: "ULTOSC",
                startIdx: 0,
                endIdx: msg.payload.close.length - 1,
                high: msg.payload.high,
                low: msg.payload.low,
                close: msg.payload.close,
                optInTimePeriod1: config.optInTimePeriod1,
                optInTimePeriod2: config.optInTimePeriod2,
                optInTimePeriod3: config.optInTimePeriod3
            }, function (err, result) {
                if (err)
                    node.error("ULTOSC Error: " + err.error);

                msg.payload = result;

                node.send(msg);
            });
        });
    }

    RED.nodes.registerType('ULTOSC', ULTOSC);

    // Variance: VAR
    function VAR(config) {
        RED.nodes.createNode(this, config);

        var node = this;

        node.on('input', function(msg) {
            talib.execute({
                name: "VAR",
                startIdx: 0,
                endIdx: msg.payload.close.length - 1,
                inReal: msg.payload.close,
                optInTimePeriod: config.optInTimePeriod,
                optInNbDev: config.optInNbDev
            }, function (err, result) {
                if (err)
                    node.error("VAR Error: " + err.error);

                msg.payload = result;

                node.send(msg);
            });
        });
    }

    RED.nodes.registerType('VAR', VAR);

    // Weighted Close Price: WCLPRICE
    function WCLPRICE(config) {
        RED.nodes.createNode(this, config);

        var node = this;

        node.on('input', function(msg) {
            talib.execute({
                name: "WCLPRICE",
                startIdx: 0,
                endIdx: msg.payload.close.length - 1,
                high: msg.payload.high,
                low: msg.payload.low,
                close: msg.payload.close
            }, function (err, result) {
                if (err)
                    node.error("WCLPRICE Error: " + err.error);

                msg.payload = result;

                node.send(msg);
            });
        });
    }

    RED.nodes.registerType('WCLPRICE', WCLPRICE);

    // Williams' %R: WILLR
    function WILLR(config) {
        RED.nodes.createNode(this, config);

        var node = this;

        node.on('input', function(msg) {
            talib.execute({
                name: "WILLR",
                startIdx: 0,
                endIdx: msg.payload.close.length - 1,
                high: msg.payload.high,
                low: msg.payload.low,
                close: msg.payload.close,
                optInTimePeriod: config.optInTimePeriod
            }, function (err, result) {
                if (err)
                    node.error("WILLR Error: " + err.error);

                msg.payload = result;

                node.send(msg);
            });
        });
    }

    RED.nodes.registerType('WILLR', WILLR);

    // Weighted Moving Average: WMA
    function WMA(config) {
        RED.nodes.createNode(this, config);

        var node = this;

        node.on('input', function(msg) {
            talib.execute({
                name: "WMA",
                startIdx: 0,
                endIdx: msg.payload.close.length - 1,
                inReal: msg.payload.close,
                optInTimePeriod: config.optInTimePeriod
            }, function (err, result) {
                if (err)
                    node.error("WMA Error: " + err.error);

                msg.payload = result;

                node.send(msg);
            });
        });
    }

    RED.nodes.registerType('WMA', WMA);
};