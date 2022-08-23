import React from "react";
import {ErrorContentWrapper, ErrorIcon, ErrorMessageBox, ErrorScrollContentWrapper, ModalMessage} from "./index.styles";
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
                <ErrorContentWrapper>
                    <ModalInfiniteScroll>
                        <ErrorScrollContentWrapper>
                            <ErrorIcon/>
                            <ModalMessage>
                                {message || 'An error occurred! Please, raise an issue on Github'}
                            </ModalMessage>
                        </ErrorScrollContentWrapper>
                    </ModalInfiniteScroll>
                </ErrorContentWrapper>
            </ErrorMessageBox>
        </Overlay>
    )
}
