import React, { useRef, useEffect } from "react";
import { useDispatch } from "react-redux";
import { setIsCartOpen } from "../../store/cart/cart.action";
import { ClickOutside } from "./hide-cart-click-outside.styles";
import CartIcon from "../cart-icon/cart-icon.component";

/**
 * Hook that alerts clicks outside of the passed ref
 */
function useOutsideAlerter(ref) {
    const dispatch = useDispatch();
    useEffect(() => {
        /**
         * Alert if clicked on outside of element
         */
        function handleClickOutside(event) {
        if (ref.current && !ref.current.contains(event.target)) {
            dispatch(setIsCartOpen(false));
        }
        }
        // Bind the event listener
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
        // Unbind the event listener on clean up
        document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [ref]);
    }

/**
 * Component that alerts if you click outside of it
 */
export default function OutsideClickHideCart(props) {
const wrapperRef = useRef(CartIcon);
useOutsideAlerter(wrapperRef);

return <ClickOutside ref={wrapperRef} className="clickOutside">{props.children}</ClickOutside>;
}