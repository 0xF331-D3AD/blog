import React from "react";
import {ErrorMessageBox, ModalMessage, ErrorIcon, ErrorContentWrapper} from "./index.styles";
import {Overlay} from "../Overlay";
import {ModalInfiniteScroll} from "../InfiniteScroll";

type Props = {
    close: () => void,
    message?: string,
}

export const ErrorModal = ({
                               message = '',
                               close = () => {
                               },
                           }: Props) => {

    return (
        <Overlay
            onClick={(e) => {
                if (e.target === e.currentTarget) {
                    close();
                }
            }}
        >
            <ErrorMessageBox>
                <ModalInfiniteScroll>
                    <ErrorContentWrapper>
                        <ErrorIcon />
                        <ModalMessage>
                            {message || 'An error occurred! Please, raise an issue on Github'}
                        </ModalMessage>
                    </ErrorContentWrapper>
                </ModalInfiniteScroll>
            </ErrorMessageBox>
        </Overlay>
    )
}
