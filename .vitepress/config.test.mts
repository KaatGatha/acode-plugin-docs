import { describe, expect, it } from "vitest";
import config from "./config.mts";

describe("VitePress Config", () => {
	it("should have expected basic site properties", () => {
		expect(config.lastUpdated).toBe(true);
		expect(config.cleanUrls).toBe(true);
		expect(config.base).toBe("/");
		expect(config.srcExclude).toContain("Acode/**");
	});

	it("should define root locale correctly", () => {
		expect(config.locales).toBeDefined();
		expect(config.locales?.root).toBeDefined();
		expect(config.locales?.root?.title).toBe("Acode Docs");
		expect(config.locales?.root?.description).toBe(
			"Documentation for new users and developers",
		);
	});

	it("should define themeConfig correctly", () => {
		expect(config.themeConfig).toBeDefined();
		expect(config.themeConfig?.logo).toBe("/acode.png");
		expect(config.themeConfig?.search?.provider).toBe("local");

		expect(config.themeConfig?.socialLinks).toEqual(
			expect.arrayContaining([
				expect.objectContaining({ icon: "github" }),
				expect.objectContaining({ icon: "discord" }),
			]),
		);
	});
});
