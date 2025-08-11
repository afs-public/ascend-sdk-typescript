import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import { DecimalCreate, DecimalCreate$Outbound } from "./decimalcreate.js";
/**
 * A representation of a tax withholding.
 */
export type RetirementDistributionTaxWithholdingCreate = {
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
     * A representation of a decimal value, such as 2.5. Clients may convert values into language-native decimal formats, such as Java's [BigDecimal][] or Python's [decimal.Decimal][].
     *
     * @remarks
     *
     *  [BigDecimal]:
     *  https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/math/BigDecimal.html
     *  [decimal.Decimal]: https://docs.python.org/3/library/decimal.html
     */
    percentage?: DecimalCreate | undefined;
};
/** @internal */
export declare const RetirementDistributionTaxWithholdingCreate$inboundSchema: z.ZodType<RetirementDistributionTaxWithholdingCreate, z.ZodTypeDef, unknown>;
/** @internal */
export type RetirementDistributionTaxWithholdingCreate$Outbound = {
    amount?: DecimalCreate$Outbound | undefined;
    percentage?: DecimalCreate$Outbound | undefined;
};
/** @internal */
export declare const RetirementDistributionTaxWithholdingCreate$outboundSchema: z.ZodType<RetirementDistributionTaxWithholdingCreate$Outbound, z.ZodTypeDef, RetirementDistributionTaxWithholdingCreate>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace RetirementDistributionTaxWithholdingCreate$ {
    /** @deprecated use `RetirementDistributionTaxWithholdingCreate$inboundSchema` instead. */
    const inboundSchema: z.ZodType<RetirementDistributionTaxWithholdingCreate, z.ZodTypeDef, unknown>;
    /** @deprecated use `RetirementDistributionTaxWithholdingCreate$outboundSchema` instead. */
    const outboundSchema: z.ZodType<RetirementDistributionTaxWithholdingCreate$Outbound, z.ZodTypeDef, RetirementDistributionTaxWithholdingCreate>;
    /** @deprecated use `RetirementDistributionTaxWithholdingCreate$Outbound` instead. */
    type Outbound = RetirementDistributionTaxWithholdingCreate$Outbound;
}
export declare function retirementDistributionTaxWithholdingCreateToJSON(retirementDistributionTaxWithholdingCreate: RetirementDistributionTaxWithholdingCreate): string;
export declare function retirementDistributionTaxWithholdingCreateFromJSON(jsonString: string): SafeParseResult<RetirementDistributionTaxWithholdingCreate, SDKValidationError>;
//# sourceMappingURL=retirementdistributiontaxwithholdingcreate.d.ts.map