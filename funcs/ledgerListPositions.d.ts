import { ApexascendCore } from "../core.js";
import { RequestOptions } from "../lib/sdks.js";
import { ConnectionError, InvalidRequestError, RequestAbortedError, RequestTimeoutError, UnexpectedClientError } from "../models/errors/httpclienterrors.js";
import * as errors from "../models/errors/index.js";
import { SDKError } from "../models/errors/sdkerror.js";
import { SDKValidationError } from "../models/errors/sdkvalidationerror.js";
import * as operations from "../models/operations/index.js";
import { Result } from "../types/fp.js";
/**
 * List Positions
 *
 * @remarks
 * List positions based on a filter
 */
export declare function ledgerListPositions(client: ApexascendCore, accountId: string, pageSize?: number | undefined, pageToken?: string | undefined, filter?: string | undefined, options?: RequestOptions): Promise<Result<operations.LedgerListPositionsResponse, errors.Status | SDKError | SDKValidationError | UnexpectedClientError | InvalidRequestError | RequestAbortedError | RequestTimeoutError | ConnectionError>>;
//# sourceMappingURL=ledgerListPositions.d.ts.map