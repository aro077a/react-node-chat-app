import React from "react";
import PropTypes from "prop-types";
import formatDistanceToNow from "date-fns/formatDistanceToNow";
import ruLocale from "date-fns/locale/ru";
import classNames from "classnames";
import checkedSvg from "assets/img/checked.svg";
import noReadedSvg from "assets/img/noreaded.svg";

import "./Message.scss";

const Message = ({ avatar, user, text, date, isMe, isReaded, attachments }) => {
  return (
    <div className={classNames("message", { "message--isme": isMe })}>
      <div className="message__content">
        {isMe && isReaded ? (
          <img
            className="message__icon-readed"
            src={checkedSvg}
            alt="Readed-icon"
          />
        ) : (
          <img
            className="message__icon-readed message__icon-readed--no"
            src={noReadedSvg}
            alt="No-readed-icon"
          />
        )}
        <div className="message__avatar">
          <img src={avatar} alt={`Avatar ${user.fullname}`} />
        </div>
        <div className="message_info">
          <div>
            <div className="message__bubble">
              <p className="message__text">{text}</p>
            </div>
            <div className="message__attachments">
              {attachments &&
                attachments.map((item, key) => (
                  <div className="message__attachments-items" key={key}>
                    <img src={item.url} alt={item.filename} />
                  </div>
                ))}
            </div>
            <span className="message__date">
              {formatDistanceToNow(new Date(date), {
                addSuffix: true,
                locale: ruLocale
              })}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
Message.defaultProps = {
  user: {}
};

Message.propTypes = {
  avatar: PropTypes.string,
  text: PropTypes.string,
  date: PropTypes.string,
  user: PropTypes.object,
  attachments: PropTypes.array
};

export default Message;
