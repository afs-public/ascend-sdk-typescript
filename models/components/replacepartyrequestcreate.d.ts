import * as z from "zod";
import { PartyRequestCreate, PartyRequestCreate$Outbound } from "./partyrequestcreate.js";
/**
 * A request to replace a party on an account
 */
export type ReplacePartyRequestCreate = {
    /**
     * A list of Party IDs on the account that have approved the replacing of a party. The required signers are defined by the Registration Type of the Account. e.g. Individual Registrations require one signer, Joint Registrations require all Joint Owners to sign
     */
    authorizedByPartyIds?: Array<string> | undefined;
    /**
     * The ID of the party to replace Format: accounts/{account}/parties/{party}
     */
    name: string;
    /**
     * A single record representing an owner or manager of an Account. Contains fully populated Party Identity object.
     */
    party: PartyRequestCreate;
};
/** @internal */
export declare const ReplacePartyRequestCreate$inboundSchema: z.ZodType<ReplacePartyRequestCreate, z.ZodTypeDef, unknown>;
/** @internal */
export type ReplacePartyRequestCreate$Outbound = {
    authorized_by_party_ids?: Array<string> | undefined;
    name: string;
    party: PartyRequestCreate$Outbound;
};
/** @internal */
export declare const ReplacePartyRequestCreate$outboundSchema: z.ZodType<ReplacePartyRequestCreate$Outbound, z.ZodTypeDef, ReplacePartyRequestCreate>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace ReplacePartyRequestCreate$ {
    /** @deprecated use `ReplacePartyRequestCreate$inboundSchema` instead. */
    const inboundSchema: z.ZodType<ReplacePartyRequestCreate, z.ZodTypeDef, unknown>;
    /** @deprecated use `ReplacePartyRequestCreate$outboundSchema` instead. */
    const outboundSchema: z.ZodType<ReplacePartyRequestCreate$Outbound, z.ZodTypeDef, ReplacePartyRequestCreate>;
    /** @deprecated use `ReplacePartyRequestCreate$Outbound` instead. */
    type Outbound = ReplacePartyRequestCreate$Outbound;
}
//# sourceMappingURL=replacepartyrequestcreate.d.ts.map