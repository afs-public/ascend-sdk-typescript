import { ClientSDK, RequestOptions } from "../lib/sdks.js";
import * as components from "../models/components/index.js";
import * as operations from "../models/operations/index.js";
export declare class PersonManagement extends ClientSDK {
    /**
     * Create Legal Natural Person
     *
     * @remarks
     * Creates a Legal Natural Person.
     */
    createLegalNaturalPerson(request: components.LegalNaturalPersonCreate, options?: RequestOptions): Promise<operations.AccountsCreateLegalNaturalPersonResponse>;
    /**
     * List Legal Natural Persons
     *
     * @remarks
     * Gets a list of Legal Natural Person records based on search criteria.
     */
    listLegalNaturalPersons(pageSize?: number | undefined, pageToken?: string | undefined, orderBy?: string | undefined, filter?: string | undefined, options?: RequestOptions): Promise<operations.AccountsListLegalNaturalPersonsResponse>;
    /**
     * Get Legal Natural Persons
     *
     * @remarks
     * Get Legal Natural Person
     */
    getLegalNaturalPerson(legalNaturalPersonId: string, options?: RequestOptions): Promise<operations.AccountsGetLegalNaturalPersonResponse>;
    /**
     * Update Legal Natural Person
     *
     * @remarks
     * Updates a Legal Natural Person.
     */
    updateLegalNaturalPerson(legalNaturalPersonUpdate: components.LegalNaturalPersonUpdate, legalNaturalPersonId: string, updateMask?: string | undefined, options?: RequestOptions): Promise<operations.AccountsUpdateLegalNaturalPersonResponse>;
    /**
     * Assign Large Trader
     *
     * @remarks
     * Assigns a person's Large Trader ID.
     */
    assignLargeTrader(assignLargeTraderRequestCreate: components.AssignLargeTraderRequestCreate, legalNaturalPersonId: string, options?: RequestOptions): Promise<operations.AccountsAssignLargeTraderResponse>;
    /**
     * End Large Trader
     *
     * @remarks
     * Removes a person's Large Trader ID.
     */
    endLargeTraderLegalNaturalPerson(endLargeTraderRequestCreate: components.EndLargeTraderRequestCreate, legalNaturalPersonId: string, options?: RequestOptions): Promise<operations.AccountsEndLargeTraderLegalNaturalPersonResponse>;
    /**
     * Create Legal Entity
     *
     * @remarks
     * Creates a Legal Entity.
     */
    createLegalEntity(request: components.LegalEntityCreate, options?: RequestOptions): Promise<operations.AccountsCreateLegalEntityResponse>;
    /**
     * List Legal Entity
     *
     * @remarks
     * Gets a list of Legal Entity records based on search criteria.
     */
    listLegalEntities(pageSize?: number | undefined, pageToken?: string | undefined, orderBy?: string | undefined, filter?: string | undefined, options?: RequestOptions): Promise<operations.AccountsListLegalEntitiesResponse>;
    /**
     * Get Legal Entity
     *
     * @remarks
     * Get Legal Entity
     */
    getLegalEntity(legalEntityId: string, options?: RequestOptions): Promise<operations.AccountsGetLegalEntityResponse>;
    /**
     * Update Legal Entity
     *
     * @remarks
     * Updates a Legal Entity.
     */
    updateLegalEntity(legalEntityUpdate: components.LegalEntityUpdate, legalEntityId: string, updateMask?: string | undefined, options?: RequestOptions): Promise<operations.AccountsUpdateLegalEntityResponse>;
    /**
     * Assign Entity Large Trader
     *
     * @remarks
     * Assigns a person's Large Trader ID.
     */
    assignLargeTraderLegalEntity(assignLargeTraderRequestCreate: components.AssignLargeTraderRequestCreate, legalEntityId: string, options?: RequestOptions): Promise<operations.AccountsAssignLargeTraderLegalEntityResponse>;
    /**
     * End Entity Large Trader
     *
     * @remarks
     * Removes a person's Large Trader ID.
     */
    endLargeTrader(endLargeTraderRequestCreate: components.EndLargeTraderRequestCreate, legalEntityId: string, options?: RequestOptions): Promise<operations.AccountsEndLargeTrader1Response>;
}
//# sourceMappingURL=personmanagement.d.ts.map