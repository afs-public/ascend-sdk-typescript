import * as z from "zod";
import { EnrollmentCreate, EnrollmentCreate$Outbound } from "./enrollmentcreate.js";
/**
 * The request for creating an Enrollment on an account.
 */
export type EnrollAccountRequestCreate = {
    /**
     * An Enrollment represents programs the account may enroll in.
     */
    enrollment: EnrollmentCreate;
};
/** @internal */
export declare const EnrollAccountRequestCreate$inboundSchema: z.ZodType<EnrollAccountRequestCreate, z.ZodTypeDef, unknown>;
/** @internal */
export type EnrollAccountRequestCreate$Outbound = {
    enrollment: EnrollmentCreate$Outbound;
};
/** @internal */
export declare const EnrollAccountRequestCreate$outboundSchema: z.ZodType<EnrollAccountRequestCreate$Outbound, z.ZodTypeDef, EnrollAccountRequestCreate>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace EnrollAccountRequestCreate$ {
    /** @deprecated use `EnrollAccountRequestCreate$inboundSchema` instead. */
    const inboundSchema: z.ZodType<EnrollAccountRequestCreate, z.ZodTypeDef, unknown>;
    /** @deprecated use `EnrollAccountRequestCreate$outboundSchema` instead. */
    const outboundSchema: z.ZodType<EnrollAccountRequestCreate$Outbound, z.ZodTypeDef, EnrollAccountRequestCreate>;
    /** @deprecated use `EnrollAccountRequestCreate$Outbound` instead. */
    type Outbound = EnrollAccountRequestCreate$Outbound;
}
//# sourceMappingURL=enrollaccountrequestcreate.d.ts.map