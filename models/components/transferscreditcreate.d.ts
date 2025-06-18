import * as z from "zod";
import { OpenEnum } from "../../types/enums.js";
import { DecimalCreate, DecimalCreate$Outbound } from "./decimalcreate.js";
/**
 * The type of the credit being issued
 */
export declare enum TransfersCreditCreateType {
    TypeUnspecified = "TYPE_UNSPECIFIED",
    Promotional = "PROMOTIONAL",
    WriteOff = "WRITE_OFF",
    Reimbursement = "REIMBURSEMENT"
}
/**
 * The type of the credit being issued
 */
export type TransfersCreditCreateTypeOpen = OpenEnum<typeof TransfersCreditCreateType>;
/**
 * A transfer using the CREDIT mechanism. Funds are moved from a firm account to a customer's brokerage account
 */
export type TransfersCreditCreate = {
    /**
     * A representation of a decimal value, such as 2.5. Clients may convert values into language-native decimal formats, such as Java's [BigDecimal][] or Python's [decimal.Decimal][].
     *
     * @remarks
     *
     *  [BigDecimal]:
     *  https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/math/BigDecimal.html
     *  [decimal.Decimal]: https://docs.python.org/3/library/decimal.html
     */
    amount: DecimalCreate;
    /**
     * External identifier supplied by the API caller. Each request must have a unique pairing of client_transfer_id and account
     */
    clientTransferId: string;
    /**
     * Optional description information that will attach to this transaction
     */
    description?: string | undefined;
    /**
     * Optional account field to denote where the credit amount should be withdrawn from. If provided, the account must be a fee operating account. In the case of multiple fee operating accounts under the same correspondent, this field must be provided. If not provided, this will be looked up asynchronously (therefore will not be in the initial response)
     */
    feeOperatingAccount?: string | undefined;
    /**
     * The type of the credit being issued
     */
    type: TransfersCreditCreateTypeOpen;
};
/** @internal */
export declare const TransfersCreditCreateType$inboundSchema: z.ZodType<TransfersCreditCreateTypeOpen, z.ZodTypeDef, unknown>;
/** @internal */
export declare const TransfersCreditCreateType$outboundSchema: z.ZodType<TransfersCreditCreateTypeOpen, z.ZodTypeDef, TransfersCreditCreateTypeOpen>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace TransfersCreditCreateType$ {
    /** @deprecated use `TransfersCreditCreateType$inboundSchema` instead. */
    const inboundSchema: z.ZodType<TransfersCreditCreateTypeOpen, z.ZodTypeDef, unknown>;
    /** @deprecated use `TransfersCreditCreateType$outboundSchema` instead. */
    const outboundSchema: z.ZodType<TransfersCreditCreateTypeOpen, z.ZodTypeDef, TransfersCreditCreateTypeOpen>;
}
/** @internal */
export declare const TransfersCreditCreate$inboundSchema: z.ZodType<TransfersCreditCreate, z.ZodTypeDef, unknown>;
/** @internal */
export type TransfersCreditCreate$Outbound = {
    amount: DecimalCreate$Outbound;
    client_transfer_id: string;
    description?: string | undefined;
    fee_operating_account?: string | undefined;
    type: string;
};
/** @internal */
export declare const TransfersCreditCreate$outboundSchema: z.ZodType<TransfersCreditCreate$Outbound, z.ZodTypeDef, TransfersCreditCreate>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace TransfersCreditCreate$ {
    /** @deprecated use `TransfersCreditCreate$inboundSchema` instead. */
    const inboundSchema: z.ZodType<TransfersCreditCreate, z.ZodTypeDef, unknown>;
    /** @deprecated use `TransfersCreditCreate$outboundSchema` instead. */
    const outboundSchema: z.ZodType<TransfersCreditCreate$Outbound, z.ZodTypeDef, TransfersCreditCreate>;
    /** @deprecated use `TransfersCreditCreate$Outbound` instead. */
    type Outbound = TransfersCreditCreate$Outbound;
}
//# sourceMappingURL=transferscreditcreate.d.ts.map