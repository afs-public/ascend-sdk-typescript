export declare function createLegalNaturalPerson(): Promise<string | undefined>;
export declare function assignLargeTrader(lnp_id: string): Promise<string | undefined>;
export declare function createLegalEntity(): Promise<string | undefined>;
export declare function createAccount(lnp_id: string): Promise<string | undefined>;
export declare function addParty(account_id: string, legalEntityId: string): Promise<string | undefined>;
export declare function replaceParty(account_id: string, lnp_id: string, party_id: string): Promise<string | undefined>;
export declare function createTrustedContact(account_id: string): Promise<string | undefined>;
export declare function createInterestedParty(account_id: string): Promise<string | undefined>;
export declare function createRestrictionCode(account_id: string): Promise<string | undefined>;
export declare function enrollAccount(account_id: string): Promise<string[] | undefined>;
export declare function getEnrollmentToDeactivate(account_id: string): Promise<string | undefined>;
export declare function affirmAgreement(account_id: string, enrollment_ids: string[]): Promise<void>;
//# sourceMappingURL=index.d.ts.map