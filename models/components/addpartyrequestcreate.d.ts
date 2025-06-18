import * as z from "zod";
import { PartyRequestCreate, PartyRequestCreate$Outbound } from "./partyrequestcreate.js";
/**
 * A request to add a party to an account
 */
export type AddPartyRequestCreate = {
    /**
     * A list of Party IDs on the account that have approved the addition of a party. The required signers are defined by the Registration Type of the Account. e.g. Individual Registrations require one signer, Joint Registrations require all Joint Owners to sign
     */
    authorizedByPartyIds?: Array<string> | undefined;
    /**
     * The parent, which is the account to which the party is being added Format: accounts/{account}/parties
     */
    parent: string;
    /**
     * A single record representing an owner or manager of an Account. Contains fully populated Party Identity object.
     */
    party: PartyRequestCreate;
};
/** @internal */
export declare const AddPartyRequestCreate$inboundSchema: z.ZodType<AddPartyRequestCreate, z.ZodTypeDef, unknown>;
/** @internal */
export type AddPartyRequestCreate$Outbound = {
    authorized_by_party_ids?: Array<string> | undefined;
    parent: string;
    party: PartyRequestCreate$Outbound;
};
/** @internal */
export declare const AddPartyRequestCreate$outboundSchema: z.ZodType<AddPartyRequestCreate$Outbound, z.ZodTypeDef, AddPartyRequestCreate>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace AddPartyRequestCreate$ {
    /** @deprecated use `AddPartyRequestCreate$inboundSchema` instead. */
    const inboundSchema: z.ZodType<AddPartyRequestCreate, z.ZodTypeDef, unknown>;
    /** @deprecated use `AddPartyRequestCreate$outboundSchema` instead. */
    const outboundSchema: z.ZodType<AddPartyRequestCreate$Outbound, z.ZodTypeDef, AddPartyRequestCreate>;
    /** @deprecated use `AddPartyRequestCreate$Outbound` instead. */
    type Outbound = AddPartyRequestCreate$Outbound;
}
//# sourceMappingURL=addpartyrequestcreate.d.ts.map