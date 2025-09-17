import { ClientSDK, RequestOptions } from "../lib/sdks.js";
import * as components from "../models/components/index.js";
import * as operations from "../models/operations/index.js";
import { PageIterator } from "../types/operations.js";
export declare class BankRelationships extends ClientSDK {
    /**
     * Create Bank Relationship
     *
     * @remarks
     * Creates a bank relationship.
     */
    createBankRelationship(bankRelationshipCreate: components.BankRelationshipCreate, accountId: string, options?: RequestOptions): Promise<operations.BankRelationshipsCreateBankRelationshipResponse>;
    /**
     * List Bank Relationships
     *
     * @remarks
     * Lists bank relationships for an account.
     */
    listBankRelationships(accountId: string, pageSize?: number | undefined, pageToken?: string | undefined, state?: operations.State | undefined, options?: RequestOptions): Promise<PageIterator<operations.BankRelationshipsListBankRelationshipsResponse, {
        cursor: string;
    }>>;
    /**
     * Get Bank Relationship
     *
     * @remarks
     * Gets an existing bank relationship.
     */
    getBankRelationship(accountId: string, bankRelationshipId: string, options?: RequestOptions): Promise<operations.BankRelationshipsGetBankRelationshipResponse>;
    /**
     * Update Bank Relationship
     *
     * @remarks
     * Updates an existing bank relationship.
     */
    updateBankRelationship(bankRelationshipUpdate: components.BankRelationshipUpdate, accountId: string, bankRelationshipId: string, updateMask?: string | undefined, options?: RequestOptions): Promise<operations.BankRelationshipsUpdateBankRelationshipResponse>;
    /**
     * Cancel Bank Relationship
     *
     * @remarks
     * Cancels an existing bank relationship.
     */
    cancelBankRelationship(cancelBankRelationshipRequestCreate: components.CancelBankRelationshipRequestCreate, accountId: string, bankRelationshipId: string, options?: RequestOptions): Promise<operations.BankRelationshipsCancelBankRelationshipResponse>;
    /**
     * Verify Micro Deposits
     *
     * @remarks
     * Verifies a pending bank relationship with the `MICRO_DEPOSIT` verification method. Successful verification of the micro deposit amounts will result in the relationship moving to the `APPROVED` state. The micro deposits will be taken back from the bank account.
     */
    verifyMicroDeposits(verifyMicroDepositsRequestCreate: components.VerifyMicroDepositsRequestCreate, accountId: string, bankRelationshipId: string, options?: RequestOptions): Promise<operations.BankRelationshipsVerifyMicroDepositsResponse>;
    /**
     * Reissue Micro Deposits
     *
     * @remarks
     * Reissues micro deposits after micro deposit verification has failed. The user should have received a message that new micro deposits should be reissued.
     */
    reissueMicroDeposits(reissueMicroDepositsRequestCreate: components.ReissueMicroDepositsRequestCreate, accountId: string, bankRelationshipId: string, options?: RequestOptions): Promise<operations.BankRelationshipsReissueMicroDepositsResponse>;
    /**
     * Reuse Bank Relationship
     *
     * @remarks
     * Reuses an existing bank relationship for a new account. The source bank relationship must be approved. The new account must be related to the parent account of the `source_bank_relationship`. The new relationship will be created with the `USE_EXISTING` verification method in place of the source bank relationship's verification method.
     */
    reuseBankRelationship(reuseBankRelationshipRequestCreate: components.ReuseBankRelationshipRequestCreate, accountId: string, options?: RequestOptions): Promise<operations.BankRelationshipsReuseBankRelationshipResponse>;
}
//# sourceMappingURL=bankrelationships.d.ts.map