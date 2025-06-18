import * as z from "zod";
import { OpenEnum } from "../../types/enums.js";
import { Agreement, Agreement$Outbound } from "./agreement.js";
import { Enrollment, Enrollment$Outbound } from "./enrollment.js";
import { Identifier, Identifier$Outbound } from "./identifier.js";
import { InterestedParty, InterestedParty$Outbound } from "./interestedparty.js";
import { Party, Party$Outbound } from "./party.js";
import { TrustedContact, TrustedContact$Outbound } from "./trustedcontact.js";
/**
 * The FINRA CAT classification for the Account Holder; Is set automatically based on attributes of the owners and account type
 */
export declare enum AccountCatAccountHolderType {
    CatAccountHolderTypeUnspecified = "CAT_ACCOUNT_HOLDER_TYPE_UNSPECIFIED",
    AInstitutionalCustomer = "A_INSTITUTIONAL_CUSTOMER",
    EEmployeeAccount = "E_EMPLOYEE_ACCOUNT",
    FForeign = "F_FOREIGN",
    IIndividual = "I_INDIVIDUAL",
    OMarketMaking = "O_MARKET_MAKING",
    VAgencyAveragePriceAccount = "V_AGENCY_AVERAGE_PRICE_ACCOUNT",
    POtherProprietary = "P_OTHER_PROPRIETARY",
    XErrorAccount = "X_ERROR_ACCOUNT"
}
/**
 * The FINRA CAT classification for the Account Holder; Is set automatically based on attributes of the owners and account type
 */
export type AccountCatAccountHolderTypeOpen = OpenEnum<typeof AccountCatAccountHolderType>;
/**
 * Indicates if the account is `DOMESTIC` or `FOREIGN`
 */
export declare enum Domicile {
    DomicileUnspecified = "DOMICILE_UNSPECIFIED",
    Domestic = "DOMESTIC",
    Foreign = "FOREIGN"
}
/**
 * Indicates if the account is `DOMESTIC` or `FOREIGN`
 */
export type DomicileOpen = OpenEnum<typeof Domicile>;
/**
 * The FINRA COA code associated with the account
 */
export declare enum FinraCoaCode {
    FinraCoaCodeUnspecified = "FINRA_COA_CODE_UNSPECIFIED",
    Cat01CustomerDvpRvp = "CAT_01_CUSTOMER_DVP_RVP",
    Cat02CustomerManagedAccounts = "CAT_02_CUSTOMER_MANAGED_ACCOUNTS",
    Cat03CustomerIraAccounts = "CAT_03_CUSTOMER_IRA_ACCOUNTS",
    Cat04CustomerEmployee = "CAT_04_CUSTOMER_EMPLOYEE",
    Cat05CustomerPrimeBroker = "CAT_05_CUSTOMER_PRIME_BROKER",
    Cat06CustomerAffiliateNonBd = "CAT_06_CUSTOMER_AFFILIATE_NON_BD",
    Cat07CustomerOmnibus = "CAT_07_CUSTOMER_OMNIBUS",
    Cat08Customer = "CAT_08_CUSTOMER",
    Cat09NonCustomerOfficerDirector = "CAT_09_NON_CUSTOMER_OFFICER_DIRECTOR",
    Cat10NonCustomerOfficerDirectorOrFamilyMembers = "CAT_10_NON_CUSTOMER_OFFICER_DIRECTOR_OR_FAMILY_MEMBERS",
    Cat11NonCustomerAffiliateBd = "CAT_11_NON_CUSTOMER_AFFILIATE_BD",
    Cat12NonCustomerOmnibus = "CAT_12_NON_CUSTOMER_OMNIBUS",
    Cat13NonCustomer = "CAT_13_NON_CUSTOMER",
    Cat14Paib = "CAT_14_PAIB",
    Cat15FirmInventory = "CAT_15_FIRM_INVENTORY",
    Cat16CnsFails = "CAT_16_CNS_FAILS",
    Cat17OtherClearingCorpFails = "CAT_17_OTHER_CLEARING_CORP_FAILS",
    Cat18ExecutingPrimeBroker = "CAT_18_EXECUTING_PRIME_BROKER",
    Cat19BrokerFailsToReceive = "CAT_19_BROKER_FAILS_TO_RECEIVE",
    Cat20BrokerFailsToDeliver = "CAT_20_BROKER_FAILS_TO_DELIVER",
    Cat21BrokerFails = "CAT_21_BROKER_FAILS",
    Cat22FailToDeliverGreaterThan30Days = "CAT_22_FAIL_TO_DELIVER_GREATER_THAN_30_DAYS",
    Cat23SecuritiesBorrowed = "CAT_23_SECURITIES_BORROWED",
    Cat24SecuritiesBorrowedNonCash = "CAT_24_SECURITIES_BORROWED_NON_CASH",
    Cat25SecuritiesBorrowedConduit = "CAT_25_SECURITIES_BORROWED_CONDUIT",
    Cat26SecuritiesLoaned = "CAT_26_SECURITIES_LOANED",
    Cat27SecuritiesLoanedNonCash = "CAT_27_SECURITIES_LOANED_NON_CASH",
    Cat28SecuritiesLoanedConduit = "CAT_28_SECURITIES_LOANED_CONDUIT",
    Cat29SecuritiesLoanedCns = "CAT_29_SECURITIES_LOANED_CNS",
    Cat30ReverseRepo = "CAT_30_REVERSE_REPO",
    Cat31ReverseRepoTriParty = "CAT_31_REVERSE_REPO_TRI_PARTY",
    Cat32Repo = "CAT_32_REPO",
    Cat33RepoHoldInCustody = "CAT_33_REPO_HOLD_IN_CUSTODY",
    Cat34RepoTriParty = "CAT_34_REPO_TRI_PARTY",
    Cat35BankLoanFirm = "CAT_35_BANK_LOAN_FIRM",
    Cat36BankLoanCustomer = "CAT_36_BANK_LOAN_CUSTOMER",
    Cat37BankLoanNonCustomer = "CAT_37_BANK_LOAN_NON_CUSTOMER",
    Cat38BankLoanPaib = "CAT_38_BANK_LOAN_PAIB",
    Cat39Suspense = "CAT_39_SUSPENSE",
    Cat40Reorganizations = "CAT_40_REORGANIZATIONS",
    Cat41StockDividends = "CAT_41_STOCK_DIVIDENDS",
    Cat42AbandonedProperty = "CAT_42_ABANDONED_PROPERTY",
    Cat43PhysicalBox = "CAT_43_PHYSICAL_BOX",
    Cat44LegalBox = "CAT_44_LEGAL_BOX",
    Cat45Safekeeping = "CAT_45_SAFEKEEPING",
    Cat4615C33Deposit = "CAT_46_15C3_3_DEPOSIT",
    Cat47DomesticDepositoryControl = "CAT_47_DOMESTIC_DEPOSITORY_CONTROL",
    Cat48ForeignDepositoryControl = "CAT_48_FOREIGN_DEPOSITORY_CONTROL",
    Cat49DomesticDepositoryNonControl = "CAT_49_DOMESTIC_DEPOSITORY_NON_CONTROL",
    Cat50ForeignDepositoryNonControl = "CAT_50_FOREIGN_DEPOSITORY_NON_CONTROL",
    Cat51TransferControl = "CAT_51_TRANSFER_CONTROL",
    Cat52TransferNonControl = "CAT_52_TRANSFER_NON_CONTROL",
    Cat53TransferLegal = "CAT_53_TRANSFER_LEGAL",
    Cat54InTransitControl = "CAT_54_IN_TRANSIT_CONTROL",
    Cat55InTransitNonControl = "CAT_55_IN_TRANSIT_NON_CONTROL",
    Cat56ClearingDomestic = "CAT_56_CLEARING_DOMESTIC",
    Cat57ClearingForeign = "CAT_57_CLEARING_FOREIGN",
    Cat58TestAccount = "CAT_58_TEST_ACCOUNT",
    Cat59OutOfBalance = "CAT_59_OUT_OF_BALANCE",
    Cat60Conversion = "CAT_60_CONVERSION",
    Cat61DepositsOccMargin = "CAT_61_DEPOSITS_OCC_MARGIN",
    Cat62DepositsOther = "CAT_62_DEPOSITS_OTHER",
    Cat63Other = "CAT_63_OTHER"
}
/**
 * The FINRA COA code associated with the account
 */
export type FinraCoaCodeOpen = OpenEnum<typeof FinraCoaCode>;
/**
 * Describes if the account is cash-only or has access to a form of margin
 */
export declare enum FundingType {
    FundingTypeUnspecified = "FUNDING_TYPE_UNSPECIFIED",
    Cash = "CASH",
    MarginLimitedPurpose = "MARGIN_LIMITED_PURPOSE",
    MarginRegT = "MARGIN_REG_T",
    MarginPortfolio = "MARGIN_PORTFOLIO"
}
/**
 * Describes if the account is cash-only or has access to a form of margin
 */
export type FundingTypeOpen = OpenEnum<typeof FundingType>;
/**
 * The financial goal or purpose that an investor has in mind when making investment decisions; firms often ask investors to specify their investment objectives when opening an account, in order to provide appropriate investment recommendations and manage risk appropriately
 */
export declare enum AccountInvestmentObjective {
    InvestmentObjectiveUnspecified = "INVESTMENT_OBJECTIVE_UNSPECIFIED",
    Balanced = "BALANCED",
    CapitalAppreciation = "CAPITAL_APPRECIATION",
    CapitalPreservation = "CAPITAL_PRESERVATION",
    Growth = "GROWTH",
    GrowthAndIncome = "GROWTH_AND_INCOME",
    GrowthIncome = "GROWTH_INCOME",
    Income = "INCOME",
    LongTermGrowthWithGreaterRisk = "LONG_TERM_GROWTH_WITH_GREATER_RISK",
    LongTermGrowthWithSafety = "LONG_TERM_GROWTH_WITH_SAFETY",
    MaximumGrowth = "MAXIMUM_GROWTH",
    ShortTermGrowthWithRisk = "SHORT_TERM_GROWTH_WITH_RISK",
    Speculation = "SPECULATION",
    Other = "OTHER"
}
/**
 * The financial goal or purpose that an investor has in mind when making investment decisions; firms often ask investors to specify their investment objectives when opening an account, in order to provide appropriate investment recommendations and manage risk appropriately
 */
export type AccountInvestmentObjectiveOpen = OpenEnum<typeof AccountInvestmentObjective>;
/**
 * An investor’s short-term cash requirements or the need to access funds quickly; it is important to consider an investor’s liquidity needs to ensure that they have sufficient cash or easily liquidated assets available to meet their financial obligations - this may include holding cash or cash equivalents
 */
export declare enum AccountLiquidityNeeds {
    LiquidityNeedsUnspecified = "LIQUIDITY_NEEDS_UNSPECIFIED",
    VeryImportant = "VERY_IMPORTANT",
    SomewhatImportant = "SOMEWHAT_IMPORTANT",
    NotImportant = "NOT_IMPORTANT"
}
/**
 * An investor’s short-term cash requirements or the need to access funds quickly; it is important to consider an investor’s liquidity needs to ensure that they have sufficient cash or easily liquidated assets available to meet their financial obligations - this may include holding cash or cash equivalents
 */
export type AccountLiquidityNeedsOpen = OpenEnum<typeof AccountLiquidityNeeds>;
/**
 * An investor’s willingness and ability to tolerate risk when making investment decisions; reflects the investor’s comfort level with the potential ups and downs of the market and their ability to withstand potential losses
 */
export declare enum AccountRiskTolerance {
    RiskToleranceUnspecified = "RISK_TOLERANCE_UNSPECIFIED",
    Low = "LOW",
    Medium = "MEDIUM",
    High = "HIGH"
}
/**
 * An investor’s willingness and ability to tolerate risk when making investment decisions; reflects the investor’s comfort level with the potential ups and downs of the market and their ability to withstand potential losses
 */
export type AccountRiskToleranceOpen = OpenEnum<typeof AccountRiskTolerance>;
/**
 * TThe length of time an investor expects to hold an investment before selling it; this can affect the appropriate asset allocation and risk level for the portfolio
 */
export declare enum AccountTimeHorizon {
    TimeHorizonUnspecified = "TIME_HORIZON_UNSPECIFIED",
    Short = "SHORT",
    Average = "AVERAGE",
    Long = "LONG"
}
/**
 * TThe length of time an investor expects to hold an investment before selling it; this can affect the appropriate asset allocation and risk level for the portfolio
 */
export type AccountTimeHorizonOpen = OpenEnum<typeof AccountTimeHorizon>;
/**
 * Account goals.
 */
export type AccountGoals = {
    /**
     * The financial goal or purpose that an investor has in mind when making investment decisions; firms often ask investors to specify their investment objectives when opening an account, in order to provide appropriate investment recommendations and manage risk appropriately
     */
    investmentObjective?: AccountInvestmentObjectiveOpen | undefined;
    /**
     * An investor’s short-term cash requirements or the need to access funds quickly; it is important to consider an investor’s liquidity needs to ensure that they have sufficient cash or easily liquidated assets available to meet their financial obligations - this may include holding cash or cash equivalents
     */
    liquidityNeeds?: AccountLiquidityNeedsOpen | undefined;
    /**
     * An investor’s willingness and ability to tolerate risk when making investment decisions; reflects the investor’s comfort level with the potential ups and downs of the market and their ability to withstand potential losses
     */
    riskTolerance?: AccountRiskToleranceOpen | undefined;
    /**
     * TThe length of time an investor expects to hold an investment before selling it; this can affect the appropriate asset allocation and risk level for the portfolio
     */
    timeHorizon?: AccountTimeHorizonOpen | undefined;
};
/**
 * Annual income range; the low number is exclusive, the high number is inclusive
 */
export declare enum AccountAnnualIncomeRangeUsd {
    UsdRangeUnspecified = "USD_RANGE_UNSPECIFIED",
    Under25K = "UNDER_25K",
    From25KTo50K = "FROM_25K_TO_50K",
    From50KTo100K = "FROM_50K_TO_100K",
    From100KTo200K = "FROM_100K_TO_200K",
    From200KTo300K = "FROM_200K_TO_300K",
    From300KTo500K = "FROM_300K_TO_500K",
    From500KTo1M = "FROM_500K_TO_1M",
    From1MTo5M = "FROM_1M_TO_5M",
    Over5M = "OVER_5M"
}
/**
 * Annual income range; the low number is exclusive, the high number is inclusive
 */
export type AccountAnnualIncomeRangeUsdOpen = OpenEnum<typeof AccountAnnualIncomeRangeUsd>;
/**
 * Investment experience.
 */
export declare enum AccountInvestmentExperience {
    InvestmentExperienceUnspecified = "INVESTMENT_EXPERIENCE_UNSPECIFIED",
    None = "NONE",
    Limited = "LIMITED",
    Good = "GOOD",
    Extensive = "EXTENSIVE"
}
/**
 * Investment experience.
 */
export type AccountInvestmentExperienceOpen = OpenEnum<typeof AccountInvestmentExperience>;
/**
 * Liquid net worth range; the low number is exclusive, the high number is inclusive
 */
export declare enum AccountLiquidNetWorthRangeUsd {
    UsdRangeUnspecified = "USD_RANGE_UNSPECIFIED",
    Under25K = "UNDER_25K",
    From25KTo50K = "FROM_25K_TO_50K",
    From50KTo100K = "FROM_50K_TO_100K",
    From100KTo200K = "FROM_100K_TO_200K",
    From200KTo300K = "FROM_200K_TO_300K",
    From300KTo500K = "FROM_300K_TO_500K",
    From500KTo1M = "FROM_500K_TO_1M",
    From1MTo5M = "FROM_1M_TO_5M",
    Over5M = "OVER_5M"
}
/**
 * Liquid net worth range; the low number is exclusive, the high number is inclusive
 */
export type AccountLiquidNetWorthRangeUsdOpen = OpenEnum<typeof AccountLiquidNetWorthRangeUsd>;
/**
 * Total net worth range; the low number is exclusive, the high number is inclusive
 */
export declare enum AccountTotalNetWorthRangeUsd {
    UsdRangeUnspecified = "USD_RANGE_UNSPECIFIED",
    Under25K = "UNDER_25K",
    From25KTo50K = "FROM_25K_TO_50K",
    From50KTo100K = "FROM_50K_TO_100K",
    From100KTo200K = "FROM_100K_TO_200K",
    From200KTo300K = "FROM_200K_TO_300K",
    From300KTo500K = "FROM_300K_TO_500K",
    From500KTo1M = "FROM_500K_TO_1M",
    From1MTo5M = "FROM_1M_TO_5M",
    Over5M = "OVER_5M"
}
/**
 * Total net worth range; the low number is exclusive, the high number is inclusive
 */
export type AccountTotalNetWorthRangeUsdOpen = OpenEnum<typeof AccountTotalNetWorthRangeUsd>;
/**
 * Customer profile.
 */
export type CustomerProfile = {
    /**
     * Annual income range; the low number is exclusive, the high number is inclusive
     */
    annualIncomeRangeUsd?: AccountAnnualIncomeRangeUsdOpen | undefined;
    /**
     * Federal tax bracket percent.
     */
    federalTaxBracket?: number | undefined;
    /**
     * Investment experience.
     */
    investmentExperience?: AccountInvestmentExperienceOpen | undefined;
    /**
     * Liquid net worth range; the low number is exclusive, the high number is inclusive
     */
    liquidNetWorthRangeUsd?: AccountLiquidNetWorthRangeUsdOpen | undefined;
    /**
     * Total net worth range; the low number is exclusive, the high number is inclusive
     */
    totalNetWorthRangeUsd?: AccountTotalNetWorthRangeUsdOpen | undefined;
};
/**
 * The account's goals and customer's financial profile; Used to assess customer fitness and is required by FINRA
 */
export type InvestmentProfile = {
    /**
     * Account goals.
     */
    accountGoals?: AccountGoals | null | undefined;
    /**
     * Customer profile.
     */
    customerProfile?: CustomerProfile | null | undefined;
    /**
     * The investment profile ID (generated internally).
     */
    investmentProfileId?: string | undefined;
};
/**
 * A roll-up account classification based on the `registration_type`; Indicates what owns the account and/or if it is a special type (e.g., Joint, Estate, Retirement, etc.); Used primarily for reporting and high-level type identification
 */
export declare enum OwnershipType {
    OwnershipTypeUnspecified = "OWNERSHIP_TYPE_UNSPECIFIED",
    Individual = "INDIVIDUAL",
    Joint = "JOINT",
    Estate = "ESTATE",
    Retirement = "RETIREMENT",
    Trust = "TRUST",
    Entity = "ENTITY",
    Minor = "MINOR"
}
/**
 * A roll-up account classification based on the `registration_type`; Indicates what owns the account and/or if it is a special type (e.g., Joint, Estate, Retirement, etc.); Used primarily for reporting and high-level type identification
 */
export type OwnershipTypeOpen = OpenEnum<typeof OwnershipType>;
/**
 * The registration of the account (e.g. Individual, Joint, IRA, etc.)
 */
export declare enum RegistrationType {
    RegistrationTypeUnspecified = "REGISTRATION_TYPE_UNSPECIFIED",
    IndividualRegistration = "INDIVIDUAL_REGISTRATION",
    EstateRegistration = "ESTATE_REGISTRATION",
    TraditionalIraRegistration = "TRADITIONAL_IRA_REGISTRATION",
    SimpleIraRegistration = "SIMPLE_IRA_REGISTRATION",
    SepIraRegistration = "SEP_IRA_REGISTRATION",
    RothIraRegistration = "ROTH_IRA_REGISTRATION",
    RolloverIraRegistration = "ROLLOVER_IRA_REGISTRATION",
    JointWithRightsOfSurvivorshipRegistration = "JOINT_WITH_RIGHTS_OF_SURVIVORSHIP_REGISTRATION",
    JointTenantsInCommonRegistration = "JOINT_TENANTS_IN_COMMON_REGISTRATION",
    JointTenantsByEntiretyRegistration = "JOINT_TENANTS_BY_ENTIRETY_REGISTRATION",
    JointCommunityPropertyRegistration = "JOINT_COMMUNITY_PROPERTY_REGISTRATION",
    TrustRegistration = "TRUST_REGISTRATION",
    CorporationRegistration = "CORPORATION_REGISTRATION",
    LlcRegistration = "LLC_REGISTRATION",
    PartnershipRegistration = "PARTNERSHIP_REGISTRATION",
    OperatingRegistration = "OPERATING_REGISTRATION",
    IraBeneficiaryTraditionalRegistration = "IRA_BENEFICIARY_TRADITIONAL_REGISTRATION",
    IraBeneficiaryRothRegistration = "IRA_BENEFICIARY_ROTH_REGISTRATION",
    ForeignIndividualRegistration = "FOREIGN_INDIVIDUAL_REGISTRATION",
    CustodialRegistration = "CUSTODIAL_REGISTRATION"
}
/**
 * The registration of the account (e.g. Individual, Joint, IRA, etc.)
 */
export type RegistrationTypeOpen = OpenEnum<typeof RegistrationType>;
/**
 * The Reserve Class associated with the account
 */
export declare enum ReserveClass {
    ReserveClassUnspecified = "RESERVE_CLASS_UNSPECIFIED",
    Customer = "CUSTOMER",
    Pab = "PAB",
    Firm = "FIRM",
    Street = "STREET",
    GL = "G_L"
}
/**
 * The Reserve Class associated with the account
 */
export type ReserveClassOpen = OpenEnum<typeof ReserveClass>;
/**
 * Indicates if the account is `OPEN`, `PENDING`, or `CLOSED`
 */
export declare enum AccountState {
    StateUnspecified = "STATE_UNSPECIFIED",
    Pending = "PENDING",
    Open = "OPEN",
    Closed = "CLOSED"
}
/**
 * Indicates if the account is `OPEN`, `PENDING`, or `CLOSED`
 */
export type AccountStateOpen = OpenEnum<typeof AccountState>;
/**
 * A method of determining the cost basis of an asset that has been sold or disposed of, by identifying which specific lot of the asset was sold and using the cost of that lot to calculate the cost basis; this method is commonly used for tax purposes to determine the amount of reportable capital gains or losses By default, this is set to `COST_BASIS_LOT_DISPOSAL_MIN_TAX_TERM`
 */
export declare enum AccountCostBasisLotDisposalMethod {
    CostBasisLotDisposalMethodUnspecified = "COST_BASIS_LOT_DISPOSAL_METHOD_UNSPECIFIED",
    CostBasisLotDisposalFifo = "COST_BASIS_LOT_DISPOSAL_FIFO",
    CostBasisLotDisposalLifo = "COST_BASIS_LOT_DISPOSAL_LIFO",
    CostBasisLotDisposalHighCost = "COST_BASIS_LOT_DISPOSAL_HIGH_COST",
    CostBasisLotDisposalHighCostLongTerm = "COST_BASIS_LOT_DISPOSAL_HIGH_COST_LONG_TERM",
    CostBasisLotDisposalHighCostShortTerm = "COST_BASIS_LOT_DISPOSAL_HIGH_COST_SHORT_TERM",
    CostBasisLotDisposalLowCost = "COST_BASIS_LOT_DISPOSAL_LOW_COST",
    CostBasisLotDisposalLowCostLongTerm = "COST_BASIS_LOT_DISPOSAL_LOW_COST_LONG_TERM",
    CostBasisLotDisposalLowCostShortTerm = "COST_BASIS_LOT_DISPOSAL_LOW_COST_SHORT_TERM",
    CostBasisLotDisposalMinTaxTerm = "COST_BASIS_LOT_DISPOSAL_MIN_TAX_TERM"
}
/**
 * A method of determining the cost basis of an asset that has been sold or disposed of, by identifying which specific lot of the asset was sold and using the cost of that lot to calculate the cost basis; this method is commonly used for tax purposes to determine the amount of reportable capital gains or losses By default, this is set to `COST_BASIS_LOT_DISPOSAL_MIN_TAX_TERM`
 */
export type AccountCostBasisLotDisposalMethodOpen = OpenEnum<typeof AccountCostBasisLotDisposalMethod>;
/**
 * Tax-related attributes for the account; A tax profile with taxpayer attributes is located on the `legal_natural_person` or `legal_entity` objects elsewhere on the account record
 */
export type AccountTaxProfile = {
    /**
     * A method of determining the cost basis of an asset that has been sold or disposed of, by identifying which specific lot of the asset was sold and using the cost of that lot to calculate the cost basis; this method is commonly used for tax purposes to determine the amount of reportable capital gains or losses By default, this is set to `COST_BASIS_LOT_DISPOSAL_MIN_TAX_TERM`
     */
    costBasisLotDisposalMethod?: AccountCostBasisLotDisposalMethodOpen | undefined;
    /**
     * Indicates if the account is eligible to mark-to-market their securities and commodities holdings; Named after the related section of the IRS tax code
     */
    section475Election?: boolean | undefined;
};
/**
 * An Account as represented in the account ecosystem.
 */
export type Account = {
    /**
     * Indicates if the issuer of a security held by the account is permitted to communicate directly with the shareholder versus through the brokerage firm; This can include sending proxy statements, annual reports, and other important information directly to the shareholder's address on file with the brokerage firm
     */
    acceptsIssuerDirectCommunication?: boolean | undefined;
    /**
     * An Account Group is a way of segmenting accounts within a Correspondent; It is up to the client to define what these groups are and AFS Operations is responsible for configuring them; If the client requests additional groups/codes, they can be added; Examples of Account Groups could hypothetically include HNW (High Net Worth), GOLD (Gold Status Customer), and NWC (Northwest Branch Customer)
     */
    accountGroupId?: string | undefined;
    /**
     * A globally unique identifier referencing a single account; This is the main identifier for an account used for machine-to-machine interactions
     */
    accountId?: string | undefined;
    /**
     * A "unique" identifier referencing this single account This should be the human readable identifier for the account used for display
     */
    accountNumber?: string | undefined;
    /**
     * The list of restrictions currently impacting a given account; Restrictions suspend one or more entitlements dependent on their mapping
     */
    activeRestrictions?: Array<string> | undefined;
    /**
     * A boolean to indicate if an account is advised
     */
    advised?: boolean | undefined;
    /**
     * The collection of legal agreements belonging to a given account
     */
    agreements?: Array<Agreement> | undefined;
    /**
     * The FINRA CAT classification for the Account Holder; Is set automatically based on attributes of the owners and account type
     */
    catAccountHolderType?: AccountCatAccountHolderTypeOpen | undefined;
    /**
     * The time the account was closed; If the account is not closed, this is null
     */
    closeTime?: Date | null | undefined;
    /**
     * A unique identifier referencing a Correspondent; A Client may have several operating Correspondents within its purview.
     */
    correspondentId?: string | undefined;
    /**
     * The time the initial account record was created; May differ from the `open_time` timestamp which depends on when all required data was provided to the system
     */
    createTime?: Date | null | undefined;
    /**
     * Indicates if the account is `DOMESTIC` or `FOREIGN`
     */
    domicile?: DomicileOpen | undefined;
    /**
     * A list of enrollments (or "features") on an account; May consist of both active an inactive enrollments
     */
    enrollments?: Array<Enrollment> | undefined;
    /**
     * Apex requires a Firm-Designated ID (FDID) for Consolidated Audit Trail (CAT) reporting and uses it as a unique identifier for each trading account; The identifier cannot be the same as the accountID; Apex automatically assigns this ID.
     */
    fdid?: string | undefined;
    /**
     * The FINRA COA code associated with the account
     */
    finraCoaCode?: FinraCoaCodeOpen | undefined;
    /**
     * Describes if the account is cash-only or has access to a form of margin
     */
    fundingType?: FundingTypeOpen | undefined;
    /**
     * A list of identifiers associated with the account
     */
    identifiers?: Array<Identifier> | undefined;
    /**
     * A list of natural persons indicated to receive selected account documents such as account statements
     */
    interestedParties?: Array<InterestedParty> | undefined;
    /**
     * The account's goals and customer's financial profile; Used to assess customer fitness and is required by FINRA
     */
    investmentProfile?: InvestmentProfile | null | undefined;
    /**
     * A boolean to indicate if an account is managed
     */
    managed?: boolean | undefined;
    /**
     * An identifier generated for all non-cash accounts; Uses a combination of account type and owner information to tie accounts together in order to perform margin calculations
     */
    marginGroupId?: string | undefined;
    /**
     * The name field Format: accounts/{account}
     */
    name?: string | undefined;
    /**
     * The time the account was activated; Differs from `create_time` which is when the initial account record was created
     */
    openTime?: Date | null | undefined;
    /**
     * A roll-up account classification based on the `registration_type`; Indicates what owns the account and/or if it is a special type (e.g., Joint, Estate, Retirement, etc.); Used primarily for reporting and high-level type identification
     */
    ownershipType?: OwnershipTypeOpen | undefined;
    /**
     * Parties associated with the account (e.g. custodian).
     */
    parties?: Array<Party> | undefined;
    /**
     * Indicates if the customer is a PDT; This is set if the account executes four or more day trades (buy and sell the same security intraday) within a period of five business days
     */
    patternDayTrader?: boolean | undefined;
    /**
     * The primary registered representative for the account
     */
    primaryRegisteredRepId?: string | undefined;
    /**
     * The registration of the account (e.g. Individual, Joint, IRA, etc.)
     */
    registrationType?: RegistrationTypeOpen | undefined;
    /**
     * The Reserve Class associated with the account
     */
    reserveClass?: ReserveClassOpen | undefined;
    /**
     * Indicates if the account is `OPEN`, `PENDING`, or `CLOSED`
     */
    state?: AccountStateOpen | undefined;
    /**
     * Tax-related attributes for the account; A tax profile with taxpayer attributes is located on the `legal_natural_person` or `legal_entity` objects elsewhere on the account record
     */
    taxProfile?: AccountTaxProfile | null | undefined;
    /**
     * The title of the account.
     */
    title?: string | undefined;
    /**
     * A list of persons designated to verify the well being of the account holder.
     */
    trustedContacts?: Array<TrustedContact> | undefined;
    /**
     * A boolean to indicate if an account is a wrap brokerage account
     */
    wrapFeeBilled?: boolean | undefined;
};
/** @internal */
export declare const AccountCatAccountHolderType$inboundSchema: z.ZodType<AccountCatAccountHolderTypeOpen, z.ZodTypeDef, unknown>;
/** @internal */
export declare const AccountCatAccountHolderType$outboundSchema: z.ZodType<AccountCatAccountHolderTypeOpen, z.ZodTypeDef, AccountCatAccountHolderTypeOpen>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace AccountCatAccountHolderType$ {
    /** @deprecated use `AccountCatAccountHolderType$inboundSchema` instead. */
    const inboundSchema: z.ZodType<AccountCatAccountHolderTypeOpen, z.ZodTypeDef, unknown>;
    /** @deprecated use `AccountCatAccountHolderType$outboundSchema` instead. */
    const outboundSchema: z.ZodType<AccountCatAccountHolderTypeOpen, z.ZodTypeDef, AccountCatAccountHolderTypeOpen>;
}
/** @internal */
export declare const Domicile$inboundSchema: z.ZodType<DomicileOpen, z.ZodTypeDef, unknown>;
/** @internal */
export declare const Domicile$outboundSchema: z.ZodType<DomicileOpen, z.ZodTypeDef, DomicileOpen>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace Domicile$ {
    /** @deprecated use `Domicile$inboundSchema` instead. */
    const inboundSchema: z.ZodType<DomicileOpen, z.ZodTypeDef, unknown>;
    /** @deprecated use `Domicile$outboundSchema` instead. */
    const outboundSchema: z.ZodType<DomicileOpen, z.ZodTypeDef, DomicileOpen>;
}
/** @internal */
export declare const FinraCoaCode$inboundSchema: z.ZodType<FinraCoaCodeOpen, z.ZodTypeDef, unknown>;
/** @internal */
export declare const FinraCoaCode$outboundSchema: z.ZodType<FinraCoaCodeOpen, z.ZodTypeDef, FinraCoaCodeOpen>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace FinraCoaCode$ {
    /** @deprecated use `FinraCoaCode$inboundSchema` instead. */
    const inboundSchema: z.ZodType<FinraCoaCodeOpen, z.ZodTypeDef, unknown>;
    /** @deprecated use `FinraCoaCode$outboundSchema` instead. */
    const outboundSchema: z.ZodType<FinraCoaCodeOpen, z.ZodTypeDef, FinraCoaCodeOpen>;
}
/** @internal */
export declare const FundingType$inboundSchema: z.ZodType<FundingTypeOpen, z.ZodTypeDef, unknown>;
/** @internal */
export declare const FundingType$outboundSchema: z.ZodType<FundingTypeOpen, z.ZodTypeDef, FundingTypeOpen>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace FundingType$ {
    /** @deprecated use `FundingType$inboundSchema` instead. */
    const inboundSchema: z.ZodType<FundingTypeOpen, z.ZodTypeDef, unknown>;
    /** @deprecated use `FundingType$outboundSchema` instead. */
    const outboundSchema: z.ZodType<FundingTypeOpen, z.ZodTypeDef, FundingTypeOpen>;
}
/** @internal */
export declare const AccountInvestmentObjective$inboundSchema: z.ZodType<AccountInvestmentObjectiveOpen, z.ZodTypeDef, unknown>;
/** @internal */
export declare const AccountInvestmentObjective$outboundSchema: z.ZodType<AccountInvestmentObjectiveOpen, z.ZodTypeDef, AccountInvestmentObjectiveOpen>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace AccountInvestmentObjective$ {
    /** @deprecated use `AccountInvestmentObjective$inboundSchema` instead. */
    const inboundSchema: z.ZodType<AccountInvestmentObjectiveOpen, z.ZodTypeDef, unknown>;
    /** @deprecated use `AccountInvestmentObjective$outboundSchema` instead. */
    const outboundSchema: z.ZodType<AccountInvestmentObjectiveOpen, z.ZodTypeDef, AccountInvestmentObjectiveOpen>;
}
/** @internal */
export declare const AccountLiquidityNeeds$inboundSchema: z.ZodType<AccountLiquidityNeedsOpen, z.ZodTypeDef, unknown>;
/** @internal */
export declare const AccountLiquidityNeeds$outboundSchema: z.ZodType<AccountLiquidityNeedsOpen, z.ZodTypeDef, AccountLiquidityNeedsOpen>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace AccountLiquidityNeeds$ {
    /** @deprecated use `AccountLiquidityNeeds$inboundSchema` instead. */
    const inboundSchema: z.ZodType<AccountLiquidityNeedsOpen, z.ZodTypeDef, unknown>;
    /** @deprecated use `AccountLiquidityNeeds$outboundSchema` instead. */
    const outboundSchema: z.ZodType<AccountLiquidityNeedsOpen, z.ZodTypeDef, AccountLiquidityNeedsOpen>;
}
/** @internal */
export declare const AccountRiskTolerance$inboundSchema: z.ZodType<AccountRiskToleranceOpen, z.ZodTypeDef, unknown>;
/** @internal */
export declare const AccountRiskTolerance$outboundSchema: z.ZodType<AccountRiskToleranceOpen, z.ZodTypeDef, AccountRiskToleranceOpen>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace AccountRiskTolerance$ {
    /** @deprecated use `AccountRiskTolerance$inboundSchema` instead. */
    const inboundSchema: z.ZodType<AccountRiskToleranceOpen, z.ZodTypeDef, unknown>;
    /** @deprecated use `AccountRiskTolerance$outboundSchema` instead. */
    const outboundSchema: z.ZodType<AccountRiskToleranceOpen, z.ZodTypeDef, AccountRiskToleranceOpen>;
}
/** @internal */
export declare const AccountTimeHorizon$inboundSchema: z.ZodType<AccountTimeHorizonOpen, z.ZodTypeDef, unknown>;
/** @internal */
export declare const AccountTimeHorizon$outboundSchema: z.ZodType<AccountTimeHorizonOpen, z.ZodTypeDef, AccountTimeHorizonOpen>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace AccountTimeHorizon$ {
    /** @deprecated use `AccountTimeHorizon$inboundSchema` instead. */
    const inboundSchema: z.ZodType<AccountTimeHorizonOpen, z.ZodTypeDef, unknown>;
    /** @deprecated use `AccountTimeHorizon$outboundSchema` instead. */
    const outboundSchema: z.ZodType<AccountTimeHorizonOpen, z.ZodTypeDef, AccountTimeHorizonOpen>;
}
/** @internal */
export declare const AccountGoals$inboundSchema: z.ZodType<AccountGoals, z.ZodTypeDef, unknown>;
/** @internal */
export type AccountGoals$Outbound = {
    investment_objective?: string | undefined;
    liquidity_needs?: string | undefined;
    risk_tolerance?: string | undefined;
    time_horizon?: string | undefined;
};
/** @internal */
export declare const AccountGoals$outboundSchema: z.ZodType<AccountGoals$Outbound, z.ZodTypeDef, AccountGoals>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace AccountGoals$ {
    /** @deprecated use `AccountGoals$inboundSchema` instead. */
    const inboundSchema: z.ZodType<AccountGoals, z.ZodTypeDef, unknown>;
    /** @deprecated use `AccountGoals$outboundSchema` instead. */
    const outboundSchema: z.ZodType<AccountGoals$Outbound, z.ZodTypeDef, AccountGoals>;
    /** @deprecated use `AccountGoals$Outbound` instead. */
    type Outbound = AccountGoals$Outbound;
}
/** @internal */
export declare const AccountAnnualIncomeRangeUsd$inboundSchema: z.ZodType<AccountAnnualIncomeRangeUsdOpen, z.ZodTypeDef, unknown>;
/** @internal */
export declare const AccountAnnualIncomeRangeUsd$outboundSchema: z.ZodType<AccountAnnualIncomeRangeUsdOpen, z.ZodTypeDef, AccountAnnualIncomeRangeUsdOpen>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace AccountAnnualIncomeRangeUsd$ {
    /** @deprecated use `AccountAnnualIncomeRangeUsd$inboundSchema` instead. */
    const inboundSchema: z.ZodType<AccountAnnualIncomeRangeUsdOpen, z.ZodTypeDef, unknown>;
    /** @deprecated use `AccountAnnualIncomeRangeUsd$outboundSchema` instead. */
    const outboundSchema: z.ZodType<AccountAnnualIncomeRangeUsdOpen, z.ZodTypeDef, AccountAnnualIncomeRangeUsdOpen>;
}
/** @internal */
export declare const AccountInvestmentExperience$inboundSchema: z.ZodType<AccountInvestmentExperienceOpen, z.ZodTypeDef, unknown>;
/** @internal */
export declare const AccountInvestmentExperience$outboundSchema: z.ZodType<AccountInvestmentExperienceOpen, z.ZodTypeDef, AccountInvestmentExperienceOpen>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace AccountInvestmentExperience$ {
    /** @deprecated use `AccountInvestmentExperience$inboundSchema` instead. */
    const inboundSchema: z.ZodType<AccountInvestmentExperienceOpen, z.ZodTypeDef, unknown>;
    /** @deprecated use `AccountInvestmentExperience$outboundSchema` instead. */
    const outboundSchema: z.ZodType<AccountInvestmentExperienceOpen, z.ZodTypeDef, AccountInvestmentExperienceOpen>;
}
/** @internal */
export declare const AccountLiquidNetWorthRangeUsd$inboundSchema: z.ZodType<AccountLiquidNetWorthRangeUsdOpen, z.ZodTypeDef, unknown>;
/** @internal */
export declare const AccountLiquidNetWorthRangeUsd$outboundSchema: z.ZodType<AccountLiquidNetWorthRangeUsdOpen, z.ZodTypeDef, AccountLiquidNetWorthRangeUsdOpen>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace AccountLiquidNetWorthRangeUsd$ {
    /** @deprecated use `AccountLiquidNetWorthRangeUsd$inboundSchema` instead. */
    const inboundSchema: z.ZodType<AccountLiquidNetWorthRangeUsdOpen, z.ZodTypeDef, unknown>;
    /** @deprecated use `AccountLiquidNetWorthRangeUsd$outboundSchema` instead. */
    const outboundSchema: z.ZodType<AccountLiquidNetWorthRangeUsdOpen, z.ZodTypeDef, AccountLiquidNetWorthRangeUsdOpen>;
}
/** @internal */
export declare const AccountTotalNetWorthRangeUsd$inboundSchema: z.ZodType<AccountTotalNetWorthRangeUsdOpen, z.ZodTypeDef, unknown>;
/** @internal */
export declare const AccountTotalNetWorthRangeUsd$outboundSchema: z.ZodType<AccountTotalNetWorthRangeUsdOpen, z.ZodTypeDef, AccountTotalNetWorthRangeUsdOpen>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace AccountTotalNetWorthRangeUsd$ {
    /** @deprecated use `AccountTotalNetWorthRangeUsd$inboundSchema` instead. */
    const inboundSchema: z.ZodType<AccountTotalNetWorthRangeUsdOpen, z.ZodTypeDef, unknown>;
    /** @deprecated use `AccountTotalNetWorthRangeUsd$outboundSchema` instead. */
    const outboundSchema: z.ZodType<AccountTotalNetWorthRangeUsdOpen, z.ZodTypeDef, AccountTotalNetWorthRangeUsdOpen>;
}
/** @internal */
export declare const CustomerProfile$inboundSchema: z.ZodType<CustomerProfile, z.ZodTypeDef, unknown>;
/** @internal */
export type CustomerProfile$Outbound = {
    annual_income_range_usd?: string | undefined;
    federal_tax_bracket?: number | undefined;
    investment_experience?: string | undefined;
    liquid_net_worth_range_usd?: string | undefined;
    total_net_worth_range_usd?: string | undefined;
};
/** @internal */
export declare const CustomerProfile$outboundSchema: z.ZodType<CustomerProfile$Outbound, z.ZodTypeDef, CustomerProfile>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace CustomerProfile$ {
    /** @deprecated use `CustomerProfile$inboundSchema` instead. */
    const inboundSchema: z.ZodType<CustomerProfile, z.ZodTypeDef, unknown>;
    /** @deprecated use `CustomerProfile$outboundSchema` instead. */
    const outboundSchema: z.ZodType<CustomerProfile$Outbound, z.ZodTypeDef, CustomerProfile>;
    /** @deprecated use `CustomerProfile$Outbound` instead. */
    type Outbound = CustomerProfile$Outbound;
}
/** @internal */
export declare const InvestmentProfile$inboundSchema: z.ZodType<InvestmentProfile, z.ZodTypeDef, unknown>;
/** @internal */
export type InvestmentProfile$Outbound = {
    account_goals?: AccountGoals$Outbound | null | undefined;
    customer_profile?: CustomerProfile$Outbound | null | undefined;
    investment_profile_id?: string | undefined;
};
/** @internal */
export declare const InvestmentProfile$outboundSchema: z.ZodType<InvestmentProfile$Outbound, z.ZodTypeDef, InvestmentProfile>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace InvestmentProfile$ {
    /** @deprecated use `InvestmentProfile$inboundSchema` instead. */
    const inboundSchema: z.ZodType<InvestmentProfile, z.ZodTypeDef, unknown>;
    /** @deprecated use `InvestmentProfile$outboundSchema` instead. */
    const outboundSchema: z.ZodType<InvestmentProfile$Outbound, z.ZodTypeDef, InvestmentProfile>;
    /** @deprecated use `InvestmentProfile$Outbound` instead. */
    type Outbound = InvestmentProfile$Outbound;
}
/** @internal */
export declare const OwnershipType$inboundSchema: z.ZodType<OwnershipTypeOpen, z.ZodTypeDef, unknown>;
/** @internal */
export declare const OwnershipType$outboundSchema: z.ZodType<OwnershipTypeOpen, z.ZodTypeDef, OwnershipTypeOpen>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace OwnershipType$ {
    /** @deprecated use `OwnershipType$inboundSchema` instead. */
    const inboundSchema: z.ZodType<OwnershipTypeOpen, z.ZodTypeDef, unknown>;
    /** @deprecated use `OwnershipType$outboundSchema` instead. */
    const outboundSchema: z.ZodType<OwnershipTypeOpen, z.ZodTypeDef, OwnershipTypeOpen>;
}
/** @internal */
export declare const RegistrationType$inboundSchema: z.ZodType<RegistrationTypeOpen, z.ZodTypeDef, unknown>;
/** @internal */
export declare const RegistrationType$outboundSchema: z.ZodType<RegistrationTypeOpen, z.ZodTypeDef, RegistrationTypeOpen>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace RegistrationType$ {
    /** @deprecated use `RegistrationType$inboundSchema` instead. */
    const inboundSchema: z.ZodType<RegistrationTypeOpen, z.ZodTypeDef, unknown>;
    /** @deprecated use `RegistrationType$outboundSchema` instead. */
    const outboundSchema: z.ZodType<RegistrationTypeOpen, z.ZodTypeDef, RegistrationTypeOpen>;
}
/** @internal */
export declare const ReserveClass$inboundSchema: z.ZodType<ReserveClassOpen, z.ZodTypeDef, unknown>;
/** @internal */
export declare const ReserveClass$outboundSchema: z.ZodType<ReserveClassOpen, z.ZodTypeDef, ReserveClassOpen>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace ReserveClass$ {
    /** @deprecated use `ReserveClass$inboundSchema` instead. */
    const inboundSchema: z.ZodType<ReserveClassOpen, z.ZodTypeDef, unknown>;
    /** @deprecated use `ReserveClass$outboundSchema` instead. */
    const outboundSchema: z.ZodType<ReserveClassOpen, z.ZodTypeDef, ReserveClassOpen>;
}
/** @internal */
export declare const AccountState$inboundSchema: z.ZodType<AccountStateOpen, z.ZodTypeDef, unknown>;
/** @internal */
export declare const AccountState$outboundSchema: z.ZodType<AccountStateOpen, z.ZodTypeDef, AccountStateOpen>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace AccountState$ {
    /** @deprecated use `AccountState$inboundSchema` instead. */
    const inboundSchema: z.ZodType<AccountStateOpen, z.ZodTypeDef, unknown>;
    /** @deprecated use `AccountState$outboundSchema` instead. */
    const outboundSchema: z.ZodType<AccountStateOpen, z.ZodTypeDef, AccountStateOpen>;
}
/** @internal */
export declare const AccountCostBasisLotDisposalMethod$inboundSchema: z.ZodType<AccountCostBasisLotDisposalMethodOpen, z.ZodTypeDef, unknown>;
/** @internal */
export declare const AccountCostBasisLotDisposalMethod$outboundSchema: z.ZodType<AccountCostBasisLotDisposalMethodOpen, z.ZodTypeDef, AccountCostBasisLotDisposalMethodOpen>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace AccountCostBasisLotDisposalMethod$ {
    /** @deprecated use `AccountCostBasisLotDisposalMethod$inboundSchema` instead. */
    const inboundSchema: z.ZodType<AccountCostBasisLotDisposalMethodOpen, z.ZodTypeDef, unknown>;
    /** @deprecated use `AccountCostBasisLotDisposalMethod$outboundSchema` instead. */
    const outboundSchema: z.ZodType<AccountCostBasisLotDisposalMethodOpen, z.ZodTypeDef, AccountCostBasisLotDisposalMethodOpen>;
}
/** @internal */
export declare const AccountTaxProfile$inboundSchema: z.ZodType<AccountTaxProfile, z.ZodTypeDef, unknown>;
/** @internal */
export type AccountTaxProfile$Outbound = {
    cost_basis_lot_disposal_method?: string | undefined;
    section_475_election?: boolean | undefined;
};
/** @internal */
export declare const AccountTaxProfile$outboundSchema: z.ZodType<AccountTaxProfile$Outbound, z.ZodTypeDef, AccountTaxProfile>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace AccountTaxProfile$ {
    /** @deprecated use `AccountTaxProfile$inboundSchema` instead. */
    const inboundSchema: z.ZodType<AccountTaxProfile, z.ZodTypeDef, unknown>;
    /** @deprecated use `AccountTaxProfile$outboundSchema` instead. */
    const outboundSchema: z.ZodType<AccountTaxProfile$Outbound, z.ZodTypeDef, AccountTaxProfile>;
    /** @deprecated use `AccountTaxProfile$Outbound` instead. */
    type Outbound = AccountTaxProfile$Outbound;
}
/** @internal */
export declare const Account$inboundSchema: z.ZodType<Account, z.ZodTypeDef, unknown>;
/** @internal */
export type Account$Outbound = {
    accepts_issuer_direct_communication?: boolean | undefined;
    account_group_id?: string | undefined;
    account_id?: string | undefined;
    account_number?: string | undefined;
    active_restrictions?: Array<string> | undefined;
    advised?: boolean | undefined;
    agreements?: Array<Agreement$Outbound> | undefined;
    cat_account_holder_type?: string | undefined;
    close_time?: string | null | undefined;
    correspondent_id?: string | undefined;
    create_time?: string | null | undefined;
    domicile?: string | undefined;
    enrollments?: Array<Enrollment$Outbound> | undefined;
    fdid?: string | undefined;
    finra_coa_code?: string | undefined;
    funding_type?: string | undefined;
    identifiers?: Array<Identifier$Outbound> | undefined;
    interested_parties?: Array<InterestedParty$Outbound> | undefined;
    investment_profile?: InvestmentProfile$Outbound | null | undefined;
    managed?: boolean | undefined;
    margin_group_id?: string | undefined;
    name?: string | undefined;
    open_time?: string | null | undefined;
    ownership_type?: string | undefined;
    parties?: Array<Party$Outbound> | undefined;
    pattern_day_trader?: boolean | undefined;
    primary_registered_rep_id?: string | undefined;
    registration_type?: string | undefined;
    reserve_class?: string | undefined;
    state?: string | undefined;
    tax_profile?: AccountTaxProfile$Outbound | null | undefined;
    title?: string | undefined;
    trusted_contacts?: Array<TrustedContact$Outbound> | undefined;
    wrap_fee_billed?: boolean | undefined;
};
/** @internal */
export declare const Account$outboundSchema: z.ZodType<Account$Outbound, z.ZodTypeDef, Account>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace Account$ {
    /** @deprecated use `Account$inboundSchema` instead. */
    const inboundSchema: z.ZodType<Account, z.ZodTypeDef, unknown>;
    /** @deprecated use `Account$outboundSchema` instead. */
    const outboundSchema: z.ZodType<Account$Outbound, z.ZodTypeDef, Account>;
    /** @deprecated use `Account$Outbound` instead. */
    type Outbound = Account$Outbound;
}
//# sourceMappingURL=account.d.ts.map