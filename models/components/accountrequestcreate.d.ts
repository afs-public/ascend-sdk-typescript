import * as z from "zod";
import { OpenEnum } from "../../types/enums.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import { AccountTaxProfileCreate, AccountTaxProfileCreate$Outbound } from "./accounttaxprofilecreate.js";
import { IdentifierCreate, IdentifierCreate$Outbound } from "./identifiercreate.js";
import { InterestedPartyCreate, InterestedPartyCreate$Outbound } from "./interestedpartycreate.js";
import { InvestmentProfileCreate, InvestmentProfileCreate$Outbound } from "./investmentprofilecreate.js";
import { PartyRequestCreate, PartyRequestCreate$Outbound } from "./partyrequestcreate.js";
import { TrustedContactCreate, TrustedContactCreate$Outbound } from "./trustedcontactcreate.js";
/**
 * The FINRA CAT classification for the Account Holder; Is set automatically based on attributes of the owners and account type
 */
export declare enum CatAccountHolderType {
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
export type CatAccountHolderTypeOpen = OpenEnum<typeof CatAccountHolderType>;
/**
 * A single record representing an owner or manager of an Account.
 */
export type AccountRequestCreate = {
    /**
     * Indicates if the issuer of a security held by the account is permitted to communicate directly with the shareholder versus through the brokerage firm; This can include sending proxy statements, annual reports, and other important information directly to the shareholder's address on file with the brokerage firm
     */
    acceptsIssuerDirectCommunication?: boolean | undefined;
    /**
     * An Account Group is a way of segmenting accounts within a Correspondent; It is up to the client to define what these groups are and AFS Operations is responsible for configuring them; If the client requests additional groups/codes, they can be added; Examples of Account Groups could hypothetically include HNW (High Net Worth), GOLD (Gold Status Customer), and NWC (Northwest Branch Customer)
     */
    accountGroupId: string;
    /**
     * A boolean to indicate if an account is advised
     */
    advised?: boolean | undefined;
    /**
     * The FINRA CAT classification for the Account Holder; Is set automatically based on attributes of the owners and account type
     */
    catAccountHolderType?: CatAccountHolderTypeOpen | undefined;
    /**
     * A unique identifier referencing a Correspondent; A Client may have several operating Correspondents within its purview.
     */
    correspondentId: string;
    /**
     * A list of identifiers associated with the account
     */
    identifiers?: Array<IdentifierCreate> | undefined;
    /**
     * A list of natural persons indicated to receive selected account documents such as account statements
     */
    interestedParties?: Array<InterestedPartyCreate> | undefined;
    /**
     * Investor profile.
     */
    investmentProfile?: InvestmentProfileCreate | undefined;
    /**
     * A boolean to indicate if an account is managed
     */
    managed?: boolean | undefined;
    /**
     * Parties associated with the account (e.g. custodian).
     */
    parties: Array<PartyRequestCreate>;
    /**
     * The primary registered representative for the account
     */
    primaryRegisteredRepId?: string | undefined;
    /**
     * The account tax profile.
     */
    taxProfile?: AccountTaxProfileCreate | undefined;
    /**
     * A list of persons designated to verify the well being of the account holder.
     */
    trustedContacts?: Array<TrustedContactCreate> | undefined;
    /**
     * A boolean to indicate if an account is a wrap brokerage account
     */
    wrapFeeBilled?: boolean | undefined;
};
/** @internal */
export declare const CatAccountHolderType$inboundSchema: z.ZodType<CatAccountHolderTypeOpen, z.ZodTypeDef, unknown>;
/** @internal */
export declare const CatAccountHolderType$outboundSchema: z.ZodType<CatAccountHolderTypeOpen, z.ZodTypeDef, CatAccountHolderTypeOpen>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace CatAccountHolderType$ {
    /** @deprecated use `CatAccountHolderType$inboundSchema` instead. */
    const inboundSchema: z.ZodType<CatAccountHolderTypeOpen, z.ZodTypeDef, unknown>;
    /** @deprecated use `CatAccountHolderType$outboundSchema` instead. */
    const outboundSchema: z.ZodType<CatAccountHolderTypeOpen, z.ZodTypeDef, CatAccountHolderTypeOpen>;
}
/** @internal */
export declare const AccountRequestCreate$inboundSchema: z.ZodType<AccountRequestCreate, z.ZodTypeDef, unknown>;
/** @internal */
export type AccountRequestCreate$Outbound = {
    accepts_issuer_direct_communication?: boolean | undefined;
    account_group_id: string;
    advised?: boolean | undefined;
    cat_account_holder_type?: string | undefined;
    correspondent_id: string;
    identifiers?: Array<IdentifierCreate$Outbound> | undefined;
    interested_parties?: Array<InterestedPartyCreate$Outbound> | undefined;
    investment_profile?: InvestmentProfileCreate$Outbound | undefined;
    managed?: boolean | undefined;
    parties: Array<PartyRequestCreate$Outbound>;
    primary_registered_rep_id?: string | undefined;
    tax_profile?: AccountTaxProfileCreate$Outbound | undefined;
    trusted_contacts?: Array<TrustedContactCreate$Outbound> | undefined;
    wrap_fee_billed?: boolean | undefined;
};
/** @internal */
export declare const AccountRequestCreate$outboundSchema: z.ZodType<AccountRequestCreate$Outbound, z.ZodTypeDef, AccountRequestCreate>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace AccountRequestCreate$ {
    /** @deprecated use `AccountRequestCreate$inboundSchema` instead. */
    const inboundSchema: z.ZodType<AccountRequestCreate, z.ZodTypeDef, unknown>;
    /** @deprecated use `AccountRequestCreate$outboundSchema` instead. */
    const outboundSchema: z.ZodType<AccountRequestCreate$Outbound, z.ZodTypeDef, AccountRequestCreate>;
    /** @deprecated use `AccountRequestCreate$Outbound` instead. */
    type Outbound = AccountRequestCreate$Outbound;
}
export declare function accountRequestCreateToJSON(accountRequestCreate: AccountRequestCreate): string;
export declare function accountRequestCreateFromJSON(jsonString: string): SafeParseResult<AccountRequestCreate, SDKValidationError>;
//# sourceMappingURL=accountrequestcreate.d.ts.map