import { Fragment } from "react";
import { Outlet } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { ReactComponent as CrwnLogo } from "../../assets/crown.svg";
import CartIcon from "../../components/cart-icon/cart-icon.component";
import CartDropdown from "../../components/cart-dropdown/cart-dropdown.component";
import OutsideClickHideCart from "../../components/hide-cart-click-outside/hide-cart-click-outside.component";
import { selectCurrentUser } from "../../store/user/user.selector";
import { selectIsCartOpen } from '../../store/cart/cart.selector';
import { signOutStart } from "../../store/user/user.action";

import { NavigationContainer, LogoContainer, NavLink, NavLinks } from './navigation.styles';

const Navigation = () => {
  const dispatch = useDispatch();
    const currentUser = useSelector(selectCurrentUser);
    const isCartOpen = useSelector(selectIsCartOpen);
    
    const signOutUser = () => dispatch(signOutStart());
    // console.log(currentUser);
    return (
      <Fragment>
        <NavigationContainer>
          <LogoContainer to='/'>
            <CrwnLogo className="logo"/>
          </LogoContainer>
          <NavLinks>
            <NavLink to='/shop'>
                SHOP
            </NavLink>
            {
              currentUser ? (
                <NavLink as='span' onClick={signOutUser}>SIGN OUT</NavLink>
                ) : (
                <NavLink to='/auth'>
                  SIGN IN
                </NavLink>
              )
            }
            <CartIcon />
          </NavLinks>
            {isCartOpen && <OutsideClickHideCart><CartDropdown /></OutsideClickHideCart>}
        </NavigationContainer>
        <Outlet />
      </Fragment>
    );
  }

export default Navigation;