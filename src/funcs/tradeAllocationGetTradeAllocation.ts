/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { ApexascendCore } from "../core.js";
import { encodeSimple } from "../lib/encodings.js";
import * as M from "../lib/matchers.js";
import { safeParse } from "../lib/schemas.js";
import { RequestOptions } from "../lib/sdks.js";
import { extractSecurity, resolveGlobalSecurity } from "../lib/security.js";
import { pathToFunc } from "../lib/url.js";
import {
  ConnectionError,
  InvalidRequestError,
  RequestAbortedError,
  RequestTimeoutError,
  UnexpectedClientError,
} from "../models/errors/httpclienterrors.js";
import * as errors from "../models/errors/index.js";
import { SDKError } from "../models/errors/sdkerror.js";
import { SDKValidationError } from "../models/errors/sdkvalidationerror.js";
import * as operations from "../models/operations/index.js";
import { Result } from "../types/fp.js";

/**
 * Get Trade Allocation
 *
 * @remarks
 * Retrieves a trade allocation and its details.
 *
 *  Upon successful submission, returns the trade allocation details.
 */
export async function tradeAllocationGetTradeAllocation(
  client: ApexascendCore,
  accountId: string,
  tradeAllocationId: string,
  options?: RequestOptions,
): Promise<
  Result<
    operations.BookingGetTradeAllocationResponse,
    | errors.Status
    | SDKError
    | SDKValidationError
    | UnexpectedClientError
    | InvalidRequestError
    | RequestAbortedError
    | RequestTimeoutError
    | ConnectionError
  >
> {
  const input: operations.BookingGetTradeAllocationRequest = {
    accountId: accountId,
    tradeAllocationId: tradeAllocationId,
  };

  const parsed = safeParse(
    input,
    (value) =>
      operations.BookingGetTradeAllocationRequest$outboundSchema.parse(value),
    "Input validation failed",
  );
  if (!parsed.ok) {
    return parsed;
  }
  const payload = parsed.value;
  const body = null;

  const pathParams = {
    account_id: encodeSimple("account_id", payload.account_id, {
      explode: false,
      charEncoding: "percent",
    }),
    tradeAllocation_id: encodeSimple(
      "tradeAllocation_id",
      payload.tradeAllocation_id,
      { explode: false, charEncoding: "percent" },
    ),
  };

  const path = pathToFunc(
    "/booking/v1/accounts/{account_id}/tradeAllocations/{tradeAllocation_id}",
  )(pathParams);

  const headers = new Headers({
    Accept: "application/json",
  });

  const securityInput = await extractSecurity(client._options.security);
  const context = {
    operationID: "Booking_GetTradeAllocation",
    oAuth2Scopes: [],
    securitySource: client._options.security,
  };
  const requestSecurity = resolveGlobalSecurity(securityInput);

  const requestRes = client._createRequest(context, {
    security: requestSecurity,
    method: "GET",
    path: path,
    headers: headers,
    body: body,
    timeoutMs: options?.timeoutMs || client._options.timeoutMs || -1,
  }, options);
  if (!requestRes.ok) {
    return requestRes;
  }
  const req = requestRes.value;

  const doResult = await client._do(req, {
    context,
    errorCodes: ["400", "403", "404", "4XX", "500", "503", "504", "5XX"],
    retryConfig: options?.retries
      || client._options.retryConfig,
    retryCodes: options?.retryCodes || ["429", "500", "502", "503", "504"],
  });
  if (!doResult.ok) {
    return doResult;
  }
  const response = doResult.value;

  const responseFields = {
    HttpMeta: { Response: response, Request: req },
  };

  const [result] = await M.match<
    operations.BookingGetTradeAllocationResponse,
    | errors.Status
    | SDKError
    | SDKValidationError
    | UnexpectedClientError
    | InvalidRequestError
    | RequestAbortedError
    | RequestTimeoutError
    | ConnectionError
  >(
    M.json(200, operations.BookingGetTradeAllocationResponse$inboundSchema, {
      key: "TradeAllocation",
    }),
    M.jsonErr([400, 403, 404, 500, 503, 504], errors.Status$inboundSchema),
    M.fail(["4XX", "5XX"]),
    M.json(
      "default",
      operations.BookingGetTradeAllocationResponse$inboundSchema,
      { key: "Status" },
    ),
  )(response, req, { extraFields: responseFields });
  if (!result.ok) {
    return result;
  }

  return result;
}
