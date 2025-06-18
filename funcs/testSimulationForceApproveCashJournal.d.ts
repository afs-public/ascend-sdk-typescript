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
 * Force Approve Cash Journal
 *
 * @remarks
 * Forces approval of an existing cash journal that is pending review FOR TESTING ONLY!
 */
export declare function testSimulationForceApproveCashJournal(client: ApexascendCore, forceApproveCashJournalRequestCreate: components.ForceApproveCashJournalRequestCreate, cashJournalId: string, options?: RequestOptions): Promise<Result<operations.CashJournalsForceApproveCashJournalResponse, errors.Status | SDKError | SDKValidationError | UnexpectedClientError | InvalidRequestError | RequestAbortedError | RequestTimeoutError | ConnectionError>>;
//# sourceMappingURL=testSimulationForceApproveCashJournal.d.ts.map