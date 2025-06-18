import * as z from "zod";
/**
 * A request to remove a party from an account
 */
export type RemovePartyRequestCreate = {
    /**
     * A list of Party IDs on the account that have approved the removal of a party. The required signers are defined by the Registration Type of the Account. e.g. Individual Registrations require one signer, Joint Registrations require all Joint Owners to sign
     */
    authorizedByPartyIds?: Array<string> | undefined;
    /**
     * The ID of the party to remove Format: accounts/{account}/parties/{party}
     */
    name: string;
};
/** @internal */
export declare const RemovePartyRequestCreate$inboundSchema: z.ZodType<RemovePartyRequestCreate, z.ZodTypeDef, unknown>;
/** @internal */
export type RemovePartyRequestCreate$Outbound = {
    authorized_by_party_ids?: Array<string> | undefined;
    name: string;
};
/** @internal */
export declare const RemovePartyRequestCreate$outboundSchema: z.ZodType<RemovePartyRequestCreate$Outbound, z.ZodTypeDef, RemovePartyRequestCreate>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace RemovePartyRequestCreate$ {
    /** @deprecated use `RemovePartyRequestCreate$inboundSchema` instead. */
    const inboundSchema: z.ZodType<RemovePartyRequestCreate, z.ZodTypeDef, unknown>;
    /** @deprecated use `RemovePartyRequestCreate$outboundSchema` instead. */
    const outboundSchema: z.ZodType<RemovePartyRequestCreate$Outbound, z.ZodTypeDef, RemovePartyRequestCreate>;
    /** @deprecated use `RemovePartyRequestCreate$Outbound` instead. */
    type Outbound = RemovePartyRequestCreate$Outbound;
}
//# sourceMappingURL=removepartyrequestcreate.d.ts.map