import * as z from "zod";
/**
 * Role detail used for Dow Jones Profile details
 */
export type RoleDetail = {
    /**
     * Dow Jones day persons left the job role
     */
    endDay?: string | undefined;
    /**
     * Dow Jones month persons left the job role
     */
    endMonth?: string | undefined;
    /**
     * Dow Jones year persons left the job role
     */
    endYear?: string | undefined;
    /**
     * Dow Jones occupation category
     */
    occupationCategory?: string | undefined;
    /**
     * Dow Jones persons job description
     */
    occupationDescription?: string | undefined;
    /**
     * Dow Jones persons job role
     */
    roleType?: string | undefined;
    /**
     * Dow Jones day persons started the job role
     */
    startDay?: string | undefined;
    /**
     * Dow Jones month persons started the job role
     */
    startMonth?: string | undefined;
    /**
     * Dow Jones year persons started the job role
     */
    startYear?: string | undefined;
};
/** @internal */
export declare const RoleDetail$inboundSchema: z.ZodType<RoleDetail, z.ZodTypeDef, unknown>;
/** @internal */
export type RoleDetail$Outbound = {
    end_day?: string | undefined;
    end_month?: string | undefined;
    end_year?: string | undefined;
    occupation_category?: string | undefined;
    occupation_description?: string | undefined;
    role_type?: string | undefined;
    start_day?: string | undefined;
    start_month?: string | undefined;
    start_year?: string | undefined;
};
/** @internal */
export declare const RoleDetail$outboundSchema: z.ZodType<RoleDetail$Outbound, z.ZodTypeDef, RoleDetail>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace RoleDetail$ {
    /** @deprecated use `RoleDetail$inboundSchema` instead. */
    const inboundSchema: z.ZodType<RoleDetail, z.ZodTypeDef, unknown>;
    /** @deprecated use `RoleDetail$outboundSchema` instead. */
    const outboundSchema: z.ZodType<RoleDetail$Outbound, z.ZodTypeDef, RoleDetail>;
    /** @deprecated use `RoleDetail$Outbound` instead. */
    type Outbound = RoleDetail$Outbound;
}
//# sourceMappingURL=roledetail.d.ts.map