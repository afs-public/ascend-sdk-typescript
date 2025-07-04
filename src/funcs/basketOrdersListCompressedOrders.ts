/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { ApexascendCore } from "../core.js";
import { encodeFormQuery, encodeSimple } from "../lib/encodings.js";
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
 * List Compressed Orders
 *
 * @remarks
 * Gets a list of compressed orders within a basket.
 *
 *  Upon successful submission, returns a list of compressed orders for the basket. If the basket has not been submitted yet, this list will be empty. If the list of compressed orders becomes too large, a token is returned to retrieve the next page of compressed orders.
 */
export async function basketOrdersListCompressedOrders(
  client: ApexascendCore,
  correspondentId: string,
  basketId: string,
  pageSize?: number | undefined,
  pageToken?: string | undefined,
  options?: RequestOptions,
): Promise<
  Result<
    operations.BasketOrdersServiceListCompressedOrdersResponse,
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
  const input: operations.BasketOrdersServiceListCompressedOrdersRequest = {
    correspondentId: correspondentId,
    basketId: basketId,
    pageSize: pageSize,
    pageToken: pageToken,
  };

  const parsed = safeParse(
    input,
    (value) =>
      operations.BasketOrdersServiceListCompressedOrdersRequest$outboundSchema
        .parse(value),
    "Input validation failed",
  );
  if (!parsed.ok) {
    return parsed;
  }
  const payload = parsed.value;
  const body = null;

  const pathParams = {
    basket_id: encodeSimple("basket_id", payload.basket_id, {
      explode: false,
      charEncoding: "percent",
    }),
    correspondent_id: encodeSimple(
      "correspondent_id",
      payload.correspondent_id,
      { explode: false, charEncoding: "percent" },
    ),
  };

  const path = pathToFunc(
    "/baskettrading/v1/correspondents/{correspondent_id}/baskets/{basket_id}/compressedOrders",
  )(pathParams);

  const query = encodeFormQuery({
    "page_size": payload.page_size,
    "page_token": payload.page_token,
  });

  const headers = new Headers({
    Accept: "application/json",
  });

  const securityInput = await extractSecurity(client._options.security);
  const context = {
    operationID: "BasketOrdersService_ListCompressedOrders",
    oAuth2Scopes: [],
    securitySource: client._options.security,
  };
  const requestSecurity = resolveGlobalSecurity(securityInput);

  const requestRes = client._createRequest(context, {
    security: requestSecurity,
    method: "GET",
    path: path,
    headers: headers,
    query: query,
    body: body,
    timeoutMs: options?.timeoutMs || client._options.timeoutMs || -1,
  }, options);
  if (!requestRes.ok) {
    return requestRes;
  }
  const req = requestRes.value;

  const doResult = await client._do(req, {
    context,
    errorCodes: ["400", "401", "403", "404", "4XX", "500", "503", "5XX"],
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
    operations.BasketOrdersServiceListCompressedOrdersResponse,
    | errors.Status
    | SDKError
    | SDKValidationError
    | UnexpectedClientError
    | InvalidRequestError
    | RequestAbortedError
    | RequestTimeoutError
    | ConnectionError
  >(
    M.json(
      200,
      operations.BasketOrdersServiceListCompressedOrdersResponse$inboundSchema,
      { key: "ListCompressedOrdersResponse" },
    ),
    M.jsonErr([400, 401, 403, 404, 500, 503], errors.Status$inboundSchema),
    M.fail(["4XX", "5XX"]),
    M.json(
      "default",
      operations.BasketOrdersServiceListCompressedOrdersResponse$inboundSchema,
      { key: "Status" },
    ),
  )(response, req, { extraFields: responseFields });
  if (!result.ok) {
    return result;
  }

  return result;
}
