/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
import { MatchResults } from "@stencil/router";
export namespace Components {
    interface AnnouncementBar {
    }
    interface FooterBar {
    }
    interface HeaderBar {
        "isSearchVisible": boolean;
        "query": string;
        "version"?: string;
    }
    interface IconList {
        "data": any;
        "query": string;
    }
    interface IconSearch {
        "autoFocus": string;
        "query": string;
        "size": string;
    }
    interface IoniconsSite {
    }
    interface LandingPage {
        "data": any;
        "query": string;
    }
    interface NotfoundPage {
    }
    interface ToastBar {
        "selectedIcon"?: {
    name: string,
    icons: string[],
    tags: string[]
  };
        "selectedIconType"?: string;
        "typeSuffix"?: string;
        "version"?: string;
    }
    interface UsagePage {
        "data": any;
        "match"?: MatchResults;
    }
}
declare global {
    interface HTMLAnnouncementBarElement extends Components.AnnouncementBar, HTMLStencilElement {
    }
    var HTMLAnnouncementBarElement: {
        prototype: HTMLAnnouncementBarElement;
        new (): HTMLAnnouncementBarElement;
    };
    interface HTMLFooterBarElement extends Components.FooterBar, HTMLStencilElement {
    }
    var HTMLFooterBarElement: {
        prototype: HTMLFooterBarElement;
        new (): HTMLFooterBarElement;
    };
    interface HTMLHeaderBarElement extends Components.HeaderBar, HTMLStencilElement {
    }
    var HTMLHeaderBarElement: {
        prototype: HTMLHeaderBarElement;
        new (): HTMLHeaderBarElement;
    };
    interface HTMLIconListElement extends Components.IconList, HTMLStencilElement {
    }
    var HTMLIconListElement: {
        prototype: HTMLIconListElement;
        new (): HTMLIconListElement;
    };
    interface HTMLIconSearchElement extends Components.IconSearch, HTMLStencilElement {
    }
    var HTMLIconSearchElement: {
        prototype: HTMLIconSearchElement;
        new (): HTMLIconSearchElement;
    };
    interface HTMLIoniconsSiteElement extends Components.IoniconsSite, HTMLStencilElement {
    }
    var HTMLIoniconsSiteElement: {
        prototype: HTMLIoniconsSiteElement;
        new (): HTMLIoniconsSiteElement;
    };
    interface HTMLLandingPageElement extends Components.LandingPage, HTMLStencilElement {
    }
    var HTMLLandingPageElement: {
        prototype: HTMLLandingPageElement;
        new (): HTMLLandingPageElement;
    };
    interface HTMLNotfoundPageElement extends Components.NotfoundPage, HTMLStencilElement {
    }
    var HTMLNotfoundPageElement: {
        prototype: HTMLNotfoundPageElement;
        new (): HTMLNotfoundPageElement;
    };
    interface HTMLToastBarElement extends Components.ToastBar, HTMLStencilElement {
    }
    var HTMLToastBarElement: {
        prototype: HTMLToastBarElement;
        new (): HTMLToastBarElement;
    };
    interface HTMLUsagePageElement extends Components.UsagePage, HTMLStencilElement {
    }
    var HTMLUsagePageElement: {
        prototype: HTMLUsagePageElement;
        new (): HTMLUsagePageElement;
    };
    interface HTMLElementTagNameMap {
        "announcement-bar": HTMLAnnouncementBarElement;
        "footer-bar": HTMLFooterBarElement;
        "header-bar": HTMLHeaderBarElement;
        "icon-list": HTMLIconListElement;
        "icon-search": HTMLIconSearchElement;
        "ionicons-site": HTMLIoniconsSiteElement;
        "landing-page": HTMLLandingPageElement;
        "notfound-page": HTMLNotfoundPageElement;
        "toast-bar": HTMLToastBarElement;
        "usage-page": HTMLUsagePageElement;
    }
}
declare namespace LocalJSX {
    interface AnnouncementBar {
    }
    interface FooterBar {
    }
    interface HeaderBar {
        "isSearchVisible"?: boolean;
        "onToggleHeaderSearch"?: (event: CustomEvent<any>) => void;
        "query"?: string;
        "version"?: string;
    }
    interface IconList {
        "data"?: any;
        "query"?: string;
    }
    interface IconSearch {
        "autoFocus"?: string;
        "onHasSearched"?: (event: CustomEvent<any>) => void;
        "query"?: string;
        "size"?: string;
    }
    interface IoniconsSite {
    }
    interface LandingPage {
        "data"?: any;
        "query"?: string;
    }
    interface NotfoundPage {
    }
    interface ToastBar {
        "onClearToast"?: (event: CustomEvent<any>) => void;
        "onToggleHeaderSearch"?: (event: CustomEvent<any>) => void;
        "selectedIcon"?: {
    name: string,
    icons: string[],
    tags: string[]
  };
        "selectedIconType"?: string;
        "typeSuffix"?: string;
        "version"?: string;
    }
    interface UsagePage {
        "data"?: any;
        "match"?: MatchResults;
    }
    interface IntrinsicElements {
        "announcement-bar": AnnouncementBar;
        "footer-bar": FooterBar;
        "header-bar": HeaderBar;
        "icon-list": IconList;
        "icon-search": IconSearch;
        "ionicons-site": IoniconsSite;
        "landing-page": LandingPage;
        "notfound-page": NotfoundPage;
        "toast-bar": ToastBar;
        "usage-page": UsagePage;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "announcement-bar": LocalJSX.AnnouncementBar & JSXBase.HTMLAttributes<HTMLAnnouncementBarElement>;
            "footer-bar": LocalJSX.FooterBar & JSXBase.HTMLAttributes<HTMLFooterBarElement>;
            "header-bar": LocalJSX.HeaderBar & JSXBase.HTMLAttributes<HTMLHeaderBarElement>;
            "icon-list": LocalJSX.IconList & JSXBase.HTMLAttributes<HTMLIconListElement>;
            "icon-search": LocalJSX.IconSearch & JSXBase.HTMLAttributes<HTMLIconSearchElement>;
            "ionicons-site": LocalJSX.IoniconsSite & JSXBase.HTMLAttributes<HTMLIoniconsSiteElement>;
            "landing-page": LocalJSX.LandingPage & JSXBase.HTMLAttributes<HTMLLandingPageElement>;
            "notfound-page": LocalJSX.NotfoundPage & JSXBase.HTMLAttributes<HTMLNotfoundPageElement>;
            "toast-bar": LocalJSX.ToastBar & JSXBase.HTMLAttributes<HTMLToastBarElement>;
            "usage-page": LocalJSX.UsagePage & JSXBase.HTMLAttributes<HTMLUsagePageElement>;
        }
    }
}
