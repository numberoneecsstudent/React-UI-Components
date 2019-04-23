import React from 'react';
import './Header.css';
import HeaderContent from './HeaderContent';
import HeaderTitle from './HeaderTitle';
import ImageThumbnail from './ImageThumbnail';

function HeaderContainer() {
    return (
        <div class = "headContainer">

            <div class = "row">
            <ImageThumbnail imgSrc="#"/>
            <HeaderTitle />
            </div>

        <HeaderContent />
        </div>
    );
}
export default HeaderContainer;