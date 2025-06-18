import * as z from "zod";
import { Account, Account$Outbound } from "./account.js";
/**
 * The response to list Accounts.
 */
export type ListAccountsResponse = {
    /**
     * The list of available accounts
     */
    accounts?: Array<Account> | undefined;
    /**
     * A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages.
     */
    nextPageToken?: string | undefined;
    /**
     * The total number of accounts in the response. This is an estimate and may be more than the number of accounts in this response if the user is not authorized to view all accounts.
     */
    totalSize?: string | undefined;
};
/** @internal */
export declare const ListAccountsResponse$inboundSchema: z.ZodType<ListAccountsResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type ListAccountsResponse$Outbound = {
    accounts?: Array<Account$Outbound> | undefined;
    next_page_token?: string | undefined;
    total_size?: string | undefined;
};
/** @internal */
export declare const ListAccountsResponse$outboundSchema: z.ZodType<ListAccountsResponse$Outbound, z.ZodTypeDef, ListAccountsResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace ListAccountsResponse$ {
    /** @deprecated use `ListAccountsResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<ListAccountsResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `ListAccountsResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<ListAccountsResponse$Outbound, z.ZodTypeDef, ListAccountsResponse>;
    /** @deprecated use `ListAccountsResponse$Outbound` instead. */
    type Outbound = ListAccountsResponse$Outbound;
}
//# sourceMappingURL=listaccountsresponse.d.ts.map