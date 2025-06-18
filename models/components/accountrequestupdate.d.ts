import * as z from "zod";
import { OpenEnum } from "../../types/enums.js";
import { AccountTaxProfileUpdate, AccountTaxProfileUpdate$Outbound } from "./accounttaxprofileupdate.js";
import { IdentifierUpdate, IdentifierUpdate$Outbound } from "./identifierupdate.js";
import { InterestedPartyUpdate, InterestedPartyUpdate$Outbound } from "./interestedpartyupdate.js";
import { InvestmentProfileUpdate, InvestmentProfileUpdate$Outbound } from "./investmentprofileupdate.js";
import { PartyRequestUpdate, PartyRequestUpdate$Outbound } from "./partyrequestupdate.js";
import { TrustedContactUpdate, TrustedContactUpdate$Outbound } from "./trustedcontactupdate.js";
/**
 * The FINRA CAT classification for the Account Holder; Is set automatically based on attributes of the owners and account type
 */
export declare enum AccountRequestUpdateCatAccountHolderType {
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
export type AccountRequestUpdateCatAccountHolderTypeOpen = OpenEnum<typeof AccountRequestUpdateCatAccountHolderType>;
/**
 * A single record representing an owner or manager of an Account.
 */
export type AccountRequestUpdate = {
    /**
     * Indicates if the issuer of a security held by the account is permitted to communicate directly with the shareholder versus through the brokerage firm; This can include sending proxy statements, annual reports, and other important information directly to the shareholder's address on file with the brokerage firm
     */
    acceptsIssuerDirectCommunication?: boolean | undefined;
    /**
     * A boolean to indicate if an account is advised
     */
    advised?: boolean | undefined;
    /**
     * The FINRA CAT classification for the Account Holder; Is set automatically based on attributes of the owners and account type
     */
    catAccountHolderType?: AccountRequestUpdateCatAccountHolderTypeOpen | undefined;
    /**
     * A list of identifiers associated with the account
     */
    identifiers?: Array<IdentifierUpdate> | undefined;
    /**
     * A list of natural persons indicated to receive selected account documents such as account statements
     */
    interestedParties?: Array<InterestedPartyUpdate> | undefined;
    /**
     * Investor profile.
     */
    investmentProfile?: InvestmentProfileUpdate | undefined;
    /**
     * A boolean to indicate if an account is managed
     */
    managed?: boolean | undefined;
    /**
     * Parties associated with the account (e.g. custodian).
     */
    parties?: Array<PartyRequestUpdate> | undefined;
    /**
     * The primary registered representative for the account
     */
    primaryRegisteredRepId?: string | undefined;
    /**
     * The account tax profile.
     */
    taxProfile?: AccountTaxProfileUpdate | undefined;
    /**
     * A list of persons designated to verify the well being of the account holder.
     */
    trustedContacts?: Array<TrustedContactUpdate> | undefined;
    /**
     * A boolean to indicate if an account is a wrap brokerage account
     */
    wrapFeeBilled?: boolean | undefined;
};
/** @internal */
export declare const AccountRequestUpdateCatAccountHolderType$inboundSchema: z.ZodType<AccountRequestUpdateCatAccountHolderTypeOpen, z.ZodTypeDef, unknown>;
/** @internal */
export declare const AccountRequestUpdateCatAccountHolderType$outboundSchema: z.ZodType<AccountRequestUpdateCatAccountHolderTypeOpen, z.ZodTypeDef, AccountRequestUpdateCatAccountHolderTypeOpen>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace AccountRequestUpdateCatAccountHolderType$ {
    /** @deprecated use `AccountRequestUpdateCatAccountHolderType$inboundSchema` instead. */
    const inboundSchema: z.ZodType<AccountRequestUpdateCatAccountHolderTypeOpen, z.ZodTypeDef, unknown>;
    /** @deprecated use `AccountRequestUpdateCatAccountHolderType$outboundSchema` instead. */
    const outboundSchema: z.ZodType<AccountRequestUpdateCatAccountHolderTypeOpen, z.ZodTypeDef, AccountRequestUpdateCatAccountHolderTypeOpen>;
}
/** @internal */
export declare const AccountRequestUpdate$inboundSchema: z.ZodType<AccountRequestUpdate, z.ZodTypeDef, unknown>;
/** @internal */
export type AccountRequestUpdate$Outbound = {
    accepts_issuer_direct_communication?: boolean | undefined;
    advised?: boolean | undefined;
    cat_account_holder_type?: string | undefined;
    identifiers?: Array<IdentifierUpdate$Outbound> | undefined;
    interested_parties?: Array<InterestedPartyUpdate$Outbound> | undefined;
    investment_profile?: InvestmentProfileUpdate$Outbound | undefined;
    managed?: boolean | undefined;
    parties?: Array<PartyRequestUpdate$Outbound> | undefined;
    primary_registered_rep_id?: string | undefined;
    tax_profile?: AccountTaxProfileUpdate$Outbound | undefined;
    trusted_contacts?: Array<TrustedContactUpdate$Outbound> | undefined;
    wrap_fee_billed?: boolean | undefined;
};
/** @internal */
export declare const AccountRequestUpdate$outboundSchema: z.ZodType<AccountRequestUpdate$Outbound, z.ZodTypeDef, AccountRequestUpdate>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace AccountRequestUpdate$ {
    /** @deprecated use `AccountRequestUpdate$inboundSchema` instead. */
    const inboundSchema: z.ZodType<AccountRequestUpdate, z.ZodTypeDef, unknown>;
    /** @deprecated use `AccountRequestUpdate$outboundSchema` instead. */
    const outboundSchema: z.ZodType<AccountRequestUpdate$Outbound, z.ZodTypeDef, AccountRequestUpdate>;
    /** @deprecated use `AccountRequestUpdate$Outbound` instead. */
    type Outbound = AccountRequestUpdate$Outbound;
}
//# sourceMappingURL=accountrequestupdate.d.ts.map