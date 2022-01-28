import { LitElement, html } from "lit-element";

import markup from "./header.html.js";
import stylesheet from "./_header.scss";

/**
 * Kyndryl branded L0
 *
 * @slot - This element has a slot
 * @csspart button - The button
 */
export class Header extends LitElement {
    
constructor(){
    super();
  }

  firstUpdated(){
    this.namespace = "Navigation",
    this.mainNavItems = this.shadowRoot.querySelectorAll(".header__desktop-menu .cmp-navigation__item--level-0 > [data-cmp-clickable]"),
    this.mobileNavItems = this.shadowRoot.querySelectorAll(".header__mobile-nav .cmp-navigation__item--level-0 > .cmp-navigation__item-link-sub"),
    this.mainNavDropdownItems = this.shadowRoot.querySelectorAll(".cmp-navigation__item-link-sub"),
    this.mobileTriggerOpen =    this.shadowRoot.querySelectorAll(".header__trigger-menu--open"),
    this.mobileTriggerClose = this.shadowRoot.querySelectorAll(".header__trigger-menu--close"),
    this.header = this.shadowRoot.querySelector(".header"),
    this._init(),
    this._bindEvents()
  }


    
    _init() {
        for (const e of this.mainNavItems) {
            const t = e.nextElementSibling;
            null !== t && (t.setAttribute("aria-hidden", "true"),
            this.changeIndex(t, -1))
        }
    }

    _bindEvents() {

       document.addEventListener("keydown", e=>{
            "Escape" === e.code && this.closeAllMenu()
        }
        );
        window.addEventListener("click", e=>{
            if(!e.composedPath().includes(this)) {
                this.closeAllMenu();
            }
        }
        );

        for (const e of this.mainNavItems) {
            if (e.addEventListener("keydown", this.toggleMenu.bind(this)),
            e.classList.contains("cmp-navigation__item-link-sub")) {
                const t = e.parentNode.querySelectorAll(".cmp-navigation__group .cmp-navigation__item");
                t[t.length - 1].addEventListener("keydown", t=>{
                    "Tab" === t.code && this.closeMenu(e)
                }
                )
            } else
                e.addEventListener("focus", this.closeAllMenu.bind(this));
                e.parentNode.addEventListener("click", ()=>{
                    e.classList.contains("cmp-navigation__item-link--active") ? this.closeMenu(e) : (this.closeAllMenu(),
                    this.openMenu(e))
                }
            )
        }
        for (const e of this.mobileNavItems)
            e.addEventListener("click", t=>{
                t.preventDefault();
                t.target.classList.contains("cmp-navigation__item-link--active") ? this.closeMenu(e) : this.openMenu(e)
            }
            );
        for (const e of this.mainNavDropdownItems)
            e.addEventListener("click", e=>(e.preventDefault(),!1));

        this.mobileTriggerOpen[0].addEventListener("click", e=>{
            e.preventDefault(),
            this.header.classList.add("header__mobile-nav--opened")
        }
        ),
        this.mobileTriggerClose[0].addEventListener("click", e=>{
            e.preventDefault(),
            this.header.classList.remove("header__mobile-nav--opened")
        }
        )
    }


    toggleMenu(e) {
        if ("Space" === e.code) {
            e.preventDefault();
            const t = e.target;
            t.classList.contains("cmp-navigation__item-link--active") ? this.closeMenu(t) : this.openMenu(t)
        }
    }

    openMenu(e) {
        const t = e.nextElementSibling;
        if (e.classList.add("cmp-navigation__item-link--active"),
        null !== t) {
            const e = t.querySelector(".cmp-navigation__group-wrapper");
            t.addEventListener("transitionend", this.animationEnd),
            t.setAttribute("aria-hidden", "false"),
            this.changeIndex(t, 0),
            t.style.height = e.offsetHeight + "px"
        }
    }

    closeMenu(e) {
        const t = e.nextElementSibling;
        if (e.classList.remove("cmp-navigation__item-link--active"),
        null !== t) {
            const e = t.querySelector(".cmp-navigation__group-wrapper");
            t.style.height = e.offsetHeight + "px",
            t.removeEventListener("transitionend", this.animationEnd),
            setTimeout(()=>{
                t.style.height = "0",
                t.setAttribute("aria-hidden", "true"),
                this.changeIndex(t, -1)
            }
            , 100)
        }
    }

    closeAllMenu() {
        const e = this.shadowRoot.querySelectorAll(".cmp-navigation__item-link--active");
        if (e.length)
            for (const t of e)
                this.closeMenu(t)
    }

    changeIndex(e, t) {
        const i = e.querySelectorAll("a");
        for (const e of i)
            e.tabIndex = t
    }

    animationEnd(e) {
        e.target.style.height = "auto"
    }
                
  static get styles() {
    return [stylesheet];
  }
  render() {
    return markup;
  }
}

customElements.define(`kyndryl-header`, Header);
