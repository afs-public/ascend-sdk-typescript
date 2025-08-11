import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import { AssetCreate, AssetCreate$Outbound } from "./assetcreate.js";
import { TransferAccountCreate, TransferAccountCreate$Outbound } from "./transferaccountcreate.js";
/**
 * An account transfer which contains the receiving and delivering party information, assets being transferred, NSCC status information, etc.
 */
export type TransferCreate = {
    /**
     * The assets being transferred (Cash, Equities, etc.)
     */
    assets?: Array<AssetCreate> | undefined;
    /**
     * User supplied comment
     */
    comment?: string | undefined;
    /**
     * The delivering/receiving party information
     */
    deliverer: TransferAccountCreate;
    /**
     * An associated NSCC transfer identifier, if applicable
     */
    originalControlNumber?: string | undefined;
};
/** @internal */
export declare const TransferCreate$inboundSchema: z.ZodType<TransferCreate, z.ZodTypeDef, unknown>;
/** @internal */
export type TransferCreate$Outbound = {
    assets?: Array<AssetCreate$Outbound> | undefined;
    comment?: string | undefined;
    deliverer: TransferAccountCreate$Outbound;
    original_control_number?: string | undefined;
};
/** @internal */
export declare const TransferCreate$outboundSchema: z.ZodType<TransferCreate$Outbound, z.ZodTypeDef, TransferCreate>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace TransferCreate$ {
    /** @deprecated use `TransferCreate$inboundSchema` instead. */
    const inboundSchema: z.ZodType<TransferCreate, z.ZodTypeDef, unknown>;
    /** @deprecated use `TransferCreate$outboundSchema` instead. */
    const outboundSchema: z.ZodType<TransferCreate$Outbound, z.ZodTypeDef, TransferCreate>;
    /** @deprecated use `TransferCreate$Outbound` instead. */
    type Outbound = TransferCreate$Outbound;
}
export declare function transferCreateToJSON(transferCreate: TransferCreate): string;
export declare function transferCreateFromJSON(jsonString: string): SafeParseResult<TransferCreate, SDKValidationError>;
//# sourceMappingURL=transfercreate.d.ts.map