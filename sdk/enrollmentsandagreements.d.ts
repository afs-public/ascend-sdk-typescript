import { ClientSDK, RequestOptions } from "../lib/sdks.js";
import * as components from "../models/components/index.js";
import * as operations from "../models/operations/index.js";
import { PageIterator } from "../types/operations.js";
export declare class EnrollmentsAndAgreements extends ClientSDK {
    /**
     * Enroll Account
     *
     * @remarks
     * Adds an Enrollment to an Account.
     */
    enrollAccount(enrollAccountRequestCreate: components.EnrollAccountRequestCreate, accountId: string, options?: RequestOptions): Promise<operations.AccountsEnrollAccountResponse>;
    /**
     * List Available Enrollments
     *
     * @remarks
     * Get a list of Enrollments available for an Account.
     */
    listAvailableEnrollments(accountId: string, pageSize?: number | undefined, pageToken?: string | undefined, filter?: string | undefined, options?: RequestOptions): Promise<operations.AccountsListAvailableEnrollmentsResponse>;
    /**
     * List Available Enrollments (by Account Group)
     *
     * @remarks
     * Get a list of Enrollments available for an Account.
     */
    accountsListAvailableEnrollmentsByAccountGroup(accountGroupId: string, pageSize?: number | undefined, pageToken?: string | undefined, filter?: string | undefined, options?: RequestOptions): Promise<operations.AccountsListAvailableEnrollments1Response>;
    /**
     * Deactivate Enrollment
     *
     * @remarks
     * Deactivates an Account Enrollment.
     */
    deactivateEnrollment(deactivateEnrollmentRequestCreate: components.DeactivateEnrollmentRequestCreate, accountId: string, options?: RequestOptions): Promise<operations.AccountsDeactivateEnrollmentResponse>;
    /**
     * List Account Enrollments
     *
     * @remarks
     * Gets a list of Enrollments for an Account.
     */
    listEnrollments(accountId: string, pageSize?: number | undefined, pageToken?: string | undefined, options?: RequestOptions): Promise<PageIterator<operations.AccountsListEnrollmentsResponse, {
        cursor: string;
    }>>;
    /**
     * Affirm Agreements
     *
     * @remarks
     * Affirm Agreements for an Account.
     */
    affirmAgreements(affirmAgreementsRequestCreate: components.AffirmAgreementsRequestCreate, accountId: string, options?: RequestOptions): Promise<operations.AccountsAffirmAgreementsResponse>;
    /**
     * List Account Agreements
     *
     * @remarks
     * Gets a list of Agreements on an Account.
     */
    listAgreements(accountId: string, pageSize?: number | undefined, pageToken?: string | undefined, options?: RequestOptions): Promise<PageIterator<operations.AccountsListAgreementsResponse, {
        cursor: string;
    }>>;
    /**
     * List Account Entitlements
     *
     * @remarks
     * Gets a list of Entitlements for an Account.
     */
    listEntitlements(accountId: string, pageSize?: number | undefined, pageToken?: string | undefined, options?: RequestOptions): Promise<PageIterator<operations.AccountsListEntitlementsResponse, {
        cursor: string;
    }>>;
}
//# sourceMappingURL=enrollmentsandagreements.d.ts.map