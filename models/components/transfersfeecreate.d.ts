import * as z from "zod";
import { OpenEnum } from "../../types/enums.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import { DecimalCreate, DecimalCreate$Outbound } from "./decimalcreate.js";
/**
 * The type of the fee being charged
 */
export declare enum TransfersFeeCreateType {
    TypeUnspecified = "TYPE_UNSPECIFIED",
    Management = "MANAGEMENT",
    Advisory = "ADVISORY",
    Exchange = "EXCHANGE",
    Platform = "PLATFORM",
    Inactivity = "INACTIVITY"
}
/**
 * The type of the fee being charged
 */
export type TransfersFeeCreateTypeOpen = OpenEnum<typeof TransfersFeeCreateType>;
/**
 * A transfer using the FEE mechanism. Funds are moved from a customer's brokerage account to the firm account
 */
export type TransfersFeeCreate = {
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
     * Optional account field to denote where the fee amount should be deposited into. If provided, the account must be a fee operating account. In the case of multiple fee operating accounts under the same correspondent, this field must be provided. If not provided, this will be looked up asynchronously (therefore will not be in the initial response)
     */
    feeOperatingAccount?: string | undefined;
    /**
     * The type of the fee being charged
     */
    type: TransfersFeeCreateTypeOpen;
};
/** @internal */
export declare const TransfersFeeCreateType$inboundSchema: z.ZodType<TransfersFeeCreateTypeOpen, z.ZodTypeDef, unknown>;
/** @internal */
export declare const TransfersFeeCreateType$outboundSchema: z.ZodType<TransfersFeeCreateTypeOpen, z.ZodTypeDef, TransfersFeeCreateTypeOpen>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace TransfersFeeCreateType$ {
    /** @deprecated use `TransfersFeeCreateType$inboundSchema` instead. */
    const inboundSchema: z.ZodType<TransfersFeeCreateTypeOpen, z.ZodTypeDef, unknown>;
    /** @deprecated use `TransfersFeeCreateType$outboundSchema` instead. */
    const outboundSchema: z.ZodType<TransfersFeeCreateTypeOpen, z.ZodTypeDef, TransfersFeeCreateTypeOpen>;
}
/** @internal */
export declare const TransfersFeeCreate$inboundSchema: z.ZodType<TransfersFeeCreate, z.ZodTypeDef, unknown>;
/** @internal */
export type TransfersFeeCreate$Outbound = {
    amount: DecimalCreate$Outbound;
    client_transfer_id: string;
    description?: string | undefined;
    fee_operating_account?: string | undefined;
    type: string;
};
/** @internal */
export declare const TransfersFeeCreate$outboundSchema: z.ZodType<TransfersFeeCreate$Outbound, z.ZodTypeDef, TransfersFeeCreate>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace TransfersFeeCreate$ {
    /** @deprecated use `TransfersFeeCreate$inboundSchema` instead. */
    const inboundSchema: z.ZodType<TransfersFeeCreate, z.ZodTypeDef, unknown>;
    /** @deprecated use `TransfersFeeCreate$outboundSchema` instead. */
    const outboundSchema: z.ZodType<TransfersFeeCreate$Outbound, z.ZodTypeDef, TransfersFeeCreate>;
    /** @deprecated use `TransfersFeeCreate$Outbound` instead. */
    type Outbound = TransfersFeeCreate$Outbound;
}
export declare function transfersFeeCreateToJSON(transfersFeeCreate: TransfersFeeCreate): string;
export declare function transfersFeeCreateFromJSON(jsonString: string): SafeParseResult<TransfersFeeCreate, SDKValidationError>;
//# sourceMappingURL=transfersfeecreate.d.ts.map