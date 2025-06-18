import { ApexascendCore } from "../core.js";
import { RequestOptions } from "../lib/sdks.js";
import * as components from "../models/components/index.js";
import { ConnectionError, InvalidRequestError, RequestAbortedError, RequestTimeoutError, UnexpectedClientError } from "../models/errors/httpclienterrors.js";
import * as errors from "../models/errors/index.js";
import { SDKError } from "../models/errors/sdkerror.js";
import { SDKValidationError } from "../models/errors/sdkvalidationerror.js";
import * as operations from "../models/operations/index.js";
import { Result } from "../types/fp.js";
/**
 * Generate Service Account Token
 *
 * @remarks
 * Creates an access token for a service account.
 */
export declare function authenticationGenerateServiceAccountToken(client: ApexascendCore, security: operations.AuthenticationGenerateServiceAccountTokenSecurity, request: components.GenerateServiceAccountTokenRequestCreate, options?: RequestOptions): Promise<Result<operations.AuthenticationGenerateServiceAccountTokenResponse, errors.Status | SDKError | SDKValidationError | UnexpectedClientError | InvalidRequestError | RequestAbortedError | RequestTimeoutError | ConnectionError>>;
//# sourceMappingURL=authenticationGenerateServiceAccountToken.d.ts.map