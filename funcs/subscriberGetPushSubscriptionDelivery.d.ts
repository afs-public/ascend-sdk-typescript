import { ApexascendCore } from "../core.js";
import { RequestOptions } from "../lib/sdks.js";
import { ApexascendError } from "../models/errors/apexascenderror.js";
import { ConnectionError, InvalidRequestError, RequestAbortedError, RequestTimeoutError, UnexpectedClientError } from "../models/errors/httpclienterrors.js";
import * as errors from "../models/errors/index.js";
import { ResponseValidationError } from "../models/errors/responsevalidationerror.js";
import { SDKValidationError } from "../models/errors/sdkvalidationerror.js";
import * as operations from "../models/operations/index.js";
import { APIPromise } from "../types/async.js";
import { Result } from "../types/fp.js";
/**
 * Get Subscription Event Delivery
 *
 * @remarks
 * Gets the details of a specific push subscription delivery.
 */
export declare function subscriberGetPushSubscriptionDelivery(client: ApexascendCore, subscriptionId: string, deliveryId: string, options?: RequestOptions): APIPromise<Result<operations.SubscriberGetPushSubscriptionDeliveryResponse, errors.Status | ApexascendError | ResponseValidationError | ConnectionError | RequestAbortedError | RequestTimeoutError | InvalidRequestError | UnexpectedClientError | SDKValidationError>>;
//# sourceMappingURL=subscriberGetPushSubscriptionDelivery.d.ts.map