import * as z from "zod";
import { OpenEnum } from "../../types/enums.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
/**
 * A method of determining the cost basis of an asset that has been sold or disposed of, by identifying which specific lot of the asset was sold and using the cost of that lot to calculate the cost basis; this method is commonly used for tax purposes to determine the amount of reportable capital gains or losses By default, this is set to `COST_BASIS_LOT_DISPOSAL_MIN_TAX_TERM`
 */
export declare enum CostBasisLotDisposalMethod {
    CostBasisLotDisposalMethodUnspecified = "COST_BASIS_LOT_DISPOSAL_METHOD_UNSPECIFIED",
    CostBasisLotDisposalFifo = "COST_BASIS_LOT_DISPOSAL_FIFO",
    CostBasisLotDisposalLifo = "COST_BASIS_LOT_DISPOSAL_LIFO",
    CostBasisLotDisposalHighCost = "COST_BASIS_LOT_DISPOSAL_HIGH_COST",
    CostBasisLotDisposalHighCostLongTerm = "COST_BASIS_LOT_DISPOSAL_HIGH_COST_LONG_TERM",
    CostBasisLotDisposalHighCostShortTerm = "COST_BASIS_LOT_DISPOSAL_HIGH_COST_SHORT_TERM",
    CostBasisLotDisposalLowCost = "COST_BASIS_LOT_DISPOSAL_LOW_COST",
    CostBasisLotDisposalLowCostLongTerm = "COST_BASIS_LOT_DISPOSAL_LOW_COST_LONG_TERM",
    CostBasisLotDisposalLowCostShortTerm = "COST_BASIS_LOT_DISPOSAL_LOW_COST_SHORT_TERM",
    CostBasisLotDisposalMinTaxTerm = "COST_BASIS_LOT_DISPOSAL_MIN_TAX_TERM"
}
/**
 * A method of determining the cost basis of an asset that has been sold or disposed of, by identifying which specific lot of the asset was sold and using the cost of that lot to calculate the cost basis; this method is commonly used for tax purposes to determine the amount of reportable capital gains or losses By default, this is set to `COST_BASIS_LOT_DISPOSAL_MIN_TAX_TERM`
 */
export type CostBasisLotDisposalMethodOpen = OpenEnum<typeof CostBasisLotDisposalMethod>;
/**
 * The account tax profile.
 */
export type AccountTaxProfileCreate = {
    /**
     * A method of determining the cost basis of an asset that has been sold or disposed of, by identifying which specific lot of the asset was sold and using the cost of that lot to calculate the cost basis; this method is commonly used for tax purposes to determine the amount of reportable capital gains or losses By default, this is set to `COST_BASIS_LOT_DISPOSAL_MIN_TAX_TERM`
     */
    costBasisLotDisposalMethod?: CostBasisLotDisposalMethodOpen | undefined;
    /**
     * Indicates if the account is eligible to mark-to-market their securities and commodities holdings; Named after the related section of the IRS tax code
     */
    section475Election?: boolean | undefined;
};
/** @internal */
export declare const CostBasisLotDisposalMethod$inboundSchema: z.ZodType<CostBasisLotDisposalMethodOpen, z.ZodTypeDef, unknown>;
/** @internal */
export declare const CostBasisLotDisposalMethod$outboundSchema: z.ZodType<CostBasisLotDisposalMethodOpen, z.ZodTypeDef, CostBasisLotDisposalMethodOpen>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace CostBasisLotDisposalMethod$ {
    /** @deprecated use `CostBasisLotDisposalMethod$inboundSchema` instead. */
    const inboundSchema: z.ZodType<CostBasisLotDisposalMethodOpen, z.ZodTypeDef, unknown>;
    /** @deprecated use `CostBasisLotDisposalMethod$outboundSchema` instead. */
    const outboundSchema: z.ZodType<CostBasisLotDisposalMethodOpen, z.ZodTypeDef, CostBasisLotDisposalMethodOpen>;
}
/** @internal */
export declare const AccountTaxProfileCreate$inboundSchema: z.ZodType<AccountTaxProfileCreate, z.ZodTypeDef, unknown>;
/** @internal */
export type AccountTaxProfileCreate$Outbound = {
    cost_basis_lot_disposal_method?: string | undefined;
    section_475_election?: boolean | undefined;
};
/** @internal */
export declare const AccountTaxProfileCreate$outboundSchema: z.ZodType<AccountTaxProfileCreate$Outbound, z.ZodTypeDef, AccountTaxProfileCreate>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace AccountTaxProfileCreate$ {
    /** @deprecated use `AccountTaxProfileCreate$inboundSchema` instead. */
    const inboundSchema: z.ZodType<AccountTaxProfileCreate, z.ZodTypeDef, unknown>;
    /** @deprecated use `AccountTaxProfileCreate$outboundSchema` instead. */
    const outboundSchema: z.ZodType<AccountTaxProfileCreate$Outbound, z.ZodTypeDef, AccountTaxProfileCreate>;
    /** @deprecated use `AccountTaxProfileCreate$Outbound` instead. */
    type Outbound = AccountTaxProfileCreate$Outbound;
}
export declare function accountTaxProfileCreateToJSON(accountTaxProfileCreate: AccountTaxProfileCreate): string;
export declare function accountTaxProfileCreateFromJSON(jsonString: string): SafeParseResult<AccountTaxProfileCreate, SDKValidationError>;
//# sourceMappingURL=accounttaxprofilecreate.d.ts.map