import React from "react";
import "./react-sliding-pane.css";
declare type Props = {
    isOpen: boolean;
    title?: string;
    subtitle?: string;
    from?: "left" | "right" | "bottom";
    children: React.ReactNode;
    className?: string;
    overlayClassName?: string;
    width?: string;
    closeIcon?: React.ReactNode;
    shouldCloseOnEsc?: boolean;
    hideHeader?: boolean;
    onRequestClose: () => void;
    onAfterOpen?: () => void;
};
export declare function ReactSlidingPane({ isOpen, title, subtitle, onRequestClose, onAfterOpen, children, className, overlayClassName, closeIcon, from, width, shouldCloseOnEsc, hideHeader, }: Props): JSX.Element;
export default ReactSlidingPane;
