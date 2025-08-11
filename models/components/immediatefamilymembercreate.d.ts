import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
/**
 * Immediate Family Member detail.
 */
export type ImmediateFamilyMemberCreate = {
    /**
     * The name of the immediate family member of the politically exposed person
     */
    familyMemberName: string;
    /**
     * The relationship of the immediate family member to the related politically exposed person
     */
    relationship: string;
};
/** @internal */
export declare const ImmediateFamilyMemberCreate$inboundSchema: z.ZodType<ImmediateFamilyMemberCreate, z.ZodTypeDef, unknown>;
/** @internal */
export type ImmediateFamilyMemberCreate$Outbound = {
    family_member_name: string;
    relationship: string;
};
/** @internal */
export declare const ImmediateFamilyMemberCreate$outboundSchema: z.ZodType<ImmediateFamilyMemberCreate$Outbound, z.ZodTypeDef, ImmediateFamilyMemberCreate>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace ImmediateFamilyMemberCreate$ {
    /** @deprecated use `ImmediateFamilyMemberCreate$inboundSchema` instead. */
    const inboundSchema: z.ZodType<ImmediateFamilyMemberCreate, z.ZodTypeDef, unknown>;
    /** @deprecated use `ImmediateFamilyMemberCreate$outboundSchema` instead. */
    const outboundSchema: z.ZodType<ImmediateFamilyMemberCreate$Outbound, z.ZodTypeDef, ImmediateFamilyMemberCreate>;
    /** @deprecated use `ImmediateFamilyMemberCreate$Outbound` instead. */
    type Outbound = ImmediateFamilyMemberCreate$Outbound;
}
export declare function immediateFamilyMemberCreateToJSON(immediateFamilyMemberCreate: ImmediateFamilyMemberCreate): string;
export declare function immediateFamilyMemberCreateFromJSON(jsonString: string): SafeParseResult<ImmediateFamilyMemberCreate, SDKValidationError>;
//# sourceMappingURL=immediatefamilymembercreate.d.ts.map