import {sdk} from "../utils/sdk";

export async function entryID(account_id: string): Promise<string | undefined> {
  const result = await sdk.ledger.listEntries(account_id);
  if (result?.listEntriesResponse?.entries?.[0]?.entryId) {
    return result.listEntriesResponse.entries[0].entryId
  }
  return undefined
}

export async function activityID(account_id: string): Promise<string | undefined> {
  const result = await sdk.ledger.listActivities(account_id);
  if (result?.listActivitiesResponse?.activities?.[0]?.activityId) {
    return result.listActivitiesResponse.activities[0].activityId
  }
  return undefined
}
