import React from 'react'
import { Link } from "react-router-dom";
import "./Navber.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse, faFilePen, faArrowRightToBracket } from '@fortawesome/free-solid-svg-icons'



const Navber = ({ isAuth }) => {
    return (
        <nav>
            <Link to="/">
                <FontAwesomeIcon icon={faHouse} />
                ホーム
            </Link>
            <Link to="/createpost">
                <FontAwesomeIcon icon={faFilePen} />
                記事投稿
            </Link>
            {/* isAuthの値をキーにしてログイン、ログアウトのボタンを切り替える。 */}
            {!isAuth ? (
                <Link to="/login">
                    <FontAwesomeIcon icon={faArrowRightToBracket} />
                    ログイン
                </Link>
            ) : (
                <Link to="/logout">
                    <FontAwesomeIcon icon={faArrowRightToBracket} />
                    ログアウト
                </Link>
            )}
        </nav>
    );
};

export default Navber