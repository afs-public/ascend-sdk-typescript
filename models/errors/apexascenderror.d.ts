/** The base class for all HTTP error responses */
export declare class ApexascendError extends Error {
    /** HTTP meta data */
    readonly httpMeta: {
        response: Response;
        request: Request;
        body: string;
    };
    constructor(message: string, httpMeta: {
        response: Response;
        request: Request;
        body: string;
    });
}
//# sourceMappingURL=apexascenderror.d.ts.map