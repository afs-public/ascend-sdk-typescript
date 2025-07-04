import { HTTPClient, RequestInput } from "../lib/http.js";
export type HookContext = {
    operationID: string;
    oAuth2Scopes?: string[];
    securitySource?: any | (() => Promise<any>);
};
export type Awaitable<T> = T | Promise<T>;
export type SDKInitOptions = {
    baseURL: URL | null;
    client: HTTPClient;
};
export type BeforeCreateRequestContext = HookContext & {};
export type BeforeRequestContext = HookContext & {};
export type AfterSuccessContext = HookContext & {};
export type AfterErrorContext = HookContext & {};
/**
 * SDKInitHook is called when the SDK is initializing. The
 * hook can return a new baseURL and HTTP client to be used by the SDK.
 */
export interface SDKInitHook {
    sdkInit: (opts: SDKInitOptions) => SDKInitOptions;
}
export interface BeforeCreateRequestHook {
    /**
     * A hook that is called before the SDK creates a `Request` object. The hook
     * can modify how a request is constructed since certain modifications, like
     * changing the request URL, cannot be done on a request object directly.
     */
    beforeCreateRequest: (hookCtx: BeforeCreateRequestContext, input: RequestInput) => RequestInput;
}
export interface BeforeRequestHook {
    /**
     * A hook that is called before the SDK sends a request. The hook can
     * introduce instrumentation code such as logging, tracing and metrics or
     * replace the request before it is sent or throw an error to stop the
     * request from being sent.
     */
    beforeRequest: (hookCtx: BeforeRequestContext, request: Request) => Awaitable<Request>;
}
export interface AfterSuccessHook {
    /**
     * A hook that is called after the SDK receives a response. The hook can
     * introduce instrumentation code such as logging, tracing and metrics or
     * modify the response before it is handled or throw an error to stop the
     * response from being handled.
     */
    afterSuccess: (hookCtx: AfterSuccessContext, response: Response) => Awaitable<Response>;
}
export interface AfterErrorHook {
    /**
     * A hook that is called after the SDK encounters an error, or a
     * non-successful response. The hook can introduce instrumentation code such
     * as logging, tracing and metrics or modify the response or error values.
     */
    afterError: (hookCtx: AfterErrorContext, response: Response | null, error: unknown) => Awaitable<{
        response: Response | null;
        error: unknown;
    }>;
}
export interface Hooks {
    /** Registers a hook to be used by the SDK for initialization event. */
    registerSDKInitHook(hook: SDKInitHook): void;
    /** Registers a hook to be used by the SDK for to modify `Request` construction. */
    registerBeforeCreateRequestHook(hook: BeforeCreateRequestHook): void;
    /** Registers a hook to be used by the SDK for the before request event. */
    registerBeforeRequestHook(hook: BeforeRequestHook): void;
    /** Registers a hook to be used by the SDK for the after success event. */
    registerAfterSuccessHook(hook: AfterSuccessHook): void;
    /** Registers a hook to be used by the SDK for the after error event. */
    registerAfterErrorHook(hook: AfterErrorHook): void;
}
//# sourceMappingURL=types.d.ts.map