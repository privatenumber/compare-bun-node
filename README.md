# Bun & Node.js comparison

This repository provides a comparative overview of the [Bun](https://bun.sh) and [Node.js](https://nodejs.org) APIs. Making it easy to see what's available in Bun, what's not, and how they differ.

The comparison is performed every week using GitHub Actions, with the latest Bun Canary and Node.js LTS versions. For more details, refer to the Actions tab.

Bun is a rapidly maturing project and offers excellent opportunities for contributions. If you would like to help improve any aspect of Bun, please visit the [Bun repository](https://github.com/oven-sh/bun).

_Last updated on <!-- lastUpdated:start -->Jun 19, 2023 with Bun 0.6.10 Node.js v18.16.0<!-- lastUpdated:end -->._

## [Node.js APIs](https://nodejs.org/api/) compared
<!-- builtins:start -->
<table><tr><td valign="top">

- [`_http_agent`](#_http_agent)
- [`_http_client`](#_http_client)
- [`_http_common`](#_http_common)
- [`_http_incoming`](#_http_incoming)
- [`_http_outgoing`](#_http_outgoing)
- [`_http_server`](#_http_server)
- [`_stream_duplex`](#_stream_duplex)
- [`_stream_passthrough`](#_stream_passthrough)
- [`_stream_readable`](#_stream_readable)
- [`_stream_transform`](#_stream_transform)
- [`_stream_wrap`](#_stream_wrap)
- [`_stream_writable`](#_stream_writable)
- [`_tls_common`](#_tls_common)
- [`_tls_wrap`](#_tls_wrap)
- [`assert`](#assert)
- [`assert/strict`](#assertstrict)
- [`async_hooks`](#async_hooks)
- [`buffer`](#buffer)
- [`child_process`](#child_process)
- [`cluster`](#cluster)
- [`console`](#console)
- [`constants`](#constants)

</td><td valign="top">

- [`crypto`](#crypto)
- [`dgram`](#dgram)
- [`diagnostics_channel`](#diagnostics_channel)
- [`dns`](#dns)
- [`dns/promises`](#dnspromises)
- [`domain`](#domain)
- [`events`](#events)
- [`fs`](#fs)
- [`fs/promises`](#fspromises)
- [`http`](#http)
- [`http2`](#http2)
- [`https`](#https)
- [`inspector`](#inspector)
- [`module`](#module)
- [`net`](#net)
- [`os`](#os)
- [`path`](#path)
- [`path/posix`](#pathposix)
- [`path/win32`](#pathwin32)
- [`perf_hooks`](#perf_hooks)
- [`process`](#process)
- [`punycode`](#punycode)

</td><td valign="top">

- [`querystring`](#querystring)
- [`readline`](#readline)
- [`readline/promises`](#readlinepromises)
- [`repl`](#repl)
- [`stream`](#stream)
- [`stream/consumers`](#streamconsumers)
- [`stream/promises`](#streampromises)
- [`stream/web`](#streamweb)
- [`string_decoder`](#string_decoder)
- [`sys`](#sys)
- [`timers`](#timers)
- [`timers/promises`](#timerspromises)
- [`tls`](#tls)
- [`trace_events`](#trace_events)
- [`tty`](#tty)
- [`url`](#url)
- [`util`](#util)
- [`util/types`](#utiltypes)
- [`v8`](#v8)
- [`vm`](#vm)
- [`worker_threads`](#worker_threads)
- [`zlib`](#zlib)

</td></tr></table>
<!-- builtins:end -->


<!-- comparison:start -->
## _http_agent

<table><tr><th>Node.js</th><th>Bun</th></tr><tr><td valign="top">

```js
[Object: null prototype] {
    Agent: <ref *2> ƒ Agent(length: 1) {
        defaultMaxSockets: Infinity
    },
    default: {
        Agent: [Circular: *2],
        globalAgent: <ref *4> Agent {
            _events: [Object: null prototype] {
                free: ƒ (length: 2) {},
                newListener: ƒ maybeEnableKeylog(length: 1) {}
            },
            _eventsCount: 2,
            _maxListeners: undefined,
            defaultPort: 80,
            protocol: "http:",
            options: [Object: null prototype] {
                noDelay: true,
                path: null
            },
            requests: [Object: null prototype] {},
            sockets: [Object: null prototype] {},
            freeSockets: [Object: null prototype] {},
            keepAliveMsecs: 1000,
            keepAlive: false,
            maxSockets: Infinity,
            maxFreeSockets: 256,
            scheduling: "lifo",
            maxTotalSockets: Infinity,
            totalSocketCount: 0,
            Symbol(kCapture): false
        }
    },
    globalAgent: [Circular: *4]
}
```

</td><td valign="top">

```js
{
    Agent: class Agent extends EventEmitter {},
    Server: class Server extends EventEmitter {},
    METHODS: [
        "ACL",
        "BIND",
        "CHECKOUT",
        "CONNECT",
        "COPY",
        "DELETE",
        "GET",
        "HEAD",
        "LINK",
        "LOCK",
        "M-SEARCH",
        "MERGE",
        "MKACTIVITY",
        "MKCALENDAR",
        "MKCOL",
        "MOVE",
        "NOTIFY",
        "OPTIONS",
        "PATCH",
        "POST",
        "PROPFIND",
        "PROPPATCH",
        "PURGE",
        "PUT",
        "REBIND",
        "REPORT",
        "SEARCH",
        "SOURCE",
        "SUBSCRIBE",
        "TRACE",
        "UNBIND",
        "UNLINK",
        "UNLOCK",
        "UNSUBSCRIBE"
    ],
    STATUS_CODES: {
        100: "Continue",
        101: "Switching Protocols",
        102: "Processing",
        103: "Early Hints",
        200: "OK",
        201: "Created",
        202: "Accepted",
        203: "Non-Authoritative Information",
        204: "No Content",
        205: "Reset Content",
        206: "Partial Content",
        207: "Multi-Status",
        208: "Already Reported",
        226: "IM Used",
        300: "Multiple Choices",
        301: "Moved Permanently",
        302: "Found",
        303: "See Other",
        304: "Not Modified",
        305: "Use Proxy",
        307: "Temporary Redirect",
        308: "Permanent Redirect",
        400: "Bad Request",
        401: "Unauthorized",
        402: "Payment Required",
        403: "Forbidden",
        404: "Not Found",
        405: "Method Not Allowed",
        406: "Not Acceptable",
        407: "Proxy Authentication Required",
        408: "Request Timeout",
        409: "Conflict",
        410: "Gone",
        411: "Length Required",
        412: "Precondition Failed",
        413: "Payload Too Large",
        414: "URI Too Long",
        415: "Unsupported Media Type",
        416: "Range Not Satisfiable",
        417: "Expectation Failed",
        418: "I'm a Teapot",
        421: "Misdirected Request",
        422: "Unprocessable Entity",
        423: "Locked",
        424: "Failed Dependency",
        425: "Too Early",
        426: "Upgrade Required",
        428: "Precondition Required",
        429: "Too Many Requests",
        431: "Request Header Fields Too Large",
        451: "Unavailable For Legal Reasons",
        500: "Internal Server Error",
        501: "Not Implemented",
        502: "Bad Gateway",
        503: "Service Unavailable",
        504: "Gateway Timeout",
        505: "HTTP Version Not Supported",
        506: "Variant Also Negotiates",
        507: "Insufficient Storage",
        508: "Loop Detected",
        509: "Bandwidth Limit Exceeded",
        510: "Not Extended",
        511: "Network Authentication Required"
    },
    createServer: ƒ createServer(length: 2) {},
    ServerResponse: class ServerResponse extends Writable {},
    IncomingMessage: class IncomingMessage extends Readable {},
    request: ƒ request(length: 3) {},
    get: ƒ get(length: 3) {},
    maxHeaderSize: 16384,
    setMaxIdleHTTPParsers: ƒ setMaxIdleHTTPParsers(length: 1) {},
    [get/set] globalAgent: Agent {
        _events: [Object: null prototype] {},
        _eventsCount: 0,
        _maxListeners: undefined,
        Symbol(kCapture): false
    },
    Symbol(CommonJS): 0
}
```

</td></tr></table>

## _http_client

<table><tr><th>Node.js</th><th>Bun</th></tr><tr><td valign="top">

```js
[Object: null prototype] {
    ClientRequest: <ref *2> ƒ ClientRequest(length: 3) {},
    default: {
        ClientRequest: [Circular: *2]
    }
}
```

</td><td valign="top">

```js
{
    Agent: class Agent extends EventEmitter {},
    Server: class Server extends EventEmitter {},
    METHODS: [
        "ACL",
        "BIND",
        "CHECKOUT",
        "CONNECT",
        "COPY",
        "DELETE",
        "GET",
        "HEAD",
        "LINK",
        "LOCK",
        "M-SEARCH",
        "MERGE",
        "MKACTIVITY",
        "MKCALENDAR",
        "MKCOL",
        "MOVE",
        "NOTIFY",
        "OPTIONS",
        "PATCH",
        "POST",
        "PROPFIND",
        "PROPPATCH",
        "PURGE",
        "PUT",
        "REBIND",
        "REPORT",
        "SEARCH",
        "SOURCE",
        "SUBSCRIBE",
        "TRACE",
        "UNBIND",
        "UNLINK",
        "UNLOCK",
        "UNSUBSCRIBE"
    ],
    STATUS_CODES: {
        100: "Continue",
        101: "Switching Protocols",
        102: "Processing",
        103: "Early Hints",
        200: "OK",
        201: "Created",
        202: "Accepted",
        203: "Non-Authoritative Information",
        204: "No Content",
        205: "Reset Content",
        206: "Partial Content",
        207: "Multi-Status",
        208: "Already Reported",
        226: "IM Used",
        300: "Multiple Choices",
        301: "Moved Permanently",
        302: "Found",
        303: "See Other",
        304: "Not Modified",
        305: "Use Proxy",
        307: "Temporary Redirect",
        308: "Permanent Redirect",
        400: "Bad Request",
        401: "Unauthorized",
        402: "Payment Required",
        403: "Forbidden",
        404: "Not Found",
        405: "Method Not Allowed",
        406: "Not Acceptable",
        407: "Proxy Authentication Required",
        408: "Request Timeout",
        409: "Conflict",
        410: "Gone",
        411: "Length Required",
        412: "Precondition Failed",
        413: "Payload Too Large",
        414: "URI Too Long",
        415: "Unsupported Media Type",
        416: "Range Not Satisfiable",
        417: "Expectation Failed",
        418: "I'm a Teapot",
        421: "Misdirected Request",
        422: "Unprocessable Entity",
        423: "Locked",
        424: "Failed Dependency",
        425: "Too Early",
        426: "Upgrade Required",
        428: "Precondition Required",
        429: "Too Many Requests",
        431: "Request Header Fields Too Large",
        451: "Unavailable For Legal Reasons",
        500: "Internal Server Error",
        501: "Not Implemented",
        502: "Bad Gateway",
        503: "Service Unavailable",
        504: "Gateway Timeout",
        505: "HTTP Version Not Supported",
        506: "Variant Also Negotiates",
        507: "Insufficient Storage",
        508: "Loop Detected",
        509: "Bandwidth Limit Exceeded",
        510: "Not Extended",
        511: "Network Authentication Required"
    },
    createServer: ƒ createServer(length: 2) {},
    ServerResponse: class ServerResponse extends Writable {},
    IncomingMessage: class IncomingMessage extends Readable {},
    request: ƒ request(length: 3) {},
    get: ƒ get(length: 3) {},
    maxHeaderSize: 16384,
    setMaxIdleHTTPParsers: ƒ setMaxIdleHTTPParsers(length: 1) {},
    [get/set] globalAgent: Agent {
        _events: [Object: null prototype] {},
        _eventsCount: 0,
        _maxListeners: undefined,
        Symbol(kCapture): false
    },
    Symbol(CommonJS): 0
}
```

</td></tr></table>

## _http_common

<table><tr><th>Node.js</th><th>Bun</th></tr><tr><td valign="top">

```js
[Object: null prototype] {
    CRLF: "\r\n",
    HTTPParser: <ref *2> ƒ HTTPParser(length: 0) {
        REQUEST: 1,
        RESPONSE: 2,
        kOnMessageBegin: 0,
        kOnHeaders: 1,
        kOnHeadersComplete: 2,
        kOnBody: 3,
        kOnMessageComplete: 4,
        kOnExecute: 5,
        kOnTimeout: 6,
        kLenientNone: 0,
        kLenientHeaders: 1,
        kLenientChunkedLength: 2,
        kLenientKeepAlive: 4,
        kLenientAll: 7
    },
    _checkInvalidHeaderChar: <ref *3> ƒ checkInvalidHeaderChar(length: 1) {},
    _checkIsHttpToken: <ref *4> ƒ checkIsHttpToken(length: 1) {},
    chunkExpression: <ref *5> /(?:^|\W)chunked(?:$|\W)/i,
    continueExpression: <ref *6> /(?:^|\W)100-continue(?:$|\W)/i,
    default: {
        _checkInvalidHeaderChar: [Circular: *3],
        _checkIsHttpToken: [Circular: *4],
        chunkExpression: [Circular: *5],
        continueExpression: [Circular: *6],
        CRLF: "\r\n",
        freeParser: <ref *8> ƒ freeParser(length: 3) {},
        methods: <ref *9> [
            "DELETE",
            "GET",
            "HEAD",
            "POST",
            "PUT",
            "CONNECT",
            "OPTIONS",
            "TRACE",
            "COPY",
            "LOCK",
            "MKCOL",
            "MOVE",
            "PROPFIND",
            "PROPPATCH",
            "SEARCH",
            "UNLOCK",
            "BIND",
            "REBIND",
            "UNBIND",
            "ACL",
            "REPORT",
            "MKACTIVITY",
            "CHECKOUT",
            "MERGE",
            "M-SEARCH",
            "NOTIFY",
            "SUBSCRIBE",
            "UNSUBSCRIBE",
            "PATCH",
            "PURGE",
            "MKCALENDAR",
            "LINK",
            "UNLINK",
            "SOURCE"
        ],
        parsers: <ref *10> FreeList {
            name: "parsers",
            ctor: ƒ parsersCb(length: 0) {},
            max: 1000,
            list: []
        },
        kIncomingMessage: Symbol(IncomingMessage),
        HTTPParser: [Circular: *2],
        isLenient: <ref *13> ƒ isLenient(length: 0) {},
        prepareError: <ref *14> ƒ prepareError(length: 3) {}
    },
    freeParser: [Circular: *8],
    isLenient: [Circular: *13],
    kIncomingMessage: Symbol(IncomingMessage),
    methods: [Circular: *9],
    parsers: [Circular: *10],
    prepareError: [Circular: *14]
}
```

</td><td valign="top">

```js
{
    Agent: class Agent extends EventEmitter {},
    Server: class Server extends EventEmitter {},
    METHODS: [
        "ACL",
        "BIND",
        "CHECKOUT",
        "CONNECT",
        "COPY",
        "DELETE",
        "GET",
        "HEAD",
        "LINK",
        "LOCK",
        "M-SEARCH",
        "MERGE",
        "MKACTIVITY",
        "MKCALENDAR",
        "MKCOL",
        "MOVE",
        "NOTIFY",
        "OPTIONS",
        "PATCH",
        "POST",
        "PROPFIND",
        "PROPPATCH",
        "PURGE",
        "PUT",
        "REBIND",
        "REPORT",
        "SEARCH",
        "SOURCE",
        "SUBSCRIBE",
        "TRACE",
        "UNBIND",
        "UNLINK",
        "UNLOCK",
        "UNSUBSCRIBE"
    ],
    STATUS_CODES: {
        100: "Continue",
        101: "Switching Protocols",
        102: "Processing",
        103: "Early Hints",
        200: "OK",
        201: "Created",
        202: "Accepted",
        203: "Non-Authoritative Information",
        204: "No Content",
        205: "Reset Content",
        206: "Partial Content",
        207: "Multi-Status",
        208: "Already Reported",
        226: "IM Used",
        300: "Multiple Choices",
        301: "Moved Permanently",
        302: "Found",
        303: "See Other",
        304: "Not Modified",
        305: "Use Proxy",
        307: "Temporary Redirect",
        308: "Permanent Redirect",
        400: "Bad Request",
        401: "Unauthorized",
        402: "Payment Required",
        403: "Forbidden",
        404: "Not Found",
        405: "Method Not Allowed",
        406: "Not Acceptable",
        407: "Proxy Authentication Required",
        408: "Request Timeout",
        409: "Conflict",
        410: "Gone",
        411: "Length Required",
        412: "Precondition Failed",
        413: "Payload Too Large",
        414: "URI Too Long",
        415: "Unsupported Media Type",
        416: "Range Not Satisfiable",
        417: "Expectation Failed",
        418: "I'm a Teapot",
        421: "Misdirected Request",
        422: "Unprocessable Entity",
        423: "Locked",
        424: "Failed Dependency",
        425: "Too Early",
        426: "Upgrade Required",
        428: "Precondition Required",
        429: "Too Many Requests",
        431: "Request Header Fields Too Large",
        451: "Unavailable For Legal Reasons",
        500: "Internal Server Error",
        501: "Not Implemented",
        502: "Bad Gateway",
        503: "Service Unavailable",
        504: "Gateway Timeout",
        505: "HTTP Version Not Supported",
        506: "Variant Also Negotiates",
        507: "Insufficient Storage",
        508: "Loop Detected",
        509: "Bandwidth Limit Exceeded",
        510: "Not Extended",
        511: "Network Authentication Required"
    },
    createServer: ƒ createServer(length: 2) {},
    ServerResponse: class ServerResponse extends Writable {},
    IncomingMessage: class IncomingMessage extends Readable {},
    request: ƒ request(length: 3) {},
    get: ƒ get(length: 3) {},
    maxHeaderSize: 16384,
    setMaxIdleHTTPParsers: ƒ setMaxIdleHTTPParsers(length: 1) {},
    [get/set] globalAgent: Agent {
        _events: [Object: null prototype] {},
        _eventsCount: 0,
        _maxListeners: undefined,
        Symbol(kCapture): false
    },
    Symbol(CommonJS): 0
}
```

</td></tr></table>

## _http_incoming

<table><tr><th>Node.js</th><th>Bun</th></tr><tr><td valign="top">

```js
[Object: null prototype] {
    IncomingMessage: <ref *2> ƒ IncomingMessage(length: 1) {},
    default: {
        IncomingMessage: [Circular: *2],
        readStart: <ref *4> ƒ readStart(length: 1) {},
        readStop: <ref *5> ƒ readStop(length: 1) {}
    },
    readStart: [Circular: *4],
    readStop: [Circular: *5]
}
```

</td><td valign="top">

```js
{
    Agent: class Agent extends EventEmitter {},
    Server: class Server extends EventEmitter {},
    METHODS: [
        "ACL",
        "BIND",
        "CHECKOUT",
        "CONNECT",
        "COPY",
        "DELETE",
        "GET",
        "HEAD",
        "LINK",
        "LOCK",
        "M-SEARCH",
        "MERGE",
        "MKACTIVITY",
        "MKCALENDAR",
        "MKCOL",
        "MOVE",
        "NOTIFY",
        "OPTIONS",
        "PATCH",
        "POST",
        "PROPFIND",
        "PROPPATCH",
        "PURGE",
        "PUT",
        "REBIND",
        "REPORT",
        "SEARCH",
        "SOURCE",
        "SUBSCRIBE",
        "TRACE",
        "UNBIND",
        "UNLINK",
        "UNLOCK",
        "UNSUBSCRIBE"
    ],
    STATUS_CODES: {
        100: "Continue",
        101: "Switching Protocols",
        102: "Processing",
        103: "Early Hints",
        200: "OK",
        201: "Created",
        202: "Accepted",
        203: "Non-Authoritative Information",
        204: "No Content",
        205: "Reset Content",
        206: "Partial Content",
        207: "Multi-Status",
        208: "Already Reported",
        226: "IM Used",
        300: "Multiple Choices",
        301: "Moved Permanently",
        302: "Found",
        303: "See Other",
        304: "Not Modified",
        305: "Use Proxy",
        307: "Temporary Redirect",
        308: "Permanent Redirect",
        400: "Bad Request",
        401: "Unauthorized",
        402: "Payment Required",
        403: "Forbidden",
        404: "Not Found",
        405: "Method Not Allowed",
        406: "Not Acceptable",
        407: "Proxy Authentication Required",
        408: "Request Timeout",
        409: "Conflict",
        410: "Gone",
        411: "Length Required",
        412: "Precondition Failed",
        413: "Payload Too Large",
        414: "URI Too Long",
        415: "Unsupported Media Type",
        416: "Range Not Satisfiable",
        417: "Expectation Failed",
        418: "I'm a Teapot",
        421: "Misdirected Request",
        422: "Unprocessable Entity",
        423: "Locked",
        424: "Failed Dependency",
        425: "Too Early",
        426: "Upgrade Required",
        428: "Precondition Required",
        429: "Too Many Requests",
        431: "Request Header Fields Too Large",
        451: "Unavailable For Legal Reasons",
        500: "Internal Server Error",
        501: "Not Implemented",
        502: "Bad Gateway",
        503: "Service Unavailable",
        504: "Gateway Timeout",
        505: "HTTP Version Not Supported",
        506: "Variant Also Negotiates",
        507: "Insufficient Storage",
        508: "Loop Detected",
        509: "Bandwidth Limit Exceeded",
        510: "Not Extended",
        511: "Network Authentication Required"
    },
    createServer: ƒ createServer(length: 2) {},
    ServerResponse: class ServerResponse extends Writable {},
    IncomingMessage: class IncomingMessage extends Readable {},
    request: ƒ request(length: 3) {},
    get: ƒ get(length: 3) {},
    maxHeaderSize: 16384,
    setMaxIdleHTTPParsers: ƒ setMaxIdleHTTPParsers(length: 1) {},
    [get/set] globalAgent: Agent {
        _events: [Object: null prototype] {},
        _eventsCount: 0,
        _maxListeners: undefined,
        Symbol(kCapture): false
    },
    Symbol(CommonJS): 0
}
```

</td></tr></table>

## _http_outgoing

<table><tr><th>Node.js</th><th>Bun</th></tr><tr><td valign="top">

```js
[Object: null prototype] {
    OutgoingMessage: <ref *2> ƒ OutgoingMessage(length: 0) {},
    default: {
        kUniqueHeaders: Symbol(kUniqueHeaders),
        parseUniqueHeadersOption: <ref *4> ƒ parseUniqueHeadersOption(length: 1) {},
        validateHeaderName: <ref *5> ƒ __node_internal_(length: 2) {},
        validateHeaderValue: <ref *6> ƒ __node_internal_(length: 2) {},
        OutgoingMessage: [Circular: *2]
    },
    kUniqueHeaders: Symbol(kUniqueHeaders),
    parseUniqueHeadersOption: [Circular: *4],
    validateHeaderName: [Circular: *5],
    validateHeaderValue: [Circular: *6]
}
```

</td><td valign="top">

```js
{
    Agent: class Agent extends EventEmitter {},
    Server: class Server extends EventEmitter {},
    METHODS: [
        "ACL",
        "BIND",
        "CHECKOUT",
        "CONNECT",
        "COPY",
        "DELETE",
        "GET",
        "HEAD",
        "LINK",
        "LOCK",
        "M-SEARCH",
        "MERGE",
        "MKACTIVITY",
        "MKCALENDAR",
        "MKCOL",
        "MOVE",
        "NOTIFY",
        "OPTIONS",
        "PATCH",
        "POST",
        "PROPFIND",
        "PROPPATCH",
        "PURGE",
        "PUT",
        "REBIND",
        "REPORT",
        "SEARCH",
        "SOURCE",
        "SUBSCRIBE",
        "TRACE",
        "UNBIND",
        "UNLINK",
        "UNLOCK",
        "UNSUBSCRIBE"
    ],
    STATUS_CODES: {
        100: "Continue",
        101: "Switching Protocols",
        102: "Processing",
        103: "Early Hints",
        200: "OK",
        201: "Created",
        202: "Accepted",
        203: "Non-Authoritative Information",
        204: "No Content",
        205: "Reset Content",
        206: "Partial Content",
        207: "Multi-Status",
        208: "Already Reported",
        226: "IM Used",
        300: "Multiple Choices",
        301: "Moved Permanently",
        302: "Found",
        303: "See Other",
        304: "Not Modified",
        305: "Use Proxy",
        307: "Temporary Redirect",
        308: "Permanent Redirect",
        400: "Bad Request",
        401: "Unauthorized",
        402: "Payment Required",
        403: "Forbidden",
        404: "Not Found",
        405: "Method Not Allowed",
        406: "Not Acceptable",
        407: "Proxy Authentication Required",
        408: "Request Timeout",
        409: "Conflict",
        410: "Gone",
        411: "Length Required",
        412: "Precondition Failed",
        413: "Payload Too Large",
        414: "URI Too Long",
        415: "Unsupported Media Type",
        416: "Range Not Satisfiable",
        417: "Expectation Failed",
        418: "I'm a Teapot",
        421: "Misdirected Request",
        422: "Unprocessable Entity",
        423: "Locked",
        424: "Failed Dependency",
        425: "Too Early",
        426: "Upgrade Required",
        428: "Precondition Required",
        429: "Too Many Requests",
        431: "Request Header Fields Too Large",
        451: "Unavailable For Legal Reasons",
        500: "Internal Server Error",
        501: "Not Implemented",
        502: "Bad Gateway",
        503: "Service Unavailable",
        504: "Gateway Timeout",
        505: "HTTP Version Not Supported",
        506: "Variant Also Negotiates",
        507: "Insufficient Storage",
        508: "Loop Detected",
        509: "Bandwidth Limit Exceeded",
        510: "Not Extended",
        511: "Network Authentication Required"
    },
    createServer: ƒ createServer(length: 2) {},
    ServerResponse: class ServerResponse extends Writable {},
    IncomingMessage: class IncomingMessage extends Readable {},
    request: ƒ request(length: 3) {},
    get: ƒ get(length: 3) {},
    maxHeaderSize: 16384,
    setMaxIdleHTTPParsers: ƒ setMaxIdleHTTPParsers(length: 1) {},
    [get/set] globalAgent: Agent {
        _events: [Object: null prototype] {},
        _eventsCount: 0,
        _maxListeners: undefined,
        Symbol(kCapture): false
    },
    Symbol(CommonJS): 0
}
```

</td></tr></table>

## _http_server

<table><tr><th>Node.js</th><th>Bun</th></tr><tr><td valign="top">

```js
[Object: null prototype] {
    STATUS_CODES: <ref *2> {
        100: "Continue",
        101: "Switching Protocols",
        102: "Processing",
        103: "Early Hints",
        200: "OK",
        201: "Created",
        202: "Accepted",
        203: "Non-Authoritative Information",
        204: "No Content",
        205: "Reset Content",
        206: "Partial Content",
        207: "Multi-Status",
        208: "Already Reported",
        226: "IM Used",
        300: "Multiple Choices",
        301: "Moved Permanently",
        302: "Found",
        303: "See Other",
        304: "Not Modified",
        305: "Use Proxy",
        307: "Temporary Redirect",
        308: "Permanent Redirect",
        400: "Bad Request",
        401: "Unauthorized",
        402: "Payment Required",
        403: "Forbidden",
        404: "Not Found",
        405: "Method Not Allowed",
        406: "Not Acceptable",
        407: "Proxy Authentication Required",
        408: "Request Timeout",
        409: "Conflict",
        410: "Gone",
        411: "Length Required",
        412: "Precondition Failed",
        413: "Payload Too Large",
        414: "URI Too Long",
        415: "Unsupported Media Type",
        416: "Range Not Satisfiable",
        417: "Expectation Failed",
        418: "I'm a Teapot",
        421: "Misdirected Request",
        422: "Unprocessable Entity",
        423: "Locked",
        424: "Failed Dependency",
        425: "Too Early",
        426: "Upgrade Required",
        428: "Precondition Required",
        429: "Too Many Requests",
        431: "Request Header Fields Too Large",
        451: "Unavailable For Legal Reasons",
        500: "Internal Server Error",
        501: "Not Implemented",
        502: "Bad Gateway",
        503: "Service Unavailable",
        504: "Gateway Timeout",
        505: "HTTP Version Not Supported",
        506: "Variant Also Negotiates",
        507: "Insufficient Storage",
        508: "Loop Detected",
        509: "Bandwidth Limit Exceeded",
        510: "Not Extended",
        511: "Network Authentication Required"
    },
    Server: <ref *3> ƒ Server(length: 2) {},
    ServerResponse: <ref *4> ƒ ServerResponse(length: 1) {},
    _connectionListener: <ref *5> ƒ connectionListener(length: 1) {},
    default: {
        STATUS_CODES: [Circular: *2],
        Server: [Circular: *3],
        ServerResponse: [Circular: *4],
        setupConnectionsTracking: <ref *7> ƒ setupConnectionsTracking(length: 1) {},
        storeHTTPOptions: <ref *8> ƒ storeHTTPOptions(length: 1) {},
        _connectionListener: [Circular: *5],
        kServerResponse: Symbol(ServerResponse)
    },
    kServerResponse: Symbol(ServerResponse),
    setupConnectionsTracking: [Circular: *7],
    storeHTTPOptions: [Circular: *8]
}
```

</td><td valign="top">

```js
{
    Agent: class Agent extends EventEmitter {},
    Server: class Server extends EventEmitter {},
    METHODS: [
        "ACL",
        "BIND",
        "CHECKOUT",
        "CONNECT",
        "COPY",
        "DELETE",
        "GET",
        "HEAD",
        "LINK",
        "LOCK",
        "M-SEARCH",
        "MERGE",
        "MKACTIVITY",
        "MKCALENDAR",
        "MKCOL",
        "MOVE",
        "NOTIFY",
        "OPTIONS",
        "PATCH",
        "POST",
        "PROPFIND",
        "PROPPATCH",
        "PURGE",
        "PUT",
        "REBIND",
        "REPORT",
        "SEARCH",
        "SOURCE",
        "SUBSCRIBE",
        "TRACE",
        "UNBIND",
        "UNLINK",
        "UNLOCK",
        "UNSUBSCRIBE"
    ],
    STATUS_CODES: {
        100: "Continue",
        101: "Switching Protocols",
        102: "Processing",
        103: "Early Hints",
        200: "OK",
        201: "Created",
        202: "Accepted",
        203: "Non-Authoritative Information",
        204: "No Content",
        205: "Reset Content",
        206: "Partial Content",
        207: "Multi-Status",
        208: "Already Reported",
        226: "IM Used",
        300: "Multiple Choices",
        301: "Moved Permanently",
        302: "Found",
        303: "See Other",
        304: "Not Modified",
        305: "Use Proxy",
        307: "Temporary Redirect",
        308: "Permanent Redirect",
        400: "Bad Request",
        401: "Unauthorized",
        402: "Payment Required",
        403: "Forbidden",
        404: "Not Found",
        405: "Method Not Allowed",
        406: "Not Acceptable",
        407: "Proxy Authentication Required",
        408: "Request Timeout",
        409: "Conflict",
        410: "Gone",
        411: "Length Required",
        412: "Precondition Failed",
        413: "Payload Too Large",
        414: "URI Too Long",
        415: "Unsupported Media Type",
        416: "Range Not Satisfiable",
        417: "Expectation Failed",
        418: "I'm a Teapot",
        421: "Misdirected Request",
        422: "Unprocessable Entity",
        423: "Locked",
        424: "Failed Dependency",
        425: "Too Early",
        426: "Upgrade Required",
        428: "Precondition Required",
        429: "Too Many Requests",
        431: "Request Header Fields Too Large",
        451: "Unavailable For Legal Reasons",
        500: "Internal Server Error",
        501: "Not Implemented",
        502: "Bad Gateway",
        503: "Service Unavailable",
        504: "Gateway Timeout",
        505: "HTTP Version Not Supported",
        506: "Variant Also Negotiates",
        507: "Insufficient Storage",
        508: "Loop Detected",
        509: "Bandwidth Limit Exceeded",
        510: "Not Extended",
        511: "Network Authentication Required"
    },
    createServer: ƒ createServer(length: 2) {},
    ServerResponse: class ServerResponse extends Writable {},
    IncomingMessage: class IncomingMessage extends Readable {},
    request: ƒ request(length: 3) {},
    get: ƒ get(length: 3) {},
    maxHeaderSize: 16384,
    setMaxIdleHTTPParsers: ƒ setMaxIdleHTTPParsers(length: 1) {},
    [get/set] globalAgent: Agent {
        _events: [Object: null prototype] {},
        _eventsCount: 0,
        _maxListeners: undefined,
        Symbol(kCapture): false
    },
    Symbol(CommonJS): 0
}
```

</td></tr></table>

## _stream_duplex

<table><tr><th>Node.js</th><th>Bun</th></tr><tr><td valign="top">

```js
[Object: null prototype] {
    default: ƒ Duplex(length: 1) {
        fromWeb: <ref *3> ƒ (length: 2) {},
        toWeb: <ref *4> ƒ (length: 1) {},
        from: <ref *5> ƒ (length: 1) {}
    },
    from: [Circular: *5],
    fromWeb: [Circular: *3],
    toWeb: [Circular: *4]
}
```

</td><td valign="top">

```js
<ref *1> ƒ K(length: 1) {
    isDisturbed: ƒ D(length: 1) {},
    isErrored: ƒ _(length: 1) {},
    isWritable: ƒ P(length: 1) {},
    isReadable: ƒ W(length: 1) {},
    Readable: ƒ L(length: 1) {
        _fromList: ƒ a(length: 2) {},
        from: ƒ (length: 2) {},
        fromWeb: ƒ (length: 2) {},
        toWeb: ƒ (length: 1) {},
        wrap: ƒ (length: 2) {}
    },
    Writable: ƒ E(length: 0) {
        fromWeb: ƒ (length: 2) {},
        toWeb: ƒ (length: 1) {}
    },
    Duplex: ƒ B(length: 1) {
        fromWeb: ƒ (length: 2) {},
        toWeb: ƒ (length: 1) {},
        from: ƒ (length: 1) {}
    },
    Transform: ƒ K(length: 1) {},
    PassThrough: ƒ H(length: 1) {},
    pipeline: ƒ D(length: 0) {
        [get/set] Symbol(nodejs.util.promisify.custom): <ref *22> ƒ Y(length: 0) {}
    },
    addAbortSignal: ƒ Y(length: 2) {},
    finished: ƒ A(length: 3) {
        finished: <ref *25> ƒ O(length: 2) {},
        [get/set] Symbol(nodejs.util.promisify.custom): [Circular: *25]
    },
    destroy: ƒ C(length: 2) {},
    compose: ƒ V(length: 0) {},
    [get/set] promises: {
        finished: [Circular: *25],
        pipeline: [Circular: *22]
    },
    Stream: [Circular: *1],
    _isUint8Array: ƒ L(length: 1) {},
    _uint8ArrayToBuffer: ƒ L(length: 1) {},
    _getNativeReadableStreamPrototype: ƒ NQ(length: 2) {},
    NativeWritable: class q extends Tq {},
    default: [Circular: *1],
    eos: ƒ X(length: 0) {},
    Symbol(CommonJS): 0,
    Symbol(::bunternal::): {
        _ReadableFromWeb: class N extends L {}
    }
}
```

</td></tr></table>

## _stream_passthrough

<table><tr><th>Node.js</th><th>Bun</th></tr><tr><td valign="top">

```js
[Object: null prototype] {
    default: ƒ PassThrough(length: 1) {}
}
```

</td><td valign="top">

```js
<ref *1> ƒ K(length: 1) {
    isDisturbed: ƒ D(length: 1) {},
    isErrored: ƒ _(length: 1) {},
    isWritable: ƒ P(length: 1) {},
    isReadable: ƒ W(length: 1) {},
    Readable: ƒ L(length: 1) {
        _fromList: ƒ a(length: 2) {},
        from: ƒ (length: 2) {},
        fromWeb: ƒ (length: 2) {},
        toWeb: ƒ (length: 1) {},
        wrap: ƒ (length: 2) {}
    },
    Writable: ƒ E(length: 0) {
        fromWeb: ƒ (length: 2) {},
        toWeb: ƒ (length: 1) {}
    },
    Duplex: ƒ B(length: 1) {
        fromWeb: ƒ (length: 2) {},
        toWeb: ƒ (length: 1) {},
        from: ƒ (length: 1) {}
    },
    Transform: ƒ K(length: 1) {},
    PassThrough: ƒ H(length: 1) {},
    pipeline: ƒ D(length: 0) {
        [get/set] Symbol(nodejs.util.promisify.custom): <ref *22> ƒ Y(length: 0) {}
    },
    addAbortSignal: ƒ Y(length: 2) {},
    finished: ƒ A(length: 3) {
        finished: <ref *25> ƒ O(length: 2) {},
        [get/set] Symbol(nodejs.util.promisify.custom): [Circular: *25]
    },
    destroy: ƒ C(length: 2) {},
    compose: ƒ V(length: 0) {},
    [get/set] promises: {
        finished: [Circular: *25],
        pipeline: [Circular: *22]
    },
    Stream: [Circular: *1],
    _isUint8Array: ƒ L(length: 1) {},
    _uint8ArrayToBuffer: ƒ L(length: 1) {},
    _getNativeReadableStreamPrototype: ƒ NQ(length: 2) {},
    NativeWritable: class q extends Tq {},
    default: [Circular: *1],
    eos: ƒ X(length: 0) {},
    Symbol(CommonJS): 0,
    Symbol(::bunternal::): {
        _ReadableFromWeb: class N extends L {}
    }
}
```

</td></tr></table>

## _stream_readable

<table><tr><th>Node.js</th><th>Bun</th></tr><tr><td valign="top">

```js
[Object: null prototype] {
    ReadableState: <ref *2> ƒ ReadableState(length: 3) {},
    _fromList: <ref *3> ƒ fromList(length: 2) {},
    default: ƒ Readable(length: 1) {
        ReadableState: [Circular: *2],
        _fromList: [Circular: *3],
        from: <ref *5> ƒ (length: 2) {},
        fromWeb: <ref *6> ƒ (length: 2) {},
        toWeb: <ref *7> ƒ (length: 2) {},
        wrap: <ref *8> ƒ (length: 2) {}
    },
    from: [Circular: *5],
    fromWeb: [Circular: *6],
    toWeb: [Circular: *7],
    wrap: [Circular: *8]
}
```

</td><td valign="top">

```js
<ref *1> ƒ K(length: 1) {
    isDisturbed: ƒ D(length: 1) {},
    isErrored: ƒ _(length: 1) {},
    isWritable: ƒ P(length: 1) {},
    isReadable: ƒ W(length: 1) {},
    Readable: ƒ L(length: 1) {
        _fromList: ƒ a(length: 2) {},
        from: ƒ (length: 2) {},
        fromWeb: ƒ (length: 2) {},
        toWeb: ƒ (length: 1) {},
        wrap: ƒ (length: 2) {}
    },
    Writable: ƒ E(length: 0) {
        fromWeb: ƒ (length: 2) {},
        toWeb: ƒ (length: 1) {}
    },
    Duplex: ƒ B(length: 1) {
        fromWeb: ƒ (length: 2) {},
        toWeb: ƒ (length: 1) {},
        from: ƒ (length: 1) {}
    },
    Transform: ƒ K(length: 1) {},
    PassThrough: ƒ H(length: 1) {},
    pipeline: ƒ D(length: 0) {
        [get/set] Symbol(nodejs.util.promisify.custom): <ref *22> ƒ Y(length: 0) {}
    },
    addAbortSignal: ƒ Y(length: 2) {},
    finished: ƒ A(length: 3) {
        finished: <ref *25> ƒ O(length: 2) {},
        [get/set] Symbol(nodejs.util.promisify.custom): [Circular: *25]
    },
    destroy: ƒ C(length: 2) {},
    compose: ƒ V(length: 0) {},
    [get/set] promises: {
        finished: [Circular: *25],
        pipeline: [Circular: *22]
    },
    Stream: [Circular: *1],
    _isUint8Array: ƒ L(length: 1) {},
    _uint8ArrayToBuffer: ƒ L(length: 1) {},
    _getNativeReadableStreamPrototype: ƒ NQ(length: 2) {},
    NativeWritable: class q extends Tq {},
    default: [Circular: *1],
    eos: ƒ X(length: 0) {},
    Symbol(CommonJS): 0,
    Symbol(::bunternal::): {
        _ReadableFromWeb: class N extends L {}
    }
}
```

</td></tr></table>

## _stream_transform

<table><tr><th>Node.js</th><th>Bun</th></tr><tr><td valign="top">

```js
[Object: null prototype] {
    default: ƒ Transform(length: 1) {}
}
```

</td><td valign="top">

```js
<ref *1> ƒ K(length: 1) {
    isDisturbed: ƒ D(length: 1) {},
    isErrored: ƒ _(length: 1) {},
    isWritable: ƒ P(length: 1) {},
    isReadable: ƒ W(length: 1) {},
    Readable: ƒ L(length: 1) {
        _fromList: ƒ a(length: 2) {},
        from: ƒ (length: 2) {},
        fromWeb: ƒ (length: 2) {},
        toWeb: ƒ (length: 1) {},
        wrap: ƒ (length: 2) {}
    },
    Writable: ƒ E(length: 0) {
        fromWeb: ƒ (length: 2) {},
        toWeb: ƒ (length: 1) {}
    },
    Duplex: ƒ B(length: 1) {
        fromWeb: ƒ (length: 2) {},
        toWeb: ƒ (length: 1) {},
        from: ƒ (length: 1) {}
    },
    Transform: ƒ K(length: 1) {},
    PassThrough: ƒ H(length: 1) {},
    pipeline: ƒ D(length: 0) {
        [get/set] Symbol(nodejs.util.promisify.custom): <ref *22> ƒ Y(length: 0) {}
    },
    addAbortSignal: ƒ Y(length: 2) {},
    finished: ƒ A(length: 3) {
        finished: <ref *25> ƒ O(length: 2) {},
        [get/set] Symbol(nodejs.util.promisify.custom): [Circular: *25]
    },
    destroy: ƒ C(length: 2) {},
    compose: ƒ V(length: 0) {},
    [get/set] promises: {
        finished: [Circular: *25],
        pipeline: [Circular: *22]
    },
    Stream: [Circular: *1],
    _isUint8Array: ƒ L(length: 1) {},
    _uint8ArrayToBuffer: ƒ L(length: 1) {},
    _getNativeReadableStreamPrototype: ƒ NQ(length: 2) {},
    NativeWritable: class q extends Tq {},
    default: [Circular: *1],
    eos: ƒ X(length: 0) {},
    Symbol(CommonJS): 0,
    Symbol(::bunternal::): {
        _ReadableFromWeb: class N extends L {}
    }
}
```

</td></tr></table>

## _stream_wrap

<table><tr><th>Node.js</th><th>Bun</th></tr><tr><td valign="top">

```js
[Object: null prototype] {
    default: class JSStreamSocket extends Socket {}
}
(node:1947) [DEP0125] DeprecationWarning: The _stream_wrap module is deprecated.
(Use `node --trace-deprecation ...` to show where the warning was created)
```

</td><td valign="top">

```js
<ref *1> ƒ K(length: 1) {
    isDisturbed: ƒ D(length: 1) {},
    isErrored: ƒ _(length: 1) {},
    isWritable: ƒ P(length: 1) {},
    isReadable: ƒ W(length: 1) {},
    Readable: ƒ L(length: 1) {
        _fromList: ƒ a(length: 2) {},
        from: ƒ (length: 2) {},
        fromWeb: ƒ (length: 2) {},
        toWeb: ƒ (length: 1) {},
        wrap: ƒ (length: 2) {}
    },
    Writable: ƒ E(length: 0) {
        fromWeb: ƒ (length: 2) {},
        toWeb: ƒ (length: 1) {}
    },
    Duplex: ƒ B(length: 1) {
        fromWeb: ƒ (length: 2) {},
        toWeb: ƒ (length: 1) {},
        from: ƒ (length: 1) {}
    },
    Transform: ƒ K(length: 1) {},
    PassThrough: ƒ H(length: 1) {},
    pipeline: ƒ D(length: 0) {
        [get/set] Symbol(nodejs.util.promisify.custom): <ref *22> ƒ Y(length: 0) {}
    },
    addAbortSignal: ƒ Y(length: 2) {},
    finished: ƒ A(length: 3) {
        finished: <ref *25> ƒ O(length: 2) {},
        [get/set] Symbol(nodejs.util.promisify.custom): [Circular: *25]
    },
    destroy: ƒ C(length: 2) {},
    compose: ƒ V(length: 0) {},
    [get/set] promises: {
        finished: [Circular: *25],
        pipeline: [Circular: *22]
    },
    Stream: [Circular: *1],
    _isUint8Array: ƒ L(length: 1) {},
    _uint8ArrayToBuffer: ƒ L(length: 1) {},
    _getNativeReadableStreamPrototype: ƒ NQ(length: 2) {},
    NativeWritable: class q extends Tq {},
    default: [Circular: *1],
    eos: ƒ X(length: 0) {},
    Symbol(CommonJS): 0,
    Symbol(::bunternal::): {
        _ReadableFromWeb: class N extends L {}
    }
}
```

</td></tr></table>

## _stream_writable

<table><tr><th>Node.js</th><th>Bun</th></tr><tr><td valign="top">

```js
[Object: null prototype] {
    WritableState: <ref *2> ƒ WritableState(length: 3) {},
    default: ƒ Writable(length: 1) {
        WritableState: [Circular: *2],
        fromWeb: <ref *4> ƒ (length: 2) {},
        toWeb: <ref *5> ƒ (length: 1) {}
    },
    fromWeb: [Circular: *4],
    toWeb: [Circular: *5]
}
```

</td><td valign="top">

```js
<ref *1> ƒ K(length: 1) {
    isDisturbed: ƒ D(length: 1) {},
    isErrored: ƒ _(length: 1) {},
    isWritable: ƒ P(length: 1) {},
    isReadable: ƒ W(length: 1) {},
    Readable: ƒ L(length: 1) {
        _fromList: ƒ a(length: 2) {},
        from: ƒ (length: 2) {},
        fromWeb: ƒ (length: 2) {},
        toWeb: ƒ (length: 1) {},
        wrap: ƒ (length: 2) {}
    },
    Writable: ƒ E(length: 0) {
        fromWeb: ƒ (length: 2) {},
        toWeb: ƒ (length: 1) {}
    },
    Duplex: ƒ B(length: 1) {
        fromWeb: ƒ (length: 2) {},
        toWeb: ƒ (length: 1) {},
        from: ƒ (length: 1) {}
    },
    Transform: ƒ K(length: 1) {},
    PassThrough: ƒ H(length: 1) {},
    pipeline: ƒ D(length: 0) {
        [get/set] Symbol(nodejs.util.promisify.custom): <ref *22> ƒ Y(length: 0) {}
    },
    addAbortSignal: ƒ Y(length: 2) {},
    finished: ƒ A(length: 3) {
        finished: <ref *25> ƒ O(length: 2) {},
        [get/set] Symbol(nodejs.util.promisify.custom): [Circular: *25]
    },
    destroy: ƒ C(length: 2) {},
    compose: ƒ V(length: 0) {},
    [get/set] promises: {
        finished: [Circular: *25],
        pipeline: [Circular: *22]
    },
    Stream: [Circular: *1],
    _isUint8Array: ƒ L(length: 1) {},
    _uint8ArrayToBuffer: ƒ L(length: 1) {},
    _getNativeReadableStreamPrototype: ƒ NQ(length: 2) {},
    NativeWritable: class q extends Tq {},
    default: [Circular: *1],
    eos: ƒ X(length: 0) {},
    Symbol(CommonJS): 0,
    Symbol(::bunternal::): {
        _ReadableFromWeb: class N extends L {}
    }
}
```

</td></tr></table>

## _tls_common

<table><tr><th>Node.js</th><th>Bun</th></tr><tr><td valign="top">

```js
[Object: null prototype] {
    SecureContext: <ref *2> ƒ SecureContext(length: 4) {},
    createSecureContext: <ref *3> ƒ createSecureContext(length: 1) {},
    default: {
        SecureContext: [Circular: *2],
        createSecureContext: [Circular: *3],
        translatePeerCertificate: <ref *5> ƒ translatePeerCertificate(length: 1) {}
    },
    translatePeerCertificate: [Circular: *5]
}
```

</td><td valign="top">

```js
{
    createSecureContext: ƒ createSecureContext(length: 1) {},
    parseCertString: ƒ parseCertString(length: 0) {},
    getCiphers: ƒ getCiphers(length: 0) {},
    getCurves: ƒ getCurves(length: 0) {},
    convertALPNProtocols: ƒ convertALPNProtocols(length: 2) {},
    TLSSocket: ƒ Socket(length: 1) {},
    SecureContext: ƒ SecureContext(length: 1) {},
    CLIENT_RENEG_LIMIT: 3,
    CLIENT_RENEG_WINDOW: 600,
    DEFAULT_ECDH_CURVE: "auto",
    DEFAULT_CIPHERS: "DHE-RSA-AES256-GCM-SHA384:DHE-RSA-AES128-GCM-SHA256:ECDHE-RSA-AES256-GCM-SHA384:ECDHE-RSA-AES128-GCM…",
    DEFAULT_MIN_VERSION: "TLSv1.2",
    DEFAULT_MAX_VERSION: "TLSv1.3",
    connect: <ref *9> ƒ createConnection(length: 3) {},
    createConnection: [Circular: *9],
    Server: class Server extends NetServer {},
    createServer: ƒ createServer(length: 2) {},
    Symbol(CommonJS): 0
}
```

</td></tr></table>

## _tls_wrap

<table><tr><th>Node.js</th><th>Bun</th></tr><tr><td valign="top">

```js
[Object: null prototype] {
    Server: <ref *2> ƒ Server(length: 2) {},
    TLSSocket: <ref *3> ƒ TLSSocket(length: 2) {},
    connect: <ref *4> ƒ connect(length: 0) {},
    createServer: <ref *5> ƒ createServer(length: 2) {},
    default: {
        TLSSocket: [Circular: *3],
        Server: [Circular: *2],
        createServer: [Circular: *5],
        connect: [Circular: *4]
    }
}
```

</td><td valign="top">

```js
{
    createSecureContext: ƒ createSecureContext(length: 1) {},
    parseCertString: ƒ parseCertString(length: 0) {},
    getCiphers: ƒ getCiphers(length: 0) {},
    getCurves: ƒ getCurves(length: 0) {},
    convertALPNProtocols: ƒ convertALPNProtocols(length: 2) {},
    TLSSocket: ƒ Socket(length: 1) {},
    SecureContext: ƒ SecureContext(length: 1) {},
    CLIENT_RENEG_LIMIT: 3,
    CLIENT_RENEG_WINDOW: 600,
    DEFAULT_ECDH_CURVE: "auto",
    DEFAULT_CIPHERS: "DHE-RSA-AES256-GCM-SHA384:DHE-RSA-AES128-GCM-SHA256:ECDHE-RSA-AES256-GCM-SHA384:ECDHE-RSA-AES128-GCM…",
    DEFAULT_MIN_VERSION: "TLSv1.2",
    DEFAULT_MAX_VERSION: "TLSv1.3",
    connect: <ref *9> ƒ createConnection(length: 3) {},
    createConnection: [Circular: *9],
    Server: class Server extends NetServer {},
    createServer: ƒ createServer(length: 2) {},
    Symbol(CommonJS): 0
}
```

</td></tr></table>

## assert

<table><tr><th>Node.js</th><th>Bun</th></tr><tr><td valign="top">

```js
[Object: null prototype] {
    AssertionError: <ref *2> class AssertionError extends Error {},
    CallTracker: <ref *3> class CallTracker {},
    deepEqual: <ref *4> ƒ deepEqual(length: 3) {},
    deepStrictEqual: <ref *5> ƒ deepStrictEqual(length: 3) {},
    default: <ref *6> ƒ ok(length: 0) {
        fail: <ref *7> ƒ fail(length: 5) {},
        AssertionError: [Circular: *2],
        ok: [Circular: *6],
        equal: <ref *8> ƒ equal(length: 3) {},
        notEqual: <ref *9> ƒ notEqual(length: 3) {},
        deepEqual: [Circular: *4],
        notDeepEqual: <ref *10> ƒ notDeepEqual(length: 3) {},
        deepStrictEqual: [Circular: *5],
        notDeepStrictEqual: <ref *11> ƒ notDeepStrictEqual(length: 3) {},
        strictEqual: <ref *12> ƒ strictEqual(length: 3) {},
        notStrictEqual: <ref *13> ƒ notStrictEqual(length: 3) {},
        throws: <ref *14> ƒ throws(length: 1) {},
        rejects: <ref *15> async ƒ rejects(length: 1) {},
        doesNotThrow: <ref *16> ƒ doesNotThrow(length: 1) {},
        doesNotReject: <ref *17> async ƒ doesNotReject(length: 1) {},
        ifError: <ref *18> ƒ ifError(length: 1) {},
        match: <ref *19> ƒ match(length: 3) {},
        doesNotMatch: <ref *20> ƒ doesNotMatch(length: 3) {},
        CallTracker: [Circular: *3],
        strict: <ref *21> ƒ strict(length: 0) {
            fail: [Circular: *7],
            AssertionError: [Circular: *2],
            ok: [Circular: *6],
            equal: [Circular: *12],
            notEqual: [Circular: *13],
            deepEqual: [Circular: *5],
            notDeepEqual: [Circular: *11],
            deepStrictEqual: [Circular: *5],
            notDeepStrictEqual: [Circular: *11],
            strictEqual: [Circular: *12],
            notStrictEqual: [Circular: *13],
            throws: [Circular: *14],
            rejects: [Circular: *15],
            doesNotThrow: [Circular: *16],
            doesNotReject: [Circular: *17],
            ifError: [Circular: *18],
            match: [Circular: *19],
            doesNotMatch: [Circular: *20],
            CallTracker: [Circular: *3],
            strict: [Circular: *21]
        }
    },
    doesNotMatch: [Circular: *20],
    doesNotReject: [Circular: *17],
    doesNotThrow: [Circular: *16],
    equal: [Circular: *8],
    fail: [Circular: *7],
    ifError: [Circular: *18],
    match: [Circular: *19],
    notDeepEqual: [Circular: *10],
    notDeepStrictEqual: [Circular: *11],
    notEqual: [Circular: *9],
    notStrictEqual: [Circular: *13],
    ok: [Circular: *6],
    rejects: [Circular: *15],
    strict: [Circular: *21],
    strictEqual: [Circular: *12],
    throws: [Circular: *14]
}
```

</td><td valign="top">

```js
<ref *1> ƒ S(length: 0) {
    fail: <ref *2> ƒ I(length: 5) {},
    AssertionError: <ref *3> ƒ h(length: 1) {},
    ok: [Circular: *1],
    equal: ƒ y(length: 3) {},
    notEqual: ƒ y(length: 3) {},
    deepEqual: ƒ y(length: 3) {},
    notDeepEqual: ƒ y(length: 3) {},
    deepStrictEqual: <ref *8> ƒ y(length: 3) {},
    notDeepStrictEqual: <ref *9> ƒ j(length: 3) {},
    strictEqual: <ref *10> ƒ y(length: 3) {},
    notStrictEqual: <ref *11> ƒ y(length: 3) {},
    match: <ref *12> ƒ y(length: 3) {},
    throws: <ref *13> ƒ y(length: 1) {},
    rejects: <ref *14> ƒ y(length: 1) {},
    doesNotThrow: <ref *15> ƒ y(length: 1) {},
    doesNotReject: <ref *16> ƒ y(length: 1) {},
    ifError: <ref *17> ƒ y(length: 1) {},
    strict: <ref *18> ƒ x(length: 0) {
        fail: [Circular: *2],
        AssertionError: [Circular: *3],
        ok: [Circular: *1],
        equal: [Circular: *10],
        notEqual: [Circular: *11],
        deepEqual: [Circular: *8],
        notDeepEqual: [Circular: *9],
        deepStrictEqual: [Circular: *8],
        notDeepStrictEqual: [Circular: *9],
        strictEqual: [Circular: *10],
        notStrictEqual: [Circular: *11],
        match: [Circular: *12],
        throws: [Circular: *13],
        rejects: [Circular: *14],
        doesNotThrow: [Circular: *15],
        doesNotReject: [Circular: *16],
        ifError: [Circular: *17],
        strict: [Circular: *18]
    },
    CallTracker: ƒ V0(length: 0) {},
    Symbol(CommonJS): 0
}
```

</td></tr></table>

## assert/strict

<table><tr><th>Node.js</th><th>Bun</th></tr><tr><td valign="top">

```js
[Object: null prototype] {
    AssertionError: <ref *2> class AssertionError extends Error {},
    CallTracker: <ref *3> class CallTracker {},
    deepEqual: <ref *4> ƒ deepStrictEqual(length: 3) {},
    deepStrictEqual: [Circular: *4],
    default: <ref *5> ƒ strict(length: 0) {
        fail: <ref *6> ƒ fail(length: 5) {},
        AssertionError: [Circular: *2],
        ok: <ref *7> ƒ ok(length: 0) {
            fail: [Circular: *6],
            AssertionError: [Circular: *2],
            ok: [Circular: *7],
            equal: ƒ equal(length: 3) {},
            notEqual: ƒ notEqual(length: 3) {},
            deepEqual: ƒ deepEqual(length: 3) {},
            notDeepEqual: ƒ notDeepEqual(length: 3) {},
            deepStrictEqual: [Circular: *4],
            notDeepStrictEqual: <ref *12> ƒ notDeepStrictEqual(length: 3) {},
            strictEqual: <ref *13> ƒ strictEqual(length: 3) {},
            notStrictEqual: <ref *14> ƒ notStrictEqual(length: 3) {},
            throws: <ref *15> ƒ throws(length: 1) {},
            rejects: <ref *16> async ƒ rejects(length: 1) {},
            doesNotThrow: <ref *17> ƒ doesNotThrow(length: 1) {},
            doesNotReject: <ref *18> async ƒ doesNotReject(length: 1) {},
            ifError: <ref *19> ƒ ifError(length: 1) {},
            match: <ref *20> ƒ match(length: 3) {},
            doesNotMatch: <ref *21> ƒ doesNotMatch(length: 3) {},
            CallTracker: [Circular: *3],
            strict: [Circular: *5]
        },
        equal: [Circular: *13],
        notEqual: [Circular: *14],
        deepEqual: [Circular: *4],
        notDeepEqual: [Circular: *12],
        deepStrictEqual: [Circular: *4],
        notDeepStrictEqual: [Circular: *12],
        strictEqual: [Circular: *13],
        notStrictEqual: [Circular: *14],
        throws: [Circular: *15],
        rejects: [Circular: *16],
        doesNotThrow: [Circular: *17],
        doesNotReject: [Circular: *18],
        ifError: [Circular: *19],
        match: [Circular: *20],
        doesNotMatch: [Circular: *21],
        CallTracker: [Circular: *3],
        strict: [Circular: *5]
    },
    doesNotMatch: [Circular: *21],
    doesNotReject: [Circular: *18],
    doesNotThrow: [Circular: *17],
    equal: [Circular: *13],
    fail: [Circular: *6],
    ifError: [Circular: *19],
    match: [Circular: *20],
    notDeepEqual: [Circular: *12],
    notDeepStrictEqual: [Circular: *12],
    notEqual: [Circular: *14],
    notStrictEqual: [Circular: *14],
    ok: [Circular: *7],
    rejects: [Circular: *16],
    strict: [Circular: *5],
    strictEqual: [Circular: *13],
    throws: [Circular: *15]
}
```

</td><td valign="top">

```js
{
    fail: <ref *2> ƒ I(length: 5) {},
    AssertionError: <ref *3> ƒ h(length: 1) {},
    ok: <ref *4> ƒ S(length: 0) {
        fail: [Circular: *2],
        AssertionError: [Circular: *3],
        ok: [Circular: *4],
        equal: ƒ y(length: 3) {},
        notEqual: ƒ y(length: 3) {},
        deepEqual: ƒ y(length: 3) {},
        notDeepEqual: ƒ y(length: 3) {},
        deepStrictEqual: <ref *9> ƒ y(length: 3) {},
        notDeepStrictEqual: <ref *10> ƒ j(length: 3) {},
        strictEqual: <ref *11> ƒ y(length: 3) {},
        notStrictEqual: <ref *12> ƒ y(length: 3) {},
        match: <ref *13> ƒ y(length: 3) {},
        throws: <ref *14> ƒ y(length: 1) {},
        rejects: <ref *15> ƒ y(length: 1) {},
        doesNotThrow: <ref *16> ƒ y(length: 1) {},
        doesNotReject: <ref *17> ƒ y(length: 1) {},
        ifError: <ref *18> ƒ y(length: 1) {},
        strict: <ref *19> ƒ x(length: 0) {
            fail: [Circular: *2],
            AssertionError: [Circular: *3],
            ok: [Circular: *4],
            equal: [Circular: *11],
            notEqual: [Circular: *12],
            deepEqual: [Circular: *9],
            notDeepEqual: [Circular: *10],
            deepStrictEqual: [Circular: *9],
            notDeepStrictEqual: [Circular: *10],
            strictEqual: [Circular: *11],
            notStrictEqual: [Circular: *12],
            match: [Circular: *13],
            throws: [Circular: *14],
            rejects: [Circular: *15],
            doesNotThrow: [Circular: *16],
            doesNotReject: [Circular: *17],
            ifError: [Circular: *18],
            strict: [Circular: *19]
        },
        CallTracker: ƒ V0(length: 0) {},
        Symbol(CommonJS): 0
    },
    equal: [Circular: *11],
    notEqual: [Circular: *12],
    deepEqual: [Circular: *9],
    notDeepEqual: [Circular: *10],
    deepStrictEqual: [Circular: *9],
    notDeepStrictEqual: [Circular: *10],
    strictEqual: [Circular: *11],
    notStrictEqual: [Circular: *12],
    throws: [Circular: *14],
    rejects: [Circular: *15],
    doesNotThrow: [Circular: *16],
    doesNotReject: [Circular: *17],
    ifError: [Circular: *18],
    match: [Circular: *13],
    doesNotMatch: undefined,
    CallTracker: undefined,
    Symbol(CommonJS): 0
}
```

</td></tr></table>

## async_hooks

<table><tr><th>Node.js</th><th>Bun</th></tr><tr><td valign="top">

```js
[Object: null prototype] {
    AsyncLocalStorage: <ref *2> class AsyncLocalStorage {},
    AsyncResource: <ref *3> class AsyncResource {},
    asyncWrapProviders: <ref *4> [Object: null prototype] {
        NONE: 0,
        DIRHANDLE: 1,
        DNSCHANNEL: 2,
        ELDHISTOGRAM: 3,
        FILEHANDLE: 4,
        FILEHANDLECLOSEREQ: 5,
        FIXEDSIZEBLOBCOPY: 6,
        FSEVENTWRAP: 7,
        FSREQCALLBACK: 8,
        FSREQPROMISE: 9,
        GETADDRINFOREQWRAP: 10,
        GETNAMEINFOREQWRAP: 11,
        HEAPSNAPSHOT: 12,
        HTTP2SESSION: 13,
        HTTP2STREAM: 14,
        HTTP2PING: 15,
        HTTP2SETTINGS: 16,
        HTTPINCOMINGMESSAGE: 17,
        HTTPCLIENTREQUEST: 18,
        JSSTREAM: 19,
        JSUDPWRAP: 20,
        MESSAGEPORT: 21,
        PIPECONNECTWRAP: 22,
        PIPESERVERWRAP: 23,
        PIPEWRAP: 24,
        PROCESSWRAP: 25,
        PROMISE: 26,
        QUERYWRAP: 27,
        SHUTDOWNWRAP: 28,
        SIGNALWRAP: 29,
        STATWATCHER: 30,
        STREAMPIPE: 31,
        TCPCONNECTWRAP: 32,
        TCPSERVERWRAP: 33,
        TCPWRAP: 34,
        TTYWRAP: 35,
        UDPSENDWRAP: 36,
        UDPWRAP: 37,
        SIGINTWATCHDOG: 38,
        WORKER: 39,
        WORKERHEAPSNAPSHOT: 40,
        WRITEWRAP: 41,
        ZLIB: 42,
        CHECKPRIMEREQUEST: 43,
        PBKDF2REQUEST: 44,
        KEYPAIRGENREQUEST: 45,
        KEYGENREQUEST: 46,
        KEYEXPORTREQUEST: 47,
        CIPHERREQUEST: 48,
        DERIVEBITSREQUEST: 49,
        HASHREQUEST: 50,
        RANDOMBYTESREQUEST: 51,
        RANDOMPRIMEREQUEST: 52,
        SCRYPTREQUEST: 53,
        SIGNREQUEST: 54,
        TLSWRAP: 55,
        VERIFYREQUEST: 56,
        INSPECTORJSBINDING: 57
    },
    createHook: <ref *5> ƒ createHook(length: 1) {},
    default: {
        AsyncLocalStorage: [Circular: *2],
        createHook: [Circular: *5],
        executionAsyncId: <ref *7> ƒ executionAsyncId(length: 0) {},
        triggerAsyncId: <ref *8> ƒ triggerAsyncId(length: 0) {},
        executionAsyncResource: <ref *9> ƒ executionAsyncResource(length: 0) {},
        asyncWrapProviders: [Circular: *4],
        AsyncResource: [Circular: *3]
    },
    executionAsyncId: [Circular: *7],
    executionAsyncResource: [Circular: *9],
    triggerAsyncId: [Circular: *8]
}
```

</td><td valign="top">

```js
{
    AsyncLocalStorage: class AsyncLocalStorage {},
    createHook: ƒ createHook(length: 0) {},
    executionAsyncId: ƒ executionAsyncId(length: 0) {},
    triggerAsyncId: ƒ triggerAsyncId(length: 0) {},
    executionAsyncResource: ƒ executionAsyncResource(length: 0) {},
    asyncWrapProviders: {
        NONE: 0,
        DIRHANDLE: 1,
        DNSCHANNEL: 2,
        ELDHISTOGRAM: 3,
        FILEHANDLE: 4,
        FILEHANDLECLOSEREQ: 5,
        FIXEDSIZEBLOBCOPY: 6,
        FSEVENTWRAP: 7,
        FSREQCALLBACK: 8,
        FSREQPROMISE: 9,
        GETADDRINFOREQWRAP: 10,
        GETNAMEINFOREQWRAP: 11,
        HEAPSNAPSHOT: 12,
        HTTP2SESSION: 13,
        HTTP2STREAM: 14,
        HTTP2PING: 15,
        HTTP2SETTINGS: 16,
        HTTPINCOMINGMESSAGE: 17,
        HTTPCLIENTREQUEST: 18,
        JSSTREAM: 19,
        JSUDPWRAP: 20,
        MESSAGEPORT: 21,
        PIPECONNECTWRAP: 22,
        PIPESERVERWRAP: 23,
        PIPEWRAP: 24,
        PROCESSWRAP: 25,
        PROMISE: 26,
        QUERYWRAP: 27,
        SHUTDOWNWRAP: 28,
        SIGNALWRAP: 29,
        STATWATCHER: 30,
        STREAMPIPE: 31,
        TCPCONNECTWRAP: 32,
        TCPSERVERWRAP: 33,
        TCPWRAP: 34,
        TTYWRAP: 35,
        UDPSENDWRAP: 36,
        UDPWRAP: 37,
        SIGINTWATCHDOG: 38,
        WORKER: 39,
        WORKERHEAPSNAPSHOT: 40,
        WRITEWRAP: 41,
        ZLIB: 42,
        CHECKPRIMEREQUEST: 43,
        PBKDF2REQUEST: 44,
        KEYPAIRGENREQUEST: 45,
        KEYGENREQUEST: 46,
        KEYEXPORTREQUEST: 47,
        CIPHERREQUEST: 48,
        DERIVEBITSREQUEST: 49,
        HASHREQUEST: 50,
        RANDOMBYTESREQUEST: 51,
        RANDOMPRIMEREQUEST: 52,
        SCRYPTREQUEST: 53,
        SIGNREQUEST: 54,
        TLSWRAP: 55,
        VERIFYREQUEST: 56,
        INSPECTORJSBINDING: 57
    },
    AsyncResource: class AsyncResource {
        allowedRunInAsyncScope: Set {}
    },
    Symbol(Symbol.toStringTag): "Module (not implemented yet)",
    Symbol(CommonJS): 0
}
```

</td></tr></table>

## buffer

<table><tr><th>Node.js</th><th>Bun</th></tr><tr><td valign="top">

```js
[Object: null prototype] {
    Blob: <ref *2> class Blob {},
    Buffer: <ref *3> ƒ Buffer(length: 3) {
        poolSize: 8192,
        from: ƒ from(length: 3) {},
        copyBytesFrom: ƒ copyBytesFrom(length: 3) {},
        of: ƒ of(length: 0) {},
        alloc: ƒ alloc(length: 3) {},
        allocUnsafe: ƒ allocUnsafe(length: 1) {},
        allocUnsafeSlow: ƒ allocUnsafeSlow(length: 1) {},
        isBuffer: ƒ isBuffer(length: 1) {},
        compare: ƒ compare(length: 2) {},
        isEncoding: <ref *12> ƒ isEncoding(length: 1) {},
        concat: ƒ concat(length: 2) {},
        byteLength: ƒ byteLength(length: 2) {},
        Symbol(kIsEncodingSymbol): [Circular: *12]
    },
    File: <ref *15> class File extends Blob {},
    INSPECT_MAX_BYTES: 50,
    SlowBuffer: <ref *16> ƒ SlowBuffer(length: 1) {},
    atob: <ref *17> ƒ atob(length: 1) {},
    btoa: <ref *18> ƒ btoa(length: 1) {},
    constants: <ref *19> {
        MAX_LENGTH: 4294967296,
        MAX_STRING_LENGTH: 536870888
    },
    default: {
        Blob: [Circular: *2],
        File: [Circular: *15],
        resolveObjectURL: <ref *21> ƒ resolveObjectURL(length: 1) {},
        Buffer: [Circular: *3],
        SlowBuffer: [Circular: *16],
        transcode: <ref *22> ƒ transcode(length: 3) {},
        isUtf8: <ref *23> ƒ isUtf8(length: 1) {},
        isAscii: <ref *24> ƒ isAscii(length: 1) {},
        kMaxLength: 4294967296,
        kStringMaxLength: 536870888,
        btoa: [Circular: *18],
        atob: [Circular: *17],
        constants: [Circular: *19],
        [get/set] INSPECT_MAX_BYTES: 50
    },
    isAscii: [Circular: *24],
    isUtf8: [Circular: *23],
    kMaxLength: 4294967296,
    kStringMaxLength: 536870888,
    resolveObjectURL: [Circular: *21],
    transcode: [Circular: *22]
}
```

</td><td valign="top">

```js
{
    Buffer: ƒ Buffer(length: 3) {
        alloc: ƒ alloc(length: 1) {},
        allocUnsafe: ƒ allocUnsafe(length: 1) {},
        allocUnsafeSlow: ƒ allocUnsafeSlow(length: 1) {},
        byteLength: ƒ byteLength(length: 2) {},
        compare: ƒ compare(length: 2) {},
        concat: ƒ concat(length: 2) {},
        from: ƒ from(length: 1) {},
        isBuffer: ƒ isBuffer(length: 1) {},
        toBuffer: ƒ toBuffer(length: 1) {},
        isEncoding: ƒ isEncoding(length: 1) {}
    },
    SlowBuffer: ƒ SlowBuffer(length: 0) {},
    Blob: <ref *14> ƒ Blob(length: 0) {},
    File: [Circular: *14],
    INSPECT_MAX_BYTES: 50,
    kMaxLength: 4294967296,
    kStringMaxLength: 536870888,
    constants: {
        MAX_LENGTH: 4294967296,
        MAX_STRING_LENGTH: 536870888
    },
    atob: ƒ atob(length: 1) {},
    btoa: ƒ btoa(length: 1) {},
    transcode: [Unexpected Error: [object Function] (type "undefined")],
    resolveObjectURL: [Unexpected Error: [object Function] (type "undefined")],
    Symbol(CommonJS): 0
}
```

</td></tr></table>

## child_process

<table><tr><th>Node.js</th><th>Bun</th></tr><tr><td valign="top">

```js
[Object: null prototype] {
    ChildProcess: <ref *2> ƒ ChildProcess(length: 0) {},
    _forkChild: <ref *3> ƒ _forkChild(length: 2) {},
    default: {
        _forkChild: [Circular: *3],
        ChildProcess: [Circular: *2],
        exec: <ref *5> ƒ exec(length: 3) {},
        execFile: <ref *6> ƒ execFile(length: 4) {},
        execFileSync: <ref *7> ƒ execFileSync(length: 3) {},
        execSync: <ref *8> ƒ execSync(length: 2) {},
        fork: <ref *9> ƒ fork(length: 1) {},
        spawn: <ref *10> ƒ spawn(length: 3) {},
        spawnSync: <ref *11> ƒ spawnSync(length: 3) {}
    },
    exec: [Circular: *5],
    execFile: [Circular: *6],
    execFileSync: [Circular: *7],
    execSync: [Circular: *8],
    fork: [Circular: *9],
    spawn: [Circular: *10],
    spawnSync: [Circular: *11]
}
```

</td><td valign="top">

```js
{
    ChildProcess: class ChildProcess extends EventEmitter {},
    spawn: ƒ spawn(length: 3) {},
    execFile: ƒ execFile(length: 4) {},
    exec: ƒ exec(length: 3) {},
    fork: ƒ fork(length: 0) {},
    spawnSync: ƒ spawnSync(length: 3) {},
    execFileSync: ƒ execFileSync(length: 3) {},
    execSync: ƒ execSync(length: 2) {},
    Symbol(CommonJS): 0
}
```

</td></tr></table>

## cluster

<table><tr><th>Node.js</th><th>Bun</th></tr><tr><td valign="top">

```js
[Object: null prototype] {
    SCHED_NONE: 1,
    SCHED_RR: 2,
    Worker: <ref *2> ƒ Worker(length: 1) {},
    _events: <ref *3> [Object: null prototype] {},
    _eventsCount: 0,
    _maxListeners: undefined,
    default: EventEmitter {
        _events: [Circular: *3],
        _eventsCount: 0,
        _maxListeners: undefined,
        isWorker: false,
        isMaster: true,
        isPrimary: true,
        Worker: [Circular: *2],
        workers: <ref *5> {},
        settings: <ref *6> {},
        SCHED_NONE: 1,
        SCHED_RR: 2,
        schedulingPolicy: 2,
        setupPrimary: <ref *7> ƒ (length: 1) {},
        setupMaster: [Circular: *7],
        fork: <ref *8> ƒ (length: 1) {},
        disconnect: <ref *9> ƒ (length: 1) {},
        Symbol(kCapture): false
    },
    disconnect: [Circular: *9],
    fork: [Circular: *8],
    isMaster: true,
    isPrimary: true,
    isWorker: false,
    schedulingPolicy: 2,
    settings: [Circular: *6],
    setupMaster: [Circular: *7],
    setupPrimary: [Circular: *7],
    workers: [Circular: *5]
}
```

</td><td valign="top">

```js
Cluster {
    _events: [Object: null prototype] {},
    _eventsCount: 0,
    _maxListeners: undefined,
    settings: {},
    workers: {},
    SCHED_NONE: 0,
    SCHED_RR: 1,
    schedulingPolicy: 2,
    Symbol(kCapture): false,
    Symbol(CommonJS): 0
}
```

</td></tr></table>

## console

<table><tr><th>Node.js</th><th>Bun</th></tr><tr><td valign="top">

```js
[Object: null prototype] {
    Console: <ref *2> ƒ Console(length: 1) {},
    assert: <ref *3> ƒ assert(length: 0) {},
    clear: <ref *4> ƒ clear(length: 0) {},
    context: <ref *5> ƒ context(length: 1) {},
    count: <ref *6> ƒ count(length: 0) {},
    countReset: <ref *7> ƒ countReset(length: 0) {},
    debug: <ref *8> ƒ debug(length: 0) {},
    default: {
        log: <ref *10> ƒ log(length: 0) {},
        warn: <ref *11> ƒ warn(length: 0) {},
        dir: <ref *12> ƒ dir(length: 0) {},
        time: <ref *13> ƒ time(length: 0) {},
        timeEnd: <ref *14> ƒ timeEnd(length: 0) {},
        timeLog: <ref *15> ƒ timeLog(length: 0) {},
        trace: <ref *16> ƒ trace(length: 0) {},
        assert: [Circular: *3],
        clear: [Circular: *4],
        count: [Circular: *6],
        countReset: [Circular: *7],
        group: <ref *17> ƒ group(length: 0) {},
        groupEnd: <ref *18> ƒ groupEnd(length: 0) {},
        table: <ref *19> ƒ table(length: 0) {},
        debug: [Circular: *8],
        info: <ref *20> ƒ info(length: 0) {},
        dirxml: <ref *21> ƒ dirxml(length: 0) {},
        error: <ref *22> ƒ error(length: 0) {},
        groupCollapsed: <ref *23> ƒ groupCollapsed(length: 0) {},
        Console: [Circular: *2],
        profile: <ref *24> ƒ profile(length: 0) {},
        profileEnd: <ref *25> ƒ profileEnd(length: 0) {},
        timeStamp: <ref *26> ƒ timeStamp(length: 0) {},
        context: [Circular: *5]
    },
    dir: [Circular: *12],
    dirxml: [Circular: *21],
    error: [Circular: *22],
    group: [Circular: *17],
    groupCollapsed: [Circular: *23],
    groupEnd: [Circular: *18],
    info: [Circular: *20],
    log: [Circular: *10],
    profile: [Circular: *24],
    profileEnd: [Circular: *25],
    table: [Circular: *19],
    time: [Circular: *13],
    timeEnd: [Circular: *14],
    timeLog: [Circular: *15],
    timeStamp: [Circular: *26],
    trace: [Circular: *16],
    warn: [Circular: *11]
}
```

</td><td valign="top">

```js
78 | 			}
79 | 
80 | 			const entries = Reflect.ownKeys(value).map(
81 | 				(key) => {
82 | 					const descriptor = Object.getOwnPropertyDescriptor(value, key);
83 | 					if (!descriptor.enumerable) {
             ^
TypeError: undefined is not an object (evaluating 'descriptor.enumerable')
      at /tmp/fs-fixture-1687133604372-1/inspect.mjs:83:10
      at /tmp/fs-fixture-1687133604372-1/inspect.mjs:80:19
      at /tmp/fs-fixture-1687133604372-1/console.mjs:4:15
```

</td></tr></table>

## constants

<table><tr><th>Node.js</th><th>Bun</th></tr><tr><td valign="top">

```js
[Object: null prototype] {
    ALPN_ENABLED: 1,
    COPYFILE_EXCL: 1,
    COPYFILE_FICLONE: 2,
    COPYFILE_FICLONE_FORCE: 4,
    DH_CHECK_P_NOT_PRIME: 1,
    DH_CHECK_P_NOT_SAFE_PRIME: 2,
    DH_NOT_SUITABLE_GENERATOR: 8,
    DH_UNABLE_TO_CHECK_GENERATOR: 4,
    E2BIG: 7,
    EACCES: 13,
    EADDRINUSE: 98,
    EADDRNOTAVAIL: 99,
    EAFNOSUPPORT: 97,
    EAGAIN: 11,
    EALREADY: 114,
    EBADF: 9,
    EBADMSG: 74,
    EBUSY: 16,
    ECANCELED: 125,
    ECHILD: 10,
    ECONNABORTED: 103,
    ECONNREFUSED: 111,
    ECONNRESET: 104,
    EDEADLK: 35,
    EDESTADDRREQ: 89,
    EDOM: 33,
    EDQUOT: 122,
    EEXIST: 17,
    EFAULT: 14,
    EFBIG: 27,
    EHOSTUNREACH: 113,
    EIDRM: 43,
    EILSEQ: 84,
    EINPROGRESS: 115,
    EINTR: 4,
    EINVAL: 22,
    EIO: 5,
    EISCONN: 106,
    EISDIR: 21,
    ELOOP: 40,
    EMFILE: 24,
    EMLINK: 31,
    EMSGSIZE: 90,
    EMULTIHOP: 72,
    ENAMETOOLONG: 36,
    ENETDOWN: 100,
    ENETRESET: 102,
    ENETUNREACH: 101,
    ENFILE: 23,
    ENGINE_METHOD_ALL: 65535,
    ENGINE_METHOD_CIPHERS: 64,
    ENGINE_METHOD_DH: 4,
    ENGINE_METHOD_DIGESTS: 128,
    ENGINE_METHOD_DSA: 2,
    ENGINE_METHOD_EC: 2048,
    ENGINE_METHOD_NONE: 0,
    ENGINE_METHOD_PKEY_ASN1_METHS: 1024,
    ENGINE_METHOD_PKEY_METHS: 512,
    ENGINE_METHOD_RAND: 8,
    ENGINE_METHOD_RSA: 1,
    ENOBUFS: 105,
    ENODATA: 61,
    ENODEV: 19,
    ENOENT: 2,
    ENOEXEC: 8,
    ENOLCK: 37,
    ENOLINK: 67,
    ENOMEM: 12,
    ENOMSG: 42,
    ENOPROTOOPT: 92,
    ENOSPC: 28,
    ENOSR: 63,
    ENOSTR: 60,
    ENOSYS: 38,
    ENOTCONN: 107,
    ENOTDIR: 20,
    ENOTEMPTY: 39,
    ENOTSOCK: 88,
    ENOTSUP: 95,
    ENOTTY: 25,
    ENXIO: 6,
    EOPNOTSUPP: 95,
    EOVERFLOW: 75,
    EPERM: 1,
    EPIPE: 32,
    EPROTO: 71,
    EPROTONOSUPPORT: 93,
    EPROTOTYPE: 91,
    ERANGE: 34,
    EROFS: 30,
    ESPIPE: 29,
    ESRCH: 3,
    ESTALE: 116,
    ETIME: 62,
    ETIMEDOUT: 110,
    ETXTBSY: 26,
    EWOULDBLOCK: 11,
    EXDEV: 18,
    F_OK: 0,
    OPENSSL_VERSION_NUMBER: 805306496,
    O_APPEND: 1024,
    O_CREAT: 64,
    O_DIRECT: 16384,
    O_DIRECTORY: 65536,
    O_DSYNC: 4096,
    O_EXCL: 128,
    O_NOATIME: 262144,
    O_NOCTTY: 256,
    O_NOFOLLOW: 131072,
    O_NONBLOCK: 2048,
    O_RDONLY: 0,
    O_RDWR: 2,
    O_SYNC: 1052672,
    O_TRUNC: 512,
    O_WRONLY: 1,
    POINT_CONVERSION_COMPRESSED: 2,
    POINT_CONVERSION_HYBRID: 6,
    POINT_CONVERSION_UNCOMPRESSED: 4,
    PRIORITY_ABOVE_NORMAL: -7,
    PRIORITY_BELOW_NORMAL: 10,
    PRIORITY_HIGH: -14,
    PRIORITY_HIGHEST: -20,
    PRIORITY_LOW: 19,
    PRIORITY_NORMAL: 0,
    RSA_NO_PADDING: 3,
    RSA_PKCS1_OAEP_PADDING: 4,
    RSA_PKCS1_PADDING: 1,
    RSA_PKCS1_PSS_PADDING: 6,
    RSA_PSS_SALTLEN_AUTO: -2,
    RSA_PSS_SALTLEN_DIGEST: -1,
    RSA_PSS_SALTLEN_MAX_SIGN: -2,
    RSA_X931_PADDING: 5,
    RTLD_DEEPBIND: 8,
    RTLD_GLOBAL: 256,
    RTLD_LAZY: 1,
    RTLD_LOCAL: 0,
    RTLD_NOW: 2,
    R_OK: 4,
    SIGABRT: 6,
    SIGALRM: 14,
    SIGBUS: 7,
    SIGCHLD: 17,
    SIGCONT: 18,
    SIGFPE: 8,
    SIGHUP: 1,
    SIGILL: 4,
    SIGINT: 2,
    SIGIO: 29,
    SIGIOT: 6,
    SIGKILL: 9,
    SIGPIPE: 13,
    SIGPOLL: 29,
    SIGPROF: 27,
    SIGPWR: 30,
    SIGQUIT: 3,
    SIGSEGV: 11,
    SIGSTKFLT: 16,
    SIGSTOP: 19,
    SIGSYS: 31,
    SIGTERM: 15,
    SIGTRAP: 5,
    SIGTSTP: 20,
    SIGTTIN: 21,
    SIGTTOU: 22,
    SIGURG: 23,
    SIGUSR1: 10,
    SIGUSR2: 12,
    SIGVTALRM: 26,
    SIGWINCH: 28,
    SIGXCPU: 24,
    SIGXFSZ: 25,
    SSL_OP_ALL: 2147485776,
    SSL_OP_ALLOW_NO_DHE_KEX: 1024,
    SSL_OP_ALLOW_UNSAFE_LEGACY_RENEGOTIATION: 262144,
    SSL_OP_CIPHER_SERVER_PREFERENCE: 4194304,
    SSL_OP_CISCO_ANYCONNECT: 32768,
    SSL_OP_COOKIE_EXCHANGE: 8192,
    SSL_OP_CRYPTOPRO_TLSEXT_BUG: 2147483648,
    SSL_OP_DONT_INSERT_EMPTY_FRAGMENTS: 2048,
    SSL_OP_EPHEMERAL_RSA: 0,
    SSL_OP_LEGACY_SERVER_CONNECT: 4,
    SSL_OP_MICROSOFT_BIG_SSLV3_BUFFER: 0,
    SSL_OP_MICROSOFT_SESS_ID_BUG: 0,
    SSL_OP_MSIE_SSLV2_RSA_PADDING: 0,
    SSL_OP_NETSCAPE_CA_DN_BUG: 0,
    SSL_OP_NETSCAPE_CHALLENGE_BUG: 0,
    SSL_OP_NETSCAPE_DEMO_CIPHER_CHANGE_BUG: 0,
    SSL_OP_NETSCAPE_REUSE_CIPHER_CHANGE_BUG: 0,
    SSL_OP_NO_COMPRESSION: 131072,
    SSL_OP_NO_ENCRYPT_THEN_MAC: 524288,
    SSL_OP_NO_QUERY_MTU: 4096,
    SSL_OP_NO_RENEGOTIATION: 1073741824,
    SSL_OP_NO_SESSION_RESUMPTION_ON_RENEGOTIATION: 65536,
    SSL_OP_NO_SSLv2: 0,
    SSL_OP_NO_SSLv3: 33554432,
    SSL_OP_NO_TICKET: 16384,
    SSL_OP_NO_TLSv1: 67108864,
    SSL_OP_NO_TLSv1_1: 268435456,
    SSL_OP_NO_TLSv1_2: 134217728,
    SSL_OP_NO_TLSv1_3: 536870912,
    SSL_OP_PKCS1_CHECK_1: 0,
    SSL_OP_PKCS1_CHECK_2: 0,
    SSL_OP_PRIORITIZE_CHACHA: 2097152,
    SSL_OP_SINGLE_DH_USE: 0,
    SSL_OP_SINGLE_ECDH_USE: 0,
    SSL_OP_SSLEAY_080_CLIENT_DH_BUG: 0,
    SSL_OP_SSLREF2_REUSE_CERT_TYPE_BUG: 0,
    SSL_OP_TLS_BLOCK_PADDING_BUG: 0,
    SSL_OP_TLS_D5_BUG: 0,
    SSL_OP_TLS_ROLLBACK_BUG: 8388608,
    S_IFBLK: 24576,
    S_IFCHR: 8192,
    S_IFDIR: 16384,
    S_IFIFO: 4096,
    S_IFLNK: 40960,
    S_IFMT: 61440,
    S_IFREG: 32768,
    S_IFSOCK: 49152,
    S_IRGRP: 32,
    S_IROTH: 4,
    S_IRUSR: 256,
    S_IRWXG: 56,
    S_IRWXO: 7,
    S_IRWXU: 448,
    S_IWGRP: 16,
    S_IWOTH: 2,
    S_IWUSR: 128,
    S_IXGRP: 8,
    S_IXOTH: 1,
    S_IXUSR: 64,
    TLS1_1_VERSION: 770,
    TLS1_2_VERSION: 771,
    TLS1_3_VERSION: 772,
    TLS1_VERSION: 769,
    UV_DIRENT_BLOCK: 7,
    UV_DIRENT_CHAR: 6,
    UV_DIRENT_DIR: 2,
    UV_DIRENT_FIFO: 4,
    UV_DIRENT_FILE: 1,
    UV_DIRENT_LINK: 3,
    UV_DIRENT_SOCKET: 5,
    UV_DIRENT_UNKNOWN: 0,
    UV_FS_COPYFILE_EXCL: 1,
    UV_FS_COPYFILE_FICLONE: 2,
    UV_FS_COPYFILE_FICLONE_FORCE: 4,
    UV_FS_O_FILEMAP: 0,
    UV_FS_SYMLINK_DIR: 1,
    UV_FS_SYMLINK_JUNCTION: 2,
    W_OK: 2,
    X_OK: 1,
    default: {
        RTLD_LAZY: 1,
        RTLD_NOW: 2,
        RTLD_GLOBAL: 256,
        RTLD_LOCAL: 0,
        RTLD_DEEPBIND: 8,
        E2BIG: 7,
        EACCES: 13,
        EADDRINUSE: 98,
        EADDRNOTAVAIL: 99,
        EAFNOSUPPORT: 97,
        EAGAIN: 11,
        EALREADY: 114,
        EBADF: 9,
        EBADMSG: 74,
        EBUSY: 16,
        ECANCELED: 125,
        ECHILD: 10,
        ECONNABORTED: 103,
        ECONNREFUSED: 111,
        ECONNRESET: 104,
        EDEADLK: 35,
        EDESTADDRREQ: 89,
        EDOM: 33,
        EDQUOT: 122,
        EEXIST: 17,
        EFAULT: 14,
        EFBIG: 27,
        EHOSTUNREACH: 113,
        EIDRM: 43,
        EILSEQ: 84,
        EINPROGRESS: 115,
        EINTR: 4,
        EINVAL: 22,
        EIO: 5,
        EISCONN: 106,
        EISDIR: 21,
        ELOOP: 40,
        EMFILE: 24,
        EMLINK: 31,
        EMSGSIZE: 90,
        EMULTIHOP: 72,
        ENAMETOOLONG: 36,
        ENETDOWN: 100,
        ENETRESET: 102,
        ENETUNREACH: 101,
        ENFILE: 23,
        ENOBUFS: 105,
        ENODATA: 61,
        ENODEV: 19,
        ENOENT: 2,
        ENOEXEC: 8,
        ENOLCK: 37,
        ENOLINK: 67,
        ENOMEM: 12,
        ENOMSG: 42,
        ENOPROTOOPT: 92,
        ENOSPC: 28,
        ENOSR: 63,
        ENOSTR: 60,
        ENOSYS: 38,
        ENOTCONN: 107,
        ENOTDIR: 20,
        ENOTEMPTY: 39,
        ENOTSOCK: 88,
        ENOTSUP: 95,
        ENOTTY: 25,
        ENXIO: 6,
        EOPNOTSUPP: 95,
        EOVERFLOW: 75,
        EPERM: 1,
        EPIPE: 32,
        EPROTO: 71,
        EPROTONOSUPPORT: 93,
        EPROTOTYPE: 91,
        ERANGE: 34,
        EROFS: 30,
        ESPIPE: 29,
        ESRCH: 3,
        ESTALE: 116,
        ETIME: 62,
        ETIMEDOUT: 110,
        ETXTBSY: 26,
        EWOULDBLOCK: 11,
        EXDEV: 18,
        PRIORITY_LOW: 19,
        PRIORITY_BELOW_NORMAL: 10,
        PRIORITY_NORMAL: 0,
        PRIORITY_ABOVE_NORMAL: -7,
        PRIORITY_HIGH: -14,
        PRIORITY_HIGHEST: -20,
        SIGHUP: 1,
        SIGINT: 2,
        SIGQUIT: 3,
        SIGILL: 4,
        SIGTRAP: 5,
        SIGABRT: 6,
        SIGIOT: 6,
        SIGBUS: 7,
        SIGFPE: 8,
        SIGKILL: 9,
        SIGUSR1: 10,
        SIGSEGV: 11,
        SIGUSR2: 12,
        SIGPIPE: 13,
        SIGALRM: 14,
        SIGTERM: 15,
        SIGCHLD: 17,
        SIGSTKFLT: 16,
        SIGCONT: 18,
        SIGSTOP: 19,
        SIGTSTP: 20,
        SIGTTIN: 21,
        SIGTTOU: 22,
        SIGURG: 23,
        SIGXCPU: 24,
        SIGXFSZ: 25,
        SIGVTALRM: 26,
        SIGPROF: 27,
        SIGWINCH: 28,
        SIGIO: 29,
        SIGPOLL: 29,
        SIGPWR: 30,
        SIGSYS: 31,
        UV_FS_SYMLINK_DIR: 1,
        UV_FS_SYMLINK_JUNCTION: 2,
        O_RDONLY: 0,
        O_WRONLY: 1,
        O_RDWR: 2,
        UV_DIRENT_UNKNOWN: 0,
        UV_DIRENT_FILE: 1,
        UV_DIRENT_DIR: 2,
        UV_DIRENT_LINK: 3,
        UV_DIRENT_FIFO: 4,
        UV_DIRENT_SOCKET: 5,
        UV_DIRENT_CHAR: 6,
        UV_DIRENT_BLOCK: 7,
        S_IFMT: 61440,
        S_IFREG: 32768,
        S_IFDIR: 16384,
        S_IFCHR: 8192,
        S_IFBLK: 24576,
        S_IFIFO: 4096,
        S_IFLNK: 40960,
        S_IFSOCK: 49152,
        O_CREAT: 64,
        O_EXCL: 128,
        UV_FS_O_FILEMAP: 0,
        O_NOCTTY: 256,
        O_TRUNC: 512,
        O_APPEND: 1024,
        O_DIRECTORY: 65536,
        O_NOATIME: 262144,
        O_NOFOLLOW: 131072,
        O_SYNC: 1052672,
        O_DSYNC: 4096,
        O_DIRECT: 16384,
        O_NONBLOCK: 2048,
        S_IRWXU: 448,
        S_IRUSR: 256,
        S_IWUSR: 128,
        S_IXUSR: 64,
        S_IRWXG: 56,
        S_IRGRP: 32,
        S_IWGRP: 16,
        S_IXGRP: 8,
        S_IRWXO: 7,
        S_IROTH: 4,
        S_IWOTH: 2,
        S_IXOTH: 1,
        F_OK: 0,
        R_OK: 4,
        W_OK: 2,
        X_OK: 1,
        UV_FS_COPYFILE_EXCL: 1,
        COPYFILE_EXCL: 1,
        UV_FS_COPYFILE_FICLONE: 2,
        COPYFILE_FICLONE: 2,
        UV_FS_COPYFILE_FICLONE_FORCE: 4,
        COPYFILE_FICLONE_FORCE: 4,
        OPENSSL_VERSION_NUMBER: 805306496,
        SSL_OP_ALL: 2147485776,
        SSL_OP_ALLOW_NO_DHE_KEX: 1024,
        SSL_OP_ALLOW_UNSAFE_LEGACY_RENEGOTIATION: 262144,
        SSL_OP_CIPHER_SERVER_PREFERENCE: 4194304,
        SSL_OP_CISCO_ANYCONNECT: 32768,
        SSL_OP_COOKIE_EXCHANGE: 8192,
        SSL_OP_CRYPTOPRO_TLSEXT_BUG: 2147483648,
        SSL_OP_DONT_INSERT_EMPTY_FRAGMENTS: 2048,
        SSL_OP_EPHEMERAL_RSA: 0,
        SSL_OP_LEGACY_SERVER_CONNECT: 4,
        SSL_OP_MICROSOFT_BIG_SSLV3_BUFFER: 0,
        SSL_OP_MICROSOFT_SESS_ID_BUG: 0,
        SSL_OP_MSIE_SSLV2_RSA_PADDING: 0,
        SSL_OP_NETSCAPE_CA_DN_BUG: 0,
        SSL_OP_NETSCAPE_CHALLENGE_BUG: 0,
        SSL_OP_NETSCAPE_DEMO_CIPHER_CHANGE_BUG: 0,
        SSL_OP_NETSCAPE_REUSE_CIPHER_CHANGE_BUG: 0,
        SSL_OP_NO_COMPRESSION: 131072,
        SSL_OP_NO_ENCRYPT_THEN_MAC: 524288,
        SSL_OP_NO_QUERY_MTU: 4096,
        SSL_OP_NO_RENEGOTIATION: 1073741824,
        SSL_OP_NO_SESSION_RESUMPTION_ON_RENEGOTIATION: 65536,
        SSL_OP_NO_SSLv2: 0,
        SSL_OP_NO_SSLv3: 33554432,
        SSL_OP_NO_TICKET: 16384,
        SSL_OP_NO_TLSv1: 67108864,
        SSL_OP_NO_TLSv1_1: 268435456,
        SSL_OP_NO_TLSv1_2: 134217728,
        SSL_OP_NO_TLSv1_3: 536870912,
        SSL_OP_PKCS1_CHECK_1: 0,
        SSL_OP_PKCS1_CHECK_2: 0,
        SSL_OP_PRIORITIZE_CHACHA: 2097152,
        SSL_OP_SINGLE_DH_USE: 0,
        SSL_OP_SINGLE_ECDH_USE: 0,
        SSL_OP_SSLEAY_080_CLIENT_DH_BUG: 0,
        SSL_OP_SSLREF2_REUSE_CERT_TYPE_BUG: 0,
        SSL_OP_TLS_BLOCK_PADDING_BUG: 0,
        SSL_OP_TLS_D5_BUG: 0,
        SSL_OP_TLS_ROLLBACK_BUG: 8388608,
        ENGINE_METHOD_RSA: 1,
        ENGINE_METHOD_DSA: 2,
        ENGINE_METHOD_DH: 4,
        ENGINE_METHOD_RAND: 8,
        ENGINE_METHOD_EC: 2048,
        ENGINE_METHOD_CIPHERS: 64,
        ENGINE_METHOD_DIGESTS: 128,
        ENGINE_METHOD_PKEY_METHS: 512,
        ENGINE_METHOD_PKEY_ASN1_METHS: 1024,
        ENGINE_METHOD_ALL: 65535,
        ENGINE_METHOD_NONE: 0,
        DH_CHECK_P_NOT_SAFE_PRIME: 2,
        DH_CHECK_P_NOT_PRIME: 1,
        DH_UNABLE_TO_CHECK_GENERATOR: 4,
        DH_NOT_SUITABLE_GENERATOR: 8,
        ALPN_ENABLED: 1,
        RSA_PKCS1_PADDING: 1,
        RSA_NO_PADDING: 3,
        RSA_PKCS1_OAEP_PADDING: 4,
        RSA_X931_PADDING: 5,
        RSA_PKCS1_PSS_PADDING: 6,
        RSA_PSS_SALTLEN_DIGEST: -1,
        RSA_PSS_SALTLEN_MAX_SIGN: -2,
        RSA_PSS_SALTLEN_AUTO: -2,
        defaultCoreCipherList: "TLS_AES_256_GCM_SHA384:TLS_CHACHA20_POLY1305_SHA256:TLS_AES_128_GCM_SHA256:ECDHE-RSA-AES128-GCM-SHA2…",
        TLS1_VERSION: 769,
        TLS1_1_VERSION: 770,
        TLS1_2_VERSION: 771,
        TLS1_3_VERSION: 772,
        POINT_CONVERSION_COMPRESSED: 2,
        POINT_CONVERSION_UNCOMPRESSED: 4,
        POINT_CONVERSION_HYBRID: 6,
        defaultCipherList: "TLS_AES_256_GCM_SHA384:TLS_CHACHA20_POLY1305_SHA256:TLS_AES_128_GCM_SHA256:ECDHE-RSA-AES128-GCM-SHA2…"
    },
    defaultCipherList: "TLS_AES_256_GCM_SHA384:TLS_CHACHA20_POLY1305_SHA256:TLS_AES_128_GCM_SHA256:ECDHE-RSA-AES128-GCM-SHA2…",
    defaultCoreCipherList: "TLS_AES_256_GCM_SHA384:TLS_CHACHA20_POLY1305_SHA256:TLS_AES_128_GCM_SHA256:ECDHE-RSA-AES128-GCM-SHA2…"
}
```

</td><td valign="top">

```js
78 | 			}
79 | 
80 | 			const entries = Reflect.ownKeys(value).map(
81 | 				(key) => {
82 | 					const descriptor = Object.getOwnPropertyDescriptor(value, key);
83 | 					if (!descriptor.enumerable) {
             ^
TypeError: undefined is not an object (evaluating 'descriptor.enumerable')
      at /tmp/fs-fixture-1687133604372-1/inspect.mjs:83:10
      at /tmp/fs-fixture-1687133604372-1/inspect.mjs:80:19
      at /tmp/fs-fixture-1687133604372-1/constants.mjs:4:15
```

</td></tr></table>

## crypto

<table><tr><th>Node.js</th><th>Bun</th></tr><tr><td valign="top">

```js
[Object: null prototype] {
    Certificate: <ref *2> ƒ Certificate(length: 0) {
        exportChallenge: ƒ exportChallenge(length: 2) {},
        exportPublicKey: ƒ exportPublicKey(length: 2) {},
        verifySpkac: ƒ verifySpkac(length: 2) {}
    },
    Cipher: <ref *6> ƒ Cipher(length: 3) {},
    Cipheriv: <ref *7> ƒ Cipheriv(length: 4) {},
    Decipher: <ref *8> ƒ Decipher(length: 3) {},
    Decipheriv: <ref *9> ƒ Decipheriv(length: 4) {},
    DiffieHellman: <ref *10> ƒ DiffieHellman(length: 4) {},
    DiffieHellmanGroup: <ref *11> ƒ DiffieHellmanGroup(length: 1) {},
    ECDH: <ref *12> ƒ ECDH(length: 1) {
        convertKey: ƒ convertKey(length: 5) {}
    },
    Hash: <ref *14> ƒ Hash(length: 2) {},
    Hmac: <ref *15> ƒ Hmac(length: 3) {},
    KeyObject: <ref *16> class KeyObject extends NativeKeyObject {},
    Sign: <ref *17> ƒ Sign(length: 2) {},
    Verify: <ref *18> ƒ Verify(length: 2) {},
    X509Certificate: <ref *19> class X509Certificate extends JSTransferable {},
    checkPrime: <ref *20> ƒ checkPrime(length: 1) {},
    checkPrimeSync: <ref *21> ƒ checkPrimeSync(length: 1) {},
    constants: <ref *22> [Object: null prototype] {
        OPENSSL_VERSION_NUMBER: 805306496,
        SSL_OP_ALL: 2147485776,
        SSL_OP_ALLOW_NO_DHE_KEX: 1024,
        SSL_OP_ALLOW_UNSAFE_LEGACY_RENEGOTIATION: 262144,
        SSL_OP_CIPHER_SERVER_PREFERENCE: 4194304,
        SSL_OP_CISCO_ANYCONNECT: 32768,
        SSL_OP_COOKIE_EXCHANGE: 8192,
        SSL_OP_CRYPTOPRO_TLSEXT_BUG: 2147483648,
        SSL_OP_DONT_INSERT_EMPTY_FRAGMENTS: 2048,
        SSL_OP_EPHEMERAL_RSA: 0,
        SSL_OP_LEGACY_SERVER_CONNECT: 4,
        SSL_OP_MICROSOFT_BIG_SSLV3_BUFFER: 0,
        SSL_OP_MICROSOFT_SESS_ID_BUG: 0,
        SSL_OP_MSIE_SSLV2_RSA_PADDING: 0,
        SSL_OP_NETSCAPE_CA_DN_BUG: 0,
        SSL_OP_NETSCAPE_CHALLENGE_BUG: 0,
        SSL_OP_NETSCAPE_DEMO_CIPHER_CHANGE_BUG: 0,
        SSL_OP_NETSCAPE_REUSE_CIPHER_CHANGE_BUG: 0,
        SSL_OP_NO_COMPRESSION: 131072,
        SSL_OP_NO_ENCRYPT_THEN_MAC: 524288,
        SSL_OP_NO_QUERY_MTU: 4096,
        SSL_OP_NO_RENEGOTIATION: 1073741824,
        SSL_OP_NO_SESSION_RESUMPTION_ON_RENEGOTIATION: 65536,
        SSL_OP_NO_SSLv2: 0,
        SSL_OP_NO_SSLv3: 33554432,
        SSL_OP_NO_TICKET: 16384,
        SSL_OP_NO_TLSv1: 67108864,
        SSL_OP_NO_TLSv1_1: 268435456,
        SSL_OP_NO_TLSv1_2: 134217728,
        SSL_OP_NO_TLSv1_3: 536870912,
        SSL_OP_PKCS1_CHECK_1: 0,
        SSL_OP_PKCS1_CHECK_2: 0,
        SSL_OP_PRIORITIZE_CHACHA: 2097152,
        SSL_OP_SINGLE_DH_USE: 0,
        SSL_OP_SINGLE_ECDH_USE: 0,
        SSL_OP_SSLEAY_080_CLIENT_DH_BUG: 0,
        SSL_OP_SSLREF2_REUSE_CERT_TYPE_BUG: 0,
        SSL_OP_TLS_BLOCK_PADDING_BUG: 0,
        SSL_OP_TLS_D5_BUG: 0,
        SSL_OP_TLS_ROLLBACK_BUG: 8388608,
        ENGINE_METHOD_RSA: 1,
        ENGINE_METHOD_DSA: 2,
        ENGINE_METHOD_DH: 4,
        ENGINE_METHOD_RAND: 8,
        ENGINE_METHOD_EC: 2048,
        ENGINE_METHOD_CIPHERS: 64,
        ENGINE_METHOD_DIGESTS: 128,
        ENGINE_METHOD_PKEY_METHS: 512,
        ENGINE_METHOD_PKEY_ASN1_METHS: 1024,
        ENGINE_METHOD_ALL: 65535,
        ENGINE_METHOD_NONE: 0,
        DH_CHECK_P_NOT_SAFE_PRIME: 2,
        DH_CHECK_P_NOT_PRIME: 1,
        DH_UNABLE_TO_CHECK_GENERATOR: 4,
        DH_NOT_SUITABLE_GENERATOR: 8,
        ALPN_ENABLED: 1,
        RSA_PKCS1_PADDING: 1,
        RSA_NO_PADDING: 3,
        RSA_PKCS1_OAEP_PADDING: 4,
        RSA_X931_PADDING: 5,
        RSA_PKCS1_PSS_PADDING: 6,
        RSA_PSS_SALTLEN_DIGEST: -1,
        RSA_PSS_SALTLEN_MAX_SIGN: -2,
        RSA_PSS_SALTLEN_AUTO: -2,
        defaultCoreCipherList: "TLS_AES_256_GCM_SHA384:TLS_CHACHA20_POLY1305_SHA256:TLS_AES_128_GCM_SHA256:ECDHE-RSA-AES128-GCM-SHA2…",
        TLS1_VERSION: 769,
        TLS1_1_VERSION: 770,
        TLS1_2_VERSION: 771,
        TLS1_3_VERSION: 772,
        POINT_CONVERSION_COMPRESSED: 2,
        POINT_CONVERSION_UNCOMPRESSED: 4,
        POINT_CONVERSION_HYBRID: 6,
        [get/set] defaultCipherList: "TLS_AES_256_GCM_SHA384:TLS_CHACHA20_POLY1305_SHA256:TLS_AES_128_GCM_SHA256:ECDHE-RSA-AES128-GCM-SHA2…"
    },
    createCipheriv: <ref *23> ƒ createCipheriv(length: 4) {},
    createDecipheriv: <ref *24> ƒ createDecipheriv(length: 4) {},
    createDiffieHellman: <ref *25> ƒ createDiffieHellman(length: 4) {},
    createDiffieHellmanGroup: <ref *26> ƒ createDiffieHellmanGroup(length: 1) {},
    createECDH: <ref *27> ƒ createECDH(length: 1) {},
    createHash: <ref *28> ƒ createHash(length: 2) {},
    createHmac: <ref *29> ƒ createHmac(length: 3) {},
    createPrivateKey: <ref *30> ƒ createPrivateKey(length: 1) {},
    createPublicKey: <ref *31> ƒ createPublicKey(length: 1) {},
    createSecretKey: <ref *32> ƒ createSecretKey(length: 2) {},
    createSign: <ref *33> ƒ createSign(length: 2) {},
    createVerify: <ref *34> ƒ createVerify(length: 2) {},
    default: {
        checkPrime: [Circular: *20],
        checkPrimeSync: [Circular: *21],
        createCipheriv: [Circular: *23],
        createDecipheriv: [Circular: *24],
        createDiffieHellman: [Circular: *25],
        createDiffieHellmanGroup: [Circular: *26],
        createECDH: [Circular: *27],
        createHash: [Circular: *28],
        createHmac: [Circular: *29],
        createPrivateKey: [Circular: *30],
        createPublicKey: [Circular: *31],
        createSecretKey: [Circular: *32],
        createSign: [Circular: *33],
        createVerify: [Circular: *34],
        diffieHellman: <ref *36> ƒ diffieHellman(length: 1) {},
        generatePrime: <ref *37> ƒ generatePrime(length: 3) {},
        generatePrimeSync: <ref *38> ƒ generatePrimeSync(length: 1) {},
        getCiphers: <ref *39> ƒ (length: 0) {},
        getCipherInfo: <ref *40> ƒ getCipherInfo(length: 2) {},
        getCurves: <ref *41> ƒ (length: 0) {},
        getDiffieHellman: [Circular: *26],
        getHashes: <ref *42> ƒ (length: 0) {},
        hkdf: <ref *43> ƒ hkdf(length: 6) {},
        hkdfSync: <ref *44> ƒ hkdfSync(length: 5) {},
        pbkdf2: <ref *45> ƒ pbkdf2(length: 6) {},
        pbkdf2Sync: <ref *46> ƒ pbkdf2Sync(length: 5) {},
        generateKeyPair: <ref *47> ƒ generateKeyPair(length: 3) {},
        generateKeyPairSync: <ref *48> ƒ generateKeyPairSync(length: 2) {},
        generateKey: <ref *49> ƒ generateKey(length: 3) {},
        generateKeySync: <ref *50> ƒ generateKeySync(length: 2) {},
        privateDecrypt: <ref *51> ƒ (length: 2) {},
        privateEncrypt: <ref *52> ƒ (length: 2) {},
        publicDecrypt: <ref *53> ƒ (length: 2) {},
        publicEncrypt: <ref *54> ƒ (length: 2) {},
        randomBytes: <ref *55> ƒ randomBytes(length: 2) {},
        randomFill: <ref *56> ƒ randomFill(length: 4) {},
        randomFillSync: <ref *57> ƒ randomFillSync(length: 1) {},
        randomInt: <ref *58> ƒ randomInt(length: 3) {},
        randomUUID: <ref *59> ƒ randomUUID(length: 1) {},
        scrypt: <ref *60> ƒ scrypt(length: 4) {},
        scryptSync: <ref *61> ƒ scryptSync(length: 3) {},
        sign: <ref *62> ƒ signOneShot(length: 4) {},
        setEngine: <ref *63> ƒ setEngine(length: 2) {},
        timingSafeEqual: <ref *64> ƒ timingSafeEqual(length: 0) {},
        getFips: <ref *65> ƒ getFips(length: 0) {},
        setFips: <ref *66> ƒ setFips(length: 1) {},
        verify: <ref *67> ƒ verifyOneShot(length: 5) {},
        Certificate: [Circular: *2],
        Cipher: [Circular: *6],
        Cipheriv: [Circular: *7],
        Decipher: [Circular: *8],
        Decipheriv: [Circular: *9],
        DiffieHellman: [Circular: *10],
        DiffieHellmanGroup: [Circular: *11],
        ECDH: [Circular: *12],
        Hash: [Circular: *14],
        Hmac: [Circular: *15],
        KeyObject: [Circular: *16],
        Sign: [Circular: *17],
        Verify: [Circular: *18],
        X509Certificate: [Circular: *19],
        secureHeapUsed: <ref *68> ƒ secureHeapUsed(length: 0) {},
        constants: [Circular: *22],
        [get/set] webcrypto: <ref *69> Crypto {},
        [get/set] subtle: <ref *70> SubtleCrypto {},
        [get/set] getRandomValues: <ref *71> ƒ getRandomValues(length: 1) {}
    },
    diffieHellman: [Circular: *36],
    generateKey: [Circular: *49],
    generateKeyPair: [Circular: *47],
    generateKeyPairSync: [Circular: *48],
    generateKeySync: [Circular: *50],
    generatePrime: [Circular: *37],
    generatePrimeSync: [Circular: *38],
    getCipherInfo: [Circular: *40],
    getCiphers: [Circular: *39],
    getCurves: [Circular: *41],
    getDiffieHellman: [Circular: *26],
    getFips: [Circular: *65],
    getHashes: [Circular: *42],
    getRandomValues: [Circular: *71],
    hkdf: [Circular: *43],
    hkdfSync: [Circular: *44],
    pbkdf2: [Circular: *45],
    pbkdf2Sync: [Circular: *46],
    privateDecrypt: [Circular: *51],
    privateEncrypt: [Circular: *52],
    publicDecrypt: [Circular: *53],
    publicEncrypt: [Circular: *54],
    randomBytes: [Circular: *55],
    randomFill: [Circular: *56],
    randomFillSync: [Circular: *57],
    randomInt: [Circular: *58],
    randomUUID: [Circular: *59],
    scrypt: [Circular: *60],
    scryptSync: [Circular: *61],
    secureHeapUsed: [Circular: *68],
    setEngine: [Circular: *63],
    setFips: [Circular: *66],
    sign: [Circular: *62],
    subtle: [Circular: *70],
    timingSafeEqual: [Circular: *64],
    verify: [Circular: *67],
    webcrypto: [Circular: *69]
}
```

</td><td valign="top">

```js
78 | 			}
79 | 
80 | 			const entries = Reflect.ownKeys(value).map(
81 | 				(key) => {
82 | 					const descriptor = Object.getOwnPropertyDescriptor(value, key);
83 | 					if (!descriptor.enumerable) {
             ^
TypeError: undefined is not an object (evaluating 'descriptor.enumerable')
      at /tmp/fs-fixture-1687133604372-1/inspect.mjs:83:10
      at /tmp/fs-fixture-1687133604372-1/inspect.mjs:80:19
      at /tmp/fs-fixture-1687133604372-1/inspect.mjs:99:6
      at /tmp/fs-fixture-1687133604372-1/inspect.mjs:80:19
      at /tmp/fs-fixture-1687133604372-1/crypto.mjs:4:15
```

</td></tr></table>

## dgram

<table><tr><th>Node.js</th><th>Bun</th></tr><tr><td valign="top">

```js
[Object: null prototype] {
    Socket: <ref *2> ƒ Socket(length: 2) {},
    _createSocketHandle: <ref *3> ƒ deprecated(length: 0) {},
    createSocket: <ref *4> ƒ createSocket(length: 2) {},
    default: {
        _createSocketHandle: [Circular: *3],
        createSocket: [Circular: *4],
        Socket: [Circular: *2]
    }
}
```

</td><td valign="top">

```js
{
    createSocket: ƒ ::bunternal::(length: 0) {},
    Socket: ƒ ::bunternal::(length: 0) {},
    _createSocketHandle: ƒ ::bunternal::(length: 0) {},
    Symbol(CommonJS): 0
}
```

</td></tr></table>

## diagnostics_channel

<table><tr><th>Node.js</th><th>Bun</th></tr><tr><td valign="top">

```js
[Object: null prototype] {
    Channel: <ref *2> class Channel {},
    channel: <ref *3> ƒ channel(length: 1) {},
    default: {
        channel: [Circular: *3],
        hasSubscribers: <ref *5> ƒ hasSubscribers(length: 1) {},
        subscribe: <ref *6> ƒ subscribe(length: 2) {},
        unsubscribe: <ref *7> ƒ unsubscribe(length: 2) {},
        Channel: [Circular: *2]
    },
    hasSubscribers: [Circular: *5],
    subscribe: [Circular: *6],
    unsubscribe: [Circular: *7]
}
```

</td><td valign="top">

```js
{
    channel: ƒ channel(length: 0) {},
    hasSubscribers: ƒ hasSubscribers(length: 0) {},
    subscribe: ƒ subscribe(length: 0) {},
    unsubscribe: ƒ unsubscribe(length: 0) {},
    Channel: class Channel {},
    Symbol(CommonJS): 0
}
```

</td></tr></table>

## dns

<table><tr><th>Node.js</th><th>Bun</th></tr><tr><td valign="top">

```js
[Object: null prototype] {
    ADDRCONFIG: 32,
    ADDRGETNETWORKPARAMS: "EADDRGETNETWORKPARAMS",
    ALL: 16,
    BADFAMILY: "EBADFAMILY",
    BADFLAGS: "EBADFLAGS",
    BADHINTS: "EBADHINTS",
    BADNAME: "EBADNAME",
    BADQUERY: "EBADQUERY",
    BADRESP: "EBADRESP",
    BADSTR: "EBADSTR",
    CANCELLED: "ECANCELLED",
    CONNREFUSED: "ECONNREFUSED",
    DESTRUCTION: "EDESTRUCTION",
    EOF: "EOF",
    FILE: "EFILE",
    FORMERR: "EFORMERR",
    LOADIPHLPAPI: "ELOADIPHLPAPI",
    NODATA: "ENODATA",
    NOMEM: "ENOMEM",
    NONAME: "ENONAME",
    NOTFOUND: "ENOTFOUND",
    NOTIMP: "ENOTIMP",
    NOTINITIALIZED: "ENOTINITIALIZED",
    REFUSED: "EREFUSED",
    Resolver: <ref *2> class Resolver extends ResolverBase {},
    SERVFAIL: "ESERVFAIL",
    TIMEOUT: "ETIMEOUT",
    V4MAPPED: 8,
    default: {
        lookup: <ref *4> ƒ lookup(length: 3) {},
        lookupService: <ref *5> ƒ lookupService(length: 3) {},
        Resolver: [Circular: *2],
        setDefaultResultOrder: <ref *6> ƒ setDefaultResultOrder(length: 1) {},
        setServers: <ref *7> ƒ defaultResolverSetServers(length: 1) {},
        ADDRCONFIG: 32,
        ALL: 16,
        V4MAPPED: 8,
        NODATA: "ENODATA",
        FORMERR: "EFORMERR",
        SERVFAIL: "ESERVFAIL",
        NOTFOUND: "ENOTFOUND",
        NOTIMP: "ENOTIMP",
        REFUSED: "EREFUSED",
        BADQUERY: "EBADQUERY",
        BADNAME: "EBADNAME",
        BADFAMILY: "EBADFAMILY",
        BADRESP: "EBADRESP",
        CONNREFUSED: "ECONNREFUSED",
        TIMEOUT: "ETIMEOUT",
        EOF: "EOF",
        FILE: "EFILE",
        NOMEM: "ENOMEM",
        DESTRUCTION: "EDESTRUCTION",
        BADSTR: "EBADSTR",
        BADFLAGS: "EBADFLAGS",
        NONAME: "ENONAME",
        BADHINTS: "EBADHINTS",
        NOTINITIALIZED: "ENOTINITIALIZED",
        LOADIPHLPAPI: "ELOADIPHLPAPI",
        ADDRGETNETWORKPARAMS: "EADDRGETNETWORKPARAMS",
        CANCELLED: "ECANCELLED",
        getServers: <ref *8> ƒ bound getServers(length: 0) {},
        resolve: <ref *9> ƒ bound resolve(length: 3) {},
        resolve4: <ref *10> ƒ bound queryA(length: 2) {},
        resolve6: <ref *11> ƒ bound queryAaaa(length: 2) {},
        resolveAny: <ref *12> ƒ bound queryAny(length: 2) {},
        resolveCaa: <ref *13> ƒ bound queryCaa(length: 2) {},
        resolveCname: <ref *14> ƒ bound queryCname(length: 2) {},
        resolveMx: <ref *15> ƒ bound queryMx(length: 2) {},
        resolveNaptr: <ref *16> ƒ bound queryNaptr(length: 2) {},
        resolveNs: <ref *17> ƒ bound queryNs(length: 2) {},
        resolvePtr: <ref *18> ƒ bound queryPtr(length: 2) {},
        resolveSoa: <ref *19> ƒ bound querySoa(length: 2) {},
        resolveSrv: <ref *20> ƒ bound querySrv(length: 2) {},
        resolveTxt: <ref *21> ƒ bound queryTxt(length: 2) {},
        reverse: <ref *22> ƒ bound getHostByAddr(length: 2) {},
        [get/set] promises: <ref *23> {
            lookup: ƒ lookup(length: 2) {},
            lookupService: ƒ lookupService(length: 2) {},
            Resolver: class Resolver extends ResolverBase {},
            setDefaultResultOrder: [Circular: *6],
            setServers: ƒ defaultResolverSetServers(length: 1) {},
            NODATA: "ENODATA",
            FORMERR: "EFORMERR",
            SERVFAIL: "ESERVFAIL",
            NOTFOUND: "ENOTFOUND",
            NOTIMP: "ENOTIMP",
            REFUSED: "EREFUSED",
            BADQUERY: "EBADQUERY",
            BADNAME: "EBADNAME",
            BADFAMILY: "EBADFAMILY",
            BADRESP: "EBADRESP",
            CONNREFUSED: "ECONNREFUSED",
            TIMEOUT: "ETIMEOUT",
            EOF: "EOF",
            FILE: "EFILE",
            NOMEM: "ENOMEM",
            DESTRUCTION: "EDESTRUCTION",
            BADSTR: "EBADSTR",
            BADFLAGS: "EBADFLAGS",
            NONAME: "ENONAME",
            BADHINTS: "EBADHINTS",
            NOTINITIALIZED: "ENOTINITIALIZED",
            LOADIPHLPAPI: "ELOADIPHLPAPI",
            ADDRGETNETWORKPARAMS: "EADDRGETNETWORKPARAMS",
            CANCELLED: "ECANCELLED",
            getServers: ƒ bound getServers(length: 0) {},
            resolve: ƒ bound resolve(length: 2) {},
            resolve4: ƒ bound queryA(length: 2) {},
            resolve6: ƒ bound queryAaaa(length: 2) {},
            resolveAny: ƒ bound queryAny(length: 2) {},
            resolveCaa: ƒ bound queryCaa(length: 2) {},
            resolveCname: ƒ bound queryCname(length: 2) {},
            resolveMx: ƒ bound queryMx(length: 2) {},
            resolveNaptr: ƒ bound queryNaptr(length: 2) {},
            resolveNs: ƒ bound queryNs(length: 2) {},
            resolvePtr: ƒ bound queryPtr(length: 2) {},
            resolveSoa: ƒ bound querySoa(length: 2) {},
            resolveSrv: ƒ bound querySrv(length: 2) {},
            resolveTxt: ƒ bound queryTxt(length: 2) {},
            reverse: ƒ bound getHostByAddr(length: 2) {}
        }
    },
    getServers: [Circular: *8],
    lookup: [Circular: *4],
    lookupService: [Circular: *5],
    promises: [Circular: *23],
    resolve: [Circular: *9],
    resolve4: [Circular: *10],
    resolve6: [Circular: *11],
    resolveAny: [Circular: *12],
    resolveCaa: [Circular: *13],
    resolveCname: [Circular: *14],
    resolveMx: [Circular: *15],
    resolveNaptr: [Circular: *16],
    resolveNs: [Circular: *17],
    resolvePtr: [Circular: *18],
    resolveSoa: [Circular: *19],
    resolveSrv: [Circular: *20],
    resolveTxt: [Circular: *21],
    reverse: [Circular: *22],
    setDefaultResultOrder: [Circular: *6],
    setServers: [Circular: *7]
}
```

</td><td valign="top">

```js
{
    ADDRCONFIG: 0,
    ALL: 1,
    V4MAPPED: 2,
    NODATA: "DNS_ENODATA",
    FORMERR: "DNS_EFORMERR",
    SERVFAIL: "DNS_ESERVFAIL",
    NOTFOUND: "DNS_ENOTFOUND",
    NOTIMP: "DNS_ENOTIMP",
    REFUSED: "DNS_EREFUSED",
    BADQUERY: "DNS_EBADQUERY",
    BADNAME: "DNS_EBADNAME",
    BADFAMILY: "DNS_EBADFAMILY",
    BADRESP: "DNS_EBADRESP",
    CONNREFUSED: "DNS_ECONNREFUSED",
    TIMEOUT: "DNS_ETIMEOUT",
    EOF: "DNS_EEOF",
    FILE: "DNS_EFILE",
    NOMEM: "DNS_ENOMEM",
    DESTRUCTION: "DNS_EDESTRUCTION",
    BADSTR: "DNS_EBADSTR",
    BADFLAGS: "DNS_EBADFLAGS",
    NONAME: "DNS_ENONAME",
    BADHINTS: "DNS_EBADHINTS",
    NOTINITIALIZED: "DNS_ENOTINITIALIZED",
    LOADIPHLPAPI: "DNS_ELOADIPHLPAPI",
    ADDRGETNETWORKPARAMS: "DNS_EADDRGETNETWORKPARAMS",
    CANCELLED: "DNS_ECANCELLED",
    lookup: ƒ lookup(length: 3) {},
    lookupService: ƒ lookupService(length: 3) {},
    Resolver: ƒ Resolver(length: 1) {},
    setServers: ƒ setServers(length: 0) {},
    setDefaultResultOrder: ƒ setDefaultResultOrder(length: 0) {},
    resolve: ƒ resolve(length: 3) {},
    reverse: ƒ reverse(length: 2) {},
    resolve4: ƒ resolve4(length: 3) {},
    resolve6: ƒ resolve6(length: 3) {},
    resolveAny: ƒ resolveAny(length: 2) {},
    resolveCname: ƒ resolveCname(length: 2) {},
    resolveCaa: ƒ resolveCaa(length: 2) {},
    resolveMx: ƒ resolveMx(length: 2) {},
    resolveNs: ƒ resolveNs(length: 2) {},
    resolvePtr: ƒ resolvePtr(length: 2) {},
    resolveSoa: ƒ resolveSoa(length: 2) {},
    resolveSrv: ƒ resolveSrv(length: 2) {},
    resolveTxt: ƒ resolveTxt(length: 2) {},
    resolveNaptr: ƒ resolveNaptr(length: 2) {},
    promises: {
        lookup: ƒ lookup(length: 2) {},
        lookupService: ƒ lookupService(length: 2) {},
        resolve: ƒ resolve(length: 2) {},
        resolve4: ƒ resolve4(length: 2) {},
        resolve6: ƒ resolve6(length: 2) {},
        resolveSrv: ƒ resolveSrv(length: 1) {},
        resolveTxt: ƒ resolveTxt(length: 1) {},
        resolveSoa: ƒ resolveSoa(length: 1) {},
        resolveNaptr: ƒ resolveNaptr(length: 1) {},
        resolveMx: ƒ resolveMx(length: 1) {},
        resolveCaa: ƒ resolveCaa(length: 1) {},
        resolveNs: ƒ resolveNs(length: 1) {},
        resolvePtr: ƒ resolvePtr(length: 1) {},
        resolveCname: ƒ resolveCname(length: 1) {},
        Resolver: class Resolver3 {},
        resolveAny: ƒ (length: 0) {},
        reverse: ƒ (length: 0) {}
    },
    Symbol(CommonJS): 0
}
```

</td></tr></table>

## dns/promises

<table><tr><th>Node.js</th><th>Bun</th></tr><tr><td valign="top">

```js
[Object: null prototype] {
    ADDRGETNETWORKPARAMS: "EADDRGETNETWORKPARAMS",
    BADFAMILY: "EBADFAMILY",
    BADFLAGS: "EBADFLAGS",
    BADHINTS: "EBADHINTS",
    BADNAME: "EBADNAME",
    BADQUERY: "EBADQUERY",
    BADRESP: "EBADRESP",
    BADSTR: "EBADSTR",
    CANCELLED: "ECANCELLED",
    CONNREFUSED: "ECONNREFUSED",
    DESTRUCTION: "EDESTRUCTION",
    EOF: "EOF",
    FILE: "EFILE",
    FORMERR: "EFORMERR",
    LOADIPHLPAPI: "ELOADIPHLPAPI",
    NODATA: "ENODATA",
    NOMEM: "ENOMEM",
    NONAME: "ENONAME",
    NOTFOUND: "ENOTFOUND",
    NOTIMP: "ENOTIMP",
    NOTINITIALIZED: "ENOTINITIALIZED",
    REFUSED: "EREFUSED",
    Resolver: <ref *2> class Resolver extends ResolverBase {},
    SERVFAIL: "ESERVFAIL",
    TIMEOUT: "ETIMEOUT",
    default: {
        lookup: <ref *4> ƒ lookup(length: 2) {},
        lookupService: <ref *5> ƒ lookupService(length: 2) {},
        Resolver: [Circular: *2],
        setDefaultResultOrder: <ref *6> ƒ setDefaultResultOrder(length: 1) {},
        setServers: <ref *7> ƒ defaultResolverSetServers(length: 1) {},
        NODATA: "ENODATA",
        FORMERR: "EFORMERR",
        SERVFAIL: "ESERVFAIL",
        NOTFOUND: "ENOTFOUND",
        NOTIMP: "ENOTIMP",
        REFUSED: "EREFUSED",
        BADQUERY: "EBADQUERY",
        BADNAME: "EBADNAME",
        BADFAMILY: "EBADFAMILY",
        BADRESP: "EBADRESP",
        CONNREFUSED: "ECONNREFUSED",
        TIMEOUT: "ETIMEOUT",
        EOF: "EOF",
        FILE: "EFILE",
        NOMEM: "ENOMEM",
        DESTRUCTION: "EDESTRUCTION",
        BADSTR: "EBADSTR",
        BADFLAGS: "EBADFLAGS",
        NONAME: "ENONAME",
        BADHINTS: "EBADHINTS",
        NOTINITIALIZED: "ENOTINITIALIZED",
        LOADIPHLPAPI: "ELOADIPHLPAPI",
        ADDRGETNETWORKPARAMS: "EADDRGETNETWORKPARAMS",
        CANCELLED: "ECANCELLED",
        getServers: <ref *8> ƒ bound getServers(length: 0) {},
        resolve: <ref *9> ƒ bound resolve(length: 2) {},
        resolve4: <ref *10> ƒ bound queryA(length: 2) {},
        resolve6: <ref *11> ƒ bound queryAaaa(length: 2) {},
        resolveAny: <ref *12> ƒ bound queryAny(length: 2) {},
        resolveCaa: <ref *13> ƒ bound queryCaa(length: 2) {},
        resolveCname: <ref *14> ƒ bound queryCname(length: 2) {},
        resolveMx: <ref *15> ƒ bound queryMx(length: 2) {},
        resolveNaptr: <ref *16> ƒ bound queryNaptr(length: 2) {},
        resolveNs: <ref *17> ƒ bound queryNs(length: 2) {},
        resolvePtr: <ref *18> ƒ bound queryPtr(length: 2) {},
        resolveSoa: <ref *19> ƒ bound querySoa(length: 2) {},
        resolveSrv: <ref *20> ƒ bound querySrv(length: 2) {},
        resolveTxt: <ref *21> ƒ bound queryTxt(length: 2) {},
        reverse: <ref *22> ƒ bound getHostByAddr(length: 2) {}
    },
    getServers: [Circular: *8],
    lookup: [Circular: *4],
    lookupService: [Circular: *5],
    resolve: [Circular: *9],
    resolve4: [Circular: *10],
    resolve6: [Circular: *11],
    resolveAny: [Circular: *12],
    resolveCaa: [Circular: *13],
    resolveCname: [Circular: *14],
    resolveMx: [Circular: *15],
    resolveNaptr: [Circular: *16],
    resolveNs: [Circular: *17],
    resolvePtr: [Circular: *18],
    resolveSoa: [Circular: *19],
    resolveSrv: [Circular: *20],
    resolveTxt: [Circular: *21],
    reverse: [Circular: *22],
    setDefaultResultOrder: [Circular: *6],
    setServers: [Circular: *7]
}
```

</td><td valign="top">

```js
{
    lookup: ƒ lookup(length: 2) {},
    lookupService: ƒ lookupService(length: 2) {},
    resolve: ƒ resolve(length: 2) {},
    resolve4: ƒ resolve4(length: 2) {},
    resolveAny: ƒ (length: 0) {},
    resolveCname: ƒ resolveCname(length: 1) {},
    resolveCaa: ƒ resolveCaa(length: 1) {},
    resolveMx: ƒ resolveMx(length: 1) {},
    resolveNaptr: ƒ resolveNaptr(length: 1) {},
    resolveNs: ƒ resolveNs(length: 1) {},
    resolvePtr: ƒ resolvePtr(length: 1) {},
    resolveSoa: ƒ resolveSoa(length: 1) {},
    resolveSrv: ƒ resolveSrv(length: 1) {},
    resolveTxt: ƒ resolveTxt(length: 1) {},
    reverse: ƒ (length: 0) {},
    Resolver: class Resolver3 {},
    setServers: undefined,
    setDefaultResultOrder: undefined,
    Symbol(CommonJS): 0
}
```

</td></tr></table>

## domain

<table><tr><th>Node.js</th><th>Bun</th></tr><tr><td valign="top">

```js
[Object: null prototype] {
    Domain: <ref *2> class Domain extends EventEmitter {},
    _stack: <ref *3> [],
    active: null,
    create: <ref *4> ƒ createDomain(length: 0) {},
    createDomain: [Circular: *4],
    default: {
        _stack: [Circular: *3],
        Domain: [Circular: *2],
        createDomain: [Circular: *4],
        create: [Circular: *4],
        active: null
    }
}
```

</td><td valign="top">

```js
78 | 			}
79 | 
80 | 			const entries = Reflect.ownKeys(value).map(
81 | 				(key) => {
82 | 					const descriptor = Object.getOwnPropertyDescriptor(value, key);
83 | 					if (!descriptor.enumerable) {
             ^
TypeError: undefined is not an object (evaluating 'descriptor.enumerable')
      at /tmp/fs-fixture-1687133604372-1/inspect.mjs:83:10
      at /tmp/fs-fixture-1687133604372-1/inspect.mjs:80:19
      at /tmp/fs-fixture-1687133604372-1/domain.mjs:4:15
```

</td></tr></table>

## events

<table><tr><th>Node.js</th><th>Bun</th></tr><tr><td valign="top">

```js
[Object: null prototype] {
    EventEmitter: <ref *2> ƒ EventEmitter(length: 1) {
        once: <ref *3> async ƒ once(length: 2) {},
        on: <ref *4> ƒ on(length: 2) {},
        getEventListeners: <ref *5> ƒ getEventListeners(length: 2) {},
        EventEmitter: [Circular: *2],
        usingDomains: false,
        captureRejectionSymbol: Symbol(nodejs.rejection),
        [get/set] captureRejections: false,
        [get/set] EventEmitterAsyncResource: <ref *6> class EventEmitterAsyncResource extends EventEmitter {},
        errorMonitor: Symbol(events.errorMonitor),
        [get/set] defaultMaxListeners: 10,
        setMaxListeners: <ref *7> ƒ (length: 0) {},
        init: <ref *8> ƒ (length: 1) {},
        listenerCount: <ref *9> ƒ (length: 2) {}
    },
    EventEmitterAsyncResource: [Circular: *6],
    captureRejectionSymbol: Symbol(nodejs.rejection),
    captureRejections: false,
    default: [Circular: *2],
    defaultMaxListeners: 10,
    errorMonitor: Symbol(events.errorMonitor),
    getEventListeners: [Circular: *5],
    init: [Circular: *8],
    listenerCount: [Circular: *9],
    on: [Circular: *4],
    once: [Circular: *3],
    setMaxListeners: [Circular: *7],
    usingDomains: false
}
```

</td><td valign="top">

```js
<ref *1> ƒ EventEmitter(length: 1) {
    once: ƒ once(length: 3) {},
    on: ƒ on(length: 3) {},
    getEventListeners: ƒ getEventListeners(length: 2) {},
    setMaxListeners: ƒ setMaxListeners(length: 1) {},
    listenerCount: ƒ listenerCount(length: 2) {},
    EventEmitter: [Circular: *1],
    usingDomains: false,
    captureRejectionSymbol: Symbol(nodejs.rejection),
    [get/set] captureRejections: false,
    errorMonitor: Symbol(events.errorMonitor),
    [get/set] defaultMaxListeners: 10,
    init: [Circular: *1],
    EventEmitterAsyncResource: class EventEmitterAsyncResource extends EventEmitter {},
    Symbol(CommonJS): 0
}
```

</td></tr></table>

## fs

<table><tr><th>Node.js</th><th>Bun</th></tr><tr><td valign="top">

```js
[Object: null prototype] {
    Dir: <ref *2> class Dir {},
    Dirent: <ref *3> class Dirent {},
    F_OK: 0,
    FileReadStream: <ref *4> ƒ ReadStream(length: 2) {},
    FileWriteStream: <ref *5> ƒ WriteStream(length: 2) {},
    R_OK: 4,
    ReadStream: [Circular: *4],
    Stats: <ref *6> ƒ Stats(length: 14) {},
    W_OK: 2,
    WriteStream: [Circular: *5],
    X_OK: 1,
    _toUnixTimestamp: <ref *7> ƒ toUnixTimestamp(length: 1) {},
    access: <ref *8> ƒ access(length: 3) {},
    accessSync: <ref *9> ƒ accessSync(length: 2) {},
    appendFile: <ref *10> ƒ appendFile(length: 4) {},
    appendFileSync: <ref *11> ƒ appendFileSync(length: 3) {},
    chmod: <ref *12> ƒ chmod(length: 3) {},
    chmodSync: <ref *13> ƒ chmodSync(length: 2) {},
    chown: <ref *14> ƒ chown(length: 4) {},
    chownSync: <ref *15> ƒ chownSync(length: 3) {},
    close: <ref *16> ƒ close(length: 1) {},
    closeSync: <ref *17> ƒ closeSync(length: 1) {},
    constants: <ref *18> [Object: null prototype] {
        UV_FS_SYMLINK_DIR: 1,
        UV_FS_SYMLINK_JUNCTION: 2,
        O_RDONLY: 0,
        O_WRONLY: 1,
        O_RDWR: 2,
        UV_DIRENT_UNKNOWN: 0,
        UV_DIRENT_FILE: 1,
        UV_DIRENT_DIR: 2,
        UV_DIRENT_LINK: 3,
        UV_DIRENT_FIFO: 4,
        UV_DIRENT_SOCKET: 5,
        UV_DIRENT_CHAR: 6,
        UV_DIRENT_BLOCK: 7,
        S_IFMT: 61440,
        S_IFREG: 32768,
        S_IFDIR: 16384,
        S_IFCHR: 8192,
        S_IFBLK: 24576,
        S_IFIFO: 4096,
        S_IFLNK: 40960,
        S_IFSOCK: 49152,
        O_CREAT: 64,
        O_EXCL: 128,
        UV_FS_O_FILEMAP: 0,
        O_NOCTTY: 256,
        O_TRUNC: 512,
        O_APPEND: 1024,
        O_DIRECTORY: 65536,
        O_NOATIME: 262144,
        O_NOFOLLOW: 131072,
        O_SYNC: 1052672,
        O_DSYNC: 4096,
        O_DIRECT: 16384,
        O_NONBLOCK: 2048,
        S_IRWXU: 448,
        S_IRUSR: 256,
        S_IWUSR: 128,
        S_IXUSR: 64,
        S_IRWXG: 56,
        S_IRGRP: 32,
        S_IWGRP: 16,
        S_IXGRP: 8,
        S_IRWXO: 7,
        S_IROTH: 4,
        S_IWOTH: 2,
        S_IXOTH: 1,
        F_OK: 0,
        R_OK: 4,
        W_OK: 2,
        X_OK: 1,
        UV_FS_COPYFILE_EXCL: 1,
        COPYFILE_EXCL: 1,
        UV_FS_COPYFILE_FICLONE: 2,
        COPYFILE_FICLONE: 2,
        UV_FS_COPYFILE_FICLONE_FORCE: 4,
        COPYFILE_FICLONE_FORCE: 4
    },
    copyFile: <ref *19> ƒ copyFile(length: 4) {},
    copyFileSync: <ref *20> ƒ copyFileSync(length: 3) {},
    cp: <ref *21> ƒ cp(length: 4) {},
    cpSync: <ref *22> ƒ cpSync(length: 3) {},
    createReadStream: <ref *23> ƒ createReadStream(length: 2) {},
    createWriteStream: <ref *24> ƒ createWriteStream(length: 2) {},
    default: {
        appendFile: [Circular: *10],
        appendFileSync: [Circular: *11],
        access: [Circular: *8],
        accessSync: [Circular: *9],
        chown: [Circular: *14],
        chownSync: [Circular: *15],
        chmod: [Circular: *12],
        chmodSync: [Circular: *13],
        close: [Circular: *16],
        closeSync: [Circular: *17],
        copyFile: [Circular: *19],
        copyFileSync: [Circular: *20],
        cp: [Circular: *21],
        cpSync: [Circular: *22],
        createReadStream: [Circular: *23],
        createWriteStream: [Circular: *24],
        exists: <ref *26> ƒ exists(length: 2) {},
        existsSync: <ref *27> ƒ existsSync(length: 1) {},
        fchown: <ref *28> ƒ fchown(length: 4) {},
        fchownSync: <ref *29> ƒ fchownSync(length: 3) {},
        fchmod: <ref *30> ƒ fchmod(length: 3) {},
        fchmodSync: <ref *31> ƒ fchmodSync(length: 2) {},
        fdatasync: <ref *32> ƒ fdatasync(length: 2) {},
        fdatasyncSync: <ref *33> ƒ fdatasyncSync(length: 1) {},
        fstat: <ref *34> ƒ fstat(length: 1) {},
        fstatSync: <ref *35> ƒ fstatSync(length: 1) {},
        fsync: <ref *36> ƒ fsync(length: 2) {},
        fsyncSync: <ref *37> ƒ fsyncSync(length: 1) {},
        ftruncate: <ref *38> ƒ ftruncate(length: 1) {},
        ftruncateSync: <ref *39> ƒ ftruncateSync(length: 1) {},
        futimes: <ref *40> ƒ futimes(length: 4) {},
        futimesSync: <ref *41> ƒ futimesSync(length: 3) {},
        lchown: <ref *42> ƒ lchown(length: 4) {},
        lchownSync: <ref *43> ƒ lchownSync(length: 3) {},
        lchmod: undefined,
        lchmodSync: undefined,
        link: <ref *44> ƒ link(length: 3) {},
        linkSync: <ref *45> ƒ linkSync(length: 2) {},
        lstat: <ref *46> ƒ lstat(length: 1) {},
        lstatSync: <ref *47> ƒ lstatSync(length: 1) {},
        lutimes: <ref *48> ƒ lutimes(length: 4) {},
        lutimesSync: <ref *49> ƒ lutimesSync(length: 3) {},
        mkdir: <ref *50> ƒ mkdir(length: 3) {},
        mkdirSync: <ref *51> ƒ mkdirSync(length: 2) {},
        mkdtemp: <ref *52> ƒ mkdtemp(length: 3) {},
        mkdtempSync: <ref *53> ƒ mkdtempSync(length: 2) {},
        open: <ref *54> ƒ open(length: 4) {},
        openSync: <ref *55> ƒ openSync(length: 3) {},
        opendir: <ref *56> ƒ opendir(length: 3) {},
        opendirSync: <ref *57> ƒ opendirSync(length: 2) {},
        readdir: <ref *58> ƒ readdir(length: 3) {},
        readdirSync: <ref *59> ƒ readdirSync(length: 2) {},
        read: <ref *60> ƒ read(length: 6) {},
        readSync: <ref *61> ƒ readSync(length: 5) {},
        readv: <ref *62> ƒ readv(length: 4) {},
        readvSync: <ref *63> ƒ readvSync(length: 3) {},
        readFile: <ref *64> ƒ readFile(length: 3) {},
        readFileSync: <ref *65> ƒ readFileSync(length: 2) {},
        readlink: <ref *66> ƒ readlink(length: 3) {},
        readlinkSync: <ref *67> ƒ readlinkSync(length: 2) {},
        realpath: <ref *68> ƒ realpath(length: 3) {
            native: ƒ (length: 3) {}
        },
        realpathSync: <ref *70> ƒ realpathSync(length: 2) {
            native: ƒ (length: 2) {}
        },
        rename: <ref *72> ƒ rename(length: 3) {},
        renameSync: <ref *73> ƒ renameSync(length: 2) {},
        rm: <ref *74> ƒ rm(length: 3) {},
        rmSync: <ref *75> ƒ rmSync(length: 2) {},
        rmdir: <ref *76> ƒ rmdir(length: 3) {},
        rmdirSync: <ref *77> ƒ rmdirSync(length: 2) {},
        stat: <ref *78> ƒ stat(length: 1) {},
        statfs: <ref *79> ƒ statfs(length: 1) {},
        statSync: <ref *80> ƒ statSync(length: 1) {},
        statfsSync: <ref *81> ƒ statfsSync(length: 1) {},
        symlink: <ref *82> ƒ symlink(length: 4) {},
        symlinkSync: <ref *83> ƒ symlinkSync(length: 3) {},
        truncate: <ref *84> ƒ truncate(length: 3) {},
        truncateSync: <ref *85> ƒ truncateSync(length: 2) {},
        unwatchFile: <ref *86> ƒ unwatchFile(length: 2) {},
        unlink: <ref *87> ƒ unlink(length: 2) {},
        unlinkSync: <ref *88> ƒ unlinkSync(length: 1) {},
        utimes: <ref *89> ƒ utimes(length: 4) {},
        utimesSync: <ref *90> ƒ utimesSync(length: 3) {},
        watch: <ref *91> ƒ watch(length: 3) {},
        watchFile: <ref *92> ƒ watchFile(length: 3) {},
        writeFile: <ref *93> ƒ writeFile(length: 4) {},
        writeFileSync: <ref *94> ƒ writeFileSync(length: 3) {},
        write: <ref *95> ƒ write(length: 6) {},
        writeSync: <ref *96> ƒ writeSync(length: 5) {},
        writev: <ref *97> ƒ writev(length: 4) {},
        writevSync: <ref *98> ƒ writevSync(length: 3) {},
        Dir: [Circular: *2],
        Dirent: [Circular: *3],
        Stats: [Circular: *6],
        [get/set] ReadStream: [Circular: *4],
        [get/set] WriteStream: [Circular: *5],
        [get/set] FileReadStream: [Circular: *4],
        [get/set] FileWriteStream: [Circular: *5],
        _toUnixTimestamp: [Circular: *7],
        F_OK: 0,
        R_OK: 4,
        W_OK: 2,
        X_OK: 1,
        constants: [Circular: *18],
        [get/set] promises: <ref *99> {
            access: async ƒ access(length: 1) {},
            copyFile: async ƒ copyFile(length: 3) {},
            cp: async ƒ cp(length: 3) {},
            open: async ƒ open(length: 3) {},
            opendir: ƒ opendir(length: 3) {},
            rename: async ƒ rename(length: 2) {},
            truncate: async ƒ truncate(length: 1) {},
            rm: async ƒ rm(length: 2) {},
            rmdir: async ƒ rmdir(length: 2) {},
            mkdir: async ƒ mkdir(length: 2) {},
            readdir: async ƒ readdir(length: 2) {},
            readlink: async ƒ readlink(length: 2) {},
            symlink: async ƒ symlink(length: 3) {},
            lstat: async ƒ lstat(length: 1) {},
            stat: async ƒ stat(length: 1) {},
            statfs: async ƒ statfs(length: 1) {},
            link: async ƒ link(length: 2) {},
            unlink: async ƒ unlink(length: 1) {},
            chmod: async ƒ chmod(length: 2) {},
            lchmod: async ƒ lchmod(length: 2) {},
            lchown: async ƒ lchown(length: 3) {},
            chown: async ƒ chown(length: 3) {},
            utimes: async ƒ utimes(length: 3) {},
            lutimes: async ƒ lutimes(length: 3) {},
            realpath: async ƒ realpath(length: 2) {},
            mkdtemp: async ƒ mkdtemp(length: 2) {},
            writeFile: async ƒ writeFile(length: 3) {},
            appendFile: async ƒ appendFile(length: 3) {},
            readFile: async ƒ readFile(length: 2) {},
            watch: async ƒ watch(length: 1) {},
            constants: [Circular: *18]
        }
    },
    exists: [Circular: *26],
    existsSync: [Circular: *27],
    fchmod: [Circular: *30],
    fchmodSync: [Circular: *31],
    fchown: [Circular: *28],
    fchownSync: [Circular: *29],
    fdatasync: [Circular: *32],
    fdatasyncSync: [Circular: *33],
    fstat: [Circular: *34],
    fstatSync: [Circular: *35],
    fsync: [Circular: *36],
    fsyncSync: [Circular: *37],
    ftruncate: [Circular: *38],
    ftruncateSync: [Circular: *39],
    futimes: [Circular: *40],
    futimesSync: [Circular: *41],
    lchmod: undefined,
    lchmodSync: undefined,
    lchown: [Circular: *42],
    lchownSync: [Circular: *43],
    link: [Circular: *44],
    linkSync: [Circular: *45],
    lstat: [Circular: *46],
    lstatSync: [Circular: *47],
    lutimes: [Circular: *48],
    lutimesSync: [Circular: *49],
    mkdir: [Circular: *50],
    mkdirSync: [Circular: *51],
    mkdtemp: [Circular: *52],
    mkdtempSync: [Circular: *53],
    open: [Circular: *54],
    openSync: [Circular: *55],
    opendir: [Circular: *56],
    opendirSync: [Circular: *57],
    promises: [Circular: *99],
    read: [Circular: *60],
    readFile: [Circular: *64],
    readFileSync: [Circular: *65],
    readSync: [Circular: *61],
    readdir: [Circular: *58],
    readdirSync: [Circular: *59],
    readlink: [Circular: *66],
    readlinkSync: [Circular: *67],
    readv: [Circular: *62],
    readvSync: [Circular: *63],
    realpath: [Circular: *68],
    realpathSync: [Circular: *70],
    rename: [Circular: *72],
    renameSync: [Circular: *73],
    rm: [Circular: *74],
    rmSync: [Circular: *75],
    rmdir: [Circular: *76],
    rmdirSync: [Circular: *77],
    stat: [Circular: *78],
    statSync: [Circular: *80],
    statfs: [Circular: *79],
    statfsSync: [Circular: *81],
    symlink: [Circular: *82],
    symlinkSync: [Circular: *83],
    truncate: [Circular: *84],
    truncateSync: [Circular: *85],
    unlink: [Circular: *87],
    unlinkSync: [Circular: *88],
    unwatchFile: [Circular: *86],
    utimes: [Circular: *89],
    utimesSync: [Circular: *90],
    watch: [Circular: *91],
    watchFile: [Circular: *92],
    write: [Circular: *95],
    writeFile: [Circular: *93],
    writeFileSync: [Circular: *94],
    writeSync: [Circular: *96],
    writev: [Circular: *97],
    writevSync: [Circular: *98]
}
```

</td><td valign="top">

```js
{
    access: ƒ access2(length: 0) {},
    accessSync: ƒ bound accessSync(length: 2) {},
    appendFile: ƒ appendFile2(length: 0) {},
    appendFileSync: ƒ bound appendFileSync(length: 3) {},
    chmod: ƒ chmod2(length: 0) {},
    chmodSync: ƒ bound chmodSync(length: 2) {},
    chown: ƒ chown2(length: 0) {},
    chownSync: ƒ bound chownSync(length: 3) {},
    close: ƒ close2(length: 0) {},
    closeSync: ƒ bound closeSync(length: 1) {},
    constants: <ref *12> {
        F_OK: 0,
        R_OK: 4,
        W_OK: 2,
        X_OK: 1,
        COPYFILE_EXCL: 2,
        COPYFILE_FICLONE: 4,
        COPYFILE_FICLONE_FORCE: 16,
        O_RDONLY: 0,
        O_WRONLY: 1,
        O_RDWR: 2,
        O_CREAT: 64,
        O_EXCL: 128,
        O_NOCTTY: 256,
        O_TRUNC: 512,
        O_APPEND: 1024,
        O_DIRECTORY: 65536,
        O_NOATIME: 262144,
        O_NOFOLLOW: 131072,
        O_SYNC: 1052672,
        O_DSYNC: 4096,
        O_SYMLINK: 0,
        O_DIRECT: 16384,
        O_NONBLOCK: 2048,
        S_IFMT: 61440,
        S_IFREG: 32768,
        S_IFDIR: 16384,
        S_IFCHR: 8192,
        S_IFBLK: 24576,
        S_IFIFO: 4096,
        S_IFLNK: 40960,
        S_IFSOCK: 49152,
        S_IRWXU: 448,
        S_IRUSR: 256,
        S_IWUSR: 128,
        S_IXUSR: 64,
        S_IRWXG: 56,
        S_IRGRP: 32,
        S_IWGRP: 16,
        S_IXGRP: 8,
        S_IRWXO: 7,
        S_IROTH: 4,
        S_IWOTH: 2,
        S_IXOTH: 1,
        UV_FS_O_FILEMAP: 49152
    },
    copyFile: ƒ copyFile2(length: 0) {},
    copyFileSync: ƒ bound copyFileSync(length: 3) {},
    createReadStream: ƒ createReadStream(length: 2) {},
    createWriteStream: ƒ createWriteStream(length: 2) {},
    Dirent: ƒ Dirent(length: 0) {},
    exists: ƒ exists2(length: 0) {},
    existsSync: ƒ bound existsSync(length: 1) {},
    fchmod: ƒ fchmod2(length: 0) {},
    fchmodSync: ƒ bound fchmodSync(length: 2) {},
    fchown: ƒ fchown2(length: 0) {},
    fchownSync: ƒ bound fchownSync(length: 3) {},
    fstat: ƒ fstat2(length: 0) {},
    fstatSync: ƒ bound fstatSync(length: 1) {},
    fsync: ƒ fsync2(length: 0) {},
    fsyncSync: ƒ bound fsyncSync(length: 1) {},
    ftruncate: ƒ ftruncate2(length: 0) {},
    ftruncateSync: ƒ bound ftruncateSync(length: 1) {},
    futimes: ƒ futimes2(length: 0) {},
    futimesSync: ƒ bound futimesSync(length: 3) {},
    lchmod: ƒ lchmod2(length: 0) {},
    lchmodSync: ƒ bound lchmodSync(length: 2) {},
    lchown: ƒ lchown2(length: 0) {},
    lchownSync: ƒ bound lchownSync(length: 3) {},
    link: ƒ link2(length: 0) {},
    linkSync: ƒ bound linkSync(length: 2) {},
    lstat: ƒ lstat2(length: 0) {},
    lstatSync: ƒ bound lstatSync(length: 1) {},
    lutimes: ƒ lutimes2(length: 0) {},
    lutimesSync: ƒ bound lutimesSync(length: 3) {},
    mkdir: ƒ mkdir2(length: 0) {},
    mkdirSync: ƒ bound mkdirSync(length: 2) {},
    mkdtemp: ƒ mkdtemp2(length: 0) {},
    mkdtempSync: ƒ bound mkdtempSync(length: 2) {},
    open: ƒ open2(length: 0) {},
    openSync: ƒ bound openSync(length: 3) {},
    promises: {
        access: async ƒ (length: 0) {},
        appendFile: async ƒ (length: 0) {},
        close: async ƒ (length: 0) {},
        copyFile: async ƒ (length: 0) {},
        exists: async ƒ (length: 0) {},
        chown: async ƒ (length: 0) {},
        chmod: async ƒ (length: 0) {},
        fchmod: async ƒ (length: 0) {},
        fchown: async ƒ (length: 0) {},
        fstat: async ƒ (length: 0) {},
        fsync: async ƒ (length: 0) {},
        ftruncate: async ƒ (length: 0) {},
        futimes: async ƒ (length: 0) {},
        lchmod: async ƒ (length: 0) {},
        lchown: async ƒ (length: 0) {},
        link: async ƒ (length: 0) {},
        lstat: async ƒ (length: 0) {},
        mkdir: async ƒ (length: 0) {},
        mkdtemp: async ƒ (length: 0) {},
        open: async ƒ (length: 0) {},
        read: async ƒ (length: 0) {},
        write: async ƒ (length: 0) {},
        readdir: async ƒ (length: 0) {},
        readFile: async ƒ (length: 0) {},
        writeFile: async ƒ (length: 0) {},
        readlink: async ƒ (length: 0) {},
        realpath: async ƒ (length: 0) {},
        rename: async ƒ (length: 0) {},
        stat: async ƒ (length: 0) {},
        symlink: async ƒ (length: 0) {},
        truncate: async ƒ (length: 0) {},
        unlink: async ƒ (length: 0) {},
        utimes: async ƒ (length: 0) {},
        lutimes: async ƒ (length: 0) {},
        rm: async ƒ (length: 0) {},
        rmdir: async ƒ (length: 0) {},
        constants: [Circular: *12],
        Symbol(CommonJS): 0
    },
    read: ƒ read2(length: 0) {},
    readFile: ƒ readFile2(length: 0) {},
    readFileSync: ƒ bound readFileSync(length: 2) {},
    readSync: ƒ bound readSync(length: 5) {},
    readdir: ƒ readdir2(length: 0) {},
    readdirSync: ƒ bound readdirSync(length: 2) {},
    readlink: ƒ readlink2(length: 0) {},
    readlinkSync: ƒ bound readlinkSync(length: 2) {},
    realpath: <ref *93> ƒ realpath2(length: 0) {
        native: [Circular: *93]
    },
    realpathSync: <ref *94> ƒ bound realpathSync(length: 2) {
        native: [Circular: *94]
    },
    rename: ƒ rename2(length: 0) {},
    renameSync: ƒ bound renameSync(length: 2) {},
    rm: ƒ rm2(length: 0) {},
    rmSync: ƒ bound rmSync(length: 2) {},
    rmdir: ƒ rmdir2(length: 0) {},
    rmdirSync: ƒ bound rmdirSync(length: 2) {},
    stat: ƒ stat2(length: 0) {},
    statSync: ƒ bound statSync(length: 1) {},
    Stats: ƒ Stats(length: 0) {},
    symlink: ƒ symlink2(length: 0) {},
    symlinkSync: ƒ bound symlinkSync(length: 3) {},
    truncate: ƒ truncate2(length: 0) {},
    truncateSync: ƒ bound truncateSync(length: 2) {},
    unlink: ƒ unlink2(length: 0) {},
    unlinkSync: ƒ bound unlinkSync(length: 1) {},
    utimes: ƒ utimes2(length: 0) {},
    utimesSync: ƒ bound utimesSync(length: 3) {},
    write: ƒ write2(length: 0) {},
    writeFile: ƒ writeFile2(length: 0) {},
    writeFileSync: ƒ bound writeFileSync(length: 3) {},
    writeSync: ƒ bound writeSync(length: 5) {},
    WriteStream: ƒ WriteStream(length: 1) {},
    ReadStream: ƒ ReadStream(length: 2) {},
    Symbol(CommonJS): 0,
    Symbol(::bunternal::): {
        ReadStreamClass: class ReadStream2 extends NativeReadable {},
        WriteStreamClass: class WriteStream2 extends NativeWritable {}
    }
}
```

</td></tr></table>

## fs/promises

<table><tr><th>Node.js</th><th>Bun</th></tr><tr><td valign="top">

```js
[Object: null prototype] {
    access: <ref *2> async ƒ access(length: 1) {},
    appendFile: <ref *3> async ƒ appendFile(length: 3) {},
    chmod: <ref *4> async ƒ chmod(length: 2) {},
    chown: <ref *5> async ƒ chown(length: 3) {},
    constants: <ref *6> [Object: null prototype] {
        UV_FS_SYMLINK_DIR: 1,
        UV_FS_SYMLINK_JUNCTION: 2,
        O_RDONLY: 0,
        O_WRONLY: 1,
        O_RDWR: 2,
        UV_DIRENT_UNKNOWN: 0,
        UV_DIRENT_FILE: 1,
        UV_DIRENT_DIR: 2,
        UV_DIRENT_LINK: 3,
        UV_DIRENT_FIFO: 4,
        UV_DIRENT_SOCKET: 5,
        UV_DIRENT_CHAR: 6,
        UV_DIRENT_BLOCK: 7,
        S_IFMT: 61440,
        S_IFREG: 32768,
        S_IFDIR: 16384,
        S_IFCHR: 8192,
        S_IFBLK: 24576,
        S_IFIFO: 4096,
        S_IFLNK: 40960,
        S_IFSOCK: 49152,
        O_CREAT: 64,
        O_EXCL: 128,
        UV_FS_O_FILEMAP: 0,
        O_NOCTTY: 256,
        O_TRUNC: 512,
        O_APPEND: 1024,
        O_DIRECTORY: 65536,
        O_NOATIME: 262144,
        O_NOFOLLOW: 131072,
        O_SYNC: 1052672,
        O_DSYNC: 4096,
        O_DIRECT: 16384,
        O_NONBLOCK: 2048,
        S_IRWXU: 448,
        S_IRUSR: 256,
        S_IWUSR: 128,
        S_IXUSR: 64,
        S_IRWXG: 56,
        S_IRGRP: 32,
        S_IWGRP: 16,
        S_IXGRP: 8,
        S_IRWXO: 7,
        S_IROTH: 4,
        S_IWOTH: 2,
        S_IXOTH: 1,
        F_OK: 0,
        R_OK: 4,
        W_OK: 2,
        X_OK: 1,
        UV_FS_COPYFILE_EXCL: 1,
        COPYFILE_EXCL: 1,
        UV_FS_COPYFILE_FICLONE: 2,
        COPYFILE_FICLONE: 2,
        UV_FS_COPYFILE_FICLONE_FORCE: 4,
        COPYFILE_FICLONE_FORCE: 4
    },
    copyFile: <ref *7> async ƒ copyFile(length: 3) {},
    cp: <ref *8> async ƒ cp(length: 3) {},
    default: {
        access: [Circular: *2],
        copyFile: [Circular: *7],
        cp: [Circular: *8],
        open: <ref *10> async ƒ open(length: 3) {},
        opendir: <ref *11> ƒ opendir(length: 3) {},
        rename: <ref *12> async ƒ rename(length: 2) {},
        truncate: <ref *13> async ƒ truncate(length: 1) {},
        rm: <ref *14> async ƒ rm(length: 2) {},
        rmdir: <ref *15> async ƒ rmdir(length: 2) {},
        mkdir: <ref *16> async ƒ mkdir(length: 2) {},
        readdir: <ref *17> async ƒ readdir(length: 2) {},
        readlink: <ref *18> async ƒ readlink(length: 2) {},
        symlink: <ref *19> async ƒ symlink(length: 3) {},
        lstat: <ref *20> async ƒ lstat(length: 1) {},
        stat: <ref *21> async ƒ stat(length: 1) {},
        statfs: <ref *22> async ƒ statfs(length: 1) {},
        link: <ref *23> async ƒ link(length: 2) {},
        unlink: <ref *24> async ƒ unlink(length: 1) {},
        chmod: [Circular: *4],
        lchmod: <ref *25> async ƒ lchmod(length: 2) {},
        lchown: <ref *26> async ƒ lchown(length: 3) {},
        chown: [Circular: *5],
        utimes: <ref *27> async ƒ utimes(length: 3) {},
        lutimes: <ref *28> async ƒ lutimes(length: 3) {},
        realpath: <ref *29> async ƒ realpath(length: 2) {},
        mkdtemp: <ref *30> async ƒ mkdtemp(length: 2) {},
        writeFile: <ref *31> async ƒ writeFile(length: 3) {},
        appendFile: [Circular: *3],
        readFile: <ref *32> async ƒ readFile(length: 2) {},
        watch: <ref *33> async ƒ watch(length: 1) {},
        constants: [Circular: *6]
    },
    lchmod: [Circular: *25],
    lchown: [Circular: *26],
    link: [Circular: *23],
    lstat: [Circular: *20],
    lutimes: [Circular: *28],
    mkdir: [Circular: *16],
    mkdtemp: [Circular: *30],
    open: [Circular: *10],
    opendir: [Circular: *11],
    readFile: [Circular: *32],
    readdir: [Circular: *17],
    readlink: [Circular: *18],
    realpath: [Circular: *29],
    rename: [Circular: *12],
    rm: [Circular: *14],
    rmdir: [Circular: *15],
    stat: [Circular: *21],
    statfs: [Circular: *22],
    symlink: [Circular: *19],
    truncate: [Circular: *13],
    unlink: [Circular: *24],
    utimes: [Circular: *27],
    watch: [Circular: *33],
    writeFile: [Circular: *31]
}
```

</td><td valign="top">

```js
{
    access: async ƒ (length: 0) {},
    appendFile: async ƒ (length: 0) {},
    close: async ƒ (length: 0) {},
    copyFile: async ƒ (length: 0) {},
    exists: async ƒ (length: 0) {},
    chown: async ƒ (length: 0) {},
    chmod: async ƒ (length: 0) {},
    fchmod: async ƒ (length: 0) {},
    fchown: async ƒ (length: 0) {},
    fstat: async ƒ (length: 0) {},
    fsync: async ƒ (length: 0) {},
    ftruncate: async ƒ (length: 0) {},
    futimes: async ƒ (length: 0) {},
    lchmod: async ƒ (length: 0) {},
    lchown: async ƒ (length: 0) {},
    link: async ƒ (length: 0) {},
    lstat: async ƒ (length: 0) {},
    mkdir: async ƒ (length: 0) {},
    mkdtemp: async ƒ (length: 0) {},
    open: async ƒ (length: 0) {},
    read: async ƒ (length: 0) {},
    write: async ƒ (length: 0) {},
    readdir: async ƒ (length: 0) {},
    readFile: async ƒ (length: 0) {},
    writeFile: async ƒ (length: 0) {},
    readlink: async ƒ (length: 0) {},
    realpath: async ƒ (length: 0) {},
    rename: async ƒ (length: 0) {},
    stat: async ƒ (length: 0) {},
    symlink: async ƒ (length: 0) {},
    truncate: async ƒ (length: 0) {},
    unlink: async ƒ (length: 0) {},
    utimes: async ƒ (length: 0) {},
    lutimes: async ƒ (length: 0) {},
    rm: async ƒ (length: 0) {},
    rmdir: async ƒ (length: 0) {},
    constants: {
        F_OK: 0,
        R_OK: 4,
        W_OK: 2,
        X_OK: 1,
        COPYFILE_EXCL: 2,
        COPYFILE_FICLONE: 4,
        COPYFILE_FICLONE_FORCE: 16,
        O_RDONLY: 0,
        O_WRONLY: 1,
        O_RDWR: 2,
        O_CREAT: 64,
        O_EXCL: 128,
        O_NOCTTY: 256,
        O_TRUNC: 512,
        O_APPEND: 1024,
        O_DIRECTORY: 65536,
        O_NOATIME: 262144,
        O_NOFOLLOW: 131072,
        O_SYNC: 1052672,
        O_DSYNC: 4096,
        O_SYMLINK: 0,
        O_DIRECT: 16384,
        O_NONBLOCK: 2048,
        S_IFMT: 61440,
        S_IFREG: 32768,
        S_IFDIR: 16384,
        S_IFCHR: 8192,
        S_IFBLK: 24576,
        S_IFIFO: 4096,
        S_IFLNK: 40960,
        S_IFSOCK: 49152,
        S_IRWXU: 448,
        S_IRUSR: 256,
        S_IWUSR: 128,
        S_IXUSR: 64,
        S_IRWXG: 56,
        S_IRGRP: 32,
        S_IWGRP: 16,
        S_IXGRP: 8,
        S_IRWXO: 7,
        S_IROTH: 4,
        S_IWOTH: 2,
        S_IXOTH: 1,
        UV_FS_O_FILEMAP: 49152
    },
    Symbol(CommonJS): 0
}
```

</td></tr></table>

## http

<table><tr><th>Node.js</th><th>Bun</th></tr><tr><td valign="top">

```js
[Object: null prototype] {
    Agent: <ref *2> ƒ Agent(length: 1) {
        defaultMaxSockets: Infinity
    },
    ClientRequest: <ref *3> ƒ ClientRequest(length: 3) {},
    IncomingMessage: <ref *4> ƒ IncomingMessage(length: 1) {},
    METHODS: <ref *5> [
        "ACL",
        "BIND",
        "CHECKOUT",
        "CONNECT",
        "COPY",
        "DELETE",
        "GET",
        "HEAD",
        "LINK",
        "LOCK",
        "M-SEARCH",
        "MERGE",
        "MKACTIVITY",
        "MKCALENDAR",
        "MKCOL",
        "MOVE",
        "NOTIFY",
        "OPTIONS",
        "PATCH",
        "POST",
        "PROPFIND",
        "PROPPATCH",
        "PURGE",
        "PUT",
        "REBIND",
        "REPORT",
        "SEARCH",
        "SOURCE",
        "SUBSCRIBE",
        "TRACE",
        "UNBIND",
        "UNLINK",
        "UNLOCK",
        "UNSUBSCRIBE"
    ],
    OutgoingMessage: <ref *6> ƒ OutgoingMessage(length: 0) {},
    STATUS_CODES: <ref *7> {
        100: "Continue",
        101: "Switching Protocols",
        102: "Processing",
        103: "Early Hints",
        200: "OK",
        201: "Created",
        202: "Accepted",
        203: "Non-Authoritative Information",
        204: "No Content",
        205: "Reset Content",
        206: "Partial Content",
        207: "Multi-Status",
        208: "Already Reported",
        226: "IM Used",
        300: "Multiple Choices",
        301: "Moved Permanently",
        302: "Found",
        303: "See Other",
        304: "Not Modified",
        305: "Use Proxy",
        307: "Temporary Redirect",
        308: "Permanent Redirect",
        400: "Bad Request",
        401: "Unauthorized",
        402: "Payment Required",
        403: "Forbidden",
        404: "Not Found",
        405: "Method Not Allowed",
        406: "Not Acceptable",
        407: "Proxy Authentication Required",
        408: "Request Timeout",
        409: "Conflict",
        410: "Gone",
        411: "Length Required",
        412: "Precondition Failed",
        413: "Payload Too Large",
        414: "URI Too Long",
        415: "Unsupported Media Type",
        416: "Range Not Satisfiable",
        417: "Expectation Failed",
        418: "I'm a Teapot",
        421: "Misdirected Request",
        422: "Unprocessable Entity",
        423: "Locked",
        424: "Failed Dependency",
        425: "Too Early",
        426: "Upgrade Required",
        428: "Precondition Required",
        429: "Too Many Requests",
        431: "Request Header Fields Too Large",
        451: "Unavailable For Legal Reasons",
        500: "Internal Server Error",
        501: "Not Implemented",
        502: "Bad Gateway",
        503: "Service Unavailable",
        504: "Gateway Timeout",
        505: "HTTP Version Not Supported",
        506: "Variant Also Negotiates",
        507: "Insufficient Storage",
        508: "Loop Detected",
        509: "Bandwidth Limit Exceeded",
        510: "Not Extended",
        511: "Network Authentication Required"
    },
    Server: <ref *8> ƒ Server(length: 2) {},
    ServerResponse: <ref *9> ƒ ServerResponse(length: 1) {},
    _connectionListener: <ref *10> ƒ connectionListener(length: 1) {},
    createServer: <ref *11> ƒ createServer(length: 2) {},
    default: {
        _connectionListener: [Circular: *10],
        METHODS: [Circular: *5],
        STATUS_CODES: [Circular: *7],
        Agent: [Circular: *2],
        ClientRequest: [Circular: *3],
        IncomingMessage: [Circular: *4],
        OutgoingMessage: [Circular: *6],
        Server: [Circular: *8],
        ServerResponse: [Circular: *9],
        createServer: [Circular: *11],
        validateHeaderName: <ref *13> ƒ __node_internal_(length: 2) {},
        validateHeaderValue: <ref *14> ƒ __node_internal_(length: 2) {},
        get: <ref *15> ƒ get(length: 3) {},
        request: <ref *16> ƒ request(length: 3) {},
        setMaxIdleHTTPParsers: <ref *17> ƒ setMaxIdleHTTPParsers(length: 1) {},
        [get/set] maxHeaderSize: 16384,
        [get/set] globalAgent: <ref *18> Agent {
            _events: [Object: null prototype] {
                free: ƒ (length: 2) {},
                newListener: ƒ maybeEnableKeylog(length: 1) {}
            },
            _eventsCount: 2,
            _maxListeners: undefined,
            defaultPort: 80,
            protocol: "http:",
            options: [Object: null prototype] {
                noDelay: true,
                path: null
            },
            requests: [Object: null prototype] {},
            sockets: [Object: null prototype] {},
            freeSockets: [Object: null prototype] {},
            keepAliveMsecs: 1000,
            keepAlive: false,
            maxSockets: Infinity,
            maxFreeSockets: 256,
            scheduling: "lifo",
            maxTotalSockets: Infinity,
            totalSocketCount: 0,
            Symbol(kCapture): false
        }
    },
    get: [Circular: *15],
    globalAgent: [Circular: *18],
    maxHeaderSize: 16384,
    request: [Circular: *16],
    setMaxIdleHTTPParsers: [Circular: *17],
    validateHeaderName: [Circular: *13],
    validateHeaderValue: [Circular: *14]
}
```

</td><td valign="top">

```js
{
    Agent: class Agent extends EventEmitter {},
    Server: class Server extends EventEmitter {},
    METHODS: [
        "ACL",
        "BIND",
        "CHECKOUT",
        "CONNECT",
        "COPY",
        "DELETE",
        "GET",
        "HEAD",
        "LINK",
        "LOCK",
        "M-SEARCH",
        "MERGE",
        "MKACTIVITY",
        "MKCALENDAR",
        "MKCOL",
        "MOVE",
        "NOTIFY",
        "OPTIONS",
        "PATCH",
        "POST",
        "PROPFIND",
        "PROPPATCH",
        "PURGE",
        "PUT",
        "REBIND",
        "REPORT",
        "SEARCH",
        "SOURCE",
        "SUBSCRIBE",
        "TRACE",
        "UNBIND",
        "UNLINK",
        "UNLOCK",
        "UNSUBSCRIBE"
    ],
    STATUS_CODES: {
        100: "Continue",
        101: "Switching Protocols",
        102: "Processing",
        103: "Early Hints",
        200: "OK",
        201: "Created",
        202: "Accepted",
        203: "Non-Authoritative Information",
        204: "No Content",
        205: "Reset Content",
        206: "Partial Content",
        207: "Multi-Status",
        208: "Already Reported",
        226: "IM Used",
        300: "Multiple Choices",
        301: "Moved Permanently",
        302: "Found",
        303: "See Other",
        304: "Not Modified",
        305: "Use Proxy",
        307: "Temporary Redirect",
        308: "Permanent Redirect",
        400: "Bad Request",
        401: "Unauthorized",
        402: "Payment Required",
        403: "Forbidden",
        404: "Not Found",
        405: "Method Not Allowed",
        406: "Not Acceptable",
        407: "Proxy Authentication Required",
        408: "Request Timeout",
        409: "Conflict",
        410: "Gone",
        411: "Length Required",
        412: "Precondition Failed",
        413: "Payload Too Large",
        414: "URI Too Long",
        415: "Unsupported Media Type",
        416: "Range Not Satisfiable",
        417: "Expectation Failed",
        418: "I'm a Teapot",
        421: "Misdirected Request",
        422: "Unprocessable Entity",
        423: "Locked",
        424: "Failed Dependency",
        425: "Too Early",
        426: "Upgrade Required",
        428: "Precondition Required",
        429: "Too Many Requests",
        431: "Request Header Fields Too Large",
        451: "Unavailable For Legal Reasons",
        500: "Internal Server Error",
        501: "Not Implemented",
        502: "Bad Gateway",
        503: "Service Unavailable",
        504: "Gateway Timeout",
        505: "HTTP Version Not Supported",
        506: "Variant Also Negotiates",
        507: "Insufficient Storage",
        508: "Loop Detected",
        509: "Bandwidth Limit Exceeded",
        510: "Not Extended",
        511: "Network Authentication Required"
    },
    createServer: ƒ createServer(length: 2) {},
    ServerResponse: class ServerResponse extends Writable {},
    IncomingMessage: class IncomingMessage extends Readable {},
    request: ƒ request(length: 3) {},
    get: ƒ get(length: 3) {},
    maxHeaderSize: 16384,
    setMaxIdleHTTPParsers: ƒ setMaxIdleHTTPParsers(length: 1) {},
    [get/set] globalAgent: Agent {
        _events: [Object: null prototype] {},
        _eventsCount: 0,
        _maxListeners: undefined,
        Symbol(kCapture): false
    },
    Symbol(CommonJS): 0
}
```

</td></tr></table>

## http2

<table><tr><th>Node.js</th><th>Bun</th></tr><tr><td valign="top">

```js
[Object: null prototype] {
    Http2ServerRequest: <ref *2> class Http2ServerRequest extends Readable {},
    Http2ServerResponse: <ref *3> class Http2ServerResponse extends Stream {},
    connect: <ref *4> ƒ connect(length: 3) {},
    constants: <ref *5> {
        NGHTTP2_ERR_FRAME_SIZE_ERROR: -522,
        NGHTTP2_SESSION_SERVER: 0,
        NGHTTP2_SESSION_CLIENT: 1,
        NGHTTP2_STREAM_STATE_IDLE: 1,
        NGHTTP2_STREAM_STATE_OPEN: 2,
        NGHTTP2_STREAM_STATE_RESERVED_LOCAL: 3,
        NGHTTP2_STREAM_STATE_RESERVED_REMOTE: 4,
        NGHTTP2_STREAM_STATE_HALF_CLOSED_LOCAL: 5,
        NGHTTP2_STREAM_STATE_HALF_CLOSED_REMOTE: 6,
        NGHTTP2_STREAM_STATE_CLOSED: 7,
        NGHTTP2_FLAG_NONE: 0,
        NGHTTP2_FLAG_END_STREAM: 1,
        NGHTTP2_FLAG_END_HEADERS: 4,
        NGHTTP2_FLAG_ACK: 1,
        NGHTTP2_FLAG_PADDED: 8,
        NGHTTP2_FLAG_PRIORITY: 32,
        DEFAULT_SETTINGS_HEADER_TABLE_SIZE: 4096,
        DEFAULT_SETTINGS_ENABLE_PUSH: 1,
        DEFAULT_SETTINGS_MAX_CONCURRENT_STREAMS: 4294967295,
        DEFAULT_SETTINGS_INITIAL_WINDOW_SIZE: 65535,
        DEFAULT_SETTINGS_MAX_FRAME_SIZE: 16384,
        DEFAULT_SETTINGS_MAX_HEADER_LIST_SIZE: 65535,
        DEFAULT_SETTINGS_ENABLE_CONNECT_PROTOCOL: 0,
        MAX_MAX_FRAME_SIZE: 16777215,
        MIN_MAX_FRAME_SIZE: 16384,
        MAX_INITIAL_WINDOW_SIZE: 2147483647,
        NGHTTP2_SETTINGS_HEADER_TABLE_SIZE: 1,
        NGHTTP2_SETTINGS_ENABLE_PUSH: 2,
        NGHTTP2_SETTINGS_MAX_CONCURRENT_STREAMS: 3,
        NGHTTP2_SETTINGS_INITIAL_WINDOW_SIZE: 4,
        NGHTTP2_SETTINGS_MAX_FRAME_SIZE: 5,
        NGHTTP2_SETTINGS_MAX_HEADER_LIST_SIZE: 6,
        NGHTTP2_SETTINGS_ENABLE_CONNECT_PROTOCOL: 8,
        PADDING_STRATEGY_NONE: 0,
        PADDING_STRATEGY_ALIGNED: 1,
        PADDING_STRATEGY_MAX: 2,
        PADDING_STRATEGY_CALLBACK: 1,
        NGHTTP2_NO_ERROR: 0,
        NGHTTP2_PROTOCOL_ERROR: 1,
        NGHTTP2_INTERNAL_ERROR: 2,
        NGHTTP2_FLOW_CONTROL_ERROR: 3,
        NGHTTP2_SETTINGS_TIMEOUT: 4,
        NGHTTP2_STREAM_CLOSED: 5,
        NGHTTP2_FRAME_SIZE_ERROR: 6,
        NGHTTP2_REFUSED_STREAM: 7,
        NGHTTP2_CANCEL: 8,
        NGHTTP2_COMPRESSION_ERROR: 9,
        NGHTTP2_CONNECT_ERROR: 10,
        NGHTTP2_ENHANCE_YOUR_CALM: 11,
        NGHTTP2_INADEQUATE_SECURITY: 12,
        NGHTTP2_HTTP_1_1_REQUIRED: 13,
        NGHTTP2_DEFAULT_WEIGHT: 16,
        HTTP2_HEADER_STATUS: ":status",
        HTTP2_HEADER_METHOD: ":method",
        HTTP2_HEADER_AUTHORITY: ":authority",
        HTTP2_HEADER_SCHEME: ":scheme",
        HTTP2_HEADER_PATH: ":path",
        HTTP2_HEADER_PROTOCOL: ":protocol",
        HTTP2_HEADER_ACCEPT_ENCODING: "accept-encoding",
        HTTP2_HEADER_ACCEPT_LANGUAGE: "accept-language",
        HTTP2_HEADER_ACCEPT_RANGES: "accept-ranges",
        HTTP2_HEADER_ACCEPT: "accept",
        HTTP2_HEADER_ACCESS_CONTROL_ALLOW_CREDENTIALS: "access-control-allow-credentials",
        HTTP2_HEADER_ACCESS_CONTROL_ALLOW_HEADERS: "access-control-allow-headers",
        HTTP2_HEADER_ACCESS_CONTROL_ALLOW_METHODS: "access-control-allow-methods",
        HTTP2_HEADER_ACCESS_CONTROL_ALLOW_ORIGIN: "access-control-allow-origin",
        HTTP2_HEADER_ACCESS_CONTROL_EXPOSE_HEADERS: "access-control-expose-headers",
        HTTP2_HEADER_ACCESS_CONTROL_REQUEST_HEADERS: "access-control-request-headers",
        HTTP2_HEADER_ACCESS_CONTROL_REQUEST_METHOD: "access-control-request-method",
        HTTP2_HEADER_AGE: "age",
        HTTP2_HEADER_AUTHORIZATION: "authorization",
        HTTP2_HEADER_CACHE_CONTROL: "cache-control",
        HTTP2_HEADER_CONNECTION: "connection",
        HTTP2_HEADER_CONTENT_DISPOSITION: "content-disposition",
        HTTP2_HEADER_CONTENT_ENCODING: "content-encoding",
        HTTP2_HEADER_CONTENT_LENGTH: "content-length",
        HTTP2_HEADER_CONTENT_TYPE: "content-type",
        HTTP2_HEADER_COOKIE: "cookie",
        HTTP2_HEADER_DATE: "date",
        HTTP2_HEADER_ETAG: "etag",
        HTTP2_HEADER_FORWARDED: "forwarded",
        HTTP2_HEADER_HOST: "host",
        HTTP2_HEADER_IF_MODIFIED_SINCE: "if-modified-since",
        HTTP2_HEADER_IF_NONE_MATCH: "if-none-match",
        HTTP2_HEADER_IF_RANGE: "if-range",
        HTTP2_HEADER_LAST_MODIFIED: "last-modified",
        HTTP2_HEADER_LINK: "link",
        HTTP2_HEADER_LOCATION: "location",
        HTTP2_HEADER_RANGE: "range",
        HTTP2_HEADER_REFERER: "referer",
        HTTP2_HEADER_SERVER: "server",
        HTTP2_HEADER_SET_COOKIE: "set-cookie",
        HTTP2_HEADER_STRICT_TRANSPORT_SECURITY: "strict-transport-security",
        HTTP2_HEADER_TRANSFER_ENCODING: "transfer-encoding",
        HTTP2_HEADER_TE: "te",
        HTTP2_HEADER_UPGRADE_INSECURE_REQUESTS: "upgrade-insecure-requests",
        HTTP2_HEADER_UPGRADE: "upgrade",
        HTTP2_HEADER_USER_AGENT: "user-agent",
        HTTP2_HEADER_VARY: "vary",
        HTTP2_HEADER_X_CONTENT_TYPE_OPTIONS: "x-content-type-options",
        HTTP2_HEADER_X_FRAME_OPTIONS: "x-frame-options",
        HTTP2_HEADER_KEEP_ALIVE: "keep-alive",
        HTTP2_HEADER_PROXY_CONNECTION: "proxy-connection",
        HTTP2_HEADER_X_XSS_PROTECTION: "x-xss-protection",
        HTTP2_HEADER_ALT_SVC: "alt-svc",
        HTTP2_HEADER_CONTENT_SECURITY_POLICY: "content-security-policy",
        HTTP2_HEADER_EARLY_DATA: "early-data",
        HTTP2_HEADER_EXPECT_CT: "expect-ct",
        HTTP2_HEADER_ORIGIN: "origin",
        HTTP2_HEADER_PURPOSE: "purpose",
        HTTP2_HEADER_TIMING_ALLOW_ORIGIN: "timing-allow-origin",
        HTTP2_HEADER_X_FORWARDED_FOR: "x-forwarded-for",
        HTTP2_HEADER_PRIORITY: "priority",
        HTTP2_HEADER_ACCEPT_CHARSET: "accept-charset",
        HTTP2_HEADER_ACCESS_CONTROL_MAX_AGE: "access-control-max-age",
        HTTP2_HEADER_ALLOW: "allow",
        HTTP2_HEADER_CONTENT_LANGUAGE: "content-language",
        HTTP2_HEADER_CONTENT_LOCATION: "content-location",
        HTTP2_HEADER_CONTENT_MD5: "content-md5",
        HTTP2_HEADER_CONTENT_RANGE: "content-range",
        HTTP2_HEADER_DNT: "dnt",
        HTTP2_HEADER_EXPECT: "expect",
        HTTP2_HEADER_EXPIRES: "expires",
        HTTP2_HEADER_FROM: "from",
        HTTP2_HEADER_IF_MATCH: "if-match",
        HTTP2_HEADER_IF_UNMODIFIED_SINCE: "if-unmodified-since",
        HTTP2_HEADER_MAX_FORWARDS: "max-forwards",
        HTTP2_HEADER_PREFER: "prefer",
        HTTP2_HEADER_PROXY_AUTHENTICATE: "proxy-authenticate",
        HTTP2_HEADER_PROXY_AUTHORIZATION: "proxy-authorization",
        HTTP2_HEADER_REFRESH: "refresh",
        HTTP2_HEADER_RETRY_AFTER: "retry-after",
        HTTP2_HEADER_TRAILER: "trailer",
        HTTP2_HEADER_TK: "tk",
        HTTP2_HEADER_VIA: "via",
        HTTP2_HEADER_WARNING: "warning",
        HTTP2_HEADER_WWW_AUTHENTICATE: "www-authenticate",
        HTTP2_HEADER_HTTP2_SETTINGS: "http2-settings",
        HTTP2_METHOD_ACL: "ACL",
        HTTP2_METHOD_BASELINE_CONTROL: "BASELINE-CONTROL",
        HTTP2_METHOD_BIND: "BIND",
        HTTP2_METHOD_CHECKIN: "CHECKIN",
        HTTP2_METHOD_CHECKOUT: "CHECKOUT",
        HTTP2_METHOD_CONNECT: "CONNECT",
        HTTP2_METHOD_COPY: "COPY",
        HTTP2_METHOD_DELETE: "DELETE",
        HTTP2_METHOD_GET: "GET",
        HTTP2_METHOD_HEAD: "HEAD",
        HTTP2_METHOD_LABEL: "LABEL",
        HTTP2_METHOD_LINK: "LINK",
        HTTP2_METHOD_LOCK: "LOCK",
        HTTP2_METHOD_MERGE: "MERGE",
        HTTP2_METHOD_MKACTIVITY: "MKACTIVITY",
        HTTP2_METHOD_MKCALENDAR: "MKCALENDAR",
        HTTP2_METHOD_MKCOL: "MKCOL",
        HTTP2_METHOD_MKREDIRECTREF: "MKREDIRECTREF",
        HTTP2_METHOD_MKWORKSPACE: "MKWORKSPACE",
        HTTP2_METHOD_MOVE: "MOVE",
        HTTP2_METHOD_OPTIONS: "OPTIONS",
        HTTP2_METHOD_ORDERPATCH: "ORDERPATCH",
        HTTP2_METHOD_PATCH: "PATCH",
        HTTP2_METHOD_POST: "POST",
        HTTP2_METHOD_PRI: "PRI",
        HTTP2_METHOD_PROPFIND: "PROPFIND",
        HTTP2_METHOD_PROPPATCH: "PROPPATCH",
        HTTP2_METHOD_PUT: "PUT",
        HTTP2_METHOD_REBIND: "REBIND",
        HTTP2_METHOD_REPORT: "REPORT",
        HTTP2_METHOD_SEARCH: "SEARCH",
        HTTP2_METHOD_TRACE: "TRACE",
        HTTP2_METHOD_UNBIND: "UNBIND",
        HTTP2_METHOD_UNCHECKOUT: "UNCHECKOUT",
        HTTP2_METHOD_UNLINK: "UNLINK",
        HTTP2_METHOD_UNLOCK: "UNLOCK",
        HTTP2_METHOD_UPDATE: "UPDATE",
        HTTP2_METHOD_UPDATEREDIRECTREF: "UPDATEREDIRECTREF",
        HTTP2_METHOD_VERSION_CONTROL: "VERSION-CONTROL",
        HTTP_STATUS_CONTINUE: 100,
        HTTP_STATUS_SWITCHING_PROTOCOLS: 101,
        HTTP_STATUS_PROCESSING: 102,
        HTTP_STATUS_EARLY_HINTS: 103,
        HTTP_STATUS_OK: 200,
        HTTP_STATUS_CREATED: 201,
        HTTP_STATUS_ACCEPTED: 202,
        HTTP_STATUS_NON_AUTHORITATIVE_INFORMATION: 203,
        HTTP_STATUS_NO_CONTENT: 204,
        HTTP_STATUS_RESET_CONTENT: 205,
        HTTP_STATUS_PARTIAL_CONTENT: 206,
        HTTP_STATUS_MULTI_STATUS: 207,
        HTTP_STATUS_ALREADY_REPORTED: 208,
        HTTP_STATUS_IM_USED: 226,
        HTTP_STATUS_MULTIPLE_CHOICES: 300,
        HTTP_STATUS_MOVED_PERMANENTLY: 301,
        HTTP_STATUS_FOUND: 302,
        HTTP_STATUS_SEE_OTHER: 303,
        HTTP_STATUS_NOT_MODIFIED: 304,
        HTTP_STATUS_USE_PROXY: 305,
        HTTP_STATUS_TEMPORARY_REDIRECT: 307,
        HTTP_STATUS_PERMANENT_REDIRECT: 308,
        HTTP_STATUS_BAD_REQUEST: 400,
        HTTP_STATUS_UNAUTHORIZED: 401,
        HTTP_STATUS_PAYMENT_REQUIRED: 402,
        HTTP_STATUS_FORBIDDEN: 403,
        HTTP_STATUS_NOT_FOUND: 404,
        HTTP_STATUS_METHOD_NOT_ALLOWED: 405,
        HTTP_STATUS_NOT_ACCEPTABLE: 406,
        HTTP_STATUS_PROXY_AUTHENTICATION_REQUIRED: 407,
        HTTP_STATUS_REQUEST_TIMEOUT: 408,
        HTTP_STATUS_CONFLICT: 409,
        HTTP_STATUS_GONE: 410,
        HTTP_STATUS_LENGTH_REQUIRED: 411,
        HTTP_STATUS_PRECONDITION_FAILED: 412,
        HTTP_STATUS_PAYLOAD_TOO_LARGE: 413,
        HTTP_STATUS_URI_TOO_LONG: 414,
        HTTP_STATUS_UNSUPPORTED_MEDIA_TYPE: 415,
        HTTP_STATUS_RANGE_NOT_SATISFIABLE: 416,
        HTTP_STATUS_EXPECTATION_FAILED: 417,
        HTTP_STATUS_TEAPOT: 418,
        HTTP_STATUS_MISDIRECTED_REQUEST: 421,
        HTTP_STATUS_UNPROCESSABLE_ENTITY: 422,
        HTTP_STATUS_LOCKED: 423,
        HTTP_STATUS_FAILED_DEPENDENCY: 424,
        HTTP_STATUS_TOO_EARLY: 425,
        HTTP_STATUS_UPGRADE_REQUIRED: 426,
        HTTP_STATUS_PRECONDITION_REQUIRED: 428,
        HTTP_STATUS_TOO_MANY_REQUESTS: 429,
        HTTP_STATUS_REQUEST_HEADER_FIELDS_TOO_LARGE: 431,
        HTTP_STATUS_UNAVAILABLE_FOR_LEGAL_REASONS: 451,
        HTTP_STATUS_INTERNAL_SERVER_ERROR: 500,
        HTTP_STATUS_NOT_IMPLEMENTED: 501,
        HTTP_STATUS_BAD_GATEWAY: 502,
        HTTP_STATUS_SERVICE_UNAVAILABLE: 503,
        HTTP_STATUS_GATEWAY_TIMEOUT: 504,
        HTTP_STATUS_HTTP_VERSION_NOT_SUPPORTED: 505,
        HTTP_STATUS_VARIANT_ALSO_NEGOTIATES: 506,
        HTTP_STATUS_INSUFFICIENT_STORAGE: 507,
        HTTP_STATUS_LOOP_DETECTED: 508,
        HTTP_STATUS_BANDWIDTH_LIMIT_EXCEEDED: 509,
        HTTP_STATUS_NOT_EXTENDED: 510,
        HTTP_STATUS_NETWORK_AUTHENTICATION_REQUIRED: 511
    },
    createSecureServer: <ref *6> ƒ createSecureServer(length: 2) {},
    createServer: <ref *7> ƒ createServer(length: 2) {},
    default: {
        connect: [Circular: *4],
        constants: [Circular: *5],
        createServer: [Circular: *7],
        createSecureServer: [Circular: *6],
        getDefaultSettings: <ref *9> ƒ getDefaultSettings(length: 0) {},
        getPackedSettings: <ref *10> ƒ getPackedSettings(length: 1) {},
        getUnpackedSettings: <ref *11> ƒ getUnpackedSettings(length: 1) {},
        sensitiveHeaders: Symbol(nodejs.http2.sensitiveHeaders),
        Http2ServerRequest: [Circular: *2],
        Http2ServerResponse: [Circular: *3]
    },
    getDefaultSettings: [Circular: *9],
    getPackedSettings: [Circular: *10],
    getUnpackedSettings: [Circular: *11],
    sensitiveHeaders: Symbol(nodejs.http2.sensitiveHeaders)
}
```

</td><td valign="top">

```js
{
    constants: {
        NGHTTP2_ERR_FRAME_SIZE_ERROR: -522,
        NGHTTP2_SESSION_SERVER: 0,
        NGHTTP2_SESSION_CLIENT: 1,
        NGHTTP2_STREAM_STATE_IDLE: 1,
        NGHTTP2_STREAM_STATE_OPEN: 2,
        NGHTTP2_STREAM_STATE_RESERVED_LOCAL: 3,
        NGHTTP2_STREAM_STATE_RESERVED_REMOTE: 4,
        NGHTTP2_STREAM_STATE_HALF_CLOSED_LOCAL: 5,
        NGHTTP2_STREAM_STATE_HALF_CLOSED_REMOTE: 6,
        NGHTTP2_STREAM_STATE_CLOSED: 7,
        NGHTTP2_FLAG_NONE: 0,
        NGHTTP2_FLAG_END_STREAM: 1,
        NGHTTP2_FLAG_END_HEADERS: 4,
        NGHTTP2_FLAG_ACK: 1,
        NGHTTP2_FLAG_PADDED: 8,
        NGHTTP2_FLAG_PRIORITY: 32,
        DEFAULT_SETTINGS_HEADER_TABLE_SIZE: 4096,
        DEFAULT_SETTINGS_ENABLE_PUSH: 1,
        DEFAULT_SETTINGS_MAX_CONCURRENT_STREAMS: 4294967295,
        DEFAULT_SETTINGS_INITIAL_WINDOW_SIZE: 65535,
        DEFAULT_SETTINGS_MAX_FRAME_SIZE: 16384,
        DEFAULT_SETTINGS_MAX_HEADER_LIST_SIZE: 65535,
        DEFAULT_SETTINGS_ENABLE_CONNECT_PROTOCOL: 0,
        MAX_MAX_FRAME_SIZE: 16777215,
        MIN_MAX_FRAME_SIZE: 16384,
        MAX_INITIAL_WINDOW_SIZE: 2147483647,
        NGHTTP2_SETTINGS_HEADER_TABLE_SIZE: 1,
        NGHTTP2_SETTINGS_ENABLE_PUSH: 2,
        NGHTTP2_SETTINGS_MAX_CONCURRENT_STREAMS: 3,
        NGHTTP2_SETTINGS_INITIAL_WINDOW_SIZE: 4,
        NGHTTP2_SETTINGS_MAX_FRAME_SIZE: 5,
        NGHTTP2_SETTINGS_MAX_HEADER_LIST_SIZE: 6,
        NGHTTP2_SETTINGS_ENABLE_CONNECT_PROTOCOL: 8,
        PADDING_STRATEGY_NONE: 0,
        PADDING_STRATEGY_ALIGNED: 1,
        PADDING_STRATEGY_MAX: 2,
        PADDING_STRATEGY_CALLBACK: 1,
        NGHTTP2_NO_ERROR: 0,
        NGHTTP2_PROTOCOL_ERROR: 1,
        NGHTTP2_INTERNAL_ERROR: 2,
        NGHTTP2_FLOW_CONTROL_ERROR: 3,
        NGHTTP2_SETTINGS_TIMEOUT: 4,
        NGHTTP2_STREAM_CLOSED: 5,
        NGHTTP2_FRAME_SIZE_ERROR: 6,
        NGHTTP2_REFUSED_STREAM: 7,
        NGHTTP2_CANCEL: 8,
        NGHTTP2_COMPRESSION_ERROR: 9,
        NGHTTP2_CONNECT_ERROR: 10,
        NGHTTP2_ENHANCE_YOUR_CALM: 11,
        NGHTTP2_INADEQUATE_SECURITY: 12,
        NGHTTP2_HTTP_1_1_REQUIRED: 13,
        NGHTTP2_DEFAULT_WEIGHT: 16,
        HTTP2_HEADER_STATUS: ":status",
        HTTP2_HEADER_METHOD: ":method",
        HTTP2_HEADER_AUTHORITY: ":authority",
        HTTP2_HEADER_SCHEME: ":scheme",
        HTTP2_HEADER_PATH: ":path",
        HTTP2_HEADER_PROTOCOL: ":protocol",
        HTTP2_HEADER_ACCEPT_ENCODING: "accept-encoding",
        HTTP2_HEADER_ACCEPT_LANGUAGE: "accept-language",
        HTTP2_HEADER_ACCEPT_RANGES: "accept-ranges",
        HTTP2_HEADER_ACCEPT: "accept",
        HTTP2_HEADER_ACCESS_CONTROL_ALLOW_CREDENTIALS: "access-control-allow-credentials",
        HTTP2_HEADER_ACCESS_CONTROL_ALLOW_HEADERS: "access-control-allow-headers",
        HTTP2_HEADER_ACCESS_CONTROL_ALLOW_METHODS: "access-control-allow-methods",
        HTTP2_HEADER_ACCESS_CONTROL_ALLOW_ORIGIN: "access-control-allow-origin",
        HTTP2_HEADER_ACCESS_CONTROL_EXPOSE_HEADERS: "access-control-expose-headers",
        HTTP2_HEADER_ACCESS_CONTROL_REQUEST_HEADERS: "access-control-request-headers",
        HTTP2_HEADER_ACCESS_CONTROL_REQUEST_METHOD: "access-control-request-method",
        HTTP2_HEADER_AGE: "age",
        HTTP2_HEADER_AUTHORIZATION: "authorization",
        HTTP2_HEADER_CACHE_CONTROL: "cache-control",
        HTTP2_HEADER_CONNECTION: "connection",
        HTTP2_HEADER_CONTENT_DISPOSITION: "content-disposition",
        HTTP2_HEADER_CONTENT_ENCODING: "content-encoding",
        HTTP2_HEADER_CONTENT_LENGTH: "content-length",
        HTTP2_HEADER_CONTENT_TYPE: "content-type",
        HTTP2_HEADER_COOKIE: "cookie",
        HTTP2_HEADER_DATE: "date",
        HTTP2_HEADER_ETAG: "etag",
        HTTP2_HEADER_FORWARDED: "forwarded",
        HTTP2_HEADER_HOST: "host",
        HTTP2_HEADER_IF_MODIFIED_SINCE: "if-modified-since",
        HTTP2_HEADER_IF_NONE_MATCH: "if-none-match",
        HTTP2_HEADER_IF_RANGE: "if-range",
        HTTP2_HEADER_LAST_MODIFIED: "last-modified",
        HTTP2_HEADER_LINK: "link",
        HTTP2_HEADER_LOCATION: "location",
        HTTP2_HEADER_RANGE: "range",
        HTTP2_HEADER_REFERER: "referer",
        HTTP2_HEADER_SERVER: "server",
        HTTP2_HEADER_SET_COOKIE: "set-cookie",
        HTTP2_HEADER_STRICT_TRANSPORT_SECURITY: "strict-transport-security",
        HTTP2_HEADER_TRANSFER_ENCODING: "transfer-encoding",
        HTTP2_HEADER_TE: "te",
        HTTP2_HEADER_UPGRADE_INSECURE_REQUESTS: "upgrade-insecure-requests",
        HTTP2_HEADER_UPGRADE: "upgrade",
        HTTP2_HEADER_USER_AGENT: "user-agent",
        HTTP2_HEADER_VARY: "vary",
        HTTP2_HEADER_X_CONTENT_TYPE_OPTIONS: "x-content-type-options",
        HTTP2_HEADER_X_FRAME_OPTIONS: "x-frame-options",
        HTTP2_HEADER_KEEP_ALIVE: "keep-alive",
        HTTP2_HEADER_PROXY_CONNECTION: "proxy-connection",
        HTTP2_HEADER_X_XSS_PROTECTION: "x-xss-protection",
        HTTP2_HEADER_ALT_SVC: "alt-svc",
        HTTP2_HEADER_CONTENT_SECURITY_POLICY: "content-security-policy",
        HTTP2_HEADER_EARLY_DATA: "early-data",
        HTTP2_HEADER_EXPECT_CT: "expect-ct",
        HTTP2_HEADER_ORIGIN: "origin",
        HTTP2_HEADER_PURPOSE: "purpose",
        HTTP2_HEADER_TIMING_ALLOW_ORIGIN: "timing-allow-origin",
        HTTP2_HEADER_X_FORWARDED_FOR: "x-forwarded-for",
        HTTP2_HEADER_PRIORITY: "priority",
        HTTP2_HEADER_ACCEPT_CHARSET: "accept-charset",
        HTTP2_HEADER_ACCESS_CONTROL_MAX_AGE: "access-control-max-age",
        HTTP2_HEADER_ALLOW: "allow",
        HTTP2_HEADER_CONTENT_LANGUAGE: "content-language",
        HTTP2_HEADER_CONTENT_LOCATION: "content-location",
        HTTP2_HEADER_CONTENT_MD5: "content-md5",
        HTTP2_HEADER_CONTENT_RANGE: "content-range",
        HTTP2_HEADER_DNT: "dnt",
        HTTP2_HEADER_EXPECT: "expect",
        HTTP2_HEADER_EXPIRES: "expires",
        HTTP2_HEADER_FROM: "from",
        HTTP2_HEADER_IF_MATCH: "if-match",
        HTTP2_HEADER_IF_UNMODIFIED_SINCE: "if-unmodified-since",
        HTTP2_HEADER_MAX_FORWARDS: "max-forwards",
        HTTP2_HEADER_PREFER: "prefer",
        HTTP2_HEADER_PROXY_AUTHENTICATE: "proxy-authenticate",
        HTTP2_HEADER_PROXY_AUTHORIZATION: "proxy-authorization",
        HTTP2_HEADER_REFRESH: "refresh",
        HTTP2_HEADER_RETRY_AFTER: "retry-after",
        HTTP2_HEADER_TRAILER: "trailer",
        HTTP2_HEADER_TK: "tk",
        HTTP2_HEADER_VIA: "via",
        HTTP2_HEADER_WARNING: "warning",
        HTTP2_HEADER_WWW_AUTHENTICATE: "www-authenticate",
        HTTP2_HEADER_HTTP2_SETTINGS: "http2-settings",
        HTTP2_METHOD_ACL: "ACL",
        HTTP2_METHOD_BASELINE_CONTROL: "BASELINE-CONTROL",
        HTTP2_METHOD_BIND: "BIND",
        HTTP2_METHOD_CHECKIN: "CHECKIN",
        HTTP2_METHOD_CHECKOUT: "CHECKOUT",
        HTTP2_METHOD_CONNECT: "CONNECT",
        HTTP2_METHOD_COPY: "COPY",
        HTTP2_METHOD_DELETE: "DELETE",
        HTTP2_METHOD_GET: "GET",
        HTTP2_METHOD_HEAD: "HEAD",
        HTTP2_METHOD_LABEL: "LABEL",
        HTTP2_METHOD_LINK: "LINK",
        HTTP2_METHOD_LOCK: "LOCK",
        HTTP2_METHOD_MERGE: "MERGE",
        HTTP2_METHOD_MKACTIVITY: "MKACTIVITY",
        HTTP2_METHOD_MKCALENDAR: "MKCALENDAR",
        HTTP2_METHOD_MKCOL: "MKCOL",
        HTTP2_METHOD_MKREDIRECTREF: "MKREDIRECTREF",
        HTTP2_METHOD_MKWORKSPACE: "MKWORKSPACE",
        HTTP2_METHOD_MOVE: "MOVE",
        HTTP2_METHOD_OPTIONS: "OPTIONS",
        HTTP2_METHOD_ORDERPATCH: "ORDERPATCH",
        HTTP2_METHOD_PATCH: "PATCH",
        HTTP2_METHOD_POST: "POST",
        HTTP2_METHOD_PRI: "PRI",
        HTTP2_METHOD_PROPFIND: "PROPFIND",
        HTTP2_METHOD_PROPPATCH: "PROPPATCH",
        HTTP2_METHOD_PUT: "PUT",
        HTTP2_METHOD_REBIND: "REBIND",
        HTTP2_METHOD_REPORT: "REPORT",
        HTTP2_METHOD_SEARCH: "SEARCH",
        HTTP2_METHOD_TRACE: "TRACE",
        HTTP2_METHOD_UNBIND: "UNBIND",
        HTTP2_METHOD_UNCHECKOUT: "UNCHECKOUT",
        HTTP2_METHOD_UNLINK: "UNLINK",
        HTTP2_METHOD_UNLOCK: "UNLOCK",
        HTTP2_METHOD_UPDATE: "UPDATE",
        HTTP2_METHOD_UPDATEREDIRECTREF: "UPDATEREDIRECTREF",
        HTTP2_METHOD_VERSION_CONTROL: "VERSION-CONTROL",
        HTTP_STATUS_CONTINUE: 100,
        HTTP_STATUS_SWITCHING_PROTOCOLS: 101,
        HTTP_STATUS_PROCESSING: 102,
        HTTP_STATUS_EARLY_HINTS: 103,
        HTTP_STATUS_OK: 200,
        HTTP_STATUS_CREATED: 201,
        HTTP_STATUS_ACCEPTED: 202,
        HTTP_STATUS_NON_AUTHORITATIVE_INFORMATION: 203,
        HTTP_STATUS_NO_CONTENT: 204,
        HTTP_STATUS_RESET_CONTENT: 205,
        HTTP_STATUS_PARTIAL_CONTENT: 206,
        HTTP_STATUS_MULTI_STATUS: 207,
        HTTP_STATUS_ALREADY_REPORTED: 208,
        HTTP_STATUS_IM_USED: 226,
        HTTP_STATUS_MULTIPLE_CHOICES: 300,
        HTTP_STATUS_MOVED_PERMANENTLY: 301,
        HTTP_STATUS_FOUND: 302,
        HTTP_STATUS_SEE_OTHER: 303,
        HTTP_STATUS_NOT_MODIFIED: 304,
        HTTP_STATUS_USE_PROXY: 305,
        HTTP_STATUS_TEMPORARY_REDIRECT: 307,
        HTTP_STATUS_PERMANENT_REDIRECT: 308,
        HTTP_STATUS_BAD_REQUEST: 400,
        HTTP_STATUS_UNAUTHORIZED: 401,
        HTTP_STATUS_PAYMENT_REQUIRED: 402,
        HTTP_STATUS_FORBIDDEN: 403,
        HTTP_STATUS_NOT_FOUND: 404,
        HTTP_STATUS_METHOD_NOT_ALLOWED: 405,
        HTTP_STATUS_NOT_ACCEPTABLE: 406,
        HTTP_STATUS_PROXY_AUTHENTICATION_REQUIRED: 407,
        HTTP_STATUS_REQUEST_TIMEOUT: 408,
        HTTP_STATUS_CONFLICT: 409,
        HTTP_STATUS_GONE: 410,
        HTTP_STATUS_LENGTH_REQUIRED: 411,
        HTTP_STATUS_PRECONDITION_FAILED: 412,
        HTTP_STATUS_PAYLOAD_TOO_LARGE: 413,
        HTTP_STATUS_URI_TOO_LONG: 414,
        HTTP_STATUS_UNSUPPORTED_MEDIA_TYPE: 415,
        HTTP_STATUS_RANGE_NOT_SATISFIABLE: 416,
        HTTP_STATUS_EXPECTATION_FAILED: 417,
        HTTP_STATUS_TEAPOT: 418,
        HTTP_STATUS_MISDIRECTED_REQUEST: 421,
        HTTP_STATUS_UNPROCESSABLE_ENTITY: 422,
        HTTP_STATUS_LOCKED: 423,
        HTTP_STATUS_FAILED_DEPENDENCY: 424,
        HTTP_STATUS_TOO_EARLY: 425,
        HTTP_STATUS_UPGRADE_REQUIRED: 426,
        HTTP_STATUS_PRECONDITION_REQUIRED: 428,
        HTTP_STATUS_TOO_MANY_REQUESTS: 429,
        HTTP_STATUS_REQUEST_HEADER_FIELDS_TOO_LARGE: 431,
        HTTP_STATUS_UNAVAILABLE_FOR_LEGAL_REASONS: 451,
        HTTP_STATUS_INTERNAL_SERVER_ERROR: 500,
        HTTP_STATUS_NOT_IMPLEMENTED: 501,
        HTTP_STATUS_BAD_GATEWAY: 502,
        HTTP_STATUS_SERVICE_UNAVAILABLE: 503,
        HTTP_STATUS_GATEWAY_TIMEOUT: 504,
        HTTP_STATUS_HTTP_VERSION_NOT_SUPPORTED: 505,
        HTTP_STATUS_VARIANT_ALSO_NEGOTIATES: 506,
        HTTP_STATUS_INSUFFICIENT_STORAGE: 507,
        HTTP_STATUS_LOOP_DETECTED: 508,
        HTTP_STATUS_BANDWIDTH_LIMIT_EXCEEDED: 509,
        HTTP_STATUS_NOT_EXTENDED: 510,
        HTTP_STATUS_NETWORK_AUTHENTICATION_REQUIRED: 511
    },
    createServer: ƒ createServer(length: 0) {},
    createSecureServer: ƒ createSecureServer(length: 0) {},
    getDefaultSettings: ƒ getDefaultSettings(length: 0) {},
    getPackedSettings: ƒ getPackedSettings(length: 0) {},
    getUnpackedSettings: ƒ getUnpackedSettings(length: 0) {},
    sensitiveHeaders: Symbol(nodejs.http2.sensitiveHeaders),
    Http2ServerRequest: ƒ Http2ServerRequest(length: 0) {},
    Http2ServerResponse: ƒ Http2ServerResponse(length: 0) {},
    connect: ƒ connect(length: 0) {},
    Symbol(CommonJS): 0
}
```

</td></tr></table>

## https

<table><tr><th>Node.js</th><th>Bun</th></tr><tr><td valign="top">

```js
[Object: null prototype] {
    Agent: <ref *2> ƒ Agent(length: 1) {},
    Server: <ref *3> ƒ Server(length: 2) {},
    createServer: <ref *4> ƒ createServer(length: 2) {},
    default: {
        Agent: [Circular: *2],
        globalAgent: <ref *6> Agent {
            _events: [Object: null prototype] {
                free: ƒ (length: 2) {},
                newListener: ƒ maybeEnableKeylog(length: 1) {}
            },
            _eventsCount: 2,
            _maxListeners: undefined,
            defaultPort: 443,
            protocol: "https:",
            options: [Object: null prototype] {
                noDelay: true,
                path: null
            },
            requests: [Object: null prototype] {},
            sockets: [Object: null prototype] {},
            freeSockets: [Object: null prototype] {},
            keepAliveMsecs: 1000,
            keepAlive: false,
            maxSockets: Infinity,
            maxFreeSockets: 256,
            scheduling: "lifo",
            maxTotalSockets: Infinity,
            totalSocketCount: 0,
            maxCachedSessions: 100,
            _sessionCache: {
                map: {},
                list: []
            },
            Symbol(kCapture): false
        },
        Server: [Circular: *3],
        createServer: [Circular: *4],
        get: <ref *17> ƒ get(length: 3) {},
        request: <ref *18> ƒ request(length: 0) {}
    },
    get: [Circular: *17],
    globalAgent: [Circular: *6],
    request: [Circular: *18]
}
```

</td><td valign="top">

```js
{
    Agent: class Agent extends EventEmitter {},
    Server: class Server extends EventEmitter {},
    METHODS: [
        "ACL",
        "BIND",
        "CHECKOUT",
        "CONNECT",
        "COPY",
        "DELETE",
        "GET",
        "HEAD",
        "LINK",
        "LOCK",
        "M-SEARCH",
        "MERGE",
        "MKACTIVITY",
        "MKCALENDAR",
        "MKCOL",
        "MOVE",
        "NOTIFY",
        "OPTIONS",
        "PATCH",
        "POST",
        "PROPFIND",
        "PROPPATCH",
        "PURGE",
        "PUT",
        "REBIND",
        "REPORT",
        "SEARCH",
        "SOURCE",
        "SUBSCRIBE",
        "TRACE",
        "UNBIND",
        "UNLINK",
        "UNLOCK",
        "UNSUBSCRIBE"
    ],
    STATUS_CODES: {
        100: "Continue",
        101: "Switching Protocols",
        102: "Processing",
        103: "Early Hints",
        200: "OK",
        201: "Created",
        202: "Accepted",
        203: "Non-Authoritative Information",
        204: "No Content",
        205: "Reset Content",
        206: "Partial Content",
        207: "Multi-Status",
        208: "Already Reported",
        226: "IM Used",
        300: "Multiple Choices",
        301: "Moved Permanently",
        302: "Found",
        303: "See Other",
        304: "Not Modified",
        305: "Use Proxy",
        307: "Temporary Redirect",
        308: "Permanent Redirect",
        400: "Bad Request",
        401: "Unauthorized",
        402: "Payment Required",
        403: "Forbidden",
        404: "Not Found",
        405: "Method Not Allowed",
        406: "Not Acceptable",
        407: "Proxy Authentication Required",
        408: "Request Timeout",
        409: "Conflict",
        410: "Gone",
        411: "Length Required",
        412: "Precondition Failed",
        413: "Payload Too Large",
        414: "URI Too Long",
        415: "Unsupported Media Type",
        416: "Range Not Satisfiable",
        417: "Expectation Failed",
        418: "I'm a Teapot",
        421: "Misdirected Request",
        422: "Unprocessable Entity",
        423: "Locked",
        424: "Failed Dependency",
        425: "Too Early",
        426: "Upgrade Required",
        428: "Precondition Required",
        429: "Too Many Requests",
        431: "Request Header Fields Too Large",
        451: "Unavailable For Legal Reasons",
        500: "Internal Server Error",
        501: "Not Implemented",
        502: "Bad Gateway",
        503: "Service Unavailable",
        504: "Gateway Timeout",
        505: "HTTP Version Not Supported",
        506: "Variant Also Negotiates",
        507: "Insufficient Storage",
        508: "Loop Detected",
        509: "Bandwidth Limit Exceeded",
        510: "Not Extended",
        511: "Network Authentication Required"
    },
    createServer: ƒ createServer(length: 2) {},
    ServerResponse: class ServerResponse extends Writable {},
    IncomingMessage: class IncomingMessage extends Readable {},
    request: ƒ request(length: 3) {},
    get: ƒ get(length: 3) {},
    maxHeaderSize: 16384,
    setMaxIdleHTTPParsers: ƒ setMaxIdleHTTPParsers(length: 1) {},
    [get/set] globalAgent: Agent {
        _events: [Object: null prototype] {},
        _eventsCount: 0,
        _maxListeners: undefined,
        Symbol(kCapture): false
    },
    Symbol(CommonJS): 0
}
```

</td></tr></table>

## inspector

<table><tr><th>Node.js</th><th>Bun</th></tr><tr><td valign="top">

```js
[Object: null prototype] {
    Session: <ref *2> class Session extends EventEmitter {},
    close: <ref *3> ƒ _debugEnd(length: 0) {},
    console: <ref *4> {
        debug: ƒ debug(length: 0) {},
        error: ƒ error(length: 0) {},
        info: ƒ info(length: 0) {},
        log: ƒ log(length: 0) {},
        warn: ƒ warn(length: 0) {},
        dir: ƒ dir(length: 0) {},
        dirxml: ƒ dirxml(length: 0) {},
        table: ƒ table(length: 0) {},
        trace: ƒ trace(length: 0) {},
        group: ƒ group(length: 0) {},
        groupCollapsed: ƒ groupCollapsed(length: 0) {},
        groupEnd: ƒ groupEnd(length: 0) {},
        clear: ƒ clear(length: 0) {},
        count: ƒ count(length: 0) {},
        countReset: ƒ countReset(length: 0) {},
        assert: ƒ assert(length: 0) {},
        profile: ƒ profile(length: 0) {},
        profileEnd: ƒ profileEnd(length: 0) {},
        time: ƒ time(length: 0) {},
        timeLog: ƒ timeLog(length: 0) {},
        timeEnd: ƒ timeEnd(length: 0) {},
        timeStamp: ƒ timeStamp(length: 0) {},
        context: ƒ context(length: 1) {}
    },
    default: {
        open: <ref *29> ƒ inspectorOpen(length: 3) {},
        close: [Circular: *3],
        url: <ref *30> ƒ url(length: 0) {},
        waitForDebugger: <ref *31> ƒ inspectorWaitForDebugger(length: 0) {},
        console: [Circular: *4],
        Session: [Circular: *2]
    },
    open: [Circular: *29],
    url: [Circular: *30],
    waitForDebugger: [Circular: *31]
}
```

</td><td valign="top">

```js
{
    console: {
        debug: <ref *3> ƒ debug(length: 0) {},
        error: <ref *4> ƒ error(length: 0) {},
        log: <ref *5> ƒ log(length: 0) {},
        info: <ref *6> ƒ info(length: 0) {},
        warn: <ref *7> ƒ warn(length: 0) {},
        clear: <ref *8> ƒ clear(length: 0) {},
        dir: <ref *9> ƒ dir(length: 0) {},
        dirxml: <ref *10> ƒ dirxml(length: 0) {},
        table: <ref *11> ƒ table(length: 0) {},
        trace: <ref *12> ƒ trace(length: 0) {},
        assert: <ref *13> ƒ assert(length: 0) {},
        count: <ref *14> ƒ count(length: 0) {},
        countReset: <ref *15> ƒ countReset(length: 0) {},
        profile: <ref *16> ƒ profile(length: 0) {},
        profileEnd: <ref *17> ƒ profileEnd(length: 0) {},
        time: <ref *18> ƒ time(length: 0) {},
        timeLog: <ref *19> ƒ timeLog(length: 0) {},
        timeEnd: <ref *20> ƒ timeEnd(length: 0) {},
        timeStamp: <ref *21> ƒ timeStamp(length: 0) {},
        takeHeapSnapshot: <ref *22> ƒ takeHeapSnapshot(length: 0) {},
        group: <ref *23> ƒ group(length: 0) {},
        groupCollapsed: <ref *24> ƒ groupCollapsed(length: 0) {},
        groupEnd: <ref *25> ƒ groupEnd(length: 0) {},
        record: <ref *26> ƒ record(length: 0) {},
        recordEnd: <ref *27> ƒ recordEnd(length: 0) {},
        screenshot: <ref *28> ƒ screenshot(length: 0) {},
        write: <ref *29> ƒ write(length: 1) {},
        context: {
            console: {
                debug: [Circular: *3],
                error: [Circular: *4],
                log: [Circular: *5],
                info: [Circular: *6],
                warn: [Circular: *7],
                clear: [Circular: *8],
                dir: [Circular: *9],
                dirxml: [Circular: *10],
                table: [Circular: *11],
                trace: [Circular: *12],
                assert: [Circular: *13],
                count: [Circular: *14],
                countReset: [Circular: *15],
                profile: [Circular: *16],
                profileEnd: [Circular: *17],
                time: [Circular: *18],
                timeLog: [Circular: *19],
                timeEnd: [Circular: *20],
                timeStamp: [Circular: *21],
                takeHeapSnapshot: [Circular: *22],
                group: [Circular: *23],
                groupCollapsed: [Circular: *24],
                groupEnd: [Circular: *25],
                record: [Circular: *26],
                recordEnd: [Circular: *27],
                screenshot: [Circular: *28],
                write: [Circular: *29],
                Symbol(Symbol.asyncIterator): <ref *32> ƒ [Symbol.asyncIterator](length: 0) {}
            }
        },
        Symbol(Symbol.asyncIterator): [Circular: *32]
    },
    open: ƒ ::bunternal::(length: 0) {},
    close: ƒ ::bunternal::(length: 0) {},
    url: ƒ ::bunternal::(length: 0) {},
    waitForDebugger: ƒ ::bunternal::(length: 0) {},
    Session: class Session extends EventEmitter {},
    Symbol(CommonJS): 0
}
```

</td></tr></table>

## module

<table><tr><th>Node.js</th><th>Bun</th></tr><tr><td valign="top">

```js
[Object: null prototype] {
    Module: <ref *2> ƒ Module(length: 0) {
        builtinModules: <ref *3> [
            "_http_agent",
            "_http_client",
            "_http_common",
            "_http_incoming",
            "_http_outgoing",
            "_http_server",
            "_stream_duplex",
            "_stream_passthrough",
            "_stream_readable",
            "_stream_transform",
            "_stream_wrap",
            "_stream_writable",
            "_tls_common",
            "_tls_wrap",
            "assert",
            "assert/strict",
            "async_hooks",
            "buffer",
            "child_process",
            "cluster",
            "console",
            "constants",
            "crypto",
            "dgram",
            "diagnostics_channel",
            "dns",
            "dns/promises",
            "domain",
            "events",
            "fs",
            "fs/promises",
            "http",
            "http2",
            "https",
            "inspector",
            "module",
            "net",
            "os",
            "path",
            "path/posix",
            "path/win32",
            "perf_hooks",
            "process",
            "punycode",
            "querystring",
            "readline",
            "readline/promises",
            "repl",
            "stream",
            "stream/consumers",
            "stream/promises",
            "stream/web",
            "string_decoder",
            "sys",
            "timers",
            "timers/promises",
            "tls",
            "trace_events",
            "tty",
            "url",
            "util",
            "util/types",
            "v8",
            "vm",
            "worker_threads",
            "zlib"
        ],
        _cache: <ref *4> [Object: null prototype] {},
        _pathCache: <ref *5> [Object: null prototype] {
            /tmp/fs-fixture-1687133604372-1/module.mjs: "/tmp/fs-fixture-1687133604372-1/module.mjs"
        },
        _extensions: <ref *6> [Object: null prototype] {
            .js: ƒ (length: 2) {},
            .json: ƒ (length: 2) {},
            .node: ƒ (length: 2) {}
        },
        globalPaths: <ref *10> [
            "/home/runner/setup-pnpm/node_modules/.pnpm/pnpm@7.33.1/node_modules/pnpm/bin/node_modules",
            "/home/runner/setup-pnpm/node_modules/.pnpm/pnpm@7.33.1/node_modules/pnpm/node_modules",
            "/home/runner/setup-pnpm/node_modules/.pnpm/pnpm@7.33.1/node_modules",
            "/home/runner/setup-pnpm/node_modules/.pnpm/node_modules",
            "/home/runner/setup-pnpm/node_modules",
            "/home/runner/node_modules",
            "/home/node_modules",
            "/node_modules",
            "/home/runner/setup-pnpm/node_modules/pnpm/bin/node_modules",
            "/home/runner/setup-pnpm/node_modules/pnpm/node_modules",
            "/home/runner/.node_modules",
            "/home/runner/.node_libraries",
            "/opt/hostedtoolcache/node/18.16.0/x64/lib/node"
        ],
        _debug: <ref *11> ƒ deprecated(length: 0) {},
        _findPath: <ref *12> ƒ (length: 3) {},
        _nodeModulePaths: <ref *13> ƒ (length: 1) {},
        _resolveLookupPaths: <ref *14> ƒ (length: 2) {},
        _load: <ref *15> ƒ (length: 3) {},
        _resolveFilename: <ref *16> ƒ (length: 4) {},
        createRequire: <ref *17> ƒ createRequire(length: 1) {},
        _initPaths: <ref *18> ƒ (length: 0) {},
        _preloadModules: <ref *19> ƒ (length: 1) {},
        syncBuiltinESMExports: <ref *20> ƒ syncBuiltinESMExports(length: 0) {},
        isBuiltin: <ref *21> ƒ isBuiltin(length: 1) {},
        Module: [Circular: *2],
        runMain: <ref *22> ƒ executeUserEntryPoint(length: 0) {},
        findSourceMap: <ref *23> ƒ findSourceMap(length: 1) {},
        SourceMap: <ref *24> class SourceMap {}
    },
    SourceMap: [Circular: *24],
    _cache: [Circular: *4],
    _debug: [Circular: *11],
    _extensions: [Circular: *6],
    _findPath: [Circular: *12],
    _initPaths: [Circular: *18],
    _load: [Circular: *15],
    _nodeModulePaths: [Circular: *13],
    _pathCache: [Circular: *5],
    _preloadModules: [Circular: *19],
    _resolveFilename: [Circular: *16],
    _resolveLookupPaths: [Circular: *14],
    builtinModules: [Circular: *3],
    createRequire: [Circular: *17],
    default: [Circular: *2],
    findSourceMap: [Circular: *23],
    globalPaths: [Circular: *10],
    isBuiltin: [Circular: *21],
    runMain: [Circular: *22],
    syncBuiltinESMExports: [Circular: *20]
}
```

</td><td valign="top">

```js
{
    SourceMap: ƒ SourceMap(length: 1) {},
    _cache: {},
    _nodeModulePaths: ƒ _nodeModulePaths(length: 0) {},
    _resolveFileName: ƒ _resolveFileName(length: 3) {},
    builtinModules: [],
    createRequire: ƒ createRequire(length: 1) {},
    findSourceMap: ƒ findSourceMap(length: 1) {},
    globalPaths: [
        "node:assert",
        "node:buffer",
        "node:events",
        "node:util",
        "node:path",
        "bun:ffi",
        "bun:sqlite"
    ],
    paths: ƒ paths(length: 1) {},
    syncBuiltinExports: ƒ syncBuiltinExports(length: 0) {}
}
```

</td></tr></table>

## net

<table><tr><th>Node.js</th><th>Bun</th></tr><tr><td valign="top">

```js
[Object: null prototype] {
    BlockList: <ref *2> class BlockList extends JSTransferable {},
    Server: <ref *3> ƒ Server(length: 2) {},
    Socket: <ref *4> ƒ Socket(length: 1) {},
    SocketAddress: <ref *5> class SocketAddress extends JSTransferable {},
    Stream: [Circular: *4],
    _createServerHandle: <ref *6> ƒ createServerHandle(length: 5) {},
    _normalizeArgs: <ref *7> ƒ normalizeArgs(length: 1) {},
    _setSimultaneousAccepts: <ref *8> ƒ _setSimultaneousAccepts(length: 0) {},
    connect: <ref *9> ƒ connect(length: 0) {},
    createConnection: [Circular: *9],
    createServer: <ref *10> ƒ createServer(length: 2) {},
    default: {
        _createServerHandle: [Circular: *6],
        _normalizeArgs: [Circular: *7],
        _setSimultaneousAccepts: [Circular: *8],
        [get/set] BlockList: [Circular: *2],
        [get/set] SocketAddress: [Circular: *5],
        connect: [Circular: *9],
        createConnection: [Circular: *9],
        createServer: [Circular: *10],
        isIP: <ref *12> ƒ isIP(length: 1) {},
        isIPv4: <ref *13> ƒ isIPv4(length: 1) {},
        isIPv6: <ref *14> ƒ isIPv6(length: 1) {},
        Server: [Circular: *3],
        Socket: [Circular: *4],
        Stream: [Circular: *4]
    },
    isIP: [Circular: *12],
    isIPv4: [Circular: *13],
    isIPv6: [Circular: *14]
}
```

</td><td valign="top">

```js
{
    createServer: ƒ createServer(length: 2) {},
    Server: class Server extends EventEmitter {},
    createConnection: <ref *4> ƒ createConnection(length: 3) {},
    connect: [Circular: *4],
    isIP: ƒ isIP(length: 1) {},
    isIPv4: ƒ isIPv4(length: 1) {},
    isIPv6: ƒ isIPv6(length: 1) {},
    Socket: ƒ Socket(length: 1) {},
    Symbol(CommonJS): 0,
    Symbol(::bunternal::): class Socket2 extends Duplex {
        Symbol(::bunsocket_serverhandlers::): {
            data: ƒ data(length: 2) {},
            close: ƒ close(length: 1) {},
            end: ƒ end(length: 1) {},
            open: ƒ open(length: 1) {},
            handshake: ƒ handshake(length: 3) {},
            error: ƒ error(length: 2) {},
            timeout: ƒ timeout(length: 1) {},
            connectError: ƒ connectError(length: 2) {},
            drain: ƒ #Drain(length: 1) {},
            binaryType: "buffer"
        }
    }
}
```

</td></tr></table>

## os

<table><tr><th>Node.js</th><th>Bun</th></tr><tr><td valign="top">

```js
[Object: null prototype] {
    EOL: "\n",
    arch: <ref *2> ƒ arch(length: 0) {
        Symbol(Symbol.toPrimitive): ƒ (length: 0) {}
    },
    availableParallelism: <ref *4> ƒ getAvailableParallelism(length: 0) {
        Symbol(Symbol.toPrimitive): ƒ (length: 0) {}
    },
    constants: <ref *6> [Object: null prototype] {
        UV_UDP_REUSEADDR: 4,
        dlopen: [Object: null prototype] {
            RTLD_LAZY: 1,
            RTLD_NOW: 2,
            RTLD_GLOBAL: 256,
            RTLD_LOCAL: 0,
            RTLD_DEEPBIND: 8
        },
        errno: [Object: null prototype] {
            E2BIG: 7,
            EACCES: 13,
            EADDRINUSE: 98,
            EADDRNOTAVAIL: 99,
            EAFNOSUPPORT: 97,
            EAGAIN: 11,
            EALREADY: 114,
            EBADF: 9,
            EBADMSG: 74,
            EBUSY: 16,
            ECANCELED: 125,
            ECHILD: 10,
            ECONNABORTED: 103,
            ECONNREFUSED: 111,
            ECONNRESET: 104,
            EDEADLK: 35,
            EDESTADDRREQ: 89,
            EDOM: 33,
            EDQUOT: 122,
            EEXIST: 17,
            EFAULT: 14,
            EFBIG: 27,
            EHOSTUNREACH: 113,
            EIDRM: 43,
            EILSEQ: 84,
            EINPROGRESS: 115,
            EINTR: 4,
            EINVAL: 22,
            EIO: 5,
            EISCONN: 106,
            EISDIR: 21,
            ELOOP: 40,
            EMFILE: 24,
            EMLINK: 31,
            EMSGSIZE: 90,
            EMULTIHOP: 72,
            ENAMETOOLONG: 36,
            ENETDOWN: 100,
            ENETRESET: 102,
            ENETUNREACH: 101,
            ENFILE: 23,
            ENOBUFS: 105,
            ENODATA: 61,
            ENODEV: 19,
            ENOENT: 2,
            ENOEXEC: 8,
            ENOLCK: 37,
            ENOLINK: 67,
            ENOMEM: 12,
            ENOMSG: 42,
            ENOPROTOOPT: 92,
            ENOSPC: 28,
            ENOSR: 63,
            ENOSTR: 60,
            ENOSYS: 38,
            ENOTCONN: 107,
            ENOTDIR: 20,
            ENOTEMPTY: 39,
            ENOTSOCK: 88,
            ENOTSUP: 95,
            ENOTTY: 25,
            ENXIO: 6,
            EOPNOTSUPP: 95,
            EOVERFLOW: 75,
            EPERM: 1,
            EPIPE: 32,
            EPROTO: 71,
            EPROTONOSUPPORT: 93,
            EPROTOTYPE: 91,
            ERANGE: 34,
            EROFS: 30,
            ESPIPE: 29,
            ESRCH: 3,
            ESTALE: 116,
            ETIME: 62,
            ETIMEDOUT: 110,
            ETXTBSY: 26,
            EWOULDBLOCK: 11,
            EXDEV: 18
        },
        signals: [Object: null prototype] {
            SIGHUP: 1,
            SIGINT: 2,
            SIGQUIT: 3,
            SIGILL: 4,
            SIGTRAP: 5,
            SIGABRT: 6,
            SIGIOT: 6,
            SIGBUS: 7,
            SIGFPE: 8,
            SIGKILL: 9,
            SIGUSR1: 10,
            SIGSEGV: 11,
            SIGUSR2: 12,
            SIGPIPE: 13,
            SIGALRM: 14,
            SIGTERM: 15,
            SIGCHLD: 17,
            SIGSTKFLT: 16,
            SIGCONT: 18,
            SIGSTOP: 19,
            SIGTSTP: 20,
            SIGTTIN: 21,
            SIGTTOU: 22,
            SIGURG: 23,
            SIGXCPU: 24,
            SIGXFSZ: 25,
            SIGVTALRM: 26,
            SIGPROF: 27,
            SIGWINCH: 28,
            SIGIO: 29,
            SIGPOLL: 29,
            SIGPWR: 30,
            SIGSYS: 31
        },
        priority: [Object: null prototype] {
            PRIORITY_LOW: 19,
            PRIORITY_BELOW_NORMAL: 10,
            PRIORITY_NORMAL: 0,
            PRIORITY_ABOVE_NORMAL: -7,
            PRIORITY_HIGH: -14,
            PRIORITY_HIGHEST: -20
        }
    },
    cpus: <ref *11> ƒ cpus(length: 0) {},
    default: {
        arch: [Circular: *2],
        availableParallelism: [Circular: *4],
        cpus: [Circular: *11],
        endianness: <ref *13> ƒ endianness(length: 0) {
            Symbol(Symbol.toPrimitive): ƒ (length: 0) {}
        },
        freemem: <ref *15> ƒ getFreeMem(length: 0) {
            Symbol(Symbol.toPrimitive): ƒ (length: 0) {}
        },
        getPriority: <ref *17> ƒ getPriority(length: 1) {},
        homedir: <ref *18> ƒ __node_internal_checkError(length: 0) {
            Symbol(Symbol.toPrimitive): ƒ (length: 0) {}
        },
        hostname: <ref *20> ƒ __node_internal_checkError(length: 0) {
            Symbol(Symbol.toPrimitive): ƒ (length: 0) {}
        },
        loadavg: <ref *22> ƒ loadavg(length: 0) {},
        networkInterfaces: <ref *23> ƒ networkInterfaces(length: 0) {},
        platform: <ref *24> ƒ platform(length: 0) {
            Symbol(Symbol.toPrimitive): ƒ (length: 0) {}
        },
        release: <ref *26> ƒ getOSRelease(length: 0) {
            Symbol(Symbol.toPrimitive): ƒ (length: 0) {}
        },
        setPriority: <ref *28> ƒ setPriority(length: 2) {},
        tmpdir: <ref *29> ƒ tmpdir(length: 0) {
            Symbol(Symbol.toPrimitive): ƒ (length: 0) {}
        },
        totalmem: <ref *31> ƒ getTotalMem(length: 0) {
            Symbol(Symbol.toPrimitive): ƒ (length: 0) {}
        },
        type: <ref *33> ƒ getOSType(length: 0) {
            Symbol(Symbol.toPrimitive): ƒ (length: 0) {}
        },
        userInfo: <ref *35> ƒ userInfo(length: 1) {},
        uptime: <ref *36> ƒ __node_internal_checkError(length: 0) {
            Symbol(Symbol.toPrimitive): ƒ (length: 0) {}
        },
        version: <ref *38> ƒ getOSVersion(length: 0) {
            Symbol(Symbol.toPrimitive): ƒ (length: 0) {}
        },
        machine: <ref *40> ƒ getMachine(length: 0) {
            Symbol(Symbol.toPrimitive): ƒ (length: 0) {}
        },
        constants: [Circular: *6],
        EOL: "\n",
        devNull: "/dev/null"
    },
    devNull: "/dev/null",
    endianness: [Circular: *13],
    freemem: [Circular: *15],
    getPriority: [Circular: *17],
    homedir: [Circular: *18],
    hostname: [Circular: *20],
    loadavg: [Circular: *22],
    machine: [Circular: *40],
    networkInterfaces: [Circular: *23],
    platform: [Circular: *24],
    release: [Circular: *26],
    setPriority: [Circular: *28],
    tmpdir: [Circular: *29],
    totalmem: [Circular: *31],
    type: [Circular: *33],
    uptime: [Circular: *36],
    userInfo: [Circular: *35],
    version: [Circular: *38]
}
```

</td><td valign="top">

```js
{
    arch: ƒ bound arch(length: 0) {},
    cpus: ƒ bound cpus(length: 0) {},
    endianness: ƒ bound endianness(length: 0) {},
    freemem: ƒ bound freemem(length: 0) {},
    getPriority: ƒ bound getPriority(length: 1) {},
    homedir: ƒ bound homedir(length: 0) {},
    hostname: ƒ bound hostname(length: 0) {},
    loadavg: ƒ bound loadavg(length: 0) {},
    networkInterfaces: ƒ bound networkInterfaces(length: 0) {},
    platform: ƒ bound platform(length: 0) {},
    release: ƒ bound release(length: 0) {},
    setPriority: ƒ bound setPriority(length: 2) {},
    tmpdir: ƒ bound tmpdir(length: 0) {},
    totalmem: ƒ bound totalmem(length: 0) {},
    type: ƒ bound type(length: 0) {},
    uptime: ƒ bound uptime(length: 0) {},
    userInfo: ƒ bound userInfo(length: 0) {},
    version: ƒ bound version(length: 0) {},
    machine: ƒ bound machine(length: 0) {},
    devNull: "/dev/null",
    EOL: "\n",
    constants: {
        errno: {
            E2BIG: 7,
            EACCES: 13,
            EADDRINUSE: 98,
            EADDRNOTAVAIL: 99,
            EAFNOSUPPORT: 97,
            EAGAIN: 11,
            EALREADY: 114,
            EBADF: 9,
            EBADMSG: 74,
            EBUSY: 16,
            ECANCELED: 125,
            ECHILD: 10,
            ECONNABORTED: 103,
            ECONNREFUSED: 111,
            ECONNRESET: 104,
            EDEADLK: 35,
            EDESTADDRREQ: 89,
            EDOM: 33,
            EDQUOT: 122,
            EEXIST: 17,
            EFAULT: 14,
            EFBIG: 27,
            EHOSTUNREACH: 113,
            EIDRM: 43,
            EILSEQ: 84,
            EINPROGRESS: 115,
            EINTR: 4,
            EINVAL: 22,
            EIO: 5,
            EISCONN: 106,
            EISDIR: 21,
            ELOOP: 40,
            EMFILE: 24,
            EMLINK: 31,
            EMSGSIZE: 90,
            EMULTIHOP: 72,
            ENAMETOOLONG: 36,
            ENETDOWN: 100,
            ENETRESET: 102,
            ENETUNREACH: 101,
            ENFILE: 23,
            ENOBUFS: 105,
            ENODATA: 61,
            ENODEV: 19,
            ENOENT: 2,
            ENOEXEC: 8,
            ENOLCK: 37,
            ENOLINK: 67,
            ENOMEM: 12,
            ENOMSG: 42,
            ENOPROTOOPT: 92,
            ENOSPC: 28,
            ENOSR: 63,
            ENOSTR: 60,
            ENOSYS: 38,
            ENOTCONN: 107,
            ENOTDIR: 20,
            ENOTEMPTY: 39,
            ENOTSOCK: 88,
            ENOTTY: 25,
            ENXIO: 6,
            EOPNOTSUPP: 95,
            EOVERFLOW: 75,
            EPERM: 1,
            EPIPE: 32,
            EPROTO: 71,
            EPROTONOSUPPORT: 93,
            EPROTOTYPE: 91,
            ERANGE: 34,
            EROFS: 30,
            ESPIPE: 29,
            ESRCH: 3,
            ESTALE: 116,
            ETIME: 62,
            ETIMEDOUT: 110,
            ETXTBSY: 26,
            EXDEV: 18
        },
        signals: {
            SIGHUP: 1,
            SIGINT: 2,
            SIGQUIT: 3,
            SIGILL: 4,
            SIGTRAP: 5,
            SIGABRT: 6,
            SIGIOT: 6,
            SIGBUS: 7,
            SIGFPE: 8,
            SIGKILL: 9,
            SIGUSR1: 10,
            SIGSEGV: 11,
            SIGUSR2: 12,
            SIGPIPE: 13,
            SIGALRM: 14,
            SIGTERM: 15,
            SIGCHLD: 17,
            SIGSTKFLT: 16,
            SIGCONT: 18,
            SIGSTOP: 19,
            SIGTSTP: 20,
            SIGTTIN: 21,
            SIGTTOU: 22,
            SIGURG: 23,
            SIGXCPU: 24,
            SIGXFSZ: 25,
            SIGVTALRM: 26,
            SIGPROF: 27,
            SIGWINCH: 28,
            SIGIO: 29,
            SIGPOLL: 29,
            SIGPWR: 30,
            SIGSYS: 31,
            SIGUNUSED: 31
        },
        priority: {
            PRIORITY_LOW: 19,
            PRIORITY_BELOW_NORMAL: 10,
            PRIORITY_NORMAL: 0,
            PRIORITY_ABOVE_NORMAL: -7,
            PRIORITY_HIGH: -14,
            PRIORITY_HIGHEST: -20
        },
        dlopen: {
            RTLD_LAZY: 1,
            RTLD_NOW: 2,
            RTLD_GLOBAL: 256,
            RTLD_LOCAL: 0
        },
        UV_UDP_REUSEADDR: 4
    },
    Symbol(CommonJS): 0
}
```

</td></tr></table>

## path

<table><tr><th>Node.js</th><th>Bun</th></tr><tr><td valign="top">

```js
[Object: null prototype] {
    _makeLong: <ref *2> ƒ toNamespacedPath(length: 1) {},
    basename: <ref *3> ƒ basename(length: 2) {},
    default: <ref *4> {
        resolve: <ref *5> ƒ resolve(length: 0) {},
        normalize: <ref *6> ƒ normalize(length: 1) {},
        isAbsolute: <ref *7> ƒ isAbsolute(length: 1) {},
        join: <ref *8> ƒ join(length: 0) {},
        relative: <ref *9> ƒ relative(length: 2) {},
        toNamespacedPath: [Circular: *2],
        dirname: <ref *10> ƒ dirname(length: 1) {},
        basename: [Circular: *3],
        extname: <ref *11> ƒ extname(length: 1) {},
        format: <ref *12> ƒ bound _format(length: 1) {},
        parse: <ref *13> ƒ parse(length: 1) {},
        sep: "/",
        delimiter: ":",
        win32: <ref *14> {
            resolve: ƒ resolve(length: 0) {},
            normalize: ƒ normalize(length: 1) {},
            isAbsolute: ƒ isAbsolute(length: 1) {},
            join: ƒ join(length: 0) {},
            relative: ƒ relative(length: 2) {},
            toNamespacedPath: <ref *20> ƒ toNamespacedPath(length: 1) {},
            dirname: ƒ dirname(length: 1) {},
            basename: ƒ basename(length: 2) {},
            extname: ƒ extname(length: 1) {},
            format: ƒ bound _format(length: 1) {},
            parse: ƒ parse(length: 1) {},
            sep: "\\",
            delimiter: ";",
            win32: [Circular: *14],
            posix: [Circular: *4],
            _makeLong: [Circular: *20]
        },
        posix: [Circular: *4],
        _makeLong: [Circular: *2]
    },
    delimiter: ":",
    dirname: [Circular: *10],
    extname: [Circular: *11],
    format: [Circular: *12],
    isAbsolute: [Circular: *7],
    join: [Circular: *8],
    normalize: [Circular: *6],
    parse: [Circular: *13],
    posix: [Circular: *4],
    relative: [Circular: *9],
    resolve: [Circular: *5],
    sep: "/",
    toNamespacedPath: [Circular: *2],
    win32: [Circular: *14]
}
```

</td><td valign="top">

```js
<ref *1> [Object: null prototype] {
    basename: ƒ bound basename(length: 0) {},
    dirname: ƒ bound dirname(length: 0) {},
    extname: ƒ bound extname(length: 0) {},
    format: ƒ bound format(length: 0) {},
    isAbsolute: ƒ bound isAbsolute(length: 0) {},
    join: ƒ bound join(length: 0) {},
    normalize: ƒ bound normalize(length: 0) {},
    parse: ƒ bound parse(length: 0) {},
    relative: ƒ bound relative(length: 0) {},
    resolve: ƒ bound resolve(length: 0) {},
    toNamespacedPath: ƒ bound toNamespacedPath(length: 0) {},
    sep: "/",
    delimiter: ":",
    default: [Circular: *1],
    win32: <ref *13> [Object: null prototype] {
        basename: ƒ bound basename(length: 0) {},
        dirname: ƒ bound dirname(length: 0) {},
        extname: ƒ bound extname(length: 0) {},
        format: ƒ bound format(length: 0) {},
        isAbsolute: ƒ bound isAbsolute(length: 0) {},
        join: ƒ bound join(length: 0) {},
        normalize: ƒ bound normalize(length: 0) {},
        parse: ƒ bound parse(length: 0) {},
        relative: ƒ bound relative(length: 0) {},
        resolve: ƒ bound resolve(length: 0) {},
        toNamespacedPath: ƒ bound toNamespacedPath(length: 0) {},
        sep: "\\",
        delimiter: ";",
        default: [Circular: *13]
    },
    posix: <ref *25> [Object: null prototype] {
        basename: ƒ bound basename(length: 0) {},
        dirname: ƒ bound dirname(length: 0) {},
        extname: ƒ bound extname(length: 0) {},
        format: ƒ bound format(length: 0) {},
        isAbsolute: ƒ bound isAbsolute(length: 0) {},
        join: ƒ bound join(length: 0) {},
        normalize: ƒ bound normalize(length: 0) {},
        parse: ƒ bound parse(length: 0) {},
        relative: ƒ bound relative(length: 0) {},
        resolve: ƒ bound resolve(length: 0) {},
        toNamespacedPath: ƒ bound toNamespacedPath(length: 0) {},
        sep: "/",
        delimiter: ":",
        default: [Circular: *25]
    },
    __esModule: true,
    Symbol(CommonJS): 0
}
```

</td></tr></table>

## path/posix

<table><tr><th>Node.js</th><th>Bun</th></tr><tr><td valign="top">

```js
[Object: null prototype] {
    _makeLong: <ref *2> ƒ toNamespacedPath(length: 1) {},
    basename: <ref *3> ƒ basename(length: 2) {},
    default: <ref *4> {
        resolve: <ref *5> ƒ resolve(length: 0) {},
        normalize: <ref *6> ƒ normalize(length: 1) {},
        isAbsolute: <ref *7> ƒ isAbsolute(length: 1) {},
        join: <ref *8> ƒ join(length: 0) {},
        relative: <ref *9> ƒ relative(length: 2) {},
        toNamespacedPath: [Circular: *2],
        dirname: <ref *10> ƒ dirname(length: 1) {},
        basename: [Circular: *3],
        extname: <ref *11> ƒ extname(length: 1) {},
        format: <ref *12> ƒ bound _format(length: 1) {},
        parse: <ref *13> ƒ parse(length: 1) {},
        sep: "/",
        delimiter: ":",
        win32: <ref *14> {
            resolve: ƒ resolve(length: 0) {},
            normalize: ƒ normalize(length: 1) {},
            isAbsolute: ƒ isAbsolute(length: 1) {},
            join: ƒ join(length: 0) {},
            relative: ƒ relative(length: 2) {},
            toNamespacedPath: <ref *20> ƒ toNamespacedPath(length: 1) {},
            dirname: ƒ dirname(length: 1) {},
            basename: ƒ basename(length: 2) {},
            extname: ƒ extname(length: 1) {},
            format: ƒ bound _format(length: 1) {},
            parse: ƒ parse(length: 1) {},
            sep: "\\",
            delimiter: ";",
            win32: [Circular: *14],
            posix: [Circular: *4],
            _makeLong: [Circular: *20]
        },
        posix: [Circular: *4],
        _makeLong: [Circular: *2]
    },
    delimiter: ":",
    dirname: [Circular: *10],
    extname: [Circular: *11],
    format: [Circular: *12],
    isAbsolute: [Circular: *7],
    join: [Circular: *8],
    normalize: [Circular: *6],
    parse: [Circular: *13],
    posix: [Circular: *4],
    relative: [Circular: *9],
    resolve: [Circular: *5],
    sep: "/",
    toNamespacedPath: [Circular: *2],
    win32: [Circular: *14]
}
```

</td><td valign="top">

```js
{
    basename: ƒ bound basename(length: 0) {},
    dirname: ƒ bound dirname(length: 0) {},
    extname: ƒ bound extname(length: 0) {},
    format: ƒ bound format(length: 0) {},
    isAbsolute: ƒ bound isAbsolute(length: 0) {},
    join: ƒ bound join(length: 0) {},
    normalize: ƒ bound normalize(length: 0) {},
    parse: ƒ bound parse(length: 0) {},
    relative: ƒ bound relative(length: 0) {},
    resolve: ƒ bound resolve(length: 0) {},
    toNamespacedPath: ƒ bound toNamespacedPath(length: 0) {},
    sep: "/",
    delimiter: ":",
    Symbol(CommonJS): 0
}
```

</td></tr></table>

## path/win32

<table><tr><th>Node.js</th><th>Bun</th></tr><tr><td valign="top">

```js
[Object: null prototype] {
    _makeLong: <ref *2> ƒ toNamespacedPath(length: 1) {},
    basename: <ref *3> ƒ basename(length: 2) {},
    default: <ref *4> {
        resolve: <ref *5> ƒ resolve(length: 0) {},
        normalize: <ref *6> ƒ normalize(length: 1) {},
        isAbsolute: <ref *7> ƒ isAbsolute(length: 1) {},
        join: <ref *8> ƒ join(length: 0) {},
        relative: <ref *9> ƒ relative(length: 2) {},
        toNamespacedPath: [Circular: *2],
        dirname: <ref *10> ƒ dirname(length: 1) {},
        basename: [Circular: *3],
        extname: <ref *11> ƒ extname(length: 1) {},
        format: <ref *12> ƒ bound _format(length: 1) {},
        parse: <ref *13> ƒ parse(length: 1) {},
        sep: "\\",
        delimiter: ";",
        win32: [Circular: *4],
        posix: <ref *14> {
            resolve: ƒ resolve(length: 0) {},
            normalize: ƒ normalize(length: 1) {},
            isAbsolute: ƒ isAbsolute(length: 1) {},
            join: ƒ join(length: 0) {},
            relative: ƒ relative(length: 2) {},
            toNamespacedPath: <ref *20> ƒ toNamespacedPath(length: 1) {},
            dirname: ƒ dirname(length: 1) {},
            basename: ƒ basename(length: 2) {},
            extname: ƒ extname(length: 1) {},
            format: ƒ bound _format(length: 1) {},
            parse: ƒ parse(length: 1) {},
            sep: "/",
            delimiter: ":",
            win32: [Circular: *4],
            posix: [Circular: *14],
            _makeLong: [Circular: *20]
        },
        _makeLong: [Circular: *2]
    },
    delimiter: ";",
    dirname: [Circular: *10],
    extname: [Circular: *11],
    format: [Circular: *12],
    isAbsolute: [Circular: *7],
    join: [Circular: *8],
    normalize: [Circular: *6],
    parse: [Circular: *13],
    posix: [Circular: *14],
    relative: [Circular: *9],
    resolve: [Circular: *5],
    sep: "\\",
    toNamespacedPath: [Circular: *2],
    win32: [Circular: *4]
}
```

</td><td valign="top">

```js
{
    basename: <ref *2> ƒ bound basename(length: 0) {},
    default: {
        basename: [Circular: *2],
        dirname: <ref *4> ƒ bound dirname(length: 0) {},
        extname: <ref *5> ƒ bound extname(length: 0) {},
        format: <ref *6> ƒ bound format(length: 0) {},
        isAbsolute: <ref *7> ƒ bound isAbsolute(length: 0) {},
        join: <ref *8> ƒ bound join(length: 0) {},
        normalize: <ref *9> ƒ bound normalize(length: 0) {},
        parse: <ref *10> ƒ bound parse(length: 0) {},
        relative: <ref *11> ƒ bound relative(length: 0) {},
        resolve: <ref *12> ƒ bound resolve(length: 0) {},
        toNamespacedPath: <ref *13> ƒ bound toNamespacedPath(length: 0) {},
        sep: "\\",
        delimiter: ";"
    },
    delimiter: ";",
    dirname: [Circular: *4],
    extname: [Circular: *5],
    format: [Circular: *6],
    isAbsolute: [Circular: *7],
    join: [Circular: *8],
    normalize: [Circular: *9],
    parse: [Circular: *10],
    relative: [Circular: *11],
    resolve: [Circular: *12],
    sep: "\\",
    toNamespacedPath: [Circular: *13]
}
```

</td></tr></table>

## perf_hooks

<table><tr><th>Node.js</th><th>Bun</th></tr><tr><td valign="top">

```js
[Object: null prototype] {
    Performance: <ref *2> class Performance extends EventTarget {},
    PerformanceEntry: <ref *3> class PerformanceEntry {},
    PerformanceMark: <ref *4> class PerformanceMark extends InternalPerformanceEntry {},
    PerformanceMeasure: <ref *5> class PerformanceMeasure extends InternalPerformanceEntry {},
    PerformanceObserver: <ref *6> class PerformanceObserver {},
    PerformanceObserverEntryList: <ref *7> class PerformanceObserverEntryList {},
    PerformanceResourceTiming: <ref *8> class PerformanceResourceTiming extends InternalPerformanceResourceTiming {},
    constants: <ref *9> {
        NODE_PERFORMANCE_GC_MAJOR: 4,
        NODE_PERFORMANCE_GC_MINOR: 1,
        NODE_PERFORMANCE_GC_INCREMENTAL: 8,
        NODE_PERFORMANCE_GC_WEAKCB: 16,
        NODE_PERFORMANCE_GC_FLAGS_NO: 0,
        NODE_PERFORMANCE_GC_FLAGS_CONSTRUCT_RETAINED: 2,
        NODE_PERFORMANCE_GC_FLAGS_FORCED: 4,
        NODE_PERFORMANCE_GC_FLAGS_SYNCHRONOUS_PHANTOM_PROCESSING: 8,
        NODE_PERFORMANCE_GC_FLAGS_ALL_AVAILABLE_GARBAGE: 16,
        NODE_PERFORMANCE_GC_FLAGS_ALL_EXTERNAL_MEMORY: 32,
        NODE_PERFORMANCE_GC_FLAGS_SCHEDULE_IDLE: 64
    },
    createHistogram: <ref *10> ƒ createHistogram(length: 0) {},
    default: {
        Performance: [Circular: *2],
        PerformanceEntry: [Circular: *3],
        PerformanceMark: [Circular: *4],
        PerformanceMeasure: [Circular: *5],
        PerformanceObserver: [Circular: *6],
        PerformanceObserverEntryList: [Circular: *7],
        PerformanceResourceTiming: [Circular: *8],
        monitorEventLoopDelay: <ref *12> ƒ monitorEventLoopDelay(length: 0) {},
        createHistogram: [Circular: *10],
        performance: <ref *13> Performance {
            Symbol(kEvents): SafeMap {},
            Symbol(events.maxEventTargetListeners): 10,
            Symbol(events.maxEventTargetListenersWarned): false
        },
        constants: [Circular: *9]
    },
    monitorEventLoopDelay: [Circular: *12],
    performance: [Circular: *13]
}
```

</td><td valign="top">

```js
{
    performance: {
        now: ƒ now(length: 0) {},
        timeOrigin: 1687133606632.1245
    },
    PerformanceEntry: class PerformanceEntry {},
    PerformanceNodeTiming: class PerformanceNodeTiming {},
    Symbol(CommonJS): 0
}
```

</td></tr></table>

## process

<table><tr><th>Node.js</th><th>Bun</th></tr><tr><td valign="top">

```js
[Object: null prototype] {
    _debugEnd: <ref *2> ƒ _debugEnd(length: 0) {},
    _debugProcess: <ref *3> ƒ _debugProcess(length: 0) {},
    _events: <ref *4> [Object: null prototype] {
        newListener: ƒ startListeningIfSignal(length: 1) {},
        removeListener: ƒ stopListeningIfSignal(length: 1) {},
        warning: ƒ onWarning(length: 1) {},
        exit: ƒ handleProcessExit(length: 0) {}
    },
    _eventsCount: 4,
    _exiting: false,
    _fatalException: <ref *9> ƒ (length: 2) {},
    _getActiveHandles: <ref *10> ƒ _getActiveHandles(length: 0) {},
    _getActiveRequests: <ref *11> ƒ _getActiveRequests(length: 0) {},
    _kill: <ref *12> ƒ _kill(length: 0) {},
    _linkedBinding: <ref *13> ƒ _linkedBinding(length: 1) {},
    _maxListeners: undefined,
    _preload_modules: <ref *14> [],
    _rawDebug: <ref *15> ƒ _rawDebug(length: 0) {},
    _startProfilerIdleNotifier: <ref *16> ƒ (length: 0) {},
    _stopProfilerIdleNotifier: <ref *17> ƒ (length: 0) {},
    _tickCallback: <ref *18> ƒ runNextTicks(length: 0) {},
    abort: <ref *19> ƒ abort(length: 0) {},
    allowedNodeEnvironmentFlags: <ref *20> NodeEnvironmentFlagsSet {
        Symbol(internal properties): {
            array: [
                "--experimental-abortcontroller",
                "--experimental-import-meta-resolve",
                "--no-experimental-import-meta-resolve",
                "--experimental-vm-modules",
                "--no-experimental-vm-modules",
                "--report-signal",
                "--throw-deprecation",
                "--no-throw-deprecation",
                "--trace-deprecation",
                "--no-trace-deprecation",
                "--heapsnapshot-signal",
                "--watch",
                "--no-watch",
                "--deprecation",
                "--no-deprecation",
                "--force-async-hooks-checks",
                "--no-force-async-hooks-checks",
                "--diagnostic-dir",
                "--report-on-fatalerror",
                "--no-report-on-fatalerror",
                "--force-node-api-uncaught-exceptions-policy",
                "--no-force-node-api-uncaught-exceptions-policy",
                "--node-memory-debug",
                "--experimental-specifier-resolution",
                "--addons",
                "--no-addons",
                "--warnings",
                "--no-warnings",
                "--tls-min-v1.1",
                "--no-tls-min-v1.1",
                "--preserve-symlinks-main",
                "--no-preserve-symlinks-main",
                "--global-search-paths",
                "--no-global-search-paths",
                "--experimental-global-customevent",
                "--no-experimental-global-customevent",
                "--pending-deprecation",
                "--no-pending-deprecation",
                "--test-only",
                "--no-test-only",
                "--dns-result-order",
                "--tls-min-v1.2",
                "--no-tls-min-v1.2",
                "--tls-min-v1.0",
                "--no-tls-min-v1.0",
                "--openssl-shared-config",
                "--no-openssl-shared-config",
                "--experimental-json-modules",
                "--conditions",
                "--disable-proto",
                "--zero-fill-buffers",
                "--no-zero-fill-buffers",
                "--experimental-worker",
                "--use-bundled-ca",
                "--no-use-bundled-ca",
                "--experimental-top-level-await",
                "--openssl-legacy-provider",
                "--no-openssl-legacy-provider",
                "--v8-pool-size",
                "--force-fips",
                "--no-force-fips",
                "--experimental-shadow-realm",
                "--no-experimental-shadow-realm",
                "--perf-prof-unwinding-info",
                "--force-context-aware",
                "--no-force-context-aware",
                "--max-semi-space-size",
                "--experimental-global-webcrypto",
                "--no-experimental-global-webcrypto",
                "--preserve-symlinks",
                "--no-preserve-symlinks",
                "--secure-heap-min",
                "--abort-on-uncaught-exception",
                "--trace-event-categories",
                "--report-dir",
                "--unhandled-rejections",
                "--snapshot-blob",
                "--huge-max-old-generation-size",
                "--node-snapshot",
                "--no-node-snapshot",
                "--icu-data-dir",
                "--report-filename",
                "--interpreted-frames-native-stack",
                "--tls-cipher-list",
                "--watch-path",
                "--use-largepages",
                "--secure-heap",
                "--experimental-loader",
                "--heapsnapshot-near-heap-limit",
                "--policy-integrity",
                "--verify-base-objects",
                "--no-verify-base-objects",
                "--use-openssl-ca",
                "--no-use-openssl-ca",
                "--experimental-wasm-modules",
                "--no-experimental-wasm-modules",
                "--experimental-network-imports",
                "--no-experimental-network-imports",
                "--inspect",
                "--no-inspect",
                "--enable-source-maps",
                "--no-enable-source-maps",
                "--experimental-fetch",
                "--no-experimental-fetch",
                "--http-parser",
                "--insecure-http-parser",
                "--no-insecure-http-parser",
                "--watch-preserve-output",
                "--no-watch-preserve-output",
                "--napi-modules",
                "--enable-fips",
                "--no-enable-fips",
                "--tls-min-v1.3",
                "--no-tls-min-v1.3",
                "--tls-max-v1.3",
                "--no-tls-max-v1.3",
                "--inspect-publish-uid",
                "--inspect-brk",
                "--no-inspect-brk",
                "--frozen-intrinsics",
                "--no-frozen-intrinsics",
                "--inspect-port",
                "--trace-exit",
                "--no-trace-exit",
                "--report-uncaught-exception",
                "--no-report-uncaught-exception",
                "--tls-keylog",
                "--max-http-header-size",
                "--redirect-warnings",
                "--enable-etw-stack-walking",
                "--perf-basic-prof",
                "--max-old-space-size",
                "--trace-event-file-pattern",
                "--report-on-signal",
                "--no-report-on-signal",
                "--trace-atomics-wait",
                "--no-trace-atomics-wait",
                "--debug-arraybuffer-allocations",
                "--no-debug-arraybuffer-allocations",
                "--report-compact",
                "--no-report-compact",
                "--trace-sync-io",
                "--no-trace-sync-io",
                "--perf-basic-prof-only-functions",
                "--title",
                "--disallow-code-generation-from-strings",
                "--experimental-report",
                "--experimental-modules",
                "--perf-prof",
                "--experimental-policy",
                "--track-heap-objects",
                "--no-track-heap-objects",
                "--input-type",
                "--jitless",
                "--tls-max-v1.2",
                "--no-tls-max-v1.2",
                "--trace-tls",
                "--no-trace-tls",
                "--trace-sigint",
                "--no-trace-sigint",
                "--trace-warnings",
                "--no-trace-warnings",
                "--experimental-repl-await",
                "--no-experimental-repl-await",
                "--openssl-config",
                "--trace-uncaught",
                "--no-trace-uncaught",
                "--extra-info-on-fatal-exception",
                "--no-extra-info-on-fatal-exception",
                "--stack-trace-limit",
                "--require",
                "--experimental-wasi-unstable-preview1",
                "--no-experimental-wasi-unstable-preview1",
                "--debug-port",
                "--inspect",
                "--inspect-brk",
                "-C",
                "--loader",
                "--prof-process",
                "-r",
                "--trace-events-enabled",
                "--es-module-specifier-resolution",
                "--report-directory"
            ]
        }
    },
    arch: "x64",
    argv: <ref *23> [
        "/opt/hostedtoolcache/node/18.16.0/x64/bin/node",
        "/tmp/fs-fixture-1687133604372-1/process.mjs"
    ],
    argv0: "node",
    assert: <ref *24> ƒ deprecated(length: 0) {},
    binding: <ref *25> ƒ binding(length: 1) {},
    chdir: <ref *26> ƒ wrappedChdir(length: 1) {},
    config: <ref *27> {
        target_defaults: {
            cflags: [],
            default_configuration: "Release",
            defines: [
                "NODE_OPENSSL_CONF_NAME=nodejs_conf",
                "NODE_OPENSSL_HAS_QUIC",
                "ICU_NO_USER_DATA_OVERRIDE"
            ],
            include_dirs: [],
            libraries: []
        },
        variables: {
            asan: 0,
            coverage: false,
            dcheck_always_on: 0,
            debug_nghttp2: false,
            debug_node: false,
            enable_lto: false,
            enable_pgo_generate: false,
            enable_pgo_use: false,
            error_on_warn: false,
            force_dynamic_crt: 0,
            gas_version: "2.30",
            host_arch: "x64",
            icu_data_in: "../../deps/icu-tmp/icudt72l.dat",
            icu_endianness: "l",
            icu_gyp_path: "tools/icu/icu-generic.gyp",
            icu_path: "deps/icu-small",
            icu_small: false,
            icu_ver_major: "72",
            is_debug: 0,
            libdir: "lib",
            llvm_version: "0.0",
            napi_build_version: "8",
            node_builtin_shareable_builtins: [
                "deps/cjs-module-lexer/lexer.js",
                "deps/cjs-module-lexer/dist/lexer.js",
                "deps/undici/undici.js"
            ],
            node_byteorder: "little",
            node_debug_lib: false,
            node_enable_d8: false,
            node_enable_v8_vtunejit: false,
            node_fipsinstall: false,
            node_install_corepack: true,
            node_install_npm: true,
            node_library_files: [
                "lib/_http_agent.js",
                "lib/_http_client.js",
                "lib/_http_common.js",
                "lib/_http_incoming.js",
                "lib/_http_outgoing.js",
                "lib/_http_server.js",
                "lib/_stream_duplex.js",
                "lib/_stream_passthrough.js",
                "lib/_stream_readable.js",
                "lib/_stream_transform.js",
                "lib/_stream_wrap.js",
                "lib/_stream_writable.js",
                "lib/_tls_common.js",
                "lib/_tls_wrap.js",
                "lib/assert.js",
                "lib/assert/strict.js",
                "lib/async_hooks.js",
                "lib/buffer.js",
                "lib/child_process.js",
                "lib/cluster.js",
                "lib/console.js",
                "lib/constants.js",
                "lib/crypto.js",
                "lib/dgram.js",
                "lib/diagnostics_channel.js",
                "lib/dns.js",
                "lib/dns/promises.js",
                "lib/domain.js",
                "lib/events.js",
                "lib/fs.js",
                "lib/fs/promises.js",
                "lib/http.js",
                "lib/http2.js",
                "lib/https.js",
                "lib/inspector.js",
                "lib/internal/abort_controller.js",
                "lib/internal/assert.js",
                "lib/internal/assert/assertion_error.js",
                "lib/internal/assert/calltracker.js",
                "lib/internal/async_hooks.js",
                "lib/internal/blob.js",
                "lib/internal/blocklist.js",
                "lib/internal/bootstrap/browser.js",
                "lib/internal/bootstrap/loaders.js",
                "lib/internal/bootstrap/node.js",
                "lib/internal/bootstrap/switches/does_not_own_process_state.js",
                "lib/internal/bootstrap/switches/does_own_process_state.js",
                "lib/internal/bootstrap/switches/is_main_thread.js",
                "lib/internal/bootstrap/switches/is_not_main_thread.js",
                "lib/internal/buffer.js",
                "lib/internal/child_process.js",
                "lib/internal/child_process/serialization.js",
                "lib/internal/cli_table.js",
                "lib/internal/cluster/child.js",
                "lib/internal/cluster/primary.js",
                "lib/internal/cluster/round_robin_handle.js",
                "lib/internal/cluster/shared_handle.js",
                "lib/internal/cluster/utils.js",
                "lib/internal/cluster/worker.js",
                "lib/internal/console/constructor.js",
                "lib/internal/console/global.js",
                "lib/internal/constants.js",
                "lib/internal/crypto/aes.js",
                "lib/internal/crypto/certificate.js",
                "lib/internal/crypto/cfrg.js",
                "lib/internal/crypto/cipher.js",
                "lib/internal/crypto/diffiehellman.js",
                "lib/internal/crypto/ec.js",
                "lib/internal/crypto/hash.js",
                "lib/internal/crypto/hashnames.js",
                "lib/internal/crypto/hkdf.js",
                "lib/internal/crypto/keygen.js",
                "lib/internal/crypto/keys.js",
                "lib/internal/crypto/mac.js",
                "lib/internal/crypto/pbkdf2.js",
                "lib/internal/crypto/random.js",
                "lib/internal/crypto/rsa.js",
                "lib/internal/crypto/scrypt.js",
                "lib/internal/crypto/sig.js",
                "lib/internal/crypto/util.js",
                "lib/internal/crypto/webcrypto.js",
                "lib/internal/crypto/x509.js",
                "lib/internal/debugger/inspect.js",
                "lib/internal/debugger/inspect_client.js",
                "lib/internal/debugger/inspect_repl.js",
                "lib/internal/dgram.js",
                "lib/internal/dns/callback_resolver.js",
                "lib/internal/dns/promises.js",
                "lib/internal/dns/utils.js",
                "lib/internal/dtrace.js",
                "lib/internal/encoding.js",
                "lib/internal/error_serdes.js",
                "lib/internal/errors.js",
                "lib/internal/event_target.js",
                "lib/internal/file.js",
                "lib/internal/fixed_queue.js",
                "lib/internal/freelist.js",
                "lib/internal/freeze_intrinsics.js",
                "lib/internal/fs/cp/cp-sync.js",
                "lib/internal/fs/cp/cp.js",
                "lib/internal/fs/dir.js",
                "lib/internal/fs/promises.js",
                "lib/internal/fs/read_file_context.js",
                "lib/internal/fs/recursive_watch.js",
                "lib/internal/fs/rimraf.js",
                "lib/internal/fs/streams.js",
                "lib/internal/fs/sync_write_stream.js",
                "lib/internal/fs/utils.js",
                "lib/internal/fs/watchers.js",
                "lib/internal/heap_utils.js",
                "lib/internal/histogram.js",
                "lib/internal/http.js",
                "lib/internal/http2/compat.js",
                "lib/internal/http2/core.js",
                "lib/internal/http2/util.js",
                "lib/internal/idna.js",
                "lib/internal/inspector_async_hook.js",
                "lib/internal/js_stream_socket.js",
                "lib/internal/legacy/processbinding.js",
                "lib/internal/linkedlist.js",
                "lib/internal/main/check_syntax.js",
                "lib/internal/main/environment.js",
                "lib/internal/main/eval_stdin.js",
                "lib/internal/main/eval_string.js",
                "lib/internal/main/inspect.js",
                "lib/internal/main/mksnapshot.js",
                "lib/internal/main/print_help.js",
                "lib/internal/main/prof_process.js",
                "lib/internal/main/repl.js",
                "lib/internal/main/run_main_module.js",
                "lib/internal/main/single_executable_application.js",
                "lib/internal/main/test_runner.js",
                "lib/internal/main/watch_mode.js",
                "lib/internal/main/worker_thread.js",
                "lib/internal/mime.js",
                "lib/internal/modules/cjs/helpers.js",
                "lib/internal/modules/cjs/loader.js",
                "lib/internal/modules/esm/assert.js",
                "lib/internal/modules/esm/create_dynamic_module.js",
                "lib/internal/modules/esm/fetch_module.js",
                "lib/internal/modules/esm/formats.js",
                "lib/internal/modules/esm/get_format.js",
                "lib/internal/modules/esm/handle_process_exit.js",
                "lib/internal/modules/esm/initialize_import_meta.js",
                "lib/internal/modules/esm/load.js",
                "lib/internal/modules/esm/loader.js",
                "lib/internal/modules/esm/module_job.js",
                "lib/internal/modules/esm/module_map.js",
                "lib/internal/modules/esm/package_config.js",
                "lib/internal/modules/esm/resolve.js",
                "lib/internal/modules/esm/translators.js",
                "lib/internal/modules/esm/utils.js",
                "lib/internal/modules/package_json_reader.js",
                "lib/internal/modules/run_main.js",
                "lib/internal/net.js",
                "lib/internal/options.js",
                "lib/internal/per_context/domexception.js",
                "lib/internal/per_context/messageport.js",
                "lib/internal/per_context/primordials.js",
                "lib/internal/perf/event_loop_delay.js",
                "lib/internal/perf/event_loop_utilization.js",
                "lib/internal/perf/nodetiming.js",
                "lib/internal/perf/observe.js",
                "lib/internal/perf/performance.js",
                "lib/internal/perf/performance_entry.js",
                "lib/internal/perf/resource_timing.js",
                "lib/internal/perf/timerify.js",
                "lib/internal/perf/usertiming.js",
                "lib/internal/perf/utils.js",
                "lib/internal/policy/manifest.js",
                "lib/internal/policy/sri.js",
                "lib/internal/priority_queue.js",
                "lib/internal/process/esm_loader.js",
                "lib/internal/process/execution.js",
                "lib/internal/process/per_thread.js",
                "lib/internal/process/policy.js",
                "lib/internal/process/pre_execution.js",
                "lib/internal/process/promises.js",
                "lib/internal/process/report.js",
                "lib/internal/process/signal.js",
                "lib/internal/process/task_queues.js",
                "lib/internal/process/warning.js",
                "lib/internal/process/worker_thread_only.js",
                "lib/internal/promise_hooks.js",
                "lib/internal/querystring.js",
                "lib/internal/readline/callbacks.js",
                "lib/internal/readline/emitKeypressEvents.js",
                "lib/internal/readline/interface.js",
                "lib/internal/readline/promises.js",
                "lib/internal/readline/utils.js",
                "lib/internal/repl.js",
                "lib/internal/repl/await.js",
                "lib/internal/repl/history.js",
                "lib/internal/repl/utils.js",
                "lib/internal/socket_list.js",
                "lib/internal/socketaddress.js",
                "lib/internal/source_map/prepare_stack_trace.js",
                "lib/internal/source_map/source_map.js",
                "lib/internal/source_map/source_map_cache.js",
                "lib/internal/stream_base_commons.js",
                "lib/internal/streams/add-abort-signal.js",
                "lib/internal/streams/buffer_list.js",
                "lib/internal/streams/compose.js",
                "lib/internal/streams/destroy.js",
                "lib/internal/streams/duplex.js",
                "lib/internal/streams/duplexify.js",
                "lib/internal/streams/end-of-stream.js",
                "lib/internal/streams/from.js",
                "lib/internal/streams/lazy_transform.js",
                "lib/internal/streams/legacy.js",
                "lib/internal/streams/operators.js",
                "lib/internal/streams/passthrough.js",
                "lib/internal/streams/pipeline.js",
                "lib/internal/streams/readable.js",
                "lib/internal/streams/state.js",
                "lib/internal/streams/transform.js",
                "lib/internal/streams/utils.js",
                "lib/internal/streams/writable.js",
                "lib/internal/structured_clone.js",
                "lib/internal/test/binding.js",
                "lib/internal/test/transfer.js",
                "lib/internal/test_runner/coverage.js",
                "lib/internal/test_runner/harness.js",
                "lib/internal/test_runner/mock.js",
                "lib/internal/test_runner/reporter/dot.js",
                "lib/internal/test_runner/reporter/spec.js",
                "lib/internal/test_runner/reporter/tap.js",
                "lib/internal/test_runner/runner.js",
                "lib/internal/test_runner/tap_checker.js",
                "lib/internal/test_runner/tap_lexer.js",
                "lib/internal/test_runner/tap_parser.js",
                "lib/internal/test_runner/test.js",
                "lib/internal/test_runner/tests_stream.js",
                "lib/internal/test_runner/utils.js",
                "lib/internal/test_runner/yaml_to_js.js",
                "lib/internal/timers.js",
                "lib/internal/tls/secure-context.js",
                "lib/internal/tls/secure-pair.js",
                "lib/internal/trace_events_async_hooks.js",
                "lib/internal/tty.js",
                "lib/internal/url.js",
                "lib/internal/util.js",
                "lib/internal/util/colors.js",
                "lib/internal/util/comparisons.js",
                "lib/internal/util/debuglog.js",
                "lib/internal/util/inspect.js",
                "lib/internal/util/inspector.js",
                "lib/internal/util/iterable_weak_map.js",
                "lib/internal/util/parse_args/parse_args.js",
                "lib/internal/util/parse_args/utils.js",
                "lib/internal/util/types.js",
                "lib/internal/v8/startup_snapshot.js",
                "lib/internal/v8_prof_polyfill.js",
                "lib/internal/v8_prof_processor.js",
                "lib/internal/validators.js",
                "lib/internal/vm.js",
                "lib/internal/vm/module.js",
                "lib/internal/wasm_web_api.js",
                "lib/internal/watch_mode/files_watcher.js",
                "lib/internal/watchdog.js",
                "lib/internal/webstreams/adapters.js",
                "lib/internal/webstreams/compression.js",
                "lib/internal/webstreams/encoding.js",
                "lib/internal/webstreams/queuingstrategies.js",
                "lib/internal/webstreams/readablestream.js",
                "lib/internal/webstreams/transfer.js",
                "lib/internal/webstreams/transformstream.js",
                "lib/internal/webstreams/util.js",
                "lib/internal/webstreams/writablestream.js",
                "lib/internal/worker.js",
                "lib/internal/worker/io.js",
                "lib/internal/worker/js_transferable.js",
                "lib/module.js",
                "lib/net.js",
                "lib/os.js",
                "lib/path.js",
                "lib/path/posix.js",
                "lib/path/win32.js",
                "lib/perf_hooks.js",
                "lib/process.js",
                "lib/punycode.js",
                "lib/querystring.js",
                "lib/readline.js",
                "lib/readline/promises.js",
                "lib/repl.js",
                "lib/stream.js",
                "lib/stream/consumers.js",
                "lib/stream/promises.js",
                "lib/stream/web.js",
                "lib/string_decoder.js",
                "lib/sys.js",
                "lib/test.js",
                "lib/timers.js",
                "lib/timers/promises.js",
                "lib/tls.js",
                "lib/trace_events.js",
                "lib/tty.js",
                "lib/url.js",
                "lib/util.js",
                "lib/util/types.js",
                "lib/v8.js",
                "lib/vm.js",
                "lib/wasi.js",
                "lib/worker_threads.js",
                "lib/zlib.js"
            ],
            node_module_version: 108,
            node_no_browser_globals: false,
            node_prefix: "/",
            node_release_urlbase: "https://nodejs.org/download/release/",
            node_section_ordering_info: "",
            node_shared: false,
            node_shared_brotli: false,
            node_shared_cares: false,
            node_shared_http_parser: false,
            node_shared_libuv: false,
            node_shared_nghttp2: false,
            node_shared_nghttp3: false,
            node_shared_ngtcp2: false,
            node_shared_openssl: false,
            node_shared_zlib: false,
            node_tag: "",
            node_target_type: "executable",
            node_use_bundled_v8: true,
            node_use_dtrace: false,
            node_use_etw: false,
            node_use_node_code_cache: true,
            node_use_node_snapshot: true,
            node_use_openssl: true,
            node_use_v8_platform: true,
            node_with_ltcg: false,
            node_without_node_options: false,
            openssl_is_fips: false,
            openssl_quic: true,
            ossfuzz: false,
            shlib_suffix: "so.108",
            single_executable_application: true,
            target_arch: "x64",
            v8_enable_31bit_smis_on_64bit_arch: 0,
            v8_enable_gdbjit: 0,
            v8_enable_hugepage: 0,
            v8_enable_i18n_support: 1,
            v8_enable_inspector: 1,
            v8_enable_javascript_promise_hooks: 1,
            v8_enable_lite_mode: 0,
            v8_enable_object_print: 1,
            v8_enable_pointer_compression: 0,
            v8_enable_shared_ro_heap: 1,
            v8_enable_short_builtin_calls: 1,
            v8_enable_webassembly: 1,
            v8_no_strict_aliasing: 1,
            v8_optimized_debug: 1,
            v8_promise_internal_field_count: 1,
            v8_random_seed: 0,
            v8_trace_maps: 0,
            v8_use_siphash: 1,
            want_separate_host_toolset: 0
        }
    },
    constrainedMemory: <ref *36> ƒ constrainedMemory(length: 0) {},
    cpuUsage: <ref *37> ƒ cpuUsage(length: 1) {},
    cwd: <ref *38> ƒ wrappedCwd(length: 0) {},
    debugPort: 9229,
    default: process {
        version: "v18.16.0",
        versions: <ref *40> {
            node: "18.16.0",
            acorn: "8.8.2",
            ada: "1.0.4",
            ares: "1.19.0",
            brotli: "1.0.9",
            cldr: "42.0",
            icu: "72.1",
            llhttp: "6.0.10",
            modules: "108",
            napi: "8",
            nghttp2: "1.52.0",
            nghttp3: "0.7.0",
            ngtcp2: "0.8.1",
            openssl: "3.0.8+quic",
            simdutf: "3.2.2",
            tz: "2022g",
            undici: "5.21.0",
            unicode: "15.0",
            uv: "1.44.2",
            uvwasi: "0.0.15",
            v8: "10.2.154.26-node.26",
            zlib: "1.2.13"
        },
        arch: "x64",
        platform: "linux",
        release: <ref *41> {
            name: "node",
            lts: "Hydrogen",
            sourceUrl: "https://nodejs.org/download/release/v18.16.0/node-v18.16.0.tar.gz",
            headersUrl: "https://nodejs.org/download/release/v18.16.0/node-v18.16.0-headers.tar.gz"
        },
        _rawDebug: [Circular: *15],
        moduleLoadList: <ref *42> [
            "Internal Binding builtins",
            "Internal Binding errors",
            "Internal Binding util",
            "NativeModule internal/errors",
            "Internal Binding config",
            "Internal Binding timers",
            "Internal Binding async_wrap",
            "Internal Binding constants",
            "Internal Binding types",
            "NativeModule internal/util",
            "NativeModule internal/util/types",
            "NativeModule internal/validators",
            "NativeModule internal/promise_hooks",
            "Internal Binding task_queue",
            "Internal Binding symbols",
            "NativeModule internal/async_hooks",
            "NativeModule internal/linkedlist",
            "NativeModule internal/priority_queue",
            "NativeModule internal/assert",
            "Internal Binding icu",
            "NativeModule internal/util/inspect",
            "NativeModule internal/util/debuglog",
            "NativeModule internal/timers",
            "NativeModule events",
            "Internal Binding buffer",
            "Internal Binding string_decoder",
            "NativeModule internal/buffer",
            "Internal Binding blob",
            "NativeModule internal/encoding",
            "Internal Binding messaging",
            "NativeModule internal/worker/js_transferable",
            "NativeModule internal/constants",
            "NativeModule internal/blob",
            "NativeModule internal/file",
            "NativeModule buffer",
            "NativeModule internal/modules/esm/handle_process_exit",
            "Internal Binding process_methods",
            "NativeModule internal/process/per_thread",
            "Internal Binding credentials",
            "NativeModule internal/process/promises",
            "NativeModule internal/fixed_queue",
            "NativeModule async_hooks",
            "NativeModule internal/process/task_queues",
            "Internal Binding worker",
            "NativeModule internal/util/parse_args/utils",
            "NativeModule internal/util/parse_args/parse_args",
            "NativeModule internal/mime",
            "NativeModule util",
            "Internal Binding performance",
            "NativeModule internal/perf/utils",
            "NativeModule internal/event_target",
            "NativeModule timers",
            "NativeModule internal/abort_controller",
            "NativeModule internal/streams/utils",
            "NativeModule internal/streams/end-of-stream",
            "NativeModule internal/streams/destroy",
            "NativeModule internal/streams/legacy",
            "NativeModule internal/streams/add-abort-signal",
            "NativeModule internal/streams/buffer_list",
            "NativeModule internal/streams/state",
            "NativeModule string_decoder",
            "NativeModule internal/streams/from",
            "NativeModule internal/streams/readable",
            "NativeModule internal/streams/writable",
            "NativeModule internal/streams/duplex",
            "NativeModule internal/streams/pipeline",
            "NativeModule internal/streams/compose",
            "NativeModule internal/streams/operators",
            "NativeModule stream/promises",
            "NativeModule internal/streams/transform",
            "NativeModule internal/streams/passthrough",
            "NativeModule stream",
            "NativeModule internal/worker/io",
            "NativeModule internal/structured_clone",
            "Internal Binding trace_events",
            "NativeModule path",
            "NativeModule internal/process/execution",
            "NativeModule internal/process/warning",
            "Internal Binding fs",
            "NativeModule internal/querystring",
            "NativeModule querystring",
            "Internal Binding url",
            "NativeModule internal/url",
            "NativeModule internal/fs/utils",
            "Internal Binding fs_dir",
            "NativeModule internal/fs/dir",
            "Internal Binding fs_event_wrap",
            "Internal Binding uv",
            "NativeModule internal/fs/watchers",
            "NativeModule internal/fs/read_file_context",
            "NativeModule fs",
            "Internal Binding serdes",
            "Internal Binding mksnapshot",
            "NativeModule internal/v8/startup_snapshot",
            "Internal Binding profiler",
            "Internal Binding heap_utils",
            "Internal Binding stream_wrap",
            "NativeModule internal/stream_base_commons",
            "NativeModule internal/heap_utils",
            "Internal Binding options",
            "NativeModule internal/options",
            "Internal Binding v8",
            "NativeModule v8",
            "Internal Binding contextify",
            "NativeModule internal/vm",
            "NativeModule vm",
            "NativeModule internal/idna",
            "NativeModule url",
            "Internal Binding crypto",
            "NativeModule internal/crypto/random",
            "NativeModule internal/crypto/hashnames",
            "NativeModule internal/crypto/util",
            "NativeModule internal/crypto/pbkdf2",
            "NativeModule internal/crypto/scrypt",
            "NativeModule internal/crypto/keys",
            "NativeModule internal/crypto/hkdf",
            "NativeModule internal/crypto/keygen",
            "NativeModule internal/crypto/diffiehellman",
            "NativeModule internal/streams/lazy_transform",
            "NativeModule internal/crypto/cipher",
            "NativeModule internal/crypto/sig",
            "NativeModule internal/crypto/hash",
            "NativeModule internal/crypto/x509",
            "NativeModule internal/crypto/certificate",
            "NativeModule crypto",
            "NativeModule internal/console/constructor",
            "NativeModule internal/console/global",
            "NativeModule internal/util/inspector",
            "Internal Binding inspector",
            "NativeModule internal/perf/performance_entry",
            "NativeModule internal/perf/observe",
            "NativeModule internal/perf/resource_timing",
            "NativeModule internal/perf/nodetiming",
            "NativeModule internal/perf/usertiming",
            "NativeModule internal/perf/event_loop_utilization",
            "NativeModule internal/histogram",
            "NativeModule internal/perf/timerify",
            "NativeModule internal/perf/performance",
            "NativeModule internal/perf/event_loop_delay",
            "NativeModule perf_hooks",
            "NativeModule internal/webstreams/util",
            "NativeModule internal/webstreams/writablestream",
            "NativeModule internal/webstreams/readablestream",
            "NativeModule internal/webstreams/transformstream",
            "NativeModule internal/webstreams/queuingstrategies",
            "NativeModule internal/webstreams/encoding",
            "NativeModule internal/webstreams/adapters",
            "NativeModule internal/webstreams/compression",
            "NativeModule internal/process/signal",
            "NativeModule internal/process/pre_execution",
            "NativeModule internal/inspector_async_hook",
            "NativeModule internal/wasm_web_api",
            "Internal Binding wasm_web_api",
            "Internal Binding report",
            "NativeModule internal/process/report",
            "NativeModule internal/util/iterable_weak_map",
            "NativeModule internal/modules/cjs/helpers",
            "NativeModule internal/source_map/source_map_cache",
            "NativeModule internal/net",
            "NativeModule internal/dns/utils",
            "NativeModule internal/modules/package_json_reader",
            "Internal Binding module_wrap",
            "NativeModule internal/modules/esm/module_job",
            "NativeModule internal/modules/esm/assert",
            "NativeModule internal/modules/esm/module_map",
            "NativeModule internal/modules/esm/package_config",
            "Internal Binding tcp_wrap",
            "Internal Binding pipe_wrap",
            "NativeModule internal/dtrace",
            "NativeModule net",
            "Internal Binding block_list",
            "NativeModule internal/socketaddress",
            "NativeModule internal/blocklist",
            "NativeModule internal/modules/esm/fetch_module",
            "NativeModule internal/modules/esm/formats",
            "NativeModule internal/modules/esm/get_format",
            "NativeModule internal/modules/esm/resolve",
            "NativeModule internal/modules/esm/initialize_import_meta",
            "NativeModule internal/fs/rimraf",
            "NativeModule internal/readline/utils",
            "NativeModule internal/readline/callbacks",
            "NativeModule internal/readline/interface",
            "NativeModule internal/fs/promises",
            "NativeModule internal/modules/esm/load",
            "NativeModule internal/modules/esm/create_dynamic_module",
            "NativeModule internal/modules/esm/translators",
            "NativeModule internal/modules/esm/loader",
            "NativeModule internal/vm/module",
            "NativeModule internal/process/esm_loader",
            "NativeModule internal/modules/cjs/loader",
            "NativeModule internal/modules/run_main",
            "NativeModule process"
        ],
        binding: [Circular: *25],
        _linkedBinding: [Circular: *13],
        _events: [Circular: *4],
        _eventsCount: 4,
        _maxListeners: undefined,
        domain: null,
        [get/set] _exiting: false,
        [get/set] config: [Circular: *27],
        dlopen: <ref *43> ƒ dlopen(length: 0) {},
        uptime: <ref *44> ƒ uptime(length: 0) {},
        _getActiveRequests: [Circular: *11],
        _getActiveHandles: [Circular: *10],
        getActiveResourcesInfo: <ref *45> ƒ getActiveResourcesInfo(length: 0) {},
        reallyExit: <ref *46> ƒ reallyExit(length: 0) {},
        _kill: [Circular: *12],
        cpuUsage: [Circular: *37],
        resourceUsage: <ref *47> ƒ resourceUsage(length: 0) {},
        memoryUsage: <ref *48> ƒ memoryUsage(length: 0) {
            rss: ƒ rss(length: 0) {}
        },
        constrainedMemory: [Circular: *36],
        kill: <ref *50> ƒ kill(length: 2) {},
        exit: <ref *51> ƒ exit(length: 1) {},
        hrtime: <ref *52> ƒ hrtime(length: 1) {
            bigint: ƒ hrtimeBigInt(length: 0) {}
        },
        openStdin: <ref *54> ƒ (length: 0) {},
        getuid: <ref *55> ƒ getuid(length: 0) {},
        geteuid: <ref *56> ƒ geteuid(length: 0) {},
        getgid: <ref *57> ƒ getgid(length: 0) {},
        getegid: <ref *58> ƒ getegid(length: 0) {},
        getgroups: <ref *59> ƒ getgroups(length: 0) {},
        allowedNodeEnvironmentFlags: [Circular: *20],
        assert: [Circular: *24],
        features: <ref *60> {
            inspector: true,
            debug: false,
            uv: true,
            ipv6: true,
            tls_alpn: true,
            tls_sni: true,
            tls_ocsp: true,
            tls: true,
            [get/set] cached_builtins: true
        },
        _fatalException: [Circular: *9],
        setUncaughtExceptionCaptureCallback: <ref *61> ƒ setUncaughtExceptionCaptureCallback(length: 1) {},
        hasUncaughtExceptionCaptureCallback: <ref *62> ƒ hasUncaughtExceptionCaptureCallback(length: 0) {},
        emitWarning: <ref *63> ƒ emitWarning(length: 4) {},
        nextTick: <ref *64> ƒ nextTick(length: 1) {},
        _tickCallback: [Circular: *18],
        _debugProcess: [Circular: *3],
        _debugEnd: [Circular: *2],
        _startProfilerIdleNotifier: [Circular: *16],
        _stopProfilerIdleNotifier: [Circular: *17],
        [get/set] stdout: <ref *65> Socket {
            connecting: false,
            _hadError: false,
            _parent: null,
            _host: null,
            _closeAfterHandlingError: false,
            _readableState: ReadableState {
                objectMode: false,
                highWaterMark: 16384,
                buffer: BufferList {
                    head: null,
                    tail: null,
                    length: 0
                },
                length: 0,
                pipes: [],
                flowing: null,
                ended: true,
                endEmitted: true,
                reading: false,
                constructed: true,
                sync: true,
                needReadable: false,
                emittedReadable: false,
                readableListening: false,
                resumeScheduled: false,
                errorEmitted: false,
                emitClose: false,
                autoDestroy: true,
                destroyed: false,
                errored: null,
                closed: false,
                closeEmitted: false,
                defaultEncoding: "utf8",
                awaitDrainWriters: null,
                multiAwaitDrain: false,
                readingMore: false,
                dataEmitted: false,
                decoder: null,
                encoding: null,
                readable: false,
                Symbol(kPaused): null
            },
            _events: [Object: null prototype] {
                end: <ref *70> ƒ onReadableStreamEnd(length: 0) {}
            },
            _eventsCount: 1,
            _maxListeners: undefined,
            _writableState: WritableState {
                objectMode: false,
                highWaterMark: 16384,
                finalCalled: false,
                needDrain: false,
                ending: false,
                ended: false,
                finished: false,
                destroyed: false,
                decodeStrings: false,
                defaultEncoding: "utf8",
                length: 0,
                writing: false,
                corked: 0,
                sync: true,
                bufferProcessing: false,
                onwrite: ƒ bound onwrite(length: 1) {},
                writecb: null,
                writelen: 0,
                afterWriteTickInfo: null,
                buffered: [],
                bufferedIndex: 0,
                allBuffers: true,
                allNoop: true,
                pendingcb: 0,
                constructed: true,
                prefinished: false,
                errorEmitted: false,
                emitClose: false,
                autoDestroy: true,
                errored: null,
                closed: false,
                closeEmitted: false,
                Symbol(kOnFinished): []
            },
            allowHalfOpen: false,
            _sockname: null,
            _pendingData: null,
            _pendingEncoding: "",
            server: null,
            _server: null,
            _type: "pipe",
            fd: 1,
            _isStdio: true,
            destroySoon: <ref *75> ƒ destroy(length: 2) {},
            _destroy: <ref *76> ƒ dummyDestroy(length: 2) {},
            Symbol(async_id_symbol): 8,
            Symbol(kHandle): Pipe {
                Symbol(owner_symbol): [Circular: *65]
            },
            Symbol(lastWriteQueueSize): 0,
            Symbol(timeout): null,
            Symbol(kBuffer): null,
            Symbol(kBufferCb): null,
            Symbol(kBufferGen): null,
            Symbol(kCapture): false,
            Symbol(kSetNoDelay): false,
            Symbol(kSetKeepAlive): false,
            Symbol(kSetKeepAliveInitialDelay): 0,
            Symbol(kBytesRead): 0,
            Symbol(kBytesWritten): 0
        },
        [get/set] stdin: <ref *78> Socket {
            connecting: false,
            _hadError: false,
            _parent: null,
            _host: null,
            _closeAfterHandlingError: false,
            _readableState: ReadableState {
                objectMode: false,
                highWaterMark: 16384,
                buffer: BufferList {
                    head: null,
                    tail: null,
                    length: 0
                },
                length: 0,
                pipes: [],
                flowing: null,
                ended: false,
                endEmitted: false,
                reading: false,
                constructed: true,
                sync: true,
                needReadable: false,
                emittedReadable: false,
                readableListening: false,
                resumeScheduled: false,
                errorEmitted: false,
                emitClose: false,
                autoDestroy: true,
                destroyed: false,
                errored: null,
                closed: false,
                closeEmitted: false,
                defaultEncoding: "utf8",
                awaitDrainWriters: null,
                multiAwaitDrain: false,
                readingMore: false,
                dataEmitted: false,
                decoder: null,
                encoding: null,
                Symbol(kPaused): null
            },
            _events: [Object: null prototype] {
                end: [Circular: *70],
                pause: ƒ (length: 0) {}
            },
            _eventsCount: 2,
            _maxListeners: undefined,
            _writableState: WritableState {
                objectMode: false,
                highWaterMark: 16384,
                finalCalled: false,
                needDrain: false,
                ending: true,
                ended: true,
                finished: true,
                destroyed: false,
                decodeStrings: false,
                defaultEncoding: "utf8",
                length: 0,
                writing: false,
                corked: 0,
                sync: true,
                bufferProcessing: false,
                onwrite: ƒ bound onwrite(length: 1) {},
                writecb: null,
                writelen: 0,
                afterWriteTickInfo: null,
                buffered: [],
                bufferedIndex: 0,
                allBuffers: true,
                allNoop: true,
                pendingcb: 0,
                constructed: true,
                prefinished: false,
                errorEmitted: false,
                emitClose: false,
                autoDestroy: true,
                errored: null,
                closed: false,
                closeEmitted: false,
                writable: false,
                Symbol(kOnFinished): []
            },
            allowHalfOpen: false,
            _sockname: null,
            _pendingData: null,
            _pendingEncoding: "",
            server: null,
            _server: null,
            fd: 0,
            Symbol(async_id_symbol): 9,
            Symbol(kHandle): Pipe {
                reading: false,
                Symbol(owner_symbol): [Circular: *78]
            },
            Symbol(lastWriteQueueSize): 0,
            Symbol(timeout): null,
            Symbol(kBuffer): null,
            Symbol(kBufferCb): null,
            Symbol(kBufferGen): null,
            Symbol(kCapture): false,
            Symbol(kSetNoDelay): false,
            Symbol(kSetKeepAlive): false,
            Symbol(kSetKeepAliveInitialDelay): 0,
            Symbol(kBytesRead): 0,
            Symbol(kBytesWritten): 0
        },
        [get/set] stderr: <ref *89> Socket {
            connecting: false,
            _hadError: false,
            _parent: null,
            _host: null,
            _closeAfterHandlingError: false,
            _readableState: ReadableState {
                objectMode: false,
                highWaterMark: 16384,
                buffer: BufferList {
                    head: null,
                    tail: null,
                    length: 0
                },
                length: 0,
                pipes: [],
                flowing: null,
                ended: true,
                endEmitted: true,
                reading: false,
                constructed: true,
                sync: true,
                needReadable: false,
                emittedReadable: false,
                readableListening: false,
                resumeScheduled: false,
                errorEmitted: false,
                emitClose: false,
                autoDestroy: true,
                destroyed: false,
                errored: null,
                closed: false,
                closeEmitted: false,
                defaultEncoding: "utf8",
                awaitDrainWriters: null,
                multiAwaitDrain: false,
                readingMore: false,
                dataEmitted: false,
                decoder: null,
                encoding: null,
                readable: false,
                Symbol(kPaused): null
            },
            _events: [Object: null prototype] {
                end: [Circular: *70]
            },
            _eventsCount: 1,
            _maxListeners: undefined,
            _writableState: WritableState {
                objectMode: false,
                highWaterMark: 16384,
                finalCalled: false,
                needDrain: false,
                ending: false,
                ended: false,
                finished: false,
                destroyed: false,
                decodeStrings: false,
                defaultEncoding: "utf8",
                length: 0,
                writing: false,
                corked: 0,
                sync: true,
                bufferProcessing: false,
                onwrite: ƒ bound onwrite(length: 1) {},
                writecb: null,
                writelen: 0,
                afterWriteTickInfo: null,
                buffered: [],
                bufferedIndex: 0,
                allBuffers: true,
                allNoop: true,
                pendingcb: 0,
                constructed: true,
                prefinished: false,
                errorEmitted: false,
                emitClose: false,
                autoDestroy: true,
                errored: null,
                closed: false,
                closeEmitted: false,
                Symbol(kOnFinished): []
            },
            allowHalfOpen: false,
            _sockname: null,
            _pendingData: null,
            _pendingEncoding: "",
            server: null,
            _server: null,
            _type: "pipe",
            fd: 2,
            _isStdio: true,
            destroySoon: [Circular: *75],
            _destroy: [Circular: *76],
            Symbol(async_id_symbol): 10,
            Symbol(kHandle): Pipe {
                Symbol(owner_symbol): [Circular: *89]
            },
            Symbol(lastWriteQueueSize): 0,
            Symbol(timeout): null,
            Symbol(kBuffer): null,
            Symbol(kBufferCb): null,
            Symbol(kBufferGen): null,
            Symbol(kCapture): false,
            Symbol(kSetNoDelay): false,
            Symbol(kSetKeepAlive): false,
            Symbol(kSetKeepAliveInitialDelay): 0,
            Symbol(kBytesRead): 0,
            Symbol(kBytesWritten): 0
        },
        abort: [Circular: *19],
        umask: <ref *99> ƒ wrappedUmask(length: 1) {},
        chdir: [Circular: *26],
        cwd: [Circular: *38],
        initgroups: <ref *100> ƒ initgroups(length: 2) {},
        setgroups: <ref *101> ƒ setgroups(length: 1) {},
        setegid: <ref *102> ƒ (length: 1) {},
        seteuid: <ref *103> ƒ (length: 1) {},
        setgid: <ref *104> ƒ (length: 1) {},
        setuid: <ref *105> ƒ (length: 1) {},
        env: <ref *106>  {
            GITHUB_STATE: "/home/runner/work/_temp/_runner_file_commands/save_state_602f8543-2546-406f-a2b6-faeeaca4c37d",
            npm_package_devDependencies__types_node: "^18.15.11",
            STATS_TRP: "true",
            DEPLOYMENT_BASEPATH: "/opt/runner",
            DOTNET_NOLOGO: "1",
            USER: "runner",
            npm_config_user_agent: "pnpm/7.33.1 npm/? node/v18.16.0 linux x64",
            CI: "true",
            RUNNER_ENVIRONMENT: "github-hosted",
            GITHUB_ENV: "/home/runner/work/_temp/_runner_file_commands/set_env_602f8543-2546-406f-a2b6-faeeaca4c37d",
            PIPX_HOME: "/opt/pipx",
            npm_package_devDependencies_execa: "^7.1.1",
            npm_node_execpath: "/opt/hostedtoolcache/node/18.16.0/x64/bin/node",
            JAVA_HOME_8_X64: "/usr/lib/jvm/temurin-8-jdk-amd64",
            SHLVL: "1",
            HOME: "/home/runner",
            RUNNER_TEMP: "/home/runner/work/_temp",
            GITHUB_EVENT_PATH: "/home/runner/work/_temp/_github_workflow/event.json",
            JAVA_HOME_11_X64: "/usr/lib/jvm/temurin-11-jdk-amd64",
            PIPX_BIN_DIR: "/opt/pipx_bin",
            GITHUB_REPOSITORY_OWNER: "privatenumber",
            npm_package_devDependencies__pvtnbr_eslint_config: "^0.33.0",
            GRADLE_HOME: "/usr/share/gradle-8.1.1",
            ANDROID_NDK_LATEST_HOME: "/usr/local/lib/android/sdk/ndk/25.2.9519653",
            STATS_RDCL: "true",
            GITHUB_RETENTION_DAYS: "90",
            GITHUB_REPOSITORY_OWNER_ID: "1075694",
            POWERSHELL_DISTRIBUTION_CHANNEL: "GitHub-Actions-ubuntu22",
            AZURE_EXTENSION_DIR: "/opt/az/azcliextensions",
            GITHUB_HEAD_REF: "",
            SYSTEMD_EXEC_PID: "666",
            GITHUB_GRAPHQL_URL: "https://api.github.com/graphql",
            GOROOT_1_20_X64: "/opt/hostedtoolcache/go/1.20.5/x64",
            NVM_DIR: "/home/runner/.nvm",
            DOTNET_SKIP_FIRST_TIME_EXPERIENCE: "1",
            JAVA_HOME_17_X64: "/usr/lib/jvm/temurin-17-jdk-amd64",
            ImageVersion: "20230611.1",
            npm_package_eslintConfig_ignorePatterns_0: "README.md",
            RUNNER_OS: "Linux",
            GITHUB_API_URL: "https://api.github.com",
            SWIFT_PATH: "/usr/share/swift/usr/bin",
            RUNNER_USER: "runner",
            CHROMEWEBDRIVER: "/usr/local/share/chrome_driver",
            JOURNAL_STREAM: "8:17441",
            GITHUB_WORKFLOW: "Compare Bun and Node.js",
            _: "/home/runner/setup-pnpm/node_modules/.bin/pnpm",
            npm_package_private: "true",
            npm_package_scripts_lint: "eslint --cache .",
            npm_config_registry: "https://registry.npmjs.org/",
            GITHUB_RUN_ID: "5306446636",
            GITHUB_REF_TYPE: "branch",
            BOOTSTRAP_HASKELL_NONINTERACTIVE: "1",
            GITHUB_WORKFLOW_SHA: "3c38864801162ecea862b64207bf6cee1a8a5436",
            GITHUB_BASE_REF: "",
            ImageOS: "ubuntu22",
            npm_package_scripts_start: "tsx index.ts",
            GITHUB_WORKFLOW_REF: "privatenumber/compare-bun-node/.github/workflows/compare.yml@refs/heads/master",
            PERFLOG_LOCATION_SETTING: "RUNNER_PERFLOG",
            GOROOT_1_18_X64: "/opt/hostedtoolcache/go/1.18.10/x64",
            GITHUB_ACTION_REPOSITORY: "",
            npm_config_node_gyp: "/home/runner/setup-pnpm/node_modules/.pnpm/pnpm@7.33.1/node_modules/pnpm/dist/node_modules/node-gyp/…",
            PATH: "/home/runner/work/compare-bun-node/compare-bun-node/node_modules/.bin:/home/runner/setup-pnpm/node_m…",
            ANT_HOME: "/usr/share/ant",
            DOTNET_MULTILEVEL_LOOKUP: "0",
            RUNNER_TRACKING_ID: "github_14a28a65-fcfb-4a2d-979c-e64600b31217",
            INVOCATION_ID: "a8d28a6aa1164ef9999900f11038774b",
            RUNNER_TOOL_CACHE: "/opt/hostedtoolcache",
            GOROOT_1_19_X64: "/opt/hostedtoolcache/go/1.19.10/x64",
            NODE: "/opt/hostedtoolcache/node/18.16.0/x64/bin/node",
            GITHUB_ACTION: "__run",
            GITHUB_RUN_NUMBER: "26",
            GITHUB_TRIGGERING_ACTOR: "privatenumber",
            RUNNER_ARCH: "X64",
            XDG_RUNTIME_DIR: "/run/user/1001",
            AGENT_TOOLSDIRECTORY: "/opt/hostedtoolcache",
            npm_package_devDependencies_comment_mark: "^1.1.1",
            LANG: "C.UTF-8",
            VCPKG_INSTALLATION_ROOT: "/usr/local/share/vcpkg",
            npm_package_devDependencies_eslint: "^8.37.0",
            CONDA: "/usr/share/miniconda",
            RUNNER_NAME: "GitHub Actions 2",
            XDG_CONFIG_HOME: "/home/runner/.config",
            STATS_VMD: "true",
            GITHUB_REF_NAME: "master",
            GITHUB_REPOSITORY: "privatenumber/compare-bun-node",
            npm_package_simple_git_hooks_pre_commit: "pnpm lint-staged",
            npm_lifecycle_script: "tsx index.ts",
            ANDROID_NDK_ROOT: "/usr/local/lib/android/sdk/ndk/25.2.9519653",
            GITHUB_ACTION_REF: "",
            DEBIAN_FRONTEND: "noninteractive",
            GITHUB_REPOSITORY_ID: "622996871",
            GITHUB_ACTIONS: "true",
            NODE_PATH: "/home/runner/setup-pnpm/node_modules/.pnpm/pnpm@7.33.1/node_modules/pnpm/bin/node_modules:/home/runn…",
            npm_package_devDependencies_fs_fixture: "^1.2.0",
            npm_lifecycle_event: "start",
            GITHUB_REF_PROTECTED: "false",
            npm_package_devDependencies_lint_staged: "^13.2.0",
            npm_package_devDependencies_simple_git_hooks: "^2.8.1",
            GITHUB_WORKSPACE: "/home/runner/work/compare-bun-node/compare-bun-node",
            ACCEPT_EULA: "Y",
            GITHUB_JOB: "build",
            RUNNER_PERFLOG: "/home/runner/perflog",
            npm_package_author: "Hiroki Osame <hiroki.osame@gmail.com>",
            GITHUB_SHA: "3c38864801162ecea862b64207bf6cee1a8a5436",
            GITHUB_RUN_ATTEMPT: "1",
            GITHUB_REF: "refs/heads/master",
            GITHUB_ACTOR: "privatenumber",
            ANDROID_SDK_ROOT: "/usr/local/lib/android/sdk",
            npm_package_license: "MIT",
            LEIN_HOME: "/usr/local/lib/lein",
            npm_package_devDependencies_tsx: "^3.12.6",
            GITHUB_PATH: "/home/runner/work/_temp/_runner_file_commands/add_path_602f8543-2546-406f-a2b6-faeeaca4c37d",
            JAVA_HOME: "/usr/lib/jvm/temurin-11-jdk-amd64",
            PWD: "/home/runner/work/compare-bun-node/compare-bun-node",
            GITHUB_ACTOR_ID: "1075694",
            RUNNER_WORKSPACE: "/home/runner/work/compare-bun-node",
            npm_execpath: "/home/runner/setup-pnpm/node_modules/.pnpm/pnpm@7.33.1/node_modules/pnpm/bin/pnpm.cjs",
            HOMEBREW_CLEANUP_PERIODIC_FULL_DAYS: "3650",
            STATS_TIS: "mining",
            GITHUB_EVENT_NAME: "schedule",
            HOMEBREW_NO_AUTO_UPDATE: "1",
            ANDROID_HOME: "/usr/local/lib/android/sdk",
            GITHUB_SERVER_URL: "https://github.com",
            GECKOWEBDRIVER: "/usr/local/share/gecko_driver",
            LEIN_JAR: "/usr/local/lib/lein/self-installs/leiningen-2.10.0-standalone.jar",
            GHCUP_INSTALL_BASE_PREFIX: "/usr/local",
            GITHUB_OUTPUT: "/home/runner/work/_temp/_runner_file_commands/set_output_602f8543-2546-406f-a2b6-faeeaca4c37d",
            EDGEWEBDRIVER: "/usr/local/share/edge_driver",
            npm_command: "run-script",
            PNPM_SCRIPT_SRC_DIR: "/home/runner/work/compare-bun-node/compare-bun-node",
            ANDROID_NDK: "/usr/local/lib/android/sdk/ndk/25.2.9519653",
            SGX_AESM_ADDR: "1",
            CHROME_BIN: "/usr/bin/google-chrome",
            SELENIUM_JAR_PATH: "/usr/share/java/selenium-server.jar",
            PNPM_HOME: "/home/runner/setup-pnpm/node_modules/.bin",
            npm_package_lint_staged____ts_js_: "eslint --cache",
            ANDROID_NDK_HOME: "/usr/local/lib/android/sdk/ndk/25.2.9519653",
            GITHUB_STEP_SUMMARY: "/home/runner/work/_temp/_runner_file_commands/step_summary_602f8543-2546-406f-a2b6-faeeaca4c37d",
            npm_package_eslintConfig_extends: "@pvtnbr",
            INIT_CWD: "/home/runner/work/compare-bun-node/compare-bun-node"
        },
        title: "node",
        argv: [Circular: *23],
        execArgv: <ref *107> [],
        pid: 2404,
        ppid: 1823,
        execPath: "/opt/hostedtoolcache/node/18.16.0/x64/bin/node",
        debugPort: 9229,
        argv0: "node",
        exitCode: undefined,
        _preload_modules: [Circular: *14],
        [get/set] report: <ref *108> {
            writeReport: ƒ writeReport(length: 2) {},
            getReport: ƒ getReport(length: 1) {},
            [get/set] directory: "",
            [get/set] filename: "",
            [get/set] compact: false,
            [get/set] signal: "SIGUSR2",
            [get/set] reportOnFatalError: false,
            [get/set] reportOnSignal: false,
            [get/set] reportOnUncaughtException: false
        },
        setSourceMapsEnabled: <ref *111> ƒ setSourceMapsEnabled(length: 1) {},
        Symbol(kCapture): false
    },
    dlopen: [Circular: *43],
    domain: null,
    emitWarning: [Circular: *63],
    env: [Circular: *106],
    execArgv: [Circular: *107],
    execPath: "/opt/hostedtoolcache/node/18.16.0/x64/bin/node",
    exit: [Circular: *51],
    exitCode: undefined,
    features: [Circular: *60],
    getActiveResourcesInfo: [Circular: *45],
    getegid: [Circular: *58],
    geteuid: [Circular: *56],
    getgid: [Circular: *57],
    getgroups: [Circular: *59],
    getuid: [Circular: *55],
    hasUncaughtExceptionCaptureCallback: [Circular: *62],
    hrtime: [Circular: *52],
    initgroups: [Circular: *100],
    kill: [Circular: *50],
    memoryUsage: [Circular: *48],
    moduleLoadList: [Circular: *42],
    nextTick: [Circular: *64],
    openStdin: [Circular: *54],
    pid: 2404,
    platform: "linux",
    ppid: 1823,
    reallyExit: [Circular: *46],
    release: [Circular: *41],
    report: [Circular: *108],
    resourceUsage: [Circular: *47],
    setSourceMapsEnabled: [Circular: *111],
    setUncaughtExceptionCaptureCallback: [Circular: *61],
    setegid: [Circular: *102],
    seteuid: [Circular: *103],
    setgid: [Circular: *104],
    setgroups: [Circular: *101],
    setuid: [Circular: *105],
    stderr: [Circular: *89],
    stdin: [Circular: *78],
    stdout: [Circular: *65],
    title: "node",
    umask: [Circular: *99],
    uptime: [Circular: *44],
    version: "v18.16.0",
    versions: [Circular: *40]
}
```

</td><td valign="top">

```js
EventEmitter {
    pid: 2417,
    ppid: 1823,
    title: "bun",
    argv: [
        "/home/runner/.bun/bin/bun",
        "/tmp/fs-fixture-1687133604372-1/process.mjs"
    ],
    revision: "fdb7940c4e435a5b7f5a368f4168d748baf6b5b6",
    nextTick: ƒ nextTick(length: 1) {},
    dlopen: ƒ dlopen(length: 1) {},
    cwd: ƒ cwd(length: 0) {},
    chdir: ƒ chdir(length: 0) {},
    exit: ƒ exit(length: 0) {},
    versions: {
        node: "18.15.0",
        bun: "0.6.10",
        webkit: "60d11703a533fd694cd1d6ddda04813eecb5d69f",
        boringssl: "b275c5ce1c88bc06f5a967026d3c0ce1df2be815",
        libarchive: "dc321febde83dd0f31158e1be61a7aedda65e7a2",
        mimalloc: "3c7079967a269027e438a2aac83197076d9fe09d",
        picohttpparser: "066d2b1e9ab820703db0837a7255d92d30f0c9f5",
        uwebsockets: "70b1b9fc1341e8b791b42c5447f90505c2abe156",
        zig: "0.11.0-dev.2571+31738de28",
        zlib: "885674026394870b7e7a05b7bf1ec5eb7bd8a9c0",
        tinycc: "2d3ad9e0d32194ad7fd867b66ebe218dcc8cb5cd",
        lolhtml: "2eed349dcdfa4ff5c19fe7c6e501cfd687601033",
        ares: "0e7a5dee0fbb04080750cf6eabbe89d8bae87faa",
        usockets: "fafc241e8664243fc0c51d69684d5d02b9805134",
        v8: "10.8.168.20-node.8",
        uv: "1.44.2",
        napi: "8",
        modules: "108"
    },
    browser: 0,
    exitCode: 0,
    version: "v18.15.0",
    isBun: 1,
    platform: "linux",
    arch: "x64",
    hrtime: ƒ hrtime(length: 0) {
        bigint: ƒ bigint(length: 0) {}
    },
    release: {
        name: "bun",
        lts: false,
        sourceUrl: "https://github.com/oven-sh/bun/release/bun-v0.6.10/bun-linux-x64-baseline.zip",
        headersUrl: "",
        libUrl: ""
    },
    stdout: N {
        _events: [Object: null prototype] {},
        _eventsCount: 0,
        _maxListeners: undefined,
        bytesWritten: 0,
        Symbol(kCapture): false
    },
    stderr: N {
        _events: [Object: null prototype] {},
        _eventsCount: 0,
        _maxListeners: undefined,
        bytesWritten: 0,
        Symbol(kCapture): false
    },
    stdin: M {
        _readableState: ReadableState {},
        _writableState: _ {
            objectMode: false,
            highWaterMark: 16384,
            finalCalled: false,
            needDrain: false,
            ending: false,
            ended: false,
            finished: false,
            destroyed: false,
            decodeStrings: true,
            defaultEncoding: "utf8",
            length: 0,
            writing: false,
            corked: 0,
            sync: true,
            bufferProcessing: false,
            onwrite: ƒ bound f(length: 1) {},
            writecb: null,
            writelen: 0,
            afterWriteTickInfo: null,
            buffered: [],
            bufferedIndex: 0,
            allBuffers: true,
            allNoop: true,
            pendingcb: 0,
            constructed: true,
            prefinished: false,
            errorEmitted: false,
            emitClose: true,
            autoDestroy: true,
            errored: null,
            closed: false,
            closeEmitted: false,
            Symbol(kOnFinished): []
        },
        allowHalfOpen: true
    },
    abort: ƒ abort(length: 0) {},
    argv0: "bun",
    execPath: "/home/runner/.bun/bin/bun",
    execArgv: [],
    uptime: ƒ uptime(length: 0) {},
    umask: ƒ umask(length: 1) {},
    binding: ƒ binding(length: 1) {},
    config: {
        target_defaults: {},
        variables: {
            v8_enable_i8n_support: 1
        }
    },
    emitWarning: ƒ emitWarning(length: 1) {},
    env: {
        [get/set] GITHUB_STATE: "/home/runner/work/_temp/_runner_file_commands/save_state_602f8543-2546-406f-a2b6-faeeaca4c37d",
        [get/set] npm_package_devDependencies__types_node: "^18.15.11",
        [get/set] STATS_TRP: "true",
        [get/set] DEPLOYMENT_BASEPATH: "/opt/runner",
        [get/set] DOTNET_NOLOGO: "1",
        [get/set] USER: "runner",
        [get/set] npm_config_user_agent: "pnpm/7.33.1 npm/? node/v18.16.0 linux x64",
        [get/set] CI: "true",
        [get/set] RUNNER_ENVIRONMENT: "github-hosted",
        [get/set] GITHUB_ENV: "/home/runner/work/_temp/_runner_file_commands/set_env_602f8543-2546-406f-a2b6-faeeaca4c37d",
        [get/set] PIPX_HOME: "/opt/pipx",
        [get/set] npm_package_devDependencies_execa: "^7.1.1",
        [get/set] npm_node_execpath: "/opt/hostedtoolcache/node/18.16.0/x64/bin/node",
        [get/set] JAVA_HOME_8_X64: "/usr/lib/jvm/temurin-8-jdk-amd64",
        [get/set] SHLVL: "1",
        [get/set] HOME: "/home/runner",
        [get/set] RUNNER_TEMP: "/home/runner/work/_temp",
        [get/set] GITHUB_EVENT_PATH: "/home/runner/work/_temp/_github_workflow/event.json",
        [get/set] JAVA_HOME_11_X64: "/usr/lib/jvm/temurin-11-jdk-amd64",
        [get/set] PIPX_BIN_DIR: "/opt/pipx_bin",
        [get/set] GITHUB_REPOSITORY_OWNER: "privatenumber",
        [get/set] npm_package_devDependencies__pvtnbr_eslint_config: "^0.33.0",
        [get/set] GRADLE_HOME: "/usr/share/gradle-8.1.1",
        [get/set] ANDROID_NDK_LATEST_HOME: "/usr/local/lib/android/sdk/ndk/25.2.9519653",
        [get/set] STATS_RDCL: "true",
        [get/set] GITHUB_RETENTION_DAYS: "90",
        [get/set] GITHUB_REPOSITORY_OWNER_ID: "1075694",
        [get/set] POWERSHELL_DISTRIBUTION_CHANNEL: "GitHub-Actions-ubuntu22",
        [get/set] AZURE_EXTENSION_DIR: "/opt/az/azcliextensions",
        [get/set] GITHUB_HEAD_REF: undefined,
        [get/set] SYSTEMD_EXEC_PID: "666",
        [get/set] GITHUB_GRAPHQL_URL: "https://api.github.com/graphql",
        [get/set] GOROOT_1_20_X64: "/opt/hostedtoolcache/go/1.20.5/x64",
        [get/set] NVM_DIR: "/home/runner/.nvm",
        [get/set] DOTNET_SKIP_FIRST_TIME_EXPERIENCE: "1",
        [get/set] JAVA_HOME_17_X64: "/usr/lib/jvm/temurin-17-jdk-amd64",
        [get/set] ImageVersion: "20230611.1",
        [get/set] npm_package_eslintConfig_ignorePatterns_0: "README.md",
        [get/set] RUNNER_OS: "Linux",
        [get/set] GITHUB_API_URL: "https://api.github.com",
        [get/set] SWIFT_PATH: "/usr/share/swift/usr/bin",
        [get/set] RUNNER_USER: "runner",
        [get/set] CHROMEWEBDRIVER: "/usr/local/share/chrome_driver",
        [get/set] JOURNAL_STREAM: "8:17441",
        [get/set] GITHUB_WORKFLOW: "Compare Bun and Node.js",
        [get/set] _: "/home/runner/setup-pnpm/node_modules/.bin/pnpm",
        [get/set] npm_package_private: "true",
        [get/set] npm_package_scripts_lint: "eslint --cache .",
        [get/set] npm_config_registry: "https://registry.npmjs.org/",
        [get/set] GITHUB_RUN_ID: "5306446636",
        [get/set] GITHUB_REF_TYPE: "branch",
        [get/set] BOOTSTRAP_HASKELL_NONINTERACTIVE: "1",
        [get/set] GITHUB_WORKFLOW_SHA: "3c38864801162ecea862b64207bf6cee1a8a5436",
        [get/set] GITHUB_BASE_REF: undefined,
        [get/set] ImageOS: "ubuntu22",
        [get/set] npm_package_scripts_start: "tsx index.ts",
        [get/set] GITHUB_WORKFLOW_REF: "privatenumber/compare-bun-node/.github/workflows/compare.yml@refs/heads/master",
        [get/set] PERFLOG_LOCATION_SETTING: "RUNNER_PERFLOG",
        [get/set] GOROOT_1_18_X64: "/opt/hostedtoolcache/go/1.18.10/x64",
        [get/set] GITHUB_ACTION_REPOSITORY: undefined,
        [get/set] npm_config_node_gyp: "/home/runner/setup-pnpm/node_modules/.pnpm/pnpm@7.33.1/node_modules/pnpm/dist/node_modules/node-gyp/…",
        [get/set] PATH: "/home/runner/work/compare-bun-node/compare-bun-node/node_modules/.bin:/home/runner/setup-pnpm/node_m…",
        [get/set] ANT_HOME: "/usr/share/ant",
        [get/set] DOTNET_MULTILEVEL_LOOKUP: "0",
        [get/set] RUNNER_TRACKING_ID: "github_14a28a65-fcfb-4a2d-979c-e64600b31217",
        [get/set] INVOCATION_ID: "a8d28a6aa1164ef9999900f11038774b",
        [get/set] RUNNER_TOOL_CACHE: "/opt/hostedtoolcache",
        [get/set] GOROOT_1_19_X64: "/opt/hostedtoolcache/go/1.19.10/x64",
        [get/set] NODE: "/opt/hostedtoolcache/node/18.16.0/x64/bin/node",
        [get/set] GITHUB_ACTION: "__run",
        [get/set] GITHUB_RUN_NUMBER: "26",
        [get/set] GITHUB_TRIGGERING_ACTOR: "privatenumber",
        [get/set] RUNNER_ARCH: "X64",
        [get/set] XDG_RUNTIME_DIR: "/run/user/1001",
        [get/set] AGENT_TOOLSDIRECTORY: "/opt/hostedtoolcache",
        [get/set] npm_package_devDependencies_comment_mark: "^1.1.1",
        [get/set] LANG: "C.UTF-8",
        [get/set] VCPKG_INSTALLATION_ROOT: "/usr/local/share/vcpkg",
        [get/set] npm_package_devDependencies_eslint: "^8.37.0",
        [get/set] CONDA: "/usr/share/miniconda",
        [get/set] RUNNER_NAME: "GitHub Actions 2",
        [get/set] XDG_CONFIG_HOME: "/home/runner/.config",
        [get/set] STATS_VMD: "true",
        [get/set] GITHUB_REF_NAME: "master",
        [get/set] GITHUB_REPOSITORY: "privatenumber/compare-bun-node",
        [get/set] npm_package_simple_git_hooks_pre_commit: "pnpm lint-staged",
        [get/set] npm_lifecycle_script: "tsx index.ts",
        [get/set] ANDROID_NDK_ROOT: "/usr/local/lib/android/sdk/ndk/25.2.9519653",
        [get/set] GITHUB_ACTION_REF: undefined,
        [get/set] DEBIAN_FRONTEND: "noninteractive",
        [get/set] GITHUB_REPOSITORY_ID: "622996871",
        [get/set] GITHUB_ACTIONS: "true",
        [get/set] NODE_PATH: "/home/runner/setup-pnpm/node_modules/.pnpm/pnpm@7.33.1/node_modules/pnpm/bin/node_modules:/home/runn…",
        [get/set] npm_package_devDependencies_fs_fixture: "^1.2.0",
        [get/set] npm_lifecycle_event: "start",
        [get/set] GITHUB_REF_PROTECTED: "false",
        [get/set] npm_package_devDependencies_lint_staged: "^13.2.0",
        [get/set] npm_package_devDependencies_simple_git_hooks: "^2.8.1",
        [get/set] GITHUB_WORKSPACE: "/home/runner/work/compare-bun-node/compare-bun-node",
        [get/set] ACCEPT_EULA: "Y",
        [get/set] GITHUB_JOB: "build",
        [get/set] RUNNER_PERFLOG: "/home/runner/perflog",
        [get/set] npm_package_author: "Hiroki Osame <hiroki.osame@gmail.com>",
        [get/set] GITHUB_SHA: "3c38864801162ecea862b64207bf6cee1a8a5436",
        [get/set] GITHUB_RUN_ATTEMPT: "1",
        [get/set] GITHUB_REF: "refs/heads/master",
        [get/set] GITHUB_ACTOR: "privatenumber",
        [get/set] ANDROID_SDK_ROOT: "/usr/local/lib/android/sdk",
        [get/set] npm_package_license: "MIT",
        [get/set] LEIN_HOME: "/usr/local/lib/lein",
        [get/set] npm_package_devDependencies_tsx: "^3.12.6",
        [get/set] GITHUB_PATH: "/home/runner/work/_temp/_runner_file_commands/add_path_602f8543-2546-406f-a2b6-faeeaca4c37d",
        [get/set] JAVA_HOME: "/usr/lib/jvm/temurin-11-jdk-amd64",
        [get/set] PWD: "/home/runner/work/compare-bun-node/compare-bun-node",
        [get/set] GITHUB_ACTOR_ID: "1075694",
        [get/set] RUNNER_WORKSPACE: "/home/runner/work/compare-bun-node",
        [get/set] npm_execpath: "/home/runner/setup-pnpm/node_modules/.pnpm/pnpm@7.33.1/node_modules/pnpm/bin/pnpm.cjs",
        [get/set] HOMEBREW_CLEANUP_PERIODIC_FULL_DAYS: "3650",
        [get/set] STATS_TIS: "mining",
        [get/set] GITHUB_EVENT_NAME: "schedule",
        [get/set] HOMEBREW_NO_AUTO_UPDATE: "1",
        [get/set] ANDROID_HOME: "/usr/local/lib/android/sdk",
        [get/set] GITHUB_SERVER_URL: "https://github.com",
        [get/set] GECKOWEBDRIVER: "/usr/local/share/gecko_driver",
        [get/set] LEIN_JAR: "/usr/local/lib/lein/self-installs/leiningen-2.10.0-standalone.jar",
        [get/set] GHCUP_INSTALL_BASE_PREFIX: "/usr/local",
        [get/set] GITHUB_OUTPUT: "/home/runner/work/_temp/_runner_file_commands/set_output_602f8543-2546-406f-a2b6-faeeaca4c37d",
        [get/set] EDGEWEBDRIVER: "/usr/local/share/edge_driver",
        [get/set] npm_command: "run-script",
        [get/set] PNPM_SCRIPT_SRC_DIR: "/home/runner/work/compare-bun-node/compare-bun-node",
        [get/set] ANDROID_NDK: "/usr/local/lib/android/sdk/ndk/25.2.9519653",
        [get/set] SGX_AESM_ADDR: "1",
        [get/set] CHROME_BIN: "/usr/bin/google-chrome",
        [get/set] SELENIUM_JAR_PATH: "/usr/share/java/selenium-server.jar",
        [get/set] PNPM_HOME: "/home/runner/setup-pnpm/node_modules/.bin",
        [get/set] npm_package_lint_staged____ts_js_: "eslint --cache",
        [get/set] ANDROID_NDK_HOME: "/usr/local/lib/android/sdk/ndk/25.2.9519653",
        [get/set] GITHUB_STEP_SUMMARY: "/home/runner/work/_temp/_runner_file_commands/step_summary_602f8543-2546-406f-a2b6-faeeaca4c37d",
        [get/set] npm_package_eslintConfig_extends: "@pvtnbr",
        [get/set] INIT_CWD: "/home/runner/work/compare-bun-node/compare-bun-node"
    },
    Symbol(Symbol.toStringTag): "process"
}
```

</td></tr></table>

## punycode

<table><tr><th>Node.js</th><th>Bun</th></tr><tr><td valign="top">

```js
[Object: null prototype] {
    decode: <ref *2> ƒ decode(length: 1) {},
    default: {
        version: "2.1.0",
        ucs2: <ref *4> {
            decode: ƒ ucs2decode(length: 1) {},
            encode: ƒ ucs2encode(length: 1) {}
        },
        decode: [Circular: *2],
        encode: <ref *7> ƒ encode(length: 1) {},
        toASCII: <ref *8> ƒ toASCII(length: 1) {},
        toUnicode: <ref *9> ƒ toUnicode(length: 1) {}
    },
    encode: [Circular: *7],
    toASCII: [Circular: *8],
    toUnicode: [Circular: *9],
    ucs2: [Circular: *4],
    version: "2.1.0"
}
```

</td><td valign="top">

```js
78 | 			}
79 | 
80 | 			const entries = Reflect.ownKeys(value).map(
81 | 				(key) => {
82 | 					const descriptor = Object.getOwnPropertyDescriptor(value, key);
83 | 					if (!descriptor.enumerable) {
             ^
TypeError: undefined is not an object (evaluating 'descriptor.enumerable')
      at /tmp/fs-fixture-1687133604372-1/inspect.mjs:83:10
      at /tmp/fs-fixture-1687133604372-1/inspect.mjs:80:19
      at /tmp/fs-fixture-1687133604372-1/punycode.mjs:4:15
```

</td></tr></table>

## querystring

<table><tr><th>Node.js</th><th>Bun</th></tr><tr><td valign="top">

```js
[Object: null prototype] {
    decode: <ref *2> ƒ parse(length: 4) {},
    default: {
        unescapeBuffer: <ref *4> ƒ unescapeBuffer(length: 2) {},
        unescape: <ref *5> ƒ qsUnescape(length: 2) {},
        escape: <ref *6> ƒ qsEscape(length: 1) {},
        stringify: <ref *7> ƒ stringify(length: 4) {},
        encode: [Circular: *7],
        parse: [Circular: *2],
        decode: [Circular: *2]
    },
    encode: [Circular: *7],
    escape: [Circular: *6],
    parse: [Circular: *2],
    stringify: [Circular: *7],
    unescape: [Circular: *5],
    unescapeBuffer: [Circular: *4]
}
```

</td><td valign="top">

```js
78 | 			}
79 | 
80 | 			const entries = Reflect.ownKeys(value).map(
81 | 				(key) => {
82 | 					const descriptor = Object.getOwnPropertyDescriptor(value, key);
83 | 					if (!descriptor.enumerable) {
             ^
TypeError: undefined is not an object (evaluating 'descriptor.enumerable')
      at /tmp/fs-fixture-1687133604372-1/inspect.mjs:83:10
      at /tmp/fs-fixture-1687133604372-1/inspect.mjs:80:19
      at /tmp/fs-fixture-1687133604372-1/querystring.mjs:4:15
```

</td></tr></table>

## readline

<table><tr><th>Node.js</th><th>Bun</th></tr><tr><td valign="top">

```js
[Object: null prototype] {
    Interface: <ref *2> ƒ Interface(length: 4) {},
    clearLine: <ref *3> ƒ clearLine(length: 3) {},
    clearScreenDown: <ref *4> ƒ clearScreenDown(length: 2) {},
    createInterface: <ref *5> ƒ createInterface(length: 4) {},
    cursorTo: <ref *6> ƒ cursorTo(length: 4) {},
    default: {
        Interface: [Circular: *2],
        clearLine: [Circular: *3],
        clearScreenDown: [Circular: *4],
        createInterface: [Circular: *5],
        cursorTo: [Circular: *6],
        emitKeypressEvents: <ref *8> ƒ emitKeypressEvents(length: 1) {},
        moveCursor: <ref *9> ƒ moveCursor(length: 4) {},
        promises: <ref *10> {
            Interface: class Interface extends _Interface {},
            Readline: class Readline {},
            createInterface: ƒ createInterface(length: 4) {}
        }
    },
    emitKeypressEvents: [Circular: *8],
    moveCursor: [Circular: *9],
    promises: [Circular: *10]
}
```

</td><td valign="top">

```js
{
    Interface: ƒ Interface(length: 4) {},
    clearLine: ƒ clearLine(length: 3) {},
    clearScreenDown: ƒ clearScreenDown(length: 2) {},
    createInterface: ƒ createInterface(length: 4) {},
    cursorTo: ƒ cursorTo(length: 4) {},
    emitKeypressEvents: ƒ emitKeypressEvents(length: 1) {},
    moveCursor: ƒ moveCursor(length: 4) {},
    promises: {
        Readline: class Readline {},
        Interface: class Interface3 extends _Interface {},
        createInterface: ƒ createInterface(length: 4) {}
    },
    Symbol(__BUN_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED__): {
        CSI: ƒ CSI(length: 1) {
            kEscape: "\u001b",
            kClearLine: "\u001b[2K",
            kClearScreenDown: "\u001b[0J",
            kClearToLineBeginning: "\u001b[1K",
            kClearToLineEnd: "\u001b[0K"
        },
        utils: {
            getStringWidth: ƒ getStringWidth2(length: 1) {},
            stripVTControlCharacters: ƒ stripVTControlCharacters(length: 1) {}
        }
    },
    Symbol(CommonJS): 0
}
```

</td></tr></table>

## readline/promises

<table><tr><th>Node.js</th><th>Bun</th></tr><tr><td valign="top">

```js
[Object: null prototype] {
    Interface: <ref *2> class Interface extends _Interface {},
    Readline: <ref *3> class Readline {},
    createInterface: <ref *4> ƒ createInterface(length: 4) {},
    default: {
        Interface: [Circular: *2],
        Readline: [Circular: *3],
        createInterface: [Circular: *4]
    }
}
```

</td><td valign="top">

```js
{
    Readline: class Readline {},
    Interface: class Interface3 extends _Interface {},
    createInterface: ƒ createInterface(length: 4) {},
    Symbol(CommonJS): 0
}
```

</td></tr></table>

## repl

<table><tr><th>Node.js</th><th>Bun</th></tr><tr><td valign="top">

```js
[Object: null prototype] {
    REPLServer: <ref *2> ƒ REPLServer(length: 6) {},
    REPL_MODE_SLOPPY: Symbol(repl-sloppy),
    REPL_MODE_STRICT: Symbol(repl-strict),
    Recoverable: <ref *3> ƒ Recoverable(length: 1) {},
    builtinModules: <ref *4> [
        "assert",
        "assert/strict",
        "async_hooks",
        "buffer",
        "child_process",
        "cluster",
        "console",
        "constants",
        "crypto",
        "dgram",
        "diagnostics_channel",
        "dns",
        "dns/promises",
        "domain",
        "events",
        "fs",
        "fs/promises",
        "http",
        "http2",
        "https",
        "inspector",
        "module",
        "net",
        "os",
        "path",
        "path/posix",
        "path/win32",
        "perf_hooks",
        "process",
        "punycode",
        "querystring",
        "readline",
        "readline/promises",
        "repl",
        "stream",
        "stream/consumers",
        "stream/promises",
        "stream/web",
        "string_decoder",
        "sys",
        "timers",
        "timers/promises",
        "tls",
        "trace_events",
        "tty",
        "url",
        "util",
        "util/types",
        "v8",
        "vm",
        "worker_threads",
        "zlib"
    ],
    default: {
        start: <ref *6> ƒ start(length: 6) {},
        writer: <ref *7> ƒ writer(length: 1) {
            options: {
                showHidden: false,
                depth: 2,
                colors: false,
                customInspect: true,
                showProxy: true,
                maxArrayLength: 100,
                maxStringLength: 10000,
                breakLength: 80,
                compact: 3,
                sorted: false,
                getters: false,
                numericSeparator: false
            }
        },
        REPLServer: [Circular: *2],
        REPL_MODE_SLOPPY: Symbol(repl-sloppy),
        REPL_MODE_STRICT: Symbol(repl-strict),
        Recoverable: [Circular: *3],
        [get/set] builtinModules: [Circular: *4]
    },
    start: [Circular: *6],
    writer: [Circular: *7]
}
```

</td><td valign="top">

```js
78 | 			}
79 | 
80 | 			const entries = Reflect.ownKeys(value).map(
81 | 				(key) => {
82 | 					const descriptor = Object.getOwnPropertyDescriptor(value, key);
83 | 					if (!descriptor.enumerable) {
             ^
TypeError: undefined is not an object (evaluating 'descriptor.enumerable')
      at /tmp/fs-fixture-1687133604372-1/inspect.mjs:83:10
      at /tmp/fs-fixture-1687133604372-1/inspect.mjs:80:19
      at /tmp/fs-fixture-1687133604372-1/inspect.mjs:99:6
      at /tmp/fs-fixture-1687133604372-1/inspect.mjs:80:19
      at /tmp/fs-fixture-1687133604372-1/inspect.mjs:99:6
      at /tmp/fs-fixture-1687133604372-1/inspect.mjs:80:19
      at /tmp/fs-fixture-1687133604372-1/repl.mjs:4:15
```

</td></tr></table>

## stream

<table><tr><th>Node.js</th><th>Bun</th></tr><tr><td valign="top">

```js
[Object: null prototype] {
    Duplex: <ref *2> ƒ Duplex(length: 1) {
        fromWeb: ƒ (length: 2) {},
        toWeb: ƒ (length: 1) {},
        from: ƒ (length: 1) {}
    },
    PassThrough: <ref *6> ƒ PassThrough(length: 1) {},
    Readable: <ref *7> ƒ Readable(length: 1) {
        ReadableState: ƒ ReadableState(length: 3) {},
        _fromList: ƒ fromList(length: 2) {},
        from: ƒ (length: 2) {},
        fromWeb: ƒ (length: 2) {},
        toWeb: ƒ (length: 2) {},
        wrap: ƒ (length: 2) {}
    },
    Stream: <ref *14> ƒ Stream(length: 1) {
        isDisturbed: <ref *15> ƒ isDisturbed(length: 1) {},
        isErrored: <ref *16> ƒ isErrored(length: 1) {},
        isReadable: <ref *17> ƒ isReadable(length: 1) {},
        Readable: [Circular: *7],
        Writable: <ref *18> ƒ Writable(length: 1) {
            WritableState: ƒ WritableState(length: 3) {},
            fromWeb: ƒ (length: 2) {},
            toWeb: ƒ (length: 1) {}
        },
        Duplex: [Circular: *2],
        Transform: <ref *22> ƒ Transform(length: 1) {},
        PassThrough: [Circular: *6],
        pipeline: <ref *23> ƒ pipeline(length: 0) {
            [get/set] Symbol(nodejs.util.promisify.custom): <ref *24> ƒ pipeline(length: 0) {}
        },
        addAbortSignal: <ref *25> ƒ addAbortSignal(length: 2) {},
        finished: <ref *26> ƒ eos(length: 3) {
            finished: <ref *27> ƒ finished(length: 2) {},
            [get/set] Symbol(nodejs.util.promisify.custom): [Circular: *27]
        },
        destroy: <ref *28> ƒ destroyer(length: 2) {},
        compose: <ref *29> ƒ compose(length: 0) {},
        [get/set] promises: <ref *30> {
            finished: [Circular: *27],
            pipeline: [Circular: *24]
        },
        Stream: [Circular: *14],
        _isUint8Array: <ref *31> ƒ isUint8Array(length: 1) {},
        _uint8ArrayToBuffer: <ref *32> ƒ _uint8ArrayToBuffer(length: 1) {}
    },
    Transform: [Circular: *22],
    Writable: [Circular: *18],
    _isUint8Array: [Circular: *31],
    _uint8ArrayToBuffer: [Circular: *32],
    addAbortSignal: [Circular: *25],
    compose: [Circular: *29],
    default: [Circular: *14],
    destroy: [Circular: *28],
    finished: [Circular: *26],
    isDisturbed: [Circular: *15],
    isErrored: [Circular: *16],
    isReadable: [Circular: *17],
    pipeline: [Circular: *23],
    promises: [Circular: *30]
}
```

</td><td valign="top">

```js
<ref *1> ƒ K(length: 1) {
    isDisturbed: ƒ D(length: 1) {},
    isErrored: ƒ _(length: 1) {},
    isWritable: ƒ P(length: 1) {},
    isReadable: ƒ W(length: 1) {},
    Readable: ƒ L(length: 1) {
        _fromList: ƒ a(length: 2) {},
        from: ƒ (length: 2) {},
        fromWeb: ƒ (length: 2) {},
        toWeb: ƒ (length: 1) {},
        wrap: ƒ (length: 2) {}
    },
    Writable: ƒ E(length: 0) {
        fromWeb: ƒ (length: 2) {},
        toWeb: ƒ (length: 1) {}
    },
    Duplex: ƒ B(length: 1) {
        fromWeb: ƒ (length: 2) {},
        toWeb: ƒ (length: 1) {},
        from: ƒ (length: 1) {}
    },
    Transform: ƒ K(length: 1) {},
    PassThrough: ƒ H(length: 1) {},
    pipeline: ƒ D(length: 0) {
        [get/set] Symbol(nodejs.util.promisify.custom): <ref *22> ƒ Y(length: 0) {}
    },
    addAbortSignal: ƒ Y(length: 2) {},
    finished: ƒ A(length: 3) {
        finished: <ref *25> ƒ O(length: 2) {},
        [get/set] Symbol(nodejs.util.promisify.custom): [Circular: *25]
    },
    destroy: ƒ C(length: 2) {},
    compose: ƒ V(length: 0) {},
    [get/set] promises: {
        finished: [Circular: *25],
        pipeline: [Circular: *22]
    },
    Stream: [Circular: *1],
    _isUint8Array: ƒ L(length: 1) {},
    _uint8ArrayToBuffer: ƒ L(length: 1) {},
    _getNativeReadableStreamPrototype: ƒ NQ(length: 2) {},
    NativeWritable: class q extends Tq {},
    default: [Circular: *1],
    eos: ƒ X(length: 0) {},
    Symbol(CommonJS): 0,
    Symbol(::bunternal::): {
        _ReadableFromWeb: class N extends L {}
    }
}
```

</td></tr></table>

## stream/consumers

<table><tr><th>Node.js</th><th>Bun</th></tr><tr><td valign="top">

```js
[Object: null prototype] {
    arrayBuffer: <ref *2> async ƒ arrayBuffer(length: 1) {},
    blob: <ref *3> async ƒ blob(length: 1) {},
    buffer: <ref *4> async ƒ buffer(length: 1) {},
    default: {
        arrayBuffer: [Circular: *2],
        blob: [Circular: *3],
        buffer: [Circular: *4],
        text: <ref *6> async ƒ text(length: 1) {},
        json: <ref *7> async ƒ json(length: 1) {}
    },
    json: [Circular: *7],
    text: [Circular: *6]
}
```

</td><td valign="top">

```js
{
    arrayBuffer: ƒ readableStreamToArrayBuffer(length: 1) {},
    text: ƒ readableStreamToText(length: 1) {},
    json: ƒ h(length: 1) {},
    buffer: async ƒ i(length: 1) {},
    blob: ƒ readableStreamToBlob(length: 1) {},
    Symbol(CommonJS): 0
}
```

</td></tr></table>

## stream/promises

<table><tr><th>Node.js</th><th>Bun</th></tr><tr><td valign="top">

```js
[Object: null prototype] {
    default: {
        finished: <ref *3> ƒ finished(length: 2) {},
        pipeline: <ref *4> ƒ pipeline(length: 0) {}
    },
    finished: [Circular: *3],
    pipeline: [Circular: *4]
}
```

</td><td valign="top">

```js
{
    pipeline: ƒ Y(length: 0) {},
    finished: ƒ O(length: 2) {},
    Symbol(CommonJS): 0
}
```

</td></tr></table>

## stream/web

<table><tr><th>Node.js</th><th>Bun</th></tr><tr><td valign="top">

```js
[Object: null prototype] {
    ByteLengthQueuingStrategy: <ref *2> class ByteLengthQueuingStrategy {},
    CompressionStream: <ref *3> class CompressionStream {},
    CountQueuingStrategy: <ref *4> class CountQueuingStrategy {},
    DecompressionStream: <ref *5> class DecompressionStream {},
    ReadableByteStreamController: <ref *6> class ReadableByteStreamController {},
    ReadableStream: <ref *7> class ReadableStream {},
    ReadableStreamBYOBReader: <ref *8> class ReadableStreamBYOBReader {},
    ReadableStreamBYOBRequest: <ref *9> class ReadableStreamBYOBRequest {},
    ReadableStreamDefaultController: <ref *10> class ReadableStreamDefaultController {},
    ReadableStreamDefaultReader: <ref *11> class ReadableStreamDefaultReader {},
    TextDecoderStream: <ref *12> class TextDecoderStream {},
    TextEncoderStream: <ref *13> class TextEncoderStream {},
    TransformStream: <ref *14> class TransformStream {},
    TransformStreamDefaultController: <ref *15> class TransformStreamDefaultController {},
    WritableStream: <ref *16> class WritableStream {},
    WritableStreamDefaultController: <ref *17> class WritableStreamDefaultController {},
    WritableStreamDefaultWriter: <ref *18> class WritableStreamDefaultWriter {},
    default: {
        ReadableStream: [Circular: *7],
        ReadableStreamDefaultReader: [Circular: *11],
        ReadableStreamBYOBReader: [Circular: *8],
        ReadableStreamBYOBRequest: [Circular: *9],
        ReadableByteStreamController: [Circular: *6],
        ReadableStreamDefaultController: [Circular: *10],
        TransformStream: [Circular: *14],
        TransformStreamDefaultController: [Circular: *15],
        WritableStream: [Circular: *16],
        WritableStreamDefaultWriter: [Circular: *18],
        WritableStreamDefaultController: [Circular: *17],
        ByteLengthQueuingStrategy: [Circular: *2],
        CountQueuingStrategy: [Circular: *4],
        TextEncoderStream: [Circular: *13],
        TextDecoderStream: [Circular: *12],
        CompressionStream: [Circular: *3],
        DecompressionStream: [Circular: *5]
    }
}
```

</td><td valign="top">

```js
{
    ReadableStream: ƒ ReadableStream(length: 0) {},
    ReadableStreamDefaultController: ƒ ReadableStreamDefaultController(length: 4) {},
    WritableStream: ƒ WritableStream(length: 0) {},
    WritableStreamDefaultController: ƒ WritableStreamDefaultController(length: 0) {},
    WritableStreamDefaultWriter: ƒ WritableStreamDefaultWriter(length: 1) {},
    TransformStream: ƒ TransformStream(length: 0) {},
    TransformStreamDefaultController: ƒ TransformStreamDefaultController(length: 0) {},
    ByteLengthQueuingStrategy: ƒ ByteLengthQueuingStrategy(length: 1) {},
    CountQueuingStrategy: ƒ CountQueuingStrategy(length: 1) {},
    ReadableStreamBYOBReader: ƒ ReadableStreamBYOBReader(length: 1) {},
    ReadableStreamBYOBRequest: ƒ ReadableStreamBYOBRequest(length: 2) {},
    ReadableStreamDefaultReader: ƒ ReadableStreamDefaultReader(length: 1) {},
    Symbol(CommonJS): 0
}
```

</td></tr></table>

## string_decoder

<table><tr><th>Node.js</th><th>Bun</th></tr><tr><td valign="top">

```js
[Object: null prototype] {
    StringDecoder: <ref *2> ƒ StringDecoder(length: 1) {},
    default: {
        StringDecoder: [Circular: *2]
    }
}
```

</td><td valign="top">

```js
{
    StringDecoder: ƒ StringDecoder(length: 0) {},
    Symbol(CommonJS): 0
}
```

</td></tr></table>

## sys

<table><tr><th>Node.js</th><th>Bun</th></tr><tr><td valign="top">

```js
[Object: null prototype] {
    MIMEParams: <ref *2> class MIMEParams {},
    MIMEType: <ref *3> class MIMEType {},
    TextDecoder: <ref *4> class TextDecoder {},
    TextEncoder: <ref *5> class TextEncoder {},
    _errnoException: <ref *6> ƒ __node_internal_errnoException(length: 3) {},
    _exceptionWithHostPort: <ref *7> ƒ __node_internal_exceptionWithHostPort(length: 5) {},
    _extend: <ref *8> ƒ _extend(length: 2) {},
    aborted: <ref *9> async ƒ aborted(length: 2) {},
    callbackify: <ref *10> ƒ callbackify(length: 1) {},
    debug: <ref *11> ƒ debuglog(length: 2) {},
    debuglog: [Circular: *11],
    default: {
        _errnoException: [Circular: *6],
        _exceptionWithHostPort: [Circular: *7],
        _extend: [Circular: *8],
        callbackify: [Circular: *10],
        debug: [Circular: *11],
        debuglog: [Circular: *11],
        deprecate: <ref *13> ƒ deprecate(length: 3) {},
        format: <ref *14> ƒ format(length: 0) {},
        formatWithOptions: <ref *15> ƒ formatWithOptions(length: 1) {},
        getSystemErrorMap: <ref *16> ƒ getSystemErrorMap(length: 0) {},
        getSystemErrorName: <ref *17> ƒ getSystemErrorName(length: 1) {},
        inherits: <ref *18> ƒ inherits(length: 2) {},
        inspect: <ref *19> ƒ inspect(length: 2) {
            custom: Symbol(nodejs.util.inspect.custom),
            colors: [Object: null prototype] {
                reset: [
                    0,
                    0
                ],
                bold: [
                    1,
                    22
                ],
                dim: [
                    2,
                    22
                ],
                italic: [
                    3,
                    23
                ],
                underline: [
                    4,
                    24
                ],
                blink: [
                    5,
                    25
                ],
                inverse: [
                    7,
                    27
                ],
                hidden: [
                    8,
                    28
                ],
                strikethrough: [
                    9,
                    29
                ],
                doubleunderline: [
                    21,
                    24
                ],
                black: [
                    30,
                    39
                ],
                red: [
                    31,
                    39
                ],
                green: [
                    32,
                    39
                ],
                yellow: [
                    33,
                    39
                ],
                blue: [
                    34,
                    39
                ],
                magenta: [
                    35,
                    39
                ],
                cyan: [
                    36,
                    39
                ],
                white: [
                    37,
                    39
                ],
                bgBlack: [
                    40,
                    49
                ],
                bgRed: [
                    41,
                    49
                ],
                bgGreen: [
                    42,
                    49
                ],
                bgYellow: [
                    43,
                    49
                ],
                bgBlue: [
                    44,
                    49
                ],
                bgMagenta: [
                    45,
                    49
                ],
                bgCyan: [
                    46,
                    49
                ],
                bgWhite: [
                    47,
                    49
                ],
                framed: [
                    51,
                    54
                ],
                overlined: [
                    53,
                    55
                ],
                gray: [
                    90,
                    39
                ],
                redBright: [
                    91,
                    39
                ],
                greenBright: [
                    92,
                    39
                ],
                yellowBright: [
                    93,
                    39
                ],
                blueBright: [
                    94,
                    39
                ],
                magentaBright: [
                    95,
                    39
                ],
                cyanBright: [
                    96,
                    39
                ],
                whiteBright: [
                    97,
                    39
                ],
                bgGray: [
                    100,
                    49
                ],
                bgRedBright: [
                    101,
                    49
                ],
                bgGreenBright: [
                    102,
                    49
                ],
                bgYellowBright: [
                    103,
                    49
                ],
                bgBlueBright: [
                    104,
                    49
                ],
                bgMagentaBright: [
                    105,
                    49
                ],
                bgCyanBright: [
                    106,
                    49
                ],
                bgWhiteBright: [
                    107,
                    49
                ]
            },
            styles: [Object: null prototype] {
                special: "cyan",
                number: "yellow",
                bigint: "yellow",
                boolean: "yellow",
                undefined: "grey",
                null: "bold",
                string: "green",
                symbol: "green",
                date: "magenta",
                regexp: "red",
                module: "underline"
            }
        },
        isArray: <ref *66> ƒ isArray(length: 1) {},
        isBoolean: <ref *67> ƒ isBoolean(length: 1) {},
        isBuffer: <ref *68> ƒ isBuffer(length: 1) {},
        isDeepStrictEqual: <ref *69> ƒ isDeepStrictEqual(length: 2) {},
        isNull: <ref *70> ƒ isNull(length: 1) {},
        isNullOrUndefined: <ref *71> ƒ isNullOrUndefined(length: 1) {},
        isNumber: <ref *72> ƒ isNumber(length: 1) {},
        isString: <ref *73> ƒ isString(length: 1) {},
        isSymbol: <ref *74> ƒ isSymbol(length: 1) {},
        isUndefined: <ref *75> ƒ isUndefined(length: 1) {},
        isRegExp: <ref *76> ƒ isRegExp(length: 0) {},
        isObject: <ref *77> ƒ isObject(length: 1) {},
        isDate: <ref *78> ƒ isDate(length: 0) {},
        isError: <ref *79> ƒ isError(length: 1) {},
        isFunction: <ref *80> ƒ isFunction(length: 1) {},
        isPrimitive: <ref *81> ƒ isPrimitive(length: 1) {},
        log: <ref *82> ƒ log(length: 0) {},
        MIMEType: [Circular: *3],
        MIMEParams: [Circular: *2],
        parseArgs: <ref *83> ƒ parseArgs(length: 0) {},
        promisify: <ref *84> ƒ promisify(length: 1) {
            custom: Symbol(nodejs.util.promisify.custom)
        },
        stripVTControlCharacters: <ref *85> ƒ stripVTControlCharacters(length: 1) {},
        toUSVString: <ref *86> ƒ toUSVString(length: 1) {},
        TextDecoder: [Circular: *4],
        TextEncoder: [Circular: *5],
        [get/set] transferableAbortSignal: <ref *87> ƒ transferableAbortSignal(length: 1) {},
        [get/set] transferableAbortController: <ref *88> ƒ transferableAbortController(length: 0) {},
        [get/set] aborted: [Circular: *9],
        types: <ref *89> {
            isExternal: ƒ isExternal(length: 0) {},
            isDate: [Circular: *78],
            isArgumentsObject: ƒ isArgumentsObject(length: 0) {},
            isBigIntObject: ƒ isBigIntObject(length: 0) {},
            isBooleanObject: ƒ isBooleanObject(length: 0) {},
            isNumberObject: ƒ isNumberObject(length: 0) {},
            isStringObject: ƒ isStringObject(length: 0) {},
            isSymbolObject: ƒ isSymbolObject(length: 0) {},
            isNativeError: ƒ isNativeError(length: 0) {},
            isRegExp: [Circular: *76],
            isAsyncFunction: ƒ isAsyncFunction(length: 0) {},
            isGeneratorFunction: ƒ isGeneratorFunction(length: 0) {},
            isGeneratorObject: ƒ isGeneratorObject(length: 0) {},
            isPromise: ƒ isPromise(length: 0) {},
            isMap: ƒ isMap(length: 0) {},
            isSet: ƒ isSet(length: 0) {},
            isMapIterator: ƒ isMapIterator(length: 0) {},
            isSetIterator: ƒ isSetIterator(length: 0) {},
            isWeakMap: ƒ isWeakMap(length: 0) {},
            isWeakSet: ƒ isWeakSet(length: 0) {},
            isArrayBuffer: ƒ isArrayBuffer(length: 0) {},
            isDataView: ƒ isDataView(length: 0) {},
            isSharedArrayBuffer: ƒ isSharedArrayBuffer(length: 0) {},
            isProxy: ƒ isProxy(length: 0) {},
            isModuleNamespaceObject: ƒ isModuleNamespaceObject(length: 0) {},
            isAnyArrayBuffer: ƒ isAnyArrayBuffer(length: 0) {},
            isBoxedPrimitive: ƒ isBoxedPrimitive(length: 0) {},
            isArrayBufferView: ƒ isView(length: 1) {},
            isTypedArray: ƒ isTypedArray(length: 1) {},
            isUint8Array: ƒ isUint8Array(length: 1) {},
            isUint8ClampedArray: ƒ isUint8ClampedArray(length: 1) {},
            isUint16Array: ƒ isUint16Array(length: 1) {},
            isUint32Array: ƒ isUint32Array(length: 1) {},
            isInt8Array: ƒ isInt8Array(length: 1) {},
            isInt16Array: ƒ isInt16Array(length: 1) {},
            isInt32Array: ƒ isInt32Array(length: 1) {},
            isFloat32Array: ƒ isFloat32Array(length: 1) {},
            isFloat64Array: ƒ isFloat64Array(length: 1) {},
            isBigInt64Array: ƒ isBigInt64Array(length: 1) {},
            isBigUint64Array: ƒ isBigUint64Array(length: 1) {},
            isKeyObject: ƒ value(length: 1) {},
            isCryptoKey: ƒ value(length: 1) {}
        }
    },
    deprecate: [Circular: *13],
    format: [Circular: *14],
    formatWithOptions: [Circular: *15],
    getSystemErrorMap: [Circular: *16],
    getSystemErrorName: [Circular: *17],
    inherits: [Circular: *18],
    inspect: [Circular: *19],
    isArray: [Circular: *66],
    isBoolean: [Circular: *67],
    isBuffer: [Circular: *68],
    isDate: [Circular: *78],
    isDeepStrictEqual: [Circular: *69],
    isError: [Circular: *79],
    isFunction: [Circular: *80],
    isNull: [Circular: *70],
    isNullOrUndefined: [Circular: *71],
    isNumber: [Circular: *72],
    isObject: [Circular: *77],
    isPrimitive: [Circular: *81],
    isRegExp: [Circular: *76],
    isString: [Circular: *73],
    isSymbol: [Circular: *74],
    isUndefined: [Circular: *75],
    log: [Circular: *82],
    parseArgs: [Circular: *83],
    promisify: [Circular: *84],
    stripVTControlCharacters: [Circular: *85],
    toUSVString: [Circular: *86],
    transferableAbortController: [Circular: *88],
    transferableAbortSignal: [Circular: *87],
    types: [Circular: *89]
}
(node:2560) [DEP0025] DeprecationWarning: sys is deprecated. Use util instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
```

</td><td valign="top">

```js
78 | 			}
79 | 
80 | 			const entries = Reflect.ownKeys(value).map(
81 | 				(key) => {
82 | 					const descriptor = Object.getOwnPropertyDescriptor(value, key);
83 | 					if (!descriptor.enumerable) {
             ^
TypeError: undefined is not an object (evaluating 'descriptor.enumerable')
      at /tmp/fs-fixture-1687133604372-1/inspect.mjs:83:10
      at /tmp/fs-fixture-1687133604372-1/inspect.mjs:80:19
      at /tmp/fs-fixture-1687133604372-1/sys.mjs:4:15
```

</td></tr></table>

## timers

<table><tr><th>Node.js</th><th>Bun</th></tr><tr><td valign="top">

```js
[Object: null prototype] {
    _unrefActive: <ref *2> ƒ deprecated(length: 0) {},
    active: <ref *3> ƒ deprecated(length: 0) {},
    clearImmediate: <ref *4> ƒ clearImmediate(length: 1) {},
    clearInterval: <ref *5> ƒ clearInterval(length: 1) {},
    clearTimeout: <ref *6> ƒ clearTimeout(length: 1) {},
    default: {
        setTimeout: <ref *8> ƒ setTimeout(length: 5) {
            [get/set] Symbol(nodejs.util.promisify.custom): ƒ setTimeout(length: 2) {}
        },
        clearTimeout: [Circular: *6],
        setImmediate: <ref *10> ƒ setImmediate(length: 4) {
            [get/set] Symbol(nodejs.util.promisify.custom): ƒ setImmediate(length: 1) {}
        },
        clearImmediate: [Circular: *4],
        setInterval: <ref *12> ƒ setInterval(length: 5) {},
        clearInterval: [Circular: *5],
        _unrefActive: [Circular: *2],
        active: [Circular: *3],
        unenroll: <ref *13> ƒ deprecated(length: 0) {},
        enroll: <ref *14> ƒ deprecated(length: 0) {}
    },
    enroll: [Circular: *14],
    setImmediate: [Circular: *10],
    setInterval: [Circular: *12],
    setTimeout: [Circular: *8],
    unenroll: [Circular: *13]
}
```

</td><td valign="top">

```js
{
    setInterval: ƒ setInterval(length: 1) {},
    setImmediate: ƒ setImmediate(length: 1) {},
    setTimeout: ƒ setTimeout(length: 1) {},
    clearInterval: ƒ clearInterval(length: 1) {},
    clearTimeout: ƒ clearTimeout(length: 1) {},
    Symbol(CommonJS): 0
}
```

</td></tr></table>

## timers/promises

<table><tr><th>Node.js</th><th>Bun</th></tr><tr><td valign="top">

```js
[Object: null prototype] {
    default: {
        setTimeout: <ref *3> ƒ setTimeout(length: 2) {},
        setImmediate: <ref *4> ƒ setImmediate(length: 1) {},
        setInterval: <ref *5> async ƒ setInterval(length: 2) {},
        scheduler: <ref *6> Scheduler {
            Symbol(kScheduler): true
        }
    },
    scheduler: [Circular: *6],
    setImmediate: [Circular: *4],
    setInterval: [Circular: *5],
    setTimeout: [Circular: *3]
}
```

</td><td valign="top">

```js
{
    setImmediate: ƒ setImmediatePromise(length: 1) {},
    setInterval: ƒ setIntervalPromise(length: 0) {},
    setTimeout: ƒ setTimeoutPromise(length: 0) {}
}
```

</td></tr></table>

## tls

<table><tr><th>Node.js</th><th>Bun</th></tr><tr><td valign="top">

```js
[Object: null prototype] {
    CLIENT_RENEG_LIMIT: 3,
    CLIENT_RENEG_WINDOW: 600,
    DEFAULT_CIPHERS: "TLS_AES_256_GCM_SHA384:TLS_CHACHA20_POLY1305_SHA256:TLS_AES_128_GCM_SHA256:ECDHE-RSA-AES128-GCM-SHA2…",
    DEFAULT_ECDH_CURVE: "auto",
    DEFAULT_MAX_VERSION: "TLSv1.3",
    DEFAULT_MIN_VERSION: "TLSv1.2",
    SecureContext: <ref *2> ƒ SecureContext(length: 4) {},
    Server: <ref *3> ƒ Server(length: 2) {},
    TLSSocket: <ref *4> ƒ TLSSocket(length: 2) {},
    checkServerIdentity: <ref *5> ƒ checkServerIdentity(length: 2) {},
    connect: <ref *6> ƒ connect(length: 0) {},
    convertALPNProtocols: <ref *7> ƒ convertALPNProtocols(length: 2) {},
    createSecureContext: <ref *8> ƒ createSecureContext(length: 1) {},
    createSecurePair: <ref *9> ƒ deprecated(length: 0) {},
    createServer: <ref *10> ƒ createServer(length: 2) {},
    default: {
        CLIENT_RENEG_LIMIT: 3,
        CLIENT_RENEG_WINDOW: 600,
        DEFAULT_CIPHERS: "TLS_AES_256_GCM_SHA384:TLS_CHACHA20_POLY1305_SHA256:TLS_AES_128_GCM_SHA256:ECDHE-RSA-AES128-GCM-SHA2…",
        DEFAULT_ECDH_CURVE: "auto",
        DEFAULT_MIN_VERSION: "TLSv1.2",
        DEFAULT_MAX_VERSION: "TLSv1.3",
        getCiphers: <ref *12> ƒ (length: 0) {},
        [get/set] rootCertificates: <ref *13> [
            "-----BEGIN CERTIFICATE-----\nMIIDdTCCAl2gAwIBAgILBAAAAAABFUtaw5QwDQYJKoZIhvcNAQEFBQAwVzELMAkGA1UEBhMC…",
            "-----BEGIN CERTIFICATE-----\nMIIEKjCCAxKgAwIBAgIEOGPe+DANBgkqhkiG9w0BAQUFADCBtDEUMBIGA1UEChMLRW50cnVz…",
            "-----BEGIN CERTIFICATE-----\nMIIDdzCCAl+gAwIBAgIEAgAAuTANBgkqhkiG9w0BAQUFADBaMQswCQYDVQQGEwJJRTESMBAG…",
            "-----BEGIN CERTIFICATE-----\nMIIEkTCCA3mgAwIBAgIERWtQVDANBgkqhkiG9w0BAQUFADCBsDELMAkGA1UEBhMCVVMxFjAU…",
            "-----BEGIN CERTIFICATE-----\nMIIEMjCCAxqgAwIBAgIBATANBgkqhkiG9w0BAQUFADB7MQswCQYDVQQGEwJHQjEbMBkGA1UE…",
            "-----BEGIN CERTIFICATE-----\nMIIFtzCCA5+gAwIBAgICBQkwDQYJKoZIhvcNAQEFBQAwRTELMAkGA1UEBhMCQk0xGTAXBgNV…",
            "-----BEGIN CERTIFICATE-----\nMIIGnTCCBIWgAwIBAgICBcYwDQYJKoZIhvcNAQEFBQAwRTELMAkGA1UEBhMCQk0xGTAXBgNV…",
            "-----BEGIN CERTIFICATE-----\nMIIDWjCCAkKgAwIBAgIBADANBgkqhkiG9w0BAQUFADBQMQswCQYDVQQGEwJKUDEYMBYGA1UE…",
            "-----BEGIN CERTIFICATE-----\nMIIEMDCCAxigAwIBAgIQUJRs7Bjq1ZxN1ZfvdY+grTANBgkqhkiG9w0BAQUFADCBgjELMAkG…",
            "-----BEGIN CERTIFICATE-----\nMIIEADCCAuigAwIBAgIBADANBgkqhkiG9w0BAQUFADBjMQswCQYDVQQGEwJVUzEhMB8GA1UE…",
            "-----BEGIN CERTIFICATE-----\nMIIEDzCCAvegAwIBAgIBADANBgkqhkiG9w0BAQUFADBoMQswCQYDVQQGEwJVUzElMCMGA1UE…",
            "-----BEGIN CERTIFICATE-----\nMIIDtzCCAp+gAwIBAgIQDOfg5RfYRv6P5WD8G/AwOTANBgkqhkiG9w0BAQUFADBlMQswCQYD…",
            "-----BEGIN CERTIFICATE-----\nMIIDrzCCApegAwIBAgIQCDvgVpBCRrGhdWrJWZHHSjANBgkqhkiG9w0BAQUFADBhMQswCQYD…",
            "-----BEGIN CERTIFICATE-----\nMIIDxTCCAq2gAwIBAgIQAqxcJmoLQJuPC3nyrkYldzANBgkqhkiG9w0BAQUFADBsMQswCQYD…",
            "-----BEGIN CERTIFICATE-----\nMIIFujCCA6KgAwIBAgIJALtAHEP1Xk+wMA0GCSqGSIb3DQEBBQUAMEUxCzAJBgNVBAYTAkNI…",
            "-----BEGIN CERTIFICATE-----\nMIIFvTCCA6WgAwIBAgIITxvUL1S7L0swDQYJKoZIhvcNAQEFBQAwRzELMAkGA1UEBhMCQ0gx…",
            "-----BEGIN CERTIFICATE-----\nMIIDuDCCAqCgAwIBAgIQDPCOXAgWpa1Cf/DrJxhZ0DANBgkqhkiG9w0BAQUFADBIMQswCQYD…",
            "-----BEGIN CERTIFICATE-----\nMIIDvDCCAqSgAwIBAgIQB1YipOjUiolN9BPI8PjqpTANBgkqhkiG9w0BAQUFADBKMQswCQYD…",
            "-----BEGIN CERTIFICATE-----\nMIIEHTCCAwWgAwIBAgIQToEtioJl4AsC7j41AkblPTANBgkqhkiG9w0BAQUFADCBgTELMAkG…",
            "-----BEGIN CERTIFICATE-----\nMIID5jCCAs6gAwIBAgIQV8szb8JcFuZHFhfjkDFo4DANBgkqhkiG9w0BAQUFADBiMQswCQYD…",
            "-----BEGIN CERTIFICATE-----\nMIICiTCCAg+gAwIBAgIQH0evqmIAcFBUTAGem2OZKjAKBggqhkjOPQQDAzCBhTELMAkGA1UE…",
            "-----BEGIN CERTIFICATE-----\nMIIDqDCCApCgAwIBAgIJAP7c4wEPyUj/MA0GCSqGSIb3DQEBBQUAMDQxCzAJBgNVBAYTAkZS…",
            "-----BEGIN CERTIFICATE-----\nMIIFsDCCA5igAwIBAgIQFci9ZUdcr7iXAF7kBtK8nTANBgkqhkiG9w0BAQUFADBeMQswCQYD…",
            "-----BEGIN CERTIFICATE-----\nMIIDODCCAiCgAwIBAgIGIAYFFnACMA0GCSqGSIb3DQEBBQUAMDsxCzAJBgNVBAYTAlJPMREw…",
            "-----BEGIN CERTIFICATE-----\nMIIEFTCCAv2gAwIBAgIGSUEs5AAQMA0GCSqGSIb3DQEBCwUAMIGnMQswCQYDVQQGEwJIVTER…",
            "-----BEGIN CERTIFICATE-----\nMIIDMDCCAhigAwIBAgICA+gwDQYJKoZIhvcNAQEFBQAwRzELMAkGA1UEBhMCSEsxFjAUBgNV…",
            "-----BEGIN CERTIFICATE-----\nMIIDbTCCAlWgAwIBAgIBATANBgkqhkiG9w0BAQUFADBYMQswCQYDVQQGEwJKUDErMCkGA1UE…",
            "-----BEGIN CERTIFICATE-----\nMIIECjCCAvKgAwIBAgIJAMJ+QwRORz8ZMA0GCSqGSIb3DQEBCwUAMIGCMQswCQYDVQQGEwJI…",
            "-----BEGIN CERTIFICATE-----\nMIIDXzCCAkegAwIBAgILBAAAAAABIVhTCKIwDQYJKoZIhvcNAQELBQAwTDEgMB4GA1UECxMX…",
            "-----BEGIN CERTIFICATE-----\nMIIGFDCCA/ygAwIBAgIIU+w77vuySF8wDQYJKoZIhvcNAQEFBQAwUTELMAkGA1UEBhMCRVMx…",
            "-----BEGIN CERTIFICATE-----\nMIIF8TCCA9mgAwIBAgIQALC3WhZIX7/hy/WL1xnmfTANBgkqhkiG9w0BAQsFADA4MQswCQYD…",
            "-----BEGIN CERTIFICATE-----\nMIIDxTCCAq2gAwIBAgIBADANBgkqhkiG9w0BAQsFADCBgzELMAkGA1UEBhMCVVMxEDAOBgNV…",
            "-----BEGIN CERTIFICATE-----\nMIID3TCCAsWgAwIBAgIBADANBgkqhkiG9w0BAQsFADCBjzELMAkGA1UEBhMCVVMxEDAOBgNV…",
            "-----BEGIN CERTIFICATE-----\nMIID7zCCAtegAwIBAgIBADANBgkqhkiG9w0BAQsFADCBmDELMAkGA1UEBhMCVVMxEDAOBgNV…",
            "-----BEGIN CERTIFICATE-----\nMIIDTDCCAjSgAwIBAgIId3cGJyapsXwwDQYJKoZIhvcNAQELBQAwRDELMAkGA1UEBhMCVVMx…",
            "-----BEGIN CERTIFICATE-----\nMIIDTDCCAjSgAwIBAgIIfE8EORzUmS0wDQYJKoZIhvcNAQEFBQAwRDELMAkGA1UEBhMCVVMx…",
            "-----BEGIN CERTIFICATE-----\nMIIFRjCCAy6gAwIBAgIIbYwURrGmCu4wDQYJKoZIhvcNAQEMBQAwQTELMAkGA1UEBhMCVVMx…",
            "-----BEGIN CERTIFICATE-----\nMIIB/jCCAYWgAwIBAgIIdJclisc/elQwCgYIKoZIzj0EAwMwRTELMAkGA1UEBhMCVVMxFDAS…",
            "-----BEGIN CERTIFICATE-----\nMIIDuzCCAqOgAwIBAgIDBETAMA0GCSqGSIb3DQEBBQUAMH4xCzAJBgNVBAYTAlBMMSIwIAYD…",
            "-----BEGIN CERTIFICATE-----\nMIIDezCCAmOgAwIBAgIBATANBgkqhkiG9w0BAQUFADBfMQswCQYDVQQGEwJUVzESMBAGA1UE…",
            "-----BEGIN CERTIFICATE-----\nMIIDdzCCAl+gAwIBAgIBADANBgkqhkiG9w0BAQsFADBdMQswCQYDVQQGEwJKUDElMCMGA1UE…",
            "-----BEGIN CERTIFICATE-----\nMIIFVjCCBD6gAwIBAgIQ7is969Qh3hSoYqwE893EATANBgkqhkiG9w0BAQUFADCB8zELMAkG…",
            "-----BEGIN CERTIFICATE-----\nMIIFuzCCA6OgAwIBAgIIVwoRl0LE48wwDQYJKoZIhvcNAQELBQAwazELMAkGA1UEBhMCSVQx…",
            "-----BEGIN CERTIFICATE-----\nMIIFWTCCA0GgAwIBAgIBAjANBgkqhkiG9w0BAQsFADBOMQswCQYDVQQGEwJOTzEdMBsGA1UE…",
            "-----BEGIN CERTIFICATE-----\nMIIFWTCCA0GgAwIBAgIBAjANBgkqhkiG9w0BAQsFADBOMQswCQYDVQQGEwJOTzEdMBsGA1UE…",
            "-----BEGIN CERTIFICATE-----\nMIIDwzCCAqugAwIBAgIBATANBgkqhkiG9w0BAQsFADCBgjELMAkGA1UEBhMCREUxKzApBgNV…",
            "-----BEGIN CERTIFICATE-----\nMIIEMzCCAxugAwIBAgIDCYPzMA0GCSqGSIb3DQEBCwUAME0xCzAJBgNVBAYTAkRFMRUwEwYD…",
            "-----BEGIN CERTIFICATE-----\nMIIEQzCCAyugAwIBAgIDCYP0MA0GCSqGSIb3DQEBCwUAMFAxCzAJBgNVBAYTAkRFMRUwEwYD…",
            "-----BEGIN CERTIFICATE-----\nMIIFaTCCA1GgAwIBAgIJAJK4iNuwisFjMA0GCSqGSIb3DQEBCwUAMFIxCzAJBgNVBAYTAlNL…",
            "-----BEGIN CERTIFICATE-----\nMIIH0zCCBbugAwIBAgIIXsO3pkN/pOAwDQYJKoZIhvcNAQEFBQAwQjESMBAGA1UEAwwJQUND…",
            "-----BEGIN CERTIFICATE-----\nMIIFQTCCAymgAwIBAgICDL4wDQYJKoZIhvcNAQELBQAwUTELMAkGA1UEBhMCVFcxEjAQBgNV…",
            "-----BEGIN CERTIFICATE-----\nMIIFODCCAyCgAwIBAgIRAJW+FqD3LkbxezmCcvqLzZYwDQYJKoZIhvcNAQEFBQAwNzEUMBIG…",
            "-----BEGIN CERTIFICATE-----\nMIIGSzCCBDOgAwIBAgIIamg+nFGby1MwDQYJKoZIhvcNAQELBQAwgbIxCzAJBgNVBAYTAlRS…",
            "-----BEGIN CERTIFICATE-----\nMIIDwzCCAqugAwIBAgIBATANBgkqhkiG9w0BAQsFADCBgjELMAkGA1UEBhMCREUxKzApBgNV…",
            "-----BEGIN CERTIFICATE-----\nMIIDdzCCAl+gAwIBAgIIXDPLYixfszIwDQYJKoZIhvcNAQELBQAwPDEeMBwGA1UEAwwVQXRv…",
            "-----BEGIN CERTIFICATE-----\nMIIFYDCCA0igAwIBAgIUeFhfLq0sGUvjNwc1NBMotZbUZZMwDQYJKoZIhvcNAQELBQAwSDEL…",
            "-----BEGIN CERTIFICATE-----\nMIIFYDCCA0igAwIBAgIURFc0JFuBiZs18s64KztbpybwdSgwDQYJKoZIhvcNAQELBQAwSDEL…",
            "-----BEGIN CERTIFICATE-----\nMIIFYDCCA0igAwIBAgIULvWbAiin23r/1aOp7r0DoM8Sah0wDQYJKoZIhvcNAQELBQAwSDEL…",
            "-----BEGIN CERTIFICATE-----\nMIIDljCCAn6gAwIBAgIQC5McOtY5Z+pnI7/Dr5r0SzANBgkqhkiG9w0BAQsFADBlMQswCQYD…",
            "-----BEGIN CERTIFICATE-----\nMIICRjCCAc2gAwIBAgIQC6Fa+h3foLVJRK/NJKBs7DAKBggqhkjOPQQDAzBlMQswCQYDVQQG…",
            "-----BEGIN CERTIFICATE-----\nMIIDjjCCAnagAwIBAgIQAzrx5qcRqaC7KGSxHQn65TANBgkqhkiG9w0BAQsFADBhMQswCQYD…",
            "-----BEGIN CERTIFICATE-----\nMIICPzCCAcWgAwIBAgIQBVVWvPJepDU1w6QP1atFcjAKBggqhkjOPQQDAzBhMQswCQYDVQQG…",
            "-----BEGIN CERTIFICATE-----\nMIIFkDCCA3igAwIBAgIQBZsbV56OITLiOQe9p3d1XDANBgkqhkiG9w0BAQwFADBiMQswCQYD…",
            "-----BEGIN CERTIFICATE-----\nMIIF2DCCA8CgAwIBAgIQTKr5yttjb+Af907YWwOGnTANBgkqhkiG9w0BAQwFADCBhTELMAkG…",
            "-----BEGIN CERTIFICATE-----\nMIIF3jCCA8agAwIBAgIQAf1tMPyjylGoG7xkDjUDLTANBgkqhkiG9w0BAQwFADCBiDELMAkG…",
            "-----BEGIN CERTIFICATE-----\nMIICjzCCAhWgAwIBAgIQXIuZxVqUxdJxVt7NiYDMJjAKBggqhkjOPQQDAzCBiDELMAkGA1UE…",
            "-----BEGIN CERTIFICATE-----\nMIICHjCCAaSgAwIBAgIRYFlJ4CYuu1X5CneKcflK2GwwCgYIKoZIzj0EAwMwUDEkMCIGA1UE…",
            "-----BEGIN CERTIFICATE-----\nMIIFcDCCA1igAwIBAgIEAJiWjTANBgkqhkiG9w0BAQsFADBYMQswCQYDVQQGEwJOTDEeMBwG…",
            "-----BEGIN CERTIFICATE-----\nMIIFYDCCA0igAwIBAgIQCgFCgAAAAUUjyES1AAAAAjANBgkqhkiG9w0BAQsFADBKMQswCQYD…",
            "-----BEGIN CERTIFICATE-----\nMIIFZjCCA06gAwIBAgIQCgFCgAAAAUUjz0Z8AAAAAjANBgkqhkiG9w0BAQsFADBNMQswCQYD…",
            "-----BEGIN CERTIFICATE-----\nMIIEPjCCAyagAwIBAgIESlOMKDANBgkqhkiG9w0BAQsFADCBvjELMAkGA1UEBhMCVVMxFjAU…",
            "-----BEGIN CERTIFICATE-----\nMIIC+TCCAoCgAwIBAgINAKaLeSkAAAAAUNCR+TAKBggqhkjOPQQDAzCBvzELMAkGA1UEBhMC…",
            "-----BEGIN CERTIFICATE-----\nMIIFjTCCA3WgAwIBAgIEGErM1jANBgkqhkiG9w0BAQsFADBWMQswCQYDVQQGEwJDTjEwMC4G…",
            "-----BEGIN CERTIFICATE-----\nMIIDtTCCAp2gAwIBAgIQdrEgUnTwhYdGs/gjGvbCwDANBgkqhkiG9w0BAQsFADBtMQswCQYD…",
            "-----BEGIN CERTIFICATE-----\nMIIDcjCCAlqgAwIBAgIUPopdB+xV0jLVt+O2XwHrLdzk1uQwDQYJKoZIhvcNAQELBQAwUTEL…",
            "-----BEGIN CERTIFICATE-----\nMIIF0jCCA7qgAwIBAgIQIdbQSk8lD8kyN/yqXhKN6TANBgkqhkiG9w0BAQ0FADCBgDELMAkG…",
            "-----BEGIN CERTIFICATE-----\nMIIGCzCCA/OgAwIBAgIBADANBgkqhkiG9w0BAQsFADCBpjELMAkGA1UEBhMCR1IxDzANBgNV…",
            "-----BEGIN CERTIFICATE-----\nMIICwzCCAkqgAwIBAgIBADAKBggqhkjOPQQDAjCBqjELMAkGA1UEBhMCR1IxDzANBgNVBAcT…",
            "-----BEGIN CERTIFICATE-----\nMIIFazCCA1OgAwIBAgIRAIIQz7DSQONZRGPgu2OCiwAwDQYJKoZIhvcNAQELBQAwTzELMAkG…",
            "-----BEGIN CERTIFICATE-----\nMIIFgzCCA2ugAwIBAgIPXZONMGc2yAYdGsdUhGkHMA0GCSqGSIb3DQEBCwUAMDsxCzAJBgNV…",
            "-----BEGIN CERTIFICATE-----\nMIIDQTCCAimgAwIBAgITBmyfz5m/jAo54vB4ikPmljZbyjANBgkqhkiG9w0BAQsFADA5MQsw…",
            "-----BEGIN CERTIFICATE-----\nMIIFQTCCAymgAwIBAgITBmyf0pY1hp8KD+WGePhbJruKNzANBgkqhkiG9w0BAQwFADA5MQsw…",
            "-----BEGIN CERTIFICATE-----\nMIIBtjCCAVugAwIBAgITBmyf1XSXNmY/Owua2eiedgPySjAKBggqhkjOPQQDAjA5MQswCQYD…",
            "-----BEGIN CERTIFICATE-----\nMIIB8jCCAXigAwIBAgITBmyf18G7EEwpQ+Vxe3ssyBrBDjAKBggqhkjOPQQDAzA5MQswCQYD…",
            "-----BEGIN CERTIFICATE-----\nMIIEYzCCA0ugAwIBAgIBATANBgkqhkiG9w0BAQsFADCB0jELMAkGA1UEBhMCVFIxGDAWBgNV…",
            "-----BEGIN CERTIFICATE-----\nMIIFiDCCA3CgAwIBAgIIfQmX/vBH6nowDQYJKoZIhvcNAQELBQAwYjELMAkGA1UEBhMCQ04x…",
            "-----BEGIN CERTIFICATE-----\nMIIF3TCCA8WgAwIBAgIIeyyb0xaAMpkwDQYJKoZIhvcNAQELBQAwfDELMAkGA1UEBhMCVVMx…",
            "-----BEGIN CERTIFICATE-----\nMIICjTCCAhSgAwIBAgIIdebfy8FoW6gwCgYIKoZIzj0EAwIwfDELMAkGA1UEBhMCVVMxDjAM…",
            "-----BEGIN CERTIFICATE-----\nMIIF6zCCA9OgAwIBAgIIVrYpzTS8ePYwDQYJKoZIhvcNAQELBQAwgYIxCzAJBgNVBAYTAlVT…",
            "-----BEGIN CERTIFICATE-----\nMIIClDCCAhqgAwIBAgIILCmcWxbtBZUwCgYIKoZIzj0EAwIwfzELMAkGA1UEBhMCVVMxDjAM…",
            "-----BEGIN CERTIFICATE-----\nMIIFgzCCA2ugAwIBAgIORea7A4Mzw4VlSOb/RVEwDQYJKoZIhvcNAQEMBQAwTDEgMB4GA1UE…",
            "-----BEGIN CERTIFICATE-----\nMIICaTCCAe+gAwIBAgIQISpWDK7aDKtARb8roi066jAKBggqhkjOPQQDAzBtMQswCQYDVQQG…",
            "-----BEGIN CERTIFICATE-----\nMIIFRjCCAy6gAwIBAgIQXd+x2lqj7V2+WmUgZQOQ7zANBgkqhkiG9w0BAQsFADA9MQswCQYD…",
            "-----BEGIN CERTIFICATE-----\nMIIFWjCCA0KgAwIBAgIQT9Irj/VkyDOeTzRYZiNwYDANBgkqhkiG9w0BAQsFADBHMQswCQYD…",
            "-----BEGIN CERTIFICATE-----\nMIIGWzCCBEOgAwIBAgIRAMrpG4nxVQMNo+ZBbcTjpuEwDQYJKoZIhvcNAQELBQAwWjELMAkG…",
            "-----BEGIN CERTIFICATE-----\nMIIDlDCCAnygAwIBAgIKMfXkYgxsWO3W2DANBgkqhkiG9w0BAQsFADBnMQswCQYDVQQGEwJJ…",
            "-----BEGIN CERTIFICATE-----\nMIICTjCCAdOgAwIBAgIKPPYHqWhwDtqLhDAKBggqhkjOPQQDAzBrMQswCQYDVQQGEwJJTjET…",
            "-----BEGIN CERTIFICATE-----\nMIIDczCCAlugAwIBAgILAK7PALrEzzL4Q7IwDQYJKoZIhvcNAQELBQAwVjELMAkGA1UEBhMC…",
            "-----BEGIN CERTIFICATE-----\nMIICKzCCAbGgAwIBAgIKe3G2gla4EnycqDAKBggqhkjOPQQDAzBaMQswCQYDVQQGEwJVUzET…",
            "-----BEGIN CERTIFICATE-----\nMIIFzzCCA7egAwIBAgIUCBZfikyl7ADJk0DfxMauI7gcWqQwDQYJKoZIhvcNAQELBQAwbzEL…",
            "-----BEGIN CERTIFICATE-----\nMIIGSzCCBDOgAwIBAgIRANm1Q3+vqTkPAAAAAFVlrVgwDQYJKoZIhvcNAQELBQAwgb4xCzAJ…",
            "-----BEGIN CERTIFICATE-----\nMIICWTCCAd+gAwIBAgIQZvI9r4fei7FK6gxXMQHC7DAKBggqhkjOPQQDAzBlMQswCQYDVQQG…",
            "-----BEGIN CERTIFICATE-----\nMIIFqDCCA5CgAwIBAgIQHtOXCV/YtLNHcB6qvn9FszANBgkqhkiG9w0BAQwFADBlMQswCQYD…",
            "-----BEGIN CERTIFICATE-----\nMIICQDCCAeWgAwIBAgIMAVRI7yH9l1kN9QQKMAoGCCqGSM49BAMCMHExCzAJBgNVBAYTAkhV…",
            "-----BEGIN CERTIFICATE-----\nMIIFRzCCAy+gAwIBAgIJEQA0tk7GNi02MA0GCSqGSIb3DQEBCwUAMEExCzAJBgNVBAYTAlJP…",
            "-----BEGIN CERTIFICATE-----\nMIIF2jCCA8KgAwIBAgIMBfcOhtpJ80Y1LrqyMA0GCSqGSIb3DQEBCwUAMIGIMQswCQYDVQQG…",
            "-----BEGIN CERTIFICATE-----\nMIICYDCCAgegAwIBAgIMDWpfCD8oXD5Rld9dMAoGCCqGSM49BAMCMIGRMQswCQYDVQQGEwJV…",
            "-----BEGIN CERTIFICATE-----\nMIICnTCCAiSgAwIBAgIMCL2Fl2yZJ6SAaEc7MAoGCCqGSM49BAMDMIGRMQswCQYDVQQGEwJV…",
            "-----BEGIN CERTIFICATE-----\nMIIFojCCA4qgAwIBAgIUAZQwHqIL3fXFMyqxQ0Rx+NZQTQ0wDQYJKoZIhvcNAQEMBQAwaTEL…",
            "-----BEGIN CERTIFICATE-----\nMIICbjCCAfOgAwIBAgIQYvYybOXE42hcG2LdnC6dlTAKBggqhkjOPQQDAzB4MQswCQYDVQQG…",
            "-----BEGIN CERTIFICATE-----\nMIIFWjCCA0KgAwIBAgISEdK7udcjGJ5AXwqdLdDfJWfRMA0GCSqGSIb3DQEBDAUAMEYxCzAJ…",
            "-----BEGIN CERTIFICATE-----\nMIICCzCCAZGgAwIBAgISEdK7ujNu1LzmJGjFDYQdmOhDMAoGCCqGSM49BAMDMEYxCzAJBgNV…",
            "-----BEGIN CERTIFICATE-----\nMIIFgjCCA2qgAwIBAgILWku9WvtPilv6ZeUwDQYJKoZIhvcNAQELBQAwTTELMAkGA1UEBhMC…",
            "-----BEGIN CERTIFICATE-----\nMIIF7zCCA9egAwIBAgIIDdPjvGz5a7EwDQYJKoZIhvcNAQELBQAwgYQxEjAQBgNVBAUTCUc2…",
            "-----BEGIN CERTIFICATE-----\nMIICZTCCAeugAwIBAgIQeI8nXIESUiClBNAt3bpz9DAKBggqhkjOPQQDAzB0MQswCQYDVQQG…",
            "-----BEGIN CERTIFICATE-----\nMIIFwDCCA6igAwIBAgIQHr9ZULjJgDdMBvfrVU+17TANBgkqhkiG9w0BAQ0FADB6MQswCQYD…",
            "-----BEGIN CERTIFICATE-----\nMIIFszCCA5ugAwIBAgIUEwLV4kBMkkaGFmddtLu7sms+/BMwDQYJKoZIhvcNAQELBQAwYTEL…",
            "-----BEGIN CERTIFICATE-----\nMIIFpDCCA4ygAwIBAgIQOcqTHO9D88aOk8f0ZIk4fjANBgkqhkiG9w0BAQsFADBsMQswCQYD…",
            "-----BEGIN CERTIFICATE-----\nMIICVDCCAdugAwIBAgIQZ3SdjXfYO2rbIvT/WeK/zjAKBggqhkjOPQQDAzBsMQswCQYDVQQG…",
            "-----BEGIN CERTIFICATE-----\nMIIGFDCCA/ygAwIBAgIIG3Dp0v+ubHEwDQYJKoZIhvcNAQELBQAwUTELMAkGA1UEBhMCRVMx…",
            "-----BEGIN CERTIFICATE-----\nMIICDzCCAZWgAwIBAgIUbmq8WapTvpg5Z6LSa6Q75m0c1towCgYIKoZIzj0EAwMwRzELMAkG…",
            "-----BEGIN CERTIFICATE-----\nMIIFVjCCAz6gAwIBAgIUQ+NxE9izWRRdt86M/TX9b7wFjUUwDQYJKoZIhvcNAQELBQAwQzEL…",
            "-----BEGIN CERTIFICATE-----\nMIICGzCCAaGgAwIBAgIQQdKd0XLq7qeAwSxs6S+HUjAKBggqhkjOPQQDAzBPMQswCQYDVQQG…",
            "-----BEGIN CERTIFICATE-----\nMIIFajCCA1KgAwIBAgIQLd2szmKXlKFD6LDNdmpeYDANBgkqhkiG9w0BAQsFADBPMQswCQYD…",
            "-----BEGIN CERTIFICATE-----\nMIIB3DCCAYOgAwIBAgINAgPlfvU/k/2lCSGypjAKBggqhkjOPQQDAjBQMSQwIgYDVQQLExtH…",
            "-----BEGIN CERTIFICATE-----\nMIIFVzCCAz+gAwIBAgINAgPlk28xsBNJiGuiFzANBgkqhkiG9w0BAQwFADBHMQswCQYDVQQG…",
            "-----BEGIN CERTIFICATE-----\nMIIFVzCCAz+gAwIBAgINAgPlrsWNBCUaqxElqjANBgkqhkiG9w0BAQwFADBHMQswCQYDVQQG…",
            "-----BEGIN CERTIFICATE-----\nMIICCTCCAY6gAwIBAgINAgPluILrIPglJ209ZjAKBggqhkjOPQQDAzBHMQswCQYDVQQGEwJV…",
            "-----BEGIN CERTIFICATE-----\nMIICCTCCAY6gAwIBAgINAgPlwGjvYxqccpBQUjAKBggqhkjOPQQDAzBHMQswCQYDVQQGEwJV…",
            "-----BEGIN CERTIFICATE-----\nMIIFdDCCA1ygAwIBAgIPAWdfJ9b+euPkrL4JWwWeMA0GCSqGSIb3DQEBCwUAMEQxCzAJBgNV…",
            "-----BEGIN CERTIFICATE-----\nMIIC2zCCAmCgAwIBAgIQfMmPK4TX3+oPyWWa00tNljAKBggqhkjOPQQDAzBIMQswCQYDVQQG…",
            "-----BEGIN CERTIFICATE-----\nMIIC2zCCAmCgAwIBAgIQXwJB13qHfEwDo6yWjfv/0DAKBggqhkjOPQQDAzBIMQswCQYDVQQG…",
            "-----BEGIN CERTIFICATE-----\nMIICGTCCAZ+gAwIBAgIQCeCTZaz32ci5PhwLBCou8zAKBggqhkjOPQQDAzBOMQswCQYDVQQG…",
            "-----BEGIN CERTIFICATE-----\nMIIFZjCCA06gAwIBAgIQCPm0eKj6ftpqMzeJ3nzPijANBgkqhkiG9w0BAQwFADBNMQswCQYD…",
            "-----BEGIN CERTIFICATE-----\nMIIFRzCCAy+gAwIBAgIRAI4P+UuQcWhlM1T01EQ5t+AwDQYJKoZIhvcNAQELBQAwPTELMAkG…",
            "-----BEGIN CERTIFICATE-----\nMIIB9zCCAX2gAwIBAgIQBiUzsUcDMydc+Y2aub/M+DAKBggqhkjOPQQDAzA9MQswCQYDVQQG…",
            "-----BEGIN CERTIFICATE-----\nMIIF8zCCA9ugAwIBAgIUDU3FzRYilZYIfrgLfxUGNPt5EDQwDQYJKoZIhvcNAQELBQAwgYAx…",
            "-----BEGIN CERTIFICATE-----\nMIICpTCCAiqgAwIBAgIUJkYZdzHhT28oNt45UYbm1JeIIsEwCgYIKoZIzj0EAwMwgYAxCzAJ…",
            "-----BEGIN CERTIFICATE-----\nMIIFfzCCA2egAwIBAgIJAOF8N0D9G/5nMA0GCSqGSIb3DQEBDAUAMF0xCzAJBgNVBAYTAkpQ…",
            "-----BEGIN CERTIFICATE-----\nMIICODCCAb6gAwIBAgIJANZdm7N4gS7rMAoGCCqGSM49BAMDMGExCzAJBgNVBAYTAkpQMSUw…"
        ],
        convertALPNProtocols: [Circular: *7],
        checkServerIdentity: [Circular: *5],
        createSecureContext: [Circular: *8],
        SecureContext: [Circular: *2],
        TLSSocket: [Circular: *4],
        Server: [Circular: *3],
        createServer: [Circular: *10],
        connect: [Circular: *6],
        createSecurePair: [Circular: *9]
    },
    getCiphers: [Circular: *12],
    rootCertificates: [Circular: *13]
}
```

</td><td valign="top">

```js
{
    createSecureContext: ƒ createSecureContext(length: 1) {},
    parseCertString: ƒ parseCertString(length: 0) {},
    getCiphers: ƒ getCiphers(length: 0) {},
    getCurves: ƒ getCurves(length: 0) {},
    convertALPNProtocols: ƒ convertALPNProtocols(length: 2) {},
    TLSSocket: ƒ Socket(length: 1) {},
    SecureContext: ƒ SecureContext(length: 1) {},
    CLIENT_RENEG_LIMIT: 3,
    CLIENT_RENEG_WINDOW: 600,
    DEFAULT_ECDH_CURVE: "auto",
    DEFAULT_CIPHERS: "DHE-RSA-AES256-GCM-SHA384:DHE-RSA-AES128-GCM-SHA256:ECDHE-RSA-AES256-GCM-SHA384:ECDHE-RSA-AES128-GCM…",
    DEFAULT_MIN_VERSION: "TLSv1.2",
    DEFAULT_MAX_VERSION: "TLSv1.3",
    connect: <ref *9> ƒ createConnection(length: 3) {},
    createConnection: [Circular: *9],
    Server: class Server extends NetServer {},
    createServer: ƒ createServer(length: 2) {},
    Symbol(CommonJS): 0
}
```

</td></tr></table>

## trace_events

<table><tr><th>Node.js</th><th>Bun</th></tr><tr><td valign="top">

```js
[Object: null prototype] {
    createTracing: <ref *2> ƒ createTracing(length: 1) {},
    default: {
        createTracing: [Circular: *2],
        getEnabledCategories: <ref *4> ƒ getEnabledCategories(length: 0) {}
    },
    getEnabledCategories: [Circular: *4]
}
```

</td><td valign="top">

```js
{
    createTracing: ƒ createTracing(length: 1) {},
    getEnabledCategories: ƒ getEnabledCategories(length: 0) {},
    Symbol(CommonJS): 0
}
```

</td></tr></table>

## tty

<table><tr><th>Node.js</th><th>Bun</th></tr><tr><td valign="top">

```js
[Object: null prototype] {
    ReadStream: <ref *2> ƒ ReadStream(length: 2) {},
    WriteStream: <ref *3> ƒ WriteStream(length: 1) {},
    default: {
        isatty: <ref *5> ƒ isatty(length: 1) {},
        ReadStream: [Circular: *2],
        WriteStream: [Circular: *3]
    },
    isatty: [Circular: *5]
}
```

</td><td valign="top">

```js
{
    ReadStream: <ref *2> ƒ notimpl(length: 0) {},
    WriteStream: [Circular: *2],
    isatty: ƒ isatty(length: 1) {},
    Symbol(CommonJS): 0
}
```

</td></tr></table>

## url

<table><tr><th>Node.js</th><th>Bun</th></tr><tr><td valign="top">

```js
[Object: null prototype] {
    URL: <ref *2> class URL {
        createObjectURL: ƒ createObjectURL(length: 1) {},
        revokeObjectURL: ƒ revokeObjectURL(length: 1) {}
    },
    URLSearchParams: <ref *5> class URLSearchParams {},
    Url: <ref *6> ƒ Url(length: 0) {},
    default: {
        Url: [Circular: *6],
        parse: <ref *8> ƒ urlParse(length: 3) {},
        resolve: <ref *9> ƒ urlResolve(length: 2) {},
        resolveObject: <ref *10> ƒ urlResolveObject(length: 2) {},
        format: <ref *11> ƒ urlFormat(length: 2) {},
        URL: [Circular: *2],
        URLSearchParams: [Circular: *5],
        domainToASCII: <ref *12> ƒ domainToASCII(length: 1) {},
        domainToUnicode: <ref *13> ƒ domainToUnicode(length: 1) {},
        pathToFileURL: <ref *14> ƒ pathToFileURL(length: 1) {},
        fileURLToPath: <ref *15> ƒ fileURLToPath(length: 1) {},
        urlToHttpOptions: <ref *16> ƒ urlToHttpOptions(length: 1) {}
    },
    domainToASCII: [Circular: *12],
    domainToUnicode: [Circular: *13],
    fileURLToPath: [Circular: *15],
    format: [Circular: *11],
    parse: [Circular: *8],
    pathToFileURL: [Circular: *14],
    resolve: [Circular: *9],
    resolveObject: [Circular: *10],
    urlToHttpOptions: [Circular: *16]
}
```

</td><td valign="top">

```js
{
    URL: <ref *2> ƒ URL(length: 1) {
        createObjectURL: ƒ createObjectURL(length: 1) {},
        revokeObjectURL: ƒ revokeObjectURL(length: 1) {}
    },
    URLSearchParams: <ref *5> ƒ URLSearchParams(length: 0) {},
    Url: <ref *6> ƒ m(length: 0) {},
    default: {
        parse: <ref *8> ƒ A(length: 3) {},
        resolve: <ref *9> ƒ W(length: 2) {},
        resolveObject: <ref *10> ƒ X(length: 2) {},
        format: <ref *11> ƒ V(length: 1) {},
        Url: [Circular: *6],
        pathToFileURL: <ref *12> ƒ pathToFileURL(length: 1) {},
        fileURLToPath: <ref *13> ƒ fileURLToPath(length: 1) {},
        URL: [Circular: *2],
        URLSearchParams: [Circular: *5]
    },
    fileURLToPath: [Circular: *13],
    format: [Circular: *11],
    parse: [Circular: *8],
    pathToFileURL: [Circular: *12],
    resolve: [Circular: *9],
    resolveObject: [Circular: *10]
}
```

</td></tr></table>

## util

<table><tr><th>Node.js</th><th>Bun</th></tr><tr><td valign="top">

```js
[Object: null prototype] {
    MIMEParams: <ref *2> class MIMEParams {},
    MIMEType: <ref *3> class MIMEType {},
    TextDecoder: <ref *4> class TextDecoder {},
    TextEncoder: <ref *5> class TextEncoder {},
    _errnoException: <ref *6> ƒ __node_internal_errnoException(length: 3) {},
    _exceptionWithHostPort: <ref *7> ƒ __node_internal_exceptionWithHostPort(length: 5) {},
    _extend: <ref *8> ƒ _extend(length: 2) {},
    aborted: <ref *9> async ƒ aborted(length: 2) {},
    callbackify: <ref *10> ƒ callbackify(length: 1) {},
    debug: <ref *11> ƒ debuglog(length: 2) {},
    debuglog: [Circular: *11],
    default: {
        _errnoException: [Circular: *6],
        _exceptionWithHostPort: [Circular: *7],
        _extend: [Circular: *8],
        callbackify: [Circular: *10],
        debug: [Circular: *11],
        debuglog: [Circular: *11],
        deprecate: <ref *13> ƒ deprecate(length: 3) {},
        format: <ref *14> ƒ format(length: 0) {},
        formatWithOptions: <ref *15> ƒ formatWithOptions(length: 1) {},
        getSystemErrorMap: <ref *16> ƒ getSystemErrorMap(length: 0) {},
        getSystemErrorName: <ref *17> ƒ getSystemErrorName(length: 1) {},
        inherits: <ref *18> ƒ inherits(length: 2) {},
        inspect: <ref *19> ƒ inspect(length: 2) {
            custom: Symbol(nodejs.util.inspect.custom),
            colors: [Object: null prototype] {
                reset: [
                    0,
                    0
                ],
                bold: [
                    1,
                    22
                ],
                dim: [
                    2,
                    22
                ],
                italic: [
                    3,
                    23
                ],
                underline: [
                    4,
                    24
                ],
                blink: [
                    5,
                    25
                ],
                inverse: [
                    7,
                    27
                ],
                hidden: [
                    8,
                    28
                ],
                strikethrough: [
                    9,
                    29
                ],
                doubleunderline: [
                    21,
                    24
                ],
                black: [
                    30,
                    39
                ],
                red: [
                    31,
                    39
                ],
                green: [
                    32,
                    39
                ],
                yellow: [
                    33,
                    39
                ],
                blue: [
                    34,
                    39
                ],
                magenta: [
                    35,
                    39
                ],
                cyan: [
                    36,
                    39
                ],
                white: [
                    37,
                    39
                ],
                bgBlack: [
                    40,
                    49
                ],
                bgRed: [
                    41,
                    49
                ],
                bgGreen: [
                    42,
                    49
                ],
                bgYellow: [
                    43,
                    49
                ],
                bgBlue: [
                    44,
                    49
                ],
                bgMagenta: [
                    45,
                    49
                ],
                bgCyan: [
                    46,
                    49
                ],
                bgWhite: [
                    47,
                    49
                ],
                framed: [
                    51,
                    54
                ],
                overlined: [
                    53,
                    55
                ],
                gray: [
                    90,
                    39
                ],
                redBright: [
                    91,
                    39
                ],
                greenBright: [
                    92,
                    39
                ],
                yellowBright: [
                    93,
                    39
                ],
                blueBright: [
                    94,
                    39
                ],
                magentaBright: [
                    95,
                    39
                ],
                cyanBright: [
                    96,
                    39
                ],
                whiteBright: [
                    97,
                    39
                ],
                bgGray: [
                    100,
                    49
                ],
                bgRedBright: [
                    101,
                    49
                ],
                bgGreenBright: [
                    102,
                    49
                ],
                bgYellowBright: [
                    103,
                    49
                ],
                bgBlueBright: [
                    104,
                    49
                ],
                bgMagentaBright: [
                    105,
                    49
                ],
                bgCyanBright: [
                    106,
                    49
                ],
                bgWhiteBright: [
                    107,
                    49
                ]
            },
            styles: [Object: null prototype] {
                special: "cyan",
                number: "yellow",
                bigint: "yellow",
                boolean: "yellow",
                undefined: "grey",
                null: "bold",
                string: "green",
                symbol: "green",
                date: "magenta",
                regexp: "red",
                module: "underline"
            }
        },
        isArray: <ref *66> ƒ isArray(length: 1) {},
        isBoolean: <ref *67> ƒ isBoolean(length: 1) {},
        isBuffer: <ref *68> ƒ isBuffer(length: 1) {},
        isDeepStrictEqual: <ref *69> ƒ isDeepStrictEqual(length: 2) {},
        isNull: <ref *70> ƒ isNull(length: 1) {},
        isNullOrUndefined: <ref *71> ƒ isNullOrUndefined(length: 1) {},
        isNumber: <ref *72> ƒ isNumber(length: 1) {},
        isString: <ref *73> ƒ isString(length: 1) {},
        isSymbol: <ref *74> ƒ isSymbol(length: 1) {},
        isUndefined: <ref *75> ƒ isUndefined(length: 1) {},
        isRegExp: <ref *76> ƒ isRegExp(length: 0) {},
        isObject: <ref *77> ƒ isObject(length: 1) {},
        isDate: <ref *78> ƒ isDate(length: 0) {},
        isError: <ref *79> ƒ isError(length: 1) {},
        isFunction: <ref *80> ƒ isFunction(length: 1) {},
        isPrimitive: <ref *81> ƒ isPrimitive(length: 1) {},
        log: <ref *82> ƒ log(length: 0) {},
        MIMEType: [Circular: *3],
        MIMEParams: [Circular: *2],
        parseArgs: <ref *83> ƒ parseArgs(length: 0) {},
        promisify: <ref *84> ƒ promisify(length: 1) {
            custom: Symbol(nodejs.util.promisify.custom)
        },
        stripVTControlCharacters: <ref *85> ƒ stripVTControlCharacters(length: 1) {},
        toUSVString: <ref *86> ƒ toUSVString(length: 1) {},
        TextDecoder: [Circular: *4],
        TextEncoder: [Circular: *5],
        [get/set] transferableAbortSignal: <ref *87> ƒ transferableAbortSignal(length: 1) {},
        [get/set] transferableAbortController: <ref *88> ƒ transferableAbortController(length: 0) {},
        [get/set] aborted: [Circular: *9],
        types: <ref *89> {
            isExternal: ƒ isExternal(length: 0) {},
            isDate: [Circular: *78],
            isArgumentsObject: ƒ isArgumentsObject(length: 0) {},
            isBigIntObject: ƒ isBigIntObject(length: 0) {},
            isBooleanObject: ƒ isBooleanObject(length: 0) {},
            isNumberObject: ƒ isNumberObject(length: 0) {},
            isStringObject: ƒ isStringObject(length: 0) {},
            isSymbolObject: ƒ isSymbolObject(length: 0) {},
            isNativeError: ƒ isNativeError(length: 0) {},
            isRegExp: [Circular: *76],
            isAsyncFunction: ƒ isAsyncFunction(length: 0) {},
            isGeneratorFunction: ƒ isGeneratorFunction(length: 0) {},
            isGeneratorObject: ƒ isGeneratorObject(length: 0) {},
            isPromise: ƒ isPromise(length: 0) {},
            isMap: ƒ isMap(length: 0) {},
            isSet: ƒ isSet(length: 0) {},
            isMapIterator: ƒ isMapIterator(length: 0) {},
            isSetIterator: ƒ isSetIterator(length: 0) {},
            isWeakMap: ƒ isWeakMap(length: 0) {},
            isWeakSet: ƒ isWeakSet(length: 0) {},
            isArrayBuffer: ƒ isArrayBuffer(length: 0) {},
            isDataView: ƒ isDataView(length: 0) {},
            isSharedArrayBuffer: ƒ isSharedArrayBuffer(length: 0) {},
            isProxy: ƒ isProxy(length: 0) {},
            isModuleNamespaceObject: ƒ isModuleNamespaceObject(length: 0) {},
            isAnyArrayBuffer: ƒ isAnyArrayBuffer(length: 0) {},
            isBoxedPrimitive: ƒ isBoxedPrimitive(length: 0) {},
            isArrayBufferView: ƒ isView(length: 1) {},
            isTypedArray: ƒ isTypedArray(length: 1) {},
            isUint8Array: ƒ isUint8Array(length: 1) {},
            isUint8ClampedArray: ƒ isUint8ClampedArray(length: 1) {},
            isUint16Array: ƒ isUint16Array(length: 1) {},
            isUint32Array: ƒ isUint32Array(length: 1) {},
            isInt8Array: ƒ isInt8Array(length: 1) {},
            isInt16Array: ƒ isInt16Array(length: 1) {},
            isInt32Array: ƒ isInt32Array(length: 1) {},
            isFloat32Array: ƒ isFloat32Array(length: 1) {},
            isFloat64Array: ƒ isFloat64Array(length: 1) {},
            isBigInt64Array: ƒ isBigInt64Array(length: 1) {},
            isBigUint64Array: ƒ isBigUint64Array(length: 1) {},
            isKeyObject: ƒ value(length: 1) {},
            isCryptoKey: ƒ value(length: 1) {}
        }
    },
    deprecate: [Circular: *13],
    format: [Circular: *14],
    formatWithOptions: [Circular: *15],
    getSystemErrorMap: [Circular: *16],
    getSystemErrorName: [Circular: *17],
    inherits: [Circular: *18],
    inspect: [Circular: *19],
    isArray: [Circular: *66],
    isBoolean: [Circular: *67],
    isBuffer: [Circular: *68],
    isDate: [Circular: *78],
    isDeepStrictEqual: [Circular: *69],
    isError: [Circular: *79],
    isFunction: [Circular: *80],
    isNull: [Circular: *70],
    isNullOrUndefined: [Circular: *71],
    isNumber: [Circular: *72],
    isObject: [Circular: *77],
    isPrimitive: [Circular: *81],
    isRegExp: [Circular: *76],
    isString: [Circular: *73],
    isSymbol: [Circular: *74],
    isUndefined: [Circular: *75],
    log: [Circular: *82],
    parseArgs: [Circular: *83],
    promisify: [Circular: *84],
    stripVTControlCharacters: [Circular: *85],
    toUSVString: [Circular: *86],
    transferableAbortController: [Circular: *88],
    transferableAbortSignal: [Circular: *87],
    types: [Circular: *89]
}
```

</td><td valign="top">

```js
{
    isDeepStrictEqual: ƒ isDeepStrictEqual(length: 2) {},
    format: ƒ format(length: 1) {},
    deprecate: ƒ deprecate(length: 2) {},
    debuglog: ƒ debuglog(length: 1) {},
    inspect: ƒ inspect(length: 2) {
        colors: {
            bold: [
                1,
                22
            ],
            italic: [
                3,
                23
            ],
            underline: [
                4,
                24
            ],
            inverse: [
                7,
                27
            ],
            white: [
                37,
                39
            ],
            grey: [
                90,
                39
            ],
            black: [
                30,
                39
            ],
            blue: [
                34,
                39
            ],
            cyan: [
                36,
                39
            ],
            green: [
                32,
                39
            ],
            magenta: [
                35,
                39
            ],
            red: [
                31,
                39
            ],
            yellow: [
                33,
                39
            ]
        },
        styles: {
            special: "cyan",
            number: "yellow",
            boolean: "yellow",
            undefined: "grey",
            null: "bold",
            string: "green",
            date: "magenta",
            regexp: "red"
        }
    },
    types: {
        isExternal: ƒ isExternal(length: 1) {},
        isDate: <ref *24> ƒ isDate(length: 1) {},
        isArgumentsObject: ƒ isArgumentsObject(length: 1) {},
        isBigIntObject: ƒ isBigIntObject(length: 1) {},
        isBooleanObject: ƒ isBooleanObject(length: 1) {},
        isNumberObject: ƒ isNumberObject(length: 1) {},
        isStringObject: ƒ isStringObject(length: 1) {},
        isSymbolObject: ƒ isSymbolObject(length: 1) {},
        isNativeError: <ref *31> ƒ isNativeError(length: 1) {},
        isRegExp: <ref *32> ƒ isRegExp(length: 1) {},
        isAsyncFunction: ƒ isAsyncFunction(length: 1) {},
        isGeneratorFunction: ƒ isGeneratorFunction(length: 1) {},
        isGeneratorObject: ƒ isGeneratorObject(length: 1) {},
        isPromise: ƒ isPromise(length: 1) {},
        isMap: ƒ isMap(length: 1) {},
        isSet: ƒ isSet(length: 1) {},
        isMapIterator: ƒ isMapIterator(length: 1) {},
        isSetIterator: ƒ isSetIterator(length: 1) {},
        isWeakMap: ƒ isWeakMap(length: 1) {},
        isWeakSet: ƒ isWeakSet(length: 1) {},
        isArrayBuffer: ƒ isArrayBuffer(length: 1) {},
        isDataView: ƒ isDataView(length: 1) {},
        isSharedArrayBuffer: ƒ isSharedArrayBuffer(length: 1) {},
        isProxy: ƒ isProxy(length: 1) {},
        isModuleNamespaceObject: ƒ isModuleNamespaceObject(length: 1) {},
        isAnyArrayBuffer: ƒ isAnyArrayBuffer(length: 1) {},
        isBoxedPrimitive: ƒ isBoxedPrimitive(length: 1) {},
        isArrayBufferView: ƒ isArrayBufferView(length: 1) {},
        isTypedArray: ƒ isTypedArray(length: 1) {},
        isUint8Array: ƒ isUint8Array(length: 1) {},
        isUint8ClampedArray: ƒ isUint8ClampedArray(length: 1) {},
        isUint16Array: ƒ isUint16Array(length: 1) {},
        isUint32Array: ƒ isUint32Array(length: 1) {},
        isInt8Array: ƒ isInt8Array(length: 1) {},
        isInt16Array: ƒ isInt16Array(length: 1) {},
        isInt32Array: ƒ isInt32Array(length: 1) {},
        isFloat32Array: ƒ isFloat32Array(length: 1) {},
        isFloat64Array: ƒ isFloat64Array(length: 1) {},
        isBigInt64Array: ƒ isBigInt64Array(length: 1) {},
        isBigUint64Array: ƒ isBigUint64Array(length: 1) {},
        isKeyObject: ƒ isKeyObject(length: 1) {},
        isCryptoKey: ƒ isCryptoKey(length: 1) {},
        Symbol(CommonJS): 0
    },
    isArray: ƒ isArray(length: 1) {},
    isBoolean: ƒ isBoolean(length: 1) {},
    isNull: ƒ isNull(length: 1) {},
    isNullOrUndefined: ƒ isNullOrUndefined(length: 1) {},
    isNumber: ƒ isNumber(length: 1) {},
    isString: ƒ isString(length: 1) {},
    isSymbol: ƒ isSymbol(length: 1) {},
    isUndefined: ƒ isUndefined(length: 1) {},
    isRegExp: [Circular: *32],
    isObject: ƒ isObject(length: 1) {},
    isDate: [Circular: *24],
    isError: [Circular: *31],
    isFunction: ƒ isFunction(length: 1) {},
    isPrimitive: ƒ isPrimitive(length: 1) {},
    isBuffer: ƒ isBuffer(length: 1) {},
    log: ƒ (length: 0) {},
    inherits: ƒ inherits(length: 2) {},
    _extend: ƒ (length: 2) {},
    promisify: ƒ promisify2(length: 1) {
        custom: Symbol(util.promisify.custom)
    },
    callbackify: ƒ callbackify(length: 1) {},
    TextDecoder: ƒ TextDecoder(length: 0) {},
    TextEncoder: ƒ TextEncoder(length: 0) {},
    Symbol(CommonJS): 0
}
```

</td></tr></table>

## util/types

<table><tr><th>Node.js</th><th>Bun</th></tr><tr><td valign="top">

```js
[Object: null prototype] {
    default: {
        isExternal: <ref *3> ƒ isExternal(length: 0) {},
        isDate: <ref *4> ƒ isDate(length: 0) {},
        isArgumentsObject: <ref *5> ƒ isArgumentsObject(length: 0) {},
        isBigIntObject: <ref *6> ƒ isBigIntObject(length: 0) {},
        isBooleanObject: <ref *7> ƒ isBooleanObject(length: 0) {},
        isNumberObject: <ref *8> ƒ isNumberObject(length: 0) {},
        isStringObject: <ref *9> ƒ isStringObject(length: 0) {},
        isSymbolObject: <ref *10> ƒ isSymbolObject(length: 0) {},
        isNativeError: <ref *11> ƒ isNativeError(length: 0) {},
        isRegExp: <ref *12> ƒ isRegExp(length: 0) {},
        isAsyncFunction: <ref *13> ƒ isAsyncFunction(length: 0) {},
        isGeneratorFunction: <ref *14> ƒ isGeneratorFunction(length: 0) {},
        isGeneratorObject: <ref *15> ƒ isGeneratorObject(length: 0) {},
        isPromise: <ref *16> ƒ isPromise(length: 0) {},
        isMap: <ref *17> ƒ isMap(length: 0) {},
        isSet: <ref *18> ƒ isSet(length: 0) {},
        isMapIterator: <ref *19> ƒ isMapIterator(length: 0) {},
        isSetIterator: <ref *20> ƒ isSetIterator(length: 0) {},
        isWeakMap: <ref *21> ƒ isWeakMap(length: 0) {},
        isWeakSet: <ref *22> ƒ isWeakSet(length: 0) {},
        isArrayBuffer: <ref *23> ƒ isArrayBuffer(length: 0) {},
        isDataView: <ref *24> ƒ isDataView(length: 0) {},
        isSharedArrayBuffer: <ref *25> ƒ isSharedArrayBuffer(length: 0) {},
        isProxy: <ref *26> ƒ isProxy(length: 0) {},
        isModuleNamespaceObject: <ref *27> ƒ isModuleNamespaceObject(length: 0) {},
        isAnyArrayBuffer: <ref *28> ƒ isAnyArrayBuffer(length: 0) {},
        isBoxedPrimitive: <ref *29> ƒ isBoxedPrimitive(length: 0) {},
        isArrayBufferView: <ref *30> ƒ isView(length: 1) {},
        isTypedArray: <ref *31> ƒ isTypedArray(length: 1) {},
        isUint8Array: <ref *32> ƒ isUint8Array(length: 1) {},
        isUint8ClampedArray: <ref *33> ƒ isUint8ClampedArray(length: 1) {},
        isUint16Array: <ref *34> ƒ isUint16Array(length: 1) {},
        isUint32Array: <ref *35> ƒ isUint32Array(length: 1) {},
        isInt8Array: <ref *36> ƒ isInt8Array(length: 1) {},
        isInt16Array: <ref *37> ƒ isInt16Array(length: 1) {},
        isInt32Array: <ref *38> ƒ isInt32Array(length: 1) {},
        isFloat32Array: <ref *39> ƒ isFloat32Array(length: 1) {},
        isFloat64Array: <ref *40> ƒ isFloat64Array(length: 1) {},
        isBigInt64Array: <ref *41> ƒ isBigInt64Array(length: 1) {},
        isBigUint64Array: <ref *42> ƒ isBigUint64Array(length: 1) {},
        isKeyObject: <ref *43> ƒ value(length: 1) {},
        isCryptoKey: <ref *44> ƒ value(length: 1) {}
    },
    isAnyArrayBuffer: [Circular: *28],
    isArgumentsObject: [Circular: *5],
    isArrayBuffer: [Circular: *23],
    isArrayBufferView: [Circular: *30],
    isAsyncFunction: [Circular: *13],
    isBigInt64Array: [Circular: *41],
    isBigIntObject: [Circular: *6],
    isBigUint64Array: [Circular: *42],
    isBooleanObject: [Circular: *7],
    isBoxedPrimitive: [Circular: *29],
    isCryptoKey: [Circular: *44],
    isDataView: [Circular: *24],
    isDate: [Circular: *4],
    isExternal: [Circular: *3],
    isFloat32Array: [Circular: *39],
    isFloat64Array: [Circular: *40],
    isGeneratorFunction: [Circular: *14],
    isGeneratorObject: [Circular: *15],
    isInt16Array: [Circular: *37],
    isInt32Array: [Circular: *38],
    isInt8Array: [Circular: *36],
    isKeyObject: [Circular: *43],
    isMap: [Circular: *17],
    isMapIterator: [Circular: *19],
    isModuleNamespaceObject: [Circular: *27],
    isNativeError: [Circular: *11],
    isNumberObject: [Circular: *8],
    isPromise: [Circular: *16],
    isProxy: [Circular: *26],
    isRegExp: [Circular: *12],
    isSet: [Circular: *18],
    isSetIterator: [Circular: *20],
    isSharedArrayBuffer: [Circular: *25],
    isStringObject: [Circular: *9],
    isSymbolObject: [Circular: *10],
    isTypedArray: [Circular: *31],
    isUint16Array: [Circular: *34],
    isUint32Array: [Circular: *35],
    isUint8Array: [Circular: *32],
    isUint8ClampedArray: [Circular: *33],
    isWeakMap: [Circular: *21],
    isWeakSet: [Circular: *22]
}
```

</td><td valign="top">

```js
{
    isExternal: ƒ isExternal(length: 1) {},
    isDate: ƒ isDate(length: 1) {},
    isArgumentsObject: ƒ isArgumentsObject(length: 1) {},
    isBigIntObject: ƒ isBigIntObject(length: 1) {},
    isBooleanObject: ƒ isBooleanObject(length: 1) {},
    isNumberObject: ƒ isNumberObject(length: 1) {},
    isStringObject: ƒ isStringObject(length: 1) {},
    isSymbolObject: ƒ isSymbolObject(length: 1) {},
    isNativeError: ƒ isNativeError(length: 1) {},
    isRegExp: ƒ isRegExp(length: 1) {},
    isAsyncFunction: ƒ isAsyncFunction(length: 1) {},
    isGeneratorFunction: ƒ isGeneratorFunction(length: 1) {},
    isGeneratorObject: ƒ isGeneratorObject(length: 1) {},
    isPromise: ƒ isPromise(length: 1) {},
    isMap: ƒ isMap(length: 1) {},
    isSet: ƒ isSet(length: 1) {},
    isMapIterator: ƒ isMapIterator(length: 1) {},
    isSetIterator: ƒ isSetIterator(length: 1) {},
    isWeakMap: ƒ isWeakMap(length: 1) {},
    isWeakSet: ƒ isWeakSet(length: 1) {},
    isArrayBuffer: ƒ isArrayBuffer(length: 1) {},
    isDataView: ƒ isDataView(length: 1) {},
    isSharedArrayBuffer: ƒ isSharedArrayBuffer(length: 1) {},
    isProxy: ƒ isProxy(length: 1) {},
    isModuleNamespaceObject: ƒ isModuleNamespaceObject(length: 1) {},
    isAnyArrayBuffer: ƒ isAnyArrayBuffer(length: 1) {},
    isBoxedPrimitive: ƒ isBoxedPrimitive(length: 1) {},
    isArrayBufferView: ƒ isArrayBufferView(length: 1) {},
    isTypedArray: ƒ isTypedArray(length: 1) {},
    isUint8Array: ƒ isUint8Array(length: 1) {},
    isUint8ClampedArray: ƒ isUint8ClampedArray(length: 1) {},
    isUint16Array: ƒ isUint16Array(length: 1) {},
    isUint32Array: ƒ isUint32Array(length: 1) {},
    isInt8Array: ƒ isInt8Array(length: 1) {},
    isInt16Array: ƒ isInt16Array(length: 1) {},
    isInt32Array: ƒ isInt32Array(length: 1) {},
    isFloat32Array: ƒ isFloat32Array(length: 1) {},
    isFloat64Array: ƒ isFloat64Array(length: 1) {},
    isBigInt64Array: ƒ isBigInt64Array(length: 1) {},
    isBigUint64Array: ƒ isBigUint64Array(length: 1) {},
    isKeyObject: ƒ isKeyObject(length: 1) {},
    isCryptoKey: ƒ isCryptoKey(length: 1) {},
    Symbol(CommonJS): 0
}
```

</td></tr></table>

## v8

<table><tr><th>Node.js</th><th>Bun</th></tr><tr><td valign="top">

```js
[Object: null prototype] {
    DefaultDeserializer: <ref *2> class DefaultDeserializer extends Deserializer {},
    DefaultSerializer: <ref *3> class DefaultSerializer extends Serializer {},
    Deserializer: <ref *4> ƒ Deserializer(length: 1) {},
    GCProfiler: <ref *5> class GCProfiler {},
    Serializer: <ref *6> ƒ Serializer(length: 0) {},
    cachedDataVersionTag: <ref *7> ƒ cachedDataVersionTag(length: 0) {},
    default: {
        cachedDataVersionTag: [Circular: *7],
        getHeapSnapshot: <ref *9> ƒ getHeapSnapshot(length: 0) {},
        getHeapStatistics: <ref *10> ƒ getHeapStatistics(length: 0) {},
        getHeapSpaceStatistics: <ref *11> ƒ getHeapSpaceStatistics(length: 0) {},
        getHeapCodeStatistics: <ref *12> ƒ getHeapCodeStatistics(length: 0) {},
        setFlagsFromString: <ref *13> ƒ setFlagsFromString(length: 1) {},
        Serializer: [Circular: *6],
        Deserializer: [Circular: *4],
        DefaultSerializer: [Circular: *3],
        DefaultDeserializer: [Circular: *2],
        deserialize: <ref *14> ƒ deserialize(length: 1) {},
        takeCoverage: <ref *15> ƒ takeCoverage(length: 0) {},
        stopCoverage: <ref *16> ƒ stopCoverage(length: 0) {},
        serialize: <ref *17> ƒ serialize(length: 1) {},
        writeHeapSnapshot: <ref *18> ƒ writeHeapSnapshot(length: 1) {},
        promiseHooks: <ref *19> {
            createHook: ƒ createHook(length: 0) {},
            onInit: ƒ (length: 1) {},
            onBefore: ƒ (length: 1) {},
            onAfter: ƒ (length: 1) {},
            onSettled: ƒ (length: 1) {}
        },
        startupSnapshot: <ref *25> {
            addDeserializeCallback: ƒ addDeserializeCallback(length: 2) {},
            addSerializeCallback: ƒ addSerializeCallback(length: 2) {},
            setDeserializeMainFunction: ƒ setDeserializeMainFunction(length: 2) {},
            isBuildingSnapshot: ƒ isBuildingSnapshot(length: 0) {}
        },
        setHeapSnapshotNearHeapLimit: <ref *30> ƒ setHeapSnapshotNearHeapLimit(length: 1) {},
        GCProfiler: [Circular: *5]
    },
    deserialize: [Circular: *14],
    getHeapCodeStatistics: [Circular: *12],
    getHeapSnapshot: [Circular: *9],
    getHeapSpaceStatistics: [Circular: *11],
    getHeapStatistics: [Circular: *10],
    promiseHooks: [Circular: *19],
    serialize: [Circular: *17],
    setFlagsFromString: [Circular: *13],
    setHeapSnapshotNearHeapLimit: [Circular: *30],
    startupSnapshot: [Circular: *25],
    stopCoverage: [Circular: *16],
    takeCoverage: [Circular: *15],
    writeHeapSnapshot: [Circular: *18]
}
```

</td><td valign="top">

```js
{
    cachedDataVersionTag: ƒ ::bunternal::(length: 0) {},
    getHeapSnapshot: ƒ ::bunternal::(length: 0) {},
    getHeapStatistics: ƒ ::bunternal::(length: 0) {},
    getHeapSpaceStatistics: ƒ ::bunternal::(length: 0) {},
    getHeapCodeStatistics: ƒ ::bunternal::(length: 0) {},
    setFlagsFromString: ƒ ::bunternal::(length: 0) {},
    deserialize: ƒ ::bunternal::(length: 0) {},
    takeCoverage: ƒ ::bunternal::(length: 0) {},
    stopCoverage: ƒ ::bunternal::(length: 0) {},
    serialize: ƒ ::bunternal::(length: 0) {},
    writeHeapSnapshot: ƒ ::bunternal::(length: 0) {},
    setHeapSnapshotNearHeapLimit: ƒ ::bunternal::(length: 0) {},
    promiseHooks: {
        createHook: ƒ createHook(length: 0) {},
        onInit: ƒ onInit(length: 0) {},
        onBefore: ƒ onBefore(length: 0) {},
        onAfter: ƒ onAfter(length: 0) {},
        onSettled: ƒ onSettled(length: 0) {}
    },
    startupSnapshot: {
        addDeserializeCallback: ƒ addDeserializeCallback(length: 0) {},
        addSerializeCallback: ƒ addSerializeCallback(length: 0) {},
        setDeserializeMainFunction: ƒ setDeserializeMainFunction(length: 0) {},
        isBuildingSnapshot: ƒ isBuildingSnapshot(length: 0) {}
    },
    Deserializer: class Deserializer {},
    Serializer: class Serializer {},
    Symbol(CommonJS): 0
}
```

</td></tr></table>

## vm

<table><tr><th>Node.js</th><th>Bun</th></tr><tr><td valign="top">

```js
[Object: null prototype] {
    Script: <ref *2> class Script extends ContextifyScript {},
    compileFunction: <ref *3> ƒ compileFunction(length: 2) {},
    createContext: <ref *4> ƒ createContext(length: 0) {},
    createScript: <ref *5> ƒ createScript(length: 2) {},
    default: {
        Script: [Circular: *2],
        createContext: [Circular: *4],
        createScript: [Circular: *5],
        runInContext: <ref *7> ƒ runInContext(length: 3) {},
        runInNewContext: <ref *8> ƒ runInNewContext(length: 3) {},
        runInThisContext: <ref *9> ƒ runInThisContext(length: 2) {},
        isContext: <ref *10> ƒ isContext(length: 1) {},
        compileFunction: [Circular: *3],
        measureMemory: <ref *11> ƒ measureMemory(length: 0) {}
    },
    isContext: [Circular: *10],
    measureMemory: [Circular: *11],
    runInContext: [Circular: *7],
    runInNewContext: [Circular: *8],
    runInThisContext: [Circular: *9]
}
```

</td><td valign="top">

```js
{
    createContext: ƒ createContext(length: 0) {},
    runInContext: ƒ runInContext(length: 3) {},
    runInNewContext: ƒ runInNewContext(length: 0) {},
    runInThisContext: ƒ runInThisContext(length: 0) {},
    isContext: ƒ isContext(length: 0) {},
    compileFunction: ƒ compileFunction(length: 0) {},
    measureMemory: ƒ measureMemory(length: 0) {},
    Script: ƒ Script(length: 1) {},
    Symbol(CommonJS): 0
}
```

</td></tr></table>

## worker_threads

<table><tr><th>Node.js</th><th>Bun</th></tr><tr><td valign="top">

```js
[Object: null prototype] {
    BroadcastChannel: <ref *2> class BroadcastChannel extends EventTarget {},
    MessageChannel: <ref *3> ƒ MessageChannel(length: 0) {},
    MessagePort: <ref *4> ƒ MessagePort(length: 0) {},
    SHARE_ENV: Symbol(nodejs.worker_threads.SHARE_ENV),
    Worker: <ref *5> class Worker extends EventEmitter {},
    default: {
        isMainThread: true,
        MessagePort: [Circular: *4],
        MessageChannel: [Circular: *3],
        markAsUntransferable: <ref *7> ƒ markAsUntransferable(length: 1) {},
        moveMessagePortToContext: <ref *8> ƒ moveMessagePortToContext(length: 0) {},
        receiveMessageOnPort: <ref *9> ƒ receiveMessageOnPort(length: 1) {},
        resourceLimits: <ref *10> {},
        threadId: 0,
        SHARE_ENV: Symbol(nodejs.worker_threads.SHARE_ENV),
        Worker: [Circular: *5],
        parentPort: null,
        workerData: null,
        BroadcastChannel: [Circular: *2],
        setEnvironmentData: <ref *11> ƒ setEnvironmentData(length: 2) {},
        getEnvironmentData: <ref *12> ƒ getEnvironmentData(length: 1) {}
    },
    getEnvironmentData: [Circular: *12],
    isMainThread: true,
    markAsUntransferable: [Circular: *7],
    moveMessagePortToContext: [Circular: *8],
    parentPort: null,
    receiveMessageOnPort: [Circular: *9],
    resourceLimits: [Circular: *10],
    setEnvironmentData: [Circular: *11],
    threadId: 0,
    workerData: null
}
```

</td><td valign="top">

```js
[Unexpected Error: [object Function] (type "undefined")]
```

</td></tr></table>

## zlib

<table><tr><th>Node.js</th><th>Bun</th></tr><tr><td valign="top">

```js
[Object: null prototype] {
    BrotliCompress: <ref *2> ƒ BrotliCompress(length: 1) {},
    BrotliDecompress: <ref *3> ƒ BrotliDecompress(length: 1) {},
    Deflate: <ref *4> ƒ Deflate(length: 1) {},
    DeflateRaw: <ref *5> ƒ DeflateRaw(length: 1) {},
    Gunzip: <ref *6> ƒ Gunzip(length: 1) {},
    Gzip: <ref *7> ƒ Gzip(length: 1) {},
    Inflate: <ref *8> ƒ Inflate(length: 1) {},
    InflateRaw: <ref *9> ƒ InflateRaw(length: 1) {},
    Unzip: <ref *10> ƒ Unzip(length: 1) {},
    brotliCompress: <ref *11> ƒ asyncBufferWrapper(length: 3) {},
    brotliCompressSync: <ref *12> ƒ syncBufferWrapper(length: 2) {},
    brotliDecompress: <ref *13> ƒ asyncBufferWrapper(length: 3) {},
    brotliDecompressSync: <ref *14> ƒ syncBufferWrapper(length: 2) {},
    codes: <ref *15> {
        0: "Z_OK",
        1: "Z_STREAM_END",
        2: "Z_NEED_DICT",
        Z_OK: 0,
        Z_STREAM_END: 1,
        Z_NEED_DICT: 2,
        Z_ERRNO: -1,
        Z_STREAM_ERROR: -2,
        Z_DATA_ERROR: -3,
        Z_MEM_ERROR: -4,
        Z_BUF_ERROR: -5,
        Z_VERSION_ERROR: -6,
        -1: "Z_ERRNO",
        -2: "Z_STREAM_ERROR",
        -3: "Z_DATA_ERROR",
        -4: "Z_MEM_ERROR",
        -5: "Z_BUF_ERROR",
        -6: "Z_VERSION_ERROR"
    },
    constants: <ref *16> [Object: null prototype] {
        Z_NO_FLUSH: 0,
        Z_PARTIAL_FLUSH: 1,
        Z_SYNC_FLUSH: 2,
        Z_FULL_FLUSH: 3,
        Z_FINISH: 4,
        Z_BLOCK: 5,
        Z_OK: 0,
        Z_STREAM_END: 1,
        Z_NEED_DICT: 2,
        Z_ERRNO: -1,
        Z_STREAM_ERROR: -2,
        Z_DATA_ERROR: -3,
        Z_MEM_ERROR: -4,
        Z_BUF_ERROR: -5,
        Z_VERSION_ERROR: -6,
        Z_NO_COMPRESSION: 0,
        Z_BEST_SPEED: 1,
        Z_BEST_COMPRESSION: 9,
        Z_DEFAULT_COMPRESSION: -1,
        Z_FILTERED: 1,
        Z_HUFFMAN_ONLY: 2,
        Z_RLE: 3,
        Z_FIXED: 4,
        Z_DEFAULT_STRATEGY: 0,
        ZLIB_VERNUM: 4816,
        DEFLATE: 1,
        INFLATE: 2,
        GZIP: 3,
        GUNZIP: 4,
        DEFLATERAW: 5,
        INFLATERAW: 6,
        UNZIP: 7,
        BROTLI_DECODE: 8,
        BROTLI_ENCODE: 9,
        Z_MIN_WINDOWBITS: 8,
        Z_MAX_WINDOWBITS: 15,
        Z_DEFAULT_WINDOWBITS: 15,
        Z_MIN_CHUNK: 64,
        Z_MAX_CHUNK: Infinity,
        Z_DEFAULT_CHUNK: 16384,
        Z_MIN_MEMLEVEL: 1,
        Z_MAX_MEMLEVEL: 9,
        Z_DEFAULT_MEMLEVEL: 8,
        Z_MIN_LEVEL: -1,
        Z_MAX_LEVEL: 9,
        Z_DEFAULT_LEVEL: -1,
        BROTLI_OPERATION_PROCESS: 0,
        BROTLI_OPERATION_FLUSH: 1,
        BROTLI_OPERATION_FINISH: 2,
        BROTLI_OPERATION_EMIT_METADATA: 3,
        BROTLI_PARAM_MODE: 0,
        BROTLI_MODE_GENERIC: 0,
        BROTLI_MODE_TEXT: 1,
        BROTLI_MODE_FONT: 2,
        BROTLI_DEFAULT_MODE: 0,
        BROTLI_PARAM_QUALITY: 1,
        BROTLI_MIN_QUALITY: 0,
        BROTLI_MAX_QUALITY: 11,
        BROTLI_DEFAULT_QUALITY: 11,
        BROTLI_PARAM_LGWIN: 2,
        BROTLI_MIN_WINDOW_BITS: 10,
        BROTLI_MAX_WINDOW_BITS: 24,
        BROTLI_LARGE_MAX_WINDOW_BITS: 30,
        BROTLI_DEFAULT_WINDOW: 22,
        BROTLI_PARAM_LGBLOCK: 3,
        BROTLI_MIN_INPUT_BLOCK_BITS: 16,
        BROTLI_MAX_INPUT_BLOCK_BITS: 24,
        BROTLI_PARAM_DISABLE_LITERAL_CONTEXT_MODELING: 4,
        BROTLI_PARAM_SIZE_HINT: 5,
        BROTLI_PARAM_LARGE_WINDOW: 6,
        BROTLI_PARAM_NPOSTFIX: 7,
        BROTLI_PARAM_NDIRECT: 8,
        BROTLI_DECODER_RESULT_ERROR: 0,
        BROTLI_DECODER_RESULT_SUCCESS: 1,
        BROTLI_DECODER_RESULT_NEEDS_MORE_INPUT: 2,
        BROTLI_DECODER_RESULT_NEEDS_MORE_OUTPUT: 3,
        BROTLI_DECODER_PARAM_DISABLE_RING_BUFFER_REALLOCATION: 0,
        BROTLI_DECODER_PARAM_LARGE_WINDOW: 1,
        BROTLI_DECODER_NO_ERROR: 0,
        BROTLI_DECODER_SUCCESS: 1,
        BROTLI_DECODER_NEEDS_MORE_INPUT: 2,
        BROTLI_DECODER_NEEDS_MORE_OUTPUT: 3,
        BROTLI_DECODER_ERROR_FORMAT_EXUBERANT_NIBBLE: -1,
        BROTLI_DECODER_ERROR_FORMAT_RESERVED: -2,
        BROTLI_DECODER_ERROR_FORMAT_EXUBERANT_META_NIBBLE: -3,
        BROTLI_DECODER_ERROR_FORMAT_SIMPLE_HUFFMAN_ALPHABET: -4,
        BROTLI_DECODER_ERROR_FORMAT_SIMPLE_HUFFMAN_SAME: -5,
        BROTLI_DECODER_ERROR_FORMAT_CL_SPACE: -6,
        BROTLI_DECODER_ERROR_FORMAT_HUFFMAN_SPACE: -7,
        BROTLI_DECODER_ERROR_FORMAT_CONTEXT_MAP_REPEAT: -8,
        BROTLI_DECODER_ERROR_FORMAT_BLOCK_LENGTH_1: -9,
        BROTLI_DECODER_ERROR_FORMAT_BLOCK_LENGTH_2: -10,
        BROTLI_DECODER_ERROR_FORMAT_TRANSFORM: -11,
        BROTLI_DECODER_ERROR_FORMAT_DICTIONARY: -12,
        BROTLI_DECODER_ERROR_FORMAT_WINDOW_BITS: -13,
        BROTLI_DECODER_ERROR_FORMAT_PADDING_1: -14,
        BROTLI_DECODER_ERROR_FORMAT_PADDING_2: -15,
        BROTLI_DECODER_ERROR_FORMAT_DISTANCE: -16,
        BROTLI_DECODER_ERROR_DICTIONARY_NOT_SET: -19,
        BROTLI_DECODER_ERROR_INVALID_ARGUMENTS: -20,
        BROTLI_DECODER_ERROR_ALLOC_CONTEXT_MODES: -21,
        BROTLI_DECODER_ERROR_ALLOC_TREE_GROUPS: -22,
        BROTLI_DECODER_ERROR_ALLOC_CONTEXT_MAP: -25,
        BROTLI_DECODER_ERROR_ALLOC_RING_BUFFER_1: -26,
        BROTLI_DECODER_ERROR_ALLOC_RING_BUFFER_2: -27,
        BROTLI_DECODER_ERROR_ALLOC_BLOCK_TYPE_TREES: -30,
        BROTLI_DECODER_ERROR_UNREACHABLE: -31
    },
    createBrotliCompress: <ref *17> ƒ value(length: 1) {},
    createBrotliDecompress: <ref *18> ƒ value(length: 1) {},
    createDeflate: <ref *19> ƒ value(length: 1) {},
    createDeflateRaw: <ref *20> ƒ value(length: 1) {},
    createGunzip: <ref *21> ƒ value(length: 1) {},
    createGzip: <ref *22> ƒ value(length: 1) {},
    createInflate: <ref *23> ƒ value(length: 1) {},
    createInflateRaw: <ref *24> ƒ value(length: 1) {},
    createUnzip: <ref *25> ƒ value(length: 1) {},
    default: {
        Deflate: [Circular: *4],
        Inflate: [Circular: *8],
        Gzip: [Circular: *7],
        Gunzip: [Circular: *6],
        DeflateRaw: [Circular: *5],
        InflateRaw: [Circular: *9],
        Unzip: [Circular: *10],
        BrotliCompress: [Circular: *2],
        BrotliDecompress: [Circular: *3],
        deflate: <ref *27> ƒ asyncBufferWrapper(length: 3) {},
        deflateSync: <ref *28> ƒ syncBufferWrapper(length: 2) {},
        gzip: <ref *29> ƒ asyncBufferWrapper(length: 3) {},
        gzipSync: <ref *30> ƒ syncBufferWrapper(length: 2) {},
        deflateRaw: <ref *31> ƒ asyncBufferWrapper(length: 3) {},
        deflateRawSync: <ref *32> ƒ syncBufferWrapper(length: 2) {},
        unzip: <ref *33> ƒ asyncBufferWrapper(length: 3) {},
        unzipSync: <ref *34> ƒ syncBufferWrapper(length: 2) {},
        inflate: <ref *35> ƒ asyncBufferWrapper(length: 3) {},
        inflateSync: <ref *36> ƒ syncBufferWrapper(length: 2) {},
        gunzip: <ref *37> ƒ asyncBufferWrapper(length: 3) {},
        gunzipSync: <ref *38> ƒ syncBufferWrapper(length: 2) {},
        inflateRaw: <ref *39> ƒ asyncBufferWrapper(length: 3) {},
        inflateRawSync: <ref *40> ƒ syncBufferWrapper(length: 2) {},
        brotliCompress: [Circular: *11],
        brotliCompressSync: [Circular: *12],
        brotliDecompress: [Circular: *13],
        brotliDecompressSync: [Circular: *14],
        createDeflate: [Circular: *19],
        createInflate: [Circular: *23],
        createDeflateRaw: [Circular: *20],
        createInflateRaw: [Circular: *24],
        createGzip: [Circular: *22],
        createGunzip: [Circular: *21],
        createUnzip: [Circular: *25],
        createBrotliCompress: [Circular: *17],
        createBrotliDecompress: [Circular: *18],
        constants: [Circular: *16],
        codes: [Circular: *15]
    },
    deflate: [Circular: *27],
    deflateRaw: [Circular: *31],
    deflateRawSync: [Circular: *32],
    deflateSync: [Circular: *28],
    gunzip: [Circular: *37],
    gunzipSync: [Circular: *38],
    gzip: [Circular: *29],
    gzipSync: [Circular: *30],
    inflate: [Circular: *35],
    inflateRaw: [Circular: *39],
    inflateRawSync: [Circular: *40],
    inflateSync: [Circular: *36],
    unzip: [Circular: *33],
    unzipSync: [Circular: *34]
}
```

</td><td valign="top">

```js
{
    Z_NO_FLUSH: 0,
    Z_PARTIAL_FLUSH: 1,
    Z_SYNC_FLUSH: 2,
    Z_FULL_FLUSH: 3,
    Z_FINISH: 4,
    Z_BLOCK: 5,
    Z_TREES: 6,
    Z_OK: 0,
    Z_STREAM_END: 1,
    Z_NEED_DICT: 2,
    Z_ERRNO: -1,
    Z_STREAM_ERROR: -2,
    Z_DATA_ERROR: -3,
    Z_BUF_ERROR: -5,
    Z_NO_COMPRESSION: 0,
    Z_BEST_SPEED: 1,
    Z_BEST_COMPRESSION: 9,
    Z_DEFAULT_COMPRESSION: -1,
    Z_FILTERED: 1,
    Z_HUFFMAN_ONLY: 2,
    Z_RLE: 3,
    Z_FIXED: 4,
    Z_DEFAULT_STRATEGY: 0,
    Z_BINARY: 0,
    Z_TEXT: 1,
    Z_UNKNOWN: 2,
    Z_DEFLATED: 8,
    Zlib: ƒ Zlib(length: 1) {},
    Z_MIN_WINDOWBITS: 8,
    Z_MAX_WINDOWBITS: 15,
    Z_DEFAULT_WINDOWBITS: 15,
    Z_MIN_CHUNK: 64,
    Z_MAX_CHUNK: Infinity,
    Z_DEFAULT_CHUNK: 16384,
    Z_MIN_MEMLEVEL: 1,
    Z_MAX_MEMLEVEL: 9,
    Z_DEFAULT_MEMLEVEL: 8,
    Z_MIN_LEVEL: -1,
    Z_MAX_LEVEL: 9,
    Z_DEFAULT_LEVEL: -1,
    codes: {
        0: "Z_OK",
        1: "Z_STREAM_END",
        2: "Z_NEED_DICT",
        Z_OK: 0,
        Z_STREAM_END: 1,
        Z_NEED_DICT: 2,
        Z_ERRNO: -1,
        Z_STREAM_ERROR: -2,
        Z_DATA_ERROR: -3,
        Z_MEM_ERROR: undefined,
        Z_BUF_ERROR: -5,
        Z_VERSION_ERROR: undefined,
        -1: "Z_ERRNO",
        -2: "Z_STREAM_ERROR",
        -3: "Z_DATA_ERROR",
        undefined: "Z_VERSION_ERROR",
        -5: "Z_BUF_ERROR"
    },
    constants: {
        Z_NO_FLUSH: 0,
        Z_PARTIAL_FLUSH: 1,
        Z_SYNC_FLUSH: 2,
        Z_FULL_FLUSH: 3,
        Z_FINISH: 4,
        Z_BLOCK: 5,
        Z_TREES: 6,
        Z_OK: 0,
        Z_STREAM_END: 1,
        Z_NEED_DICT: 2,
        Z_ERRNO: -1,
        Z_STREAM_ERROR: -2,
        Z_DATA_ERROR: -3,
        Z_BUF_ERROR: -5,
        Z_NO_COMPRESSION: 0,
        Z_BEST_SPEED: 1,
        Z_BEST_COMPRESSION: 9,
        Z_DEFAULT_COMPRESSION: -1,
        Z_FILTERED: 1,
        Z_HUFFMAN_ONLY: 2,
        Z_RLE: 3,
        Z_FIXED: 4,
        Z_DEFAULT_STRATEGY: 0,
        Z_BINARY: 0,
        Z_TEXT: 1,
        Z_UNKNOWN: 2,
        Z_DEFLATED: 8
    },
    Deflate: ƒ Deflate(length: 1) {
        super_: <ref *6> ƒ Zlib(length: 2) {
            super_: ƒ K(length: 1) {}
        }
    },
    Inflate: ƒ Inflate(length: 1) {
        super_: [Circular: *6]
    },
    Gzip: ƒ Gzip(length: 1) {
        super_: [Circular: *6]
    },
    Gunzip: ƒ Gunzip(length: 1) {
        super_: [Circular: *6]
    },
    DeflateRaw: ƒ DeflateRaw(length: 1) {
        super_: [Circular: *6]
    },
    InflateRaw: ƒ InflateRaw(length: 1) {
        super_: [Circular: *6]
    },
    Unzip: ƒ Unzip(length: 1) {
        super_: [Circular: *6]
    },
    createDeflate: ƒ (length: 1) {},
    createInflate: ƒ (length: 1) {},
    createDeflateRaw: ƒ (length: 1) {},
    createInflateRaw: ƒ (length: 1) {},
    createGzip: ƒ (length: 1) {},
    createGunzip: ƒ (length: 1) {},
    createUnzip: ƒ (length: 1) {},
    deflate: ƒ (length: 3) {},
    deflateSync: ƒ (length: 2) {},
    gzip: ƒ (length: 3) {},
    gzipSync: ƒ (length: 2) {},
    deflateRaw: ƒ (length: 3) {},
    deflateRawSync: ƒ (length: 2) {},
    unzip: ƒ (length: 3) {},
    unzipSync: ƒ (length: 2) {},
    inflate: ƒ (length: 3) {},
    inflateSync: ƒ (length: 2) {},
    gunzip: ƒ (length: 3) {},
    gunzipSync: ƒ (length: 2) {},
    inflateRaw: ƒ (length: 3) {},
    inflateRawSync: ƒ (length: 2) {},
    Symbol(CommonJS): 0
}
```

</td></tr></table>
<!-- comparison:end -->