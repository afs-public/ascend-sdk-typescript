import { expect, test, describe } from "vitest";
import * as operations from "@apexfintechsolutions/ascend-sdk/models/operations";
import { sdk } from "./utils/sdk";
import {Paginator} from "../types";

describe("Pagination Tests", () => {
  test("test basic pagination", async () => {
    // Test basic pagination
    const s = sdk;
    expect(s).toBeDefined();

    // Make the initial request to list assets (first page)
    const res = await s.assets.listAssets();

    // Verify the response structure is valid
    expect(res).toBeDefined();
    expect(res.httpMeta).toBeDefined();
    expect(res.httpMeta.response).toBeDefined();
    expect(res.httpMeta.response.status).toBe(200);
    expect(res.listAssetsResponse).toBeDefined();

    // Test pagination by only checking the first few pages
    let pageCount = 0;
    const maxPages = 3; // Limit to the first 3 pages for testing to avoid long-running tests
    let currentPage: (operations.AssetsListAssets1Response & { next: Paginator<operations.AssetsListAssets1Response> }) | null = res;

    // Iterate through pages until we reach the limit or no more pages exist
    while (currentPage !== null && pageCount < maxPages) {
      console.log(`Processing page ${pageCount + 1}`);

      // Verify current page has valid response structure
      expect(currentPage.listAssetsResponse).toBeDefined();

      // Attempt to get the next page using the SDK's pagination method
      const nextRes = await currentPage.next();

      // If we successfully got the next page, verify it's also valid
      if (nextRes !== null) {
        expect(nextRes.httpMeta.response.status).toBe(200);
      }

      // Move to the next page for the next iteration
      currentPage = nextRes;
      pageCount++;
    }

    console.log("Pagination test completed successfully.");
  });

  test("test empty initial response handling", async () => {
    // Test that pagination handles empty initial responses gracefully
    const s = sdk;
    expect(s).toBeDefined();

    // Use a filter that should return no results to test empty response handling
    // This filter looks for assets with an impossible condition
    const emptyFilter = 'name == "NONEXISTENT_ASSET_12345_IMPOSSIBLE"';

    const res = await s.assets.listAssets(undefined, undefined, undefined, emptyFilter);

    // Verify the response structure is still valid
    expect(res).toBeDefined();
    expect(res.httpMeta).toBeDefined();
    expect(res.httpMeta.response).toBeDefined();
    expect(res.httpMeta.response.status).toBe(200);
    expect(res.listAssetsResponse).toBeDefined();

    // Verify that next() returns null for empty responses
    let currentPage: (operations.AssetsListAssets1Response & { next: Paginator<operations.AssetsListAssets1Response> }) | null = res;
    while (currentPage !== null) {
      // Check if the current response has assets
      if (currentPage.listAssetsResponse?.assets) {
        expect(currentPage.listAssetsResponse?.assets.length).toBe(0);
      }

      // Attempt to get the next page
      currentPage = await currentPage.next();
    }

    console.log("Empty initial response handling test completed successfully.");
  });

  test("test pagination with symbol filters", async () => {
    // Test pagination behavior with symbol filter
    const s = sdk;
    expect(s).toBeDefined();

    // Test filter by symbol
    const equityFilter = 'symbol == "WTG"';
    const res = await s.assets.listAssets(undefined, undefined, undefined, equityFilter);

    expect(res.httpMeta.response.status).toBe(200);
    expect(res.listAssetsResponse).toBeDefined();

    // Count pages with an equity filter
    let equityPages = 0;
    let equityAssets = 0;
    const maxPages = 3;
    let currentPage: (operations.AssetsListAssets1Response & { next: Paginator<operations.AssetsListAssets1Response> }) | null = res;

    while (currentPage !== null && equityPages < maxPages) {
      equityPages++;

      if (currentPage.listAssetsResponse?.assets) {
        const currentCount = currentPage.listAssetsResponse?.assets?.length || 0;
        equityAssets += currentCount;
        console.log(`Symbol filter - Page ${equityPages}: ${currentCount} assets`);

        // Verify all returned assets match the filter (if any)
        for (const asset of currentPage.listAssetsResponse?.assets || []) {
          if (asset.symbol !== undefined && asset.symbol !== null) {
            expect(asset.symbol).toBe("WTG");
          }
        }
      }

      currentPage = await currentPage.next();
    }

    console.log(`Filter test completed. Symbol assets found: ${equityAssets} across ${equityPages} pages`);
  });

  test("test pagination with usable filter", async () => {
    // Test pagination with usable filtering
    const s = sdk;
    expect(s).toBeDefined();

    // Test with a usable filter
    const activeFilter = 'usable == true';
    const res = await s.assets.listAssets(undefined, undefined, undefined, activeFilter);

    expect(res.httpMeta.response.status).toBe(200);
    expect(res.listAssetsResponse).toBeDefined();

    let pageCount = 0;
    let totalActiveAssets = 0;
    const maxPages = 3;
    let currentPage: (operations.AssetsListAssets1Response & { next: Paginator<operations.AssetsListAssets1Response> }) | null = res;

    while (currentPage !== null && pageCount < maxPages) {
      pageCount++;

      if (currentPage.listAssetsResponse?.assets) {
        const pageAssets = currentPage.listAssetsResponse?.assets?.length || 0;
        totalActiveAssets += pageAssets;
        console.log(`Usable filter - Page ${pageCount}: ${pageAssets} assets`);

        // Verify all returned assets match the filter
        for (const asset of currentPage.listAssetsResponse?.assets || []) {
          if (asset.usable !== undefined && asset.usable !== null) {
            expect(asset.usable).toBe(true);
          }
        }
      }

      currentPage = await currentPage.next();
    }

    console.log(`Status filter test completed. Active assets: ${totalActiveAssets} across ${pageCount} pages`);
  });

  test("test complex filter pagination", async () => {
    // Test pagination with complex filter expressions
    const s = sdk;
    expect(s).toBeDefined();

    // Test with a complex filter combining multiple conditions
    const complexFilter = 'type == "EQUITY" && usable == true';
    const res = await s.assets.listAssets(undefined, undefined, undefined, complexFilter);

    expect(res.httpMeta.response.status).toBe(200);
    expect(res.listAssetsResponse).toBeDefined();

    let pageCount = 0;
    let matchingAssets = 0;
    const maxPages = 3;
    let currentPage: (operations.AssetsListAssets1Response & { next: Paginator<operations.AssetsListAssets1Response> }) | null = res;

    while (currentPage !== null && pageCount < maxPages) {
      pageCount++;

      if (currentPage.listAssetsResponse?.assets) {
        const pageAssets = currentPage.listAssetsResponse?.assets?.length || 0;
        matchingAssets += pageAssets;
        console.log(`Complex filter - Page ${pageCount}: ${pageAssets} assets`);

        // Verify assets match both conditions
        for (const asset of currentPage.listAssetsResponse?.assets || []) {
          if (asset.type !== undefined && asset.type !== null) {
            expect(asset.type).toBe("EQUITY");
          }
          if (asset.usable !== undefined && asset.usable !== null) {
            expect(asset.usable).toBe(true);
          }
        }
      }

      currentPage = await currentPage.next();
    }

    console.log(`Complex filter test completed. Matching assets: ${matchingAssets} across ${pageCount} pages`);
  });
});
