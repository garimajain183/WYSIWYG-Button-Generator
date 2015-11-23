var cssText              = ''
var cssProperties = new Array();

cssProperties['width']              = "100";
cssProperties['height']             = "100";
cssProperties['fontSize']           = "14";
cssProperties['fontWeight']         = "400";
cssProperties['fontColor']          = "#333333";
cssProperties['backgroundColor']    = "#fff";
cssProperties['backgroundTop']      = "#3e779d";
cssProperties['backgroundBottom']   = "#65a9d7";
cssProperties['borderWidth']        = "1";
cssProperties['borderStyle']        = "solid";
cssProperties['borderColor']        = "#ccc";

// Creates CSS File
function createCSS() {
    cssText              = ".button { ";
    cssText             += "     width: " + cssProperties['width'] + "px;";
    cssText             += "     height: " + cssProperties['height'] + "px;";
    cssText             += "     font-size: " + cssProperties['fontSize'] + "px;";
    cssText             += "     font-weight: " + cssProperties['fontWeight'] + ";";
    cssText             += "     font-color: " + cssProperties['fontColor'] + ";";
    cssText             += "     background-color: " + cssProperties['backgroundColor'] + ";";
    cssText             += "     background: -webkit-linear-gradient(top, " + cssProperties['backgroundTop'] + ", " + cssProperties['backgroundBottom'] + ");";
    cssText             += "     background: -moz-linear-gradient(top, " + cssProperties['backgroundTop'] + ", " + cssProperties['backgroundBottom'] + ");";
    cssText             += "     background: -ms-linear-gradient(top, " + cssProperties['backgroundTop'] + ", " + cssProperties['backgroundBottom'] + ");";
    cssText             += "     background: -o-linear-gradient(top, " + cssProperties['backgroundTop'] + ", " + cssProperties['backgroundBottom'] + ");";
    cssText             += "     border-width: " + cssProperties['borderWidth'] + "px;";
    cssText             += "     border-style: " + cssProperties['borderStyle'] + ";";
    cssText             += "     border-color: " + cssProperties['borderColor'] + ";";
    cssText             += "} ";
    $("#the-style").replaceWith("<style id='the-style' type='text/css'>" + cssText + "</style>");
    cssText = cssText
        .replace(/;/g,";<br />&nbsp;&nbsp;").replace(/{/g,"{<br />&nbsp;&nbsp;").replace(/}/g,"&nbsp;}<br />");
    $("#the-css").html(cssText);
}
// Keep in Local storage
function saveCSS() {
  var count = localStorage["count"];
  if (count == null) {
    count = Number(1);
  } else {
    count = Number(count) + 1;
  }
  localStorage["count"] = count;
  localStorage[count+"width"] = cssProperties['width'] ;
  localStorage[count+"height"] = cssProperties['height'] ;
  localStorage[count+"fontSize"] = cssProperties['fontSize'] ;
  localStorage[count+"fontWeight"] = cssProperties['fontWeight'] ;
  localStorage[count+"fontColor"] = cssProperties['fontColor'] ;
  localStorage[count+"backgroundColor"] = cssProperties['backgroundColor'] ;
  localStorage[count+"backgroundTop"] = cssProperties['backgroundTop'] ;
  localStorage[count+"backgroundBottom"] = cssProperties['backgroundBottom'] ;
  localStorage[count+"borderWidth"] = cssProperties['borderWidth'] ;
  localStorage[count+"borderStyle"] = cssProperties['borderStyle'] ;
  localStorage[count+"borderColor"] = cssProperties['borderColor'] ;
}
//Gets stored Css 
function getCSS() {
  var count = localStorage["count"];
  if (count != null)
  {
    cssProperties['width']              = localStorage[count+"width"];
    cssProperties['height']             = localStorage[count+"height"];
    cssProperties['fontSize']           = localStorage[count+"fontSize"];
    cssProperties['fontWeight']         = localStorage[count+"fontWeight"];
    cssProperties['fontColor']          = localStorage[count+"fontColor"];
    cssProperties['backgroundColor']    = localStorage[count+"backgroundColor"];
    cssProperties['backgroundTop']      = localStorage[count+"backgroundTop"];
    cssProperties['backgroundBottom']   = localStorage[count+"backgroundBottom"];
    cssProperties['borderWidth']        = localStorage[count+"borderWidth"];
    cssProperties['borderStyle']        = localStorage[count+"borderStyle"];
    cssProperties['borderColor']        = localStorage[count+"borderColor"];
    createCSS();
    fillCSS();
  }
}
// Pre-fill Css with stoted value
function fillCSS() {
  $('#buttonWidth').val(cssProperties['width']);
  buttonel.css('width', cssProperties['width']);
  $('#buttonHeight').val(cssProperties['height']);
  buttonel.css('height', cssProperties['height']);
  $('#buttonFontSize').val(cssProperties['fontSize']);
  buttonel.css('font-size', cssProperties['fontSize']);
  $('#buttonFontWeight').val(cssProperties['fontWeight']);
  buttonel.css('font-weight', cssProperties['fontWeight']);
  $('#buttonBorderWidth').val(cssProperties['borderWidth']);
  buttonel.css('border-width', cssProperties['borderWidth']);
  $('#buttonFontColor').val(cssProperties['fontColor']);
  buttonel.css('color',cssProperties['fontColor']);
  $('#buttonBackColor').val(cssProperties['backgroundColor']);
  buttonel.css('background-color',cssProperties['backgroundColor']);
  $('#buttonTopGradient').val(cssProperties['backgroundTop']);
  $('#buttonBottomGradient').val(cssProperties['backgroundBottom']);
  buttonel.css({ 'background': '-webkit-linear-gradient(top,' + cssProperties['backgroundTop'] + ',' + cssProperties['backgroundBottom'] +')' });
  buttonel.css({ 'background': '-moz-linear-gradient(top,' + cssProperties['backgroundTop'] + ',' + cssProperties['backgroundBottom'] +')' });
  buttonel.css({ 'background': '-ms-linear-gradient(top,' + cssProperties['backgroundTop'] + ',' + cssProperties['backgroundBottom'] +')' });
  buttonel.css({ 'background': '-o-linear-gradient(top,' + cssProperties['backgroundTop'] + ',' + cssProperties['backgroundBottom'] +')' });
  $('#buttonBorderStyle').val(cssProperties['borderStyle']);
  buttonel.css('border-style',cssProperties['borderStyle']);
  $('#buttonBorderColor').val(cssProperties['borderColor']);
  buttonel.css('border-color',cssProperties['borderColor']);
}

$(function() {
    getCSS();
    createCSS();
    fillCSS();
});

var ButtonParam = {
  WIDTH: 1,
  HEIGHT: 2,
  FONTSIZE: 3,
  FONTWEIGHT: 4,
  BORDERWIDTH: 5,
  FONTCOLOR: 6,
  BORDERSTYLE: 7,
  BACKCOLOR: 8,
  GRADIENT: 9,
  BORDERCOLOR: 10
};

var buttonel = $('#button');
// sets button attributes
function changeButtomParam(val) {
    switch(val) {
      case ButtonParam.WIDTH: {
        var buttonwidth = $('#buttonWidth').val();
        buttonel.css('width', buttonwidth);
        cssProperties['width'] = buttonwidth ;
        break;
      }
      case ButtonParam.HEIGHT: {
        var buttonheight = $('#buttonHeight').val();
        buttonel.css('height', buttonheight);
        cssProperties['height'] = buttonheight;
        break;
      }
      case ButtonParam.FONTSIZE: {
        var buttonFontSize = $('#buttonFontSize').val();
        buttonel.css('font-size', buttonFontSize + "px");
        cssProperties['fontSize'] = buttonFontSize;
        break;
      }
      case ButtonParam.FONTWEIGHT: {
        var buttonFontWeight = $('#buttonFontWeight').val();
        buttonel.css('font-weight', buttonFontWeight);
        cssProperties['fontWeight'] = buttonFontWeight;
        break;
      }
      case ButtonParam.BORDERWIDTH: {
        var buttonBorderWidth = $('#buttonBorderWidth').val();
        buttonel.css('border-width', buttonBorderWidth);
        cssProperties['borderWidth'] = buttonBorderWidth;
        break;
      }
      case ButtonParam.FONTCOLOR: {
        var buttonFontColor = $("#buttonFontColor").val();
        buttonel.css('color', buttonFontColor);
        cssProperties['fontColor'] = buttonFontColor;
        break;
      }
      case ButtonParam.BORDERSTYLE: {
        var buttonBorderStyle = $("#buttonBorderStyle").find(":selected").val();
        buttonel.css('border-style', buttonBorderStyle);
        cssProperties['borderStyle'] = buttonBorderStyle;
        break;
      }
      case ButtonParam.BACKCOLOR: {
        var buttonBackColor = $("#buttonBackColor").val();
        buttonel.css('background-color', buttonBackColor);
        cssProperties['backgroundColor'] = buttonBackColor;
        break;
      }
      case ButtonParam.GRADIENT: {
        var buttonTopGradient = $("#buttonTopGradient").val();
        var buttonBottomGradient = $("#buttonBottomGradient").val();
        buttonel.css({ 'background': '-webkit-linear-gradient(top,' + buttonTopGradient + ',' + buttonBottomGradient +')' });
        buttonel.css({ 'background': '-moz-linear-gradient(top,' + buttonTopGradient + ',' + buttonBottomGradient +')' });
        buttonel.css({ 'background': '-ms-linear-gradient(top,' + buttonTopGradient + ',' + buttonBottomGradient +')' });
        buttonel.css({ 'background': '-o-linear-gradient(top,' + buttonTopGradient + ',' + buttonBottomGradient +')' });
        cssProperties['backgroundTop'] = buttonTopGradient;
        cssProperties['backgroundBottom'] = buttonBottomGradient;
        break;
      }
      case ButtonParam.BORDERCOLOR: {
        var buttonBorderColor = $("#buttonBackColor").val();
        buttonel.css('border-color', buttonBorderColor);
        cssProperties['borderColor'] = buttonBorderColor;
        break;
      }
      default: {
        alert("Argument passes doesn not exist in enum.")
      }
    }
    createCSS();
}