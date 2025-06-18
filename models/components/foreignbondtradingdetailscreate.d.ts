import * as z from "zod";
import { ForeignBondTradingDetailCreate, ForeignBondTradingDetailCreate$Outbound } from "./foreignbondtradingdetailcreate.js";
/**
 * Foreign bond trading detail
 */
export type ForeignBondTradingDetailsCreate = {
    /**
     * Does the account anticipate trading in foreign bonds
     */
    foreignBondTrading: boolean;
    /**
     * The foreign bond trading countries details. If yes, than please provide details
     */
    foreignBondTradingDetail?: Array<ForeignBondTradingDetailCreate> | undefined;
};
/** @internal */
export declare const ForeignBondTradingDetailsCreate$inboundSchema: z.ZodType<ForeignBondTradingDetailsCreate, z.ZodTypeDef, unknown>;
/** @internal */
export type ForeignBondTradingDetailsCreate$Outbound = {
    foreign_bond_trading: boolean;
    foreign_bond_trading_detail?: Array<ForeignBondTradingDetailCreate$Outbound> | undefined;
};
/** @internal */
export declare const ForeignBondTradingDetailsCreate$outboundSchema: z.ZodType<ForeignBondTradingDetailsCreate$Outbound, z.ZodTypeDef, ForeignBondTradingDetailsCreate>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace ForeignBondTradingDetailsCreate$ {
    /** @deprecated use `ForeignBondTradingDetailsCreate$inboundSchema` instead. */
    const inboundSchema: z.ZodType<ForeignBondTradingDetailsCreate, z.ZodTypeDef, unknown>;
    /** @deprecated use `ForeignBondTradingDetailsCreate$outboundSchema` instead. */
    const outboundSchema: z.ZodType<ForeignBondTradingDetailsCreate$Outbound, z.ZodTypeDef, ForeignBondTradingDetailsCreate>;
    /** @deprecated use `ForeignBondTradingDetailsCreate$Outbound` instead. */
    type Outbound = ForeignBondTradingDetailsCreate$Outbound;
}
//# sourceMappingURL=foreignbondtradingdetailscreate.d.ts.map