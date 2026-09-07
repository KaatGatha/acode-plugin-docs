import { describe, expect, it } from "vitest";
import config from "./config.mts";

describe("VitePress Config", () => {
	it("should have the correct base url", () => {
		expect(config.base).toBe("/");
	});

	it("should have cleanUrls enabled", () => {
		expect(config.cleanUrls).toBe(true);
	});

	it("should have the correct title in root locale", () => {
		expect(config.locales?.root?.title).toBe("Acode Docs");
	});

	it("should have themeConfig defined with correct search provider", () => {
		expect(config.themeConfig).toBeDefined();
		expect(config.themeConfig?.search?.provider).toBe("local");
	});

	it("should have socialLinks defined in themeConfig", () => {
		expect(config.themeConfig?.socialLinks).toBeDefined();
		expect(config.themeConfig?.socialLinks?.length).toBeGreaterThan(0);
	});
});
