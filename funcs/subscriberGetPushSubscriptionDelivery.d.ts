import { ApexascendCore } from "../core.js";
import { RequestOptions } from "../lib/sdks.js";
import { ConnectionError, InvalidRequestError, RequestAbortedError, RequestTimeoutError, UnexpectedClientError } from "../models/errors/httpclienterrors.js";
import * as errors from "../models/errors/index.js";
import { SDKError } from "../models/errors/sdkerror.js";
import { SDKValidationError } from "../models/errors/sdkvalidationerror.js";
import * as operations from "../models/operations/index.js";
import { Result } from "../types/fp.js";
/**
 * Get Subscription Event Delivery
 *
 * @remarks
 * Gets the details of a specific push subscription delivery.
 */
export declare function subscriberGetPushSubscriptionDelivery(client: ApexascendCore, subscriptionId: string, deliveryId: string, options?: RequestOptions): Promise<Result<operations.SubscriberGetPushSubscriptionDeliveryResponse, errors.Status | SDKError | SDKValidationError | UnexpectedClientError | InvalidRequestError | RequestAbortedError | RequestTimeoutError | ConnectionError>>;
//# sourceMappingURL=subscriberGetPushSubscriptionDelivery.d.ts.map