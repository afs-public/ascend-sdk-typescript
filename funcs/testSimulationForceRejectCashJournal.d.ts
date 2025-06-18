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
 * Force Reject Cash Journal
 *
 * @remarks
 * Forces rejection of an existing cash journal that is pending review FOR TESTING ONLY!
 */
export declare function testSimulationForceRejectCashJournal(client: ApexascendCore, forceRejectCashJournalRequestCreate: components.ForceRejectCashJournalRequestCreate, cashJournalId: string, options?: RequestOptions): Promise<Result<operations.CashJournalsForceRejectCashJournalResponse, errors.Status | SDKError | SDKValidationError | UnexpectedClientError | InvalidRequestError | RequestAbortedError | RequestTimeoutError | ConnectionError>>;
//# sourceMappingURL=testSimulationForceRejectCashJournal.d.ts.map