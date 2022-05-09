import React from "react";
import { useLocation } from "react-router-dom";
import PropTypes from "prop-types";

function TabRoutes({ children }) {
  const location = useLocation();
  const search = location.search.split("t=");
  const selectedTab = location.search.split("t=")[search.length - 1];

  return React.Children.map(children, (child) => {
    if (child.type != TabRoute) {
      throw "TabRoutes cannot have children that aren't TabRoute components";
    }

    if (child.props.query === selectedTab) {
      return child.props.element;
    }
  });
}

function TabRoute({ element }) {
  return element;
}

TabRoute.propTypes = {
  element: PropTypes.element,
  query: PropTypes.string,
};

TabRoutes.Route = TabRoute;

export default TabRoutes;
