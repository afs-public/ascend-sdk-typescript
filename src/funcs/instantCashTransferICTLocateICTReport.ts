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
 * Locate ICT Report
 *
 * @remarks
 * Returns a signed link pointing to a recon report file for a specific ICT batch.
 */
export async function instantCashTransferICTLocateICTReport(
  client: ApexascendCore,
  request: operations.IctReconReportsLocateIctReportRequest,
  options?: RequestOptions,
): Promise<
  Result<
    operations.IctReconReportsLocateIctReportResponse,
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
  const parsed = safeParse(
    request,
    (value) =>
      operations.IctReconReportsLocateIctReportRequest$outboundSchema.parse(
        value,
      ),
    "Input validation failed",
  );
  if (!parsed.ok) {
    return parsed;
  }
  const payload = parsed.value;
  const body = null;

  const pathParams = {
    correspondent_id: encodeSimple(
      "correspondent_id",
      payload.correspondent_id,
      { explode: false, charEncoding: "percent" },
    ),
  };

  const path = pathToFunc(
    "/transfers/v1/correspondents/{correspondent_id}/ictReconReports:locate",
  )(pathParams);

  const query = encodeFormQuery({
    "batch_id": payload.batch_id,
    "program_date_filter.process_date.day":
      payload["program_date_filter.process_date.day"],
    "program_date_filter.process_date.month":
      payload["program_date_filter.process_date.month"],
    "program_date_filter.process_date.year":
      payload["program_date_filter.process_date.year"],
    "program_date_filter.program": payload["program_date_filter.program"],
  });

  const headers = new Headers({
    Accept: "application/json",
  });

  const securityInput = await extractSecurity(client._options.security);
  const context = {
    operationID: "IctReconReports_LocateIctReport",
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
    errorCodes: ["400", "403", "404", "4XX", "5XX"],
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
    operations.IctReconReportsLocateIctReportResponse,
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
      operations.IctReconReportsLocateIctReportResponse$inboundSchema,
      { key: "LocateIctReportResponse" },
    ),
    M.jsonErr([400, 403, 404], errors.Status$inboundSchema),
    M.fail(["4XX", "5XX"]),
    M.json(
      "default",
      operations.IctReconReportsLocateIctReportResponse$inboundSchema,
      { key: "Status" },
    ),
  )(response, req, { extraFields: responseFields });
  if (!result.ok) {
    return result;
  }

  return result;
}
