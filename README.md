# [Bun](https://bun.sh) & [Node.js](https://nodejs.org) API comparison

#### Why?
Have you wondered how Bun's `import 'fs'` differs from Node's?

This repository provides a comparative overview of the [Bun](https://bun.sh) and [Node.js](https://nodejs.org) runtime API.

Scrolling down, you should be able to see what's available in Bun, what's not, and how they differ.

The goal of this comparison is to help you determine if Bun is ready for adoption.

#### Self-maintaining repo

The comparison is [automatically performed every week using GitHub Actions](/.github/workflows/compare.yml), with the latest _Bun Canary_ and _Node.js LTS_.

For more details, refer to the Actions tab.

#### Contribute to Bun!

Bun is a rapidly maturing project and offers excellent opportunities for contributions. If you would like to help improve any aspect of Bun, please visit the [Bun repository](https://github.com/oven-sh/bun).

_Last updated on <!-- lastUpdated:start -->Sep 2, 2024 with Bun 1.1.27 Node.js v20.17.0<!-- lastUpdated:end -->._

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
- [`inspector/promises`](#inspectorpromises)
- [`module`](#module)
- [`net`](#net)
- [`os`](#os)
- [`path`](#path)
- [`path/posix`](#pathposix)
- [`path/win32`](#pathwin32)
- [`perf_hooks`](#perf_hooks)
- [`process`](#process)

</td><td valign="top">

- [`punycode`](#punycode)
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
- [`wasi`](#wasi)
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
                keepAlive: true,
                scheduling: "lifo",
                timeout: 5000,
                noDelay: true,
                path: null
            },
            requests: [Object: null prototype] {},
            sockets: [Object: null prototype] {},
            freeSockets: [Object: null prototype] {},
            keepAliveMsecs: 1000,
            keepAlive: true,
            maxSockets: Infinity,
            maxFreeSockets: 256,
            scheduling: "lifo",
            maxTotalSockets: Infinity,
            totalSocketCount: 0,
            Symbol(shapeMode): false,
            Symbol(kCapture): false
        }
    },
    globalAgent: [Circular: *4]
}
```

</td><td valign="top">

```js
90 | 					}
91 | 					if ('set' in descriptor) {
92 | 						getSet.push('set');
93 | 					}
94 | 
95 | 					const propertyValue = value[key];
                                ^
TypeError: undefined is not an object
      at node:http:629:17
      at /tmp/fs-fixture-1725236100683-1/inspect.mjs:95:28
      at map (1:11)
      at inspect (/tmp/fs-fixture-1725236100683-1/inspect.mjs:80:43)
      at /tmp/fs-fixture-1725236100683-1/inspect.mjs:99:7
      at map (1:11)
      at inspect (/tmp/fs-fixture-1725236100683-1/inspect.mjs:80:43)
      at /tmp/fs-fixture-1725236100683-1/inspect.mjs:99:7
      at map (1:11)
      at inspect (/tmp/fs-fixture-1725236100683-1/inspect.mjs:80:43)

Bun v1.1.27-canary.61+f123814d8 (Linux x64 baseline)
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
90 | 					}
91 | 					if ('set' in descriptor) {
92 | 						getSet.push('set');
93 | 					}
94 | 
95 | 					const propertyValue = value[key];
                                ^
TypeError: undefined is not an object
      at node:http:629:17
      at /tmp/fs-fixture-1725236100683-1/inspect.mjs:95:28
      at map (1:11)
      at inspect (/tmp/fs-fixture-1725236100683-1/inspect.mjs:80:43)
      at /tmp/fs-fixture-1725236100683-1/inspect.mjs:99:7
      at map (1:11)
      at inspect (/tmp/fs-fixture-1725236100683-1/inspect.mjs:80:43)
      at /tmp/fs-fixture-1725236100683-1/inspect.mjs:99:7
      at map (1:11)
      at inspect (/tmp/fs-fixture-1725236100683-1/inspect.mjs:80:43)

Bun v1.1.27-canary.61+f123814d8 (Linux x64 baseline)
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
90 | 					}
91 | 					if ('set' in descriptor) {
92 | 						getSet.push('set');
93 | 					}
94 | 
95 | 					const propertyValue = value[key];
                                ^
TypeError: undefined is not an object
      at node:http:629:17
      at /tmp/fs-fixture-1725236100683-1/inspect.mjs:95:28
      at map (1:11)
      at inspect (/tmp/fs-fixture-1725236100683-1/inspect.mjs:80:43)
      at /tmp/fs-fixture-1725236100683-1/inspect.mjs:99:7
      at map (1:11)
      at inspect (/tmp/fs-fixture-1725236100683-1/inspect.mjs:80:43)
      at /tmp/fs-fixture-1725236100683-1/inspect.mjs:99:7
      at map (1:11)
      at inspect (/tmp/fs-fixture-1725236100683-1/inspect.mjs:80:43)

Bun v1.1.27-canary.61+f123814d8 (Linux x64 baseline)
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
90 | 					}
91 | 					if ('set' in descriptor) {
92 | 						getSet.push('set');
93 | 					}
94 | 
95 | 					const propertyValue = value[key];
                                ^
TypeError: undefined is not an object
      at node:http:629:17
      at /tmp/fs-fixture-1725236100683-1/inspect.mjs:95:28
      at map (1:11)
      at inspect (/tmp/fs-fixture-1725236100683-1/inspect.mjs:80:43)
      at /tmp/fs-fixture-1725236100683-1/inspect.mjs:99:7
      at map (1:11)
      at inspect (/tmp/fs-fixture-1725236100683-1/inspect.mjs:80:43)
      at /tmp/fs-fixture-1725236100683-1/inspect.mjs:99:7
      at map (1:11)
      at inspect (/tmp/fs-fixture-1725236100683-1/inspect.mjs:80:43)

Bun v1.1.27-canary.61+f123814d8 (Linux x64 baseline)
```

</td></tr></table>

## _http_outgoing

<table><tr><th>Node.js</th><th>Bun</th></tr><tr><td valign="top">

```js
[Object: null prototype] {
    OutgoingMessage: <ref *2> ƒ OutgoingMessage(length: 1) {},
    default: {
        kHighWaterMark: Symbol(kHighWaterMark),
        kUniqueHeaders: Symbol(kUniqueHeaders),
        parseUniqueHeadersOption: <ref *4> ƒ parseUniqueHeadersOption(length: 1) {},
        validateHeaderName: <ref *5> ƒ wrappedFn(length: 0) {
            withoutStackTrace: ƒ (length: 2) {}
        },
        validateHeaderValue: <ref *7> ƒ wrappedFn(length: 0) {
            withoutStackTrace: ƒ (length: 2) {}
        },
        OutgoingMessage: [Circular: *2]
    },
    kHighWaterMark: Symbol(kHighWaterMark),
    kUniqueHeaders: Symbol(kUniqueHeaders),
    parseUniqueHeadersOption: [Circular: *4],
    validateHeaderName: [Circular: *5],
    validateHeaderValue: [Circular: *7]
}
```

</td><td valign="top">

```js
90 | 					}
91 | 					if ('set' in descriptor) {
92 | 						getSet.push('set');
93 | 					}
94 | 
95 | 					const propertyValue = value[key];
                                ^
TypeError: undefined is not an object
      at node:http:629:17
      at /tmp/fs-fixture-1725236100683-1/inspect.mjs:95:28
      at map (1:11)
      at inspect (/tmp/fs-fixture-1725236100683-1/inspect.mjs:80:43)
      at /tmp/fs-fixture-1725236100683-1/inspect.mjs:99:7
      at map (1:11)
      at inspect (/tmp/fs-fixture-1725236100683-1/inspect.mjs:80:43)
      at /tmp/fs-fixture-1725236100683-1/inspect.mjs:99:7
      at map (1:11)
      at inspect (/tmp/fs-fixture-1725236100683-1/inspect.mjs:80:43)

Bun v1.1.27-canary.61+f123814d8 (Linux x64 baseline)
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
    ServerResponse: <ref *4> ƒ ServerResponse(length: 2) {},
    _connectionListener: <ref *5> ƒ connectionListener(length: 1) {},
    default: {
        STATUS_CODES: [Circular: *2],
        Server: [Circular: *3],
        ServerResponse: [Circular: *4],
        setupConnectionsTracking: <ref *7> ƒ setupConnectionsTracking(length: 0) {},
        storeHTTPOptions: <ref *8> ƒ storeHTTPOptions(length: 1) {},
        _connectionListener: [Circular: *5],
        kServerResponse: Symbol(ServerResponse),
        httpServerPreClose: <ref *9> ƒ httpServerPreClose(length: 1) {},
        kConnectionsCheckingInterval: Symbol(http.server.connectionsCheckingInterval)
    },
    httpServerPreClose: [Circular: *9],
    kConnectionsCheckingInterval: Symbol(http.server.connectionsCheckingInterval),
    kServerResponse: Symbol(ServerResponse),
    setupConnectionsTracking: [Circular: *7],
    storeHTTPOptions: [Circular: *8]
}
```

</td><td valign="top">

```js
90 | 					}
91 | 					if ('set' in descriptor) {
92 | 						getSet.push('set');
93 | 					}
94 | 
95 | 					const propertyValue = value[key];
                                ^
TypeError: undefined is not an object
      at node:http:629:17
      at /tmp/fs-fixture-1725236100683-1/inspect.mjs:95:28
      at map (1:11)
      at inspect (/tmp/fs-fixture-1725236100683-1/inspect.mjs:80:43)
      at /tmp/fs-fixture-1725236100683-1/inspect.mjs:99:7
      at map (1:11)
      at inspect (/tmp/fs-fixture-1725236100683-1/inspect.mjs:80:43)
      at /tmp/fs-fixture-1725236100683-1/inspect.mjs:99:7
      at map (1:11)
      at inspect (/tmp/fs-fixture-1725236100683-1/inspect.mjs:80:43)

Bun v1.1.27-canary.61+f123814d8 (Linux x64 baseline)
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
{
    Duplex: <ref *2> ƒ Duplex(length: 1) {
        prototype: Duplex {
            constructor: [Circular: *2],
            write: <ref *4> ƒ (length: 3) {},
            cork: <ref *5> ƒ (length: 0) {},
            uncork: <ref *6> ƒ (length: 0) {},
            setDefaultEncoding: <ref *7> ƒ setDefaultEncoding(length: 1) {},
            _write: <ref *8> ƒ (length: 3) {},
            _writev: null,
            end: <ref *9> ƒ (length: 3) {},
            _events: undefined,
            _eventsCount: 0,
            _maxListeners: undefined
        },
        fromWeb: ƒ (length: 2) {},
        toWeb: ƒ (length: 1) {},
        from: ƒ (length: 1) {}
    },
    EventEmitter: <ref *13> ƒ EventEmitter2(length: 1) {
        prototype: EventEmitter2 {
            _events: undefined,
            _eventsCount: 0,
            _maxListeners: undefined,
            setMaxListeners: ƒ setMaxListeners2(length: 1) {},
            constructor: [Circular: *13],
            getMaxListeners: ƒ getMaxListeners2(length: 0) {},
            emit: ƒ emit(length: 1) {},
            addListener: <ref *18> ƒ addListener(length: 2) {},
            on: [Circular: *18],
            prependListener: ƒ prependListener(length: 2) {},
            once: ƒ once2(length: 2) {},
            prependOnceListener: ƒ prependOnceListener(length: 2) {},
            removeListener: <ref *22> ƒ removeListener(length: 2) {},
            off: [Circular: *22],
            removeAllListeners: ƒ removeAllListeners(length: 1) {},
            listeners: ƒ listeners(length: 1) {},
            rawListeners: ƒ rawListeners(length: 1) {},
            listenerCount: ƒ listenerCount2(length: 1) {},
            eventNames: ƒ eventNames(length: 0) {},
            Symbol(kCapture): false
        },
        [get/set] captureRejections: false,
        [get/set] defaultMaxListeners: 10,
        once: <ref *28> ƒ once(length: 3) {},
        on: <ref *29> ƒ on(length: 2) {},
        getEventListeners: <ref *30> ƒ getEventListeners(length: 2) {},
        getMaxListeners: <ref *31> ƒ getMaxListeners(length: 1) {},
        setMaxListeners: <ref *32> ƒ setMaxListeners(length: 0) {},
        EventEmitter: [Circular: *13],
        usingDomains: false,
        captureRejectionSymbol: Symbol(nodejs.rejection),
        EventEmitterAsyncResource: <ref *33> ƒ EventEmitterAsyncResource(length: 1) {},
        errorMonitor: Symbol(events.errorMonitor),
        addAbortListener: <ref *34> ƒ addAbortListener(length: 2) {},
        init: [Circular: *13],
        listenerCount: <ref *35> ƒ listenerCount(length: 2) {}
    },
    EventEmitterAsyncResource: [Circular: *33],
    NativeWritable: <ref *36> ƒ NativeWritable(length: 1) {
        prototype: Writable {
            end: ƒ end(length: 4) {},
            _destroy: ƒ (length: 2) {},
            ref: ƒ ref(length: 0) {},
            unref: ƒ unref(length: 0) {}
        }
    },
    PassThrough: <ref *42> ƒ PassThrough(length: 1) {
        prototype: PassThrough {
            constructor: [Circular: *42],
            _transform: ƒ (length: 3) {}
        }
    },
    Readable: <ref *45> ƒ Readable(length: 1) {
        prototype: Readable {
            constructor: [Circular: *45],
            on: <ref *47> ƒ (length: 2) {},
            destroy: ƒ destroy2(length: 2) {},
            _undestroy: <ref *49> ƒ undestroy(length: 0) {},
            _destroy: ƒ (length: 2) {},
            push: ƒ (length: 2) {},
            unshift: ƒ (length: 2) {},
            isPaused: ƒ (length: 0) {},
            setEncoding: ƒ (length: 1) {},
            read: ƒ (length: 1) {},
            _read: ƒ (length: 1) {},
            pipe: ƒ (length: 2) {},
            unpipe: ƒ (length: 1) {},
            addListener: [Circular: *47],
            removeListener: <ref *59> ƒ (length: 2) {},
            off: [Circular: *59],
            removeAllListeners: ƒ (length: 1) {},
            resume: ƒ (length: 0) {},
            pause: ƒ (length: 0) {},
            wrap: ƒ (length: 1) {},
            iterator: ƒ (length: 1) {},
            Symbol(nodejs.rejection): ƒ (length: 1) {},
            Symbol(Symbol.asyncIterator): ƒ (length: 0) {}
        },
        ReadableState: ƒ ReadableState(length: 3) {
            prototype: {}
        },
        _fromList: ƒ fromList(length: 2) {},
        from: ƒ (length: 2) {},
        fromWeb: ƒ (length: 2) {},
        toWeb: ƒ (length: 2) {},
        wrap: ƒ (length: 2) {}
    },
    Stream: <ref *74> ƒ Stream(length: 1) {
        prototype: <ref *75> Stream {
            constructor: [Circular: *74],
            pipe: ƒ (length: 2) {}
        },
        isDisturbed: <ref *77> ƒ isDisturbed(length: 1) {},
        isErrored: <ref *78> ƒ isErrored(length: 1) {},
        isWritable: <ref *79> ƒ isWritable(length: 1) {},
        isReadable: <ref *80> ƒ isReadable(length: 1) {},
        Readable: [Circular: *45],
        Writable: <ref *81> ƒ Writable(length: 0) {
            prototype: Writable {
                constructor: [Circular: *81],
                pipe: ƒ (length: 0) {},
                write: [Circular: *4],
                cork: [Circular: *5],
                uncork: [Circular: *6],
                setDefaultEncoding: [Circular: *7],
                _write: [Circular: *8],
                _writev: null,
                end: [Circular: *9],
                destroy: ƒ (length: 2) {},
                _undestroy: [Circular: *49],
                _destroy: ƒ (length: 2) {},
                Symbol(nodejs.rejection): ƒ (length: 1) {}
            },
            fromWeb: ƒ (length: 2) {},
            toWeb: ƒ (length: 1) {}
        },
        Duplex: [Circular: *2],
        Transform: <ref *89> ƒ Transform(length: 1) {
            prototype: Transform {
                constructor: [Circular: *89],
                _final: ƒ final(length: 1) {},
                _transform: ƒ (length: 3) {},
                _write: ƒ (length: 3) {},
                _read: ƒ (length: 0) {}
            }
        },
        PassThrough: [Circular: *42],
        pipeline: <ref *95> ƒ pipeline(length: 0) {
            [get/set] Symbol(nodejs.util.promisify.custom): <ref *96> ƒ pipeline(length: 0) {}
        },
        addAbortSignal: <ref *97> ƒ addAbortSignal(length: 2) {},
        finished: <ref *98> ƒ eos(length: 3) {
            finished: <ref *99> ƒ finished(length: 2) {},
            [get/set] Symbol(nodejs.util.promisify.custom): [Circular: *99]
        },
        destroy: <ref *100> ƒ destroyer(length: 2) {},
        compose: <ref *101> ƒ compose(length: 0) {},
        [get/set] promises: <ref *102> {
            finished: [Circular: *99],
            pipeline: [Circular: *96]
        },
        Stream: [Circular: *74],
        _isUint8Array: <ref *103> ƒ isUint8Array(length: 1) {},
        _uint8ArrayToBuffer: <ref *104> ƒ _uint8ArrayToBuffer(length: 1) {},
        setDefaultHighWaterMark: <ref *105> ƒ setDefaultHighWaterMark(length: 2) {},
        getDefaultHighWaterMark: <ref *106> ƒ getDefaultHighWaterMark(length: 1) {},
        _getNativeReadableStreamPrototype: <ref *107> ƒ getNativeReadableStreamPrototype(length: 2) {},
        NativeWritable: [Circular: *36],
        eos: [Circular: *98],
        EventEmitter: [Circular: *13],
        Symbol(::bunternal::): {
            _ReadableFromWeb: ƒ newStreamReadableFromReadableStream(length: 1) {},
            _ReadableFromWebForUndici: ƒ ReadableFromWeb(length: 2) {},
            kEnsureConstructed: Symbol(kEnsureConstructed)
        }
    },
    Transform: [Circular: *89],
    Writable: [Circular: *81],
    _getNativeReadableStreamPrototype: [Circular: *107],
    _isUint8Array: [Circular: *103],
    _uint8ArrayToBuffer: [Circular: *104],
    addAbortListener: [Circular: *34],
    addAbortSignal: [Circular: *97],
    captureRejectionSymbol: Symbol(nodejs.rejection),
    captureRejections: false,
    compose: [Circular: *101],
    default: [Circular: *74],
    defaultMaxListeners: 10,
    destroy: [Circular: *100],
    eos: [Circular: *98],
    errorMonitor: Symbol(events.errorMonitor),
    finished: [Circular: *98],
    getDefaultHighWaterMark: [Circular: *106],
    getEventListeners: [Circular: *30],
    getMaxListeners: [Circular: *31],
    init: [Circular: *13],
    isDisturbed: [Circular: *77],
    isErrored: [Circular: *78],
    isReadable: [Circular: *80],
    isWritable: [Circular: *79],
    listenerCount: [Circular: *35],
    on: [Circular: *29],
    once: [Circular: *28],
    pipeline: [Circular: *95],
    promises: [Circular: *102],
    prototype: [Circular: *75],
    setDefaultHighWaterMark: [Circular: *105],
    setMaxListeners: [Circular: *32],
    usingDomains: false
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
{
    Duplex: <ref *2> ƒ Duplex(length: 1) {
        prototype: Duplex {
            constructor: [Circular: *2],
            write: <ref *4> ƒ (length: 3) {},
            cork: <ref *5> ƒ (length: 0) {},
            uncork: <ref *6> ƒ (length: 0) {},
            setDefaultEncoding: <ref *7> ƒ setDefaultEncoding(length: 1) {},
            _write: <ref *8> ƒ (length: 3) {},
            _writev: null,
            end: <ref *9> ƒ (length: 3) {},
            _events: undefined,
            _eventsCount: 0,
            _maxListeners: undefined
        },
        fromWeb: ƒ (length: 2) {},
        toWeb: ƒ (length: 1) {},
        from: ƒ (length: 1) {}
    },
    EventEmitter: <ref *13> ƒ EventEmitter2(length: 1) {
        prototype: EventEmitter2 {
            _events: undefined,
            _eventsCount: 0,
            _maxListeners: undefined,
            setMaxListeners: ƒ setMaxListeners2(length: 1) {},
            constructor: [Circular: *13],
            getMaxListeners: ƒ getMaxListeners2(length: 0) {},
            emit: ƒ emit(length: 1) {},
            addListener: <ref *18> ƒ addListener(length: 2) {},
            on: [Circular: *18],
            prependListener: ƒ prependListener(length: 2) {},
            once: ƒ once2(length: 2) {},
            prependOnceListener: ƒ prependOnceListener(length: 2) {},
            removeListener: <ref *22> ƒ removeListener(length: 2) {},
            off: [Circular: *22],
            removeAllListeners: ƒ removeAllListeners(length: 1) {},
            listeners: ƒ listeners(length: 1) {},
            rawListeners: ƒ rawListeners(length: 1) {},
            listenerCount: ƒ listenerCount2(length: 1) {},
            eventNames: ƒ eventNames(length: 0) {},
            Symbol(kCapture): false
        },
        [get/set] captureRejections: false,
        [get/set] defaultMaxListeners: 10,
        once: <ref *28> ƒ once(length: 3) {},
        on: <ref *29> ƒ on(length: 2) {},
        getEventListeners: <ref *30> ƒ getEventListeners(length: 2) {},
        getMaxListeners: <ref *31> ƒ getMaxListeners(length: 1) {},
        setMaxListeners: <ref *32> ƒ setMaxListeners(length: 0) {},
        EventEmitter: [Circular: *13],
        usingDomains: false,
        captureRejectionSymbol: Symbol(nodejs.rejection),
        EventEmitterAsyncResource: <ref *33> ƒ EventEmitterAsyncResource(length: 1) {},
        errorMonitor: Symbol(events.errorMonitor),
        addAbortListener: <ref *34> ƒ addAbortListener(length: 2) {},
        init: [Circular: *13],
        listenerCount: <ref *35> ƒ listenerCount(length: 2) {}
    },
    EventEmitterAsyncResource: [Circular: *33],
    NativeWritable: <ref *36> ƒ NativeWritable(length: 1) {
        prototype: Writable {
            end: ƒ end(length: 4) {},
            _destroy: ƒ (length: 2) {},
            ref: ƒ ref(length: 0) {},
            unref: ƒ unref(length: 0) {}
        }
    },
    PassThrough: <ref *42> ƒ PassThrough(length: 1) {
        prototype: PassThrough {
            constructor: [Circular: *42],
            _transform: ƒ (length: 3) {}
        }
    },
    Readable: <ref *45> ƒ Readable(length: 1) {
        prototype: Readable {
            constructor: [Circular: *45],
            on: <ref *47> ƒ (length: 2) {},
            destroy: ƒ destroy2(length: 2) {},
            _undestroy: <ref *49> ƒ undestroy(length: 0) {},
            _destroy: ƒ (length: 2) {},
            push: ƒ (length: 2) {},
            unshift: ƒ (length: 2) {},
            isPaused: ƒ (length: 0) {},
            setEncoding: ƒ (length: 1) {},
            read: ƒ (length: 1) {},
            _read: ƒ (length: 1) {},
            pipe: ƒ (length: 2) {},
            unpipe: ƒ (length: 1) {},
            addListener: [Circular: *47],
            removeListener: <ref *59> ƒ (length: 2) {},
            off: [Circular: *59],
            removeAllListeners: ƒ (length: 1) {},
            resume: ƒ (length: 0) {},
            pause: ƒ (length: 0) {},
            wrap: ƒ (length: 1) {},
            iterator: ƒ (length: 1) {},
            Symbol(nodejs.rejection): ƒ (length: 1) {},
            Symbol(Symbol.asyncIterator): ƒ (length: 0) {}
        },
        ReadableState: ƒ ReadableState(length: 3) {
            prototype: {}
        },
        _fromList: ƒ fromList(length: 2) {},
        from: ƒ (length: 2) {},
        fromWeb: ƒ (length: 2) {},
        toWeb: ƒ (length: 2) {},
        wrap: ƒ (length: 2) {}
    },
    Stream: <ref *74> ƒ Stream(length: 1) {
        prototype: <ref *75> Stream {
            constructor: [Circular: *74],
            pipe: ƒ (length: 2) {}
        },
        isDisturbed: <ref *77> ƒ isDisturbed(length: 1) {},
        isErrored: <ref *78> ƒ isErrored(length: 1) {},
        isWritable: <ref *79> ƒ isWritable(length: 1) {},
        isReadable: <ref *80> ƒ isReadable(length: 1) {},
        Readable: [Circular: *45],
        Writable: <ref *81> ƒ Writable(length: 0) {
            prototype: Writable {
                constructor: [Circular: *81],
                pipe: ƒ (length: 0) {},
                write: [Circular: *4],
                cork: [Circular: *5],
                uncork: [Circular: *6],
                setDefaultEncoding: [Circular: *7],
                _write: [Circular: *8],
                _writev: null,
                end: [Circular: *9],
                destroy: ƒ (length: 2) {},
                _undestroy: [Circular: *49],
                _destroy: ƒ (length: 2) {},
                Symbol(nodejs.rejection): ƒ (length: 1) {}
            },
            fromWeb: ƒ (length: 2) {},
            toWeb: ƒ (length: 1) {}
        },
        Duplex: [Circular: *2],
        Transform: <ref *89> ƒ Transform(length: 1) {
            prototype: Transform {
                constructor: [Circular: *89],
                _final: ƒ final(length: 1) {},
                _transform: ƒ (length: 3) {},
                _write: ƒ (length: 3) {},
                _read: ƒ (length: 0) {}
            }
        },
        PassThrough: [Circular: *42],
        pipeline: <ref *95> ƒ pipeline(length: 0) {
            [get/set] Symbol(nodejs.util.promisify.custom): <ref *96> ƒ pipeline(length: 0) {}
        },
        addAbortSignal: <ref *97> ƒ addAbortSignal(length: 2) {},
        finished: <ref *98> ƒ eos(length: 3) {
            finished: <ref *99> ƒ finished(length: 2) {},
            [get/set] Symbol(nodejs.util.promisify.custom): [Circular: *99]
        },
        destroy: <ref *100> ƒ destroyer(length: 2) {},
        compose: <ref *101> ƒ compose(length: 0) {},
        [get/set] promises: <ref *102> {
            finished: [Circular: *99],
            pipeline: [Circular: *96]
        },
        Stream: [Circular: *74],
        _isUint8Array: <ref *103> ƒ isUint8Array(length: 1) {},
        _uint8ArrayToBuffer: <ref *104> ƒ _uint8ArrayToBuffer(length: 1) {},
        setDefaultHighWaterMark: <ref *105> ƒ setDefaultHighWaterMark(length: 2) {},
        getDefaultHighWaterMark: <ref *106> ƒ getDefaultHighWaterMark(length: 1) {},
        _getNativeReadableStreamPrototype: <ref *107> ƒ getNativeReadableStreamPrototype(length: 2) {},
        NativeWritable: [Circular: *36],
        eos: [Circular: *98],
        EventEmitter: [Circular: *13],
        Symbol(::bunternal::): {
            _ReadableFromWeb: ƒ newStreamReadableFromReadableStream(length: 1) {},
            _ReadableFromWebForUndici: ƒ ReadableFromWeb(length: 2) {},
            kEnsureConstructed: Symbol(kEnsureConstructed)
        }
    },
    Transform: [Circular: *89],
    Writable: [Circular: *81],
    _getNativeReadableStreamPrototype: [Circular: *107],
    _isUint8Array: [Circular: *103],
    _uint8ArrayToBuffer: [Circular: *104],
    addAbortListener: [Circular: *34],
    addAbortSignal: [Circular: *97],
    captureRejectionSymbol: Symbol(nodejs.rejection),
    captureRejections: false,
    compose: [Circular: *101],
    default: [Circular: *74],
    defaultMaxListeners: 10,
    destroy: [Circular: *100],
    eos: [Circular: *98],
    errorMonitor: Symbol(events.errorMonitor),
    finished: [Circular: *98],
    getDefaultHighWaterMark: [Circular: *106],
    getEventListeners: [Circular: *30],
    getMaxListeners: [Circular: *31],
    init: [Circular: *13],
    isDisturbed: [Circular: *77],
    isErrored: [Circular: *78],
    isReadable: [Circular: *80],
    isWritable: [Circular: *79],
    listenerCount: [Circular: *35],
    on: [Circular: *29],
    once: [Circular: *28],
    pipeline: [Circular: *95],
    promises: [Circular: *102],
    prototype: [Circular: *75],
    setDefaultHighWaterMark: [Circular: *105],
    setMaxListeners: [Circular: *32],
    usingDomains: false
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
{
    Duplex: <ref *2> ƒ Duplex(length: 1) {
        prototype: Duplex {
            constructor: [Circular: *2],
            write: <ref *4> ƒ (length: 3) {},
            cork: <ref *5> ƒ (length: 0) {},
            uncork: <ref *6> ƒ (length: 0) {},
            setDefaultEncoding: <ref *7> ƒ setDefaultEncoding(length: 1) {},
            _write: <ref *8> ƒ (length: 3) {},
            _writev: null,
            end: <ref *9> ƒ (length: 3) {},
            _events: undefined,
            _eventsCount: 0,
            _maxListeners: undefined
        },
        fromWeb: ƒ (length: 2) {},
        toWeb: ƒ (length: 1) {},
        from: ƒ (length: 1) {}
    },
    EventEmitter: <ref *13> ƒ EventEmitter2(length: 1) {
        prototype: EventEmitter2 {
            _events: undefined,
            _eventsCount: 0,
            _maxListeners: undefined,
            setMaxListeners: ƒ setMaxListeners2(length: 1) {},
            constructor: [Circular: *13],
            getMaxListeners: ƒ getMaxListeners2(length: 0) {},
            emit: ƒ emit(length: 1) {},
            addListener: <ref *18> ƒ addListener(length: 2) {},
            on: [Circular: *18],
            prependListener: ƒ prependListener(length: 2) {},
            once: ƒ once2(length: 2) {},
            prependOnceListener: ƒ prependOnceListener(length: 2) {},
            removeListener: <ref *22> ƒ removeListener(length: 2) {},
            off: [Circular: *22],
            removeAllListeners: ƒ removeAllListeners(length: 1) {},
            listeners: ƒ listeners(length: 1) {},
            rawListeners: ƒ rawListeners(length: 1) {},
            listenerCount: ƒ listenerCount2(length: 1) {},
            eventNames: ƒ eventNames(length: 0) {},
            Symbol(kCapture): false
        },
        [get/set] captureRejections: false,
        [get/set] defaultMaxListeners: 10,
        once: <ref *28> ƒ once(length: 3) {},
        on: <ref *29> ƒ on(length: 2) {},
        getEventListeners: <ref *30> ƒ getEventListeners(length: 2) {},
        getMaxListeners: <ref *31> ƒ getMaxListeners(length: 1) {},
        setMaxListeners: <ref *32> ƒ setMaxListeners(length: 0) {},
        EventEmitter: [Circular: *13],
        usingDomains: false,
        captureRejectionSymbol: Symbol(nodejs.rejection),
        EventEmitterAsyncResource: <ref *33> ƒ EventEmitterAsyncResource(length: 1) {},
        errorMonitor: Symbol(events.errorMonitor),
        addAbortListener: <ref *34> ƒ addAbortListener(length: 2) {},
        init: [Circular: *13],
        listenerCount: <ref *35> ƒ listenerCount(length: 2) {}
    },
    EventEmitterAsyncResource: [Circular: *33],
    NativeWritable: <ref *36> ƒ NativeWritable(length: 1) {
        prototype: Writable {
            end: ƒ end(length: 4) {},
            _destroy: ƒ (length: 2) {},
            ref: ƒ ref(length: 0) {},
            unref: ƒ unref(length: 0) {}
        }
    },
    PassThrough: <ref *42> ƒ PassThrough(length: 1) {
        prototype: PassThrough {
            constructor: [Circular: *42],
            _transform: ƒ (length: 3) {}
        }
    },
    Readable: <ref *45> ƒ Readable(length: 1) {
        prototype: Readable {
            constructor: [Circular: *45],
            on: <ref *47> ƒ (length: 2) {},
            destroy: ƒ destroy2(length: 2) {},
            _undestroy: <ref *49> ƒ undestroy(length: 0) {},
            _destroy: ƒ (length: 2) {},
            push: ƒ (length: 2) {},
            unshift: ƒ (length: 2) {},
            isPaused: ƒ (length: 0) {},
            setEncoding: ƒ (length: 1) {},
            read: ƒ (length: 1) {},
            _read: ƒ (length: 1) {},
            pipe: ƒ (length: 2) {},
            unpipe: ƒ (length: 1) {},
            addListener: [Circular: *47],
            removeListener: <ref *59> ƒ (length: 2) {},
            off: [Circular: *59],
            removeAllListeners: ƒ (length: 1) {},
            resume: ƒ (length: 0) {},
            pause: ƒ (length: 0) {},
            wrap: ƒ (length: 1) {},
            iterator: ƒ (length: 1) {},
            Symbol(nodejs.rejection): ƒ (length: 1) {},
            Symbol(Symbol.asyncIterator): ƒ (length: 0) {}
        },
        ReadableState: ƒ ReadableState(length: 3) {
            prototype: {}
        },
        _fromList: ƒ fromList(length: 2) {},
        from: ƒ (length: 2) {},
        fromWeb: ƒ (length: 2) {},
        toWeb: ƒ (length: 2) {},
        wrap: ƒ (length: 2) {}
    },
    Stream: <ref *74> ƒ Stream(length: 1) {
        prototype: <ref *75> Stream {
            constructor: [Circular: *74],
            pipe: ƒ (length: 2) {}
        },
        isDisturbed: <ref *77> ƒ isDisturbed(length: 1) {},
        isErrored: <ref *78> ƒ isErrored(length: 1) {},
        isWritable: <ref *79> ƒ isWritable(length: 1) {},
        isReadable: <ref *80> ƒ isReadable(length: 1) {},
        Readable: [Circular: *45],
        Writable: <ref *81> ƒ Writable(length: 0) {
            prototype: Writable {
                constructor: [Circular: *81],
                pipe: ƒ (length: 0) {},
                write: [Circular: *4],
                cork: [Circular: *5],
                uncork: [Circular: *6],
                setDefaultEncoding: [Circular: *7],
                _write: [Circular: *8],
                _writev: null,
                end: [Circular: *9],
                destroy: ƒ (length: 2) {},
                _undestroy: [Circular: *49],
                _destroy: ƒ (length: 2) {},
                Symbol(nodejs.rejection): ƒ (length: 1) {}
            },
            fromWeb: ƒ (length: 2) {},
            toWeb: ƒ (length: 1) {}
        },
        Duplex: [Circular: *2],
        Transform: <ref *89> ƒ Transform(length: 1) {
            prototype: Transform {
                constructor: [Circular: *89],
                _final: ƒ final(length: 1) {},
                _transform: ƒ (length: 3) {},
                _write: ƒ (length: 3) {},
                _read: ƒ (length: 0) {}
            }
        },
        PassThrough: [Circular: *42],
        pipeline: <ref *95> ƒ pipeline(length: 0) {
            [get/set] Symbol(nodejs.util.promisify.custom): <ref *96> ƒ pipeline(length: 0) {}
        },
        addAbortSignal: <ref *97> ƒ addAbortSignal(length: 2) {},
        finished: <ref *98> ƒ eos(length: 3) {
            finished: <ref *99> ƒ finished(length: 2) {},
            [get/set] Symbol(nodejs.util.promisify.custom): [Circular: *99]
        },
        destroy: <ref *100> ƒ destroyer(length: 2) {},
        compose: <ref *101> ƒ compose(length: 0) {},
        [get/set] promises: <ref *102> {
            finished: [Circular: *99],
            pipeline: [Circular: *96]
        },
        Stream: [Circular: *74],
        _isUint8Array: <ref *103> ƒ isUint8Array(length: 1) {},
        _uint8ArrayToBuffer: <ref *104> ƒ _uint8ArrayToBuffer(length: 1) {},
        setDefaultHighWaterMark: <ref *105> ƒ setDefaultHighWaterMark(length: 2) {},
        getDefaultHighWaterMark: <ref *106> ƒ getDefaultHighWaterMark(length: 1) {},
        _getNativeReadableStreamPrototype: <ref *107> ƒ getNativeReadableStreamPrototype(length: 2) {},
        NativeWritable: [Circular: *36],
        eos: [Circular: *98],
        EventEmitter: [Circular: *13],
        Symbol(::bunternal::): {
            _ReadableFromWeb: ƒ newStreamReadableFromReadableStream(length: 1) {},
            _ReadableFromWebForUndici: ƒ ReadableFromWeb(length: 2) {},
            kEnsureConstructed: Symbol(kEnsureConstructed)
        }
    },
    Transform: [Circular: *89],
    Writable: [Circular: *81],
    _getNativeReadableStreamPrototype: [Circular: *107],
    _isUint8Array: [Circular: *103],
    _uint8ArrayToBuffer: [Circular: *104],
    addAbortListener: [Circular: *34],
    addAbortSignal: [Circular: *97],
    captureRejectionSymbol: Symbol(nodejs.rejection),
    captureRejections: false,
    compose: [Circular: *101],
    default: [Circular: *74],
    defaultMaxListeners: 10,
    destroy: [Circular: *100],
    eos: [Circular: *98],
    errorMonitor: Symbol(events.errorMonitor),
    finished: [Circular: *98],
    getDefaultHighWaterMark: [Circular: *106],
    getEventListeners: [Circular: *30],
    getMaxListeners: [Circular: *31],
    init: [Circular: *13],
    isDisturbed: [Circular: *77],
    isErrored: [Circular: *78],
    isReadable: [Circular: *80],
    isWritable: [Circular: *79],
    listenerCount: [Circular: *35],
    on: [Circular: *29],
    once: [Circular: *28],
    pipeline: [Circular: *95],
    promises: [Circular: *102],
    prototype: [Circular: *75],
    setDefaultHighWaterMark: [Circular: *105],
    setMaxListeners: [Circular: *32],
    usingDomains: false
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
{
    Duplex: <ref *2> ƒ Duplex(length: 1) {
        prototype: Duplex {
            constructor: [Circular: *2],
            write: <ref *4> ƒ (length: 3) {},
            cork: <ref *5> ƒ (length: 0) {},
            uncork: <ref *6> ƒ (length: 0) {},
            setDefaultEncoding: <ref *7> ƒ setDefaultEncoding(length: 1) {},
            _write: <ref *8> ƒ (length: 3) {},
            _writev: null,
            end: <ref *9> ƒ (length: 3) {},
            _events: undefined,
            _eventsCount: 0,
            _maxListeners: undefined
        },
        fromWeb: ƒ (length: 2) {},
        toWeb: ƒ (length: 1) {},
        from: ƒ (length: 1) {}
    },
    EventEmitter: <ref *13> ƒ EventEmitter2(length: 1) {
        prototype: EventEmitter2 {
            _events: undefined,
            _eventsCount: 0,
            _maxListeners: undefined,
            setMaxListeners: ƒ setMaxListeners2(length: 1) {},
            constructor: [Circular: *13],
            getMaxListeners: ƒ getMaxListeners2(length: 0) {},
            emit: ƒ emit(length: 1) {},
            addListener: <ref *18> ƒ addListener(length: 2) {},
            on: [Circular: *18],
            prependListener: ƒ prependListener(length: 2) {},
            once: ƒ once2(length: 2) {},
            prependOnceListener: ƒ prependOnceListener(length: 2) {},
            removeListener: <ref *22> ƒ removeListener(length: 2) {},
            off: [Circular: *22],
            removeAllListeners: ƒ removeAllListeners(length: 1) {},
            listeners: ƒ listeners(length: 1) {},
            rawListeners: ƒ rawListeners(length: 1) {},
            listenerCount: ƒ listenerCount2(length: 1) {},
            eventNames: ƒ eventNames(length: 0) {},
            Symbol(kCapture): false
        },
        [get/set] captureRejections: false,
        [get/set] defaultMaxListeners: 10,
        once: <ref *28> ƒ once(length: 3) {},
        on: <ref *29> ƒ on(length: 2) {},
        getEventListeners: <ref *30> ƒ getEventListeners(length: 2) {},
        getMaxListeners: <ref *31> ƒ getMaxListeners(length: 1) {},
        setMaxListeners: <ref *32> ƒ setMaxListeners(length: 0) {},
        EventEmitter: [Circular: *13],
        usingDomains: false,
        captureRejectionSymbol: Symbol(nodejs.rejection),
        EventEmitterAsyncResource: <ref *33> ƒ EventEmitterAsyncResource(length: 1) {},
        errorMonitor: Symbol(events.errorMonitor),
        addAbortListener: <ref *34> ƒ addAbortListener(length: 2) {},
        init: [Circular: *13],
        listenerCount: <ref *35> ƒ listenerCount(length: 2) {}
    },
    EventEmitterAsyncResource: [Circular: *33],
    NativeWritable: <ref *36> ƒ NativeWritable(length: 1) {
        prototype: Writable {
            end: ƒ end(length: 4) {},
            _destroy: ƒ (length: 2) {},
            ref: ƒ ref(length: 0) {},
            unref: ƒ unref(length: 0) {}
        }
    },
    PassThrough: <ref *42> ƒ PassThrough(length: 1) {
        prototype: PassThrough {
            constructor: [Circular: *42],
            _transform: ƒ (length: 3) {}
        }
    },
    Readable: <ref *45> ƒ Readable(length: 1) {
        prototype: Readable {
            constructor: [Circular: *45],
            on: <ref *47> ƒ (length: 2) {},
            destroy: ƒ destroy2(length: 2) {},
            _undestroy: <ref *49> ƒ undestroy(length: 0) {},
            _destroy: ƒ (length: 2) {},
            push: ƒ (length: 2) {},
            unshift: ƒ (length: 2) {},
            isPaused: ƒ (length: 0) {},
            setEncoding: ƒ (length: 1) {},
            read: ƒ (length: 1) {},
            _read: ƒ (length: 1) {},
            pipe: ƒ (length: 2) {},
            unpipe: ƒ (length: 1) {},
            addListener: [Circular: *47],
            removeListener: <ref *59> ƒ (length: 2) {},
            off: [Circular: *59],
            removeAllListeners: ƒ (length: 1) {},
            resume: ƒ (length: 0) {},
            pause: ƒ (length: 0) {},
            wrap: ƒ (length: 1) {},
            iterator: ƒ (length: 1) {},
            Symbol(nodejs.rejection): ƒ (length: 1) {},
            Symbol(Symbol.asyncIterator): ƒ (length: 0) {}
        },
        ReadableState: ƒ ReadableState(length: 3) {
            prototype: {}
        },
        _fromList: ƒ fromList(length: 2) {},
        from: ƒ (length: 2) {},
        fromWeb: ƒ (length: 2) {},
        toWeb: ƒ (length: 2) {},
        wrap: ƒ (length: 2) {}
    },
    Stream: <ref *74> ƒ Stream(length: 1) {
        prototype: <ref *75> Stream {
            constructor: [Circular: *74],
            pipe: ƒ (length: 2) {}
        },
        isDisturbed: <ref *77> ƒ isDisturbed(length: 1) {},
        isErrored: <ref *78> ƒ isErrored(length: 1) {},
        isWritable: <ref *79> ƒ isWritable(length: 1) {},
        isReadable: <ref *80> ƒ isReadable(length: 1) {},
        Readable: [Circular: *45],
        Writable: <ref *81> ƒ Writable(length: 0) {
            prototype: Writable {
                constructor: [Circular: *81],
                pipe: ƒ (length: 0) {},
                write: [Circular: *4],
                cork: [Circular: *5],
                uncork: [Circular: *6],
                setDefaultEncoding: [Circular: *7],
                _write: [Circular: *8],
                _writev: null,
                end: [Circular: *9],
                destroy: ƒ (length: 2) {},
                _undestroy: [Circular: *49],
                _destroy: ƒ (length: 2) {},
                Symbol(nodejs.rejection): ƒ (length: 1) {}
            },
            fromWeb: ƒ (length: 2) {},
            toWeb: ƒ (length: 1) {}
        },
        Duplex: [Circular: *2],
        Transform: <ref *89> ƒ Transform(length: 1) {
            prototype: Transform {
                constructor: [Circular: *89],
                _final: ƒ final(length: 1) {},
                _transform: ƒ (length: 3) {},
                _write: ƒ (length: 3) {},
                _read: ƒ (length: 0) {}
            }
        },
        PassThrough: [Circular: *42],
        pipeline: <ref *95> ƒ pipeline(length: 0) {
            [get/set] Symbol(nodejs.util.promisify.custom): <ref *96> ƒ pipeline(length: 0) {}
        },
        addAbortSignal: <ref *97> ƒ addAbortSignal(length: 2) {},
        finished: <ref *98> ƒ eos(length: 3) {
            finished: <ref *99> ƒ finished(length: 2) {},
            [get/set] Symbol(nodejs.util.promisify.custom): [Circular: *99]
        },
        destroy: <ref *100> ƒ destroyer(length: 2) {},
        compose: <ref *101> ƒ compose(length: 0) {},
        [get/set] promises: <ref *102> {
            finished: [Circular: *99],
            pipeline: [Circular: *96]
        },
        Stream: [Circular: *74],
        _isUint8Array: <ref *103> ƒ isUint8Array(length: 1) {},
        _uint8ArrayToBuffer: <ref *104> ƒ _uint8ArrayToBuffer(length: 1) {},
        setDefaultHighWaterMark: <ref *105> ƒ setDefaultHighWaterMark(length: 2) {},
        getDefaultHighWaterMark: <ref *106> ƒ getDefaultHighWaterMark(length: 1) {},
        _getNativeReadableStreamPrototype: <ref *107> ƒ getNativeReadableStreamPrototype(length: 2) {},
        NativeWritable: [Circular: *36],
        eos: [Circular: *98],
        EventEmitter: [Circular: *13],
        Symbol(::bunternal::): {
            _ReadableFromWeb: ƒ newStreamReadableFromReadableStream(length: 1) {},
            _ReadableFromWebForUndici: ƒ ReadableFromWeb(length: 2) {},
            kEnsureConstructed: Symbol(kEnsureConstructed)
        }
    },
    Transform: [Circular: *89],
    Writable: [Circular: *81],
    _getNativeReadableStreamPrototype: [Circular: *107],
    _isUint8Array: [Circular: *103],
    _uint8ArrayToBuffer: [Circular: *104],
    addAbortListener: [Circular: *34],
    addAbortSignal: [Circular: *97],
    captureRejectionSymbol: Symbol(nodejs.rejection),
    captureRejections: false,
    compose: [Circular: *101],
    default: [Circular: *74],
    defaultMaxListeners: 10,
    destroy: [Circular: *100],
    eos: [Circular: *98],
    errorMonitor: Symbol(events.errorMonitor),
    finished: [Circular: *98],
    getDefaultHighWaterMark: [Circular: *106],
    getEventListeners: [Circular: *30],
    getMaxListeners: [Circular: *31],
    init: [Circular: *13],
    isDisturbed: [Circular: *77],
    isErrored: [Circular: *78],
    isReadable: [Circular: *80],
    isWritable: [Circular: *79],
    listenerCount: [Circular: *35],
    on: [Circular: *29],
    once: [Circular: *28],
    pipeline: [Circular: *95],
    promises: [Circular: *102],
    prototype: [Circular: *75],
    setDefaultHighWaterMark: [Circular: *105],
    setMaxListeners: [Circular: *32],
    usingDomains: false
}
```

</td></tr></table>

## _stream_wrap

<table><tr><th>Node.js</th><th>Bun</th></tr><tr><td valign="top">

```js
[Object: null prototype] {
    default: class JSStreamSocket extends Socket {}
}
(node:2136) [DEP0125] DeprecationWarning: The _stream_wrap module is deprecated.
(Use `node --trace-deprecation ...` to show where the warning was created)
```

</td><td valign="top">

```js
{
    Duplex: <ref *2> ƒ Duplex(length: 1) {
        prototype: Duplex {
            constructor: [Circular: *2],
            write: <ref *4> ƒ (length: 3) {},
            cork: <ref *5> ƒ (length: 0) {},
            uncork: <ref *6> ƒ (length: 0) {},
            setDefaultEncoding: <ref *7> ƒ setDefaultEncoding(length: 1) {},
            _write: <ref *8> ƒ (length: 3) {},
            _writev: null,
            end: <ref *9> ƒ (length: 3) {},
            _events: undefined,
            _eventsCount: 0,
            _maxListeners: undefined
        },
        fromWeb: ƒ (length: 2) {},
        toWeb: ƒ (length: 1) {},
        from: ƒ (length: 1) {}
    },
    EventEmitter: <ref *13> ƒ EventEmitter2(length: 1) {
        prototype: EventEmitter2 {
            _events: undefined,
            _eventsCount: 0,
            _maxListeners: undefined,
            setMaxListeners: ƒ setMaxListeners2(length: 1) {},
            constructor: [Circular: *13],
            getMaxListeners: ƒ getMaxListeners2(length: 0) {},
            emit: ƒ emit(length: 1) {},
            addListener: <ref *18> ƒ addListener(length: 2) {},
            on: [Circular: *18],
            prependListener: ƒ prependListener(length: 2) {},
            once: ƒ once2(length: 2) {},
            prependOnceListener: ƒ prependOnceListener(length: 2) {},
            removeListener: <ref *22> ƒ removeListener(length: 2) {},
            off: [Circular: *22],
            removeAllListeners: ƒ removeAllListeners(length: 1) {},
            listeners: ƒ listeners(length: 1) {},
            rawListeners: ƒ rawListeners(length: 1) {},
            listenerCount: ƒ listenerCount2(length: 1) {},
            eventNames: ƒ eventNames(length: 0) {},
            Symbol(kCapture): false
        },
        [get/set] captureRejections: false,
        [get/set] defaultMaxListeners: 10,
        once: <ref *28> ƒ once(length: 3) {},
        on: <ref *29> ƒ on(length: 2) {},
        getEventListeners: <ref *30> ƒ getEventListeners(length: 2) {},
        getMaxListeners: <ref *31> ƒ getMaxListeners(length: 1) {},
        setMaxListeners: <ref *32> ƒ setMaxListeners(length: 0) {},
        EventEmitter: [Circular: *13],
        usingDomains: false,
        captureRejectionSymbol: Symbol(nodejs.rejection),
        EventEmitterAsyncResource: <ref *33> ƒ EventEmitterAsyncResource(length: 1) {},
        errorMonitor: Symbol(events.errorMonitor),
        addAbortListener: <ref *34> ƒ addAbortListener(length: 2) {},
        init: [Circular: *13],
        listenerCount: <ref *35> ƒ listenerCount(length: 2) {}
    },
    EventEmitterAsyncResource: [Circular: *33],
    NativeWritable: <ref *36> ƒ NativeWritable(length: 1) {
        prototype: Writable {
            end: ƒ end(length: 4) {},
            _destroy: ƒ (length: 2) {},
            ref: ƒ ref(length: 0) {},
            unref: ƒ unref(length: 0) {}
        }
    },
    PassThrough: <ref *42> ƒ PassThrough(length: 1) {
        prototype: PassThrough {
            constructor: [Circular: *42],
            _transform: ƒ (length: 3) {}
        }
    },
    Readable: <ref *45> ƒ Readable(length: 1) {
        prototype: Readable {
            constructor: [Circular: *45],
            on: <ref *47> ƒ (length: 2) {},
            destroy: ƒ destroy2(length: 2) {},
            _undestroy: <ref *49> ƒ undestroy(length: 0) {},
            _destroy: ƒ (length: 2) {},
            push: ƒ (length: 2) {},
            unshift: ƒ (length: 2) {},
            isPaused: ƒ (length: 0) {},
            setEncoding: ƒ (length: 1) {},
            read: ƒ (length: 1) {},
            _read: ƒ (length: 1) {},
            pipe: ƒ (length: 2) {},
            unpipe: ƒ (length: 1) {},
            addListener: [Circular: *47],
            removeListener: <ref *59> ƒ (length: 2) {},
            off: [Circular: *59],
            removeAllListeners: ƒ (length: 1) {},
            resume: ƒ (length: 0) {},
            pause: ƒ (length: 0) {},
            wrap: ƒ (length: 1) {},
            iterator: ƒ (length: 1) {},
            Symbol(nodejs.rejection): ƒ (length: 1) {},
            Symbol(Symbol.asyncIterator): ƒ (length: 0) {}
        },
        ReadableState: ƒ ReadableState(length: 3) {
            prototype: {}
        },
        _fromList: ƒ fromList(length: 2) {},
        from: ƒ (length: 2) {},
        fromWeb: ƒ (length: 2) {},
        toWeb: ƒ (length: 2) {},
        wrap: ƒ (length: 2) {}
    },
    Stream: <ref *74> ƒ Stream(length: 1) {
        prototype: <ref *75> Stream {
            constructor: [Circular: *74],
            pipe: ƒ (length: 2) {}
        },
        isDisturbed: <ref *77> ƒ isDisturbed(length: 1) {},
        isErrored: <ref *78> ƒ isErrored(length: 1) {},
        isWritable: <ref *79> ƒ isWritable(length: 1) {},
        isReadable: <ref *80> ƒ isReadable(length: 1) {},
        Readable: [Circular: *45],
        Writable: <ref *81> ƒ Writable(length: 0) {
            prototype: Writable {
                constructor: [Circular: *81],
                pipe: ƒ (length: 0) {},
                write: [Circular: *4],
                cork: [Circular: *5],
                uncork: [Circular: *6],
                setDefaultEncoding: [Circular: *7],
                _write: [Circular: *8],
                _writev: null,
                end: [Circular: *9],
                destroy: ƒ (length: 2) {},
                _undestroy: [Circular: *49],
                _destroy: ƒ (length: 2) {},
                Symbol(nodejs.rejection): ƒ (length: 1) {}
            },
            fromWeb: ƒ (length: 2) {},
            toWeb: ƒ (length: 1) {}
        },
        Duplex: [Circular: *2],
        Transform: <ref *89> ƒ Transform(length: 1) {
            prototype: Transform {
                constructor: [Circular: *89],
                _final: ƒ final(length: 1) {},
                _transform: ƒ (length: 3) {},
                _write: ƒ (length: 3) {},
                _read: ƒ (length: 0) {}
            }
        },
        PassThrough: [Circular: *42],
        pipeline: <ref *95> ƒ pipeline(length: 0) {
            [get/set] Symbol(nodejs.util.promisify.custom): <ref *96> ƒ pipeline(length: 0) {}
        },
        addAbortSignal: <ref *97> ƒ addAbortSignal(length: 2) {},
        finished: <ref *98> ƒ eos(length: 3) {
            finished: <ref *99> ƒ finished(length: 2) {},
            [get/set] Symbol(nodejs.util.promisify.custom): [Circular: *99]
        },
        destroy: <ref *100> ƒ destroyer(length: 2) {},
        compose: <ref *101> ƒ compose(length: 0) {},
        [get/set] promises: <ref *102> {
            finished: [Circular: *99],
            pipeline: [Circular: *96]
        },
        Stream: [Circular: *74],
        _isUint8Array: <ref *103> ƒ isUint8Array(length: 1) {},
        _uint8ArrayToBuffer: <ref *104> ƒ _uint8ArrayToBuffer(length: 1) {},
        setDefaultHighWaterMark: <ref *105> ƒ setDefaultHighWaterMark(length: 2) {},
        getDefaultHighWaterMark: <ref *106> ƒ getDefaultHighWaterMark(length: 1) {},
        _getNativeReadableStreamPrototype: <ref *107> ƒ getNativeReadableStreamPrototype(length: 2) {},
        NativeWritable: [Circular: *36],
        eos: [Circular: *98],
        EventEmitter: [Circular: *13],
        Symbol(::bunternal::): {
            _ReadableFromWeb: ƒ newStreamReadableFromReadableStream(length: 1) {},
            _ReadableFromWebForUndici: ƒ ReadableFromWeb(length: 2) {},
            kEnsureConstructed: Symbol(kEnsureConstructed)
        }
    },
    Transform: [Circular: *89],
    Writable: [Circular: *81],
    _getNativeReadableStreamPrototype: [Circular: *107],
    _isUint8Array: [Circular: *103],
    _uint8ArrayToBuffer: [Circular: *104],
    addAbortListener: [Circular: *34],
    addAbortSignal: [Circular: *97],
    captureRejectionSymbol: Symbol(nodejs.rejection),
    captureRejections: false,
    compose: [Circular: *101],
    default: [Circular: *74],
    defaultMaxListeners: 10,
    destroy: [Circular: *100],
    eos: [Circular: *98],
    errorMonitor: Symbol(events.errorMonitor),
    finished: [Circular: *98],
    getDefaultHighWaterMark: [Circular: *106],
    getEventListeners: [Circular: *30],
    getMaxListeners: [Circular: *31],
    init: [Circular: *13],
    isDisturbed: [Circular: *77],
    isErrored: [Circular: *78],
    isReadable: [Circular: *80],
    isWritable: [Circular: *79],
    listenerCount: [Circular: *35],
    on: [Circular: *29],
    once: [Circular: *28],
    pipeline: [Circular: *95],
    promises: [Circular: *102],
    prototype: [Circular: *75],
    setDefaultHighWaterMark: [Circular: *105],
    setMaxListeners: [Circular: *32],
    usingDomains: false
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
{
    Duplex: <ref *2> ƒ Duplex(length: 1) {
        prototype: Duplex {
            constructor: [Circular: *2],
            write: <ref *4> ƒ (length: 3) {},
            cork: <ref *5> ƒ (length: 0) {},
            uncork: <ref *6> ƒ (length: 0) {},
            setDefaultEncoding: <ref *7> ƒ setDefaultEncoding(length: 1) {},
            _write: <ref *8> ƒ (length: 3) {},
            _writev: null,
            end: <ref *9> ƒ (length: 3) {},
            _events: undefined,
            _eventsCount: 0,
            _maxListeners: undefined
        },
        fromWeb: ƒ (length: 2) {},
        toWeb: ƒ (length: 1) {},
        from: ƒ (length: 1) {}
    },
    EventEmitter: <ref *13> ƒ EventEmitter2(length: 1) {
        prototype: EventEmitter2 {
            _events: undefined,
            _eventsCount: 0,
            _maxListeners: undefined,
            setMaxListeners: ƒ setMaxListeners2(length: 1) {},
            constructor: [Circular: *13],
            getMaxListeners: ƒ getMaxListeners2(length: 0) {},
            emit: ƒ emit(length: 1) {},
            addListener: <ref *18> ƒ addListener(length: 2) {},
            on: [Circular: *18],
            prependListener: ƒ prependListener(length: 2) {},
            once: ƒ once2(length: 2) {},
            prependOnceListener: ƒ prependOnceListener(length: 2) {},
            removeListener: <ref *22> ƒ removeListener(length: 2) {},
            off: [Circular: *22],
            removeAllListeners: ƒ removeAllListeners(length: 1) {},
            listeners: ƒ listeners(length: 1) {},
            rawListeners: ƒ rawListeners(length: 1) {},
            listenerCount: ƒ listenerCount2(length: 1) {},
            eventNames: ƒ eventNames(length: 0) {},
            Symbol(kCapture): false
        },
        [get/set] captureRejections: false,
        [get/set] defaultMaxListeners: 10,
        once: <ref *28> ƒ once(length: 3) {},
        on: <ref *29> ƒ on(length: 2) {},
        getEventListeners: <ref *30> ƒ getEventListeners(length: 2) {},
        getMaxListeners: <ref *31> ƒ getMaxListeners(length: 1) {},
        setMaxListeners: <ref *32> ƒ setMaxListeners(length: 0) {},
        EventEmitter: [Circular: *13],
        usingDomains: false,
        captureRejectionSymbol: Symbol(nodejs.rejection),
        EventEmitterAsyncResource: <ref *33> ƒ EventEmitterAsyncResource(length: 1) {},
        errorMonitor: Symbol(events.errorMonitor),
        addAbortListener: <ref *34> ƒ addAbortListener(length: 2) {},
        init: [Circular: *13],
        listenerCount: <ref *35> ƒ listenerCount(length: 2) {}
    },
    EventEmitterAsyncResource: [Circular: *33],
    NativeWritable: <ref *36> ƒ NativeWritable(length: 1) {
        prototype: Writable {
            end: ƒ end(length: 4) {},
            _destroy: ƒ (length: 2) {},
            ref: ƒ ref(length: 0) {},
            unref: ƒ unref(length: 0) {}
        }
    },
    PassThrough: <ref *42> ƒ PassThrough(length: 1) {
        prototype: PassThrough {
            constructor: [Circular: *42],
            _transform: ƒ (length: 3) {}
        }
    },
    Readable: <ref *45> ƒ Readable(length: 1) {
        prototype: Readable {
            constructor: [Circular: *45],
            on: <ref *47> ƒ (length: 2) {},
            destroy: ƒ destroy2(length: 2) {},
            _undestroy: <ref *49> ƒ undestroy(length: 0) {},
            _destroy: ƒ (length: 2) {},
            push: ƒ (length: 2) {},
            unshift: ƒ (length: 2) {},
            isPaused: ƒ (length: 0) {},
            setEncoding: ƒ (length: 1) {},
            read: ƒ (length: 1) {},
            _read: ƒ (length: 1) {},
            pipe: ƒ (length: 2) {},
            unpipe: ƒ (length: 1) {},
            addListener: [Circular: *47],
            removeListener: <ref *59> ƒ (length: 2) {},
            off: [Circular: *59],
            removeAllListeners: ƒ (length: 1) {},
            resume: ƒ (length: 0) {},
            pause: ƒ (length: 0) {},
            wrap: ƒ (length: 1) {},
            iterator: ƒ (length: 1) {},
            Symbol(nodejs.rejection): ƒ (length: 1) {},
            Symbol(Symbol.asyncIterator): ƒ (length: 0) {}
        },
        ReadableState: ƒ ReadableState(length: 3) {
            prototype: {}
        },
        _fromList: ƒ fromList(length: 2) {},
        from: ƒ (length: 2) {},
        fromWeb: ƒ (length: 2) {},
        toWeb: ƒ (length: 2) {},
        wrap: ƒ (length: 2) {}
    },
    Stream: <ref *74> ƒ Stream(length: 1) {
        prototype: <ref *75> Stream {
            constructor: [Circular: *74],
            pipe: ƒ (length: 2) {}
        },
        isDisturbed: <ref *77> ƒ isDisturbed(length: 1) {},
        isErrored: <ref *78> ƒ isErrored(length: 1) {},
        isWritable: <ref *79> ƒ isWritable(length: 1) {},
        isReadable: <ref *80> ƒ isReadable(length: 1) {},
        Readable: [Circular: *45],
        Writable: <ref *81> ƒ Writable(length: 0) {
            prototype: Writable {
                constructor: [Circular: *81],
                pipe: ƒ (length: 0) {},
                write: [Circular: *4],
                cork: [Circular: *5],
                uncork: [Circular: *6],
                setDefaultEncoding: [Circular: *7],
                _write: [Circular: *8],
                _writev: null,
                end: [Circular: *9],
                destroy: ƒ (length: 2) {},
                _undestroy: [Circular: *49],
                _destroy: ƒ (length: 2) {},
                Symbol(nodejs.rejection): ƒ (length: 1) {}
            },
            fromWeb: ƒ (length: 2) {},
            toWeb: ƒ (length: 1) {}
        },
        Duplex: [Circular: *2],
        Transform: <ref *89> ƒ Transform(length: 1) {
            prototype: Transform {
                constructor: [Circular: *89],
                _final: ƒ final(length: 1) {},
                _transform: ƒ (length: 3) {},
                _write: ƒ (length: 3) {},
                _read: ƒ (length: 0) {}
            }
        },
        PassThrough: [Circular: *42],
        pipeline: <ref *95> ƒ pipeline(length: 0) {
            [get/set] Symbol(nodejs.util.promisify.custom): <ref *96> ƒ pipeline(length: 0) {}
        },
        addAbortSignal: <ref *97> ƒ addAbortSignal(length: 2) {},
        finished: <ref *98> ƒ eos(length: 3) {
            finished: <ref *99> ƒ finished(length: 2) {},
            [get/set] Symbol(nodejs.util.promisify.custom): [Circular: *99]
        },
        destroy: <ref *100> ƒ destroyer(length: 2) {},
        compose: <ref *101> ƒ compose(length: 0) {},
        [get/set] promises: <ref *102> {
            finished: [Circular: *99],
            pipeline: [Circular: *96]
        },
        Stream: [Circular: *74],
        _isUint8Array: <ref *103> ƒ isUint8Array(length: 1) {},
        _uint8ArrayToBuffer: <ref *104> ƒ _uint8ArrayToBuffer(length: 1) {},
        setDefaultHighWaterMark: <ref *105> ƒ setDefaultHighWaterMark(length: 2) {},
        getDefaultHighWaterMark: <ref *106> ƒ getDefaultHighWaterMark(length: 1) {},
        _getNativeReadableStreamPrototype: <ref *107> ƒ getNativeReadableStreamPrototype(length: 2) {},
        NativeWritable: [Circular: *36],
        eos: [Circular: *98],
        EventEmitter: [Circular: *13],
        Symbol(::bunternal::): {
            _ReadableFromWeb: ƒ newStreamReadableFromReadableStream(length: 1) {},
            _ReadableFromWebForUndici: ƒ ReadableFromWeb(length: 2) {},
            kEnsureConstructed: Symbol(kEnsureConstructed)
        }
    },
    Transform: [Circular: *89],
    Writable: [Circular: *81],
    _getNativeReadableStreamPrototype: [Circular: *107],
    _isUint8Array: [Circular: *103],
    _uint8ArrayToBuffer: [Circular: *104],
    addAbortListener: [Circular: *34],
    addAbortSignal: [Circular: *97],
    captureRejectionSymbol: Symbol(nodejs.rejection),
    captureRejections: false,
    compose: [Circular: *101],
    default: [Circular: *74],
    defaultMaxListeners: 10,
    destroy: [Circular: *100],
    eos: [Circular: *98],
    errorMonitor: Symbol(events.errorMonitor),
    finished: [Circular: *98],
    getDefaultHighWaterMark: [Circular: *106],
    getEventListeners: [Circular: *30],
    getMaxListeners: [Circular: *31],
    init: [Circular: *13],
    isDisturbed: [Circular: *77],
    isErrored: [Circular: *78],
    isReadable: [Circular: *80],
    isWritable: [Circular: *79],
    listenerCount: [Circular: *35],
    on: [Circular: *29],
    once: [Circular: *28],
    pipeline: [Circular: *95],
    promises: [Circular: *102],
    prototype: [Circular: *75],
    setDefaultHighWaterMark: [Circular: *105],
    setMaxListeners: [Circular: *32],
    usingDomains: false
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
    CLIENT_RENEG_LIMIT: 3,
    CLIENT_RENEG_WINDOW: 600,
    DEFAULT_CIPHERS: "DHE-RSA-AES256-GCM-SHA384:DHE-RSA-AES128-GCM-SHA256:ECDHE-RSA-AES256-GCM-SHA384:ECDHE-RSA-AES128-GCM…",
    DEFAULT_ECDH_CURVE: "auto",
    DEFAULT_MAX_VERSION: "TLSv1.3",
    DEFAULT_MIN_VERSION: "TLSv1.2",
    SecureContext: <ref *2> ƒ SecureContext(length: 1) {},
    Server: <ref *3> ƒ Server(length: 2) {},
    TLSSocket: <ref *4> ƒ Socket(length: 1) {
        prototype: TLSSocket2 {}
    },
    checkServerIdentity: <ref *6> ƒ checkServerIdentity(length: 2) {},
    connect: <ref *7> ƒ connect(length: 0) {},
    convertALPNProtocols: <ref *8> ƒ convertALPNProtocols(length: 2) {},
    createSecureContext: <ref *9> ƒ createSecureContext(length: 1) {},
    createServer: <ref *10> ƒ createServer(length: 2) {},
    default: {
        CLIENT_RENEG_LIMIT: 3,
        CLIENT_RENEG_WINDOW: 600,
        connect: [Circular: *7],
        convertALPNProtocols: [Circular: *8],
        createSecureContext: [Circular: *9],
        createServer: [Circular: *10],
        DEFAULT_CIPHERS: "DHE-RSA-AES256-GCM-SHA384:DHE-RSA-AES128-GCM-SHA256:ECDHE-RSA-AES256-GCM-SHA384:ECDHE-RSA-AES128-GCM…",
        DEFAULT_ECDH_CURVE: "auto",
        DEFAULT_MAX_VERSION: "TLSv1.3",
        DEFAULT_MIN_VERSION: "TLSv1.2",
        getCiphers: <ref *12> ƒ getCiphers(length: 0) {},
        parseCertString: <ref *13> ƒ parseCertString(length: 0) {},
        SecureContext: [Circular: *2],
        Server: [Circular: *3],
        TLSSocket: [Circular: *4],
        checkServerIdentity: [Circular: *6],
        rootCertificates: <ref *14> [
            "-----BEGIN CERTIFICATE-----\nMIIDdTCCAl2gAwIBAgILBAAAAAABFUtaw5QwDQYJKoZIhvcNAQEFBQAwVzELMAkGA1UEBhMC…",
            "-----BEGIN CERTIFICATE-----\nMIIEKjCCAxKgAwIBAgIEOGPe+DANBgkqhkiG9w0BAQUFADCBtDEUMBIGA1UEChMLRW50cnVz…",
            "-----BEGIN CERTIFICATE-----\nMIIDdzCCAl+gAwIBAgIEAgAAuTANBgkqhkiG9w0BAQUFADBaMQswCQYDVQQGEwJJRTESMBAG…",
            "-----BEGIN CERTIFICATE-----\nMIIEkTCCA3mgAwIBAgIERWtQVDANBgkqhkiG9w0BAQUFADCBsDELMAkGA1UEBhMCVVMxFjAU…",
            "-----BEGIN CERTIFICATE-----\nMIIEMjCCAxqgAwIBAgIBATANBgkqhkiG9w0BAQUFADB7MQswCQYDVQQGEwJHQjEbMBkGA1UE…",
            "-----BEGIN CERTIFICATE-----\nMIIFtzCCA5+gAwIBAgICBQkwDQYJKoZIhvcNAQEFBQAwRTELMAkGA1UEBhMCQk0xGTAXBgNV…",
            "-----BEGIN CERTIFICATE-----\nMIIGnTCCBIWgAwIBAgICBcYwDQYJKoZIhvcNAQEFBQAwRTELMAkGA1UEBhMCQk0xGTAXBgNV…",
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
            "-----BEGIN CERTIFICATE-----\nMIICiTCCAg+gAwIBAgIQH0evqmIAcFBUTAGem2OZKjAKBggqhkjOPQQDAzCBhTELMAkGA1UE…",
            "-----BEGIN CERTIFICATE-----\nMIIDqDCCApCgAwIBAgIJAP7c4wEPyUj/MA0GCSqGSIb3DQEBBQUAMDQxCzAJBgNVBAYTAkZS…",
            "-----BEGIN CERTIFICATE-----\nMIIFsDCCA5igAwIBAgIQFci9ZUdcr7iXAF7kBtK8nTANBgkqhkiG9w0BAQUFADBeMQswCQYD…",
            "-----BEGIN CERTIFICATE-----\nMIIDODCCAiCgAwIBAgIGIAYFFnACMA0GCSqGSIb3DQEBBQUAMDsxCzAJBgNVBAYTAlJPMREw…",
            "-----BEGIN CERTIFICATE-----\nMIIEFTCCAv2gAwIBAgIGSUEs5AAQMA0GCSqGSIb3DQEBCwUAMIGnMQswCQYDVQQGEwJIVTER…",
            "-----BEGIN CERTIFICATE-----\nMIIDbTCCAlWgAwIBAgIBATANBgkqhkiG9w0BAQUFADBYMQswCQYDVQQGEwJKUDErMCkGA1UE…",
            "-----BEGIN CERTIFICATE-----\nMIIECjCCAvKgAwIBAgIJAMJ+QwRORz8ZMA0GCSqGSIb3DQEBCwUAMIGCMQswCQYDVQQGEwJI…",
            "-----BEGIN CERTIFICATE-----\nMIIDXzCCAkegAwIBAgILBAAAAAABIVhTCKIwDQYJKoZIhvcNAQELBQAwTDEgMB4GA1UECxMX…",
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
            "-----BEGIN CERTIFICATE-----\nMIIFfzCCA2egAwIBAgIJAOF8N0D9G/5nMA0GCSqGSIb3DQEBDAUAMF0xCzAJBgNVBAYTAkpQ…",
            "-----BEGIN CERTIFICATE-----\nMIICODCCAb6gAwIBAgIJANZdm7N4gS7rMAoGCCqGSM49BAMDMGExCzAJBgNVBAYTAkpQMSUw…",
            "-----BEGIN CERTIFICATE-----\nMIIFdDCCA1ygAwIBAgIQVW9l47TZkGobCdFsPsBsIDANBgkqhkiG9w0BAQsFADBUMQswCQYD…",
            "-----BEGIN CERTIFICATE-----\nMIICJTCCAaugAwIBAgIQLBcIfWQqwP6FGFkGz7RK6zAKBggqhkjOPQQDAzBUMQswCQYDVQQG…",
            "-----BEGIN CERTIFICATE-----\nMIICOjCCAcGgAwIBAgIQQvLM2htpN0RfFf51KBC49DAKBggqhkjOPQQDAzBfMQswCQYDVQQG…",
            "-----BEGIN CERTIFICATE-----\nMIIFijCCA3KgAwIBAgIQdY39i658BwD6qSWn4cetFDANBgkqhkiG9w0BAQwFADBfMQswCQYD…",
            "-----BEGIN CERTIFICATE-----\nMIIFiTCCA3GgAwIBAgIQb77arXO9CEDii02+1PdbkTANBgkqhkiG9w0BAQsFADBOMQswCQYD…",
            "-----BEGIN CERTIFICATE-----\nMIICOjCCAcCgAwIBAgIQFAP1q/s3ixdAW+JDsqXRxDAKBggqhkjOPQQDAzBOMQswCQYDVQQG…",
            "-----BEGIN CERTIFICATE-----\nMIICFTCCAZugAwIBAgIQPZg7pmY9kGP3fiZXOATvADAKBggqhkjOPQQDAzBMMS4wLAYDVQQD…",
            "-----BEGIN CERTIFICATE-----\nMIIFZDCCA0ygAwIBAgIQU9XP5hmTC/srBRLYwiqipDANBgkqhkiG9w0BAQwFADBMMS4wLAYD…",
            "-----BEGIN CERTIFICATE-----\nMIIFpTCCA42gAwIBAgIUZPYOZXdhaqs7tOqFhLuxibhxkw8wDQYJKoZIhvcNAQEMBQAwWjEL…",
            "-----BEGIN CERTIFICATE-----\nMIICVTCCAdygAwIBAgIUTyNkuI6XY57GU4HBdk7LKnQV1tcwCgYIKoZIzj0EAwMwWjELMAkG…",
            "-----BEGIN CERTIFICATE-----\nMIICHTCCAaOgAwIBAgIUQ3CCd89NXTTxyq4yLzf39H91oJ4wCgYIKoZIzj0EAwMwTjELMAkG…",
            "-----BEGIN CERTIFICATE-----\nMIICHDCCAaOgAwIBAgIUKP2ZYEFHpgE6yhR7H+/5aAiDXX0wCgYIKoZIzj0EAwMwTjELMAkG…",
            "-----BEGIN CERTIFICATE-----\nMIIFbDCCA1SgAwIBAgIUPgNJgXUWdDGOTKvVxZAplsU5EN0wDQYJKoZIhvcNAQELBQAwTjEL…",
            "-----BEGIN CERTIFICATE-----\nMIIFbDCCA1SgAwIBAgIUVBa/O345lXGN0aoApYYNK496BU4wDQYJKoZIhvcNAQELBQAwTjEL…",
            "-----BEGIN CERTIFICATE-----\nMIICQjCCAcmgAwIBAgIQNjqWjMlcsljN0AFdxeVXADAKBggqhkjOPQQDAzBjMQswCQYDVQQG…",
            "-----BEGIN CERTIFICATE-----\nMIIFszCCA5ugAwIBAgIQIZxULej27HF3+k7ow3BXlzANBgkqhkiG9w0BAQwFADBjMQswCQYD…",
            "-----BEGIN CERTIFICATE-----\nMIICejCCAgCgAwIBAgIQMZch7a+JQn81QYehZ1ZMbTAKBggqhkjOPQQDAzBuMQswCQYDVQQG…"
        ]
    },
    getCiphers: [Circular: *12],
    parseCertString: [Circular: *13],
    rootCertificates: [Circular: *14]
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
    CLIENT_RENEG_LIMIT: 3,
    CLIENT_RENEG_WINDOW: 600,
    DEFAULT_CIPHERS: "DHE-RSA-AES256-GCM-SHA384:DHE-RSA-AES128-GCM-SHA256:ECDHE-RSA-AES256-GCM-SHA384:ECDHE-RSA-AES128-GCM…",
    DEFAULT_ECDH_CURVE: "auto",
    DEFAULT_MAX_VERSION: "TLSv1.3",
    DEFAULT_MIN_VERSION: "TLSv1.2",
    SecureContext: <ref *2> ƒ SecureContext(length: 1) {},
    Server: <ref *3> ƒ Server(length: 2) {},
    TLSSocket: <ref *4> ƒ Socket(length: 1) {
        prototype: TLSSocket2 {}
    },
    checkServerIdentity: <ref *6> ƒ checkServerIdentity(length: 2) {},
    connect: <ref *7> ƒ connect(length: 0) {},
    convertALPNProtocols: <ref *8> ƒ convertALPNProtocols(length: 2) {},
    createSecureContext: <ref *9> ƒ createSecureContext(length: 1) {},
    createServer: <ref *10> ƒ createServer(length: 2) {},
    default: {
        CLIENT_RENEG_LIMIT: 3,
        CLIENT_RENEG_WINDOW: 600,
        connect: [Circular: *7],
        convertALPNProtocols: [Circular: *8],
        createSecureContext: [Circular: *9],
        createServer: [Circular: *10],
        DEFAULT_CIPHERS: "DHE-RSA-AES256-GCM-SHA384:DHE-RSA-AES128-GCM-SHA256:ECDHE-RSA-AES256-GCM-SHA384:ECDHE-RSA-AES128-GCM…",
        DEFAULT_ECDH_CURVE: "auto",
        DEFAULT_MAX_VERSION: "TLSv1.3",
        DEFAULT_MIN_VERSION: "TLSv1.2",
        getCiphers: <ref *12> ƒ getCiphers(length: 0) {},
        parseCertString: <ref *13> ƒ parseCertString(length: 0) {},
        SecureContext: [Circular: *2],
        Server: [Circular: *3],
        TLSSocket: [Circular: *4],
        checkServerIdentity: [Circular: *6],
        rootCertificates: <ref *14> [
            "-----BEGIN CERTIFICATE-----\nMIIDdTCCAl2gAwIBAgILBAAAAAABFUtaw5QwDQYJKoZIhvcNAQEFBQAwVzELMAkGA1UEBhMC…",
            "-----BEGIN CERTIFICATE-----\nMIIEKjCCAxKgAwIBAgIEOGPe+DANBgkqhkiG9w0BAQUFADCBtDEUMBIGA1UEChMLRW50cnVz…",
            "-----BEGIN CERTIFICATE-----\nMIIDdzCCAl+gAwIBAgIEAgAAuTANBgkqhkiG9w0BAQUFADBaMQswCQYDVQQGEwJJRTESMBAG…",
            "-----BEGIN CERTIFICATE-----\nMIIEkTCCA3mgAwIBAgIERWtQVDANBgkqhkiG9w0BAQUFADCBsDELMAkGA1UEBhMCVVMxFjAU…",
            "-----BEGIN CERTIFICATE-----\nMIIEMjCCAxqgAwIBAgIBATANBgkqhkiG9w0BAQUFADB7MQswCQYDVQQGEwJHQjEbMBkGA1UE…",
            "-----BEGIN CERTIFICATE-----\nMIIFtzCCA5+gAwIBAgICBQkwDQYJKoZIhvcNAQEFBQAwRTELMAkGA1UEBhMCQk0xGTAXBgNV…",
            "-----BEGIN CERTIFICATE-----\nMIIGnTCCBIWgAwIBAgICBcYwDQYJKoZIhvcNAQEFBQAwRTELMAkGA1UEBhMCQk0xGTAXBgNV…",
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
            "-----BEGIN CERTIFICATE-----\nMIICiTCCAg+gAwIBAgIQH0evqmIAcFBUTAGem2OZKjAKBggqhkjOPQQDAzCBhTELMAkGA1UE…",
            "-----BEGIN CERTIFICATE-----\nMIIDqDCCApCgAwIBAgIJAP7c4wEPyUj/MA0GCSqGSIb3DQEBBQUAMDQxCzAJBgNVBAYTAkZS…",
            "-----BEGIN CERTIFICATE-----\nMIIFsDCCA5igAwIBAgIQFci9ZUdcr7iXAF7kBtK8nTANBgkqhkiG9w0BAQUFADBeMQswCQYD…",
            "-----BEGIN CERTIFICATE-----\nMIIDODCCAiCgAwIBAgIGIAYFFnACMA0GCSqGSIb3DQEBBQUAMDsxCzAJBgNVBAYTAlJPMREw…",
            "-----BEGIN CERTIFICATE-----\nMIIEFTCCAv2gAwIBAgIGSUEs5AAQMA0GCSqGSIb3DQEBCwUAMIGnMQswCQYDVQQGEwJIVTER…",
            "-----BEGIN CERTIFICATE-----\nMIIDbTCCAlWgAwIBAgIBATANBgkqhkiG9w0BAQUFADBYMQswCQYDVQQGEwJKUDErMCkGA1UE…",
            "-----BEGIN CERTIFICATE-----\nMIIECjCCAvKgAwIBAgIJAMJ+QwRORz8ZMA0GCSqGSIb3DQEBCwUAMIGCMQswCQYDVQQGEwJI…",
            "-----BEGIN CERTIFICATE-----\nMIIDXzCCAkegAwIBAgILBAAAAAABIVhTCKIwDQYJKoZIhvcNAQELBQAwTDEgMB4GA1UECxMX…",
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
            "-----BEGIN CERTIFICATE-----\nMIIFfzCCA2egAwIBAgIJAOF8N0D9G/5nMA0GCSqGSIb3DQEBDAUAMF0xCzAJBgNVBAYTAkpQ…",
            "-----BEGIN CERTIFICATE-----\nMIICODCCAb6gAwIBAgIJANZdm7N4gS7rMAoGCCqGSM49BAMDMGExCzAJBgNVBAYTAkpQMSUw…",
            "-----BEGIN CERTIFICATE-----\nMIIFdDCCA1ygAwIBAgIQVW9l47TZkGobCdFsPsBsIDANBgkqhkiG9w0BAQsFADBUMQswCQYD…",
            "-----BEGIN CERTIFICATE-----\nMIICJTCCAaugAwIBAgIQLBcIfWQqwP6FGFkGz7RK6zAKBggqhkjOPQQDAzBUMQswCQYDVQQG…",
            "-----BEGIN CERTIFICATE-----\nMIICOjCCAcGgAwIBAgIQQvLM2htpN0RfFf51KBC49DAKBggqhkjOPQQDAzBfMQswCQYDVQQG…",
            "-----BEGIN CERTIFICATE-----\nMIIFijCCA3KgAwIBAgIQdY39i658BwD6qSWn4cetFDANBgkqhkiG9w0BAQwFADBfMQswCQYD…",
            "-----BEGIN CERTIFICATE-----\nMIIFiTCCA3GgAwIBAgIQb77arXO9CEDii02+1PdbkTANBgkqhkiG9w0BAQsFADBOMQswCQYD…",
            "-----BEGIN CERTIFICATE-----\nMIICOjCCAcCgAwIBAgIQFAP1q/s3ixdAW+JDsqXRxDAKBggqhkjOPQQDAzBOMQswCQYDVQQG…",
            "-----BEGIN CERTIFICATE-----\nMIICFTCCAZugAwIBAgIQPZg7pmY9kGP3fiZXOATvADAKBggqhkjOPQQDAzBMMS4wLAYDVQQD…",
            "-----BEGIN CERTIFICATE-----\nMIIFZDCCA0ygAwIBAgIQU9XP5hmTC/srBRLYwiqipDANBgkqhkiG9w0BAQwFADBMMS4wLAYD…",
            "-----BEGIN CERTIFICATE-----\nMIIFpTCCA42gAwIBAgIUZPYOZXdhaqs7tOqFhLuxibhxkw8wDQYJKoZIhvcNAQEMBQAwWjEL…",
            "-----BEGIN CERTIFICATE-----\nMIICVTCCAdygAwIBAgIUTyNkuI6XY57GU4HBdk7LKnQV1tcwCgYIKoZIzj0EAwMwWjELMAkG…",
            "-----BEGIN CERTIFICATE-----\nMIICHTCCAaOgAwIBAgIUQ3CCd89NXTTxyq4yLzf39H91oJ4wCgYIKoZIzj0EAwMwTjELMAkG…",
            "-----BEGIN CERTIFICATE-----\nMIICHDCCAaOgAwIBAgIUKP2ZYEFHpgE6yhR7H+/5aAiDXX0wCgYIKoZIzj0EAwMwTjELMAkG…",
            "-----BEGIN CERTIFICATE-----\nMIIFbDCCA1SgAwIBAgIUPgNJgXUWdDGOTKvVxZAplsU5EN0wDQYJKoZIhvcNAQELBQAwTjEL…",
            "-----BEGIN CERTIFICATE-----\nMIIFbDCCA1SgAwIBAgIUVBa/O345lXGN0aoApYYNK496BU4wDQYJKoZIhvcNAQELBQAwTjEL…",
            "-----BEGIN CERTIFICATE-----\nMIICQjCCAcmgAwIBAgIQNjqWjMlcsljN0AFdxeVXADAKBggqhkjOPQQDAzBjMQswCQYDVQQG…",
            "-----BEGIN CERTIFICATE-----\nMIIFszCCA5ugAwIBAgIQIZxULej27HF3+k7ow3BXlzANBgkqhkiG9w0BAQwFADBjMQswCQYD…",
            "-----BEGIN CERTIFICATE-----\nMIICejCCAgCgAwIBAgIQMZch7a+JQn81QYehZ1ZMbTAKBggqhkjOPQQDAzBuMQswCQYDVQQG…"
        ]
    },
    getCiphers: [Circular: *12],
    parseCertString: [Circular: *13],
    rootCertificates: [Circular: *14]
}
```

</td></tr></table>

## assert

<table><tr><th>Node.js</th><th>Bun</th></tr><tr><td valign="top">

```js
[Object: null prototype] {
    AssertionError: <ref *2> class AssertionError extends Error {},
    CallTracker: <ref *3> ƒ deprecated(length: 0) {},
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
{
    AssertionError: <ref *2> ƒ AssertionError2(length: 1) {
        prototype: AssertionError2 {}
    },
    CallTracker: <ref *4> ƒ CallTracker(length: 0) {},
    deepEqual: <ref *5> ƒ deepEqual(length: 3) {},
    deepStrictEqual: <ref *6> ƒ deepStrictEqual(length: 3) {},
    default: <ref *7> ƒ ok(length: 0) {
        fail: <ref *8> ƒ fail(length: 5) {},
        AssertionError: [Circular: *2],
        ok: [Circular: *7],
        equal: <ref *9> ƒ equal(length: 3) {},
        notEqual: <ref *10> ƒ notEqual(length: 3) {},
        deepEqual: [Circular: *5],
        notDeepEqual: <ref *11> ƒ notDeepEqual(length: 3) {},
        deepStrictEqual: [Circular: *6],
        notDeepStrictEqual: <ref *12> ƒ notDeepStrictEqual(length: 3) {},
        strictEqual: <ref *13> ƒ strictEqual(length: 3) {},
        notStrictEqual: <ref *14> ƒ notStrictEqual(length: 3) {},
        doesNotMatch: <ref *15> ƒ doesNotMatch(length: 3) {},
        match: <ref *16> ƒ match(length: 3) {},
        throws: <ref *17> ƒ throws(length: 1) {},
        rejects: <ref *18> ƒ rejects(length: 1) {},
        doesNotThrow: <ref *19> ƒ doesNotThrow(length: 1) {},
        doesNotReject: <ref *20> ƒ doesNotReject(length: 1) {},
        ifError: <ref *21> ƒ ifError(length: 1) {},
        strict: <ref *22> ƒ strict(length: 0) {
            fail: [Circular: *8],
            AssertionError: [Circular: *2],
            ok: [Circular: *7],
            equal: [Circular: *13],
            notEqual: [Circular: *14],
            deepEqual: [Circular: *6],
            notDeepEqual: [Circular: *12],
            deepStrictEqual: [Circular: *6],
            notDeepStrictEqual: [Circular: *12],
            strictEqual: [Circular: *13],
            notStrictEqual: [Circular: *14],
            doesNotMatch: [Circular: *15],
            match: [Circular: *16],
            throws: [Circular: *17],
            rejects: [Circular: *18],
            doesNotThrow: [Circular: *19],
            doesNotReject: [Circular: *20],
            ifError: [Circular: *21],
            strict: [Circular: *22]
        },
        CallTracker: [Circular: *4]
    },
    doesNotMatch: [Circular: *15],
    doesNotReject: [Circular: *20],
    doesNotThrow: [Circular: *19],
    equal: [Circular: *9],
    fail: [Circular: *8],
    ifError: [Circular: *21],
    match: [Circular: *16],
    notDeepEqual: [Circular: *11],
    notDeepStrictEqual: [Circular: *12],
    notEqual: [Circular: *10],
    notStrictEqual: [Circular: *14],
    ok: [Circular: *7],
    rejects: [Circular: *18],
    strict: [Circular: *22],
    strictEqual: [Circular: *13],
    throws: [Circular: *17]
}
```

</td></tr></table>

## assert/strict

<table><tr><th>Node.js</th><th>Bun</th></tr><tr><td valign="top">

```js
[Object: null prototype] {
    AssertionError: <ref *2> class AssertionError extends Error {},
    CallTracker: <ref *3> ƒ deprecated(length: 0) {},
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
    AssertionError: <ref *2> ƒ AssertionError2(length: 1) {
        prototype: AssertionError2 {}
    },
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
            doesNotMatch: <ref *15> ƒ doesNotMatch(length: 3) {},
            match: <ref *16> ƒ match(length: 3) {},
            throws: <ref *17> ƒ throws(length: 1) {},
            rejects: <ref *18> ƒ rejects(length: 1) {},
            doesNotThrow: <ref *19> ƒ doesNotThrow(length: 1) {},
            doesNotReject: <ref *20> ƒ doesNotReject(length: 1) {},
            ifError: <ref *21> ƒ ifError(length: 1) {},
            strict: [Circular: *5],
            CallTracker: ƒ CallTracker(length: 0) {}
        },
        equal: [Circular: *13],
        notEqual: [Circular: *14],
        deepEqual: [Circular: *4],
        notDeepEqual: [Circular: *12],
        deepStrictEqual: [Circular: *4],
        notDeepStrictEqual: [Circular: *12],
        strictEqual: [Circular: *13],
        notStrictEqual: [Circular: *14],
        doesNotMatch: [Circular: *15],
        match: [Circular: *16],
        throws: [Circular: *17],
        rejects: [Circular: *18],
        doesNotThrow: [Circular: *19],
        doesNotReject: [Circular: *20],
        ifError: [Circular: *21],
        strict: [Circular: *5]
    },
    doesNotMatch: [Circular: *15],
    doesNotReject: [Circular: *20],
    doesNotThrow: [Circular: *19],
    equal: [Circular: *13],
    fail: [Circular: *6],
    ifError: [Circular: *21],
    match: [Circular: *16],
    notDeepEqual: [Circular: *12],
    notDeepStrictEqual: [Circular: *12],
    notEqual: [Circular: *14],
    notStrictEqual: [Circular: *14],
    ok: [Circular: *7],
    rejects: [Circular: *18],
    strict: [Circular: *5],
    strictEqual: [Circular: *13],
    throws: [Circular: *17]
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
        BLOBREADER: 6,
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
        QUIC_LOGSTREAM: 28,
        QUIC_PACKET: 29,
        SHUTDOWNWRAP: 30,
        SIGNALWRAP: 31,
        STATWATCHER: 32,
        STREAMPIPE: 33,
        TCPCONNECTWRAP: 34,
        TCPSERVERWRAP: 35,
        TCPWRAP: 36,
        TTYWRAP: 37,
        UDPSENDWRAP: 38,
        UDPWRAP: 39,
        SIGINTWATCHDOG: 40,
        WORKER: 41,
        WORKERHEAPSNAPSHOT: 42,
        WRITEWRAP: 43,
        ZLIB: 44,
        CHECKPRIMEREQUEST: 45,
        PBKDF2REQUEST: 46,
        KEYPAIRGENREQUEST: 47,
        KEYGENREQUEST: 48,
        KEYEXPORTREQUEST: 49,
        CIPHERREQUEST: 50,
        DERIVEBITSREQUEST: 51,
        HASHREQUEST: 52,
        RANDOMBYTESREQUEST: 53,
        RANDOMPRIMEREQUEST: 54,
        SCRYPTREQUEST: 55,
        SIGNREQUEST: 56,
        TLSWRAP: 57,
        VERIFYREQUEST: 58
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
    AsyncLocalStorage: <ref *2> ƒ AsyncLocalStorage(length: 0) {},
    AsyncResource: <ref *3> ƒ AsyncResource(length: 2) {},
    asyncWrapProviders: <ref *4> {
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
        Buffer: [Circular: *3],
        SlowBuffer: [Circular: *16],
        transcode: <ref *21> ƒ transcode(length: 3) {},
        isUtf8: <ref *22> ƒ isUtf8(length: 1) {},
        isAscii: <ref *23> ƒ isAscii(length: 1) {},
        kMaxLength: 4294967296,
        kStringMaxLength: 536870888,
        btoa: [Circular: *18],
        atob: [Circular: *17],
        constants: [Circular: *19],
        [get/set] INSPECT_MAX_BYTES: 50,
        Blob: [Circular: *2],
        resolveObjectURL: <ref *24> ƒ resolveObjectURL(length: 1) {},
        File: [Circular: *15]
    },
    isAscii: [Circular: *23],
    isUtf8: [Circular: *22],
    kMaxLength: 4294967296,
    kStringMaxLength: 536870888,
    resolveObjectURL: [Circular: *24],
    transcode: [Circular: *21]
}
```

</td><td valign="top">

```js
{
    Blob: <ref *2> ƒ Blob(length: 0) {},
    Buffer: <ref *3> ƒ Buffer(length: 3) {
        alloc: ƒ alloc(length: 1) {},
        allocUnsafe: ƒ allocUnsafe(length: 1) {},
        allocUnsafeSlow: ƒ allocUnsafeSlow(length: 1) {},
        byteLength: ƒ byteLength(length: 2) {},
        compare: ƒ compare(length: 2) {},
        concat: ƒ concat(length: 2) {},
        from: ƒ (length: 1) {},
        isBuffer: ƒ (length: 1) {},
        isEncoding: ƒ isEncoding(length: 1) {}
    },
    File: <ref *13> ƒ File(length: 2) {},
    INSPECT_MAX_BYTES: 50,
    SlowBuffer: <ref *14> ƒ SlowBuffer(length: 0) {},
    atob: <ref *15> ƒ atob(length: 1) {},
    btoa: <ref *16> ƒ btoa(length: 1) {},
    constants: <ref *17> {
        MAX_LENGTH: 4294967296,
        MAX_STRING_LENGTH: 4294967295
    },
    default: {
        Buffer: [Circular: *3],
        SlowBuffer: [Circular: *14],
        Blob: [Circular: *2],
        File: [Circular: *13],
        INSPECT_MAX_BYTES: 50,
        kMaxLength: 4294967296,
        kStringMaxLength: 4294967295,
        constants: [Circular: *17],
        atob: [Circular: *15],
        btoa: [Circular: *16],
        transcode: [Unexpected Error: [object Function] (type "undefined")],
        resolveObjectURL: [Unexpected Error: [object Function] (type "undefined")],
        isAscii: <ref *19> ƒ isAscii(length: 1) {},
        isUtf8: <ref *20> ƒ isUtf8(length: 1) {}
    },
    isAscii: [Circular: *19],
    isUtf8: [Circular: *20],
    kMaxLength: 4294967296,
    kStringMaxLength: 4294967295,
    resolveObjectURL: [Unexpected Error: [object Function] (type "undefined")],
    transcode: [Unexpected Error: [object Function] (type "undefined")]
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
    ChildProcess: <ref *2> ƒ ChildProcess(length: 0) {},
    default: {
        ChildProcess: [Circular: *2],
        spawn: <ref *4> ƒ spawn(length: 3) {},
        execFile: <ref *5> ƒ execFile(length: 4) {},
        exec: <ref *6> ƒ exec(length: 3) {},
        fork: <ref *7> ƒ fork(length: 1) {},
        spawnSync: <ref *8> ƒ spawnSync(length: 3) {},
        execFileSync: <ref *9> ƒ execFileSync(length: 3) {},
        execSync: <ref *10> ƒ execSync(length: 2) {}
    },
    exec: [Circular: *6],
    execFile: [Circular: *5],
    execFileSync: [Circular: *9],
    execSync: [Circular: *10],
    fork: [Circular: *7],
    spawn: [Circular: *4],
    spawnSync: [Circular: *8]
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
        Symbol(shapeMode): false,
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
EventEmitter2 {
    SCHED_NONE: 1,
    SCHED_RR: 2,
    Worker: <ref *2> ƒ Worker(length: 1) {
        prototype: EventEmitter2 {
            kill: ƒ (length: 0) {},
            send: ƒ (length: 0) {},
            isDead: ƒ (length: 0) {},
            isConnected: ƒ (length: 0) {},
            disconnect: ƒ (length: 0) {},
            destroy: ƒ (length: 1) {}
        }
    },
    _events: <ref *10> [Object: null prototype] {},
    _eventsCount: 0,
    _maxListeners: undefined,
    addListener: <ref *11> ƒ addListener(length: 2) {},
    constructor: <ref *12> ƒ EventEmitter2(length: 1) {
        prototype: EventEmitter2 {
            _events: undefined,
            _eventsCount: 0,
            _maxListeners: undefined,
            setMaxListeners: <ref *14> ƒ setMaxListeners2(length: 1) {},
            constructor: [Circular: *12],
            getMaxListeners: <ref *15> ƒ getMaxListeners2(length: 0) {},
            emit: <ref *16> ƒ emit(length: 1) {},
            addListener: [Circular: *11],
            on: [Circular: *11],
            prependListener: <ref *17> ƒ prependListener(length: 2) {},
            once: <ref *18> ƒ once2(length: 2) {},
            prependOnceListener: <ref *19> ƒ prependOnceListener(length: 2) {},
            removeListener: <ref *20> ƒ removeListener(length: 2) {},
            off: [Circular: *20],
            removeAllListeners: <ref *21> ƒ removeAllListeners(length: 1) {},
            listeners: <ref *22> ƒ listeners(length: 1) {},
            rawListeners: <ref *23> ƒ rawListeners(length: 1) {},
            listenerCount: <ref *24> ƒ listenerCount2(length: 1) {},
            eventNames: <ref *25> ƒ eventNames(length: 0) {},
            Symbol(kCapture): false
        },
        [get/set] captureRejections: false,
        [get/set] defaultMaxListeners: 10,
        once: ƒ once(length: 3) {},
        on: ƒ on(length: 2) {},
        getEventListeners: ƒ getEventListeners(length: 2) {},
        getMaxListeners: ƒ getMaxListeners(length: 1) {},
        setMaxListeners: ƒ setMaxListeners(length: 0) {},
        EventEmitter: [Circular: *12],
        usingDomains: false,
        captureRejectionSymbol: Symbol(nodejs.rejection),
        EventEmitterAsyncResource: ƒ EventEmitterAsyncResource(length: 1) {},
        errorMonitor: Symbol(events.errorMonitor),
        addAbortListener: ƒ addAbortListener(length: 2) {},
        init: [Circular: *12],
        listenerCount: ƒ listenerCount(length: 2) {}
    },
    default: EventEmitter2 {
        _events: [Circular: *10],
        _eventsCount: 0,
        _maxListeners: undefined,
        isWorker: false,
        isMaster: true,
        isPrimary: true,
        Worker: [Circular: *2],
        workers: <ref *35> {},
        settings: <ref *36> {},
        SCHED_NONE: 1,
        SCHED_RR: 2,
        schedulingPolicy: 2,
        setupPrimary: <ref *37> ƒ (length: 1) {},
        setupMaster: [Circular: *37],
        fork: <ref *38> ƒ (length: 1) {},
        disconnect: <ref *39> ƒ (length: 1) {},
        Symbol(kCapture): false
    },
    disconnect: [Circular: *39],
    emit: [Circular: *16],
    eventNames: [Circular: *25],
    fork: [Circular: *38],
    getMaxListeners: [Circular: *15],
    isMaster: true,
    isPrimary: true,
    isWorker: false,
    listenerCount: [Circular: *24],
    listeners: [Circular: *22],
    off: [Circular: *20],
    on: [Circular: *11],
    once: [Circular: *18],
    prependListener: [Circular: *17],
    prependOnceListener: [Circular: *19],
    rawListeners: [Circular: *23],
    removeAllListeners: [Circular: *21],
    removeListener: [Circular: *20],
    schedulingPolicy: 2,
    setMaxListeners: [Circular: *14],
    settings: [Circular: *36],
    setupMaster: [Circular: *37],
    setupPrimary: [Circular: *37],
    workers: [Circular: *35]
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
    createTask: <ref *8> ƒ createTask(length: 0) {},
    debug: <ref *9> ƒ debug(length: 0) {},
    default: {
        log: <ref *11> ƒ log(length: 0) {},
        warn: <ref *12> ƒ warn(length: 0) {},
        error: <ref *13> ƒ error(length: 0) {},
        dir: <ref *14> ƒ dir(length: 0) {},
        time: <ref *15> ƒ time(length: 0) {},
        timeEnd: <ref *16> ƒ timeEnd(length: 0) {},
        timeLog: <ref *17> ƒ timeLog(length: 0) {},
        trace: <ref *18> ƒ trace(length: 0) {},
        assert: [Circular: *3],
        clear: [Circular: *4],
        count: [Circular: *6],
        countReset: [Circular: *7],
        group: <ref *19> ƒ group(length: 0) {},
        groupEnd: <ref *20> ƒ groupEnd(length: 0) {},
        table: <ref *21> ƒ table(length: 0) {},
        debug: [Circular: *9],
        info: <ref *22> ƒ info(length: 0) {},
        dirxml: <ref *23> ƒ dirxml(length: 0) {},
        groupCollapsed: <ref *24> ƒ groupCollapsed(length: 0) {},
        Console: [Circular: *2],
        profile: <ref *25> ƒ profile(length: 0) {},
        profileEnd: <ref *26> ƒ profileEnd(length: 0) {},
        timeStamp: <ref *27> ƒ timeStamp(length: 0) {},
        context: [Circular: *5],
        createTask: [Circular: *8]
    },
    dir: [Circular: *14],
    dirxml: [Circular: *23],
    error: [Circular: *13],
    group: [Circular: *19],
    groupCollapsed: [Circular: *24],
    groupEnd: [Circular: *20],
    info: [Circular: *22],
    log: [Circular: *11],
    profile: [Circular: *25],
    profileEnd: [Circular: *26],
    table: [Circular: *21],
    time: [Circular: *15],
    timeEnd: [Circular: *16],
    timeLog: [Circular: *17],
    timeStamp: [Circular: *27],
    trace: [Circular: *18],
    warn: [Circular: *12]
}
```

</td><td valign="top">

```js
{
    Console: <ref *2> ƒ Console(length: 1) {
        prototype: {
            log: <ref *4> ƒ log(length: 0) {},
            warn: <ref *5> ƒ warn(length: 0) {},
            dir: ƒ dir(length: 2) {},
            time: ƒ time(length: 0) {},
            timeEnd: ƒ timeEnd(length: 0) {},
            timeLog: ƒ timeLog(length: 0) {},
            trace: ƒ trace(length: 0) {},
            assert: ƒ assert(length: 1) {},
            clear: ƒ clear(length: 0) {},
            count: ƒ count(length: 0) {},
            countReset: ƒ countReset(length: 0) {},
            group: <ref *15> ƒ group(length: 0) {},
            groupEnd: ƒ groupEnd(length: 0) {},
            table: ƒ table(length: 2) {},
            debug: [Circular: *4],
            info: [Circular: *4],
            dirxml: [Circular: *4],
            error: [Circular: *5],
            groupCollapsed: [Circular: *15]
        }
    },
    assert: <ref *18> ƒ assert(length: 0) {},
    clear: <ref *19> ƒ clear(length: 0) {},
    count: <ref *20> ƒ count(length: 0) {},
    countReset: <ref *21> ƒ countReset(length: 0) {},
    debug: <ref *22> ƒ debug(length: 0) {},
    default: {
        debug: [Circular: *22],
        error: <ref *24> ƒ error(length: 0) {},
        log: <ref *25> ƒ log(length: 0) {},
        info: <ref *26> ƒ info(length: 0) {},
        warn: <ref *27> ƒ warn(length: 0) {},
        clear: [Circular: *19],
        dir: <ref *28> ƒ dir(length: 0) {},
        dirxml: <ref *29> ƒ dirxml(length: 0) {},
        table: <ref *30> ƒ table(length: 0) {},
        trace: <ref *31> ƒ trace(length: 0) {},
        assert: [Circular: *18],
        count: [Circular: *20],
        countReset: [Circular: *21],
        profile: <ref *32> ƒ profile(length: 0) {},
        profileEnd: <ref *33> ƒ profileEnd(length: 0) {},
        time: <ref *34> ƒ time(length: 0) {},
        timeLog: <ref *35> ƒ timeLog(length: 0) {},
        timeEnd: <ref *36> ƒ timeEnd(length: 0) {},
        timeStamp: <ref *37> ƒ timeStamp(length: 0) {},
        takeHeapSnapshot: <ref *38> ƒ takeHeapSnapshot(length: 0) {},
        group: <ref *39> ƒ group(length: 0) {},
        groupCollapsed: <ref *40> ƒ groupCollapsed(length: 0) {},
        groupEnd: <ref *41> ƒ groupEnd(length: 0) {},
        record: <ref *42> ƒ record(length: 0) {},
        recordEnd: <ref *43> ƒ recordEnd(length: 0) {},
        screenshot: <ref *44> ƒ screenshot(length: 0) {},
        write: <ref *45> ƒ (length: 1) {},
        Console: [Circular: *2],
        Symbol(Symbol.asyncIterator): ƒ [Symbol.asyncIterator](length: 0) {}
    },
    dir: [Circular: *28],
    dirxml: [Circular: *29],
    error: [Circular: *24],
    group: [Circular: *39],
    groupCollapsed: [Circular: *40],
    groupEnd: [Circular: *41],
    info: [Circular: *26],
    log: [Circular: *25],
    profile: [Circular: *32],
    profileEnd: [Circular: *33],
    record: [Circular: *42],
    recordEnd: [Circular: *43],
    screenshot: [Circular: *44],
    table: [Circular: *30],
    takeHeapSnapshot: [Circular: *38],
    time: [Circular: *34],
    timeEnd: [Circular: *36],
    timeLog: [Circular: *35],
    timeStamp: [Circular: *37],
    trace: [Circular: *31],
    warn: [Circular: *27],
    write: [Circular: *45]
}
```

</td></tr></table>

## constants

<table><tr><th>Node.js</th><th>Bun</th></tr><tr><td valign="top">

```js
[Object: null prototype] {
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
    EXTENSIONLESS_FORMAT_JAVASCRIPT: 0,
    EXTENSIONLESS_FORMAT_WASM: 1,
    F_OK: 0,
    OPENSSL_VERSION_NUMBER: 805306576,
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
    SSL_OP_LEGACY_SERVER_CONNECT: 4,
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
    SSL_OP_PRIORITIZE_CHACHA: 2097152,
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
        EXTENSIONLESS_FORMAT_JAVASCRIPT: 0,
        EXTENSIONLESS_FORMAT_WASM: 1,
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
        OPENSSL_VERSION_NUMBER: 805306576,
        SSL_OP_ALL: 2147485776,
        SSL_OP_ALLOW_NO_DHE_KEX: 1024,
        SSL_OP_ALLOW_UNSAFE_LEGACY_RENEGOTIATION: 262144,
        SSL_OP_CIPHER_SERVER_PREFERENCE: 4194304,
        SSL_OP_CISCO_ANYCONNECT: 32768,
        SSL_OP_COOKIE_EXCHANGE: 8192,
        SSL_OP_CRYPTOPRO_TLSEXT_BUG: 2147483648,
        SSL_OP_DONT_INSERT_EMPTY_FRAGMENTS: 2048,
        SSL_OP_LEGACY_SERVER_CONNECT: 4,
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
        SSL_OP_PRIORITIZE_CHACHA: 2097152,
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
        POINT_CONVERSION_HYBRID: 6
    },
    defaultCoreCipherList: "TLS_AES_256_GCM_SHA384:TLS_CHACHA20_POLY1305_SHA256:TLS_AES_128_GCM_SHA256:ECDHE-RSA-AES128-GCM-SHA2…"
}
```

</td><td valign="top">

```js
{
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
    OPENSSL_VERSION_NUMBER: 269488255,
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
    SSL_OP_ALL: 0,
    SSL_OP_ALLOW_UNSAFE_LEGACY_RENEGOTIATION: 0,
    SSL_OP_CIPHER_SERVER_PREFERENCE: 4194304,
    SSL_OP_DONT_INSERT_EMPTY_FRAGMENTS: 0,
    SSL_OP_LEGACY_SERVER_CONNECT: 0,
    SSL_OP_NO_COMPRESSION: 0,
    SSL_OP_NO_QUERY_MTU: 4096,
    SSL_OP_NO_RENEGOTIATION: 0,
    SSL_OP_NO_SESSION_RESUMPTION_ON_RENEGOTIATION: 0,
    SSL_OP_NO_SSLv2: 0,
    SSL_OP_NO_SSLv3: 0,
    SSL_OP_NO_TICKET: 16384,
    SSL_OP_NO_TLSv1: 67108864,
    SSL_OP_NO_TLSv1_1: 268435456,
    SSL_OP_NO_TLSv1_2: 134217728,
    SSL_OP_NO_TLSv1_3: 536870912,
    SSL_OP_TLS_ROLLBACK_BUG: 0,
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
        OPENSSL_VERSION_NUMBER: 269488255,
        SSL_OP_ALL: 0,
        SSL_OP_ALLOW_UNSAFE_LEGACY_RENEGOTIATION: 0,
        SSL_OP_CIPHER_SERVER_PREFERENCE: 4194304,
        SSL_OP_DONT_INSERT_EMPTY_FRAGMENTS: 0,
        SSL_OP_LEGACY_SERVER_CONNECT: 0,
        SSL_OP_NO_COMPRESSION: 0,
        SSL_OP_NO_QUERY_MTU: 4096,
        SSL_OP_NO_RENEGOTIATION: 0,
        SSL_OP_NO_SESSION_RESUMPTION_ON_RENEGOTIATION: 0,
        SSL_OP_NO_SSLv2: 0,
        SSL_OP_NO_SSLv3: 0,
        SSL_OP_NO_TICKET: 16384,
        SSL_OP_NO_TLSv1: 67108864,
        SSL_OP_NO_TLSv1_1: 268435456,
        SSL_OP_NO_TLSv1_2: 134217728,
        SSL_OP_NO_TLSv1_3: 536870912,
        SSL_OP_TLS_ROLLBACK_BUG: 0,
        DH_CHECK_P_NOT_SAFE_PRIME: 2,
        DH_CHECK_P_NOT_PRIME: 1,
        DH_UNABLE_TO_CHECK_GENERATOR: 4,
        DH_NOT_SUITABLE_GENERATOR: 8,
        RSA_PKCS1_PADDING: 1,
        RSA_NO_PADDING: 3,
        RSA_PKCS1_OAEP_PADDING: 4,
        RSA_PKCS1_PSS_PADDING: 6,
        defaultCoreCipherList: "TLS_AES_256_GCM_SHA384:TLS_CHACHA20_POLY1305_SHA256:TLS_AES_128_GCM_SHA256:ECDHE-RSA-AES128-GCM-SHA2…",
        defaultCipherList: "TLS_AES_256_GCM_SHA384:TLS_CHACHA20_POLY1305_SHA256:TLS_AES_128_GCM_SHA256:ECDHE-RSA-AES128-GCM-SHA2…",
        TLS1_VERSION: 769,
        TLS1_1_VERSION: 770,
        TLS1_2_VERSION: 771,
        TLS1_3_VERSION: 772,
        POINT_CONVERSION_COMPRESSED: 2,
        POINT_CONVERSION_UNCOMPRESSED: 4,
        POINT_CONVERSION_HYBRID: 6
    },
    defaultCipherList: "TLS_AES_256_GCM_SHA384:TLS_CHACHA20_POLY1305_SHA256:TLS_AES_128_GCM_SHA256:ECDHE-RSA-AES128-GCM-SHA2…",
    defaultCoreCipherList: "TLS_AES_256_GCM_SHA384:TLS_CHACHA20_POLY1305_SHA256:TLS_AES_128_GCM_SHA256:ECDHE-RSA-AES128-GCM-SHA2…"
}
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
        OPENSSL_VERSION_NUMBER: 805306576,
        SSL_OP_ALL: 2147485776,
        SSL_OP_ALLOW_NO_DHE_KEX: 1024,
        SSL_OP_ALLOW_UNSAFE_LEGACY_RENEGOTIATION: 262144,
        SSL_OP_CIPHER_SERVER_PREFERENCE: 4194304,
        SSL_OP_CISCO_ANYCONNECT: 32768,
        SSL_OP_COOKIE_EXCHANGE: 8192,
        SSL_OP_CRYPTOPRO_TLSEXT_BUG: 2147483648,
        SSL_OP_DONT_INSERT_EMPTY_FRAGMENTS: 2048,
        SSL_OP_LEGACY_SERVER_CONNECT: 4,
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
        SSL_OP_PRIORITIZE_CHACHA: 2097152,
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
        hash: <ref *68> ƒ hash(length: 2) {},
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
        secureHeapUsed: <ref *69> ƒ secureHeapUsed(length: 0) {},
        constants: [Circular: *22],
        [get/set] webcrypto: <ref *70> Crypto {},
        [get/set] subtle: <ref *71> SubtleCrypto {},
        [get/set] getRandomValues: <ref *72> ƒ getRandomValues(length: 1) {}
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
    getRandomValues: [Circular: *72],
    hash: [Circular: *68],
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
    secureHeapUsed: [Circular: *69],
    setEngine: [Circular: *63],
    setFips: [Circular: *66],
    sign: [Circular: *62],
    subtle: [Circular: *71],
    timingSafeEqual: [Circular: *64],
    verify: [Circular: *67],
    webcrypto: [Circular: *70]
}
```

</td><td valign="top">

```js
3282 |       }, d;
3283 |     }
3284 |   }
3285 | }), require_duplex = __commonJS({
3286 |   "node_modules/readable-stream/lib/internal/streams/duplex.js"(exports, module) {
3287 |     function Duplex(options) {
                          ^
RangeError: Maximum call stack size exceeded.
      at Duplex (node:stream:3287:20)
      at Transform (node:stream:3345:23)
      at get (node:crypto:1323:12)
      at EventEmitter2 (node:events:165:684)
      at Stream (node:stream:1544:20)
      at Readable (node:stream:1796:22)
      at Duplex (node:stream:3287:20)
      at Transform (node:stream:3345:23)
      at get (node:crypto:1323:12)
      at EventEmitter2 (node:events:165:684)

Bun v1.1.27-canary.61+f123814d8 (Linux x64 baseline)
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
    Socket: <ref *2> ƒ Socket(length: 2) {
        prototype: EventEmitter2 {
            bind: ƒ (length: 2) {},
            connect: ƒ (length: 3) {},
            disconnect: ƒ (length: 0) {},
            sendto: ƒ (length: 6) {},
            send: ƒ (length: 6) {},
            close: ƒ (length: 1) {},
            address: ƒ (length: 0) {},
            remoteAddress: ƒ (length: 0) {},
            setBroadcast: ƒ (length: 1) {},
            setTTL: ƒ (length: 1) {},
            setMulticastTTL: ƒ (length: 1) {},
            setMulticastLoopback: ƒ (length: 1) {},
            setMulticastInterface: ƒ (length: 1) {},
            addMembership: ƒ (length: 2) {},
            dropMembership: ƒ (length: 2) {},
            addSourceSpecificMembership: ƒ (length: 3) {},
            dropSourceSpecificMembership: ƒ (length: 3) {},
            ref: ƒ (length: 0) {},
            unref: ƒ (length: 0) {},
            setRecvBufferSize: ƒ (length: 1) {},
            setSendBufferSize: ƒ (length: 1) {},
            getRecvBufferSize: ƒ (length: 0) {},
            getSendBufferSize: ƒ (length: 0) {},
            getSendQueueSize: ƒ (length: 0) {},
            getSendQueueCount: ƒ (length: 0) {},
            Symbol(Symbol.asyncDispose): ƒ (length: 0) {}
        }
    },
    createSocket: <ref *30> ƒ createSocket(length: 2) {},
    default: {
        createSocket: [Circular: *30],
        Socket: [Circular: *2]
    }
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
        tracingChannel: <ref *7> ƒ tracingChannel(length: 1) {},
        unsubscribe: <ref *8> ƒ unsubscribe(length: 2) {},
        Channel: [Circular: *2]
    },
    hasSubscribers: [Circular: *5],
    subscribe: [Circular: *6],
    tracingChannel: [Circular: *7],
    unsubscribe: [Circular: *8]
}
```

</td><td valign="top">

```js
{
    Channel: <ref *2> ƒ Channel(length: 1) {},
    channel: <ref *3> ƒ channel(length: 1) {},
    default: {
        channel: [Circular: *3],
        hasSubscribers: <ref *5> ƒ hasSubscribers(length: 1) {},
        subscribe: <ref *6> ƒ subscribe(length: 2) {},
        tracingChannel: <ref *7> ƒ tracingChannel(length: 1) {},
        unsubscribe: <ref *8> ƒ unsubscribe(length: 2) {},
        Channel: [Circular: *2]
    },
    hasSubscribers: [Circular: *5],
    subscribe: [Circular: *6],
    tracingChannel: [Circular: *7],
    unsubscribe: [Circular: *8]
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
        getDefaultResultOrder: <ref *6> ƒ getDefaultResultOrder(length: 0) {},
        setDefaultResultOrder: <ref *7> ƒ setDefaultResultOrder(length: 1) {},
        setServers: <ref *8> ƒ defaultResolverSetServers(length: 1) {},
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
        getServers: <ref *9> ƒ bound getServers(length: 0) {},
        resolve: <ref *10> ƒ bound resolve(length: 3) {},
        resolve4: <ref *11> ƒ bound queryA(length: 2) {},
        resolve6: <ref *12> ƒ bound queryAaaa(length: 2) {},
        resolveAny: <ref *13> ƒ bound queryAny(length: 2) {},
        resolveCaa: <ref *14> ƒ bound queryCaa(length: 2) {},
        resolveCname: <ref *15> ƒ bound queryCname(length: 2) {},
        resolveMx: <ref *16> ƒ bound queryMx(length: 2) {},
        resolveNaptr: <ref *17> ƒ bound queryNaptr(length: 2) {},
        resolveNs: <ref *18> ƒ bound queryNs(length: 2) {},
        resolvePtr: <ref *19> ƒ bound queryPtr(length: 2) {},
        resolveSoa: <ref *20> ƒ bound querySoa(length: 2) {},
        resolveSrv: <ref *21> ƒ bound querySrv(length: 2) {},
        resolveTxt: <ref *22> ƒ bound queryTxt(length: 2) {},
        reverse: <ref *23> ƒ bound getHostByAddr(length: 2) {},
        [get/set] promises: <ref *24> {
            lookup: ƒ lookup(length: 2) {},
            lookupService: ƒ lookupService(length: 2) {},
            Resolver: class Resolver extends ResolverBase {},
            getDefaultResultOrder: [Circular: *6],
            setDefaultResultOrder: [Circular: *7],
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
    getDefaultResultOrder: [Circular: *6],
    getServers: [Circular: *9],
    lookup: [Circular: *4],
    lookupService: [Circular: *5],
    promises: [Circular: *24],
    resolve: [Circular: *10],
    resolve4: [Circular: *11],
    resolve6: [Circular: *12],
    resolveAny: [Circular: *13],
    resolveCaa: [Circular: *14],
    resolveCname: [Circular: *15],
    resolveMx: [Circular: *16],
    resolveNaptr: [Circular: *17],
    resolveNs: [Circular: *18],
    resolvePtr: [Circular: *19],
    resolveSoa: [Circular: *20],
    resolveSrv: [Circular: *21],
    resolveTxt: [Circular: *22],
    reverse: [Circular: *23],
    setDefaultResultOrder: [Circular: *7],
    setServers: [Circular: *8]
}
```

</td><td valign="top">

```js
{
    ADDRCONFIG: 0,
    ADDRGETNETWORKPARAMS: "DNS_EADDRGETNETWORKPARAMS",
    ALL: 1,
    BADFAMILY: "DNS_EBADFAMILY",
    BADFLAGS: "DNS_EBADFLAGS",
    BADHINTS: "DNS_EBADHINTS",
    BADNAME: "DNS_EBADNAME",
    BADQUERY: "DNS_EBADQUERY",
    BADRESP: "DNS_EBADRESP",
    BADSTR: "DNS_EBADSTR",
    CANCELLED: "DNS_ECANCELLED",
    CONNREFUSED: "DNS_ECONNREFUSED",
    DESTRUCTION: "DNS_EDESTRUCTION",
    EOF: "DNS_EOF",
    FILE: "DNS_EFILE",
    FORMERR: "DNS_EFORMERR",
    LOADIPHLPAPI: "DNS_ELOADIPHLPAPI",
    NODATA: "DNS_ENODATA",
    NOMEM: "DNS_ENOMEM",
    NONAME: "DNS_ENONAME",
    NOTFOUND: "DNS_ENOTFOUND",
    NOTIMP: "DNS_ENOTIMP",
    NOTINITIALIZED: "DNS_ENOTINITIALIZED",
    REFUSED: "DNS_EREFUSED",
    Resolver: <ref *2> ƒ Resolver(length: 1) {
        prototype: Resolver2 {}
    },
    SERVFAIL: "DNS_ESERVFAIL",
    TIMEOUT: "DNS_ETIMEOUT",
    V4MAPPED: 2,
    default: {
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
        EOF: "DNS_EOF",
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
        lookup: <ref *5> ƒ lookup(length: 3) {
            Symbol(nodejs.util.promisify.custom): <ref *6> ƒ lookup(length: 2) {}
        },
        lookupService: <ref *7> ƒ lookupService(length: 3) {
            Symbol(nodejs.util.promisify.custom): <ref *8> ƒ lookupService(length: 2) {}
        },
        Resolver: [Circular: *2],
        setServers: <ref *9> ƒ setServers(length: 0) {},
        setDefaultResultOrder: <ref *10> ƒ setDefaultResultOrder(length: 0) {},
        resolve: <ref *11> ƒ resolve(length: 3) {
            Symbol(nodejs.util.promisify.custom): <ref *12> ƒ resolve(length: 2) {}
        },
        reverse: <ref *13> ƒ reverse(length: 2) {
            Symbol(nodejs.util.promisify.custom): <ref *14> ƒ reverse(length: 1) {}
        },
        resolve4: <ref *15> ƒ resolve4(length: 3) {
            Symbol(nodejs.util.promisify.custom): <ref *16> ƒ resolve4(length: 2) {}
        },
        resolve6: <ref *17> ƒ resolve6(length: 3) {
            Symbol(nodejs.util.promisify.custom): <ref *18> ƒ resolve6(length: 2) {}
        },
        resolveAny: <ref *19> ƒ resolveAny(length: 2) {
            Symbol(nodejs.util.promisify.custom): <ref *20> ƒ (length: 0) {}
        },
        resolveCname: <ref *21> ƒ resolveCname(length: 2) {
            Symbol(nodejs.util.promisify.custom): <ref *22> ƒ resolveCname(length: 1) {}
        },
        resolveCaa: <ref *23> ƒ resolveCaa(length: 2) {
            Symbol(nodejs.util.promisify.custom): <ref *24> ƒ resolveCaa(length: 1) {}
        },
        resolveMx: <ref *25> ƒ resolveMx(length: 2) {
            Symbol(nodejs.util.promisify.custom): <ref *26> ƒ resolveMx(length: 1) {}
        },
        resolveNs: <ref *27> ƒ resolveNs(length: 2) {
            Symbol(nodejs.util.promisify.custom): <ref *28> ƒ resolveNs(length: 1) {}
        },
        resolvePtr: <ref *29> ƒ resolvePtr(length: 2) {
            Symbol(nodejs.util.promisify.custom): <ref *30> ƒ resolvePtr(length: 1) {}
        },
        resolveSoa: <ref *31> ƒ resolveSoa(length: 2) {
            Symbol(nodejs.util.promisify.custom): <ref *32> ƒ resolveSoa(length: 1) {}
        },
        resolveSrv: <ref *33> ƒ resolveSrv(length: 2) {
            Symbol(nodejs.util.promisify.custom): <ref *34> ƒ resolveSrv(length: 1) {}
        },
        resolveTxt: <ref *35> ƒ resolveTxt(length: 2) {
            Symbol(nodejs.util.promisify.custom): <ref *36> ƒ resolveTxt(length: 1) {}
        },
        resolveNaptr: <ref *37> ƒ resolveNaptr(length: 2) {
            Symbol(nodejs.util.promisify.custom): <ref *38> ƒ resolveNaptr(length: 1) {}
        },
        promises: <ref *39> {
            lookup: [Circular: *6],
            lookupService: [Circular: *8],
            resolve: [Circular: *12],
            resolve4: [Circular: *16],
            resolve6: [Circular: *18],
            resolveSrv: [Circular: *34],
            resolveTxt: [Circular: *36],
            resolveSoa: [Circular: *32],
            resolveNaptr: [Circular: *38],
            resolveMx: [Circular: *26],
            resolveCaa: [Circular: *24],
            resolveNs: [Circular: *28],
            resolvePtr: [Circular: *30],
            resolveCname: [Circular: *22],
            reverse: [Circular: *14],
            Resolver: ƒ Resolver3(length: 1) {},
            resolveAny: [Circular: *20]
        },
        getServers: <ref *41> ƒ getServers(length: 0) {}
    },
    getServers: [Circular: *41],
    lookup: [Circular: *5],
    lookupService: [Circular: *7],
    promises: [Circular: *39],
    resolve: [Circular: *11],
    resolve4: [Circular: *15],
    resolve6: [Circular: *17],
    resolveAny: [Circular: *19],
    resolveCaa: [Circular: *23],
    resolveCname: [Circular: *21],
    resolveMx: [Circular: *25],
    resolveNaptr: [Circular: *37],
    resolveNs: [Circular: *27],
    resolvePtr: [Circular: *29],
    resolveSoa: [Circular: *31],
    resolveSrv: [Circular: *33],
    resolveTxt: [Circular: *35],
    reverse: [Circular: *13],
    setDefaultResultOrder: [Circular: *10],
    setServers: [Circular: *9]
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
        getDefaultResultOrder: <ref *6> ƒ getDefaultResultOrder(length: 0) {},
        setDefaultResultOrder: <ref *7> ƒ setDefaultResultOrder(length: 1) {},
        setServers: <ref *8> ƒ defaultResolverSetServers(length: 1) {},
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
        getServers: <ref *9> ƒ bound getServers(length: 0) {},
        resolve: <ref *10> ƒ bound resolve(length: 2) {},
        resolve4: <ref *11> ƒ bound queryA(length: 2) {},
        resolve6: <ref *12> ƒ bound queryAaaa(length: 2) {},
        resolveAny: <ref *13> ƒ bound queryAny(length: 2) {},
        resolveCaa: <ref *14> ƒ bound queryCaa(length: 2) {},
        resolveCname: <ref *15> ƒ bound queryCname(length: 2) {},
        resolveMx: <ref *16> ƒ bound queryMx(length: 2) {},
        resolveNaptr: <ref *17> ƒ bound queryNaptr(length: 2) {},
        resolveNs: <ref *18> ƒ bound queryNs(length: 2) {},
        resolvePtr: <ref *19> ƒ bound queryPtr(length: 2) {},
        resolveSoa: <ref *20> ƒ bound querySoa(length: 2) {},
        resolveSrv: <ref *21> ƒ bound querySrv(length: 2) {},
        resolveTxt: <ref *22> ƒ bound queryTxt(length: 2) {},
        reverse: <ref *23> ƒ bound getHostByAddr(length: 2) {}
    },
    getDefaultResultOrder: [Circular: *6],
    getServers: [Circular: *9],
    lookup: [Circular: *4],
    lookupService: [Circular: *5],
    resolve: [Circular: *10],
    resolve4: [Circular: *11],
    resolve6: [Circular: *12],
    resolveAny: [Circular: *13],
    resolveCaa: [Circular: *14],
    resolveCname: [Circular: *15],
    resolveMx: [Circular: *16],
    resolveNaptr: [Circular: *17],
    resolveNs: [Circular: *18],
    resolvePtr: [Circular: *19],
    resolveSoa: [Circular: *20],
    resolveSrv: [Circular: *21],
    resolveTxt: [Circular: *22],
    reverse: [Circular: *23],
    setDefaultResultOrder: [Circular: *7],
    setServers: [Circular: *8]
}
```

</td><td valign="top">

```js
{
    Resolver: <ref *2> ƒ Resolver3(length: 1) {},
    default: {
        lookup: <ref *4> ƒ lookup(length: 2) {},
        lookupService: <ref *5> ƒ lookupService(length: 2) {},
        resolve: <ref *6> ƒ resolve(length: 2) {},
        resolve4: <ref *7> ƒ resolve4(length: 2) {},
        resolve6: <ref *8> ƒ resolve6(length: 2) {},
        resolveSrv: <ref *9> ƒ resolveSrv(length: 1) {},
        resolveTxt: <ref *10> ƒ resolveTxt(length: 1) {},
        resolveSoa: <ref *11> ƒ resolveSoa(length: 1) {},
        resolveNaptr: <ref *12> ƒ resolveNaptr(length: 1) {},
        resolveMx: <ref *13> ƒ resolveMx(length: 1) {},
        resolveCaa: <ref *14> ƒ resolveCaa(length: 1) {},
        resolveNs: <ref *15> ƒ resolveNs(length: 1) {},
        resolvePtr: <ref *16> ƒ resolvePtr(length: 1) {},
        resolveCname: <ref *17> ƒ resolveCname(length: 1) {},
        reverse: <ref *18> ƒ reverse(length: 1) {},
        Resolver: [Circular: *2],
        resolveAny: <ref *19> ƒ (length: 0) {}
    },
    lookup: [Circular: *4],
    lookupService: [Circular: *5],
    resolve: [Circular: *6],
    resolve4: [Circular: *7],
    resolve6: [Circular: *8],
    resolveAny: [Circular: *19],
    resolveCaa: [Circular: *14],
    resolveCname: [Circular: *17],
    resolveMx: [Circular: *13],
    resolveNaptr: [Circular: *12],
    resolveNs: [Circular: *15],
    resolvePtr: [Circular: *16],
    resolveSoa: [Circular: *11],
    resolveSrv: [Circular: *9],
    resolveTxt: [Circular: *10],
    reverse: [Circular: *18]
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
{
    create: <ref *2> ƒ (length: 0) {},
    createDomain: [Circular: *2],
    default: {
        create: [Circular: *2],
        createDomain: [Circular: *2]
    }
}
```

</td></tr></table>

## events

<table><tr><th>Node.js</th><th>Bun</th></tr><tr><td valign="top">

```js
[Object: null prototype] {
    EventEmitter: <ref *2> ƒ EventEmitter(length: 1) {
        addAbortListener: <ref *3> ƒ addAbortListener(length: 2) {},
        once: <ref *4> async ƒ once(length: 2) {},
        on: <ref *5> ƒ on(length: 2) {},
        getEventListeners: <ref *6> ƒ getEventListeners(length: 2) {},
        getMaxListeners: <ref *7> ƒ getMaxListeners(length: 1) {},
        EventEmitter: [Circular: *2],
        usingDomains: false,
        captureRejectionSymbol: Symbol(nodejs.rejection),
        [get/set] captureRejections: false,
        [get/set] EventEmitterAsyncResource: <ref *8> class EventEmitterAsyncResource extends EventEmitter {},
        errorMonitor: Symbol(events.errorMonitor),
        [get/set] defaultMaxListeners: 10,
        setMaxListeners: <ref *9> ƒ (length: 0) {},
        init: <ref *10> ƒ (length: 1) {},
        listenerCount: <ref *11> ƒ (length: 2) {}
    },
    EventEmitterAsyncResource: [Circular: *8],
    addAbortListener: [Circular: *3],
    captureRejectionSymbol: Symbol(nodejs.rejection),
    captureRejections: false,
    default: [Circular: *2],
    defaultMaxListeners: 10,
    errorMonitor: Symbol(events.errorMonitor),
    getEventListeners: [Circular: *6],
    getMaxListeners: [Circular: *7],
    init: [Circular: *10],
    listenerCount: [Circular: *11],
    on: [Circular: *5],
    once: [Circular: *4],
    setMaxListeners: [Circular: *9],
    usingDomains: false
}
```

</td><td valign="top">

```js
{
    EventEmitter: <ref *2> ƒ EventEmitter2(length: 1) {
        prototype: <ref *3> EventEmitter2 {
            _events: undefined,
            _eventsCount: 0,
            _maxListeners: undefined,
            setMaxListeners: ƒ setMaxListeners2(length: 1) {},
            constructor: [Circular: *2],
            getMaxListeners: ƒ getMaxListeners2(length: 0) {},
            emit: ƒ emit(length: 1) {},
            addListener: <ref *7> ƒ addListener(length: 2) {},
            on: [Circular: *7],
            prependListener: ƒ prependListener(length: 2) {},
            once: ƒ once2(length: 2) {},
            prependOnceListener: ƒ prependOnceListener(length: 2) {},
            removeListener: <ref *11> ƒ removeListener(length: 2) {},
            off: [Circular: *11],
            removeAllListeners: ƒ removeAllListeners(length: 1) {},
            listeners: ƒ listeners(length: 1) {},
            rawListeners: ƒ rawListeners(length: 1) {},
            listenerCount: ƒ listenerCount2(length: 1) {},
            eventNames: ƒ eventNames(length: 0) {},
            Symbol(kCapture): false
        },
        [get/set] captureRejections: false,
        [get/set] defaultMaxListeners: 10,
        once: <ref *17> ƒ once(length: 3) {},
        on: <ref *18> ƒ on(length: 2) {},
        getEventListeners: <ref *19> ƒ getEventListeners(length: 2) {},
        getMaxListeners: <ref *20> ƒ getMaxListeners(length: 1) {},
        setMaxListeners: <ref *21> ƒ setMaxListeners(length: 0) {},
        EventEmitter: [Circular: *2],
        usingDomains: false,
        captureRejectionSymbol: Symbol(nodejs.rejection),
        EventEmitterAsyncResource: <ref *22> ƒ EventEmitterAsyncResource(length: 1) {},
        errorMonitor: Symbol(events.errorMonitor),
        addAbortListener: <ref *23> ƒ addAbortListener(length: 2) {},
        init: [Circular: *2],
        listenerCount: <ref *24> ƒ listenerCount(length: 2) {}
    },
    EventEmitterAsyncResource: [Circular: *22],
    addAbortListener: [Circular: *23],
    captureRejectionSymbol: Symbol(nodejs.rejection),
    captureRejections: false,
    default: [Circular: *2],
    defaultMaxListeners: 10,
    errorMonitor: Symbol(events.errorMonitor),
    getEventListeners: [Circular: *19],
    getMaxListeners: [Circular: *20],
    init: [Circular: *2],
    listenerCount: [Circular: *24],
    on: [Circular: *18],
    once: [Circular: *17],
    prototype: [Circular: *3],
    setMaxListeners: [Circular: *21],
    usingDomains: false
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
        EXTENSIONLESS_FORMAT_JAVASCRIPT: 0,
        EXTENSIONLESS_FORMAT_WASM: 1,
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
        openAsBlob: <ref *56> ƒ openAsBlob(length: 1) {},
        readdir: <ref *57> ƒ readdir(length: 3) {},
        readdirSync: <ref *58> ƒ readdirSync(length: 2) {},
        read: <ref *59> ƒ read(length: 6) {},
        readSync: <ref *60> ƒ readSync(length: 5) {},
        readv: <ref *61> ƒ readv(length: 4) {},
        readvSync: <ref *62> ƒ readvSync(length: 3) {},
        readFile: <ref *63> ƒ readFile(length: 3) {},
        readFileSync: <ref *64> ƒ readFileSync(length: 2) {},
        readlink: <ref *65> ƒ readlink(length: 3) {},
        readlinkSync: <ref *66> ƒ readlinkSync(length: 2) {},
        realpath: <ref *67> ƒ realpath(length: 3) {
            native: ƒ (length: 3) {}
        },
        realpathSync: <ref *69> ƒ realpathSync(length: 2) {
            native: ƒ (length: 2) {}
        },
        rename: <ref *71> ƒ rename(length: 3) {},
        renameSync: <ref *72> ƒ renameSync(length: 2) {},
        rm: <ref *73> ƒ rm(length: 3) {},
        rmSync: <ref *74> ƒ rmSync(length: 2) {},
        rmdir: <ref *75> ƒ rmdir(length: 3) {},
        rmdirSync: <ref *76> ƒ rmdirSync(length: 2) {},
        stat: <ref *77> ƒ stat(length: 1) {},
        statfs: <ref *78> ƒ statfs(length: 1) {},
        statSync: <ref *79> ƒ statSync(length: 1) {},
        statfsSync: <ref *80> ƒ statfsSync(length: 1) {},
        symlink: <ref *81> ƒ symlink(length: 4) {},
        symlinkSync: <ref *82> ƒ symlinkSync(length: 3) {},
        truncate: <ref *83> ƒ truncate(length: 3) {},
        truncateSync: <ref *84> ƒ truncateSync(length: 2) {},
        unwatchFile: <ref *85> ƒ unwatchFile(length: 2) {},
        unlink: <ref *86> ƒ unlink(length: 2) {},
        unlinkSync: <ref *87> ƒ unlinkSync(length: 1) {},
        utimes: <ref *88> ƒ utimes(length: 4) {},
        utimesSync: <ref *89> ƒ utimesSync(length: 3) {},
        watch: <ref *90> ƒ watch(length: 3) {},
        watchFile: <ref *91> ƒ watchFile(length: 3) {},
        writeFile: <ref *92> ƒ writeFile(length: 4) {},
        writeFileSync: <ref *93> ƒ writeFileSync(length: 3) {},
        write: <ref *94> ƒ write(length: 6) {},
        writeSync: <ref *95> ƒ writeSync(length: 5) {},
        writev: <ref *96> ƒ writev(length: 4) {},
        writevSync: <ref *97> ƒ writevSync(length: 3) {},
        Dirent: [Circular: *3],
        Stats: [Circular: *6],
        [get/set] ReadStream: [Circular: *4],
        [get/set] WriteStream: [Circular: *5],
        [get/set] FileReadStream: [Circular: *4],
        [get/set] FileWriteStream: [Circular: *5],
        _toUnixTimestamp: [Circular: *7],
        Dir: [Circular: *2],
        opendir: <ref *98> ƒ opendir(length: 3) {},
        opendirSync: <ref *99> ƒ opendirSync(length: 2) {},
        F_OK: 0,
        R_OK: 4,
        W_OK: 2,
        X_OK: 1,
        constants: [Circular: *18],
        [get/set] promises: <ref *100> {
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
            watch: async ƒ _watch(length: 1) {},
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
    openAsBlob: [Circular: *56],
    openSync: [Circular: *55],
    opendir: [Circular: *98],
    opendirSync: [Circular: *99],
    promises: [Circular: *100],
    read: [Circular: *59],
    readFile: [Circular: *63],
    readFileSync: [Circular: *64],
    readSync: [Circular: *60],
    readdir: [Circular: *57],
    readdirSync: [Circular: *58],
    readlink: [Circular: *65],
    readlinkSync: [Circular: *66],
    readv: [Circular: *61],
    readvSync: [Circular: *62],
    realpath: [Circular: *67],
    realpathSync: [Circular: *69],
    rename: [Circular: *71],
    renameSync: [Circular: *72],
    rm: [Circular: *73],
    rmSync: [Circular: *74],
    rmdir: [Circular: *75],
    rmdirSync: [Circular: *76],
    stat: [Circular: *77],
    statSync: [Circular: *79],
    statfs: [Circular: *78],
    statfsSync: [Circular: *80],
    symlink: [Circular: *81],
    symlinkSync: [Circular: *82],
    truncate: [Circular: *83],
    truncateSync: [Circular: *84],
    unlink: [Circular: *86],
    unlinkSync: [Circular: *87],
    unwatchFile: [Circular: *85],
    utimes: [Circular: *88],
    utimesSync: [Circular: *89],
    watch: [Circular: *90],
    watchFile: [Circular: *91],
    write: [Circular: *94],
    writeFile: [Circular: *92],
    writeFileSync: [Circular: *93],
    writeSync: [Circular: *95],
    writev: [Circular: *96],
    writevSync: [Circular: *97]
}
```

</td><td valign="top">

```js
{
    Dirent: <ref *2> ƒ Dirent(length: 0) {},
    FSWatcher: <ref *3> ƒ FSWatcher(length: 3) {},
    F_OK: 0,
    R_OK: 4,
    ReadStream: <ref *4> ƒ ReadStream(length: 2) {
        prototype: Readable {
            _construct: ƒ (length: 1) {},
            _destroy: ƒ (length: 2) {},
            close: ƒ (length: 1) {},
            push: ƒ (length: 1) {},
            pause: ƒ (length: 0) {},
            resume: ƒ (length: 0) {},
            unshift: ƒ (length: 0) {},
            pipe: ƒ (length: 2) {},
            Symbol(kinternalRead): ƒ (length: 1) {},
            Symbol(kerrorOrDestroy): ƒ (length: 1) {}
        }
    },
    Stats: <ref *16> ƒ Stats(length: 0) {},
    W_OK: 2,
    WriteStream: <ref *17> ƒ WriteStream(length: 1) {
        prototype: Writable {
            destroySoon: ƒ end(length: 4) {},
            open: ƒ open3(length: 0) {},
            isBunFastPathEnabled: ƒ isBunFastPathEnabled(length: 0) {},
            disableBunFastPath: ƒ disableBunFastPath(length: 0) {},
            _construct: ƒ _construct(length: 1) {},
            _destroy: ƒ _destroy(length: 2) {},
            close: ƒ close3(length: 1) {},
            write: ƒ write3(length: 3) {},
            _write: undefined,
            _writev: undefined,
            end: ƒ end(length: 3) {},
            Symbol(Bun.NodeWriteStreamFastPathCall): ƒ WriteStreamPathFastPathCallSymbol(length: 2) {}
        }
    },
    X_OK: 1,
    _toUnixTimestamp: <ref *29> ƒ _toUnixTimestamp(length: 1) {},
    access: <ref *30> ƒ access(length: 3) {},
    accessSync: <ref *31> ƒ accessSync(length: 2) {},
    appendFile: <ref *32> ƒ appendFile(length: 4) {},
    appendFileSync: <ref *33> ƒ appendFileSync(length: 3) {},
    chmod: <ref *34> ƒ chmod(length: 3) {},
    chmodSync: <ref *35> ƒ chmodSync(length: 2) {},
    chown: <ref *36> ƒ chown(length: 4) {},
    chownSync: <ref *37> ƒ chownSync(length: 3) {},
    close: <ref *38> ƒ close(length: 2) {},
    closeSync: <ref *39> ƒ closeSync(length: 1) {},
    constants: <ref *40> {
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
    copyFile: <ref *41> ƒ copyFile(length: 4) {},
    copyFileSync: <ref *42> ƒ copyFileSync(length: 3) {},
    cp: <ref *43> ƒ cp(length: 4) {},
    cpSync: <ref *44> ƒ cpSync(length: 3) {},
    createReadStream: <ref *45> ƒ createReadStream(length: 2) {},
    createWriteStream: <ref *46> ƒ createWriteStream(length: 2) {},
    default: {
        Dirent: [Circular: *2],
        FSWatcher: [Circular: *3],
        ReadStream: [Circular: *4],
        Stats: [Circular: *16],
        WriteStream: [Circular: *17],
        _toUnixTimestamp: [Circular: *29],
        access: [Circular: *30],
        accessSync: [Circular: *31],
        appendFile: [Circular: *32],
        appendFileSync: [Circular: *33],
        chmod: [Circular: *34],
        chmodSync: [Circular: *35],
        chown: [Circular: *36],
        chownSync: [Circular: *37],
        close: [Circular: *38],
        closeSync: [Circular: *39],
        constants: [Circular: *40],
        copyFile: [Circular: *41],
        copyFileSync: [Circular: *42],
        cp: [Circular: *43],
        cpSync: [Circular: *44],
        createReadStream: [Circular: *45],
        createWriteStream: [Circular: *46],
        exists: <ref *48> ƒ exists(length: 2) {
            Symbol(nodejs.util.promisify.custom): ƒ (length: 1) {}
        },
        existsSync: <ref *50> ƒ existsSync(length: 0) {},
        fchmod: <ref *51> ƒ fchmod(length: 3) {},
        fchmodSync: <ref *52> ƒ fchmodSync(length: 2) {},
        fchown: <ref *53> ƒ fchown(length: 4) {},
        fchownSync: <ref *54> ƒ fchownSync(length: 3) {},
        fstat: <ref *55> ƒ fstat(length: 3) {},
        fstatSync: <ref *56> ƒ fstatSync(length: 1) {},
        fsync: <ref *57> ƒ fsync(length: 2) {},
        fsyncSync: <ref *58> ƒ fsyncSync(length: 1) {},
        ftruncate: <ref *59> ƒ ftruncate(length: 3) {},
        ftruncateSync: <ref *60> ƒ ftruncateSync(length: 1) {},
        futimes: <ref *61> ƒ futimes(length: 4) {},
        futimesSync: <ref *62> ƒ futimesSync(length: 3) {},
        lchmod: <ref *63> ƒ lchmod(length: 3) {},
        lchmodSync: <ref *64> ƒ lchmodSync(length: 2) {},
        lchown: <ref *65> ƒ lchown(length: 4) {},
        lchownSync: <ref *66> ƒ lchownSync(length: 3) {},
        link: <ref *67> ƒ link(length: 3) {},
        linkSync: <ref *68> ƒ linkSync(length: 2) {},
        lstat: <ref *69> ƒ lstat(length: 3) {},
        lstatSync: <ref *70> ƒ lstatSync(length: 1) {},
        lutimes: <ref *71> ƒ lutimes(length: 4) {},
        lutimesSync: <ref *72> ƒ lutimesSync(length: 3) {},
        mkdir: <ref *73> ƒ mkdir(length: 3) {},
        mkdirSync: <ref *74> ƒ mkdirSync(length: 2) {},
        mkdtemp: <ref *75> ƒ mkdtemp(length: 3) {},
        mkdtempSync: <ref *76> ƒ mkdtempSync(length: 2) {},
        open: <ref *77> ƒ open(length: 4) {},
        openSync: <ref *78> ƒ openSync(length: 3) {},
        promises: <ref *79> {
            access: ƒ bound access(length: 3) {},
            appendFile: ƒ appendFile(length: 1) {},
            close: ƒ bound close(length: 1) {},
            copyFile: ƒ bound copyFile(length: 4) {},
            cp: ƒ cp(length: 3) {},
            exists: ƒ exists(length: 0) {},
            chown: ƒ bound chown(length: 4) {},
            chmod: ƒ bound chmod(length: 3) {},
            fchmod: ƒ bound fchmod(length: 3) {},
            fchown: ƒ bound fchown(length: 4) {},
            fstat: ƒ bound fstat(length: 1) {},
            fsync: ƒ bound fsync(length: 2) {},
            fdatasync: ƒ bound fdatasync(length: 2) {},
            ftruncate: ƒ bound ftruncate(length: 1) {},
            futimes: ƒ bound futimes(length: 4) {},
            lchmod: ƒ bound lchmod(length: 3) {},
            lchown: ƒ bound lchown(length: 4) {},
            link: ƒ bound link(length: 3) {},
            lstat: ƒ bound lstat(length: 1) {},
            mkdir: ƒ bound mkdir(length: 3) {},
            mkdtemp: ƒ bound mkdtemp(length: 3) {},
            open: ƒ open(length: 1) {},
            read: ƒ bound read(length: 6) {},
            write: ƒ bound write(length: 6) {},
            readdir: ƒ bound readdir(length: 3) {},
            readFile: ƒ readFile(length: 1) {},
            writeFile: ƒ writeFile(length: 1) {},
            readlink: ƒ bound readlink(length: 3) {},
            realpath: ƒ bound realpath(length: 3) {},
            rename: ƒ bound rename(length: 3) {},
            stat: ƒ bound stat(length: 1) {},
            symlink: ƒ bound symlink(length: 4) {},
            truncate: ƒ bound truncate(length: 3) {},
            unlink: ƒ bound unlink(length: 2) {},
            utimes: ƒ bound utimes(length: 4) {},
            lutimes: ƒ bound lutimes(length: 4) {},
            rm: ƒ bound rm(length: 3) {},
            rmdir: ƒ bound rmdir(length: 3) {},
            writev: ƒ writev(length: 3) {},
            readv: ƒ readv(length: 3) {},
            constants: [Circular: *40],
            watch: ƒ watch(length: 1) {},
            opendir: ƒ opendir(length: 1) {}
        },
        read: <ref *122> ƒ read(length: 6) {
            Symbol(nodejs.util.promisify.custom): ƒ (length: 2) {}
        },
        readFile: <ref *124> ƒ readFile(length: 3) {},
        readFileSync: <ref *125> ƒ readFileSync(length: 2) {},
        readSync: <ref *126> ƒ readSync(length: 5) {},
        readdir: <ref *127> ƒ readdir(length: 3) {},
        readdirSync: <ref *128> ƒ readdirSync(length: 2) {},
        readlink: <ref *129> ƒ readlink(length: 3) {},
        readlinkSync: <ref *130> ƒ readlinkSync(length: 2) {},
        readv: <ref *131> ƒ readv(length: 4) {},
        readvSync: <ref *132> ƒ readvSync(length: 3) {},
        realpath: <ref *133> ƒ realpath(length: 3) {
            native: [Circular: *133]
        },
        realpathSync: <ref *134> ƒ realpathSync(length: 2) {
            native: [Circular: *134]
        },
        rename: <ref *135> ƒ rename(length: 3) {},
        renameSync: <ref *136> ƒ renameSync(length: 2) {},
        rm: <ref *137> ƒ rm(length: 3) {},
        rmSync: <ref *138> ƒ rmSync(length: 2) {},
        rmdir: <ref *139> ƒ rmdir(length: 3) {},
        rmdirSync: <ref *140> ƒ rmdirSync(length: 2) {},
        stat: <ref *141> ƒ stat(length: 3) {},
        statSync: <ref *142> ƒ statSync(length: 1) {},
        symlink: <ref *143> ƒ symlink(length: 4) {},
        symlinkSync: <ref *144> ƒ symlinkSync(length: 3) {},
        truncate: <ref *145> ƒ truncate(length: 3) {},
        truncateSync: <ref *146> ƒ truncateSync(length: 2) {},
        unlink: <ref *147> ƒ unlink(length: 2) {},
        unlinkSync: <ref *148> ƒ unlinkSync(length: 1) {},
        unwatchFile: <ref *149> ƒ unwatchFile(length: 2) {},
        utimes: <ref *150> ƒ utimes(length: 4) {},
        utimesSync: <ref *151> ƒ utimesSync(length: 3) {},
        watch: <ref *152> ƒ watch(length: 3) {},
        watchFile: <ref *153> ƒ watchFile(length: 3) {},
        write: <ref *154> ƒ write(length: 6) {
            Symbol(nodejs.util.promisify.custom): ƒ (length: 2) {}
        },
        writeFile: <ref *156> ƒ writeFile(length: 4) {},
        writeFileSync: <ref *157> ƒ writeFileSync(length: 3) {},
        writeSync: <ref *158> ƒ writeSync(length: 5) {},
        writev: <ref *159> ƒ writev(length: 4) {},
        writevSync: <ref *160> ƒ writevSync(length: 3) {},
        fdatasync: <ref *161> ƒ fdatasync(length: 2) {},
        fdatasyncSync: <ref *162> ƒ fdatasyncSync(length: 1) {},
        openAsBlob: <ref *163> ƒ openAsBlob(length: 2) {},
        opendir: <ref *164> ƒ opendir(length: 3) {},
        F_OK: 0,
        R_OK: 4,
        W_OK: 2,
        X_OK: 1,
        Symbol(::bunternal::): {
            WriteStreamClass: [Circular: *17]
        }
    },
    exists: [Circular: *48],
    existsSync: [Circular: *50],
    fchmod: [Circular: *51],
    fchmodSync: [Circular: *52],
    fchown: [Circular: *53],
    fchownSync: [Circular: *54],
    fdatasync: [Circular: *161],
    fdatasyncSync: [Circular: *162],
    fstat: [Circular: *55],
    fstatSync: [Circular: *56],
    fsync: [Circular: *57],
    fsyncSync: [Circular: *58],
    ftruncate: [Circular: *59],
    ftruncateSync: [Circular: *60],
    futimes: [Circular: *61],
    futimesSync: [Circular: *62],
    lchmod: [Circular: *63],
    lchmodSync: [Circular: *64],
    lchown: [Circular: *65],
    lchownSync: [Circular: *66],
    link: [Circular: *67],
    linkSync: [Circular: *68],
    lstat: [Circular: *69],
    lstatSync: [Circular: *70],
    lutimes: [Circular: *71],
    lutimesSync: [Circular: *72],
    mkdir: [Circular: *73],
    mkdirSync: [Circular: *74],
    mkdtemp: [Circular: *75],
    mkdtempSync: [Circular: *76],
    open: [Circular: *77],
    openAsBlob: [Circular: *163],
    openSync: [Circular: *78],
    opendir: [Circular: *164],
    promises: [Circular: *79],
    read: [Circular: *122],
    readFile: [Circular: *124],
    readFileSync: [Circular: *125],
    readSync: [Circular: *126],
    readdir: [Circular: *127],
    readdirSync: [Circular: *128],
    readlink: [Circular: *129],
    readlinkSync: [Circular: *130],
    readv: [Circular: *131],
    readvSync: [Circular: *132],
    realpath: [Circular: *133],
    realpathSync: [Circular: *134],
    rename: [Circular: *135],
    renameSync: [Circular: *136],
    rm: [Circular: *137],
    rmSync: [Circular: *138],
    rmdir: [Circular: *139],
    rmdirSync: [Circular: *140],
    stat: [Circular: *141],
    statSync: [Circular: *142],
    symlink: [Circular: *143],
    symlinkSync: [Circular: *144],
    truncate: [Circular: *145],
    truncateSync: [Circular: *146],
    unlink: [Circular: *147],
    unlinkSync: [Circular: *148],
    unwatchFile: [Circular: *149],
    utimes: [Circular: *150],
    utimesSync: [Circular: *151],
    watch: [Circular: *152],
    watchFile: [Circular: *153],
    write: [Circular: *154],
    writeFile: [Circular: *156],
    writeFileSync: [Circular: *157],
    writeSync: [Circular: *158],
    writev: [Circular: *159],
    writevSync: [Circular: *160]
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
        EXTENSIONLESS_FORMAT_JAVASCRIPT: 0,
        EXTENSIONLESS_FORMAT_WASM: 1,
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
        watch: <ref *33> async ƒ _watch(length: 1) {},
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
    access: <ref *2> ƒ bound access(length: 3) {},
    appendFile: <ref *3> ƒ appendFile(length: 1) {},
    chmod: <ref *4> ƒ bound chmod(length: 3) {},
    chown: <ref *5> ƒ bound chown(length: 4) {},
    close: <ref *6> ƒ bound close(length: 1) {},
    constants: <ref *7> {
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
    copyFile: <ref *8> ƒ bound copyFile(length: 4) {},
    cp: <ref *9> ƒ cp(length: 3) {},
    default: {
        access: [Circular: *2],
        appendFile: [Circular: *3],
        close: [Circular: *6],
        copyFile: [Circular: *8],
        cp: [Circular: *9],
        exists: <ref *11> ƒ exists(length: 0) {},
        chown: [Circular: *5],
        chmod: [Circular: *4],
        fchmod: <ref *12> ƒ bound fchmod(length: 3) {},
        fchown: <ref *13> ƒ bound fchown(length: 4) {},
        fstat: <ref *14> ƒ bound fstat(length: 1) {},
        fsync: <ref *15> ƒ bound fsync(length: 2) {},
        fdatasync: <ref *16> ƒ bound fdatasync(length: 2) {},
        ftruncate: <ref *17> ƒ bound ftruncate(length: 1) {},
        futimes: <ref *18> ƒ bound futimes(length: 4) {},
        lchmod: <ref *19> ƒ bound lchmod(length: 3) {},
        lchown: <ref *20> ƒ bound lchown(length: 4) {},
        link: <ref *21> ƒ bound link(length: 3) {},
        lstat: <ref *22> ƒ bound lstat(length: 1) {},
        mkdir: <ref *23> ƒ bound mkdir(length: 3) {},
        mkdtemp: <ref *24> ƒ bound mkdtemp(length: 3) {},
        open: <ref *25> ƒ open(length: 1) {},
        read: <ref *26> ƒ bound read(length: 6) {},
        write: <ref *27> ƒ bound write(length: 6) {},
        readdir: <ref *28> ƒ bound readdir(length: 3) {},
        readFile: <ref *29> ƒ readFile(length: 1) {},
        writeFile: <ref *30> ƒ writeFile(length: 1) {},
        readlink: <ref *31> ƒ bound readlink(length: 3) {},
        realpath: <ref *32> ƒ bound realpath(length: 3) {},
        rename: <ref *33> ƒ bound rename(length: 3) {},
        stat: <ref *34> ƒ bound stat(length: 1) {},
        symlink: <ref *35> ƒ bound symlink(length: 4) {},
        truncate: <ref *36> ƒ bound truncate(length: 3) {},
        unlink: <ref *37> ƒ bound unlink(length: 2) {},
        utimes: <ref *38> ƒ bound utimes(length: 4) {},
        lutimes: <ref *39> ƒ bound lutimes(length: 4) {},
        rm: <ref *40> ƒ bound rm(length: 3) {},
        rmdir: <ref *41> ƒ bound rmdir(length: 3) {},
        writev: <ref *42> ƒ writev(length: 3) {},
        readv: <ref *43> ƒ readv(length: 3) {},
        constants: [Circular: *7],
        watch: <ref *44> ƒ watch(length: 1) {},
        opendir: <ref *45> ƒ opendir(length: 1) {}
    },
    exists: [Circular: *11],
    fchmod: [Circular: *12],
    fchown: [Circular: *13],
    fdatasync: [Circular: *16],
    fstat: [Circular: *14],
    fsync: [Circular: *15],
    ftruncate: [Circular: *17],
    futimes: [Circular: *18],
    lchmod: [Circular: *19],
    lchown: [Circular: *20],
    link: [Circular: *21],
    lstat: [Circular: *22],
    lutimes: [Circular: *39],
    mkdir: [Circular: *23],
    mkdtemp: [Circular: *24],
    open: [Circular: *25],
    opendir: [Circular: *45],
    read: [Circular: *26],
    readFile: [Circular: *29],
    readdir: [Circular: *28],
    readlink: [Circular: *31],
    readv: [Circular: *43],
    realpath: [Circular: *32],
    rename: [Circular: *33],
    rm: [Circular: *40],
    rmdir: [Circular: *41],
    stat: [Circular: *34],
    symlink: [Circular: *35],
    truncate: [Circular: *36],
    unlink: [Circular: *37],
    utimes: [Circular: *38],
    watch: [Circular: *44],
    write: [Circular: *27],
    writeFile: [Circular: *30],
    writev: [Circular: *42]
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
    OutgoingMessage: <ref *6> ƒ OutgoingMessage(length: 1) {},
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
    ServerResponse: <ref *9> ƒ ServerResponse(length: 2) {},
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
        validateHeaderName: <ref *13> ƒ wrappedFn(length: 0) {
            withoutStackTrace: ƒ (length: 2) {}
        },
        validateHeaderValue: <ref *15> ƒ wrappedFn(length: 0) {
            withoutStackTrace: ƒ (length: 2) {}
        },
        get: <ref *17> ƒ get(length: 3) {},
        request: <ref *18> ƒ request(length: 3) {},
        setMaxIdleHTTPParsers: <ref *19> ƒ setMaxIdleHTTPParsers(length: 1) {},
        [get/set] maxHeaderSize: 16384,
        [get/set] globalAgent: <ref *20> Agent {
            _events: [Object: null prototype] {
                free: ƒ (length: 2) {},
                newListener: ƒ maybeEnableKeylog(length: 1) {}
            },
            _eventsCount: 2,
            _maxListeners: undefined,
            defaultPort: 80,
            protocol: "http:",
            options: [Object: null prototype] {
                keepAlive: true,
                scheduling: "lifo",
                timeout: 5000,
                noDelay: true,
                path: null
            },
            requests: [Object: null prototype] {},
            sockets: [Object: null prototype] {},
            freeSockets: [Object: null prototype] {},
            keepAliveMsecs: 1000,
            keepAlive: true,
            maxSockets: Infinity,
            maxFreeSockets: 256,
            scheduling: "lifo",
            maxTotalSockets: Infinity,
            totalSocketCount: 0,
            Symbol(shapeMode): false,
            Symbol(kCapture): false
        }
    },
    get: [Circular: *17],
    globalAgent: [Circular: *20],
    maxHeaderSize: 16384,
    request: [Circular: *18],
    setMaxIdleHTTPParsers: [Circular: *19],
    validateHeaderName: [Circular: *13],
    validateHeaderValue: [Circular: *15]
}
```

</td><td valign="top">

```js
90 | 					}
91 | 					if ('set' in descriptor) {
92 | 						getSet.push('set');
93 | 					}
94 | 
95 | 					const propertyValue = value[key];
                                ^
TypeError: undefined is not an object
      at node:http:629:17
      at /tmp/fs-fixture-1725236100683-1/inspect.mjs:95:28
      at map (1:11)
      at inspect (/tmp/fs-fixture-1725236100683-1/inspect.mjs:80:43)
      at /tmp/fs-fixture-1725236100683-1/inspect.mjs:99:7
      at map (1:11)
      at inspect (/tmp/fs-fixture-1725236100683-1/inspect.mjs:80:43)
      at /tmp/fs-fixture-1725236100683-1/inspect.mjs:99:7
      at map (1:11)
      at inspect (/tmp/fs-fixture-1725236100683-1/inspect.mjs:80:43)

Bun v1.1.27-canary.61+f123814d8 (Linux x64 baseline)
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
        performServerHandshake: <ref *12> ƒ performServerHandshake(length: 1) {},
        sensitiveHeaders: Symbol(sensitiveHeaders),
        Http2ServerRequest: [Circular: *2],
        Http2ServerResponse: [Circular: *3]
    },
    getDefaultSettings: [Circular: *9],
    getPackedSettings: [Circular: *10],
    getUnpackedSettings: [Circular: *11],
    performServerHandshake: [Circular: *12],
    sensitiveHeaders: Symbol(sensitiveHeaders)
}
```

</td><td valign="top">

```js
{
    ClientHttp2Session: <ref *2> ƒ ClientHttp2Session(length: 3) {},
    Http2ServerRequest: <ref *3> ƒ Http2ServerRequest(length: 0) {
        prototype: {}
    },
    Http2ServerResponse: <ref *5> ƒ Http2ServerResponse(length: 0) {
        prototype: {}
    },
    connect: <ref *7> ƒ connect(length: 3) {},
    constants: <ref *8> {
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
    createSecureServer: <ref *9> ƒ createSecureServer(length: 0) {},
    createServer: <ref *10> ƒ createServer(length: 0) {},
    default: {
        constants: [Circular: *8],
        createServer: [Circular: *10],
        createSecureServer: [Circular: *9],
        getDefaultSettings: <ref *12> ƒ getDefaultSettings(length: 0) {},
        getPackedSettings: <ref *13> ƒ getPackedSettings(length: 0) {},
        getUnpackedSettings: <ref *14> ƒ getUnpackedSettings(length: 0) {},
        sensitiveHeaders: Symbol(nodejs.http2.sensitiveHeaders),
        Http2ServerRequest: [Circular: *3],
        Http2ServerResponse: [Circular: *5],
        connect: [Circular: *7],
        ClientHttp2Session: [Circular: *2]
    },
    getDefaultSettings: [Circular: *12],
    getPackedSettings: [Circular: *13],
    getUnpackedSettings: [Circular: *14],
    sensitiveHeaders: Symbol(nodejs.http2.sensitiveHeaders)
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
                keepAlive: true,
                scheduling: "lifo",
                timeout: 5000,
                noDelay: true,
                path: null
            },
            requests: [Object: null prototype] {},
            sockets: [Object: null prototype] {},
            freeSockets: [Object: null prototype] {},
            keepAliveMsecs: 1000,
            keepAlive: true,
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
            Symbol(shapeMode): false,
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
90 | 					}
91 | 					if ('set' in descriptor) {
92 | 						getSet.push('set');
93 | 					}
94 | 
95 | 					const propertyValue = value[key];
                                ^
TypeError: undefined is not an object
      at node:http:629:17
      at /tmp/fs-fixture-1725236100683-1/inspect.mjs:95:28
      at map (1:11)
      at inspect (/tmp/fs-fixture-1725236100683-1/inspect.mjs:80:43)
      at /tmp/fs-fixture-1725236100683-1/inspect.mjs:99:7
      at map (1:11)
      at inspect (/tmp/fs-fixture-1725236100683-1/inspect.mjs:80:43)
      at /tmp/fs-fixture-1725236100683-1/inspect.mjs:99:7
      at map (1:11)
      at inspect (/tmp/fs-fixture-1725236100683-1/inspect.mjs:80:43)

Bun v1.1.27-canary.61+f123814d8 (Linux x64 baseline)
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
    Session: <ref *2> ƒ ::bunternal::(length: 0) {},
    close: <ref *3> ƒ ::bunternal::(length: 0) {},
    console: <ref *4> {
        debug: <ref *5> ƒ debug(length: 0) {},
        error: <ref *6> ƒ error(length: 0) {},
        log: <ref *7> ƒ log(length: 0) {},
        info: <ref *8> ƒ info(length: 0) {},
        warn: <ref *9> ƒ warn(length: 0) {},
        clear: <ref *10> ƒ clear(length: 0) {},
        dir: <ref *11> ƒ dir(length: 0) {},
        dirxml: <ref *12> ƒ dirxml(length: 0) {},
        table: <ref *13> ƒ table(length: 0) {},
        trace: <ref *14> ƒ trace(length: 0) {},
        assert: <ref *15> ƒ assert(length: 0) {},
        count: <ref *16> ƒ count(length: 0) {},
        countReset: <ref *17> ƒ countReset(length: 0) {},
        profile: <ref *18> ƒ profile(length: 0) {},
        profileEnd: <ref *19> ƒ profileEnd(length: 0) {},
        time: <ref *20> ƒ time(length: 0) {},
        timeLog: <ref *21> ƒ timeLog(length: 0) {},
        timeEnd: <ref *22> ƒ timeEnd(length: 0) {},
        timeStamp: <ref *23> ƒ timeStamp(length: 0) {},
        takeHeapSnapshot: <ref *24> ƒ takeHeapSnapshot(length: 0) {},
        group: <ref *25> ƒ group(length: 0) {},
        groupCollapsed: <ref *26> ƒ groupCollapsed(length: 0) {},
        groupEnd: <ref *27> ƒ groupEnd(length: 0) {},
        record: <ref *28> ƒ record(length: 0) {},
        recordEnd: <ref *29> ƒ recordEnd(length: 0) {},
        screenshot: <ref *30> ƒ screenshot(length: 0) {},
        write: <ref *31> ƒ (length: 1) {},
        Console: <ref *32> ƒ Console(length: 1) {
            prototype: {
                log: <ref *34> ƒ log(length: 0) {},
                warn: <ref *35> ƒ warn(length: 0) {},
                dir: ƒ dir(length: 2) {},
                time: ƒ time(length: 0) {},
                timeEnd: ƒ timeEnd(length: 0) {},
                timeLog: ƒ timeLog(length: 0) {},
                trace: ƒ trace(length: 0) {},
                assert: ƒ assert(length: 1) {},
                clear: ƒ clear(length: 0) {},
                count: ƒ count(length: 0) {},
                countReset: ƒ countReset(length: 0) {},
                group: <ref *45> ƒ group(length: 0) {},
                groupEnd: ƒ groupEnd(length: 0) {},
                table: ƒ table(length: 2) {},
                debug: [Circular: *34],
                info: [Circular: *34],
                dirxml: [Circular: *34],
                error: [Circular: *35],
                groupCollapsed: [Circular: *45]
            }
        },
        context: {
            console: {
                debug: [Circular: *5],
                error: [Circular: *6],
                log: [Circular: *7],
                info: [Circular: *8],
                warn: [Circular: *9],
                clear: [Circular: *10],
                dir: [Circular: *11],
                dirxml: [Circular: *12],
                table: [Circular: *13],
                trace: [Circular: *14],
                assert: [Circular: *15],
                count: [Circular: *16],
                countReset: [Circular: *17],
                profile: [Circular: *18],
                profileEnd: [Circular: *19],
                time: [Circular: *20],
                timeLog: [Circular: *21],
                timeEnd: [Circular: *22],
                timeStamp: [Circular: *23],
                takeHeapSnapshot: [Circular: *24],
                group: [Circular: *25],
                groupCollapsed: [Circular: *26],
                groupEnd: [Circular: *27],
                record: [Circular: *28],
                recordEnd: [Circular: *29],
                screenshot: [Circular: *30],
                write: [Circular: *31],
                Console: [Circular: *32],
                Symbol(Symbol.asyncIterator): <ref *50> ƒ [Symbol.asyncIterator](length: 0) {}
            }
        },
        Symbol(Symbol.asyncIterator): [Circular: *50]
    },
    default: {
        console: [Circular: *4],
        open: <ref *52> ƒ ::bunternal::(length: 0) {},
        close: [Circular: *3],
        url: <ref *53> ƒ ::bunternal::(length: 0) {},
        waitForDebugger: <ref *54> ƒ ::bunternal::(length: 0) {},
        Session: [Circular: *2]
    },
    open: [Circular: *52],
    url: [Circular: *53],
    waitForDebugger: [Circular: *54]
}
```

</td></tr></table>

## inspector/promises

<table><tr><th>Node.js</th><th>Bun</th></tr><tr><td valign="top">

```js
[Object: null prototype] {
    Session: <ref *2> class Session extends inspector.Session {},
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
    Session: <ref *2> ƒ ::bunternal::(length: 0) {},
    close: <ref *3> ƒ ::bunternal::(length: 0) {},
    console: <ref *4> {
        debug: <ref *5> ƒ debug(length: 0) {},
        error: <ref *6> ƒ error(length: 0) {},
        log: <ref *7> ƒ log(length: 0) {},
        info: <ref *8> ƒ info(length: 0) {},
        warn: <ref *9> ƒ warn(length: 0) {},
        clear: <ref *10> ƒ clear(length: 0) {},
        dir: <ref *11> ƒ dir(length: 0) {},
        dirxml: <ref *12> ƒ dirxml(length: 0) {},
        table: <ref *13> ƒ table(length: 0) {},
        trace: <ref *14> ƒ trace(length: 0) {},
        assert: <ref *15> ƒ assert(length: 0) {},
        count: <ref *16> ƒ count(length: 0) {},
        countReset: <ref *17> ƒ countReset(length: 0) {},
        profile: <ref *18> ƒ profile(length: 0) {},
        profileEnd: <ref *19> ƒ profileEnd(length: 0) {},
        time: <ref *20> ƒ time(length: 0) {},
        timeLog: <ref *21> ƒ timeLog(length: 0) {},
        timeEnd: <ref *22> ƒ timeEnd(length: 0) {},
        timeStamp: <ref *23> ƒ timeStamp(length: 0) {},
        takeHeapSnapshot: <ref *24> ƒ takeHeapSnapshot(length: 0) {},
        group: <ref *25> ƒ group(length: 0) {},
        groupCollapsed: <ref *26> ƒ groupCollapsed(length: 0) {},
        groupEnd: <ref *27> ƒ groupEnd(length: 0) {},
        record: <ref *28> ƒ record(length: 0) {},
        recordEnd: <ref *29> ƒ recordEnd(length: 0) {},
        screenshot: <ref *30> ƒ screenshot(length: 0) {},
        write: <ref *31> ƒ (length: 1) {},
        Console: <ref *32> ƒ Console(length: 1) {
            prototype: {
                log: <ref *34> ƒ log(length: 0) {},
                warn: <ref *35> ƒ warn(length: 0) {},
                dir: ƒ dir(length: 2) {},
                time: ƒ time(length: 0) {},
                timeEnd: ƒ timeEnd(length: 0) {},
                timeLog: ƒ timeLog(length: 0) {},
                trace: ƒ trace(length: 0) {},
                assert: ƒ assert(length: 1) {},
                clear: ƒ clear(length: 0) {},
                count: ƒ count(length: 0) {},
                countReset: ƒ countReset(length: 0) {},
                group: <ref *45> ƒ group(length: 0) {},
                groupEnd: ƒ groupEnd(length: 0) {},
                table: ƒ table(length: 2) {},
                debug: [Circular: *34],
                info: [Circular: *34],
                dirxml: [Circular: *34],
                error: [Circular: *35],
                groupCollapsed: [Circular: *45]
            }
        },
        context: {
            console: {
                debug: [Circular: *5],
                error: [Circular: *6],
                log: [Circular: *7],
                info: [Circular: *8],
                warn: [Circular: *9],
                clear: [Circular: *10],
                dir: [Circular: *11],
                dirxml: [Circular: *12],
                table: [Circular: *13],
                trace: [Circular: *14],
                assert: [Circular: *15],
                count: [Circular: *16],
                countReset: [Circular: *17],
                profile: [Circular: *18],
                profileEnd: [Circular: *19],
                time: [Circular: *20],
                timeLog: [Circular: *21],
                timeEnd: [Circular: *22],
                timeStamp: [Circular: *23],
                takeHeapSnapshot: [Circular: *24],
                group: [Circular: *25],
                groupCollapsed: [Circular: *26],
                groupEnd: [Circular: *27],
                record: [Circular: *28],
                recordEnd: [Circular: *29],
                screenshot: [Circular: *30],
                write: [Circular: *31],
                Console: [Circular: *32],
                Symbol(Symbol.asyncIterator): <ref *50> ƒ [Symbol.asyncIterator](length: 0) {}
            }
        },
        Symbol(Symbol.asyncIterator): [Circular: *50]
    },
    default: {
        console: [Circular: *4],
        open: <ref *52> ƒ ::bunternal::(length: 0) {},
        close: [Circular: *3],
        url: <ref *53> ƒ ::bunternal::(length: 0) {},
        waitForDebugger: <ref *54> ƒ ::bunternal::(length: 0) {},
        Session: [Circular: *2]
    },
    open: [Circular: *52],
    url: [Circular: *53],
    waitForDebugger: [Circular: *54]
}
```

</td></tr></table>

## module

<table><tr><th>Node.js</th><th>Bun</th></tr><tr><td valign="top">

```js
[Object: null prototype] {
    Module: <ref *2> ƒ Module(length: 0) {
        _cache: <ref *3> [Object: null prototype] {},
        _pathCache: <ref *4> [Object: null prototype] {
            /tmp/fs-fixture-1725236100683-1/module.mjs: "/tmp/fs-fixture-1725236100683-1/module.mjs"
        },
        _extensions: <ref *5> [Object: null prototype] {
            .js: ƒ (length: 2) {},
            .json: ƒ (length: 2) {},
            .node: ƒ (length: 2) {}
        },
        globalPaths: <ref *9> [
            "/home/runner/work/compare-bun-node/compare-bun-node/node_modules/.pnpm/tsx@3.12.6/node_modules/tsx/d…",
            "/home/runner/work/compare-bun-node/compare-bun-node/node_modules/.pnpm/tsx@3.12.6/node_modules/tsx/n…",
            "/home/runner/work/compare-bun-node/compare-bun-node/node_modules/.pnpm/tsx@3.12.6/node_modules",
            "/home/runner/work/compare-bun-node/compare-bun-node/node_modules/.pnpm/node_modules",
            "/home/runner/setup-pnpm/node_modules/.pnpm/pnpm@7.33.7/node_modules/pnpm/bin/node_modules",
            "/home/runner/setup-pnpm/node_modules/.pnpm/pnpm@7.33.7/node_modules/pnpm/node_modules",
            "/home/runner/setup-pnpm/node_modules/.pnpm/pnpm@7.33.7/node_modules",
            "/home/runner/setup-pnpm/node_modules/.pnpm/node_modules",
            "/home/runner/.node_modules",
            "/home/runner/.node_libraries",
            "/opt/hostedtoolcache/node/20.17.0/x64/lib/node"
        ],
        _debug: <ref *10> ƒ deprecated(length: 0) {},
        isBuiltin: <ref *11> ƒ isBuiltin(length: 1) {},
        _findPath: <ref *12> ƒ (length: 3) {},
        _nodeModulePaths: <ref *13> ƒ (length: 1) {},
        _resolveLookupPaths: <ref *14> ƒ (length: 2) {},
        _load: <ref *15> ƒ (length: 3) {},
        _resolveFilename: <ref *16> ƒ (length: 4) {},
        createRequire: <ref *17> ƒ createRequire(length: 1) {},
        _initPaths: <ref *18> ƒ (length: 0) {},
        _preloadModules: <ref *19> ƒ (length: 1) {},
        syncBuiltinESMExports: <ref *20> ƒ syncBuiltinESMExports(length: 0) {},
        Module: [Circular: *2],
        builtinModules: <ref *21> [
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
            "inspector/promises",
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
            "wasi",
            "worker_threads",
            "zlib"
        ],
        runMain: <ref *22> ƒ executeUserEntryPoint(length: 0) {},
        findSourceMap: <ref *23> ƒ findSourceMap(length: 1) {},
        register: <ref *24> ƒ register(length: 1) {},
        SourceMap: <ref *25> class SourceMap {}
    },
    SourceMap: [Circular: *25],
    _cache: [Circular: *3],
    _debug: [Circular: *10],
    _extensions: [Circular: *5],
    _findPath: [Circular: *12],
    _initPaths: [Circular: *18],
    _load: [Circular: *15],
    _nodeModulePaths: [Circular: *13],
    _pathCache: [Circular: *4],
    _preloadModules: [Circular: *19],
    _resolveFilename: [Circular: *16],
    _resolveLookupPaths: [Circular: *14],
    builtinModules: [Circular: *21],
    createRequire: [Circular: *17],
    default: [Circular: *2],
    findSourceMap: [Circular: *23],
    globalPaths: [Circular: *9],
    isBuiltin: [Circular: *11],
    register: [Circular: *24],
    runMain: [Circular: *22],
    syncBuiltinESMExports: [Circular: *20]
}
```

</td><td valign="top">

```js
<ref *1> {
    Module: <ref *2> ƒ Module(length: 0) {
        Module: [Circular: *2],
        _extensions: <ref *3> {
            .js: true,
            .json: true,
            .node: true
        },
        [get/set] _resolveFilename: <ref *4> ƒ __resolveFilename(length: 1) {},
        __resolveFilename: [Circular: *4],
        _resolveLookupPaths: <ref *5> ƒ _resolveLookupPaths(length: 1) {},
        createRequire: <ref *6> ƒ createRequire(length: 1) {},
        paths: <ref *7> ƒ paths(length: 1) {},
        findSourceMap: <ref *8> ƒ findSourceMap(length: 1) {},
        syncBuiltinExports: <ref *9> ƒ syncBuiltinExports(length: 1) {},
        SourceMap: <ref *10> ƒ SourceMap(length: 1) {},
        isBuiltin: <ref *11> ƒ isBuiltin(length: 1) {},
        _nodeModulePaths: <ref *12> ƒ _nodeModulePaths(length: 1) {},
        wrap: <ref *13> ƒ wrap(length: 1) {},
        _cache: <ref *14> {
            bun:main: {
                exports: {}
            },
            /tmp/fs-fixture-1725236100683-1/module.mjs: {
                exports: {}
            },
            module: {
                exports: [Circular: *1]
            },
            /tmp/fs-fixture-1725236100683-1/inspect.mjs: {
                exports: {
                    inspect: ƒ inspect(length: 1) {}
                }
            }
        },
        globalPaths: <ref *23> [],
        prototype: {
            require: ƒ require(length: 1) {}
        },
        builtinModules: <ref *26> [
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
            "bun",
            "bun:ffi",
            "bun:jsc",
            "bun:sqlite",
            "bun:test",
            "bun:wrap",
            "child_process",
            "cluster",
            "console",
            "constants",
            "crypto",
            "detect-libc",
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
            "inspector/promises",
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
            "undici",
            "url",
            "util",
            "util/types",
            "v8",
            "vm",
            "wasi",
            "worker_threads",
            "ws",
            "zlib"
        ]
    },
    SourceMap: [Circular: *10],
    __resolveFilename: [Circular: *4],
    _cache: [Circular: *14],
    _extensions: [Circular: *3],
    _nodeModulePaths: [Circular: *12],
    _resolveLookupPaths: [Circular: *5],
    builtinModules: [Circular: *26],
    createRequire: [Circular: *6],
    default: [Circular: *2],
    findSourceMap: [Circular: *8],
    globalPaths: [Circular: *23],
    isBuiltin: [Circular: *11],
    paths: [Circular: *7],
    syncBuiltinExports: [Circular: *9],
    wrap: [Circular: *13]
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
        Stream: [Circular: *4],
        getDefaultAutoSelectFamily: <ref *15> ƒ getDefaultAutoSelectFamily(length: 0) {},
        setDefaultAutoSelectFamily: <ref *16> ƒ setDefaultAutoSelectFamily(length: 1) {},
        getDefaultAutoSelectFamilyAttemptTimeout: <ref *17> ƒ getDefaultAutoSelectFamilyAttemptTimeout(length: 0) {},
        setDefaultAutoSelectFamilyAttemptTimeout: <ref *18> ƒ setDefaultAutoSelectFamilyAttemptTimeout(length: 1) {}
    },
    getDefaultAutoSelectFamily: [Circular: *15],
    getDefaultAutoSelectFamilyAttemptTimeout: [Circular: *17],
    isIP: [Circular: *12],
    isIPv4: [Circular: *13],
    isIPv6: [Circular: *14],
    setDefaultAutoSelectFamily: [Circular: *16],
    setDefaultAutoSelectFamilyAttemptTimeout: [Circular: *18]
}
```

</td><td valign="top">

```js
{
    BlockList: <ref *2> ƒ BlockList(length: 0) {},
    Server: <ref *3> ƒ Server(length: 2) {},
    Socket: <ref *4> ƒ Socket3(length: 1) {
        prototype: Socket2 {}
    },
    Stream: [Circular: *4],
    _normalizeArgs: <ref *6> ƒ normalizeArgs(length: 1) {},
    connect: <ref *7> ƒ createConnection(length: 3) {},
    createConnection: [Circular: *7],
    createServer: <ref *8> ƒ createServer(length: 2) {},
    default: {
        createServer: [Circular: *8],
        Server: [Circular: *3],
        createConnection: [Circular: *7],
        connect: [Circular: *7],
        isIP: <ref *10> ƒ isIP(length: 1) {},
        isIPv4: <ref *11> ƒ isIPv4(length: 1) {},
        isIPv6: <ref *12> ƒ isIPv6(length: 1) {},
        Socket: [Circular: *4],
        _normalizeArgs: [Circular: *6],
        getDefaultAutoSelectFamily: <ref *13> ƒ getDefaultAutoSelectFamily(length: 0) {},
        setDefaultAutoSelectFamily: <ref *14> ƒ setDefaultAutoSelectFamily(length: 1) {},
        getDefaultAutoSelectFamilyAttemptTimeout: <ref *15> ƒ getDefaultAutoSelectFamilyAttemptTimeout(length: 0) {},
        setDefaultAutoSelectFamilyAttemptTimeout: <ref *16> ƒ setDefaultAutoSelectFamilyAttemptTimeout(length: 1) {},
        BlockList: [Circular: *2],
        Stream: [Circular: *4],
        Symbol(::bunternal::): ƒ Socket2(length: 1) {
            Symbol(::bunsocket_serverhandlers::): {
                data: ƒ data(length: 2) {},
                close: ƒ close(length: 1) {},
                end: ƒ end(length: 1) {},
                open: ƒ open(length: 1) {},
                handshake: ƒ handshake(length: 3) {},
                error: ƒ error(length: 2) {},
                timeout: ƒ timeout(length: 1) {},
                connectError: undefined,
                drain: ƒ #Drain(length: 1) {},
                binaryType: "buffer"
            }
        }
    },
    getDefaultAutoSelectFamily: [Circular: *13],
    getDefaultAutoSelectFamilyAttemptTimeout: [Circular: *15],
    isIP: [Circular: *10],
    isIPv4: [Circular: *11],
    isIPv6: [Circular: *12],
    setDefaultAutoSelectFamily: [Circular: *14],
    setDefaultAutoSelectFamilyAttemptTimeout: [Circular: *16]
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
        homedir: <ref *18> ƒ wrappedFn(length: 0) {
            withoutStackTrace: ƒ checkError(length: 0) {},
            Symbol(Symbol.toPrimitive): ƒ (length: 0) {}
        },
        hostname: <ref *21> ƒ wrappedFn(length: 0) {
            withoutStackTrace: ƒ checkError(length: 0) {},
            Symbol(Symbol.toPrimitive): ƒ (length: 0) {}
        },
        loadavg: <ref *24> ƒ loadavg(length: 0) {},
        networkInterfaces: <ref *25> ƒ networkInterfaces(length: 0) {},
        platform: <ref *26> ƒ platform(length: 0) {
            Symbol(Symbol.toPrimitive): ƒ (length: 0) {}
        },
        release: <ref *28> ƒ getOSRelease(length: 0) {
            Symbol(Symbol.toPrimitive): ƒ (length: 0) {}
        },
        setPriority: <ref *30> ƒ setPriority(length: 2) {},
        tmpdir: <ref *31> ƒ tmpdir(length: 0) {
            Symbol(Symbol.toPrimitive): ƒ (length: 0) {}
        },
        totalmem: <ref *33> ƒ getTotalMem(length: 0) {
            Symbol(Symbol.toPrimitive): ƒ (length: 0) {}
        },
        type: <ref *35> ƒ getOSType(length: 0) {
            Symbol(Symbol.toPrimitive): ƒ (length: 0) {}
        },
        userInfo: <ref *37> ƒ userInfo(length: 1) {},
        uptime: <ref *38> ƒ wrappedFn(length: 0) {
            withoutStackTrace: ƒ checkError(length: 0) {},
            Symbol(Symbol.toPrimitive): ƒ (length: 0) {}
        },
        version: <ref *41> ƒ getOSVersion(length: 0) {
            Symbol(Symbol.toPrimitive): ƒ (length: 0) {}
        },
        machine: <ref *43> ƒ getMachine(length: 0) {
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
    hostname: [Circular: *21],
    loadavg: [Circular: *24],
    machine: [Circular: *43],
    networkInterfaces: [Circular: *25],
    platform: [Circular: *26],
    release: [Circular: *28],
    setPriority: [Circular: *30],
    tmpdir: [Circular: *31],
    totalmem: [Circular: *33],
    type: [Circular: *35],
    uptime: [Circular: *38],
    userInfo: [Circular: *37],
    version: [Circular: *41]
}
```

</td><td valign="top">

```js
{
    EOL: "\n",
    arch: <ref *2> ƒ arch(length: 0) {
        Symbol(Symbol.toPrimitive): ƒ (length: 1) {}
    },
    availableParallelism: <ref *4> ƒ availableParallelism(length: 0) {
        Symbol(Symbol.toPrimitive): ƒ (length: 1) {}
    },
    constants: <ref *6> {
        UV_UDP_REUSEADDR: 4,
        dlopen: {
            RTLD_LAZY: 1,
            RTLD_NOW: 2,
            RTLD_GLOBAL: 256,
            RTLD_LOCAL: 0,
            RTLD_DEEPBIND: 8
        },
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
            SIGSYS: 31
        },
        priority: {
            PRIORITY_LOW: 19,
            PRIORITY_BELOW_NORMAL: 10,
            PRIORITY_NORMAL: 0,
            PRIORITY_ABOVE_NORMAL: -7,
            PRIORITY_HIGH: -14,
            PRIORITY_HIGHEST: -20
        }
    },
    cpus: <ref *11> ƒ (length: 0) {},
    default: {
        availableParallelism: [Circular: *4],
        arch: [Circular: *2],
        cpus: [Circular: *11],
        endianness: <ref *13> ƒ endianness(length: 0) {
            Symbol(Symbol.toPrimitive): ƒ (length: 1) {}
        },
        freemem: <ref *15> ƒ bound freemem(length: 0) {
            Symbol(Symbol.toPrimitive): ƒ (length: 1) {}
        },
        getPriority: <ref *17> ƒ bound getPriority(length: 1) {},
        homedir: <ref *18> ƒ bound homedir(length: 0) {
            Symbol(Symbol.toPrimitive): ƒ (length: 1) {}
        },
        hostname: <ref *20> ƒ bound hostname(length: 0) {
            Symbol(Symbol.toPrimitive): ƒ (length: 1) {}
        },
        loadavg: <ref *22> ƒ bound loadavg(length: 0) {},
        networkInterfaces: <ref *23> ƒ bound networkInterfaces(length: 0) {},
        platform: <ref *24> ƒ platform(length: 0) {
            Symbol(Symbol.toPrimitive): ƒ (length: 1) {}
        },
        release: <ref *26> ƒ bound release(length: 0) {
            Symbol(Symbol.toPrimitive): ƒ (length: 1) {}
        },
        setPriority: <ref *28> ƒ bound setPriority(length: 2) {},
        [get/set] tmpdir: <ref *29> ƒ tmpdir(length: 0) {
            Symbol(Symbol.toPrimitive): ƒ (length: 1) {}
        },
        totalmem: <ref *31> ƒ bound totalmem(length: 0) {
            Symbol(Symbol.toPrimitive): ƒ (length: 1) {}
        },
        type: <ref *33> ƒ type(length: 0) {
            Symbol(Symbol.toPrimitive): ƒ (length: 1) {}
        },
        uptime: <ref *35> ƒ bound uptime(length: 0) {
            Symbol(Symbol.toPrimitive): ƒ (length: 1) {}
        },
        userInfo: <ref *37> ƒ bound userInfo(length: 0) {},
        version: <ref *38> ƒ bound version(length: 0) {
            Symbol(Symbol.toPrimitive): ƒ (length: 1) {}
        },
        machine: <ref *40> ƒ bound machine(length: 0) {
            Symbol(Symbol.toPrimitive): ƒ (length: 1) {}
        },
        devNull: "/dev/null",
        EOL: "\n",
        constants: [Circular: *6]
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
    uptime: [Circular: *35],
    userInfo: [Circular: *37],
    version: [Circular: *38]
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
        matchesGlob: <ref *14> ƒ matchesGlob(length: 2) {},
        sep: "/",
        delimiter: ":",
        win32: <ref *15> {
            resolve: ƒ resolve(length: 0) {},
            normalize: ƒ normalize(length: 1) {},
            isAbsolute: ƒ isAbsolute(length: 1) {},
            join: ƒ join(length: 0) {},
            relative: ƒ relative(length: 2) {},
            toNamespacedPath: <ref *21> ƒ toNamespacedPath(length: 1) {},
            dirname: ƒ dirname(length: 1) {},
            basename: ƒ basename(length: 2) {},
            extname: ƒ extname(length: 1) {},
            format: ƒ bound _format(length: 1) {},
            parse: ƒ parse(length: 1) {},
            matchesGlob: ƒ matchesGlob(length: 2) {},
            sep: "\\",
            delimiter: ";",
            win32: [Circular: *15],
            posix: [Circular: *4],
            _makeLong: [Circular: *21]
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
    matchesGlob: [Circular: *14],
    normalize: [Circular: *6],
    parse: [Circular: *13],
    posix: [Circular: *4],
    relative: [Circular: *9],
    resolve: [Circular: *5],
    sep: "/",
    toNamespacedPath: [Circular: *2],
    win32: [Circular: *15]
}
```

</td><td valign="top">

```js
{
    _makeLong: <ref *2> ƒ bound toNamespacedPath(length: 0) {},
    basename: <ref *3> ƒ bound basename(length: 0) {},
    default: <ref *4> {
        resolve: <ref *5> ƒ bound resolve(length: 0) {},
        normalize: <ref *6> ƒ bound normalize(length: 0) {},
        isAbsolute: <ref *7> ƒ bound isAbsolute(length: 0) {},
        join: <ref *8> ƒ bound join(length: 0) {},
        relative: <ref *9> ƒ bound relative(length: 0) {},
        toNamespacedPath: [Circular: *2],
        dirname: <ref *10> ƒ bound dirname(length: 0) {},
        basename: [Circular: *3],
        extname: <ref *11> ƒ bound extname(length: 0) {},
        format: <ref *12> ƒ bound format(length: 0) {},
        parse: <ref *13> ƒ bound parse(length: 0) {},
        sep: "/",
        delimiter: ":",
        win32: <ref *14> {
            resolve: ƒ bound resolve(length: 0) {},
            normalize: ƒ bound normalize(length: 0) {},
            isAbsolute: ƒ bound isAbsolute(length: 0) {},
            join: ƒ bound join(length: 0) {},
            relative: ƒ bound relative(length: 0) {},
            toNamespacedPath: <ref *20> ƒ bound toNamespacedPath(length: 0) {},
            dirname: ƒ bound dirname(length: 0) {},
            basename: ƒ bound basename(length: 0) {},
            extname: ƒ bound extname(length: 0) {},
            format: ƒ bound format(length: 0) {},
            parse: ƒ bound parse(length: 0) {},
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
        matchesGlob: <ref *14> ƒ matchesGlob(length: 2) {},
        sep: "/",
        delimiter: ":",
        win32: <ref *15> {
            resolve: ƒ resolve(length: 0) {},
            normalize: ƒ normalize(length: 1) {},
            isAbsolute: ƒ isAbsolute(length: 1) {},
            join: ƒ join(length: 0) {},
            relative: ƒ relative(length: 2) {},
            toNamespacedPath: <ref *21> ƒ toNamespacedPath(length: 1) {},
            dirname: ƒ dirname(length: 1) {},
            basename: ƒ basename(length: 2) {},
            extname: ƒ extname(length: 1) {},
            format: ƒ bound _format(length: 1) {},
            parse: ƒ parse(length: 1) {},
            matchesGlob: ƒ matchesGlob(length: 2) {},
            sep: "\\",
            delimiter: ";",
            win32: [Circular: *15],
            posix: [Circular: *4],
            _makeLong: [Circular: *21]
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
    matchesGlob: [Circular: *14],
    normalize: [Circular: *6],
    parse: [Circular: *13],
    posix: [Circular: *4],
    relative: [Circular: *9],
    resolve: [Circular: *5],
    sep: "/",
    toNamespacedPath: [Circular: *2],
    win32: [Circular: *15]
}
```

</td><td valign="top">

```js
{
    _makeLong: <ref *2> ƒ bound toNamespacedPath(length: 0) {},
    basename: <ref *3> ƒ bound basename(length: 0) {},
    default: <ref *4> {
        resolve: <ref *5> ƒ bound resolve(length: 0) {},
        normalize: <ref *6> ƒ bound normalize(length: 0) {},
        isAbsolute: <ref *7> ƒ bound isAbsolute(length: 0) {},
        join: <ref *8> ƒ bound join(length: 0) {},
        relative: <ref *9> ƒ bound relative(length: 0) {},
        toNamespacedPath: [Circular: *2],
        dirname: <ref *10> ƒ bound dirname(length: 0) {},
        basename: [Circular: *3],
        extname: <ref *11> ƒ bound extname(length: 0) {},
        format: <ref *12> ƒ bound format(length: 0) {},
        parse: <ref *13> ƒ bound parse(length: 0) {},
        sep: "/",
        delimiter: ":",
        win32: <ref *14> {
            resolve: ƒ bound resolve(length: 0) {},
            normalize: ƒ bound normalize(length: 0) {},
            isAbsolute: ƒ bound isAbsolute(length: 0) {},
            join: ƒ bound join(length: 0) {},
            relative: ƒ bound relative(length: 0) {},
            toNamespacedPath: <ref *20> ƒ bound toNamespacedPath(length: 0) {},
            dirname: ƒ bound dirname(length: 0) {},
            basename: ƒ bound basename(length: 0) {},
            extname: ƒ bound extname(length: 0) {},
            format: ƒ bound format(length: 0) {},
            parse: ƒ bound parse(length: 0) {},
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
        matchesGlob: <ref *14> ƒ matchesGlob(length: 2) {},
        sep: "\\",
        delimiter: ";",
        win32: [Circular: *4],
        posix: <ref *15> {
            resolve: ƒ resolve(length: 0) {},
            normalize: ƒ normalize(length: 1) {},
            isAbsolute: ƒ isAbsolute(length: 1) {},
            join: ƒ join(length: 0) {},
            relative: ƒ relative(length: 2) {},
            toNamespacedPath: <ref *21> ƒ toNamespacedPath(length: 1) {},
            dirname: ƒ dirname(length: 1) {},
            basename: ƒ basename(length: 2) {},
            extname: ƒ extname(length: 1) {},
            format: ƒ bound _format(length: 1) {},
            parse: ƒ parse(length: 1) {},
            matchesGlob: ƒ matchesGlob(length: 2) {},
            sep: "/",
            delimiter: ":",
            win32: [Circular: *4],
            posix: [Circular: *15],
            _makeLong: [Circular: *21]
        },
        _makeLong: [Circular: *2]
    },
    delimiter: ";",
    dirname: [Circular: *10],
    extname: [Circular: *11],
    format: [Circular: *12],
    isAbsolute: [Circular: *7],
    join: [Circular: *8],
    matchesGlob: [Circular: *14],
    normalize: [Circular: *6],
    parse: [Circular: *13],
    posix: [Circular: *15],
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
    _makeLong: <ref *2> ƒ bound toNamespacedPath(length: 0) {},
    basename: <ref *3> ƒ bound basename(length: 0) {},
    default: <ref *4> {
        resolve: <ref *5> ƒ bound resolve(length: 0) {},
        normalize: <ref *6> ƒ bound normalize(length: 0) {},
        isAbsolute: <ref *7> ƒ bound isAbsolute(length: 0) {},
        join: <ref *8> ƒ bound join(length: 0) {},
        relative: <ref *9> ƒ bound relative(length: 0) {},
        toNamespacedPath: [Circular: *2],
        dirname: <ref *10> ƒ bound dirname(length: 0) {},
        basename: [Circular: *3],
        extname: <ref *11> ƒ bound extname(length: 0) {},
        format: <ref *12> ƒ bound format(length: 0) {},
        parse: <ref *13> ƒ bound parse(length: 0) {},
        sep: "\\",
        delimiter: ";",
        win32: [Circular: *4],
        posix: <ref *14> {
            resolve: ƒ bound resolve(length: 0) {},
            normalize: ƒ bound normalize(length: 0) {},
            isAbsolute: ƒ bound isAbsolute(length: 0) {},
            join: ƒ bound join(length: 0) {},
            relative: ƒ bound relative(length: 0) {},
            toNamespacedPath: <ref *20> ƒ bound toNamespacedPath(length: 0) {},
            dirname: ƒ bound dirname(length: 0) {},
            basename: ƒ bound basename(length: 0) {},
            extname: ƒ bound extname(length: 0) {},
            format: ƒ bound format(length: 0) {},
            parse: ƒ bound parse(length: 0) {},
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

</td></tr></table>

## perf_hooks

<table><tr><th>Node.js</th><th>Bun</th></tr><tr><td valign="top">

```js
[Object: null prototype] {
    Performance: <ref *2> class Performance extends EventTarget {},
    PerformanceEntry: <ref *3> class PerformanceEntry {},
    PerformanceMark: <ref *4> class PerformanceMark extends PerformanceEntry {},
    PerformanceMeasure: <ref *5> class PerformanceMeasure extends PerformanceEntry {},
    PerformanceObserver: <ref *6> class PerformanceObserver {},
    PerformanceObserverEntryList: <ref *7> class PerformanceObserverEntryList {},
    PerformanceResourceTiming: <ref *8> class PerformanceResourceTiming extends PerformanceEntry {},
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
            Symbol(events.maxEventTargetListenersWarned): false,
            Symbol(kHandlers): SafeMap {},
            Symbol(performance): true
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
    Performance: <ref *2> ƒ Performance(length: 0) {},
    PerformanceEntry: <ref *3> ƒ PerformanceEntry(length: 0) {},
    PerformanceMark: <ref *4> ƒ PerformanceMark(length: 1) {},
    PerformanceMeasure: <ref *5> ƒ PerformanceMeasure(length: 0) {},
    PerformanceNodeTiming: <ref *6> class PerformanceNodeTiming {},
    PerformanceObserver: <ref *7> ƒ PerformanceObserver(length: 1) {
        supportedEntryTypes: [
            "mark",
            "measure"
        ]
    },
    PerformanceObserverEntryList: <ref *9> ƒ PerformanceObserverEntryList(length: 0) {},
    PerformanceResourceTiming: <ref *10> ƒ PerformanceResourceTiming(length: 0) {},
    constants: <ref *11> {
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
    createHistogram: <ref *12> ƒ createHistogram(length: 0) {},
    default: {
        performance: <ref *14> {
            mark: ƒ mark(length: 1) {},
            measure: ƒ measure(length: 1) {},
            clearMarks: ƒ clearMarks(length: 1) {},
            clearMeasures: ƒ clearMeasures(length: 1) {},
            getEntries: ƒ getEntries(length: 1) {},
            getEntriesByName: ƒ getEntriesByName(length: 1) {},
            getEntriesByType: ƒ getEntriesByType(length: 1) {},
            setResourceTimingBufferSize: ƒ setResourceTimingBufferSize(length: 1) {},
            timeOrigin: 1725236101689.2065,
            toJSON: ƒ toJSON(length: 1) {},
            onresourcetimingbufferfull: undefined,
            nodeTiming: PerformanceNodeTiming {
                v8Start: 1725236101689.2065,
                nodeStart: 1725236101689.2065,
                environment: 1725236101689.2065,
                bootstrapComplete: 1725236101689.2065,
                idleTime: 1,
                loopStart: 1,
                loopExit: -1
            },
            now: ƒ now(length: 0) {},
            eventLoopUtilization: ƒ eventLoopUtilization(length: 2) {},
            clearResourceTimings: ƒ clearResourceTimings(length: 0) {}
        },
        constants: [Circular: *11],
        Performance: [Circular: *2],
        PerformanceEntry: [Circular: *3],
        PerformanceMark: [Circular: *4],
        PerformanceMeasure: [Circular: *5],
        PerformanceObserver: [Circular: *7],
        PerformanceObserverEntryList: [Circular: *9],
        PerformanceNodeTiming: [Circular: *6],
        monitorEventLoopDelay: <ref *28> ƒ monitorEventLoopDelay(length: 0) {},
        createHistogram: [Circular: *12],
        PerformanceResourceTiming: [Circular: *10]
    },
    monitorEventLoopDelay: [Circular: *28],
    performance: [Circular: *14]
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
        newListener: [
            ƒ (length: 1) {},
            ƒ startListeningIfSignal(length: 1) {}
        ],
        removeListener: [
            ƒ (length: 1) {},
            ƒ stopListeningIfSignal(length: 1) {}
        ],
        warning: ƒ onWarning(length: 1) {},
        exit: ƒ handleProcessExit(length: 0) {}
    },
    _eventsCount: 4,
    _exiting: false,
    _fatalException: <ref *13> ƒ (length: 2) {},
    _getActiveHandles: <ref *14> ƒ _getActiveHandles(length: 0) {},
    _getActiveRequests: <ref *15> ƒ _getActiveRequests(length: 0) {},
    _kill: <ref *16> ƒ _kill(length: 0) {},
    _linkedBinding: <ref *17> ƒ _linkedBinding(length: 1) {},
    _maxListeners: undefined,
    _preload_modules: <ref *18> [],
    _rawDebug: <ref *19> ƒ _rawDebug(length: 0) {},
    _startProfilerIdleNotifier: <ref *20> ƒ (length: 0) {},
    _stopProfilerIdleNotifier: <ref *21> ƒ (length: 0) {},
    _tickCallback: <ref *22> ƒ runNextTicks(length: 0) {},
    abort: <ref *23> ƒ abort(length: 0) {},
    allowedNodeEnvironmentFlags: <ref *24> NodeEnvironmentFlagsSet {
        Symbol(internal properties): {
            array: [
                "--tls-min-v1.1",
                "--no-tls-min-v1.1",
                "--addons",
                "--no-addons",
                "--node-memory-debug",
                "--experimental-specifier-resolution",
                "--trace-warnings",
                "--no-trace-warnings",
                "--force-async-hooks-checks",
                "--no-force-async-hooks-checks",
                "--diagnostic-dir",
                "--insecure-http-parser",
                "--no-insecure-http-parser",
                "--watch-preserve-output",
                "--no-watch-preserve-output",
                "--heapsnapshot-near-heap-limit",
                "--disable-warning",
                "--heapsnapshot-signal",
                "--experimental-wasi-unstable-preview1",
                "--experimental-vm-modules",
                "--no-experimental-vm-modules",
                "--inspect-port",
                "--experimental-fetch",
                "--no-experimental-fetch",
                "--http-parser",
                "--experimental-loader",
                "--enable-source-maps",
                "--no-enable-source-maps",
                "--input-type",
                "--jitless",
                "--experimental-require-module",
                "--no-experimental-require-module",
                "--experimental-network-imports",
                "--no-experimental-network-imports",
                "--inspect",
                "--no-inspect",
                "--experimental-global-webcrypto",
                "--no-experimental-global-webcrypto",
                "--experimental-policy",
                "--track-heap-objects",
                "--no-track-heap-objects",
                "--experimental-detect-module",
                "--no-experimental-detect-module",
                "--policy-integrity",
                "--trace-atomics-wait",
                "--no-trace-atomics-wait",
                "--allow-addons",
                "--no-allow-addons",
                "--watch",
                "--no-watch",
                "--experimental-default-type",
                "--trace-deprecation",
                "--no-trace-deprecation",
                "--disallow-code-generation-from-strings",
                "--title",
                "--throw-deprecation",
                "--no-throw-deprecation",
                "--warnings",
                "--no-warnings",
                "--pending-deprecation",
                "--no-pending-deprecation",
                "--tls-min-v1.2",
                "--no-tls-min-v1.2",
                "--preserve-symlinks-main",
                "--no-preserve-symlinks-main",
                "--allow-fs-write",
                "--global-search-paths",
                "--no-global-search-paths",
                "--experimental-global-customevent",
                "--no-experimental-global-customevent",
                "--import",
                "--trace-sigint",
                "--no-trace-sigint",
                "--experimental-json-modules",
                "--openssl-shared-config",
                "--no-openssl-shared-config",
                "--conditions",
                "--watch-path",
                "--tls-cipher-list",
                "--disable-proto",
                "--zero-fill-buffers",
                "--no-zero-fill-buffers",
                "--require",
                "--experimental-worker",
                "--test-shard",
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
                "--preserve-symlinks",
                "--no-preserve-symlinks",
                "--test-reporter-destination",
                "--trace-event-file-pattern",
                "--secure-heap-min",
                "--abort-on-uncaught-exception",
                "--trace-event-categories",
                "--network-family-autoselection-attempt-timeout",
                "--report-dir",
                "--disable-wasm-trap-handler",
                "--no-disable-wasm-trap-handler",
                "--unhandled-rejections",
                "--snapshot-blob",
                "--report-exclude-network",
                "--no-report-exclude-network",
                "--experimental-websocket",
                "--no-experimental-websocket",
                "--tls-min-v1.3",
                "--no-tls-min-v1.3",
                "--enable-fips",
                "--no-enable-fips",
                "--report-on-fatalerror",
                "--no-report-on-fatalerror",
                "--huge-max-old-generation-size",
                "--node-snapshot",
                "--no-node-snapshot",
                "--icu-data-dir",
                "--experimental-abortcontroller",
                "--report-filename",
                "--experimental-permission",
                "--no-experimental-permission",
                "--interpreted-frames-native-stack",
                "--experimental-wasm-modules",
                "--no-experimental-wasm-modules",
                "--use-openssl-ca",
                "--no-use-openssl-ca",
                "--use-largepages",
                "--test-reporter",
                "--secure-heap",
                "--napi-modules",
                "--tls-keylog",
                "--extra-info-on-fatal-exception",
                "--no-extra-info-on-fatal-exception",
                "--stack-trace-limit",
                "--openssl-config",
                "--trace-uncaught",
                "--no-trace-uncaught",
                "--experimental-repl-await",
                "--no-experimental-repl-await",
                "--trace-tls",
                "--no-trace-tls",
                "--tls-max-v1.2",
                "--no-tls-max-v1.2",
                "--force-node-api-uncaught-exceptions-policy",
                "--no-force-node-api-uncaught-exceptions-policy",
                "--perf-basic-prof-only-functions",
                "--experimental-print-required-tla",
                "--no-experimental-print-required-tla",
                "--report-compact",
                "--no-report-compact",
                "--debug-arraybuffer-allocations",
                "--no-debug-arraybuffer-allocations",
                "--trace-sync-io",
                "--no-trace-sync-io",
                "--force-context-aware",
                "--no-force-context-aware",
                "--max-semi-space-size",
                "--perf-prof-unwinding-info",
                "--allow-child-process",
                "--no-allow-child-process",
                "--max-http-header-size",
                "--redirect-warnings",
                "--enable-etw-stack-walking",
                "--perf-basic-prof",
                "--max-old-space-size",
                "--allow-worker",
                "--no-allow-worker",
                "--report-signal",
                "--dns-result-order",
                "--test-only",
                "--no-test-only",
                "--network-family-autoselection",
                "--no-network-family-autoselection",
                "--report-uncaught-exception",
                "--no-report-uncaught-exception",
                "--inspect-wait",
                "--no-inspect-wait",
                "--perf-prof",
                "--trace-exit",
                "--no-trace-exit",
                "--frozen-intrinsics",
                "--no-frozen-intrinsics",
                "--inspect-brk",
                "--no-inspect-brk",
                "--inspect-publish-uid",
                "--tls-max-v1.3",
                "--no-tls-max-v1.3",
                "--report-on-signal",
                "--no-report-on-signal",
                "--allow-wasi",
                "--no-allow-wasi",
                "--tls-min-v1.0",
                "--no-tls-min-v1.0",
                "--deprecation",
                "--no-deprecation",
                "--trace-promises",
                "--no-trace-promises",
                "--experimental-import-meta-resolve",
                "--no-experimental-import-meta-resolve",
                "--experimental-modules",
                "--experimental-report",
                "--allow-fs-read",
                "--verify-base-objects",
                "--no-verify-base-objects",
                "--debug-port",
                "--inspect",
                "--inspect-brk",
                "--inspect-wait",
                "-C",
                "--enable-network-family-autoselection",
                "--prof-process",
                "--loader",
                "-r",
                "--trace-events-enabled",
                "--es-module-specifier-resolution",
                "--report-directory"
            ]
        }
    },
    arch: "x64",
    argv: <ref *27> [
        "/opt/hostedtoolcache/node/20.17.0/x64/bin/node",
        "/tmp/fs-fixture-1725236100683-1/process.mjs"
    ],
    argv0: "node",
    assert: <ref *28> ƒ deprecated(length: 0) {},
    availableMemory: <ref *29> ƒ availableMemory(length: 0) {},
    binding: <ref *30> ƒ binding(length: 1) {},
    chdir: <ref *31> ƒ wrappedChdir(length: 1) {},
    config: <ref *32> {
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
            gas_version: "2.35",
            host_arch: "x64",
            icu_data_in: "../../deps/icu-tmp/icudt75l.dat",
            icu_endianness: "l",
            icu_gyp_path: "tools/icu/icu-generic.gyp",
            icu_path: "deps/icu-small",
            icu_small: false,
            icu_ver_major: "75",
            is_debug: 0,
            libdir: "lib",
            llvm_version: "0.0",
            napi_build_version: "9",
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
                "lib/inspector/promises.js",
                "lib/internal/abort_controller.js",
                "lib/internal/assert.js",
                "lib/internal/assert/assertion_error.js",
                "lib/internal/assert/calltracker.js",
                "lib/internal/async_hooks.js",
                "lib/internal/blob.js",
                "lib/internal/blocklist.js",
                "lib/internal/bootstrap/node.js",
                "lib/internal/bootstrap/realm.js",
                "lib/internal/bootstrap/shadow_realm.js",
                "lib/internal/bootstrap/switches/does_not_own_process_state.js",
                "lib/internal/bootstrap/switches/does_own_process_state.js",
                "lib/internal/bootstrap/switches/is_main_thread.js",
                "lib/internal/bootstrap/switches/is_not_main_thread.js",
                "lib/internal/bootstrap/web/exposed-wildcard.js",
                "lib/internal/bootstrap/web/exposed-window-or-worker.js",
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
                "lib/internal/crypto/webidl.js",
                "lib/internal/crypto/x509.js",
                "lib/internal/debugger/inspect.js",
                "lib/internal/debugger/inspect_client.js",
                "lib/internal/debugger/inspect_repl.js",
                "lib/internal/dgram.js",
                "lib/internal/dns/callback_resolver.js",
                "lib/internal/dns/promises.js",
                "lib/internal/dns/utils.js",
                "lib/internal/encoding.js",
                "lib/internal/error_serdes.js",
                "lib/internal/errors.js",
                "lib/internal/event_target.js",
                "lib/internal/events/abort_listener.js",
                "lib/internal/events/symbols.js",
                "lib/internal/file.js",
                "lib/internal/fixed_queue.js",
                "lib/internal/freelist.js",
                "lib/internal/freeze_intrinsics.js",
                "lib/internal/fs/cp/cp-sync.js",
                "lib/internal/fs/cp/cp.js",
                "lib/internal/fs/dir.js",
                "lib/internal/fs/promises.js",
                "lib/internal/fs/read/context.js",
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
                "lib/internal/main/embedding.js",
                "lib/internal/main/eval_stdin.js",
                "lib/internal/main/eval_string.js",
                "lib/internal/main/inspect.js",
                "lib/internal/main/mksnapshot.js",
                "lib/internal/main/print_help.js",
                "lib/internal/main/prof_process.js",
                "lib/internal/main/repl.js",
                "lib/internal/main/run_main_module.js",
                "lib/internal/main/test_runner.js",
                "lib/internal/main/watch_mode.js",
                "lib/internal/main/worker_thread.js",
                "lib/internal/mime.js",
                "lib/internal/modules/cjs/loader.js",
                "lib/internal/modules/esm/assert.js",
                "lib/internal/modules/esm/create_dynamic_module.js",
                "lib/internal/modules/esm/fetch_module.js",
                "lib/internal/modules/esm/formats.js",
                "lib/internal/modules/esm/get_format.js",
                "lib/internal/modules/esm/hooks.js",
                "lib/internal/modules/esm/initialize_import_meta.js",
                "lib/internal/modules/esm/load.js",
                "lib/internal/modules/esm/loader.js",
                "lib/internal/modules/esm/module_job.js",
                "lib/internal/modules/esm/module_map.js",
                "lib/internal/modules/esm/package_config.js",
                "lib/internal/modules/esm/resolve.js",
                "lib/internal/modules/esm/shared_constants.js",
                "lib/internal/modules/esm/translators.js",
                "lib/internal/modules/esm/utils.js",
                "lib/internal/modules/esm/worker.js",
                "lib/internal/modules/helpers.js",
                "lib/internal/modules/package_json_reader.js",
                "lib/internal/modules/run_main.js",
                "lib/internal/navigator.js",
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
                "lib/internal/process/execution.js",
                "lib/internal/process/per_thread.js",
                "lib/internal/process/permission.js",
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
                "lib/internal/streams/compose.js",
                "lib/internal/streams/destroy.js",
                "lib/internal/streams/duplex.js",
                "lib/internal/streams/duplexify.js",
                "lib/internal/streams/duplexpair.js",
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
                "lib/internal/test/binding.js",
                "lib/internal/test/transfer.js",
                "lib/internal/test_runner/coverage.js",
                "lib/internal/test_runner/harness.js",
                "lib/internal/test_runner/mock/mock.js",
                "lib/internal/test_runner/mock/mock_timers.js",
                "lib/internal/test_runner/reporter/dot.js",
                "lib/internal/test_runner/reporter/junit.js",
                "lib/internal/test_runner/reporter/lcov.js",
                "lib/internal/test_runner/reporter/spec.js",
                "lib/internal/test_runner/reporter/tap.js",
                "lib/internal/test_runner/reporter/v8-serializer.js",
                "lib/internal/test_runner/runner.js",
                "lib/internal/test_runner/test.js",
                "lib/internal/test_runner/tests_stream.js",
                "lib/internal/test_runner/utils.js",
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
                "lib/internal/util/embedding.js",
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
                "lib/internal/webidl.js",
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
                "lib/sea.js",
                "lib/stream.js",
                "lib/stream/consumers.js",
                "lib/stream/promises.js",
                "lib/stream/web.js",
                "lib/string_decoder.js",
                "lib/sys.js",
                "lib/test.js",
                "lib/test/reporters.js",
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
            node_module_version: 115,
            node_no_browser_globals: false,
            node_prefix: "/",
            node_release_urlbase: "https://nodejs.org/download/release/",
            node_section_ordering_info: "",
            node_shared: false,
            node_shared_ada: false,
            node_shared_brotli: false,
            node_shared_cares: false,
            node_shared_http_parser: false,
            node_shared_libuv: false,
            node_shared_nghttp2: false,
            node_shared_nghttp3: false,
            node_shared_ngtcp2: false,
            node_shared_openssl: false,
            node_shared_simdjson: false,
            node_shared_simdutf: false,
            node_shared_zlib: false,
            node_tag: "",
            node_target_type: "executable",
            node_use_bundled_v8: true,
            node_use_node_code_cache: true,
            node_use_node_snapshot: true,
            node_use_openssl: true,
            node_use_v8_platform: true,
            node_with_ltcg: false,
            node_without_node_options: false,
            node_write_snapshot_as_array_literals: false,
            openssl_is_fips: false,
            openssl_quic: true,
            ossfuzz: false,
            shlib_suffix: "so.115",
            single_executable_application: true,
            target_arch: "x64",
            ubsan: 0,
            use_prefix_to_find_headers: false,
            v8_enable_31bit_smis_on_64bit_arch: 0,
            v8_enable_extensible_ro_snapshot: 0,
            v8_enable_gdbjit: 0,
            v8_enable_hugepage: 0,
            v8_enable_i18n_support: 1,
            v8_enable_inspector: 1,
            v8_enable_javascript_promise_hooks: 1,
            v8_enable_lite_mode: 0,
            v8_enable_maglev: 0,
            v8_enable_object_print: 1,
            v8_enable_pointer_compression: 0,
            v8_enable_sandbox: 0,
            v8_enable_shared_ro_heap: 1,
            v8_enable_short_builtin_calls: 1,
            v8_enable_v8_checks: 0,
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
    constrainedMemory: <ref *41> ƒ constrainedMemory(length: 0) {},
    cpuUsage: <ref *42> ƒ cpuUsage(length: 1) {},
    cwd: <ref *43> ƒ wrappedCwd(length: 0) {},
    debugPort: 9229,
    default: process {
        version: "v20.17.0",
        versions: <ref *45> {
            node: "20.17.0",
            acorn: "8.11.3",
            ada: "2.9.0",
            ares: "1.32.3",
            base64: "0.5.2",
            brotli: "1.1.0",
            cjs_module_lexer: "1.2.2",
            cldr: "45.0",
            icu: "75.1",
            llhttp: "8.1.2",
            modules: "115",
            napi: "9",
            nghttp2: "1.61.0",
            nghttp3: "0.7.0",
            ngtcp2: "1.1.0",
            openssl: "3.0.13+quic",
            simdutf: "5.3.0",
            tz: "2024a",
            undici: "6.19.2",
            unicode: "15.1",
            uv: "1.46.0",
            uvwasi: "0.0.21",
            v8: "11.3.244.8-node.23",
            zlib: "1.3.0.1-motley-209717d"
        },
        arch: "x64",
        platform: "linux",
        release: <ref *46> {
            name: "node",
            lts: "Iron",
            sourceUrl: "https://nodejs.org/download/release/v20.17.0/node-v20.17.0.tar.gz",
            headersUrl: "https://nodejs.org/download/release/v20.17.0/node-v20.17.0-headers.tar.gz"
        },
        _rawDebug: [Circular: *19],
        moduleLoadList: <ref *47> [
            "Internal Binding builtins",
            "Internal Binding module_wrap",
            "Internal Binding errors",
            "NativeModule internal/assert",
            "Internal Binding util",
            "NativeModule internal/errors",
            "Internal Binding config",
            "Internal Binding timers",
            "Internal Binding async_wrap",
            "Internal Binding task_queue",
            "Internal Binding symbols",
            "NativeModule internal/async_hooks",
            "Internal Binding constants",
            "Internal Binding types",
            "Internal Binding options",
            "NativeModule internal/options",
            "Internal Binding string_decoder",
            "NativeModule internal/util",
            "NativeModule internal/util/types",
            "NativeModule internal/validators",
            "NativeModule internal/linkedlist",
            "NativeModule internal/priority_queue",
            "Internal Binding icu",
            "NativeModule internal/util/inspect",
            "NativeModule internal/util/debuglog",
            "NativeModule internal/timers",
            "NativeModule internal/events/abort_listener",
            "NativeModule events",
            "Internal Binding buffer",
            "NativeModule internal/buffer",
            "NativeModule buffer",
            "Internal Binding messaging",
            "NativeModule internal/worker/js_transferable",
            "NativeModule internal/querystring",
            "NativeModule internal/constants",
            "NativeModule path",
            "NativeModule querystring",
            "Internal Binding url",
            "NativeModule internal/url",
            "NativeModule internal/fs/utils",
            "Internal Binding process_methods",
            "NativeModule internal/process/per_thread",
            "Internal Binding credentials",
            "NativeModule internal/process/promises",
            "NativeModule internal/fixed_queue",
            "NativeModule async_hooks",
            "NativeModule internal/process/task_queues",
            "NativeModule timers",
            "Internal Binding trace_events",
            "Internal Binding contextify",
            "NativeModule internal/vm",
            "NativeModule internal/process/execution",
            "NativeModule internal/process/warning",
            "NativeModule internal/source_map/source_map_cache",
            "Internal Binding fs",
            "Internal Binding blob",
            "Internal Binding encoding_binding",
            "NativeModule internal/encoding",
            "NativeModule util",
            "NativeModule internal/webstreams/util",
            "NativeModule internal/webstreams/queuingstrategies",
            "NativeModule internal/blob",
            "Internal Binding permission",
            "NativeModule internal/process/permission",
            "NativeModule fs",
            "NativeModule internal/modules/helpers",
            "NativeModule internal/console/constructor",
            "NativeModule internal/console/global",
            "NativeModule internal/util/inspector",
            "Internal Binding inspector",
            "NativeModule internal/webidl",
            "Internal Binding performance",
            "NativeModule internal/perf/utils",
            "NativeModule internal/event_target",
            "Internal Binding wasm_web_api",
            "Internal Binding mksnapshot",
            "NativeModule internal/v8/startup_snapshot",
            "NativeModule internal/process/signal",
            "NativeModule internal/idna",
            "NativeModule url",
            "NativeModule internal/modules/package_json_reader",
            "NativeModule internal/modules/cjs/loader",
            "NativeModule internal/process/pre_execution",
            "NativeModule internal/modules/esm/utils",
            "NativeModule internal/inspector_async_hook",
            "Internal Binding worker",
            "NativeModule internal/modules/run_main",
            "NativeModule internal/net",
            "NativeModule internal/dns/utils",
            "NativeModule internal/modules/esm/assert",
            "NativeModule internal/modules/esm/loader",
            "NativeModule internal/modules/esm/module_map",
            "NativeModule internal/modules/esm/translators",
            "NativeModule internal/modules/esm/package_config",
            "NativeModule internal/modules/esm/formats",
            "NativeModule internal/modules/esm/get_format",
            "NativeModule internal/modules/esm/resolve",
            "NativeModule internal/modules/esm/module_job",
            "NativeModule internal/modules/esm/load",
            "Internal Binding fs_dir",
            "NativeModule internal/fs/dir",
            "NativeModule string_decoder",
            "Internal Binding fs_event_wrap",
            "Internal Binding uv",
            "NativeModule internal/fs/watchers",
            "NativeModule internal/fs/recursive_watch",
            "NativeModule internal/streams/utils",
            "NativeModule internal/readline/utils",
            "NativeModule internal/readline/callbacks",
            "NativeModule internal/readline/interface",
            "NativeModule internal/fs/promises",
            "NativeModule process",
            "NativeModule internal/abort_controller",
            "NativeModule internal/streams/end-of-stream",
            "NativeModule internal/streams/destroy",
            "NativeModule internal/streams/legacy",
            "NativeModule internal/streams/add-abort-signal",
            "NativeModule internal/streams/state",
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
            "NativeModule internal/streams/duplexpair",
            "NativeModule stream",
            "Internal Binding stream_wrap",
            "Internal Binding tcp_wrap",
            "Internal Binding pipe_wrap",
            "NativeModule internal/stream_base_commons",
            "NativeModule diagnostics_channel",
            "NativeModule internal/perf/performance_entry",
            "NativeModule internal/perf/observe",
            "NativeModule net",
            "Internal Binding report",
            "NativeModule internal/process/report"
        ],
        binding: [Circular: *30],
        _linkedBinding: [Circular: *17],
        _events: [Circular: *4],
        _eventsCount: 4,
        _maxListeners: undefined,
        domain: null,
        [get/set] _exiting: false,
        [get/set] exitCode: undefined,
        config: [Circular: *32],
        dlopen: <ref *48> ƒ dlopen(length: 0) {},
        uptime: <ref *49> ƒ uptime(length: 0) {},
        _getActiveRequests: [Circular: *15],
        _getActiveHandles: [Circular: *14],
        getActiveResourcesInfo: <ref *50> ƒ getActiveResourcesInfo(length: 0) {},
        reallyExit: <ref *51> ƒ reallyExit(length: 0) {},
        _kill: [Circular: *16],
        loadEnvFile: <ref *52> ƒ loadEnvFile(length: 0) {},
        cpuUsage: [Circular: *42],
        resourceUsage: <ref *53> ƒ resourceUsage(length: 0) {},
        memoryUsage: <ref *54> ƒ memoryUsage(length: 0) {
            rss: ƒ rss(length: 0) {}
        },
        constrainedMemory: [Circular: *41],
        availableMemory: [Circular: *29],
        kill: <ref *56> ƒ kill(length: 2) {},
        exit: <ref *57> ƒ exit(length: 1) {},
        hrtime: <ref *58> ƒ hrtime(length: 1) {
            bigint: ƒ hrtimeBigInt(length: 0) {}
        },
        openStdin: <ref *60> ƒ (length: 0) {},
        getuid: <ref *61> ƒ getuid(length: 0) {},
        geteuid: <ref *62> ƒ geteuid(length: 0) {},
        getgid: <ref *63> ƒ getgid(length: 0) {},
        getegid: <ref *64> ƒ getegid(length: 0) {},
        getgroups: <ref *65> ƒ getgroups(length: 0) {},
        allowedNodeEnvironmentFlags: [Circular: *24],
        assert: [Circular: *28],
        features: <ref *66> {
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
        _fatalException: [Circular: *13],
        setUncaughtExceptionCaptureCallback: <ref *67> ƒ setUncaughtExceptionCaptureCallback(length: 1) {},
        hasUncaughtExceptionCaptureCallback: <ref *68> ƒ hasUncaughtExceptionCaptureCallback(length: 0) {},
        emitWarning: <ref *69> ƒ emitWarning(length: 4) {},
        nextTick: <ref *70> ƒ nextTick(length: 1) {},
        _tickCallback: [Circular: *22],
        [get/set] sourceMapsEnabled: false,
        setSourceMapsEnabled: <ref *71> ƒ setSourceMapsEnabled(length: 1) {},
        getBuiltinModule: <ref *72> ƒ getBuiltinModule(length: 1) {},
        _debugProcess: [Circular: *3],
        _debugEnd: [Circular: *2],
        _startProfilerIdleNotifier: [Circular: *20],
        _stopProfilerIdleNotifier: [Circular: *21],
        [get/set] stdout: <ref *73> Socket {
            connecting: false,
            _hadError: false,
            _parent: null,
            _host: null,
            _closeAfterHandlingError: false,
            _events: {
                close: undefined,
                error: undefined,
                prefinish: undefined,
                finish: undefined,
                drain: undefined,
                data: undefined,
                end: <ref *75> ƒ onReadableStreamEnd(length: 0) {},
                readable: undefined
            },
            _readableState: ReadableState {
                highWaterMark: 16384,
                buffer: [],
                bufferIndex: 0,
                length: 0,
                pipes: [],
                awaitDrainWriters: null,
                readable: false,
                Symbol(kState): 1054468
            },
            _writableState: WritableState {
                highWaterMark: 16384,
                length: 0,
                corked: 0,
                onwrite: ƒ bound onwrite(length: 1) {},
                writelen: 0,
                bufferedIndex: 0,
                pendingcb: 0,
                Symbol(kState): 17564420,
                Symbol(kBufferedValue): null
            },
            allowHalfOpen: false,
            _maxListeners: undefined,
            _eventsCount: 1,
            _sockname: null,
            _pendingData: null,
            _pendingEncoding: "",
            server: null,
            _server: null,
            _type: "pipe",
            fd: 1,
            _isStdio: true,
            destroySoon: <ref *81> ƒ (length: 2) {},
            _destroy: <ref *82> ƒ dummyDestroy(length: 2) {},
            Symbol(async_id_symbol): 8,
            Symbol(kHandle): Pipe {
                Symbol(owner_symbol): [Circular: *73]
            },
            Symbol(lastWriteQueueSize): 0,
            Symbol(timeout): null,
            Symbol(kBuffer): null,
            Symbol(kBufferCb): null,
            Symbol(kBufferGen): null,
            Symbol(shapeMode): true,
            Symbol(kCapture): false,
            Symbol(kSetNoDelay): false,
            Symbol(kSetKeepAlive): false,
            Symbol(kSetKeepAliveInitialDelay): 0,
            Symbol(kBytesRead): 0,
            Symbol(kBytesWritten): 0
        },
        [get/set] stdin: <ref *84> Socket {
            connecting: false,
            _hadError: false,
            _parent: null,
            _host: null,
            _closeAfterHandlingError: false,
            _events: {
                close: undefined,
                error: undefined,
                prefinish: undefined,
                finish: undefined,
                drain: undefined,
                data: undefined,
                end: [Circular: *75],
                readable: undefined,
                pause: ƒ (length: 0) {}
            },
            _readableState: ReadableState {
                highWaterMark: 16384,
                buffer: [],
                bufferIndex: 0,
                length: 0,
                pipes: [],
                awaitDrainWriters: null,
                Symbol(kState): 1052932
            },
            _writableState: WritableState {
                highWaterMark: 16384,
                length: 0,
                corked: 0,
                onwrite: ƒ bound onwrite(length: 1) {},
                writelen: 0,
                bufferedIndex: 0,
                pendingcb: 0,
                Symbol(kState): 1093415684,
                Symbol(kBufferedValue): null
            },
            allowHalfOpen: false,
            _maxListeners: undefined,
            _eventsCount: 2,
            _sockname: null,
            _pendingData: null,
            _pendingEncoding: "",
            server: null,
            _server: null,
            fd: 0,
            Symbol(async_id_symbol): 9,
            Symbol(kHandle): Pipe {
                reading: false,
                Symbol(owner_symbol): [Circular: *84]
            },
            Symbol(lastWriteQueueSize): 0,
            Symbol(timeout): null,
            Symbol(kBuffer): null,
            Symbol(kBufferCb): null,
            Symbol(kBufferGen): null,
            Symbol(shapeMode): true,
            Symbol(kCapture): false,
            Symbol(kSetNoDelay): false,
            Symbol(kSetKeepAlive): false,
            Symbol(kSetKeepAliveInitialDelay): 0,
            Symbol(kBytesRead): 0,
            Symbol(kBytesWritten): 0
        },
        [get/set] stderr: <ref *93> Socket {
            connecting: false,
            _hadError: false,
            _parent: null,
            _host: null,
            _closeAfterHandlingError: false,
            _events: {
                close: undefined,
                error: undefined,
                prefinish: undefined,
                finish: undefined,
                drain: undefined,
                data: undefined,
                end: [Circular: *75],
                readable: undefined
            },
            _readableState: ReadableState {
                highWaterMark: 16384,
                buffer: [],
                bufferIndex: 0,
                length: 0,
                pipes: [],
                awaitDrainWriters: null,
                readable: false,
                Symbol(kState): 1054468
            },
            _writableState: WritableState {
                highWaterMark: 16384,
                length: 0,
                corked: 0,
                onwrite: ƒ bound onwrite(length: 1) {},
                writelen: 0,
                bufferedIndex: 0,
                pendingcb: 0,
                Symbol(kState): 17564420,
                Symbol(kBufferedValue): null
            },
            allowHalfOpen: false,
            _maxListeners: undefined,
            _eventsCount: 1,
            _sockname: null,
            _pendingData: null,
            _pendingEncoding: "",
            server: null,
            _server: null,
            _type: "pipe",
            fd: 2,
            _isStdio: true,
            destroySoon: [Circular: *81],
            _destroy: [Circular: *82],
            Symbol(async_id_symbol): 10,
            Symbol(kHandle): Pipe {
                Symbol(owner_symbol): [Circular: *93]
            },
            Symbol(lastWriteQueueSize): 0,
            Symbol(timeout): null,
            Symbol(kBuffer): null,
            Symbol(kBufferCb): null,
            Symbol(kBufferGen): null,
            Symbol(shapeMode): true,
            Symbol(kCapture): false,
            Symbol(kSetNoDelay): false,
            Symbol(kSetKeepAlive): false,
            Symbol(kSetKeepAliveInitialDelay): 0,
            Symbol(kBytesRead): 0,
            Symbol(kBytesWritten): 0
        },
        abort: [Circular: *23],
        umask: <ref *101> ƒ wrappedUmask(length: 1) {},
        chdir: [Circular: *31],
        cwd: [Circular: *43],
        initgroups: <ref *102> ƒ initgroups(length: 2) {},
        setgroups: <ref *103> ƒ setgroups(length: 1) {},
        setegid: <ref *104> ƒ (length: 1) {},
        seteuid: <ref *105> ƒ (length: 1) {},
        setgid: <ref *106> ƒ (length: 1) {},
        setuid: <ref *107> ƒ (length: 1) {},
        env: <ref *108>  {
            GITHUB_STATE: "/home/runner/work/_temp/_runner_file_commands/save_state_0c693af3-f6b1-4390-a3fc-1d2740bd0930",
            npm_package_devDependencies__types_node: "^18.15.11",
            STATS_TRP: "true",
            DEPLOYMENT_BASEPATH: "/opt/runner",
            DOTNET_NOLOGO: "1",
            USER: "runner",
            npm_config_user_agent: "pnpm/7.33.7 npm/? node/v20.17.0 linux x64",
            CI: "true",
            RUNNER_ENVIRONMENT: "github-hosted",
            GITHUB_ENV: "/home/runner/work/_temp/_runner_file_commands/set_env_0c693af3-f6b1-4390-a3fc-1d2740bd0930",
            PIPX_HOME: "/opt/pipx",
            npm_package_devDependencies_execa: "^7.1.1",
            npm_node_execpath: "/opt/hostedtoolcache/node/20.17.0/x64/bin/node",
            JAVA_HOME_8_X64: "/usr/lib/jvm/temurin-8-jdk-amd64",
            SHLVL: "1",
            HOME: "/home/runner",
            RUNNER_TEMP: "/home/runner/work/_temp",
            GITHUB_EVENT_PATH: "/home/runner/work/_temp/_github_workflow/event.json",
            JAVA_HOME_11_X64: "/usr/lib/jvm/temurin-11-jdk-amd64",
            PIPX_BIN_DIR: "/opt/pipx_bin",
            GITHUB_REPOSITORY_OWNER: "privatenumber",
            npm_package_devDependencies__pvtnbr_eslint_config: "^0.33.0",
            GRADLE_HOME: "/usr/share/gradle-8.10",
            ANDROID_NDK_LATEST_HOME: "/usr/local/lib/android/sdk/ndk/27.0.12077973",
            JAVA_HOME_21_X64: "/usr/lib/jvm/temurin-21-jdk-amd64",
            STATS_RDCL: "true",
            GITHUB_RETENTION_DAYS: "90",
            GITHUB_REPOSITORY_OWNER_ID: "1075694",
            POWERSHELL_DISTRIBUTION_CHANNEL: "GitHub-Actions-ubuntu22",
            AZURE_EXTENSION_DIR: "/opt/az/azcliextensions",
            GITHUB_HEAD_REF: "",
            SYSTEMD_EXEC_PID: "599",
            GITHUB_GRAPHQL_URL: "https://api.github.com/graphql",
            GOROOT_1_20_X64: "/opt/hostedtoolcache/go/1.20.14/x64",
            NVM_DIR: "/home/runner/.nvm",
            DOTNET_SKIP_FIRST_TIME_EXPERIENCE: "1",
            GOROOT_1_21_X64: "/opt/hostedtoolcache/go/1.21.13/x64",
            JAVA_HOME_17_X64: "/usr/lib/jvm/temurin-17-jdk-amd64",
            ImageVersion: "20240825.1.0",
            npm_package_eslintConfig_ignorePatterns_0: "README.md",
            RUNNER_OS: "Linux",
            GITHUB_API_URL: "https://api.github.com",
            GOROOT_1_22_X64: "/opt/hostedtoolcache/go/1.22.6/x64",
            SWIFT_PATH: "/usr/share/swift/usr/bin",
            RUNNER_USER: "runner",
            STATS_V3PS: "true",
            CHROMEWEBDRIVER: "/usr/local/share/chromedriver-linux64",
            JOURNAL_STREAM: "8:19696",
            GITHUB_WORKFLOW: "Compare Bun and Node.js",
            _: "/home/runner/setup-pnpm/node_modules/.bin/pnpm",
            npm_package_private: "true",
            npm_package_scripts_lint: "eslint --cache .",
            npm_config_registry: "https://registry.npmjs.org/",
            ACTIONS_RUNNER_ACTION_ARCHIVE_CACHE: "/opt/actionarchivecache",
            STATS_D: "false",
            GITHUB_RUN_ID: "10658519579",
            STATS_VMFE: "true",
            GITHUB_REF_TYPE: "branch",
            BOOTSTRAP_HASKELL_NONINTERACTIVE: "1",
            GITHUB_WORKFLOW_SHA: "aaf98fe2abe755bc719e335b0cfef538b752e42f",
            GITHUB_BASE_REF: "",
            ImageOS: "ubuntu22",
            npm_package_scripts_start: "tsx index.ts",
            GITHUB_WORKFLOW_REF: "privatenumber/compare-bun-node/.github/workflows/compare.yml@refs/heads/master",
            PERFLOG_LOCATION_SETTING: "RUNNER_PERFLOG",
            GITHUB_ACTION_REPOSITORY: "",
            npm_config_node_gyp: "/home/runner/setup-pnpm/node_modules/.pnpm/pnpm@7.33.7/node_modules/pnpm/dist/node_modules/node-gyp/…",
            PATH: "/home/runner/work/compare-bun-node/compare-bun-node/node_modules/.bin:/home/runner/setup-pnpm/node_m…",
            ANT_HOME: "/usr/share/ant",
            DOTNET_MULTILEVEL_LOOKUP: "0",
            RUNNER_TRACKING_ID: "github_5187e0f7-398e-4c7f-9f6d-ac7280aa0908",
            INVOCATION_ID: "94c1ad43390d4f12a414bea921b757c2",
            RUNNER_TOOL_CACHE: "/opt/hostedtoolcache",
            NODE: "/opt/hostedtoolcache/node/20.17.0/x64/bin/node",
            GITHUB_ACTION: "__run",
            GITHUB_RUN_NUMBER: "91",
            GITHUB_TRIGGERING_ACTOR: "privatenumber",
            RUNNER_ARCH: "X64",
            XDG_RUNTIME_DIR: "/run/user/1001",
            AGENT_TOOLSDIRECTORY: "/opt/hostedtoolcache",
            npm_package_devDependencies_comment_mark: "^1.1.1",
            LANG: "C.UTF-8",
            VCPKG_INSTALLATION_ROOT: "/usr/local/share/vcpkg",
            npm_package_devDependencies_eslint: "^8.37.0",
            CONDA: "/usr/share/miniconda",
            RUNNER_NAME: "GitHub Actions 5",
            XDG_CONFIG_HOME: "/home/runner/.config",
            STATS_VMD: "true",
            GITHUB_REF_NAME: "master",
            GITHUB_REPOSITORY: "privatenumber/compare-bun-node",
            STATS_D_D: "false",
            npm_package_simple_git_hooks_pre_commit: "pnpm lint-staged",
            npm_lifecycle_script: "tsx index.ts",
            STATS_UE: "true",
            ANDROID_NDK_ROOT: "/usr/local/lib/android/sdk/ndk/27.0.12077973",
            GITHUB_ACTION_REF: "",
            DEBIAN_FRONTEND: "noninteractive",
            GITHUB_REPOSITORY_ID: "622996871",
            GITHUB_ACTIONS: "true",
            NODE_PATH: "/home/runner/work/compare-bun-node/compare-bun-node/node_modules/.pnpm/tsx@3.12.6/node_modules/tsx/d…",
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
            GITHUB_SHA: "aaf98fe2abe755bc719e335b0cfef538b752e42f",
            GITHUB_RUN_ATTEMPT: "1",
            GITHUB_REF: "refs/heads/master",
            GITHUB_ACTOR: "privatenumber",
            ANDROID_SDK_ROOT: "/usr/local/lib/android/sdk",
            npm_package_license: "MIT",
            LEIN_HOME: "/usr/local/lib/lein",
            npm_package_devDependencies_tsx: "^3.12.6",
            GITHUB_PATH: "/home/runner/work/_temp/_runner_file_commands/add_path_0c693af3-f6b1-4390-a3fc-1d2740bd0930",
            JAVA_HOME: "/usr/lib/jvm/temurin-11-jdk-amd64",
            PWD: "/home/runner/work/compare-bun-node/compare-bun-node",
            GITHUB_ACTOR_ID: "1075694",
            RUNNER_WORKSPACE: "/home/runner/work/compare-bun-node",
            npm_execpath: "/home/runner/setup-pnpm/node_modules/.pnpm/pnpm@7.33.7/node_modules/pnpm/bin/pnpm.cjs",
            HOMEBREW_CLEANUP_PERIODIC_FULL_DAYS: "3650",
            STATS_TIS: "mining",
            GITHUB_EVENT_NAME: "schedule",
            HOMEBREW_NO_AUTO_UPDATE: "1",
            ANDROID_HOME: "/usr/local/lib/android/sdk",
            GITHUB_SERVER_URL: "https://github.com",
            GECKOWEBDRIVER: "/usr/local/share/gecko_driver",
            LEIN_JAR: "/usr/local/lib/lein/self-installs/leiningen-2.11.2-standalone.jar",
            GHCUP_INSTALL_BASE_PREFIX: "/usr/local",
            GITHUB_OUTPUT: "/home/runner/work/_temp/_runner_file_commands/set_output_0c693af3-f6b1-4390-a3fc-1d2740bd0930",
            EDGEWEBDRIVER: "/usr/local/share/edge_driver",
            STATS_EXT: "true",
            npm_command: "run-script",
            PNPM_SCRIPT_SRC_DIR: "/home/runner/work/compare-bun-node/compare-bun-node",
            ANDROID_NDK: "/usr/local/lib/android/sdk/ndk/27.0.12077973",
            SGX_AESM_ADDR: "1",
            CHROME_BIN: "/usr/bin/google-chrome",
            SELENIUM_JAR_PATH: "/usr/share/java/selenium-server.jar",
            PNPM_HOME: "/home/runner/setup-pnpm/node_modules/.bin",
            STATS_EXTP: "https://provjobdsettingscdn.blob.core.windows.net/settings/provjobdsettings-0.5.181+6/provjobd.data",
            npm_package_lint_staged____ts_js_: "eslint --cache",
            ANDROID_NDK_HOME: "/usr/local/lib/android/sdk/ndk/27.0.12077973",
            GITHUB_STEP_SUMMARY: "/home/runner/work/_temp/_runner_file_commands/step_summary_0c693af3-f6b1-4390-a3fc-1d2740bd0930",
            npm_package_eslintConfig_extends: "@pvtnbr",
            INIT_CWD: "/home/runner/work/compare-bun-node/compare-bun-node"
        },
        title: "node",
        argv: [Circular: *27],
        execArgv: <ref *109> [],
        pid: 2842,
        ppid: 1944,
        execPath: "/opt/hostedtoolcache/node/20.17.0/x64/bin/node",
        debugPort: 9229,
        argv0: "node",
        _preload_modules: [Circular: *18],
        [get/set] report: <ref *110> {
            writeReport: ƒ writeReport(length: 2) {},
            getReport: ƒ getReport(length: 1) {},
            [get/set] directory: "",
            [get/set] filename: "",
            [get/set] compact: false,
            [get/set] excludeNetwork: false,
            [get/set] signal: "SIGUSR2",
            [get/set] reportOnFatalError: false,
            [get/set] reportOnSignal: false,
            [get/set] reportOnUncaughtException: false
        },
        Symbol(shapeMode): false,
        Symbol(kCapture): false
    },
    dlopen: [Circular: *48],
    domain: null,
    emitWarning: [Circular: *69],
    env: [Circular: *108],
    execArgv: [Circular: *109],
    execPath: "/opt/hostedtoolcache/node/20.17.0/x64/bin/node",
    exit: [Circular: *57],
    exitCode: undefined,
    features: [Circular: *66],
    getActiveResourcesInfo: [Circular: *50],
    getBuiltinModule: [Circular: *72],
    getegid: [Circular: *64],
    geteuid: [Circular: *62],
    getgid: [Circular: *63],
    getgroups: [Circular: *65],
    getuid: [Circular: *61],
    hasUncaughtExceptionCaptureCallback: [Circular: *68],
    hrtime: [Circular: *58],
    initgroups: [Circular: *102],
    kill: [Circular: *56],
    loadEnvFile: [Circular: *52],
    memoryUsage: [Circular: *54],
    moduleLoadList: [Circular: *47],
    nextTick: [Circular: *70],
    openStdin: [Circular: *60],
    pid: 2842,
    platform: "linux",
    ppid: 1944,
    reallyExit: [Circular: *51],
    release: [Circular: *46],
    report: [Circular: *110],
    resourceUsage: [Circular: *53],
    setSourceMapsEnabled: [Circular: *71],
    setUncaughtExceptionCaptureCallback: [Circular: *67],
    setegid: [Circular: *104],
    seteuid: [Circular: *105],
    setgid: [Circular: *106],
    setgroups: [Circular: *103],
    setuid: [Circular: *107],
    sourceMapsEnabled: false,
    stderr: [Circular: *93],
    stdin: [Circular: *84],
    stdout: [Circular: *73],
    title: "node",
    umask: [Circular: *101],
    uptime: [Circular: *49],
    version: "v20.17.0",
    versions: [Circular: *45]
}
```

</td><td valign="top">

```js
{
    _debugEnd: <ref *2> ƒ _debugEnd(length: 0) {},
    _debugProcess: <ref *3> ƒ _debugProcess(length: 0) {},
    _fatalException: <ref *4> ƒ _fatalException(length: 1) {},
    _getActiveHandles: <ref *5> ƒ _getActiveHandles(length: 0) {},
    _getActiveRequests: <ref *6> ƒ _getActiveRequests(length: 0) {},
    _kill: <ref *7> ƒ _kill(length: 2) {},
    _linkedBinding: <ref *8> ƒ _linkedBinding(length: 0) {},
    _preload_modules: <ref *9> [],
    _rawDebug: <ref *10> ƒ _rawDebug(length: 0) {},
    _startProfilerIdleNotifier: <ref *11> ƒ _startProfilerIdleNotifier(length: 0) {},
    _stopProfilerIdleNotifier: <ref *12> ƒ _stopProfilerIdleNotifier(length: 0) {},
    _tickCallback: <ref *13> ƒ _tickCallback(length: 0) {},
    abort: <ref *14> ƒ abort(length: 1) {},
    addListener: ƒ addListener(length: 2) {},
    allowedNodeEnvironmentFlags: <ref *16> Set {},
    arch: "x64",
    argv: <ref *17> [
        "/home/runner/.bun/bin/bun",
        "/tmp/fs-fixture-1725236100683-1/process.mjs"
    ],
    argv0: "bun",
    assert: <ref *18> ƒ assert(length: 1) {},
    binding: <ref *19> ƒ binding(length: 1) {},
    browser: false,
    channel: undefined,
    chdir: <ref *20> ƒ chdir(length: 1) {},
    config: <ref *21> {
        target_defaults: {},
        variables: {
            v8_enable_i8n_support: 1,
            enable_lto: false
        }
    },
    connected: false,
    constrainedMemory: <ref *24> ƒ constrainedMemory(length: 0) {},
    cpuUsage: <ref *25> ƒ cpuUsage(length: 1) {},
    cwd: <ref *26> ƒ cwd(length: 1) {},
    debugPort: 9229,
    default: EventEmitter {
        abort: [Circular: *14],
        allowedNodeEnvironmentFlags: [Circular: *16],
        arch: "x64",
        argv: [Circular: *17],
        argv0: "bun",
        assert: [Circular: *18],
        binding: [Circular: *19],
        browser: false,
        chdir: [Circular: *20],
        channel: undefined,
        config: [Circular: *21],
        [get/set] connected: false,
        constrainedMemory: [Circular: *24],
        cpuUsage: [Circular: *25],
        cwd: [Circular: *26],
        [get/set] debugPort: 9229,
        disconnect: undefined,
        dlopen: <ref *28> ƒ dlopen(length: 1) {},
        emitWarning: <ref *29> ƒ emitWarning(length: 1) {},
        env: <ref *30> {
            [get/set] GITHUB_STATE: "/home/runner/work/_temp/_runner_file_commands/save_state_0c693af3-f6b1-4390-a3fc-1d2740bd0930",
            [get/set] npm_package_devDependencies__types_node: "^18.15.11",
            [get/set] STATS_TRP: "true",
            [get/set] DEPLOYMENT_BASEPATH: "/opt/runner",
            [get/set] DOTNET_NOLOGO: "1",
            [get/set] USER: "runner",
            [get/set] npm_config_user_agent: "pnpm/7.33.7 npm/? node/v20.17.0 linux x64",
            [get/set] CI: "true",
            [get/set] RUNNER_ENVIRONMENT: "github-hosted",
            [get/set] GITHUB_ENV: "/home/runner/work/_temp/_runner_file_commands/set_env_0c693af3-f6b1-4390-a3fc-1d2740bd0930",
            [get/set] PIPX_HOME: "/opt/pipx",
            [get/set] npm_package_devDependencies_execa: "^7.1.1",
            [get/set] npm_node_execpath: "/opt/hostedtoolcache/node/20.17.0/x64/bin/node",
            [get/set] JAVA_HOME_8_X64: "/usr/lib/jvm/temurin-8-jdk-amd64",
            [get/set] SHLVL: "1",
            [get/set] HOME: "/home/runner",
            [get/set] RUNNER_TEMP: "/home/runner/work/_temp",
            [get/set] GITHUB_EVENT_PATH: "/home/runner/work/_temp/_github_workflow/event.json",
            [get/set] JAVA_HOME_11_X64: "/usr/lib/jvm/temurin-11-jdk-amd64",
            [get/set] PIPX_BIN_DIR: "/opt/pipx_bin",
            [get/set] GITHUB_REPOSITORY_OWNER: "privatenumber",
            [get/set] npm_package_devDependencies__pvtnbr_eslint_config: "^0.33.0",
            [get/set] GRADLE_HOME: "/usr/share/gradle-8.10",
            [get/set] ANDROID_NDK_LATEST_HOME: "/usr/local/lib/android/sdk/ndk/27.0.12077973",
            [get/set] JAVA_HOME_21_X64: "/usr/lib/jvm/temurin-21-jdk-amd64",
            [get/set] STATS_RDCL: "true",
            [get/set] GITHUB_RETENTION_DAYS: "90",
            [get/set] GITHUB_REPOSITORY_OWNER_ID: "1075694",
            [get/set] POWERSHELL_DISTRIBUTION_CHANNEL: "GitHub-Actions-ubuntu22",
            [get/set] AZURE_EXTENSION_DIR: "/opt/az/azcliextensions",
            [get/set] GITHUB_HEAD_REF: "",
            [get/set] SYSTEMD_EXEC_PID: "599",
            [get/set] GITHUB_GRAPHQL_URL: "https://api.github.com/graphql",
            [get/set] GOROOT_1_20_X64: "/opt/hostedtoolcache/go/1.20.14/x64",
            [get/set] NVM_DIR: "/home/runner/.nvm",
            [get/set] DOTNET_SKIP_FIRST_TIME_EXPERIENCE: "1",
            [get/set] GOROOT_1_21_X64: "/opt/hostedtoolcache/go/1.21.13/x64",
            [get/set] JAVA_HOME_17_X64: "/usr/lib/jvm/temurin-17-jdk-amd64",
            [get/set] ImageVersion: "20240825.1.0",
            [get/set] npm_package_eslintConfig_ignorePatterns_0: "README.md",
            [get/set] RUNNER_OS: "Linux",
            [get/set] GITHUB_API_URL: "https://api.github.com",
            [get/set] GOROOT_1_22_X64: "/opt/hostedtoolcache/go/1.22.6/x64",
            [get/set] SWIFT_PATH: "/usr/share/swift/usr/bin",
            [get/set] RUNNER_USER: "runner",
            [get/set] STATS_V3PS: "true",
            [get/set] CHROMEWEBDRIVER: "/usr/local/share/chromedriver-linux64",
            [get/set] JOURNAL_STREAM: "8:19696",
            [get/set] GITHUB_WORKFLOW: "Compare Bun and Node.js",
            [get/set] _: "/home/runner/setup-pnpm/node_modules/.bin/pnpm",
            [get/set] npm_package_private: "true",
            [get/set] npm_package_scripts_lint: "eslint --cache .",
            [get/set] npm_config_registry: "https://registry.npmjs.org/",
            [get/set] ACTIONS_RUNNER_ACTION_ARCHIVE_CACHE: "/opt/actionarchivecache",
            [get/set] STATS_D: "false",
            [get/set] GITHUB_RUN_ID: "10658519579",
            [get/set] STATS_VMFE: "true",
            [get/set] GITHUB_REF_TYPE: "branch",
            [get/set] BOOTSTRAP_HASKELL_NONINTERACTIVE: "1",
            [get/set] GITHUB_WORKFLOW_SHA: "aaf98fe2abe755bc719e335b0cfef538b752e42f",
            [get/set] GITHUB_BASE_REF: "",
            [get/set] ImageOS: "ubuntu22",
            [get/set] npm_package_scripts_start: "tsx index.ts",
            [get/set] GITHUB_WORKFLOW_REF: "privatenumber/compare-bun-node/.github/workflows/compare.yml@refs/heads/master",
            [get/set] PERFLOG_LOCATION_SETTING: "RUNNER_PERFLOG",
            [get/set] GITHUB_ACTION_REPOSITORY: "",
            [get/set] npm_config_node_gyp: "/home/runner/setup-pnpm/node_modules/.pnpm/pnpm@7.33.7/node_modules/pnpm/dist/node_modules/node-gyp/…",
            [get/set] PATH: "/home/runner/work/compare-bun-node/compare-bun-node/node_modules/.bin:/home/runner/setup-pnpm/node_m…",
            [get/set] ANT_HOME: "/usr/share/ant",
            [get/set] DOTNET_MULTILEVEL_LOOKUP: "0",
            [get/set] RUNNER_TRACKING_ID: "github_5187e0f7-398e-4c7f-9f6d-ac7280aa0908",
            [get/set] INVOCATION_ID: "94c1ad43390d4f12a414bea921b757c2",
            [get/set] RUNNER_TOOL_CACHE: "/opt/hostedtoolcache",
            [get/set] NODE: "/opt/hostedtoolcache/node/20.17.0/x64/bin/node",
            [get/set] GITHUB_ACTION: "__run",
            [get/set] GITHUB_RUN_NUMBER: "91",
            [get/set] GITHUB_TRIGGERING_ACTOR: "privatenumber",
            [get/set] RUNNER_ARCH: "X64",
            [get/set] XDG_RUNTIME_DIR: "/run/user/1001",
            [get/set] AGENT_TOOLSDIRECTORY: "/opt/hostedtoolcache",
            [get/set] npm_package_devDependencies_comment_mark: "^1.1.1",
            [get/set] LANG: "C.UTF-8",
            [get/set] VCPKG_INSTALLATION_ROOT: "/usr/local/share/vcpkg",
            [get/set] npm_package_devDependencies_eslint: "^8.37.0",
            [get/set] CONDA: "/usr/share/miniconda",
            [get/set] RUNNER_NAME: "GitHub Actions 5",
            [get/set] XDG_CONFIG_HOME: "/home/runner/.config",
            [get/set] STATS_VMD: "true",
            [get/set] GITHUB_REF_NAME: "master",
            [get/set] GITHUB_REPOSITORY: "privatenumber/compare-bun-node",
            [get/set] STATS_D_D: "false",
            [get/set] npm_package_simple_git_hooks_pre_commit: "pnpm lint-staged",
            [get/set] npm_lifecycle_script: "tsx index.ts",
            [get/set] STATS_UE: "true",
            [get/set] ANDROID_NDK_ROOT: "/usr/local/lib/android/sdk/ndk/27.0.12077973",
            [get/set] GITHUB_ACTION_REF: "",
            [get/set] DEBIAN_FRONTEND: "noninteractive",
            [get/set] GITHUB_REPOSITORY_ID: "622996871",
            [get/set] GITHUB_ACTIONS: "true",
            [get/set] NODE_PATH: "/home/runner/work/compare-bun-node/compare-bun-node/node_modules/.pnpm/tsx@3.12.6/node_modules/tsx/d…",
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
            [get/set] GITHUB_SHA: "aaf98fe2abe755bc719e335b0cfef538b752e42f",
            [get/set] GITHUB_RUN_ATTEMPT: "1",
            [get/set] GITHUB_REF: "refs/heads/master",
            [get/set] GITHUB_ACTOR: "privatenumber",
            [get/set] ANDROID_SDK_ROOT: "/usr/local/lib/android/sdk",
            [get/set] npm_package_license: "MIT",
            [get/set] LEIN_HOME: "/usr/local/lib/lein",
            [get/set] npm_package_devDependencies_tsx: "^3.12.6",
            [get/set] GITHUB_PATH: "/home/runner/work/_temp/_runner_file_commands/add_path_0c693af3-f6b1-4390-a3fc-1d2740bd0930",
            [get/set] JAVA_HOME: "/usr/lib/jvm/temurin-11-jdk-amd64",
            [get/set] PWD: "/home/runner/work/compare-bun-node/compare-bun-node",
            [get/set] GITHUB_ACTOR_ID: "1075694",
            [get/set] RUNNER_WORKSPACE: "/home/runner/work/compare-bun-node",
            [get/set] npm_execpath: "/home/runner/setup-pnpm/node_modules/.pnpm/pnpm@7.33.7/node_modules/pnpm/bin/pnpm.cjs",
            [get/set] HOMEBREW_CLEANUP_PERIODIC_FULL_DAYS: "3650",
            [get/set] STATS_TIS: "mining",
            [get/set] GITHUB_EVENT_NAME: "schedule",
            [get/set] HOMEBREW_NO_AUTO_UPDATE: "1",
            [get/set] ANDROID_HOME: "/usr/local/lib/android/sdk",
            [get/set] GITHUB_SERVER_URL: "https://github.com",
            [get/set] GECKOWEBDRIVER: "/usr/local/share/gecko_driver",
            [get/set] LEIN_JAR: "/usr/local/lib/lein/self-installs/leiningen-2.11.2-standalone.jar",
            [get/set] GHCUP_INSTALL_BASE_PREFIX: "/usr/local",
            [get/set] GITHUB_OUTPUT: "/home/runner/work/_temp/_runner_file_commands/set_output_0c693af3-f6b1-4390-a3fc-1d2740bd0930",
            [get/set] EDGEWEBDRIVER: "/usr/local/share/edge_driver",
            [get/set] STATS_EXT: "true",
            [get/set] npm_command: "run-script",
            [get/set] PNPM_SCRIPT_SRC_DIR: "/home/runner/work/compare-bun-node/compare-bun-node",
            [get/set] ANDROID_NDK: "/usr/local/lib/android/sdk/ndk/27.0.12077973",
            [get/set] SGX_AESM_ADDR: "1",
            [get/set] CHROME_BIN: "/usr/bin/google-chrome",
            [get/set] SELENIUM_JAR_PATH: "/usr/share/java/selenium-server.jar",
            [get/set] PNPM_HOME: "/home/runner/setup-pnpm/node_modules/.bin",
            [get/set] STATS_EXTP: "https://provjobdsettingscdn.blob.core.windows.net/settings/provjobdsettings-0.5.181+6/provjobd.data",
            [get/set] npm_package_lint_staged____ts_js_: "eslint --cache",
            [get/set] ANDROID_NDK_HOME: "/usr/local/lib/android/sdk/ndk/27.0.12077973",
            [get/set] GITHUB_STEP_SUMMARY: "/home/runner/work/_temp/_runner_file_commands/step_summary_0c693af3-f6b1-4390-a3fc-1d2740bd0930",
            [get/set] npm_package_eslintConfig_extends: "@pvtnbr",
            [get/set] INIT_CWD: "/home/runner/work/compare-bun-node/compare-bun-node"
        },
        execArgv: <ref *31> [],
        execPath: "/home/runner/.bun/bin/bun",
        exit: <ref *32> ƒ exit(length: 1) {},
        [get/set] exitCode: undefined,
        features: <ref *33> {
            inspector: true,
            debug: false,
            uv: true,
            ipv6: true,
            tls_alpn: true,
            tls_sni: true,
            tls_ocsp: true,
            tls: true,
            cached_builtins: true
        },
        getActiveResourcesInfo: <ref *34> ƒ getActiveResourcesInfo(length: 0) {},
        hasUncaughtExceptionCaptureCallback: <ref *35> ƒ hasUncaughtExceptionCaptureCallback(length: 0) {},
        hrtime: <ref *36> ƒ hrtime(length: 0) {
            bigint: ƒ bigint(length: 0) {}
        },
        isBun: true,
        kill: <ref *38> ƒ kill(length: 2) {},
        [get/set] mainModule: undefined,
        memoryUsage: <ref *39> ƒ memoryUsage(length: 0) {
            rss: ƒ rss(length: 0) {}
        },
        moduleLoadList: <ref *41> [],
        nextTick: <ref *42> ƒ nextTick(length: 2) {},
        openStdin: <ref *43> ƒ openStdin(length: 0) {},
        pid: 2845,
        platform: "linux",
        ppid: 1944,
        reallyExit: <ref *44> ƒ reallyExit(length: 1) {},
        release: <ref *45> {
            name: "node",
            lts: false,
            sourceUrl: "https://github.com/oven-sh/bun/releases/download/bun-v1.1.27/bun-linux-x64-baseline.zip",
            headersUrl: "",
            libUrl: ""
        },
        report: <ref *46> {
            getReport: ƒ getReport(length: 0) {},
            directory: "",
            filename: "",
            writeReport: ƒ writeReport(length: 1) {}
        },
        revision: "f123814d8752dbc19c33776c567224c2890fd432",
        setSourceMapsEnabled: <ref *49> ƒ setSourceMapsEnabled(length: 1) {},
        setUncaughtExceptionCaptureCallback: <ref *50> ƒ setUncaughtExceptionCaptureCallback(length: 1) {},
        send: undefined,
        stderr: <ref *51> Writable {
            _writableState: {
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
                autoDestroy: false,
                errored: null,
                closed: false,
                closeEmitted: false,
                Symbol(kOnFinished): []
            },
            _events: [Object: null prototype] {},
            _eventsCount: 0,
            _maxListeners: undefined,
            _construct: <ref *57> ƒ NativeWritable_internalConstruct(length: 1) {},
            _final: <ref *58> ƒ NativeWritable_internalFinal(length: 1) {},
            _write: <ref *59> ƒ NativeWritablePrototypeWrite(length: 3) {},
            fd: 2,
            start: undefined,
            flags: "w",
            mode: 438,
            bytesWritten: 0,
            _type: "fs",
            destroySoon: <ref *60> ƒ (length: 2) {},
            _destroy: ƒ (length: 2) {},
            _isStdio: true,
            constructed: true,
            Symbol(kCapture): false,
            Symbol(native): true,
            Symbol(pathOrFdOrSink): 2,
            Symbol(Bun.NodeWriteStreamFastPath): false,
            Symbol(#fs): <ref *62> {
                write: ƒ write(length: 6) {
                    Symbol(nodejs.util.promisify.custom): ƒ (length: 2) {}
                },
                close: <ref *65> ƒ close(length: 2) {},
                open: ƒ open(length: 4) {},
                openSync: <ref *67> ƒ openSync(length: 3) {}
            },
            Symbol(kHandle): null,
            Symbol(Bun.NodeWriteStream): true,
            Symbol(kIoDone): false
        },
        stdin: <ref *68> Readable {
            fd: 0,
            bytesRead: 0,
            autoClose: false,
            _readableState: {
                state: 6192,
                highWaterMark: 65536,
                buffer: BufferList {},
                length: 0,
                pipes: [],
                flowing: null,
                errored: null,
                defaultEncoding: "utf8",
                awaitDrainWriters: null,
                decoder: null,
                encoding: null,
                autoClose: true,
                Symbol(kPaused): null
            },
            _events: [Object: null prototype] {
                resume: [
                    ƒ (length: 0) {}
                ],
                pause: [
                    ƒ (length: 0) {}
                ],
                close: [
                    ƒ (length: 0) {}
                ]
            },
            _eventsCount: 3,
            _maxListeners: undefined,
            end: Infinity,
            _read: ƒ (length: 1) {},
            start: 0,
            flags: "r",
            mode: 438,
            emitClose: true,
            pos: 0,
            on: ƒ (length: 2) {},
            pause: ƒ (length: 0) {},
            resume: ƒ (length: 0) {},
            Symbol(mfileSize): -1,
            Symbol(Bun.NodeReadStream): true,
            Symbol(Bun.NodeReadStreamPathOrFd): 0,
            Symbol(refCount): 0,
            Symbol(constructed): false,
            Symbol(remainingChunk): undefined,
            Symbol(pendingRead): false,
            Symbol(hasResized): false,
            Symbol(kCapture): false,
            Symbol(highWaterMark): 65536,
            Symbol(kHandle): null,
            Symbol(Bun.Node.readStreamPathFastPath): false,
            Symbol(kFs): {
                read: ƒ read(length: 6) {
                    Symbol(nodejs.util.promisify.custom): ƒ (length: 2) {}
                },
                open: ƒ open(length: 4) {},
                openSync: [Circular: *67],
                close: [Circular: *65]
            }
        },
        stdout: <ref *87> Writable {
            _writableState: {
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
                autoDestroy: false,
                errored: null,
                closed: false,
                closeEmitted: false,
                Symbol(kOnFinished): []
            },
            _events: [Object: null prototype] {},
            _eventsCount: 0,
            _maxListeners: undefined,
            _construct: [Circular: *57],
            _final: [Circular: *58],
            _write: [Circular: *59],
            fd: 1,
            start: undefined,
            flags: "w",
            mode: 438,
            bytesWritten: 0,
            _type: "fs",
            destroySoon: [Circular: *60],
            _destroy: ƒ (length: 2) {},
            _isStdio: true,
            constructed: true,
            Symbol(kCapture): false,
            Symbol(native): true,
            Symbol(pathOrFdOrSink): 1,
            Symbol(Bun.NodeWriteStreamFastPath): false,
            Symbol(#fs): [Circular: *62],
            Symbol(kHandle): null,
            Symbol(Bun.NodeWriteStream): true,
            Symbol(kIoDone): false
        },
        [get/set] title: "bun",
        umask: <ref *94> ƒ umask(length: 1) {},
        uptime: <ref *95> ƒ uptime(length: 1) {},
        version: "v22.6.0",
        versions: <ref *96> {
            node: "22.6.0",
            bun: "1.1.27",
            boringssl: "29a2cd359458c9384694b75456026e4b57e3e567",
            openssl: "1.1.0",
            libarchive: "898dc8319355b7e985f68a9819f182aaed61b53a",
            mimalloc: "4c283af60cdae205df5a872530c77e2a6a307d43",
            picohttpparser: "066d2b1e9ab820703db0837a7255d92d30f0c9f5",
            uwebsockets: "f123814d8752dbc19c33776c567224c2890fd432",
            webkit: "13bb88da0b791154dca60910f301dcd70c321f72",
            zig: "0.13.0",
            zlib: "886098f3f339617b4243b286f5ed364b9989e245",
            tinycc: "ab631362d839333660a265d3084d8ff060b96753",
            lolhtml: "8d4c273ded322193d017042d1f48df2766b0f88b",
            ares: "d1722e6e8acaf10eb73fa995798a9cd421d9f85e",
            libdeflate: "dc76454a39e7e83b68c3704b6e3784654f8d5ac5",
            usockets: "f123814d8752dbc19c33776c567224c2890fd432",
            lshpack: "3d0f1fc1d6e66a642e7a98c55deb38aa986eb4b0",
            zstd: "794ea1b0afca0f020f4e57b6732332231fb23c70",
            v8: "12.4.254.14-node.12",
            uv: "1.48.0",
            napi: "9",
            icu: "75.1",
            unicode: "15.1",
            modules: "127"
        },
        _debugEnd: [Circular: *2],
        _debugProcess: [Circular: *3],
        _fatalException: [Circular: *4],
        _getActiveRequests: [Circular: *6],
        _getActiveHandles: [Circular: *5],
        _linkedBinding: [Circular: *8],
        _preload_modules: [Circular: *9],
        _rawDebug: [Circular: *10],
        _startProfilerIdleNotifier: [Circular: *11],
        _stopProfilerIdleNotifier: [Circular: *12],
        _tickCallback: [Circular: *13],
        _kill: [Circular: *7],
        getegid: <ref *97> ƒ getegid(length: 0) {},
        geteuid: <ref *98> ƒ geteuid(length: 0) {},
        getgid: <ref *99> ƒ getgid(length: 0) {},
        getgroups: <ref *100> ƒ getgroups(length: 0) {},
        getuid: <ref *101> ƒ getuid(length: 0) {},
        Symbol(Symbol.toStringTag): "process"
    },
    disconnect: undefined,
    dlopen: [Circular: *28],
    emit: ƒ emit(length: 1) {},
    emitWarning: [Circular: *29],
    env: [Circular: *30],
    eventNames: ƒ eventNames(length: 0) {},
    execArgv: [Circular: *31],
    execPath: "/home/runner/.bun/bin/bun",
    exit: [Circular: *32],
    exitCode: undefined,
    features: [Circular: *33],
    getActiveResourcesInfo: [Circular: *34],
    getMaxListeners: ƒ getMaxListeners(length: 0) {},
    getegid: [Circular: *97],
    geteuid: [Circular: *98],
    getgid: [Circular: *99],
    getgroups: [Circular: *100],
    getuid: [Circular: *101],
    hasUncaughtExceptionCaptureCallback: [Circular: *35],
    hrtime: [Circular: *36],
    isBun: true,
    kill: [Circular: *38],
    listenerCount: ƒ listenerCount(length: 1) {},
    listeners: ƒ listeners(length: 1) {},
    mainModule: undefined,
    memoryUsage: [Circular: *39],
    moduleLoadList: [Circular: *41],
    nextTick: [Circular: *42],
    off: ƒ off(length: 2) {},
    on: ƒ on(length: 2) {},
    once: ƒ once(length: 2) {},
    openStdin: [Circular: *43],
    pid: 2845,
    platform: "linux",
    ppid: 1944,
    prependListener: ƒ prependListener(length: 2) {},
    prependOnceListener: ƒ prependOnceListener(length: 2) {},
    rawListeners: ƒ rawListeners(length: 1) {},
    reallyExit: [Circular: *44],
    release: [Circular: *45],
    removeAllListeners: ƒ removeAllListeners(length: 1) {},
    removeListener: ƒ removeListener(length: 2) {},
    report: [Circular: *46],
    revision: "f123814d8752dbc19c33776c567224c2890fd432",
    send: undefined,
    setMaxListeners: ƒ setMaxListeners(length: 1) {},
    setSourceMapsEnabled: [Circular: *49],
    setUncaughtExceptionCaptureCallback: [Circular: *50],
    stderr: [Circular: *51],
    stdin: [Circular: *68],
    stdout: [Circular: *87],
    title: "bun",
    umask: [Circular: *94],
    uptime: [Circular: *95],
    version: "v22.6.0",
    versions: [Circular: *96]
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
{
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
{
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
    Interface: <ref *2> ƒ Interface(length: 4) {
        prototype: Interface2 {
            question: ƒ question(length: 3) {
                Symbol(nodejs.util.promisify.custom): ƒ question2(length: 2) {}
            },
            _setRawMode: ƒ [_setRawMode](length: 1) {},
            _onLine: ƒ [_onLine](length: 1) {},
            _writeToOutput: ƒ [_writeToOutput](length: 1) {},
            _addHistory: ƒ [_addHistory](length: 0) {},
            _refreshLine: ƒ [_refreshLine](length: 0) {},
            _normalWrite: ƒ [_normalWrite](length: 1) {},
            _insertString: ƒ [_insertString](length: 1) {},
            _tabComplete: ƒ (length: 1) {},
            _wordLeft: ƒ [_wordLeft](length: 0) {},
            _wordRight: ƒ [_wordRight](length: 0) {},
            _deleteLeft: ƒ [_deleteLeft](length: 0) {},
            _deleteRight: ƒ [_deleteRight](length: 0) {},
            _deleteWordLeft: ƒ [_deleteWordLeft](length: 0) {},
            _deleteWordRight: ƒ [_deleteWordRight](length: 0) {},
            _deleteLineLeft: ƒ [_deleteLineLeft](length: 0) {},
            _deleteLineRight: ƒ [_deleteLineRight](length: 0) {},
            _line: ƒ [_line](length: 0) {},
            _historyNext: ƒ [_historyNext](length: 0) {},
            _historyPrev: ƒ [_historyPrev](length: 0) {},
            _getDisplayPos: ƒ [_getDisplayPos](length: 1) {},
            _getCursorPos: ƒ getCursorPos(length: 0) {},
            _moveCursor: ƒ [_moveCursor](length: 1) {},
            _ttyWrite: ƒ [_ttyWrite](length: 2) {}
        }
    },
    clearLine: <ref *29> ƒ clearLine(length: 3) {},
    clearScreenDown: <ref *30> ƒ clearScreenDown(length: 2) {},
    createInterface: <ref *31> ƒ createInterface(length: 4) {},
    cursorTo: <ref *32> ƒ cursorTo(length: 4) {},
    default: {
        Interface: [Circular: *2],
        clearLine: [Circular: *29],
        clearScreenDown: [Circular: *30],
        createInterface: [Circular: *31],
        cursorTo: [Circular: *32],
        emitKeypressEvents: <ref *34> ƒ emitKeypressEvents(length: 1) {},
        moveCursor: <ref *35> ƒ moveCursor(length: 4) {},
        promises: <ref *36> {
            Readline: ƒ Readline(length: 1) {},
            Interface: ƒ Interface3(length: 4) {},
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
        }
    },
    emitKeypressEvents: [Circular: *34],
    moveCursor: [Circular: *35],
    promises: [Circular: *36]
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
    Interface: <ref *2> ƒ Interface3(length: 4) {},
    Readline: <ref *3> ƒ Readline(length: 1) {},
    createInterface: <ref *4> ƒ createInterface(length: 4) {},
    default: {
        Readline: [Circular: *3],
        Interface: [Circular: *2],
        createInterface: [Circular: *4]
    }
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
        "inspector/promises",
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
        "wasi",
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
67 | 						functionType = `async ${functionType}`;
68 | 					}
69 | 
70 | 					serialized += `${functionType} ${value.name || ''}(length: ${value.length}) `;
71 | 				}
72 | 			} else if (value.constructor !== Object) {
                   ^
NotImplementedError: node:repl is not yet implemented in Bun.
 code: "ERR_NOT_IMPLEMENTED"

      at get (node:repl:76:8)
      at inspect (/tmp/fs-fixture-1725236100683-1/inspect.mjs:72:15)
      at /tmp/fs-fixture-1725236100683-1/inspect.mjs:99:7
      at map (1:11)
      at inspect (/tmp/fs-fixture-1725236100683-1/inspect.mjs:80:43)
      at /tmp/fs-fixture-1725236100683-1/inspect.mjs:99:7
      at map (1:11)
      at inspect (/tmp/fs-fixture-1725236100683-1/inspect.mjs:80:43)

Bun v1.1.27-canary.61+f123814d8 (Linux x64 baseline)
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
        isDestroyed: <ref *15> ƒ isDestroyed(length: 1) {},
        isDisturbed: <ref *16> ƒ isDisturbed(length: 1) {},
        isErrored: <ref *17> ƒ isErrored(length: 1) {},
        isReadable: <ref *18> ƒ isReadable(length: 1) {},
        isWritable: <ref *19> ƒ isWritable(length: 1) {},
        Readable: [Circular: *7],
        Writable: <ref *20> ƒ Writable(length: 1) {
            WritableState: ƒ WritableState(length: 3) {},
            fromWeb: ƒ (length: 2) {},
            toWeb: ƒ (length: 1) {}
        },
        Duplex: [Circular: *2],
        Transform: <ref *24> ƒ Transform(length: 1) {},
        PassThrough: [Circular: *6],
        duplexPair: <ref *25> ƒ duplexPair(length: 1) {},
        pipeline: <ref *26> ƒ pipeline(length: 0) {
            [get/set] Symbol(nodejs.util.promisify.custom): <ref *27> ƒ pipeline(length: 0) {}
        },
        addAbortSignal: <ref *28> ƒ addAbortSignal(length: 2) {},
        finished: <ref *29> ƒ eos(length: 3) {
            finished: <ref *30> ƒ finished(length: 2) {},
            [get/set] Symbol(nodejs.util.promisify.custom): [Circular: *30]
        },
        destroy: <ref *31> ƒ destroyer(length: 2) {},
        compose: <ref *32> ƒ compose(length: 0) {},
        setDefaultHighWaterMark: <ref *33> ƒ setDefaultHighWaterMark(length: 2) {},
        getDefaultHighWaterMark: <ref *34> ƒ getDefaultHighWaterMark(length: 1) {},
        [get/set] promises: <ref *35> {
            finished: [Circular: *30],
            pipeline: [Circular: *27]
        },
        Stream: [Circular: *14],
        _isArrayBufferView: <ref *36> ƒ isView(length: 1) {},
        _isUint8Array: <ref *37> ƒ isUint8Array(length: 1) {},
        _uint8ArrayToBuffer: <ref *38> ƒ _uint8ArrayToBuffer(length: 1) {}
    },
    Transform: [Circular: *24],
    Writable: [Circular: *20],
    _isArrayBufferView: [Circular: *36],
    _isUint8Array: [Circular: *37],
    _uint8ArrayToBuffer: [Circular: *38],
    addAbortSignal: [Circular: *28],
    compose: [Circular: *32],
    default: [Circular: *14],
    destroy: [Circular: *31],
    duplexPair: [Circular: *25],
    finished: [Circular: *29],
    getDefaultHighWaterMark: [Circular: *34],
    isDestroyed: [Circular: *15],
    isDisturbed: [Circular: *16],
    isErrored: [Circular: *17],
    isReadable: [Circular: *18],
    isWritable: [Circular: *19],
    pipeline: [Circular: *26],
    promises: [Circular: *35],
    setDefaultHighWaterMark: [Circular: *33]
}
```

</td><td valign="top">

```js
{
    Duplex: <ref *2> ƒ Duplex(length: 1) {
        prototype: Duplex {
            constructor: [Circular: *2],
            write: <ref *4> ƒ (length: 3) {},
            cork: <ref *5> ƒ (length: 0) {},
            uncork: <ref *6> ƒ (length: 0) {},
            setDefaultEncoding: <ref *7> ƒ setDefaultEncoding(length: 1) {},
            _write: <ref *8> ƒ (length: 3) {},
            _writev: null,
            end: <ref *9> ƒ (length: 3) {},
            _events: undefined,
            _eventsCount: 0,
            _maxListeners: undefined
        },
        fromWeb: ƒ (length: 2) {},
        toWeb: ƒ (length: 1) {},
        from: ƒ (length: 1) {}
    },
    EventEmitter: <ref *13> ƒ EventEmitter2(length: 1) {
        prototype: EventEmitter2 {
            _events: undefined,
            _eventsCount: 0,
            _maxListeners: undefined,
            setMaxListeners: ƒ setMaxListeners2(length: 1) {},
            constructor: [Circular: *13],
            getMaxListeners: ƒ getMaxListeners2(length: 0) {},
            emit: ƒ emit(length: 1) {},
            addListener: <ref *18> ƒ addListener(length: 2) {},
            on: [Circular: *18],
            prependListener: ƒ prependListener(length: 2) {},
            once: ƒ once2(length: 2) {},
            prependOnceListener: ƒ prependOnceListener(length: 2) {},
            removeListener: <ref *22> ƒ removeListener(length: 2) {},
            off: [Circular: *22],
            removeAllListeners: ƒ removeAllListeners(length: 1) {},
            listeners: ƒ listeners(length: 1) {},
            rawListeners: ƒ rawListeners(length: 1) {},
            listenerCount: ƒ listenerCount2(length: 1) {},
            eventNames: ƒ eventNames(length: 0) {},
            Symbol(kCapture): false
        },
        [get/set] captureRejections: false,
        [get/set] defaultMaxListeners: 10,
        once: <ref *28> ƒ once(length: 3) {},
        on: <ref *29> ƒ on(length: 2) {},
        getEventListeners: <ref *30> ƒ getEventListeners(length: 2) {},
        getMaxListeners: <ref *31> ƒ getMaxListeners(length: 1) {},
        setMaxListeners: <ref *32> ƒ setMaxListeners(length: 0) {},
        EventEmitter: [Circular: *13],
        usingDomains: false,
        captureRejectionSymbol: Symbol(nodejs.rejection),
        EventEmitterAsyncResource: <ref *33> ƒ EventEmitterAsyncResource(length: 1) {},
        errorMonitor: Symbol(events.errorMonitor),
        addAbortListener: <ref *34> ƒ addAbortListener(length: 2) {},
        init: [Circular: *13],
        listenerCount: <ref *35> ƒ listenerCount(length: 2) {}
    },
    EventEmitterAsyncResource: [Circular: *33],
    NativeWritable: <ref *36> ƒ NativeWritable(length: 1) {
        prototype: Writable {
            end: ƒ end(length: 4) {},
            _destroy: ƒ (length: 2) {},
            ref: ƒ ref(length: 0) {},
            unref: ƒ unref(length: 0) {}
        }
    },
    PassThrough: <ref *42> ƒ PassThrough(length: 1) {
        prototype: PassThrough {
            constructor: [Circular: *42],
            _transform: ƒ (length: 3) {}
        }
    },
    Readable: <ref *45> ƒ Readable(length: 1) {
        prototype: Readable {
            constructor: [Circular: *45],
            on: <ref *47> ƒ (length: 2) {},
            destroy: ƒ destroy2(length: 2) {},
            _undestroy: <ref *49> ƒ undestroy(length: 0) {},
            _destroy: ƒ (length: 2) {},
            push: ƒ (length: 2) {},
            unshift: ƒ (length: 2) {},
            isPaused: ƒ (length: 0) {},
            setEncoding: ƒ (length: 1) {},
            read: ƒ (length: 1) {},
            _read: ƒ (length: 1) {},
            pipe: ƒ (length: 2) {},
            unpipe: ƒ (length: 1) {},
            addListener: [Circular: *47],
            removeListener: <ref *59> ƒ (length: 2) {},
            off: [Circular: *59],
            removeAllListeners: ƒ (length: 1) {},
            resume: ƒ (length: 0) {},
            pause: ƒ (length: 0) {},
            wrap: ƒ (length: 1) {},
            iterator: ƒ (length: 1) {},
            Symbol(nodejs.rejection): ƒ (length: 1) {},
            Symbol(Symbol.asyncIterator): ƒ (length: 0) {}
        },
        ReadableState: ƒ ReadableState(length: 3) {
            prototype: {}
        },
        _fromList: ƒ fromList(length: 2) {},
        from: ƒ (length: 2) {},
        fromWeb: ƒ (length: 2) {},
        toWeb: ƒ (length: 2) {},
        wrap: ƒ (length: 2) {}
    },
    Stream: <ref *74> ƒ Stream(length: 1) {
        prototype: <ref *75> Stream {
            constructor: [Circular: *74],
            pipe: ƒ (length: 2) {}
        },
        isDisturbed: <ref *77> ƒ isDisturbed(length: 1) {},
        isErrored: <ref *78> ƒ isErrored(length: 1) {},
        isWritable: <ref *79> ƒ isWritable(length: 1) {},
        isReadable: <ref *80> ƒ isReadable(length: 1) {},
        Readable: [Circular: *45],
        Writable: <ref *81> ƒ Writable(length: 0) {
            prototype: Writable {
                constructor: [Circular: *81],
                pipe: ƒ (length: 0) {},
                write: [Circular: *4],
                cork: [Circular: *5],
                uncork: [Circular: *6],
                setDefaultEncoding: [Circular: *7],
                _write: [Circular: *8],
                _writev: null,
                end: [Circular: *9],
                destroy: ƒ (length: 2) {},
                _undestroy: [Circular: *49],
                _destroy: ƒ (length: 2) {},
                Symbol(nodejs.rejection): ƒ (length: 1) {}
            },
            fromWeb: ƒ (length: 2) {},
            toWeb: ƒ (length: 1) {}
        },
        Duplex: [Circular: *2],
        Transform: <ref *89> ƒ Transform(length: 1) {
            prototype: Transform {
                constructor: [Circular: *89],
                _final: ƒ final(length: 1) {},
                _transform: ƒ (length: 3) {},
                _write: ƒ (length: 3) {},
                _read: ƒ (length: 0) {}
            }
        },
        PassThrough: [Circular: *42],
        pipeline: <ref *95> ƒ pipeline(length: 0) {
            [get/set] Symbol(nodejs.util.promisify.custom): <ref *96> ƒ pipeline(length: 0) {}
        },
        addAbortSignal: <ref *97> ƒ addAbortSignal(length: 2) {},
        finished: <ref *98> ƒ eos(length: 3) {
            finished: <ref *99> ƒ finished(length: 2) {},
            [get/set] Symbol(nodejs.util.promisify.custom): [Circular: *99]
        },
        destroy: <ref *100> ƒ destroyer(length: 2) {},
        compose: <ref *101> ƒ compose(length: 0) {},
        [get/set] promises: <ref *102> {
            finished: [Circular: *99],
            pipeline: [Circular: *96]
        },
        Stream: [Circular: *74],
        _isUint8Array: <ref *103> ƒ isUint8Array(length: 1) {},
        _uint8ArrayToBuffer: <ref *104> ƒ _uint8ArrayToBuffer(length: 1) {},
        setDefaultHighWaterMark: <ref *105> ƒ setDefaultHighWaterMark(length: 2) {},
        getDefaultHighWaterMark: <ref *106> ƒ getDefaultHighWaterMark(length: 1) {},
        _getNativeReadableStreamPrototype: <ref *107> ƒ getNativeReadableStreamPrototype(length: 2) {},
        NativeWritable: [Circular: *36],
        eos: [Circular: *98],
        EventEmitter: [Circular: *13],
        Symbol(::bunternal::): {
            _ReadableFromWeb: ƒ newStreamReadableFromReadableStream(length: 1) {},
            _ReadableFromWebForUndici: ƒ ReadableFromWeb(length: 2) {},
            kEnsureConstructed: Symbol(kEnsureConstructed)
        }
    },
    Transform: [Circular: *89],
    Writable: [Circular: *81],
    _getNativeReadableStreamPrototype: [Circular: *107],
    _isUint8Array: [Circular: *103],
    _uint8ArrayToBuffer: [Circular: *104],
    addAbortListener: [Circular: *34],
    addAbortSignal: [Circular: *97],
    captureRejectionSymbol: Symbol(nodejs.rejection),
    captureRejections: false,
    compose: [Circular: *101],
    default: [Circular: *74],
    defaultMaxListeners: 10,
    destroy: [Circular: *100],
    eos: [Circular: *98],
    errorMonitor: Symbol(events.errorMonitor),
    finished: [Circular: *98],
    getDefaultHighWaterMark: [Circular: *106],
    getEventListeners: [Circular: *30],
    getMaxListeners: [Circular: *31],
    init: [Circular: *13],
    isDisturbed: [Circular: *77],
    isErrored: [Circular: *78],
    isReadable: [Circular: *80],
    isWritable: [Circular: *79],
    listenerCount: [Circular: *35],
    on: [Circular: *29],
    once: [Circular: *28],
    pipeline: [Circular: *95],
    promises: [Circular: *102],
    prototype: [Circular: *75],
    setDefaultHighWaterMark: [Circular: *105],
    setMaxListeners: [Circular: *32],
    usingDomains: false
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
    arrayBuffer: <ref *2> ƒ (length: 1) {},
    blob: <ref *3> ƒ (length: 1) {},
    buffer: <ref *4> ƒ buffer(length: 1) {},
    bytes: <ref *5> ƒ (length: 1) {},
    default: {
        arrayBuffer: [Circular: *2],
        bytes: [Circular: *5],
        text: <ref *7> ƒ (length: 1) {},
        json: <ref *8> ƒ json(length: 1) {},
        buffer: [Circular: *4],
        blob: [Circular: *3]
    },
    json: [Circular: *8],
    text: [Circular: *7]
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
    default: {
        finished: <ref *3> ƒ finished(length: 2) {},
        pipeline: <ref *4> ƒ pipeline(length: 0) {}
    },
    finished: [Circular: *3],
    pipeline: [Circular: *4]
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
    ReadableStream: <ref *7> class ReadableStream {
        from: ƒ from(length: 1) {}
    },
    ReadableStreamBYOBReader: <ref *9> class ReadableStreamBYOBReader {},
    ReadableStreamBYOBRequest: <ref *10> class ReadableStreamBYOBRequest {},
    ReadableStreamDefaultController: <ref *11> class ReadableStreamDefaultController {},
    ReadableStreamDefaultReader: <ref *12> class ReadableStreamDefaultReader {},
    TextDecoderStream: <ref *13> class TextDecoderStream {},
    TextEncoderStream: <ref *14> class TextEncoderStream {},
    TransformStream: <ref *15> class TransformStream {},
    TransformStreamDefaultController: <ref *16> class TransformStreamDefaultController {},
    WritableStream: <ref *17> class WritableStream {},
    WritableStreamDefaultController: <ref *18> class WritableStreamDefaultController {},
    WritableStreamDefaultWriter: <ref *19> class WritableStreamDefaultWriter {},
    default: {
        ReadableStream: [Circular: *7],
        ReadableStreamDefaultReader: [Circular: *12],
        ReadableStreamBYOBReader: [Circular: *9],
        ReadableStreamBYOBRequest: [Circular: *10],
        ReadableByteStreamController: [Circular: *6],
        ReadableStreamDefaultController: [Circular: *11],
        TransformStream: [Circular: *15],
        TransformStreamDefaultController: [Circular: *16],
        WritableStream: [Circular: *17],
        WritableStreamDefaultWriter: [Circular: *19],
        WritableStreamDefaultController: [Circular: *18],
        ByteLengthQueuingStrategy: [Circular: *2],
        CountQueuingStrategy: [Circular: *4],
        TextEncoderStream: [Circular: *14],
        TextDecoderStream: [Circular: *13],
        CompressionStream: [Circular: *3],
        DecompressionStream: [Circular: *5]
    }
}
```

</td><td valign="top">

```js
{
    ByteLengthQueuingStrategy: <ref *2> ƒ ByteLengthQueuingStrategy(length: 1) {},
    CompressionStream: undefined,
    CountQueuingStrategy: <ref *3> ƒ CountQueuingStrategy(length: 1) {},
    DecompressionStream: undefined,
    ReadableByteStreamController: <ref *4> ƒ ReadableByteStreamController(length: 3) {},
    ReadableStream: <ref *5> ƒ ReadableStream(length: 0) {},
    ReadableStreamBYOBReader: <ref *6> ƒ ReadableStreamBYOBReader(length: 1) {},
    ReadableStreamBYOBRequest: <ref *7> ƒ ReadableStreamBYOBRequest(length: 2) {},
    ReadableStreamDefaultController: <ref *8> ƒ ReadableStreamDefaultController(length: 4) {},
    ReadableStreamDefaultReader: <ref *9> ƒ ReadableStreamDefaultReader(length: 1) {},
    TextDecoderStream: <ref *10> ƒ TextDecoderStream(length: 0) {},
    TextEncoderStream: <ref *11> ƒ TextEncoderStream(length: 0) {},
    TransformStream: <ref *12> ƒ TransformStream(length: 0) {},
    TransformStreamDefaultController: <ref *13> ƒ TransformStreamDefaultController(length: 0) {},
    WritableStream: <ref *14> ƒ WritableStream(length: 0) {},
    WritableStreamDefaultController: <ref *15> ƒ WritableStreamDefaultController(length: 0) {},
    WritableStreamDefaultWriter: <ref *16> ƒ WritableStreamDefaultWriter(length: 1) {},
    default: {
        ReadableStream: [Circular: *5],
        ReadableStreamDefaultReader: [Circular: *9],
        ReadableStreamBYOBReader: [Circular: *6],
        ReadableStreamBYOBRequest: [Circular: *7],
        ReadableByteStreamController: [Circular: *4],
        ReadableStreamDefaultController: [Circular: *8],
        TransformStream: [Circular: *12],
        TransformStreamDefaultController: [Circular: *13],
        WritableStream: [Circular: *14],
        WritableStreamDefaultWriter: [Circular: *16],
        WritableStreamDefaultController: [Circular: *15],
        ByteLengthQueuingStrategy: [Circular: *2],
        CountQueuingStrategy: [Circular: *3],
        TextEncoderStream: [Circular: *11],
        TextDecoderStream: [Circular: *10],
        CompressionStream: undefined,
        DecompressionStream: undefined
    }
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
    StringDecoder: <ref *2> ƒ StringDecoder(length: 0) {},
    default: {
        StringDecoder: [Circular: *2]
    }
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
    _errnoException: <ref *6> ƒ _errnoException(length: 0) {},
    _exceptionWithHostPort: <ref *7> ƒ _exceptionWithHostPort(length: 0) {},
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
        deprecate: <ref *13> ƒ deprecate(length: 4) {},
        format: <ref *14> ƒ format(length: 0) {},
        styleText: <ref *15> ƒ styleText(length: 2) {},
        formatWithOptions: <ref *16> ƒ formatWithOptions(length: 1) {},
        getSystemErrorMap: <ref *17> ƒ getSystemErrorMap(length: 0) {},
        getSystemErrorName: <ref *18> ƒ getSystemErrorName(length: 1) {},
        inherits: <ref *19> ƒ inherits(length: 2) {},
        inspect: <ref *20> ƒ inspect(length: 2) {
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
        isArray: <ref *67> ƒ isArray(length: 1) {},
        isBoolean: <ref *68> ƒ isBoolean(length: 1) {},
        isBuffer: <ref *69> ƒ isBuffer(length: 1) {},
        isDeepStrictEqual: <ref *70> ƒ isDeepStrictEqual(length: 2) {},
        isNull: <ref *71> ƒ isNull(length: 1) {},
        isNullOrUndefined: <ref *72> ƒ isNullOrUndefined(length: 1) {},
        isNumber: <ref *73> ƒ isNumber(length: 1) {},
        isString: <ref *74> ƒ isString(length: 1) {},
        isSymbol: <ref *75> ƒ isSymbol(length: 1) {},
        isUndefined: <ref *76> ƒ isUndefined(length: 1) {},
        isRegExp: <ref *77> ƒ isRegExp(length: 0) {},
        isObject: <ref *78> ƒ isObject(length: 1) {},
        isDate: <ref *79> ƒ isDate(length: 0) {},
        isError: <ref *80> ƒ isError(length: 1) {},
        isFunction: <ref *81> ƒ isFunction(length: 1) {},
        isPrimitive: <ref *82> ƒ isPrimitive(length: 1) {},
        log: <ref *83> ƒ log(length: 0) {},
        promisify: <ref *84> ƒ promisify(length: 1) {
            custom: Symbol(nodejs.util.promisify.custom)
        },
        stripVTControlCharacters: <ref *85> ƒ stripVTControlCharacters(length: 1) {},
        toUSVString: <ref *86> ƒ toUSVString(length: 1) {},
        [get/set] transferableAbortSignal: <ref *87> ƒ transferableAbortSignal(length: 1) {},
        [get/set] transferableAbortController: <ref *88> ƒ transferableAbortController(length: 0) {},
        [get/set] aborted: [Circular: *9],
        types: <ref *89> {
            isExternal: ƒ isExternal(length: 0) {},
            isDate: [Circular: *79],
            isArgumentsObject: ƒ isArgumentsObject(length: 0) {},
            isBigIntObject: ƒ isBigIntObject(length: 0) {},
            isBooleanObject: ƒ isBooleanObject(length: 0) {},
            isNumberObject: ƒ isNumberObject(length: 0) {},
            isStringObject: ƒ isStringObject(length: 0) {},
            isSymbolObject: ƒ isSymbolObject(length: 0) {},
            isNativeError: ƒ isNativeError(length: 0) {},
            isRegExp: [Circular: *77],
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
        },
        parseEnv: <ref *130> ƒ parseEnv(length: 1) {},
        parseArgs: <ref *131> ƒ parseArgs(length: 0) {},
        TextDecoder: [Circular: *4],
        TextEncoder: [Circular: *5],
        MIMEType: [Circular: *3],
        MIMEParams: [Circular: *2]
    },
    deprecate: [Circular: *13],
    format: [Circular: *14],
    formatWithOptions: [Circular: *16],
    getSystemErrorMap: [Circular: *17],
    getSystemErrorName: [Circular: *18],
    inherits: [Circular: *19],
    inspect: [Circular: *20],
    isArray: [Circular: *67],
    isBoolean: [Circular: *68],
    isBuffer: [Circular: *69],
    isDate: [Circular: *79],
    isDeepStrictEqual: [Circular: *70],
    isError: [Circular: *80],
    isFunction: [Circular: *81],
    isNull: [Circular: *71],
    isNullOrUndefined: [Circular: *72],
    isNumber: [Circular: *73],
    isObject: [Circular: *78],
    isPrimitive: [Circular: *82],
    isRegExp: [Circular: *77],
    isString: [Circular: *74],
    isSymbol: [Circular: *75],
    isUndefined: [Circular: *76],
    log: [Circular: *83],
    parseArgs: [Circular: *131],
    parseEnv: [Circular: *130],
    promisify: [Circular: *84],
    stripVTControlCharacters: [Circular: *85],
    styleText: [Circular: *15],
    toUSVString: [Circular: *86],
    transferableAbortController: [Circular: *88],
    transferableAbortSignal: [Circular: *87],
    types: [Circular: *89]
}
(node:3065) [DEP0025] DeprecationWarning: sys is deprecated. Use util instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
```

</td><td valign="top">

```js
{
    TextDecoder: <ref *2> ƒ TextDecoder(length: 0) {},
    TextEncoder: <ref *3> ƒ TextEncoder(length: 0) {},
    _extend: <ref *4> ƒ _extend(length: 2) {},
    aborted: <ref *5> ƒ aborted(length: 2) {},
    callbackify: <ref *6> ƒ callbackify(length: 1) {},
    debug: <ref *7> ƒ debuglog(length: 1) {},
    debuglog: [Circular: *7],
    default: {
        format: <ref *9> ƒ format(length: 0) {},
        formatWithOptions: <ref *10> ƒ formatWithOptions(length: 1) {},
        stripVTControlCharacters: <ref *11> ƒ stripVTControlCharacters(length: 1) {},
        deprecate: <ref *12> ƒ deprecate(length: 3) {},
        debug: [Circular: *7],
        debuglog: [Circular: *7],
        _extend: [Circular: *4],
        inspect: <ref *13> ƒ inspect(length: 2) {
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
        types: <ref *60> {
            isExternal: ƒ isExternal(length: 1) {},
            isDate: <ref *62> ƒ isDate(length: 1) {},
            isArgumentsObject: ƒ isArgumentsObject(length: 1) {},
            isBigIntObject: ƒ isBigIntObject(length: 1) {},
            isBooleanObject: ƒ isBooleanObject(length: 1) {},
            isNumberObject: ƒ isNumberObject(length: 1) {},
            isStringObject: ƒ isStringObject(length: 1) {},
            isSymbolObject: ƒ isSymbolObject(length: 1) {},
            isNativeError: <ref *69> ƒ isNativeError(length: 1) {},
            isRegExp: <ref *70> ƒ isRegExp(length: 1) {},
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
            isFloat16Array: ƒ isFloat16Array(length: 1) {},
            isFloat32Array: ƒ isFloat32Array(length: 1) {},
            isFloat64Array: ƒ isFloat64Array(length: 1) {},
            isBigInt64Array: ƒ isBigInt64Array(length: 1) {},
            isBigUint64Array: ƒ isBigUint64Array(length: 1) {},
            isKeyObject: ƒ isKeyObject(length: 1) {},
            isCryptoKey: ƒ isCryptoKey(length: 1) {}
        },
        isArray: <ref *104> ƒ isArray(length: 1) {},
        isBoolean: <ref *105> ƒ isBoolean(length: 1) {},
        isNull: <ref *106> ƒ isNull(length: 1) {},
        isNullOrUndefined: <ref *107> ƒ isNullOrUndefined(length: 1) {},
        isNumber: <ref *108> ƒ isNumber(length: 1) {},
        isString: <ref *109> ƒ isString(length: 1) {},
        isSymbol: <ref *110> ƒ isSymbol(length: 1) {},
        isUndefined: <ref *111> ƒ isUndefined(length: 1) {},
        isRegExp: [Circular: *70],
        isObject: <ref *112> ƒ isObject(length: 1) {},
        isDate: [Circular: *62],
        isFunction: <ref *113> ƒ isFunction(length: 1) {},
        isError: [Circular: *69],
        isPrimitive: <ref *114> ƒ isPrimitive(length: 1) {},
        isBuffer: <ref *115> ƒ isBuffer(length: 1) {},
        log: <ref *116> ƒ log2(length: 0) {},
        inherits: <ref *117> ƒ inherits2(length: 2) {},
        toUSVString: <ref *118> ƒ toUSVString(length: 1) {},
        promisify: <ref *119> ƒ promisify2(length: 1) {
            custom: Symbol(nodejs.util.promisify.custom)
        },
        callbackify: [Circular: *6],
        isDeepStrictEqual: <ref *120> ƒ isDeepStrictEqual(length: 2) {},
        TextDecoder: [Circular: *2],
        TextEncoder: [Circular: *3],
        parseArgs: <ref *121> ƒ parseArgs(length: 1) {},
        styleText: <ref *122> ƒ styleText(length: 2) {},
        getSystemErrorName: <ref *123> ƒ getSystemErrorName(length: 1) {},
        aborted: [Circular: *5]
    },
    deprecate: [Circular: *12],
    format: [Circular: *9],
    formatWithOptions: [Circular: *10],
    getSystemErrorName: [Circular: *123],
    inherits: [Circular: *117],
    inspect: [Circular: *13],
    isArray: [Circular: *104],
    isBoolean: [Circular: *105],
    isBuffer: [Circular: *115],
    isDate: [Circular: *62],
    isDeepStrictEqual: [Circular: *120],
    isError: [Circular: *69],
    isFunction: [Circular: *113],
    isNull: [Circular: *106],
    isNullOrUndefined: [Circular: *107],
    isNumber: [Circular: *108],
    isObject: [Circular: *112],
    isPrimitive: [Circular: *114],
    isRegExp: [Circular: *70],
    isString: [Circular: *109],
    isSymbol: [Circular: *110],
    isUndefined: [Circular: *111],
    log: [Circular: *116],
    parseArgs: [Circular: *121],
    promisify: [Circular: *119],
    stripVTControlCharacters: [Circular: *11],
    styleText: [Circular: *122],
    toUSVString: [Circular: *118],
    types: [Circular: *60]
}
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
            [get/set] Symbol(nodejs.util.promisify.custom): <ref *9> ƒ setTimeout(length: 2) {}
        },
        clearTimeout: [Circular: *6],
        setImmediate: <ref *10> ƒ setImmediate(length: 4) {
            [get/set] Symbol(nodejs.util.promisify.custom): <ref *11> ƒ setImmediate(length: 1) {}
        },
        clearImmediate: [Circular: *4],
        setInterval: <ref *12> ƒ setInterval(length: 5) {},
        clearInterval: [Circular: *5],
        _unrefActive: [Circular: *2],
        active: [Circular: *3],
        unenroll: <ref *13> ƒ deprecated(length: 0) {},
        enroll: <ref *14> ƒ deprecated(length: 0) {},
        [get/set] promises: <ref *15> {
            setTimeout: [Circular: *9],
            setImmediate: [Circular: *11],
            setInterval: async ƒ setInterval(length: 2) {},
            scheduler: Scheduler {
                Symbol(kScheduler): true
            }
        }
    },
    enroll: [Circular: *14],
    promises: [Circular: *15],
    setImmediate: [Circular: *10],
    setInterval: [Circular: *12],
    setTimeout: [Circular: *8],
    unenroll: [Circular: *13]
}
```

</td><td valign="top">

```js
{
    clearImmediate: <ref *2> ƒ clearImmediate(length: 1) {},
    clearInterval: <ref *3> ƒ clearInterval(length: 1) {},
    clearTimeout: <ref *4> ƒ clearTimeout(length: 1) {},
    default: {
        setTimeout: <ref *6> ƒ setTimeout(length: 1) {},
        clearTimeout: [Circular: *4],
        setInterval: <ref *7> ƒ setInterval(length: 1) {},
        setImmediate: <ref *8> ƒ setImmediate(length: 1) {},
        clearInterval: [Circular: *3],
        clearImmediate: [Circular: *2]
    },
    setImmediate: [Circular: *8],
    setInterval: [Circular: *7],
    setTimeout: [Circular: *6]
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
    default: {
        setTimeout: <ref *3> ƒ setTimeoutPromise(length: 0) {},
        setImmediate: <ref *4> ƒ setImmediatePromise(length: 1) {},
        setInterval: <ref *5> ƒ setIntervalPromise(length: 0) {},
        scheduler: <ref *6> {
            wait: ƒ wait(length: 2) {},
            yield: [Circular: *4]
        }
    },
    scheduler: [Circular: *6],
    setImmediate: [Circular: *4],
    setInterval: [Circular: *5],
    setTimeout: [Circular: *3]
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
            "-----BEGIN CERTIFICATE-----\nMIICiTCCAg+gAwIBAgIQH0evqmIAcFBUTAGem2OZKjAKBggqhkjOPQQDAzCBhTELMAkGA1UE…",
            "-----BEGIN CERTIFICATE-----\nMIIDqDCCApCgAwIBAgIJAP7c4wEPyUj/MA0GCSqGSIb3DQEBBQUAMDQxCzAJBgNVBAYTAkZS…",
            "-----BEGIN CERTIFICATE-----\nMIIFsDCCA5igAwIBAgIQFci9ZUdcr7iXAF7kBtK8nTANBgkqhkiG9w0BAQUFADBeMQswCQYD…",
            "-----BEGIN CERTIFICATE-----\nMIIDODCCAiCgAwIBAgIGIAYFFnACMA0GCSqGSIb3DQEBBQUAMDsxCzAJBgNVBAYTAlJPMREw…",
            "-----BEGIN CERTIFICATE-----\nMIIEFTCCAv2gAwIBAgIGSUEs5AAQMA0GCSqGSIb3DQEBCwUAMIGnMQswCQYDVQQGEwJIVTER…",
            "-----BEGIN CERTIFICATE-----\nMIIDbTCCAlWgAwIBAgIBATANBgkqhkiG9w0BAQUFADBYMQswCQYDVQQGEwJKUDErMCkGA1UE…",
            "-----BEGIN CERTIFICATE-----\nMIIECjCCAvKgAwIBAgIJAMJ+QwRORz8ZMA0GCSqGSIb3DQEBCwUAMIGCMQswCQYDVQQGEwJI…",
            "-----BEGIN CERTIFICATE-----\nMIIDXzCCAkegAwIBAgILBAAAAAABIVhTCKIwDQYJKoZIhvcNAQELBQAwTDEgMB4GA1UECxMX…",
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
            "-----BEGIN CERTIFICATE-----\nMIIFfzCCA2egAwIBAgIJAOF8N0D9G/5nMA0GCSqGSIb3DQEBDAUAMF0xCzAJBgNVBAYTAkpQ…",
            "-----BEGIN CERTIFICATE-----\nMIICODCCAb6gAwIBAgIJANZdm7N4gS7rMAoGCCqGSM49BAMDMGExCzAJBgNVBAYTAkpQMSUw…",
            "-----BEGIN CERTIFICATE-----\nMIIFdDCCA1ygAwIBAgIQVW9l47TZkGobCdFsPsBsIDANBgkqhkiG9w0BAQsFADBUMQswCQYD…",
            "-----BEGIN CERTIFICATE-----\nMIICJTCCAaugAwIBAgIQLBcIfWQqwP6FGFkGz7RK6zAKBggqhkjOPQQDAzBUMQswCQYDVQQG…",
            "-----BEGIN CERTIFICATE-----\nMIICOjCCAcGgAwIBAgIQQvLM2htpN0RfFf51KBC49DAKBggqhkjOPQQDAzBfMQswCQYDVQQG…",
            "-----BEGIN CERTIFICATE-----\nMIIFijCCA3KgAwIBAgIQdY39i658BwD6qSWn4cetFDANBgkqhkiG9w0BAQwFADBfMQswCQYD…",
            "-----BEGIN CERTIFICATE-----\nMIIFiTCCA3GgAwIBAgIQb77arXO9CEDii02+1PdbkTANBgkqhkiG9w0BAQsFADBOMQswCQYD…",
            "-----BEGIN CERTIFICATE-----\nMIICOjCCAcCgAwIBAgIQFAP1q/s3ixdAW+JDsqXRxDAKBggqhkjOPQQDAzBOMQswCQYDVQQG…",
            "-----BEGIN CERTIFICATE-----\nMIICFTCCAZugAwIBAgIQPZg7pmY9kGP3fiZXOATvADAKBggqhkjOPQQDAzBMMS4wLAYDVQQD…",
            "-----BEGIN CERTIFICATE-----\nMIIFZDCCA0ygAwIBAgIQU9XP5hmTC/srBRLYwiqipDANBgkqhkiG9w0BAQwFADBMMS4wLAYD…",
            "-----BEGIN CERTIFICATE-----\nMIIFpTCCA42gAwIBAgIUZPYOZXdhaqs7tOqFhLuxibhxkw8wDQYJKoZIhvcNAQEMBQAwWjEL…",
            "-----BEGIN CERTIFICATE-----\nMIICVTCCAdygAwIBAgIUTyNkuI6XY57GU4HBdk7LKnQV1tcwCgYIKoZIzj0EAwMwWjELMAkG…",
            "-----BEGIN CERTIFICATE-----\nMIICHTCCAaOgAwIBAgIUQ3CCd89NXTTxyq4yLzf39H91oJ4wCgYIKoZIzj0EAwMwTjELMAkG…",
            "-----BEGIN CERTIFICATE-----\nMIICHDCCAaOgAwIBAgIUKP2ZYEFHpgE6yhR7H+/5aAiDXX0wCgYIKoZIzj0EAwMwTjELMAkG…",
            "-----BEGIN CERTIFICATE-----\nMIIFbDCCA1SgAwIBAgIUPgNJgXUWdDGOTKvVxZAplsU5EN0wDQYJKoZIhvcNAQELBQAwTjEL…",
            "-----BEGIN CERTIFICATE-----\nMIIFbDCCA1SgAwIBAgIUVBa/O345lXGN0aoApYYNK496BU4wDQYJKoZIhvcNAQELBQAwTjEL…",
            "-----BEGIN CERTIFICATE-----\nMIICQjCCAcmgAwIBAgIQNjqWjMlcsljN0AFdxeVXADAKBggqhkjOPQQDAzBjMQswCQYDVQQG…",
            "-----BEGIN CERTIFICATE-----\nMIIFszCCA5ugAwIBAgIQIZxULej27HF3+k7ow3BXlzANBgkqhkiG9w0BAQwFADBjMQswCQYD…"
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
    CLIENT_RENEG_LIMIT: 3,
    CLIENT_RENEG_WINDOW: 600,
    DEFAULT_CIPHERS: "DHE-RSA-AES256-GCM-SHA384:DHE-RSA-AES128-GCM-SHA256:ECDHE-RSA-AES256-GCM-SHA384:ECDHE-RSA-AES128-GCM…",
    DEFAULT_ECDH_CURVE: "auto",
    DEFAULT_MAX_VERSION: "TLSv1.3",
    DEFAULT_MIN_VERSION: "TLSv1.2",
    SecureContext: <ref *2> ƒ SecureContext(length: 1) {},
    Server: <ref *3> ƒ Server(length: 2) {},
    TLSSocket: <ref *4> ƒ Socket(length: 1) {
        prototype: TLSSocket2 {}
    },
    checkServerIdentity: <ref *6> ƒ checkServerIdentity(length: 2) {},
    connect: <ref *7> ƒ connect(length: 0) {},
    convertALPNProtocols: <ref *8> ƒ convertALPNProtocols(length: 2) {},
    createSecureContext: <ref *9> ƒ createSecureContext(length: 1) {},
    createServer: <ref *10> ƒ createServer(length: 2) {},
    default: {
        CLIENT_RENEG_LIMIT: 3,
        CLIENT_RENEG_WINDOW: 600,
        connect: [Circular: *7],
        convertALPNProtocols: [Circular: *8],
        createSecureContext: [Circular: *9],
        createServer: [Circular: *10],
        DEFAULT_CIPHERS: "DHE-RSA-AES256-GCM-SHA384:DHE-RSA-AES128-GCM-SHA256:ECDHE-RSA-AES256-GCM-SHA384:ECDHE-RSA-AES128-GCM…",
        DEFAULT_ECDH_CURVE: "auto",
        DEFAULT_MAX_VERSION: "TLSv1.3",
        DEFAULT_MIN_VERSION: "TLSv1.2",
        getCiphers: <ref *12> ƒ getCiphers(length: 0) {},
        parseCertString: <ref *13> ƒ parseCertString(length: 0) {},
        SecureContext: [Circular: *2],
        Server: [Circular: *3],
        TLSSocket: [Circular: *4],
        checkServerIdentity: [Circular: *6],
        rootCertificates: <ref *14> [
            "-----BEGIN CERTIFICATE-----\nMIIDdTCCAl2gAwIBAgILBAAAAAABFUtaw5QwDQYJKoZIhvcNAQEFBQAwVzELMAkGA1UEBhMC…",
            "-----BEGIN CERTIFICATE-----\nMIIEKjCCAxKgAwIBAgIEOGPe+DANBgkqhkiG9w0BAQUFADCBtDEUMBIGA1UEChMLRW50cnVz…",
            "-----BEGIN CERTIFICATE-----\nMIIDdzCCAl+gAwIBAgIEAgAAuTANBgkqhkiG9w0BAQUFADBaMQswCQYDVQQGEwJJRTESMBAG…",
            "-----BEGIN CERTIFICATE-----\nMIIEkTCCA3mgAwIBAgIERWtQVDANBgkqhkiG9w0BAQUFADCBsDELMAkGA1UEBhMCVVMxFjAU…",
            "-----BEGIN CERTIFICATE-----\nMIIEMjCCAxqgAwIBAgIBATANBgkqhkiG9w0BAQUFADB7MQswCQYDVQQGEwJHQjEbMBkGA1UE…",
            "-----BEGIN CERTIFICATE-----\nMIIFtzCCA5+gAwIBAgICBQkwDQYJKoZIhvcNAQEFBQAwRTELMAkGA1UEBhMCQk0xGTAXBgNV…",
            "-----BEGIN CERTIFICATE-----\nMIIGnTCCBIWgAwIBAgICBcYwDQYJKoZIhvcNAQEFBQAwRTELMAkGA1UEBhMCQk0xGTAXBgNV…",
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
            "-----BEGIN CERTIFICATE-----\nMIICiTCCAg+gAwIBAgIQH0evqmIAcFBUTAGem2OZKjAKBggqhkjOPQQDAzCBhTELMAkGA1UE…",
            "-----BEGIN CERTIFICATE-----\nMIIDqDCCApCgAwIBAgIJAP7c4wEPyUj/MA0GCSqGSIb3DQEBBQUAMDQxCzAJBgNVBAYTAkZS…",
            "-----BEGIN CERTIFICATE-----\nMIIFsDCCA5igAwIBAgIQFci9ZUdcr7iXAF7kBtK8nTANBgkqhkiG9w0BAQUFADBeMQswCQYD…",
            "-----BEGIN CERTIFICATE-----\nMIIDODCCAiCgAwIBAgIGIAYFFnACMA0GCSqGSIb3DQEBBQUAMDsxCzAJBgNVBAYTAlJPMREw…",
            "-----BEGIN CERTIFICATE-----\nMIIEFTCCAv2gAwIBAgIGSUEs5AAQMA0GCSqGSIb3DQEBCwUAMIGnMQswCQYDVQQGEwJIVTER…",
            "-----BEGIN CERTIFICATE-----\nMIIDbTCCAlWgAwIBAgIBATANBgkqhkiG9w0BAQUFADBYMQswCQYDVQQGEwJKUDErMCkGA1UE…",
            "-----BEGIN CERTIFICATE-----\nMIIECjCCAvKgAwIBAgIJAMJ+QwRORz8ZMA0GCSqGSIb3DQEBCwUAMIGCMQswCQYDVQQGEwJI…",
            "-----BEGIN CERTIFICATE-----\nMIIDXzCCAkegAwIBAgILBAAAAAABIVhTCKIwDQYJKoZIhvcNAQELBQAwTDEgMB4GA1UECxMX…",
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
            "-----BEGIN CERTIFICATE-----\nMIIFfzCCA2egAwIBAgIJAOF8N0D9G/5nMA0GCSqGSIb3DQEBDAUAMF0xCzAJBgNVBAYTAkpQ…",
            "-----BEGIN CERTIFICATE-----\nMIICODCCAb6gAwIBAgIJANZdm7N4gS7rMAoGCCqGSM49BAMDMGExCzAJBgNVBAYTAkpQMSUw…",
            "-----BEGIN CERTIFICATE-----\nMIIFdDCCA1ygAwIBAgIQVW9l47TZkGobCdFsPsBsIDANBgkqhkiG9w0BAQsFADBUMQswCQYD…",
            "-----BEGIN CERTIFICATE-----\nMIICJTCCAaugAwIBAgIQLBcIfWQqwP6FGFkGz7RK6zAKBggqhkjOPQQDAzBUMQswCQYDVQQG…",
            "-----BEGIN CERTIFICATE-----\nMIICOjCCAcGgAwIBAgIQQvLM2htpN0RfFf51KBC49DAKBggqhkjOPQQDAzBfMQswCQYDVQQG…",
            "-----BEGIN CERTIFICATE-----\nMIIFijCCA3KgAwIBAgIQdY39i658BwD6qSWn4cetFDANBgkqhkiG9w0BAQwFADBfMQswCQYD…",
            "-----BEGIN CERTIFICATE-----\nMIIFiTCCA3GgAwIBAgIQb77arXO9CEDii02+1PdbkTANBgkqhkiG9w0BAQsFADBOMQswCQYD…",
            "-----BEGIN CERTIFICATE-----\nMIICOjCCAcCgAwIBAgIQFAP1q/s3ixdAW+JDsqXRxDAKBggqhkjOPQQDAzBOMQswCQYDVQQG…",
            "-----BEGIN CERTIFICATE-----\nMIICFTCCAZugAwIBAgIQPZg7pmY9kGP3fiZXOATvADAKBggqhkjOPQQDAzBMMS4wLAYDVQQD…",
            "-----BEGIN CERTIFICATE-----\nMIIFZDCCA0ygAwIBAgIQU9XP5hmTC/srBRLYwiqipDANBgkqhkiG9w0BAQwFADBMMS4wLAYD…",
            "-----BEGIN CERTIFICATE-----\nMIIFpTCCA42gAwIBAgIUZPYOZXdhaqs7tOqFhLuxibhxkw8wDQYJKoZIhvcNAQEMBQAwWjEL…",
            "-----BEGIN CERTIFICATE-----\nMIICVTCCAdygAwIBAgIUTyNkuI6XY57GU4HBdk7LKnQV1tcwCgYIKoZIzj0EAwMwWjELMAkG…",
            "-----BEGIN CERTIFICATE-----\nMIICHTCCAaOgAwIBAgIUQ3CCd89NXTTxyq4yLzf39H91oJ4wCgYIKoZIzj0EAwMwTjELMAkG…",
            "-----BEGIN CERTIFICATE-----\nMIICHDCCAaOgAwIBAgIUKP2ZYEFHpgE6yhR7H+/5aAiDXX0wCgYIKoZIzj0EAwMwTjELMAkG…",
            "-----BEGIN CERTIFICATE-----\nMIIFbDCCA1SgAwIBAgIUPgNJgXUWdDGOTKvVxZAplsU5EN0wDQYJKoZIhvcNAQELBQAwTjEL…",
            "-----BEGIN CERTIFICATE-----\nMIIFbDCCA1SgAwIBAgIUVBa/O345lXGN0aoApYYNK496BU4wDQYJKoZIhvcNAQELBQAwTjEL…",
            "-----BEGIN CERTIFICATE-----\nMIICQjCCAcmgAwIBAgIQNjqWjMlcsljN0AFdxeVXADAKBggqhkjOPQQDAzBjMQswCQYDVQQG…",
            "-----BEGIN CERTIFICATE-----\nMIIFszCCA5ugAwIBAgIQIZxULej27HF3+k7ow3BXlzANBgkqhkiG9w0BAQwFADBjMQswCQYD…",
            "-----BEGIN CERTIFICATE-----\nMIICejCCAgCgAwIBAgIQMZch7a+JQn81QYehZ1ZMbTAKBggqhkjOPQQDAzBuMQswCQYDVQQG…"
        ]
    },
    getCiphers: [Circular: *12],
    parseCertString: [Circular: *13],
    rootCertificates: [Circular: *14]
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
    createTracing: <ref *2> ƒ createTracing(length: 1) {},
    default: {
        createTracing: [Circular: *2],
        getEnabledCategories: <ref *4> ƒ getEnabledCategories(length: 0) {}
    },
    getEnabledCategories: [Circular: *4]
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
    ReadStream: <ref *2> ƒ ReadStream(length: 1) {
        [get/set] prototype: Readable {
            setRawMode: ƒ (length: 1) {}
        }
    },
    WriteStream: <ref *5> ƒ WriteStream(length: 1) {
        [get/set] prototype: Writable {
            destroySoon: ƒ end(length: 4) {},
            open: ƒ open3(length: 0) {},
            isBunFastPathEnabled: ƒ isBunFastPathEnabled(length: 0) {},
            disableBunFastPath: ƒ disableBunFastPath(length: 0) {},
            _construct: ƒ _construct(length: 1) {},
            _destroy: ƒ _destroy(length: 2) {},
            close: ƒ close3(length: 1) {},
            write: ƒ write3(length: 3) {},
            _write: undefined,
            _writev: undefined,
            end: ƒ end(length: 3) {},
            _refreshSize: ƒ (length: 0) {},
            clearLine: ƒ (length: 2) {},
            clearScreenDown: ƒ (length: 1) {},
            cursorTo: ƒ (length: 3) {},
            getColorDepth: ƒ (length: 0) {},
            getWindowSize: ƒ (length: 0) {},
            hasColors: ƒ (length: 2) {},
            moveCursor: ƒ (length: 3) {},
            Symbol(Bun.NodeWriteStreamFastPathCall): ƒ WriteStreamPathFastPathCallSymbol(length: 2) {}
        }
    },
    default: {
        ReadStream: [Circular: *2],
        WriteStream: [Circular: *5],
        isatty: <ref *26> ƒ isatty(length: 0) {}
    },
    isatty: [Circular: *26]
}
```

</td></tr></table>

## url

<table><tr><th>Node.js</th><th>Bun</th></tr><tr><td valign="top">

```js
[Object: null prototype] {
    URL: <ref *2> class URL {
        canParse: ƒ canParse(length: 1) {},
        createObjectURL: ƒ createObjectURL(length: 1) {},
        revokeObjectURL: ƒ revokeObjectURL(length: 1) {}
    },
    URLSearchParams: <ref *6> class URLSearchParams {},
    Url: <ref *7> ƒ Url(length: 0) {},
    default: {
        Url: [Circular: *7],
        parse: <ref *9> ƒ urlParse(length: 3) {},
        resolve: <ref *10> ƒ urlResolve(length: 2) {},
        resolveObject: <ref *11> ƒ urlResolveObject(length: 2) {},
        format: <ref *12> ƒ urlFormat(length: 2) {},
        URL: [Circular: *2],
        URLSearchParams: [Circular: *6],
        domainToASCII: <ref *13> ƒ domainToASCII(length: 1) {},
        domainToUnicode: <ref *14> ƒ domainToUnicode(length: 1) {},
        pathToFileURL: <ref *15> ƒ pathToFileURL(length: 2) {},
        fileURLToPath: <ref *16> ƒ fileURLToPath(length: 1) {},
        urlToHttpOptions: <ref *17> ƒ urlToHttpOptions(length: 1) {}
    },
    domainToASCII: [Circular: *13],
    domainToUnicode: [Circular: *14],
    fileURLToPath: [Circular: *16],
    format: [Circular: *12],
    parse: [Circular: *9],
    pathToFileURL: [Circular: *15],
    resolve: [Circular: *10],
    resolveObject: [Circular: *11],
    urlToHttpOptions: [Circular: *17]
}
```

</td><td valign="top">

```js
{
    URL: <ref *2> ƒ URL(length: 1) {
        parse: ƒ parse(length: 1) {},
        canParse: ƒ canParse(length: 1) {},
        createObjectURL: ƒ createObjectURL(length: 1) {},
        revokeObjectURL: ƒ revokeObjectURL(length: 1) {}
    },
    URLSearchParams: <ref *7> ƒ URLSearchParams(length: 0) {},
    Url: <ref *8> ƒ Url(length: 0) {
        prototype: {
            parse: ƒ (length: 3) {},
            format: ƒ (length: 0) {},
            resolve: ƒ (length: 1) {},
            resolveObject: ƒ (length: 1) {},
            parseHost: ƒ (length: 0) {}
        }
    },
    default: {
        parse: <ref *16> ƒ urlParse(length: 3) {},
        resolve: <ref *17> ƒ urlResolve(length: 2) {},
        resolveObject: <ref *18> ƒ urlResolveObject(length: 2) {},
        format: <ref *19> ƒ urlFormat(length: 1) {},
        Url: [Circular: *8],
        URLSearchParams: [Circular: *7],
        URL: [Circular: *2],
        pathToFileURL: <ref *20> ƒ pathToFileURL(length: 1) {},
        fileURLToPath: <ref *21> ƒ fileURLToPath(length: 1) {},
        urlToHttpOptions: <ref *22> ƒ urlToHttpOptions(length: 1) {},
        domainToASCII: <ref *23> ƒ domainToAscii(length: 1) {},
        domainToUnicode: <ref *24> ƒ domainToUnicode(length: 1) {}
    },
    domainToASCII: [Circular: *23],
    domainToUnicode: [Circular: *24],
    fileURLToPath: [Circular: *21],
    format: [Circular: *19],
    parse: [Circular: *16],
    pathToFileURL: [Circular: *20],
    resolve: [Circular: *17],
    resolveObject: [Circular: *18],
    urlToHttpOptions: [Circular: *22]
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
    _errnoException: <ref *6> ƒ _errnoException(length: 0) {},
    _exceptionWithHostPort: <ref *7> ƒ _exceptionWithHostPort(length: 0) {},
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
        deprecate: <ref *13> ƒ deprecate(length: 4) {},
        format: <ref *14> ƒ format(length: 0) {},
        styleText: <ref *15> ƒ styleText(length: 2) {},
        formatWithOptions: <ref *16> ƒ formatWithOptions(length: 1) {},
        getSystemErrorMap: <ref *17> ƒ getSystemErrorMap(length: 0) {},
        getSystemErrorName: <ref *18> ƒ getSystemErrorName(length: 1) {},
        inherits: <ref *19> ƒ inherits(length: 2) {},
        inspect: <ref *20> ƒ inspect(length: 2) {
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
        isArray: <ref *67> ƒ isArray(length: 1) {},
        isBoolean: <ref *68> ƒ isBoolean(length: 1) {},
        isBuffer: <ref *69> ƒ isBuffer(length: 1) {},
        isDeepStrictEqual: <ref *70> ƒ isDeepStrictEqual(length: 2) {},
        isNull: <ref *71> ƒ isNull(length: 1) {},
        isNullOrUndefined: <ref *72> ƒ isNullOrUndefined(length: 1) {},
        isNumber: <ref *73> ƒ isNumber(length: 1) {},
        isString: <ref *74> ƒ isString(length: 1) {},
        isSymbol: <ref *75> ƒ isSymbol(length: 1) {},
        isUndefined: <ref *76> ƒ isUndefined(length: 1) {},
        isRegExp: <ref *77> ƒ isRegExp(length: 0) {},
        isObject: <ref *78> ƒ isObject(length: 1) {},
        isDate: <ref *79> ƒ isDate(length: 0) {},
        isError: <ref *80> ƒ isError(length: 1) {},
        isFunction: <ref *81> ƒ isFunction(length: 1) {},
        isPrimitive: <ref *82> ƒ isPrimitive(length: 1) {},
        log: <ref *83> ƒ log(length: 0) {},
        promisify: <ref *84> ƒ promisify(length: 1) {
            custom: Symbol(nodejs.util.promisify.custom)
        },
        stripVTControlCharacters: <ref *85> ƒ stripVTControlCharacters(length: 1) {},
        toUSVString: <ref *86> ƒ toUSVString(length: 1) {},
        [get/set] transferableAbortSignal: <ref *87> ƒ transferableAbortSignal(length: 1) {},
        [get/set] transferableAbortController: <ref *88> ƒ transferableAbortController(length: 0) {},
        [get/set] aborted: [Circular: *9],
        types: <ref *89> {
            isExternal: ƒ isExternal(length: 0) {},
            isDate: [Circular: *79],
            isArgumentsObject: ƒ isArgumentsObject(length: 0) {},
            isBigIntObject: ƒ isBigIntObject(length: 0) {},
            isBooleanObject: ƒ isBooleanObject(length: 0) {},
            isNumberObject: ƒ isNumberObject(length: 0) {},
            isStringObject: ƒ isStringObject(length: 0) {},
            isSymbolObject: ƒ isSymbolObject(length: 0) {},
            isNativeError: ƒ isNativeError(length: 0) {},
            isRegExp: [Circular: *77],
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
        },
        parseEnv: <ref *130> ƒ parseEnv(length: 1) {},
        parseArgs: <ref *131> ƒ parseArgs(length: 0) {},
        TextDecoder: [Circular: *4],
        TextEncoder: [Circular: *5],
        MIMEType: [Circular: *3],
        MIMEParams: [Circular: *2]
    },
    deprecate: [Circular: *13],
    format: [Circular: *14],
    formatWithOptions: [Circular: *16],
    getSystemErrorMap: [Circular: *17],
    getSystemErrorName: [Circular: *18],
    inherits: [Circular: *19],
    inspect: [Circular: *20],
    isArray: [Circular: *67],
    isBoolean: [Circular: *68],
    isBuffer: [Circular: *69],
    isDate: [Circular: *79],
    isDeepStrictEqual: [Circular: *70],
    isError: [Circular: *80],
    isFunction: [Circular: *81],
    isNull: [Circular: *71],
    isNullOrUndefined: [Circular: *72],
    isNumber: [Circular: *73],
    isObject: [Circular: *78],
    isPrimitive: [Circular: *82],
    isRegExp: [Circular: *77],
    isString: [Circular: *74],
    isSymbol: [Circular: *75],
    isUndefined: [Circular: *76],
    log: [Circular: *83],
    parseArgs: [Circular: *131],
    parseEnv: [Circular: *130],
    promisify: [Circular: *84],
    stripVTControlCharacters: [Circular: *85],
    styleText: [Circular: *15],
    toUSVString: [Circular: *86],
    transferableAbortController: [Circular: *88],
    transferableAbortSignal: [Circular: *87],
    types: [Circular: *89]
}
```

</td><td valign="top">

```js
{
    TextDecoder: <ref *2> ƒ TextDecoder(length: 0) {},
    TextEncoder: <ref *3> ƒ TextEncoder(length: 0) {},
    _extend: <ref *4> ƒ _extend(length: 2) {},
    aborted: <ref *5> ƒ aborted(length: 2) {},
    callbackify: <ref *6> ƒ callbackify(length: 1) {},
    debug: <ref *7> ƒ debuglog(length: 1) {},
    debuglog: [Circular: *7],
    default: {
        format: <ref *9> ƒ format(length: 0) {},
        formatWithOptions: <ref *10> ƒ formatWithOptions(length: 1) {},
        stripVTControlCharacters: <ref *11> ƒ stripVTControlCharacters(length: 1) {},
        deprecate: <ref *12> ƒ deprecate(length: 3) {},
        debug: [Circular: *7],
        debuglog: [Circular: *7],
        _extend: [Circular: *4],
        inspect: <ref *13> ƒ inspect(length: 2) {
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
        types: <ref *60> {
            isExternal: ƒ isExternal(length: 1) {},
            isDate: <ref *62> ƒ isDate(length: 1) {},
            isArgumentsObject: ƒ isArgumentsObject(length: 1) {},
            isBigIntObject: ƒ isBigIntObject(length: 1) {},
            isBooleanObject: ƒ isBooleanObject(length: 1) {},
            isNumberObject: ƒ isNumberObject(length: 1) {},
            isStringObject: ƒ isStringObject(length: 1) {},
            isSymbolObject: ƒ isSymbolObject(length: 1) {},
            isNativeError: <ref *69> ƒ isNativeError(length: 1) {},
            isRegExp: <ref *70> ƒ isRegExp(length: 1) {},
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
            isFloat16Array: ƒ isFloat16Array(length: 1) {},
            isFloat32Array: ƒ isFloat32Array(length: 1) {},
            isFloat64Array: ƒ isFloat64Array(length: 1) {},
            isBigInt64Array: ƒ isBigInt64Array(length: 1) {},
            isBigUint64Array: ƒ isBigUint64Array(length: 1) {},
            isKeyObject: ƒ isKeyObject(length: 1) {},
            isCryptoKey: ƒ isCryptoKey(length: 1) {}
        },
        isArray: <ref *104> ƒ isArray(length: 1) {},
        isBoolean: <ref *105> ƒ isBoolean(length: 1) {},
        isNull: <ref *106> ƒ isNull(length: 1) {},
        isNullOrUndefined: <ref *107> ƒ isNullOrUndefined(length: 1) {},
        isNumber: <ref *108> ƒ isNumber(length: 1) {},
        isString: <ref *109> ƒ isString(length: 1) {},
        isSymbol: <ref *110> ƒ isSymbol(length: 1) {},
        isUndefined: <ref *111> ƒ isUndefined(length: 1) {},
        isRegExp: [Circular: *70],
        isObject: <ref *112> ƒ isObject(length: 1) {},
        isDate: [Circular: *62],
        isFunction: <ref *113> ƒ isFunction(length: 1) {},
        isError: [Circular: *69],
        isPrimitive: <ref *114> ƒ isPrimitive(length: 1) {},
        isBuffer: <ref *115> ƒ isBuffer(length: 1) {},
        log: <ref *116> ƒ log2(length: 0) {},
        inherits: <ref *117> ƒ inherits2(length: 2) {},
        toUSVString: <ref *118> ƒ toUSVString(length: 1) {},
        promisify: <ref *119> ƒ promisify2(length: 1) {
            custom: Symbol(nodejs.util.promisify.custom)
        },
        callbackify: [Circular: *6],
        isDeepStrictEqual: <ref *120> ƒ isDeepStrictEqual(length: 2) {},
        TextDecoder: [Circular: *2],
        TextEncoder: [Circular: *3],
        parseArgs: <ref *121> ƒ parseArgs(length: 1) {},
        styleText: <ref *122> ƒ styleText(length: 2) {},
        getSystemErrorName: <ref *123> ƒ getSystemErrorName(length: 1) {},
        aborted: [Circular: *5]
    },
    deprecate: [Circular: *12],
    format: [Circular: *9],
    formatWithOptions: [Circular: *10],
    getSystemErrorName: [Circular: *123],
    inherits: [Circular: *117],
    inspect: [Circular: *13],
    isArray: [Circular: *104],
    isBoolean: [Circular: *105],
    isBuffer: [Circular: *115],
    isDate: [Circular: *62],
    isDeepStrictEqual: [Circular: *120],
    isError: [Circular: *69],
    isFunction: [Circular: *113],
    isNull: [Circular: *106],
    isNullOrUndefined: [Circular: *107],
    isNumber: [Circular: *108],
    isObject: [Circular: *112],
    isPrimitive: [Circular: *114],
    isRegExp: [Circular: *70],
    isString: [Circular: *109],
    isSymbol: [Circular: *110],
    isUndefined: [Circular: *111],
    log: [Circular: *116],
    parseArgs: [Circular: *121],
    promisify: [Circular: *119],
    stripVTControlCharacters: [Circular: *11],
    styleText: [Circular: *122],
    toUSVString: [Circular: *118],
    types: [Circular: *60]
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
    default: {
        isExternal: <ref *3> ƒ isExternal(length: 1) {},
        isDate: <ref *4> ƒ isDate(length: 1) {},
        isArgumentsObject: <ref *5> ƒ isArgumentsObject(length: 1) {},
        isBigIntObject: <ref *6> ƒ isBigIntObject(length: 1) {},
        isBooleanObject: <ref *7> ƒ isBooleanObject(length: 1) {},
        isNumberObject: <ref *8> ƒ isNumberObject(length: 1) {},
        isStringObject: <ref *9> ƒ isStringObject(length: 1) {},
        isSymbolObject: <ref *10> ƒ isSymbolObject(length: 1) {},
        isNativeError: <ref *11> ƒ isNativeError(length: 1) {},
        isRegExp: <ref *12> ƒ isRegExp(length: 1) {},
        isAsyncFunction: <ref *13> ƒ isAsyncFunction(length: 1) {},
        isGeneratorFunction: <ref *14> ƒ isGeneratorFunction(length: 1) {},
        isGeneratorObject: <ref *15> ƒ isGeneratorObject(length: 1) {},
        isPromise: <ref *16> ƒ isPromise(length: 1) {},
        isMap: <ref *17> ƒ isMap(length: 1) {},
        isSet: <ref *18> ƒ isSet(length: 1) {},
        isMapIterator: <ref *19> ƒ isMapIterator(length: 1) {},
        isSetIterator: <ref *20> ƒ isSetIterator(length: 1) {},
        isWeakMap: <ref *21> ƒ isWeakMap(length: 1) {},
        isWeakSet: <ref *22> ƒ isWeakSet(length: 1) {},
        isArrayBuffer: <ref *23> ƒ isArrayBuffer(length: 1) {},
        isDataView: <ref *24> ƒ isDataView(length: 1) {},
        isSharedArrayBuffer: <ref *25> ƒ isSharedArrayBuffer(length: 1) {},
        isProxy: <ref *26> ƒ isProxy(length: 1) {},
        isModuleNamespaceObject: <ref *27> ƒ isModuleNamespaceObject(length: 1) {},
        isAnyArrayBuffer: <ref *28> ƒ isAnyArrayBuffer(length: 1) {},
        isBoxedPrimitive: <ref *29> ƒ isBoxedPrimitive(length: 1) {},
        isArrayBufferView: <ref *30> ƒ isArrayBufferView(length: 1) {},
        isTypedArray: <ref *31> ƒ isTypedArray(length: 1) {},
        isUint8Array: <ref *32> ƒ isUint8Array(length: 1) {},
        isUint8ClampedArray: <ref *33> ƒ isUint8ClampedArray(length: 1) {},
        isUint16Array: <ref *34> ƒ isUint16Array(length: 1) {},
        isUint32Array: <ref *35> ƒ isUint32Array(length: 1) {},
        isInt8Array: <ref *36> ƒ isInt8Array(length: 1) {},
        isInt16Array: <ref *37> ƒ isInt16Array(length: 1) {},
        isInt32Array: <ref *38> ƒ isInt32Array(length: 1) {},
        isFloat16Array: <ref *39> ƒ isFloat16Array(length: 1) {},
        isFloat32Array: <ref *40> ƒ isFloat32Array(length: 1) {},
        isFloat64Array: <ref *41> ƒ isFloat64Array(length: 1) {},
        isBigInt64Array: <ref *42> ƒ isBigInt64Array(length: 1) {},
        isBigUint64Array: <ref *43> ƒ isBigUint64Array(length: 1) {},
        isKeyObject: <ref *44> ƒ isKeyObject(length: 1) {},
        isCryptoKey: <ref *45> ƒ isCryptoKey(length: 1) {}
    },
    isAnyArrayBuffer: [Circular: *28],
    isArgumentsObject: [Circular: *5],
    isArrayBuffer: [Circular: *23],
    isArrayBufferView: [Circular: *30],
    isAsyncFunction: [Circular: *13],
    isBigInt64Array: [Circular: *42],
    isBigIntObject: [Circular: *6],
    isBigUint64Array: [Circular: *43],
    isBooleanObject: [Circular: *7],
    isBoxedPrimitive: [Circular: *29],
    isCryptoKey: [Circular: *45],
    isDataView: [Circular: *24],
    isDate: [Circular: *4],
    isExternal: [Circular: *3],
    isFloat16Array: [Circular: *39],
    isFloat32Array: [Circular: *40],
    isFloat64Array: [Circular: *41],
    isGeneratorFunction: [Circular: *14],
    isGeneratorObject: [Circular: *15],
    isInt16Array: [Circular: *37],
    isInt32Array: [Circular: *38],
    isInt8Array: [Circular: *36],
    isKeyObject: [Circular: *44],
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
        getHeapSnapshot: <ref *9> ƒ getHeapSnapshot(length: 1) {},
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
        writeHeapSnapshot: <ref *18> ƒ writeHeapSnapshot(length: 2) {},
        promiseHooks: <ref *19> {
            createHook: ƒ createHook(length: 0) {},
            onInit: ƒ (length: 1) {},
            onBefore: ƒ (length: 1) {},
            onAfter: ƒ (length: 1) {},
            onSettled: ƒ (length: 1) {}
        },
        queryObjects: <ref *25> ƒ queryObjects(length: 1) {},
        startupSnapshot: <ref *26> {
            addDeserializeCallback: ƒ addDeserializeCallback(length: 2) {},
            addSerializeCallback: ƒ addSerializeCallback(length: 2) {},
            setDeserializeMainFunction: ƒ setDeserializeMainFunction(length: 2) {},
            isBuildingSnapshot: ƒ isBuildingSnapshot(length: 0) {}
        },
        setHeapSnapshotNearHeapLimit: <ref *31> ƒ setHeapSnapshotNearHeapLimit(length: 1) {},
        GCProfiler: [Circular: *5]
    },
    deserialize: [Circular: *14],
    getHeapCodeStatistics: [Circular: *12],
    getHeapSnapshot: [Circular: *9],
    getHeapSpaceStatistics: [Circular: *11],
    getHeapStatistics: [Circular: *10],
    promiseHooks: [Circular: *19],
    queryObjects: [Circular: *25],
    serialize: [Circular: *17],
    setFlagsFromString: [Circular: *13],
    setHeapSnapshotNearHeapLimit: [Circular: *31],
    startupSnapshot: [Circular: *26],
    stopCoverage: [Circular: *16],
    takeCoverage: [Circular: *15],
    writeHeapSnapshot: [Circular: *18]
}
```

</td><td valign="top">

```js
{
    DefaultDeserializer: <ref *2> ƒ ::bunternal::(length: 0) {},
    DefaultSerializer: <ref *3> ƒ ::bunternal::(length: 0) {},
    Deserializer: <ref *4> ƒ ::bunternal::(length: 0) {},
    Serializer: <ref *5> ƒ ::bunternal::(length: 0) {},
    cachedDataVersionTag: <ref *6> ƒ ::bunternal::(length: 0) {},
    default: {
        cachedDataVersionTag: [Circular: *6],
        getHeapSnapshot: <ref *8> ƒ ::bunternal::(length: 0) {},
        getHeapStatistics: <ref *9> ƒ ::bunternal::(length: 0) {},
        getHeapSpaceStatistics: <ref *10> ƒ ::bunternal::(length: 0) {},
        getHeapCodeStatistics: <ref *11> ƒ ::bunternal::(length: 0) {},
        setFlagsFromString: <ref *12> ƒ ::bunternal::(length: 0) {},
        deserialize: <ref *13> ƒ ::bunternal::(length: 1) {},
        takeCoverage: <ref *14> ƒ ::bunternal::(length: 0) {},
        stopCoverage: <ref *15> ƒ ::bunternal::(length: 0) {},
        serialize: <ref *16> ƒ ::bunternal::(length: 1) {},
        writeHeapSnapshot: <ref *17> ƒ ::bunternal::(length: 0) {},
        setHeapSnapshotNearHeapLimit: <ref *18> ƒ ::bunternal::(length: 0) {},
        promiseHooks: <ref *19> {
            createHook: ƒ createHook(length: 0) {},
            onInit: ƒ onInit(length: 0) {},
            onBefore: ƒ onBefore(length: 0) {},
            onAfter: ƒ onAfter(length: 0) {},
            onSettled: ƒ onSettled(length: 0) {}
        },
        startupSnapshot: <ref *25> {
            addDeserializeCallback: ƒ addDeserializeCallback(length: 0) {},
            addSerializeCallback: ƒ addSerializeCallback(length: 0) {},
            setDeserializeMainFunction: ƒ setDeserializeMainFunction(length: 0) {},
            isBuildingSnapshot: ƒ isBuildingSnapshot(length: 0) {}
        },
        Deserializer: [Circular: *4],
        Serializer: [Circular: *5],
        DefaultDeserializer: [Circular: *2],
        DefaultSerializer: [Circular: *3]
    },
    deserialize: [Circular: *13],
    getHeapCodeStatistics: [Circular: *11],
    getHeapSnapshot: [Circular: *8],
    getHeapSpaceStatistics: [Circular: *10],
    getHeapStatistics: [Circular: *9],
    promiseHooks: [Circular: *19],
    serialize: [Circular: *16],
    setFlagsFromString: [Circular: *12],
    setHeapSnapshotNearHeapLimit: [Circular: *18],
    startupSnapshot: [Circular: *25],
    stopCoverage: [Circular: *15],
    takeCoverage: [Circular: *14],
    writeHeapSnapshot: [Circular: *17]
}
```

</td></tr></table>

## vm

<table><tr><th>Node.js</th><th>Bun</th></tr><tr><td valign="top">

```js
[Object: null prototype] {
    Script: <ref *2> class Script extends ContextifyScript {},
    compileFunction: <ref *3> ƒ compileFunction(length: 2) {},
    constants: <ref *4> [Object: null prototype] {
        USE_MAIN_CONTEXT_DEFAULT_LOADER: Symbol(vm_dynamic_import_main_context_default)
    },
    createContext: <ref *5> ƒ createContext(length: 0) {},
    createScript: <ref *6> ƒ createScript(length: 2) {},
    default: {
        Script: [Circular: *2],
        createContext: [Circular: *5],
        createScript: [Circular: *6],
        runInContext: <ref *8> ƒ runInContext(length: 3) {},
        runInNewContext: <ref *9> ƒ runInNewContext(length: 3) {},
        runInThisContext: <ref *10> ƒ runInThisContext(length: 2) {},
        isContext: <ref *11> ƒ isContext(length: 1) {},
        compileFunction: [Circular: *3],
        measureMemory: <ref *12> ƒ measureMemory(length: 0) {},
        constants: [Circular: *4]
    },
    isContext: [Circular: *11],
    measureMemory: [Circular: *12],
    runInContext: [Circular: *8],
    runInNewContext: [Circular: *9],
    runInThisContext: [Circular: *10]
}
```

</td><td valign="top">

```js
{
    Module: <ref *2> ƒ Module(length: 0) {},
    Script: <ref *3> ƒ Script(length: 1) {},
    SourceTextModule: <ref *4> ƒ SourceTextModule(length: 0) {},
    SyntheticModule: <ref *5> ƒ SyntheticModule(length: 0) {},
    compileFunction: <ref *6> ƒ compileFunction(length: 0) {},
    createContext: <ref *7> ƒ createContext(length: 0) {},
    createScript: <ref *8> ƒ createScript(length: 2) {},
    default: {
        createContext: [Circular: *7],
        runInContext: <ref *10> ƒ runInContext(length: 3) {},
        runInNewContext: <ref *11> ƒ runInNewContext(length: 0) {},
        runInThisContext: <ref *12> ƒ runInThisContext(length: 0) {},
        isContext: <ref *13> ƒ isContext(length: 0) {},
        compileFunction: [Circular: *6],
        measureMemory: <ref *14> ƒ measureMemory(length: 0) {},
        Script: [Circular: *3],
        Module: [Circular: *2],
        SourceTextModule: [Circular: *4],
        SyntheticModule: [Circular: *5],
        createScript: [Circular: *8]
    },
    isContext: [Circular: *13],
    measureMemory: [Circular: *14],
    runInContext: [Circular: *10],
    runInNewContext: [Circular: *11],
    runInThisContext: [Circular: *12]
}
```

</td></tr></table>

## wasi

<table><tr><th>Node.js</th><th>Bun</th></tr><tr><td valign="top">

```js
[Object: null prototype] {
    WASI: <ref *2> class WASI {},
    default: {
        WASI: [Circular: *2]
    }
}
(node:3282) ExperimentalWarning: WASI is an experimental feature and might change at any time
(Use `node --trace-warnings ...` to show where the warning was created)
```

</td><td valign="top">

```js
{
    WASI: <ref *2> ƒ WASI2(length: 0) {},
    default: {
        WASI: [Circular: *2]
    }
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
{
    BroadcastChannel: <ref *2> ƒ BroadcastChannel(length: 1) {},
    MessageChannel: <ref *3> ƒ MessageChannel(length: 0) {},
    MessagePort: <ref *4> ƒ MessagePort(length: 0) {},
    SHARE_ENV: Symbol(nodejs.worker_threads.SHARE_ENV),
    Worker: <ref *5> ƒ Worker(length: 1) {},
    default: {
        Worker: [Circular: *5],
        workerData: undefined,
        parentPort: null,
        resourceLimits: <ref *7> {},
        isMainThread: true,
        MessageChannel: [Circular: *3],
        BroadcastChannel: [Circular: *2],
        MessagePort: [Circular: *4],
        getEnvironmentData: <ref *8> ƒ getEnvironmentData(length: 0) {},
        setEnvironmentData: <ref *9> ƒ setEnvironmentData(length: 1) {},
        getHeapSnapshot: <ref *10> ƒ getHeapSnapshot(length: 0) {},
        markAsUntransferable: <ref *11> ƒ markAsUntransferable(length: 0) {},
        moveMessagePortToContext: <ref *12> ƒ moveMessagePortToContext(length: 0) {},
        receiveMessageOnPort: <ref *13> ƒ receiveMessageOnPort(length: 1) {},
        SHARE_ENV: Symbol(nodejs.worker_threads.SHARE_ENV),
        threadId: 0
    },
    getEnvironmentData: [Circular: *8],
    getHeapSnapshot: [Circular: *10],
    isMainThread: true,
    markAsUntransferable: [Circular: *11],
    moveMessagePortToContext: [Circular: *12],
    parentPort: null,
    receiveMessageOnPort: [Circular: *13],
    resourceLimits: [Circular: *7],
    setEnvironmentData: [Circular: *9],
    threadId: 0,
    workerData: undefined
}
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
        ZLIB_VERNUM: 4865,
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
    crc32: <ref *17> ƒ crc32(length: 1) {},
    createBrotliCompress: <ref *18> ƒ value(length: 1) {},
    createBrotliDecompress: <ref *19> ƒ value(length: 1) {},
    createDeflate: <ref *20> ƒ value(length: 1) {},
    createDeflateRaw: <ref *21> ƒ value(length: 1) {},
    createGunzip: <ref *22> ƒ value(length: 1) {},
    createGzip: <ref *23> ƒ value(length: 1) {},
    createInflate: <ref *24> ƒ value(length: 1) {},
    createInflateRaw: <ref *25> ƒ value(length: 1) {},
    createUnzip: <ref *26> ƒ value(length: 1) {},
    default: {
        crc32: [Circular: *17],
        Deflate: [Circular: *4],
        Inflate: [Circular: *8],
        Gzip: [Circular: *7],
        Gunzip: [Circular: *6],
        DeflateRaw: [Circular: *5],
        InflateRaw: [Circular: *9],
        Unzip: [Circular: *10],
        BrotliCompress: [Circular: *2],
        BrotliDecompress: [Circular: *3],
        deflate: <ref *28> ƒ asyncBufferWrapper(length: 3) {},
        deflateSync: <ref *29> ƒ syncBufferWrapper(length: 2) {},
        gzip: <ref *30> ƒ asyncBufferWrapper(length: 3) {},
        gzipSync: <ref *31> ƒ syncBufferWrapper(length: 2) {},
        deflateRaw: <ref *32> ƒ asyncBufferWrapper(length: 3) {},
        deflateRawSync: <ref *33> ƒ syncBufferWrapper(length: 2) {},
        unzip: <ref *34> ƒ asyncBufferWrapper(length: 3) {},
        unzipSync: <ref *35> ƒ syncBufferWrapper(length: 2) {},
        inflate: <ref *36> ƒ asyncBufferWrapper(length: 3) {},
        inflateSync: <ref *37> ƒ syncBufferWrapper(length: 2) {},
        gunzip: <ref *38> ƒ asyncBufferWrapper(length: 3) {},
        gunzipSync: <ref *39> ƒ syncBufferWrapper(length: 2) {},
        inflateRaw: <ref *40> ƒ asyncBufferWrapper(length: 3) {},
        inflateRawSync: <ref *41> ƒ syncBufferWrapper(length: 2) {},
        brotliCompress: [Circular: *11],
        brotliCompressSync: [Circular: *12],
        brotliDecompress: [Circular: *13],
        brotliDecompressSync: [Circular: *14],
        createDeflate: [Circular: *20],
        createInflate: [Circular: *24],
        createDeflateRaw: [Circular: *21],
        createInflateRaw: [Circular: *25],
        createGzip: [Circular: *23],
        createGunzip: [Circular: *22],
        createUnzip: [Circular: *26],
        createBrotliCompress: [Circular: *18],
        createBrotliDecompress: [Circular: *19],
        constants: [Circular: *16],
        codes: [Circular: *15]
    },
    deflate: [Circular: *28],
    deflateRaw: [Circular: *32],
    deflateRawSync: [Circular: *33],
    deflateSync: [Circular: *29],
    gunzip: [Circular: *38],
    gunzipSync: [Circular: *39],
    gzip: [Circular: *30],
    gzipSync: [Circular: *31],
    inflate: [Circular: *36],
    inflateRaw: [Circular: *40],
    inflateRawSync: [Circular: *41],
    inflateSync: [Circular: *37],
    unzip: [Circular: *34],
    unzipSync: [Circular: *35]
}
```

</td><td valign="top">

```js
{
    BrotliCompress: <ref *2> ƒ BrotliCompress(length: 1) {
        prototype: Transform {
            _transform: ƒ _transform(length: 3) {},
            _flush: ƒ _flush(length: 1) {}
        }
    },
    BrotliDecompress: <ref *6> ƒ BrotliDecompress(length: 1) {
        prototype: Transform {
            _transform: ƒ (length: 3) {},
            _flush: ƒ (length: 1) {}
        }
    },
    Deflate: <ref *10> ƒ Deflate(length: 1) {
        prototype: Transform {},
        super_: <ref *12> ƒ Zlib(length: 2) {
            prototype: Transform {
                params: ƒ (length: 3) {},
                reset: ƒ (length: 0) {},
                _flush: ƒ (length: 1) {},
                flush: ƒ (length: 2) {},
                close: ƒ (length: 1) {},
                _transform: ƒ (length: 3) {},
                _processChunk: ƒ (length: 3) {}
            },
            super_: <ref *21> ƒ Transform(length: 1) {
                prototype: Transform {
                    constructor: [Circular: *21],
                    _final: ƒ final(length: 1) {},
                    _transform: ƒ (length: 3) {},
                    _write: ƒ (length: 3) {},
                    _read: ƒ (length: 0) {}
                }
            }
        }
    },
    DeflateRaw: <ref *27> ƒ DeflateRaw(length: 1) {
        prototype: Transform {},
        super_: [Circular: *12]
    },
    Gunzip: <ref *29> ƒ Gunzip(length: 1) {
        prototype: Transform {},
        super_: [Circular: *12]
    },
    Gzip: <ref *31> ƒ Gzip(length: 1) {
        prototype: Transform {},
        super_: [Circular: *12]
    },
    Inflate: <ref *33> ƒ Inflate(length: 1) {
        prototype: Transform {},
        super_: [Circular: *12]
    },
    InflateRaw: <ref *35> ƒ InflateRaw(length: 1) {
        prototype: Transform {},
        super_: [Circular: *12]
    },
    Unzip: <ref *37> ƒ Unzip(length: 1) {
        prototype: Transform {},
        super_: [Circular: *12]
    },
    Z_ASCII: 1,
    Z_BEST_COMPRESSION: 9,
    Z_BEST_SPEED: 1,
    Z_BINARY: 0,
    Z_BLOCK: 5,
    Z_BUF_ERROR: -5,
    Z_DATA_ERROR: -3,
    Z_DEFAULT_CHUNK: 16384,
    Z_DEFAULT_COMPRESSION: -1,
    Z_DEFAULT_LEVEL: -1,
    Z_DEFAULT_MEMLEVEL: 8,
    Z_DEFAULT_STRATEGY: 0,
    Z_DEFAULT_WINDOWBITS: 15,
    Z_DEFLATED: 8,
    Z_ERRNO: -1,
    Z_FILTERED: 1,
    Z_FINISH: 4,
    Z_FIXED: 4,
    Z_FULL_FLUSH: 3,
    Z_HUFFMAN_ONLY: 2,
    Z_MAX_CHUNK: Infinity,
    Z_MAX_LEVEL: 9,
    Z_MAX_MEMLEVEL: 9,
    Z_MAX_WINDOWBITS: 15,
    Z_MEM_ERROR: -4,
    Z_MIN_CHUNK: 64,
    Z_MIN_LEVEL: -1,
    Z_MIN_MEMLEVEL: 1,
    Z_MIN_WINDOWBITS: 8,
    Z_NEED_DICT: 2,
    Z_NO_COMPRESSION: 0,
    Z_NO_FLUSH: 0,
    Z_OK: 0,
    Z_PARTIAL_FLUSH: 1,
    Z_RLE: 3,
    Z_STREAM_END: 1,
    Z_STREAM_ERROR: -2,
    Z_SYNC_FLUSH: 2,
    Z_TEXT: 1,
    Z_TREES: 6,
    Z_UNKNOWN: 2,
    Z_VERSION_ERROR: -6,
    Zlib: <ref *39> ƒ Zlib(length: 1) {
        prototype: {
            close: ƒ (length: 0) {},
            write: ƒ (length: 7) {},
            writeSync: ƒ (length: 7) {},
            _write: ƒ (length: 8) {},
            _afterSync: ƒ (length: 0) {},
            _process: ƒ (length: 0) {},
            _checkError: ƒ (length: 0) {},
            _after: ƒ (length: 0) {},
            _error: ƒ (length: 1) {},
            init: ƒ (length: 5) {},
            params: ƒ (length: 0) {},
            reset: ƒ (length: 0) {},
            _init: ƒ (length: 5) {},
            _setDictionary: ƒ (length: 0) {},
            _reset: ƒ (length: 0) {}
        }
    },
    brotliCompress: <ref *56> ƒ brotliCompress(length: 3) {},
    brotliCompressSync: <ref *57> ƒ brotliCompressSync(length: 2) {},
    brotliDecompress: <ref *58> ƒ brotliDecompress(length: 3) {},
    brotliDecompressSync: <ref *59> ƒ brotliDecompressSync(length: 2) {},
    codes: <ref *60> {
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
    constants: <ref *61> {
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
        Z_BINARY: 0,
        Z_TEXT: 1,
        Z_ASCII: 1,
        Z_UNKNOWN: 2,
        Z_DEFLATED: 8,
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
    createBrotliCompress: <ref *62> ƒ createBrotliCompress(length: 1) {},
    createBrotliDecompress: <ref *63> ƒ createBrotliDecompress(length: 1) {},
    createDeflate: <ref *64> ƒ (length: 1) {},
    createDeflateRaw: <ref *65> ƒ (length: 1) {},
    createGunzip: <ref *66> ƒ (length: 1) {},
    createGzip: <ref *67> ƒ (length: 1) {},
    createInflate: <ref *68> ƒ (length: 1) {},
    createInflateRaw: <ref *69> ƒ (length: 1) {},
    createUnzip: <ref *70> ƒ (length: 1) {},
    default: {
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
        Z_BINARY: 0,
        Z_TEXT: 1,
        Z_ASCII: 1,
        Z_UNKNOWN: 2,
        Z_DEFLATED: 8,
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
        Zlib: [Circular: *39],
        codes: [Circular: *60],
        constants: [Circular: *61],
        Deflate: [Circular: *10],
        Inflate: [Circular: *33],
        Gzip: [Circular: *31],
        Gunzip: [Circular: *29],
        DeflateRaw: [Circular: *27],
        InflateRaw: [Circular: *35],
        Unzip: [Circular: *37],
        createDeflate: [Circular: *64],
        createInflate: [Circular: *68],
        createDeflateRaw: [Circular: *65],
        createInflateRaw: [Circular: *69],
        createGzip: [Circular: *67],
        createGunzip: [Circular: *66],
        createUnzip: [Circular: *70],
        deflate: <ref *72> ƒ (length: 3) {},
        deflateSync: <ref *73> ƒ (length: 2) {},
        gzip: <ref *74> ƒ (length: 3) {},
        gzipSync: <ref *75> ƒ (length: 2) {},
        deflateRaw: <ref *76> ƒ (length: 3) {},
        deflateRawSync: <ref *77> ƒ (length: 2) {},
        unzip: <ref *78> ƒ (length: 3) {},
        unzipSync: <ref *79> ƒ (length: 2) {},
        inflate: <ref *80> ƒ (length: 3) {},
        inflateSync: <ref *81> ƒ (length: 2) {},
        gunzip: <ref *82> ƒ (length: 3) {},
        gunzipSync: <ref *83> ƒ (length: 2) {},
        inflateRaw: <ref *84> ƒ (length: 3) {},
        inflateRawSync: <ref *85> ƒ (length: 2) {},
        brotliCompress: [Circular: *56],
        brotliDecompress: [Circular: *58],
        brotliCompressSync: [Circular: *57],
        brotliDecompressSync: [Circular: *59],
        createBrotliCompress: [Circular: *62],
        BrotliCompress: [Circular: *2],
        createBrotliDecompress: [Circular: *63],
        BrotliDecompress: [Circular: *6]
    },
    deflate: [Circular: *72],
    deflateRaw: [Circular: *76],
    deflateRawSync: [Circular: *77],
    deflateSync: [Circular: *73],
    gunzip: [Circular: *82],
    gunzipSync: [Circular: *83],
    gzip: [Circular: *74],
    gzipSync: [Circular: *75],
    inflate: [Circular: *80],
    inflateRaw: [Circular: *84],
    inflateRawSync: [Circular: *85],
    inflateSync: [Circular: *81],
    unzip: [Circular: *78],
    unzipSync: [Circular: *79]
}
```

</td></tr></table>
<!-- comparison:end -->
