import React from "react";
import {
  FacebookShareButton,
  TwitterShareButton,
  FacebookIcon,
  TwitterIcon,
  LineShareButton,
  LineIcon,
} from "react-share";

const URL = "https://cocolify.web.app/";
const QUOTE = "Cocolify　人を支援につなげるアプリ";

const SNSButton = () => {
  return (
    <div>
      <p style={{ fontSize: "14px" }}>ほかのひとにアプリを共有する</p>
      <TwitterShareButton url={URL} title={QUOTE}>
        <TwitterIcon size={24} round />
      </TwitterShareButton>
      <FacebookShareButton url={URL} title={QUOTE}>
        <FacebookIcon size={24} round />
      </FacebookShareButton>
      <LineShareButton url={URL} title={QUOTE}>
        <LineIcon size={24} round />
      </LineShareButton>
    </div>
  );
};

export default SNSButton;
