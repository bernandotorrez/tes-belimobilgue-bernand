webpackHotUpdate("static\\development\\pages\\news.js",{

/***/ "./pages/news.js":
/*!***********************!*\
  !*** ./pages/news.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_MyLayout_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/MyLayout.js */ "./components/MyLayout.js");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! isomorphic-unfetch */ "./node_modules/isomorphic-unfetch/browser.js");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_5__);






var imgStyle = {
  width: '100%',
  height: 'auto',
  maxWidth: '400px'
};

var Post = function Post(props) {
  return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_components_MyLayout_js__WEBPACK_IMPORTED_MODULE_4__["default"], null, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a, {
    id: "2251713545"
  }, "h1.jsx-2251713545,a.jsx-2251713545{font-family:'Arial';}p.jsx-2251713545{font-family:'Arial';}ul.jsx-2251713545{padding:0;}li.jsx-2251713545{list-style:none;margin:5px 0;}a.jsx-2251713545{-webkit-text-decoration:none;text-decoration:none;color:blue;}a.jsx-2251713545:hover{opacity:0.6;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkU6XFxQcm9ncmFtbWluZ1xcdGVzLWJlbGltb2JpbGd1ZS1iZXJuYW5kXFxwYWdlc1xcbmV3cy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFXa0IsQUFJK0IsQUFJRSxBQUlaLEFBSU0sQUFLSyxBQUtULFVBYmQsRUFjQSxJQVZlLElBWmYsQUFJQSxTQVNBLHFCQUlhLFdBQ2IiLCJmaWxlIjoiRTpcXFByb2dyYW1taW5nXFx0ZXMtYmVsaW1vYmlsZ3VlLWJlcm5hbmRcXHBhZ2VzXFxuZXdzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExheW91dCBmcm9tICcuLi9jb21wb25lbnRzL015TGF5b3V0LmpzJztcclxuaW1wb3J0IGZldGNoIGZyb20gJ2lzb21vcnBoaWMtdW5mZXRjaCc7XHJcblxyXG5jb25zdCBpbWdTdHlsZSA9IHtcclxuICB3aWR0aDogJzEwMCUnLFxyXG4gIGhlaWdodDogJ2F1dG8nLFxyXG4gIG1heFdpZHRoOiAnNDAwcHgnXHJcbn1cclxuXHJcbmNvbnN0IFBvc3QgPSBwcm9wcyA9PiAoXHJcbiAgPExheW91dD5cclxuICAgICAgPHN0eWxlIGpzeD57YFxyXG4gICAgICAgIGgxLFxyXG4gICAgICAgIGEge1xyXG4gICAgICAgICAgZm9udC1mYW1pbHk6ICdBcmlhbCc7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwIHtcclxuICAgICAgICAgICAgZm9udC1mYW1pbHk6ICdBcmlhbCc7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB1bCB7XHJcbiAgICAgICAgICBwYWRkaW5nOiAwO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbGkge1xyXG4gICAgICAgICAgbGlzdC1zdHlsZTogbm9uZTtcclxuICAgICAgICAgIG1hcmdpbjogNXB4IDA7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBhIHtcclxuICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgICAgICAgIGNvbG9yOiBibHVlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgYTpob3ZlciB7XHJcbiAgICAgICAgICBvcGFjaXR5OiAwLjY7XHJcbiAgICAgICAgfVxyXG4gICAgICBgfTwvc3R5bGU+XHJcblxyXG4gICAgey8qIFRhbXBpbGthbiBCZXJpdGEgKi99XHJcbiAgICA8aDE+e3Byb3BzLmhlYWRsaW5lfTwvaDE+XHJcbiAgICA8cD57cHJvcHMuc25pcHBldH08L3A+XHJcbiAgICA8cD57cHJvcHMucGFyYWdyYXBofTwvcD5cclxuICAgIHsvKiBUYW1waWxrYW4gR2FtYmFyIEJlcml0YSAqL31cclxuICAgIDxpbWcgc3JjPXtwcm9wcy5pbWFnZX0gc3R5bGU9e2ltZ1N0eWxlfS8+XHJcbiAgPC9MYXlvdXQ+XHJcbik7XHJcblxyXG5Qb3N0LmdldEluaXRpYWxQcm9wcyA9IGFzeW5jIGZ1bmN0aW9uKGNvbnRleHQpIHtcclxuICBjb25zdCB7IGlkIH0gPSBjb250ZXh0LnF1ZXJ5O1xyXG4gIFxyXG4gIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKGBodHRwczovL2FwaS5ueXRpbWVzLmNvbS9zdmMvc2VhcmNoL3YyL2FydGljbGVzZWFyY2guanNvbj9mbD1oZWFkbGluZSwgc25pcHBldCwgbGVhZF9wYXJhZ3JhcGgsIG11bHRpbWVkaWEmZnE9d2ViX3VybDooXCIke2lkfVwiKSZhcGkta2V5PVdEOW9yUE42Zm1XU1ltR2pIYVp3blp3Vzc5Q2EwNnhhYCk7XHJcbiAgY29uc3Qgc2hvdyA9IGF3YWl0IHJlcy5qc29uKCk7XHJcblxyXG4gIHZhciBzaG93X3JlcyA9IHNob3cucmVzcG9uc2UuZG9jc1swXVxyXG4gIGNvbnNvbGUubG9nKHNob3dfcmVzKVxyXG5cclxuICBcclxuICAvL2NvbnNvbGUubG9nKGBGZXRjaGVkIHNob3c6ICR7c2hvd19yZXMuaGVhZGxpbmUubWFpbn1gKTtcclxuXHJcbiAgaWYoc2hvd19yZXMpIHtcclxuICAgIHZhciBoZWFkbGluZSA9IHNob3dfcmVzLmhlYWRsaW5lLm1haW47XHJcbiAgICB2YXIgc25pcHBldCA9IHNob3dfcmVzLnNuaXBwZXQ7XHJcbiAgICB2YXIgcGFyYWdyYXBoID0gc2hvd19yZXMubGVhZF9wYXJhZ3JhcGg7XHJcbiAgICBpZihzaG93X3Jlcy5tdWx0aW1lZGlhID09ICcnIHx8ICFzaG93X3Jlcy5tdWx0aW1lZGlhKSB7XHJcbiAgICAgIHZhciBpbWFnZSA9ICdodHRwczovL3VwbG9hZC53aWtpbWVkaWEub3JnL3dpa2lwZWRpYS9jb21tb25zL2EvYWMvTm9faW1hZ2VfYXZhaWxhYmxlLnN2Zyc7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB2YXIgaW1hZ2UgPSBgaHR0cHM6Ly9zdGF0aWMwMS5ueXQuY29tLyR7c2hvd19yZXMubXVsdGltZWRpYVswXS51cmx9YDtcclxuICAgIH1cclxuICB9IGVsc2Uge1xyXG4gICAgdmFyIGhlYWRsaW5lID0gJ05vdCBGb3VuZCdcclxuICAgIHZhciBzbmlwcGV0ID0gJydcclxuICAgIHZhciBwYXJhZ3JhcGggPSAnTm90IEZvdW5kJ1xyXG4gIH1cclxuICBcclxuICAvLyBjZWsgYXBha2FoIGFkYSBpbWFnZW55YSBhdGF1IHRpZGFrXHJcbiAgXHJcblxyXG4gIHJldHVybiB7IFxyXG4gICAgaGVhZGxpbmU6IGhlYWRsaW5lLFxyXG4gICAgc25pcHBldDogc25pcHBldCxcclxuICAgIHBhcmFncmFwaDogcGFyYWdyYXBoLFxyXG4gICAgaW1hZ2U6IGltYWdlXHJcbiAgIH07XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQb3N0OyJdfQ== */\n/*@ sourceURL=E:\\Programming\\tes-belimobilgue-bernand\\pages\\news.js */"), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("h1", {
    className: "jsx-2251713545"
  }, props.headline), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("p", {
    className: "jsx-2251713545"
  }, props.snippet), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("p", {
    className: "jsx-2251713545"
  }, props.paragraph), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("img", {
    src: props.image,
    style: imgStyle,
    className: "jsx-2251713545"
  }));
};

Post.getInitialProps =
/*#__PURE__*/
function () {
  var _ref = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
  /*#__PURE__*/
  _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(context) {
    var id, res, show, show_res, headline, snippet, paragraph, image;
    return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            id = context.query.id;
            _context.next = 3;
            return isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_5___default()("https://api.nytimes.com/svc/search/v2/articlesearch.json?fl=headline, snippet, lead_paragraph, multimedia&fq=web_url:(\"".concat(id, "\")&api-key=WD9orPN6fmWSYmGjHaZwnZwW79Ca06xa"));

          case 3:
            res = _context.sent;
            _context.next = 6;
            return res.json();

          case 6:
            show = _context.sent;
            show_res = show.response.docs[0];
            console.log(show_res); //console.log(`Fetched show: ${show_res.headline.main}`);

            if (show_res) {
              headline = show_res.headline.main;
              snippet = show_res.snippet;
              paragraph = show_res.lead_paragraph;

              if (show_res.multimedia == '' || !show_res.multimedia) {
                image = 'https://upload.wikimedia.org/wikipedia/commons/a/ac/No_image_available.svg';
              } else {
                image = "https://static01.nyt.com/".concat(show_res.multimedia[0].url);
              }
            } else {
              headline = 'Not Found';
              snippet = '';
              paragraph = 'Not Found';
            } // cek apakah ada imagenya atau tidak


            return _context.abrupt("return", {
              headline: headline,
              snippet: snippet,
              paragraph: paragraph,
              image: image
            });

          case 11:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function (_x) {
    return _ref.apply(this, arguments);
  };
}();

/* harmony default export */ __webpack_exports__["default"] = (Post);

/***/ })

})
//# sourceMappingURL=news.js.0ed757434aed2534920f.hot-update.js.map