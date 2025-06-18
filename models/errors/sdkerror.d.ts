export declare class SDKError extends Error {
    readonly httpMeta: {
        response: Response;
        request: Request;
    };
    constructor(message: string, httpMeta: {
        response: Response;
        request: Request;
    });
}
//# sourceMappingURL=sdkerror.d.ts.map