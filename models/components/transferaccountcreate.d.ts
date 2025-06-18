import * as z from "zod";
import { ExternalAccountCreate, ExternalAccountCreate$Outbound } from "./externalaccountcreate.js";
/**
 * The delivering/receiving party information
 */
export type TransferAccountCreate = {
    /**
     * The internal apex account id
     */
    apexAccountId?: string | undefined;
    /**
     * The external account information
     */
    externalAccount?: ExternalAccountCreate | undefined;
};
/** @internal */
export declare const TransferAccountCreate$inboundSchema: z.ZodType<TransferAccountCreate, z.ZodTypeDef, unknown>;
/** @internal */
export type TransferAccountCreate$Outbound = {
    apex_account_id?: string | undefined;
    external_account?: ExternalAccountCreate$Outbound | undefined;
};
/** @internal */
export declare const TransferAccountCreate$outboundSchema: z.ZodType<TransferAccountCreate$Outbound, z.ZodTypeDef, TransferAccountCreate>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace TransferAccountCreate$ {
    /** @deprecated use `TransferAccountCreate$inboundSchema` instead. */
    const inboundSchema: z.ZodType<TransferAccountCreate, z.ZodTypeDef, unknown>;
    /** @deprecated use `TransferAccountCreate$outboundSchema` instead. */
    const outboundSchema: z.ZodType<TransferAccountCreate$Outbound, z.ZodTypeDef, TransferAccountCreate>;
    /** @deprecated use `TransferAccountCreate$Outbound` instead. */
    type Outbound = TransferAccountCreate$Outbound;
}
//# sourceMappingURL=transferaccountcreate.d.ts.map