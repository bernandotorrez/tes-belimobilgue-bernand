webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _defineProperty; });
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__);

function _defineProperty(obj, key, value) {
  if (key in obj) {
    _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default()(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _components_MyLayout_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/MyLayout.js */ "./components/MyLayout.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! isomorphic-unfetch */ "./node_modules/isomorphic-unfetch/browser.js");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_13__);















var Index =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_8__["default"])(Index, _Component);

  function Index(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__["default"])(this, Index);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__["default"])(Index).call(this, props));
    _this.state = {
      data: [],
      search: ''
    };
    _this.handleChange = _this.handleChange.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_7__["default"])(_this));
    _this.handleSubmit = _this.handleSubmit.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_7__["default"])(_this));
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__["default"])(Index, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement(_components_MyLayout_js__WEBPACK_IMPORTED_MODULE_10__["default"], null, react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_9___default.a, {
        id: "2034263189"
      }, "h1.jsx-2034263189,a.jsx-2034263189{font-family:'Arial';}p.jsx-2034263189{font-family:'Arial';}ul.jsx-2034263189{padding:0;}li.jsx-2034263189{list-style:none;margin:5px 0;}a.jsx-2034263189{-webkit-text-decoration:none;text-decoration:none;color:blue;}a.jsx-2034263189:hover{opacity:0.6;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkY6XFxzb3VyY2UgYmVsYWphciBuZ29kaW5nXFxiZWxpbW9iaWxndWUtbmV4dFxccGFnZXNcXGluZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXFCbUIsQUFJK0IsQUFJQSxBQUlWLEFBSU0sQUFLSyxBQUtULFVBYmQsRUFjQSxJQVZlLElBWmYsQUFJQSxTQVNBLHFCQUlhLFdBQ2IiLCJmaWxlIjoiRjpcXHNvdXJjZSBiZWxhamFyIG5nb2RpbmdcXGJlbGltb2JpbGd1ZS1uZXh0XFxwYWdlc1xcaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGF5b3V0IGZyb20gJy4uL2NvbXBvbmVudHMvTXlMYXlvdXQuanMnO1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xyXG5pbXBvcnQgZmV0Y2ggZnJvbSAnaXNvbW9ycGhpYy11bmZldGNoJztcclxuaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcclxuXHJcbmNsYXNzIEluZGV4IGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgc3VwZXIocHJvcHMpXHJcbiAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICBkYXRhOiBbXSxcclxuICAgICAgc2VhcmNoOiAnJ1xyXG4gICAgfVxyXG4gICAgdGhpcy5oYW5kbGVDaGFuZ2UgPSB0aGlzLmhhbmRsZUNoYW5nZS5iaW5kKHRoaXMpO1xyXG4gICAgdGhpcy5oYW5kbGVTdWJtaXQgPSB0aGlzLmhhbmRsZVN1Ym1pdC5iaW5kKHRoaXMpO1xyXG4gIH1cclxuXHJcbiAgcmVuZGVyKCkge1xyXG4gICAgXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8ZGl2PlxyXG4gICAgICA8TGF5b3V0PlxyXG4gICAgICAgPHN0eWxlIGpzeD57YFxyXG4gICAgICAgIGgxLFxyXG4gICAgICAgIGEge1xyXG4gICAgICAgICAgZm9udC1mYW1pbHk6ICdBcmlhbCc7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwIHtcclxuICAgICAgICAgIGZvbnQtZmFtaWx5OiAnQXJpYWwnO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdWwge1xyXG4gICAgICAgICAgcGFkZGluZzogMDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGxpIHtcclxuICAgICAgICAgIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbiAgICAgICAgICBtYXJnaW46IDVweCAwO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgYSB7XHJcbiAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICAgICAgICBjb2xvcjogYmx1ZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGE6aG92ZXIge1xyXG4gICAgICAgICAgb3BhY2l0eTogMC42O1xyXG4gICAgICAgIH1cclxuICAgICAgYH08L3N0eWxlPlxyXG4gICAgPGgxPjx1PlRlY2hub2xvZ3kgTmV3czwvdT48L2gxPlxyXG5cclxuICAgIDxwPlxyXG4gICAgPGZvcm0gb25TdWJtaXQ9e3RoaXMuaGFuZGxlU3VibWl0fT5cclxuICAgICAgPGxhYmVsPlxyXG4gICAgICAgIFNlYXJjaCA6IFxyXG4gICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIG5hbWU9XCJzZWFyY2hcIiB2YWx1ZT17dGhpcy5zdGF0ZS5zZWFyY2h9IG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZX0gLz5cclxuICAgICAgPC9sYWJlbD5cclxuICAgICAgPGlucHV0IHR5cGU9XCJzdWJtaXRcIiB2YWx1ZT1cIlN1Ym1pdFwiIC8+XHJcbiAgICAgIDwvZm9ybT5cclxuICAgIDwvcD5cclxuXHJcbiAgICB7LyogTG9vcGluZyBEYXRhICovfVxyXG4gICAgPHVsPlxyXG4gICAgICB7dGhpcy5zdGF0ZS5kYXRhLm1hcChzaG93ID0+IChcclxuICAgICAgICA8bGkga2V5PXtzaG93LndlYl91cmx9PlxyXG4gICAgICAgICAgPExpbmsgaHJlZj17YC9uZXdzP2lkPSR7c2hvdy53ZWJfdXJsfWB9PlxyXG4gICAgICAgICAgICA8YT57c2hvdy5oZWFkbGluZS5tYWlufTwvYT5cclxuICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICA8L2xpPlxyXG4gICAgICApKX1cclxuICAgIDwvdWw+XHJcbiAgPC9MYXlvdXQ+XHJcbiAgPC9kaXY+XHJcbiAgICApXHJcbiAgfVxyXG5cclxuICBjb21wb25lbnREaWRNb3VudCgpIHtcclxuICAgIHRoaXMuZ2V0TmV3c0RhdGEoKTtcclxuICB9XHJcblxyXG4gIGhhbmRsZVN1Ym1pdChldmVudCkge1xyXG4gICAgdGhpcy5nZXRTZWFyY2hOZXdzKClcclxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgfVxyXG5cclxuICBoYW5kbGVDaGFuZ2UoZXZlbnQpIHtcclxuICAgIHRoaXMuc2V0U3RhdGUoe3NlYXJjaDogZXZlbnQudGFyZ2V0LnZhbHVlfSk7XHJcbiAgfVxyXG5cclxuICBhc3luYyBnZXRTZWFyY2hOZXdzKCl7XHJcbiAgICB0cnkge1xyXG4gICAgICBcclxuICAgICAgLy8gS29zb25na2FuIHN0YXRlIGRhdGFcclxuICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgZGF0YTogW11cclxuICAgICAgfSlcclxuXHJcbiAgICAgIGNvbnN0IHsgc2VhcmNoIH0gPSB0aGlzLnN0YXRlO1xyXG4gIFxyXG4gICAgICAvL2NvbnN0IHJlcyA9IGF3YWl0IGZldGNoKGBodHRwczovL2FwaS5ueXRpbWVzLmNvbS9zdmMvc2VhcmNoL3YyL2FydGljbGVzZWFyY2guanNvbj9mcT13ZWJfdXJsOihcIiR7aWR9XCIpJmFwaS1rZXk9V0Q5b3JQTjZmbVdTWW1HakhhWnduWndXNzlDYTA2eGFgKTtcclxuICAgICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goYGh0dHBzOi8vYXBpLm55dGltZXMuY29tL3N2Yy9zZWFyY2gvdjIvYXJ0aWNsZXNlYXJjaC5qc29uP2ZxPXNlY3Rpb25fbmFtZTooXCJUZWNobm9sb2d5XCIpJnE9JHtzZWFyY2h9JmZxPSZhcGkta2V5PVdEOW9yUE42Zm1XU1ltR2pIYVp3blp3Vzc5Q2EwNnhhYCk7XHJcbiAgICAgIGNvbnN0IHNob3cgPSBhd2FpdCByZXMuanNvbigpO1xyXG5cclxuICAgICAgdmFyIHNob3dfcmVzID0gc2hvdy5yZXNwb25zZS5kb2NzXHJcblxyXG4gICAgICAvLyBJc2kgc3RhdGUgZGF0YVxyXG4gICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICBkYXRhOiBzaG93X3Jlc1xyXG4gICAgICB9KVxyXG4gICAgfSBjYXRjaChlKXtcclxuICAgICAgY29uc29sZS5sb2coZSlcclxuICAgIH1cclxuICAgIFxyXG4gIH1cclxuXHJcbiAgYXN5bmMgZ2V0TmV3c0RhdGEoKSB7XHJcbiAgICB0cnkge1xyXG4gICAgICBcclxuICAgICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goJ2h0dHBzOi8vYXBpLm55dGltZXMuY29tL3N2Yy9zZWFyY2gvdjIvYXJ0aWNsZXNlYXJjaC5qc29uP2ZxPXNlY3Rpb25fbmFtZTooXCJUZWNobm9sb2d5XCIpJmFwaS1rZXk9V0Q5b3JQTjZmbVdTWW1HakhhWnduWndXNzlDYTA2eGEnKTtcclxuICAgICAgLy9jb25zdCByZXMgPSBhd2FpdCBmZXRjaCgnaHR0cHM6Ly9hcGkubnl0aW1lcy5jb20vc3ZjL3RvcHN0b3JpZXMvdjIvdGVjaG5vbG9neS5qc29uP2FwaS1rZXk9RDYzS2c2THZSZ21HcVdsaE9JblFxckFFRnZmUTJGRWonKTtcclxuICBcclxuICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlcy5qc29uKCk7XHJcblxyXG4gICAgICAvL3ZhciBkYXRhX3JlcyA9IGRhdGEucmVzcG9uc2UuZG9jcztcclxuICAgICAgdmFyIGRhdGFfcmVzID0geyd3ZWJfdXJsJzogJyMnLCAnaGVhZGxpbmUnOiB7J21haW4nOiAnZmFpbGVkIHRvIGZldGNoIGRhdGEnfSwgXHJcbiAgICAgICd3ZWJfdXJsJzogJyMnLCAnaGVhZGxpbmUnOiB7J21haW4nOiAnZmFpbGVkIHRvIGZldGNoIGRhdGEnfX1cclxuICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgZGF0YTogZGF0YV9yZXNcclxuICAgICAgfSlcclxuXHJcbiAgICB9IGNhdGNoKGUpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhlKVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEluZGV4OyJdfQ== */\n/*@ sourceURL=F:\\source belajar ngoding\\belimobilgue-next\\pages\\index.js */"), react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement("h1", {
        className: "jsx-2034263189"
      }, react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement("u", {
        className: "jsx-2034263189"
      }, "Technology News")), react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement("p", {
        className: "jsx-2034263189"
      }, react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement("form", {
        onSubmit: this.handleSubmit,
        className: "jsx-2034263189"
      }, react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement("label", {
        className: "jsx-2034263189"
      }, "Search :", react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement("input", {
        type: "text",
        name: "search",
        value: this.state.search,
        onChange: this.handleChange,
        className: "jsx-2034263189"
      })), react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement("input", {
        type: "submit",
        value: "Submit",
        className: "jsx-2034263189"
      }))), react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement("ul", {
        className: "jsx-2034263189"
      }, this.state.data.map(function (show) {
        return react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement("li", {
          key: show.web_url,
          className: "jsx-2034263189"
        }, react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_11___default.a, {
          href: "/news?id=".concat(show.web_url)
        }, react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement("a", {
          className: "jsx-2034263189"
        }, show.headline.main)));
      }))));
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      this.getNewsData();
    }
  }, {
    key: "handleSubmit",
    value: function handleSubmit(event) {
      this.getSearchNews();
      event.preventDefault();
    }
  }, {
    key: "handleChange",
    value: function handleChange(event) {
      this.setState({
        search: event.target.value
      });
    }
  }, {
    key: "getSearchNews",
    value: function () {
      var _getSearchNews = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])(
      /*#__PURE__*/
      _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee() {
        var search, res, show, show_res;
        return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                // Kosongkan state data
                this.setState({
                  data: []
                });
                search = this.state.search; //const res = await fetch(`https://api.nytimes.com/svc/search/v2/articlesearch.json?fq=web_url:("${id}")&api-key=WD9orPN6fmWSYmGjHaZwnZwW79Ca06xa`);

                _context.next = 5;
                return isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_12___default()("https://api.nytimes.com/svc/search/v2/articlesearch.json?fq=section_name:(\"Technology\")&q=".concat(search, "&fq=&api-key=WD9orPN6fmWSYmGjHaZwnZwW79Ca06xa"));

              case 5:
                res = _context.sent;
                _context.next = 8;
                return res.json();

              case 8:
                show = _context.sent;
                show_res = show.response.docs; // Isi state data

                this.setState({
                  data: show_res
                });
                _context.next = 16;
                break;

              case 13:
                _context.prev = 13;
                _context.t0 = _context["catch"](0);
                console.log(_context.t0);

              case 16:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this, [[0, 13]]);
      }));

      function getSearchNews() {
        return _getSearchNews.apply(this, arguments);
      }

      return getSearchNews;
    }()
  }, {
    key: "getNewsData",
    value: function () {
      var _getNewsData = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])(
      /*#__PURE__*/
      _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee2() {
        var _data_res, res, data, data_res;

        return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.prev = 0;
                _context2.next = 3;
                return isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_12___default()('https://api.nytimes.com/svc/search/v2/articlesearch.json?fq=section_name:("Technology")&api-key=WD9orPN6fmWSYmGjHaZwnZwW79Ca06xa');

              case 3:
                res = _context2.sent;
                _context2.next = 6;
                return res.json();

              case 6:
                data = _context2.sent;
                //var data_res = data.response.docs;
                data_res = (_data_res = {
                  'web_url': '#',
                  'headline': {
                    'main': 'failed to fetch data'
                  }
                }, Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_data_res, "web_url", '#'), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_data_res, "headline", {
                  'main': 'failed to fetch data'
                }), _data_res);
                this.setState({
                  data: data_res
                });
                _context2.next = 14;
                break;

              case 11:
                _context2.prev = 11;
                _context2.t0 = _context2["catch"](0);
                console.log(_context2.t0);

              case 14:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this, [[0, 11]]);
      }));

      function getNewsData() {
        return _getNewsData.apply(this, arguments);
      }

      return getNewsData;
    }()
  }]);

  return Index;
}(react__WEBPACK_IMPORTED_MODULE_13__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ })

})
//# sourceMappingURL=index.js.f43864993702b4687296.hot-update.js.map