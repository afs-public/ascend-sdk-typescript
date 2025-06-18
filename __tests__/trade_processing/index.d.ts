export declare const withdrawal_account_id = "01JHGTEPC6ZTAHCFRH2MD3VJJT";
export declare const deceased_account_id = "01JHK07CRQ9X8P5XE9JWG4PFSP";
export declare function createBooking(account_id: string): Promise<[string | undefined, string | undefined]>;
export declare function createExecution(account_id: string, trade_id: string): Promise<string | undefined>;
export declare function createTradeAllocation(account_id: string): Promise<string | undefined>;
//# sourceMappingURL=index.d.ts.map