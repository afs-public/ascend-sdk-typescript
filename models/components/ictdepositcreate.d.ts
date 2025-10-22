import * as z from "zod";
import { OpenEnum } from "../../types/enums.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import { DecimalCreate, DecimalCreate$Outbound } from "./decimalcreate.js";
import { IctDepositTravelRuleCreate, IctDepositTravelRuleCreate$Outbound } from "./ictdeposittravelrulecreate.js";
import { RetirementContributionCreate, RetirementContributionCreate$Outbound } from "./retirementcontributioncreate.js";
/**
 * The name of the program the ICT deposit is associated with
 */
export declare enum Program {
    IctProgramUnspecified = "ICT_PROGRAM_UNSPECIFIED",
    BrokerPartner = "BROKER_PARTNER",
    DepositOnly = "DEPOSIT_ONLY",
    BankingPartner = "BANKING_PARTNER",
    MoneyTransmitter = "MONEY_TRANSMITTER",
    WithdrawalOnly = "WITHDRAWAL_ONLY",
    DigitalPartner = "DIGITAL_PARTNER"
}
/**
 * The name of the program the ICT deposit is associated with
 */
export type ProgramOpen = OpenEnum<typeof Program>;
/**
 * An Instant Cash Transfer. Funds are moved from a configured Firm account to a customer's brokerage account.
 */
export type IctDepositCreate = {
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
     * External identifier supplied by the API caller. Each request must have a unique pairing of client_transfer_id and account.
     */
    clientTransferId: string;
    /**
     * The name of the program the ICT deposit is associated with
     */
    program: ProgramOpen;
    /**
     * A contribution to a retirement account.
     */
    retirementContribution?: RetirementContributionCreate | undefined;
    /**
     * The travel rules associated with an ICT deposit
     */
    travelRule: IctDepositTravelRuleCreate;
};
/** @internal */
export declare const Program$inboundSchema: z.ZodType<ProgramOpen, z.ZodTypeDef, unknown>;
/** @internal */
export declare const Program$outboundSchema: z.ZodType<ProgramOpen, z.ZodTypeDef, ProgramOpen>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace Program$ {
    /** @deprecated use `Program$inboundSchema` instead. */
    const inboundSchema: z.ZodType<ProgramOpen, z.ZodTypeDef, unknown>;
    /** @deprecated use `Program$outboundSchema` instead. */
    const outboundSchema: z.ZodType<ProgramOpen, z.ZodTypeDef, ProgramOpen>;
}
/** @internal */
export declare const IctDepositCreate$inboundSchema: z.ZodType<IctDepositCreate, z.ZodTypeDef, unknown>;
/** @internal */
export type IctDepositCreate$Outbound = {
    amount: DecimalCreate$Outbound;
    client_transfer_id: string;
    program: string;
    retirement_contribution?: RetirementContributionCreate$Outbound | undefined;
    travel_rule: IctDepositTravelRuleCreate$Outbound;
};
/** @internal */
export declare const IctDepositCreate$outboundSchema: z.ZodType<IctDepositCreate$Outbound, z.ZodTypeDef, IctDepositCreate>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace IctDepositCreate$ {
    /** @deprecated use `IctDepositCreate$inboundSchema` instead. */
    const inboundSchema: z.ZodType<IctDepositCreate, z.ZodTypeDef, unknown>;
    /** @deprecated use `IctDepositCreate$outboundSchema` instead. */
    const outboundSchema: z.ZodType<IctDepositCreate$Outbound, z.ZodTypeDef, IctDepositCreate>;
    /** @deprecated use `IctDepositCreate$Outbound` instead. */
    type Outbound = IctDepositCreate$Outbound;
}
export declare function ictDepositCreateToJSON(ictDepositCreate: IctDepositCreate): string;
export declare function ictDepositCreateFromJSON(jsonString: string): SafeParseResult<IctDepositCreate, SDKValidationError>;
//# sourceMappingURL=ictdepositcreate.d.ts.map