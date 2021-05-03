(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["TodoItem"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/views/dashboard/todos/Card.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/js/views/dashboard/todos/Card.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'TodoItem',
  props: ['id', 'title', 'AddClass', 'status', 'todoId', 'todoData'],
  data: function data() {
    return {
      taskUpdateData: {
        taskId: '',
        status: this.status
      },
      errors: {}
    };
  },
  computed: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_1__["mapState"])({
    getErrors: function getErrors(state) {
      return state.todo.error;
    }
  })),
  methods: _objectSpread(_objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_1__["mapActions"])({
    updateTask: 'todo/updateTask'
  })), {}, {
    dropItem: function dropItem(e, todoId) {
      var card_id = e.dataTransfer.getData('card_id');
      var todo_id = e.dataTransfer.getData('todo_Id');
      var card = document.getElementById(card_id); // Prevent from dropping tasks in different todo ...

      if (todoId == todo_id) {
        e.target.appendChild(card);
        card.style.display = "block";
        this.taskUpdateData.taskId = card_id.replace('item-', '');
        this.updateTaskStatus();
      } else {
        this.$store.dispatch('snackbar/addSnack', {
          color: 'red-500',
          msg: 'Task dropped in wrong todo list!'
        }, {
          root: true
        });
      }
    },
    updateTaskStatus: function updateTaskStatus() {
      var _this = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        var __this;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                __this = _this;

                __this.$Progress.start();

                _context.next = 4;
                return __this.updateTask(_this.taskUpdateData);

              case 4:
                if (!(__this.getErrors != null)) {
                  _context.next = 8;
                  break;
                }

                __this.errors = __this.getErrors;

                _this.$store.dispatch('snackbar/addSnack', {
                  color: 'red-500',
                  msg: 'Error: ' + __this.errors.task
                }, {
                  root: true
                }).then(function () {
                  __this.$Progress.fail();
                });

                return _context.abrupt("return");

              case 8:
                __this.$Progress.finish();

              case 9:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }))();
    }
  })
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/views/dashboard/todos/Item.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/js/views/dashboard/todos/Item.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'DraggableItem',
  props: ['taskData', 'draggable', 'AddClass'],
  data: function data() {
    return {};
  },
  methods: {
    dragStart: function dragStart(e, todoId) {
      e.dataTransfer.dropEffect = 'move';
      e.dataTransfer.effectAllowed = 'move';
      e.dataTransfer.setData('todo_Id', todoId); // Hide item once a item is being dragged ...

      var target = e.target;
      e.dataTransfer.setData('card_id', target.id);
      setTimeout(function () {
        target.style.display = "none";
      }, e);
    },
    dragEnd: function dragEnd(e) {
      // This is required for bringing back items if dropped in wrong place ....
      var target = e.target;
      setTimeout(function () {
        target.style.display = "flex";
      }, e);
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/views/dashboard/todos/TodoItem.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/js/views/dashboard/todos/TodoItem.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Card__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Card */ "./resources/assets/js/views/dashboard/todos/Card.vue");
/* harmony import */ var _Item__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Item */ "./resources/assets/js/views/dashboard/todos/Item.vue");
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! dayjs */ "./node_modules/dayjs/dayjs.min.js");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_4__);


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//




/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'TodoItems',
  components: {
    Item: _Item__WEBPACK_IMPORTED_MODULE_2__["default"],
    Card: _Card__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  props: {},
  data: function data() {
    return {
      date: this.$route.params.date,
      loading: true,
      createTask: {
        todoId: "",
        taskTitle: ""
      },
      errors: {},
      todoTaskDragId: null,
      restriction: {
        canDrag: false,
        canAdd: false,
        canEdit: false,
        canMoveToOtherDate: false,
        buttonOpacityLow: false
      },
      dayOptions: {},
      todoMenuState: {
        todoId: null,
        showMenu: false
      },
      taskMenuState: {
        taskId: null,
        showMenu: false
      }
    };
  },
  computed: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_3__["mapState"])({
    todos: function todos(state) {
      return state.todo.todos;
    },
    todo: function todo(state) {
      return state.todo.todo;
    },
    getErrors: function getErrors(state) {
      return state.todo.error;
    }
  })),
  mounted: function mounted() {
    this.getTodosForDate();
    this.checkDate(this.date);
  },
  created: function created() {
    var _this = this;

    var escapeHandlerTodo = function escapeHandlerTodo(e) {
      e.stopPropagation();
      var element = document.getElementById('todoMenu');

      if (element) {
        var inside = document.getElementById('todoMenu').contains(e.target);
        if (!inside) _this.closeTodoMenu();
      }
    };

    document.addEventListener('click', escapeHandlerTodo);

    var escapeHandlerTask = function escapeHandlerTask(e) {
      e.stopPropagation();
      var element = document.getElementById('taskMenu');

      if (element) {
        var inside = document.getElementById('taskMenu').contains(e.target);
        if (!inside) _this.closeTaskMenu();
      }
    };

    document.addEventListener('click', escapeHandlerTask); // Remove the event listeners ....

    this.$once('hook:destroyed', function () {
      document.removeEventListener('click', escapeHandlerTodo);
      document.removeEventListener('click', escapeHandlerTask);
    });
  },
  methods: _objectSpread(_objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_3__["mapActions"])({
    addTask: 'todo/addTask',
    updateTask: 'todo/addTask',
    deleteTask: 'todo/deleteTask',
    deleteTodo: 'todo/deleteTodo',
    moveTodo: 'todo/moveTodo',
    clearError: 'todo/clearError',
    getTodoForDate: 'todo/getTodoForDate'
  })), {}, {
    checkDate: function checkDate(date) {
      var formatedDate = dayjs__WEBPACK_IMPORTED_MODULE_4__(date);

      if (dayjs__WEBPACK_IMPORTED_MODULE_4__().isSame(formatedDate, 'date')) {
        this.restriction.canDrag = true;
        this.restriction.canAdd = true;
        this.restriction.canEdit = true;
      } else if (dayjs__WEBPACK_IMPORTED_MODULE_4__().isBefore(formatedDate, 'day')) {
        this.restriction.canDrag = false;
        this.restriction.canAdd = true;
        this.restriction.canEdit = false;
      }
    },
    clearErrors: function clearErrors() {
      this.errors = {};
      this.clearError();
    },
    toggleAddTaskForm: function toggleAddTaskForm() {
      var todoId = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
      this.createTask.taskTitle = '';
      this.createTask.todoId = todoId;
      var ref = 'inputRef-' + todoId; //this.$refs[ref].focus()
    },
    validateFormData: function validateFormData() {
      var __this = this; // Todo Title validation ....


      if (__this.createTask.taskTitle.trim() == '') {
        __this.errors.taskTitle = 'Title is required.';
      } else if (__this.createTask.taskTitle.trim().length < 3) {
        __this.errors.taskTitle = 'Title should be at least 3 characters.';
      }
    },
    submitAddTask: function submitAddTask(todoId) {
      var _this2 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        var __this;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                __this = _this2;

                __this.$Progress.start();

                __this.clearErrors();

                __this.createTask.todoId = todoId;

                _this2.validateFormData();

                if (!Object.keys(__this.errors).length) {
                  _context.next = 8;
                  break;
                }

                __this.$Progress.fail();

                return _context.abrupt("return");

              case 8:
                _context.next = 10;
                return __this.addTask(__this.createTask);

              case 10:
                if (!(__this.getErrors != null)) {
                  _context.next = 14;
                  break;
                }

                __this.errors = __this.getErrors;

                __this.$Progress.fail();

                return _context.abrupt("return");

              case 14:
                __this.$Progress.finish();

                __this.createTask.taskTitle = '';
                __this.createTask.todoId = '';
                console.clear();

              case 18:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }))();
    },
    getTodosForDate: function getTodosForDate() {
      var __this = this;

      __this.$Progress.start();

      this.$store.dispatch('todo/fetchTodos').then(function () {
        __this.getTodoForDate(__this.date);

        __this.loading = false;

        __this.$Progress.finish();
      });
    },
    dropItem: function dropItem(e) {
      var card_id = e.dataTransfer.getData('card_id');
      var card = document.getElementById(card_id);
      card.style.display = "block";
      e.target.appendChild(card);
    },
    filterDaysOption: function filterDaysOption(todo) {
      this.restriction.canMoveToOtherDate = true;

      if (dayjs__WEBPACK_IMPORTED_MODULE_4__().isSame(todo.date, 'date')) {
        this.dayOptions = {
          Tomorrow: dayjs__WEBPACK_IMPORTED_MODULE_4__().add(1, 'day').format("ddd, DD MMM YYYY")
        };
      } else if (dayjs__WEBPACK_IMPORTED_MODULE_4__().isAfter(todo.date, 'day')) {
        this.dayOptions = {
          Today: "Today",
          Tomorrow: dayjs__WEBPACK_IMPORTED_MODULE_4__().add(1, 'day').format("ddd, DD MMM YYYY")
        };
      } else if (dayjs__WEBPACK_IMPORTED_MODULE_4__().isBefore(todo.date, 'day')) {
        this.dayOptions = {
          Today: "Today"
        };
      } else {
        this.restriction.canMoveToOtherDate = false;
      }
    },
    showTodoMenu: function showTodoMenu(todo) {
      if (this.todoMenuState.todoId == todo.id) {
        this.todoMenuState.showMenu = false;
        this.todoMenuState.todoId = null;
      } else {
        this.todoMenuState.showMenu = true;
        this.todoMenuState.todoId = todo.id;
      }

      this.filterDaysOption(todo);
    },
    closeTodoMenu: function closeTodoMenu() {
      this.todoMenuState.showMenu = false;
      this.todoMenuState.todoId = null;
    },
    showTaskMenu: function showTaskMenu(taskId) {
      if (this.taskMenuState.taskId === taskId) {
        this.taskMenuState.showMenu = false;
        this.taskMenuState.taskId = null;
      } else {
        this.taskMenuState.showMenu = true;
        this.taskMenuState.taskId = taskId;
      }
    },
    closeTaskMenu: function closeTaskMenu() {
      this.taskMenuState.showMenu = false;
      this.taskMenuState.taskId = null;
    },
    editTodoShowModal: function editTodoShowModal(todo) {
      this.$emit('showTodoFormModal', todo);
    },
    editTaskShowModal: function editTaskShowModal(task, todoDate) {
      this.closeTaskMenu();
      this.$emit('showTaskFormModal', {
        task: task,
        todoDate: todoDate
      });
    },
    deleteTodoSubmit: function deleteTodoSubmit(todo) {
      var _this3 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2() {
        var r, __this;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                r = confirm("Are you sure you want to delete this todo.");

                if (!(r == true)) {
                  _context2.next = 13;
                  break;
                }

                __this = _this3;

                __this.$Progress.start();

                __this.clearErrors();

                _context2.next = 7;
                return __this.deleteTodo(todo);

              case 7:
                if (!(__this.getErrors != null)) {
                  _context2.next = 11;
                  break;
                }

                __this.errors = __this.getErrors;

                __this.$Progress.fail();

                return _context2.abrupt("return");

              case 11:
                __this.closeTaskMenu();

                __this.$Progress.finish();

              case 13:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }))();
    },
    deleteTaskSubmit: function deleteTaskSubmit(task) {
      var _this4 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3() {
        var r, __this;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                r = confirm("Are you sure you want to delete this task.");

                if (!(r == true)) {
                  _context3.next = 13;
                  break;
                }

                __this = _this4;

                __this.$Progress.start();

                __this.clearErrors();

                _context3.next = 7;
                return __this.deleteTask(task);

              case 7:
                if (!(__this.getErrors != null)) {
                  _context3.next = 11;
                  break;
                }

                __this.errors = __this.getErrors;

                __this.$Progress.fail();

                return _context3.abrupt("return");

              case 11:
                __this.closeTaskMenu();

                __this.$Progress.finish();

              case 13:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3);
      }))();
    },
    moveTodoSubmit: function moveTodoSubmit(dayOption, todoId) {
      var _this5 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee4() {
        var r, __this, data;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                r = confirm("Are you sure you want to move this Todo.");

                if (!(r == true)) {
                  _context4.next = 14;
                  break;
                }

                __this = _this5;

                __this.$Progress.start();

                __this.clearErrors();

                data = {
                  dayOption: dayOption,
                  todoId: todoId
                };
                _context4.next = 8;
                return __this.moveTodo(data);

              case 8:
                if (!(__this.getErrors != null)) {
                  _context4.next = 12;
                  break;
                }

                __this.errors = __this.getErrors;

                __this.$Progress.fail();

                return _context4.abrupt("return");

              case 12:
                __this.closeTodoMenu();

                __this.$Progress.finish();

              case 14:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4);
      }))();
    },
    copyToClipboard: function copyToClipboard(textToCopy) {
      try {
        navigator.clipboard.writeText(textToCopy);
        this.$store.dispatch('snackbar/addSnack', {
          color: 'success',
          msg: 'Task title copied to clipboard.'
        }, {
          root: true
        });
        this.closeTaskMenu();
      } catch (e) {
        throw e;
      }
    }
  }),
  beforeDestroy: function beforeDestroy() {
    this.date = null;
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/views/dashboard/todos/TodoItem.vue?vue&type=style&index=0&id=0783ac09&scoped=true&lang=scss&":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/js/views/dashboard/todos/TodoItem.vue?vue&type=style&index=0&id=0783ac09&scoped=true&lang=scss& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".taskMenuBlock[data-v-0783ac09] {\n  cursor: pointer;\n  height: 12px;\n  width: 12px;\n  border-radius: 50%;\n  transition: all 200ms;\n  position: absolute;\n  top: -2px;\n  right: -2px;\n  z-index: 2;\n  overflow: hidden;\n}\n.taskMenuButton[data-v-0783ac09] {\n  cursor: pointer;\n  height: 12px;\n  width: 12px;\n  border-radius: 50%;\n  transition: all 400ms;\n  position: absolute;\n  top: 0;\n  right: 0;\n}\n.taskMenuBlock.taskMenuExpand[data-v-0783ac09] {\n  padding-top: 1px;\n  height: 114px;\n  width: 100px;\n  border-radius: 6px;\n  overflow: auto;\n}\n.taskMenuItem li[data-v-0783ac09] {\n  text-align: center;\n  padding: 10px 10px;\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/views/dashboard/todos/Card.vue?vue&type=style&index=0&id=31a289c0&scoped=true&lang=css&":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/js/views/dashboard/todos/Card.vue?vue&type=style&index=0&id=31a289c0&scoped=true&lang=css& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.listDropZone[data-v-31a289c0] {\n    min-height: 40px;\n    max-height: 100%;\n    width: 100%;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/views/dashboard/todos/TodoItem.vue?vue&type=style&index=0&id=0783ac09&scoped=true&lang=scss&":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/js/views/dashboard/todos/TodoItem.vue?vue&type=style&index=0&id=0783ac09&scoped=true&lang=scss& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../../node_modules/css-loader!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./TodoItem.vue?vue&type=style&index=0&id=0783ac09&scoped=true&lang=scss& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/views/dashboard/todos/TodoItem.vue?vue&type=style&index=0&id=0783ac09&scoped=true&lang=scss&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/views/dashboard/todos/Card.vue?vue&type=style&index=0&id=31a289c0&scoped=true&lang=css&":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/js/views/dashboard/todos/Card.vue?vue&type=style&index=0&id=31a289c0&scoped=true&lang=css& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../../node_modules/css-loader??ref--6-1!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/src??ref--6-2!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Card.vue?vue&type=style&index=0&id=31a289c0&scoped=true&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/views/dashboard/todos/Card.vue?vue&type=style&index=0&id=31a289c0&scoped=true&lang=css&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/views/dashboard/todos/Card.vue?vue&type=template&id=31a289c0&scoped=true&":
/*!*************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/js/views/dashboard/todos/Card.vue?vue&type=template&id=31a289c0&scoped=true& ***!
  \*************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    {
      staticClass:
        "flex-auto w-60 md:max-w-full mr-2 mt-2 py-3 rounded-md shadow bg-white dark:bg-gray-800 flex-no-shrink w-64 p-2 mr-3",
      class: _vm.AddClass
    },
    [
      _c("h3", { staticClass: "text-center font-bold" }, [
        _vm._v(_vm._s(_vm.title))
      ]),
      _vm._v(" "),
      _c(
        "div",
        {
          staticClass:
            "listDropZone relative rounded pb-6 px-1 pt-1 text-sm mt-2 bg-gray-500 bg-opacity-40",
          attrs: { id: _vm.id, cardType: _vm.status },
          on: {
            dragover: function($event) {
              $event.preventDefault()
            },
            dragenetr: function($event) {
              $event.preventDefault()
            },
            drop: function($event) {
              $event.preventDefault()
              return _vm.dropItem($event, _vm.todoId)
            }
          }
        },
        [_vm._t("Item")],
        2
      ),
      _vm._v(" "),
      _vm._t("Button")
    ],
    2
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/views/dashboard/todos/Item.vue?vue&type=template&id=2ddc01a3&":
/*!*************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/js/views/dashboard/todos/Item.vue?vue&type=template&id=2ddc01a3& ***!
  \*************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    {
      staticClass:
        "flex flex-row items-center mb-1 text-left text-sm rounded px-2 py-1.5 bg-gray-100 dark:bg-gray-900 shadow",
      class: [{ "cursor-move": _vm.draggable }, _vm.AddClass],
      attrs: {
        id: _vm.taskData.id,
        taskId: _vm.taskData.id,
        draggable: _vm.draggable
      },
      on: {
        dragstart: function($event) {
          return _vm.dragStart($event, _vm.taskData.todo_id)
        },
        dragend: _vm.dragEnd,
        dragover: function($event) {
          $event.stopPropagation()
        }
      }
    },
    [
      _vm.taskData.status == "completed"
        ? _c("span", [
            _c(
              "svg",
              {
                staticClass:
                  "p-0.5 w-5 h-5 stroke-current text-green-500 dark:text-green-300 feather feather-check-circle",
                attrs: {
                  xmlns: "http://www.w3.org/2000/svg",
                  viewBox: "0 0 24 24",
                  fill: "none",
                  stroke: "currentColor",
                  "stroke-width": "2",
                  "stroke-linecap": "round",
                  "stroke-linejoin": "round"
                }
              },
              [
                _c("path", {
                  attrs: { d: "M22 11.08V12a10 10 0 1 1-5.93-9.14" }
                }),
                _vm._v(" "),
                _c("polyline", { attrs: { points: "22 4 12 14.01 9 11.01" } })
              ]
            )
          ])
        : _vm.taskData.status == "doing"
        ? _c("span", [
            _c(
              "svg",
              {
                staticClass:
                  "w-5 h-5 stroke-current text-yellow-600 dark:text-yellow-400",
                attrs: {
                  xmlns: "http://www.w3.org/2000/svg",
                  viewBox: "0 0 24 24",
                  "stroke-width": "1.5",
                  stroke: "#2c3e50",
                  fill: "none",
                  "stroke-linecap": "round",
                  "stroke-linejoin": "round"
                }
              },
              [
                _c("path", {
                  attrs: { stroke: "none", d: "M0 0h24v24H0z", fill: "none" }
                }),
                _vm._v(" "),
                _c("path", {
                  attrs: {
                    d:
                      "M9 5h-2a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-12a2 2 0 0 0 -2 -2h-2"
                  }
                }),
                _vm._v(" "),
                _c("rect", {
                  attrs: { x: "9", y: "3", width: "6", height: "4", rx: "2" }
                }),
                _vm._v(" "),
                _c("path", { attrs: { d: "M9 14l2 2l4 -4" } })
              ]
            )
          ])
        : _c("span", [
            _c(
              "svg",
              {
                staticClass: "w-5 h-5",
                attrs: {
                  "aria-hidden": "true",
                  fill: "none",
                  "stroke-linecap": "round",
                  "stroke-linejoin": "round",
                  "stroke-width": "1.5",
                  viewBox: "0 0 24 24",
                  stroke: "currentColor"
                }
              },
              [
                _c("path", {
                  attrs: {
                    d:
                      "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"
                  }
                })
              ]
            )
          ]),
      _vm._v(" "),
      _vm._t("default")
    ],
    2
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/views/dashboard/todos/TodoItem.vue?vue&type=template&id=0783ac09&scoped=true&":
/*!*****************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/js/views/dashboard/todos/TodoItem.vue?vue&type=template&id=0783ac09&scoped=true& ***!
  \*****************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", [
    _c(
      "div",
      { staticClass: "mb-2" },
      [
        _c(
          "p",
          {
            staticClass:
              "animate-bounce mt-2 text-sm text-center text-gray-400 dark:text-gray-600"
          },
          [_vm._v("\n            Drag and Drop Items.\n        ")]
        ),
        _vm._v(" "),
        _c("p", { staticClass: "text-sm text-pink-500 py-3" }, [
          _c("strong", [_vm._v("Date:")]),
          _vm._v(
            " " +
              _vm._s(_vm._f("dateFormatCustom")(_vm.date, "ddd, DD MMM YYYY")) +
              "\n\n            "
          ),
          !_vm.restriction.canDrag
            ? _c(
                "span",
                { staticClass: "ml-2 text-red-500 text-xs font-bold" },
                [
                  _vm._v(
                    "\n                (Drag mode is Disabled!)\n            "
                  )
                ]
              )
            : _vm._e(),
          _vm._v(" "),
          !_vm.restriction.canAdd
            ? _c(
                "span",
                { staticClass: "ml-2 text-red-500 text-xs font-bold" },
                [
                  _vm._v(
                    "\n                (Add task mode is Disabled!)\n            "
                  )
                ]
              )
            : _vm._e(),
          _vm._v(" "),
          !_vm.restriction.canEdit
            ? _c(
                "span",
                { staticClass: "ml-2 text-red-500 text-xs font-bold" },
                [
                  _vm._v(
                    "\n                (Edit mode is Disabled!)\n            "
                  )
                ]
              )
            : _vm._e()
        ]),
        _vm._v(" "),
        _c("div", {
          staticClass: "h-0.5 w-full bg-gray-300 dark:bg-gray-700 rounded-lg"
        }),
        _vm._v(" "),
        _vm.todo.length && _vm.loading === false
          ? _vm._l(_vm.todo, function(td) {
              return _c("div", { key: td.id }, [
                _c("div", { staticClass: "flex my-4 justify-between" }, [
                  _c(
                    "h2",
                    {
                      staticClass:
                        "text-2xl font-semibold text-gray-700 dark:text-gray-200",
                      class: {
                        "line-through text-green-500 dark:text-green-300":
                          td.status == 1
                      }
                    },
                    [
                      _vm._v(
                        "\n                        " +
                          _vm._s(td.title) +
                          "\n                    "
                      )
                    ]
                  ),
                  _vm._v(" "),
                  _vm.todoMenuState.todoId === null ||
                  _vm.todoMenuState.todoId == td.id
                    ? _c(
                        "div",
                        { staticClass: "relative", attrs: { id: "todoMenu" } },
                        [
                          _c(
                            "div",
                            {
                              staticClass:
                                "px-2 py-2 flex space-x-0.5 cursor-pointer hover:bg-gray-200 dark:hover:bg-gray-800 rounded-md",
                              class: {
                                "bg-gray-200 dark:bg-gray-800":
                                  _vm.todoMenuState.todoId == td.id
                              },
                              on: {
                                click: function($event) {
                                  return _vm.showTodoMenu(td)
                                }
                              }
                            },
                            [
                              _c("span", {
                                staticClass:
                                  "h-1.5 w-1.5 rounded-full bg-gray-800 dark:bg-gray-200"
                              }),
                              _vm._v(" "),
                              _c("span", {
                                staticClass:
                                  "h-1.5 w-1.5 rounded-full bg-gray-800 dark:bg-gray-200"
                              }),
                              _vm._v(" "),
                              _c("span", {
                                staticClass:
                                  "h-1.5 w-1.5 rounded-full bg-gray-800 dark:bg-gray-200"
                              })
                            ]
                          ),
                          _vm._v(" "),
                          _vm.todoMenuState.showMenu &&
                          _vm.todoMenuState.todoId == td.id
                            ? _c(
                                "div",
                                {
                                  staticClass:
                                    "absolute z-50 top-5 right-0 shadow-md text-center w-44 h-auto bg-gray-200 dark:bg-gray-800 rounded-lg p-2"
                                },
                                [
                                  _vm.restriction.canMoveToOtherDate &&
                                  _vm.dayOptions
                                    ? _c(
                                        "div",
                                        _vm._l(_vm.dayOptions, function(
                                          dayOption
                                        ) {
                                          return _c(
                                            "button",
                                            {
                                              staticClass:
                                                "flex items-center justify-center space-x-2 mb-2 w-full bg-purple-500 hover:bg-purple-400 shadow text-white hover:text-black py-2 px-3 rounded text-xs",
                                              attrs: { title: "Delete Todo" },
                                              on: {
                                                click: function($event) {
                                                  return _vm.moveTodoSubmit(
                                                    dayOption,
                                                    td.id
                                                  )
                                                }
                                              }
                                            },
                                            [
                                              _c("span", [
                                                _vm._v("Move to: "),
                                                _c("strong", [
                                                  _vm._v(_vm._s(dayOption))
                                                ])
                                              ])
                                            ]
                                          )
                                        }),
                                        0
                                      )
                                    : _vm._e(),
                                  _vm._v(" "),
                                  _vm.restriction.canEdit
                                    ? _c(
                                        "button",
                                        {
                                          staticClass:
                                            "flex items-center justify-center space-x-2 mb-2 w-full bg-blue-500 hover:bg-blue-400 shadow text-white hover:text-black py-2 px-3 rounded text-xs",
                                          attrs: { title: "Delete Todo" },
                                          on: {
                                            click: function($event) {
                                              return _vm.editTodoShowModal(td)
                                            }
                                          }
                                        },
                                        [
                                          _c("span", [_vm._v("Edit")]),
                                          _vm._v(" "),
                                          _c(
                                            "svg",
                                            {
                                              staticClass:
                                                "bi bi-pencil-square",
                                              attrs: {
                                                xmlns:
                                                  "http://www.w3.org/2000/svg",
                                                width: "16",
                                                height: "16",
                                                fill: "currentColor",
                                                viewBox: "0 0 16 16"
                                              }
                                            },
                                            [
                                              _c("path", {
                                                attrs: {
                                                  d:
                                                    "M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456l-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"
                                                }
                                              }),
                                              _vm._v(" "),
                                              _c("path", {
                                                attrs: {
                                                  "fill-rule": "evenodd",
                                                  d:
                                                    "M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"
                                                }
                                              })
                                            ]
                                          )
                                        ]
                                      )
                                    : _vm._e(),
                                  _vm._v(" "),
                                  _c(
                                    "button",
                                    {
                                      staticClass:
                                        "flex items-center justify-center space-x-2 w-full bg-red-500 hover:bg-red-400 shadow text-white hover:text-black py-2 px-3 rounded text-xs",
                                      attrs: { title: "Delete Todo" },
                                      on: {
                                        click: function($event) {
                                          return _vm.deleteTodoSubmit(td)
                                        }
                                      }
                                    },
                                    [
                                      _c("span", [_vm._v("Delete")]),
                                      _vm._v(" "),
                                      _c(
                                        "svg",
                                        {
                                          staticClass: "bi bi-trash-fill",
                                          attrs: {
                                            xmlns: "http://www.w3.org/2000/svg",
                                            width: "16",
                                            height: "16",
                                            fill: "currentColor",
                                            viewBox: "0 0 16 16"
                                          }
                                        },
                                        [
                                          _c("path", {
                                            attrs: {
                                              d:
                                                "M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z"
                                            }
                                          })
                                        ]
                                      )
                                    ]
                                  )
                                ]
                              )
                            : _vm._e()
                        ]
                      )
                    : _vm._e()
                ]),
                _vm._v(" "),
                td.description
                  ? _c("div", [
                      _c(
                        "h2",
                        {
                          staticClass:
                            "text-xs font-semibold text-gray-500 dark:text-gray-500"
                        },
                        [
                          _vm._v(
                            "\n                        Description: " +
                              _vm._s(_vm._f("capitalize")(td.description)) +
                              "\n                    "
                          )
                        ]
                      )
                    ])
                  : _vm._e(),
                _vm._v(" "),
                _c(
                  "div",
                  {
                    staticClass:
                      "flex flex-row flex-wrap content-start px-4 pb-8 items-start"
                  },
                  [
                    _c("Card", {
                      attrs: {
                        id: "card-" + td.id,
                        title: "Incomplete",
                        status: "incomplete",
                        todoId: td.id
                      },
                      scopedSlots: _vm._u(
                        [
                          td.todo_tasks
                            ? {
                                key: "Item",
                                fn: function() {
                                  return _vm._l(td.todo_tasks, function(
                                    task,
                                    taskIndex
                                  ) {
                                    return task.status == "incomplete"
                                      ? _c(
                                          "Item",
                                          {
                                            key: task.id,
                                            staticClass: "relative",
                                            attrs: {
                                              AddClass: {
                                                "bg-purple-400 dark:bg-purple-600":
                                                  _vm.taskMenuState.taskId ==
                                                  task.id
                                              },
                                              taskData: task,
                                              draggable: _vm.restriction.canDrag
                                            },
                                            nativeOn: {
                                              dblclick: function($event) {
                                                return _vm.showTaskMenu(task.id)
                                              }
                                            }
                                          },
                                          [
                                            _c(
                                              "p",
                                              {
                                                staticClass:
                                                  "ml-2 tracking-wide text-xs"
                                              },
                                              [
                                                _vm._v(
                                                  "\n                                    " +
                                                    _vm._s(
                                                      _vm._f("capitalize")(
                                                        task.title
                                                      )
                                                    ) +
                                                    "\n                                "
                                                )
                                              ]
                                            ),
                                            _vm._v(" "),
                                            _vm.taskMenuState.taskId == null ||
                                            _vm.taskMenuState.taskId == task.id
                                              ? _c(
                                                  "div",
                                                  {
                                                    staticClass:
                                                      "taskMenuBlock bg-gray-200 dark:bg-gray-800 shadow-lg text-gray-800 dark:text-gray-100",
                                                    class: {
                                                      taskMenuExpand:
                                                        _vm.taskMenuState
                                                          .taskId == task.id &&
                                                        _vm.taskMenuState
                                                          .showMenu
                                                    },
                                                    style:
                                                      "z-index:" +
                                                      2 +
                                                      taskIndex +
                                                      "!important",
                                                    attrs: { id: "taskMenu" }
                                                  },
                                                  [
                                                    _c("div", {
                                                      staticClass:
                                                        "animate-pulse duration-200 taskMenuButton bg-blue-400 dark:bg-blue-400",
                                                      style:
                                                        "animation-delay:" +
                                                        300 * taskIndex +
                                                        "ms",
                                                      on: {
                                                        click: function(
                                                          $event
                                                        ) {
                                                          $event.preventDefault()
                                                          return _vm.showTaskMenu(
                                                            task.id
                                                          )
                                                        }
                                                      }
                                                    }),
                                                    _vm._v(" "),
                                                    _c(
                                                      "ul",
                                                      {
                                                        staticClass:
                                                          "taskMenuItem text-xs"
                                                      },
                                                      [
                                                        _c(
                                                          "li",
                                                          {
                                                            staticClass:
                                                              "border-b-2 border-red-500 border-opacity-60 hover:bg-gray-300 dark:hover:bg-gray-700",
                                                            on: {
                                                              click: function(
                                                                $event
                                                              ) {
                                                                $event.preventDefault()
                                                                return _vm.copyToClipboard(
                                                                  task.title
                                                                )
                                                              }
                                                            }
                                                          },
                                                          [
                                                            _vm._v(
                                                              "Copy Text\n                                        "
                                                            )
                                                          ]
                                                        ),
                                                        _vm._v(" "),
                                                        _c(
                                                          "li",
                                                          {
                                                            staticClass:
                                                              "border-b-2 border-red-500 border-opacity-60 hover:bg-gray-300 dark:hover:bg-gray-700",
                                                            on: {
                                                              click: function(
                                                                $event
                                                              ) {
                                                                $event.preventDefault()
                                                                return _vm.editTaskShowModal(
                                                                  task,
                                                                  td.date
                                                                )
                                                              }
                                                            }
                                                          },
                                                          [
                                                            _vm._v(
                                                              "Edit\n                                        "
                                                            )
                                                          ]
                                                        ),
                                                        _vm._v(" "),
                                                        _c(
                                                          "li",
                                                          {
                                                            staticClass:
                                                              "hover:bg-gray-300 dark:hover:bg-gray-700",
                                                            on: {
                                                              click: function(
                                                                $event
                                                              ) {
                                                                $event.preventDefault()
                                                                return _vm.deleteTaskSubmit(
                                                                  task
                                                                )
                                                              }
                                                            }
                                                          },
                                                          [
                                                            _vm._v(
                                                              "Delete\n                                        "
                                                            )
                                                          ]
                                                        )
                                                      ]
                                                    )
                                                  ]
                                                )
                                              : _vm._e()
                                          ]
                                        )
                                      : _vm._e()
                                  })
                                },
                                proxy: true
                              }
                            : null,
                          _vm.restriction.canAdd
                            ? {
                                key: "Button",
                                fn: function() {
                                  return [
                                    _vm.createTask.todoId !== td.id
                                      ? _c(
                                          "button",
                                          {
                                            staticClass:
                                              "bg-red-500 hover:bg-red-600 shadow text-white mt-3 py-2 px-4 rounded-md text-xs",
                                            on: {
                                              click: function($event) {
                                                return _vm.toggleAddTaskForm(
                                                  td.id
                                                )
                                              }
                                            }
                                          },
                                          [
                                            _vm._v(
                                              "\n                                Add Task\n                            "
                                            )
                                          ]
                                        )
                                      : _c("div", [
                                          _c(
                                            "div",
                                            { staticClass: "relative" },
                                            [
                                              _c("Custom_Text_Input", {
                                                ref: "inputRef-" + td.id,
                                                refInFor: true,
                                                staticClass: "mt-3",
                                                attrs: {
                                                  id: "newTask-" + td.id,
                                                  type: "text",
                                                  placeholder: "Task title",
                                                  error:
                                                    _vm.errors.taskTitle &&
                                                    Array.isArray(
                                                      _vm.errors.taskTitle
                                                    )
                                                      ? _vm.errors.taskTitle[0]
                                                      : _vm.errors.taskTitle,
                                                  Add_Input_Class:
                                                    "h-10 bg-gray-100 dark:bg-gray-900 ring-1 ring-teal-600"
                                                },
                                                nativeOn: {
                                                  keyup: function($event) {
                                                    if (
                                                      !$event.type.indexOf(
                                                        "key"
                                                      ) &&
                                                      _vm._k(
                                                        $event.keyCode,
                                                        "enter",
                                                        13,
                                                        $event.key,
                                                        "Enter"
                                                      )
                                                    ) {
                                                      return null
                                                    }
                                                    return _vm.submitAddTask(
                                                      td.id
                                                    )
                                                  },
                                                  focusin: function($event) {
                                                    _vm.restriction.buttonOpacityLow = true
                                                  },
                                                  focusout: function($event) {
                                                    _vm.restriction.buttonOpacityLow = false
                                                  }
                                                },
                                                model: {
                                                  value:
                                                    _vm.createTask.taskTitle,
                                                  callback: function($$v) {
                                                    _vm.$set(
                                                      _vm.createTask,
                                                      "taskTitle",
                                                      $$v
                                                    )
                                                  },
                                                  expression:
                                                    "createTask.taskTitle"
                                                }
                                              }),
                                              _vm._v(" "),
                                              _c(
                                                "div",
                                                {
                                                  staticClass:
                                                    "absolute right-1.5 top-1.5 flex flex-row flex-wrap content-start hover:opacity-100",
                                                  class: {
                                                    "opacity-30 hover:opacity-100":
                                                      _vm.restriction
                                                        .buttonOpacityLow
                                                  }
                                                },
                                                [
                                                  _c(
                                                    "button",
                                                    {
                                                      staticClass:
                                                        "flex-none flex items-center justify-center h-7 w-7 mr-1 bg-green-600 hover:bg-green-500 px-2 py-1 cursor-pointer rounded-md text-white",
                                                      attrs: {
                                                        type: "button",
                                                        title: "Save"
                                                      },
                                                      on: {
                                                        click: function(
                                                          $event
                                                        ) {
                                                          return _vm.submitAddTask(
                                                            td.id
                                                          )
                                                        }
                                                      }
                                                    },
                                                    [
                                                      _c(
                                                        "svg",
                                                        {
                                                          staticClass:
                                                            "stroke-current text-white dark:text-white feather feather-check-circle",
                                                          attrs: {
                                                            xmlns:
                                                              "http://www.w3.org/2000/svg",
                                                            width: "16",
                                                            height: "16",
                                                            viewBox:
                                                              "0 0 24 24",
                                                            fill: "none",
                                                            stroke:
                                                              "currentColor",
                                                            "stroke-width": "2",
                                                            "stroke-linecap":
                                                              "round",
                                                            "stroke-linejoin":
                                                              "round"
                                                          }
                                                        },
                                                        [
                                                          _c("path", {
                                                            attrs: {
                                                              d:
                                                                "M22 11.08V12a10 10 0 1 1-5.93-9.14"
                                                            }
                                                          }),
                                                          _vm._v(" "),
                                                          _c("polyline", {
                                                            attrs: {
                                                              points:
                                                                "22 4 12 14.01 9 11.01"
                                                            }
                                                          })
                                                        ]
                                                      )
                                                    ]
                                                  ),
                                                  _vm._v(" "),
                                                  _c(
                                                    "button",
                                                    {
                                                      staticClass:
                                                        "flex-none flex items-center justify-center h-7 w-7 ml-1 bg-red-500 hover:bg-red-400 px-2 py-1 cursor-pointer rounded-md text-white",
                                                      attrs: {
                                                        type: "button",
                                                        title: "Cancel"
                                                      },
                                                      on: {
                                                        click: function(
                                                          $event
                                                        ) {
                                                          return _vm.toggleAddTaskForm()
                                                        }
                                                      }
                                                    },
                                                    [
                                                      _c(
                                                        "svg",
                                                        {
                                                          staticClass:
                                                            "stroke-current text-white dark:text-white feather feather-x",
                                                          attrs: {
                                                            xmlns:
                                                              "http://www.w3.org/2000/svg",
                                                            width: "20",
                                                            height: "20",
                                                            viewBox:
                                                              "0 0 24 24",
                                                            fill: "none",
                                                            stroke:
                                                              "currentColor",
                                                            "stroke-width": "2",
                                                            "stroke-linecap":
                                                              "round",
                                                            "stroke-linejoin":
                                                              "round"
                                                          }
                                                        },
                                                        [
                                                          _c("line", {
                                                            attrs: {
                                                              x1: "18",
                                                              y1: "6",
                                                              x2: "6",
                                                              y2: "18"
                                                            }
                                                          }),
                                                          _vm._v(" "),
                                                          _c("line", {
                                                            attrs: {
                                                              x1: "6",
                                                              y1: "6",
                                                              x2: "18",
                                                              y2: "18"
                                                            }
                                                          })
                                                        ]
                                                      )
                                                    ]
                                                  )
                                                ]
                                              )
                                            ],
                                            1
                                          )
                                        ])
                                  ]
                                },
                                proxy: true
                              }
                            : null
                        ],
                        null,
                        true
                      )
                    }),
                    _vm._v(" "),
                    _c("Card", {
                      attrs: {
                        id: "card-" + td.id,
                        title: "Doing",
                        status: "doing",
                        todoId: td.id,
                        AddClass: ""
                      },
                      scopedSlots: _vm._u(
                        [
                          {
                            key: "Item",
                            fn: function() {
                              return _vm._l(td.todo_tasks, function(
                                task,
                                taskIndex
                              ) {
                                return task.status === "doing"
                                  ? _c(
                                      "Item",
                                      {
                                        key: task.id,
                                        staticClass: "relative",
                                        attrs: {
                                          AddClass: {
                                            "bg-purple-400 dark:bg-purple-600":
                                              _vm.taskMenuState.taskId ==
                                              task.id
                                          },
                                          taskData: task,
                                          draggable: _vm.restriction.canDrag
                                        }
                                      },
                                      [
                                        _c(
                                          "p",
                                          {
                                            staticClass:
                                              "ml-2 tracking-wide text-xs text-yellow-600 dark:text-yellow-400"
                                          },
                                          [
                                            _vm._v(
                                              "\n                                    " +
                                                _vm._s(
                                                  _vm._f("capitalize")(
                                                    task.title
                                                  )
                                                ) +
                                                "\n                                "
                                            )
                                          ]
                                        ),
                                        _vm._v(" "),
                                        _vm.taskMenuState.taskId == null ||
                                        _vm.taskMenuState.taskId == task.id
                                          ? _c(
                                              "div",
                                              {
                                                staticClass:
                                                  "taskMenuBlock bg-gray-200 dark:bg-gray-800 shadow-lg text-gray-800 dark:text-gray-100",
                                                class: {
                                                  taskMenuExpand:
                                                    _vm.taskMenuState.taskId ==
                                                      task.id &&
                                                    _vm.taskMenuState.showMenu
                                                },
                                                style:
                                                  "z-index:" +
                                                  2 +
                                                  taskIndex +
                                                  "!important",
                                                attrs: { id: "taskMenu" }
                                              },
                                              [
                                                _c("div", {
                                                  staticClass:
                                                    "animate-pulse duration-200 taskMenuButton bg-blue-400 dark:bg-blue-400",
                                                  style:
                                                    "animation-delay:" +
                                                    300 * taskIndex +
                                                    "ms",
                                                  on: {
                                                    click: function($event) {
                                                      $event.preventDefault()
                                                      return _vm.showTaskMenu(
                                                        task.id
                                                      )
                                                    }
                                                  }
                                                }),
                                                _vm._v(" "),
                                                _c(
                                                  "ul",
                                                  {
                                                    staticClass:
                                                      "taskMenuItem text-xs"
                                                  },
                                                  [
                                                    _c(
                                                      "li",
                                                      {
                                                        staticClass:
                                                          "border-b-2 border-red-500 border-opacity-60 hover:bg-gray-300 dark:hover:bg-gray-700",
                                                        on: {
                                                          click: function(
                                                            $event
                                                          ) {
                                                            $event.preventDefault()
                                                            return _vm.copyToClipboard(
                                                              task.title
                                                            )
                                                          }
                                                        }
                                                      },
                                                      [
                                                        _vm._v(
                                                          "Copy Text\n                                        "
                                                        )
                                                      ]
                                                    ),
                                                    _vm._v(" "),
                                                    _c(
                                                      "li",
                                                      {
                                                        staticClass:
                                                          "border-b-2 border-red-500 border-opacity-60 hover:bg-gray-300 dark:hover:bg-gray-700",
                                                        on: {
                                                          click: function(
                                                            $event
                                                          ) {
                                                            $event.preventDefault()
                                                            return _vm.editTaskShowModal(
                                                              task,
                                                              td.date
                                                            )
                                                          }
                                                        }
                                                      },
                                                      [
                                                        _vm._v(
                                                          "Edit\n                                        "
                                                        )
                                                      ]
                                                    ),
                                                    _vm._v(" "),
                                                    _c(
                                                      "li",
                                                      {
                                                        staticClass:
                                                          "hover:bg-gray-300 dark:hover:bg-gray-700",
                                                        on: {
                                                          click: function(
                                                            $event
                                                          ) {
                                                            $event.preventDefault()
                                                            return _vm.deleteTaskSubmit(
                                                              task
                                                            )
                                                          }
                                                        }
                                                      },
                                                      [
                                                        _vm._v(
                                                          "Delete\n                                        "
                                                        )
                                                      ]
                                                    )
                                                  ]
                                                )
                                              ]
                                            )
                                          : _vm._e()
                                      ]
                                    )
                                  : _vm._e()
                              })
                            },
                            proxy: true
                          }
                        ],
                        null,
                        true
                      )
                    }),
                    _vm._v(" "),
                    _c("Card", {
                      attrs: {
                        id: "card-" + td.id,
                        title: "Completed",
                        status: "completed",
                        todoId: td.id,
                        AddClass: ""
                      },
                      scopedSlots: _vm._u(
                        [
                          {
                            key: "Item",
                            fn: function() {
                              return _vm._l(td.todo_tasks, function(
                                task,
                                taskIndex
                              ) {
                                return task.status === "completed"
                                  ? _c(
                                      "Item",
                                      {
                                        key: task.id,
                                        staticClass: "relative",
                                        attrs: {
                                          AddClass: {
                                            "bg-purple-400 dark:bg-purple-600":
                                              _vm.taskMenuState.taskId ==
                                              task.id
                                          },
                                          taskData: task,
                                          draggable: _vm.restriction.canDrag
                                        }
                                      },
                                      [
                                        _c(
                                          "p",
                                          {
                                            staticClass:
                                              "ml-2 tracking-wide text-xs",
                                            class: {
                                              "line-through text-green-500 dark:text-green-300":
                                                task.status == "completed"
                                            }
                                          },
                                          [
                                            _vm._v(
                                              "\n                                    " +
                                                _vm._s(
                                                  _vm._f("capitalize")(
                                                    task.title
                                                  )
                                                ) +
                                                "\n                                "
                                            )
                                          ]
                                        ),
                                        _vm._v(" "),
                                        _vm.taskMenuState.taskId == null ||
                                        _vm.taskMenuState.taskId == task.id
                                          ? _c(
                                              "div",
                                              {
                                                staticClass:
                                                  "taskMenuBlock bg-gray-200 dark:bg-gray-800 shadow-lg text-gray-800 dark:text-gray-100",
                                                class: {
                                                  taskMenuExpand:
                                                    _vm.taskMenuState.taskId ==
                                                      task.id &&
                                                    _vm.taskMenuState.showMenu
                                                },
                                                style:
                                                  "z-index:" +
                                                  2 +
                                                  taskIndex +
                                                  "!important",
                                                attrs: { id: "taskMenu" }
                                              },
                                              [
                                                _c("div", {
                                                  staticClass:
                                                    "animate-pulse duration-200 taskMenuButton bg-blue-400 dark:bg-blue-400",
                                                  style:
                                                    "animation-delay:" +
                                                    300 * taskIndex +
                                                    "ms",
                                                  on: {
                                                    click: function($event) {
                                                      $event.preventDefault()
                                                      return _vm.showTaskMenu(
                                                        task.id
                                                      )
                                                    }
                                                  }
                                                }),
                                                _vm._v(" "),
                                                _c(
                                                  "ul",
                                                  {
                                                    staticClass:
                                                      "taskMenuItem text-xs"
                                                  },
                                                  [
                                                    _c(
                                                      "li",
                                                      {
                                                        staticClass:
                                                          "border-b-2 border-red-500 border-opacity-60 hover:bg-gray-300 dark:hover:bg-gray-700",
                                                        on: {
                                                          click: function(
                                                            $event
                                                          ) {
                                                            $event.preventDefault()
                                                            return _vm.copyToClipboard(
                                                              task.title
                                                            )
                                                          }
                                                        }
                                                      },
                                                      [
                                                        _vm._v(
                                                          "Copy Text\n                                        "
                                                        )
                                                      ]
                                                    ),
                                                    _vm._v(" "),
                                                    _c(
                                                      "li",
                                                      {
                                                        staticClass:
                                                          "border-b-2 border-red-500 border-opacity-60 hover:bg-gray-300 dark:hover:bg-gray-700",
                                                        on: {
                                                          click: function(
                                                            $event
                                                          ) {
                                                            $event.preventDefault()
                                                            return _vm.editTaskShowModal(
                                                              task,
                                                              td.date
                                                            )
                                                          }
                                                        }
                                                      },
                                                      [
                                                        _vm._v(
                                                          "Edit\n                                        "
                                                        )
                                                      ]
                                                    ),
                                                    _vm._v(" "),
                                                    _c(
                                                      "li",
                                                      {
                                                        staticClass:
                                                          "hover:bg-gray-300 dark:hover:bg-gray-700",
                                                        on: {
                                                          click: function(
                                                            $event
                                                          ) {
                                                            $event.preventDefault()
                                                            return _vm.deleteTaskSubmit(
                                                              task
                                                            )
                                                          }
                                                        }
                                                      },
                                                      [
                                                        _vm._v(
                                                          "Delete\n                                        "
                                                        )
                                                      ]
                                                    )
                                                  ]
                                                )
                                              ]
                                            )
                                          : _vm._e()
                                      ]
                                    )
                                  : _vm._e()
                              })
                            },
                            proxy: true
                          }
                        ],
                        null,
                        true
                      )
                    })
                  ],
                  1
                )
              ])
            })
          : _c(
              "div",
              [
                _vm.loading == true
                  ? _c("Loading")
                  : _c(
                      "div",
                      {
                        staticClass:
                          "mt-4 text-xs text-white bg-red-500 bg-opacity-80 rounded px-4 py-4 text-center"
                      },
                      [_c("p", [_vm._v("No data found!")])]
                    )
              ],
              1
            )
      ],
      2
    )
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/assets/js/views/dashboard/todos/Card.vue":
/*!************************************************************!*\
  !*** ./resources/assets/js/views/dashboard/todos/Card.vue ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Card_vue_vue_type_template_id_31a289c0_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Card.vue?vue&type=template&id=31a289c0&scoped=true& */ "./resources/assets/js/views/dashboard/todos/Card.vue?vue&type=template&id=31a289c0&scoped=true&");
/* harmony import */ var _Card_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Card.vue?vue&type=script&lang=js& */ "./resources/assets/js/views/dashboard/todos/Card.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _Card_vue_vue_type_style_index_0_id_31a289c0_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Card.vue?vue&type=style&index=0&id=31a289c0&scoped=true&lang=css& */ "./resources/assets/js/views/dashboard/todos/Card.vue?vue&type=style&index=0&id=31a289c0&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Card_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Card_vue_vue_type_template_id_31a289c0_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Card_vue_vue_type_template_id_31a289c0_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "31a289c0",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/assets/js/views/dashboard/todos/Card.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/assets/js/views/dashboard/todos/Card.vue?vue&type=script&lang=js&":
/*!*************************************************************************************!*\
  !*** ./resources/assets/js/views/dashboard/todos/Card.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Card_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Card.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/views/dashboard/todos/Card.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Card_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/assets/js/views/dashboard/todos/Card.vue?vue&type=style&index=0&id=31a289c0&scoped=true&lang=css&":
/*!*********************************************************************************************************************!*\
  !*** ./resources/assets/js/views/dashboard/todos/Card.vue?vue&type=style&index=0&id=31a289c0&scoped=true&lang=css& ***!
  \*********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Card_vue_vue_type_style_index_0_id_31a289c0_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/style-loader!../../../../../../node_modules/css-loader??ref--6-1!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/src??ref--6-2!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Card.vue?vue&type=style&index=0&id=31a289c0&scoped=true&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/views/dashboard/todos/Card.vue?vue&type=style&index=0&id=31a289c0&scoped=true&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Card_vue_vue_type_style_index_0_id_31a289c0_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Card_vue_vue_type_style_index_0_id_31a289c0_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Card_vue_vue_type_style_index_0_id_31a289c0_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Card_vue_vue_type_style_index_0_id_31a289c0_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/assets/js/views/dashboard/todos/Card.vue?vue&type=template&id=31a289c0&scoped=true&":
/*!*******************************************************************************************************!*\
  !*** ./resources/assets/js/views/dashboard/todos/Card.vue?vue&type=template&id=31a289c0&scoped=true& ***!
  \*******************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Card_vue_vue_type_template_id_31a289c0_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Card.vue?vue&type=template&id=31a289c0&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/views/dashboard/todos/Card.vue?vue&type=template&id=31a289c0&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Card_vue_vue_type_template_id_31a289c0_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Card_vue_vue_type_template_id_31a289c0_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/assets/js/views/dashboard/todos/Item.vue":
/*!************************************************************!*\
  !*** ./resources/assets/js/views/dashboard/todos/Item.vue ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Item_vue_vue_type_template_id_2ddc01a3___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Item.vue?vue&type=template&id=2ddc01a3& */ "./resources/assets/js/views/dashboard/todos/Item.vue?vue&type=template&id=2ddc01a3&");
/* harmony import */ var _Item_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Item.vue?vue&type=script&lang=js& */ "./resources/assets/js/views/dashboard/todos/Item.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Item_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Item_vue_vue_type_template_id_2ddc01a3___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Item_vue_vue_type_template_id_2ddc01a3___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/assets/js/views/dashboard/todos/Item.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/assets/js/views/dashboard/todos/Item.vue?vue&type=script&lang=js&":
/*!*************************************************************************************!*\
  !*** ./resources/assets/js/views/dashboard/todos/Item.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Item_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Item.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/views/dashboard/todos/Item.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Item_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/assets/js/views/dashboard/todos/Item.vue?vue&type=template&id=2ddc01a3&":
/*!*******************************************************************************************!*\
  !*** ./resources/assets/js/views/dashboard/todos/Item.vue?vue&type=template&id=2ddc01a3& ***!
  \*******************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Item_vue_vue_type_template_id_2ddc01a3___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Item.vue?vue&type=template&id=2ddc01a3& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/views/dashboard/todos/Item.vue?vue&type=template&id=2ddc01a3&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Item_vue_vue_type_template_id_2ddc01a3___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Item_vue_vue_type_template_id_2ddc01a3___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/assets/js/views/dashboard/todos/TodoItem.vue":
/*!****************************************************************!*\
  !*** ./resources/assets/js/views/dashboard/todos/TodoItem.vue ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _TodoItem_vue_vue_type_template_id_0783ac09_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TodoItem.vue?vue&type=template&id=0783ac09&scoped=true& */ "./resources/assets/js/views/dashboard/todos/TodoItem.vue?vue&type=template&id=0783ac09&scoped=true&");
/* harmony import */ var _TodoItem_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TodoItem.vue?vue&type=script&lang=js& */ "./resources/assets/js/views/dashboard/todos/TodoItem.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _TodoItem_vue_vue_type_style_index_0_id_0783ac09_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./TodoItem.vue?vue&type=style&index=0&id=0783ac09&scoped=true&lang=scss& */ "./resources/assets/js/views/dashboard/todos/TodoItem.vue?vue&type=style&index=0&id=0783ac09&scoped=true&lang=scss&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _TodoItem_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _TodoItem_vue_vue_type_template_id_0783ac09_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _TodoItem_vue_vue_type_template_id_0783ac09_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "0783ac09",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/assets/js/views/dashboard/todos/TodoItem.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/assets/js/views/dashboard/todos/TodoItem.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************!*\
  !*** ./resources/assets/js/views/dashboard/todos/TodoItem.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TodoItem_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./TodoItem.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/views/dashboard/todos/TodoItem.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TodoItem_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/assets/js/views/dashboard/todos/TodoItem.vue?vue&type=style&index=0&id=0783ac09&scoped=true&lang=scss&":
/*!**************************************************************************************************************************!*\
  !*** ./resources/assets/js/views/dashboard/todos/TodoItem.vue?vue&type=style&index=0&id=0783ac09&scoped=true&lang=scss& ***!
  \**************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_TodoItem_vue_vue_type_style_index_0_id_0783ac09_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/style-loader!../../../../../../node_modules/css-loader!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./TodoItem.vue?vue&type=style&index=0&id=0783ac09&scoped=true&lang=scss& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/views/dashboard/todos/TodoItem.vue?vue&type=style&index=0&id=0783ac09&scoped=true&lang=scss&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_TodoItem_vue_vue_type_style_index_0_id_0783ac09_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_TodoItem_vue_vue_type_style_index_0_id_0783ac09_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_TodoItem_vue_vue_type_style_index_0_id_0783ac09_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_TodoItem_vue_vue_type_style_index_0_id_0783ac09_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/assets/js/views/dashboard/todos/TodoItem.vue?vue&type=template&id=0783ac09&scoped=true&":
/*!***********************************************************************************************************!*\
  !*** ./resources/assets/js/views/dashboard/todos/TodoItem.vue?vue&type=template&id=0783ac09&scoped=true& ***!
  \***********************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TodoItem_vue_vue_type_template_id_0783ac09_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./TodoItem.vue?vue&type=template&id=0783ac09&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/views/dashboard/todos/TodoItem.vue?vue&type=template&id=0783ac09&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TodoItem_vue_vue_type_template_id_0783ac09_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TodoItem_vue_vue_type_template_id_0783ac09_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);