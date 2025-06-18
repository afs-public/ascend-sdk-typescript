import { ClientSDK, RequestOptions } from "../lib/sdks.js";
import * as components from "../models/components/index.js";
import * as operations from "../models/operations/index.js";
export declare class TradeBooking extends ClientSDK {
    /**
     * Create Trade
     *
     * @remarks
     * Creates a trade with one or more executions. Combination of (account_id, client_order_id, and the process_date (determined by Booking service)) determines the uniqueness of the trade.
     *
     *  Upon successful submission, returns the created trade and its details including Booking service enriched details.
     */
    createTrade(tradeCreate: components.TradeCreate, accountId: string, options?: RequestOptions): Promise<operations.BookingCreateTradeResponse>;
    /**
     * Get Trade
     *
     * @remarks
     * Gets a trade and all executions by trade_id.
     *
     *  Upon successful submission, returns the trade details and all the execution by trade_id.
     */
    getTrade(accountId: string, tradeId: string, options?: RequestOptions): Promise<operations.BookingGetTradeResponse>;
    /**
     * Complete Trade
     *
     * @remarks
     * Complete a Trade by closing and generating any fees and withholdings if necessary. Once this endpoint returns an OK, the combination of details that generated the Trade (account_id, client_order_id, and the process_date) cannot be reused.
     *
     *  Upon successful submission, returns completed trade details and all the executions. Trades that are left open will be automatically closed nightly before Ledger's EOD.
     */
    completeTrade(completeTradeRequestCreate: components.CompleteTradeRequestCreate, accountId: string, tradeId: string, options?: RequestOptions): Promise<operations.BookingCompleteTradeResponse>;
    /**
     * Cancel Trade
     *
     * @remarks
     * Cancel a trade and all the executions using the original trade_id. CancelTrade will either cancel everything, or nothing at all if a failure occurs.
     *
     *  Upon successful submission, returns an empty response.
     */
    cancelTrade(cancelTradeRequestCreate: components.CancelTradeRequestCreate, accountId: string, tradeId: string, options?: RequestOptions): Promise<operations.BookingCancelTradeResponse>;
    /**
     * Rebook Trade
     *
     * @remarks
     * Rebook a trade by the original trade_id. The entire original trade's executions are rebooked using the executions provided in the request. If applicable, fees and backup withholdings will be re-calculated.
     *
     *  Upon successful submission, returns the rebooked trade details and all the executions.
     */
    rebookTrade(rebookTradeRequestCreate: components.RebookTradeRequestCreate, accountId: string, tradeId: string, options?: RequestOptions): Promise<operations.BookingRebookTradeResponse>;
    /**
     * Create Execution
     *
     * @remarks
     * Create a new execution under an existing trade that is open.
     *
     *  Upon successful submission, returns the created execution and its details.
     */
    createExecution(executionCreate: components.ExecutionCreate, accountId: string, tradeId: string, options?: RequestOptions): Promise<operations.BookingCreateExecutionResponse>;
    /**
     * Get Execution
     *
     * @remarks
     * Gets an execution by execution_id.
     *
     *  Upon successful submission, returns the execution details by execution_id.
     */
    getExecution(accountId: string, tradeId: string, executionId: string, options?: RequestOptions): Promise<operations.BookingGetExecutionResponse>;
    /**
     * Cancel Execution
     *
     * @remarks
     * Cancel an execution using the original execution_id. If applicable, fees and backup withholdings will be re-calculated.
     *
     *  Upon successful submission, returns the execution that was canceled.
     */
    cancelExecution(cancelExecutionRequestCreate: components.CancelExecutionRequestCreate, accountId: string, tradeId: string, executionId: string, options?: RequestOptions): Promise<operations.BookingCancelExecutionResponse>;
    /**
     * Rebook Execution
     *
     * @remarks
     * Rebook an execution by the original execution_id. If applicable, fees and backup withholdings will be re-calculated.
     *
     *  Upon successful submission, returns the rebooked execution details.
     */
    rebookExecution(rebookExecutionRequestCreate: components.RebookExecutionRequestCreate, accountId: string, tradeId: string, executionId: string, options?: RequestOptions): Promise<operations.BookingRebookExecutionResponse>;
}
//# sourceMappingURL=tradebooking.d.ts.map