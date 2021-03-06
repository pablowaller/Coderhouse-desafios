"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
require("@babel/polyfill");
var express = require('express');
var morgan = require('morgan');
var handlebars = require('express-handlebars');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var apiProd = require('./api/productos');
var apiMsj = require('./api/mensajes');
app.use(morgan('tiny'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/public'));
app.engine('hbs', handlebars({
    extname: '.hbs',
    layoutsDir: __dirname + '/views/layouts',
}));
app.set('view engine', 'hbs');
app.set('views', './views');
//Rutas 
app.get('/', function (req, res) {
    res.render('form', { layout: 'index' });
});
app.use('/productos', require('./routes/productos'));
//Rutas API
app.use('/api/productos', require('./routes/api/productos'));
//Sockets
io.on('connect', function (socket) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, _b, _c;
    return __generator(this, function (_d) {
        switch (_d.label) {
            case 0:
                socket.emit('productos', apiProd.listar());
                socket.on('productos:update', function () {
                    io.sockets.emit('productos', apiProd.listar());
                });
                _b = (_a = socket).emit;
                _c = ['mensajes'];
                return [4 /*yield*/, apiMsj.getMensajes()];
            case 1:
                _b.apply(_a, _c.concat([_d.sent()]));
                socket.on('mensajes:nuevo', function (mensaje) { return __awaiter(void 0, void 0, void 0, function () {
                    var _a, _b, _c;
                    return __generator(this, function (_d) {
                        switch (_d.label) {
                            case 0: return [4 /*yield*/, apiMsj.guardar(mensaje)];
                            case 1:
                                _d.sent();
                                _b = (_a = io.sockets).emit;
                                _c = ['mensajes'];
                                return [4 /*yield*/, apiMsj.getMensajes()];
                            case 2:
                                _b.apply(_a, _c.concat([_d.sent()]));
                                return [2 /*return*/];
                        }
                    });
                }); });
                return [2 /*return*/];
        }
    });
}); });
// Middleware para manejar errores
app.use(function (error, req, res, next) {
    res.status(error.code || 500).json({ error: error.message });
});
var puerto = 8080;
var server = http.listen(puerto, function () {
    console.log("servidor typescript escuchando en http://localhost:" + puerto);
});
server.on('error', function (error) {
    console.log('error en el servidor:', error);
});
