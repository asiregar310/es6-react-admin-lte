'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _loadStatus = require('../utilities/load-status.js');

var _loadStatus2 = _interopRequireDefault(_loadStatus);

var _searchBar = require('../form/pieces/search-bar.js');

var _searchBar2 = _interopRequireDefault(_searchBar);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var DataTable = function (_React$Component) {
  _inherits(DataTable, _React$Component);

  function DataTable(props) {
    _classCallCheck(this, DataTable);

    var _this = _possibleConstructorReturn(this, (DataTable.__proto__ || Object.getPrototypeOf(DataTable)).call(this, props));

    _this.state = {
      //  Table sorting && searching states
      sortOrder: _this.props.defaultSortOrder,
      searchFilter: null, //  Handles display changes
      searchQuery: null, //  Handles display changes
      dataSearchForm: { //  Handles search form changes
        filter: _this.props.searchCategory instanceof Array ? _this.props.searchCategory[0] || null : _this.props.searchCategory,
        query: null
      },
      //  Pagination states
      page: _this.props.page,
      pageCount: _this.props.pageCount || Math.ceil((_this.props.totalSize || _this.props.data.length) / _this.props.sizePerPage),
      pageSet: [1],
      totalSize: _this.props.totalSize || _this.props.data.length,
      sizePerPage: _this.props.sizePerPage,
      // Table data states
      tableData: _this.props.data,
      headerData: _this.props.headers
    };
    _this.setPaginatorList = _this.setPaginatorList.bind(_this);
    _this.returnPaginatedData = _this.returnPaginatedData.bind(_this);
    _this.onChangePageSize = _this.onChangePageSize.bind(_this);
    _this.onPageChange = _this.onPageChange.bind(_this);
    _this.onSortChange = _this.onSortChange.bind(_this);
    _this.onSearchSubmit = _this.onSearchSubmit.bind(_this);
    _this.onSearchCategoryChange = _this.onSearchCategoryChange.bind(_this);
    _this.returnFilteredData = _this.returnFilteredData.bind(_this);
    return _this;
  }

  _createClass(DataTable, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.setHeaderList();
      this.setPaginatorList();
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      var _this2 = this;

      this.setState({
        tableData: nextProps.data,
        page: nextProps.page,
        pageCount: nextProps.pageCount || nextProps.data.length / nextProps.sizePerPage,
        totalSize: nextProps.totalSize || nextProps.data.length,
        sizePerPage: nextProps.sizePerPage
      }, function () {
        _this2.setHeaderList();
        _this2.setPaginatorList();
      });
    }

    //  Sets the sort order for all of the dataset

  }, {
    key: 'setHeaderList',
    value: function setHeaderList() {
      var _this3 = this;

      var headers = this.state.headerData.length > 0 ? this.state.headerData.map(function (header) {
        if (_this3.props.sorts && !header.sortOrder) {
          header.sortOrder = _this3.state.sortOrder || 'asc';
        }
        return header;
      }) : [];
      this.state.tableData.forEach(function (datum) {
        var keys = Object.keys(datum).filter(function (key) {
          var matched = false;
          for (var h = 0; h < headers.length; h++) {
            if (headers[h].id === key) {
              matched = true;
              break;
            }
          }
          return !matched;
        });
        keys = keys.map(function (key) {
          return {
            id: key,
            content: key,
            sortOrder: _this3.state.sortOrder || 'asc'
          };
        });
        headers = headers.concat(keys).filter(function (header) {
          var ignored = false;
          for (var id = 0; id < _this3.props.ignoreData.length; id++) {
            if (_this3.props.ignoreData[id] === header.id) {
              ignored = true;
              break;
            }
          }
          return !ignored;
        });
      });
      this.setState({ headerData: headers });
    }
    //  Sets the pagination page list display data

  }, {
    key: 'setPaginatorList',
    value: function setPaginatorList() {
      var pageSet = [];
      var currentPage = this.state.page;
      var minSetCount = 1;
      var maxSetCount = this.state.pageCount;
      if (this.state.pageCount > 5) {
        switch (true) {
          case currentPage <= maxSetCount - 5:
            minSetCount = currentPage;
            break;
          case currentPage > maxSetCount - 5:
            minSetCount = maxSetCount - 5;
            break;
          default:
            break;
        }
        maxSetCount = minSetCount + 4;
      }
      for (var i = minSetCount; i <= maxSetCount; i++) {
        pageSet.push(i);
      }
      this.setState({ pageSet: pageSet });
    }

    //  Sets the size shown per page, setting the state to that.

  }, {
    key: 'onChangePageSize',
    value: function onChangePageSize(sizePerPage) {
      if (this.props.onPageSizeChange) {
        this.props.onPageSizeChange(sizePerPage);
      } else {
        this.setState({
          page: 1,
          sizePerPage: sizePerPage,
          pageCount: Math.ceil(this.state.totalSize / sizePerPage)
        }, this.setPaginatorList);
      }
    }

    //  Handles setting the current page when the page is called to change.

  }, {
    key: 'onPageChange',
    value: function onPageChange(page) {
      if (this.props.onPageChange) {
        this.props.onPageChange(page);
      } else {
        var pageSet = this.state.pageSet;
        if (page > this.state.page) {
          if ((page === pageSet[3] || page === pageSet[4]) && pageSet.indexOf(this.state.pageCount) < 0) {
            pageSet.push(pageSet[4] + 1);
            pageSet.shift();
            if (page === pageSet[4]) {
              pageSet.push(pageSet[4] + 1);
              pageSet.shift();
            }
          } else if (page === this.state.pageCount && this.state.pageCount > 5) {
            pageSet = [];
            for (var i = this.state.pageCount - 4; i <= this.state.pageCount; i++) {
              pageSet.push(i);
            }
          }
        } else {
          if ((page === pageSet[1] || page === pageSet[0]) && pageSet.indexOf(1) < 0) {
            pageSet.unshift(pageSet[0] - 1);
            pageSet.pop();
            if (page === pageSet[0]) {
              pageSet.unshift(pageSet[0] - 1);
              pageSet.pop();
            }
          } else if (page === 1 && this.state.pageCount > 5) {
            pageSet = [];
            for (var _i = 1; _i <= 5; _i++) {
              pageSet.push(_i);
            }
          }
        }
        this.setState({ page: page, pageSet: pageSet });
      }
    }

    //  Handles displaying data associated with a page

  }, {
    key: 'returnPaginatedData',
    value: function returnPaginatedData() {
      var data = this.returnFilteredData();
      var min = (this.state.page - 1) * this.state.sizePerPage;
      var max = this.state.page * this.state.sizePerPage >= this.state.totalSize ? this.state.totalSize : this.state.page * this.state.sizePerPage;
      return this.props.remote ? data : data.slice(min, max);
    }

    //  Upon clicking a header sort button, change sort order of that column

  }, {
    key: 'onSortChange',
    value: function onSortChange(columnIndex) {
      if (this.props.sorts) {
        if (this.props.onSortChange) {
          //  Sends the user back the data id to be sorted && the current sort state
          this.props.onSortChange(headers[columnIndex].id, headers[columnIndex].sortOrder);
        } else {
          //  Sets this.state.headerData sort
          var formerSortOrder = this.state.headerData[columnIndex].sortOrder;
          var _headers = this.state.headerData;
          _headers[columnIndex].sortOrder = formerSortOrder === 'asc' ? 'desc' : 'asc';
          //  Sets this.state.tableData sort
          var data = this.state.tableData;
          data.sort(function (a, b) {
            var aSorter = a[_headers[columnIndex].id] === null || a[_headers[columnIndex].id] === undefined ? '' : a[_headers[columnIndex].id];
            var bSorter = b[_headers[columnIndex].id] === null || b[_headers[columnIndex].id] === undefined ? '' : b[_headers[columnIndex].id];
            if (typeof aSorter === 'string' || typeof bSorter === 'string') {
              return _headers[columnIndex].sortOrder === 'asc' ? aSorter.localeCompare('' + bSorter) : bSorter.localeCompare('' + aSorter);
            }
            return _headers[columnIndex].sortOrder === 'asc' ? aSorter - bSorter : bSorter - aSorter;
          });
          this.setState({ headerData: _headers, tableData: data, page: 1 }, this.setPaginatorList);
        }
      }
    }

    //  If there are multiple categories to search by, this sets the next chosen category

  }, {
    key: 'onSearchCategoryChange',
    value: function onSearchCategoryChange(e) {
      var dataSearchForm = this.state.dataSearchForm;
      dataSearchForm.filter = e.currentTarget.value === 'all' ? null : e.currentTarget.value;
      this.setState({ dataSearchForm: dataSearchForm });
    }

    //  Searches / Filters and returns X data to display

  }, {
    key: 'onSearchSubmit',
    value: function onSearchSubmit() {
      var _this4 = this;

      var query = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
      var filter = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.state.dataSearchForm.filter;

      if (this.props.onSearchSubmit) {
        this.props.onSearchSubmit(query, filter);
      } else {
        var currentSearchParams = this.state.dataSearchForm;
        currentSearchParams.filter = filter;
        currentSearchParams.query = query;
        this.setState({
          dataSearchForm: currentSearchParams,
          searchFilter: filter,
          searchQuery: query
        }, function () {
          var dataSize = query ? _this4.returnFilteredData().length : _this4.props.totalSize || _this4.props.data.length;
          _this4.setState({
            page: 1,
            totalSize: dataSize,
            pageCount: Math.ceil(dataSize / _this4.state.sizePerPage)
          }, _this4.setPaginatorList);
        });
      }
    }
  }, {
    key: 'returnFilteredData',
    value: function returnFilteredData() {
      var _this5 = this;

      return this.state.tableData.filter(function (dataset) {
        //  Filters the data based on search parameters
        if (_this5.state.searchQuery) {
          if (_this5.state.searchFilter) {
            return ('' + dataset[_this5.state.searchFilter]).toLowerCase().includes(_this5.state.searchQuery.toLowerCase());
          } else {
            var hasRelevantContent = false;
            var keys = Object.keys(dataset);
            for (var k = 0; k < keys.length; k++) {
              if (('' + dataset[keys[k]]).toLowerCase().includes(_this5.state.searchQuery.toLowerCase())) {
                hasRelevantContent = true;
                break;
              }
            }
            return hasRelevantContent;
          }
        }
        return dataset;
      });
    }

    //  Renders the page. What else?

  }, {
    key: 'render',
    value: function render() {
      var _this6 = this;

      var filteredData = this.returnPaginatedData();
      var striped = this.props.striped ? ' table-striped' : '';
      var condensed = this.props.condensed ? ' table-condensed' : '';
      var bordered = this.props.bordered ? ' table-bordered' : '';
      var hovers = this.props.hovers ? ' table-hover' : '';
      var columnStyles = filteredData.length > 0 && this.state.headerData.length > 0 ? _react2.default.createElement(
        'colgroup',
        null,
        this.state.headerData.map(function (column, c) {
          var width = typeof column === 'string' || Object.keys(column).indexOf('width') < 0 ? _this6.props.defaultColumnWidth : column.width;
          return _react2.default.createElement('col', { key: c, style: { width: width, minWidth: width } });
        })
      ) : null;
      var headers = filteredData.length > 0 && this.state.headerData.length > 0 ? _react2.default.createElement(
        'thead',
        null,
        _react2.default.createElement(
          'tr',
          null,
          this.state.headerData.map(function (header, h) {
            /*
              this.props.headers expects
                {
                  id: 'dataId',
                  content: 'Header Text',
                  width: '100px',
                  format: (cellData, rowData, rowId) => {},
                  sortOrder: 'asc' || 'desc'
                }
            */
            return _react2.default.createElement(
              'th',
              {
                key: h,
                onClick: function onClick() {
                  if (_this6.props.sorts && !header.noSort) {
                    _this6.onSortChange(h);
                  }
                }
              },
              typeof header === 'string' ? header : header.content,
              _this6.props.sorts && !header.noSort && (typeof header === 'string' || header.content) ? ' ' : '',
              _this6.props.sorts && !header.noSort ? _react2.default.createElement(
                'small',
                null,
                _react2.default.createElement('i', { className: 'fa ' + (header.sortOrder === 'asc' ? 'fa-sort-amount-asc' : 'fa-sort-amount-desc') + ' text-muted' })
              ) : null
            );
          })
        )
      ) : null;
      var content = filteredData.length > 0 ? filteredData.map(function (dataset, ds) {
        var cells = _this6.state.headerData.length !== 0 ? _this6.state.headerData.map(function (header, h) {
          var cellDatum = dataset[header.id] || null;
          return _react2.default.createElement(
            'td',
            { key: h },
            header.format ? header.format(cellDatum, _this6.state.tableData[ds], ds) : cellDatum
          );
        }) : Object.keys(dataset).map(function (datum, d) {
          return _react2.default.createElement(
            'td',
            { key: d },
            dataset[datum]
          );
        });
        return _react2.default.createElement(
          'tr',
          { key: ds },
          cells
        );
      }) : _react2.default.createElement(
        'tr',
        { className: 'datatable-no-data text-center' },
        _react2.default.createElement(
          'td',
          null,
          _react2.default.createElement(
            'p',
            null,
            this.props.noDataMessage
          )
        )
      );
      var searchFilter = this.props.search && this.props.searchCategory instanceof Array && this.props.searchCategory.length > 1 ? _react2.default.createElement(
        'div',
        { className: 'col-xs-12 col-sm-4' },
        _react2.default.createElement(
          'select',
          {
            id: this.props.id + '-datatable-searchbar-select',
            name: this.props.id + '-datatable-searchbar-select',
            className: 'form-control',
            onChange: this.onSearchCategoryChange,
            value: this.state.dataSearchForm.filter || 'all',
            disabled: this.state.loading
          },
          this.props.searchCategory.map(function (category, c) {
            return _react2.default.createElement(
              'option',
              { key: c, value: category },
              category
            );
          }),
          this.props.hideSearchAny ? '' : _react2.default.createElement(
            'option',
            { key: this.props.searchCategory.length, value: 'all' },
            '*'
          )
        )
      ) : null;
      var searchbar = !this.props.search ? '' : _react2.default.createElement(
        'div',
        { className: 'col-xs-12' + (this.props.searchCategory instanceof Array && this.props.searchCategory.length > 1 ? '' : ' col-sm-offset-4') + ' col-sm-8' },
        _react2.default.createElement(_searchBar2.default, {
          id: this.props.id + '-datatable-searchbar',
          placeholder: this.props.searchPlaceholder,
          searchHandler: this.onSearchSubmit,
          disabled: this.state.loading
        })
      );
      var pageCount = !this.props.pagination || this.props.hideSizePerPage ? '' : _react2.default.createElement(
        'select',
        {
          className: 'form-control input-sm datatable-data-per-page-selector',
          onChange: function onChange(e) {
            _this6.onChangePageSize(e.currentTarget.value);
          }
        },
        this.props.sizePerPageList.map(function (size, s) {
          return _react2.default.createElement(
            'option',
            { key: s, value: size },
            size
          );
        })
      );
      var pageList = !this.props.pagination ? '' : _react2.default.createElement(
        'ul',
        { className: 'pagination datatable-pagination' },
        this.state.pageSet.indexOf(1) < 0 ? _react2.default.createElement(
          'li',
          { className: 'paginate_button previous' },
          _react2.default.createElement(
            'a',
            { onClick: function onClick() {
                _this6.onPageChange(1);
              } },
            '<<'
          )
        ) : null,
        this.state.page !== 1 ? _react2.default.createElement(
          'li',
          { className: 'paginate_button previous' },
          _react2.default.createElement(
            'a',
            { onClick: function onClick() {
                _this6.onPageChange(_this6.state.page - 1);
              } },
            '<'
          )
        ) : null,
        this.state.pageSet.map(function (pageNum, pn) {
          return _react2.default.createElement(
            'li',
            { key: pn, className: 'paginate_button' + (_this6.state.page === pageNum ? ' active' : '') },
            _react2.default.createElement(
              'a',
              { onClick: function onClick() {
                  if (_this6.state.page !== pageNum) {
                    _this6.onPageChange(pageNum);
                  }
                } },
              pageNum
            )
          );
        }),
        this.state.page !== this.state.pageCount ? _react2.default.createElement(
          'li',
          { className: 'paginate_button next' },
          _react2.default.createElement(
            'a',
            { onClick: function onClick() {
                _this6.onPageChange(_this6.state.page + 1);
              } },
            '>'
          )
        ) : null,
        this.state.pageSet.indexOf(this.state.pageCount) < 0 ? _react2.default.createElement(
          'li',
          { className: 'paginate_button next' },
          _react2.default.createElement(
            'a',
            { onClick: function onClick() {
                _this6.onPageChange(_this6.state.pageCount);
              } },
            '>>'
          )
        ) : null
      );
      return _react2.default.createElement(
        'div',
        null,
        this.props.search ? _react2.default.createElement(
          'div',
          { className: 'datatable-searchbar-container row' },
          searchFilter,
          searchbar
        ) : null,
        _react2.default.createElement(
          'div',
          { className: 'row' },
          _react2.default.createElement(
            'div',
            { className: 'col-sm-12' },
            _react2.default.createElement(
              'div',
              { className: 'datatable-container' },
              _react2.default.createElement(
                'table',
                { id: this.props.id, className: 'datatable table' + striped + condensed + bordered + hovers },
                columnStyles,
                headers,
                _react2.default.createElement(
                  'tbody',
                  null,
                  content
                )
              )
            )
          )
        ),
        this.props.pagination ? _react2.default.createElement(
          'div',
          { className: 'row' },
          _react2.default.createElement(
            'div',
            { className: 'col-xs-4 col-sm-2' },
            pageCount
          ),
          _react2.default.createElement(
            'div',
            { className: 'col-xs-8 col-sm-10 text-right' },
            pageList
          )
        ) : null,
        !this.props.loading ? null : _react2.default.createElement(
          'div',
          { className: 'load-status-container text-center align-middle' },
          _react2.default.createElement(_loadStatus2.default, { size: '4em', color: this.props.loadColor, spins: true })
        )
      );
    }
  }]);

  return DataTable;
}(_react2.default.Component);

DataTable.propTypes = {
  // Props regarding markup && styling
  id: _propTypes2.default.string,
  loading: _propTypes2.default.bool,
  loadColor: _propTypes2.default.string,
  defaultColumnWidth: _propTypes2.default.string,
  striped: _propTypes2.default.bool,
  condensed: _propTypes2.default.bool,
  bordered: _propTypes2.default.bool,
  hovers: _propTypes2.default.bool,
  noDataMessage: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.element]),
  searchPlaceholder: _propTypes2.default.string,
  searchCategory: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.array]),
  hideSearchAny: _propTypes2.default.bool,
  // Props regarding data handling
  headers: _propTypes2.default.array,
  data: _propTypes2.default.array,
  defaultSortOrder: _propTypes2.default.string,
  search: _propTypes2.default.bool,
  ignoreData: _propTypes2.default.array,
  sorts: _propTypes2.default.bool,
  onSortChange: _propTypes2.default.func,
  // Props regarding pagination || remote data handling
  pagination: _propTypes2.default.bool,
  sizePerPage: _propTypes2.default.number,
  totalSize: _propTypes2.default.number,
  page: _propTypes2.default.number,
  pageCount: _propTypes2.default.number,
  onPageChange: _propTypes2.default.func,
  sizePerPageList: _propTypes2.default.array,
  hideSizePerPage: _propTypes2.default.bool,
  onPageSizeChange: _propTypes2.default.func,
  remote: _propTypes2.default.bool,
  onSearchSubmit: _propTypes2.default.func
};

DataTable.defaultProps = {
  // Props regarding markup && styling
  id: '',
  loading: false,
  loadColor: '#BBBBBB',
  defaultColumnWidth: 'auto',
  striped: false,
  condensed: false,
  bordered: false,
  hovers: false,
  noDataMessage: 'No Data Loaded',
  searchPlaceholder: 'Search the table',
  searchCategory: [],
  hideSearchAny: false,
  // Props regarding data handling
  headers: [],
  data: [],
  defaultSortOrder: 'asc',
  search: false,
  ignoreData: [],
  sorts: false,
  // Props regarding pagination || remote data handling
  pagination: false,
  sizePerPage: 20,
  totalSize: 0,
  page: 1,
  pageCount: 0,
  sizePerPageList: [5, 10, 20, 50, 100],
  hideSizePerPage: false,
  remote: false
};

exports.default = DataTable;
module.exports = exports['default'];
//# sourceMappingURL=data-table.js.map
