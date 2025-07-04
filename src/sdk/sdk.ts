/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { ClientSDK } from "../lib/sdks.js";
import { AccountCreation } from "./accountcreation.js";
import { AccountManagement } from "./accountmanagement.js";
import { AccountTransfers } from "./accounttransfers.js";
import { ACHTransfers } from "./achtransfers.js";
import { Assets } from "./assets.js";
import { Authentication } from "./authentication.js";
import { BankRelationships } from "./bankrelationships.js";
import { BasketOrders } from "./basketorders.js";
import { CashBalances } from "./cashbalances.js";
import { CreateOrder } from "./createorder.js";
import { DataRetrieval } from "./dataretrieval.js";
import { EnrollmentsAndAgreements } from "./enrollmentsandagreements.js";
import { FeesAndCredits } from "./feesandcredits.js";
import { FixedIncomePricing } from "./fixedincomepricing.js";
import { InstantCashTransferICT } from "./instantcashtransferict.js";
import { Investigations } from "./investigations.js";
import { InvestorDocs } from "./investordocs.js";
import { Journals } from "./journals.js";
import { Ledger } from "./ledger.js";
import { Margins } from "./margins.js";
import { PersonManagement } from "./personmanagement.js";
import { Reader } from "./reader.js";
import { Retirements } from "./retirements.js";
import { ScheduleTransfers } from "./scheduletransfers.js";
import { Subscriber } from "./subscriber.js";
import { TestSimulation } from "./testsimulation.js";
import { TradeAllocation } from "./tradeallocation.js";
import { TradeBooking } from "./tradebooking.js";
import { Wires } from "./wires.js";

export class Apexascend extends ClientSDK {
  private _authentication?: Authentication;
  get authentication(): Authentication {
    return (this._authentication ??= new Authentication(this._options));
  }

  private _reader?: Reader;
  get reader(): Reader {
    return (this._reader ??= new Reader(this._options));
  }

  private _subscriber?: Subscriber;
  get subscriber(): Subscriber {
    return (this._subscriber ??= new Subscriber(this._options));
  }

  private _personManagement?: PersonManagement;
  get personManagement(): PersonManagement {
    return (this._personManagement ??= new PersonManagement(this._options));
  }

  private _accountCreation?: AccountCreation;
  get accountCreation(): AccountCreation {
    return (this._accountCreation ??= new AccountCreation(this._options));
  }

  private _accountManagement?: AccountManagement;
  get accountManagement(): AccountManagement {
    return (this._accountManagement ??= new AccountManagement(this._options));
  }

  private _enrollmentsAndAgreements?: EnrollmentsAndAgreements;
  get enrollmentsAndAgreements(): EnrollmentsAndAgreements {
    return (this._enrollmentsAndAgreements ??= new EnrollmentsAndAgreements(
      this._options,
    ));
  }

  private _investigations?: Investigations;
  get investigations(): Investigations {
    return (this._investigations ??= new Investigations(this._options));
  }

  private _bankRelationships?: BankRelationships;
  get bankRelationships(): BankRelationships {
    return (this._bankRelationships ??= new BankRelationships(this._options));
  }

  private _achTransfers?: ACHTransfers;
  get achTransfers(): ACHTransfers {
    return (this._achTransfers ??= new ACHTransfers(this._options));
  }

  private _instantCashTransferICT?: InstantCashTransferICT;
  get instantCashTransferICT(): InstantCashTransferICT {
    return (this._instantCashTransferICT ??= new InstantCashTransferICT(
      this._options,
    ));
  }

  private _retirements?: Retirements;
  get retirements(): Retirements {
    return (this._retirements ??= new Retirements(this._options));
  }

  private _journals?: Journals;
  get journals(): Journals {
    return (this._journals ??= new Journals(this._options));
  }

  private _scheduleTransfers?: ScheduleTransfers;
  get scheduleTransfers(): ScheduleTransfers {
    return (this._scheduleTransfers ??= new ScheduleTransfers(this._options));
  }

  private _wires?: Wires;
  get wires(): Wires {
    return (this._wires ??= new Wires(this._options));
  }

  private _cashBalances?: CashBalances;
  get cashBalances(): CashBalances {
    return (this._cashBalances ??= new CashBalances(this._options));
  }

  private _feesAndCredits?: FeesAndCredits;
  get feesAndCredits(): FeesAndCredits {
    return (this._feesAndCredits ??= new FeesAndCredits(this._options));
  }

  private _testSimulation?: TestSimulation;
  get testSimulation(): TestSimulation {
    return (this._testSimulation ??= new TestSimulation(this._options));
  }

  private _accountTransfers?: AccountTransfers;
  get accountTransfers(): AccountTransfers {
    return (this._accountTransfers ??= new AccountTransfers(this._options));
  }

  private _createOrder?: CreateOrder;
  get createOrder(): CreateOrder {
    return (this._createOrder ??= new CreateOrder(this._options));
  }

  private _fixedIncomePricing?: FixedIncomePricing;
  get fixedIncomePricing(): FixedIncomePricing {
    return (this._fixedIncomePricing ??= new FixedIncomePricing(this._options));
  }

  private _basketOrders?: BasketOrders;
  get basketOrders(): BasketOrders {
    return (this._basketOrders ??= new BasketOrders(this._options));
  }

  private _tradeBooking?: TradeBooking;
  get tradeBooking(): TradeBooking {
    return (this._tradeBooking ??= new TradeBooking(this._options));
  }

  private _tradeAllocation?: TradeAllocation;
  get tradeAllocation(): TradeAllocation {
    return (this._tradeAllocation ??= new TradeAllocation(this._options));
  }

  private _assets?: Assets;
  get assets(): Assets {
    return (this._assets ??= new Assets(this._options));
  }

  private _ledger?: Ledger;
  get ledger(): Ledger {
    return (this._ledger ??= new Ledger(this._options));
  }

  private _margins?: Margins;
  get margins(): Margins {
    return (this._margins ??= new Margins(this._options));
  }

  private _investorDocs?: InvestorDocs;
  get investorDocs(): InvestorDocs {
    return (this._investorDocs ??= new InvestorDocs(this._options));
  }

  private _dataRetrieval?: DataRetrieval;
  get dataRetrieval(): DataRetrieval {
    return (this._dataRetrieval ??= new DataRetrieval(this._options));
  }
}
