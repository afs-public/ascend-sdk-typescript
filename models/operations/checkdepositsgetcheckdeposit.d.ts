import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
export type CheckDepositsGetCheckDepositRequest = {
    /**
     * The account id.
     */
    accountId: string;
    /**
     * The checkDeposit id.
     */
    checkDepositId: string;
};
export type CheckDepositsGetCheckDepositResponse = {
    httpMeta: components.HTTPMetadata;
    /**
     * OK
     */
    checkDeposit?: components.CheckDeposit | undefined;
    /**
     * INVALID_ARGUMENT: The request has an invalid argument.
     */
    status?: components.Status | undefined;
};
/** @internal */
export declare const CheckDepositsGetCheckDepositRequest$inboundSchema: z.ZodType<CheckDepositsGetCheckDepositRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type CheckDepositsGetCheckDepositRequest$Outbound = {
    account_id: string;
    checkDeposit_id: string;
};
/** @internal */
export declare const CheckDepositsGetCheckDepositRequest$outboundSchema: z.ZodType<CheckDepositsGetCheckDepositRequest$Outbound, z.ZodTypeDef, CheckDepositsGetCheckDepositRequest>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace CheckDepositsGetCheckDepositRequest$ {
    /** @deprecated use `CheckDepositsGetCheckDepositRequest$inboundSchema` instead. */
    const inboundSchema: z.ZodType<CheckDepositsGetCheckDepositRequest, z.ZodTypeDef, unknown>;
    /** @deprecated use `CheckDepositsGetCheckDepositRequest$outboundSchema` instead. */
    const outboundSchema: z.ZodType<CheckDepositsGetCheckDepositRequest$Outbound, z.ZodTypeDef, CheckDepositsGetCheckDepositRequest>;
    /** @deprecated use `CheckDepositsGetCheckDepositRequest$Outbound` instead. */
    type Outbound = CheckDepositsGetCheckDepositRequest$Outbound;
}
export declare function checkDepositsGetCheckDepositRequestToJSON(checkDepositsGetCheckDepositRequest: CheckDepositsGetCheckDepositRequest): string;
export declare function checkDepositsGetCheckDepositRequestFromJSON(jsonString: string): SafeParseResult<CheckDepositsGetCheckDepositRequest, SDKValidationError>;
/** @internal */
export declare const CheckDepositsGetCheckDepositResponse$inboundSchema: z.ZodType<CheckDepositsGetCheckDepositResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type CheckDepositsGetCheckDepositResponse$Outbound = {
    HttpMeta: components.HTTPMetadata$Outbound;
    CheckDeposit?: components.CheckDeposit$Outbound | undefined;
    Status?: components.Status$Outbound | undefined;
};
/** @internal */
export declare const CheckDepositsGetCheckDepositResponse$outboundSchema: z.ZodType<CheckDepositsGetCheckDepositResponse$Outbound, z.ZodTypeDef, CheckDepositsGetCheckDepositResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace CheckDepositsGetCheckDepositResponse$ {
    /** @deprecated use `CheckDepositsGetCheckDepositResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<CheckDepositsGetCheckDepositResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `CheckDepositsGetCheckDepositResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<CheckDepositsGetCheckDepositResponse$Outbound, z.ZodTypeDef, CheckDepositsGetCheckDepositResponse>;
    /** @deprecated use `CheckDepositsGetCheckDepositResponse$Outbound` instead. */
    type Outbound = CheckDepositsGetCheckDepositResponse$Outbound;
}
export declare function checkDepositsGetCheckDepositResponseToJSON(checkDepositsGetCheckDepositResponse: CheckDepositsGetCheckDepositResponse): string;
export declare function checkDepositsGetCheckDepositResponseFromJSON(jsonString: string): SafeParseResult<CheckDepositsGetCheckDepositResponse, SDKValidationError>;
//# sourceMappingURL=checkdepositsgetcheckdeposit.d.ts.map