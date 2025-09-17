import { ClientSDK, RequestOptions } from "../lib/sdks.js";
import * as components from "../models/components/index.js";
import * as operations from "../models/operations/index.js";
import { PageIterator } from "../types/operations.js";
export declare class AccountManagement extends ClientSDK {
    /**
     * List Accounts
     *
     * @remarks
     * Gets a list of Accounts based on search criteria.
     */
    listAccounts(request: operations.AccountsListAccountsRequest, options?: RequestOptions): Promise<PageIterator<operations.AccountsListAccountsResponse, {
        cursor: string;
    }>>;
    /**
     * Update Account
     *
     * @remarks
     * UPDATE Updates an Account.
     */
    updateAccount(accountRequestUpdate: components.AccountRequestUpdate, accountId: string, updateMask?: string | undefined, options?: RequestOptions): Promise<operations.AccountsUpdateAccountResponse>;
    /**
     * Add Party
     *
     * @remarks
     * Adds a party to an account
     */
    addParty(addPartyRequestCreate: components.AddPartyRequestCreate, accountId: string, options?: RequestOptions): Promise<operations.AccountsAddPartyResponse>;
    /**
     * Update Party
     *
     * @remarks
     * Updates a Party.
     */
    updateParty(partyRequestUpdate: components.PartyRequestUpdate, accountId: string, partyId: string, updateMask?: string | undefined, options?: RequestOptions): Promise<operations.AccountsUpdatePartyResponse>;
    /**
     * Replace Party
     *
     * @remarks
     * Replaces a party on an account
     */
    replaceParty(replacePartyRequestCreate: components.ReplacePartyRequestCreate, accountId: string, partyId: string, options?: RequestOptions): Promise<operations.AccountsReplacePartyResponse>;
    /**
     * Remove Party
     *
     * @remarks
     * Remove a party from an account
     */
    removeParty(removePartyRequestCreate: components.RemovePartyRequestCreate, accountId: string, partyId: string, options?: RequestOptions): Promise<operations.AccountsRemovePartyResponse>;
    /**
     * Close Account
     *
     * @remarks
     * CUSTOM Places an ACCT_MAINT_CLOSURE_PREP_BY_CORRESPONDENT restriction on the Account ready for closure.
     */
    closeAccount(closeAccountRequestCreate: components.CloseAccountRequestCreate, accountId: string, options?: RequestOptions): Promise<operations.AccountsCloseAccountResponse>;
    /**
     * Create Trusted Contact
     *
     * @remarks
     * Creates a new Trusted Contact for an account.
     */
    createTrustedContact(trustedContactCreate: components.TrustedContactCreate, accountId: string, options?: RequestOptions): Promise<operations.AccountsCreateTrustedContactResponse>;
    /**
     * Update Trusted Contact
     *
     * @remarks
     * Updates a Trusted Contact.
     */
    updateTrustedContact(trustedContactUpdate: components.TrustedContactUpdate, accountId: string, trustedContactId: string, updateMask?: string | undefined, options?: RequestOptions): Promise<operations.AccountsUpdateTrustedContactResponse>;
    /**
     * Delete Trusted Contact
     *
     * @remarks
     * DELETE Deletes a Trusted Contact for an Account.
     */
    deleteTrustedContact(accountId: string, trustedContactId: string, options?: RequestOptions): Promise<operations.AccountsDeleteTrustedContactResponse>;
    /**
     * Create Interested Party
     *
     * @remarks
     * Creates an Interested Party record for an Account.
     */
    createInterestedParty(interestedPartyCreate: components.InterestedPartyCreate, accountId: string, options?: RequestOptions): Promise<operations.AccountsCreateInterestedPartyResponse>;
    /**
     * Update Interested Party
     *
     * @remarks
     * Updates an Interested Party.
     */
    updateInterestedParty(interestedPartyUpdate: components.InterestedPartyUpdate, accountId: string, interestedPartyId: string, updateMask?: string | undefined, options?: RequestOptions): Promise<operations.AccountsUpdateInterestedPartyResponse>;
    /**
     * Delete Interested Party
     *
     * @remarks
     * Deletes an Interested Party associated from an Account.
     */
    deleteInterestedParty(accountId: string, interestedPartyId: string, options?: RequestOptions): Promise<operations.AccountsDeleteInterestedPartyResponse>;
    /**
     * List Available Restrictions
     *
     * @remarks
     * Gets a list of possible Restrictions that can be placed on an Account based on Enrollments.
     */
    listAvailableRestrictions(accountId: string, options?: RequestOptions): Promise<operations.AccountsListAvailableRestrictionsResponse>;
    /**
     * Create Restriction
     *
     * @remarks
     * Applies a Restriction to an account that suspends one or more Entitlements.
     */
    createRestriction(restrictionCreate: components.RestrictionCreate, accountId: string, options?: RequestOptions): Promise<operations.AccountsCreateRestrictionResponse>;
    /**
     * End Restriction
     *
     * @remarks
     * Ends a Restriction on an Account.
     */
    endRestriction(endRestrictionRequestCreate: components.EndRestrictionRequestCreate, accountId: string, restrictionId: string, options?: RequestOptions): Promise<operations.AccountsEndRestrictionResponse>;
}
//# sourceMappingURL=accountmanagement.d.ts.map