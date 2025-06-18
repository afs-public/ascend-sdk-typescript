import { ServiceAccountCreds } from "../models/components";
import { BeforeRequestContext, BeforeRequestHook } from "./types";
export declare class ApexAccessTokenHook implements BeforeRequestHook {
    private accessToken;
    private accessTokenExpiration;
    constructor();
    beforeRequest(hookCtx: BeforeRequestContext, request: Request): Promise<Request>;
    getAccessToken(serverUrl: string, apiKey: string, serviceAccountCreds: ServiceAccountCreds): Promise<string>;
    generateServiceAccountToken(serverURL: string, apiKey: string, jws: string): Promise<Response>;
    private getJws;
    private accessTokenStillValid;
}
//# sourceMappingURL=apexaccesstokenhook.d.ts.map