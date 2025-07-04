"use strict";
/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.HTTPClient = void 0;
exports.matchContentType = matchContentType;
exports.matchStatusCode = matchStatusCode;
exports.matchResponse = matchResponse;
exports.isConnectionError = isConnectionError;
exports.isTimeoutError = isTimeoutError;
exports.isAbortError = isAbortError;
const DEFAULT_FETCHER = (input, init) => {
    // If input is a Request and init is undefined, Bun will discard the method,
    // headers, body and other options that were set on the request object.
    // Node.js and browers would ignore an undefined init value. This check is
    // therefore needed for interop with Bun.
    if (init == null) {
        return fetch(input);
    }
    else {
        return fetch(input, init);
    }
};
class HTTPClient {
    constructor(options = {}) {
        this.options = options;
        this.requestHooks = [];
        this.requestErrorHooks = [];
        this.responseHooks = [];
        this.fetcher = options.fetcher || DEFAULT_FETCHER;
    }
    async request(request) {
        let req = request;
        for (const hook of this.requestHooks) {
            const nextRequest = await hook(req);
            if (nextRequest) {
                req = nextRequest;
            }
        }
        try {
            const res = await this.fetcher(req);
            for (const hook of this.responseHooks) {
                await hook(res, req);
            }
            return res;
        }
        catch (err) {
            for (const hook of this.requestErrorHooks) {
                await hook(err, req);
            }
            throw err;
        }
    }
    addHook(...args) {
        if (args[0] === "beforeRequest") {
            this.requestHooks.push(args[1]);
        }
        else if (args[0] === "requestError") {
            this.requestErrorHooks.push(args[1]);
        }
        else if (args[0] === "response") {
            this.responseHooks.push(args[1]);
        }
        else {
            throw new Error(`Invalid hook type: ${args[0]}`);
        }
        return this;
    }
    removeHook(...args) {
        let target;
        if (args[0] === "beforeRequest") {
            target = this.requestHooks;
        }
        else if (args[0] === "requestError") {
            target = this.requestErrorHooks;
        }
        else if (args[0] === "response") {
            target = this.responseHooks;
        }
        else {
            throw new Error(`Invalid hook type: ${args[0]}`);
        }
        const index = target.findIndex((v) => v === args[1]);
        if (index >= 0) {
            target.splice(index, 1);
        }
        return this;
    }
    clone() {
        const child = new HTTPClient(this.options);
        child.requestHooks = this.requestHooks.slice();
        child.requestErrorHooks = this.requestErrorHooks.slice();
        child.responseHooks = this.responseHooks.slice();
        return child;
    }
}
exports.HTTPClient = HTTPClient;
// A semicolon surrounded by optional whitespace characters is used to separate
// segments in a media type string.
const mediaParamSeparator = /\s*;\s*/g;
function matchContentType(response, pattern) {
    var _a;
    // `*` is a special case which means anything is acceptable.
    if (pattern === "*") {
        return true;
    }
    let contentType = ((_a = response.headers.get("content-type")) === null || _a === void 0 ? void 0 : _a.trim()) || "application/octet-stream";
    contentType = contentType.toLowerCase();
    const wantParts = pattern.toLowerCase().trim().split(mediaParamSeparator);
    const [wantType = "", ...wantParams] = wantParts;
    if (wantType.split("/").length !== 2) {
        return false;
    }
    const gotParts = contentType.split(mediaParamSeparator);
    const [gotType = "", ...gotParams] = gotParts;
    const [type = "", subtype = ""] = gotType.split("/");
    if (!type || !subtype) {
        return false;
    }
    if (wantType !== "*/*" &&
        gotType !== wantType &&
        `${type}/*` !== wantType &&
        `*/${subtype}` !== wantType) {
        return false;
    }
    if (gotParams.length < wantParams.length) {
        return false;
    }
    const params = new Set(gotParams);
    for (const wantParam of wantParams) {
        if (!params.has(wantParam)) {
            return false;
        }
    }
    return true;
}
const codeRangeRE = new RegExp("^[0-9]xx$", "i");
function matchStatusCode(response, codes) {
    const actual = `${response.status}`;
    const expectedCodes = Array.isArray(codes) ? codes : [codes];
    if (!expectedCodes.length) {
        return false;
    }
    return expectedCodes.some((ec) => {
        const code = `${ec}`;
        if (code === "default") {
            return true;
        }
        if (!codeRangeRE.test(`${code}`)) {
            return code === actual;
        }
        const expectFamily = code.charAt(0);
        if (!expectFamily) {
            throw new Error("Invalid status code range");
        }
        const actualFamily = actual.charAt(0);
        if (!actualFamily) {
            throw new Error(`Invalid response status code: ${actual}`);
        }
        return actualFamily === expectFamily;
    });
}
function matchResponse(response, code, contentTypePattern) {
    return (matchStatusCode(response, code) &&
        matchContentType(response, contentTypePattern));
}
/**
 * Uses various heurisitics to determine if an error is a connection error.
 */
function isConnectionError(err) {
    if (typeof err !== "object" || err == null) {
        return false;
    }
    // Covers fetch in Deno as well
    const isBrowserErr = err instanceof TypeError &&
        err.message.toLowerCase().startsWith("failed to fetch");
    const isNodeErr = err instanceof TypeError &&
        err.message.toLowerCase().startsWith("fetch failed");
    const isBunErr = "name" in err && err.name === "ConnectionError";
    const isGenericErr = "code" in err &&
        typeof err.code === "string" &&
        err.code.toLowerCase() === "econnreset";
    return isBrowserErr || isNodeErr || isGenericErr || isBunErr;
}
/**
 * Uses various heurisitics to determine if an error is a timeout error.
 */
function isTimeoutError(err) {
    if (typeof err !== "object" || err == null) {
        return false;
    }
    // Fetch in browser, Node.js, Bun, Deno
    const isNative = "name" in err && err.name === "TimeoutError";
    const isLegacyNative = "code" in err && err.code === 23;
    // Node.js HTTP client and Axios
    const isGenericErr = "code" in err &&
        typeof err.code === "string" &&
        err.code.toLowerCase() === "econnaborted";
    return isNative || isLegacyNative || isGenericErr;
}
/**
 * Uses various heurisitics to determine if an error is a abort error.
 */
function isAbortError(err) {
    if (typeof err !== "object" || err == null) {
        return false;
    }
    // Fetch in browser, Node.js, Bun, Deno
    const isNative = "name" in err && err.name === "AbortError";
    const isLegacyNative = "code" in err && err.code === 20;
    // Node.js HTTP client and Axios
    const isGenericErr = "code" in err &&
        typeof err.code === "string" &&
        err.code.toLowerCase() === "econnaborted";
    return isNative || isLegacyNative || isGenericErr;
}
//# sourceMappingURL=http.js.map