import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
/**
 * Enrollment metadata for the VIRTUAL_ACCOUNT_NUMBER enrollment type
 */
export type VirtualAccountNumberEnrollmentMetadataCreate = {};
/** @internal */
export declare const VirtualAccountNumberEnrollmentMetadataCreate$inboundSchema: z.ZodType<VirtualAccountNumberEnrollmentMetadataCreate, z.ZodTypeDef, unknown>;
/** @internal */
export type VirtualAccountNumberEnrollmentMetadataCreate$Outbound = {};
/** @internal */
export declare const VirtualAccountNumberEnrollmentMetadataCreate$outboundSchema: z.ZodType<VirtualAccountNumberEnrollmentMetadataCreate$Outbound, z.ZodTypeDef, VirtualAccountNumberEnrollmentMetadataCreate>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace VirtualAccountNumberEnrollmentMetadataCreate$ {
    /** @deprecated use `VirtualAccountNumberEnrollmentMetadataCreate$inboundSchema` instead. */
    const inboundSchema: z.ZodType<VirtualAccountNumberEnrollmentMetadataCreate, z.ZodTypeDef, unknown>;
    /** @deprecated use `VirtualAccountNumberEnrollmentMetadataCreate$outboundSchema` instead. */
    const outboundSchema: z.ZodType<VirtualAccountNumberEnrollmentMetadataCreate$Outbound, z.ZodTypeDef, VirtualAccountNumberEnrollmentMetadataCreate>;
    /** @deprecated use `VirtualAccountNumberEnrollmentMetadataCreate$Outbound` instead. */
    type Outbound = VirtualAccountNumberEnrollmentMetadataCreate$Outbound;
}
export declare function virtualAccountNumberEnrollmentMetadataCreateToJSON(virtualAccountNumberEnrollmentMetadataCreate: VirtualAccountNumberEnrollmentMetadataCreate): string;
export declare function virtualAccountNumberEnrollmentMetadataCreateFromJSON(jsonString: string): SafeParseResult<VirtualAccountNumberEnrollmentMetadataCreate, SDKValidationError>;
//# sourceMappingURL=virtualaccountnumberenrollmentmetadatacreate.d.ts.map