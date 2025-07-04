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
 * Delete Interested Party
 *
 * @remarks
 * Deletes an Interested Party associated from an Account.
 */
export async function accountManagementDeleteInterestedParty(
  client: ApexascendCore,
  accountId: string,
  interestedPartyId: string,
  options?: RequestOptions,
): Promise<
  Result<
    operations.AccountsDeleteInterestedPartyResponse,
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
  const input: operations.AccountsDeleteInterestedPartyRequest = {
    accountId: accountId,
    interestedPartyId: interestedPartyId,
  };

  const parsed = safeParse(
    input,
    (value) =>
      operations.AccountsDeleteInterestedPartyRequest$outboundSchema.parse(
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
    account_id: encodeSimple("account_id", payload.account_id, {
      explode: false,
      charEncoding: "percent",
    }),
    interestedParty_id: encodeSimple(
      "interestedParty_id",
      payload.interestedParty_id,
      { explode: false, charEncoding: "percent" },
    ),
  };

  const path = pathToFunc(
    "/accounts/v1/accounts/{account_id}/interestedParties/{interestedParty_id}",
  )(pathParams);

  const headers = new Headers({
    Accept: "application/json",
  });

  const securityInput = await extractSecurity(client._options.security);
  const context = {
    operationID: "Accounts_DeleteInterestedParty",
    oAuth2Scopes: [],
    securitySource: client._options.security,
  };
  const requestSecurity = resolveGlobalSecurity(securityInput);

  const requestRes = client._createRequest(context, {
    security: requestSecurity,
    method: "DELETE",
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
    errorCodes: ["400", "403", "404", "4XX", "500", "503", "5XX"],
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
    operations.AccountsDeleteInterestedPartyResponse,
    | errors.Status
    | SDKError
    | SDKValidationError
    | UnexpectedClientError
    | InvalidRequestError
    | RequestAbortedError
    | RequestTimeoutError
    | ConnectionError
  >(
    M.nil(200, operations.AccountsDeleteInterestedPartyResponse$inboundSchema),
    M.jsonErr([400, 403, 404, 500, 503], errors.Status$inboundSchema),
    M.fail(["4XX", "5XX"]),
    M.json(
      "default",
      operations.AccountsDeleteInterestedPartyResponse$inboundSchema,
      { key: "Status" },
    ),
  )(response, req, { extraFields: responseFields });
  if (!result.ok) {
    return result;
  }

  return result;
}
