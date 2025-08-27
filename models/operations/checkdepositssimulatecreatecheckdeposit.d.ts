import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
export type CheckDepositsSimulateCreateCheckDepositRequest = {
    /**
     * The account id.
     */
    accountId: string;
    simulateCreateCheckDepositRequestCreate: components.SimulateCreateCheckDepositRequestCreate;
};
export type CheckDepositsSimulateCreateCheckDepositResponse = {
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
export declare const CheckDepositsSimulateCreateCheckDepositRequest$inboundSchema: z.ZodType<CheckDepositsSimulateCreateCheckDepositRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type CheckDepositsSimulateCreateCheckDepositRequest$Outbound = {
    account_id: string;
    SimulateCreateCheckDepositRequestCreate: components.SimulateCreateCheckDepositRequestCreate$Outbound;
};
/** @internal */
export declare const CheckDepositsSimulateCreateCheckDepositRequest$outboundSchema: z.ZodType<CheckDepositsSimulateCreateCheckDepositRequest$Outbound, z.ZodTypeDef, CheckDepositsSimulateCreateCheckDepositRequest>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace CheckDepositsSimulateCreateCheckDepositRequest$ {
    /** @deprecated use `CheckDepositsSimulateCreateCheckDepositRequest$inboundSchema` instead. */
    const inboundSchema: z.ZodType<CheckDepositsSimulateCreateCheckDepositRequest, z.ZodTypeDef, unknown>;
    /** @deprecated use `CheckDepositsSimulateCreateCheckDepositRequest$outboundSchema` instead. */
    const outboundSchema: z.ZodType<CheckDepositsSimulateCreateCheckDepositRequest$Outbound, z.ZodTypeDef, CheckDepositsSimulateCreateCheckDepositRequest>;
    /** @deprecated use `CheckDepositsSimulateCreateCheckDepositRequest$Outbound` instead. */
    type Outbound = CheckDepositsSimulateCreateCheckDepositRequest$Outbound;
}
export declare function checkDepositsSimulateCreateCheckDepositRequestToJSON(checkDepositsSimulateCreateCheckDepositRequest: CheckDepositsSimulateCreateCheckDepositRequest): string;
export declare function checkDepositsSimulateCreateCheckDepositRequestFromJSON(jsonString: string): SafeParseResult<CheckDepositsSimulateCreateCheckDepositRequest, SDKValidationError>;
/** @internal */
export declare const CheckDepositsSimulateCreateCheckDepositResponse$inboundSchema: z.ZodType<CheckDepositsSimulateCreateCheckDepositResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type CheckDepositsSimulateCreateCheckDepositResponse$Outbound = {
    HttpMeta: components.HTTPMetadata$Outbound;
    CheckDeposit?: components.CheckDeposit$Outbound | undefined;
    Status?: components.Status$Outbound | undefined;
};
/** @internal */
export declare const CheckDepositsSimulateCreateCheckDepositResponse$outboundSchema: z.ZodType<CheckDepositsSimulateCreateCheckDepositResponse$Outbound, z.ZodTypeDef, CheckDepositsSimulateCreateCheckDepositResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace CheckDepositsSimulateCreateCheckDepositResponse$ {
    /** @deprecated use `CheckDepositsSimulateCreateCheckDepositResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<CheckDepositsSimulateCreateCheckDepositResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `CheckDepositsSimulateCreateCheckDepositResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<CheckDepositsSimulateCreateCheckDepositResponse$Outbound, z.ZodTypeDef, CheckDepositsSimulateCreateCheckDepositResponse>;
    /** @deprecated use `CheckDepositsSimulateCreateCheckDepositResponse$Outbound` instead. */
    type Outbound = CheckDepositsSimulateCreateCheckDepositResponse$Outbound;
}
export declare function checkDepositsSimulateCreateCheckDepositResponseToJSON(checkDepositsSimulateCreateCheckDepositResponse: CheckDepositsSimulateCreateCheckDepositResponse): string;
export declare function checkDepositsSimulateCreateCheckDepositResponseFromJSON(jsonString: string): SafeParseResult<CheckDepositsSimulateCreateCheckDepositResponse, SDKValidationError>;
//# sourceMappingURL=checkdepositssimulatecreatecheckdeposit.d.ts.map