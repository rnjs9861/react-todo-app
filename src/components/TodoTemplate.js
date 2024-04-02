import React from "react";
import "../styles/TodoTemplate.scss"

const TodoTemplate = ({children}) => {
    return (
        <div className="TodoTemplate">
            <div className="app-title">일정관리</div>
            <div className="content">{children}</div>
        </div>
    );
};
//한줄이면 return <> 하면 되는데 두 줄 이상일시 ()필수
export default TodoTemplate;