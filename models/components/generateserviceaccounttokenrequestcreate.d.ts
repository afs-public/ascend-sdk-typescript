import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
/**
 * A request to obtain a JSON Web Token for a service account
 */
export type GenerateServiceAccountTokenRequestCreate = {
    /**
     * A signed JSON Web Token (JSON Web Signature) used to prove the caller's identity
     */
    jws: string;
};
/** @internal */
export declare const GenerateServiceAccountTokenRequestCreate$inboundSchema: z.ZodType<GenerateServiceAccountTokenRequestCreate, z.ZodTypeDef, unknown>;
/** @internal */
export type GenerateServiceAccountTokenRequestCreate$Outbound = {
    jws: string;
};
/** @internal */
export declare const GenerateServiceAccountTokenRequestCreate$outboundSchema: z.ZodType<GenerateServiceAccountTokenRequestCreate$Outbound, z.ZodTypeDef, GenerateServiceAccountTokenRequestCreate>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace GenerateServiceAccountTokenRequestCreate$ {
    /** @deprecated use `GenerateServiceAccountTokenRequestCreate$inboundSchema` instead. */
    const inboundSchema: z.ZodType<GenerateServiceAccountTokenRequestCreate, z.ZodTypeDef, unknown>;
    /** @deprecated use `GenerateServiceAccountTokenRequestCreate$outboundSchema` instead. */
    const outboundSchema: z.ZodType<GenerateServiceAccountTokenRequestCreate$Outbound, z.ZodTypeDef, GenerateServiceAccountTokenRequestCreate>;
    /** @deprecated use `GenerateServiceAccountTokenRequestCreate$Outbound` instead. */
    type Outbound = GenerateServiceAccountTokenRequestCreate$Outbound;
}
export declare function generateServiceAccountTokenRequestCreateToJSON(generateServiceAccountTokenRequestCreate: GenerateServiceAccountTokenRequestCreate): string;
export declare function generateServiceAccountTokenRequestCreateFromJSON(jsonString: string): SafeParseResult<GenerateServiceAccountTokenRequestCreate, SDKValidationError>;
//# sourceMappingURL=generateserviceaccounttokenrequestcreate.d.ts.map