import { describe, expect, it, vi } from "vitest";

vi.mock("vitepress/theme", () => ({
	default: {
		Layout: "MockedLayout",
	},
}));

vi.mock("./style.css", () => ({}));

import { h } from "vue";

vi.mock("vue", () => ({
	h: vi.fn(),
}));

import Theme from "vitepress/theme";
import theme from "./index";

describe("Theme Configuration", () => {
	it("should have expected properties", () => {
		expect(theme.extends).toBe(Theme);
		expect(typeof theme.Layout).toBe("function");
		expect(typeof theme.enhanceApp).toBe("function");
	});

	it("Layout should return h(Theme.Layout)", () => {
		theme.Layout();
		expect(h).toHaveBeenCalledWith(Theme.Layout, null, expect.any(Object));
	});
});
