import * as z from "zod";
import { OpenEnum } from "../../types/enums.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import { DecimalCreate, DecimalCreate$Outbound } from "./decimalcreate.js";
import { IctWithdrawalTravelRuleCreate, IctWithdrawalTravelRuleCreate$Outbound } from "./ictwithdrawaltravelrulecreate.js";
import { RetirementDistributionCreate, RetirementDistributionCreate$Outbound } from "./retirementdistributioncreate.js";
/**
 * The name of the program that the ICT withdrawal is associated with.
 */
export declare enum IctWithdrawalCreateProgram {
    IctProgramUnspecified = "ICT_PROGRAM_UNSPECIFIED",
    BrokerPartner = "BROKER_PARTNER",
    DepositOnly = "DEPOSIT_ONLY",
    BankingPartner = "BANKING_PARTNER",
    WithdrawalOnly = "WITHDRAWAL_ONLY",
    DigitalPartner = "DIGITAL_PARTNER"
}
/**
 * The name of the program that the ICT withdrawal is associated with.
 */
export type IctWithdrawalCreateProgramOpen = OpenEnum<typeof IctWithdrawalCreateProgram>;
/**
 * An Instant Cash Transfer. Funds are moved from a customer's brokerage account to a configured Firm account.
 */
export type IctWithdrawalCreate = {
    /**
     * A representation of a decimal value, such as 2.5. Clients may convert values into language-native decimal formats, such as Java's [BigDecimal][] or Python's [decimal.Decimal][].
     *
     * @remarks
     *
     *  [BigDecimal]:
     *  https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/math/BigDecimal.html
     *  [decimal.Decimal]: https://docs.python.org/3/library/decimal.html
     */
    amount?: DecimalCreate | undefined;
    /**
     * External identifier supplied by the API caller. Each request must have a unique pairing of client_transfer_id and account.
     */
    clientTransferId: string;
    /**
     * Whether the entire account balance is being withdrawn. This field should either be set to true or left unset if the amount field is provided.
     */
    fullDisbursement?: boolean | undefined;
    /**
     * The name of the program that the ICT withdrawal is associated with.
     */
    program: IctWithdrawalCreateProgramOpen;
    /**
     * A distribution from a retirement account.
     */
    retirementDistribution?: RetirementDistributionCreate | undefined;
    /**
     * The travel rules associated with an ICT withdrawal
     */
    travelRule: IctWithdrawalTravelRuleCreate;
};
/** @internal */
export declare const IctWithdrawalCreateProgram$inboundSchema: z.ZodType<IctWithdrawalCreateProgramOpen, z.ZodTypeDef, unknown>;
/** @internal */
export declare const IctWithdrawalCreateProgram$outboundSchema: z.ZodType<IctWithdrawalCreateProgramOpen, z.ZodTypeDef, IctWithdrawalCreateProgramOpen>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace IctWithdrawalCreateProgram$ {
    /** @deprecated use `IctWithdrawalCreateProgram$inboundSchema` instead. */
    const inboundSchema: z.ZodType<IctWithdrawalCreateProgramOpen, z.ZodTypeDef, unknown>;
    /** @deprecated use `IctWithdrawalCreateProgram$outboundSchema` instead. */
    const outboundSchema: z.ZodType<IctWithdrawalCreateProgramOpen, z.ZodTypeDef, IctWithdrawalCreateProgramOpen>;
}
/** @internal */
export declare const IctWithdrawalCreate$inboundSchema: z.ZodType<IctWithdrawalCreate, z.ZodTypeDef, unknown>;
/** @internal */
export type IctWithdrawalCreate$Outbound = {
    amount?: DecimalCreate$Outbound | undefined;
    client_transfer_id: string;
    full_disbursement?: boolean | undefined;
    program: string;
    retirement_distribution?: RetirementDistributionCreate$Outbound | undefined;
    travel_rule: IctWithdrawalTravelRuleCreate$Outbound;
};
/** @internal */
export declare const IctWithdrawalCreate$outboundSchema: z.ZodType<IctWithdrawalCreate$Outbound, z.ZodTypeDef, IctWithdrawalCreate>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace IctWithdrawalCreate$ {
    /** @deprecated use `IctWithdrawalCreate$inboundSchema` instead. */
    const inboundSchema: z.ZodType<IctWithdrawalCreate, z.ZodTypeDef, unknown>;
    /** @deprecated use `IctWithdrawalCreate$outboundSchema` instead. */
    const outboundSchema: z.ZodType<IctWithdrawalCreate$Outbound, z.ZodTypeDef, IctWithdrawalCreate>;
    /** @deprecated use `IctWithdrawalCreate$Outbound` instead. */
    type Outbound = IctWithdrawalCreate$Outbound;
}
export declare function ictWithdrawalCreateToJSON(ictWithdrawalCreate: IctWithdrawalCreate): string;
export declare function ictWithdrawalCreateFromJSON(jsonString: string): SafeParseResult<IctWithdrawalCreate, SDKValidationError>;
//# sourceMappingURL=ictwithdrawalcreate.d.ts.map