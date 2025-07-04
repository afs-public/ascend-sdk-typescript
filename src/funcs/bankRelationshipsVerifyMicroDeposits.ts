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
 * Verify Micro Deposits
 *
 * @remarks
 * Verifies a pending bank relationship with the `MICRO_DEPOSIT` verification method. Successful verification of the micro deposit amounts will result in the relationship moving to the `APPROVED` state. The micro deposits will be taken back from the bank account.
 */
export async function bankRelationshipsVerifyMicroDeposits(
  client: ApexascendCore,
  verifyMicroDepositsRequestCreate: components.VerifyMicroDepositsRequestCreate,
  accountId: string,
  bankRelationshipId: string,
  options?: RequestOptions,
): Promise<
  Result<
    operations.BankRelationshipsVerifyMicroDepositsResponse,
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
  const input: operations.BankRelationshipsVerifyMicroDepositsRequest = {
    verifyMicroDepositsRequestCreate: verifyMicroDepositsRequestCreate,
    accountId: accountId,
    bankRelationshipId: bankRelationshipId,
  };

  const parsed = safeParse(
    input,
    (value) =>
      operations.BankRelationshipsVerifyMicroDepositsRequest$outboundSchema
        .parse(value),
    "Input validation failed",
  );
  if (!parsed.ok) {
    return parsed;
  }
  const payload = parsed.value;
  const body = encodeJSON("body", payload.VerifyMicroDepositsRequestCreate, {
    explode: true,
  });

  const pathParams = {
    account_id: encodeSimple("account_id", payload.account_id, {
      explode: false,
      charEncoding: "percent",
    }),
    bankRelationship_id: encodeSimple(
      "bankRelationship_id",
      payload.bankRelationship_id,
      { explode: false, charEncoding: "percent" },
    ),
  };

  const path = pathToFunc(
    "/transfers/v1/accounts/{account_id}/bankRelationships/{bankRelationship_id}:verifyMicroDeposits",
  )(pathParams);

  const headers = new Headers({
    "Content-Type": "application/json",
    Accept: "application/json",
  });

  const securityInput = await extractSecurity(client._options.security);
  const context = {
    operationID: "BankRelationships_VerifyMicroDeposits",
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
    operations.BankRelationshipsVerifyMicroDepositsResponse,
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
      operations.BankRelationshipsVerifyMicroDepositsResponse$inboundSchema,
      { key: "BankRelationship" },
    ),
    M.jsonErr([400, 403, 404], errors.Status$inboundSchema),
    M.fail(["4XX", "5XX"]),
    M.json(
      "default",
      operations.BankRelationshipsVerifyMicroDepositsResponse$inboundSchema,
      { key: "Status" },
    ),
  )(response, req, { extraFields: responseFields });
  if (!result.ok) {
    return result;
  }

  return result;
}
