var sketch = {
  "metadata": {
    "width": 1184,
    "height": 666,
    "wsp-version": "4.8.0",
    "wsp-build-number": "1070",
    "wsp-build-stamp": "8126303e6615/20200924134425",
    "exporter-version": "6.00A3007(dev)",
    "exporter-build": "3007(dev)",
    "original-document-name": "L03 Explorer Subtracting Integers.gsp",
    "start-page": "1",
    "authorPreferences": {
      "stylewidget": "none",
      "tracewidget": "none",
      "labelwidget": "none",
      "visibilitywidget": "none",
      "deletewidget": "none",
      "resetbutton": "none",
      "uploadutil": false,
      "downloadutil": false,
      "disablescrolling": false,
      "removeinaccessibleobjects": false
    }
  },
  "resources": {
    "fontList": [
      "\"Papyrus\", sans-serif",
      "\"Comic Sans MS\", sans-serif"
    ]
  },
  "pages": [
    {
      "metadata": {
        "title": "1",
        "id": "1",
        "sketchRect": {
          "top": -30,
          "left": -17,
          "bottom": 636,
          "right": 1167
        }
      },
      "preferences": {
        "units": {
          "length": "cm",
          "angle": "deg"
        },
        "precision": {
          "length": 2,
          "angle": 2,
          "scalar": 2
        },
        "colorableComponents": {
          "Points": {
            "color": "rgb(0,0,252)"
          },
          "Straights": {
            "color": "black"
          },
          "Curves": {
            "color": "black"
          },
          "Interior": {
            "color": "red"
          },
          "Plot": {
            "color": "rgb(0,125,0)"
          },
          "PointLocus": {
            "color": "rgb(121,0,0)"
          },
          "Selection": {
            "color": "rgb(188,0,188)"
          },
          "Background": {
            "color": "rgb(248,248,248)"
          },
          "ActionButton": {
            "color": "rgb(160,160,160)"
          },
          "Axis": {
            "color": "rgb(179,179,179)"
          }
        },
        "text": {
          "mathItalicization": true,
          "textTypes": {
            "Label": {
              "font-family": "\"Comic Sans MS\", sans-serif",
              "font-size": 20,
              "font-weight": "normal"
            },
            "Caption": {
              "font-family": "\"Papyrus\", sans-serif",
              "font-size": 21,
              "font-weight": "bold",
              "text-decoration": "underline",
              "color": "fuchsia"
            },
            "Measurement": {
              "font-family": "\"Papyrus\", sans-serif",
              "font-weight": "bold",
              "color": "rgb(192,133,74)"
            },
            "Action": {
              "label": {
                "font-family": "\"Papyrus\", sans-serif",
                "font-size": 12
              }
            },
            "Table": {
              "font-family": "\"Comic Sans MS\", sans-serif",
              "font-size": 16
            },
            "AxisTicksAndOptionalLabel": {
              "font-family": "\"Comic Sans MS\", sans-serif",
              "font-size": 28
            }
          }
        }
      },
      "objects": {
        "1": {
          "kind": "Expression",
          "genus": "ScalarParameter",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 39,
              "y": 252
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "6",
          "label": "first integer",
          "style": {
            "color": "black",
            "precision": 0,
            "nameOrigin": "namedFromLabel",
            "contenteditable": true
          }
        },
        "2": {
          "kind": "Expression",
          "genus": "ScalarParameter",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 217,
              "y": 252
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "4",
          "label": "second integer",
          "style": {
            "color": "black",
            "precision": 0,
            "nameOrigin": "namedFromLabel",
            "contenteditable": true
          }
        },
        "3": {
          "kind": "Button",
          "genus": "Action",
          "parents": {
            "0": "1",
            "1": "2"
          },
          "geom": {
            "loc": {
              "x": 570,
              "y": 161
            }
          },
          "label": "New Integers",
          "style": {
            "hidden": true,
            "color": "rgb(255,128,0)",
            "label": {
              "font-family": 1,
              "font-size": 10
            }
          },
          "constraint": "ActionButtonAnimate",
          "messages": [
            "New Integers"
          ],
          "animationStates": [
            {
              "rate": 1,
              "timeInterval": 1,
              "repeat": false,
              "motionType": "random",
              "lowerParamBound": -10.5,
              "upperParamBound": 10.5,
              "discrete": false
            },
            {
              "rate": 1,
              "timeInterval": 1,
              "repeat": false,
              "motionType": "random",
              "lowerParamBound": -10,
              "upperParamBound": 10,
              "discrete": false
            }
          ]
        },
        "4": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "1"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 920,
              "y": 79
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "round(@0)",
          "latentVisibility": true,
          "label": "m[1]",
          "style": {
            "hidden": true,
            "font-family": 1,
            "font-size": 10,
            "font-weight": "normal",
            "color": "black",
            "precision": 0,
            "nameOrigin": "namedFromTemplate"
          }
        },
        "5": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "2"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 1095,
              "y": 77
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "round(@0)",
          "latentVisibility": true,
          "label": "m[2]",
          "style": {
            "hidden": true,
            "font-family": 1,
            "font-size": 10,
            "font-weight": "normal",
            "color": "black",
            "precision": 0,
            "nameOrigin": "namedFromTemplate"
          }
        },
        "6": {
          "kind": "Expression",
          "genus": "DistanceParameter",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 786,
              "y": -9
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "0.8 cm",
          "latentVisibility": true,
          "label": "rad tile",
          "style": {
            "hidden": true,
            "font-family": 1,
            "font-size": 10,
            "font-weight": "normal",
            "color": "black",
            "precision": 2,
            "nameOrigin": "namedFromLabel",
            "contenteditable": true
          }
        },
        "7": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "4"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 920,
              "y": 97
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "(1+sgn(-.5+sgn(@0)))/2",
          "latentVisibility": true,
          "label": "1st integer >0",
          "style": {
            "hidden": true,
            "font-family": 1,
            "font-size": 10,
            "font-weight": "normal",
            "color": "black",
            "precision": 0,
            "nameOrigin": "namedFromLabel"
          }
        },
        "8": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "5"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 1095,
              "y": 95
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "(1+sgn(-.5+sgn(@0)))/2",
          "latentVisibility": true,
          "label": "2nd integer >0",
          "style": {
            "hidden": true,
            "font-family": 1,
            "font-size": 10,
            "font-weight": "normal",
            "color": "black",
            "precision": 0,
            "nameOrigin": "namedFromLabel"
          }
        },
        "9": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "7"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 920,
              "y": 114
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "@0*255",
          "latentVisibility": true,
          "label": "1st int red",
          "style": {
            "hidden": true,
            "font-family": 1,
            "font-size": 10,
            "font-weight": "normal",
            "color": "black",
            "precision": 2,
            "nameOrigin": "namedFromLabel"
          }
        },
        "10": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {},
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 920,
              "y": 131
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "0*0",
          "latentVisibility": true,
          "label": "1st int green",
          "style": {
            "hidden": true,
            "font-family": 1,
            "font-size": 10,
            "font-weight": "normal",
            "color": "black",
            "precision": 2,
            "nameOrigin": "namedFromLabel"
          }
        },
        "11": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "7"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 920,
              "y": 148
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "(1-@0)*255",
          "latentVisibility": true,
          "label": "1st int blue",
          "style": {
            "hidden": true,
            "font-family": 1,
            "font-size": 10,
            "font-weight": "normal",
            "color": "black",
            "precision": 2,
            "nameOrigin": "namedFromLabel"
          }
        },
        "12": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "8"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 1095,
              "y": 113
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "@0*255",
          "latentVisibility": true,
          "label": "2nd int red",
          "style": {
            "hidden": true,
            "font-family": 1,
            "font-size": 10,
            "font-weight": "normal",
            "color": "black",
            "precision": 2,
            "nameOrigin": "namedFromLabel"
          }
        },
        "13": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {},
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 1095,
              "y": 130
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "0*0",
          "latentVisibility": true,
          "label": "2nd int green",
          "style": {
            "hidden": true,
            "font-family": 1,
            "font-size": 10,
            "font-weight": "normal",
            "color": "black",
            "precision": 2,
            "nameOrigin": "namedFromLabel"
          }
        },
        "14": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "8"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 1095,
              "y": 147
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "(1-@0)*255",
          "latentVisibility": true,
          "label": "2nd int blue",
          "style": {
            "hidden": true,
            "font-family": 1,
            "font-size": 10,
            "font-weight": "normal",
            "color": "black",
            "precision": 2,
            "nameOrigin": "namedFromLabel"
          }
        },
        "15": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "4"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 920,
              "y": 165
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "1-abs(sgn(@0))",
          "latentVisibility": true,
          "label": "m[1]=0",
          "style": {
            "hidden": true,
            "font-family": 1,
            "font-size": 10,
            "font-weight": "normal",
            "color": "black",
            "precision": 0,
            "nameOrigin": "namedFromLabel"
          }
        },
        "16": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "5"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 1101,
              "y": 168
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "1-abs(sgn(@0))",
          "latentVisibility": true,
          "label": "m[2]=0",
          "style": {
            "hidden": true,
            "font-family": 1,
            "font-size": 10,
            "font-weight": "normal",
            "color": "black",
            "precision": 0,
            "nameOrigin": "namedFromLabel"
          }
        },
        "17": {
          "kind": "Expression",
          "genus": "DistanceMeasure",
          "parents": {
            "0": "15",
            "1": "6"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 920,
              "y": 188
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "(1-@0)*@1",
          "latentVisibility": true,
          "style": {
            "hidden": true,
            "font-family": 1,
            "font-size": 10,
            "font-weight": "normal",
            "color": "black",
            "precision": 2,
            "nameOrigin": "namedFromTemplate"
          }
        },
        "18": {
          "kind": "Expression",
          "genus": "DistanceMeasure",
          "parents": {
            "0": "16",
            "1": "6"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 1101,
              "y": 191
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "(1-@0)*@1",
          "latentVisibility": true,
          "label": "m[9]",
          "style": {
            "hidden": true,
            "font-family": 1,
            "font-size": 10,
            "font-weight": "normal",
            "color": "black",
            "precision": 2,
            "nameOrigin": "namedFromTemplate"
          }
        },
        "19": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "4"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 920,
              "y": 211
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "abs(@0)",
          "latentVisibility": true,
          "label": "m[7]",
          "style": {
            "hidden": true,
            "font-family": 1,
            "font-size": 10,
            "font-weight": "normal",
            "color": "black",
            "precision": 0,
            "nameOrigin": "namedFromTemplate"
          }
        },
        "20": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "5"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 1101,
              "y": 214
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "abs(@0)",
          "latentVisibility": true,
          "label": "m[8]",
          "style": {
            "hidden": true,
            "font-family": 1,
            "font-size": 10,
            "font-weight": "normal",
            "color": "black",
            "precision": 0,
            "nameOrigin": "namedFromTemplate"
          }
        },
        "21": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "19"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 920,
              "y": 233
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "@0-1",
          "latentVisibility": true,
          "label": "m[7]",
          "style": {
            "hidden": true,
            "font-family": 1,
            "font-size": 10,
            "font-weight": "normal",
            "color": "black",
            "precision": 2,
            "nameOrigin": "namedFromTemplate"
          }
        },
        "22": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "20"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 1101,
              "y": 236
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "@0-1",
          "latentVisibility": true,
          "style": {
            "hidden": true,
            "font-family": 1,
            "font-size": 10,
            "font-weight": "normal",
            "color": "black",
            "precision": 2,
            "nameOrigin": "namedFromTemplate"
          }
        },
        "23": {
          "kind": "Expression",
          "genus": "DistanceParameter",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 920,
              "y": 255
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "1.9 cm",
          "latentVisibility": true,
          "label": "spacing",
          "style": {
            "hidden": true,
            "font-family": 1,
            "font-size": 10,
            "font-weight": "normal",
            "color": "black",
            "precision": 2,
            "nameOrigin": "namedFromLabel",
            "contenteditable": true
          }
        },
        "24": {
          "kind": "Expression",
          "genus": "DistanceParameter",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 1101,
              "y": 258
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "1.9 cm",
          "latentVisibility": true,
          "label": "spacing",
          "style": {
            "hidden": true,
            "font-family": 1,
            "font-size": 10,
            "font-weight": "normal",
            "color": "black",
            "precision": 2,
            "nameOrigin": "namedFromLabel",
            "contenteditable": true
          }
        },
        "25": {
          "kind": "Point",
          "genus": "Point",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 51,
              "y": 80
            }
          },
          "style": {
            "hidden": true
          }
        },
        "26": {
          "kind": "Point",
          "genus": "Point",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 51,
              "y": 446
            }
          },
          "style": {
            "hidden": true
          }
        },
        "27": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "25",
            "p1": "26"
          },
          "constraint": "Segment",
          "style": {
            "hidden": true,
            "color": "rgb(0,126,0)",
            "width": 1
          }
        },
        "28": {
          "kind": "Point",
          "genus": "PointOnPath",
          "parents": {
            "path": "27"
          },
          "value": 0.1284153005464481,
          "constraint": "PointOnPath",
          "label": "A",
          "style": {
            "hidden": true,
            "label": {
              "showLabel": true,
              "labelOffsetX": 8,
              "labelOffsetY": 5
            }
          }
        },
        "29": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "28",
            "distance": "23"
          },
          "angle": 0,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true
          }
        },
        "30": {
          "kind": "Circle",
          "genus": "Circle",
          "parents": {
            "p0": "28",
            "radius": "17"
          },
          "constraint": "CircleByRadius"
        },
        "31": {
          "kind": "CircleInterior",
          "genus": "CircleInt",
          "parents": {
            "circle": "30"
          },
          "constraint": "CircleInterior",
          "style": {
            "hidden": true,
            "color": "black",
            "layerOrder": 8
          }
        },
        "32": {
          "kind": "CircleInterior",
          "genus": "CircleInt",
          "parents": {
            "source": "31",
            "blue": "11",
            "green": "10",
            "red": "9"
          },
          "colorRange": "ReflectToRange",
          "colorModel": "TrivariateRGB",
          "parameterDomainFrom": 0,
          "parameterDomainTo": 1,
          "constraint": "ColorizeTrivariate",
          "style": {
            "layerOrder": 9
          }
        },
        "33": {
          "kind": "Text",
          "genus": "CompositeText",
          "parents": {
            "0": "4",
            "1": "5"
          },
          "constraint": "CompositeText",
          "geom": {
            "loc": {
              "x": 1311,
              "y": -17
            }
          },
          "textMFS": "<VL<H<?xC0001><T' - ('><?xC0002><T')'>>>",
          "latentVisibility": true,
          "style": {
            "hidden": true,
            "font-family": 1,
            "font-size": 18,
            "font-weight": "normal",
            "text-decoration": "none",
            "color": "black"
          }
        },
        "34": {
          "kind": "Map",
          "genus": "IterateMap",
          "parents": {
            "0": "29",
            "1": "30",
            "2": "31",
            "3": "32",
            "preimage0": "28",
            "map0image0": "29",
            "depth": "21"
          },
          "constraint": "IterateMapByParametricDepth",
          "rerandomizePointsOnPaths": false,
          "finalIterationOnly": false
        },
        "35": {
          "kind": "IterateImage",
          "genus": "IterateImage",
          "parents": {
            "source": "30",
            "map": "34"
          },
          "constraint": "IterateImage",
          "style": {
            "line-style": "solid",
            "width": 3
          }
        },
        "36": {
          "kind": "IterateImage",
          "genus": "IterateImage",
          "parents": {
            "source": "32",
            "map": "34"
          },
          "constraint": "IterateImage",
          "style": {
            "opacity": 0.49999237060546875,
            "layerOrder": 13
          }
        },
        "37": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "7"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 920,
              "y": 279
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "1-@0",
          "latentVisibility": true,
          "label": "m[3]",
          "style": {
            "hidden": true,
            "font-family": 1,
            "font-size": 10,
            "font-weight": "normal",
            "color": "black",
            "precision": 2,
            "nameOrigin": "namedFromTemplate"
          }
        },
        "38": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "8"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 1101,
              "y": 282
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "1-@0",
          "latentVisibility": true,
          "label": "m[3]",
          "style": {
            "hidden": true,
            "font-family": 1,
            "font-size": 10,
            "font-weight": "normal",
            "color": "black",
            "precision": 2,
            "nameOrigin": "namedFromTemplate"
          }
        },
        "39": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "7",
            "1": "8"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 921,
              "y": 340
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "abs(sgn(@0*@1))",
          "latentVisibility": true,
          "label": "both +ve",
          "style": {
            "hidden": true,
            "font-family": 1,
            "font-size": 10,
            "font-weight": "normal",
            "color": "black",
            "precision": 0,
            "nameOrigin": "namedFromLabel"
          }
        },
        "40": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "37",
            "1": "38"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 921,
              "y": 357
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "abs(sgn(@0*@1))",
          "latentVisibility": true,
          "label": "both -ve",
          "style": {
            "hidden": true,
            "font-family": 1,
            "font-size": 10,
            "font-weight": "normal",
            "color": "black",
            "precision": 0,
            "nameOrigin": "namedFromLabel"
          }
        },
        "41": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "39",
            "1": "40"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 921,
              "y": 374
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "sgn(abs(sgn(@0))+abs(sgn(@1)))",
          "latentVisibility": true,
          "label": "same sign",
          "style": {
            "hidden": true,
            "font-family": 1,
            "font-size": 10,
            "font-weight": "normal",
            "color": "black",
            "precision": 0,
            "nameOrigin": "namedFromLabel"
          }
        },
        "42": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "41"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 921,
              "y": 391
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "1-@0",
          "latentVisibility": true,
          "label": "m[5]",
          "style": {
            "hidden": true,
            "font-family": 1,
            "font-size": 10,
            "font-weight": "normal",
            "color": "black",
            "precision": 2,
            "nameOrigin": "namedFromTemplate"
          }
        },
        "43": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "4"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 921,
              "y": 408
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "abs(@0)",
          "latentVisibility": true,
          "label": "m[4]",
          "style": {
            "hidden": true,
            "font-family": 1,
            "font-size": 10,
            "font-weight": "normal",
            "color": "black",
            "precision": 2,
            "nameOrigin": "namedFromTemplate"
          }
        },
        "44": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "5"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 921,
              "y": 429
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "abs(@0)",
          "latentVisibility": true,
          "label": "m[4]",
          "style": {
            "hidden": true,
            "font-family": 1,
            "font-size": 10,
            "font-weight": "normal",
            "color": "black",
            "precision": 2,
            "nameOrigin": "namedFromTemplate"
          }
        },
        "45": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "43",
            "1": "44"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 520,
              "y": 390
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "(1-sgn(.5+sgn(@0-@1)))/2",
          "style": {
            "hidden": true,
            "font-family": 1,
            "font-size": 10,
            "font-weight": "normal",
            "color": "black",
            "precision": 0,
            "nameOrigin": "namedFromTemplate"
          }
        },
        "46": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "45"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 520,
              "y": 390
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "1-@0",
          "style": {
            "hidden": true,
            "font-family": 1,
            "font-size": 10,
            "font-weight": "normal",
            "color": "black",
            "precision": 0,
            "nameOrigin": "namedFromTemplate"
          }
        },
        "47": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "45",
            "1": "43",
            "2": "46",
            "3": "44"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 921,
              "y": 450
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "@0*@1+@2*@3",
          "latentVisibility": true,
          "label": "min (m[4], m[4])",
          "style": {
            "hidden": true,
            "font-family": 1,
            "font-size": 10,
            "font-weight": "normal",
            "color": "black",
            "precision": 2,
            "nameOrigin": "namedFromLabel"
          }
        },
        "48": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "42",
            "1": "47"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 921,
              "y": 472
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "@0*@1",
          "latentVisibility": true,
          "label": "# zeros",
          "style": {
            "hidden": true,
            "font-family": 1,
            "font-size": 10,
            "font-weight": "normal",
            "color": "black",
            "precision": 0,
            "nameOrigin": "namedFromLabel"
          }
        },
        "49": {
          "kind": "Expression",
          "genus": "DistanceMeasure",
          "parents": {
            "0": "48",
            "1": "23"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 921,
              "y": 489
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "@0*@1",
          "latentVisibility": true,
          "label": "m[10]",
          "style": {
            "hidden": true,
            "font-family": 1,
            "font-size": 10,
            "font-weight": "normal",
            "color": "black",
            "precision": 2,
            "nameOrigin": "namedFromTemplate"
          }
        },
        "50": {
          "kind": "Expression",
          "genus": "DistanceMeasure",
          "parents": {
            "0": "23",
            "1": "6",
            "2": "17"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 921,
              "y": 530
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "(@0-2*@1)/2+@2",
          "latentVisibility": true,
          "label": "m[10]",
          "style": {
            "hidden": true,
            "font-family": 1,
            "font-size": 10,
            "font-weight": "normal",
            "color": "black",
            "precision": 2,
            "nameOrigin": "namedFromTemplate"
          }
        },
        "51": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "28",
            "distance": "50"
          },
          "angle": 3.1415926535897865,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true
          }
        },
        "52": {
          "kind": "Text",
          "genus": "Caption",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 921,
              "y": 307
            }
          },
          "textMFS": "<VL<T'determine # of zeros'><T'draw the yellow shade ot cover zeros'>>",
          "latentVisibility": true,
          "style": {
            "hidden": true,
            "font-family": 1,
            "font-size": 10,
            "font-weight": "normal",
            "text-decoration": "none",
            "color": "rgb(255,128,0)"
          }
        },
        "53": {
          "kind": "Expression",
          "genus": "DistanceParameter",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 921,
              "y": 506
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "0.8 cm",
          "latentVisibility": true,
          "label": "vert shift",
          "style": {
            "hidden": true,
            "font-family": 1,
            "font-size": 10,
            "font-weight": "normal",
            "color": "black",
            "precision": 1,
            "nameOrigin": "namedFromLabel",
            "contenteditable": true
          }
        },
        "54": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "51",
            "distance": "53"
          },
          "angle": -1.5707963267949,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true
          }
        },
        "55": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "54",
            "distance": "49"
          },
          "angle": 0,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true
          }
        },
        "56": {
          "kind": "Text",
          "genus": "Caption",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 920,
              "y": 8
            }
          },
          "textMFS": "<VL<T'generate first integer'><T'set up RGB colouring'><T'calculations for iteration'>>",
          "latentVisibility": true,
          "style": {
            "hidden": true,
            "font-family": 1,
            "font-size": 10,
            "font-weight": "normal",
            "text-decoration": "none",
            "color": "rgb(255,128,0)"
          }
        },
        "57": {
          "kind": "Text",
          "genus": "Caption",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 1095,
              "y": 6
            }
          },
          "textMFS": "<VL<T'generate first integer'><T'set up RGB colouring'><T'calculations for iteration'>>",
          "latentVisibility": true,
          "style": {
            "hidden": true,
            "font-family": 1,
            "font-size": 10,
            "font-weight": "normal",
            "text-decoration": "none",
            "color": "rgb(255,128,0)"
          }
        },
        "58": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "4",
            "1": "5"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 1137,
              "y": 318
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "@0-@1",
          "latentVisibility": true,
          "label": "m[6]",
          "style": {
            "hidden": true,
            "font-family": 1,
            "font-size": 10,
            "font-weight": "normal",
            "color": "black",
            "precision": 0,
            "nameOrigin": "namedFromTemplate"
          }
        },
        "59": {
          "kind": "Text",
          "genus": "CompositeText",
          "parents": {
            "0": "4",
            "1": "5",
            "2": "58"
          },
          "constraint": "CompositeText",
          "geom": {
            "loc": {
              "x": 439,
              "y": 254
            }
          },
          "textMFS": "<H<?1xC0001<H<T'6'>>><T' - ('><?1xC0002<H<T'4'>>><T') = '><?1xC0003<H<T'2'>>>>",
          "style": {
            "font-size": 24,
            "text-decoration": "none",
            "color": "black"
          }
        },
        "60": {
          "kind": "Text",
          "genus": "Caption",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 23,
              "y": -11
            }
          },
          "textMFS": "<T'Subtracting Two Integers Explorer'>",
          "style": {
            "font-size": 22,
            "color": "black"
          }
        },
        "61": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "45",
            "1": "44",
            "2": "46",
            "3": "43"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 1065,
              "y": 455
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "@0*@1+@2*@3",
          "latentVisibility": true,
          "label": "max (m[4], m[4])",
          "style": {
            "hidden": true,
            "font-family": 1,
            "font-size": 10,
            "font-weight": "normal",
            "color": "black",
            "precision": 2,
            "nameOrigin": "namedFromLabel"
          }
        },
        "62": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "61",
            "1": "48"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 1065,
              "y": 477
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "@0-@1",
          "latentVisibility": true,
          "label": "m[10]",
          "style": {
            "hidden": true,
            "font-family": 1,
            "font-size": 10,
            "font-weight": "normal",
            "color": "black",
            "precision": 0,
            "nameOrigin": "namedFromTemplate"
          }
        },
        "63": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "58"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 1297,
              "y": 392
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "(1+sgn(-.5+sgn(@0)))/2",
          "latentVisibility": true,
          "label": "m[6]>0",
          "style": {
            "hidden": true,
            "font-family": 1,
            "font-size": 10,
            "font-weight": "normal",
            "color": "black",
            "precision": 0,
            "nameOrigin": "namedFromLabel"
          }
        },
        "64": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "58"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 1297,
              "y": 415
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "(1-sgn(.5+sgn(@0)))/2",
          "latentVisibility": true,
          "label": "m[6]<0",
          "style": {
            "hidden": true,
            "font-family": 1,
            "font-size": 10,
            "font-weight": "normal",
            "color": "black",
            "precision": 0,
            "nameOrigin": "namedFromLabel"
          }
        },
        "65": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "58"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 1297,
              "y": 438
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "1-abs(sgn(@0))",
          "latentVisibility": true,
          "label": "m[6]=0",
          "style": {
            "hidden": true,
            "font-family": 1,
            "font-size": 10,
            "font-weight": "normal",
            "color": "black",
            "precision": 0,
            "nameOrigin": "namedFromLabel"
          }
        },
        "66": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "64"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 375,
              "y": 605
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "1/@0*2",
          "style": {
            "hidden": true,
            "font-family": 1,
            "font-size": 10,
            "font-weight": "normal",
            "color": "black",
            "precision": 2,
            "nameOrigin": "namedFromTemplate"
          }
        },
        "67": {
          "kind": "Point",
          "genus": "Point",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 390,
              "y": 628
            }
          },
          "style": {
            "hidden": true
          }
        },
        "68": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "67"
          },
          "angle": -1.5707963267949,
          "distance": 14.173228346456693,
          "constraint": "TranslateFixDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "color": "red",
            "radius": 2
          }
        },
        "69": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "68",
            "center": "67",
            "measure": "66"
          },
          "constraint": "DilateMeasureFactor",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "color": "red",
            "radius": 2
          }
        },
        "70": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "63"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 375,
              "y": 605
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "1/@0*2",
          "style": {
            "hidden": true,
            "font-family": 1,
            "font-size": 10,
            "font-weight": "normal",
            "color": "black",
            "precision": 2,
            "nameOrigin": "namedFromTemplate"
          }
        },
        "71": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "68",
            "center": "67",
            "measure": "70"
          },
          "constraint": "DilateMeasureFactor",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "color": "red",
            "radius": 2
          }
        },
        "72": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "65"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 375,
              "y": 605
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "1/@0*2",
          "style": {
            "hidden": true,
            "font-family": 1,
            "font-size": 10,
            "font-weight": "normal",
            "color": "black",
            "precision": 2,
            "nameOrigin": "namedFromTemplate"
          }
        },
        "73": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "68",
            "center": "67",
            "measure": "72"
          },
          "constraint": "DilateMeasureFactor",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "color": "red",
            "radius": 2
          }
        },
        "74": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "58"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 1137,
              "y": 336
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "abs(@0)",
          "latentVisibility": true,
          "style": {
            "hidden": true,
            "font-family": 1,
            "font-size": 10,
            "font-weight": "normal",
            "color": "black",
            "precision": 0,
            "nameOrigin": "namedFromTemplate"
          }
        },
        "75": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "39"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 1131,
              "y": 526
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "1/@0*2",
          "style": {
            "hidden": true,
            "font-family": 1,
            "font-size": 10,
            "font-weight": "normal",
            "color": "black",
            "precision": 2,
            "nameOrigin": "namedFromTemplate"
          }
        },
        "76": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "40"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 1131,
              "y": 526
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "1/@0*2",
          "style": {
            "hidden": true,
            "font-family": 1,
            "font-size": 10,
            "font-weight": "normal",
            "color": "black",
            "precision": 2,
            "nameOrigin": "namedFromTemplate"
          }
        },
        "77": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "39"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 1148,
              "y": 378
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "1-@0",
          "latentVisibility": true,
          "label": "m[7]",
          "style": {
            "hidden": true,
            "font-family": 1,
            "font-size": 10,
            "font-weight": "normal",
            "color": "black",
            "precision": 2,
            "nameOrigin": "namedFromTemplate"
          }
        },
        "78": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "40"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 1148,
              "y": 395
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "1-@0",
          "latentVisibility": true,
          "label": "m[7]",
          "style": {
            "hidden": true,
            "font-family": 1,
            "font-size": 10,
            "font-weight": "normal",
            "color": "black",
            "precision": 2,
            "nameOrigin": "namedFromTemplate"
          }
        },
        "79": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "77",
            "1": "63"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 1257,
              "y": 481
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "abs(sgn(@0*@1))",
          "latentVisibility": true,
          "label": "(m[7])^(m[6]>0)",
          "style": {
            "hidden": true,
            "font-family": 1,
            "font-size": 10,
            "font-weight": "normal",
            "color": "black",
            "precision": 0,
            "nameOrigin": "namedFromLabel"
          }
        },
        "80": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "78",
            "1": "64"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 1257,
              "y": 503
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "abs(sgn(@0*@1))",
          "latentVisibility": true,
          "label": "(m[7])^(m[6]<0)",
          "style": {
            "hidden": true,
            "font-family": 1,
            "font-size": 10,
            "font-weight": "normal",
            "color": "black",
            "precision": 0,
            "nameOrigin": "namedFromLabel"
          }
        },
        "81": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "79"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 1146,
              "y": 538
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "1/@0*2",
          "style": {
            "hidden": true,
            "font-family": 1,
            "font-size": 10,
            "font-weight": "normal",
            "color": "black",
            "precision": 2,
            "nameOrigin": "namedFromTemplate"
          }
        },
        "82": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "80"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 1146,
              "y": 538
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "1/@0*2",
          "style": {
            "hidden": true,
            "font-family": 1,
            "font-size": 10,
            "font-weight": "normal",
            "color": "black",
            "precision": 2,
            "nameOrigin": "namedFromTemplate"
          }
        },
        "83": {
          "kind": "Point",
          "genus": "Point",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 24,
              "y": 64
            }
          },
          "style": {
            "hidden": true
          }
        },
        "84": {
          "kind": "Point",
          "genus": "Point",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 663,
              "y": 64
            }
          },
          "style": {
            "hidden": true
          }
        },
        "85": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "83",
            "p1": "84"
          },
          "constraint": "Segment",
          "style": {
            "hidden": true,
            "color": "rgb(0,126,0)",
            "width": 1
          }
        },
        "86": {
          "kind": "Text",
          "genus": "Caption",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 1352,
              "y": 484
            }
          },
          "textMFS": "<VL<T'diff signs and greater than 0'>>",
          "latentVisibility": true,
          "style": {
            "hidden": true,
            "font-family": 1,
            "font-size": 10,
            "font-weight": "normal",
            "text-decoration": "none",
            "color": "rgb(255,128,0)"
          }
        },
        "87": {
          "kind": "Text",
          "genus": "Caption",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 1352,
              "y": 503
            }
          },
          "textMFS": "<VL<T'diff signs and less than 0'>>",
          "latentVisibility": true,
          "style": {
            "hidden": true,
            "font-family": 1,
            "font-size": 10,
            "font-weight": "normal",
            "text-decoration": "none",
            "color": "rgb(255,128,0)"
          }
        },
        "88": {
          "kind": "Text",
          "genus": "Caption",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 1355,
              "y": 389
            }
          },
          "textMFS": "<VL<T'sum +ve'>>",
          "latentVisibility": true,
          "style": {
            "hidden": true,
            "font-family": 1,
            "font-size": 10,
            "font-weight": "normal",
            "text-decoration": "none",
            "color": "rgb(255,128,0)"
          }
        },
        "89": {
          "kind": "Text",
          "genus": "Caption",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 1349,
              "y": 412
            }
          },
          "textMFS": "<VL<T'sum -ve'>>",
          "latentVisibility": true,
          "style": {
            "hidden": true,
            "font-family": 1,
            "font-size": 10,
            "font-weight": "normal",
            "text-decoration": "none",
            "color": "rgb(255,128,0)"
          }
        },
        "90": {
          "kind": "Text",
          "genus": "Caption",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 1357,
              "y": 437
            }
          },
          "textMFS": "<VL<T'sum 0'>>",
          "latentVisibility": true,
          "style": {
            "hidden": true,
            "font-family": 1,
            "font-size": 10,
            "font-weight": "normal",
            "text-decoration": "none",
            "color": "rgb(255,128,0)"
          }
        },
        "91": {
          "kind": "Point",
          "genus": "PointOnPath",
          "parents": {
            "path": "85"
          },
          "value": 0.41471048513302033,
          "constraint": "PointOnPath",
          "style": {
            "hidden": true
          }
        },
        "92": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "91"
          },
          "angle": -1.5707963267949,
          "distance": 14.173228346456693,
          "constraint": "TranslateFixDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "color": "red",
            "radius": 2
          }
        },
        "93": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "92",
            "center": "91",
            "measure": "82"
          },
          "constraint": "DilateMeasureFactor",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "color": "red",
            "radius": 2
          }
        },
        "94": {
          "kind": "Point",
          "genus": "PointOnPath",
          "parents": {
            "path": "85"
          },
          "value": 0.41784037558685444,
          "constraint": "PointOnPath",
          "style": {
            "hidden": true
          }
        },
        "95": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "94"
          },
          "angle": -1.5707963267949,
          "distance": 14.173228346456693,
          "constraint": "TranslateFixDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "color": "red",
            "radius": 2
          }
        },
        "96": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "95",
            "center": "94",
            "measure": "81"
          },
          "constraint": "DilateMeasureFactor",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "color": "red",
            "radius": 2
          }
        },
        "97": {
          "kind": "Point",
          "genus": "PointOnPath",
          "parents": {
            "path": "85"
          },
          "value": 0.4131455399061033,
          "constraint": "PointOnPath",
          "style": {
            "hidden": true
          }
        },
        "98": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "97"
          },
          "angle": -1.5707963267949,
          "distance": 14.173228346456693,
          "constraint": "TranslateFixDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "color": "red",
            "radius": 2
          }
        },
        "99": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "98",
            "center": "97",
            "measure": "72"
          },
          "constraint": "DilateMeasureFactor",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "color": "red",
            "radius": 2
          }
        },
        "100": {
          "kind": "Point",
          "genus": "PointOnPath",
          "parents": {
            "path": "85"
          },
          "value": 0.49139280125195617,
          "constraint": "PointOnPath",
          "style": {
            "hidden": true
          }
        },
        "101": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "100"
          },
          "angle": -1.5707963267949,
          "distance": 14.173228346456693,
          "constraint": "TranslateFixDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "color": "red",
            "radius": 2
          }
        },
        "102": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "101",
            "center": "100",
            "measure": "75"
          },
          "constraint": "DilateMeasureFactor",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "color": "red",
            "radius": 2
          }
        },
        "103": {
          "kind": "Point",
          "genus": "PointOnPath",
          "parents": {
            "path": "85"
          },
          "value": 0.5070422535211268,
          "constraint": "PointOnPath",
          "style": {
            "hidden": true
          }
        },
        "104": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "103"
          },
          "angle": -1.5707963267949,
          "distance": 14.173228346456693,
          "constraint": "TranslateFixDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "color": "red",
            "radius": 2
          }
        },
        "105": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "104",
            "center": "103",
            "measure": "76"
          },
          "constraint": "DilateMeasureFactor",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "color": "red",
            "radius": 2
          }
        },
        "106": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "39",
            "1": "40"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 945,
              "y": 595
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "sgn(abs(sgn(@0))+abs(sgn(@1)))",
          "latentVisibility": true,
          "label": "(both +ve)V(both -ve)",
          "style": {
            "hidden": true,
            "font-family": 1,
            "font-size": 10,
            "font-weight": "normal",
            "color": "black",
            "precision": 0,
            "nameOrigin": "namedFromLabel"
          }
        },
        "107": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "106"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 1384,
              "y": 649
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "1-@0",
          "latentVisibility": true,
          "label": "m[8]",
          "style": {
            "hidden": true,
            "font-family": 1,
            "font-size": 10,
            "font-weight": "normal",
            "color": "black",
            "precision": 2,
            "nameOrigin": "namedFromTemplate"
          }
        },
        "108": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "20",
            "1": "19"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 969,
              "y": 622
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "(1-sgn(-.5+sgn(@0-@1)))/2",
          "latentVisibility": true,
          "label": "mag[1] >= mag[2]",
          "style": {
            "hidden": true,
            "font-family": 1,
            "font-size": 10,
            "font-weight": "normal",
            "color": "black",
            "precision": 0,
            "nameOrigin": "namedFromLabel"
          }
        },
        "109": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "108"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 1152,
              "y": 621
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "1-@0",
          "latentVisibility": true,
          "label": "m[8]",
          "style": {
            "hidden": true,
            "font-family": 1,
            "font-size": 10,
            "font-weight": "normal",
            "color": "black",
            "precision": 2,
            "nameOrigin": "namedFromTemplate"
          }
        },
        "110": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "106",
            "1": "108"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 917,
              "y": 650
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "abs(sgn(@0*@1))",
          "latentVisibility": true,
          "label": "((both +ve)V(both -ve))^(mag[1] >= mag[2])",
          "style": {
            "hidden": true,
            "font-family": 1,
            "font-size": 10,
            "font-weight": "normal",
            "color": "black",
            "precision": 0,
            "nameOrigin": "namedFromLabel"
          }
        },
        "111": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "106",
            "1": "109"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 1144,
              "y": 648
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "abs(sgn(@0*@1))",
          "latentVisibility": true,
          "label": "((both +ve)V(both -ve))^(m[8])",
          "style": {
            "hidden": true,
            "font-family": 1,
            "font-size": 10,
            "font-weight": "normal",
            "color": "black",
            "precision": 0,
            "nameOrigin": "namedFromLabel"
          }
        },
        "112": {
          "kind": "Text",
          "genus": "Caption",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 967,
              "y": 672
            }
          },
          "textMFS": "<VL<T'can take away'>>",
          "latentVisibility": true,
          "style": {
            "hidden": true,
            "font-family": 1,
            "font-size": 10,
            "font-weight": "normal",
            "text-decoration": "none",
            "color": "rgb(255,128,0)"
          }
        },
        "113": {
          "kind": "Text",
          "genus": "Caption",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 1150,
              "y": 674
            }
          },
          "textMFS": "<VL<T'can partially take away'>>",
          "latentVisibility": true,
          "style": {
            "hidden": true,
            "font-family": 1,
            "font-size": 10,
            "font-weight": "normal",
            "text-decoration": "none",
            "color": "rgb(255,128,0)"
          }
        },
        "114": {
          "kind": "Text",
          "genus": "Caption",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 1418,
              "y": 677
            }
          },
          "textMFS": "<VL<T'need to borrow full'>>",
          "latentVisibility": true,
          "style": {
            "hidden": true,
            "font-family": 1,
            "font-size": 10,
            "font-weight": "normal",
            "text-decoration": "none",
            "color": "rgb(255,128,0)"
          }
        },
        "115": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "110",
            "1": "111",
            "2": "20",
            "3": "19",
            "4": "107"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 1159,
              "y": 703
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "@0*0+@1*(@2-@3)+@4*@2",
          "latentVisibility": true,
          "label": "# zeros pairs",
          "style": {
            "hidden": true,
            "font-family": 1,
            "font-size": 10,
            "font-weight": "normal",
            "color": "black",
            "precision": 0,
            "nameOrigin": "namedFromLabel"
          }
        },
        "116": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "4"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 946,
              "y": 723
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "1-abs(sgn(@0))",
          "latentVisibility": true,
          "label": "int[1]=0",
          "style": {
            "hidden": true,
            "font-family": 1,
            "font-size": 10,
            "font-weight": "normal",
            "color": "black",
            "precision": 0,
            "nameOrigin": "namedFromLabel"
          }
        },
        "117": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "4",
            "1": "116"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 946,
              "y": 769
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "@0/(abs(@0)+@1)",
          "latentVisibility": true,
          "label": "sign int[1]",
          "style": {
            "hidden": true,
            "font-family": 1,
            "font-size": 10,
            "font-weight": "normal",
            "color": "black",
            "precision": 2,
            "nameOrigin": "namedFromLabel"
          }
        },
        "118": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "117"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 946,
              "y": 792
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "-@0",
          "latentVisibility": true,
          "label": "m[9]",
          "style": {
            "hidden": true,
            "font-family": 1,
            "font-size": 10,
            "font-weight": "normal",
            "color": "black",
            "precision": 2,
            "nameOrigin": "namedFromTemplate"
          }
        },
        "119": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "116"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 946,
              "y": 746
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "1-@0",
          "latentVisibility": true,
          "style": {
            "hidden": true,
            "font-family": 1,
            "font-size": 10,
            "font-weight": "normal",
            "color": "black",
            "precision": 2,
            "nameOrigin": "namedFromTemplate"
          }
        },
        "120": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "5"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 1042,
              "y": 724
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "1-abs(sgn(@0))",
          "latentVisibility": true,
          "label": "int[2]=0",
          "style": {
            "hidden": true,
            "font-family": 1,
            "font-size": 10,
            "font-weight": "normal",
            "color": "black",
            "precision": 0,
            "nameOrigin": "namedFromLabel"
          }
        },
        "121": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "5",
            "1": "120"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 1042,
              "y": 770
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "@0/(abs(@0)+@1)",
          "latentVisibility": true,
          "label": "sign int[2]",
          "style": {
            "hidden": true,
            "font-family": 1,
            "font-size": 10,
            "font-weight": "normal",
            "color": "black",
            "precision": 2,
            "nameOrigin": "namedFromLabel"
          }
        },
        "122": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "111",
            "1": "121",
            "2": "107"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 817,
              "y": 845
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "@0*@1+@2*@1",
          "latentVisibility": true,
          "label": "m[9]",
          "style": {
            "hidden": true,
            "font-family": 1,
            "font-size": 10,
            "font-weight": "normal",
            "color": "black",
            "precision": 2,
            "nameOrigin": "namedFromTemplate"
          }
        },
        "123": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "120"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 1042,
              "y": 747
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "1-@0",
          "latentVisibility": true,
          "style": {
            "hidden": true,
            "font-family": 1,
            "font-size": 10,
            "font-weight": "normal",
            "color": "black",
            "precision": 2,
            "nameOrigin": "namedFromTemplate"
          }
        },
        "124": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "121"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 1042,
              "y": 792
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "-@0",
          "latentVisibility": true,
          "style": {
            "hidden": true,
            "font-family": 1,
            "font-size": 10,
            "font-weight": "normal",
            "color": "black",
            "precision": 2,
            "nameOrigin": "namedFromTemplate"
          }
        },
        "125": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "122"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 833,
              "y": 867
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "(1+sgn(-.5+sgn(@0)))/2",
          "latentVisibility": true,
          "label": "sign zero>0",
          "style": {
            "hidden": true,
            "font-family": 1,
            "font-size": 10,
            "font-weight": "normal",
            "color": "black",
            "precision": 0,
            "nameOrigin": "namedFromLabel"
          }
        },
        "126": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "125"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 930,
              "y": 867
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "1-@0",
          "latentVisibility": true,
          "label": "m[9]",
          "style": {
            "hidden": true,
            "font-family": 1,
            "font-size": 10,
            "font-weight": "normal",
            "color": "black",
            "precision": 2,
            "nameOrigin": "namedFromTemplate"
          }
        },
        "127": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "125"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 862,
              "y": 893
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "@0*255",
          "latentVisibility": true,
          "label": "zero red",
          "style": {
            "hidden": true,
            "font-family": 1,
            "font-size": 10,
            "font-weight": "normal",
            "color": "black",
            "precision": 2,
            "nameOrigin": "namedFromLabel"
          }
        },
        "128": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {},
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 862,
              "y": 910
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "0*255",
          "latentVisibility": true,
          "label": "zero green",
          "style": {
            "hidden": true,
            "font-family": 1,
            "font-size": 10,
            "font-weight": "normal",
            "color": "black",
            "precision": 2,
            "nameOrigin": "namedFromLabel"
          }
        },
        "129": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "126"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 862,
              "y": 927
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "@0*255",
          "latentVisibility": true,
          "label": "zero blue",
          "style": {
            "hidden": true,
            "font-family": 1,
            "font-size": 10,
            "font-weight": "normal",
            "color": "black",
            "precision": 2,
            "nameOrigin": "namedFromLabel"
          }
        },
        "130": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "126"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 1000,
              "y": 894
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "@0*255",
          "latentVisibility": true,
          "label": "zero's pair red",
          "style": {
            "hidden": true,
            "font-family": 1,
            "font-size": 10,
            "font-weight": "normal",
            "color": "black",
            "precision": 2,
            "nameOrigin": "namedFromLabel"
          }
        },
        "131": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {},
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 1000,
              "y": 911
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "0*255",
          "latentVisibility": true,
          "label": "zero's pair green",
          "style": {
            "hidden": true,
            "font-family": 1,
            "font-size": 10,
            "font-weight": "normal",
            "color": "black",
            "precision": 2,
            "nameOrigin": "namedFromLabel"
          }
        },
        "132": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "125"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 1000,
              "y": 928
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "@0*255",
          "latentVisibility": true,
          "label": "zero's pair blue",
          "style": {
            "hidden": true,
            "font-family": 1,
            "font-size": 10,
            "font-weight": "normal",
            "color": "black",
            "precision": 2,
            "nameOrigin": "namedFromLabel"
          }
        },
        "133": {
          "kind": "Expression",
          "genus": "DistanceParameter",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 920,
              "y": 954
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "1.9 cm",
          "latentVisibility": true,
          "label": "vert shift zero",
          "style": {
            "hidden": true,
            "font-family": 1,
            "font-size": 10,
            "font-weight": "normal",
            "color": "black",
            "precision": 2,
            "nameOrigin": "namedFromLabel",
            "contenteditable": true
          }
        },
        "134": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "115"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 1149,
              "y": 898
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "@0",
          "latentVisibility": true,
          "style": {
            "hidden": true,
            "font-family": 1,
            "font-size": 10,
            "font-weight": "normal",
            "color": "black",
            "precision": 2,
            "nameOrigin": "namedFromTemplate"
          }
        },
        "135": {
          "kind": "Expression",
          "genus": "DistanceMeasure",
          "parents": {
            "0": "23",
            "1": "4"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 1149,
              "y": 915
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "@0*(abs(@1)-1)",
          "latentVisibility": true,
          "style": {
            "hidden": true,
            "font-family": 1,
            "font-size": 10,
            "font-weight": "normal",
            "color": "black",
            "precision": 2,
            "nameOrigin": "namedFromTemplate"
          }
        },
        "136": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "28",
            "distance": "135"
          },
          "angle": 0,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true
          }
        },
        "137": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "136",
            "distance": "24"
          },
          "angle": 0,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "label": "A''",
          "style": {
            "hidden": true,
            "label": {
              "showLabel": true,
              "labelOffsetX": 8,
              "labelOffsetY": 5
            }
          }
        },
        "138": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "136",
            "distance": "133"
          },
          "angle": 1.5707963267948861,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true
          }
        },
        "139": {
          "kind": "Circle",
          "genus": "Circle",
          "parents": {
            "p0": "138",
            "radius": "6"
          },
          "constraint": "CircleByRadius",
          "latentVisibility": true,
          "style": {
            "hidden": true,
            "width": 1
          }
        },
        "140": {
          "kind": "CircleInterior",
          "genus": "CircleInt",
          "parents": {
            "circle": "139"
          },
          "constraint": "CircleInterior",
          "style": {
            "hidden": true,
            "layerOrder": 17
          }
        },
        "141": {
          "kind": "CircleInterior",
          "genus": "CircleInt",
          "parents": {
            "source": "140",
            "blue": "132",
            "green": "131",
            "red": "130"
          },
          "colorRange": "ReflectToRange",
          "colorModel": "TrivariateRGB",
          "parameterDomainFrom": 0,
          "parameterDomainTo": 1,
          "constraint": "ColorizeTrivariate",
          "latentVisibility": true,
          "style": {
            "hidden": true,
            "layerOrder": 18
          }
        },
        "142": {
          "kind": "Circle",
          "genus": "Circle",
          "parents": {
            "p0": "136",
            "radius": "6"
          },
          "constraint": "CircleByRadius",
          "latentVisibility": true,
          "style": {
            "hidden": true,
            "width": 1
          }
        },
        "143": {
          "kind": "CircleInterior",
          "genus": "CircleInt",
          "parents": {
            "circle": "142"
          },
          "constraint": "CircleInterior",
          "style": {
            "hidden": true,
            "color": "lime",
            "layerOrder": 15
          }
        },
        "144": {
          "kind": "CircleInterior",
          "genus": "CircleInt",
          "parents": {
            "source": "143",
            "blue": "129",
            "green": "128",
            "red": "127"
          },
          "colorRange": "ReflectToRange",
          "colorModel": "TrivariateRGB",
          "parameterDomainFrom": 0,
          "parameterDomainTo": 1,
          "constraint": "ColorizeTrivariate",
          "latentVisibility": true,
          "style": {
            "hidden": true,
            "color": "blue",
            "layerOrder": 16
          }
        },
        "145": {
          "kind": "Map",
          "genus": "IterateMap",
          "parents": {
            "0": "142",
            "1": "143",
            "2": "144",
            "3": "138",
            "4": "139",
            "5": "140",
            "6": "141",
            "7": "137",
            "preimage0": "136",
            "map0image0": "137",
            "depth": "134"
          },
          "constraint": "IterateMapByParametricDepth",
          "rerandomizePointsOnPaths": false,
          "finalIterationOnly": false
        },
        "146": {
          "kind": "IterateImage",
          "genus": "IterateImage",
          "parents": {
            "source": "141",
            "map": "145"
          },
          "constraint": "IterateImage",
          "style": {
            "opacity": 0.49999237060546875,
            "layerOrder": 20
          }
        },
        "147": {
          "kind": "IterateImage",
          "genus": "IterateImage",
          "parents": {
            "source": "139",
            "map": "145"
          },
          "constraint": "IterateImage",
          "style": {
            "line-style": "solid",
            "width": 3
          }
        },
        "148": {
          "kind": "IterateImage",
          "genus": "IterateImage",
          "parents": {
            "source": "144",
            "map": "145"
          },
          "constraint": "IterateImage",
          "style": {
            "opacity": 0.49999237060546875,
            "layerOrder": 19
          }
        },
        "149": {
          "kind": "IterateImage",
          "genus": "IterateImage",
          "parents": {
            "source": "142",
            "map": "145"
          },
          "constraint": "IterateImage",
          "style": {
            "line-style": "solid",
            "width": 3
          }
        },
        "150": {
          "kind": "Button",
          "genus": "Action",
          "parents": {
            "0": "141",
            "1": "139",
            "2": "144",
            "3": "142"
          },
          "geom": {
            "loc": {
              "x": 1323,
              "y": 139
            }
          },
          "latentVisibility": true,
          "label": "Show Path Objects",
          "style": {
            "hidden": true,
            "color": "rgb(255,128,0)",
            "label": {
              "font-family": 1,
              "font-size": 10
            }
          },
          "constraint": "ActionButtonToggleHideShow",
          "messages": [
            "Hide Path Objects",
            "Show Path Objects"
          ],
          "shouldAutogenerateLabel": true
        },
        "151": {
          "kind": "Expression",
          "genus": "DistanceMeasure",
          "parents": {
            "0": "4",
            "1": "23"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 1161,
              "y": 959
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "@0*@1",
          "latentVisibility": true,
          "style": {
            "hidden": true,
            "font-family": 1,
            "font-size": 10,
            "font-weight": "normal",
            "color": "black",
            "precision": 2,
            "nameOrigin": "namedFromTemplate"
          }
        },
        "152": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "136",
            "distance": "6"
          },
          "angle": 0,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true
          }
        },
        "153": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "152",
            "center": "136"
          },
          "angle": -0.78539816339745,
          "constraint": "Rotate",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true
          }
        },
        "154": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "153",
            "center": "136"
          },
          "angle": 3.1415926535897865,
          "constraint": "Rotate",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true
          }
        },
        "155": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "154",
            "p1": "153"
          },
          "constraint": "Segment",
          "style": {
            "hidden": true,
            "width": 1
          }
        },
        "156": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "source": "155",
            "center": "136"
          },
          "angle": -1.5707963267949,
          "constraint": "Rotate",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "width": 1
          }
        },
        "157": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "136",
            "distance": "23"
          },
          "angle": 0,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true
          }
        },
        "158": {
          "kind": "Map",
          "genus": "IterateMap",
          "parents": {
            "0": "152",
            "1": "153",
            "2": "154",
            "3": "155",
            "4": "156",
            "5": "157",
            "preimage0": "136",
            "map0image0": "157",
            "depth": "134"
          },
          "constraint": "IterateMapByParametricDepth",
          "rerandomizePointsOnPaths": false,
          "finalIterationOnly": false
        },
        "159": {
          "kind": "IterateImage",
          "genus": "IterateImage",
          "parents": {
            "source": "155",
            "map": "158"
          },
          "constraint": "IterateImage",
          "latentVisibility": true,
          "style": {
            "line-style": "solid",
            "width": 3
          }
        },
        "160": {
          "kind": "IterateImage",
          "genus": "IterateImage",
          "parents": {
            "source": "156",
            "map": "158"
          },
          "constraint": "IterateImage",
          "latentVisibility": true,
          "style": {
            "line-style": "solid",
            "width": 3
          }
        },
        "161": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "4",
            "1": "111",
            "2": "110",
            "3": "5"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 779,
              "y": 984
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "abs(@0)*@1+@2*(abs(@3))",
          "latentVisibility": true,
          "style": {
            "hidden": true,
            "font-family": 1,
            "font-size": 10,
            "font-weight": "normal",
            "color": "black",
            "precision": 2,
            "nameOrigin": "namedFromTemplate"
          }
        },
        "162": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "28",
            "distance": "23"
          },
          "angle": 3.1415926535897865,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true
          }
        },
        "163": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "162",
            "distance": "23"
          },
          "angle": 0,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true
          }
        },
        "164": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "162",
            "distance": "6"
          },
          "angle": 0,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true
          }
        },
        "165": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "164",
            "center": "162"
          },
          "angle": -0.78539816339745,
          "constraint": "Rotate",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true
          }
        },
        "166": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "165",
            "center": "162"
          },
          "angle": 3.1415926535897865,
          "constraint": "Rotate",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true
          }
        },
        "167": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "166",
            "p1": "165"
          },
          "constraint": "Segment",
          "style": {
            "hidden": true,
            "width": 1
          }
        },
        "168": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "source": "167",
            "center": "162"
          },
          "angle": -1.5707963267949,
          "constraint": "Rotate",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "width": 1
          }
        },
        "169": {
          "kind": "Map",
          "genus": "IterateMap",
          "parents": {
            "0": "164",
            "1": "165",
            "2": "166",
            "3": "167",
            "4": "168",
            "5": "163",
            "preimage0": "162",
            "map0image0": "163",
            "depth": "161"
          },
          "constraint": "IterateMapByParametricDepth",
          "rerandomizePointsOnPaths": false,
          "finalIterationOnly": false
        },
        "170": {
          "kind": "IterateImage",
          "genus": "IterateImage",
          "parents": {
            "source": "168",
            "map": "169"
          },
          "constraint": "IterateImage",
          "latentVisibility": true,
          "style": {
            "line-style": "solid",
            "width": 3
          }
        },
        "171": {
          "kind": "IterateImage",
          "genus": "IterateImage",
          "parents": {
            "source": "167",
            "map": "169"
          },
          "constraint": "IterateImage",
          "latentVisibility": true,
          "style": {
            "line-style": "solid",
            "width": 3
          }
        },
        "172": {
          "kind": "Circle",
          "genus": "Circle",
          "parents": {
            "p0": "162",
            "radius": "6"
          },
          "constraint": "CircleByRadius",
          "style": {
            "hidden": true,
            "width": 1
          }
        },
        "173": {
          "kind": "Text",
          "genus": "CompositeText",
          "parents": {
            "0": "20",
            "1": "19",
            "2": "74"
          },
          "constraint": "CompositeText",
          "geom": {
            "loc": {
              "x": 1584,
              "y": 456
            }
          },
          "textMFS": "<VL<H<T'You can remove '><?1xC0001<H<T'4'>>><T' '><SR100G1L1<T'red'>><T' counters from '><?1xC0002<H<T'6'>>><T' '><SR100G1L1<T'red'>><T' counters leaving a difference of '><?1xC0003<H<T'2'>>><T' '><SR100G1L1<T'red '>><T'counters.'>>>",
          "latentVisibility": true,
          "style": {
            "hidden": true,
            "font-family": 1,
            "font-size": 10,
            "font-weight": "normal",
            "text-decoration": "none",
            "color": "black"
          }
        },
        "174": {
          "kind": "Text",
          "genus": "CompositeText",
          "parents": {
            "0": "20",
            "1": "19",
            "2": "74"
          },
          "constraint": "CompositeText",
          "geom": {
            "loc": {
              "x": 1584,
              "y": 478
            }
          },
          "textMFS": "<VL<H<T'You can remove '><?1xC0001<H<T'4'>>><T' '><SR1G1L100<T'blue'>><T' counters from '><?1xC0002<H<T'6'>>><T' '><SR1G1L100<T'blue'>><T' counters leaving a difference of '><?1xC0003<H<T'2'>>><T' '><SR1G1L100<T'blue '>><T'counters.'>>>",
          "latentVisibility": true,
          "style": {
            "hidden": true,
            "font-family": 1,
            "font-size": 10,
            "font-weight": "normal",
            "text-decoration": "none",
            "color": "black"
          }
        },
        "175": {
          "kind": "Text",
          "genus": "CompositeText",
          "parents": {
            "0": "20",
            "1": "19",
            "2": "115",
            "3": "74"
          },
          "constraint": "CompositeText",
          "geom": {
            "loc": {
              "x": 1584,
              "y": 500
            }
          },
          "textMFS": "<VL<H<T'To remove '><?1xC0001<H<T'4'>>><T' '><SR100G1L1<T'red'>><T' counters from '><?1xC0002<H<T'6'>>><T' '><SR100G1L1<T'red'>><T' counters  requires the use of '><?1xC0003<H<T'0'>>><T' zero pairs leaving a difference of '><?1xC0004<H<T'2'>>><T' '><SR1G1L100<T'blue '>><T'counters.'>>>",
          "latentVisibility": true,
          "style": {
            "hidden": true,
            "font-family": 1,
            "font-size": 10,
            "font-weight": "normal",
            "text-decoration": "none",
            "color": "black"
          }
        },
        "176": {
          "kind": "Text",
          "genus": "CompositeText",
          "parents": {
            "0": "20",
            "1": "19",
            "2": "115",
            "3": "74"
          },
          "constraint": "CompositeText",
          "geom": {
            "loc": {
              "x": 1584,
              "y": 522
            }
          },
          "textMFS": "<VL<H<T'To remove '><?1xC0001<H<T'4'>>><T' '><SR1G1L100<T'blue'>><T' counters from '><?1xC0002<H<T'6'>>><T' '><SR1G1L100<T'blue'>><T' counters requires the use of '><?1xC0003<H<T'0'>>><T' zero pairs leaving a difference of '><?1xC0004<H<T'2'>>><T' '><SR100G1L1<T'red '>><T'counters.'>>>",
          "latentVisibility": true,
          "style": {
            "hidden": true,
            "font-family": 1,
            "font-size": 10,
            "font-weight": "normal",
            "text-decoration": "none",
            "color": "black"
          }
        },
        "177": {
          "kind": "Text",
          "genus": "CompositeText",
          "parents": {
            "0": "20",
            "1": "19",
            "2": "115",
            "3": "74"
          },
          "constraint": "CompositeText",
          "geom": {
            "loc": {
              "x": 1584,
              "y": 544
            }
          },
          "textMFS": "<VL<H<T'To remove '><?1xC0001<H<T'4'>>><T' '><SR1G1L100<T'blue'>><T' counters from '><?1xC0002<H<T'6'>>><T' '><SR100G1L1<T'red'>><T' counters requires the use of '><?1xC0003<H<T'0'>>><T' zero pairs leaving a difference of '><?1xC0004<H<T'2'>>><T' '><SR100G1L1<T'red '>><T'counters.'>>>",
          "latentVisibility": true,
          "style": {
            "hidden": true,
            "font-family": 1,
            "font-size": 10,
            "font-weight": "normal",
            "text-decoration": "none",
            "color": "black"
          }
        },
        "178": {
          "kind": "Text",
          "genus": "CompositeText",
          "parents": {
            "0": "20",
            "1": "19",
            "2": "115",
            "3": "74"
          },
          "constraint": "CompositeText",
          "geom": {
            "loc": {
              "x": 1584,
              "y": 566
            }
          },
          "textMFS": "<VL<H<T'To remove '><?1xC0001<H<T'4'>>><T' '><SR100G1L1<T'red'>><T' counters from '><?1xC0002<H<T'6'>>><T' '><SR1G1L100<T'blue'>><T' counters requires the use of '><?1xC0003<H<T'0'>>><T' zero pairs leaving a difference of '><?1xC0004<H<T'2'>>><T' '><SR1G1L100<T'blue '>><T'counters.'>>>",
          "latentVisibility": true,
          "style": {
            "hidden": true,
            "font-family": 1,
            "font-size": 10,
            "font-weight": "normal",
            "text-decoration": "none",
            "color": "black"
          }
        },
        "179": {
          "kind": "Point",
          "genus": "Point",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 38,
              "y": 89
            }
          },
          "style": {
            "hidden": true
          }
        },
        "180": {
          "kind": "Point",
          "genus": "Point",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 700,
              "y": 89
            }
          },
          "style": {
            "hidden": true
          }
        },
        "181": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "179",
            "p1": "180"
          },
          "constraint": "Segment",
          "style": {
            "hidden": true,
            "width": 1
          }
        },
        "182": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "40",
            "1": "108"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 1828,
              "y": 279
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "abs(sgn(@0*@1))",
          "latentVisibility": true,
          "label": "(both -ve)^(mag[1] >= mag[2])",
          "style": {
            "hidden": true,
            "font-family": 1,
            "font-size": 10,
            "font-weight": "normal",
            "color": "black",
            "precision": 0,
            "nameOrigin": "namedFromLabel"
          }
        },
        "183": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "39",
            "1": "108"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 1828,
              "y": 233
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "abs(sgn(@0*@1))",
          "latentVisibility": true,
          "label": "(both +ve)^(mag[1] >= mag[2])",
          "style": {
            "hidden": true,
            "font-family": 1,
            "font-size": 10,
            "font-weight": "normal",
            "color": "black",
            "precision": 0,
            "nameOrigin": "namedFromLabel"
          }
        },
        "184": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "39",
            "1": "109"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 1828,
              "y": 325
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "abs(sgn(@0*@1))",
          "latentVisibility": true,
          "label": "(both +ve)^(m[8])",
          "style": {
            "hidden": true,
            "font-family": 1,
            "font-size": 10,
            "font-weight": "normal",
            "color": "black",
            "precision": 0,
            "nameOrigin": "namedFromLabel"
          }
        },
        "185": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "40",
            "1": "109"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 1828,
              "y": 371
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "abs(sgn(@0*@1))",
          "latentVisibility": true,
          "label": "(both -ve)^(m[8])",
          "style": {
            "hidden": true,
            "font-family": 1,
            "font-size": 10,
            "font-weight": "normal",
            "color": "black",
            "precision": 0,
            "nameOrigin": "namedFromLabel"
          }
        },
        "186": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "106"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 2066,
              "y": 235
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "1-@0",
          "latentVisibility": true,
          "label": "m[10]",
          "style": {
            "hidden": true,
            "font-family": 1,
            "font-size": 10,
            "font-weight": "normal",
            "color": "black",
            "precision": 2,
            "nameOrigin": "namedFromTemplate"
          }
        },
        "187": {
          "kind": "Text",
          "genus": "Caption",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 2066,
              "y": 253
            }
          },
          "textMFS": "<VL<T'diff signs and 1st int +ve'>>",
          "latentVisibility": true,
          "style": {
            "hidden": true,
            "font-family": 1,
            "font-size": 10,
            "font-weight": "normal",
            "text-decoration": "none",
            "color": "rgb(255,128,0)"
          }
        },
        "188": {
          "kind": "Text",
          "genus": "Caption",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 2066,
              "y": 319
            }
          },
          "textMFS": "<VL<T'diff signs and 1st int <=0'>>",
          "latentVisibility": true,
          "style": {
            "hidden": true,
            "font-family": 1,
            "font-size": 10,
            "font-weight": "normal",
            "text-decoration": "none",
            "color": "rgb(255,128,0)"
          }
        },
        "189": {
          "kind": "Text",
          "genus": "CompositeText",
          "parents": {
            "0": "20",
            "1": "115",
            "2": "74"
          },
          "constraint": "CompositeText",
          "geom": {
            "loc": {
              "x": 1584,
              "y": 588
            }
          },
          "textMFS": "<VL<H<T'To remove '><?1xC0001<H<T'4'>>><T' '><SR100G1L1<T'red'>><T' counters from 0 requires the use of '><?1xC0002<H<T'0'>>><T' zero pairs leaving a difference of '><?1xC0003<H<T'2'>>><T' '><SR1G1L100<T'blue '>><T'counters.'>>>",
          "latentVisibility": true,
          "style": {
            "hidden": true,
            "font-family": 1,
            "font-size": 10,
            "font-weight": "normal",
            "text-decoration": "none",
            "color": "black"
          }
        },
        "190": {
          "kind": "Text",
          "genus": "CompositeText",
          "parents": {
            "0": "20",
            "1": "115",
            "2": "74"
          },
          "constraint": "CompositeText",
          "geom": {
            "loc": {
              "x": 1584,
              "y": 610
            }
          },
          "textMFS": "<VL<H<T'To remove '><?1xC0001<H<T'4'>>><T' '><SR1G1L100<T'blue'>><T' counters from 0 requires the use of '><?1xC0002<H<T'0'>>><T' zero pairs leaving a difference of '><?1xC0003<H<T'2'>>><T' '><SR100G1L1<T'red '>><T'counters.'>>>",
          "latentVisibility": true,
          "style": {
            "hidden": true,
            "font-family": 1,
            "font-size": 10,
            "font-weight": "normal",
            "text-decoration": "none",
            "color": "black"
          }
        },
        "191": {
          "kind": "Text",
          "genus": "CompositeText",
          "parents": {
            "0": "19",
            "1": "74"
          },
          "constraint": "CompositeText",
          "geom": {
            "loc": {
              "x": 1584,
              "y": 632
            }
          },
          "textMFS": "<VL<H<T'You can remove 0 counters from '><?1xC0001<H<T'6'>>><T' '><SR100G1L1<T'red'>><T' counters leaving a difference of '><?1xC0002<H<T'2'>>><T' '><SR100G1L1<T'red '>><T'counters.'>>>",
          "latentVisibility": true,
          "style": {
            "hidden": true,
            "font-family": 1,
            "font-size": 10,
            "font-weight": "normal",
            "text-decoration": "none",
            "color": "black"
          }
        },
        "192": {
          "kind": "Text",
          "genus": "CompositeText",
          "parents": {
            "0": "19",
            "1": "74"
          },
          "constraint": "CompositeText",
          "geom": {
            "loc": {
              "x": 1584,
              "y": 654
            }
          },
          "textMFS": "<VL<H<T'You can remove 0 counters from '><?1xC0001<H<T'6'>>><T' '><SR1G1L100<T'blue'>><T' counters leaving a difference of '><?1xC0002<H<T'2'>>><T' '><SR1G1L100<T'blue '>><T'counters.'>>>",
          "latentVisibility": true,
          "style": {
            "hidden": true,
            "font-family": 1,
            "font-size": 10,
            "font-weight": "normal",
            "text-decoration": "none",
            "color": "black"
          }
        },
        "193": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "183"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 40,
              "y": 591
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "1/@0*2",
          "style": {
            "hidden": true,
            "font-family": 1,
            "font-size": 10,
            "font-weight": "normal",
            "color": "black",
            "precision": 2,
            "nameOrigin": "namedFromTemplate"
          }
        },
        "194": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "184"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 70,
              "y": 630
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "1/@0*2",
          "style": {
            "hidden": true,
            "font-family": 1,
            "font-size": 10,
            "font-weight": "normal",
            "color": "black",
            "precision": 2,
            "nameOrigin": "namedFromTemplate"
          }
        },
        "195": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "2"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 1582,
              "y": 305
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "1-abs(sgn(@0))",
          "latentVisibility": true,
          "label": "second integer=0",
          "style": {
            "hidden": true,
            "font-family": 1,
            "font-size": 10,
            "font-weight": "normal",
            "color": "black",
            "precision": 0,
            "nameOrigin": "namedFromLabel"
          }
        },
        "196": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "1"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 1582,
              "y": 323
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "(1+sgn(-.5+sgn(@0)))/2",
          "latentVisibility": true,
          "label": "first integer>0",
          "style": {
            "hidden": true,
            "font-family": 1,
            "font-size": 10,
            "font-weight": "normal",
            "color": "black",
            "precision": 0,
            "nameOrigin": "namedFromLabel"
          }
        },
        "197": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "1"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 1582,
              "y": 341
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "(1-sgn(.5+sgn(@0)))/2",
          "latentVisibility": true,
          "label": "first integer<0",
          "style": {
            "hidden": true,
            "font-family": 1,
            "font-size": 10,
            "font-weight": "normal",
            "color": "black",
            "precision": 0,
            "nameOrigin": "namedFromLabel"
          }
        },
        "198": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "195",
            "1": "196"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 1582,
              "y": 359
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "abs(sgn(@0*@1))",
          "latentVisibility": true,
          "label": "(second integer=0)^(first integer>0)",
          "style": {
            "hidden": true,
            "font-family": 1,
            "font-size": 10,
            "font-weight": "normal",
            "precision": 0,
            "nameOrigin": "namedFromLabel"
          }
        },
        "199": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "195",
            "1": "197"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 1582,
              "y": 377
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "abs(sgn(@0*@1))",
          "latentVisibility": true,
          "label": "(second integer=0)^(first integer<0)",
          "style": {
            "hidden": true,
            "font-family": 1,
            "font-size": 10,
            "font-weight": "normal",
            "precision": 0,
            "nameOrigin": "namedFromLabel"
          }
        },
        "200": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "198"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 532,
              "y": 48
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "1/@0*2",
          "style": {
            "hidden": true,
            "font-family": 1,
            "font-size": 10,
            "font-weight": "normal",
            "color": "black",
            "precision": 2,
            "nameOrigin": "namedFromTemplate"
          }
        },
        "201": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "195"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 353,
              "y": 695
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "1/@0*2",
          "style": {
            "hidden": true,
            "font-family": 1,
            "font-size": 10,
            "font-weight": "normal",
            "color": "black",
            "precision": 2,
            "nameOrigin": "namedFromTemplate"
          }
        },
        "202": {
          "kind": "Text",
          "genus": "Caption",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 1582,
              "y": 285
            }
          },
          "textMFS": "<VL<T'second integer zero'>>",
          "latentVisibility": true,
          "style": {
            "hidden": true,
            "font-family": 1,
            "font-size": 10,
            "font-weight": "normal",
            "text-decoration": "none",
            "color": "rgb(255,128,0)"
          }
        },
        "203": {
          "kind": "Text",
          "genus": "Caption",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 1828,
              "y": 213
            }
          },
          "textMFS": "<VL<T'same sign'>>",
          "latentVisibility": true,
          "style": {
            "hidden": true,
            "font-family": 1,
            "font-size": 10,
            "font-weight": "normal",
            "text-decoration": "none",
            "color": "rgb(255,128,0)"
          }
        },
        "204": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "1"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 1582,
              "y": 195
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "1-abs(sgn(@0))",
          "latentVisibility": true,
          "label": "first integer=0",
          "style": {
            "hidden": true,
            "font-family": 1,
            "font-size": 10,
            "font-weight": "normal",
            "color": "black",
            "precision": 0,
            "nameOrigin": "namedFromLabel"
          }
        },
        "205": {
          "kind": "Text",
          "genus": "Caption",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 1582,
              "y": 175
            }
          },
          "textMFS": "<VL<T'first integer zero'>>",
          "latentVisibility": true,
          "style": {
            "hidden": true,
            "font-family": 1,
            "font-size": 10,
            "font-weight": "normal",
            "text-decoration": "none",
            "color": "rgb(255,128,0)"
          }
        },
        "206": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "2"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 1582,
              "y": 213
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "(1+sgn(-.5+sgn(@0)))/2",
          "latentVisibility": true,
          "label": "second integer>0",
          "style": {
            "hidden": true,
            "font-family": 1,
            "font-size": 10,
            "font-weight": "normal",
            "color": "black",
            "precision": 0,
            "nameOrigin": "namedFromLabel"
          }
        },
        "207": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "2"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 1582,
              "y": 231
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "(1-sgn(.5+sgn(@0)))/2",
          "latentVisibility": true,
          "label": "second integer<0",
          "style": {
            "hidden": true,
            "font-family": 1,
            "font-size": 10,
            "font-weight": "normal",
            "color": "black",
            "precision": 0,
            "nameOrigin": "namedFromLabel"
          }
        },
        "208": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "204",
            "1": "206"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 1582,
              "y": 249
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "abs(sgn(@0*@1))",
          "latentVisibility": true,
          "label": "(first integer=0)^(second integer>0)",
          "style": {
            "hidden": true,
            "font-family": 1,
            "font-size": 10,
            "font-weight": "normal",
            "precision": 0,
            "nameOrigin": "namedFromLabel"
          }
        },
        "209": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "204",
            "1": "207"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 1582,
              "y": 267
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "abs(sgn(@0*@1))",
          "latentVisibility": true,
          "label": "(first integer=0)^(second integer<0)",
          "style": {
            "hidden": true,
            "font-family": 1,
            "font-size": 10,
            "font-weight": "normal",
            "precision": 0,
            "nameOrigin": "namedFromLabel"
          }
        },
        "210": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "204",
            "1": "195"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 1581,
              "y": 405
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "sgn(abs(sgn(@0))+abs(sgn(@1)))",
          "latentVisibility": true,
          "label": "(first integer=0)V(second integer=0)",
          "style": {
            "hidden": true,
            "font-family": 1,
            "font-size": 10,
            "font-weight": "normal",
            "color": "black",
            "precision": 0,
            "nameOrigin": "namedFromLabel"
          }
        },
        "211": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "210"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 1828,
              "y": 196
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "1-@0",
          "latentVisibility": true,
          "label": "m[12]",
          "style": {
            "hidden": true,
            "font-family": 1,
            "font-size": 10,
            "font-weight": "normal",
            "precision": 2,
            "nameOrigin": "namedFromTemplate"
          }
        },
        "212": {
          "kind": "Text",
          "genus": "Caption",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 1828,
              "y": 176
            }
          },
          "textMFS": "<VL<T'neither integers are zero cases'>>",
          "latentVisibility": true,
          "style": {
            "hidden": true,
            "font-family": 1,
            "font-size": 10,
            "font-weight": "normal",
            "text-decoration": "none",
            "color": "rgb(255,128,0)"
          }
        },
        "213": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "211",
            "1": "183"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 1828,
              "y": 256
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "abs(sgn(@0*@1))",
          "latentVisibility": true,
          "label": "(m[12])^((both +ve)^(mag[1] >= mag[2]))",
          "style": {
            "hidden": true,
            "font-family": 1,
            "font-size": 10,
            "font-weight": "normal",
            "precision": 0,
            "nameOrigin": "namedFromLabel"
          }
        },
        "214": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "211",
            "1": "182"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 1828,
              "y": 302
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "abs(sgn(@0*@1))",
          "latentVisibility": true,
          "label": "(m[12])^((both -ve)^(mag[1] >= mag[2]))",
          "style": {
            "hidden": true,
            "font-family": 1,
            "font-size": 10,
            "font-weight": "normal",
            "precision": 0,
            "nameOrigin": "namedFromLabel"
          }
        },
        "215": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "211",
            "1": "184"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 1828,
              "y": 348
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "abs(sgn(@0*@1))",
          "latentVisibility": true,
          "label": "(m[12])^((both +ve)^(m[8]))",
          "style": {
            "hidden": true,
            "font-family": 1,
            "font-size": 10,
            "font-weight": "normal",
            "precision": 0,
            "nameOrigin": "namedFromLabel"
          }
        },
        "216": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "211",
            "1": "185"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 1828,
              "y": 394
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "abs(sgn(@0*@1))",
          "latentVisibility": true,
          "label": "(m[12])^((both -ve)^(m[8]))",
          "style": {
            "hidden": true,
            "font-family": 1,
            "font-size": 10,
            "font-weight": "normal",
            "precision": 0,
            "nameOrigin": "namedFromLabel"
          }
        },
        "217": {
          "kind": "Text",
          "genus": "Caption",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 2066,
              "y": 215
            }
          },
          "textMFS": "<VL<T'different sign'>>",
          "latentVisibility": true,
          "style": {
            "hidden": true,
            "font-family": 1,
            "font-size": 10,
            "font-weight": "normal",
            "text-decoration": "none",
            "color": "rgb(255,128,0)"
          }
        },
        "218": {
          "kind": "Point",
          "genus": "PointOnPath",
          "parents": {
            "path": "181"
          },
          "value": 0.7824773413897281,
          "constraint": "PointOnPath",
          "style": {
            "hidden": true
          }
        },
        "219": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "218"
          },
          "angle": -1.5707963267949,
          "distance": 14.173228346456693,
          "constraint": "TranslateFixDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "color": "red",
            "radius": 2
          }
        },
        "220": {
          "kind": "Point",
          "genus": "PointOnPath",
          "parents": {
            "path": "181"
          },
          "value": 0.6132930513595166,
          "constraint": "PointOnPath",
          "style": {
            "hidden": true
          }
        },
        "221": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "220"
          },
          "angle": -1.5707963267949,
          "distance": 14.173228346456693,
          "constraint": "TranslateFixDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "color": "red",
            "radius": 2
          }
        },
        "222": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "221",
            "center": "220",
            "measure": "200"
          },
          "constraint": "DilateMeasureFactor",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "color": "red",
            "radius": 2
          }
        },
        "223": {
          "kind": "Text",
          "genus": "CompositeText",
          "parents": {
            "p0": "222",
            "text": "191"
          },
          "constraint": "Pegged",
          "style": {
            "font-size": 22,
            "font-weight": "normal",
            "text-decoration": "none",
            "color": "black"
          }
        },
        "224": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "213"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 550,
              "y": 711
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "1/@0*2",
          "style": {
            "hidden": true,
            "font-family": 1,
            "font-size": 10,
            "font-weight": "normal",
            "color": "black",
            "precision": 2,
            "nameOrigin": "namedFromTemplate"
          }
        },
        "225": {
          "kind": "Point",
          "genus": "PointOnPath",
          "parents": {
            "path": "181"
          },
          "value": 0.6329305135951662,
          "constraint": "PointOnPath",
          "style": {
            "hidden": true
          }
        },
        "226": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "225"
          },
          "angle": -1.5707963267949,
          "distance": 14.173228346456693,
          "constraint": "TranslateFixDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "color": "red",
            "radius": 2
          }
        },
        "227": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "226",
            "center": "225",
            "measure": "224"
          },
          "constraint": "DilateMeasureFactor",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "color": "red",
            "radius": 2
          }
        },
        "228": {
          "kind": "Text",
          "genus": "CompositeText",
          "parents": {
            "p0": "227",
            "text": "173"
          },
          "constraint": "Pegged",
          "style": {
            "font-size": 22,
            "font-weight": "normal",
            "text-decoration": "none",
            "color": "black"
          }
        },
        "229": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "215"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 550,
              "y": 711
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "1/@0*2",
          "style": {
            "hidden": true,
            "font-family": 1,
            "font-size": 10,
            "font-weight": "normal",
            "color": "black",
            "precision": 2,
            "nameOrigin": "namedFromTemplate"
          }
        },
        "230": {
          "kind": "Point",
          "genus": "PointOnPath",
          "parents": {
            "path": "181"
          },
          "value": 0.8021148036253777,
          "constraint": "PointOnPath",
          "style": {
            "hidden": true
          }
        },
        "231": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "230"
          },
          "angle": -1.5707963267949,
          "distance": 14.173228346456693,
          "constraint": "TranslateFixDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "color": "red",
            "radius": 2
          }
        },
        "232": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "231",
            "center": "230",
            "measure": "229"
          },
          "constraint": "DilateMeasureFactor",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "color": "red",
            "radius": 2
          }
        },
        "233": {
          "kind": "Text",
          "genus": "CompositeText",
          "parents": {
            "p0": "232",
            "text": "175"
          },
          "constraint": "Pegged",
          "style": {
            "font-weight": "normal",
            "text-decoration": "none",
            "color": "black"
          }
        },
        "234": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "214"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 550,
              "y": 711
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "1/@0*2",
          "style": {
            "hidden": true,
            "font-family": 1,
            "font-size": 10,
            "font-weight": "normal",
            "color": "black",
            "precision": 2,
            "nameOrigin": "namedFromTemplate"
          }
        },
        "235": {
          "kind": "Point",
          "genus": "PointOnPath",
          "parents": {
            "path": "181"
          },
          "value": 0.620845921450151,
          "constraint": "PointOnPath",
          "style": {
            "hidden": true
          }
        },
        "236": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "235"
          },
          "angle": -1.5707963267949,
          "distance": 14.173228346456693,
          "constraint": "TranslateFixDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "color": "red",
            "radius": 2
          }
        },
        "237": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "236",
            "center": "235",
            "measure": "234"
          },
          "constraint": "DilateMeasureFactor",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "color": "red",
            "radius": 2
          }
        },
        "238": {
          "kind": "Text",
          "genus": "CompositeText",
          "parents": {
            "p0": "237",
            "text": "174"
          },
          "constraint": "Pegged",
          "style": {
            "font-weight": "normal",
            "text-decoration": "none",
            "color": "black"
          }
        },
        "239": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "216"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 550,
              "y": 711
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "1/@0*2",
          "style": {
            "hidden": true,
            "font-family": 1,
            "font-size": 10,
            "font-weight": "normal",
            "color": "black",
            "precision": 2,
            "nameOrigin": "namedFromTemplate"
          }
        },
        "240": {
          "kind": "Point",
          "genus": "PointOnPath",
          "parents": {
            "path": "181"
          },
          "value": 0.7854984894259819,
          "constraint": "PointOnPath",
          "style": {
            "hidden": true
          }
        },
        "241": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "240"
          },
          "angle": -1.5707963267949,
          "distance": 14.173228346456693,
          "constraint": "TranslateFixDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "color": "red",
            "radius": 2
          }
        },
        "242": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "241",
            "center": "240",
            "measure": "239"
          },
          "constraint": "DilateMeasureFactor",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "color": "red",
            "radius": 2
          }
        },
        "243": {
          "kind": "Text",
          "genus": "CompositeText",
          "parents": {
            "p0": "242",
            "text": "176"
          },
          "constraint": "Pegged",
          "style": {
            "font-weight": "normal",
            "text-decoration": "none",
            "color": "black"
          }
        },
        "244": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "199"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 550,
              "y": 711
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "1/@0*2",
          "style": {
            "hidden": true,
            "font-family": 1,
            "font-size": 10,
            "font-weight": "normal",
            "color": "black",
            "precision": 2,
            "nameOrigin": "namedFromTemplate"
          }
        },
        "245": {
          "kind": "Point",
          "genus": "PointOnPath",
          "parents": {
            "path": "181"
          },
          "value": 0.5770392749244713,
          "constraint": "PointOnPath",
          "style": {
            "hidden": true
          }
        },
        "246": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "245"
          },
          "angle": -1.5707963267949,
          "distance": 14.173228346456693,
          "constraint": "TranslateFixDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "color": "red",
            "radius": 2
          }
        },
        "247": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "246",
            "center": "245",
            "measure": "244"
          },
          "constraint": "DilateMeasureFactor",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "color": "red",
            "radius": 2
          }
        },
        "248": {
          "kind": "Text",
          "genus": "CompositeText",
          "parents": {
            "p0": "247",
            "text": "192"
          },
          "constraint": "Pegged",
          "style": {
            "font-weight": "normal",
            "text-decoration": "none",
            "color": "black"
          }
        },
        "249": {
          "kind": "Point",
          "genus": "PointOnPath",
          "parents": {
            "path": "181"
          },
          "value": 0.7915407854984894,
          "constraint": "PointOnPath",
          "style": {
            "hidden": true
          }
        },
        "250": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "249"
          },
          "angle": -1.5707963267949,
          "distance": 14.173228346456693,
          "constraint": "TranslateFixDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "color": "red",
            "radius": 2
          }
        },
        "251": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "208"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 550,
              "y": 711
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "1/@0*2",
          "style": {
            "hidden": true,
            "font-family": 1,
            "font-size": 10,
            "font-weight": "normal",
            "color": "black",
            "precision": 2,
            "nameOrigin": "namedFromTemplate"
          }
        },
        "252": {
          "kind": "Point",
          "genus": "PointOnPath",
          "parents": {
            "path": "181"
          },
          "value": 0.6042296072507553,
          "constraint": "PointOnPath",
          "style": {
            "hidden": true
          }
        },
        "253": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "252"
          },
          "angle": -1.5707963267949,
          "distance": 14.173228346456693,
          "constraint": "TranslateFixDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "color": "red",
            "radius": 2
          }
        },
        "254": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "253",
            "center": "252",
            "measure": "251"
          },
          "constraint": "DilateMeasureFactor",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "color": "red",
            "radius": 2
          }
        },
        "255": {
          "kind": "Text",
          "genus": "CompositeText",
          "parents": {
            "p0": "254",
            "text": "189"
          },
          "constraint": "Pegged",
          "style": {
            "font-family": 1,
            "font-size": 16,
            "font-weight": "normal",
            "text-decoration": "none",
            "color": "black"
          }
        },
        "256": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "209"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 550,
              "y": 711
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "1/@0*2",
          "style": {
            "hidden": true,
            "font-family": 1,
            "font-size": 10,
            "font-weight": "normal",
            "color": "black",
            "precision": 2,
            "nameOrigin": "namedFromTemplate"
          }
        },
        "257": {
          "kind": "Point",
          "genus": "PointOnPath",
          "parents": {
            "path": "181"
          },
          "value": 0.6012084592145015,
          "constraint": "PointOnPath",
          "style": {
            "hidden": true
          }
        },
        "258": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "257"
          },
          "angle": -1.5707963267949,
          "distance": 14.173228346456693,
          "constraint": "TranslateFixDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "color": "red",
            "radius": 2
          }
        },
        "259": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "258",
            "center": "257",
            "measure": "256"
          },
          "constraint": "DilateMeasureFactor",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "color": "red",
            "radius": 2
          }
        },
        "260": {
          "kind": "Text",
          "genus": "CompositeText",
          "parents": {
            "p0": "259",
            "text": "190"
          },
          "constraint": "Pegged",
          "style": {
            "font-family": 1,
            "font-size": 16,
            "font-weight": "normal",
            "text-decoration": "none",
            "color": "black"
          }
        },
        "261": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "204",
            "1": "195"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 1581,
              "y": 422
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "abs(sgn(@0*@1))",
          "latentVisibility": true,
          "label": "(first integer=0)^(second integer=0)",
          "style": {
            "hidden": true,
            "font-family": 1,
            "font-size": 10,
            "font-weight": "normal",
            "color": "black",
            "precision": 0,
            "nameOrigin": "namedFromLabel"
          }
        },
        "262": {
          "kind": "Text",
          "genus": "Caption",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 1584,
              "y": 676
            }
          },
          "textMFS": "<VL<T'You can remove 0 counters from 0 leaving a difference of 0.'>>",
          "latentVisibility": true,
          "style": {
            "hidden": true,
            "font-family": 1,
            "font-size": 10,
            "font-weight": "normal",
            "text-decoration": "none",
            "color": "black"
          }
        },
        "263": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "261"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 69,
              "y": 455
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "1/@0*2",
          "style": {
            "hidden": true,
            "font-family": 1,
            "font-size": 10,
            "font-weight": "normal",
            "color": "black",
            "precision": 2,
            "nameOrigin": "namedFromTemplate"
          }
        },
        "264": {
          "kind": "Point",
          "genus": "PointOnPath",
          "parents": {
            "path": "181"
          },
          "value": 0.34441087613293053,
          "constraint": "PointOnPath",
          "style": {
            "hidden": true
          }
        },
        "265": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "264"
          },
          "angle": -1.5707963267949,
          "distance": 14.173228346456693,
          "constraint": "TranslateFixDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "color": "red",
            "radius": 2
          }
        },
        "266": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "265",
            "center": "264",
            "measure": "263"
          },
          "constraint": "DilateMeasureFactor",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "color": "red",
            "radius": 2
          }
        },
        "267": {
          "kind": "Text",
          "genus": "CompositeText",
          "parents": {
            "p0": "266",
            "text": "262"
          },
          "constraint": "Pegged",
          "style": {
            "font-family": 1,
            "font-size": 16,
            "font-weight": "normal",
            "text-decoration": "none",
            "color": "black"
          }
        },
        "268": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "4"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 2075,
              "y": 193
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "(1+sgn(-.5+sgn(@0)))/2",
          "latentVisibility": true,
          "label": "m[1]>0",
          "style": {
            "hidden": true,
            "font-family": 1,
            "font-size": 10,
            "font-weight": "normal",
            "color": "black",
            "precision": 0,
            "nameOrigin": "namedFromLabel"
          }
        },
        "269": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "268"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 2073,
              "y": 167
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "1-@0",
          "latentVisibility": true,
          "label": "m[10]",
          "style": {
            "hidden": true,
            "font-family": 1,
            "font-size": 10,
            "font-weight": "normal",
            "color": "black",
            "precision": 2,
            "nameOrigin": "namedFromTemplate"
          }
        },
        "270": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "186",
            "1": "269"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 2066,
              "y": 339
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "abs(sgn(@0*@1))",
          "latentVisibility": true,
          "label": "(m[10])^(m[10])",
          "style": {
            "hidden": true,
            "font-family": 1,
            "font-size": 10,
            "font-weight": "normal",
            "color": "black",
            "precision": 0,
            "nameOrigin": "namedFromLabel"
          }
        },
        "271": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "211",
            "1": "270"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 2066,
              "y": 362
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "abs(sgn(@0*@1))",
          "latentVisibility": true,
          "label": "(m[12])^((m[10])^(m[10]))",
          "style": {
            "hidden": true,
            "font-family": 1,
            "font-size": 10,
            "font-weight": "normal",
            "color": "black",
            "precision": 0,
            "nameOrigin": "namedFromLabel"
          }
        },
        "272": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "271"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 550,
              "y": 711
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "1/@0*2",
          "style": {
            "hidden": true,
            "font-family": 1,
            "font-size": 10,
            "font-weight": "normal",
            "color": "black",
            "precision": 2,
            "nameOrigin": "namedFromTemplate"
          }
        },
        "273": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "250",
            "center": "249",
            "measure": "272"
          },
          "constraint": "DilateMeasureFactor",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "color": "red",
            "radius": 2
          }
        },
        "274": {
          "kind": "Text",
          "genus": "CompositeText",
          "parents": {
            "p0": "273",
            "text": "178"
          },
          "constraint": "Pegged",
          "style": {
            "font-weight": "normal",
            "text-decoration": "none",
            "color": "black"
          }
        },
        "275": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "186",
            "1": "268"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 2066,
              "y": 273
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "abs(sgn(@0*@1))",
          "latentVisibility": true,
          "label": "(m[10])^(m[1]>0)",
          "style": {
            "hidden": true,
            "font-family": 1,
            "font-size": 10,
            "font-weight": "normal",
            "color": "black",
            "precision": 0,
            "nameOrigin": "namedFromLabel"
          }
        },
        "276": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "211",
            "1": "275"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 2066,
              "y": 296
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "abs(sgn(@0*@1))",
          "latentVisibility": true,
          "label": "(m[12])^((m[10])^(m[1]>0))",
          "style": {
            "hidden": true,
            "font-family": 1,
            "font-size": 10,
            "font-weight": "normal",
            "color": "black",
            "precision": 0,
            "nameOrigin": "namedFromLabel"
          }
        },
        "277": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "276"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 547,
              "y": 887
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "1/@0*2",
          "style": {
            "hidden": true,
            "font-family": 1,
            "font-size": 10,
            "font-weight": "normal",
            "color": "black",
            "precision": 2,
            "nameOrigin": "namedFromTemplate"
          }
        },
        "278": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "219",
            "center": "218",
            "measure": "277"
          },
          "constraint": "DilateMeasureFactor",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "color": "red",
            "radius": 2
          }
        },
        "279": {
          "kind": "Text",
          "genus": "CompositeText",
          "parents": {
            "p0": "278",
            "text": "177"
          },
          "constraint": "Pegged",
          "style": {
            "font-weight": "normal",
            "text-decoration": "none",
            "color": "black"
          }
        },
        "280": {
          "kind": "Button",
          "genus": "Action",
          "parents": {
            "0": "4",
            "1": "5",
            "2": "6",
            "3": "7",
            "4": "8",
            "5": "9",
            "6": "10",
            "7": "11",
            "8": "12",
            "9": "13",
            "10": "14",
            "11": "15",
            "12": "16",
            "13": "17",
            "14": "18",
            "15": "19",
            "16": "20",
            "17": "21",
            "18": "22",
            "19": "23",
            "20": "24",
            "21": "33",
            "22": "37",
            "23": "38",
            "24": "39",
            "25": "40",
            "26": "41",
            "27": "42",
            "28": "43",
            "29": "44",
            "30": "47",
            "31": "48",
            "32": "49",
            "33": "50",
            "34": "52",
            "35": "53",
            "36": "56",
            "37": "57",
            "38": "58",
            "39": "61",
            "40": "62",
            "41": "63",
            "42": "64",
            "43": "65",
            "44": "74",
            "45": "77",
            "46": "78",
            "47": "79",
            "48": "80",
            "49": "86",
            "50": "87",
            "51": "88",
            "52": "89",
            "53": "90",
            "54": "106",
            "55": "107",
            "56": "108",
            "57": "109",
            "58": "110",
            "59": "111",
            "60": "112",
            "61": "113",
            "62": "114",
            "63": "115",
            "64": "116",
            "65": "117",
            "66": "118",
            "67": "119",
            "68": "120",
            "69": "121",
            "70": "123",
            "71": "124",
            "72": "150",
            "73": "173",
            "74": "174",
            "75": "175",
            "76": "176",
            "77": "177",
            "78": "178",
            "79": "189",
            "80": "190",
            "81": "191",
            "82": "192",
            "83": "195",
            "84": "196",
            "85": "197",
            "86": "198",
            "87": "199",
            "88": "202",
            "89": "204",
            "90": "205",
            "91": "206",
            "92": "207",
            "93": "208",
            "94": "209",
            "95": "210",
            "96": "261",
            "97": "262",
            "98": "182",
            "99": "183",
            "100": "184",
            "101": "185",
            "102": "186",
            "103": "187",
            "104": "188",
            "105": "203",
            "106": "211",
            "107": "212",
            "108": "213",
            "109": "214",
            "110": "215",
            "111": "216",
            "112": "217",
            "113": "268",
            "114": "269",
            "115": "270",
            "116": "271",
            "117": "275",
            "118": "276",
            "119": "122",
            "120": "125",
            "121": "126",
            "122": "127",
            "123": "128",
            "124": "129",
            "125": "130",
            "126": "131",
            "127": "132",
            "128": "133",
            "129": "134",
            "130": "135",
            "131": "151",
            "132": "161"
          },
          "geom": {
            "loc": {
              "x": 1548,
              "y": -4
            }
          },
          "label": "Show Objects",
          "style": {
            "color": "rgb(255,128,0)",
            "label": {
              "font-family": 1,
              "font-size": 10
            }
          },
          "constraint": "ActionButtonToggleHideShow",
          "messages": [
            "Hide Objects",
            "Show Objects"
          ],
          "shouldAutogenerateLabel": true
        },
        "281": {
          "kind": "Button",
          "genus": "Action",
          "parents": {
            "0": "170",
            "1": "171",
            "2": "160",
            "3": "159"
          },
          "geom": {
            "loc": {
              "x": 615,
              "y": 262
            }
          },
          "label": "Hide x's",
          "constraint": "ActionButtonToggleHideShow",
          "messages": [
            "Hide x's",
            "Show x's"
          ],
          "fade": true
        },
        "282": {
          "kind": "Text",
          "genus": "Caption",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 23,
              "y": 380
            }
          },
          "textMFS": "<VL<T'Let\\'s explore what happens when you add subtract two integers using counters. '><S#E<T' '>><T'Enter integers into both boxes above or use \\\"+\\\" and \\\"-\\\" to change the values.'>>",
          "style": {
            "font-size": 22,
            "font-weight": "normal",
            "text-decoration": "none",
            "color": "black"
          }
        }
      }
    }
  ]
};