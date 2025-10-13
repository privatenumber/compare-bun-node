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

_Last updated on <!-- lastUpdated:start -->Oct 13, 2025 with Bun 1.3.1 Node.js v22.20.0<!-- lastUpdated:end -->._

## [Node.js APIs](https://nodejs.org/api/) compared
<!-- builtins:start -->
<!-- builtins:end -->


<!-- comparison:start -->
<details>
				<summary><code>_http_agent</code></summary>
				<br>

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
            agentKeepAliveTimeoutBuffer: 1000,
            Symbol(shapeMode): false,
            Symbol(kCapture): false
        }
    },
    globalAgent: [Circular: *4]
}
```

</td><td valign="top">

```js
[Object: null prototype] {
    Agent: <ref *2> ƒ Agent(length: 0) {},
    NODE_HTTP_WARNING: "WARN: Agent is mostly unused in Bun's implementation of http. If you see strange behavior, this is p…",
    default: {
        Agent: [Circular: *2],
        globalAgent: <ref *4> Agent {
            _events: [Object: null prototype] {},
            _eventsCount: 0,
            _maxListeners: undefined,
            defaultPort: 80,
            protocol: "http:",
            options: {
                path: null,
                noDelay: true
            },
            requests: [Object: null prototype] {},
            sockets: [Object: null prototype] {},
            freeSockets: [Object: null prototype] {},
            keepAliveMsecs: 1000,
            keepAlive: false,
            maxSockets: Infinity,
            maxFreeSockets: 256,
            scheduling: "lifo",
            maxTotalSockets: undefined,
            totalSocketCount: 0,
            Symbol(kCapture): false
        },
        NODE_HTTP_WARNING: "WARN: Agent is mostly unused in Bun's implementation of http. If you see strange behavior, this is p…"
    },
    globalAgent: [Circular: *4]
}
```

</td></tr></table>
			</details>

<details>
				<summary><code>_http_client</code></summary>
				<br>

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
 98 |     this.push(chunk);
 99 |   if (isLast)
100 |     emitEOFIncomingMessage(this);
101 | }
102 | var IncomingMessagePrototype = {
103 |   __proto__: Readable.prototype,
                                                ^
TypeError: undefined is not an object (evaluating '@internalModuleRegistr')
      at node:_http_incoming (node:_http_incoming:103:22)
      at node:_http_common (node:_http_common:2:360)
      at node:_http_client (node:_http_client:2:573)

Bun v1.3.1-canary.22+db7bcd79f (Linux x64 baseline)
```

</td></tr></table>
			</details>

<details>
				<summary><code>_http_common</code></summary>
				<br>

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
        kLenientTransferEncoding: 8,
        kLenientVersion: 16,
        kLenientDataAfterClose: 32,
        kLenientOptionalLFAfterCR: 64,
        kLenientOptionalCRLFAfterChunk: 128,
        kLenientOptionalCRBeforeLF: 256,
        kLenientSpacesAfterChunkSize: 512,
        kLenientAll: 1023
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
            "SOURCE",
            "QUERY"
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
 98 |     this.push(chunk);
 99 |   if (isLast)
100 |     emitEOFIncomingMessage(this);
101 | }
102 | var IncomingMessagePrototype = {
103 |   __proto__: Readable.prototype,
                                                ^
TypeError: undefined is not an object (evaluating '@internalModuleRegistr')
      at node:_http_incoming (node:_http_incoming:103:22)
      at node:_http_common (node:_http_common:2:360)

Bun v1.3.1-canary.22+db7bcd79f (Linux x64 baseline)
```

</td></tr></table>
			</details>

<details>
				<summary><code>_http_incoming</code></summary>
				<br>

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
 98 |     this.push(chunk);
 99 |   if (isLast)
100 |     emitEOFIncomingMessage(this);
101 | }
102 | var IncomingMessagePrototype = {
103 |   __proto__: Readable.prototype,
                                                ^
TypeError: undefined is not an object (evaluating '@internalModuleRegistr')
      at node:_http_incoming (node:_http_incoming:103:22)

Bun v1.3.1-canary.22+db7bcd79f (Linux x64 baseline)
```

</td></tr></table>
			</details>

<details>
				<summary><code>_http_outgoing</code></summary>
				<br>

<table><tr><th>Node.js</th><th>Bun</th></tr><tr><td valign="top">

```js
[Object: null prototype] {
    OutgoingMessage: <ref *2> ƒ OutgoingMessage(length: 1) {},
    default: {
        kHighWaterMark: Symbol(kHighWaterMark),
        kUniqueHeaders: Symbol(kUniqueHeaders),
        parseUniqueHeadersOption: <ref *4> ƒ parseUniqueHeadersOption(length: 1) {},
        validateHeaderName: <ref *5> ƒ validateHeaderName(length: 0) {
            withoutStackTrace: ƒ (length: 2) {}
        },
        validateHeaderValue: <ref *7> ƒ validateHeaderValue(length: 0) {
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
[Object: null prototype] {
    FakeSocket: <ref *2> class Socket extends Duplex {},
    OutgoingMessage: <ref *3> ƒ OutgoingMessage(length: 1) {
        prototype: <ref *4> OutgoingMessage {
            constructor: [Circular: *3],
            _keepAliveTimeout: 0,
            _defaultKeepAlive: true,
            shouldKeepAlive: true,
            _onPendingData: ƒ nop2(length: 0) {},
            outputSize: 0,
            outputData: [],
            strictContentLength: false,
            _removedTE: false,
            _removedContLen: false,
            _removedConnection: false,
            usesChunkedEncodingByDefault: true,
            _closed: false,
            [get/set] _headerNames: [Object: null prototype] {},
            appendHeader: ƒ appendHeader(length: 2) {},
            _implicitHeader: ƒ _implicitHeader(length: 0) {},
            flushHeaders: ƒ flushHeaders(length: 0) {},
            getHeader: ƒ getHeader(length: 1) {},
            write: ƒ write(length: 3) {},
            pipe: ƒ pipe(length: 0) {},
            getHeaderNames: ƒ getHeaderNames(length: 0) {},
            getRawHeaderNames: ƒ getRawHeaderNames(length: 0) {},
            getHeaders: ƒ getHeaders(length: 0) {},
            removeHeader: ƒ removeHeader(length: 1) {},
            setHeader: ƒ setHeader(length: 2) {},
            setHeaders: ƒ setHeaders(length: 1) {},
            hasHeader: ƒ hasHeader(length: 1) {},
            [get/set] headers: [Object: null prototype] {},
            addTrailers: ƒ addTrailers(length: 1) {},
            setTimeout: ƒ setTimeout(length: 2) {},
            [get/set] connection: <ref *24> Socket {
                _events: {
                    close: undefined,
                    error: undefined,
                    prefinish: undefined,
                    finish: undefined,
                    drain: undefined,
                    data: undefined,
                    end: undefined,
                    readable: undefined
                },
                _readableState: {
                    highWaterMark: 65536,
                    buffer: [],
                    bufferIndex: 0,
                    length: 0,
                    pipes: [],
                    awaitDrainWriters: null,
                    Symbol(kState): 1052940
                },
                _writableState: {
                    highWaterMark: 65536,
                    length: 0,
                    corked: 0,
                    onwrite: ƒ bound onwrite(length: 1) {},
                    writelen: 0,
                    bufferedIndex: 0,
                    pendingcb: 0,
                    Symbol(kState): 17580812,
                    Symbol(kBufferedValue): null
                },
                allowHalfOpen: true,
                _maxListeners: undefined,
                bytesRead: 0,
                bytesWritten: 0,
                connecting: false,
                timeout: 0,
                isServer: false,
                _httpMessage: [Circular: *4],
                _onTimeout: ƒ _onTimeout(length: 0) {},
                Symbol(kCapture): false,
                Symbol(::bunternal::): undefined
            },
            [get/set] socket: [Circular: *24],
            [get/set] chunkedEncoding: false,
            [get/set] writableObjectMode: false,
            [get/set] writableLength: 0,
            [get/set] writableHighWaterMark: 16384,
            [get/set] writableNeedDrain: undefined,
            [get/set] writableEnded: undefined,
            [get/set] writableFinished: undefined,
            _send: ƒ _send(length: 4) {},
            _writeRaw: ƒ _writeRaw(length: 4) {},
            end: ƒ end(length: 3) {},
            [get/set] writableCorked: 0,
            cork: ƒ cork(length: 0) {},
            uncork: ƒ uncork(length: 0) {},
            destroy: ƒ destroy(length: 1) {}
        }
    },
    OutgoingMessagePrototype: [Circular: *4],
    default: {
        OutgoingMessage: [Circular: *3],
        FakeSocket: [Circular: *2],
        OutgoingMessagePrototype: [Circular: *4]
    }
}
DeprecationWarning: OutgoingMessage.prototype._headerNames is deprecated
 code: "DEP0066"

      at <anonymous> (internal:util/deprecate:9:30)
      at deprecated (internal:util/deprecate:20:29)
      at <anonymous> (/tmp/fs-fixture-1760314717602-1/inspect.mjs:97:29)
      at map (1:11)
      at inspect (/tmp/fs-fixture-1760314717602-1/inspect.mjs:81:43)
      at <anonymous> (/tmp/fs-fixture-1760314717602-1/inspect.mjs:101:8)
      at map (1:11)
      at inspect (/tmp/fs-fixture-1760314717602-1/inspect.mjs:81:43)
      at <anonymous> (/tmp/fs-fixture-1760314717602-1/inspect.mjs:101:8)

```

</td></tr></table>
			</details>

<details>
				<summary><code>_http_server</code></summary>
				<br>

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
[Object: null prototype] {
    Server: <ref *2> ƒ Server(length: 2) {},
    ServerResponse: <ref *3> ƒ ServerResponse(length: 2) {},
    default: {
        Server: [Circular: *2],
        ServerResponse: [Circular: *3],
        kConnectionsCheckingInterval: Symbol(http.server.connectionsCheckingInterval)
    },
    kConnectionsCheckingInterval: Symbol(http.server.connectionsCheckingInterval)
}
```

</td></tr></table>
			</details>

<details>
				<summary><code>_stream_duplex</code></summary>
				<br>

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

</td></tr></table>
			</details>

<details>
				<summary><code>_stream_passthrough</code></summary>
				<br>

<table><tr><th>Node.js</th><th>Bun</th></tr><tr><td valign="top">

```js
[Object: null prototype] {
    default: ƒ PassThrough(length: 1) {}
}
```

</td><td valign="top">

```js
[Object: null prototype] {
    default: ƒ PassThrough(length: 1) {}
}
```

</td></tr></table>
			</details>

<details>
				<summary><code>_stream_readable</code></summary>
				<br>

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
[Object: null prototype] {
    ReadableState: <ref *2> ƒ ReadableState(length: 3) {
        prototype: {
            Symbol(kOnConstructed): ƒ onConstructed(length: 1) {}
        }
    },
    _fromList: <ref *5> ƒ fromList(length: 2) {},
    default: ƒ Readable(length: 1) {
        ReadableState: [Circular: *2],
        _fromList: [Circular: *5],
        from: <ref *7> ƒ (length: 2) {},
        fromWeb: <ref *8> ƒ (length: 2) {},
        toWeb: <ref *9> ƒ (length: 2) {},
        wrap: <ref *10> ƒ (length: 2) {}
    },
    from: [Circular: *7],
    fromWeb: [Circular: *8],
    toWeb: [Circular: *9],
    wrap: [Circular: *10]
}
```

</td></tr></table>
			</details>

<details>
				<summary><code>_stream_transform</code></summary>
				<br>

<table><tr><th>Node.js</th><th>Bun</th></tr><tr><td valign="top">

```js
[Object: null prototype] {
    default: ƒ Transform(length: 1) {}
}
```

</td><td valign="top">

```js
[Object: null prototype] {
    default: ƒ Transform(length: 1) {}
}
```

</td></tr></table>
			</details>

<details>
				<summary><code>_stream_wrap</code></summary>
				<br>

<table><tr><th>Node.js</th><th>Bun</th></tr><tr><td valign="top">

```js
[Object: null prototype] {
    default: class JSStreamSocket extends Socket {}
}
(node:2374) [DEP0125] DeprecationWarning: The _stream_wrap module is deprecated.
(Use `node --trace-deprecation ...` to show where the warning was created)
```

</td><td valign="top">

```js
[Object: null prototype] {
    Duplex: <ref *2> ƒ Duplex(length: 1) {
        fromWeb: ƒ (length: 2) {},
        toWeb: ƒ (length: 1) {},
        from: ƒ (length: 1) {}
    },
    PassThrough: <ref *6> ƒ PassThrough(length: 1) {},
    Readable: <ref *7> ƒ Readable(length: 1) {
        ReadableState: ƒ ReadableState(length: 3) {
            prototype: {
                Symbol(kOnConstructed): ƒ onConstructed(length: 1) {}
            }
        },
        _fromList: ƒ fromList(length: 2) {},
        from: ƒ (length: 2) {},
        fromWeb: ƒ (length: 2) {},
        toWeb: ƒ (length: 2) {},
        wrap: ƒ (length: 2) {}
    },
    Stream: <ref *16> ƒ Stream(length: 1) {
        _isArrayBufferView: <ref *17> ƒ isArrayBufferView(length: 1) {},
        _isUint8Array: <ref *18> ƒ isUint8Array(length: 1) {},
        _uint8ArrayToBuffer: <ref *19> ƒ _uint8ArrayToBuffer(length: 1) {},
        isDestroyed: <ref *20> ƒ isDestroyed(length: 1) {},
        isDisturbed: <ref *21> ƒ isDisturbed(length: 1) {},
        isErrored: <ref *22> ƒ isErrored(length: 1) {},
        isReadable: <ref *23> ƒ isReadable(length: 1) {},
        isWritable: <ref *24> ƒ isWritable(length: 1) {},
        Readable: [Circular: *7],
        Writable: <ref *25> ƒ Writable(length: 1) {
            WritableState: ƒ WritableState(length: 3) {
                prototype: {
                    getBuffer: ƒ getBuffer(length: 0) {},
                    Symbol(kOnConstructed): ƒ onConstructed(length: 1) {}
                }
            },
            fromWeb: ƒ (length: 2) {},
            toWeb: ƒ (length: 1) {}
        },
        Duplex: [Circular: *2],
        Transform: <ref *32> ƒ Transform(length: 1) {},
        PassThrough: [Circular: *6],
        duplexPair: <ref *33> ƒ duplexPair(length: 1) {},
        pipeline: <ref *34> ƒ pipeline(length: 0) {
            [get/set] Symbol(nodejs.util.promisify.custom): <ref *35> ƒ pipeline(length: 0) {}
        },
        addAbortSignal: <ref *36> ƒ addAbortSignal(length: 2) {},
        finished: <ref *37> ƒ eos(length: 3) {
            finished: <ref *38> ƒ finished(length: 2) {},
            [get/set] Symbol(nodejs.util.promisify.custom): [Circular: *38]
        },
        destroy: <ref *39> ƒ destroyer(length: 2) {},
        compose: <ref *40> ƒ compose(length: 0) {},
        setDefaultHighWaterMark: <ref *41> ƒ setDefaultHighWaterMark(length: 2) {},
        getDefaultHighWaterMark: <ref *42> ƒ getDefaultHighWaterMark(length: 1) {},
        [get/set] promises: <ref *43> {
            finished: [Circular: *38],
            pipeline: [Circular: *35]
        },
        Stream: [Circular: *16],
        eos: [Circular: *37]
    },
    Transform: [Circular: *32],
    Writable: [Circular: *25],
    _isArrayBufferView: [Circular: *17],
    _isUint8Array: [Circular: *18],
    _uint8ArrayToBuffer: [Circular: *19],
    addAbortSignal: [Circular: *36],
    compose: [Circular: *40],
    default: [Circular: *16],
    destroy: [Circular: *39],
    duplexPair: [Circular: *33],
    eos: [Circular: *37],
    finished: [Circular: *37],
    getDefaultHighWaterMark: [Circular: *42],
    isDestroyed: [Circular: *20],
    isDisturbed: [Circular: *21],
    isErrored: [Circular: *22],
    isReadable: [Circular: *23],
    isWritable: [Circular: *24],
    pipeline: [Circular: *34],
    promises: [Circular: *43],
    setDefaultHighWaterMark: [Circular: *41]
}
DeprecationWarning: The _stream_wrap module is deprecated.
 code: "DEP0125"

      at node:_stream_wrap (node:_stream_wrap:3:20)

```

</td></tr></table>
			</details>

<details>
				<summary><code>_stream_writable</code></summary>
				<br>

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
[Object: null prototype] {
    WritableState: <ref *2> ƒ WritableState(length: 3) {
        prototype: {
            getBuffer: ƒ getBuffer(length: 0) {},
            Symbol(kOnConstructed): ƒ onConstructed(length: 1) {}
        }
    },
    default: ƒ Writable(length: 1) {
        WritableState: [Circular: *2],
        fromWeb: <ref *7> ƒ (length: 2) {},
        toWeb: <ref *8> ƒ (length: 1) {}
    },
    fromWeb: [Circular: *7],
    toWeb: [Circular: *8]
}
```

</td></tr></table>
			</details>

<details>
				<summary><code>_tls_common</code></summary>
				<br>

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
[Object: null prototype] {
    default: {
        translatePeerCertificate: <ref *3> ƒ translatePeerCertificate(length: 1) {}
    },
    translatePeerCertificate: [Circular: *3]
}
```

</td></tr></table>
			</details>

<details>
				<summary><code>_tls_wrap</code></summary>
				<br>

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
[Object: null prototype] {
    CLIENT_RENEG_LIMIT: 3,
    CLIENT_RENEG_WINDOW: 600,
    DEFAULT_CIPHERS: "TLS_AES_256_GCM_SHA384:TLS_CHACHA20_POLY1305_SHA256:TLS_AES_128_GCM_SHA256:ECDHE-RSA-AES128-GCM-SHA2…",
    DEFAULT_ECDH_CURVE: "auto",
    DEFAULT_MAX_VERSION: "TLSv1.3",
    DEFAULT_MIN_VERSION: "TLSv1.2",
    SecureContext: <ref *2> ƒ SecureContext2(length: 1) {},
    Server: <ref *3> ƒ Server(length: 2) {},
    TLSSocket: <ref *4> ƒ TLSSocket(length: 2) {},
    checkServerIdentity: <ref *5> ƒ checkServerIdentity(length: 2) {},
    connect: <ref *6> ƒ connect(length: 0) {},
    convertALPNProtocols: <ref *7> ƒ convertALPNProtocols(length: 2) {},
    createSecureContext: <ref *8> ƒ createSecureContext(length: 1) {},
    createServer: <ref *9> ƒ createServer(length: 2) {},
    default: {
        CLIENT_RENEG_LIMIT: 3,
        CLIENT_RENEG_WINDOW: 600,
        connect: [Circular: *6],
        convertALPNProtocols: [Circular: *7],
        createSecureContext: [Circular: *8],
        createServer: [Circular: *9],
        [get/set] DEFAULT_CIPHERS: "TLS_AES_256_GCM_SHA384:TLS_CHACHA20_POLY1305_SHA256:TLS_AES_128_GCM_SHA256:ECDHE-RSA-AES128-GCM-SHA2…",
        DEFAULT_ECDH_CURVE: "auto",
        DEFAULT_MAX_VERSION: "TLSv1.3",
        DEFAULT_MIN_VERSION: "TLSv1.2",
        getCiphers: <ref *11> ƒ getCiphers(length: 0) {},
        parseCertString: <ref *12> ƒ parseCertString(length: 0) {},
        SecureContext: [Circular: *2],
        Server: [Circular: *3],
        TLSSocket: [Circular: *4],
        checkServerIdentity: [Circular: *5],
        [get/set] rootCertificates: <ref *13> [
            "-----BEGIN CERTIFICATE-----\nMIIEkTCCA3mgAwIBAgIERWtQVDANBgkqhkiG9w0BAQUFADCBsDELMAkGA1UEBhMCVVMxFjAU…",
            "-----BEGIN CERTIFICATE-----\nMIIFtzCCA5+gAwIBAgICBQkwDQYJKoZIhvcNAQEFBQAwRTELMAkGA1UEBhMCQk0xGTAXBgNV…",
            "-----BEGIN CERTIFICATE-----\nMIIGnTCCBIWgAwIBAgICBcYwDQYJKoZIhvcNAQEFBQAwRTELMAkGA1UEBhMCQk0xGTAXBgNV…",
            "-----BEGIN CERTIFICATE-----\nMIIDtzCCAp+gAwIBAgIQDOfg5RfYRv6P5WD8G/AwOTANBgkqhkiG9w0BAQUFADBlMQswCQYD…",
            "-----BEGIN CERTIFICATE-----\nMIIDrzCCApegAwIBAgIQCDvgVpBCRrGhdWrJWZHHSjANBgkqhkiG9w0BAQUFADBhMQswCQYD…",
            "-----BEGIN CERTIFICATE-----\nMIIDxTCCAq2gAwIBAgIQAqxcJmoLQJuPC3nyrkYldzANBgkqhkiG9w0BAQUFADBsMQswCQYD…",
            "-----BEGIN CERTIFICATE-----\nMIIFujCCA6KgAwIBAgIJALtAHEP1Xk+wMA0GCSqGSIb3DQEBBQUAMEUxCzAJBgNVBAYTAkNI…",
            "-----BEGIN CERTIFICATE-----\nMIIDuDCCAqCgAwIBAgIQDPCOXAgWpa1Cf/DrJxhZ0DANBgkqhkiG9w0BAQUFADBIMQswCQYD…",
            "-----BEGIN CERTIFICATE-----\nMIIDvDCCAqSgAwIBAgIQB1YipOjUiolN9BPI8PjqpTANBgkqhkiG9w0BAQUFADBKMQswCQYD…",
            "-----BEGIN CERTIFICATE-----\nMIIEHTCCAwWgAwIBAgIQToEtioJl4AsC7j41AkblPTANBgkqhkiG9w0BAQUFADCBgTELMAkG…",
            "-----BEGIN CERTIFICATE-----\nMIICiTCCAg+gAwIBAgIQH0evqmIAcFBUTAGem2OZKjAKBggqhkjOPQQDAzCBhTELMAkGA1UE…",
            "-----BEGIN CERTIFICATE-----\nMIIDqDCCApCgAwIBAgIJAP7c4wEPyUj/MA0GCSqGSIb3DQEBBQUAMDQxCzAJBgNVBAYTAkZS…",
            "-----BEGIN CERTIFICATE-----\nMIIFsDCCA5igAwIBAgIQFci9ZUdcr7iXAF7kBtK8nTANBgkqhkiG9w0BAQUFADBeMQswCQYD…",
            "-----BEGIN CERTIFICATE-----\nMIIDODCCAiCgAwIBAgIGIAYFFnACMA0GCSqGSIb3DQEBBQUAMDsxCzAJBgNVBAYTAlJPMREw…",
            "-----BEGIN CERTIFICATE-----\nMIIEFTCCAv2gAwIBAgIGSUEs5AAQMA0GCSqGSIb3DQEBCwUAMIGnMQswCQYDVQQGEwJIVTER…",
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
            "-----BEGIN CERTIFICATE-----\nMIICejCCAgCgAwIBAgIQMZch7a+JQn81QYehZ1ZMbTAKBggqhkjOPQQDAzBuMQswCQYDVQQG…",
            "-----BEGIN CERTIFICATE-----\nMIIFjTCCA3WgAwIBAgIQQAE0jMIAAAAAAAAAATzyxjANBgkqhkiG9w0BAQwFADBQMQswCQYD…",
            "-----BEGIN CERTIFICATE-----\nMIIDcjCCAlqgAwIBAgIUZvnHwa/swlG07VOX5uaCwysckBYwDQYJKoZIhvcNAQELBQAwUTEL…",
            "-----BEGIN CERTIFICATE-----\nMIIFcjCCA1qgAwIBAgIUZNtaDCBO6Ncpd8hQJ6JaJ90t8sswDQYJKoZIhvcNAQEMBQAwUTEL…",
            "-----BEGIN CERTIFICATE-----\nMIICIzCCAamgAwIBAgIUFhXHw9hJp75pDIqI7fBw+d23PocwCgYIKoZIzj0EAwMwUTELMAkG…",
            "-----BEGIN CERTIFICATE-----\nMIIFqTCCA5GgAwIBAgIQczswBEhb2U14LnNLyaHcZjANBgkqhkiG9w0BAQ0FADBIMQswCQYD…",
            "-----BEGIN CERTIFICATE-----\nMIICMTCCAbegAwIBAgIUNnThTXxlE8msg1UloD5Sfi9QaMcwCgYIKoZIzj0EAwMwWDELMAkG…",
            "-----BEGIN CERTIFICATE-----\nMIIFgDCCA2igAwIBAgIUHBjYz+VTPyI1RlNUJDxsR9FcSpwwDQYJKoZIhvcNAQEMBQAwWDEL…",
            "-----BEGIN CERTIFICATE-----\nMIIFqTCCA5GgAwIBAgIQaSYJfoBLTKCnjHhiU19abzANBgkqhkiG9w0BAQ0FADBIMQswCQYD…",
            "-----BEGIN CERTIFICATE-----\nMIIFkzCCA3ugAwIBAgIUQ/oMX04bgBhE79G0TzUfRPSA7cswDQYJKoZIhvcNAQELBQAwUTEL…"
        ],
        getCACertificates: <ref *14> ƒ getCACertificates(length: 0) {}
    },
    getCACertificates: [Circular: *14],
    getCiphers: [Circular: *11],
    parseCertString: [Circular: *12],
    rootCertificates: [Circular: *13]
}
```

</td></tr></table>
			</details>

<details>
				<summary><code>assert</code></summary>
				<br>

<table><tr><th>Node.js</th><th>Bun</th></tr><tr><td valign="top">

```js
[Object: null prototype] {
    Assert: <ref *2> ƒ Assert(length: 1) {},
    AssertionError: <ref *3> class AssertionError extends Error {},
    CallTracker: <ref *4> ƒ deprecated(length: 0) {},
    deepEqual: <ref *5> ƒ deepEqual(length: 3) {},
    deepStrictEqual: <ref *6> ƒ deepStrictEqual(length: 3) {},
    default: <ref *7> ƒ ok(length: 0) {
        AssertionError: [Circular: *3],
        CallTracker: [Circular: *4],
        ok: [Circular: *7],
        fail: <ref *8> ƒ fail(length: 5) {},
        equal: <ref *9> ƒ equal(length: 3) {},
        notEqual: <ref *10> ƒ notEqual(length: 3) {},
        deepEqual: [Circular: *5],
        notDeepEqual: <ref *11> ƒ notDeepEqual(length: 3) {},
        deepStrictEqual: [Circular: *6],
        notDeepStrictEqual: <ref *12> ƒ notDeepStrictEqual(length: 3) {},
        strictEqual: <ref *13> ƒ strictEqual(length: 3) {},
        notStrictEqual: <ref *14> ƒ notStrictEqual(length: 3) {},
        partialDeepStrictEqual: <ref *15> ƒ partialDeepStrictEqual(length: 3) {},
        match: <ref *16> ƒ match(length: 3) {},
        doesNotMatch: <ref *17> ƒ doesNotMatch(length: 3) {},
        throws: <ref *18> ƒ throws(length: 1) {},
        rejects: <ref *19> async ƒ rejects(length: 1) {},
        doesNotThrow: <ref *20> ƒ doesNotThrow(length: 1) {},
        doesNotReject: <ref *21> async ƒ doesNotReject(length: 1) {},
        ifError: <ref *22> ƒ ifError(length: 1) {},
        strict: <ref *23> ƒ strict(length: 0) {
            AssertionError: [Circular: *3],
            CallTracker: [Circular: *4],
            ok: [Circular: *7],
            fail: [Circular: *8],
            equal: [Circular: *13],
            notEqual: [Circular: *14],
            deepEqual: [Circular: *6],
            notDeepEqual: [Circular: *12],
            deepStrictEqual: [Circular: *6],
            notDeepStrictEqual: [Circular: *12],
            strictEqual: [Circular: *13],
            notStrictEqual: [Circular: *14],
            partialDeepStrictEqual: [Circular: *15],
            match: [Circular: *16],
            doesNotMatch: [Circular: *17],
            throws: [Circular: *18],
            rejects: [Circular: *19],
            doesNotThrow: [Circular: *20],
            doesNotReject: [Circular: *21],
            ifError: [Circular: *22],
            Assert: [Circular: *2],
            strict: [Circular: *23]
        },
        Assert: [Circular: *2]
    },
    doesNotMatch: [Circular: *17],
    doesNotReject: [Circular: *21],
    doesNotThrow: [Circular: *20],
    equal: [Circular: *9],
    fail: [Circular: *8],
    ifError: [Circular: *22],
    match: [Circular: *16],
    notDeepEqual: [Circular: *11],
    notDeepStrictEqual: [Circular: *12],
    notEqual: [Circular: *10],
    notStrictEqual: [Circular: *14],
    ok: [Circular: *7],
    partialDeepStrictEqual: [Circular: *15],
    rejects: [Circular: *19],
    strict: [Circular: *23],
    strictEqual: [Circular: *13],
    throws: [Circular: *18]
}
```

</td><td valign="top">

```js
[Object: null prototype] {
    AssertionError: <ref *2> class AssertionError extends Error {},
    CallTracker: <ref *3> ƒ deprecated(length: 0) {},
    deepEqual: <ref *4> ƒ deepEqual(length: 3) {},
    deepStrictEqual: <ref *5> ƒ deepStrictEqual(length: 3) {},
    default: <ref *6> ƒ ok(length: 0) {
        fail: <ref *7> ƒ fail(length: 5) {},
        [get/set] AssertionError: [Circular: *2],
        ok: [Circular: *6],
        equal: <ref *8> ƒ equal(length: 3) {},
        notEqual: <ref *9> ƒ notEqual(length: 3) {},
        deepEqual: [Circular: *4],
        notDeepEqual: <ref *10> ƒ notDeepEqual(length: 3) {},
        deepStrictEqual: [Circular: *5],
        notDeepStrictEqual: <ref *11> ƒ notDeepStrictEqual(length: 3) {},
        strictEqual: <ref *12> ƒ strictEqual(length: 3) {},
        notStrictEqual: <ref *13> ƒ notStrictEqual(length: 3) {},
        partialDeepStrictEqual: <ref *14> ƒ partialDeepStrictEqual(length: 3) {},
        throws: <ref *15> ƒ throws(length: 1) {},
        rejects: <ref *16> async ƒ rejects(length: 1) {},
        doesNotThrow: <ref *17> ƒ doesNotThrow(length: 1) {},
        doesNotReject: <ref *18> async ƒ doesNotReject(length: 1) {},
        ifError: <ref *19> ƒ ifError(length: 1) {},
        match: <ref *20> ƒ match(length: 3) {},
        doesNotMatch: <ref *21> ƒ doesNotMatch(length: 3) {},
        [get/set] CallTracker: [Circular: *3],
        strict: <ref *22> ƒ strict(length: 0) {
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
            partialDeepStrictEqual: [Circular: *14],
            throws: [Circular: *15],
            rejects: [Circular: *16],
            doesNotThrow: [Circular: *17],
            doesNotReject: [Circular: *18],
            ifError: [Circular: *19],
            match: [Circular: *20],
            doesNotMatch: [Circular: *21],
            CallTracker: [Circular: *3],
            strict: [Circular: *22]
        }
    },
    doesNotMatch: [Circular: *21],
    doesNotReject: [Circular: *18],
    doesNotThrow: [Circular: *17],
    equal: [Circular: *8],
    fail: [Circular: *7],
    ifError: [Circular: *19],
    match: [Circular: *20],
    notDeepEqual: [Circular: *10],
    notDeepStrictEqual: [Circular: *11],
    notEqual: [Circular: *9],
    notStrictEqual: [Circular: *13],
    ok: [Circular: *6],
    partialDeepStrictEqual: [Circular: *14],
    rejects: [Circular: *16],
    strict: [Circular: *22],
    strictEqual: [Circular: *12],
    throws: [Circular: *15]
}
```

</td></tr></table>
			</details>

<details>
				<summary><code>assert/strict</code></summary>
				<br>

<table><tr><th>Node.js</th><th>Bun</th></tr><tr><td valign="top">

```js
[Object: null prototype] {
    Assert: <ref *2> ƒ Assert(length: 1) {},
    AssertionError: <ref *3> class AssertionError extends Error {},
    CallTracker: <ref *4> ƒ deprecated(length: 0) {},
    deepEqual: <ref *5> ƒ deepStrictEqual(length: 3) {},
    deepStrictEqual: [Circular: *5],
    default: <ref *6> ƒ strict(length: 0) {
        AssertionError: [Circular: *3],
        CallTracker: [Circular: *4],
        ok: <ref *7> ƒ ok(length: 0) {
            AssertionError: [Circular: *3],
            CallTracker: [Circular: *4],
            ok: [Circular: *7],
            fail: <ref *8> ƒ fail(length: 5) {},
            equal: ƒ equal(length: 3) {},
            notEqual: ƒ notEqual(length: 3) {},
            deepEqual: ƒ deepEqual(length: 3) {},
            notDeepEqual: ƒ notDeepEqual(length: 3) {},
            deepStrictEqual: [Circular: *5],
            notDeepStrictEqual: <ref *13> ƒ notDeepStrictEqual(length: 3) {},
            strictEqual: <ref *14> ƒ strictEqual(length: 3) {},
            notStrictEqual: <ref *15> ƒ notStrictEqual(length: 3) {},
            partialDeepStrictEqual: <ref *16> ƒ partialDeepStrictEqual(length: 3) {},
            match: <ref *17> ƒ match(length: 3) {},
            doesNotMatch: <ref *18> ƒ doesNotMatch(length: 3) {},
            throws: <ref *19> ƒ throws(length: 1) {},
            rejects: <ref *20> async ƒ rejects(length: 1) {},
            doesNotThrow: <ref *21> ƒ doesNotThrow(length: 1) {},
            doesNotReject: <ref *22> async ƒ doesNotReject(length: 1) {},
            ifError: <ref *23> ƒ ifError(length: 1) {},
            strict: [Circular: *6],
            Assert: [Circular: *2]
        },
        fail: [Circular: *8],
        equal: [Circular: *14],
        notEqual: [Circular: *15],
        deepEqual: [Circular: *5],
        notDeepEqual: [Circular: *13],
        deepStrictEqual: [Circular: *5],
        notDeepStrictEqual: [Circular: *13],
        strictEqual: [Circular: *14],
        notStrictEqual: [Circular: *15],
        partialDeepStrictEqual: [Circular: *16],
        match: [Circular: *17],
        doesNotMatch: [Circular: *18],
        throws: [Circular: *19],
        rejects: [Circular: *20],
        doesNotThrow: [Circular: *21],
        doesNotReject: [Circular: *22],
        ifError: [Circular: *23],
        Assert: [Circular: *2],
        strict: [Circular: *6]
    },
    doesNotMatch: [Circular: *18],
    doesNotReject: [Circular: *22],
    doesNotThrow: [Circular: *21],
    equal: [Circular: *14],
    fail: [Circular: *8],
    ifError: [Circular: *23],
    match: [Circular: *17],
    notDeepEqual: [Circular: *13],
    notDeepStrictEqual: [Circular: *13],
    notEqual: [Circular: *15],
    notStrictEqual: [Circular: *15],
    ok: [Circular: *7],
    partialDeepStrictEqual: [Circular: *16],
    rejects: [Circular: *20],
    strict: [Circular: *6],
    strictEqual: [Circular: *14],
    throws: [Circular: *19]
}
```

</td><td valign="top">

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
            [get/set] AssertionError: [Circular: *2],
            ok: [Circular: *7],
            equal: ƒ equal(length: 3) {},
            notEqual: ƒ notEqual(length: 3) {},
            deepEqual: ƒ deepEqual(length: 3) {},
            notDeepEqual: ƒ notDeepEqual(length: 3) {},
            deepStrictEqual: [Circular: *4],
            notDeepStrictEqual: <ref *12> ƒ notDeepStrictEqual(length: 3) {},
            strictEqual: <ref *13> ƒ strictEqual(length: 3) {},
            notStrictEqual: <ref *14> ƒ notStrictEqual(length: 3) {},
            partialDeepStrictEqual: <ref *15> ƒ partialDeepStrictEqual(length: 3) {},
            throws: <ref *16> ƒ throws(length: 1) {},
            rejects: <ref *17> async ƒ rejects(length: 1) {},
            doesNotThrow: <ref *18> ƒ doesNotThrow(length: 1) {},
            doesNotReject: <ref *19> async ƒ doesNotReject(length: 1) {},
            ifError: <ref *20> ƒ ifError(length: 1) {},
            match: <ref *21> ƒ match(length: 3) {},
            doesNotMatch: <ref *22> ƒ doesNotMatch(length: 3) {},
            [get/set] CallTracker: [Circular: *3],
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
        partialDeepStrictEqual: [Circular: *15],
        throws: [Circular: *16],
        rejects: [Circular: *17],
        doesNotThrow: [Circular: *18],
        doesNotReject: [Circular: *19],
        ifError: [Circular: *20],
        match: [Circular: *21],
        doesNotMatch: [Circular: *22],
        CallTracker: [Circular: *3],
        strict: [Circular: *5]
    },
    doesNotMatch: [Circular: *22],
    doesNotReject: [Circular: *19],
    doesNotThrow: [Circular: *18],
    equal: [Circular: *13],
    fail: [Circular: *6],
    ifError: [Circular: *20],
    match: [Circular: *21],
    notDeepEqual: [Circular: *12],
    notDeepStrictEqual: [Circular: *12],
    notEqual: [Circular: *14],
    notStrictEqual: [Circular: *14],
    ok: [Circular: *7],
    partialDeepStrictEqual: [Circular: *15],
    rejects: [Circular: *17],
    strict: [Circular: *5],
    strictEqual: [Circular: *13],
    throws: [Circular: *16]
}
```

</td></tr></table>
			</details>

<details>
				<summary><code>async_hooks</code></summary>
				<br>

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
        QUIC_ENDPOINT: 28,
        QUIC_LOGSTREAM: 29,
        QUIC_PACKET: 30,
        QUIC_SESSION: 31,
        QUIC_STREAM: 32,
        QUIC_UDP: 33,
        SHUTDOWNWRAP: 34,
        SIGNALWRAP: 35,
        STATWATCHER: 36,
        STREAMPIPE: 37,
        TCPCONNECTWRAP: 38,
        TCPSERVERWRAP: 39,
        TCPWRAP: 40,
        TTYWRAP: 41,
        UDPSENDWRAP: 42,
        UDPWRAP: 43,
        SIGINTWATCHDOG: 44,
        WORKER: 45,
        WORKERCPUPROFILE: 46,
        WORKERCPUUSAGE: 47,
        WORKERHEAPSNAPSHOT: 48,
        WORKERHEAPSTATISTICS: 49,
        WRITEWRAP: 50,
        ZLIB: 51,
        CHECKPRIMEREQUEST: 52,
        PBKDF2REQUEST: 53,
        KEYPAIRGENREQUEST: 54,
        KEYGENREQUEST: 55,
        KEYEXPORTREQUEST: 56,
        CIPHERREQUEST: 57,
        DERIVEBITSREQUEST: 58,
        HASHREQUEST: 59,
        RANDOMBYTESREQUEST: 60,
        RANDOMPRIMEREQUEST: 61,
        SCRYPTREQUEST: 62,
        SIGNREQUEST: 63,
        TLSWRAP: 64,
        VERIFYREQUEST: 65
    },
    createHook: <ref *5> ƒ createHook(length: 1) {},
    default: {
        [get/set] AsyncLocalStorage: [Circular: *2],
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
[Object: null prototype] {
    AsyncLocalStorage: <ref *2> class AsyncLocalStorage {},
    AsyncResource: <ref *3> class AsyncResource {},
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
			</details>

<details>
				<summary><code>buffer</code></summary>
				<br>

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
        MAX_LENGTH: 9007199254740991,
        MAX_STRING_LENGTH: 536870888
    },
    default: {
        Buffer: [Circular: *3],
        SlowBuffer: [Circular: *16],
        transcode: <ref *21> ƒ transcode(length: 3) {},
        isUtf8: <ref *22> ƒ isUtf8(length: 1) {},
        isAscii: <ref *23> ƒ isAscii(length: 1) {},
        kMaxLength: 9007199254740991,
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
    kMaxLength: 9007199254740991,
    kStringMaxLength: 536870888,
    resolveObjectURL: [Circular: *24],
    transcode: [Circular: *21]
}
```

</td><td valign="top">

```js
[Object: null prototype] {
    Blob: <ref *2> ƒ Blob(length: 0) {},
    Buffer: <ref *3> ƒ Buffer(length: 3) {
        alloc: ƒ alloc(length: 1) {},
        allocUnsafe: ƒ allocUnsafe(length: 1) {},
        allocUnsafeSlow: ƒ allocUnsafeSlow(length: 1) {},
        byteLength: ƒ byteLength(length: 2) {},
        compare: ƒ compare(length: 2) {},
        concat: ƒ concat(length: 2) {},
        copyBytesFrom: ƒ copyBytesFrom(length: 1) {},
        from: ƒ (length: 3) {},
        isBuffer: ƒ (length: 1) {},
        isEncoding: ƒ isEncoding(length: 1) {},
        poolSize: 8192
    },
    File: <ref *14> ƒ File(length: 2) {},
    INSPECT_MAX_BYTES: [Error accessing: Reflect.ownKeys requires the first argument be an object],
    SlowBuffer: <ref *16> ƒ SlowBuffer(length: 0) {},
    atob: <ref *17> ƒ atob(length: 1) {},
    btoa: <ref *18> ƒ btoa(length: 1) {},
    constants: <ref *19> {
        MAX_LENGTH: 4294967296,
        MAX_STRING_LENGTH: 2147483647
    },
    default: {
        Buffer: [Circular: *3],
        SlowBuffer: [Circular: *16],
        Blob: [Circular: *2],
        File: [Circular: *14],
        [get/set] INSPECT_MAX_BYTES: 50,
        kMaxLength: 4294967296,
        kStringMaxLength: 2147483647,
        constants: [Circular: *19],
        atob: [Circular: *17],
        btoa: [Circular: *18],
        transcode: [Unexpected Error: [object Function] (type "undefined")],
        resolveObjectURL: <ref *21> ƒ resolveObjectURL(length: 1) {},
        isAscii: <ref *22> ƒ isAscii(length: 1) {},
        isUtf8: <ref *23> ƒ isUtf8(length: 1) {}
    },
    isAscii: [Circular: *22],
    isUtf8: [Circular: *23],
    kMaxLength: 4294967296,
    kStringMaxLength: 2147483647,
    resolveObjectURL: [Circular: *21],
    transcode: [Unexpected Error: [object Function] (type "undefined")]
}
```

</td></tr></table>
			</details>

<details>
				<summary><code>child_process</code></summary>
				<br>

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
[Object: null prototype] {
    ChildProcess: <ref *2> class ChildProcess extends EventEmitter {},
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
			</details>

<details>
				<summary><code>cluster</code></summary>
				<br>

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

</td></tr></table>
			</details>

<details>
				<summary><code>console</code></summary>
				<br>

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
        info: <ref *12> ƒ info(length: 0) {},
        debug: [Circular: *9],
        warn: <ref *13> ƒ warn(length: 0) {},
        error: <ref *14> ƒ error(length: 0) {},
        dir: <ref *15> ƒ dir(length: 0) {},
        time: <ref *16> ƒ time(length: 0) {},
        timeEnd: <ref *17> ƒ timeEnd(length: 0) {},
        timeLog: <ref *18> ƒ timeLog(length: 0) {},
        trace: <ref *19> ƒ trace(length: 0) {},
        assert: [Circular: *3],
        clear: [Circular: *4],
        count: [Circular: *6],
        countReset: [Circular: *7],
        group: <ref *20> ƒ group(length: 0) {},
        groupEnd: <ref *21> ƒ groupEnd(length: 0) {},
        table: <ref *22> ƒ table(length: 0) {},
        dirxml: <ref *23> ƒ dirxml(length: 0) {},
        groupCollapsed: <ref *24> ƒ groupCollapsed(length: 0) {},
        Console: [Circular: *2],
        profile: <ref *25> ƒ profile(length: 0) {},
        profileEnd: <ref *26> ƒ profileEnd(length: 0) {},
        timeStamp: <ref *27> ƒ timeStamp(length: 0) {},
        context: [Circular: *5],
        createTask: [Circular: *8]
    },
    dir: [Circular: *15],
    dirxml: [Circular: *23],
    error: [Circular: *14],
    group: [Circular: *20],
    groupCollapsed: [Circular: *24],
    groupEnd: [Circular: *21],
    info: [Circular: *12],
    log: [Circular: *11],
    profile: [Circular: *25],
    profileEnd: [Circular: *26],
    table: [Circular: *22],
    time: [Circular: *16],
    timeEnd: [Circular: *17],
    timeLog: [Circular: *18],
    timeStamp: [Circular: *27],
    trace: [Circular: *19],
    warn: [Circular: *13]
}
```

</td><td valign="top">

```js
[Object: null prototype] {
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
			</details>

<details>
				<summary><code>constants</code></summary>
				<br>

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
    F_OK: 0,
    OPENSSL_VERSION_NUMBER: 810549280,
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
        OPENSSL_VERSION_NUMBER: 810549280,
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
    RSA_PSS_SALTLEN_AUTO: -2,
    RSA_PSS_SALTLEN_DIGEST: -1,
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
        RSA_PSS_SALTLEN_DIGEST: -1,
        RSA_PSS_SALTLEN_AUTO: -2,
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
			</details>

<details>
				<summary><code>crypto</code></summary>
				<br>

<table><tr><th>Node.js</th><th>Bun</th></tr><tr><td valign="top">

```js
[Object: null prototype] {
    Certificate: <ref *2> ƒ Certificate(length: 0) {
        exportChallenge: ƒ exportChallenge(length: 2) {},
        exportPublicKey: ƒ exportPublicKey(length: 2) {},
        verifySpkac: ƒ verifySpkac(length: 2) {}
    },
    Cipher: undefined,
    Cipheriv: <ref *6> ƒ Cipheriv(length: 4) {},
    Decipher: undefined,
    Decipheriv: <ref *7> ƒ Decipheriv(length: 4) {},
    DiffieHellman: <ref *8> ƒ DiffieHellman(length: 4) {},
    DiffieHellmanGroup: <ref *9> ƒ DiffieHellmanGroup(length: 1) {},
    ECDH: <ref *10> ƒ ECDH(length: 1) {
        convertKey: ƒ convertKey(length: 5) {}
    },
    Hash: <ref *12> ƒ deprecated(length: 2) {},
    Hmac: <ref *13> ƒ deprecated(length: 3) {},
    KeyObject: <ref *14> class KeyObject extends NativeKeyObject {},
    Sign: <ref *15> ƒ Sign(length: 2) {},
    Verify: <ref *16> ƒ Verify(length: 2) {},
    X509Certificate: <ref *17> class X509Certificate {},
    checkPrime: <ref *18> ƒ checkPrime(length: 1) {},
    checkPrimeSync: <ref *19> ƒ checkPrimeSync(length: 1) {},
    constants: <ref *20> [Object: null prototype] {
        OPENSSL_VERSION_NUMBER: 810549280,
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
    createCipheriv: <ref *21> ƒ createCipheriv(length: 4) {},
    createDecipheriv: <ref *22> ƒ createDecipheriv(length: 4) {},
    createDiffieHellman: <ref *23> ƒ createDiffieHellman(length: 4) {},
    createDiffieHellmanGroup: <ref *24> ƒ createDiffieHellmanGroup(length: 1) {},
    createECDH: <ref *25> ƒ createECDH(length: 1) {},
    createHash: <ref *26> ƒ createHash(length: 2) {},
    createHmac: <ref *27> ƒ createHmac(length: 3) {},
    createPrivateKey: <ref *28> ƒ createPrivateKey(length: 1) {},
    createPublicKey: <ref *29> ƒ createPublicKey(length: 1) {},
    createSecretKey: <ref *30> ƒ createSecretKey(length: 2) {},
    createSign: <ref *31> ƒ createSign(length: 2) {},
    createVerify: <ref *32> ƒ createVerify(length: 2) {},
    default: {
        checkPrime: [Circular: *18],
        checkPrimeSync: [Circular: *19],
        createCipheriv: [Circular: *21],
        createDecipheriv: [Circular: *22],
        createDiffieHellman: [Circular: *23],
        createDiffieHellmanGroup: [Circular: *24],
        createECDH: [Circular: *25],
        createHash: [Circular: *26],
        createHmac: [Circular: *27],
        createPrivateKey: [Circular: *28],
        createPublicKey: [Circular: *29],
        createSecretKey: [Circular: *30],
        createSign: [Circular: *31],
        createVerify: [Circular: *32],
        diffieHellman: <ref *34> ƒ diffieHellman(length: 1) {},
        generatePrime: <ref *35> ƒ generatePrime(length: 3) {},
        generatePrimeSync: <ref *36> ƒ generatePrimeSync(length: 1) {},
        getCiphers: <ref *37> ƒ (length: 0) {},
        getCipherInfo: <ref *38> ƒ getCipherInfo(length: 2) {},
        getCurves: <ref *39> ƒ (length: 0) {},
        getDiffieHellman: [Circular: *24],
        getHashes: <ref *40> ƒ (length: 0) {},
        hkdf: <ref *41> ƒ hkdf(length: 6) {},
        hkdfSync: <ref *42> ƒ hkdfSync(length: 5) {},
        pbkdf2: <ref *43> ƒ pbkdf2(length: 6) {},
        pbkdf2Sync: <ref *44> ƒ pbkdf2Sync(length: 5) {},
        generateKeyPair: <ref *45> ƒ generateKeyPair(length: 3) {},
        generateKeyPairSync: <ref *46> ƒ generateKeyPairSync(length: 2) {},
        generateKey: <ref *47> ƒ generateKey(length: 3) {},
        generateKeySync: <ref *48> ƒ generateKeySync(length: 2) {},
        privateDecrypt: <ref *49> ƒ (length: 2) {},
        privateEncrypt: <ref *50> ƒ (length: 2) {},
        publicDecrypt: <ref *51> ƒ (length: 2) {},
        publicEncrypt: <ref *52> ƒ (length: 2) {},
        randomBytes: <ref *53> ƒ randomBytes(length: 2) {},
        randomFill: <ref *54> ƒ randomFill(length: 4) {},
        randomFillSync: <ref *55> ƒ randomFillSync(length: 1) {},
        randomInt: <ref *56> ƒ randomInt(length: 3) {},
        randomUUID: <ref *57> ƒ randomUUID(length: 1) {},
        scrypt: <ref *58> ƒ scrypt(length: 4) {},
        scryptSync: <ref *59> ƒ scryptSync(length: 3) {},
        sign: <ref *60> ƒ signOneShot(length: 4) {},
        setEngine: <ref *61> ƒ setEngine(length: 2) {},
        timingSafeEqual: <ref *62> ƒ (length: 0) {},
        getFips: <ref *63> ƒ getFips(length: 0) {},
        setFips: <ref *64> ƒ setFips(length: 1) {},
        verify: <ref *65> ƒ verifyOneShot(length: 5) {},
        hash: <ref *66> ƒ hash(length: 2) {},
        Certificate: [Circular: *2],
        Cipher: undefined,
        Cipheriv: [Circular: *6],
        Decipher: undefined,
        Decipheriv: [Circular: *7],
        DiffieHellman: [Circular: *8],
        DiffieHellmanGroup: [Circular: *9],
        ECDH: [Circular: *10],
        Hash: [Circular: *12],
        Hmac: [Circular: *13],
        KeyObject: [Circular: *14],
        Sign: [Circular: *15],
        Verify: [Circular: *16],
        X509Certificate: [Circular: *17],
        secureHeapUsed: <ref *67> ƒ secureHeapUsed(length: 0) {},
        constants: [Circular: *20],
        [get/set] webcrypto: <ref *68> Crypto {},
        [get/set] subtle: <ref *69> SubtleCrypto {},
        [get/set] getRandomValues: <ref *70> ƒ getRandomValues(length: 1) {}
    },
    diffieHellman: [Circular: *34],
    generateKey: [Circular: *47],
    generateKeyPair: [Circular: *45],
    generateKeyPairSync: [Circular: *46],
    generateKeySync: [Circular: *48],
    generatePrime: [Circular: *35],
    generatePrimeSync: [Circular: *36],
    getCipherInfo: [Circular: *38],
    getCiphers: [Circular: *37],
    getCurves: [Circular: *39],
    getDiffieHellman: [Circular: *24],
    getFips: [Circular: *63],
    getHashes: [Circular: *40],
    getRandomValues: [Circular: *70],
    hash: [Circular: *66],
    hkdf: [Circular: *41],
    hkdfSync: [Circular: *42],
    pbkdf2: [Circular: *43],
    pbkdf2Sync: [Circular: *44],
    privateDecrypt: [Circular: *49],
    privateEncrypt: [Circular: *50],
    publicDecrypt: [Circular: *51],
    publicEncrypt: [Circular: *52],
    randomBytes: [Circular: *53],
    randomFill: [Circular: *54],
    randomFillSync: [Circular: *55],
    randomInt: [Circular: *56],
    randomUUID: [Circular: *57],
    scrypt: [Circular: *58],
    scryptSync: [Circular: *59],
    secureHeapUsed: [Circular: *67],
    setEngine: [Circular: *61],
    setFips: [Circular: *64],
    sign: [Circular: *60],
    subtle: [Circular: *69],
    timingSafeEqual: [Circular: *62],
    verify: [Circular: *65],
    webcrypto: [Circular: *68]
}
```

</td><td valign="top">

```js
[Object: null prototype] {
    Certificate: <ref *2> ƒ Certificate(length: 0) {
        prototype: {},
        verifySpkac: ƒ verifySpkac(length: 2) {},
        exportPublicKey: ƒ exportPublicKey(length: 2) {},
        exportChallenge: ƒ exportChallenge(length: 2) {}
    },
    Cipheriv: <ref *7> ƒ Cipheriv(length: 4) {},
    Decipheriv: <ref *8> ƒ Decipheriv(length: 4) {},
    DiffieHellman: <ref *9> ƒ DiffieHellman(length: 2) {},
    DiffieHellmanGroup: <ref *10> ƒ DiffieHellmanGroup(length: 1) {},
    ECDH: <ref *11> ƒ ECDH(length: 2) {
        convertKey: ƒ convertKey(length: 3) {}
    },
    Hash: <ref *13> ƒ Hash(length: 2) {},
    Hmac: <ref *14> ƒ Hmac(length: 3) {},
    KeyObject: <ref *15> ƒ KeyObject(length: 2) {},
    Sign: <ref *16> ƒ Sign(length: 2) {},
    Verify: <ref *17> ƒ Verify(length: 2) {},
    X509Certificate: <ref *18> ƒ X509Certificate(length: 1) {},
    checkPrime: <ref *19> ƒ checkPrime(length: 3) {},
    checkPrimeSync: <ref *20> ƒ checkPrimeSync(length: 2) {},
    constants: <ref *21> [Object: null prototype] {
        OPENSSL_VERSION_NUMBER: 269488255,
        SSL_OP_ALL: 0,
        SSL_OP_ALLOW_NO_DHE_KEX: 0,
        SSL_OP_ALLOW_UNSAFE_LEGACY_RENEGOTIATION: 0,
        SSL_OP_CIPHER_SERVER_PREFERENCE: 4194304,
        SSL_OP_CISCO_ANYCONNECT: 0,
        SSL_OP_COOKIE_EXCHANGE: 0,
        SSL_OP_CRYPTOPRO_TLSEXT_BUG: 0,
        SSL_OP_DONT_INSERT_EMPTY_FRAGMENTS: 0,
        SSL_OP_LEGACY_SERVER_CONNECT: 0,
        SSL_OP_NO_COMPRESSION: 0,
        SSL_OP_NO_ENCRYPT_THEN_MAC: 0,
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
        SSL_OP_PRIORITIZE_CHACHA: 0,
        SSL_OP_TLS_ROLLBACK_BUG: 0,
        SSL_OP_MICROSOFT_SESS_ID_BUG: 0,
        SSL_OP_NETSCAPE_CHALLENGE_BUG: 0,
        SSL_OP_NETSCAPE_REUSE_CIPHER_CHANGE_BUG: 0,
        SSL_OP_SSLREF2_REUSE_CERT_TYPE_BUG: 0,
        SSL_OP_MICROSOFT_BIG_SSLV3_BUFFER: 0,
        SSL_OP_MSIE_SSLV2_RSA_PADDING: 0,
        SSL_OP_SSLEAY_080_CLIENT_DH_BUG: 0,
        SSL_OP_TLS_D5_BUG: 0,
        SSL_OP_TLS_BLOCK_PADDING_BUG: 0,
        SSL_OP_SINGLE_ECDH_USE: 0,
        SSL_OP_SINGLE_DH_USE: 0,
        SSL_OP_EPHEMERAL_RSA: 0,
        SSL_OP_PKCS1_CHECK_1: 0,
        SSL_OP_PKCS1_CHECK_2: 0,
        SSL_OP_NETSCAPE_CA_DN_BUG: 0,
        SSL_OP_NETSCAPE_DEMO_CIPHER_CHANGE_BUG: 0,
        ENGINE_METHOD_RSA: 1,
        ENGINE_METHOD_DSA: 2,
        ENGINE_METHOD_DH: 4,
        ENGINE_METHOD_RAND: 8,
        ENGINE_METHOD_CIPHERS: 64,
        ENGINE_METHOD_DIGESTS: 128,
        ENGINE_METHOD_PKEY_METHS: 512,
        ENGINE_METHOD_PKEY_ASN1_METHS: 1024,
        ENGINE_METHOD_EC: 2048,
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
        defaultCipherList: "TLS_AES_256_GCM_SHA384:TLS_CHACHA20_POLY1305_SHA256:TLS_AES_128_GCM_SHA256:ECDHE-RSA-AES128-GCM-SHA2…",
        TLS1_VERSION: 769,
        TLS1_1_VERSION: 770,
        TLS1_2_VERSION: 771,
        TLS1_3_VERSION: 772,
        POINT_CONVERSION_COMPRESSED: 2,
        POINT_CONVERSION_UNCOMPRESSED: 4,
        POINT_CONVERSION_HYBRID: 6
    },
    createCipheriv: <ref *22> ƒ createCipheriv(length: 4) {},
    createDecipheriv: <ref *23> ƒ createDecipheriv(length: 4) {},
    createDiffieHellman: <ref *24> ƒ createDiffieHellman(length: 4) {},
    createDiffieHellmanGroup: [Circular: *10],
    createECDH: <ref *25> ƒ createECDH(length: 1) {},
    createHash: <ref *26> ƒ createHash(length: 2) {},
    createHmac: <ref *27> ƒ createHmac(length: 3) {},
    createPrivateKey: <ref *28> ƒ createPrivateKey(length: 1) {},
    createPublicKey: <ref *29> ƒ createPublicKey(length: 1) {},
    createSecretKey: <ref *30> ƒ createSecretKey(length: 2) {},
    createSign: <ref *31> ƒ createSign(length: 2) {},
    createVerify: <ref *32> ƒ createVerify(length: 2) {},
    default: {
        getRandomValues: <ref *34> ƒ (length: 1) {},
        constants: [Circular: *21],
        KeyObject: [Circular: *15],
        generateKey: <ref *35> ƒ generateKey(length: 3) {},
        generateKeySync: <ref *36> ƒ generateKeySync(length: 2) {},
        generateKeyPair: <ref *37> ƒ generateKeyPair(length: 3) {},
        generateKeyPairSync: <ref *38> ƒ generateKeyPairSync(length: 2) {},
        createSecretKey: [Circular: *30],
        createPublicKey: [Circular: *29],
        createPrivateKey: [Circular: *28],
        hash: <ref *39> ƒ hash(length: 2) {},
        pbkdf2: <ref *40> ƒ pbkdf2(length: 6) {},
        pbkdf2Sync: <ref *41> ƒ pbkdf2Sync(length: 5) {},
        hkdf: <ref *42> ƒ hkdf(length: 6) {},
        hkdfSync: <ref *43> ƒ hkdfSync(length: 5) {},
        getCurves: <ref *44> ƒ getCurves(length: 0) {},
        getCipherInfo: <ref *45> ƒ getCipherInfo(length: 1) {},
        timingSafeEqual: <ref *46> ƒ timingSafeEqual(length: 2) {},
        webcrypto: <ref *47> Crypto {
            subtle: <ref *48> SubtleCrypto {}
        },
        subtle: [Circular: *48],
        X509Certificate: [Circular: *18],
        Certificate: [Circular: *2],
        Sign: [Circular: *16],
        sign: <ref *49> ƒ sign(length: 4) {},
        createSign: [Circular: *31],
        Verify: [Circular: *17],
        verify: <ref *50> ƒ verify(length: 4) {},
        createVerify: [Circular: *32],
        Hash: [Circular: *13],
        createHash: [Circular: *26],
        Hmac: [Circular: *14],
        createHmac: [Circular: *27],
        getHashes: <ref *51> ƒ getHashes(length: 0) {},
        randomInt: <ref *52> ƒ randomInt(length: 2) {},
        randomFill: <ref *53> ƒ randomFill(length: 4) {},
        randomFillSync: <ref *54> ƒ randomFillSync(length: 3) {},
        randomBytes: <ref *55> ƒ randomBytes(length: 2) {},
        randomUUID: <ref *56> ƒ randomUUID(length: 1) {},
        checkPrime: [Circular: *19],
        checkPrimeSync: [Circular: *20],
        generatePrime: <ref *57> ƒ generatePrime(length: 3) {},
        generatePrimeSync: <ref *58> ƒ generatePrimeSync(length: 2) {},
        secureHeapUsed: <ref *59> ƒ secureHeapUsed(length: 0) {},
        setEngine: <ref *60> ƒ setEngine(length: 2) {},
        getFips: <ref *61> ƒ getFips(length: 0) {},
        setFips: <ref *62> ƒ setFips(length: 1) {},
        DiffieHellmanGroup: [Circular: *10],
        createDiffieHellmanGroup: [Circular: *10],
        getDiffieHellman: [Circular: *10],
        createDiffieHellman: [Circular: *24],
        DiffieHellman: [Circular: *9],
        diffieHellman: <ref *63> ƒ diffieHellman(length: 2) {},
        ECDH: [Circular: *11],
        createECDH: [Circular: *25],
        Cipheriv: [Circular: *7],
        Decipheriv: [Circular: *8],
        createCipheriv: [Circular: *22],
        createDecipheriv: [Circular: *23],
        getCiphers: <ref *64> ƒ getCiphers(length: 0) {},
        scrypt: <ref *65> ƒ scrypt(length: 5) {},
        scryptSync: <ref *66> ƒ scryptSync(length: 4) {},
        publicEncrypt: <ref *67> ƒ publicEncrypt(length: 2) {},
        publicDecrypt: <ref *68> ƒ publicDecrypt(length: 2) {},
        privateEncrypt: <ref *69> ƒ privateEncrypt(length: 2) {},
        privateDecrypt: <ref *70> ƒ privateDecrypt(length: 2) {}
    },
    diffieHellman: [Circular: *63],
    generateKey: [Circular: *35],
    generateKeyPair: [Circular: *37],
    generateKeyPairSync: [Circular: *38],
    generateKeySync: [Circular: *36],
    generatePrime: [Circular: *57],
    generatePrimeSync: [Circular: *58],
    getCipherInfo: [Circular: *45],
    getCiphers: [Circular: *64],
    getCurves: [Circular: *44],
    getDiffieHellman: [Circular: *10],
    getFips: [Circular: *61],
    getHashes: [Circular: *51],
    getRandomValues: [Circular: *34],
    hash: [Circular: *39],
    hkdf: [Circular: *42],
    hkdfSync: [Circular: *43],
    pbkdf2: [Circular: *40],
    pbkdf2Sync: [Circular: *41],
    privateDecrypt: [Circular: *70],
    privateEncrypt: [Circular: *69],
    publicDecrypt: [Circular: *68],
    publicEncrypt: [Circular: *67],
    randomBytes: [Circular: *55],
    randomFill: [Circular: *53],
    randomFillSync: [Circular: *54],
    randomInt: [Circular: *52],
    randomUUID: [Circular: *56],
    scrypt: [Circular: *65],
    scryptSync: [Circular: *66],
    secureHeapUsed: [Circular: *59],
    setEngine: [Circular: *60],
    setFips: [Circular: *62],
    sign: [Circular: *49],
    subtle: [Circular: *48],
    timingSafeEqual: [Circular: *46],
    verify: [Circular: *50],
    webcrypto: [Circular: *47]
}
```

</td></tr></table>
			</details>

<details>
				<summary><code>dgram</code></summary>
				<br>

<table><tr><th>Node.js</th><th>Bun</th></tr><tr><td valign="top">

```js
[Object: null prototype] {
    Socket: <ref *2> ƒ Socket(length: 2) {},
    _createSocketHandle: <ref *3> ƒ deprecated(length: 5) {},
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
[Object: null prototype] {
    Socket: <ref *2> ƒ Socket(length: 2) {},
    createSocket: <ref *3> ƒ createSocket(length: 2) {},
    default: {
        createSocket: [Circular: *3],
        Socket: [Circular: *2]
    }
}
```

</td></tr></table>
			</details>

<details>
				<summary><code>diagnostics_channel</code></summary>
				<br>

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

</td></tr></table>
			</details>

<details>
				<summary><code>dns</code></summary>
				<br>

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
        resolveTlsa: <ref *22> ƒ bound queryTlsa(length: 2) {},
        resolveTxt: <ref *23> ƒ bound queryTxt(length: 2) {},
        reverse: <ref *24> ƒ bound getHostByAddr(length: 2) {},
        [get/set] promises: <ref *25> {
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
            resolveTlsa: ƒ bound queryTlsa(length: 2) {},
            resolveTxt: ƒ bound queryTxt(length: 2) {},
            reverse: ƒ bound getHostByAddr(length: 2) {}
        }
    },
    getDefaultResultOrder: [Circular: *6],
    getServers: [Circular: *9],
    lookup: [Circular: *4],
    lookupService: [Circular: *5],
    promises: [Circular: *25],
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
    resolveTlsa: [Circular: *22],
    resolveTxt: [Circular: *23],
    reverse: [Circular: *24],
    setDefaultResultOrder: [Circular: *7],
    setServers: [Circular: *8]
}
```

</td><td valign="top">

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
    Resolver: <ref *2> ƒ Resolver2(length: 1) {},
    SERVFAIL: "ESERVFAIL",
    TIMEOUT: "ETIMEOUT",
    V4MAPPED: 8,
    default: {
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
        lookup: <ref *4> ƒ lookup(length: 3) {
            Symbol(nodejs.util.promisify.custom): <ref *5> ƒ lookup(length: 2) {}
        },
        lookupService: <ref *6> ƒ lookupService(length: 3) {
            Symbol(nodejs.util.promisify.custom): <ref *7> ƒ lookupService(length: 2) {}
        },
        Resolver: [Circular: *2],
        setServers: <ref *8> ƒ setServers(length: 1) {},
        setDefaultResultOrder: <ref *9> ƒ setDefaultResultOrder(length: 1) {},
        getDefaultResultOrder: <ref *10> ƒ getDefaultResultOrder(length: 0) {},
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
            Symbol(nodejs.util.promisify.custom): <ref *20> ƒ resolveAny(length: 1) {}
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
            lookup: [Circular: *5],
            lookupService: [Circular: *7],
            resolve: [Circular: *12],
            resolve4: [Circular: *16],
            resolve6: [Circular: *18],
            resolveAny: [Circular: *20],
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
            Resolver: class Resolver3 {},
            setDefaultResultOrder: [Circular: *9],
            setServers: [Circular: *8]
        },
        getServers: <ref *41> ƒ getServers(length: 0) {}
    },
    getDefaultResultOrder: [Circular: *10],
    getServers: [Circular: *41],
    lookup: [Circular: *4],
    lookupService: [Circular: *6],
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
    setDefaultResultOrder: [Circular: *9],
    setServers: [Circular: *8]
}
```

</td></tr></table>
			</details>

<details>
				<summary><code>dns/promises</code></summary>
				<br>

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
        resolveTlsa: <ref *22> ƒ bound queryTlsa(length: 2) {},
        resolveTxt: <ref *23> ƒ bound queryTxt(length: 2) {},
        reverse: <ref *24> ƒ bound getHostByAddr(length: 2) {}
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
    resolveTlsa: [Circular: *22],
    resolveTxt: [Circular: *23],
    reverse: [Circular: *24],
    setDefaultResultOrder: [Circular: *7],
    setServers: [Circular: *8]
}
```

</td><td valign="top">

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
    Resolver: <ref *2> class Resolver3 {},
    SERVFAIL: "ESERVFAIL",
    TIMEOUT: "ETIMEOUT",
    default: {
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
        lookup: <ref *4> ƒ lookup(length: 2) {},
        lookupService: <ref *5> ƒ lookupService(length: 2) {},
        resolve: <ref *6> ƒ resolve(length: 2) {},
        resolve4: <ref *7> ƒ resolve4(length: 2) {},
        resolve6: <ref *8> ƒ resolve6(length: 2) {},
        resolveAny: <ref *9> ƒ resolveAny(length: 1) {},
        resolveSrv: <ref *10> ƒ resolveSrv(length: 1) {},
        resolveTxt: <ref *11> ƒ resolveTxt(length: 1) {},
        resolveSoa: <ref *12> ƒ resolveSoa(length: 1) {},
        resolveNaptr: <ref *13> ƒ resolveNaptr(length: 1) {},
        resolveMx: <ref *14> ƒ resolveMx(length: 1) {},
        resolveCaa: <ref *15> ƒ resolveCaa(length: 1) {},
        resolveNs: <ref *16> ƒ resolveNs(length: 1) {},
        resolvePtr: <ref *17> ƒ resolvePtr(length: 1) {},
        resolveCname: <ref *18> ƒ resolveCname(length: 1) {},
        reverse: <ref *19> ƒ reverse(length: 1) {},
        Resolver: [Circular: *2],
        setDefaultResultOrder: <ref *20> ƒ setDefaultResultOrder(length: 1) {},
        setServers: <ref *21> ƒ setServers(length: 1) {}
    },
    lookup: [Circular: *4],
    lookupService: [Circular: *5],
    resolve: [Circular: *6],
    resolve4: [Circular: *7],
    resolve6: [Circular: *8],
    resolveAny: [Circular: *9],
    resolveCaa: [Circular: *15],
    resolveCname: [Circular: *18],
    resolveMx: [Circular: *14],
    resolveNaptr: [Circular: *13],
    resolveNs: [Circular: *16],
    resolvePtr: [Circular: *17],
    resolveSoa: [Circular: *12],
    resolveSrv: [Circular: *10],
    resolveTxt: [Circular: *11],
    reverse: [Circular: *19],
    setDefaultResultOrder: [Circular: *20],
    setServers: [Circular: *21]
}
```

</td></tr></table>
			</details>

<details>
				<summary><code>domain</code></summary>
				<br>

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
[Object: null prototype] {
    create: <ref *2> ƒ (length: 0) {},
    createDomain: [Circular: *2],
    default: {
        create: [Circular: *2],
        createDomain: [Circular: *2]
    }
}
```

</td></tr></table>
			</details>

<details>
				<summary><code>events</code></summary>
				<br>

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
[Object: null prototype] {
    EventEmitter: <ref *2> ƒ EventEmitter(length: 1) {
        prototype: <ref *3> EventEmitter {
            setMaxListeners: ƒ setMaxListeners(length: 1) {},
            constructor: [Circular: *2],
            getMaxListeners: ƒ getMaxListeners(length: 0) {},
            emit: ƒ emit(length: 1) {},
            addListener: <ref *7> ƒ addListener(length: 2) {},
            on: [Circular: *7],
            prependListener: ƒ prependListener(length: 2) {},
            once: ƒ once(length: 2) {},
            prependOnceListener: ƒ prependOnceListener(length: 2) {},
            removeListener: <ref *11> ƒ removeListener(length: 2) {},
            off: [Circular: *11],
            removeAllListeners: ƒ removeAllListeners(length: 1) {},
            listeners: ƒ listeners(length: 1) {},
            rawListeners: ƒ rawListeners(length: 1) {},
            listenerCount: ƒ listenerCount(length: 2) {},
            eventNames: ƒ eventNames(length: 0) {},
            Symbol(kCapture): false
        },
        [get/set] captureRejections: false,
        [get/set] defaultMaxListeners: 10,
        once: <ref *17> ƒ once(length: 2) {},
        on: <ref *18> ƒ on(length: 2) {},
        getEventListeners: <ref *19> ƒ getEventListeners(length: 2) {},
        getMaxListeners: <ref *20> ƒ getMaxListeners(length: 1) {},
        setMaxListeners: <ref *21> ƒ setMaxListeners(length: 0) {},
        EventEmitter: [Circular: *2],
        usingDomains: false,
        captureRejectionSymbol: Symbol(nodejs.rejection),
        EventEmitterAsyncResource: <ref *22> class EventEmitterAsyncResource extends EventEmitter {},
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
			</details>

<details>
				<summary><code>fs</code></summary>
				<br>

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
    Stats: <ref *6> ƒ deprecated(length: 14) {},
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
        glob: <ref *42> ƒ glob(length: 3) {},
        globSync: <ref *43> ƒ globSync(length: 2) {},
        lchown: <ref *44> ƒ lchown(length: 4) {},
        lchownSync: <ref *45> ƒ lchownSync(length: 3) {},
        lchmod: undefined,
        lchmodSync: undefined,
        link: <ref *46> ƒ link(length: 3) {},
        linkSync: <ref *47> ƒ linkSync(length: 2) {},
        lstat: <ref *48> ƒ lstat(length: 1) {},
        lstatSync: <ref *49> ƒ lstatSync(length: 1) {},
        lutimes: <ref *50> ƒ lutimes(length: 4) {},
        lutimesSync: <ref *51> ƒ lutimesSync(length: 3) {},
        mkdir: <ref *52> ƒ mkdir(length: 3) {},
        mkdirSync: <ref *53> ƒ mkdirSync(length: 2) {},
        mkdtemp: <ref *54> ƒ mkdtemp(length: 3) {},
        mkdtempSync: <ref *55> ƒ mkdtempSync(length: 2) {},
        open: <ref *56> ƒ open(length: 4) {},
        openSync: <ref *57> ƒ openSync(length: 3) {},
        openAsBlob: <ref *58> ƒ openAsBlob(length: 1) {},
        readdir: <ref *59> ƒ readdir(length: 3) {},
        readdirSync: <ref *60> ƒ readdirSync(length: 2) {},
        read: <ref *61> ƒ read(length: 6) {},
        readSync: <ref *62> ƒ readSync(length: 5) {},
        readv: <ref *63> ƒ readv(length: 4) {},
        readvSync: <ref *64> ƒ readvSync(length: 3) {},
        readFile: <ref *65> ƒ readFile(length: 3) {},
        readFileSync: <ref *66> ƒ readFileSync(length: 2) {},
        readlink: <ref *67> ƒ readlink(length: 3) {},
        readlinkSync: <ref *68> ƒ readlinkSync(length: 2) {},
        realpath: <ref *69> ƒ realpath(length: 3) {
            native: ƒ (length: 3) {}
        },
        realpathSync: <ref *71> ƒ realpathSync(length: 2) {
            native: ƒ (length: 2) {}
        },
        rename: <ref *73> ƒ rename(length: 3) {},
        renameSync: <ref *74> ƒ renameSync(length: 2) {},
        rm: <ref *75> ƒ rm(length: 3) {},
        rmSync: <ref *76> ƒ rmSync(length: 2) {},
        rmdir: <ref *77> ƒ rmdir(length: 3) {},
        rmdirSync: <ref *78> ƒ rmdirSync(length: 2) {},
        stat: <ref *79> ƒ stat(length: 1) {},
        statfs: <ref *80> ƒ statfs(length: 1) {},
        statSync: <ref *81> ƒ statSync(length: 1) {},
        statfsSync: <ref *82> ƒ statfsSync(length: 1) {},
        symlink: <ref *83> ƒ symlink(length: 4) {},
        symlinkSync: <ref *84> ƒ symlinkSync(length: 3) {},
        truncate: <ref *85> ƒ truncate(length: 3) {},
        truncateSync: <ref *86> ƒ truncateSync(length: 2) {},
        unwatchFile: <ref *87> ƒ unwatchFile(length: 2) {},
        unlink: <ref *88> ƒ unlink(length: 2) {},
        unlinkSync: <ref *89> ƒ unlinkSync(length: 1) {},
        utimes: <ref *90> ƒ utimes(length: 4) {},
        utimesSync: <ref *91> ƒ utimesSync(length: 3) {},
        watch: <ref *92> ƒ watch(length: 3) {},
        watchFile: <ref *93> ƒ watchFile(length: 3) {},
        writeFile: <ref *94> ƒ writeFile(length: 4) {},
        writeFileSync: <ref *95> ƒ writeFileSync(length: 3) {},
        write: <ref *96> ƒ write(length: 6) {},
        writeSync: <ref *97> ƒ writeSync(length: 5) {},
        writev: <ref *98> ƒ writev(length: 4) {},
        writevSync: <ref *99> ƒ writevSync(length: 3) {},
        Dirent: [Circular: *3],
        Stats: [Circular: *6],
        [get/set] ReadStream: [Circular: *4],
        [get/set] WriteStream: [Circular: *5],
        [get/set] FileReadStream: [Circular: *4],
        [get/set] FileWriteStream: [Circular: *5],
        _toUnixTimestamp: [Circular: *7],
        Dir: [Circular: *2],
        opendir: <ref *100> ƒ opendir(length: 3) {},
        opendirSync: <ref *101> ƒ opendirSync(length: 2) {},
        F_OK: 0,
        R_OK: 4,
        W_OK: 2,
        X_OK: 1,
        constants: [Circular: *18],
        [get/set] promises: <ref *102> {
            access: async ƒ access(length: 1) {},
            copyFile: async ƒ copyFile(length: 3) {},
            cp: async ƒ cp(length: 3) {},
            glob: async ƒ glob(length: 2) {},
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
    glob: [Circular: *42],
    globSync: [Circular: *43],
    lchmod: undefined,
    lchmodSync: undefined,
    lchown: [Circular: *44],
    lchownSync: [Circular: *45],
    link: [Circular: *46],
    linkSync: [Circular: *47],
    lstat: [Circular: *48],
    lstatSync: [Circular: *49],
    lutimes: [Circular: *50],
    lutimesSync: [Circular: *51],
    mkdir: [Circular: *52],
    mkdirSync: [Circular: *53],
    mkdtemp: [Circular: *54],
    mkdtempSync: [Circular: *55],
    open: [Circular: *56],
    openAsBlob: [Circular: *58],
    openSync: [Circular: *57],
    opendir: [Circular: *100],
    opendirSync: [Circular: *101],
    promises: [Circular: *102],
    read: [Circular: *61],
    readFile: [Circular: *65],
    readFileSync: [Circular: *66],
    readSync: [Circular: *62],
    readdir: [Circular: *59],
    readdirSync: [Circular: *60],
    readlink: [Circular: *67],
    readlinkSync: [Circular: *68],
    readv: [Circular: *63],
    readvSync: [Circular: *64],
    realpath: [Circular: *69],
    realpathSync: [Circular: *71],
    rename: [Circular: *73],
    renameSync: [Circular: *74],
    rm: [Circular: *75],
    rmSync: [Circular: *76],
    rmdir: [Circular: *77],
    rmdirSync: [Circular: *78],
    stat: [Circular: *79],
    statSync: [Circular: *81],
    statfs: [Circular: *80],
    statfsSync: [Circular: *82],
    symlink: [Circular: *83],
    symlinkSync: [Circular: *84],
    truncate: [Circular: *85],
    truncateSync: [Circular: *86],
    unlink: [Circular: *88],
    unlinkSync: [Circular: *89],
    unwatchFile: [Circular: *87],
    utimes: [Circular: *90],
    utimesSync: [Circular: *91],
    watch: [Circular: *92],
    watchFile: [Circular: *93],
    write: [Circular: *96],
    writeFile: [Circular: *94],
    writeFileSync: [Circular: *95],
    writeSync: [Circular: *97],
    writev: [Circular: *98],
    writevSync: [Circular: *99]
}
```

</td><td valign="top">

```js
[Object: null prototype] {
    Dir: <ref *2> class Dir {},
    Dirent: <ref *3> ƒ Dirent(length: 3) {},
    F_OK: 0,
    FileReadStream: <ref *4> ƒ ReadStream(length: 2) {},
    FileWriteStream: <ref *5> ƒ WriteStream(length: 2) {},
    R_OK: 4,
    ReadStream: [Circular: *4],
    Stats: <ref *6> ƒ Stats(length: 0) {},
    W_OK: 2,
    WriteStream: [Circular: *5],
    X_OK: 1,
    _toUnixTimestamp: <ref *7> ƒ _toUnixTimestamp(length: 1) {},
    access: <ref *8> ƒ access(length: 3) {},
    accessSync: <ref *9> ƒ accessSync(length: 2) {},
    appendFile: <ref *10> ƒ appendFile(length: 4) {},
    appendFileSync: <ref *11> ƒ appendFileSync(length: 3) {},
    chmod: <ref *12> ƒ chmod(length: 3) {},
    chmodSync: <ref *13> ƒ chmodSync(length: 2) {},
    chown: <ref *14> ƒ chown(length: 4) {},
    chownSync: <ref *15> ƒ chownSync(length: 3) {},
    close: <ref *16> ƒ close(length: 2) {},
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
        COPYFILE_FICLONE_FORCE: 4,
        EXTENSIONLESS_FORMAT_JAVASCRIPT: 0,
        EXTENSIONLESS_FORMAT_WASM: 1
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
        exists: <ref *26> ƒ exists(length: 2) {
            Symbol(nodejs.util.promisify.custom): ƒ exists(length: 1) {}
        },
        existsSync: <ref *28> ƒ existsSync(length: 1) {},
        fchown: <ref *29> ƒ fchown(length: 4) {},
        fchownSync: <ref *30> ƒ fchownSync(length: 3) {},
        fchmod: <ref *31> ƒ fchmod(length: 3) {},
        fchmodSync: <ref *32> ƒ fchmodSync(length: 2) {},
        fdatasync: <ref *33> ƒ fdatasync(length: 2) {},
        fdatasyncSync: <ref *34> ƒ fdatasyncSync(length: 1) {},
        fstat: <ref *35> ƒ fstat(length: 3) {},
        fstatSync: <ref *36> ƒ fstatSync(length: 1) {},
        fsync: <ref *37> ƒ fsync(length: 2) {},
        fsyncSync: <ref *38> ƒ fsyncSync(length: 1) {},
        ftruncate: <ref *39> ƒ ftruncate(length: 1) {},
        ftruncateSync: <ref *40> ƒ ftruncateSync(length: 1) {},
        futimes: <ref *41> ƒ futimes(length: 4) {},
        futimesSync: <ref *42> ƒ futimesSync(length: 3) {},
        glob: <ref *43> ƒ glob(length: 3) {},
        globSync: <ref *44> ƒ globSync(length: 2) {},
        lchown: <ref *45> ƒ lchown(length: 4) {},
        lchownSync: <ref *46> ƒ lchownSync(length: 3) {},
        lchmod: undefined,
        lchmodSync: undefined,
        link: <ref *47> ƒ link(length: 3) {},
        linkSync: <ref *48> ƒ linkSync(length: 2) {},
        lstat: <ref *49> ƒ lstat(length: 3) {},
        lstatSync: <ref *50> ƒ lstatSync(length: 1) {},
        lutimes: <ref *51> ƒ lutimes(length: 4) {},
        lutimesSync: <ref *52> ƒ lutimesSync(length: 3) {},
        mkdir: <ref *53> ƒ mkdir(length: 3) {},
        mkdirSync: <ref *54> ƒ mkdirSync(length: 2) {},
        mkdtemp: <ref *55> ƒ mkdtemp(length: 3) {},
        mkdtempSync: <ref *56> ƒ mkdtempSync(length: 2) {},
        open: <ref *57> ƒ open(length: 4) {},
        openSync: <ref *58> ƒ openSync(length: 3) {},
        read: <ref *59> ƒ read(length: 6) {},
        readFile: <ref *60> ƒ readFile(length: 3) {},
        readFileSync: <ref *61> ƒ readFileSync(length: 2) {},
        readSync: <ref *62> ƒ readSync(length: 5) {},
        readdir: <ref *63> ƒ readdir(length: 3) {},
        readdirSync: <ref *64> ƒ readdirSync(length: 2) {},
        readlink: <ref *65> ƒ readlink(length: 3) {},
        readlinkSync: <ref *66> ƒ readlinkSync(length: 2) {},
        readv: <ref *67> ƒ readv(length: 4) {},
        readvSync: <ref *68> ƒ readvSync(length: 3) {},
        realpath: <ref *69> ƒ realpath(length: 3) {
            native: ƒ realpath4(length: 3) {}
        },
        realpathSync: <ref *71> ƒ realpathSync(length: 2) {
            native: ƒ bound realpathNativeSync(length: 3) {}
        },
        rename: <ref *73> ƒ rename(length: 3) {},
        renameSync: <ref *74> ƒ renameSync(length: 2) {},
        rm: <ref *75> ƒ rm(length: 3) {},
        rmSync: <ref *76> ƒ rmSync(length: 2) {},
        rmdir: <ref *77> ƒ rmdir(length: 3) {},
        rmdirSync: <ref *78> ƒ rmdirSync(length: 2) {},
        stat: <ref *79> ƒ stat(length: 3) {},
        statfs: <ref *80> ƒ statfs(length: 3) {},
        statSync: <ref *81> ƒ statSync(length: 1) {},
        statfsSync: <ref *82> ƒ statfsSync(length: 2) {},
        symlink: <ref *83> ƒ symlink(length: 4) {},
        symlinkSync: <ref *84> ƒ symlinkSync(length: 3) {},
        truncate: <ref *85> ƒ truncate(length: 3) {},
        truncateSync: <ref *86> ƒ truncateSync(length: 2) {},
        unlink: <ref *87> ƒ unlink(length: 2) {},
        unlinkSync: <ref *88> ƒ unlinkSync(length: 1) {},
        unwatchFile: <ref *89> ƒ unwatchFile(length: 2) {},
        utimes: <ref *90> ƒ utimes(length: 4) {},
        utimesSync: <ref *91> ƒ utimesSync(length: 3) {},
        watch: <ref *92> ƒ watch(length: 3) {},
        watchFile: <ref *93> ƒ watchFile(length: 3) {},
        write: <ref *94> ƒ write(length: 6) {},
        writeFile: <ref *95> ƒ writeFile(length: 4) {},
        writeFileSync: <ref *96> ƒ writeFileSync(length: 3) {},
        writeSync: <ref *97> ƒ writeSync(length: 5) {},
        writev: <ref *98> ƒ writev(length: 4) {},
        writevSync: <ref *99> ƒ writevSync(length: 3) {},
        _toUnixTimestamp: [Circular: *7],
        openAsBlob: <ref *100> ƒ openAsBlob(length: 2) {},
        Dirent: [Circular: *3],
        opendir: <ref *101> ƒ opendir(length: 3) {},
        opendirSync: <ref *102> ƒ opendirSync(length: 2) {},
        F_OK: 0,
        R_OK: 4,
        W_OK: 2,
        X_OK: 1,
        constants: [Circular: *18],
        Dir: [Circular: *2],
        Stats: [Circular: *6],
        ReadStream: [Circular: *4],
        WriteStream: [Circular: *5],
        FileReadStream: [Circular: *4],
        FileWriteStream: [Circular: *5],
        promises: <ref *103> {
            access: async ƒ access(length: 3) {},
            appendFile: async ƒ appendFile(length: 1) {},
            close: async ƒ close(length: 1) {},
            copyFile: async ƒ copyFile(length: 4) {},
            cp: ƒ cp(length: 3) {},
            exists: async ƒ exists(length: 0) {},
            chown: async ƒ chown(length: 4) {},
            chmod: async ƒ chmod(length: 3) {},
            fchmod: async ƒ fchmod(length: 3) {},
            fchown: async ƒ fchown(length: 4) {},
            fstat: async ƒ fstat(length: 1) {},
            fsync: async ƒ fsync(length: 2) {},
            fdatasync: async ƒ fdatasync(length: 2) {},
            ftruncate: async ƒ ftruncate(length: 1) {},
            futimes: async ƒ futimes(length: 4) {},
            glob: async ƒ glob(length: 2) {},
            lchmod: async ƒ lchmod(length: 3) {},
            lchown: async ƒ lchown(length: 4) {},
            link: async ƒ link(length: 3) {},
            lstat: async ƒ lstat(length: 1) {},
            mkdir: async ƒ mkdir(length: 3) {},
            mkdtemp: async ƒ mkdtemp(length: 3) {},
            statfs: async ƒ statfs(length: 2) {},
            open: async ƒ open(length: 1) {},
            read: async ƒ read(length: 6) {},
            write: async ƒ write(length: 6) {},
            readdir: async ƒ readdir(length: 3) {},
            readFile: async ƒ readFile(length: 1) {},
            writeFile: async ƒ writeFile(length: 1) {},
            readlink: async ƒ readlink(length: 3) {},
            realpath: async ƒ realpath(length: 3) {},
            rename: async ƒ rename(length: 3) {},
            stat: async ƒ stat(length: 1) {},
            symlink: async ƒ symlink(length: 4) {},
            truncate: async ƒ truncate(length: 3) {},
            unlink: async ƒ unlink(length: 2) {},
            utimes: async ƒ utimes(length: 4) {},
            lutimes: async ƒ lutimes(length: 4) {},
            rm: async ƒ rm(length: 3) {},
            rmdir: async ƒ rmdir(length: 3) {},
            writev: async ƒ writev(length: 3) {},
            readv: async ƒ readv(length: 3) {},
            constants: [Circular: *18],
            watch: ƒ watch(length: 1) {},
            opendir: async ƒ opendir(length: 2) {}
        }
    },
    exists: [Circular: *26],
    existsSync: [Circular: *28],
    fchmod: [Circular: *31],
    fchmodSync: [Circular: *32],
    fchown: [Circular: *29],
    fchownSync: [Circular: *30],
    fdatasync: [Circular: *33],
    fdatasyncSync: [Circular: *34],
    fstat: [Circular: *35],
    fstatSync: [Circular: *36],
    fsync: [Circular: *37],
    fsyncSync: [Circular: *38],
    ftruncate: [Circular: *39],
    ftruncateSync: [Circular: *40],
    futimes: [Circular: *41],
    futimesSync: [Circular: *42],
    glob: [Circular: *43],
    globSync: [Circular: *44],
    lchmod: undefined,
    lchmodSync: undefined,
    lchown: [Circular: *45],
    lchownSync: [Circular: *46],
    link: [Circular: *47],
    linkSync: [Circular: *48],
    lstat: [Circular: *49],
    lstatSync: [Circular: *50],
    lutimes: [Circular: *51],
    lutimesSync: [Circular: *52],
    mkdir: [Circular: *53],
    mkdirSync: [Circular: *54],
    mkdtemp: [Circular: *55],
    mkdtempSync: [Circular: *56],
    open: [Circular: *57],
    openAsBlob: [Circular: *100],
    openSync: [Circular: *58],
    opendir: [Circular: *101],
    opendirSync: [Circular: *102],
    promises: [Circular: *103],
    read: [Circular: *59],
    readFile: [Circular: *60],
    readFileSync: [Circular: *61],
    readSync: [Circular: *62],
    readdir: [Circular: *63],
    readdirSync: [Circular: *64],
    readlink: [Circular: *65],
    readlinkSync: [Circular: *66],
    readv: [Circular: *67],
    readvSync: [Circular: *68],
    realpath: [Circular: *69],
    realpathSync: [Circular: *71],
    rename: [Circular: *73],
    renameSync: [Circular: *74],
    rm: [Circular: *75],
    rmSync: [Circular: *76],
    rmdir: [Circular: *77],
    rmdirSync: [Circular: *78],
    stat: [Circular: *79],
    statSync: [Circular: *81],
    statfs: [Circular: *80],
    statfsSync: [Circular: *82],
    symlink: [Circular: *83],
    symlinkSync: [Circular: *84],
    truncate: [Circular: *85],
    truncateSync: [Circular: *86],
    unlink: [Circular: *87],
    unlinkSync: [Circular: *88],
    unwatchFile: [Circular: *89],
    utimes: [Circular: *90],
    utimesSync: [Circular: *91],
    watch: [Circular: *92],
    watchFile: [Circular: *93],
    write: [Circular: *94],
    writeFile: [Circular: *95],
    writeFileSync: [Circular: *96],
    writeSync: [Circular: *97],
    writev: [Circular: *98],
    writevSync: [Circular: *99]
}
```

</td></tr></table>
			</details>

<details>
				<summary><code>fs/promises</code></summary>
				<br>

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
        glob: <ref *10> async ƒ glob(length: 2) {},
        open: <ref *11> async ƒ open(length: 3) {},
        opendir: <ref *12> ƒ opendir(length: 3) {},
        rename: <ref *13> async ƒ rename(length: 2) {},
        truncate: <ref *14> async ƒ truncate(length: 1) {},
        rm: <ref *15> async ƒ rm(length: 2) {},
        rmdir: <ref *16> async ƒ rmdir(length: 2) {},
        mkdir: <ref *17> async ƒ mkdir(length: 2) {},
        readdir: <ref *18> async ƒ readdir(length: 2) {},
        readlink: <ref *19> async ƒ readlink(length: 2) {},
        symlink: <ref *20> async ƒ symlink(length: 3) {},
        lstat: <ref *21> async ƒ lstat(length: 1) {},
        stat: <ref *22> async ƒ stat(length: 1) {},
        statfs: <ref *23> async ƒ statfs(length: 1) {},
        link: <ref *24> async ƒ link(length: 2) {},
        unlink: <ref *25> async ƒ unlink(length: 1) {},
        chmod: [Circular: *4],
        lchmod: <ref *26> async ƒ lchmod(length: 2) {},
        lchown: <ref *27> async ƒ lchown(length: 3) {},
        chown: [Circular: *5],
        utimes: <ref *28> async ƒ utimes(length: 3) {},
        lutimes: <ref *29> async ƒ lutimes(length: 3) {},
        realpath: <ref *30> async ƒ realpath(length: 2) {},
        mkdtemp: <ref *31> async ƒ mkdtemp(length: 2) {},
        writeFile: <ref *32> async ƒ writeFile(length: 3) {},
        appendFile: [Circular: *3],
        readFile: <ref *33> async ƒ readFile(length: 2) {},
        watch: <ref *34> async ƒ _watch(length: 1) {},
        constants: [Circular: *6]
    },
    glob: [Circular: *10],
    lchmod: [Circular: *26],
    lchown: [Circular: *27],
    link: [Circular: *24],
    lstat: [Circular: *21],
    lutimes: [Circular: *29],
    mkdir: [Circular: *17],
    mkdtemp: [Circular: *31],
    open: [Circular: *11],
    opendir: [Circular: *12],
    readFile: [Circular: *33],
    readdir: [Circular: *18],
    readlink: [Circular: *19],
    realpath: [Circular: *30],
    rename: [Circular: *13],
    rm: [Circular: *15],
    rmdir: [Circular: *16],
    stat: [Circular: *22],
    statfs: [Circular: *23],
    symlink: [Circular: *20],
    truncate: [Circular: *14],
    unlink: [Circular: *25],
    utimes: [Circular: *28],
    watch: [Circular: *34],
    writeFile: [Circular: *32]
}
```

</td><td valign="top">

```js
[Object: null prototype] {
    access: <ref *2> async ƒ access(length: 3) {},
    appendFile: <ref *3> async ƒ appendFile(length: 1) {},
    chmod: <ref *4> async ƒ chmod(length: 3) {},
    chown: <ref *5> async ƒ chown(length: 4) {},
    close: <ref *6> async ƒ close(length: 1) {},
    constants: <ref *7> [Object: null prototype] {
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
        EXTENSIONLESS_FORMAT_JAVASCRIPT: 0,
        EXTENSIONLESS_FORMAT_WASM: 1
    },
    copyFile: <ref *8> async ƒ copyFile(length: 4) {},
    cp: <ref *9> ƒ cp(length: 3) {},
    default: {
        access: [Circular: *2],
        appendFile: [Circular: *3],
        close: [Circular: *6],
        copyFile: [Circular: *8],
        cp: [Circular: *9],
        exists: <ref *11> async ƒ exists(length: 0) {},
        chown: [Circular: *5],
        chmod: [Circular: *4],
        fchmod: <ref *12> async ƒ fchmod(length: 3) {},
        fchown: <ref *13> async ƒ fchown(length: 4) {},
        fstat: <ref *14> async ƒ fstat(length: 1) {},
        fsync: <ref *15> async ƒ fsync(length: 2) {},
        fdatasync: <ref *16> async ƒ fdatasync(length: 2) {},
        ftruncate: <ref *17> async ƒ ftruncate(length: 1) {},
        futimes: <ref *18> async ƒ futimes(length: 4) {},
        glob: <ref *19> async ƒ glob(length: 2) {},
        lchmod: <ref *20> async ƒ lchmod(length: 3) {},
        lchown: <ref *21> async ƒ lchown(length: 4) {},
        link: <ref *22> async ƒ link(length: 3) {},
        lstat: <ref *23> async ƒ lstat(length: 1) {},
        mkdir: <ref *24> async ƒ mkdir(length: 3) {},
        mkdtemp: <ref *25> async ƒ mkdtemp(length: 3) {},
        statfs: <ref *26> async ƒ statfs(length: 2) {},
        open: <ref *27> async ƒ open(length: 1) {},
        read: <ref *28> async ƒ read(length: 6) {},
        write: <ref *29> async ƒ write(length: 6) {},
        readdir: <ref *30> async ƒ readdir(length: 3) {},
        readFile: <ref *31> async ƒ readFile(length: 1) {},
        writeFile: <ref *32> async ƒ writeFile(length: 1) {},
        readlink: <ref *33> async ƒ readlink(length: 3) {},
        realpath: <ref *34> async ƒ realpath(length: 3) {},
        rename: <ref *35> async ƒ rename(length: 3) {},
        stat: <ref *36> async ƒ stat(length: 1) {},
        symlink: <ref *37> async ƒ symlink(length: 4) {},
        truncate: <ref *38> async ƒ truncate(length: 3) {},
        unlink: <ref *39> async ƒ unlink(length: 2) {},
        utimes: <ref *40> async ƒ utimes(length: 4) {},
        lutimes: <ref *41> async ƒ lutimes(length: 4) {},
        rm: <ref *42> async ƒ rm(length: 3) {},
        rmdir: <ref *43> async ƒ rmdir(length: 3) {},
        writev: <ref *44> async ƒ writev(length: 3) {},
        readv: <ref *45> async ƒ readv(length: 3) {},
        constants: [Circular: *7],
        watch: <ref *46> ƒ watch(length: 1) {},
        opendir: <ref *47> async ƒ opendir(length: 2) {}
    },
    exists: [Circular: *11],
    fchmod: [Circular: *12],
    fchown: [Circular: *13],
    fdatasync: [Circular: *16],
    fstat: [Circular: *14],
    fsync: [Circular: *15],
    ftruncate: [Circular: *17],
    futimes: [Circular: *18],
    glob: [Circular: *19],
    lchmod: [Circular: *20],
    lchown: [Circular: *21],
    link: [Circular: *22],
    lstat: [Circular: *23],
    lutimes: [Circular: *41],
    mkdir: [Circular: *24],
    mkdtemp: [Circular: *25],
    open: [Circular: *27],
    opendir: [Circular: *47],
    read: [Circular: *28],
    readFile: [Circular: *31],
    readdir: [Circular: *30],
    readlink: [Circular: *33],
    readv: [Circular: *45],
    realpath: [Circular: *34],
    rename: [Circular: *35],
    rm: [Circular: *42],
    rmdir: [Circular: *43],
    stat: [Circular: *36],
    statfs: [Circular: *26],
    symlink: [Circular: *37],
    truncate: [Circular: *38],
    unlink: [Circular: *39],
    utimes: [Circular: *40],
    watch: [Circular: *46],
    write: [Circular: *29],
    writeFile: [Circular: *32],
    writev: [Circular: *44]
}
```

</td></tr></table>
			</details>

<details>
				<summary><code>http</code></summary>
				<br>

<table><tr><th>Node.js</th><th>Bun</th></tr><tr><td valign="top">

```js
[Object: null prototype] {
    Agent: <ref *2> ƒ Agent(length: 1) {
        defaultMaxSockets: Infinity
    },
    ClientRequest: <ref *3> ƒ ClientRequest(length: 3) {},
    CloseEvent: <ref *4> class _CloseEvent extends Event {},
    IncomingMessage: <ref *5> ƒ IncomingMessage(length: 1) {},
    METHODS: <ref *6> [
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
        "QUERY",
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
    MessageEvent: <ref *7> class _MessageEvent extends Event {},
    OutgoingMessage: <ref *8> ƒ OutgoingMessage(length: 1) {},
    STATUS_CODES: <ref *9> {
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
    Server: <ref *10> ƒ Server(length: 2) {},
    ServerResponse: <ref *11> ƒ ServerResponse(length: 2) {},
    WebSocket: <ref *12> class _WebSocket extends EventTarget {
        CONNECTING: 0,
        OPEN: 1,
        CLOSING: 2,
        CLOSED: 3
    },
    _connectionListener: <ref *13> ƒ connectionListener(length: 1) {},
    createServer: <ref *14> ƒ createServer(length: 2) {},
    default: {
        _connectionListener: [Circular: *13],
        METHODS: [Circular: *6],
        STATUS_CODES: [Circular: *9],
        Agent: [Circular: *2],
        ClientRequest: [Circular: *3],
        IncomingMessage: [Circular: *5],
        OutgoingMessage: [Circular: *8],
        Server: [Circular: *10],
        ServerResponse: [Circular: *11],
        createServer: [Circular: *14],
        validateHeaderName: <ref *16> ƒ validateHeaderName(length: 0) {
            withoutStackTrace: ƒ (length: 2) {}
        },
        validateHeaderValue: <ref *18> ƒ validateHeaderValue(length: 0) {
            withoutStackTrace: ƒ (length: 2) {}
        },
        get: <ref *20> ƒ get(length: 3) {},
        request: <ref *21> ƒ request(length: 3) {},
        setMaxIdleHTTPParsers: <ref *22> ƒ setMaxIdleHTTPParsers(length: 1) {},
        [get/set] maxHeaderSize: 16384,
        [get/set] globalAgent: <ref *23> Agent {
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
            agentKeepAliveTimeoutBuffer: 1000,
            Symbol(shapeMode): false,
            Symbol(kCapture): false
        },
        [get/set] WebSocket: [Circular: *12],
        [get/set] CloseEvent: [Circular: *4],
        [get/set] MessageEvent: [Circular: *7]
    },
    get: [Circular: *20],
    globalAgent: [Circular: *23],
    maxHeaderSize: 16384,
    request: [Circular: *21],
    setMaxIdleHTTPParsers: [Circular: *22],
    validateHeaderName: [Circular: *16],
    validateHeaderValue: [Circular: *18]
}
```

</td><td valign="top">

```js
[Object: null prototype] {
    Agent: <ref *2> ƒ Agent(length: 0) {},
    ClientRequest: <ref *3> ƒ ClientRequest(length: 3) {
        prototype: ClientRequest {
            constructor: [Circular: *3],
            setTimeout: ƒ setTimeout(length: 2) {},
            clearTimeout: ƒ clearTimeout(length: 1) {},
            [get/set] path: undefined,
            [get/set] port: undefined,
            [get/set] method: undefined,
            [get/set] host: undefined,
            [get/set] protocol: undefined,
            [get/set] agent: undefined,
            [get/set] aborted: false,
            [get/set] writable: true
        }
    },
    CloseEvent: <ref *7> ƒ CloseEvent(length: 1) {},
    IncomingMessage: <ref *8> ƒ IncomingMessage(length: 1) {
        prototype: <ref *9> IncomingMessage {
            constructor: [Circular: *8],
            httpVersion: "1.1",
            _construct: ƒ _construct(length: 1) {},
            _dump: ƒ _dump(length: 0) {},
            _read: ƒ _read(length: 1) {},
            _finish: ƒ _finish(length: 0) {},
            _destroy: ƒ IncomingMessage_destroy(length: 2) {},
            [get/set] aborted: undefined,
            [get/set] connection: <ref *15> Socket {
                _events: {
                    close: undefined,
                    error: undefined,
                    prefinish: undefined,
                    finish: undefined,
                    drain: undefined,
                    data: undefined,
                    end: undefined,
                    readable: undefined
                },
                _readableState: {
                    highWaterMark: 65536,
                    buffer: [],
                    bufferIndex: 0,
                    length: 0,
                    pipes: [],
                    awaitDrainWriters: null,
                    Symbol(kState): 1052940
                },
                _writableState: {
                    highWaterMark: 65536,
                    length: 0,
                    corked: 0,
                    onwrite: ƒ bound onwrite(length: 1) {},
                    writelen: 0,
                    bufferedIndex: 0,
                    pendingcb: 0,
                    Symbol(kState): 17580812,
                    Symbol(kBufferedValue): null
                },
                allowHalfOpen: true,
                _maxListeners: undefined,
                bytesRead: 0,
                bytesWritten: 0,
                connecting: false,
                timeout: 0,
                isServer: false,
                _httpMessage: [Circular: *9],
                _onTimeout: ƒ _onTimeout(length: 0) {},
                Symbol(kCapture): false,
                Symbol(::bunternal::): undefined
            },
            [get/set] statusCode: undefined,
            [get/set] statusMessage: undefined,
            [get/set] httpVersionMajor: 1,
            [get/set] httpVersionMinor: 1,
            [get/set] rawTrailers: [],
            [get/set] trailers: <ref *24> [Object: null prototype] {},
            setTimeout: ƒ setTimeout(length: 2) {},
            [get/set] socket: [Circular: *15]
        }
    },
    METHODS: <ref *26> [
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
        "QUERY",
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
    MessageEvent: <ref *27> ƒ MessageEvent(length: 1) {},
    OutgoingMessage: <ref *28> ƒ OutgoingMessage(length: 1) {
        prototype: <ref *29> OutgoingMessage {
            constructor: [Circular: *28],
            _keepAliveTimeout: 0,
            _defaultKeepAlive: true,
            shouldKeepAlive: true,
            _onPendingData: ƒ nop2(length: 0) {},
            outputSize: 0,
            outputData: [],
            strictContentLength: false,
            _removedTE: false,
            _removedContLen: false,
            _removedConnection: false,
            usesChunkedEncodingByDefault: true,
            _closed: false,
            [get/set] _headerNames: [Object: null prototype] {},
            appendHeader: ƒ appendHeader(length: 2) {},
            _implicitHeader: ƒ _implicitHeader(length: 0) {},
            flushHeaders: ƒ flushHeaders(length: 0) {},
            getHeader: ƒ getHeader(length: 1) {},
            write: ƒ write(length: 3) {},
            pipe: ƒ pipe(length: 0) {},
            getHeaderNames: ƒ getHeaderNames(length: 0) {},
            getRawHeaderNames: ƒ getRawHeaderNames(length: 0) {},
            getHeaders: ƒ getHeaders(length: 0) {},
            removeHeader: ƒ removeHeader(length: 1) {},
            setHeader: ƒ setHeader(length: 2) {},
            setHeaders: ƒ setHeaders(length: 1) {},
            hasHeader: ƒ hasHeader(length: 1) {},
            [get/set] headers: [Circular: *24],
            addTrailers: ƒ addTrailers(length: 1) {},
            setTimeout: ƒ setTimeout(length: 2) {},
            [get/set] connection: <ref *48> Socket {
                _events: {
                    close: undefined,
                    error: undefined,
                    prefinish: undefined,
                    finish: undefined,
                    drain: undefined,
                    data: undefined,
                    end: undefined,
                    readable: undefined
                },
                _readableState: {
                    highWaterMark: 65536,
                    buffer: [],
                    bufferIndex: 0,
                    length: 0,
                    pipes: [],
                    awaitDrainWriters: null,
                    Symbol(kState): 1052940
                },
                _writableState: {
                    highWaterMark: 65536,
                    length: 0,
                    corked: 0,
                    onwrite: ƒ bound onwrite(length: 1) {},
                    writelen: 0,
                    bufferedIndex: 0,
                    pendingcb: 0,
                    Symbol(kState): 17580812,
                    Symbol(kBufferedValue): null
                },
                allowHalfOpen: true,
                _maxListeners: undefined,
                bytesRead: 0,
                bytesWritten: 0,
                connecting: false,
                timeout: 0,
                isServer: false,
                _httpMessage: [Circular: *29],
                _onTimeout: ƒ _onTimeout(length: 0) {},
                Symbol(kCapture): false,
                Symbol(::bunternal::): undefined
            },
            [get/set] socket: [Circular: *48],
            [get/set] chunkedEncoding: false,
            [get/set] writableObjectMode: false,
            [get/set] writableLength: 0,
            [get/set] writableHighWaterMark: 16384,
            [get/set] writableNeedDrain: undefined,
            [get/set] writableEnded: undefined,
            [get/set] writableFinished: undefined,
            _send: ƒ _send(length: 4) {},
            _writeRaw: ƒ _writeRaw(length: 4) {},
            end: ƒ end(length: 3) {},
            [get/set] writableCorked: 0,
            cork: ƒ cork(length: 0) {},
            uncork: ƒ uncork(length: 0) {},
            destroy: ƒ destroy(length: 1) {}
        }
    },
    STATUS_CODES: <ref *62> {
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
    Server: <ref *63> ƒ Server(length: 2) {},
    ServerResponse: <ref *64> ƒ ServerResponse(length: 2) {},
    WebSocket: <ref *65> ƒ WebSocket(length: 1) {
        CONNECTING: 0,
        OPEN: 1,
        CLOSING: 2,
        CLOSED: 3
    },
    createServer: <ref *66> ƒ createServer(length: 2) {},
    default: {
        Agent: [Circular: *2],
        Server: [Circular: *63],
        METHODS: [Circular: *26],
        STATUS_CODES: [Circular: *62],
        createServer: [Circular: *66],
        ServerResponse: [Circular: *64],
        IncomingMessage: [Circular: *8],
        request: <ref *68> ƒ request(length: 3) {},
        get: <ref *69> ƒ get(length: 3) {},
        [get/set] maxHeaderSize: 16384,
        validateHeaderName: <ref *70> ƒ validateHeaderName(length: 2) {},
        validateHeaderValue: <ref *71> ƒ validateHeaderValue(length: 2) {},
        setMaxIdleHTTPParsers: <ref *72> ƒ setMaxIdleHTTPParsers(length: 1) {},
        globalAgent: <ref *73> Agent {
            _events: [Object: null prototype] {},
            _eventsCount: 0,
            _maxListeners: undefined,
            defaultPort: 80,
            protocol: "http:",
            options: {
                path: null,
                noDelay: true
            },
            requests: [Object: null prototype] {},
            sockets: [Object: null prototype] {},
            freeSockets: [Object: null prototype] {},
            keepAliveMsecs: 1000,
            keepAlive: false,
            maxSockets: Infinity,
            maxFreeSockets: 256,
            scheduling: "lifo",
            maxTotalSockets: undefined,
            totalSocketCount: 0,
            Symbol(kCapture): false
        },
        ClientRequest: [Circular: *3],
        OutgoingMessage: [Circular: *28],
        WebSocket: [Circular: *65],
        CloseEvent: [Circular: *7],
        MessageEvent: [Circular: *27]
    },
    get: [Circular: *69],
    globalAgent: [Circular: *73],
    maxHeaderSize: 16384,
    request: [Circular: *68],
    setMaxIdleHTTPParsers: [Circular: *72],
    validateHeaderName: [Circular: *70],
    validateHeaderValue: [Circular: *71]
}
DeprecationWarning: OutgoingMessage.prototype._headerNames is deprecated
 code: "DEP0066"

      at <anonymous> (internal:util/deprecate:9:30)
      at deprecated (internal:util/deprecate:20:29)
      at <anonymous> (/tmp/fs-fixture-1760314717602-1/inspect.mjs:97:29)
      at map (1:11)
      at inspect (/tmp/fs-fixture-1760314717602-1/inspect.mjs:81:43)
      at <anonymous> (/tmp/fs-fixture-1760314717602-1/inspect.mjs:101:8)
      at map (1:11)
      at inspect (/tmp/fs-fixture-1760314717602-1/inspect.mjs:81:43)
      at <anonymous> (/tmp/fs-fixture-1760314717602-1/inspect.mjs:101:8)

```

</td></tr></table>
			</details>

<details>
				<summary><code>http2</code></summary>
				<br>

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
[Object: null prototype] {
    ClientHttp2Session: <ref *2> class ClientHttp2Session extends Http2Session {},
    Http2ServerRequest: <ref *3> class Http2ServerRequest extends Readable {},
    Http2ServerResponse: <ref *4> class Http2ServerResponse extends Stream {},
    connect: <ref *5> ƒ connect(length: 3) {},
    constants: <ref *6> {
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
    createSecureServer: <ref *7> ƒ createSecureServer(length: 2) {},
    createServer: <ref *8> ƒ createServer(length: 2) {},
    default: {
        constants: [Circular: *6],
        createServer: [Circular: *8],
        createSecureServer: [Circular: *7],
        getDefaultSettings: <ref *10> ƒ getDefaultSettings(length: 0) {},
        getPackedSettings: <ref *11> ƒ jsGetPackedSettings(length: 1) {},
        getUnpackedSettings: <ref *12> ƒ jsGetUnpackedSettings(length: 1) {},
        sensitiveHeaders: Symbol(nodejs.http2.sensitiveHeaders),
        Http2ServerRequest: [Circular: *3],
        Http2ServerResponse: [Circular: *4],
        connect: [Circular: *5],
        ClientHttp2Session: [Circular: *2]
    },
    getDefaultSettings: [Circular: *10],
    getPackedSettings: [Circular: *11],
    getUnpackedSettings: [Circular: *12],
    sensitiveHeaders: Symbol(nodejs.http2.sensitiveHeaders)
}
```

</td></tr></table>
			</details>

<details>
				<summary><code>https</code></summary>
				<br>

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
            agentKeepAliveTimeoutBuffer: 1000,
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
[Object: null prototype] {
    Agent: <ref *2> ƒ Agent(length: 1) {},
    Server: <ref *3> ƒ Server(length: 2) {},
    createServer: <ref *4> ƒ createServer(length: 2) {},
    default: {
        Agent: [Circular: *2],
        globalAgent: <ref *6> Agent {
            _events: [Object: null prototype] {},
            _eventsCount: 0,
            _maxListeners: undefined,
            defaultPort: 443,
            protocol: "https:",
            options: {
                keepAlive: true,
                scheduling: "lifo",
                timeout: 5000,
                path: null,
                noDelay: true
            },
            requests: [Object: null prototype] {},
            sockets: [Object: null prototype] {},
            freeSockets: [Object: null prototype] {},
            keepAliveMsecs: 1000,
            keepAlive: true,
            maxSockets: Infinity,
            maxFreeSockets: 256,
            scheduling: "lifo",
            maxTotalSockets: undefined,
            totalSocketCount: 0,
            maxCachedSessions: 100,
            Symbol(kCapture): false
        },
        Server: [Circular: *3],
        createServer: [Circular: *4],
        get: <ref *12> ƒ get(length: 3) {},
        request: <ref *13> ƒ request(length: 0) {}
    },
    get: [Circular: *12],
    globalAgent: [Circular: *6],
    request: [Circular: *13]
}
```

</td></tr></table>
			</details>

<details>
				<summary><code>inspector</code></summary>
				<br>

<table><tr><th>Node.js</th><th>Bun</th></tr><tr><td valign="top">

```js
[Object: null prototype] {
    Network: <ref *2> {
        requestWillBeSent: ƒ requestWillBeSent(length: 1) {},
        responseReceived: ƒ responseReceived(length: 1) {},
        loadingFinished: ƒ loadingFinished(length: 1) {},
        loadingFailed: ƒ loadingFailed(length: 1) {},
        dataSent: ƒ dataSent(length: 1) {},
        dataReceived: ƒ dataReceived(length: 1) {}
    },
    NetworkResources: <ref *9> {
        put: ƒ put(length: 2) {}
    },
    Session: <ref *11> class Session extends EventEmitter {},
    close: <ref *12> ƒ _debugEnd(length: 0) {},
    console: <ref *13> {
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
        open: <ref *38> ƒ inspectorOpen(length: 3) {},
        close: [Circular: *12],
        url: <ref *39> ƒ url(length: 0) {},
        waitForDebugger: <ref *40> ƒ inspectorWaitForDebugger(length: 0) {},
        console: [Circular: *13],
        Session: [Circular: *11],
        Network: [Circular: *2],
        NetworkResources: [Circular: *9]
    },
    open: [Circular: *38],
    url: [Circular: *39],
    waitForDebugger: [Circular: *40]
}
```

</td><td valign="top">

```js
[Object: null prototype] {
    Session: <ref *2> class Session extends EventEmitter {},
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
			</details>

<details>
				<summary><code>inspector/promises</code></summary>
				<br>

<table><tr><th>Node.js</th><th>Bun</th></tr><tr><td valign="top">

```js
[Object: null prototype] {
    Network: <ref *2> {
        requestWillBeSent: ƒ requestWillBeSent(length: 1) {},
        responseReceived: ƒ responseReceived(length: 1) {},
        loadingFinished: ƒ loadingFinished(length: 1) {},
        loadingFailed: ƒ loadingFailed(length: 1) {},
        dataSent: ƒ dataSent(length: 1) {},
        dataReceived: ƒ dataReceived(length: 1) {}
    },
    NetworkResources: <ref *9> {
        put: ƒ put(length: 2) {}
    },
    Session: <ref *11> class Session extends inspector.Session {},
    close: <ref *12> ƒ _debugEnd(length: 0) {},
    console: <ref *13> {
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
        open: <ref *38> ƒ inspectorOpen(length: 3) {},
        close: [Circular: *12],
        url: <ref *39> ƒ url(length: 0) {},
        waitForDebugger: <ref *40> ƒ inspectorWaitForDebugger(length: 0) {},
        console: [Circular: *13],
        Session: [Circular: *11],
        Network: [Circular: *2],
        NetworkResources: [Circular: *9]
    },
    open: [Circular: *38],
    url: [Circular: *39],
    waitForDebugger: [Circular: *40]
}
```

</td><td valign="top">

```js
[Object: null prototype] {
    Session: <ref *2> class Session extends EventEmitter {},
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
			</details>

<details>
				<summary><code>module</code></summary>
				<br>

<table><tr><th>Node.js</th><th>Bun</th></tr><tr><td valign="top">

```js
[Object: null prototype] {
    Module: <ref *2> ƒ Module(length: 0) {
        _cache: <ref *3> [Object: null prototype] {},
        _pathCache: <ref *4> [Object: null prototype] {
            /tmp/fs-fixture-1760314717602-1/module.mjs: "/tmp/fs-fixture-1760314717602-1/module.mjs"
        },
        _extensions: <ref *5> [Object: null prototype] {
            .js: ƒ (length: 2) {},
            .json: ƒ (length: 2) {},
            .node: ƒ (length: 2) {}
        },
        globalPaths: <ref *9> [
            "/home/runner/work/compare-bun-node/compare-bun-node/node_modules/.pnpm/tsx@3.14.0/node_modules/tsx/d…",
            "/home/runner/work/compare-bun-node/compare-bun-node/node_modules/.pnpm/tsx@3.14.0/node_modules/tsx/n…",
            "/home/runner/work/compare-bun-node/compare-bun-node/node_modules/.pnpm/tsx@3.14.0/node_modules",
            "/home/runner/work/compare-bun-node/compare-bun-node/node_modules/.pnpm/node_modules",
            "/home/runner/setup-pnpm/node_modules/.pnpm/pnpm@9.12.1/node_modules/pnpm/bin/node_modules",
            "/home/runner/setup-pnpm/node_modules/.pnpm/pnpm@9.12.1/node_modules/pnpm/node_modules",
            "/home/runner/setup-pnpm/node_modules/.pnpm/pnpm@9.12.1/node_modules",
            "/home/runner/setup-pnpm/node_modules/.pnpm/node_modules",
            "/home/runner/.node_modules",
            "/home/runner/.node_libraries",
            "/opt/hostedtoolcache/node/22.20.0/x64/lib/node"
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
        registerHooks: <ref *21> ƒ registerHooks(length: 1) {},
        builtinModules: <ref *22> [
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
        runMain: <ref *23> ƒ executeUserEntryPoint(length: 0) {},
        register: <ref *24> ƒ register(length: 1) {},
        constants: <ref *25> [Object: null prototype] {
            compileCacheStatus: [Object: null prototype] {
                FAILED: 0,
                ENABLED: 1,
                ALREADY_ENABLED: 2,
                DISABLED: 3
            }
        },
        enableCompileCache: <ref *27> ƒ enableCompileCache(length: 1) {},
        findPackageJSON: <ref *28> ƒ findPackageJSON(length: 1) {},
        flushCompileCache: <ref *29> ƒ flushCompileCache(length: 0) {},
        stripTypeScriptTypes: <ref *30> ƒ stripTypeScriptTypes(length: 1) {},
        getCompileCacheDir: <ref *31> ƒ getCompileCacheDir(length: 0) {},
        findSourceMap: <ref *32> ƒ findSourceMap(length: 1) {},
        SourceMap: <ref *33> class SourceMap {},
        getSourceMapsSupport: <ref *34> ƒ getSourceMapsSupport(length: 0) {},
        setSourceMapsSupport: <ref *35> ƒ setSourceMapsSupport(length: 1) {}
    },
    SourceMap: [Circular: *33],
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
    builtinModules: [Circular: *22],
    constants: [Circular: *25],
    createRequire: [Circular: *17],
    default: [Circular: *2],
    enableCompileCache: [Circular: *27],
    findPackageJSON: [Circular: *28],
    findSourceMap: [Circular: *32],
    flushCompileCache: [Circular: *29],
    getCompileCacheDir: [Circular: *31],
    getSourceMapsSupport: [Circular: *34],
    globalPaths: [Circular: *9],
    isBuiltin: [Circular: *11],
    register: [Circular: *24],
    registerHooks: [Circular: *21],
    runMain: [Circular: *23],
    setSourceMapsSupport: [Circular: *35],
    stripTypeScriptTypes: [Circular: *30],
    syncBuiltinESMExports: [Circular: *20]
}
```

</td><td valign="top">

```js
<ref *1> [Object: null prototype] {
    Module: <ref *2> ƒ Module(length: 1) {
        _cache: <ref *3> {
            bun:main: {
                exports: [Object: null prototype] {}
            },
            /tmp/fs-fixture-1760314717602-1/module.mjs: {
                exports: [Object: null prototype] {}
            },
            node:module: {
                exports: [Circular: *1]
            },
            /tmp/fs-fixture-1760314717602-1/inspect.mjs: {
                exports: [Object: null prototype] {
                    inspect: ƒ inspect(length: 1) {}
                }
            }
        },
        _debug: <ref *12> {},
        _extensions: <ref *13> [Object: null prototype] {
            .js: <ref *14> ƒ (length: 2) {},
            .json: ƒ (length: 2) {},
            .node: ƒ (length: 2) {},
            .ts: <ref *17> ƒ (length: 2) {},
            .cts: [Circular: *17],
            .mjs: [Circular: *14],
            .mts: [Circular: *17]
        },
        _findPath: <ref *18> ƒ _findPath(length: 3) {},
        _initPaths: <ref *19> ƒ (length: 0) {},
        _load: <ref *20> ƒ _load(length: 1) {},
        _nodeModulePaths: <ref *21> ƒ _nodeModulePaths(length: 1) {},
        _pathCache: <ref *22> [Object: null prototype] {},
        _preloadModules: <ref *23> ƒ _preloadModules(length: 0) {},
        [get/set] _resolveFilename: <ref *24> ƒ _resolveFilename(length: 2) {},
        _resolveLookupPaths: <ref *25> ƒ _resolveLookupPaths(length: 2) {},
        _stat: <ref *26> ƒ _stat(length: 1) {},
        builtinModules: <ref *27> [
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
            "bun:ffi",
            "bun:jsc",
            "bun:sqlite",
            "bun:test",
            "bun:wrap",
            "bun",
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
        ],
        constants: <ref *28> [Object: null prototype] {
            compileCacheStatus: [Object: null prototype] {
                FAILED: 0,
                ENABLED: 1,
                ALREADY_ENABLED: 2,
                DISABLED: 3
            }
        },
        createRequire: <ref *30> ƒ createRequire(length: 1) {},
        enableCompileCache: <ref *31> ƒ enableCompileCache(length: 0) {},
        findSourceMap: <ref *32> ƒ findSourceMap(length: 1) {},
        getCompileCacheDir: <ref *33> ƒ getCompileCacheDir(length: 0) {},
        globalPaths: <ref *34> [],
        isBuiltin: <ref *35> ƒ isBuiltin(length: 1) {},
        prototype: <ref *36> {
            require: ƒ require(length: 2) {},
            _compile: ƒ _compile(length: 2) {}
        },
        register: <ref *39> ƒ register(length: 1) {},
        [get/set] runMain: <ref *40> ƒ runMain(length: 2) {},
        SourceMap: <ref *41> ƒ SourceMap(length: 0) {},
        syncBuiltinESMExports: <ref *42> ƒ syncBuiltinESMExports(length: 0) {},
        wrap: <ref *43> ƒ wrap(length: 1) {},
        [get/set] wrapper: [
            "(function(exports,require,module,__filename,__dirname){",
            "})"
        ],
        Module: [Circular: *2]
    },
    SourceMap: [Circular: *41],
    _cache: [Circular: *3],
    _debug: [Circular: *12],
    _extensions: [Circular: *13],
    _findPath: [Circular: *18],
    _initPaths: [Circular: *19],
    _load: [Circular: *20],
    _nodeModulePaths: [Circular: *21],
    _pathCache: [Circular: *22],
    _preloadModules: [Circular: *23],
    _resolveFilename: [Circular: *24],
    _resolveLookupPaths: [Circular: *25],
    _stat: [Circular: *26],
    builtinModules: [Circular: *27],
    constants: [Circular: *28],
    createRequire: [Circular: *30],
    default: [Circular: *2],
    enableCompileCache: [Circular: *31],
    findSourceMap: [Circular: *32],
    getCompileCacheDir: [Circular: *33],
    globalPaths: [Circular: *34],
    isBuiltin: [Circular: *35],
    prototype: [Circular: *36],
    register: [Circular: *39],
    runMain: [Circular: *40],
    syncBuiltinESMExports: [Circular: *42],
    wrap: [Circular: *43],
    wrapper: [
        "(function(exports,require,module,__filename,__dirname){",
        "})"
    ]
}
```

</td></tr></table>
			</details>

<details>
				<summary><code>net</code></summary>
				<br>

<table><tr><th>Node.js</th><th>Bun</th></tr><tr><td valign="top">

```js
[Object: null prototype] {
    BlockList: <ref *2> class BlockList {},
    Server: <ref *3> ƒ Server(length: 2) {},
    Socket: <ref *4> ƒ Socket(length: 1) {},
    SocketAddress: <ref *5> class SocketAddress {},
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
[Object: null prototype] {
    BlockList: <ref *2> ƒ BlockList(length: 0) {
        isBlockList: ƒ isBlockList(length: 1) {}
    },
    Server: <ref *4> ƒ Server(length: 2) {},
    Socket: <ref *5> ƒ Socket(length: 1) {},
    SocketAddress: <ref *6> ƒ SocketAddress(length: 0) {},
    Stream: [Circular: *5],
    _normalizeArgs: <ref *7> ƒ normalizeArgs(length: 1) {},
    _setSimultaneousAccepts: <ref *8> ƒ _setSimultaneousAccepts(length: 0) {},
    connect: <ref *9> ƒ createConnection(length: 0) {},
    createConnection: [Circular: *9],
    createServer: <ref *10> ƒ createServer(length: 2) {},
    default: {
        createServer: [Circular: *10],
        Server: [Circular: *4],
        createConnection: [Circular: *9],
        connect: [Circular: *9],
        isIP: <ref *12> ƒ isIP(length: 1) {},
        isIPv4: <ref *13> ƒ isIPv4(length: 1) {},
        isIPv6: <ref *14> ƒ isIPv6(length: 1) {},
        Socket: [Circular: *5],
        _normalizeArgs: [Circular: *7],
        _setSimultaneousAccepts: [Circular: *8],
        getDefaultAutoSelectFamily: <ref *15> ƒ getDefaultAutoSelectFamily(length: 0) {},
        setDefaultAutoSelectFamily: <ref *16> ƒ setDefaultAutoSelectFamily(length: 1) {},
        getDefaultAutoSelectFamilyAttemptTimeout: <ref *17> ƒ getDefaultAutoSelectFamilyAttemptTimeout(length: 0) {},
        setDefaultAutoSelectFamilyAttemptTimeout: <ref *18> ƒ setDefaultAutoSelectFamilyAttemptTimeout(length: 1) {},
        BlockList: [Circular: *2],
        SocketAddress: [Circular: *6],
        Stream: [Circular: *5]
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

</td></tr></table>
			</details>

<details>
				<summary><code>os</code></summary>
				<br>

<table><tr><th>Node.js</th><th>Bun</th></tr><tr><td valign="top">

```js
[Object: null prototype] {
    EOL: "\n",
    arch: <ref *2> ƒ arch(length: 0) {
        Symbol(Symbol.toPrimitive): ƒ (length: 0) {}
    },
    availableParallelism: <ref *4> ƒ (length: 0) {
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
        freemem: <ref *15> ƒ (length: 0) {
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
        totalmem: <ref *33> ƒ (length: 0) {
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
[Object: null prototype] {
    EOL: "\n",
    arch: <ref *2> ƒ arch(length: 0) {
        Symbol(Symbol.toPrimitive): ƒ (length: 1) {}
    },
    availableParallelism: <ref *4> ƒ availableParallelism(length: 0) {
        Symbol(Symbol.toPrimitive): ƒ (length: 1) {}
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
    cpus: <ref *11> ƒ (length: 0) {},
    default: {
        availableParallelism: [Circular: *4],
        arch: [Circular: *2],
        cpus: [Circular: *11],
        endianness: <ref *13> ƒ endianness(length: 0) {
            Symbol(Symbol.toPrimitive): ƒ (length: 1) {}
        },
        freemem: <ref *15> ƒ freemem(length: 0) {
            Symbol(Symbol.toPrimitive): ƒ (length: 1) {}
        },
        getPriority: <ref *17> ƒ getPriority(length: 2) {},
        homedir: <ref *18> ƒ homedir(length: 1) {
            Symbol(Symbol.toPrimitive): ƒ (length: 1) {}
        },
        hostname: <ref *20> ƒ hostname(length: 1) {
            Symbol(Symbol.toPrimitive): ƒ (length: 1) {}
        },
        loadavg: <ref *22> ƒ loadavg(length: 1) {},
        networkInterfaces: <ref *23> ƒ networkInterfaces(length: 1) {},
        platform: <ref *24> ƒ platform(length: 0) {
            Symbol(Symbol.toPrimitive): ƒ (length: 1) {}
        },
        release: <ref *26> ƒ release(length: 0) {
            Symbol(Symbol.toPrimitive): ƒ (length: 1) {}
        },
        setPriority: <ref *28> ƒ setPriority(length: 2) {},
        [get/set] tmpdir: <ref *29> ƒ tmpdir(length: 0) {
            Symbol(Symbol.toPrimitive): ƒ (length: 1) {}
        },
        totalmem: <ref *31> ƒ totalmem(length: 0) {
            Symbol(Symbol.toPrimitive): ƒ (length: 1) {}
        },
        type: <ref *33> ƒ type(length: 0) {
            Symbol(Symbol.toPrimitive): ƒ (length: 1) {}
        },
        uptime: <ref *35> ƒ uptime(length: 1) {
            Symbol(Symbol.toPrimitive): ƒ (length: 1) {}
        },
        userInfo: <ref *37> ƒ userInfo(length: 2) {},
        version: <ref *38> ƒ version(length: 0) {
            Symbol(Symbol.toPrimitive): ƒ (length: 1) {}
        },
        machine: <ref *40> ƒ machine(length: 0) {
            Symbol(Symbol.toPrimitive): ƒ (length: 1) {}
        },
        devNull: "/dev/null",
        [get/set] EOL: "\n",
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
			</details>

<details>
				<summary><code>path</code></summary>
				<br>

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
[Object: null prototype] {
    _makeLong: <ref *2> ƒ bound toNamespacedPath(length: 1) {},
    basename: <ref *3> ƒ bound basename(length: 1) {},
    default: <ref *4> {
        resolve: <ref *5> ƒ bound resolve(length: 1) {},
        normalize: <ref *6> ƒ bound normalize(length: 1) {},
        isAbsolute: <ref *7> ƒ bound isAbsolute(length: 1) {},
        join: <ref *8> ƒ bound join(length: 1) {},
        relative: <ref *9> ƒ bound relative(length: 1) {},
        toNamespacedPath: [Circular: *2],
        dirname: <ref *10> ƒ bound dirname(length: 1) {},
        basename: [Circular: *3],
        extname: <ref *11> ƒ bound extname(length: 1) {},
        format: <ref *12> ƒ bound format(length: 1) {},
        parse: <ref *13> ƒ bound parse(length: 1) {},
        sep: "/",
        delimiter: ":",
        win32: <ref *14> {
            resolve: ƒ bound resolve(length: 1) {},
            normalize: ƒ bound normalize(length: 1) {},
            isAbsolute: ƒ bound isAbsolute(length: 1) {},
            join: ƒ bound join(length: 1) {},
            relative: ƒ bound relative(length: 1) {},
            toNamespacedPath: <ref *20> ƒ bound toNamespacedPath(length: 1) {},
            dirname: ƒ bound dirname(length: 1) {},
            basename: ƒ bound basename(length: 1) {},
            extname: ƒ bound extname(length: 1) {},
            format: ƒ bound format(length: 1) {},
            parse: ƒ bound parse(length: 1) {},
            sep: "\\",
            delimiter: ";",
            win32: [Circular: *14],
            posix: [Circular: *4],
            _makeLong: [Circular: *20],
            matchesGlob: ƒ bound matchesGlob(length: 2) {}
        },
        posix: [Circular: *4],
        _makeLong: [Circular: *2],
        matchesGlob: <ref *27> ƒ bound matchesGlob(length: 2) {}
    },
    delimiter: ":",
    dirname: [Circular: *10],
    extname: [Circular: *11],
    format: [Circular: *12],
    isAbsolute: [Circular: *7],
    join: [Circular: *8],
    matchesGlob: [Circular: *27],
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
			</details>

<details>
				<summary><code>path/posix</code></summary>
				<br>

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
[Object: null prototype] {
    _makeLong: <ref *2> ƒ bound toNamespacedPath(length: 1) {},
    basename: <ref *3> ƒ bound basename(length: 1) {},
    default: <ref *4> {
        resolve: <ref *5> ƒ bound resolve(length: 1) {},
        normalize: <ref *6> ƒ bound normalize(length: 1) {},
        isAbsolute: <ref *7> ƒ bound isAbsolute(length: 1) {},
        join: <ref *8> ƒ bound join(length: 1) {},
        relative: <ref *9> ƒ bound relative(length: 1) {},
        toNamespacedPath: [Circular: *2],
        dirname: <ref *10> ƒ bound dirname(length: 1) {},
        basename: [Circular: *3],
        extname: <ref *11> ƒ bound extname(length: 1) {},
        format: <ref *12> ƒ bound format(length: 1) {},
        parse: <ref *13> ƒ bound parse(length: 1) {},
        sep: "/",
        delimiter: ":",
        win32: <ref *14> {
            resolve: ƒ bound resolve(length: 1) {},
            normalize: ƒ bound normalize(length: 1) {},
            isAbsolute: ƒ bound isAbsolute(length: 1) {},
            join: ƒ bound join(length: 1) {},
            relative: ƒ bound relative(length: 1) {},
            toNamespacedPath: <ref *20> ƒ bound toNamespacedPath(length: 1) {},
            dirname: ƒ bound dirname(length: 1) {},
            basename: ƒ bound basename(length: 1) {},
            extname: ƒ bound extname(length: 1) {},
            format: ƒ bound format(length: 1) {},
            parse: ƒ bound parse(length: 1) {},
            sep: "\\",
            delimiter: ";",
            win32: [Circular: *14],
            posix: [Circular: *4],
            _makeLong: [Circular: *20],
            matchesGlob: ƒ bound matchesGlob(length: 2) {}
        },
        posix: [Circular: *4],
        _makeLong: [Circular: *2],
        matchesGlob: <ref *27> ƒ bound matchesGlob(length: 2) {}
    },
    delimiter: ":",
    dirname: [Circular: *10],
    extname: [Circular: *11],
    format: [Circular: *12],
    isAbsolute: [Circular: *7],
    join: [Circular: *8],
    matchesGlob: [Circular: *27],
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
			</details>

<details>
				<summary><code>path/win32</code></summary>
				<br>

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
[Object: null prototype] {
    _makeLong: <ref *2> ƒ bound toNamespacedPath(length: 1) {},
    basename: <ref *3> ƒ bound basename(length: 1) {},
    default: <ref *4> {
        resolve: <ref *5> ƒ bound resolve(length: 1) {},
        normalize: <ref *6> ƒ bound normalize(length: 1) {},
        isAbsolute: <ref *7> ƒ bound isAbsolute(length: 1) {},
        join: <ref *8> ƒ bound join(length: 1) {},
        relative: <ref *9> ƒ bound relative(length: 1) {},
        toNamespacedPath: [Circular: *2],
        dirname: <ref *10> ƒ bound dirname(length: 1) {},
        basename: [Circular: *3],
        extname: <ref *11> ƒ bound extname(length: 1) {},
        format: <ref *12> ƒ bound format(length: 1) {},
        parse: <ref *13> ƒ bound parse(length: 1) {},
        sep: "\\",
        delimiter: ";",
        win32: [Circular: *4],
        posix: <ref *14> {
            resolve: ƒ bound resolve(length: 1) {},
            normalize: ƒ bound normalize(length: 1) {},
            isAbsolute: ƒ bound isAbsolute(length: 1) {},
            join: ƒ bound join(length: 1) {},
            relative: ƒ bound relative(length: 1) {},
            toNamespacedPath: <ref *20> ƒ bound toNamespacedPath(length: 1) {},
            dirname: ƒ bound dirname(length: 1) {},
            basename: ƒ bound basename(length: 1) {},
            extname: ƒ bound extname(length: 1) {},
            format: ƒ bound format(length: 1) {},
            parse: ƒ bound parse(length: 1) {},
            sep: "/",
            delimiter: ":",
            win32: [Circular: *4],
            posix: [Circular: *14],
            _makeLong: [Circular: *20],
            matchesGlob: ƒ bound matchesGlob(length: 2) {}
        },
        _makeLong: [Circular: *2],
        matchesGlob: <ref *27> ƒ bound matchesGlob(length: 2) {}
    },
    delimiter: ";",
    dirname: [Circular: *10],
    extname: [Circular: *11],
    format: [Circular: *12],
    isAbsolute: [Circular: *7],
    join: [Circular: *8],
    matchesGlob: [Circular: *27],
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
			</details>

<details>
				<summary><code>perf_hooks</code></summary>
				<br>

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
[Object: null prototype] {
    Performance: <ref *2> ƒ Performance(length: 0) {},
    PerformanceEntry: <ref *3> ƒ PerformanceEntry(length: 0) {},
    PerformanceMark: <ref *4> ƒ PerformanceMark(length: 1) {},
    PerformanceMeasure: <ref *5> ƒ PerformanceMeasure(length: 0) {},
    PerformanceNodeTiming: <ref *6> class PerformanceNodeTiming {},
    PerformanceObserver: <ref *7> ƒ PerformanceObserver(length: 1) {
        supportedEntryTypes: [
            "mark",
            "measure",
            "resource"
        ]
    },
    PerformanceObserverEntryList: <ref *9> ƒ PerformanceObserverEntryList(length: 0) {},
    PerformanceResourceTiming: <ref *10> class PerformanceResourceTiming {},
    constants: <ref *11> {
        NODE_PERFORMANCE_ENTRY_TYPE_DNS: 4,
        NODE_PERFORMANCE_ENTRY_TYPE_GC: 0,
        NODE_PERFORMANCE_ENTRY_TYPE_HTTP: 1,
        NODE_PERFORMANCE_ENTRY_TYPE_HTTP2: 2,
        NODE_PERFORMANCE_ENTRY_TYPE_NET: 3,
        NODE_PERFORMANCE_GC_FLAGS_ALL_AVAILABLE_GARBAGE: 16,
        NODE_PERFORMANCE_GC_FLAGS_ALL_EXTERNAL_MEMORY: 32,
        NODE_PERFORMANCE_GC_FLAGS_CONSTRUCT_RETAINED: 2,
        NODE_PERFORMANCE_GC_FLAGS_FORCED: 4,
        NODE_PERFORMANCE_GC_FLAGS_NO: 0,
        NODE_PERFORMANCE_GC_FLAGS_SCHEDULE_IDLE: 64,
        NODE_PERFORMANCE_GC_FLAGS_SYNCHRONOUS_PHANTOM_PROCESSING: 8,
        NODE_PERFORMANCE_GC_INCREMENTAL: 8,
        NODE_PERFORMANCE_GC_MAJOR: 4,
        NODE_PERFORMANCE_GC_MINOR: 1,
        NODE_PERFORMANCE_GC_WEAKCB: 16,
        NODE_PERFORMANCE_MILESTONE_BOOTSTRAP_COMPLETE: 7,
        NODE_PERFORMANCE_MILESTONE_ENVIRONMENT: 2,
        NODE_PERFORMANCE_MILESTONE_LOOP_EXIT: 6,
        NODE_PERFORMANCE_MILESTONE_LOOP_START: 5,
        NODE_PERFORMANCE_MILESTONE_NODE_START: 3,
        NODE_PERFORMANCE_MILESTONE_TIME_ORIGIN_TIMESTAMP: 0,
        NODE_PERFORMANCE_MILESTONE_TIME_ORIGIN: 1,
        NODE_PERFORMANCE_MILESTONE_V8_START: 4
    },
    createHistogram: <ref *12> ƒ createHistogram(length: 1) {},
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
            timeOrigin: 1760314718639.952,
            toJSON: ƒ toJSON(length: 1) {},
            onresourcetimingbufferfull: null,
            nodeTiming: PerformanceNodeTiming {
                v8Start: 1760314718639.952,
                nodeStart: 1760314718639.952,
                environment: 1760314718639.952,
                bootstrapComplete: 1760314718639.952,
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
        monitorEventLoopDelay: <ref *28> ƒ monitorEventLoopDelay(length: 1) {},
        createHistogram: [Circular: *12],
        PerformanceResourceTiming: [Circular: *10]
    },
    monitorEventLoopDelay: [Circular: *28],
    performance: [Circular: *14]
}
```

</td></tr></table>
			</details>

<details>
				<summary><code>process</code></summary>
				<br>

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
        warning: ƒ onWarning(length: 1) {}
    },
    _eventsCount: 3,
    _exiting: false,
    _fatalException: <ref *12> ƒ (length: 2) {},
    _getActiveHandles: <ref *13> ƒ _getActiveHandles(length: 0) {},
    _getActiveRequests: <ref *14> ƒ _getActiveRequests(length: 0) {},
    _kill: <ref *15> ƒ _kill(length: 0) {},
    _linkedBinding: <ref *16> ƒ _linkedBinding(length: 1) {},
    _maxListeners: undefined,
    _preload_modules: <ref *17> [],
    _rawDebug: <ref *18> ƒ _rawDebug(length: 0) {},
    _startProfilerIdleNotifier: <ref *19> ƒ (length: 0) {},
    _stopProfilerIdleNotifier: <ref *20> ƒ (length: 0) {},
    _tickCallback: <ref *21> ƒ runNextTicks(length: 0) {},
    abort: <ref *22> ƒ abort(length: 0) {},
    allowedNodeEnvironmentFlags: <ref *23> NodeEnvironmentFlagsSet {
        Symbol(internal properties): {
            array: [
                "--max-http-header-size",
                "--redirect-warnings",
                "--heap-prof",
                "--no-heap-prof",
                "--test-coverage-include",
                "--cpu-prof-dir",
                "--report-on-signal",
                "--no-report-on-signal",
                "--heap-prof-interval",
                "--cpu-prof-interval",
                "--cpu-prof",
                "--no-cpu-prof",
                "--trace-tls",
                "--no-trace-tls",
                "--permission",
                "--no-permission",
                "--experimental-loader",
                "--experimental-addon-modules",
                "--no-experimental-addon-modules",
                "--test-coverage-functions",
                "--heapsnapshot-signal",
                "--test-coverage-exclude",
                "--entry-url",
                "--no-entry-url",
                "--trace-atomics-wait",
                "--no-trace-atomics-wait",
                "--experimental-detect-module",
                "--no-experimental-detect-module",
                "--allow-addons",
                "--no-allow-addons",
                "--experimental-global-webcrypto",
                "--no-experimental-global-webcrypto",
                "--http-parser",
                "--experimental-fetch",
                "--no-experimental-fetch",
                "--trace-promises",
                "--no-trace-promises",
                "--experimental-abortcontroller",
                "--experimental-report",
                "--experimental-modules",
                "--test-skip-pattern",
                "--disable-sigusr1",
                "--no-disable-sigusr1",
                "--allow-wasi",
                "--no-allow-wasi",
                "--expose-gc",
                "--diagnostic-dir",
                "--force-async-hooks-checks",
                "--no-force-async-hooks-checks",
                "--experimental-sqlite",
                "--no-experimental-sqlite",
                "--allow-fs-read",
                "--preserve-symlinks-main",
                "--no-preserve-symlinks-main",
                "--allow-fs-write",
                "--allow-child-process",
                "--no-allow-child-process",
                "--experimental-async-context-frame",
                "--no-experimental-async-context-frame",
                "--experimental-vm-modules",
                "--no-experimental-vm-modules",
                "--experimental-wasi-unstable-preview1",
                "--inspect-publish-uid",
                "--inspect-brk",
                "--no-inspect-brk",
                "--experimental-require-module",
                "--no-experimental-require-module",
                "--inspect",
                "--no-inspect",
                "--inspect-port",
                "--report-uncaught-exception",
                "--no-report-uncaught-exception",
                "--cpu-prof-name",
                "--test-only",
                "--no-test-only",
                "--dns-result-order",
                "--network-family-autoselection",
                "--no-network-family-autoselection",
                "--report-signal",
                "--abort-on-uncaught-exception",
                "--max-old-space-size",
                "--enable-etw-stack-walking",
                "--perf-basic-prof",
                "--deprecation",
                "--no-deprecation",
                "--throw-deprecation",
                "--no-throw-deprecation",
                "--trace-deprecation",
                "--no-trace-deprecation",
                "--heap-prof-dir",
                "--experimental-default-type",
                "--trace-env-native-stack",
                "--no-trace-env-native-stack",
                "--report-exclude-network",
                "--no-report-exclude-network",
                "--allow-worker",
                "--no-allow-worker",
                "--secure-heap-min",
                "--disable-wasm-trap-handler",
                "--no-disable-wasm-trap-handler",
                "--snapshot-blob",
                "--unhandled-rejections",
                "--watch",
                "--no-watch",
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
                "--experimental-top-level-await",
                "--experimental-webstorage",
                "--no-experimental-webstorage",
                "--openssl-legacy-provider",
                "--no-openssl-legacy-provider",
                "--v8-pool-size",
                "--force-fips",
                "--no-force-fips",
                "--experimental-shadow-realm",
                "--no-experimental-shadow-realm",
                "--test-reporter-destination",
                "--trace-env-js-stack",
                "--no-trace-env-js-stack",
                "--trace-event-file-pattern",
                "--trace-event-categories",
                "--napi-modules",
                "--network-family-autoselection-attempt-timeout",
                "--report-dir",
                "--addons",
                "--no-addons",
                "--node-memory-debug",
                "--experimental-specifier-resolution",
                "--trace-sync-io",
                "--no-trace-sync-io",
                "--debug-arraybuffer-allocations",
                "--no-debug-arraybuffer-allocations",
                "--report-compact",
                "--no-report-compact",
                "--disallow-code-generation-from-strings",
                "--title",
                "--trace-exit",
                "--no-trace-exit",
                "--tls-min-v1.3",
                "--no-tls-min-v1.3",
                "--experimental-websocket",
                "--no-experimental-websocket",
                "--enable-fips",
                "--no-enable-fips",
                "--report-on-fatalerror",
                "--no-report-on-fatalerror",
                "--huge-max-old-generation-size",
                "--node-snapshot",
                "--no-node-snapshot",
                "--icu-data-dir",
                "--report-filename",
                "--interpreted-frames-native-stack",
                "--trace-require-module",
                "--experimental-import-meta-resolve",
                "--no-experimental-import-meta-resolve",
                "--experimental-wasm-modules",
                "--use-openssl-ca",
                "--no-use-openssl-ca",
                "--perf-basic-prof-only-functions",
                "--experimental-print-required-tla",
                "--no-experimental-print-required-tla",
                "--experimental-worker",
                "--use-bundled-ca",
                "--no-use-bundled-ca",
                "--test-shard",
                "--experimental-global-navigator",
                "--no-experimental-global-navigator",
                "--tls-min-v1.1",
                "--no-tls-min-v1.1",
                "--use-system-ca",
                "--no-use-system-ca",
                "--warnings",
                "--no-warnings",
                "--test-name-pattern",
                "--verify-base-objects",
                "--no-verify-base-objects",
                "--use-largepages",
                "--test-reporter",
                "--experimental-eventsource",
                "--no-experimental-eventsource",
                "--secure-heap",
                "--trace-env",
                "--no-trace-env",
                "--experimental-strip-types",
                "--no-experimental-strip-types",
                "--test-coverage-lines",
                "--experimental-repl-await",
                "--no-experimental-repl-await",
                "--openssl-config",
                "--trace-uncaught",
                "--no-trace-uncaught",
                "--trace-warnings",
                "--no-trace-warnings",
                "--watch-kill-signal",
                "--global-search-paths",
                "--no-global-search-paths",
                "--experimental-global-customevent",
                "--no-experimental-global-customevent",
                "--test-coverage-branches",
                "--trace-sigint",
                "--no-trace-sigint",
                "--import",
                "--localstorage-file",
                "--track-heap-objects",
                "--no-track-heap-objects",
                "--heap-prof-name",
                "--frozen-intrinsics",
                "--no-frozen-intrinsics",
                "--watch-preserve-output",
                "--no-watch-preserve-output",
                "--insecure-http-parser",
                "--no-insecure-http-parser",
                "--force-node-api-uncaught-exceptions-policy",
                "--no-force-node-api-uncaught-exceptions-policy",
                "--report-exclude-env",
                "--no-report-exclude-env",
                "--preserve-symlinks",
                "--no-preserve-symlinks",
                "--tls-max-v1.3",
                "--no-tls-max-v1.3",
                "--tls-keylog",
                "--pending-deprecation",
                "--no-pending-deprecation",
                "--tls-min-v1.2",
                "--no-tls-min-v1.2",
                "--stack-trace-limit",
                "--extra-info-on-fatal-exception",
                "--no-extra-info-on-fatal-exception",
                "--tls-max-v1.2",
                "--no-tls-max-v1.2",
                "--enable-source-maps",
                "--no-enable-source-maps",
                "--jitless",
                "--input-type",
                "--disable-warning",
                "--heapsnapshot-near-heap-limit",
                "--max-semi-space-size",
                "--force-context-aware",
                "--no-force-context-aware",
                "--perf-prof-unwinding-info",
                "--inspect-wait",
                "--no-inspect-wait",
                "--experimental-transform-types",
                "--no-experimental-transform-types",
                "--perf-prof",
                "--tls-min-v1.0",
                "--no-tls-min-v1.0",
                "--debug-port",
                "--inspect",
                "--inspect-brk",
                "--inspect-wait",
                "-C",
                "--enable-network-family-autoselection",
                "--prof-process",
                "--loader",
                "--experimental-permission",
                "-r",
                "--trace-events-enabled",
                "--es-module-specifier-resolution",
                "--report-directory"
            ]
        }
    },
    arch: "x64",
    argv: <ref *26> [
        "/opt/hostedtoolcache/node/22.20.0/x64/bin/node",
        "/tmp/fs-fixture-1760314717602-1/process.mjs"
    ],
    argv0: "node",
    assert: <ref *27> ƒ deprecated(length: 2) {},
    availableMemory: <ref *28> ƒ availableMemory(length: 0) {},
    binding: <ref *29> ƒ binding(length: 1) {},
    chdir: <ref *30> ƒ wrappedChdir(length: 1) {},
    config: <ref *31> {
        target_defaults: {
            cflags: [],
            configurations: {
                Debug: {
                    v8_enable_v8_checks: 0,
                    variables: {}
                },
                Release: {
                    v8_enable_v8_checks: 1,
                    variables: {}
                }
            },
            default_configuration: "Release",
            defines: [
                "NODE_OPENSSL_CONF_NAME=nodejs_conf",
                "ICU_NO_USER_DATA_OVERRIDE"
            ],
            include_dirs: [],
            libraries: []
        },
        variables: {
            asan: 0,
            clang: 0,
            control_flow_guard: false,
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
            icu_data_in: "../../deps/icu-tmp/icudt77l.dat",
            icu_endianness: "l",
            icu_gyp_path: "tools/icu/icu-generic.gyp",
            icu_path: "deps/icu-small",
            icu_small: false,
            icu_ver_major: "77",
            libdir: "lib",
            llvm_version: "0.0",
            napi_build_version: "10",
            node_builtin_shareable_builtins: [
                "deps/cjs-module-lexer/lexer.js",
                "deps/cjs-module-lexer/dist/lexer.js",
                "deps/undici/undici.js",
                "deps/amaro/dist/index.js"
            ],
            node_byteorder: "little",
            node_cctest_sources: [
                "src/node_snapshot_stub.cc",
                "test/cctest/inspector/test_node_protocol.cc",
                "test/cctest/node_test_fixture.cc",
                "test/cctest/test_aliased_buffer.cc",
                "test/cctest/test_base64.cc",
                "test/cctest/test_base_object_ptr.cc",
                "test/cctest/test_cppgc.cc",
                "test/cctest/test_crypto_clienthello.cc",
                "test/cctest/test_dataqueue.cc",
                "test/cctest/test_environment.cc",
                "test/cctest/test_inspector_socket.cc",
                "test/cctest/test_inspector_socket_server.cc",
                "test/cctest/test_json_utils.cc",
                "test/cctest/test_linked_binding.cc",
                "test/cctest/test_node_api.cc",
                "test/cctest/test_node_crypto.cc",
                "test/cctest/test_node_crypto_env.cc",
                "test/cctest/test_node_postmortem_metadata.cc",
                "test/cctest/test_node_task_runner.cc",
                "test/cctest/test_path.cc",
                "test/cctest/test_per_process.cc",
                "test/cctest/test_platform.cc",
                "test/cctest/test_quic_cid.cc",
                "test/cctest/test_quic_error.cc",
                "test/cctest/test_quic_tokens.cc",
                "test/cctest/test_report.cc",
                "test/cctest/test_sockaddr.cc",
                "test/cctest/test_traced_value.cc",
                "test/cctest/test_util.cc",
                "test/cctest/node_test_fixture.h"
            ],
            node_debug_lib: false,
            node_enable_d8: false,
            node_enable_v8_vtunejit: false,
            node_enable_v8windbg: false,
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
                "lib/internal/assert/myers_diff.js",
                "lib/internal/assert/utils.js",
                "lib/internal/async_context_frame.js",
                "lib/internal/async_hooks.js",
                "lib/internal/async_local_storage/async_context_frame.js",
                "lib/internal/async_local_storage/async_hooks.js",
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
                "lib/internal/data_url.js",
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
                "lib/internal/fs/glob.js",
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
                "lib/internal/inspector/network.js",
                "lib/internal/inspector/network_http.js",
                "lib/internal/inspector/network_http2.js",
                "lib/internal/inspector/network_resources.js",
                "lib/internal/inspector/network_undici.js",
                "lib/internal/inspector_async_hook.js",
                "lib/internal/inspector_network_tracking.js",
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
                "lib/internal/modules/customization_hooks.js",
                "lib/internal/modules/esm/assert.js",
                "lib/internal/modules/esm/create_dynamic_module.js",
                "lib/internal/modules/esm/formats.js",
                "lib/internal/modules/esm/get_format.js",
                "lib/internal/modules/esm/hooks.js",
                "lib/internal/modules/esm/initialize_import_meta.js",
                "lib/internal/modules/esm/load.js",
                "lib/internal/modules/esm/loader.js",
                "lib/internal/modules/esm/module_job.js",
                "lib/internal/modules/esm/module_map.js",
                "lib/internal/modules/esm/resolve.js",
                "lib/internal/modules/esm/shared_constants.js",
                "lib/internal/modules/esm/translators.js",
                "lib/internal/modules/esm/utils.js",
                "lib/internal/modules/esm/worker.js",
                "lib/internal/modules/helpers.js",
                "lib/internal/modules/package_json_reader.js",
                "lib/internal/modules/run_main.js",
                "lib/internal/modules/typescript.js",
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
                "lib/internal/priority_queue.js",
                "lib/internal/process/execution.js",
                "lib/internal/process/finalization.js",
                "lib/internal/process/per_thread.js",
                "lib/internal/process/permission.js",
                "lib/internal/process/pre_execution.js",
                "lib/internal/process/promises.js",
                "lib/internal/process/report.js",
                "lib/internal/process/signal.js",
                "lib/internal/process/task_queues.js",
                "lib/internal/process/warning.js",
                "lib/internal/process/worker_thread_only.js",
                "lib/internal/promise_hooks.js",
                "lib/internal/querystring.js",
                "lib/internal/quic/quic.js",
                "lib/internal/quic/state.js",
                "lib/internal/quic/stats.js",
                "lib/internal/quic/symbols.js",
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
                "lib/internal/source_map/source_map_cache_map.js",
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
                "lib/internal/test_runner/assert.js",
                "lib/internal/test_runner/coverage.js",
                "lib/internal/test_runner/harness.js",
                "lib/internal/test_runner/mock/loader.js",
                "lib/internal/test_runner/mock/mock.js",
                "lib/internal/test_runner/mock/mock_timers.js",
                "lib/internal/test_runner/reporter/dot.js",
                "lib/internal/test_runner/reporter/junit.js",
                "lib/internal/test_runner/reporter/lcov.js",
                "lib/internal/test_runner/reporter/spec.js",
                "lib/internal/test_runner/reporter/tap.js",
                "lib/internal/test_runner/reporter/utils.js",
                "lib/internal/test_runner/reporter/v8-serializer.js",
                "lib/internal/test_runner/runner.js",
                "lib/internal/test_runner/snapshot.js",
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
                "lib/internal/util/diff.js",
                "lib/internal/util/inspect.js",
                "lib/internal/util/inspector.js",
                "lib/internal/util/parse_args/parse_args.js",
                "lib/internal/util/parse_args/utils.js",
                "lib/internal/util/trace_sigint.js",
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
                "lib/internal/webstorage.js",
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
                "lib/internal/worker/clone_dom_exception.js",
                "lib/internal/worker/io.js",
                "lib/internal/worker/js_transferable.js",
                "lib/internal/worker/messaging.js",
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
                "lib/sqlite.js",
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
            node_module_version: 127,
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
            node_shared_sqlite: false,
            node_shared_uvwasi: false,
            node_shared_zlib: false,
            node_shared_zstd: false,
            node_tag: "",
            node_target_type: "executable",
            node_use_amaro: true,
            node_use_bundled_v8: true,
            node_use_node_code_cache: true,
            node_use_node_snapshot: true,
            node_use_openssl: true,
            node_use_sqlite: true,
            node_use_v8_platform: true,
            node_with_ltcg: false,
            node_without_node_options: false,
            node_write_snapshot_as_array_literals: false,
            openssl_is_fips: false,
            openssl_quic: false,
            ossfuzz: false,
            shlib_suffix: "so.127",
            single_executable_application: true,
            suppress_all_error_on_warn: false,
            target_arch: "x64",
            ubsan: 0,
            use_ccache_win: 0,
            use_prefix_to_find_headers: false,
            v8_enable_31bit_smis_on_64bit_arch: 0,
            v8_enable_extensible_ro_snapshot: 0,
            v8_enable_external_code_space: 0,
            v8_enable_gdbjit: 0,
            v8_enable_hugepage: 0,
            v8_enable_i18n_support: 1,
            v8_enable_inspector: 1,
            v8_enable_javascript_promise_hooks: 1,
            v8_enable_lite_mode: 0,
            v8_enable_maglev: 0,
            v8_enable_object_print: 1,
            v8_enable_pointer_compression: 0,
            v8_enable_pointer_compression_shared_cage: 0,
            v8_enable_sandbox: 0,
            v8_enable_shared_ro_heap: 1,
            v8_enable_short_builtin_calls: 1,
            v8_enable_wasm_simd256_revec: 1,
            v8_enable_webassembly: 1,
            v8_optimized_debug: 1,
            v8_promise_internal_field_count: 1,
            v8_random_seed: 0,
            v8_trace_maps: 0,
            v8_use_siphash: 1,
            want_separate_host_toolset: 0
        }
    },
    constrainedMemory: <ref *46> ƒ constrainedMemory(length: 0) {},
    cpuUsage: <ref *47> ƒ cpuUsage(length: 1) {},
    cwd: <ref *48> ƒ wrappedCwd(length: 0) {},
    debugPort: 9229,
    default: process {
        version: "v22.20.0",
        versions: <ref *50> {
            node: "22.20.0",
            acorn: "8.15.0",
            ada: "2.9.2",
            amaro: "1.1.2",
            ares: "1.34.5",
            brotli: "1.1.0",
            cjs_module_lexer: "2.1.0",
            cldr: "47.0",
            icu: "77.1",
            llhttp: "9.3.0",
            modules: "127",
            napi: "10",
            nbytes: "0.1.1",
            ncrypto: "0.0.1",
            nghttp2: "1.64.0",
            openssl: "3.5.2",
            simdjson: "3.13.0",
            simdutf: "6.4.2",
            sqlite: "3.50.4",
            tz: "2025b",
            undici: "6.21.2",
            unicode: "16.0",
            uv: "1.51.0",
            uvwasi: "0.0.23",
            v8: "12.4.254.21-node.33",
            zlib: "1.3.1-470d3a2",
            zstd: "1.5.7"
        },
        arch: "x64",
        platform: "linux",
        release: <ref *51> {
            name: "node",
            lts: "Jod",
            sourceUrl: "https://nodejs.org/download/release/v22.20.0/node-v22.20.0.tar.gz",
            headersUrl: "https://nodejs.org/download/release/v22.20.0/node-v22.20.0-headers.tar.gz"
        },
        _rawDebug: [Circular: *18],
        moduleLoadList: <ref *52> [
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
            "NativeModule internal/constants",
            "Internal Binding trace_events",
            "NativeModule internal/util/debuglog",
            "Internal Binding async_context_frame",
            "NativeModule internal/async_context_frame",
            "NativeModule internal/timers",
            "NativeModule internal/events/abort_listener",
            "NativeModule events",
            "Internal Binding buffer",
            "NativeModule internal/buffer",
            "NativeModule buffer",
            "NativeModule internal/webidl",
            "Internal Binding messaging",
            "NativeModule internal/worker/js_transferable",
            "NativeModule diagnostics_channel",
            "Internal Binding process_methods",
            "NativeModule internal/process/per_thread",
            "Internal Binding credentials",
            "NativeModule internal/process/promises",
            "NativeModule internal/fixed_queue",
            "NativeModule async_hooks",
            "NativeModule internal/process/task_queues",
            "NativeModule timers",
            "NativeModule path",
            "NativeModule internal/querystring",
            "NativeModule internal/mime",
            "NativeModule internal/data_url",
            "NativeModule querystring",
            "Internal Binding url",
            "NativeModule internal/url",
            "NativeModule internal/modules/typescript",
            "Internal Binding contextify",
            "NativeModule internal/vm",
            "NativeModule internal/process/execution",
            "NativeModule internal/process/warning",
            "NativeModule internal/source_map/source_map_cache",
            "Internal Binding fs",
            "Internal Binding blob",
            "Internal Binding encoding_binding",
            "NativeModule internal/encoding",
            "NativeModule internal/streams/utils",
            "NativeModule util",
            "NativeModule internal/webstreams/util",
            "NativeModule internal/webstreams/queuingstrategies",
            "NativeModule internal/blob",
            "NativeModule internal/fs/utils",
            "Internal Binding permission",
            "NativeModule internal/process/permission",
            "NativeModule fs",
            "Internal Binding modules",
            "NativeModule internal/modules/helpers",
            "NativeModule internal/console/constructor",
            "NativeModule internal/console/global",
            "NativeModule internal/util/inspector",
            "Internal Binding inspector",
            "Internal Binding performance",
            "NativeModule internal/perf/utils",
            "NativeModule internal/event_target",
            "Internal Binding wasm_web_api",
            "Internal Binding mksnapshot",
            "NativeModule internal/v8/startup_snapshot",
            "NativeModule internal/process/signal",
            "NativeModule url",
            "NativeModule internal/modules/customization_hooks",
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
            "NativeModule internal/modules/esm/formats",
            "NativeModule internal/modules/esm/get_format",
            "NativeModule internal/modules/esm/resolve",
            "NativeModule internal/modules/esm/load",
            "NativeModule internal/modules/esm/module_job",
            "NativeModule process",
            "NativeModule internal/process/finalization",
            "NativeModule internal/abort_controller",
            "NativeModule internal/streams/end-of-stream",
            "NativeModule internal/streams/destroy",
            "NativeModule internal/streams/legacy",
            "NativeModule internal/streams/add-abort-signal",
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
            "NativeModule internal/streams/duplexpair",
            "NativeModule stream",
            "Internal Binding uv",
            "Internal Binding cares_wrap",
            "Internal Binding stream_wrap",
            "Internal Binding tcp_wrap",
            "Internal Binding pipe_wrap",
            "NativeModule internal/stream_base_commons",
            "NativeModule internal/perf/performance_entry",
            "NativeModule internal/perf/observe",
            "NativeModule net",
            "Internal Binding report",
            "NativeModule internal/process/report"
        ],
        binding: [Circular: *29],
        _linkedBinding: [Circular: *16],
        _events: [Circular: *4],
        _eventsCount: 3,
        _maxListeners: undefined,
        domain: null,
        [get/set] _exiting: false,
        [get/set] exitCode: undefined,
        config: [Circular: *31],
        dlopen: <ref *53> ƒ dlopen(length: 0) {},
        uptime: <ref *54> ƒ uptime(length: 0) {},
        _getActiveRequests: [Circular: *14],
        _getActiveHandles: [Circular: *13],
        getActiveResourcesInfo: <ref *55> ƒ getActiveResourcesInfo(length: 0) {},
        reallyExit: <ref *56> ƒ reallyExit(length: 0) {},
        _kill: [Circular: *15],
        loadEnvFile: <ref *57> ƒ loadEnvFile(length: 0) {},
        cpuUsage: [Circular: *47],
        threadCpuUsage: <ref *58> ƒ threadCpuUsage(length: 1) {},
        resourceUsage: <ref *59> ƒ resourceUsage(length: 0) {},
        memoryUsage: <ref *60> ƒ memoryUsage(length: 0) {
            rss: ƒ rss(length: 0) {}
        },
        constrainedMemory: [Circular: *46],
        availableMemory: [Circular: *28],
        kill: <ref *62> ƒ kill(length: 2) {},
        exit: <ref *63> ƒ exit(length: 1) {},
        execve: <ref *64> ƒ execve(length: 1) {},
        ref: <ref *65> ƒ ref(length: 1) {},
        unref: <ref *66> ƒ unref(length: 1) {},
        [get/set] finalization: <ref *67> {
            register: ƒ register(length: 2) {},
            registerBeforeExit: ƒ registerBeforeExit(length: 2) {},
            unregister: ƒ unregister(length: 1) {}
        },
        hrtime: <ref *71> ƒ hrtime(length: 1) {
            bigint: ƒ hrtimeBigInt(length: 0) {}
        },
        openStdin: <ref *73> ƒ (length: 0) {},
        getuid: <ref *74> ƒ getuid(length: 0) {},
        geteuid: <ref *75> ƒ geteuid(length: 0) {},
        getgid: <ref *76> ƒ getgid(length: 0) {},
        getegid: <ref *77> ƒ getegid(length: 0) {},
        getgroups: <ref *78> ƒ getgroups(length: 0) {},
        allowedNodeEnvironmentFlags: [Circular: *23],
        assert: [Circular: *27],
        features: <ref *79> {
            inspector: true,
            debug: false,
            uv: true,
            ipv6: true,
            tls_alpn: true,
            tls_sni: true,
            tls_ocsp: true,
            tls: true,
            openssl_is_boringssl: false,
            [get/set] cached_builtins: true,
            [get/set] require_module: true,
            [get/set] typescript: "strip"
        },
        _fatalException: [Circular: *12],
        setUncaughtExceptionCaptureCallback: <ref *80> ƒ setUncaughtExceptionCaptureCallback(length: 1) {},
        hasUncaughtExceptionCaptureCallback: <ref *81> ƒ hasUncaughtExceptionCaptureCallback(length: 0) {},
        emitWarning: <ref *82> ƒ emitWarning(length: 4) {},
        nextTick: <ref *83> ƒ nextTick(length: 1) {},
        _tickCallback: [Circular: *21],
        [get/set] sourceMapsEnabled: false,
        setSourceMapsEnabled: <ref *84> ƒ setSourceMapsEnabled(length: 1) {},
        getBuiltinModule: <ref *85> ƒ getBuiltinModule(length: 1) {},
        _debugProcess: [Circular: *3],
        _debugEnd: [Circular: *2],
        _startProfilerIdleNotifier: [Circular: *19],
        _stopProfilerIdleNotifier: [Circular: *20],
        [get/set] stdout: <ref *86> Socket {
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
                end: <ref *88> ƒ onReadableStreamEnd(length: 0) {},
                readable: undefined
            },
            _readableState: ReadableState {
                highWaterMark: 65536,
                buffer: [],
                bufferIndex: 0,
                length: 0,
                pipes: [],
                awaitDrainWriters: null,
                readable: false,
                Symbol(kState): 1054468
            },
            _writableState: WritableState {
                highWaterMark: 65536,
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
            destroySoon: <ref *94> ƒ (length: 2) {},
            _destroy: <ref *95> ƒ dummyDestroy(length: 2) {},
            Symbol(async_id_symbol): 2,
            Symbol(kHandle): Pipe {
                Symbol(owner_symbol): [Circular: *86]
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
        [get/set] stdin: <ref *97> Socket {
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
                end: [Circular: *88],
                readable: undefined,
                pause: ƒ (length: 0) {}
            },
            _readableState: ReadableState {
                highWaterMark: 65536,
                buffer: [],
                bufferIndex: 0,
                length: 0,
                pipes: [],
                awaitDrainWriters: null,
                Symbol(kState): 1052932
            },
            _writableState: WritableState {
                highWaterMark: 65536,
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
            Symbol(async_id_symbol): 3,
            Symbol(kHandle): Pipe {
                reading: false,
                Symbol(owner_symbol): [Circular: *97]
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
        [get/set] stderr: <ref *106> Socket {
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
                end: [Circular: *88],
                readable: undefined
            },
            _readableState: ReadableState {
                highWaterMark: 65536,
                buffer: [],
                bufferIndex: 0,
                length: 0,
                pipes: [],
                awaitDrainWriters: null,
                readable: false,
                Symbol(kState): 1054468
            },
            _writableState: WritableState {
                highWaterMark: 65536,
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
            destroySoon: [Circular: *94],
            _destroy: [Circular: *95],
            Symbol(async_id_symbol): 4,
            Symbol(kHandle): Pipe {
                Symbol(owner_symbol): [Circular: *106]
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
        abort: [Circular: *22],
        umask: <ref *114> ƒ wrappedUmask(length: 1) {},
        chdir: [Circular: *30],
        cwd: [Circular: *48],
        initgroups: <ref *115> ƒ initgroups(length: 2) {},
        setgroups: <ref *116> ƒ setgroups(length: 1) {},
        setegid: <ref *117> ƒ (length: 1) {},
        seteuid: <ref *118> ƒ (length: 1) {},
        setgid: <ref *119> ƒ (length: 1) {},
        setuid: <ref *120> ƒ (length: 1) {},
        env: <ref *121>  {
            GITHUB_STATE: "/home/runner/work/_temp/_runner_file_commands/save_state_d34fcc3a-73ae-4229-9f5e-ebc693d1ecbe",
            npm_package_devDependencies__types_node: "^18.15.11",
            DOTNET_NOLOGO: "1",
            USER: "runner",
            npm_config_user_agent: "pnpm/9.12.1 npm/? node/v22.20.0 linux x64",
            CI: "true",
            RUNNER_ENVIRONMENT: "github-hosted",
            GITHUB_ENV: "/home/runner/work/_temp/_runner_file_commands/set_env_d34fcc3a-73ae-4229-9f5e-ebc693d1ecbe",
            PIPX_HOME: "/opt/pipx",
            npm_node_execpath: "/opt/hostedtoolcache/node/22.20.0/x64/bin/node",
            JAVA_HOME_8_X64: "/usr/lib/jvm/temurin-8-jdk-amd64",
            SHLVL: "1",
            npm_package_packageManager: "pnpm@9.12.1",
            HOME: "/home/runner",
            RUNNER_TEMP: "/home/runner/work/_temp",
            GITHUB_EVENT_PATH: "/home/runner/work/_temp/_github_workflow/event.json",
            JAVA_HOME_11_X64: "/usr/lib/jvm/temurin-11-jdk-amd64",
            PIPX_BIN_DIR: "/opt/pipx_bin",
            GITHUB_REPOSITORY_OWNER: "privatenumber",
            npm_package_dependencies_comment_mark: "^1.1.1",
            GRADLE_HOME: "/usr/share/gradle-9.1.0",
            ANDROID_NDK_LATEST_HOME: "/usr/local/lib/android/sdk/ndk/28.2.13676358",
            JAVA_HOME_21_X64: "/usr/lib/jvm/temurin-21-jdk-amd64",
            GITHUB_RETENTION_DAYS: "90",
            GITHUB_REPOSITORY_OWNER_ID: "1075694",
            POWERSHELL_DISTRIBUTION_CHANNEL: "GitHub-Actions-ubuntu24",
            AZURE_EXTENSION_DIR: "/opt/az/azcliextensions",
            GITHUB_HEAD_REF: "",
            SYSTEMD_EXEC_PID: "1876",
            GITHUB_GRAPHQL_URL: "https://api.github.com/graphql",
            JAVA_HOME_25_X64: "/usr/lib/jvm/temurin-25-jdk-amd64",
            NVM_DIR: "/home/runner/.nvm",
            npm_package_dependencies_fs_fixture: "^1.2.0",
            DOTNET_SKIP_FIRST_TIME_EXPERIENCE: "1",
            JAVA_HOME_17_X64: "/usr/lib/jvm/temurin-17-jdk-amd64",
            ImageVersion: "20250929.60.1",
            LOGNAME: "runner",
            RUNNER_OS: "Linux",
            GITHUB_API_URL: "https://api.github.com",
            GOROOT_1_22_X64: "/opt/hostedtoolcache/go/1.22.12/x64",
            SWIFT_PATH: "/usr/share/swift/usr/bin",
            npm_package_devDependencies_lintroll: "^1.10.0",
            CHROMEWEBDRIVER: "/usr/local/share/chromedriver-linux64",
            GOROOT_1_23_X64: "/opt/hostedtoolcache/go/1.23.12/x64",
            JOURNAL_STREAM: "9:10837",
            GITHUB_WORKFLOW: "Compare Bun and Node.js",
            _: "/home/runner/setup-pnpm/node_modules/.bin/pnpm",
            npm_package_private: "true",
            MEMORY_PRESSURE_WATCH: "/sys/fs/cgroup/system.slice/hosted-compute-agent.service/memory.pressure",
            GOROOT_1_24_X64: "/opt/hostedtoolcache/go/1.24.7/x64",
            npm_package_scripts_lint: "lintroll --ignore-pattern README.md --cache .",
            npm_config_registry: "https://registry.npmjs.org/",
            ACTIONS_RUNNER_ACTION_ARCHIVE_CACHE: "/opt/actionarchivecache",
            GITHUB_RUN_ID: "18451556197",
            GITHUB_REF_TYPE: "branch",
            BOOTSTRAP_HASKELL_NONINTERACTIVE: "1",
            GITHUB_WORKFLOW_SHA: "40bac65068e2834f8d5409731f302d9e9286d95f",
            GITHUB_BASE_REF: "",
            ImageOS: "ubuntu24",
            npm_package_scripts_start: "tsx index.ts",
            GITHUB_WORKFLOW_REF: "privatenumber/compare-bun-node/.github/workflows/compare.yml@refs/heads/master",
            GITHUB_ACTION_REPOSITORY: "",
            ENABLE_RUNNER_TRACING: "true",
            npm_config_node_gyp: "/home/runner/setup-pnpm/node_modules/.pnpm/pnpm@9.12.1/node_modules/pnpm/dist/node_modules/node-gyp/…",
            PATH: "/home/runner/work/compare-bun-node/compare-bun-node/node_modules/.bin:/home/runner/setup-pnpm/node_m…",
            ANT_HOME: "/usr/share/ant",
            DOTNET_MULTILEVEL_LOOKUP: "0",
            RUNNER_TRACKING_ID: "github_56239102-fad2-47ff-9ce7-3bc9d8532bb0",
            INVOCATION_ID: "ca9fff4d042b4c3287b4e331ecf43685",
            RUNNER_TOOL_CACHE: "/opt/hostedtoolcache",
            NODE: "/opt/hostedtoolcache/node/22.20.0/x64/bin/node",
            GITHUB_ACTION: "__run",
            GITHUB_RUN_NUMBER: "151",
            GITHUB_TRIGGERING_ACTOR: "privatenumber",
            RUNNER_ARCH: "X64",
            XDG_RUNTIME_DIR: "/run/user/1001",
            AGENT_TOOLSDIRECTORY: "/opt/hostedtoolcache",
            npm_config_frozen_lockfile: "",
            LANG: "C.UTF-8",
            VCPKG_INSTALLATION_ROOT: "/usr/local/share/vcpkg",
            CONDA: "/usr/share/miniconda",
            RUNNER_NAME: "GitHub Actions 1000003405",
            XDG_CONFIG_HOME: "/home/runner/.config",
            GITHUB_REF_NAME: "master",
            GITHUB_REPOSITORY: "privatenumber/compare-bun-node",
            npm_package_simple_git_hooks_pre_commit: "pnpm lint-staged",
            npm_lifecycle_script: "tsx index.ts",
            ANDROID_NDK_ROOT: "/usr/local/lib/android/sdk/ndk/27.3.13750724",
            GITHUB_ACTION_REF: "",
            DEBIAN_FRONTEND: "noninteractive",
            SHELL: "/bin/bash",
            GITHUB_REPOSITORY_ID: "622996871",
            GITHUB_ACTIONS: "true",
            NODE_PATH: "/home/runner/work/compare-bun-node/compare-bun-node/node_modules/.pnpm/tsx@3.14.0/node_modules/tsx/d…",
            npm_lifecycle_event: "start",
            GITHUB_REF_PROTECTED: "false",
            npm_package_devDependencies_lint_staged: "^13.2.0",
            npm_package_devDependencies_simple_git_hooks: "^2.8.1",
            GITHUB_WORKSPACE: "/home/runner/work/compare-bun-node/compare-bun-node",
            ACCEPT_EULA: "Y",
            GITHUB_JOB: "build",
            npm_package_author: "Hiroki Osame <hiroki.osame@gmail.com>",
            npm_package_dependencies_execa: "^7.1.1",
            GITHUB_SHA: "40bac65068e2834f8d5409731f302d9e9286d95f",
            GITHUB_RUN_ATTEMPT: "1",
            GITHUB_REF: "refs/heads/master",
            GITHUB_ACTOR: "privatenumber",
            ANDROID_SDK_ROOT: "/usr/local/lib/android/sdk",
            npm_package_license: "MIT",
            npm_package_devDependencies_tsx: "^3.12.6",
            GITHUB_PATH: "/home/runner/work/_temp/_runner_file_commands/add_path_d34fcc3a-73ae-4229-9f5e-ebc693d1ecbe",
            JAVA_HOME: "/usr/lib/jvm/temurin-17-jdk-amd64",
            PWD: "/home/runner/work/compare-bun-node/compare-bun-node",
            GITHUB_ACTOR_ID: "1075694",
            RUNNER_WORKSPACE: "/home/runner/work/compare-bun-node",
            npm_execpath: "/home/runner/setup-pnpm/node_modules/.pnpm/pnpm@9.12.1/node_modules/pnpm/bin/pnpm.cjs",
            HOMEBREW_CLEANUP_PERIODIC_FULL_DAYS: "3650",
            GITHUB_EVENT_NAME: "schedule",
            HOMEBREW_NO_AUTO_UPDATE: "1",
            ANDROID_HOME: "/usr/local/lib/android/sdk",
            GITHUB_SERVER_URL: "https://github.com",
            GECKOWEBDRIVER: "/usr/local/share/gecko_driver",
            GHCUP_INSTALL_BASE_PREFIX: "/usr/local",
            GITHUB_OUTPUT: "/home/runner/work/_temp/_runner_file_commands/set_output_d34fcc3a-73ae-4229-9f5e-ebc693d1ecbe",
            EDGEWEBDRIVER: "/usr/local/share/edge_driver",
            npm_command: "run-script",
            PNPM_SCRIPT_SRC_DIR: "/home/runner/work/compare-bun-node/compare-bun-node",
            ANDROID_NDK: "/usr/local/lib/android/sdk/ndk/27.3.13750724",
            SGX_AESM_ADDR: "1",
            CHROME_BIN: "/usr/bin/google-chrome",
            SELENIUM_JAR_PATH: "/usr/share/java/selenium-server.jar",
            MEMORY_PRESSURE_WRITE: "c29tZSAyMDAwMDAgMjAwMDAwMAA=",
            PNPM_HOME: "/home/runner/setup-pnpm/node_modules/.bin",
            npm_package_lint_staged____ts_js_: "lintroll --cache",
            ANDROID_NDK_HOME: "/usr/local/lib/android/sdk/ndk/27.3.13750724",
            GITHUB_STEP_SUMMARY: "/home/runner/work/_temp/_runner_file_commands/step_summary_d34fcc3a-73ae-4229-9f5e-ebc693d1ecbe",
            INIT_CWD: "/home/runner/work/compare-bun-node/compare-bun-node"
        },
        title: "node",
        argv: [Circular: *26],
        execArgv: <ref *122> [],
        pid: 2889,
        ppid: 2208,
        execPath: "/opt/hostedtoolcache/node/22.20.0/x64/bin/node",
        debugPort: 9229,
        argv0: "node",
        _preload_modules: [Circular: *17],
        [get/set] report: <ref *123> {
            writeReport: ƒ writeReport(length: 2) {},
            getReport: ƒ getReport(length: 1) {},
            [get/set] directory: "",
            [get/set] filename: "",
            [get/set] compact: false,
            [get/set] excludeNetwork: false,
            [get/set] signal: "SIGUSR2",
            [get/set] reportOnFatalError: false,
            [get/set] reportOnSignal: false,
            [get/set] reportOnUncaughtException: false,
            [get/set] excludeEnv: false
        },
        Symbol(shapeMode): false,
        Symbol(kCapture): false
    },
    dlopen: [Circular: *53],
    domain: null,
    emitWarning: [Circular: *82],
    env: [Circular: *121],
    execArgv: [Circular: *122],
    execPath: "/opt/hostedtoolcache/node/22.20.0/x64/bin/node",
    execve: [Circular: *64],
    exit: [Circular: *63],
    exitCode: undefined,
    features: [Circular: *79],
    finalization: [Circular: *67],
    getActiveResourcesInfo: [Circular: *55],
    getBuiltinModule: [Circular: *85],
    getegid: [Circular: *77],
    geteuid: [Circular: *75],
    getgid: [Circular: *76],
    getgroups: [Circular: *78],
    getuid: [Circular: *74],
    hasUncaughtExceptionCaptureCallback: [Circular: *81],
    hrtime: [Circular: *71],
    initgroups: [Circular: *115],
    kill: [Circular: *62],
    loadEnvFile: [Circular: *57],
    memoryUsage: [Circular: *60],
    moduleLoadList: [Circular: *52],
    nextTick: [Circular: *83],
    openStdin: [Circular: *73],
    pid: 2889,
    platform: "linux",
    ppid: 2208,
    reallyExit: [Circular: *56],
    ref: [Circular: *65],
    release: [Circular: *51],
    report: [Circular: *123],
    resourceUsage: [Circular: *59],
    setSourceMapsEnabled: [Circular: *84],
    setUncaughtExceptionCaptureCallback: [Circular: *80],
    setegid: [Circular: *117],
    seteuid: [Circular: *118],
    setgid: [Circular: *119],
    setgroups: [Circular: *116],
    setuid: [Circular: *120],
    sourceMapsEnabled: false,
    stderr: [Circular: *106],
    stdin: [Circular: *97],
    stdout: [Circular: *86],
    threadCpuUsage: [Circular: *58],
    title: "node",
    umask: [Circular: *114],
    unref: [Circular: *66],
    uptime: [Circular: *54],
    version: "v22.20.0",
    versions: [Circular: *50]
}
```

</td><td valign="top">

```js
[Object: null prototype] {
    _debugEnd: <ref *2> ƒ _debugEnd(length: 0) {},
    _debugProcess: <ref *3> ƒ _debugProcess(length: 0) {},
    _eval: undefined,
    _exiting: false,
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
        "/tmp/fs-fixture-1760314717602-1/process.mjs"
    ],
    argv0: "bun",
    assert: <ref *18> ƒ assert(length: 1) {},
    availableMemory: <ref *19> ƒ availableMemory(length: 0) {},
    binding: <ref *20> ƒ binding(length: 1) {},
    browser: false,
    channel: undefined,
    chdir: <ref *21> ƒ chdir(length: 1) {},
    config: <ref *22> {
        target_defaults: {},
        variables: {
            v8_enable_i8n_support: 1,
            enable_lto: false,
            node_module_version: 137,
            napi_build_version: 10,
            node_builtin_shareable_builtins: [],
            node_byteorder: "little",
            clang: 0,
            control_flow_guard: false,
            coverage: false,
            dcheck_always_on: 0,
            debug_nghttp2: false,
            debug_node: false,
            enable_pgo_generate: false,
            enable_pgo_use: false,
            error_on_warn: false,
            force_dynamic_crt: 0,
            napi_build: "0.0",
            host_arch: "x64",
            target_arch: "x64",
            asan: 0
        }
    },
    connected: false,
    constrainedMemory: <ref *26> ƒ constrainedMemory(length: 0) {},
    cpuUsage: <ref *27> ƒ cpuUsage(length: 1) {},
    cwd: <ref *28> ƒ cwd(length: 1) {},
    debugPort: 0,
    default: EventEmitter {
        _exiting: false,
        _debugEnd: [Circular: *2],
        _debugProcess: [Circular: *3],
        [get/set] _eval: undefined,
        _fatalException: [Circular: *4],
        _getActiveHandles: [Circular: *5],
        _getActiveRequests: [Circular: *6],
        _kill: [Circular: *7],
        _linkedBinding: [Circular: *8],
        _preload_modules: [Circular: *9],
        _rawDebug: [Circular: *10],
        _startProfilerIdleNotifier: [Circular: *11],
        _stopProfilerIdleNotifier: [Circular: *12],
        _tickCallback: [Circular: *13],
        abort: [Circular: *14],
        allowedNodeEnvironmentFlags: [Circular: *16],
        arch: "x64",
        [get/set] argv: [Circular: *17],
        argv0: "bun",
        assert: [Circular: *18],
        availableMemory: [Circular: *19],
        binding: [Circular: *20],
        browser: false,
        channel: undefined,
        chdir: [Circular: *21],
        config: [Circular: *22],
        [get/set] connected: false,
        constrainedMemory: [Circular: *26],
        cpuUsage: [Circular: *27],
        cwd: [Circular: *28],
        [get/set] debugPort: 0,
        disconnect: undefined,
        dlopen: <ref *30> ƒ dlopen(length: 1) {},
        emitWarning: <ref *31> ƒ emitWarning(length: 1) {},
        env: <ref *32> {
            GITHUB_STATE: "/home/runner/work/_temp/_runner_file_commands/save_state_d34fcc3a-73ae-4229-9f5e-ebc693d1ecbe",
            npm_package_devDependencies__types_node: "^18.15.11",
            DOTNET_NOLOGO: "1",
            USER: "runner",
            npm_config_user_agent: "pnpm/9.12.1 npm/? node/v22.20.0 linux x64",
            CI: "true",
            RUNNER_ENVIRONMENT: "github-hosted",
            GITHUB_ENV: "/home/runner/work/_temp/_runner_file_commands/set_env_d34fcc3a-73ae-4229-9f5e-ebc693d1ecbe",
            PIPX_HOME: "/opt/pipx",
            npm_node_execpath: "/opt/hostedtoolcache/node/22.20.0/x64/bin/node",
            JAVA_HOME_8_X64: "/usr/lib/jvm/temurin-8-jdk-amd64",
            SHLVL: "1",
            npm_package_packageManager: "pnpm@9.12.1",
            HOME: "/home/runner",
            RUNNER_TEMP: "/home/runner/work/_temp",
            GITHUB_EVENT_PATH: "/home/runner/work/_temp/_github_workflow/event.json",
            JAVA_HOME_11_X64: "/usr/lib/jvm/temurin-11-jdk-amd64",
            PIPX_BIN_DIR: "/opt/pipx_bin",
            GITHUB_REPOSITORY_OWNER: "privatenumber",
            npm_package_dependencies_comment_mark: "^1.1.1",
            GRADLE_HOME: "/usr/share/gradle-9.1.0",
            ANDROID_NDK_LATEST_HOME: "/usr/local/lib/android/sdk/ndk/28.2.13676358",
            JAVA_HOME_21_X64: "/usr/lib/jvm/temurin-21-jdk-amd64",
            GITHUB_RETENTION_DAYS: "90",
            GITHUB_REPOSITORY_OWNER_ID: "1075694",
            POWERSHELL_DISTRIBUTION_CHANNEL: "GitHub-Actions-ubuntu24",
            AZURE_EXTENSION_DIR: "/opt/az/azcliextensions",
            GITHUB_HEAD_REF: "",
            SYSTEMD_EXEC_PID: "1876",
            GITHUB_GRAPHQL_URL: "https://api.github.com/graphql",
            JAVA_HOME_25_X64: "/usr/lib/jvm/temurin-25-jdk-amd64",
            NVM_DIR: "/home/runner/.nvm",
            npm_package_dependencies_fs_fixture: "^1.2.0",
            DOTNET_SKIP_FIRST_TIME_EXPERIENCE: "1",
            JAVA_HOME_17_X64: "/usr/lib/jvm/temurin-17-jdk-amd64",
            ImageVersion: "20250929.60.1",
            LOGNAME: "runner",
            RUNNER_OS: "Linux",
            GITHUB_API_URL: "https://api.github.com",
            GOROOT_1_22_X64: "/opt/hostedtoolcache/go/1.22.12/x64",
            SWIFT_PATH: "/usr/share/swift/usr/bin",
            npm_package_devDependencies_lintroll: "^1.10.0",
            CHROMEWEBDRIVER: "/usr/local/share/chromedriver-linux64",
            GOROOT_1_23_X64: "/opt/hostedtoolcache/go/1.23.12/x64",
            JOURNAL_STREAM: "9:10837",
            GITHUB_WORKFLOW: "Compare Bun and Node.js",
            _: "/home/runner/setup-pnpm/node_modules/.bin/pnpm",
            npm_package_private: "true",
            MEMORY_PRESSURE_WATCH: "/sys/fs/cgroup/system.slice/hosted-compute-agent.service/memory.pressure",
            GOROOT_1_24_X64: "/opt/hostedtoolcache/go/1.24.7/x64",
            npm_package_scripts_lint: "lintroll --ignore-pattern README.md --cache .",
            npm_config_registry: "https://registry.npmjs.org/",
            ACTIONS_RUNNER_ACTION_ARCHIVE_CACHE: "/opt/actionarchivecache",
            GITHUB_RUN_ID: "18451556197",
            GITHUB_REF_TYPE: "branch",
            BOOTSTRAP_HASKELL_NONINTERACTIVE: "1",
            GITHUB_WORKFLOW_SHA: "40bac65068e2834f8d5409731f302d9e9286d95f",
            GITHUB_BASE_REF: "",
            ImageOS: "ubuntu24",
            npm_package_scripts_start: "tsx index.ts",
            GITHUB_WORKFLOW_REF: "privatenumber/compare-bun-node/.github/workflows/compare.yml@refs/heads/master",
            GITHUB_ACTION_REPOSITORY: "",
            ENABLE_RUNNER_TRACING: "true",
            npm_config_node_gyp: "/home/runner/setup-pnpm/node_modules/.pnpm/pnpm@9.12.1/node_modules/pnpm/dist/node_modules/node-gyp/…",
            PATH: "/home/runner/work/compare-bun-node/compare-bun-node/node_modules/.bin:/home/runner/setup-pnpm/node_m…",
            ANT_HOME: "/usr/share/ant",
            DOTNET_MULTILEVEL_LOOKUP: "0",
            RUNNER_TRACKING_ID: "github_56239102-fad2-47ff-9ce7-3bc9d8532bb0",
            INVOCATION_ID: "ca9fff4d042b4c3287b4e331ecf43685",
            RUNNER_TOOL_CACHE: "/opt/hostedtoolcache",
            NODE: "/opt/hostedtoolcache/node/22.20.0/x64/bin/node",
            GITHUB_ACTION: "__run",
            GITHUB_RUN_NUMBER: "151",
            GITHUB_TRIGGERING_ACTOR: "privatenumber",
            RUNNER_ARCH: "X64",
            XDG_RUNTIME_DIR: "/run/user/1001",
            AGENT_TOOLSDIRECTORY: "/opt/hostedtoolcache",
            npm_config_frozen_lockfile: "",
            LANG: "C.UTF-8",
            VCPKG_INSTALLATION_ROOT: "/usr/local/share/vcpkg",
            CONDA: "/usr/share/miniconda",
            RUNNER_NAME: "GitHub Actions 1000003405",
            XDG_CONFIG_HOME: "/home/runner/.config",
            GITHUB_REF_NAME: "master",
            GITHUB_REPOSITORY: "privatenumber/compare-bun-node",
            npm_package_simple_git_hooks_pre_commit: "pnpm lint-staged",
            npm_lifecycle_script: "tsx index.ts",
            ANDROID_NDK_ROOT: "/usr/local/lib/android/sdk/ndk/27.3.13750724",
            GITHUB_ACTION_REF: "",
            DEBIAN_FRONTEND: "noninteractive",
            SHELL: "/bin/bash",
            GITHUB_REPOSITORY_ID: "622996871",
            GITHUB_ACTIONS: "true",
            NODE_PATH: "/home/runner/work/compare-bun-node/compare-bun-node/node_modules/.pnpm/tsx@3.14.0/node_modules/tsx/d…",
            npm_lifecycle_event: "start",
            GITHUB_REF_PROTECTED: "false",
            npm_package_devDependencies_lint_staged: "^13.2.0",
            npm_package_devDependencies_simple_git_hooks: "^2.8.1",
            GITHUB_WORKSPACE: "/home/runner/work/compare-bun-node/compare-bun-node",
            ACCEPT_EULA: "Y",
            GITHUB_JOB: "build",
            npm_package_author: "Hiroki Osame <hiroki.osame@gmail.com>",
            npm_package_dependencies_execa: "^7.1.1",
            GITHUB_SHA: "40bac65068e2834f8d5409731f302d9e9286d95f",
            GITHUB_RUN_ATTEMPT: "1",
            GITHUB_REF: "refs/heads/master",
            GITHUB_ACTOR: "privatenumber",
            ANDROID_SDK_ROOT: "/usr/local/lib/android/sdk",
            npm_package_license: "MIT",
            npm_package_devDependencies_tsx: "^3.12.6",
            GITHUB_PATH: "/home/runner/work/_temp/_runner_file_commands/add_path_d34fcc3a-73ae-4229-9f5e-ebc693d1ecbe",
            JAVA_HOME: "/usr/lib/jvm/temurin-17-jdk-amd64",
            PWD: "/home/runner/work/compare-bun-node/compare-bun-node",
            GITHUB_ACTOR_ID: "1075694",
            RUNNER_WORKSPACE: "/home/runner/work/compare-bun-node",
            npm_execpath: "/home/runner/setup-pnpm/node_modules/.pnpm/pnpm@9.12.1/node_modules/pnpm/bin/pnpm.cjs",
            HOMEBREW_CLEANUP_PERIODIC_FULL_DAYS: "3650",
            GITHUB_EVENT_NAME: "schedule",
            HOMEBREW_NO_AUTO_UPDATE: "1",
            ANDROID_HOME: "/usr/local/lib/android/sdk",
            GITHUB_SERVER_URL: "https://github.com",
            GECKOWEBDRIVER: "/usr/local/share/gecko_driver",
            GHCUP_INSTALL_BASE_PREFIX: "/usr/local",
            GITHUB_OUTPUT: "/home/runner/work/_temp/_runner_file_commands/set_output_d34fcc3a-73ae-4229-9f5e-ebc693d1ecbe",
            EDGEWEBDRIVER: "/usr/local/share/edge_driver",
            npm_command: "run-script",
            PNPM_SCRIPT_SRC_DIR: "/home/runner/work/compare-bun-node/compare-bun-node",
            ANDROID_NDK: "/usr/local/lib/android/sdk/ndk/27.3.13750724",
            SGX_AESM_ADDR: "1",
            CHROME_BIN: "/usr/bin/google-chrome",
            SELENIUM_JAR_PATH: "/usr/share/java/selenium-server.jar",
            MEMORY_PRESSURE_WRITE: "c29tZSAyMDAwMDAgMjAwMDAwMAA=",
            PNPM_HOME: "/home/runner/setup-pnpm/node_modules/.bin",
            npm_package_lint_staged____ts_js_: "lintroll --cache",
            ANDROID_NDK_HOME: "/usr/local/lib/android/sdk/ndk/27.3.13750724",
            GITHUB_STEP_SUMMARY: "/home/runner/work/_temp/_runner_file_commands/step_summary_d34fcc3a-73ae-4229-9f5e-ebc693d1ecbe",
            INIT_CWD: "/home/runner/work/compare-bun-node/compare-bun-node"
        },
        [get/set] execArgv: <ref *33> [],
        execPath: "/home/runner/.bun/bin/bun",
        exit: <ref *34> ƒ exit(length: 1) {},
        [get/set] exitCode: undefined,
        features: <ref *35> {
            inspector: true,
            debug: false,
            uv: true,
            ipv6: true,
            tls_alpn: true,
            tls_sni: true,
            tls_ocsp: true,
            tls: true,
            cached_builtins: true,
            openssl_is_boringssl: true,
            require_module: true,
            typescript: "transform"
        },
        getActiveResourcesInfo: <ref *36> ƒ getActiveResourcesInfo(length: 0) {},
        getBuiltinModule: <ref *37> ƒ getBuiltinModule(length: 1) {},
        hasUncaughtExceptionCaptureCallback: <ref *38> ƒ hasUncaughtExceptionCaptureCallback(length: 0) {},
        hrtime: <ref *39> ƒ hrtime(length: 0) {
            bigint: ƒ bigint(length: 0) {}
        },
        isBun: true,
        kill: <ref *41> ƒ kill(length: 2) {},
        [get/set] mainModule: undefined,
        memoryUsage: <ref *42> ƒ memoryUsage(length: 0) {
            rss: ƒ rss(length: 0) {}
        },
        moduleLoadList: <ref *44> [],
        nextTick: <ref *45> ƒ nextTick(length: 1) {},
        [get/set] noDeprecation: false,
        openStdin: <ref *46> ƒ openStdin(length: 0) {},
        pid: 2898,
        platform: "linux",
        ppid: 2208,
        reallyExit: <ref *47> ƒ reallyExit(length: 1) {},
        ref: <ref *48> ƒ ref(length: 1) {},
        release: <ref *49> {
            name: "node",
            sourceUrl: "https://github.com/oven-sh/bun/releases/download/bun-v1.3.1/bun-linux-x64-baseline.zip",
            headersUrl: "https://nodejs.org/download/release/v24.3.0/node-v24.3.0-headers.tar.gz"
        },
        report: <ref *50> {
            compact: false,
            directory: "",
            filename: "",
            getReport: ƒ getReport(length: 0) {},
            reportOnFatalError: false,
            reportOnSignal: false,
            reportOnUncaughtException: false,
            excludeEnv: "SIGUSR2",
            writeReport: ƒ writeReport(length: 1) {}
        },
        resourceUsage: <ref *53> ƒ resourceUsage(length: 0) {},
        revision: "db7bcd79ff26423e5f72627f203a67b36802a2c1",
        send: undefined,
        setSourceMapsEnabled: <ref *54> ƒ setSourceMapsEnabled(length: 1) {},
        setUncaughtExceptionCaptureCallback: <ref *55> ƒ setUncaughtExceptionCaptureCallback(length: 1) {},
        stderr: <ref *56> WriteStream {
            fd: 2,
            _writev: undefined,
            flush: false,
            start: undefined,
            pos: undefined,
            bytesWritten: 0,
            _write: <ref *57> ƒ underscoreWriteFast(length: 3) {},
            write: <ref *58> ƒ writeFast(length: 3) {},
            _events: {
                close: undefined,
                error: undefined,
                prefinish: undefined,
                finish: undefined,
                drain: undefined
            },
            _writableState: {
                highWaterMark: 65536,
                length: 0,
                corked: 0,
                onwrite: ƒ bound onwrite(length: 1) {},
                writelen: 0,
                bufferedIndex: 0,
                pendingcb: 0,
                Symbol(kState): 17580808,
                Symbol(kBufferedValue): null
            },
            _maxListeners: undefined,
            _eventsCount: NaN,
            readable: false,
            _type: "fs",
            destroySoon: <ref *62> ƒ (length: 2) {},
            _destroy: ƒ (length: 2) {},
            _isStdio: true,
            Symbol(kFs): <ref *64> {
                appendFile: ƒ appendFile(length: 4) {},
                appendFileSync: ƒ appendFileSync(length: 3) {},
                access: ƒ access(length: 3) {},
                accessSync: ƒ accessSync(length: 2) {},
                chown: ƒ chown(length: 4) {},
                chownSync: ƒ chownSync(length: 3) {},
                chmod: ƒ chmod(length: 3) {},
                chmodSync: ƒ chmodSync(length: 2) {},
                close: ƒ close(length: 2) {},
                closeSync: ƒ closeSync(length: 1) {},
                copyFile: ƒ copyFile(length: 4) {},
                copyFileSync: ƒ copyFileSync(length: 3) {},
                cp: ƒ cp(length: 4) {},
                cpSync: ƒ cpSync(length: 3) {},
                createReadStream: ƒ createReadStream(length: 2) {},
                createWriteStream: ƒ createWriteStream(length: 2) {},
                exists: ƒ exists(length: 2) {
                    Symbol(nodejs.util.promisify.custom): ƒ exists(length: 1) {}
                },
                existsSync: ƒ existsSync(length: 1) {},
                fchown: ƒ fchown(length: 4) {},
                fchownSync: ƒ fchownSync(length: 3) {},
                fchmod: ƒ fchmod(length: 3) {},
                fchmodSync: ƒ fchmodSync(length: 2) {},
                fdatasync: ƒ fdatasync(length: 2) {},
                fdatasyncSync: ƒ fdatasyncSync(length: 1) {},
                fstat: ƒ fstat(length: 3) {},
                fstatSync: ƒ fstatSync(length: 1) {},
                fsync: ƒ fsync(length: 2) {},
                fsyncSync: ƒ fsyncSync(length: 1) {},
                ftruncate: ƒ ftruncate(length: 1) {},
                ftruncateSync: ƒ ftruncateSync(length: 1) {},
                futimes: ƒ futimes(length: 4) {},
                futimesSync: ƒ futimesSync(length: 3) {},
                glob: ƒ glob(length: 3) {},
                globSync: ƒ globSync(length: 2) {},
                lchown: ƒ lchown(length: 4) {},
                lchownSync: ƒ lchownSync(length: 3) {},
                lchmod: undefined,
                lchmodSync: undefined,
                link: ƒ link(length: 3) {},
                linkSync: ƒ linkSync(length: 2) {},
                lstat: ƒ lstat(length: 3) {},
                lstatSync: ƒ lstatSync(length: 1) {},
                lutimes: ƒ lutimes(length: 4) {},
                lutimesSync: ƒ lutimesSync(length: 3) {},
                mkdir: ƒ mkdir(length: 3) {},
                mkdirSync: ƒ mkdirSync(length: 2) {},
                mkdtemp: ƒ mkdtemp(length: 3) {},
                mkdtempSync: ƒ mkdtempSync(length: 2) {},
                open: ƒ open(length: 4) {},
                openSync: ƒ openSync(length: 3) {},
                read: ƒ read(length: 6) {},
                readFile: ƒ readFile(length: 3) {},
                readFileSync: ƒ readFileSync(length: 2) {},
                readSync: ƒ readSync(length: 5) {},
                readdir: ƒ readdir(length: 3) {},
                readdirSync: ƒ readdirSync(length: 2) {},
                readlink: ƒ readlink(length: 3) {},
                readlinkSync: ƒ readlinkSync(length: 2) {},
                readv: ƒ readv(length: 4) {},
                readvSync: ƒ readvSync(length: 3) {},
                realpath: ƒ realpath(length: 3) {
                    native: ƒ realpath4(length: 3) {}
                },
                realpathSync: ƒ realpathSync(length: 2) {
                    native: ƒ bound realpathNativeSync(length: 3) {}
                },
                rename: ƒ rename(length: 3) {},
                renameSync: ƒ renameSync(length: 2) {},
                rm: ƒ rm(length: 3) {},
                rmSync: ƒ rmSync(length: 2) {},
                rmdir: ƒ rmdir(length: 3) {},
                rmdirSync: ƒ rmdirSync(length: 2) {},
                stat: ƒ stat(length: 3) {},
                statfs: ƒ statfs(length: 3) {},
                statSync: ƒ statSync(length: 1) {},
                statfsSync: ƒ statfsSync(length: 2) {},
                symlink: ƒ symlink(length: 4) {},
                symlinkSync: ƒ symlinkSync(length: 3) {},
                truncate: ƒ truncate(length: 3) {},
                truncateSync: ƒ truncateSync(length: 2) {},
                unlink: ƒ unlink(length: 2) {},
                unlinkSync: ƒ unlinkSync(length: 1) {},
                unwatchFile: ƒ unwatchFile(length: 2) {},
                utimes: ƒ utimes(length: 4) {},
                utimesSync: ƒ utimesSync(length: 3) {},
                watch: ƒ watch(length: 3) {},
                watchFile: ƒ watchFile(length: 3) {},
                write: ƒ write(length: 6) {},
                writeFile: ƒ writeFile(length: 4) {},
                writeFileSync: ƒ writeFileSync(length: 3) {},
                writeSync: ƒ writeSync(length: 5) {},
                writev: ƒ writev(length: 4) {},
                writevSync: ƒ writevSync(length: 3) {},
                _toUnixTimestamp: ƒ _toUnixTimestamp(length: 1) {},
                openAsBlob: ƒ openAsBlob(length: 2) {},
                Dirent: ƒ Dirent(length: 3) {},
                opendir: ƒ opendir(length: 3) {},
                opendirSync: ƒ opendirSync(length: 2) {},
                F_OK: 0,
                R_OK: 4,
                W_OK: 2,
                X_OK: 1,
                constants: <ref *160> [Object: null prototype] {
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
                    EXTENSIONLESS_FORMAT_JAVASCRIPT: 0,
                    EXTENSIONLESS_FORMAT_WASM: 1
                },
                Dir: class Dir {},
                Stats: ƒ Stats(length: 0) {},
                ReadStream: <ref *163> ƒ ReadStream(length: 2) {},
                WriteStream: <ref *164> ƒ WriteStream(length: 2) {},
                [get/set] FileReadStream: [Circular: *163],
                [get/set] FileWriteStream: [Circular: *164],
                promises: {
                    access: async ƒ access(length: 3) {},
                    appendFile: async ƒ appendFile(length: 1) {},
                    close: async ƒ close(length: 1) {},
                    copyFile: async ƒ copyFile(length: 4) {},
                    cp: ƒ cp(length: 3) {},
                    exists: async ƒ exists(length: 0) {},
                    chown: async ƒ chown(length: 4) {},
                    chmod: async ƒ chmod(length: 3) {},
                    fchmod: async ƒ fchmod(length: 3) {},
                    fchown: async ƒ fchown(length: 4) {},
                    fstat: async ƒ fstat(length: 1) {},
                    fsync: async ƒ fsync(length: 2) {},
                    fdatasync: async ƒ fdatasync(length: 2) {},
                    ftruncate: async ƒ ftruncate(length: 1) {},
                    futimes: async ƒ futimes(length: 4) {},
                    glob: async ƒ glob(length: 2) {},
                    lchmod: async ƒ lchmod(length: 3) {},
                    lchown: async ƒ lchown(length: 4) {},
                    link: async ƒ link(length: 3) {},
                    lstat: async ƒ lstat(length: 1) {},
                    mkdir: async ƒ mkdir(length: 3) {},
                    mkdtemp: async ƒ mkdtemp(length: 3) {},
                    statfs: async ƒ statfs(length: 2) {},
                    open: async ƒ open(length: 1) {},
                    read: async ƒ read(length: 6) {},
                    write: async ƒ write(length: 6) {},
                    readdir: async ƒ readdir(length: 3) {},
                    readFile: async ƒ readFile(length: 1) {},
                    writeFile: async ƒ writeFile(length: 1) {},
                    readlink: async ƒ readlink(length: 3) {},
                    realpath: async ƒ realpath(length: 3) {},
                    rename: async ƒ rename(length: 3) {},
                    stat: async ƒ stat(length: 1) {},
                    symlink: async ƒ symlink(length: 4) {},
                    truncate: async ƒ truncate(length: 3) {},
                    unlink: async ƒ unlink(length: 2) {},
                    utimes: async ƒ utimes(length: 4) {},
                    lutimes: async ƒ lutimes(length: 4) {},
                    rm: async ƒ rm(length: 3) {},
                    rmdir: async ƒ rmdir(length: 3) {},
                    writev: async ƒ writev(length: 3) {},
                    readv: async ƒ readv(length: 3) {},
                    constants: [Circular: *160],
                    watch: ƒ watch(length: 1) {},
                    opendir: async ƒ opendir(length: 2) {}
                }
            },
            Symbol(kWriteStreamFastPath): FileSink {},
            Symbol(kCapture): false,
            Symbol(Symbol.asyncIterator): ƒ (length: 0) {}
        },
        stdin: <ref *212> ReadStream {
            fd: 0,
            start: undefined,
            end: Infinity,
            pos: undefined,
            bytesRead: 0,
            _events: {
                close: [
                    ƒ (length: 0) {}
                ],
                error: undefined,
                data: undefined,
                end: undefined,
                readable: undefined,
                resume: [
                    ƒ (length: 0) {}
                ],
                pause: [
                    ƒ (length: 0) {}
                ]
            },
            _readableState: {
                highWaterMark: 65536,
                buffer: [],
                bufferIndex: 0,
                length: 0,
                pipes: [],
                awaitDrainWriters: null,
                Symbol(kState): 1052936
            },
            _maxListeners: undefined,
            _eventsCount: NaN,
            on: <ref *223> ƒ (length: 2) {},
            addListener: [Circular: *223],
            ref: ƒ (length: 0) {},
            unref: ƒ (length: 0) {},
            pause: ƒ (length: 0) {},
            resume: ƒ (length: 0) {},
            _read: ƒ triggerRead(length: 1) {},
            Symbol(kFs): [Circular: *64],
            Symbol(kReadStreamFastPath): false,
            Symbol(kCapture): false
        },
        stdout: <ref *229> WriteStream {
            fd: 1,
            _writev: undefined,
            flush: false,
            start: undefined,
            pos: undefined,
            bytesWritten: 0,
            _write: [Circular: *57],
            write: [Circular: *58],
            _events: {
                close: undefined,
                error: undefined,
                prefinish: undefined,
                finish: undefined,
                drain: undefined
            },
            _writableState: {
                highWaterMark: 65536,
                length: 0,
                corked: 0,
                onwrite: ƒ bound onwrite(length: 1) {},
                writelen: 0,
                bufferedIndex: 0,
                pendingcb: 0,
                Symbol(kState): 17580808,
                Symbol(kBufferedValue): null
            },
            _maxListeners: undefined,
            _eventsCount: NaN,
            readable: false,
            _type: "fs",
            destroySoon: [Circular: *62],
            _destroy: ƒ (length: 2) {},
            _isStdio: true,
            Symbol(kFs): [Circular: *64],
            Symbol(kWriteStreamFastPath): FileSink {},
            Symbol(kCapture): false,
            Symbol(Symbol.asyncIterator): ƒ (length: 0) {}
        },
        [get/set] throwDeprecation: false,
        [get/set] title: "bun",
        umask: <ref *236> ƒ umask(length: 1) {},
        unref: <ref *237> ƒ unref(length: 1) {},
        uptime: <ref *238> ƒ uptime(length: 1) {},
        version: "v24.3.0",
        versions: <ref *239> {
            node: "24.3.0",
            bun: "1.3.1",
            boringssl: "29a2cd359458c9384694b75456026e4b57e3e567",
            openssl: "1.1.0",
            llhttp: "9.3.0",
            libarchive: "898dc8319355b7e985f68a9819f182aaed61b53a",
            mimalloc: "4c283af60cdae205df5a872530c77e2a6a307d43",
            picohttpparser: "066d2b1e9ab820703db0837a7255d92d30f0c9f5",
            uwebsockets: "db7bcd79ff26423e5f72627f203a67b36802a2c1",
            webkit: "0ddf6f47af0a9782a354f61e06d7f83d097d9f84",
            zig: "0.14.1",
            zlib: "886098f3f339617b4243b286f5ed364b9989e245",
            tinycc: "ab631362d839333660a265d3084d8ff060b96753",
            lolhtml: "8d4c273ded322193d017042d1f48df2766b0f88b",
            ares: "d1722e6e8acaf10eb73fa995798a9cd421d9f85e",
            libdeflate: "dc76454a39e7e83b68c3704b6e3784654f8d5ac5",
            usockets: "db7bcd79ff26423e5f72627f203a67b36802a2c1",
            lshpack: "3d0f1fc1d6e66a642e7a98c55deb38aa986eb4b0",
            zstd: "794ea1b0afca0f020f4e57b6732332231fb23c70",
            v8: "13.6.233.10-node.18",
            uv: "1.48.0",
            napi: "10",
            icu: "75.1",
            unicode: "15.1",
            modules: "137"
        },
        getegid: <ref *240> ƒ getegid(length: 0) {},
        geteuid: <ref *241> ƒ geteuid(length: 0) {},
        getgid: <ref *242> ƒ getgid(length: 0) {},
        getgroups: <ref *243> ƒ getgroups(length: 0) {},
        getuid: <ref *244> ƒ getuid(length: 0) {},
        setegid: <ref *245> ƒ setegid(length: 1) {},
        seteuid: <ref *246> ƒ seteuid(length: 1) {},
        setgid: <ref *247> ƒ setgid(length: 1) {},
        setgroups: <ref *248> ƒ setgroups(length: 1) {},
        setuid: <ref *249> ƒ setuid(length: 1) {},
        Symbol(Symbol.toStringTag): "process"
    },
    disconnect: undefined,
    dlopen: [Circular: *30],
    emit: ƒ emit(length: 1) {},
    emitWarning: [Circular: *31],
    env: [Circular: *32],
    eventNames: ƒ eventNames(length: 0) {},
    execArgv: [Circular: *33],
    execPath: "/home/runner/.bun/bin/bun",
    exit: [Circular: *34],
    exitCode: undefined,
    features: [Circular: *35],
    getActiveResourcesInfo: [Circular: *36],
    getBuiltinModule: [Circular: *37],
    getMaxListeners: ƒ getMaxListeners(length: 0) {},
    getegid: [Circular: *240],
    geteuid: [Circular: *241],
    getgid: [Circular: *242],
    getgroups: [Circular: *243],
    getuid: [Circular: *244],
    hasUncaughtExceptionCaptureCallback: [Circular: *38],
    hrtime: [Circular: *39],
    isBun: true,
    kill: [Circular: *41],
    listenerCount: ƒ listenerCount(length: 1) {},
    listeners: ƒ listeners(length: 1) {},
    mainModule: undefined,
    memoryUsage: [Circular: *42],
    moduleLoadList: [Circular: *44],
    nextTick: [Circular: *45],
    noDeprecation: false,
    off: ƒ off(length: 2) {},
    on: ƒ on(length: 2) {},
    once: ƒ once(length: 2) {},
    openStdin: [Circular: *46],
    pid: 2898,
    platform: "linux",
    ppid: 2208,
    prependListener: ƒ prependListener(length: 2) {},
    prependOnceListener: ƒ prependOnceListener(length: 2) {},
    rawListeners: ƒ rawListeners(length: 1) {},
    reallyExit: [Circular: *47],
    ref: [Circular: *48],
    release: [Circular: *49],
    removeAllListeners: ƒ removeAllListeners(length: 1) {},
    removeListener: ƒ removeListener(length: 2) {},
    report: [Circular: *50],
    resourceUsage: [Circular: *53],
    revision: "db7bcd79ff26423e5f72627f203a67b36802a2c1",
    send: undefined,
    setMaxListeners: ƒ setMaxListeners(length: 1) {},
    setSourceMapsEnabled: [Circular: *54],
    setUncaughtExceptionCaptureCallback: [Circular: *55],
    setegid: [Circular: *245],
    seteuid: [Circular: *246],
    setgid: [Circular: *247],
    setgroups: [Circular: *248],
    setuid: [Circular: *249],
    stderr: [Circular: *56],
    stdin: [Circular: *212],
    stdout: [Circular: *229],
    throwDeprecation: false,
    title: "bun",
    umask: [Circular: *236],
    unref: [Circular: *237],
    uptime: [Circular: *238],
    version: "v24.3.0",
    versions: [Circular: *239]
}
```

</td></tr></table>
			</details>

<details>
				<summary><code>punycode</code></summary>
				<br>

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
(node:2911) [DEP0040] DeprecationWarning: The `punycode` module is deprecated. Please use a userland alternative instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
```

</td><td valign="top">

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

</td></tr></table>
			</details>

<details>
				<summary><code>querystring</code></summary>
				<br>

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

</td></tr></table>
			</details>

<details>
				<summary><code>readline</code></summary>
				<br>

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
[Object: null prototype] {
    Interface: <ref *2> ƒ Interface2(length: 4) {},
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
        }
    },
    emitKeypressEvents: [Circular: *8],
    moveCursor: [Circular: *9],
    promises: [Circular: *10]
}
```

</td></tr></table>
			</details>

<details>
				<summary><code>readline/promises</code></summary>
				<br>

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
[Object: null prototype] {
    Interface: <ref *2> class Interface3 extends _Interface {},
    Readline: <ref *3> class Readline {},
    createInterface: <ref *4> ƒ createInterface(length: 4) {},
    default: {
        Readline: [Circular: *3],
        Interface: [Circular: *2],
        createInterface: [Circular: *4]
    }
}
```

</td></tr></table>
			</details>

<details>
				<summary><code>repl</code></summary>
				<br>

<table><tr><th>Node.js</th><th>Bun</th></tr><tr><td valign="top">

```js
[Object: null prototype] {
    REPLServer: <ref *2> ƒ REPLServer(length: 6) {},
    REPL_MODE_SLOPPY: Symbol(repl-sloppy),
    REPL_MODE_STRICT: Symbol(repl-strict),
    Recoverable: <ref *3> ƒ Recoverable(length: 1) {},
    default: {
        start: <ref *5> ƒ start(length: 6) {},
        writer: <ref *6> ƒ writer(length: 1) {
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
        Recoverable: [Circular: *3]
    },
    start: [Circular: *5],
    writer: [Circular: *6]
}
```

</td><td valign="top">

```js
[Object: null prototype] {
    _builtinLibs: <ref *2> [
        "bun",
        "ffi",
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
        "zlib",
        "node:test"
    ],
    _domain: undefined,
    _initialPrompt: "> ",
    allowBlockingCompletions: false,
    breakEvalOnSigint: true,
    builtinModules: [Circular: *2],
    completer: <ref *3> ƒ completer(length: 0) {},
    context: <ref *4> {
        addEventListener: ƒ addEventListener(length: 2) {},
        alert: ƒ alert(length: 1) {},
        atob: ƒ atob(length: 1) {},
        btoa: ƒ btoa(length: 1) {},
        clearImmediate: ƒ clearImmediate(length: 1) {},
        clearInterval: ƒ clearInterval(length: 1) {},
        clearTimeout: ƒ clearTimeout(length: 1) {},
        confirm: ƒ confirm(length: 1) {},
        dispatchEvent: ƒ dispatchEvent(length: 1) {},
        fetch: ƒ fetch(length: 1) {
            preconnect: ƒ preconnect(length: 1) {}
        },
        postMessage: ƒ postMessage(length: 1) {},
        prompt: ƒ prompt(length: 1) {},
        queueMicrotask: ƒ queueMicrotask(length: 2) {},
        removeEventListener: ƒ removeEventListener(length: 2) {},
        reportError: ƒ reportError(length: 1) {},
        setImmediate: ƒ setImmediate(length: 1) {},
        setInterval: ƒ setInterval(length: 1) {},
        setTimeout: ƒ setTimeout(length: 1) {},
        structuredClone: ƒ structuredClone(length: 2) {},
        global: [Circular: *4],
        Bun: {
            $: ƒ BunShell(length: 1) {
                Shell: ƒ Shell(length: 0) {
                    prototype: ShellPrototype {}
                },
                ShellPromise: ƒ ShellPromise(length: 2) {},
                ShellError: ƒ ShellError(length: 0) {},
                braces: ƒ braces(length: 1) {},
                escape: ƒ escape(length: 1) {},
                Symbol(cwd): undefined,
                Symbol(env): <ref *33> {
                    GITHUB_STATE: "/home/runner/work/_temp/_runner_file_commands/save_state_d34fcc3a-73ae-4229-9f5e-ebc693d1ecbe",
                    npm_package_devDependencies__types_node: "^18.15.11",
                    DOTNET_NOLOGO: "1",
                    USER: "runner",
                    npm_config_user_agent: "pnpm/9.12.1 npm/? node/v22.20.0 linux x64",
                    CI: "true",
                    RUNNER_ENVIRONMENT: "github-hosted",
                    GITHUB_ENV: "/home/runner/work/_temp/_runner_file_commands/set_env_d34fcc3a-73ae-4229-9f5e-ebc693d1ecbe",
                    PIPX_HOME: "/opt/pipx",
                    npm_node_execpath: "/opt/hostedtoolcache/node/22.20.0/x64/bin/node",
                    JAVA_HOME_8_X64: "/usr/lib/jvm/temurin-8-jdk-amd64",
                    SHLVL: "1",
                    npm_package_packageManager: "pnpm@9.12.1",
                    HOME: "/home/runner",
                    RUNNER_TEMP: "/home/runner/work/_temp",
                    GITHUB_EVENT_PATH: "/home/runner/work/_temp/_github_workflow/event.json",
                    JAVA_HOME_11_X64: "/usr/lib/jvm/temurin-11-jdk-amd64",
                    PIPX_BIN_DIR: "/opt/pipx_bin",
                    GITHUB_REPOSITORY_OWNER: "privatenumber",
                    npm_package_dependencies_comment_mark: "^1.1.1",
                    GRADLE_HOME: "/usr/share/gradle-9.1.0",
                    ANDROID_NDK_LATEST_HOME: "/usr/local/lib/android/sdk/ndk/28.2.13676358",
                    JAVA_HOME_21_X64: "/usr/lib/jvm/temurin-21-jdk-amd64",
                    GITHUB_RETENTION_DAYS: "90",
                    GITHUB_REPOSITORY_OWNER_ID: "1075694",
                    POWERSHELL_DISTRIBUTION_CHANNEL: "GitHub-Actions-ubuntu24",
                    AZURE_EXTENSION_DIR: "/opt/az/azcliextensions",
                    GITHUB_HEAD_REF: "",
                    SYSTEMD_EXEC_PID: "1876",
                    GITHUB_GRAPHQL_URL: "https://api.github.com/graphql",
                    JAVA_HOME_25_X64: "/usr/lib/jvm/temurin-25-jdk-amd64",
                    NVM_DIR: "/home/runner/.nvm",
                    npm_package_dependencies_fs_fixture: "^1.2.0",
                    DOTNET_SKIP_FIRST_TIME_EXPERIENCE: "1",
                    JAVA_HOME_17_X64: "/usr/lib/jvm/temurin-17-jdk-amd64",
                    ImageVersion: "20250929.60.1",
                    LOGNAME: "runner",
                    RUNNER_OS: "Linux",
                    GITHUB_API_URL: "https://api.github.com",
                    GOROOT_1_22_X64: "/opt/hostedtoolcache/go/1.22.12/x64",
                    SWIFT_PATH: "/usr/share/swift/usr/bin",
                    npm_package_devDependencies_lintroll: "^1.10.0",
                    CHROMEWEBDRIVER: "/usr/local/share/chromedriver-linux64",
                    GOROOT_1_23_X64: "/opt/hostedtoolcache/go/1.23.12/x64",
                    JOURNAL_STREAM: "9:10837",
                    GITHUB_WORKFLOW: "Compare Bun and Node.js",
                    _: "/home/runner/setup-pnpm/node_modules/.bin/pnpm",
                    npm_package_private: "true",
                    MEMORY_PRESSURE_WATCH: "/sys/fs/cgroup/system.slice/hosted-compute-agent.service/memory.pressure",
                    GOROOT_1_24_X64: "/opt/hostedtoolcache/go/1.24.7/x64",
                    npm_package_scripts_lint: "lintroll --ignore-pattern README.md --cache .",
                    npm_config_registry: "https://registry.npmjs.org/",
                    ACTIONS_RUNNER_ACTION_ARCHIVE_CACHE: "/opt/actionarchivecache",
                    GITHUB_RUN_ID: "18451556197",
                    GITHUB_REF_TYPE: "branch",
                    BOOTSTRAP_HASKELL_NONINTERACTIVE: "1",
                    GITHUB_WORKFLOW_SHA: "40bac65068e2834f8d5409731f302d9e9286d95f",
                    GITHUB_BASE_REF: "",
                    ImageOS: "ubuntu24",
                    npm_package_scripts_start: "tsx index.ts",
                    GITHUB_WORKFLOW_REF: "privatenumber/compare-bun-node/.github/workflows/compare.yml@refs/heads/master",
                    GITHUB_ACTION_REPOSITORY: "",
                    ENABLE_RUNNER_TRACING: "true",
                    npm_config_node_gyp: "/home/runner/setup-pnpm/node_modules/.pnpm/pnpm@9.12.1/node_modules/pnpm/dist/node_modules/node-gyp/…",
                    PATH: "/home/runner/work/compare-bun-node/compare-bun-node/node_modules/.bin:/home/runner/setup-pnpm/node_m…",
                    ANT_HOME: "/usr/share/ant",
                    DOTNET_MULTILEVEL_LOOKUP: "0",
                    RUNNER_TRACKING_ID: "github_56239102-fad2-47ff-9ce7-3bc9d8532bb0",
                    INVOCATION_ID: "ca9fff4d042b4c3287b4e331ecf43685",
                    RUNNER_TOOL_CACHE: "/opt/hostedtoolcache",
                    NODE: "/opt/hostedtoolcache/node/22.20.0/x64/bin/node",
                    GITHUB_ACTION: "__run",
                    GITHUB_RUN_NUMBER: "151",
                    GITHUB_TRIGGERING_ACTOR: "privatenumber",
                    RUNNER_ARCH: "X64",
                    XDG_RUNTIME_DIR: "/run/user/1001",
                    AGENT_TOOLSDIRECTORY: "/opt/hostedtoolcache",
                    npm_config_frozen_lockfile: "",
                    LANG: "C.UTF-8",
                    VCPKG_INSTALLATION_ROOT: "/usr/local/share/vcpkg",
                    CONDA: "/usr/share/miniconda",
                    RUNNER_NAME: "GitHub Actions 1000003405",
                    XDG_CONFIG_HOME: "/home/runner/.config",
                    GITHUB_REF_NAME: "master",
                    GITHUB_REPOSITORY: "privatenumber/compare-bun-node",
                    npm_package_simple_git_hooks_pre_commit: "pnpm lint-staged",
                    npm_lifecycle_script: "tsx index.ts",
                    ANDROID_NDK_ROOT: "/usr/local/lib/android/sdk/ndk/27.3.13750724",
                    GITHUB_ACTION_REF: "",
                    DEBIAN_FRONTEND: "noninteractive",
                    SHELL: "/bin/bash",
                    GITHUB_REPOSITORY_ID: "622996871",
                    GITHUB_ACTIONS: "true",
                    NODE_PATH: "/home/runner/work/compare-bun-node/compare-bun-node/node_modules/.pnpm/tsx@3.14.0/node_modules/tsx/d…",
                    npm_lifecycle_event: "start",
                    GITHUB_REF_PROTECTED: "false",
                    npm_package_devDependencies_lint_staged: "^13.2.0",
                    npm_package_devDependencies_simple_git_hooks: "^2.8.1",
                    GITHUB_WORKSPACE: "/home/runner/work/compare-bun-node/compare-bun-node",
                    ACCEPT_EULA: "Y",
                    GITHUB_JOB: "build",
                    npm_package_author: "Hiroki Osame <hiroki.osame@gmail.com>",
                    npm_package_dependencies_execa: "^7.1.1",
                    GITHUB_SHA: "40bac65068e2834f8d5409731f302d9e9286d95f",
                    GITHUB_RUN_ATTEMPT: "1",
                    GITHUB_REF: "refs/heads/master",
                    GITHUB_ACTOR: "privatenumber",
                    ANDROID_SDK_ROOT: "/usr/local/lib/android/sdk",
                    npm_package_license: "MIT",
                    npm_package_devDependencies_tsx: "^3.12.6",
                    GITHUB_PATH: "/home/runner/work/_temp/_runner_file_commands/add_path_d34fcc3a-73ae-4229-9f5e-ebc693d1ecbe",
                    JAVA_HOME: "/usr/lib/jvm/temurin-17-jdk-amd64",
                    PWD: "/home/runner/work/compare-bun-node/compare-bun-node",
                    GITHUB_ACTOR_ID: "1075694",
                    RUNNER_WORKSPACE: "/home/runner/work/compare-bun-node",
                    npm_execpath: "/home/runner/setup-pnpm/node_modules/.pnpm/pnpm@9.12.1/node_modules/pnpm/bin/pnpm.cjs",
                    HOMEBREW_CLEANUP_PERIODIC_FULL_DAYS: "3650",
                    GITHUB_EVENT_NAME: "schedule",
                    HOMEBREW_NO_AUTO_UPDATE: "1",
                    ANDROID_HOME: "/usr/local/lib/android/sdk",
                    GITHUB_SERVER_URL: "https://github.com",
                    GECKOWEBDRIVER: "/usr/local/share/gecko_driver",
                    GHCUP_INSTALL_BASE_PREFIX: "/usr/local",
                    GITHUB_OUTPUT: "/home/runner/work/_temp/_runner_file_commands/set_output_d34fcc3a-73ae-4229-9f5e-ebc693d1ecbe",
                    EDGEWEBDRIVER: "/usr/local/share/edge_driver",
                    npm_command: "run-script",
                    PNPM_SCRIPT_SRC_DIR: "/home/runner/work/compare-bun-node/compare-bun-node",
                    ANDROID_NDK: "/usr/local/lib/android/sdk/ndk/27.3.13750724",
                    SGX_AESM_ADDR: "1",
                    CHROME_BIN: "/usr/bin/google-chrome",
                    SELENIUM_JAR_PATH: "/usr/share/java/selenium-server.jar",
                    MEMORY_PRESSURE_WRITE: "c29tZSAyMDAwMDAgMjAwMDAwMAA=",
                    PNPM_HOME: "/home/runner/setup-pnpm/node_modules/.bin",
                    npm_package_lint_staged____ts_js_: "lintroll --cache",
                    ANDROID_NDK_HOME: "/usr/local/lib/android/sdk/ndk/27.3.13750724",
                    GITHUB_STEP_SUMMARY: "/home/runner/work/_temp/_runner_file_commands/step_summary_d34fcc3a-73ae-4229-9f5e-ebc693d1ecbe",
                    INIT_CWD: "/home/runner/work/compare-bun-node/compare-bun-node"
                },
                Symbol(throws): true
            },
            ArrayBufferSink: ƒ ArrayBufferSink(length: 0) {},
            Cookie: ƒ Cookie(length: 2) {
                parse: ƒ parse(length: 1) {},
                from: ƒ from(length: 3) {}
            },
            CookieMap: ƒ CookieMap(length: 1) {},
            CryptoHasher: ƒ CryptoHasher(length: 0) {
                [get/set] algorithms: [
                    "blake2b256",
                    "blake2b512",
                    "blake2s256",
                    "md4",
                    "md5",
                    "ripemd160",
                    "sha1",
                    "sha224",
                    "sha256",
                    "sha384",
                    "sha512",
                    "sha512-224",
                    "sha512-256",
                    "sha3-224",
                    "sha3-256",
                    "sha3-384",
                    "sha3-512",
                    "shake128",
                    "shake256"
                ],
                hash: ƒ hash(length: 2) {}
            },
            FFI: {
                viewSource: ƒ viewSource(length: 1) {},
                dlopen: ƒ dlopen(length: 1) {},
                callback: ƒ callback(length: 1) {},
                linkSymbols: ƒ linkSymbols(length: 1) {},
                toBuffer: ƒ toBuffer(length: 1) {},
                toArrayBuffer: ƒ toArrayBuffer(length: 1) {},
                closeCallback: ƒ closeCallback(length: 1) {},
                CString: ƒ CString(length: 1) {},
                ptr: ƒ ptr(length: 1) {},
                read: {
                    u8: ƒ u8(length: 2) {},
                    u16: ƒ u16(length: 2) {},
                    u32: ƒ u32(length: 2) {},
                    ptr: ƒ ptr(length: 2) {},
                    i8: ƒ i8(length: 2) {},
                    i16: ƒ i16(length: 2) {},
                    i32: ƒ i32(length: 2) {},
                    i64: ƒ i64(length: 2) {},
                    u64: ƒ u64(length: 2) {},
                    intptr: ƒ intptr(length: 2) {},
                    f32: ƒ f32(length: 2) {},
                    f64: ƒ f64(length: 2) {}
                }
            },
            FileSystemRouter: ƒ FileSystemRouter(length: 0) {},
            Glob: ƒ Glob(length: 0) {},
            MD4: ƒ MD4(length: 0) {
                [get/set] byteLength: 16,
                hash: ƒ hash(length: 2) {}
            },
            MD5: ƒ MD5(length: 0) {
                [get/set] byteLength: 16,
                hash: ƒ hash(length: 2) {}
            },
            SHA1: ƒ SHA1(length: 0) {
                [get/set] byteLength: 20,
                hash: ƒ hash(length: 2) {}
            },
            SHA224: ƒ SHA224(length: 0) {
                [get/set] byteLength: 28,
                hash: ƒ hash(length: 2) {}
            },
            SHA256: ƒ SHA256(length: 0) {
                [get/set] byteLength: 32,
                hash: ƒ hash(length: 2) {}
            },
            SHA384: ƒ SHA384(length: 0) {
                [get/set] byteLength: 48,
                hash: ƒ hash(length: 2) {}
            },
            SHA512: ƒ SHA512(length: 0) {
                [get/set] byteLength: 64,
                hash: ƒ hash(length: 2) {}
            },
            SHA512_256: ƒ SHA512_256(length: 0) {
                [get/set] byteLength: 32,
                hash: ƒ hash(length: 2) {}
            },
            TOML: {
                parse: ƒ parse(length: 1) {}
            },
            YAML: {
                parse: ƒ parse(length: 1) {},
                stringify: ƒ stringify(length: 3) {}
            },
            Transpiler: ƒ Transpiler(length: 0) {},
            embeddedFiles: [],
            S3Client: ƒ S3Client(length: 0) {
                delete: ƒ delete(length: 2) {},
                exists: ƒ exists(length: 2) {},
                file: ƒ file(length: 2) {},
                list: ƒ list(length: 2) {},
                presign: ƒ presign(length: 2) {},
                size: ƒ size(length: 2) {},
                stat: ƒ stat(length: 2) {},
                unlink: ƒ unlink(length: 2) {},
                write: ƒ write(length: 2) {}
            },
            s3: S3Client {},
            CSRF: {
                generate: ƒ generate(length: 1) {},
                verify: ƒ verify(length: 1) {}
            },
            allocUnsafe: ƒ allocUnsafe(length: 1) {},
            argv: <ref *105> [
                "/home/runner/.bun/bin/bun",
                "/tmp/fs-fixture-1760314717602-1/repl.mjs"
            ],
            build: ƒ build(length: 1) {},
            concatArrayBuffers: ƒ concatArrayBuffers(length: 3) {},
            connect: ƒ connect(length: 1) {},
            color: ƒ color(length: 2) {},
            deepEquals: ƒ deepEquals(length: 2) {},
            deepMatch: ƒ deepMatch(length: 2) {},
            deflateSync: ƒ deflateSync(length: 1) {},
            dns: {
                lookup: ƒ lookup(length: 2) {},
                resolve: ƒ resolve(length: 2) {},
                resolveSrv: ƒ resolveSrv(length: 2) {},
                resolveTxt: ƒ resolveTxt(length: 2) {},
                resolveSoa: ƒ resolveSoa(length: 2) {},
                resolveNaptr: ƒ resolveNaptr(length: 2) {},
                resolveMx: ƒ resolveMx(length: 2) {},
                resolveCaa: ƒ resolveCaa(length: 2) {},
                resolveNs: ƒ resolveNs(length: 2) {},
                resolvePtr: ƒ resolvePtr(length: 2) {},
                resolveCname: ƒ resolveCname(length: 2) {},
                resolveAny: ƒ resolveAny(length: 2) {},
                getServers: ƒ getServers(length: 2) {},
                setServers: ƒ setServers(length: 2) {},
                reverse: ƒ reverse(length: 2) {},
                lookupService: ƒ lookupService(length: 2) {},
                prefetch: ƒ prefetch(length: 2) {},
                getCacheStats: ƒ getCacheStats(length: 0) {},
                ADDRCONFIG: 32,
                ALL: 16,
                V4MAPPED: 8
            },
            enableANSIColors: false,
            env: [Circular: *33],
            escapeHTML: ƒ escapeHTML(length: 2) {},
            fetch: ƒ fetch(length: 1) {
                preconnect: ƒ preconnect(length: 1) {}
            },
            file: ƒ file(length: 1) {},
            fileURLToPath: ƒ fileURLToPath(length: 1) {},
            gc: ƒ gc(length: 1) {},
            generateHeapSnapshot: ƒ generateHeapSnapshot(length: 1) {},
            gunzipSync: ƒ gunzipSync(length: 1) {},
            gzipSync: ƒ gzipSync(length: 1) {},
            hash: ƒ hash(length: 1) {
                wyhash: ƒ wyhash(length: 1) {},
                adler32: ƒ adler32(length: 1) {},
                crc32: ƒ crc32(length: 1) {},
                cityHash32: ƒ cityHash32(length: 1) {},
                cityHash64: ƒ cityHash64(length: 1) {},
                xxHash32: ƒ xxHash32(length: 1) {},
                xxHash64: ƒ xxHash64(length: 1) {},
                xxHash3: ƒ xxHash3(length: 1) {},
                murmur32v2: ƒ murmur32v2(length: 1) {},
                murmur32v3: ƒ murmur32v3(length: 1) {},
                murmur64v2: ƒ murmur64v2(length: 1) {},
                rapidhash: ƒ rapidhash(length: 1) {}
            },
            indexOfLine: ƒ indexOfLine(length: 1) {},
            inflateSync: ƒ inflateSync(length: 1) {},
            inspect: ƒ inspect(length: 2) {
                custom: Symbol(nodejs.util.inspect.custom),
                table: ƒ table(length: 3) {}
            },
            isMainThread: true,
            listen: ƒ listen(length: 1) {},
            udpSocket: ƒ udpSocket(length: 1) {},
            [get/set] main: "/tmp/fs-fixture-1760314717602-1/repl.mjs",
            mmap: ƒ mmap(length: 1) {},
            nanoseconds: ƒ nanoseconds(length: 0) {},
            openInEditor: ƒ openInEditor(length: 1) {},
            password: {
                hash: ƒ hash(length: 2) {},
                hashSync: ƒ hashSync(length: 2) {},
                verify: ƒ verify(length: 2) {},
                verifySync: ƒ verifySync(length: 2) {}
            },
            pathToFileURL: ƒ pathToFileURL(length: 1) {},
            peek: ƒ (length: 1) {
                status: ƒ (length: 1) {}
            },
            plugin: ƒ plugin(length: 1) {
                clearAll: ƒ clearAll(length: 1) {}
            },
            randomUUIDv7: ƒ randomUUIDv7(length: 2) {},
            randomUUIDv5: ƒ randomUUIDv5(length: 3) {},
            readableStreamToArray: ƒ (length: 1) {},
            readableStreamToArrayBuffer: ƒ (length: 1) {},
            readableStreamToBytes: ƒ (length: 1) {},
            readableStreamToBlob: ƒ (length: 1) {},
            readableStreamToFormData: ƒ (length: 2) {},
            readableStreamToJSON: ƒ (length: 1) {},
            readableStreamToText: ƒ (length: 1) {},
            resolve: ƒ resolve(length: 1) {},
            resolveSync: ƒ resolveSync(length: 1) {},
            revision: "db7bcd79ff26423e5f72627f203a67b36802a2c1",
            semver: {
                satisfies: ƒ satisfies(length: 2) {},
                order: ƒ order(length: 2) {}
            },
            sql: <ref *187> ƒ sql(length: 1) {
                reserve: ƒ (length: 0) {},
                array: ƒ (length: 0) {},
                commitDistributed: ƒ (length: 0) {},
                rollbackDistributed: ƒ (length: 0) {},
                beginDistributed: <ref *192> ƒ (length: 0) {},
                distributed: [Circular: *192],
                connect: ƒ (length: 0) {},
                unsafe: ƒ (length: 0) {},
                file: ƒ (length: 1) {},
                begin: <ref *196> ƒ (length: 0) {},
                transaction: [Circular: *196],
                close: <ref *197> ƒ (length: 0) {},
                end: [Circular: *197],
                flush: ƒ (length: 0) {}
            },
            postgres: [Circular: *187],
            SQL: ƒ SQL2(length: 0) {
                SQLError: class SQLError extends Error {},
                PostgresError: class PostgresError extends SQLError {},
                SQLiteError: class SQLiteError extends SQLError {},
                MySQLError: class MySQLError extends SQLError {}
            },
            serve: ƒ serve(length: 1) {},
            sha: ƒ sha(length: 1) {},
            shrink: ƒ shrink(length: 1) {},
            sleep: ƒ sleep(length: 1) {},
            sleepSync: ƒ sleepSync(length: 1) {},
            spawn: ƒ spawn(length: 1) {},
            spawnSync: ƒ spawnSync(length: 1) {},
            stderr: Blob {},
            stdin: Blob {},
            stdout: Blob {},
            stringWidth: ƒ stringWidth(length: 2) {},
            stripANSI: ƒ stripANSI(length: 1) {},
            unsafe: {
                gcAggressionLevel: ƒ gcAggressionLevel(length: 1) {},
                arrayBufferToString: ƒ arrayBufferToString(length: 1) {},
                mimallocDump: ƒ mimallocDump(length: 1) {}
            },
            version: "1.3.1",
            which: ƒ which(length: 1) {},
            RedisClient: ƒ RedisClient(length: 0) {},
            redis: RedisClient {},
            secrets: {
                get: ƒ get(length: 1) {},
                set: ƒ set(length: 2) {},
                delete: ƒ delete(length: 1) {}
            },
            write: ƒ write(length: 1) {},
            zstdCompressSync: ƒ zstdCompressSync(length: 1) {},
            zstdDecompressSync: ƒ zstdDecompressSync(length: 1) {},
            zstdCompress: ƒ zstdCompress(length: 1) {},
            zstdDecompress: ƒ zstdDecompress(length: 1) {}
        },
        File: ƒ File(length: 2) {},
        crypto: Crypto {
            subtle: SubtleCrypto {}
        },
        navigator: {
            userAgent: "Bun/1.3.1",
            platform: "Linux x86_64",
            hardwareConcurrency: 4
        },
        performance: Performance {
            now: ƒ now(length: 0) {},
            timeOrigin: 1760314718766.7415
        },
        process: EventEmitter {
            _debugEnd: ƒ _debugEnd(length: 0) {},
            _debugProcess: ƒ _debugProcess(length: 0) {},
            [get/set] _eval: undefined,
            _fatalException: ƒ _fatalException(length: 1) {},
            _getActiveHandles: ƒ _getActiveHandles(length: 0) {},
            _getActiveRequests: ƒ _getActiveRequests(length: 0) {},
            _kill: ƒ _kill(length: 2) {},
            _linkedBinding: ƒ _linkedBinding(length: 0) {},
            _preload_modules: [],
            _rawDebug: ƒ _rawDebug(length: 0) {},
            _startProfilerIdleNotifier: ƒ _startProfilerIdleNotifier(length: 0) {},
            _stopProfilerIdleNotifier: ƒ _stopProfilerIdleNotifier(length: 0) {},
            _tickCallback: ƒ _tickCallback(length: 0) {},
            abort: ƒ abort(length: 1) {},
            allowedNodeEnvironmentFlags: Set {},
            arch: "x64",
            [get/set] argv: [Circular: *105],
            argv0: "bun",
            assert: ƒ assert(length: 1) {},
            availableMemory: ƒ availableMemory(length: 0) {},
            binding: ƒ binding(length: 1) {},
            browser: false,
            channel: undefined,
            chdir: ƒ chdir(length: 1) {},
            config: {
                target_defaults: {},
                variables: {
                    v8_enable_i8n_support: 1,
                    enable_lto: false,
                    node_module_version: 137,
                    napi_build_version: 10,
                    node_builtin_shareable_builtins: [],
                    node_byteorder: "little",
                    clang: 0,
                    control_flow_guard: false,
                    coverage: false,
                    dcheck_always_on: 0,
                    debug_nghttp2: false,
                    debug_node: false,
                    enable_pgo_generate: false,
                    enable_pgo_use: false,
                    error_on_warn: false,
                    force_dynamic_crt: 0,
                    napi_build: "0.0",
                    host_arch: "x64",
                    target_arch: "x64",
                    asan: 0
                }
            },
            [get/set] connected: false,
            constrainedMemory: ƒ constrainedMemory(length: 0) {},
            cpuUsage: ƒ cpuUsage(length: 1) {},
            cwd: ƒ cwd(length: 1) {},
            [get/set] debugPort: 0,
            disconnect: undefined,
            dlopen: ƒ dlopen(length: 1) {},
            emitWarning: ƒ emitWarning(length: 1) {},
            env: [Circular: *33],
            [get/set] execArgv: [],
            execPath: "/home/runner/.bun/bin/bun",
            exit: ƒ exit(length: 1) {},
            [get/set] exitCode: undefined,
            features: {
                inspector: true,
                debug: false,
                uv: true,
                ipv6: true,
                tls_alpn: true,
                tls_sni: true,
                tls_ocsp: true,
                tls: true,
                cached_builtins: true,
                openssl_is_boringssl: true,
                require_module: true,
                typescript: "transform"
            },
            getActiveResourcesInfo: ƒ getActiveResourcesInfo(length: 0) {},
            getBuiltinModule: ƒ getBuiltinModule(length: 1) {},
            hasUncaughtExceptionCaptureCallback: ƒ hasUncaughtExceptionCaptureCallback(length: 0) {},
            hrtime: ƒ hrtime(length: 0) {
                bigint: ƒ bigint(length: 0) {}
            },
            isBun: true,
            kill: ƒ kill(length: 2) {},
            [get/set] mainModule: undefined,
            memoryUsage: ƒ memoryUsage(length: 0) {
                rss: ƒ rss(length: 0) {}
            },
            moduleLoadList: [],
            nextTick: ƒ nextTick(length: 1) {},
            [get/set] noDeprecation: false,
            openStdin: ƒ openStdin(length: 0) {},
            pid: 2980,
            platform: "linux",
            ppid: 2208,
            reallyExit: ƒ reallyExit(length: 1) {},
            ref: ƒ ref(length: 1) {},
            release: {
                name: "node",
                sourceUrl: "https://github.com/oven-sh/bun/releases/download/bun-v1.3.1/bun-linux-x64-baseline.zip",
                headersUrl: "https://nodejs.org/download/release/v24.3.0/node-v24.3.0-headers.tar.gz"
            },
            report: {
                compact: false,
                directory: "",
                filename: "",
                getReport: ƒ getReport(length: 0) {},
                reportOnFatalError: false,
                reportOnSignal: false,
                reportOnUncaughtException: false,
                excludeEnv: "SIGUSR2",
                writeReport: ƒ writeReport(length: 1) {}
            },
            resourceUsage: ƒ resourceUsage(length: 0) {},
            revision: "db7bcd79ff26423e5f72627f203a67b36802a2c1",
            send: undefined,
            setSourceMapsEnabled: ƒ setSourceMapsEnabled(length: 1) {},
            setUncaughtExceptionCaptureCallback: ƒ setUncaughtExceptionCaptureCallback(length: 1) {},
            stderr: WriteStream {
                fd: 2,
                _writev: undefined,
                flush: false,
                start: undefined,
                pos: undefined,
                bytesWritten: 0,
                _write: <ref *290> ƒ underscoreWriteFast(length: 3) {},
                write: <ref *291> ƒ writeFast(length: 3) {},
                _events: {
                    close: undefined,
                    error: undefined,
                    prefinish: undefined,
                    finish: undefined,
                    drain: undefined,
                    Symbol(kConstruct): [
                        ƒ bound onceWrapper(length: 0) {
                            listener: ƒ (length: 0) {}
                        }
                    ]
                },
                _writableState: {
                    highWaterMark: 65536,
                    length: 0,
                    corked: 0,
                    onwrite: ƒ bound onwrite(length: 1) {},
                    writelen: 0,
                    bufferedIndex: 0,
                    pendingcb: 0,
                    Symbol(kState): 17580552,
                    Symbol(kBufferedValue): null
                },
                _maxListeners: undefined,
                _eventsCount: NaN,
                readable: false,
                _type: "fs",
                destroySoon: <ref *298> ƒ (length: 2) {},
                _destroy: ƒ (length: 2) {},
                _isStdio: true,
                Symbol(kFs): <ref *300> {
                    appendFile: ƒ appendFile(length: 4) {},
                    appendFileSync: ƒ appendFileSync(length: 3) {},
                    access: ƒ access(length: 3) {},
                    accessSync: ƒ accessSync(length: 2) {},
                    chown: ƒ chown(length: 4) {},
                    chownSync: ƒ chownSync(length: 3) {},
                    chmod: ƒ chmod(length: 3) {},
                    chmodSync: ƒ chmodSync(length: 2) {},
                    close: ƒ close(length: 2) {},
                    closeSync: ƒ closeSync(length: 1) {},
                    copyFile: ƒ copyFile(length: 4) {},
                    copyFileSync: ƒ copyFileSync(length: 3) {},
                    cp: ƒ cp(length: 4) {},
                    cpSync: ƒ cpSync(length: 3) {},
                    createReadStream: ƒ createReadStream(length: 2) {},
                    createWriteStream: ƒ createWriteStream(length: 2) {},
                    exists: ƒ exists(length: 2) {
                        Symbol(nodejs.util.promisify.custom): ƒ exists(length: 1) {}
                    },
                    existsSync: ƒ existsSync(length: 1) {},
                    fchown: ƒ fchown(length: 4) {},
                    fchownSync: ƒ fchownSync(length: 3) {},
                    fchmod: ƒ fchmod(length: 3) {},
                    fchmodSync: ƒ fchmodSync(length: 2) {},
                    fdatasync: ƒ fdatasync(length: 2) {},
                    fdatasyncSync: ƒ fdatasyncSync(length: 1) {},
                    fstat: ƒ fstat(length: 3) {},
                    fstatSync: ƒ fstatSync(length: 1) {},
                    fsync: ƒ fsync(length: 2) {},
                    fsyncSync: ƒ fsyncSync(length: 1) {},
                    ftruncate: ƒ ftruncate(length: 1) {},
                    ftruncateSync: ƒ ftruncateSync(length: 1) {},
                    futimes: ƒ futimes(length: 4) {},
                    futimesSync: ƒ futimesSync(length: 3) {},
                    glob: ƒ glob(length: 3) {},
                    globSync: ƒ globSync(length: 2) {},
                    lchown: ƒ lchown(length: 4) {},
                    lchownSync: ƒ lchownSync(length: 3) {},
                    lchmod: undefined,
                    lchmodSync: undefined,
                    link: ƒ link(length: 3) {},
                    linkSync: ƒ linkSync(length: 2) {},
                    lstat: ƒ lstat(length: 3) {},
                    lstatSync: ƒ lstatSync(length: 1) {},
                    lutimes: ƒ lutimes(length: 4) {},
                    lutimesSync: ƒ lutimesSync(length: 3) {},
                    mkdir: ƒ mkdir(length: 3) {},
                    mkdirSync: ƒ mkdirSync(length: 2) {},
                    mkdtemp: ƒ mkdtemp(length: 3) {},
                    mkdtempSync: ƒ mkdtempSync(length: 2) {},
                    open: ƒ open(length: 4) {},
                    openSync: ƒ openSync(length: 3) {},
                    read: ƒ read(length: 6) {},
                    readFile: ƒ readFile(length: 3) {},
                    readFileSync: ƒ readFileSync(length: 2) {},
                    readSync: ƒ readSync(length: 5) {},
                    readdir: ƒ readdir(length: 3) {},
                    readdirSync: ƒ readdirSync(length: 2) {},
                    readlink: ƒ readlink(length: 3) {},
                    readlinkSync: ƒ readlinkSync(length: 2) {},
                    readv: ƒ readv(length: 4) {},
                    readvSync: ƒ readvSync(length: 3) {},
                    realpath: ƒ realpath(length: 3) {
                        native: ƒ realpath4(length: 3) {}
                    },
                    realpathSync: ƒ realpathSync(length: 2) {
                        native: ƒ bound realpathNativeSync(length: 3) {}
                    },
                    rename: ƒ rename(length: 3) {},
                    renameSync: ƒ renameSync(length: 2) {},
                    rm: ƒ rm(length: 3) {},
                    rmSync: ƒ rmSync(length: 2) {},
                    rmdir: ƒ rmdir(length: 3) {},
                    rmdirSync: ƒ rmdirSync(length: 2) {},
                    stat: ƒ stat(length: 3) {},
                    statfs: ƒ statfs(length: 3) {},
                    statSync: ƒ statSync(length: 1) {},
                    statfsSync: ƒ statfsSync(length: 2) {},
                    symlink: ƒ symlink(length: 4) {},
                    symlinkSync: ƒ symlinkSync(length: 3) {},
                    truncate: ƒ truncate(length: 3) {},
                    truncateSync: ƒ truncateSync(length: 2) {},
                    unlink: ƒ unlink(length: 2) {},
                    unlinkSync: ƒ unlinkSync(length: 1) {},
                    unwatchFile: ƒ unwatchFile(length: 2) {},
                    utimes: ƒ utimes(length: 4) {},
                    utimesSync: ƒ utimesSync(length: 3) {},
                    watch: ƒ watch(length: 3) {},
                    watchFile: ƒ watchFile(length: 3) {},
                    write: ƒ write(length: 6) {},
                    writeFile: ƒ writeFile(length: 4) {},
                    writeFileSync: ƒ writeFileSync(length: 3) {},
                    writeSync: ƒ writeSync(length: 5) {},
                    writev: ƒ writev(length: 4) {},
                    writevSync: ƒ writevSync(length: 3) {},
                    _toUnixTimestamp: ƒ _toUnixTimestamp(length: 1) {},
                    openAsBlob: ƒ openAsBlob(length: 2) {},
                    Dirent: ƒ Dirent(length: 3) {},
                    opendir: ƒ opendir(length: 3) {},
                    opendirSync: ƒ opendirSync(length: 2) {},
                    F_OK: 0,
                    R_OK: 4,
                    W_OK: 2,
                    X_OK: 1,
                    constants: <ref *396> [Object: null prototype] {
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
                        EXTENSIONLESS_FORMAT_JAVASCRIPT: 0,
                        EXTENSIONLESS_FORMAT_WASM: 1
                    },
                    Dir: class Dir {},
                    Stats: ƒ Stats(length: 0) {},
                    [get/set] ReadStream: <ref *399> ƒ ReadStream(length: 2) {},
                    WriteStream: <ref *400> ƒ WriteStream(length: 2) {},
                    [get/set] FileReadStream: [Circular: *399],
                    [get/set] FileWriteStream: [Circular: *400],
                    promises: {
                        access: async ƒ access(length: 3) {},
                        appendFile: async ƒ appendFile(length: 1) {},
                        close: async ƒ close(length: 1) {},
                        copyFile: async ƒ copyFile(length: 4) {},
                        cp: ƒ cp(length: 3) {},
                        exists: async ƒ exists(length: 0) {},
                        chown: async ƒ chown(length: 4) {},
                        chmod: async ƒ chmod(length: 3) {},
                        fchmod: async ƒ fchmod(length: 3) {},
                        fchown: async ƒ fchown(length: 4) {},
                        fstat: async ƒ fstat(length: 1) {},
                        fsync: async ƒ fsync(length: 2) {},
                        fdatasync: async ƒ fdatasync(length: 2) {},
                        ftruncate: async ƒ ftruncate(length: 1) {},
                        futimes: async ƒ futimes(length: 4) {},
                        glob: async ƒ glob(length: 2) {},
                        lchmod: async ƒ lchmod(length: 3) {},
                        lchown: async ƒ lchown(length: 4) {},
                        link: async ƒ link(length: 3) {},
                        lstat: async ƒ lstat(length: 1) {},
                        mkdir: async ƒ mkdir(length: 3) {},
                        mkdtemp: async ƒ mkdtemp(length: 3) {},
                        statfs: async ƒ statfs(length: 2) {},
                        open: async ƒ open(length: 1) {},
                        read: async ƒ read(length: 6) {},
                        write: async ƒ write(length: 6) {},
                        readdir: async ƒ readdir(length: 3) {},
                        readFile: async ƒ readFile(length: 1) {},
                        writeFile: async ƒ writeFile(length: 1) {},
                        readlink: async ƒ readlink(length: 3) {},
                        realpath: async ƒ realpath(length: 3) {},
                        rename: async ƒ rename(length: 3) {},
                        stat: async ƒ stat(length: 1) {},
                        symlink: async ƒ symlink(length: 4) {},
                        truncate: async ƒ truncate(length: 3) {},
                        unlink: async ƒ unlink(length: 2) {},
                        utimes: async ƒ utimes(length: 4) {},
                        lutimes: async ƒ lutimes(length: 4) {},
                        rm: async ƒ rm(length: 3) {},
                        rmdir: async ƒ rmdir(length: 3) {},
                        writev: async ƒ writev(length: 3) {},
                        readv: async ƒ readv(length: 3) {},
                        constants: [Circular: *396],
                        watch: ƒ watch(length: 1) {},
                        opendir: async ƒ opendir(length: 2) {}
                    }
                },
                Symbol(kWriteStreamFastPath): FileSink {},
                Symbol(kCapture): false,
                Symbol(Symbol.asyncIterator): ƒ (length: 0) {}
            },
            stdin: ReadStream {
                fd: 0,
                start: undefined,
                end: Infinity,
                pos: undefined,
                bytesRead: 0,
                _events: {
                    close: [
                        ƒ (length: 0) {}
                    ],
                    error: undefined,
                    data: undefined,
                    end: undefined,
                    readable: undefined,
                    resume: [
                        ƒ (length: 0) {}
                    ],
                    pause: [
                        ƒ (length: 0) {}
                    ],
                    Symbol(kConstruct): [
                        ƒ bound onceWrapper(length: 0) {
                            listener: ƒ (length: 0) {}
                        }
                    ]
                },
                _readableState: {
                    highWaterMark: 65536,
                    buffer: [],
                    bufferIndex: 0,
                    length: 0,
                    pipes: [],
                    awaitDrainWriters: null,
                    Symbol(kState): 1052680
                },
                _maxListeners: undefined,
                _eventsCount: NaN,
                on: <ref *462> ƒ (length: 2) {},
                addListener: [Circular: *462],
                ref: ƒ (length: 0) {},
                unref: ƒ (length: 0) {},
                pause: ƒ (length: 0) {},
                resume: ƒ (length: 0) {},
                _read: ƒ triggerRead(length: 1) {},
                Symbol(kFs): [Circular: *300],
                Symbol(kReadStreamFastPath): false,
                Symbol(kCapture): false
            },
            stdout: WriteStream {
                fd: 1,
                _writev: undefined,
                flush: false,
                start: undefined,
                pos: undefined,
                bytesWritten: 0,
                _write: [Circular: *290],
                write: [Circular: *291],
                _events: {
                    close: undefined,
                    error: undefined,
                    prefinish: undefined,
                    finish: undefined,
                    drain: undefined,
                    Symbol(kConstruct): [
                        ƒ bound onceWrapper(length: 0) {
                            listener: ƒ (length: 0) {}
                        }
                    ]
                },
                _writableState: {
                    highWaterMark: 65536,
                    length: 0,
                    corked: 0,
                    onwrite: ƒ bound onwrite(length: 1) {},
                    writelen: 0,
                    bufferedIndex: 0,
                    pendingcb: 0,
                    Symbol(kState): 17580552,
                    Symbol(kBufferedValue): null
                },
                _maxListeners: undefined,
                _eventsCount: NaN,
                readable: false,
                _type: "fs",
                destroySoon: [Circular: *298],
                _destroy: ƒ (length: 2) {},
                _isStdio: true,
                Symbol(kFs): [Circular: *300],
                Symbol(kWriteStreamFastPath): FileSink {},
                Symbol(kCapture): false,
                Symbol(Symbol.asyncIterator): ƒ (length: 0) {}
            },
            [get/set] throwDeprecation: false,
            [get/set] title: "bun",
            umask: ƒ umask(length: 1) {},
            unref: ƒ unref(length: 1) {},
            uptime: ƒ uptime(length: 1) {},
            version: "v24.3.0",
            versions: {
                node: "24.3.0",
                bun: "1.3.1",
                boringssl: "29a2cd359458c9384694b75456026e4b57e3e567",
                openssl: "1.1.0",
                llhttp: "9.3.0",
                libarchive: "898dc8319355b7e985f68a9819f182aaed61b53a",
                mimalloc: "4c283af60cdae205df5a872530c77e2a6a307d43",
                picohttpparser: "066d2b1e9ab820703db0837a7255d92d30f0c9f5",
                uwebsockets: "db7bcd79ff26423e5f72627f203a67b36802a2c1",
                webkit: "0ddf6f47af0a9782a354f61e06d7f83d097d9f84",
                zig: "0.14.1",
                zlib: "886098f3f339617b4243b286f5ed364b9989e245",
                tinycc: "ab631362d839333660a265d3084d8ff060b96753",
                lolhtml: "8d4c273ded322193d017042d1f48df2766b0f88b",
                ares: "d1722e6e8acaf10eb73fa995798a9cd421d9f85e",
                libdeflate: "dc76454a39e7e83b68c3704b6e3784654f8d5ac5",
                usockets: "db7bcd79ff26423e5f72627f203a67b36802a2c1",
                lshpack: "3d0f1fc1d6e66a642e7a98c55deb38aa986eb4b0",
                zstd: "794ea1b0afca0f020f4e57b6732332231fb23c70",
                v8: "13.6.233.10-node.18",
                uv: "1.48.0",
                napi: "10",
                icu: "75.1",
                unicode: "15.1",
                modules: "137"
            },
            getegid: ƒ getegid(length: 0) {},
            geteuid: ƒ geteuid(length: 0) {},
            getgid: ƒ getgid(length: 0) {},
            getgroups: ƒ getgroups(length: 0) {},
            getuid: ƒ getuid(length: 0) {},
            setegid: ƒ setegid(length: 1) {},
            seteuid: ƒ seteuid(length: 1) {},
            setgid: ƒ setgid(length: 1) {},
            setgroups: ƒ setgroups(length: 1) {},
            setuid: ƒ setuid(length: 1) {},
            _exiting: false,
            Symbol(Symbol.toStringTag): "process"
        },
        Blob: ƒ Blob(length: 0) {},
        Buffer: ƒ Buffer(length: 3) {
            alloc: ƒ alloc(length: 1) {},
            allocUnsafe: ƒ allocUnsafe(length: 1) {},
            allocUnsafeSlow: ƒ allocUnsafeSlow(length: 1) {},
            byteLength: ƒ byteLength(length: 2) {},
            compare: ƒ compare(length: 2) {},
            concat: ƒ concat(length: 2) {},
            copyBytesFrom: ƒ copyBytesFrom(length: 1) {},
            from: ƒ (length: 3) {},
            isBuffer: ƒ (length: 1) {},
            isEncoding: ƒ isEncoding(length: 1) {},
            poolSize: 8192
        },
        BuildError: <ref *504> ƒ BuildMessage(length: 0) {},
        BuildMessage: [Circular: *504],
        Crypto: ƒ Crypto(length: 0) {},
        HTMLRewriter: ƒ HTMLRewriter(length: 0) {},
        Request: ƒ Request(length: 0) {},
        ResolveError: <ref *508> ƒ ResolveMessage(length: 0) {},
        ResolveMessage: [Circular: *508],
        Response: ƒ Response(length: 0) {
            error: ƒ error(length: 0) {},
            json: ƒ json(length: 0) {},
            redirect: ƒ redirect(length: 0) {}
        },
        TextDecoder: ƒ TextDecoder(length: 0) {},
        AbortController: ƒ AbortController(length: 0) {},
        AbortSignal: ƒ AbortSignal(length: 0) {
            abort: ƒ abort(length: 0) {},
            timeout: ƒ timeout(length: 1) {},
            any: ƒ any(length: 1) {}
        },
        BroadcastChannel: ƒ BroadcastChannel(length: 1) {},
        ByteLengthQueuingStrategy: ƒ ByteLengthQueuingStrategy(length: 1) {},
        CloseEvent: ƒ CloseEvent(length: 1) {},
        CountQueuingStrategy: ƒ CountQueuingStrategy(length: 1) {},
        CryptoKey: ƒ CryptoKey(length: 0) {},
        CustomEvent: ƒ CustomEvent(length: 1) {},
        DOMException: ƒ DOMException(length: 0) {
            INDEX_SIZE_ERR: 1,
            DOMSTRING_SIZE_ERR: 2,
            HIERARCHY_REQUEST_ERR: 3,
            WRONG_DOCUMENT_ERR: 4,
            INVALID_CHARACTER_ERR: 5,
            NO_DATA_ALLOWED_ERR: 6,
            NO_MODIFICATION_ALLOWED_ERR: 7,
            NOT_FOUND_ERR: 8,
            NOT_SUPPORTED_ERR: 9,
            INUSE_ATTRIBUTE_ERR: 10,
            INVALID_STATE_ERR: 11,
            SYNTAX_ERR: 12,
            INVALID_MODIFICATION_ERR: 13,
            NAMESPACE_ERR: 14,
            INVALID_ACCESS_ERR: 15,
            VALIDATION_ERR: 16,
            TYPE_MISMATCH_ERR: 17,
            SECURITY_ERR: 18,
            NETWORK_ERR: 19,
            ABORT_ERR: 20,
            URL_MISMATCH_ERR: 21,
            QUOTA_EXCEEDED_ERR: 22,
            TIMEOUT_ERR: 23,
            INVALID_NODE_TYPE_ERR: 24,
            DATA_CLONE_ERR: 25
        },
        ErrorEvent: ƒ ErrorEvent(length: 1) {},
        Event: ƒ Event(length: 1) {
            NONE: 0,
            CAPTURING_PHASE: 1,
            AT_TARGET: 2,
            BUBBLING_PHASE: 3
        },
        EventTarget: ƒ EventTarget(length: 0) {},
        FormData: ƒ FormData(length: 0) {
            from: ƒ from(length: 1) {}
        },
        Headers: ƒ Headers(length: 0) {},
        MessageChannel: ƒ MessageChannel(length: 0) {},
        MessageEvent: ƒ MessageEvent(length: 1) {},
        MessagePort: ƒ MessagePort(length: 0) {},
        Performance: ƒ Performance(length: 0) {},
        PerformanceEntry: ƒ PerformanceEntry(length: 0) {},
        PerformanceMark: ƒ PerformanceMark(length: 1) {},
        PerformanceMeasure: ƒ PerformanceMeasure(length: 0) {},
        PerformanceObserver: ƒ PerformanceObserver(length: 1) {
            supportedEntryTypes: [
                "mark",
                "measure",
                "resource"
            ]
        },
        PerformanceObserverEntryList: ƒ PerformanceObserverEntryList(length: 0) {},
        PerformanceResourceTiming: ƒ PerformanceResourceTiming(length: 0) {},
        PerformanceServerTiming: ƒ PerformanceServerTiming(length: 0) {},
        PerformanceTiming: ƒ PerformanceTiming(length: 0) {},
        ReadableByteStreamController: ƒ ReadableByteStreamController(length: 3) {},
        ReadableStream: ƒ ReadableStream(length: 0) {},
        ReadableStreamBYOBReader: ƒ ReadableStreamBYOBReader(length: 1) {},
        ReadableStreamBYOBRequest: ƒ ReadableStreamBYOBRequest(length: 2) {},
        ReadableStreamDefaultController: ƒ ReadableStreamDefaultController(length: 4) {},
        ReadableStreamDefaultReader: ƒ ReadableStreamDefaultReader(length: 1) {},
        SubtleCrypto: ƒ SubtleCrypto(length: 0) {},
        TextDecoderStream: ƒ TextDecoderStream(length: 0) {},
        TextEncoder: ƒ TextEncoder(length: 0) {},
        TextEncoderStream: ƒ TextEncoderStream(length: 0) {},
        TransformStream: ƒ TransformStream(length: 0) {},
        TransformStreamDefaultController: ƒ TransformStreamDefaultController(length: 0) {},
        WebSocket: ƒ WebSocket(length: 1) {
            CONNECTING: 0,
            OPEN: 1,
            CLOSING: 2,
            CLOSED: 3
        },
        Worker: ƒ Worker(length: 1) {},
        WritableStream: ƒ WritableStream(length: 0) {},
        WritableStreamDefaultController: ƒ WritableStreamDefaultController(length: 0) {},
        WritableStreamDefaultWriter: ƒ WritableStreamDefaultWriter(length: 1) {},
        [get/set] self: [Circular: *4],
        onmessage: null,
        onerror: null
    },
    crlfDelay: 100,
    cursor: 0,
    default: {
        lines: <ref *563> [],
        context: [Circular: *4],
        historyIndex: -1,
        cursor: 0,
        historySize: 1000,
        removeHistoryDuplicates: false,
        crlfDelay: 100,
        completer: [Circular: *3],
        history: <ref *564> [],
        _initialPrompt: "> ",
        terminal: true,
        input: [Error accessing: node:repl is not yet implemented in Bun.],
        line: "",
        eval: <ref *566> ƒ eval(length: 0) {},
        isCompletionEnabled: true,
        escapeCodeTimeout: 500,
        tabSize: 8,
        breakEvalOnSigint: true,
        useGlobal: true,
        underscoreAssigned: false,
        last: undefined,
        _domain: undefined,
        allowBlockingCompletions: false,
        useColors: true,
        output: [Error accessing: node:repl is not yet implemented in Bun.],
        _builtinLibs: [Circular: *2],
        builtinModules: [Circular: *2]
    },
    escapeCodeTimeout: 500,
    eval: [Circular: *566],
    history: [Circular: *564],
    historyIndex: -1,
    historySize: 1000,
    input: [Circular: *565],
    isCompletionEnabled: true,
    last: undefined,
    line: "",
    lines: [Circular: *563],
    output: [Circular: *567],
    removeHistoryDuplicates: false,
    tabSize: 8,
    terminal: true,
    underscoreAssigned: false,
    useColors: true,
    useGlobal: true
}
```

</td></tr></table>
			</details>

<details>
				<summary><code>stream</code></summary>
				<br>

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
[Object: null prototype] {
    Duplex: <ref *2> ƒ Duplex(length: 1) {
        fromWeb: ƒ (length: 2) {},
        toWeb: ƒ (length: 1) {},
        from: ƒ (length: 1) {}
    },
    PassThrough: <ref *6> ƒ PassThrough(length: 1) {},
    Readable: <ref *7> ƒ Readable(length: 1) {
        ReadableState: ƒ ReadableState(length: 3) {
            prototype: {
                Symbol(kOnConstructed): ƒ onConstructed(length: 1) {}
            }
        },
        _fromList: ƒ fromList(length: 2) {},
        from: ƒ (length: 2) {},
        fromWeb: ƒ (length: 2) {},
        toWeb: ƒ (length: 2) {},
        wrap: ƒ (length: 2) {}
    },
    Stream: <ref *16> ƒ Stream(length: 1) {
        _isArrayBufferView: <ref *17> ƒ isArrayBufferView(length: 1) {},
        _isUint8Array: <ref *18> ƒ isUint8Array(length: 1) {},
        _uint8ArrayToBuffer: <ref *19> ƒ _uint8ArrayToBuffer(length: 1) {},
        isDestroyed: <ref *20> ƒ isDestroyed(length: 1) {},
        isDisturbed: <ref *21> ƒ isDisturbed(length: 1) {},
        isErrored: <ref *22> ƒ isErrored(length: 1) {},
        isReadable: <ref *23> ƒ isReadable(length: 1) {},
        isWritable: <ref *24> ƒ isWritable(length: 1) {},
        Readable: [Circular: *7],
        Writable: <ref *25> ƒ Writable(length: 1) {
            WritableState: ƒ WritableState(length: 3) {
                prototype: {
                    getBuffer: ƒ getBuffer(length: 0) {},
                    Symbol(kOnConstructed): ƒ onConstructed(length: 1) {}
                }
            },
            fromWeb: ƒ (length: 2) {},
            toWeb: ƒ (length: 1) {}
        },
        Duplex: [Circular: *2],
        Transform: <ref *32> ƒ Transform(length: 1) {},
        PassThrough: [Circular: *6],
        duplexPair: <ref *33> ƒ duplexPair(length: 1) {},
        pipeline: <ref *34> ƒ pipeline(length: 0) {
            [get/set] Symbol(nodejs.util.promisify.custom): <ref *35> ƒ pipeline(length: 0) {}
        },
        addAbortSignal: <ref *36> ƒ addAbortSignal(length: 2) {},
        finished: <ref *37> ƒ eos(length: 3) {
            finished: <ref *38> ƒ finished(length: 2) {},
            [get/set] Symbol(nodejs.util.promisify.custom): [Circular: *38]
        },
        destroy: <ref *39> ƒ destroyer(length: 2) {},
        compose: <ref *40> ƒ compose(length: 0) {},
        setDefaultHighWaterMark: <ref *41> ƒ setDefaultHighWaterMark(length: 2) {},
        getDefaultHighWaterMark: <ref *42> ƒ getDefaultHighWaterMark(length: 1) {},
        [get/set] promises: <ref *43> {
            finished: [Circular: *38],
            pipeline: [Circular: *35]
        },
        Stream: [Circular: *16],
        eos: [Circular: *37]
    },
    Transform: [Circular: *32],
    Writable: [Circular: *25],
    _isArrayBufferView: [Circular: *17],
    _isUint8Array: [Circular: *18],
    _uint8ArrayToBuffer: [Circular: *19],
    addAbortSignal: [Circular: *36],
    compose: [Circular: *40],
    default: [Circular: *16],
    destroy: [Circular: *39],
    duplexPair: [Circular: *33],
    eos: [Circular: *37],
    finished: [Circular: *37],
    getDefaultHighWaterMark: [Circular: *42],
    isDestroyed: [Circular: *20],
    isDisturbed: [Circular: *21],
    isErrored: [Circular: *22],
    isReadable: [Circular: *23],
    isWritable: [Circular: *24],
    pipeline: [Circular: *34],
    promises: [Circular: *43],
    setDefaultHighWaterMark: [Circular: *41]
}
```

</td></tr></table>
			</details>

<details>
				<summary><code>stream/consumers</code></summary>
				<br>

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
[Object: null prototype] {
    arrayBuffer: <ref *2> async ƒ arrayBuffer(length: 1) {},
    blob: <ref *3> async ƒ blob(length: 1) {},
    buffer: <ref *4> async ƒ buffer(length: 1) {},
    bytes: <ref *5> async ƒ bytes(length: 1) {},
    default: {
        arrayBuffer: [Circular: *2],
        bytes: [Circular: *5],
        text: <ref *7> async ƒ text(length: 1) {},
        json: <ref *8> async ƒ json(length: 1) {},
        buffer: [Circular: *4],
        blob: [Circular: *3]
    },
    json: [Circular: *8],
    text: [Circular: *7]
}
```

</td></tr></table>
			</details>

<details>
				<summary><code>stream/promises</code></summary>
				<br>

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
[Object: null prototype] {
    default: {
        finished: <ref *3> ƒ finished(length: 2) {},
        pipeline: <ref *4> ƒ pipeline(length: 0) {}
    },
    finished: [Circular: *3],
    pipeline: [Circular: *4]
}
```

</td></tr></table>
			</details>

<details>
				<summary><code>stream/web</code></summary>
				<br>

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
[Object: null prototype] {
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
			</details>

<details>
				<summary><code>string_decoder</code></summary>
				<br>

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
[Object: null prototype] {
    StringDecoder: <ref *2> ƒ StringDecoder(length: 0) {},
    default: {
        StringDecoder: [Circular: *2]
    }
}
```

</td></tr></table>
			</details>

<details>
				<summary><code>sys</code></summary>
				<br>

<table><tr><th>Node.js</th><th>Bun</th></tr><tr><td valign="top">

```js
[Object: null prototype] {
    MIMEParams: <ref *2> class MIMEParams {},
    MIMEType: <ref *3> class MIMEType {},
    TextDecoder: <ref *4> class TextDecoder {},
    TextEncoder: <ref *5> class TextEncoder {},
    _errnoException: <ref *6> ƒ _errnoException(length: 0) {},
    _exceptionWithHostPort: <ref *7> ƒ _exceptionWithHostPort(length: 0) {},
    _extend: <ref *8> ƒ deprecated(length: 2) {},
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
        getCallSite: <ref *17> ƒ deprecated(length: 0) {},
        getCallSites: <ref *18> ƒ getCallSites(length: 0) {},
        getSystemErrorMap: <ref *19> ƒ getSystemErrorMap(length: 0) {},
        getSystemErrorName: <ref *20> ƒ getSystemErrorName(length: 1) {},
        getSystemErrorMessage: <ref *21> ƒ getSystemErrorMessage(length: 1) {},
        inherits: <ref *22> ƒ inherits(length: 2) {},
        inspect: <ref *23> ƒ inspect(length: 2) {
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
        isArray: <ref *70> ƒ deprecated(length: 1) {},
        isBoolean: <ref *71> ƒ deprecated(length: 1) {},
        isBuffer: <ref *72> ƒ deprecated(length: 1) {},
        isDeepStrictEqual: <ref *73> ƒ isDeepStrictEqual(length: 2) {},
        isNull: <ref *74> ƒ deprecated(length: 1) {},
        isNullOrUndefined: <ref *75> ƒ deprecated(length: 1) {},
        isNumber: <ref *76> ƒ deprecated(length: 1) {},
        isString: <ref *77> ƒ deprecated(length: 1) {},
        isSymbol: <ref *78> ƒ deprecated(length: 1) {},
        isUndefined: <ref *79> ƒ deprecated(length: 1) {},
        isRegExp: <ref *80> ƒ deprecated(length: 0) {},
        isObject: <ref *81> ƒ deprecated(length: 1) {},
        isDate: <ref *82> ƒ deprecated(length: 0) {},
        isError: <ref *83> ƒ deprecated(length: 1) {},
        isFunction: <ref *84> ƒ deprecated(length: 1) {},
        isPrimitive: <ref *85> ƒ deprecated(length: 1) {},
        log: <ref *86> ƒ deprecated(length: 0) {},
        promisify: <ref *87> ƒ promisify(length: 1) {
            custom: Symbol(nodejs.util.promisify.custom)
        },
        stripVTControlCharacters: <ref *88> ƒ stripVTControlCharacters(length: 1) {},
        toUSVString: <ref *89> ƒ toUSVString(length: 1) {},
        [get/set] transferableAbortSignal: <ref *90> ƒ transferableAbortSignal(length: 1) {},
        [get/set] transferableAbortController: <ref *91> ƒ transferableAbortController(length: 0) {},
        [get/set] aborted: [Circular: *9],
        types: <ref *92> {
            isExternal: ƒ (length: 0) {},
            isDate: ƒ (length: 0) {},
            isArgumentsObject: ƒ (length: 0) {},
            isBigIntObject: ƒ (length: 0) {},
            isBooleanObject: ƒ (length: 0) {},
            isNumberObject: ƒ (length: 0) {},
            isStringObject: ƒ (length: 0) {},
            isSymbolObject: ƒ (length: 0) {},
            isNativeError: ƒ (length: 0) {},
            isRegExp: ƒ (length: 0) {},
            isAsyncFunction: ƒ (length: 0) {},
            isGeneratorFunction: ƒ (length: 0) {},
            isGeneratorObject: ƒ (length: 0) {},
            isPromise: ƒ (length: 0) {},
            isMap: ƒ (length: 0) {},
            isSet: ƒ (length: 0) {},
            isMapIterator: ƒ (length: 0) {},
            isSetIterator: ƒ (length: 0) {},
            isWeakMap: ƒ (length: 0) {},
            isWeakSet: ƒ (length: 0) {},
            isArrayBuffer: ƒ (length: 0) {},
            isDataView: ƒ (length: 0) {},
            isSharedArrayBuffer: ƒ (length: 0) {},
            isProxy: ƒ (length: 0) {},
            isModuleNamespaceObject: ƒ (length: 0) {},
            isAnyArrayBuffer: ƒ (length: 0) {},
            isBoxedPrimitive: ƒ (length: 0) {},
            isArrayBufferView: ƒ isView(length: 1) {},
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
            isKeyObject: ƒ value(length: 1) {},
            isCryptoKey: ƒ value(length: 1) {}
        },
        parseEnv: <ref *136> ƒ parseEnv(length: 1) {},
        parseArgs: <ref *137> ƒ parseArgs(length: 0) {},
        TextDecoder: [Circular: *4],
        TextEncoder: [Circular: *5],
        MIMEType: [Circular: *3],
        MIMEParams: [Circular: *2],
        diff: <ref *138> ƒ diff(length: 2) {},
        setTraceSigInt: <ref *139> ƒ setTraceSigInt(length: 1) {}
    },
    deprecate: [Circular: *13],
    diff: [Circular: *138],
    format: [Circular: *14],
    formatWithOptions: [Circular: *16],
    getCallSite: [Circular: *17],
    getCallSites: [Circular: *18],
    getSystemErrorMap: [Circular: *19],
    getSystemErrorMessage: [Circular: *21],
    getSystemErrorName: [Circular: *20],
    inherits: [Circular: *22],
    inspect: [Circular: *23],
    isArray: [Circular: *70],
    isBoolean: [Circular: *71],
    isBuffer: [Circular: *72],
    isDate: [Circular: *82],
    isDeepStrictEqual: [Circular: *73],
    isError: [Circular: *83],
    isFunction: [Circular: *84],
    isNull: [Circular: *74],
    isNullOrUndefined: [Circular: *75],
    isNumber: [Circular: *76],
    isObject: [Circular: *81],
    isPrimitive: [Circular: *85],
    isRegExp: [Circular: *80],
    isString: [Circular: *77],
    isSymbol: [Circular: *78],
    isUndefined: [Circular: *79],
    log: [Circular: *86],
    parseArgs: [Circular: *137],
    parseEnv: [Circular: *136],
    promisify: [Circular: *87],
    setTraceSigInt: [Circular: *139],
    stripVTControlCharacters: [Circular: *88],
    styleText: [Circular: *15],
    toUSVString: [Circular: *89],
    transferableAbortController: [Circular: *91],
    transferableAbortSignal: [Circular: *90],
    types: [Circular: *92]
}
(node:3067) [DEP0025] DeprecationWarning: sys is deprecated. Use util instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
```

</td><td valign="top">

```js
[Object: null prototype] {
    MIMEParams: <ref *2> ƒ MIMEParams(length: 0) {},
    MIMEType: <ref *3> ƒ MIMEType(length: 1) {},
    TextDecoder: <ref *4> ƒ TextDecoder(length: 0) {},
    TextEncoder: <ref *5> ƒ TextEncoder(length: 0) {},
    _extend: <ref *6> ƒ _extend(length: 2) {},
    aborted: <ref *7> ƒ aborted(length: 2) {},
    callbackify: <ref *8> ƒ callbackify(length: 1) {},
    debug: <ref *9> ƒ debuglog(length: 1) {},
    debuglog: [Circular: *9],
    default: {
        _extend: [Circular: *6],
        callbackify: [Circular: *8],
        debug: [Circular: *9],
        debuglog: [Circular: *9],
        deprecate: <ref *11> ƒ deprecate(length: 3) {},
        format: <ref *12> ƒ format(length: 0) {},
        styleText: <ref *13> ƒ styleText(length: 2) {},
        formatWithOptions: <ref *14> ƒ formatWithOptions(length: 1) {},
        getSystemErrorName: <ref *15> ƒ getSystemErrorName(length: 1) {},
        inherits: <ref *16> ƒ inherits2(length: 2) {},
        inspect: <ref *17> ƒ inspect(length: 2) {
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
        isDeepStrictEqual: <ref *64> ƒ isDeepStrictEqual(length: 2) {},
        promisify: <ref *65> ƒ promisify2(length: 1) {
            custom: Symbol(nodejs.util.promisify.custom)
        },
        stripVTControlCharacters: <ref *66> ƒ stripVTControlCharacters(length: 1) {},
        toUSVString: <ref *67> ƒ toUSVString(length: 1) {},
        aborted: [Circular: *7],
        types: <ref *68> {
            isExternal: ƒ isExternal(length: 1) {},
            isDate: <ref *70> ƒ isDate(length: 1) {},
            isArgumentsObject: ƒ isArgumentsObject(length: 1) {},
            isBigIntObject: ƒ isBigIntObject(length: 1) {},
            isBooleanObject: ƒ isBooleanObject(length: 1) {},
            isNumberObject: ƒ isNumberObject(length: 1) {},
            isStringObject: ƒ isStringObject(length: 1) {},
            isSymbolObject: ƒ isSymbolObject(length: 1) {},
            isNativeError: ƒ isNativeError(length: 1) {},
            isRegExp: <ref *78> ƒ isRegExp(length: 1) {},
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
            isCryptoKey: ƒ isCryptoKey(length: 1) {},
            isEventTarget: ƒ isEventTarget(length: 1) {}
        },
        parseEnv: <ref *113> ƒ parseEnv(length: 1) {},
        parseArgs: <ref *114> ƒ parseArgs(length: 1) {},
        TextDecoder: [Circular: *4],
        TextEncoder: [Circular: *5],
        MIMEType: [Circular: *3],
        MIMEParams: [Circular: *2],
        isArray: <ref *115> ƒ isArray(length: 1) {},
        isBoolean: <ref *116> ƒ isBoolean(length: 1) {},
        isBuffer: <ref *117> ƒ isBuffer(length: 1) {},
        isNull: <ref *118> ƒ isNull(length: 1) {},
        isNullOrUndefined: <ref *119> ƒ isNullOrUndefined(length: 1) {},
        isNumber: <ref *120> ƒ isNumber(length: 1) {},
        isString: <ref *121> ƒ isString(length: 1) {},
        isSymbol: <ref *122> ƒ isSymbol(length: 1) {},
        isUndefined: <ref *123> ƒ isUndefined(length: 1) {},
        isRegExp: [Circular: *78],
        isObject: <ref *124> ƒ isObject(length: 1) {},
        isDate: [Circular: *70],
        isError: <ref *125> ƒ jsFunctionIsError(length: 1) {},
        isFunction: <ref *126> ƒ isFunction(length: 1) {},
        isPrimitive: <ref *127> ƒ isPrimitive(length: 1) {},
        log: <ref *128> ƒ log2(length: 0) {}
    },
    deprecate: [Circular: *11],
    format: [Circular: *12],
    formatWithOptions: [Circular: *14],
    getSystemErrorName: [Circular: *15],
    inherits: [Circular: *16],
    inspect: [Circular: *17],
    isArray: [Circular: *115],
    isBoolean: [Circular: *116],
    isBuffer: [Circular: *117],
    isDate: [Circular: *70],
    isDeepStrictEqual: [Circular: *64],
    isError: [Circular: *125],
    isFunction: [Circular: *126],
    isNull: [Circular: *118],
    isNullOrUndefined: [Circular: *119],
    isNumber: [Circular: *120],
    isObject: [Circular: *124],
    isPrimitive: [Circular: *127],
    isRegExp: [Circular: *78],
    isString: [Circular: *121],
    isSymbol: [Circular: *122],
    isUndefined: [Circular: *123],
    log: [Circular: *128],
    parseArgs: [Circular: *114],
    parseEnv: [Circular: *113],
    promisify: [Circular: *65],
    stripVTControlCharacters: [Circular: *66],
    styleText: [Circular: *13],
    toUSVString: [Circular: *67],
    types: [Circular: *68]
}
```

</td></tr></table>
			</details>

<details>
				<summary><code>timers</code></summary>
				<br>

<table><tr><th>Node.js</th><th>Bun</th></tr><tr><td valign="top">

```js
[Object: null prototype] {
    _unrefActive: <ref *2> ƒ deprecated(length: 1) {},
    active: <ref *3> ƒ deprecated(length: 1) {},
    clearImmediate: <ref *4> ƒ clearImmediate(length: 1) {},
    clearInterval: <ref *5> ƒ clearInterval(length: 1) {},
    clearTimeout: <ref *6> ƒ clearTimeout(length: 1) {},
    default: {
        setTimeout: <ref *8> ƒ setTimeout(length: 2) {
            [get/set] Symbol(nodejs.util.promisify.custom): <ref *9> ƒ setTimeout(length: 2) {}
        },
        clearTimeout: [Circular: *6],
        setImmediate: <ref *10> ƒ setImmediate(length: 1) {
            [get/set] Symbol(nodejs.util.promisify.custom): <ref *11> ƒ setImmediate(length: 1) {}
        },
        clearImmediate: [Circular: *4],
        setInterval: <ref *12> ƒ setInterval(length: 2) {},
        clearInterval: [Circular: *5],
        _unrefActive: [Circular: *2],
        active: [Circular: *3],
        unenroll: <ref *13> ƒ deprecated(length: 1) {},
        enroll: <ref *14> ƒ deprecated(length: 2) {},
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
[Object: null prototype] {
    active: <ref *2> ƒ active(length: 1) {},
    clearImmediate: <ref *3> ƒ clearImmediate(length: 1) {},
    clearInterval: <ref *4> ƒ clearInterval(length: 1) {},
    clearTimeout: <ref *5> ƒ clearTimeout(length: 1) {},
    default: {
        setTimeout: <ref *7> ƒ setTimeout(length: 1) {},
        clearTimeout: [Circular: *5],
        setInterval: <ref *8> ƒ setInterval(length: 1) {},
        setImmediate: <ref *9> ƒ setImmediate(length: 1) {},
        clearInterval: [Circular: *4],
        clearImmediate: [Circular: *3],
        [get/set] promises: <ref *10> {
            setTimeout: ƒ setTimeout(length: 0) {},
            setImmediate: <ref *12> ƒ setImmediate(length: 1) {},
            setInterval: ƒ setInterval(length: 0) {},
            scheduler: {
                wait: ƒ wait(length: 2) {},
                yield: [Circular: *12]
            }
        },
        active: [Circular: *2],
        unenroll: <ref *16> ƒ unenroll(length: 1) {},
        enroll: <ref *17> ƒ enroll(length: 2) {}
    },
    enroll: [Circular: *17],
    promises: [Circular: *10],
    setImmediate: [Circular: *9],
    setInterval: [Circular: *8],
    setTimeout: [Circular: *7],
    unenroll: [Circular: *16]
}
```

</td></tr></table>
			</details>

<details>
				<summary><code>timers/promises</code></summary>
				<br>

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
[Object: null prototype] {
    default: {
        setTimeout: <ref *3> ƒ setTimeout(length: 0) {},
        setImmediate: <ref *4> ƒ setImmediate(length: 1) {},
        setInterval: <ref *5> ƒ setInterval(length: 0) {},
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
			</details>

<details>
				<summary><code>tls</code></summary>
				<br>

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
            "-----BEGIN CERTIFICATE-----\nMIIEkTCCA3mgAwIBAgIERWtQVDANBgkqhkiG9w0BAQUFADCBsDELMAkGA1UEBhMCVVMxFjAU…",
            "-----BEGIN CERTIFICATE-----\nMIIFtzCCA5+gAwIBAgICBQkwDQYJKoZIhvcNAQEFBQAwRTELMAkGA1UEBhMCQk0xGTAXBgNV…",
            "-----BEGIN CERTIFICATE-----\nMIIGnTCCBIWgAwIBAgICBcYwDQYJKoZIhvcNAQEFBQAwRTELMAkGA1UEBhMCQk0xGTAXBgNV…",
            "-----BEGIN CERTIFICATE-----\nMIIDtzCCAp+gAwIBAgIQDOfg5RfYRv6P5WD8G/AwOTANBgkqhkiG9w0BAQUFADBlMQswCQYD…",
            "-----BEGIN CERTIFICATE-----\nMIIDrzCCApegAwIBAgIQCDvgVpBCRrGhdWrJWZHHSjANBgkqhkiG9w0BAQUFADBhMQswCQYD…",
            "-----BEGIN CERTIFICATE-----\nMIIDxTCCAq2gAwIBAgIQAqxcJmoLQJuPC3nyrkYldzANBgkqhkiG9w0BAQUFADBsMQswCQYD…",
            "-----BEGIN CERTIFICATE-----\nMIIFujCCA6KgAwIBAgIJALtAHEP1Xk+wMA0GCSqGSIb3DQEBBQUAMEUxCzAJBgNVBAYTAkNI…",
            "-----BEGIN CERTIFICATE-----\nMIIDuDCCAqCgAwIBAgIQDPCOXAgWpa1Cf/DrJxhZ0DANBgkqhkiG9w0BAQUFADBIMQswCQYD…",
            "-----BEGIN CERTIFICATE-----\nMIIDvDCCAqSgAwIBAgIQB1YipOjUiolN9BPI8PjqpTANBgkqhkiG9w0BAQUFADBKMQswCQYD…",
            "-----BEGIN CERTIFICATE-----\nMIIEHTCCAwWgAwIBAgIQToEtioJl4AsC7j41AkblPTANBgkqhkiG9w0BAQUFADCBgTELMAkG…",
            "-----BEGIN CERTIFICATE-----\nMIICiTCCAg+gAwIBAgIQH0evqmIAcFBUTAGem2OZKjAKBggqhkjOPQQDAzCBhTELMAkGA1UE…",
            "-----BEGIN CERTIFICATE-----\nMIIDqDCCApCgAwIBAgIJAP7c4wEPyUj/MA0GCSqGSIb3DQEBBQUAMDQxCzAJBgNVBAYTAkZS…",
            "-----BEGIN CERTIFICATE-----\nMIIFsDCCA5igAwIBAgIQFci9ZUdcr7iXAF7kBtK8nTANBgkqhkiG9w0BAQUFADBeMQswCQYD…",
            "-----BEGIN CERTIFICATE-----\nMIIDODCCAiCgAwIBAgIGIAYFFnACMA0GCSqGSIb3DQEBBQUAMDsxCzAJBgNVBAYTAlJPMREw…",
            "-----BEGIN CERTIFICATE-----\nMIIEFTCCAv2gAwIBAgIGSUEs5AAQMA0GCSqGSIb3DQEBCwUAMIGnMQswCQYDVQQGEwJIVTER…",
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
            "-----BEGIN CERTIFICATE-----\nMIICejCCAgCgAwIBAgIQMZch7a+JQn81QYehZ1ZMbTAKBggqhkjOPQQDAzBuMQswCQYDVQQG…",
            "-----BEGIN CERTIFICATE-----\nMIIFjTCCA3WgAwIBAgIQQAE0jMIAAAAAAAAAATzyxjANBgkqhkiG9w0BAQwFADBQMQswCQYD…",
            "-----BEGIN CERTIFICATE-----\nMIIDcjCCAlqgAwIBAgIUZvnHwa/swlG07VOX5uaCwysckBYwDQYJKoZIhvcNAQELBQAwUTEL…",
            "-----BEGIN CERTIFICATE-----\nMIIFcjCCA1qgAwIBAgIUZNtaDCBO6Ncpd8hQJ6JaJ90t8sswDQYJKoZIhvcNAQEMBQAwUTEL…",
            "-----BEGIN CERTIFICATE-----\nMIICIzCCAamgAwIBAgIUFhXHw9hJp75pDIqI7fBw+d23PocwCgYIKoZIzj0EAwMwUTELMAkG…",
            "-----BEGIN CERTIFICATE-----\nMIIFqTCCA5GgAwIBAgIQczswBEhb2U14LnNLyaHcZjANBgkqhkiG9w0BAQ0FADBIMQswCQYD…",
            "-----BEGIN CERTIFICATE-----\nMIICMTCCAbegAwIBAgIUNnThTXxlE8msg1UloD5Sfi9QaMcwCgYIKoZIzj0EAwMwWDELMAkG…",
            "-----BEGIN CERTIFICATE-----\nMIIFgDCCA2igAwIBAgIUHBjYz+VTPyI1RlNUJDxsR9FcSpwwDQYJKoZIhvcNAQEMBQAwWDEL…",
            "-----BEGIN CERTIFICATE-----\nMIIFqTCCA5GgAwIBAgIQaSYJfoBLTKCnjHhiU19abzANBgkqhkiG9w0BAQ0FADBIMQswCQYD…",
            "-----BEGIN CERTIFICATE-----\nMIIFkzCCA3ugAwIBAgIUQ/oMX04bgBhE79G0TzUfRPSA7cswDQYJKoZIhvcNAQELBQAwUTEL…"
        ],
        getCACertificates: <ref *14> ƒ getCACertificates(length: 0) {},
        setDefaultCACertificates: <ref *15> ƒ setDefaultCACertificates(length: 1) {},
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
    getCACertificates: [Circular: *14],
    getCiphers: [Circular: *12],
    rootCertificates: [Circular: *13],
    setDefaultCACertificates: [Circular: *15]
}
```

</td><td valign="top">

```js
[Object: null prototype] {
    CLIENT_RENEG_LIMIT: 3,
    CLIENT_RENEG_WINDOW: 600,
    DEFAULT_CIPHERS: "TLS_AES_256_GCM_SHA384:TLS_CHACHA20_POLY1305_SHA256:TLS_AES_128_GCM_SHA256:ECDHE-RSA-AES128-GCM-SHA2…",
    DEFAULT_ECDH_CURVE: "auto",
    DEFAULT_MAX_VERSION: "TLSv1.3",
    DEFAULT_MIN_VERSION: "TLSv1.2",
    SecureContext: <ref *2> ƒ SecureContext2(length: 1) {},
    Server: <ref *3> ƒ Server(length: 2) {},
    TLSSocket: <ref *4> ƒ TLSSocket(length: 2) {},
    checkServerIdentity: <ref *5> ƒ checkServerIdentity(length: 2) {},
    connect: <ref *6> ƒ connect(length: 0) {},
    convertALPNProtocols: <ref *7> ƒ convertALPNProtocols(length: 2) {},
    createSecureContext: <ref *8> ƒ createSecureContext(length: 1) {},
    createServer: <ref *9> ƒ createServer(length: 2) {},
    default: {
        CLIENT_RENEG_LIMIT: 3,
        CLIENT_RENEG_WINDOW: 600,
        connect: [Circular: *6],
        convertALPNProtocols: [Circular: *7],
        createSecureContext: [Circular: *8],
        createServer: [Circular: *9],
        [get/set] DEFAULT_CIPHERS: "TLS_AES_256_GCM_SHA384:TLS_CHACHA20_POLY1305_SHA256:TLS_AES_128_GCM_SHA256:ECDHE-RSA-AES128-GCM-SHA2…",
        DEFAULT_ECDH_CURVE: "auto",
        DEFAULT_MAX_VERSION: "TLSv1.3",
        DEFAULT_MIN_VERSION: "TLSv1.2",
        getCiphers: <ref *11> ƒ getCiphers(length: 0) {},
        parseCertString: <ref *12> ƒ parseCertString(length: 0) {},
        SecureContext: [Circular: *2],
        Server: [Circular: *3],
        TLSSocket: [Circular: *4],
        checkServerIdentity: [Circular: *5],
        [get/set] rootCertificates: <ref *13> [
            "-----BEGIN CERTIFICATE-----\nMIIEkTCCA3mgAwIBAgIERWtQVDANBgkqhkiG9w0BAQUFADCBsDELMAkGA1UEBhMCVVMxFjAU…",
            "-----BEGIN CERTIFICATE-----\nMIIFtzCCA5+gAwIBAgICBQkwDQYJKoZIhvcNAQEFBQAwRTELMAkGA1UEBhMCQk0xGTAXBgNV…",
            "-----BEGIN CERTIFICATE-----\nMIIGnTCCBIWgAwIBAgICBcYwDQYJKoZIhvcNAQEFBQAwRTELMAkGA1UEBhMCQk0xGTAXBgNV…",
            "-----BEGIN CERTIFICATE-----\nMIIDtzCCAp+gAwIBAgIQDOfg5RfYRv6P5WD8G/AwOTANBgkqhkiG9w0BAQUFADBlMQswCQYD…",
            "-----BEGIN CERTIFICATE-----\nMIIDrzCCApegAwIBAgIQCDvgVpBCRrGhdWrJWZHHSjANBgkqhkiG9w0BAQUFADBhMQswCQYD…",
            "-----BEGIN CERTIFICATE-----\nMIIDxTCCAq2gAwIBAgIQAqxcJmoLQJuPC3nyrkYldzANBgkqhkiG9w0BAQUFADBsMQswCQYD…",
            "-----BEGIN CERTIFICATE-----\nMIIFujCCA6KgAwIBAgIJALtAHEP1Xk+wMA0GCSqGSIb3DQEBBQUAMEUxCzAJBgNVBAYTAkNI…",
            "-----BEGIN CERTIFICATE-----\nMIIDuDCCAqCgAwIBAgIQDPCOXAgWpa1Cf/DrJxhZ0DANBgkqhkiG9w0BAQUFADBIMQswCQYD…",
            "-----BEGIN CERTIFICATE-----\nMIIDvDCCAqSgAwIBAgIQB1YipOjUiolN9BPI8PjqpTANBgkqhkiG9w0BAQUFADBKMQswCQYD…",
            "-----BEGIN CERTIFICATE-----\nMIIEHTCCAwWgAwIBAgIQToEtioJl4AsC7j41AkblPTANBgkqhkiG9w0BAQUFADCBgTELMAkG…",
            "-----BEGIN CERTIFICATE-----\nMIICiTCCAg+gAwIBAgIQH0evqmIAcFBUTAGem2OZKjAKBggqhkjOPQQDAzCBhTELMAkGA1UE…",
            "-----BEGIN CERTIFICATE-----\nMIIDqDCCApCgAwIBAgIJAP7c4wEPyUj/MA0GCSqGSIb3DQEBBQUAMDQxCzAJBgNVBAYTAkZS…",
            "-----BEGIN CERTIFICATE-----\nMIIFsDCCA5igAwIBAgIQFci9ZUdcr7iXAF7kBtK8nTANBgkqhkiG9w0BAQUFADBeMQswCQYD…",
            "-----BEGIN CERTIFICATE-----\nMIIDODCCAiCgAwIBAgIGIAYFFnACMA0GCSqGSIb3DQEBBQUAMDsxCzAJBgNVBAYTAlJPMREw…",
            "-----BEGIN CERTIFICATE-----\nMIIEFTCCAv2gAwIBAgIGSUEs5AAQMA0GCSqGSIb3DQEBCwUAMIGnMQswCQYDVQQGEwJIVTER…",
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
            "-----BEGIN CERTIFICATE-----\nMIICejCCAgCgAwIBAgIQMZch7a+JQn81QYehZ1ZMbTAKBggqhkjOPQQDAzBuMQswCQYDVQQG…",
            "-----BEGIN CERTIFICATE-----\nMIIFjTCCA3WgAwIBAgIQQAE0jMIAAAAAAAAAATzyxjANBgkqhkiG9w0BAQwFADBQMQswCQYD…",
            "-----BEGIN CERTIFICATE-----\nMIIDcjCCAlqgAwIBAgIUZvnHwa/swlG07VOX5uaCwysckBYwDQYJKoZIhvcNAQELBQAwUTEL…",
            "-----BEGIN CERTIFICATE-----\nMIIFcjCCA1qgAwIBAgIUZNtaDCBO6Ncpd8hQJ6JaJ90t8sswDQYJKoZIhvcNAQEMBQAwUTEL…",
            "-----BEGIN CERTIFICATE-----\nMIICIzCCAamgAwIBAgIUFhXHw9hJp75pDIqI7fBw+d23PocwCgYIKoZIzj0EAwMwUTELMAkG…",
            "-----BEGIN CERTIFICATE-----\nMIIFqTCCA5GgAwIBAgIQczswBEhb2U14LnNLyaHcZjANBgkqhkiG9w0BAQ0FADBIMQswCQYD…",
            "-----BEGIN CERTIFICATE-----\nMIICMTCCAbegAwIBAgIUNnThTXxlE8msg1UloD5Sfi9QaMcwCgYIKoZIzj0EAwMwWDELMAkG…",
            "-----BEGIN CERTIFICATE-----\nMIIFgDCCA2igAwIBAgIUHBjYz+VTPyI1RlNUJDxsR9FcSpwwDQYJKoZIhvcNAQEMBQAwWDEL…",
            "-----BEGIN CERTIFICATE-----\nMIIFqTCCA5GgAwIBAgIQaSYJfoBLTKCnjHhiU19abzANBgkqhkiG9w0BAQ0FADBIMQswCQYD…",
            "-----BEGIN CERTIFICATE-----\nMIIFkzCCA3ugAwIBAgIUQ/oMX04bgBhE79G0TzUfRPSA7cswDQYJKoZIhvcNAQELBQAwUTEL…"
        ],
        getCACertificates: <ref *14> ƒ getCACertificates(length: 0) {}
    },
    getCACertificates: [Circular: *14],
    getCiphers: [Circular: *11],
    parseCertString: [Circular: *12],
    rootCertificates: [Circular: *13]
}
```

</td></tr></table>
			</details>

<details>
				<summary><code>trace_events</code></summary>
				<br>

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
[Object: null prototype] {
    createTracing: <ref *2> ƒ createTracing(length: 1) {},
    default: {
        createTracing: [Circular: *2],
        getEnabledCategories: <ref *4> ƒ getEnabledCategories(length: 0) {}
    },
    getEnabledCategories: [Circular: *4]
}
```

</td></tr></table>
			</details>

<details>
				<summary><code>tty</code></summary>
				<br>

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
[Object: null prototype] {
    ReadStream: <ref *2> ƒ ReadStream(length: 1) {
        [get/set] prototype: ReadStream {
            ref: ƒ (length: 0) {},
            unref: ƒ (length: 0) {},
            setRawMode: ƒ (length: 1) {}
        }
    },
    WriteStream: <ref *7> ƒ WriteStream(length: 1) {
        [get/set] prototype: WriteStream {
            open: ƒ open(length: 0) {},
            _construct: ƒ streamConstruct(length: 1) {},
            _write: ƒ _write(length: 3) {},
            _writev: ƒ (length: 2) {},
            _destroy: ƒ (length: 2) {},
            close: ƒ (length: 1) {},
            destroySoon: ƒ (length: 3) {},
            _refreshSize: ƒ (length: 0) {},
            clearLine: ƒ (length: 2) {},
            clearScreenDown: ƒ (length: 1) {},
            cursorTo: ƒ (length: 3) {},
            getColorDepth: ƒ (length: 0) {},
            getWindowSize: ƒ (length: 0) {},
            hasColors: ƒ (length: 2) {},
            moveCursor: ƒ (length: 3) {},
            Symbol(Symbol.asyncIterator): ƒ (length: 0) {}
        }
    },
    default: {
        ReadStream: [Circular: *2],
        WriteStream: [Circular: *7],
        isatty: <ref *26> ƒ isatty(length: 0) {}
    },
    isatty: [Circular: *26]
}
```

</td></tr></table>
			</details>

<details>
				<summary><code>url</code></summary>
				<br>

<table><tr><th>Node.js</th><th>Bun</th></tr><tr><td valign="top">

```js
[Object: null prototype] {
    URL: <ref *2> class URL {
        parse: ƒ parse(length: 1) {},
        canParse: ƒ canParse(length: 1) {},
        createObjectURL: ƒ createObjectURL(length: 1) {},
        revokeObjectURL: ƒ revokeObjectURL(length: 1) {}
    },
    URLSearchParams: <ref *7> class URLSearchParams {},
    Url: <ref *8> ƒ Url(length: 0) {},
    default: {
        Url: [Circular: *8],
        parse: <ref *10> ƒ urlParse(length: 3) {},
        resolve: <ref *11> ƒ urlResolve(length: 2) {},
        resolveObject: <ref *12> ƒ urlResolveObject(length: 2) {},
        format: <ref *13> ƒ urlFormat(length: 2) {},
        URL: [Circular: *2],
        URLSearchParams: [Circular: *7],
        domainToASCII: <ref *14> ƒ domainToASCII(length: 1) {},
        domainToUnicode: <ref *15> ƒ domainToUnicode(length: 1) {},
        pathToFileURL: <ref *16> ƒ pathToFileURL(length: 2) {},
        fileURLToPath: <ref *17> ƒ fileURLToPath(length: 1) {},
        fileURLToPathBuffer: <ref *18> ƒ fileURLToPathBuffer(length: 1) {},
        urlToHttpOptions: <ref *19> ƒ urlToHttpOptions(length: 1) {}
    },
    domainToASCII: [Circular: *14],
    domainToUnicode: [Circular: *15],
    fileURLToPath: [Circular: *17],
    fileURLToPathBuffer: [Circular: *18],
    format: [Circular: *13],
    parse: [Circular: *10],
    pathToFileURL: [Circular: *16],
    resolve: [Circular: *11],
    resolveObject: [Circular: *12],
    urlToHttpOptions: [Circular: *19]
}
```

</td><td valign="top">

```js
[Object: null prototype] {
    URL: <ref *2> ƒ URL(length: 1) {
        parse: ƒ parse(length: 1) {},
        canParse: ƒ canParse(length: 1) {},
        createObjectURL: ƒ createObjectURL(length: 1) {},
        revokeObjectURL: ƒ revokeObjectURL(length: 1) {}
    },
    URLSearchParams: <ref *7> ƒ URLSearchParams(length: 0) {},
    Url: <ref *8> ƒ Url(length: 0) {
        prototype: {
            parse: ƒ parse(length: 3) {},
            format: ƒ format(length: 0) {},
            resolve: ƒ resolve(length: 1) {},
            resolveObject: ƒ resolveObject(length: 1) {},
            parseHost: ƒ parseHost(length: 0) {}
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
			</details>

<details>
				<summary><code>util</code></summary>
				<br>

<table><tr><th>Node.js</th><th>Bun</th></tr><tr><td valign="top">

```js
[Object: null prototype] {
    MIMEParams: <ref *2> class MIMEParams {},
    MIMEType: <ref *3> class MIMEType {},
    TextDecoder: <ref *4> class TextDecoder {},
    TextEncoder: <ref *5> class TextEncoder {},
    _errnoException: <ref *6> ƒ _errnoException(length: 0) {},
    _exceptionWithHostPort: <ref *7> ƒ _exceptionWithHostPort(length: 0) {},
    _extend: <ref *8> ƒ deprecated(length: 2) {},
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
        getCallSite: <ref *17> ƒ deprecated(length: 0) {},
        getCallSites: <ref *18> ƒ getCallSites(length: 0) {},
        getSystemErrorMap: <ref *19> ƒ getSystemErrorMap(length: 0) {},
        getSystemErrorName: <ref *20> ƒ getSystemErrorName(length: 1) {},
        getSystemErrorMessage: <ref *21> ƒ getSystemErrorMessage(length: 1) {},
        inherits: <ref *22> ƒ inherits(length: 2) {},
        inspect: <ref *23> ƒ inspect(length: 2) {
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
        isArray: <ref *70> ƒ deprecated(length: 1) {},
        isBoolean: <ref *71> ƒ deprecated(length: 1) {},
        isBuffer: <ref *72> ƒ deprecated(length: 1) {},
        isDeepStrictEqual: <ref *73> ƒ isDeepStrictEqual(length: 2) {},
        isNull: <ref *74> ƒ deprecated(length: 1) {},
        isNullOrUndefined: <ref *75> ƒ deprecated(length: 1) {},
        isNumber: <ref *76> ƒ deprecated(length: 1) {},
        isString: <ref *77> ƒ deprecated(length: 1) {},
        isSymbol: <ref *78> ƒ deprecated(length: 1) {},
        isUndefined: <ref *79> ƒ deprecated(length: 1) {},
        isRegExp: <ref *80> ƒ deprecated(length: 0) {},
        isObject: <ref *81> ƒ deprecated(length: 1) {},
        isDate: <ref *82> ƒ deprecated(length: 0) {},
        isError: <ref *83> ƒ deprecated(length: 1) {},
        isFunction: <ref *84> ƒ deprecated(length: 1) {},
        isPrimitive: <ref *85> ƒ deprecated(length: 1) {},
        log: <ref *86> ƒ deprecated(length: 0) {},
        promisify: <ref *87> ƒ promisify(length: 1) {
            custom: Symbol(nodejs.util.promisify.custom)
        },
        stripVTControlCharacters: <ref *88> ƒ stripVTControlCharacters(length: 1) {},
        toUSVString: <ref *89> ƒ toUSVString(length: 1) {},
        [get/set] transferableAbortSignal: <ref *90> ƒ transferableAbortSignal(length: 1) {},
        [get/set] transferableAbortController: <ref *91> ƒ transferableAbortController(length: 0) {},
        [get/set] aborted: [Circular: *9],
        types: <ref *92> {
            isExternal: ƒ (length: 0) {},
            isDate: ƒ (length: 0) {},
            isArgumentsObject: ƒ (length: 0) {},
            isBigIntObject: ƒ (length: 0) {},
            isBooleanObject: ƒ (length: 0) {},
            isNumberObject: ƒ (length: 0) {},
            isStringObject: ƒ (length: 0) {},
            isSymbolObject: ƒ (length: 0) {},
            isNativeError: ƒ (length: 0) {},
            isRegExp: ƒ (length: 0) {},
            isAsyncFunction: ƒ (length: 0) {},
            isGeneratorFunction: ƒ (length: 0) {},
            isGeneratorObject: ƒ (length: 0) {},
            isPromise: ƒ (length: 0) {},
            isMap: ƒ (length: 0) {},
            isSet: ƒ (length: 0) {},
            isMapIterator: ƒ (length: 0) {},
            isSetIterator: ƒ (length: 0) {},
            isWeakMap: ƒ (length: 0) {},
            isWeakSet: ƒ (length: 0) {},
            isArrayBuffer: ƒ (length: 0) {},
            isDataView: ƒ (length: 0) {},
            isSharedArrayBuffer: ƒ (length: 0) {},
            isProxy: ƒ (length: 0) {},
            isModuleNamespaceObject: ƒ (length: 0) {},
            isAnyArrayBuffer: ƒ (length: 0) {},
            isBoxedPrimitive: ƒ (length: 0) {},
            isArrayBufferView: ƒ isView(length: 1) {},
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
            isKeyObject: ƒ value(length: 1) {},
            isCryptoKey: ƒ value(length: 1) {}
        },
        parseEnv: <ref *136> ƒ parseEnv(length: 1) {},
        parseArgs: <ref *137> ƒ parseArgs(length: 0) {},
        TextDecoder: [Circular: *4],
        TextEncoder: [Circular: *5],
        MIMEType: [Circular: *3],
        MIMEParams: [Circular: *2],
        diff: <ref *138> ƒ diff(length: 2) {},
        setTraceSigInt: <ref *139> ƒ setTraceSigInt(length: 1) {}
    },
    deprecate: [Circular: *13],
    diff: [Circular: *138],
    format: [Circular: *14],
    formatWithOptions: [Circular: *16],
    getCallSite: [Circular: *17],
    getCallSites: [Circular: *18],
    getSystemErrorMap: [Circular: *19],
    getSystemErrorMessage: [Circular: *21],
    getSystemErrorName: [Circular: *20],
    inherits: [Circular: *22],
    inspect: [Circular: *23],
    isArray: [Circular: *70],
    isBoolean: [Circular: *71],
    isBuffer: [Circular: *72],
    isDate: [Circular: *82],
    isDeepStrictEqual: [Circular: *73],
    isError: [Circular: *83],
    isFunction: [Circular: *84],
    isNull: [Circular: *74],
    isNullOrUndefined: [Circular: *75],
    isNumber: [Circular: *76],
    isObject: [Circular: *81],
    isPrimitive: [Circular: *85],
    isRegExp: [Circular: *80],
    isString: [Circular: *77],
    isSymbol: [Circular: *78],
    isUndefined: [Circular: *79],
    log: [Circular: *86],
    parseArgs: [Circular: *137],
    parseEnv: [Circular: *136],
    promisify: [Circular: *87],
    setTraceSigInt: [Circular: *139],
    stripVTControlCharacters: [Circular: *88],
    styleText: [Circular: *15],
    toUSVString: [Circular: *89],
    transferableAbortController: [Circular: *91],
    transferableAbortSignal: [Circular: *90],
    types: [Circular: *92]
}
```

</td><td valign="top">

```js
[Object: null prototype] {
    MIMEParams: <ref *2> ƒ MIMEParams(length: 0) {},
    MIMEType: <ref *3> ƒ MIMEType(length: 1) {},
    TextDecoder: <ref *4> ƒ TextDecoder(length: 0) {},
    TextEncoder: <ref *5> ƒ TextEncoder(length: 0) {},
    _extend: <ref *6> ƒ _extend(length: 2) {},
    aborted: <ref *7> ƒ aborted(length: 2) {},
    callbackify: <ref *8> ƒ callbackify(length: 1) {},
    debug: <ref *9> ƒ debuglog(length: 1) {},
    debuglog: [Circular: *9],
    default: {
        _extend: [Circular: *6],
        callbackify: [Circular: *8],
        debug: [Circular: *9],
        debuglog: [Circular: *9],
        deprecate: <ref *11> ƒ deprecate(length: 3) {},
        format: <ref *12> ƒ format(length: 0) {},
        styleText: <ref *13> ƒ styleText(length: 2) {},
        formatWithOptions: <ref *14> ƒ formatWithOptions(length: 1) {},
        getSystemErrorName: <ref *15> ƒ getSystemErrorName(length: 1) {},
        inherits: <ref *16> ƒ inherits2(length: 2) {},
        inspect: <ref *17> ƒ inspect(length: 2) {
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
        isDeepStrictEqual: <ref *64> ƒ isDeepStrictEqual(length: 2) {},
        promisify: <ref *65> ƒ promisify2(length: 1) {
            custom: Symbol(nodejs.util.promisify.custom)
        },
        stripVTControlCharacters: <ref *66> ƒ stripVTControlCharacters(length: 1) {},
        toUSVString: <ref *67> ƒ toUSVString(length: 1) {},
        aborted: [Circular: *7],
        types: <ref *68> {
            isExternal: ƒ isExternal(length: 1) {},
            isDate: <ref *70> ƒ isDate(length: 1) {},
            isArgumentsObject: ƒ isArgumentsObject(length: 1) {},
            isBigIntObject: ƒ isBigIntObject(length: 1) {},
            isBooleanObject: ƒ isBooleanObject(length: 1) {},
            isNumberObject: ƒ isNumberObject(length: 1) {},
            isStringObject: ƒ isStringObject(length: 1) {},
            isSymbolObject: ƒ isSymbolObject(length: 1) {},
            isNativeError: ƒ isNativeError(length: 1) {},
            isRegExp: <ref *78> ƒ isRegExp(length: 1) {},
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
            isCryptoKey: ƒ isCryptoKey(length: 1) {},
            isEventTarget: ƒ isEventTarget(length: 1) {}
        },
        parseEnv: <ref *113> ƒ parseEnv(length: 1) {},
        parseArgs: <ref *114> ƒ parseArgs(length: 1) {},
        TextDecoder: [Circular: *4],
        TextEncoder: [Circular: *5],
        MIMEType: [Circular: *3],
        MIMEParams: [Circular: *2],
        isArray: <ref *115> ƒ isArray(length: 1) {},
        isBoolean: <ref *116> ƒ isBoolean(length: 1) {},
        isBuffer: <ref *117> ƒ isBuffer(length: 1) {},
        isNull: <ref *118> ƒ isNull(length: 1) {},
        isNullOrUndefined: <ref *119> ƒ isNullOrUndefined(length: 1) {},
        isNumber: <ref *120> ƒ isNumber(length: 1) {},
        isString: <ref *121> ƒ isString(length: 1) {},
        isSymbol: <ref *122> ƒ isSymbol(length: 1) {},
        isUndefined: <ref *123> ƒ isUndefined(length: 1) {},
        isRegExp: [Circular: *78],
        isObject: <ref *124> ƒ isObject(length: 1) {},
        isDate: [Circular: *70],
        isError: <ref *125> ƒ jsFunctionIsError(length: 1) {},
        isFunction: <ref *126> ƒ isFunction(length: 1) {},
        isPrimitive: <ref *127> ƒ isPrimitive(length: 1) {},
        log: <ref *128> ƒ log2(length: 0) {}
    },
    deprecate: [Circular: *11],
    format: [Circular: *12],
    formatWithOptions: [Circular: *14],
    getSystemErrorName: [Circular: *15],
    inherits: [Circular: *16],
    inspect: [Circular: *17],
    isArray: [Circular: *115],
    isBoolean: [Circular: *116],
    isBuffer: [Circular: *117],
    isDate: [Circular: *70],
    isDeepStrictEqual: [Circular: *64],
    isError: [Circular: *125],
    isFunction: [Circular: *126],
    isNull: [Circular: *118],
    isNullOrUndefined: [Circular: *119],
    isNumber: [Circular: *120],
    isObject: [Circular: *124],
    isPrimitive: [Circular: *127],
    isRegExp: [Circular: *78],
    isString: [Circular: *121],
    isSymbol: [Circular: *122],
    isUndefined: [Circular: *123],
    log: [Circular: *128],
    parseArgs: [Circular: *114],
    parseEnv: [Circular: *113],
    promisify: [Circular: *65],
    stripVTControlCharacters: [Circular: *66],
    styleText: [Circular: *13],
    toUSVString: [Circular: *67],
    types: [Circular: *68]
}
```

</td></tr></table>
			</details>

<details>
				<summary><code>util/types</code></summary>
				<br>

<table><tr><th>Node.js</th><th>Bun</th></tr><tr><td valign="top">

```js
[Object: null prototype] {
    default: {
        isExternal: <ref *3> ƒ (length: 0) {},
        isDate: <ref *4> ƒ (length: 0) {},
        isArgumentsObject: <ref *5> ƒ (length: 0) {},
        isBigIntObject: <ref *6> ƒ (length: 0) {},
        isBooleanObject: <ref *7> ƒ (length: 0) {},
        isNumberObject: <ref *8> ƒ (length: 0) {},
        isStringObject: <ref *9> ƒ (length: 0) {},
        isSymbolObject: <ref *10> ƒ (length: 0) {},
        isNativeError: <ref *11> ƒ (length: 0) {},
        isRegExp: <ref *12> ƒ (length: 0) {},
        isAsyncFunction: <ref *13> ƒ (length: 0) {},
        isGeneratorFunction: <ref *14> ƒ (length: 0) {},
        isGeneratorObject: <ref *15> ƒ (length: 0) {},
        isPromise: <ref *16> ƒ (length: 0) {},
        isMap: <ref *17> ƒ (length: 0) {},
        isSet: <ref *18> ƒ (length: 0) {},
        isMapIterator: <ref *19> ƒ (length: 0) {},
        isSetIterator: <ref *20> ƒ (length: 0) {},
        isWeakMap: <ref *21> ƒ (length: 0) {},
        isWeakSet: <ref *22> ƒ (length: 0) {},
        isArrayBuffer: <ref *23> ƒ (length: 0) {},
        isDataView: <ref *24> ƒ (length: 0) {},
        isSharedArrayBuffer: <ref *25> ƒ (length: 0) {},
        isProxy: <ref *26> ƒ (length: 0) {},
        isModuleNamespaceObject: <ref *27> ƒ (length: 0) {},
        isAnyArrayBuffer: <ref *28> ƒ (length: 0) {},
        isBoxedPrimitive: <ref *29> ƒ (length: 0) {},
        isArrayBufferView: <ref *30> ƒ isView(length: 1) {},
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
        isKeyObject: <ref *44> ƒ value(length: 1) {},
        isCryptoKey: <ref *45> ƒ value(length: 1) {}
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

</td><td valign="top">

```js
[Object: null prototype] {
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
        isCryptoKey: <ref *45> ƒ isCryptoKey(length: 1) {},
        isEventTarget: <ref *46> ƒ isEventTarget(length: 1) {}
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
    isEventTarget: [Circular: *46],
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
			</details>

<details>
				<summary><code>v8</code></summary>
				<br>

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
        getCppHeapStatistics: <ref *13> ƒ getCppHeapStatistics(length: 0) {},
        setFlagsFromString: <ref *14> ƒ setFlagsFromString(length: 1) {},
        Serializer: [Circular: *6],
        Deserializer: [Circular: *4],
        DefaultSerializer: [Circular: *3],
        DefaultDeserializer: [Circular: *2],
        deserialize: <ref *15> ƒ deserialize(length: 1) {},
        takeCoverage: <ref *16> ƒ takeCoverage(length: 0) {},
        stopCoverage: <ref *17> ƒ stopCoverage(length: 0) {},
        serialize: <ref *18> ƒ serialize(length: 1) {},
        writeHeapSnapshot: <ref *19> ƒ writeHeapSnapshot(length: 2) {},
        promiseHooks: <ref *20> {
            createHook: ƒ createHook(length: 0) {},
            onInit: ƒ (length: 1) {},
            onBefore: ƒ (length: 1) {},
            onAfter: ƒ (length: 1) {},
            onSettled: ƒ (length: 1) {}
        },
        queryObjects: <ref *26> ƒ queryObjects(length: 1) {},
        startupSnapshot: <ref *27> {
            addDeserializeCallback: ƒ addDeserializeCallback(length: 2) {},
            addSerializeCallback: ƒ addSerializeCallback(length: 2) {},
            setDeserializeMainFunction: ƒ setDeserializeMainFunction(length: 2) {},
            isBuildingSnapshot: ƒ isBuildingSnapshot(length: 0) {}
        },
        setHeapSnapshotNearHeapLimit: <ref *32> ƒ setHeapSnapshotNearHeapLimit(length: 1) {},
        GCProfiler: [Circular: *5],
        isStringOneByteRepresentation: <ref *33> ƒ isStringOneByteRepresentation(length: 1) {}
    },
    deserialize: [Circular: *15],
    getCppHeapStatistics: [Circular: *13],
    getHeapCodeStatistics: [Circular: *12],
    getHeapSnapshot: [Circular: *9],
    getHeapSpaceStatistics: [Circular: *11],
    getHeapStatistics: [Circular: *10],
    isStringOneByteRepresentation: [Circular: *33],
    promiseHooks: [Circular: *20],
    queryObjects: [Circular: *26],
    serialize: [Circular: *18],
    setFlagsFromString: [Circular: *14],
    setHeapSnapshotNearHeapLimit: [Circular: *32],
    startupSnapshot: [Circular: *27],
    stopCoverage: [Circular: *17],
    takeCoverage: [Circular: *16],
    writeHeapSnapshot: [Circular: *19]
}
```

</td><td valign="top">

```js
[Object: null prototype] {
    DefaultDeserializer: <ref *2> class DefaultDeserializer extends Deserializer {},
    DefaultSerializer: <ref *3> class DefaultSerializer extends Serializer {},
    Deserializer: <ref *4> class Deserializer {},
    Serializer: <ref *5> class Serializer {},
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
        writeHeapSnapshot: <ref *17> ƒ ::bunternal::(length: 2) {},
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
			</details>

<details>
				<summary><code>vm</code></summary>
				<br>

<table><tr><th>Node.js</th><th>Bun</th></tr><tr><td valign="top">

```js
[Object: null prototype] {
    Script: <ref *2> class Script extends ContextifyScript {},
    compileFunction: <ref *3> ƒ compileFunction(length: 2) {},
    constants: <ref *4> [Object: null prototype] {
        USE_MAIN_CONTEXT_DEFAULT_LOADER: Symbol(vm_dynamic_import_main_context_default),
        DONT_CONTEXTIFY: Symbol(vm_context_no_contextify)
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
[Object: null prototype] {
    Module: <ref *2> class Module {},
    Script: <ref *3> ƒ Script(length: 1) {},
    SourceTextModule: <ref *4> class SourceTextModule extends Module {},
    SyntheticModule: <ref *5> class SyntheticModule extends Module {},
    compileFunction: <ref *6> ƒ compileFunction(length: 0) {},
    constants: <ref *7> [Object: null prototype] {
        USE_MAIN_CONTEXT_DEFAULT_LOADER: Symbol(vm_use_main_context_default_loader),
        DONT_CONTEXTIFY: Symbol(vm_dont_contextify)
    },
    createContext: <ref *8> ƒ createContext(length: 0) {},
    createScript: <ref *9> ƒ createScript(length: 2) {},
    default: {
        createContext: [Circular: *8],
        runInContext: <ref *11> ƒ runInContext(length: 3) {},
        runInNewContext: <ref *12> ƒ runInNewContext(length: 3) {},
        runInThisContext: <ref *13> ƒ runInThisContext(length: 2) {},
        isContext: <ref *14> ƒ isContext(length: 0) {},
        compileFunction: [Circular: *6],
        measureMemory: <ref *15> ƒ measureMemory(length: 0) {},
        Script: [Circular: *3],
        Module: [Circular: *2],
        SourceTextModule: [Circular: *4],
        SyntheticModule: [Circular: *5],
        createScript: [Circular: *9],
        constants: [Circular: *7]
    },
    isContext: [Circular: *14],
    measureMemory: [Circular: *15],
    runInContext: [Circular: *11],
    runInNewContext: [Circular: *12],
    runInThisContext: [Circular: *13]
}
```

</td></tr></table>
			</details>

<details>
				<summary><code>wasi</code></summary>
				<br>

<table><tr><th>Node.js</th><th>Bun</th></tr><tr><td valign="top">

```js
[Object: null prototype] {
    WASI: <ref *2> class WASI {},
    default: {
        WASI: [Circular: *2]
    }
}
(node:3237) ExperimentalWarning: WASI is an experimental feature and might change at any time
(Use `node --trace-warnings ...` to show where the warning was created)
```

</td><td valign="top">

```js
[Object: null prototype] {
    WASI: <ref *2> class WASI2 {},
    default: {
        WASI: [Circular: *2]
    }
}
```

</td></tr></table>
			</details>

<details>
				<summary><code>worker_threads</code></summary>
				<br>

<table><tr><th>Node.js</th><th>Bun</th></tr><tr><td valign="top">

```js
[Object: null prototype] {
    BroadcastChannel: <ref *2> class BroadcastChannel extends EventTarget {},
    MessageChannel: <ref *3> ƒ MessageChannel(length: 0) {},
    MessagePort: <ref *4> ƒ MessagePort(length: 0) {},
    SHARE_ENV: Symbol(nodejs.worker_threads.SHARE_ENV),
    Worker: <ref *5> class Worker extends EventEmitter {},
    default: {
        isInternalThread: false,
        isMainThread: true,
        MessagePort: [Circular: *4],
        MessageChannel: [Circular: *3],
        markAsUncloneable: <ref *7> ƒ markAsUncloneable(length: 1) {},
        markAsUntransferable: <ref *8> ƒ markAsUntransferable(length: 1) {},
        isMarkedAsUntransferable: <ref *9> ƒ isMarkedAsUntransferable(length: 1) {},
        moveMessagePortToContext: <ref *10> ƒ moveMessagePortToContext(length: 0) {},
        receiveMessageOnPort: <ref *11> ƒ receiveMessageOnPort(length: 1) {},
        resourceLimits: <ref *12> {},
        postMessageToThread: <ref *13> async ƒ postMessageToThread(length: 4) {},
        threadId: 0,
        threadName: "",
        SHARE_ENV: Symbol(nodejs.worker_threads.SHARE_ENV),
        Worker: [Circular: *5],
        parentPort: null,
        workerData: null,
        BroadcastChannel: [Circular: *2],
        setEnvironmentData: <ref *14> ƒ setEnvironmentData(length: 2) {},
        getEnvironmentData: <ref *15> ƒ getEnvironmentData(length: 1) {}
    },
    getEnvironmentData: [Circular: *15],
    isInternalThread: false,
    isMainThread: true,
    isMarkedAsUntransferable: [Circular: *9],
    markAsUncloneable: [Circular: *7],
    markAsUntransferable: [Circular: *8],
    moveMessagePortToContext: [Circular: *10],
    parentPort: null,
    postMessageToThread: [Circular: *13],
    receiveMessageOnPort: [Circular: *11],
    resourceLimits: [Circular: *12],
    setEnvironmentData: [Circular: *14],
    threadId: 0,
    threadName: "",
    workerData: null
}
```

</td><td valign="top">

```js
[Object: null prototype] {
    BroadcastChannel: <ref *2> ƒ BroadcastChannel(length: 1) {},
    MessageChannel: <ref *3> ƒ MessageChannel(length: 0) {},
    MessagePort: <ref *4> ƒ MessagePort(length: 0) {},
    SHARE_ENV: Symbol(nodejs.worker_threads.SHARE_ENV),
    Worker: <ref *5> class Worker extends EventEmitter {},
    default: {
        Worker: [Circular: *5],
        workerData: null,
        parentPort: null,
        resourceLimits: <ref *7> {},
        isMainThread: true,
        MessageChannel: [Circular: *3],
        BroadcastChannel: [Circular: *2],
        MessagePort: [Circular: *4],
        getEnvironmentData: <ref *8> ƒ getEnvironmentData(length: 1) {},
        setEnvironmentData: <ref *9> ƒ setEnvironmentData(length: 2) {},
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
    workerData: null
}
```

</td></tr></table>
			</details>

<details>
				<summary><code>zlib</code></summary>
				<br>

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
    ZstdCompress: <ref *11> class ZstdCompress extends Zstd {},
    ZstdDecompress: <ref *12> class ZstdDecompress extends Zstd {},
    brotliCompress: <ref *13> ƒ asyncBufferWrapper(length: 3) {},
    brotliCompressSync: <ref *14> ƒ syncBufferWrapper(length: 2) {},
    brotliDecompress: <ref *15> ƒ asyncBufferWrapper(length: 3) {},
    brotliDecompressSync: <ref *16> ƒ syncBufferWrapper(length: 2) {},
    codes: <ref *17> {
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
    constants: <ref *18> [Object: null prototype] {
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
        ZLIB_VERNUM: 4880,
        DEFLATE: 1,
        INFLATE: 2,
        GZIP: 3,
        GUNZIP: 4,
        DEFLATERAW: 5,
        INFLATERAW: 6,
        UNZIP: 7,
        BROTLI_DECODE: 8,
        BROTLI_ENCODE: 9,
        ZSTD_DECOMPRESS: 11,
        ZSTD_COMPRESS: 10,
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
        BROTLI_DECODER_ERROR_UNREACHABLE: -31,
        ZSTD_e_continue: 0,
        ZSTD_e_flush: 1,
        ZSTD_e_end: 2,
        ZSTD_fast: 1,
        ZSTD_dfast: 2,
        ZSTD_greedy: 3,
        ZSTD_lazy: 4,
        ZSTD_lazy2: 5,
        ZSTD_btlazy2: 6,
        ZSTD_btopt: 7,
        ZSTD_btultra: 8,
        ZSTD_btultra2: 9,
        ZSTD_c_compressionLevel: 100,
        ZSTD_c_windowLog: 101,
        ZSTD_c_hashLog: 102,
        ZSTD_c_chainLog: 103,
        ZSTD_c_searchLog: 104,
        ZSTD_c_minMatch: 105,
        ZSTD_c_targetLength: 106,
        ZSTD_c_strategy: 107,
        ZSTD_c_enableLongDistanceMatching: 160,
        ZSTD_c_ldmHashLog: 161,
        ZSTD_c_ldmMinMatch: 162,
        ZSTD_c_ldmBucketSizeLog: 163,
        ZSTD_c_ldmHashRateLog: 164,
        ZSTD_c_contentSizeFlag: 200,
        ZSTD_c_checksumFlag: 201,
        ZSTD_c_dictIDFlag: 202,
        ZSTD_c_nbWorkers: 400,
        ZSTD_c_jobSize: 401,
        ZSTD_c_overlapLog: 402,
        ZSTD_d_windowLogMax: 100,
        ZSTD_CLEVEL_DEFAULT: 3,
        ZSTD_error_no_error: 0,
        ZSTD_error_GENERIC: 1,
        ZSTD_error_prefix_unknown: 10,
        ZSTD_error_version_unsupported: 12,
        ZSTD_error_frameParameter_unsupported: 14,
        ZSTD_error_frameParameter_windowTooLarge: 16,
        ZSTD_error_corruption_detected: 20,
        ZSTD_error_checksum_wrong: 22,
        ZSTD_error_literals_headerWrong: 24,
        ZSTD_error_dictionary_corrupted: 30,
        ZSTD_error_dictionary_wrong: 32,
        ZSTD_error_dictionaryCreation_failed: 34,
        ZSTD_error_parameter_unsupported: 40,
        ZSTD_error_parameter_combination_unsupported: 41,
        ZSTD_error_parameter_outOfBound: 42,
        ZSTD_error_tableLog_tooLarge: 44,
        ZSTD_error_maxSymbolValue_tooLarge: 46,
        ZSTD_error_maxSymbolValue_tooSmall: 48,
        ZSTD_error_stabilityCondition_notRespected: 50,
        ZSTD_error_stage_wrong: 60,
        ZSTD_error_init_missing: 62,
        ZSTD_error_memory_allocation: 64,
        ZSTD_error_workSpace_tooSmall: 66,
        ZSTD_error_dstSize_tooSmall: 70,
        ZSTD_error_srcSize_wrong: 72,
        ZSTD_error_dstBuffer_null: 74,
        ZSTD_error_noForwardProgress_destFull: 80,
        ZSTD_error_noForwardProgress_inputEmpty: 82
    },
    crc32: <ref *19> ƒ crc32(length: 1) {},
    createBrotliCompress: <ref *20> ƒ value(length: 1) {},
    createBrotliDecompress: <ref *21> ƒ value(length: 1) {},
    createDeflate: <ref *22> ƒ value(length: 1) {},
    createDeflateRaw: <ref *23> ƒ value(length: 1) {},
    createGunzip: <ref *24> ƒ value(length: 1) {},
    createGzip: <ref *25> ƒ value(length: 1) {},
    createInflate: <ref *26> ƒ value(length: 1) {},
    createInflateRaw: <ref *27> ƒ value(length: 1) {},
    createUnzip: <ref *28> ƒ value(length: 1) {},
    createZstdCompress: <ref *29> ƒ value(length: 1) {},
    createZstdDecompress: <ref *30> ƒ value(length: 1) {},
    default: {
        crc32: [Circular: *19],
        Deflate: [Circular: *4],
        Inflate: [Circular: *8],
        Gzip: [Circular: *7],
        Gunzip: [Circular: *6],
        DeflateRaw: [Circular: *5],
        InflateRaw: [Circular: *9],
        Unzip: [Circular: *10],
        BrotliCompress: [Circular: *2],
        BrotliDecompress: [Circular: *3],
        ZstdCompress: [Circular: *11],
        ZstdDecompress: [Circular: *12],
        deflate: <ref *32> ƒ asyncBufferWrapper(length: 3) {},
        deflateSync: <ref *33> ƒ syncBufferWrapper(length: 2) {},
        gzip: <ref *34> ƒ asyncBufferWrapper(length: 3) {},
        gzipSync: <ref *35> ƒ syncBufferWrapper(length: 2) {},
        deflateRaw: <ref *36> ƒ asyncBufferWrapper(length: 3) {},
        deflateRawSync: <ref *37> ƒ syncBufferWrapper(length: 2) {},
        unzip: <ref *38> ƒ asyncBufferWrapper(length: 3) {},
        unzipSync: <ref *39> ƒ syncBufferWrapper(length: 2) {},
        inflate: <ref *40> ƒ asyncBufferWrapper(length: 3) {},
        inflateSync: <ref *41> ƒ syncBufferWrapper(length: 2) {},
        gunzip: <ref *42> ƒ asyncBufferWrapper(length: 3) {},
        gunzipSync: <ref *43> ƒ syncBufferWrapper(length: 2) {},
        inflateRaw: <ref *44> ƒ asyncBufferWrapper(length: 3) {},
        inflateRawSync: <ref *45> ƒ syncBufferWrapper(length: 2) {},
        brotliCompress: [Circular: *13],
        brotliCompressSync: [Circular: *14],
        brotliDecompress: [Circular: *15],
        brotliDecompressSync: [Circular: *16],
        zstdCompress: <ref *46> ƒ asyncBufferWrapper(length: 3) {},
        zstdCompressSync: <ref *47> ƒ syncBufferWrapper(length: 2) {},
        zstdDecompress: <ref *48> ƒ asyncBufferWrapper(length: 3) {},
        zstdDecompressSync: <ref *49> ƒ syncBufferWrapper(length: 2) {},
        createDeflate: [Circular: *22],
        createInflate: [Circular: *26],
        createDeflateRaw: [Circular: *23],
        createInflateRaw: [Circular: *27],
        createGzip: [Circular: *25],
        createGunzip: [Circular: *24],
        createUnzip: [Circular: *28],
        createBrotliCompress: [Circular: *20],
        createBrotliDecompress: [Circular: *21],
        createZstdCompress: [Circular: *29],
        createZstdDecompress: [Circular: *30],
        constants: [Circular: *18],
        codes: [Circular: *17]
    },
    deflate: [Circular: *32],
    deflateRaw: [Circular: *36],
    deflateRawSync: [Circular: *37],
    deflateSync: [Circular: *33],
    gunzip: [Circular: *42],
    gunzipSync: [Circular: *43],
    gzip: [Circular: *34],
    gzipSync: [Circular: *35],
    inflate: [Circular: *40],
    inflateRaw: [Circular: *44],
    inflateRawSync: [Circular: *45],
    inflateSync: [Circular: *41],
    unzip: [Circular: *38],
    unzipSync: [Circular: *39],
    zstdCompress: [Circular: *46],
    zstdCompressSync: [Circular: *47],
    zstdDecompress: [Circular: *48],
    zstdDecompressSync: [Circular: *49]
}
```

</td><td valign="top">

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
    ZstdCompress: <ref *11> class ZstdCompress extends Zstd {},
    ZstdDecompress: <ref *12> class ZstdDecompress extends Zstd {},
    brotliCompress: <ref *13> ƒ brotliCompress(length: 3) {},
    brotliCompressSync: <ref *14> ƒ brotliCompressSync(length: 2) {},
    brotliDecompress: <ref *15> ƒ brotliDecompress(length: 3) {},
    brotliDecompressSync: <ref *16> ƒ brotliDecompressSync(length: 2) {},
    codes: <ref *17> {
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
    constants: <ref *18> [Object: null prototype] {
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
        ZLIB_VERNUM: 4880,
        DEFLATE: 1,
        INFLATE: 2,
        GZIP: 3,
        GUNZIP: 4,
        DEFLATERAW: 5,
        INFLATERAW: 6,
        UNZIP: 7,
        BROTLI_DECODE: 8,
        BROTLI_ENCODE: 9,
        ZSTD_COMPRESS: 10,
        ZSTD_DECOMPRESS: 11,
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
        BROTLI_DECODER_ERROR_UNREACHABLE: -31,
        ZSTD_e_continue: 0,
        ZSTD_e_flush: 1,
        ZSTD_e_end: 2,
        ZSTD_fast: 1,
        ZSTD_dfast: 2,
        ZSTD_greedy: 3,
        ZSTD_lazy: 4,
        ZSTD_lazy2: 5,
        ZSTD_btlazy2: 6,
        ZSTD_btopt: 7,
        ZSTD_btultra: 8,
        ZSTD_btultra2: 9,
        ZSTD_c_compressionLevel: 100,
        ZSTD_c_windowLog: 101,
        ZSTD_c_hashLog: 102,
        ZSTD_c_chainLog: 103,
        ZSTD_c_searchLog: 104,
        ZSTD_c_minMatch: 105,
        ZSTD_c_targetLength: 106,
        ZSTD_c_strategy: 107,
        ZSTD_c_enableLongDistanceMatching: 160,
        ZSTD_c_ldmHashLog: 161,
        ZSTD_c_ldmMinMatch: 162,
        ZSTD_c_ldmBucketSizeLog: 163,
        ZSTD_c_ldmHashRateLog: 164,
        ZSTD_c_contentSizeFlag: 200,
        ZSTD_c_checksumFlag: 201,
        ZSTD_c_dictIDFlag: 202,
        ZSTD_c_nbWorkers: 400,
        ZSTD_c_jobSize: 401,
        ZSTD_c_overlapLog: 402,
        ZSTD_d_windowLogMax: 100,
        ZSTD_CLEVEL_DEFAULT: 3,
        ZSTD_error_no_error: 0,
        ZSTD_error_GENERIC: 1,
        ZSTD_error_prefix_unknown: 10,
        ZSTD_error_version_unsupported: 12,
        ZSTD_error_frameParameter_unsupported: 14,
        ZSTD_error_frameParameter_windowTooLarge: 16,
        ZSTD_error_corruption_detected: 20,
        ZSTD_error_checksum_wrong: 22,
        ZSTD_error_literals_headerWrong: 24,
        ZSTD_error_dictionary_corrupted: 30,
        ZSTD_error_dictionary_wrong: 32,
        ZSTD_error_dictionaryCreation_failed: 34,
        ZSTD_error_parameter_unsupported: 40,
        ZSTD_error_parameter_combination_unsupported: 41,
        ZSTD_error_parameter_outOfBound: 42,
        ZSTD_error_tableLog_tooLarge: 44,
        ZSTD_error_maxSymbolValue_tooLarge: 46,
        ZSTD_error_maxSymbolValue_tooSmall: 48,
        ZSTD_error_stabilityCondition_notRespected: 50,
        ZSTD_error_stage_wrong: 60,
        ZSTD_error_init_missing: 62,
        ZSTD_error_memory_allocation: 64,
        ZSTD_error_workSpace_tooSmall: 66,
        ZSTD_error_dstSize_tooSmall: 70,
        ZSTD_error_srcSize_wrong: 72,
        ZSTD_error_dstBuffer_null: 74,
        ZSTD_error_noForwardProgress_destFull: 80,
        ZSTD_error_noForwardProgress_inputEmpty: 82
    },
    crc32: <ref *19> ƒ crc32(length: 1) {},
    createBrotliCompress: <ref *20> ƒ createBrotliCompress(length: 1) {},
    createBrotliDecompress: <ref *21> ƒ createBrotliDecompress(length: 1) {},
    createDeflate: <ref *22> ƒ createDeflate(length: 1) {},
    createDeflateRaw: <ref *23> ƒ createDeflateRaw(length: 1) {},
    createGunzip: <ref *24> ƒ createGunzip(length: 1) {},
    createGzip: <ref *25> ƒ createGzip(length: 1) {},
    createInflate: <ref *26> ƒ createInflate(length: 1) {},
    createInflateRaw: <ref *27> ƒ createInflateRaw(length: 1) {},
    createUnzip: <ref *28> ƒ createUnzip(length: 1) {},
    createZstdCompress: <ref *29> ƒ createZstdCompress(length: 1) {},
    createZstdDecompress: <ref *30> ƒ createZstdDecompress(length: 1) {},
    default: {
        crc32: [Circular: *19],
        Deflate: [Circular: *4],
        Inflate: [Circular: *8],
        Gzip: [Circular: *7],
        Gunzip: [Circular: *6],
        DeflateRaw: [Circular: *5],
        InflateRaw: [Circular: *9],
        Unzip: [Circular: *10],
        BrotliCompress: [Circular: *2],
        BrotliDecompress: [Circular: *3],
        ZstdCompress: [Circular: *11],
        ZstdDecompress: [Circular: *12],
        deflate: <ref *32> ƒ deflate(length: 3) {},
        deflateSync: <ref *33> ƒ deflateSync(length: 2) {},
        gzip: <ref *34> ƒ gzip(length: 3) {},
        gzipSync: <ref *35> ƒ gzipSync(length: 2) {},
        deflateRaw: <ref *36> ƒ deflateRaw(length: 3) {},
        deflateRawSync: <ref *37> ƒ deflateRawSync(length: 2) {},
        unzip: <ref *38> ƒ unzip(length: 3) {},
        unzipSync: <ref *39> ƒ unzipSync(length: 2) {},
        inflate: <ref *40> ƒ inflate(length: 3) {},
        inflateSync: <ref *41> ƒ inflateSync(length: 2) {},
        gunzip: <ref *42> ƒ gunzip(length: 3) {},
        gunzipSync: <ref *43> ƒ gunzipSync(length: 2) {},
        inflateRaw: <ref *44> ƒ inflateRaw(length: 3) {},
        inflateRawSync: <ref *45> ƒ inflateRawSync(length: 2) {},
        brotliCompress: [Circular: *13],
        brotliCompressSync: [Circular: *14],
        brotliDecompress: [Circular: *15],
        brotliDecompressSync: [Circular: *16],
        zstdCompress: <ref *46> ƒ zstdCompress(length: 3) {},
        zstdCompressSync: <ref *47> ƒ zstdCompressSync(length: 2) {},
        zstdDecompress: <ref *48> ƒ zstdDecompress(length: 3) {},
        zstdDecompressSync: <ref *49> ƒ zstdDecompressSync(length: 2) {},
        createDeflate: [Circular: *22],
        createInflate: [Circular: *26],
        createDeflateRaw: [Circular: *23],
        createInflateRaw: [Circular: *27],
        createGzip: [Circular: *25],
        createGunzip: [Circular: *24],
        createUnzip: [Circular: *28],
        createBrotliCompress: [Circular: *20],
        createBrotliDecompress: [Circular: *21],
        createZstdCompress: [Circular: *29],
        createZstdDecompress: [Circular: *30],
        constants: [Circular: *18],
        codes: [Circular: *17]
    },
    deflate: [Circular: *32],
    deflateRaw: [Circular: *36],
    deflateRawSync: [Circular: *37],
    deflateSync: [Circular: *33],
    gunzip: [Circular: *42],
    gunzipSync: [Circular: *43],
    gzip: [Circular: *34],
    gzipSync: [Circular: *35],
    inflate: [Circular: *40],
    inflateRaw: [Circular: *44],
    inflateRawSync: [Circular: *45],
    inflateSync: [Circular: *41],
    unzip: [Circular: *38],
    unzipSync: [Circular: *39],
    zstdCompress: [Circular: *46],
    zstdCompressSync: [Circular: *47],
    zstdDecompress: [Circular: *48],
    zstdDecompressSync: [Circular: *49]
}
```

</td></tr></table>
			</details>
<!-- comparison:end -->
