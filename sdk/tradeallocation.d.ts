import { ClientSDK, RequestOptions } from "../lib/sdks.js";
import * as components from "../models/components/index.js";
import * as operations from "../models/operations/index.js";
export declare class TradeAllocation extends ClientSDK {
    /**
     * Create Trade Allocation
     *
     * @remarks
     * Creates a new trade allocation. These are used to allocate or distribute positions between Apex accounts.
     *
     *  Upon success, returns the created trade allocation and its enriched details.
     */
    createTradeAllocation(tradeAllocationCreate: components.TradeAllocationCreate, accountId: string, requestId?: string | undefined, options?: RequestOptions): Promise<operations.BookingCreateTradeAllocationResponse>;
    /**
     * Get Trade Allocation
     *
     * @remarks
     * Retrieves a trade allocation and its details.
     *
     *  Upon successful submission, returns the trade allocation details.
     */
    getTradeAllocation(accountId: string, tradeAllocationId: string, options?: RequestOptions): Promise<operations.BookingGetTradeAllocationResponse>;
    /**
     * Cancel Trade Allocation
     *
     * @remarks
     * Cancel a trade allocation using the original trade_allocation_id.
     *
     *  Upon successful submission, returns an empty response. CancelTradeAllocation will either cancel everything, or nothing at all if a failure occurs.
     */
    cancelTradeAllocation(cancelTradeAllocationRequestCreate: components.CancelTradeAllocationRequestCreate, accountId: string, tradeAllocationId: string, options?: RequestOptions): Promise<operations.BookingCancelTradeAllocationResponse>;
    /**
     * Rebook Trade Allocation
     *
     * @remarks
     * Rebook a trade allocation by the original trade_allocation_id. The allocation is rebooked by canceling the original allocation and creating a new one with the provided details.
     *
     *  Upon successful submission, returns both the original and new allocation, as separate resources.
     */
    rebookTradeAllocation(rebookTradeAllocationRequestCreate: components.RebookTradeAllocationRequestCreate, accountId: string, tradeAllocationId: string, options?: RequestOptions): Promise<operations.BookingRebookTradeAllocationResponse>;
}
//# sourceMappingURL=tradeallocation.d.ts.map