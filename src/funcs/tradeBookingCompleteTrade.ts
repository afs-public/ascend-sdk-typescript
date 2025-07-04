/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { ApexascendCore } from "../core.js";
import { encodeJSON, encodeSimple } from "../lib/encodings.js";
import * as M from "../lib/matchers.js";
import { safeParse } from "../lib/schemas.js";
import { RequestOptions } from "../lib/sdks.js";
import { extractSecurity, resolveGlobalSecurity } from "../lib/security.js";
import { pathToFunc } from "../lib/url.js";
import * as components from "../models/components/index.js";
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
 * Complete Trade
 *
 * @remarks
 * Complete a Trade by closing and generating any fees and withholdings if necessary. Once this endpoint returns an OK, the combination of details that generated the Trade (account_id, client_order_id, and the process_date) cannot be reused.
 *
 *  Upon successful submission, returns completed trade details and all the executions. Trades that are left open will be automatically closed nightly before Ledger's EOD.
 */
export async function tradeBookingCompleteTrade(
  client: ApexascendCore,
  completeTradeRequestCreate: components.CompleteTradeRequestCreate,
  accountId: string,
  tradeId: string,
  options?: RequestOptions,
): Promise<
  Result<
    operations.BookingCompleteTradeResponse,
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
  const input: operations.BookingCompleteTradeRequest = {
    completeTradeRequestCreate: completeTradeRequestCreate,
    accountId: accountId,
    tradeId: tradeId,
  };

  const parsed = safeParse(
    input,
    (value) =>
      operations.BookingCompleteTradeRequest$outboundSchema.parse(value),
    "Input validation failed",
  );
  if (!parsed.ok) {
    return parsed;
  }
  const payload = parsed.value;
  const body = encodeJSON("body", payload.CompleteTradeRequestCreate, {
    explode: true,
  });

  const pathParams = {
    account_id: encodeSimple("account_id", payload.account_id, {
      explode: false,
      charEncoding: "percent",
    }),
    trade_id: encodeSimple("trade_id", payload.trade_id, {
      explode: false,
      charEncoding: "percent",
    }),
  };

  const path = pathToFunc(
    "/booking/v1/accounts/{account_id}/trades/{trade_id}:complete",
  )(pathParams);

  const headers = new Headers({
    "Content-Type": "application/json",
    Accept: "application/json",
  });

  const securityInput = await extractSecurity(client._options.security);
  const context = {
    operationID: "Booking_CompleteTrade",
    oAuth2Scopes: [],
    securitySource: client._options.security,
  };
  const requestSecurity = resolveGlobalSecurity(securityInput);

  const requestRes = client._createRequest(context, {
    security: requestSecurity,
    method: "POST",
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
    operations.BookingCompleteTradeResponse,
    | errors.Status
    | SDKError
    | SDKValidationError
    | UnexpectedClientError
    | InvalidRequestError
    | RequestAbortedError
    | RequestTimeoutError
    | ConnectionError
  >(
    M.json(200, operations.BookingCompleteTradeResponse$inboundSchema, {
      key: "CompleteTradeResponse",
    }),
    M.jsonErr([400, 403, 404, 500, 503, 504], errors.Status$inboundSchema),
    M.fail(["4XX", "5XX"]),
    M.json("default", operations.BookingCompleteTradeResponse$inboundSchema, {
      key: "Status",
    }),
  )(response, req, { extraFields: responseFields });
  if (!result.ok) {
    return result;
  }

  return result;
}
