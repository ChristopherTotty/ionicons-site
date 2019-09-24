/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */


import { HTMLStencilElement, JSXBase } from '@stencil/core/internal';
import {
  MatchResults,
} from '@stencil/router';

export namespace Components {
  interface FooterBar {}
  interface HeaderBar {
    'isSearchVisible': boolean;
    'query': string;
    'version'?: string;
  }
  interface IconList {
    'data': any;
    'query': string;
  }
  interface IconSearch {
    'autofocus': string;
    'query': string;
    'size': string;
  }
  interface IoniconsSite {}
  interface LandingPage {
    'data': any;
    'query': string;
  }
  interface NotfoundPage {}
  interface ToastBar {
    'selectedIcon'?: {
      name: string,
      icons: string[],
      tags: string[]
    };
    'selectedIconType'?: string;
    'typeSuffix'?: string;
    'version'?: string;
  }
  interface UsagePage {
    'data': any;
    'match'?: MatchResults;
  }
}

declare global {


  interface HTMLFooterBarElement extends Components.FooterBar, HTMLStencilElement {}
  var HTMLFooterBarElement: {
    prototype: HTMLFooterBarElement;
    new (): HTMLFooterBarElement;
  };

  interface HTMLHeaderBarElement extends Components.HeaderBar, HTMLStencilElement {}
  var HTMLHeaderBarElement: {
    prototype: HTMLHeaderBarElement;
    new (): HTMLHeaderBarElement;
  };

  interface HTMLIconListElement extends Components.IconList, HTMLStencilElement {}
  var HTMLIconListElement: {
    prototype: HTMLIconListElement;
    new (): HTMLIconListElement;
  };

  interface HTMLIconSearchElement extends Components.IconSearch, HTMLStencilElement {}
  var HTMLIconSearchElement: {
    prototype: HTMLIconSearchElement;
    new (): HTMLIconSearchElement;
  };

  interface HTMLIoniconsSiteElement extends Components.IoniconsSite, HTMLStencilElement {}
  var HTMLIoniconsSiteElement: {
    prototype: HTMLIoniconsSiteElement;
    new (): HTMLIoniconsSiteElement;
  };

  interface HTMLLandingPageElement extends Components.LandingPage, HTMLStencilElement {}
  var HTMLLandingPageElement: {
    prototype: HTMLLandingPageElement;
    new (): HTMLLandingPageElement;
  };

  interface HTMLNotfoundPageElement extends Components.NotfoundPage, HTMLStencilElement {}
  var HTMLNotfoundPageElement: {
    prototype: HTMLNotfoundPageElement;
    new (): HTMLNotfoundPageElement;
  };

  interface HTMLToastBarElement extends Components.ToastBar, HTMLStencilElement {}
  var HTMLToastBarElement: {
    prototype: HTMLToastBarElement;
    new (): HTMLToastBarElement;
  };

  interface HTMLUsagePageElement extends Components.UsagePage, HTMLStencilElement {}
  var HTMLUsagePageElement: {
    prototype: HTMLUsagePageElement;
    new (): HTMLUsagePageElement;
  };
  interface HTMLElementTagNameMap {
    'footer-bar': HTMLFooterBarElement;
    'header-bar': HTMLHeaderBarElement;
    'icon-list': HTMLIconListElement;
    'icon-search': HTMLIconSearchElement;
    'ionicons-site': HTMLIoniconsSiteElement;
    'landing-page': HTMLLandingPageElement;
    'notfound-page': HTMLNotfoundPageElement;
    'toast-bar': HTMLToastBarElement;
    'usage-page': HTMLUsagePageElement;
  }
}

declare namespace LocalJSX {
  interface FooterBar extends JSXBase.HTMLAttributes<HTMLFooterBarElement> {}
  interface HeaderBar extends JSXBase.HTMLAttributes<HTMLHeaderBarElement> {
    'isSearchVisible'?: boolean;
    'onToggleHeaderSearch'?: (event: CustomEvent<any>) => void;
    'query'?: string;
    'version'?: string;
  }
  interface IconList extends JSXBase.HTMLAttributes<HTMLIconListElement> {
    'data'?: any;
    'query'?: string;
  }
  interface IconSearch extends JSXBase.HTMLAttributes<HTMLIconSearchElement> {
    'autofocus'?: string;
    'onHasSearched'?: (event: CustomEvent<any>) => void;
    'query'?: string;
    'size'?: string;
  }
  interface IoniconsSite extends JSXBase.HTMLAttributes<HTMLIoniconsSiteElement> {}
  interface LandingPage extends JSXBase.HTMLAttributes<HTMLLandingPageElement> {
    'data'?: any;
    'query'?: string;
  }
  interface NotfoundPage extends JSXBase.HTMLAttributes<HTMLNotfoundPageElement> {}
  interface ToastBar extends JSXBase.HTMLAttributes<HTMLToastBarElement> {
    'onClearToast'?: (event: CustomEvent<any>) => void;
    'onToggleHeaderSearch'?: (event: CustomEvent<any>) => void;
    'selectedIcon'?: {
      name: string,
      icons: string[],
      tags: string[]
    };
    'selectedIconType'?: string;
    'typeSuffix'?: string;
    'version'?: string;
  }
  interface UsagePage extends JSXBase.HTMLAttributes<HTMLUsagePageElement> {
    'data'?: any;
    'match'?: MatchResults;
  }

  interface IntrinsicElements {
    'footer-bar': FooterBar;
    'header-bar': HeaderBar;
    'icon-list': IconList;
    'icon-search': IconSearch;
    'ionicons-site': IoniconsSite;
    'landing-page': LandingPage;
    'notfound-page': NotfoundPage;
    'toast-bar': ToastBar;
    'usage-page': UsagePage;
  }
}

export { LocalJSX as JSX };


declare module "@stencil/core" {
  export namespace JSX {
    interface IntrinsicElements extends LocalJSX.IntrinsicElements {}
  }
}


