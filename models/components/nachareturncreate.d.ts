import * as z from "zod";
import { OpenEnum } from "../../types/enums.js";
/**
 * The cause of the return.
 */
export declare enum NachaReturnCreateCode {
    CodeUnspecified = "CODE_UNSPECIFIED",
    R01 = "R01",
    R02 = "R02",
    R03 = "R03",
    R04 = "R04",
    R05 = "R05",
    R06 = "R06",
    R07 = "R07",
    R08 = "R08",
    R09 = "R09",
    R10 = "R10",
    R11 = "R11",
    R12 = "R12",
    R13 = "R13",
    R14 = "R14",
    R15 = "R15",
    R16 = "R16",
    R17 = "R17",
    R18 = "R18",
    R19 = "R19",
    R20 = "R20",
    R21 = "R21",
    R22 = "R22",
    R23 = "R23",
    R24 = "R24",
    R25 = "R25",
    R26 = "R26",
    R27 = "R27",
    R28 = "R28",
    R29 = "R29",
    R30 = "R30",
    R31 = "R31",
    R32 = "R32",
    R33 = "R33",
    R34 = "R34",
    R35 = "R35",
    R36 = "R36",
    R37 = "R37",
    R38 = "R38",
    R39 = "R39",
    R40 = "R40",
    R41 = "R41",
    R42 = "R42",
    R43 = "R43",
    R44 = "R44",
    R45 = "R45",
    R46 = "R46",
    R47 = "R47",
    R50 = "R50",
    R51 = "R51",
    R52 = "R52",
    R53 = "R53",
    R61 = "R61",
    R67 = "R67",
    R68 = "R68",
    R69 = "R69",
    R70 = "R70",
    R71 = "R71",
    R72 = "R72",
    R73 = "R73",
    R74 = "R74",
    R75 = "R75",
    R76 = "R76",
    R80 = "R80",
    R81 = "R81",
    R82 = "R82",
    R83 = "R83",
    R84 = "R84",
    R85 = "R85"
}
/**
 * The cause of the return.
 */
export type NachaReturnCreateCodeOpen = OpenEnum<typeof NachaReturnCreateCode>;
/**
 * A return on an ACH transfer from the Nacha network.
 */
export type NachaReturnCreate = {
    /**
     * The cause of the return.
     */
    code: NachaReturnCreateCodeOpen;
};
/** @internal */
export declare const NachaReturnCreateCode$inboundSchema: z.ZodType<NachaReturnCreateCodeOpen, z.ZodTypeDef, unknown>;
/** @internal */
export declare const NachaReturnCreateCode$outboundSchema: z.ZodType<NachaReturnCreateCodeOpen, z.ZodTypeDef, NachaReturnCreateCodeOpen>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace NachaReturnCreateCode$ {
    /** @deprecated use `NachaReturnCreateCode$inboundSchema` instead. */
    const inboundSchema: z.ZodType<NachaReturnCreateCodeOpen, z.ZodTypeDef, unknown>;
    /** @deprecated use `NachaReturnCreateCode$outboundSchema` instead. */
    const outboundSchema: z.ZodType<NachaReturnCreateCodeOpen, z.ZodTypeDef, NachaReturnCreateCodeOpen>;
}
/** @internal */
export declare const NachaReturnCreate$inboundSchema: z.ZodType<NachaReturnCreate, z.ZodTypeDef, unknown>;
/** @internal */
export type NachaReturnCreate$Outbound = {
    code: string;
};
/** @internal */
export declare const NachaReturnCreate$outboundSchema: z.ZodType<NachaReturnCreate$Outbound, z.ZodTypeDef, NachaReturnCreate>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace NachaReturnCreate$ {
    /** @deprecated use `NachaReturnCreate$inboundSchema` instead. */
    const inboundSchema: z.ZodType<NachaReturnCreate, z.ZodTypeDef, unknown>;
    /** @deprecated use `NachaReturnCreate$outboundSchema` instead. */
    const outboundSchema: z.ZodType<NachaReturnCreate$Outbound, z.ZodTypeDef, NachaReturnCreate>;
    /** @deprecated use `NachaReturnCreate$Outbound` instead. */
    type Outbound = NachaReturnCreate$Outbound;
}
//# sourceMappingURL=nachareturncreate.d.ts.map