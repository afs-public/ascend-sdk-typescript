import { ClientSDK, RequestOptions } from "../lib/sdks.js";
import * as components from "../models/components/index.js";
import * as operations from "../models/operations/index.js";
export declare class Journals extends ClientSDK {
    /**
     * Retrieve Cash Journal Constraints
     *
     * @remarks
     * Retrieves retirement contribution and distribution constraints for a cash journal transfer
     */
    retrieveCashJournalConstraints(request: components.RetrieveCashJournalConstraintsRequestCreate, options?: RequestOptions): Promise<operations.RetirementConstraintsRetrieveCashJournalConstraintsResponse>;
    /**
     * Create Cash Journal
     *
     * @remarks
     * Creates a cash journal
     */
    createCashJournal(request: components.CashJournalCreate, options?: RequestOptions): Promise<operations.CashJournalsCreateCashJournalResponse>;
    /**
     * Get Cash Journal
     *
     * @remarks
     * Gets an existing cash journal
     */
    getCashJournal(cashJournalId: string, options?: RequestOptions): Promise<operations.CashJournalsGetCashJournalResponse>;
    /**
     * Cancel Cash Journal
     *
     * @remarks
     * Cancels an existing cash journal
     */
    cancelCashJournal(cancelCashJournalRequestCreate: components.CancelCashJournalRequestCreate, cashJournalId: string, options?: RequestOptions): Promise<operations.CashJournalsCancelCashJournalResponse>;
    /**
     * Retrieve Cash Journal Party
     *
     * @remarks
     * Determines whether a potential cash journal will be considered first party or third party given a source and destination account
     */
    checkPartyType(request: components.CheckPartyTypeRequestCreate, options?: RequestOptions): Promise<operations.CashJournalsCheckPartyTypeResponse>;
}
//# sourceMappingURL=journals.d.ts.map